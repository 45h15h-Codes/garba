// Baking: every mesh in a venue that never moves is merged into as few meshes as possible. A stage built from a
// hundred boxes becomes a handful of draws. Meshes that move (or whose parent moves) are marked userData.dynamic and
// left alone.
//
// Two kinds of merge:
//   - plain surfaces (a single colour, no texture, no glow, opaque): their colour is written into the vertices, and
//     every plain surface with the same finish (roughness, metalness, sides, shading) shares one vertex-coloured
//     material, so a stall's twenty differently coloured parts are one draw;
//   - everything else merges per material, which stays shared, so a material animated per frame (a lamp's glow, an
//     LED strip, a surface lit by its layer) still animates once baked.

import * as THREE from 'three';

const ATTRS = ['position', 'normal', 'uv', 'color'];

function movable(o, root) {
  for (let p = o; p && p !== root; p = p.parent) if (p.userData.dynamic) return true;
  return false;
}
const q = (v, step) => Math.round(v / step) * step;
// A plain surface: its colour can move into its vertices
function plain(mat, animated) {
  return mat.isMeshStandardMaterial && !mat.wireframe && !animated.has(mat) && !mat.map && !mat.emissiveMap && !mat.normalMap && !mat.alphaMap && !mat.transparent && mat.emissive.getHex() === 0 && mat.opacity === 1;
}
// Finishes are bucketed coarsely (matte, satin, glossy; bare or metallic): close enough by eye, and far fewer draws
const finishes = new Map();
function finish(mat) {
  const r = Math.min(0.95, Math.max(0.3, q(mat.roughness, 0.2))), m = q(mat.metalness, 0.4), key = r + '|' + m + '|' + mat.side + '|' + !!mat.flatShading;
  if (!finishes.has(key)) finishes.set(key, new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: r, metalness: m, side: mat.side, flatShading: mat.flatShading, vertexColors: true }));
  return finishes.get(key);
}

// animated: materials changed per frame (the kit's lit surfaces), which keep their own draws
export function bake(root, animated = new Set()) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const groups = new Map(), gone = [];
  root.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || o.isSkinnedMesh || !o.geometry || !o.visible || movable(o, root)) return;
    const mat = o.material;
    if (Array.isArray(mat) || mat.isShaderMaterial || mat.transparent) return;
    const g = o.geometry;
    if (!g.attributes.position || !g.attributes.normal) return;
    const flat = plain(mat, animated), target = flat ? finish(mat) : mat;
    const sig = flat ? 'position+normal+color' : ATTRS.filter((a) => g.attributes[a]).join('+');
    const key = target.uuid + '|' + sig + '|' + o.castShadow + o.receiveShadow;
    if (!groups.has(key)) groups.set(key, { mat: target, flat, sig, list: [], cast: o.castShadow, receive: o.receiveShadow, order: o.renderOrder });
    groups.get(key).list.push(o);
  });
  let merged = 0;
  groups.forEach((grp) => {
    if (grp.list.length < 2 && !grp.flat) return;
    const attrs = grp.sig.split('+'), parts = [];
    let count = 0;
    grp.list.forEach((o) => {
      const m = new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld);
      const g = (o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone()).applyMatrix4(m);
      if (grp.flat) {
        // The surface's colour, times any colour its vertices already had
        const c = o.material.color, n = g.attributes.position.count, had = o.material.vertexColors && g.attributes.color, a = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) { a[i * 3] = c.r * (had ? had.getX(i) : 1); a[i * 3 + 1] = c.g * (had ? had.getY(i) : 1); a[i * 3 + 2] = c.b * (had ? had.getZ(i) : 1); }
        g.setAttribute('color', new THREE.BufferAttribute(a, 3));
      }
      // A mirrored mesh (flipped to read the right way round) turns its triangles inside out when baked: turn them back
      if (m.determinant() < 0) attrs.forEach((a) => {
        const at = g.attributes[a], n = at.itemSize, arr = at.array;
        for (let t = 0; t < at.count; t += 3) for (let k = 0; k < n; k++) { const i1 = (t + 1) * n + k, i2 = (t + 2) * n + k, tmp = arr[i1]; arr[i1] = arr[i2]; arr[i2] = tmp; }
      });
      parts.push(g); count += g.attributes.position.count;
      gone.push(o);
    });
    const out = new THREE.BufferGeometry();
    attrs.forEach((a) => {
      const size = parts[0].attributes[a].itemSize, arr = new Float32Array(count * size);
      let off = 0;
      parts.forEach((g) => { arr.set(g.attributes[a].array, off); off += g.attributes[a].array.length; });
      out.setAttribute(a, new THREE.BufferAttribute(arr, size));
    });
    parts.forEach((g) => g.dispose());
    out.computeBoundingSphere();
    const mesh = new THREE.Mesh(out, grp.mat);
    mesh.castShadow = grp.cast; mesh.receiveShadow = grp.receive; mesh.renderOrder = grp.order;
    root.add(mesh);
    merged += grp.list.length;
  });
  gone.forEach((o) => o.parent && o.parent.remove(o));
  return merged;
}
