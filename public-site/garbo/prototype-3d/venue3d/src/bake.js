// Baking: every mesh in a venue that never moves is merged, per material, into one mesh. A stage built from a hundred
// boxes becomes a handful of draws. Meshes that move (or whose parent moves) are marked userData.dynamic and left alone;
// materials stay shared, so a material animated per frame (a lamp's glow, an LED strip) still animates once baked.

import * as THREE from 'three';

const ATTRS = ['position', 'normal', 'uv', 'color'];

function movable(o, root) {
  for (let p = o; p && p !== root; p = p.parent) if (p.userData.dynamic) return true;
  return false;
}

export function bake(root) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const groups = new Map(), gone = [];
  root.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || o.isSkinnedMesh || !o.geometry || !o.visible || movable(o, root)) return;
    const mat = o.material;
    if (Array.isArray(mat) || mat.isShaderMaterial || mat.transparent) return;
    const g = o.geometry, sig = ATTRS.filter((a) => g.attributes[a]).join('+');
    if (!g.attributes.position || !g.attributes.normal) return;
    const key = mat.uuid + '|' + sig + '|' + o.castShadow + o.receiveShadow;
    if (!groups.has(key)) groups.set(key, { mat, sig, list: [], cast: o.castShadow, receive: o.receiveShadow, order: o.renderOrder });
    groups.get(key).list.push(o);
  });
  let merged = 0;
  groups.forEach((grp) => {
    if (grp.list.length < 2) return;
    const attrs = grp.sig.split('+'), parts = [];
    let count = 0;
    grp.list.forEach((o) => {
      const m = new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld);
      const g = (o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone()).applyMatrix4(m);
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
