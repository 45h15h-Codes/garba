/* PlayGarba 3D venues (source: venue3d/src). Bundles three.js r186 (MIT, (c) 2010-2025 three.js authors). */
(()=>{var hu=0,dc=1,uu=2;var Tr=1,oo=2,Is=3,Ti=0,sn=1,rt=2,wn=0,Ls=1,$n=2,pc=3,mc=4,fu=5;var Wi=100,du=101,pu=102,mu=103,gu=104,xu=200,_u=201,yu=202,vu=203,gc=204,xc=205,Mu=206,bu=207,Su=208,Eu=209,Tu=210,wu=211,Au=212,Ru=213,Cu=214,Ra=0,Ca=1,Pa=2,ys=3,Ia=4,La=5,Da=6,Na=7,lo=0,Pu=1,Iu=2,Bn=0,wr=1,Ar=2,Rr=3,Xi=4,Cr=5,Pr=6,Ir=7;var _c=300,wi=301,qi=302,co=303,ho=304,Lr=306,fn=1e3,Xn=1001,Ua=1002,Qt=1003,Lu=1004;var Dr=1005;var tn=1006,uo=1007;var Ai=1008;var mn=1009,yc=1010,vc=1011,Ds=1012,fo=1013,On=1014,An=1015,qt=1016,po=1017,mo=1018,Ns=1020,Mc=35902,bc=35899,Sc=1021,Ec=1022,Rn=1023,qn=1026,Ri=1027,go=1028,xo=1029,Ci=1030,_o=1031;var yo=1033,Nr=33776,Ur=33777,Fr=33778,Br=33779,vo=35840,Mo=35841,bo=35842,So=35843,Eo=36196,To=37492,wo=37496,Ao=37488,Ro=37489,Or=37490,Co=37491,Po=37808,Io=37809,Lo=37810,Do=37811,No=37812,Uo=37813,Fo=37814,Bo=37815,Oo=37816,Ho=37817,zo=37818,ko=37819,Go=37820,Vo=37821,Wo=36492,Xo=36494,qo=36495,Yo=36283,Zo=36284,Hr=36285,Jo=36286;var Qs=2300,Fa=2301,wa=2302,ic=2303,sc=2400,rc=2401,ac=2402;var Du=3200;var zr=0,Nu=1,vn="",Xt="srgb",js="srgb-linear",er="linear",ht="srgb";var Aa=7680;var Uu=519,Fu=512,Bu=513,Ou=514,$o=515,Hu=516,zu=517,Ko=518,ku=519,Tc=35044;var wc="300 es",Fn=2e3,vs=2001;function pd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function md(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gu(){let i=tr("canvas");return i.style.display="block",i}var Dh={},Ms=null;function nr(...i){let e="THREE."+i.shift();Ms?Ms("log",e,...i):console.log(e,...i)}function Vu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ke(...i){i=Vu(i);let e="THREE."+i.shift();if(Ms)Ms("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ve(...i){i=Vu(i);let e="THREE."+i.shift();if(Ms)Ms("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ki(...i){let e=i.join(" ");e in Dh||(Dh[e]=!0,ke(...i))}function Wu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Xu={[Ra]:Ca,[Pa]:Da,[Ia]:Na,[ys]:La,[Ca]:Ra,[Da]:Pa,[Na]:Ia,[La]:ys},Yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ll=Math.PI/180,ir=180/Math.PI;function yi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function gd(i,e){return(i%e+e)%e}function Dl(i,e,t){return(1-t)*i+t*e}function Wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ic=class Ic{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ic.prototype.isVector2=!0;var fe=Ic,Rt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],p=r[a+2],_=r[a+3];if(f!==_||l!==u||c!==d||h!==p){let g=l*u+c*d+h*p+f*_;g<0&&(u=-u,d=-d,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){let y=Math.acos(g),b=Math.sin(y);m=Math.sin(m*y)/b,o=Math.sin(o*y)/b,l=l*m+u*o,c=c*m+d*o,h=h*m+p*o,f=f*m+_*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+p*o,f=f*m+_*o;let y=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=y,c*=y,h*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+h*f+l*d-c*u,e[t+1]=l*p+h*u+c*f-o*d,e[t+2]=c*p+h*d+o*u-l*f,e[t+3]=h*p-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Lc=class Lc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nl.copy(this).projectOnVector(e),this.sub(Nl)}reflect(e){return this.sub(Nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lc.prototype.isVector3=!0;var F=Lc,Nl=new F,Nh=new Rt,Dc=class Dc{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],_=s[0],g=s[3],m=s[6],y=s[1],b=s[4],v=s[7],S=s[2],w=s[5],E=s[8];return r[0]=a*_+o*y+l*S,r[3]=a*g+o*b+l*w,r[6]=a*m+o*v+l*E,r[1]=c*_+h*y+f*S,r[4]=c*g+h*b+f*w,r[7]=c*m+h*v+f*E,r[2]=u*_+d*y+p*S,r[5]=u*g+d*b+p*w,r[8]=u*m+d*v+p*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,p=t*f+n*u+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=f*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ki("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ul.makeScale(e,t)),this}rotate(e){return ki("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ul.makeRotation(-e)),this}translate(e,t){return ki("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Dc.prototype.isMatrix3=!0;var Ye=Dc,Ul=new Ye,Uh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xd(){let i={enabled:!0,workingColorSpace:js,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ht&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vn?er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ki("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ki("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[js]:{primaries:e,whitePoint:n,transfer:er,toXYZ:Uh,fromXYZ:Fh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Uh,fromXYZ:Fh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}var it=xd();function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var es,Ba=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{es===void 0&&(es=tr("canvas")),es.width=e.width,es.height=e.height;let s=es.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=es}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=tr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_d=0,bs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fl(s[a].image)):r.push(Fl(s[a]))}else r=Fl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Fl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var yd=0,Bl=new F,dn=class i extends Yn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Xn,s=Xn,r=tn,a=Ai,o=Rn,l=mn,c=i.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=yi(),this.name="",this.source=new bs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bl).x}get height(){return this.source.getSize(Bl).y}get depth(){return this.source.getSize(Bl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fn:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fn:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=_c;dn.DEFAULT_ANISOTROPY=1;var Nc=class Nc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,v=(d+1)/2,S=(m+1)/2,w=(h+u)/4,E=(f+_)/4,x=(p+g)/4;return b>v&&b>S?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=E/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=x/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=E/r,s=x/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(f-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nc.prototype.isVector4=!0;var It=Nc,Oa=class extends Yn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new dn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new bs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ut=class extends Oa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},sr=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ha=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ao=class ao{constructor(e,t,n,s,r,a,o,l,c,h,f,u,d,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,d,p,_,g)}set(e,t,n,s,r,a,o,l,c,h,f,u,d,p,_,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ao().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),a=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,p=o*h,_=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,p=c*h,_=c*f;t[0]=u+_*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,p=c*h,_=c*f;t[0]=u-_*o,t[4]=-a*f,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*f,p=o*h,_=o*f;t[0]=l*h,t[4]=p*c-d,t[8]=u*c+_,t[1]=l*f,t[5]=_*c+u,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-u*f,t[8]=p*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+p,t[10]=u-_*f}else if(e.order==="XZY"){let u=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+_,t[5]=a*h,t[9]=d*f-p,t[2]=p*f-d,t[6]=o*h,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vd,e,Md)}lookAt(e,t,n){let s=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),pi.crossVectors(n,gn),pi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),pi.crossVectors(n,gn)),pi.normalize(),jr.crossVectors(gn,pi),s[0]=pi.x,s[4]=jr.x,s[8]=gn.x,s[1]=pi.y,s[5]=jr.y,s[9]=gn.y,s[2]=pi.z,s[6]=jr.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],y=n[3],b=n[7],v=n[11],S=n[15],w=s[0],E=s[4],x=s[8],A=s[12],I=s[1],R=s[5],P=s[9],L=s[13],C=s[2],U=s[6],z=s[10],N=s[14],W=s[3],B=s[7],k=s[11],q=s[15];return r[0]=a*w+o*I+l*C+c*W,r[4]=a*E+o*R+l*U+c*B,r[8]=a*x+o*P+l*z+c*k,r[12]=a*A+o*L+l*N+c*q,r[1]=h*w+f*I+u*C+d*W,r[5]=h*E+f*R+u*U+d*B,r[9]=h*x+f*P+u*z+d*k,r[13]=h*A+f*L+u*N+d*q,r[2]=p*w+_*I+g*C+m*W,r[6]=p*E+_*R+g*U+m*B,r[10]=p*x+_*P+g*z+m*k,r[14]=p*A+_*L+g*N+m*q,r[3]=y*w+b*I+v*C+S*W,r[7]=y*E+b*R+v*U+S*B,r[11]=y*x+b*P+v*z+S*k,r[15]=y*A+b*L+v*N+S*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],p=e[3],_=e[7],g=e[11],m=e[15],y=l*d-c*u,b=o*d-c*f,v=o*u-l*f,S=a*d-c*h,w=a*u-l*h,E=a*f-o*h;return t*(_*y-g*b+m*v)-n*(p*y-g*S+m*w)+s*(p*b-_*S+m*E)-r*(p*v-_*w+g*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],p=e[12],_=e[13],g=e[14],m=e[15],y=t*o-n*a,b=t*l-s*a,v=t*c-r*a,S=n*l-s*o,w=n*c-r*o,E=s*c-r*l,x=h*_-f*p,A=h*g-u*p,I=h*m-d*p,R=f*g-u*_,P=f*m-d*_,L=u*m-d*g,C=y*L-b*P+v*R+S*I-w*A+E*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return e[0]=(o*L-l*P+c*R)*U,e[1]=(s*P-n*L-r*R)*U,e[2]=(_*E-g*w+m*S)*U,e[3]=(u*w-f*E-d*S)*U,e[4]=(l*I-a*L-c*A)*U,e[5]=(t*L-s*I+r*A)*U,e[6]=(g*v-p*E-m*b)*U,e[7]=(h*E-u*v+d*b)*U,e[8]=(a*P-o*I+c*x)*U,e[9]=(n*I-t*P-r*x)*U,e[10]=(p*w-_*v+m*y)*U,e[11]=(f*v-h*w-d*y)*U,e[12]=(o*A-a*R-l*x)*U,e[13]=(t*R-n*A+s*x)*U,e[14]=(_*b-p*S-g*y)*U,e[15]=(h*S-f*b+u*y)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,p=r*f,_=a*h,g=a*f,m=o*f,y=l*c,b=l*h,v=l*f,S=n.x,w=n.y,E=n.z;return s[0]=(1-(_+m))*S,s[1]=(d+v)*S,s[2]=(p-b)*S,s[3]=0,s[4]=(d-v)*w,s[5]=(1-(u+m))*w,s[6]=(g+y)*w,s[7]=0,s[8]=(p+b)*E,s[9]=(g-y)*E,s[10]=(1-(u+_))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ts.set(s[0],s[1],s[2]).length(),o=ts.set(s[4],s[5],s[6]).length(),l=ts.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ln.copy(this);let c=1/a,h=1/o,f=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,t.setFromRotationMatrix(Ln),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Fn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===Fn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===vs)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Fn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===Fn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===vs)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ao.prototype.isMatrix4=!0;var De=ao,ts=new F,Ln=new De,vd=new F(0,0,0),Md=new F(1,1,1),pi=new F,jr=new F,gn=new F,Bh=new De,Oh=new Rt,Nt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nt.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bd=0,Hh=new F,ns=new Rt,ei=new De,ea=new F,Gs=new F,Sd=new F,Ed=new Rt,zh=new F(1,0,0),kh=new F(0,1,0),Gh=new F(0,0,1),Vh={type:"added"},Td={type:"removed"},is={type:"childadded",child:null},Ol={type:"childremoved",child:null},Ht=class i extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Nt,n=new Rt,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new Ye}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(zh,e)}rotateY(e){return this.rotateOnAxis(kh,e)}rotateZ(e){return this.rotateOnAxis(Gh,e)}translateOnAxis(e,t){return Hh.copy(e).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zh,e)}translateY(e){return this.translateOnAxis(kh,e)}translateZ(e){return this.translateOnAxis(Gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ea.copy(e):ea.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Gs,ea,this.up):ei.lookAt(ea,Gs,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(ei),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vh),is.child=e,this.dispatchEvent(is),is.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Td),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vh),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,Sd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new F(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pt=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},wd={type:"move"},Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},ta={h:0,s:0,l:0};function Hl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=gd(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Hl(a,r,e+1/3),this.g=Hl(a,r,e),this.b=Hl(a,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let n=qu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return it.workingToColorSpace(ln.copy(this),e),Math.round(ot(ln.r*255,0,255))*65536+Math.round(ot(ln.g*255,0,255))*256+Math.round(ot(ln.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(ln.copy(this),t);let n=ln.r,s=ln.g,r=ln.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Xt){it.workingToColorSpace(ln.copy(this),e);let t=ln.r,n=ln.g,s=ln.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(ta);let n=Dl(mi.h,ta.h,t),s=Dl(mi.s,ta.s,t),r=Dl(mi.l,ta.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new ce;ce.NAMES=qu;var Gi=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ar=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nt,this.environmentIntensity=1,this.environmentRotation=new Nt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Dn=new F,ti=new F,zl=new F,ni=new F,ss=new F,rs=new F,Wh=new F,kl=new F,Gl=new F,Vl=new F,Wl=new It,Xl=new It,ql=new It,ri=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Dn.subVectors(e,t),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Dn.subVectors(s,t),ti.subVectors(n,t),zl.subVectors(e,t);let a=Dn.dot(Dn),o=Dn.dot(ti),l=Dn.dot(zl),c=ti.dot(ti),h=ti.dot(zl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Wl.setScalar(0),Xl.setScalar(0),ql.setScalar(0),Wl.fromBufferAttribute(e,t),Xl.fromBufferAttribute(e,n),ql.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Wl,r.x),a.addScaledVector(Xl,r.y),a.addScaledVector(ql,r.z),a}static isFrontFacing(e,t,n,s){return Dn.subVectors(n,t),ti.subVectors(e,t),Dn.cross(ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Dn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ss.subVectors(s,n),rs.subVectors(r,n),kl.subVectors(e,n);let l=ss.dot(kl),c=rs.dot(kl);if(l<=0&&c<=0)return t.copy(n);Gl.subVectors(e,s);let h=ss.dot(Gl),f=rs.dot(Gl);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ss,a);Vl.subVectors(e,r);let d=ss.dot(Vl),p=rs.dot(Vl);if(p>=0&&d<=p)return t.copy(r);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(rs,o);let g=h*p-d*f;if(g<=0&&f-h>=0&&d-p>=0)return Wh.subVectors(r,s),o=(f-h)/(f-h+(d-p)),t.copy(s).addScaledVector(Wh,o);let m=1/(g+_+u);return a=_*m,o=u*m,t.copy(n).addScaledVector(ss,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),ia.subVectors(this.max,Vs),as.subVectors(e.a,Vs),os.subVectors(e.b,Vs),ls.subVectors(e.c,Vs),gi.subVectors(os,as),xi.subVectors(ls,os),Bi.subVectors(as,ls);let t=[0,-gi.z,gi.y,0,-xi.z,xi.y,0,-Bi.z,Bi.y,gi.z,0,-gi.x,xi.z,0,-xi.x,Bi.z,0,-Bi.x,-gi.y,gi.x,0,-xi.y,xi.x,0,-Bi.y,Bi.x,0];return!Yl(t,as,os,ls,ia)||(t=[1,0,0,0,1,0,0,0,1],!Yl(t,as,os,ls,ia))?!1:(sa.crossVectors(gi,xi),t=[sa.x,sa.y,sa.z],Yl(t,as,os,ls,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ii=[new F,new F,new F,new F,new F,new F,new F,new F],Nn=new F,na=new Zn,as=new F,os=new F,ls=new F,gi=new F,xi=new F,Bi=new F,Vs=new F,ia=new F,sa=new F,Oi=new F;function Yl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Oi.fromArray(i,r);let o=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Wt=new F,ra=new fe,Ad=0,bt=class extends Yn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ad++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tc,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var or=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var lr=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var We=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Rd=new Zn,Ws=new F,Zl=new F,Jn=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Rd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);let t=Ws.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(Zl)),this.expandByPoint(Ws.copy(e.center).sub(Zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Cd=0,Sn=new De,Jl=new Ht,cs=new F,xn=new Zn,Xs=new Zn,$t=new F,et=class i extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pd(e)?lr:or)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Jl.lookAt(e),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new We(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(xn.min,Xs.min),xn.expandByPoint($t),$t.addVectors(xn.max,Xs.max),xn.expandByPoint($t)):(xn.expandByPoint(Xs.min),xn.expandByPoint(Xs.max))}xn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$t.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(e,c),$t.add(cs)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new F,l[x]=new F;let c=new F,h=new F,f=new F,u=new fe,d=new fe,p=new fe,_=new F,g=new F;function m(x,A,I){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,I),u.fromBufferAttribute(r,x),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,I),h.sub(c),f.sub(c),d.sub(u),p.sub(u);let R=1/(d.x*p.y-p.x*d.y);isFinite(R)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(R),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(R),o[x].add(_),o[A].add(_),o[I].add(_),l[x].add(g),l[A].add(g),l[I].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,A=y.length;x<A;++x){let I=y[x],R=I.start,P=I.count;for(let L=R,C=R+P;L<C;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let b=new F,v=new F,S=new F,w=new F;function E(x){S.fromBufferAttribute(s,x),w.copy(S);let A=o[x];b.copy(A),b.sub(S.multiplyScalar(S.dot(A))).normalize(),v.crossVectors(w,A);let R=v.dot(l[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,R)}for(let x=0,A=y.length;x<A;++x){let I=y[x],R=I.start,P=I.count;for(let L=R,C=R+P;L<C;L+=3)E(e.getX(L+0)),E(e.getX(L+1)),E(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,f=new F;if(e)for(let u=0,d=e.count;u<d;u+=3){let p=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let m=0;m<h;m++)u[p++]=c[d++]}return new bt(u,h,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},za=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tc,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},un=new F,cr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){nr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){nr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$l=new F,Pd=new F,Id=new Ye,Un=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$l.subVectors(n,t).cross(Pd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta($l),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Id.getNormalMatrix(e),s=this.coplanarPoint($l).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ld=0,En=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=Ls,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=xc,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Aa,this.stencilZFail=Aa,this.stencilZPass=Aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Un().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Es=class extends En{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hs,qs=new F,us=new F,fs=new F,ds=new fe,Ys=new fe,Yu=new De,aa=new F,Zs=new F,oa=new F,Xh=new fe,Kl=new fe,qh=new fe,hr=class extends Ht{constructor(e=new Es){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new et;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new za(t,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new cr(n,3,0,!1)),hs.setAttribute("uv",new cr(n,2,3,!1))}this.geometry=hs,this.material=e,this.center=new fe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),Yu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-fs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;la(aa.set(-.5,-.5,0),fs,a,us,s,r),la(Zs.set(.5,-.5,0),fs,a,us,s,r),la(oa.set(.5,.5,0),fs,a,us,s,r),Xh.set(0,0),Kl.set(1,0),qh.set(1,1);let o=e.ray.intersectTriangle(aa,Zs,oa,!1,qs);if(o===null&&(la(Zs.set(-.5,.5,0),fs,a,us,s,r),Kl.set(0,1),o=e.ray.intersectTriangle(aa,oa,Zs,!1,qs),o===null))return;let l=e.ray.origin.distanceTo(qs);l<e.near||l>e.far||t.push({distance:l,point:qs.clone(),uv:ri.getInterpolation(qs,aa,Zs,oa,Xh,Kl,qh,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function la(i,e,t,n,s,r){ds.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ys.x=r*ds.x-s*ds.y,Ys.y=s*ds.x+r*ds.y):Ys.copy(ds),i.copy(e),i.x+=Ys.x,i.y+=Ys.y,i.applyMatrix4(Yu)}var si=new F,Ql=new F,ca=new F,ha=new F,Ts=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ql.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),ha.copy(this.origin).sub(Ql);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ca),o=ha.dot(this.direction),l=-ha.dot(ca),c=ha.lengthSq(),h=Math.abs(1-a*a),f,u,d,p;if(h>0)if(f=a*l-o,u=a*o-l,p=r*h,f>=0)if(u>=-p)if(u<=p){let _=1/h;f*=_,u*=_,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ql).addScaledVector(ca,u),d}intersectSphere(e,t){if(e.radius<0)return null;si.subVectors(e.center,this.origin);let n=si.dot(this.direction),s=si.dot(si)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,p=t.x-a.x,_=t.y-a.y,g=t.z-a.z,m=n.x-a.x,y=n.y-a.y,b=n.z-a.z,v=Math.abs(l),S=Math.abs(c),w=Math.abs(h),E,x,A,I,R,P,L,C,U,z,N,W;if(v>=S&&v>=w?(A=l,P=f,U=p,W=m,l>=0?(E=c,x=h,I=u,R=d,L=_,C=g,z=y,N=b):(E=h,x=c,I=d,R=u,L=g,C=_,z=b,N=y)):S>=w?(A=c,P=u,U=_,W=y,c>=0?(E=h,x=l,I=d,R=f,L=g,C=p,z=b,N=m):(E=l,x=h,I=f,R=d,L=p,C=g,z=m,N=b)):(A=h,P=d,U=g,W=b,h>=0?(E=l,x=c,I=f,R=u,L=p,C=_,z=m,N=y):(E=c,x=l,I=u,R=f,L=_,C=p,z=y,N=m)),A===0)return null;let B=E/A,k=x/A,q=1/A,oe=I-B*P,he=R-k*P,re=L-B*U,te=C-k*U,Se=z-B*W,J=N-k*W,$=Se*te-J*re,Te=oe*J-he*Se,Ge=re*he-te*oe;if(s){if($<0||Te<0||Ge<0)return null}else if(($<0||Te<0||Ge<0)&&($>0||Te>0||Ge>0))return null;let we=$+Te+Ge;if(we===0)return null;let Qe=q*($*P+Te*U+Ge*W);return(we>0?Qe<0:Qe>0)?null:this.at(Qe/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lt=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yh=new De,Hi=new Ts,ua=new Jn,Zh=new F,fa=new F,da=new F,pa=new F,jl=new F,ma=new F,Jh=new F,ga=new F,ne=class extends Ht{constructor(e=new et,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(jl.fromBufferAttribute(f,e),a?ma.addScaledVector(jl,h):ma.addScaledVector(jl.sub(t),h))}t.add(ma)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),Hi.copy(e.ray).recast(e.near),!(ua.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(ua,Zh)===null||Hi.origin.distanceToSquared(Zh)>(e.far-e.near)**2))&&(Yh.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(Yh),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=a[g.materialIndex],y=Math.max(g.start,d.start),b=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,S=b;v<S;v+=3){let w=o.getX(v),E=o.getX(v+1),x=o.getX(v+2);s=xa(this,m,e,n,c,h,f,w,E,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let y=o.getX(g),b=o.getX(g+1),v=o.getX(g+2);s=xa(this,a,e,n,c,h,f,y,b,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=a[g.materialIndex],y=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,S=b;v<S;v+=3){let w=v,E=v+1,x=v+2;s=xa(this,m,e,n,c,h,f,w,E,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let y=g,b=g+1,v=g+2;s=xa(this,a,e,n,c,h,f,y,b,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Dd(i,e,t,n,s,r,a,o){let l;if(e.side===sn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ti,o),l===null)return null;ga.copy(o),ga.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ga);return c<t.near||c>t.far?null:{distance:c,point:ga.clone(),object:i}}function xa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,fa),i.getVertexPosition(l,da),i.getVertexPosition(c,pa);let h=Dd(i,e,t,n,fa,da,pa,Jh);if(h){let f=new F;ri.getBarycoord(Jh,fa,da,pa,f),s&&(h.uv=ri.getInterpolatedAttribute(s,o,l,c,f,new fe)),r&&(h.uv1=ri.getInterpolatedAttribute(r,o,l,c,f,new fe)),a&&(h.normal=ri.getInterpolatedAttribute(a,o,l,c,f,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};ri.getNormal(fa,da,pa,u.normal),h.face=u,h.barycoord=f}return h}var ur=class extends dn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Qt,h=Qt,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zt=class extends bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ps=new De,$h=new De,_a=[],Kh=new Zn,Nd=new De,Js=new ne,$s=new Jn,mt=class extends ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zt(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Nd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),Kh.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(Kh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),$s.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union($s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),e.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),$h.multiplyMatrices(n,ps),Js.matrixWorld=$h,Js.raycast(e,_a);for(let a=0,o=_a.length;a<o;a++){let l=_a[a];l.instanceId=r,l.object=this,t.push(l)}_a.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new zt(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ur(new Float32Array(s*this.count),s,this.count,go,An));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zi=new Jn,Ud=new fe(.5,.5),ya=new F,ws=class{constructor(e=new Un,t=new Un,n=new Un,s=new Un,r=new Un,a=new Un){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],_=r[9],g=r[10],m=r[11],y=r[12],b=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-a,d-h,m-p,S-y).normalize(),s[1].setComponents(c+a,d+h,m+p,S+y).normalize(),s[2].setComponents(c+o,d+f,m+_,S+b).normalize(),s[3].setComponents(c-o,d-f,m-_,S-b).normalize(),n)s[4].setComponents(l,u,g,v).normalize(),s[5].setComponents(c-l,d-u,m-g,S-v).normalize();else if(s[4].setComponents(c-l,d-u,m-g,S-v).normalize(),t===Fn)s[5].setComponents(c+l,d+u,m+g,S+v).normalize();else if(t===vs)s[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){zi.center.set(0,0,0);let t=Ud.distanceTo(e.center);return zi.radius=.7071067811865476+t,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ya.x=s.normal.x>0?e.max.x:e.min.x,ya.y=s.normal.y>0?e.max.y:e.min.y,ya.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var As=class extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ka=new F,Ga=new F,Qh=new De,Ks=new Ts,va=new Jn,ec=new F,jh=new F,Va=class extends Ht{constructor(e=new et,t=new As){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ka.fromBufferAttribute(t,s-1),Ga.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ka.distanceTo(Ga);e.setAttribute("lineDistance",new We(n,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(s),va.radius+=r,e.ray.intersectsSphere(va)===!1)return;Qh.copy(s).invert(),Ks.copy(e.ray).applyMatrix4(Qh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,g=p-1;_<g;_+=c){let m=h.getX(_),y=h.getX(_+1),b=Ma(this,e,Ks,l,m,y,_);b&&t.push(b)}if(this.isLineLoop){let _=h.getX(p-1),g=h.getX(d),m=Ma(this,e,Ks,l,_,g,p-1);m&&t.push(m)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,g=p-1;_<g;_+=c){let m=Ma(this,e,Ks,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=Ma(this,e,Ks,l,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ma(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(ka.fromBufferAttribute(o,s),Ga.fromBufferAttribute(o,r),t.distanceSqToSegment(ka,Ga,ec,jh)>n)return;ec.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ec);if(!(c<e.near||c>e.far))return{distance:c,point:jh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var eu=new F,tu=new F,fr=class extends Va{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)eu.fromBufferAttribute(t,s),tu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+eu.distanceTo(tu);e.setAttribute("lineDistance",new We(n,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Rs=class extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nu=new De,oc=new Ts,ba=new Jn,Sa=new F,dr=class extends Ht{constructor(e=new et,t=new Rs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(s),ba.radius+=r,e.ray.intersectsSphere(ba)===!1)return;nu.copy(s).invert(),oc.copy(e.ray).applyMatrix4(nu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=u,_=d;p<_;p++){let g=c.getX(p);Sa.fromBufferAttribute(f,g),iu(Sa,g,l,s,e,t,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=u,_=d;p<_;p++)Sa.fromBufferAttribute(f,p),iu(Sa,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function iu(i,e,t,n,s,r,a){let o=oc.distanceSqToPoint(i);if(o<t){let l=new F;oc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var pr=class extends dn{constructor(e=[],t=wi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oi=class extends dn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var vi=class extends dn{constructor(e,t,n=On,s,r,a,o=Qt,l=Qt,c,h=qn,f=1){if(h!==qn&&h!==Ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Wa=class extends vi{constructor(e,t=On,n=wi,s,r,a=Qt,o=Qt,l,c=qn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},mr=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},de=class i extends et{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(f,2));function p(_,g,m,y,b,v,S,w,E,x,A){let I=v/E,R=S/x,P=v/2,L=S/2,C=w/2,U=E+1,z=x+1,N=0,W=0,B=new F;for(let k=0;k<z;k++){let q=k*R-L;for(let oe=0;oe<U;oe++){let he=oe*I-P;B[_]=he*y,B[g]=q*b,B[m]=C,c.push(B.x,B.y,B.z),B[_]=0,B[g]=0,B[m]=w>0?1:-1,h.push(B.x,B.y,B.z),f.push(oe/E),f.push(1-k/x),N+=1}}for(let k=0;k<x;k++)for(let q=0;q<E;q++){let oe=u+q+U*k,he=u+q+U*(k+1),re=u+(q+1)+U*(k+1),te=u+(q+1)+U*k;l.push(oe,he,te),l.push(he,re,te),W+=6}o.addGroup(d,W,A),d+=W,u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Tn=class i extends et{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new F,h=new fe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=n+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new We(a,3)),this.setAttribute("normal",new We(o,3)),this.setAttribute("uv",new We(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Je=class i extends et{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],p=0,_=[],g=n/2,m=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new We(f,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(d,2));function y(){let v=new F,S=new F,w=0,E=(t-e)/n;for(let x=0;x<=r;x++){let A=[],I=x/r,R=I*(t-e)+e;for(let P=0;P<=s;P++){let L=P/s,C=L*l+o,U=Math.sin(C),z=Math.cos(C);S.x=R*U,S.y=-I*n+g,S.z=R*z,f.push(S.x,S.y,S.z),v.set(U,E,z).normalize(),u.push(v.x,v.y,v.z),d.push(L,1-I),A.push(p++)}_.push(A)}for(let x=0;x<s;x++)for(let A=0;A<r;A++){let I=_[A][x],R=_[A+1][x],P=_[A+1][x+1],L=_[A][x+1];(e>0||A!==0)&&(h.push(I,R,L),w+=3),(t>0||A!==r-1)&&(h.push(R,P,L),w+=3)}c.addGroup(m,w,0),m+=w}function b(v){let S=p,w=new fe,E=new F,x=0,A=v===!0?e:t,I=v===!0?1:-1;for(let P=1;P<=s;P++)f.push(0,g*I,0),u.push(0,I,0),d.push(.5,.5),p++;let R=p;for(let P=0;P<=s;P++){let C=P/s*l+o,U=Math.cos(C),z=Math.sin(C);E.x=A*z,E.y=g*I,E.z=A*U,f.push(E.x,E.y,E.z),u.push(0,I,0),w.x=U*.5+.5,w.y=z*.5*I+.5,d.push(w.x,w.y),p++}for(let P=0;P<s;P++){let L=S+P,C=R+P;v===!0?h.push(C,C+1,L):h.push(C+1,C,L),x+=3}c.addGroup(m,x,v===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},gr=class i extends Je{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xa=class i extends et{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new We(r,3)),this.setAttribute("normal",new We(r.slice(),3)),this.setAttribute("uv",new We(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let b=new F,v=new F,S=new F;for(let w=0;w<t.length;w+=3)d(t[w+0],b),d(t[w+1],v),d(t[w+2],S),l(b,v,S,y)}function l(y,b,v,S){let w=S+1,E=[];for(let x=0;x<=w;x++){E[x]=[];let A=y.clone().lerp(v,x/w),I=b.clone().lerp(v,x/w),R=w-x;for(let P=0;P<=R;P++)P===0&&x===w?E[x][P]=A:E[x][P]=A.clone().lerp(I,P/R)}for(let x=0;x<w;x++)for(let A=0;A<2*(w-x)-1;A++){let I=Math.floor(A/2);A%2===0?(u(E[x][I+1]),u(E[x+1][I]),u(E[x][I])):(u(E[x][I+1]),u(E[x+1][I+1]),u(E[x+1][I]))}}function c(y){let b=new F;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(y),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function h(){let y=new F;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let v=g(y)/2/Math.PI+.5,S=m(y)/Math.PI+.5;a.push(v,1-S)}p(),f()}function f(){for(let y=0;y<a.length;y+=6){let b=a[y+0],v=a[y+2],S=a[y+4],w=Math.max(b,v,S),E=Math.min(b,v,S);w>.9&&E<.1&&(b<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),S<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function d(y,b){let v=y*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function p(){let y=new F,b=new F,v=new F,S=new F,w=new fe,E=new fe,x=new fe;for(let A=0,I=0;A<r.length;A+=9,I+=6){y.set(r[A+0],r[A+1],r[A+2]),b.set(r[A+3],r[A+4],r[A+5]),v.set(r[A+6],r[A+7],r[A+8]),w.set(a[I+0],a[I+1]),E.set(a[I+2],a[I+3]),x.set(a[I+4],a[I+5]),S.copy(y).add(b).add(v).divideScalar(3);let R=g(S);_(w,I+0,y,R),_(E,I+2,b,R),_(x,I+4,v,R)}}function _(y,b,v,S){S<0&&y.x===1&&(a[b]=y.x-1),v.x===0&&v.z===0&&(a[b]=S/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var _n=class i extends Xa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},nn=class i extends et{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ot(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,f=new F,u=new fe,d=new F,p=new F,_=new F,g=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,d.x=m*1,d.y=-g,d.z=m*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(p)}for(let y=0;y<=t;y++){let b=n+y*h*s,v=Math.sin(b),S=Math.cos(b);for(let w=0;w<=e.length-1;w++){f.x=e[w].x*v,f.y=e[w].y,f.z=e[w].x*S,a.push(f.x,f.y,f.z),u.x=y/t,u.y=w/(e.length-1),o.push(u.x,u.y);let E=l[3*w+0]*v,x=l[3*w+1],A=l[3*w+0]*S;c.push(E,x,A)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){let v=b+y*e.length,S=v,w=v+e.length,E=v+e.length+1,x=v+1;r.push(S,w,x),r.push(E,x,w)}this.setIndex(r),this.setAttribute("position",new We(a,3)),this.setAttribute("uv",new We(o,2)),this.setAttribute("normal",new We(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ze=class i extends et{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let y=m*u-a;for(let b=0;b<c;b++){let v=b*f-r;p.push(v,-y,0),_.push(0,0,1),g.push(b/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let b=y+c*m,v=y+c*(m+1),S=y+1+c*(m+1),w=y+1+c*m;d.push(b,v,w),d.push(v,S,w)}this.setIndex(d),this.setAttribute("position",new We(p,3)),this.setAttribute("normal",new We(_,3)),this.setAttribute("uv",new We(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var kt=class i extends et{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new F,u=new F,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let y=[],b=m/n,v=a+b*o,S=e*Math.cos(v),w=Math.sqrt(e*e-S*S),E=0;m===0&&a===0?E=.5/t:m===n&&l===Math.PI&&(E=-.5/t);for(let x=0;x<=t;x++){let A=x/t,I=s+A*r;f.x=-w*Math.cos(I),f.y=S,f.z=w*Math.sin(I),p.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),g.push(A+E,1-b),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){let b=h[m][y+1],v=h[m][y],S=h[m+1][y],w=h[m+1][y+1];(m!==0||a>0)&&d.push(b,v,w),(m!==n-1||l<Math.PI)&&d.push(v,S,w)}this.setIndex(d),this.setAttribute("position",new We(p,3)),this.setAttribute("normal",new We(_,3)),this.setAttribute("uv",new We(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var jt=class i extends et{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new F,d=new F,p=new F;for(let _=0;_<=n;_++){let g=a+_/n*o;for(let m=0;m<=s;m++){let y=m/s*r;d.x=(e+t*Math.cos(g))*Math.cos(y),d.y=(e+t*Math.cos(g))*Math.sin(y),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),f.push(m/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){let m=(s+1)*_+g-1,y=(s+1)*(_-1)+g-1,b=(s+1)*(_-1)+g,v=(s+1)*_+g;l.push(m,y,v),l.push(y,b,v)}this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Yi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(su(s))s.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(su(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=Yi(i[t]);for(let s in n)e[s]=n[s]}return e}function su(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Fd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ac(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var li={clone:Yi,merge:cn},Bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ct=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bd,this.fragmentShader=Od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=Fd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ce().setHex(s.value);break;case"v2":this.uniforms[n].value=new fe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new It().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[n].value=new De().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Cs=class extends Ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qe=class extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zr,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var xr=class extends En{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zr,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.combine=lo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qa=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ya=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ms(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function tc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Mi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Za=class extends Mi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sc,endingEnd:sc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case rc:r=e,o=2*t-n;break;case ac:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rc:a=e,l=2*n-t;break;case ac:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-t)/(s-t),_=p*p,g=_*p,m=-u*g+2*u*_-u*p,y=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*p+1,b=(-1-d)*g+(1.5+d)*_+.5*p,v=d*g-d*_;for(let S=0;S!==o;++S)r[S]=m*a[h+S]+y*a[c+S]+b*a[l+S]+v*a[f+S];return r}},Ja=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},$a=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ka=class extends Mi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-t)/(s-t),_=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*_+a[l+g]*p;return r}let u=o*2,d=e-1;for(let p=0;p!==o;++p){let _=a[c+p],g=a[l+p],m=d*u+p*2,y=f[m],b=f[m+1],v=e*u+p*2,S=h[v],w=h[v+1],E=zd(n,t,y,S,s);r[p]=Zu(E,_,b,w,g)}return r}};function Zu(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Hd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function zd(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Zu(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Hd(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var yn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ms(t,this.TimeBufferType),this.values=ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ms(e.times,Array),values:ms(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),tc(e.settings)&&(n.settings={inTangents:ms(e.settings.inTangents,Array),outTangents:ms(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ka(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Qs:t=this.InterpolantFactoryMethodDiscrete;break;case Fa:t=this.InterpolantFactoryMethodLinear;break;case wa:t=this.InterpolantFactoryMethodSmooth;break;case ic:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return wa;case this.InterpolantFactoryMethodBezier:return ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;tc(this.settings)&&(ru(this.settings.inTangents,e),ru(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&md(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){let _=t[f+p];if(_!==t[u+p]||_!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,tc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ru(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Fa;var bi=class extends yn{constructor(e,t,n){super(e,t,n)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=Qs;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};Qa.prototype.ValueTypeName="color";var ja=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};ja.prototype.ValueTypeName="number";var eo=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Rt.slerpFlat(r,0,a,c-o,a,c,l);return r}},_r=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new eo(this.times,this.values,this.getValueSize(),e)}};_r.prototype.ValueTypeName="quaternion";_r.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends yn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Qs;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};to.prototype.ValueTypeName="vector";var no=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ju=new no,io=class{constructor(e){this.manager=e!==void 0?e:Ju,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};io.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vi=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},yr=class extends Vi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},nc=new De,au=new F,ou=new F,Ps=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ws,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;au.setFromMatrixPosition(e.matrixWorld),t.position.copy(au),ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ou),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){nc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(nc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===vs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ea=new F,Ta=new Rt,Vn=new F,vr=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ea,Ta,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Ta,Vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ea,Ta,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Ta,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_i=new F,lu=new fe,cu=new fe,Kt=class extends vr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ll*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,lu,cu),t.subVectors(cu,lu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ll*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},lc=class extends Ps{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ir*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Mr=class extends Vi{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new lc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},cc=class extends Ps{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0}},br=class extends Vi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new cc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ei=class extends vr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hc=class extends Ps{constructor(){super(new Ei(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sr=class extends Vi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new hc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var gs=-90,xs=1,so=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(gs,xs,e,t);s.layers=this.layers,this.add(s);let r=new Kt(gs,xs,e,t);r.layers=this.layers,this.add(r);let a=new Kt(gs,xs,e,t);a.layers=this.layers,this.add(a);let o=new Kt(gs,xs,e,t);o.layers=this.layers,this.add(o);let l=new Kt(gs,xs,e,t);l.layers=this.layers,this.add(l);let c=new Kt(gs,xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ro=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Er=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=kd.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function kd(){this._document.hidden===!1&&this.reset()}var Rc="\\[\\]\\.:\\/",Gd=new RegExp("["+Rc+"]","g"),Cc="[^"+Rc+"]",Vd="[^"+Rc.replace("\\.","")+"]",Wd=/((?:WC+[\/:])*)/.source.replace("WC",Cc),Xd=/(WCOD+)?/.source.replace("WCOD",Vd),qd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc),Yd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc),Zd=new RegExp("^"+Wd+Xd+qd+Yd+"$"),Jd=["material","materials","bones","map"],uc=class{constructor(e,t,n){let s=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gd,"")}static parseTrackName(e){let t=Zd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Jd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=uc;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ny=new Float32Array(1);var Uc=class Uc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Uc.prototype.isMatrix2=!0;var fc=Uc;function Pc(i,e,t,n){let s=$d(n);switch(t){case Sc:return i*e;case go:return i*e/s.components*s.byteLength;case xo:return i*e/s.components*s.byteLength;case Ci:return i*e*2/s.components*s.byteLength;case _o:return i*e*2/s.components*s.byteLength;case Ec:return i*e*3/s.components*s.byteLength;case Rn:return i*e*4/s.components*s.byteLength;case yo:return i*e*4/s.components*s.byteLength;case Nr:case Ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fr:case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mo:case So:return Math.max(i,16)*Math.max(e,8)/4;case vo:case bo:return Math.max(i,8)*Math.max(e,8)/2;case Eo:case To:case Ao:case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wo:case Or:case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wo:case Xo:case qo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yo:case Zo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Hr:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $d(i){switch(i){case mn:case yc:return{byteLength:1,components:1};case Ds:case vc:case qt:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case On:case fo:case An:return{byteLength:4,components:1};case Mc:case bc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function _f(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qd(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let _=f[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ep=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,op=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,up=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ep=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$p=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,n0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,c0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,g0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,b0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,S0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,C0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,B0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,O0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,H0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,k0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,V0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Z0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,j0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,em=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,am=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,om=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_m=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Em=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Im=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:jd,alphahash_pars_fragment:ep,alphamap_fragment:tp,alphamap_pars_fragment:np,alphatest_fragment:ip,alphatest_pars_fragment:sp,aomap_fragment:rp,aomap_pars_fragment:ap,batching_pars_vertex:op,batching_vertex:lp,begin_vertex:cp,beginnormal_vertex:hp,bsdfs:up,iridescence_fragment:fp,bumpmap_pars_fragment:dp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:mp,clipping_planes_pars_vertex:gp,clipping_planes_vertex:xp,color_fragment:_p,color_pars_fragment:yp,color_pars_vertex:vp,color_vertex:Mp,common:bp,cube_uv_reflection_fragment:Sp,defaultnormal_vertex:Ep,displacementmap_pars_vertex:Tp,displacementmap_vertex:wp,emissivemap_fragment:Ap,emissivemap_pars_fragment:Rp,colorspace_fragment:Cp,colorspace_pars_fragment:Pp,envmap_fragment:Ip,envmap_common_pars_fragment:Lp,envmap_pars_fragment:Dp,envmap_pars_vertex:Np,envmap_physical_pars_fragment:Xp,envmap_vertex:Up,fog_vertex:Fp,fog_pars_vertex:Bp,fog_fragment:Op,fog_pars_fragment:Hp,gradientmap_pars_fragment:zp,lightmap_pars_fragment:kp,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Vp,lights_pars_begin:Wp,lights_toon_fragment:qp,lights_toon_pars_fragment:Yp,lights_phong_fragment:Zp,lights_phong_pars_fragment:Jp,lights_physical_fragment:$p,lights_physical_pars_fragment:Kp,lights_fragment_begin:Qp,lights_fragment_maps:jp,lights_fragment_end:e0,lightprobes_pars_fragment:t0,logdepthbuf_fragment:n0,logdepthbuf_pars_fragment:i0,logdepthbuf_pars_vertex:s0,logdepthbuf_vertex:r0,map_fragment:a0,map_pars_fragment:o0,map_particle_fragment:l0,map_particle_pars_fragment:c0,metalnessmap_fragment:h0,metalnessmap_pars_fragment:u0,morphinstance_vertex:f0,morphcolor_vertex:d0,morphnormal_vertex:p0,morphtarget_pars_vertex:m0,morphtarget_vertex:g0,normal_fragment_begin:x0,normal_fragment_maps:_0,normal_pars_fragment:y0,normal_pars_vertex:v0,normal_vertex:M0,normalmap_pars_fragment:b0,clearcoat_normal_fragment_begin:S0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:T0,iridescence_pars_fragment:w0,opaque_fragment:A0,packing:R0,premultiplied_alpha_fragment:C0,project_vertex:P0,dithering_fragment:I0,dithering_pars_fragment:L0,roughnessmap_fragment:D0,roughnessmap_pars_fragment:N0,shadowmap_pars_fragment:U0,shadowmap_pars_vertex:F0,shadowmap_vertex:B0,shadowmask_pars_fragment:O0,skinbase_vertex:H0,skinning_pars_vertex:z0,skinning_vertex:k0,skinnormal_vertex:G0,specularmap_fragment:V0,specularmap_pars_fragment:W0,tonemapping_fragment:X0,tonemapping_pars_fragment:q0,transmission_fragment:Y0,transmission_pars_fragment:Z0,uv_pars_fragment:J0,uv_pars_vertex:$0,uv_vertex:K0,worldpos_vertex:Q0,background_vert:j0,background_frag:em,backgroundCube_vert:tm,backgroundCube_frag:nm,cube_vert:im,cube_frag:sm,depth_vert:rm,depth_frag:am,distance_vert:om,distance_frag:lm,equirect_vert:cm,equirect_frag:hm,linedashed_vert:um,linedashed_frag:fm,meshbasic_vert:dm,meshbasic_frag:pm,meshlambert_vert:mm,meshlambert_frag:gm,meshmatcap_vert:xm,meshmatcap_frag:_m,meshnormal_vert:ym,meshnormal_frag:vm,meshphong_vert:Mm,meshphong_frag:bm,meshphysical_vert:Sm,meshphysical_frag:Em,meshtoon_vert:Tm,meshtoon_frag:wm,points_vert:Am,points_frag:Rm,shadow_vert:Cm,shadow_frag:Pm,sprite_vert:Im,sprite_frag:Lm},ve={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Qn={basic:{uniforms:cn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:cn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ce(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:cn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:cn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:cn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ce(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:cn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:cn([ve.points,ve.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:cn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:cn([ve.common,ve.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:cn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:cn([ve.sprite,ve.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:cn([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:cn([ve.lights,ve.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Qn.physical={uniforms:cn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Qo={r:0,b:0,g:0},Dm=new De,yf=new Ye;yf.set(-1,0,0,0,1,0,0,0,1);function Nm(i,e,t,n,s,r){let a=new ce(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let v=y.backgroundBlurriness>0;b=e.get(b,v)}return b}function p(y){let b=!1,v=d(y);v===null?g(a,o):v&&v.isColor&&(g(v,1),b=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,b){let v=d(b);v&&(v.isCubeTexture||v.mapping===Lr)?(c===void 0&&(c=new ne(new de(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:Yi(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yf),c.material.toneMapped=it.getTransfer(v.colorSpace)!==ht,(h!==v||f!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ne(new Ze(2,2),new Ct({name:"BackgroundMaterial",uniforms:Yi(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=it.getTransfer(v.colorSpace)!==ht,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,b){y.getRGB(Qo,Ac(i)),t.buffers.color.setClear(Qo.r,Qo.g,Qo.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:p,addToRenderList:_,dispose:m}}function Um(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(R,P,L,C,U){let z=!1,N=f(R,C,L,P);r!==N&&(r=N,c(r.object)),z=d(R,C,L,U),z&&p(R,C,L,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,v(R,P,L,C),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function f(R,P,L,C){let U=C.wireframe===!0,z=n[P.id];z===void 0&&(z={},n[P.id]=z);let N=R.isInstancedMesh===!0?R.id:0,W=z[N];W===void 0&&(W={},z[N]=W);let B=W[L.id];B===void 0&&(B={},W[L.id]=B);let k=B[U];return k===void 0&&(k=u(l()),B[U]=k),k}function u(R){let P=[],L=[],C=[];for(let U=0;U<t;U++)P[U]=0,L[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:C,object:R,attributes:{},index:null}}function d(R,P,L,C){let U=r.attributes,z=P.attributes,N=0,W=L.getAttributes();for(let B in W)if(W[B].location>=0){let q=U[B],oe=z[B];if(oe===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),q===void 0||q.attribute!==oe||oe&&q.data!==oe.data)return!0;N++}return r.attributesNum!==N||r.index!==C}function p(R,P,L,C){let U={},z=P.attributes,N=0,W=L.getAttributes();for(let B in W)if(W[B].location>=0){let q=z[B];q===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(q=R.instanceColor));let oe={};oe.attribute=q,q&&q.data&&(oe.data=q.data),U[B]=oe,N++}r.attributes=U,r.attributesNum=N,r.index=C}function _(){let R=r.newAttributes;for(let P=0,L=R.length;P<L;P++)R[P]=0}function g(R){m(R,0)}function m(R,P){let L=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;L[R]=1,C[R]===0&&(i.enableVertexAttribArray(R),C[R]=1),U[R]!==P&&(i.vertexAttribDivisor(R,P),U[R]=P)}function y(){let R=r.newAttributes,P=r.enabledAttributes;for(let L=0,C=P.length;L<C;L++)P[L]!==R[L]&&(i.disableVertexAttribArray(L),P[L]=0)}function b(R,P,L,C,U,z,N){N===!0?i.vertexAttribIPointer(R,P,L,U,z):i.vertexAttribPointer(R,P,L,C,U,z)}function v(R,P,L,C){_();let U=C.attributes,z=L.getAttributes(),N=P.defaultAttributeValues;for(let W in z){let B=z[W];if(B.location>=0){let k=U[W];if(k===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(k=R.instanceColor)),k!==void 0){let q=k.normalized,oe=k.itemSize,he=e.get(k);if(he===void 0)continue;let re=he.buffer,te=he.type,Se=he.bytesPerElement,J=te===i.INT||te===i.UNSIGNED_INT||k.gpuType===fo;if(k.isInterleavedBufferAttribute){let $=k.data,Te=$.stride,Ge=k.offset;if($.isInstancedInterleavedBuffer){for(let we=0;we<B.locationSize;we++)m(B.location+we,$.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let we=0;we<B.locationSize;we++)g(B.location+we);i.bindBuffer(i.ARRAY_BUFFER,re);for(let we=0;we<B.locationSize;we++)b(B.location+we,oe/B.locationSize,te,q,Te*Se,(Ge+oe/B.locationSize*we)*Se,J)}else{if(k.isInstancedBufferAttribute){for(let $=0;$<B.locationSize;$++)m(B.location+$,k.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let $=0;$<B.locationSize;$++)g(B.location+$);i.bindBuffer(i.ARRAY_BUFFER,re);for(let $=0;$<B.locationSize;$++)b(B.location+$,oe/B.locationSize,te,q,oe*Se,oe/B.locationSize*$*Se,J)}}else if(N!==void 0){let q=N[W];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(B.location,q);break;case 3:i.vertexAttrib3fv(B.location,q);break;case 4:i.vertexAttrib4fv(B.location,q);break;default:i.vertexAttrib1fv(B.location,q)}}}}y()}function S(){A();for(let R in n){let P=n[R];for(let L in P){let C=P[L];for(let U in C){let z=C[U];for(let N in z)h(z[N].object),delete z[N];delete C[U]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;let P=n[R.id];for(let L in P){let C=P[L];for(let U in C){let z=C[U];for(let N in z)h(z[N].object),delete z[N];delete C[U]}}delete n[R.id]}function E(R){for(let P in n){let L=n[P];for(let C in L){let U=L[C];if(U[R.id]===void 0)continue;let z=U[R.id];for(let N in z)h(z[N].object),delete z[N];delete U[R.id]}}}function x(R){for(let P in n){let L=n[P],C=R.isInstancedMesh===!0?R.id:0,U=L[C];if(U!==void 0){for(let z in U){let N=U[z];for(let W in N)h(N[W].object),delete N[W];delete U[z]}delete L[C],Object.keys(L).length===0&&delete n[P]}}}function A(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function Fm(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Bm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Rn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let x=E===qt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==mn&&E!==An&&!x&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,maxSamples:S,samples:w}}function Om(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Un,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,b=y*4,v=m.clippingState||null;l.value=v,v=h(p,u,b,d);for(let S=0;S!==b;++S)v[S]=t[S];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,p){let _=f!==null?f.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=d+_*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,v=d;b!==_;++b,v+=4)a.copy(f[b]).applyMatrix4(y,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var Fs=4,Hm=6,zm=20,km=256,kr=new Ei,$u=new ce,Fc=null,Bc=0,Oc=0,Hc=!1,Gm=new F,Zi=new F,el=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Gm}=r;Fc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fc,Bc,Oc),this._renderer.xr.enabled=Hc,e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:qt,format:Rn,colorSpace:js,depthBuffer:!1},s=Ku(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ku(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vm(r)),this._blurMaterial=Xm(r,e,t),this._ggxMaterial=Wm(r,e,t)}return s}_compileMaterial(e){let t=new ne(new et,e);this._renderer.compile(t,kr)}_sceneToCubeUV(e,t,n,s,r){let l=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor($u),f.toneMapping=Bn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ne(new de,new Lt({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,m=!0):(g.color.copy($u),m=!0);for(let b=0;b<6;b++){let v=b%3;v===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):v===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let S=this._cubeSize;Us(s,v*S,b>2?S:0,S,S),f.setRenderTarget(s),m&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===wi||e.mapping===qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Us(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,kr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-Fs?n-p+Fs:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,Us(r,g,m,3*_,2*_),s.setRenderTarget(r),s.render(o,kr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Us(e,g,m,3*_,2*_),s.setRenderTarget(e),s.render(o,kr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Fs?s-this._lodMax+Fs:0),u=4*(this._cubeSize-h);Us(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(l,kr)}};function Vm(i){let e=[],t=[],n=i,s=i-Fs+1+Hm;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,p=new Float32Array(d*u*f),_=new Float32Array(d*u*f);for(let m=0;m<f;m++){let y=m%3*2/3-1,b=m>2?0:-1,v=[y,b,0,y+2/3,b,0,y+2/3,b+1,0,y,b,0,y+2/3,b+1,0,y,b+1,0];p.set(v,d*u*m);for(let S=0;S<u;S++){let w=h[S*2]*2-1,E=h[S*2+1]*2-1;m===0?Zi.set(1,E,w):m===1?Zi.set(-w,1,-E):m===2?Zi.set(-w,E,1):m===3?Zi.set(-1,E,-w):m===4?Zi.set(-w,-1,E):Zi.set(w,E,-1),Zi.toArray(_,(m*u+S)*d)}}let g=new et;g.setAttribute("position",new bt(p,d)),g.setAttribute("outputDirection",new bt(_,d)),t.push(new ne(g,null)),n>Fs&&n--}return{lodMeshes:t,sizeLods:e}}function Ku(i,e,t){let n=new Ut(i,e,t);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Us(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Wm(i,e,t){return new Ct({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:km,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Xm(i,e,t){return new Ct({name:"SphericalGaussianBlur",defines:{SAMPLES:zm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Qu(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function ju(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function il(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var tl=class extends Ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new pr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new de(5,5,5),r=new Ct({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:wn});r.uniforms.tEquirect.value=t;let a=new ne(s,r),o=t.minFilter;return t.minFilter===Ai&&(t.minFilter=tn),new so(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function qm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===co||d===ho)if(e.has(u)){let p=e.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new tl(p.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,p=d===co||d===ho,_=d===wi||d===qi;if(p||_){let g=t.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new el(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let y=u.image;return p&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new el(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===co?u.mapping=wi:d===ho&&(u.mapping=qi),u}function l(u){let d=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Ym(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ki("WebGLRenderer: "+n+" extension not supported."),s}}}function Zm(i,e,t,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,p=f.attributes.position,_=0;if(p===void 0)return;if(d!==null){let y=d.array;_=d.version;for(let b=0,v=y.length;b<v;b+=3){let S=y[b+0],w=y[b+1],E=y[b+2];u.push(S,w,w,E,E,S)}}else{let y=p.array;_=p.version;for(let b=0,v=y.length/3-1;b<v;b+=3){let S=b+0,w=b+1,E=b+2;u.push(S,w,w,E,E,S)}}let g=new(p.count>=65535?lr:or)(u,1);g.version=_;let m=r.get(f);m&&e.remove(m),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Jm(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function $m(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Km(i,e,t){let n=new WeakMap,s=new It;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let A=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],b=0;d===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let v=o.attributes.position.count*b,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*S*4*f),E=new sr(w,v,S,f);E.type=An,E.needsUpdate=!0;let x=b*4;for(let I=0;I<f;I++){let R=g[I],P=m[I],L=y[I],C=v*S*4*I;for(let U=0;U<R.count;U++){let z=U*x;d===!0&&(s.fromBufferAttribute(R,U),w[C+z+0]=s.x,w[C+z+1]=s.y,w[C+z+2]=s.z,w[C+z+3]=0),p===!0&&(s.fromBufferAttribute(P,U),w[C+z+4]=s.x,w[C+z+5]=s.y,w[C+z+6]=s.z,w[C+z+7]=0),_===!0&&(s.fromBufferAttribute(L,U),w[C+z+8]=s.x,w[C+z+9]=s.y,w[C+z+10]=s.z,w[C+z+11]=L.itemSize===4?s.w:1)}}u={count:f,texture:E,size:new fe(v,S)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Qm(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var jm={[wr]:"LINEAR_TONE_MAPPING",[Ar]:"REINHARD_TONE_MAPPING",[Rr]:"CINEON_TONE_MAPPING",[Xi]:"ACES_FILMIC_TONE_MAPPING",[Pr]:"AGX_TONE_MAPPING",[Ir]:"NEUTRAL_TONE_MAPPING",[Cr]:"CUSTOM_TONE_MAPPING"};function eg(i,e,t,n,s,r){let a=new Ut(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new et;c.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new We([0,2,0,0,2,0],2));let h=new Cs({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ne(c,h),u=new Ei(-1,1,1,-1,0,1),d=null,p=null,_=!1,g,m=null,y=[],b=!1;this.setSize=function(v,S){a.setSize(v,S),o!==null&&o.setSize(v,S),l!==null&&l.setSize(v,S);for(let w=0;w<y.length;w++){let E=y[w];E.setSize&&E.setSize(v,S)}},this.setEffects=function(v){y=v,b=y.length>0&&y[0].isRenderPass===!0;let S=a.width,w=a.height;y.length>0&&o===null&&(o=new Ut(S,w,{type:qt,depthBuffer:!1,stencilBuffer:!1}),l=new Ut(S,w,{type:qt,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<y.length;E++){let x=y[E];x.setSize&&x.setSize(S,w)}},this.begin=function(v,S){if(_||v.toneMapping===Bn&&y.length===0)return!1;if(m=S,S!==null){let w=S.width,E=S.height;(a.width!==w||a.height!==E)&&this.setSize(w,E)}return b===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=Bn,!0},this.hasRenderPass=function(){return b},this.end=function(v,S){v.toneMapping=g,_=!0;let w=a,E=o;for(let x=0;x<y.length;x++){let A=y[x];A.enabled!==!1&&(A.render(v,E,w,S),A.needsSwap!==!1&&(w=E,E=E===o?l:o))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},it.getTransfer(d)===ht&&(h.defines.SRGB_TRANSFER="");let x=jm[p];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(f,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var vf=new dn,Gc=new vi(1,1),Mf=new sr,bf=new Ha,Sf=new pr,ef=[],tf=[],nf=new Float32Array(16),sf=new Float32Array(9),rf=new Float32Array(4);function Os(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ef[s];if(r===void 0&&(r=new Float32Array(s),ef[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sl(i,e){let t=tf[e];t===void 0&&(t=new Int32Array(e),tf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function tg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function rg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;rf.set(n),i.uniformMatrix2fv(this.addr,!1,rf),Zt(t,n)}}function ag(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;sf.set(n),i.uniformMatrix3fv(this.addr,!1,sf),Zt(t,n)}}function og(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;nf.set(n),i.uniformMatrix4fv(this.addr,!1,nf),Zt(t,n)}}function lg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function fg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function gg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gc.compareFunction=t.isReversedDepthBuffer()?Ko:$o,r=Gc):r=vf,t.setTexture2D(e||r,s)}function xg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bf,s)}function _g(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Sf,s)}function yg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Mf,s)}function vg(i){switch(i){case 5126:return tg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return ag;case 35676:return og;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return fg;case 36294:return dg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return yg}}function Mg(i,e){i.uniform1fv(this.addr,e)}function bg(i,e){let t=Os(e,this.size,2);i.uniform2fv(this.addr,t)}function Sg(i,e){let t=Os(e,this.size,3);i.uniform3fv(this.addr,t)}function Eg(i,e){let t=Os(e,this.size,4);i.uniform4fv(this.addr,t)}function Tg(i,e){let t=Os(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wg(i,e){let t=Os(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ag(i,e){let t=Os(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Rg(i,e){i.uniform1iv(this.addr,e)}function Cg(i,e){i.uniform2iv(this.addr,e)}function Pg(i,e){i.uniform3iv(this.addr,e)}function Ig(i,e){i.uniform4iv(this.addr,e)}function Lg(i,e){i.uniform1uiv(this.addr,e)}function Dg(i,e){i.uniform2uiv(this.addr,e)}function Ng(i,e){i.uniform3uiv(this.addr,e)}function Ug(i,e){i.uniform4uiv(this.addr,e)}function Fg(i,e,t){let n=this.cache,s=e.length,r=sl(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Gc:a=vf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Bg(i,e,t){let n=this.cache,s=e.length,r=sl(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bf,r[a])}function Og(i,e,t){let n=this.cache,s=e.length,r=sl(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Sf,r[a])}function Hg(i,e,t){let n=this.cache,s=e.length,r=sl(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Mf,r[a])}function zg(i){switch(i){case 5126:return Mg;case 35664:return bg;case 35665:return Sg;case 35666:return Eg;case 35674:return Tg;case 35675:return wg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Dg;case 36295:return Ng;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Hg}}var Vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vg(t.type)}},Wc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zg(t.type)}},Xc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},zc=/(\w+)(\])?(\[|\.)?/g;function af(i,e){i.seq.push(e),i.map[e.id]=e}function kg(i,e,t){let n=i.name,s=n.length;for(zc.lastIndex=0;;){let r=zc.exec(n),a=zc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){af(t,c===void 0?new Vc(o,i,e):new Wc(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Xc(o),af(t,f)),t=f}}}var Bs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);kg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function of(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Gg=37297,Vg=0;function Wg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var lf=new Ye;function Xg(i){it._getMatrix(lf,it.workingColorSpace,i);let e=`mat3( ${lf.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case er:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function cf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Wg(i.getShaderSource(e),o)}else return r}function qg(i,e){let t=Xg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Yg={[wr]:"Linear",[Ar]:"Reinhard",[Rr]:"Cineon",[Xi]:"ACESFilmic",[Pr]:"AgX",[Ir]:"Neutral",[Cr]:"Custom"};function Zg(i,e){let t=Yg[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jo=new F;function Jg(){it.getLuminanceCoefficients(jo);let i=jo.x.toFixed(4),e=jo.y.toFixed(4),t=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $g(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function Kg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Vr(i){return i!==""}function hf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(i){return i.replace(jg,tx)}var ex=new Map;function tx(i,e){let t=tt[e];if(t===void 0){let n=ex.get(e);if(n!==void 0)t=tt[n],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return qc(t)}var nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(i){return i.replace(nx,ix)}function ix(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function df(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var sx={[Tr]:"SHADOWMAP_TYPE_PCF",[Is]:"SHADOWMAP_TYPE_VSM"};function rx(i){return sx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ax={[wi]:"ENVMAP_TYPE_CUBE",[qi]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE_UV"};function ox(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ax[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var lx={[qi]:"ENVMAP_MODE_REFRACTION"};function cx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hx={[lo]:"ENVMAP_BLENDING_MULTIPLY",[Pu]:"ENVMAP_BLENDING_MIX",[Iu]:"ENVMAP_BLENDING_ADD"};function ux(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":hx[i.combine]||"ENVMAP_BLENDING_NONE"}function fx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function dx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=rx(t),c=ox(t),h=cx(t),f=ux(t),u=fx(t),d=$g(t),p=Kg(r),_=s.createProgram(),g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Vr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Vr).join(`
`),m.length>0&&(m+=`
`)):(g=[df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),m=[df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Bn?Zg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,qg("linearToOutputTexel",t.outputColorSpace),Jg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),a=qc(a),a=hf(a,t),a=uf(a,t),o=qc(o),o=hf(o,t),o=uf(o,t),a=ff(a),o=ff(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=y+g+a,v=y+m+o,S=of(s,s.VERTEX_SHADER,b),w=of(s,s.FRAGMENT_SHADER,v);s.attachShader(_,S),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(R){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(_)||"",L=s.getShaderInfoLog(S)||"",C=s.getShaderInfoLog(w)||"",U=P.trim(),z=L.trim(),N=C.trim(),W=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,w);else{let k=cf(s,S,"vertex"),q=cf(s,w,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+k+`
`+q)}else U!==""?ke("WebGLProgram: Program Info Log:",U):(z===""||N==="")&&(B=!1);B&&(R.diagnostics={runnable:W,programLog:U,vertexShader:{log:z,prefix:g},fragmentShader:{log:N,prefix:m}})}s.deleteShader(S),s.deleteShader(w),x=new Bs(s,_),A=Qg(s,_)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,Gg)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}var px=0,Yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zc(e),t.set(e,n)),n}},Zc=class{constructor(e){this.id=px++,this.code=e,this.usedTimes=0}};function mx(i){return i===Ci||i===Or||i===Hr}function gx(i,e,t,n,s,r){let a=new rr,o=new Yc,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,A,I,R,P,L){let C=R.fog,U=P.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=e.get(x.envMap||z,N),B=W&&W.mapping===Lr?W.image.height:null,k=d[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&ke("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let q=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,oe=q!==void 0?q.length:0,he=0;U.morphAttributes.position!==void 0&&(he=1),U.morphAttributes.normal!==void 0&&(he=2),U.morphAttributes.color!==void 0&&(he=3);let re,te,Se,J;if(k){let St=Qn[k];re=St.vertexShader,te=St.fragmentShader}else{re=x.vertexShader,te=x.fragmentShader;let St=o.getVertexShaderStage(x),ft=o.getFragmentShaderStage(x);o.update(x,St,ft),Se=St.id,J=ft.id}let $=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Ge=P.isInstancedMesh===!0,we=P.isBatchedMesh===!0,Qe=!!x.map,Pt=!!x.matcap,nt=!!W,Xe=!!x.aoMap,ut=!!x.lightMap,Oe=!!x.bumpMap&&x.wireframe===!1,_t=!!x.normalMap,Jt=!!x.displacementMap,pn=!!x.emissiveMap,Dt=!!x.metalnessMap,Gt=!!x.roughnessMap,G=x.anisotropy>0,rn=x.clearcoat>0,xt=x.dispersion>0,D=x.retroreflectivity>0,M=x.iridescence>0,X=x.sheen>0,K=x.transmission>0,j=G&&!!x.anisotropyMap,ue=rn&&!!x.clearcoatMap,pe=rn&&!!x.clearcoatNormalMap,ee=rn&&!!x.clearcoatRoughnessMap,se=M&&!!x.iridescenceMap,me=M&&!!x.iridescenceThicknessMap,Ne=X&&!!x.sheenColorMap,ye=X&&!!x.sheenRoughnessMap,ge=!!x.specularMap,Ue=!!x.specularColorMap,ze=!!x.specularIntensityMap,Ke=K&&!!x.transmissionMap,H=K&&!!x.thicknessMap,xe=!!x.gradientMap,ie=!!x.alphaMap,_e=x.alphaTest>0,Ee=!!x.alphaHash,ae=!!x.extensions,Be=Bn;x.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Be=i.toneMapping);let Ie={shaderID:k,shaderType:x.type,shaderName:x.name,vertexShader:re,fragmentShader:te,defines:x.defines,customVertexShaderID:Se,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:we,batchingColor:we&&P._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&P.instanceColor!==null,instancingMorph:Ge&&P.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Qe,matcap:Pt,envMap:nt,envMapMode:nt&&W.mapping,envMapCubeUVHeight:B,aoMap:Xe,lightMap:ut,bumpMap:Oe,normalMap:_t,displacementMap:Jt,emissiveMap:pn,normalMapObjectSpace:_t&&x.normalMapType===Nu,normalMapTangentSpace:_t&&x.normalMapType===zr,packedNormalMap:_t&&x.normalMapType===zr&&mx(x.normalMap.format),metalnessMap:Dt,roughnessMap:Gt,anisotropy:G,anisotropyMap:j,clearcoat:rn,clearcoatMap:ue,clearcoatNormalMap:pe,clearcoatRoughnessMap:ee,dispersion:xt,retroreflection:D,iridescence:M,iridescenceMap:se,iridescenceThicknessMap:me,sheen:X,sheenColorMap:Ne,sheenRoughnessMap:ye,specularMap:ge,specularColorMap:Ue,specularIntensityMap:ze,transmission:K,transmissionMap:Ke,thicknessMap:H,gradientMap:xe,opaque:x.transparent===!1&&x.blending===Ls&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:_e,alphaHash:Ee,combine:x.combine,mapUv:Qe&&p(x.map.channel),aoMapUv:Xe&&p(x.aoMap.channel),lightMapUv:ut&&p(x.lightMap.channel),bumpMapUv:Oe&&p(x.bumpMap.channel),normalMapUv:_t&&p(x.normalMap.channel),displacementMapUv:Jt&&p(x.displacementMap.channel),emissiveMapUv:pn&&p(x.emissiveMap.channel),metalnessMapUv:Dt&&p(x.metalnessMap.channel),roughnessMapUv:Gt&&p(x.roughnessMap.channel),anisotropyMapUv:j&&p(x.anisotropyMap.channel),clearcoatMapUv:ue&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:pe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:me&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:ye&&p(x.sheenRoughnessMap.channel),specularMapUv:ge&&p(x.specularMap.channel),specularColorMapUv:Ue&&p(x.specularColorMap.channel),specularIntensityMapUv:ze&&p(x.specularIntensityMap.channel),transmissionMapUv:Ke&&p(x.transmissionMap.channel),thicknessMapUv:H&&p(x.thicknessMap.channel),alphaMapUv:ie&&p(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(_t||G),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(Qe||ie),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&_t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Te,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:he,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:Qe&&x.map.isVideoTexture===!0&&it.getTransfer(x.map.colorSpace)===ht,decodeVideoTextureEmissive:pn&&x.emissiveMap.isVideoTexture===!0&&it.getTransfer(x.emissiveMap.colorSpace)===ht,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===rt,flipSided:x.side===sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function g(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)A.push(I),A.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(m(A,x),y(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function m(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function y(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function b(x){let A=d[x.type],I;if(A){let R=Qn[A];I=li.clone(R.uniforms)}else I=x.uniforms;return I}function v(x,A){let I=h.get(A);return I!==void 0?++I.usedTimes:(I=new dx(i,A,x,s),c.push(I),h.set(A,I)),I}function S(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:b,acquireProgram:v,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:E}}function xx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function _x(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function pf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,p,_,g,m){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:d,material:p,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},i[e]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=p,y.materialVariant=a(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=g,y.group=m),e++,y}function l(u,d,p,_,g,m,y){y.reversedDepth===!0&&(g=-g);let b=o(u,d,p,_,g,m);p.transmission>0?n.push(b):p.transparent===!0?s.push(b):t.push(b)}function c(u,d,p,_,g,m){let y=o(u,d,p,_,g,m);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,d){t.length>1&&t.sort(u||_x),n.length>1&&n.sort(d||pf),s.length>1&&s.sort(d||pf)}function f(){for(let u=e,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function yx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new mf,i.set(n,[a])):s>=r.length?(a=new mf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function vx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new ce};break;case"SpotLight":t={position:new F,direction:new F,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":t={color:new ce,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Mx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var bx=0;function Sx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ex(i){let e=new vx,t=Mx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new De,a=new De;function o(c){let h=0,f=0,u=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,y=0,b=0,v=0,S=0,w=0,E=0,x=0,A=0,I=0;c.sort(Sx);for(let P=0,L=c.length;P<L;P++){let C=c[P],U=C.color,z=C.intensity,N=C.distance,W=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ci?W=C.shadow.map.texture:W=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=U.r*z,f+=U.g*z,u+=U.b*z;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],z);I++}else if(C.isSunLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,q=t.get(C);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[p]=q,n.sunShadowMap[p]=W;let oe=k.getViewportCount();for(let he=0;he<oe;he++)n.sunShadowMatrix[_+he]=k.getMatrix(he),n.sunShadowCascade[_+he]=k._cascadeData[he];_+=oe,p++}n.sun[d]=B,d++}else if(C.isDirectionalLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,q=t.get(C);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,n.directionalShadow[g]=q,n.directionalShadowMap[g]=W,n.directionalShadowMatrix[g]=C.shadow.matrix,S++}n.directional[g]=B,g++}else if(C.isSpotLight){let B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(U).multiplyScalar(z),B.distance=N,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[y]=B;let k=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,k.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[y]=k.matrix,C.castShadow){let q=t.get(C);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,n.spotShadow[y]=q,n.spotShadowMap[y]=W,E++}y++}else if(C.isRectAreaLight){let B=e.get(C);B.color.copy(U).multiplyScalar(z),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[b]=B,b++}else if(C.isPointLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){let k=C.shadow,q=t.get(C);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,q.shadowCameraNear=k.camera.near,q.shadowCameraFar=k.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=C.shadow.matrix,w++}n.point[m]=B,m++}else if(C.isHemisphereLight){let B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(z),B.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[v]=B,v++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let R=n.hash;(R.sunLength!==d||R.directionalLength!==g||R.pointLength!==m||R.spotLength!==y||R.rectAreaLength!==b||R.hemiLength!==v||R.numSunShadows!==p||R.numDirectionalShadows!==S||R.numPointShadows!==w||R.numSpotShadows!==E||R.numSpotMaps!==x||R.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=g,n.spot.length=y,n.rectArea.length=b,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+x-A,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,R.sunLength=d,R.directionalLength=g,R.pointLength=m,R.spotLength=y,R.rectAreaLength=b,R.hemiLength=v,R.numSunShadows=p,R.numDirectionalShadows=S,R.numPointShadows=w,R.numSpotShadows=E,R.numSpotMaps=x,R.numLightProbes=I,n.version=bx++)}function l(c,h){let f=0,u=0,d=0,p=0,_=0,g=0,m=h.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let v=c[y];if(v.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),f++}else if(v.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(v.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function gf(i){let e=new Ex(i),t=[],n=[],s=[];function r(u){f.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Tx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new gf(i),e.set(s,[o])):r>=a.length?(o=new gf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Rx=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Cx=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],xf=new De,Gr=new F,kc=new F;function Px(i,e,t){let n=new ws,s=new fe,r=new fe,a=new It,o=new qa,l=new Ya,c={},h=t.maxTextureSize,f={[Ti]:sn,[sn]:Ti,[rt]:rt},u=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:wx,fragmentShader:Ax}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new et;p.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ne(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tr;let m=this.type;this.render=function(w,E,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===oo&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Tr);let A=i.getRenderTarget(),I=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(wn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let L=m!==this.type;L&&E.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(U=>U.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,U=w.length;C<U;C++){let z=w[C],N=z.shadow;if(N===void 0){ke("WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let W=N.getFrameExtents();s.multiply(W),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,N.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=B,N.map===null||L===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Is){if(z.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Ut(s.x,s.y,{format:Ci,type:qt,minFilter:tn,magFilter:tn,generateMipmaps:!1}),N.map.texture.name=z.name+".shadowMap",N.map.depthTexture=new vi(s.x,s.y,An),N.map.depthTexture.name=z.name+".shadowMapDepth",N.map.depthTexture.format=qn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Qt,N.map.depthTexture.magFilter=Qt}else z.isPointLight?(N.map=new tl(s.x),N.map.depthTexture=new Wa(s.x,On)):(N.map=new Ut(s.x,s.y),N.map.depthTexture=new vi(s.x,s.y,On)),N.map.depthTexture.name=z.name+".shadowMap",N.map.depthTexture.format=qn,this.type===Tr?(N.map.depthTexture.compareFunction=B?Ko:$o,N.map.depthTexture.minFilter=tn,N.map.depthTexture.magFilter=tn):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Qt,N.map.depthTexture.magFilter=Qt);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==s.x||N.map.height!==s.y)&&N.map.setSize(s.x,s.y);let k=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();z.isPointLight!==!0&&N.updateMatrices(z,x);for(let q=0;q<k;q++){let oe=N.getCamera(q);if(z.isPointLight){let he=N.camera,re=N.matrix,te=z.distance||he.far;te!==he.far&&(he.far=te,he.updateProjectionMatrix()),Gr.setFromMatrixPosition(z.matrixWorld),he.position.copy(Gr),kc.copy(he.position),kc.add(Rx[q]),he.up.copy(Cx[q]),he.lookAt(kc),he.updateMatrixWorld(),re.makeTranslation(-Gr.x,-Gr.y,-Gr.z),xf.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),N._frustum.setFromProjectionMatrix(xf,he.coordinateSystem,he.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,q),i.clear();else{q===0&&(i.setRenderTarget(N.map),i.clear());let he=N.getViewport(q);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),P.viewport(a)}n=N.getFrustum(q),v(E,x,oe,z,this.type)}N.isPointLightShadow!==!0&&this.type===Is&&y(N,x),N.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(A,I,R)};function y(w,E){let x=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ut(s.x,s.y,{format:Ci,type:qt}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(E,null,x,u,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(E,null,x,d,_,null)}function b(w,E,x,A){let I=null,R=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)I=R;else if(I=x.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let P=I.uuid,L=E.uuid,C=c[P];C===void 0&&(C={},c[P]=C);let U=C[L];U===void 0&&(U=I.clone(),C[L]=U,E.addEventListener("dispose",S)),I=U}if(I.visible=E.visible,I.wireframe=E.wireframe,A===Is?I.side=E.shadowSide!==null?E.shadowSide:E.side:I.side=E.shadowSide!==null?E.shadowSide:f[E.side],I.alphaMap=E.alphaMap,I.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,I.map=E.map,I.clipShadows=E.clipShadows,I.clippingPlanes=E.clippingPlanes,I.clipIntersection=E.clipIntersection,I.displacementMap=E.displacementMap,I.displacementScale=E.displacementScale,I.displacementBias=E.displacementBias,I.wireframeLinewidth=E.wireframeLinewidth,I.linewidth=E.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let P=i.properties.get(I);P.light=x}return I}function v(w,E,x,A,I){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===Is)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let L=e.update(w),C=w.material;if(Array.isArray(C)){let U=L.groups;for(let z=0,N=U.length;z<N;z++){let W=U[z],B=C[W.materialIndex];if(B&&B.visible){let k=b(w,B,A,I);w.onBeforeShadow(i,w,E,x,L,k,W),i.renderBufferDirect(x,null,L,k,w,W),w.onAfterShadow(i,w,E,x,L,k,W)}}}else if(C.visible){let U=b(w,C,A,I);w.onBeforeShadow(i,w,E,x,L,U,null),i.renderBufferDirect(x,null,L,U,w,null),w.onAfterShadow(i,w,E,x,L,U,null)}}let P=w.children;for(let L=0,C=P.length;L<C;L++)v(P[L],E,x,A,I)}function S(w){w.target.removeEventListener("dispose",S);for(let x in c){let A=c[x],I=w.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function Ix(i,e){function t(){let H=!1,xe=new It,ie=null,_e=new It(0,0,0,0);return{setMask:function(Ee){ie!==Ee&&!H&&(i.colorMask(Ee,Ee,Ee,Ee),ie=Ee)},setLocked:function(Ee){H=Ee},setClear:function(Ee,ae,Be,Ie,St){St===!0&&(Ee*=Ie,ae*=Ie,Be*=Ie),xe.set(Ee,ae,Be,Ie),_e.equals(xe)===!1&&(i.clearColor(Ee,ae,Be,Ie),_e.copy(xe))},reset:function(){H=!1,ie=null,_e.set(-1,0,0,0)}}}function n(){let H=!1,xe=!1,ie=null,_e=null,Ee=null;return{setReversed:function(ae){if(xe!==ae){let Be=e.get("EXT_clip_control");ae?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),xe=ae;let Ie=Ee;Ee=null,this.setClear(Ie)}},getReversed:function(){return xe},setTest:function(ae){ae?$(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(ae){ie!==ae&&!H&&(i.depthMask(ae),ie=ae)},setFunc:function(ae){if(xe&&(ae=Xu[ae]),_e!==ae){switch(ae){case Ra:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Pa:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case Na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=ae}},setLocked:function(ae){H=ae},setClear:function(ae){Ee!==ae&&(Ee=ae,xe&&(ae=1-ae),i.clearDepth(ae))},reset:function(){H=!1,ie=null,_e=null,Ee=null,xe=!1}}}function s(){let H=!1,xe=null,ie=null,_e=null,Ee=null,ae=null,Be=null,Ie=null,St=null;return{setTest:function(ft){H||(ft?$(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(ft){xe!==ft&&!H&&(i.stencilMask(ft),xe=ft)},setFunc:function(ft,In,kn){(ie!==ft||_e!==In||Ee!==kn)&&(i.stencilFunc(ft,In,kn),ie=ft,_e=In,Ee=kn)},setOp:function(ft,In,kn){(ae!==ft||Be!==In||Ie!==kn)&&(i.stencilOp(ft,In,kn),ae=ft,Be=In,Ie=kn)},setLocked:function(ft){H=ft},setClear:function(ft){St!==ft&&(i.clearStencil(ft),St=ft)},reset:function(){H=!1,xe=null,ie=null,_e=null,Ee=null,ae=null,Be=null,Ie=null,St=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,y=null,b=null,v=null,S=null,w=null,E=null,x=new ce(0,0,0),A=0,I=!1,R=null,P=null,L=null,C=null,U=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,W=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=W>=2);let k=null,q={},oe=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),re=new It().fromArray(oe),te=new It().fromArray(he);function Se(H,xe,ie,_e){let Ee=new Uint8Array(4),ae=i.createTexture();i.bindTexture(H,ae),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<ie;Be++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(xe+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return ae}let J={};J[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(ys),Oe(!1),_t(dc),$(i.CULL_FACE),Xe(wn);function $(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function Te(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function Ge(H,xe){return u[H]!==xe?(i.bindFramebuffer(H,xe),u[H]=xe,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xe),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function we(H,xe){let ie=p,_e=!1;if(H){ie=d.get(xe),ie===void 0&&(ie=[],d.set(xe,ie));let Ee=H.textures;if(ie.length!==Ee.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Be=Ee.length;ae<Be;ae++)ie[ae]=i.COLOR_ATTACHMENT0+ae;ie.length=Ee.length,_e=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,_e=!0);_e&&i.drawBuffers(ie)}function Qe(H){return _!==H?(i.useProgram(H),_=H,!0):!1}let Pt={[Wi]:i.FUNC_ADD,[du]:i.FUNC_SUBTRACT,[pu]:i.FUNC_REVERSE_SUBTRACT};Pt[mu]=i.MIN,Pt[gu]=i.MAX;let nt={[xu]:i.ZERO,[_u]:i.ONE,[yu]:i.SRC_COLOR,[gc]:i.SRC_ALPHA,[Tu]:i.SRC_ALPHA_SATURATE,[Su]:i.DST_COLOR,[Mu]:i.DST_ALPHA,[vu]:i.ONE_MINUS_SRC_COLOR,[xc]:i.ONE_MINUS_SRC_ALPHA,[Eu]:i.ONE_MINUS_DST_COLOR,[bu]:i.ONE_MINUS_DST_ALPHA,[wu]:i.CONSTANT_COLOR,[Au]:i.ONE_MINUS_CONSTANT_COLOR,[Ru]:i.CONSTANT_ALPHA,[Cu]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(H,xe,ie,_e,Ee,ae,Be,Ie,St,ft){if(H===wn){g===!0&&(Te(i.BLEND),g=!1);return}if(g===!1&&($(i.BLEND),g=!0),H!==fu){if(H!==m||ft!==I){if((y!==Wi||S!==Wi)&&(i.blendEquation(i.FUNC_ADD),y=Wi,S=Wi),ft)switch(H){case Ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $n:i.blendFunc(i.ONE,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",H);break}else switch(H){case Ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $n:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pc:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mc:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",H);break}b=null,v=null,w=null,E=null,x.set(0,0,0),A=0,m=H,I=ft}return}Ee=Ee||xe,ae=ae||ie,Be=Be||_e,(xe!==y||Ee!==S)&&(i.blendEquationSeparate(Pt[xe],Pt[Ee]),y=xe,S=Ee),(ie!==b||_e!==v||ae!==w||Be!==E)&&(i.blendFuncSeparate(nt[ie],nt[_e],nt[ae],nt[Be]),b=ie,v=_e,w=ae,E=Be),(Ie.equals(x)===!1||St!==A)&&(i.blendColor(Ie.r,Ie.g,Ie.b,St),x.copy(Ie),A=St),m=H,I=!1}function ut(H,xe){H.side===rt?Te(i.CULL_FACE):$(i.CULL_FACE);let ie=H.side===sn;xe&&(ie=!ie),Oe(ie),H.blending===Ls&&H.transparent===!1?Xe(wn):Xe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let _e=H.stencilWrite;o.setTest(_e),_e&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),pn(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(H){R!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),R=H)}function _t(H){H!==hu?($(i.CULL_FACE),H!==P&&(H===dc?i.cullFace(i.BACK):H===uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),P=H}function Jt(H){H!==L&&(N&&i.lineWidth(H),L=H)}function pn(H,xe,ie){H?($(i.POLYGON_OFFSET_FILL),(C!==xe||U!==ie)&&(C=xe,U=ie,a.getReversed()&&(xe=-xe),i.polygonOffset(xe,ie))):Te(i.POLYGON_OFFSET_FILL)}function Dt(H){H?$(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function Gt(H){H===void 0&&(H=i.TEXTURE0+z-1),k!==H&&(i.activeTexture(H),k=H)}function G(H,xe,ie){ie===void 0&&(k===null?ie=i.TEXTURE0+z-1:ie=k);let _e=q[ie];_e===void 0&&(_e={type:void 0,texture:void 0},q[ie]=_e),(_e.type!==H||_e.texture!==xe)&&(k!==ie&&(i.activeTexture(ie),k=ie),i.bindTexture(H,xe||J[H]),_e.type=H,_e.texture=xe)}function rn(){let H=q[k];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function xt(){try{i.compressedTexImage2D(...arguments)}catch(H){Ve("WebGLState:",H)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(H){Ve("WebGLState:",H)}}function M(){try{i.texSubImage2D(...arguments)}catch(H){Ve("WebGLState:",H)}}function X(){try{i.texSubImage3D(...arguments)}catch(H){Ve("WebGLState:",H)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(H){Ve("WebGLState:",H)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(H){Ve("WebGLState:",H)}}function ue(){try{i.texStorage2D(...arguments)}catch(H){Ve("WebGLState:",H)}}function pe(){try{i.texStorage3D(...arguments)}catch(H){Ve("WebGLState:",H)}}function ee(){try{i.texImage2D(...arguments)}catch(H){Ve("WebGLState:",H)}}function se(){try{i.texImage3D(...arguments)}catch(H){Ve("WebGLState:",H)}}function me(H){return f[H]!==void 0?f[H]:i.getParameter(H)}function Ne(H,xe){f[H]!==xe&&(i.pixelStorei(H,xe),f[H]=xe)}function ye(H){re.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),re.copy(H))}function ge(H){te.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),te.copy(H))}function Ue(H,xe){let ie=c.get(xe);ie===void 0&&(ie=new WeakMap,c.set(xe,ie));let _e=ie.get(H);_e===void 0&&(_e=i.getUniformBlockIndex(xe,H.name),ie.set(H,_e))}function ze(H,xe){let _e=c.get(xe).get(H);l.get(xe)!==_e&&(i.uniformBlockBinding(xe,_e,H.__bindingPointIndex),l.set(xe,_e))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},k=null,q={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,y=null,b=null,v=null,S=null,w=null,E=null,x=new ce(0,0,0),A=0,I=!1,R=null,P=null,L=null,C=null,U=null,re.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:Te,bindFramebuffer:Ge,drawBuffers:we,useProgram:Qe,setBlending:Xe,setMaterial:ut,setFlipSided:Oe,setCullFace:_t,setLineWidth:Jt,setPolygonOffset:pn,setScissorTest:Dt,activeTexture:Gt,bindTexture:G,unbindTexture:rn,compressedTexImage2D:xt,compressedTexImage3D:D,texImage2D:ee,texImage3D:se,pixelStorei:Ne,getParameter:me,updateUBOMapping:Ue,uniformBlockBinding:ze,texStorage2D:ue,texStorage3D:pe,texSubImage2D:M,texSubImage3D:X,compressedTexSubImage2D:K,compressedTexSubImage3D:j,scissor:ye,viewport:ge,reset:Ke}}function Lx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,h=new WeakMap,f=new Set,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,M){return p?new OffscreenCanvas(D,M):tr("canvas")}function g(D,M,X){let K=1,j=xt(D);if((j.width>X||j.height>X)&&(K=X/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&D instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&D instanceof ImageBitmap||typeof VideoFrame!="undefined"&&D instanceof VideoFrame){let ue=Math.floor(K*j.width),pe=Math.floor(K*j.height);u===void 0&&(u=_(ue,pe));let ee=M?_(ue,pe):u;return ee.width=ue,ee.height=pe,ee.getContext("2d").drawImage(D,0,0,ue,pe),ke("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ue+"x"+pe+")."),ee}else return"data"in D&&ke("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),D;return D}function m(D){return D.generateMipmaps}function y(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(D,M,X,K,j,ue=!1){if(D!==null){if(i[D]!==void 0)return i[D];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pe;K&&(pe=e.get("EXT_texture_norm16"),pe||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=M;if(M===i.RED&&(X===i.FLOAT&&(ee=i.R32F),X===i.HALF_FLOAT&&(ee=i.R16F),X===i.UNSIGNED_BYTE&&(ee=i.R8),X===i.UNSIGNED_SHORT&&pe&&(ee=pe.R16_EXT),X===i.SHORT&&pe&&(ee=pe.R16_SNORM_EXT)),M===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.R8UI),X===i.UNSIGNED_SHORT&&(ee=i.R16UI),X===i.UNSIGNED_INT&&(ee=i.R32UI),X===i.BYTE&&(ee=i.R8I),X===i.SHORT&&(ee=i.R16I),X===i.INT&&(ee=i.R32I)),M===i.RG&&(X===i.FLOAT&&(ee=i.RG32F),X===i.HALF_FLOAT&&(ee=i.RG16F),X===i.UNSIGNED_BYTE&&(ee=i.RG8),X===i.UNSIGNED_SHORT&&pe&&(ee=pe.RG16_EXT),X===i.SHORT&&pe&&(ee=pe.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RG8UI),X===i.UNSIGNED_SHORT&&(ee=i.RG16UI),X===i.UNSIGNED_INT&&(ee=i.RG32UI),X===i.BYTE&&(ee=i.RG8I),X===i.SHORT&&(ee=i.RG16I),X===i.INT&&(ee=i.RG32I)),M===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),X===i.UNSIGNED_INT&&(ee=i.RGB32UI),X===i.BYTE&&(ee=i.RGB8I),X===i.SHORT&&(ee=i.RGB16I),X===i.INT&&(ee=i.RGB32I)),M===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),X===i.UNSIGNED_INT&&(ee=i.RGBA32UI),X===i.BYTE&&(ee=i.RGBA8I),X===i.SHORT&&(ee=i.RGBA16I),X===i.INT&&(ee=i.RGBA32I)),M===i.RGB&&(X===i.UNSIGNED_SHORT&&pe&&(ee=pe.RGB16_EXT),X===i.SHORT&&pe&&(ee=pe.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),M===i.RGBA){let se=ue?er:it.getTransfer(j);X===i.FLOAT&&(ee=i.RGBA32F),X===i.HALF_FLOAT&&(ee=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ee=se===ht?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&pe&&(ee=pe.RGBA16_EXT),X===i.SHORT&&pe&&(ee=pe.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function S(D,M){let X;return D?M===null||M===On||M===Ns?X=i.DEPTH24_STENCIL8:M===An?X=i.DEPTH32F_STENCIL8:M===Ds&&(X=i.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===On||M===Ns?X=i.DEPTH_COMPONENT24:M===An?X=i.DEPTH_COMPONENT32F:M===Ds&&(X=i.DEPTH_COMPONENT16),X}function w(D,M){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Qt&&D.minFilter!==tn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function E(D){let M=D.target;M.removeEventListener("dispose",E),A(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&f.delete(M)}function x(D){let M=D.target;M.removeEventListener("dispose",x),R(M)}function A(D){let M=n.get(D);if(M.__webglInit===void 0)return;let X=D.source,K=d.get(X);if(K){let j=K[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&I(D),Object.keys(K).length===0&&d.delete(X)}n.remove(D)}function I(D){let M=n.get(D);i.deleteTexture(M.__webglTexture);let X=D.source,K=d.get(X);delete K[M.__cacheKey],a.memory.textures--}function R(D){let M=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let j=0;j<M.__webglFramebuffer[K].length;j++)i.deleteFramebuffer(M.__webglFramebuffer[K][j]);else i.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)i.deleteFramebuffer(M.__webglFramebuffer[K]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let X=D.textures;for(let K=0,j=X.length;K<j;K++){let ue=n.get(X[K]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(X[K])}n.remove(D)}let P=0;function L(){P=0}function C(){return P}function U(D){P=D}function z(){let D=P;return D>=s.maxTextures&&ke("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,D}function N(D){let M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function W(D,M){let X=n.get(D);if(D.isVideoTexture&&G(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&X.__version!==D.version){let K=D.image;if(K===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(X,D,M);return}}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+M)}function B(D,M){let X=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){Te(X,D,M);return}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+M)}function k(D,M){let X=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){Te(X,D,M);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+M)}function q(D,M){let X=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&X.__version!==D.version){Ge(X,D,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+M)}let oe={[fn]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Ua]:i.MIRRORED_REPEAT},he={[Qt]:i.NEAREST,[Lu]:i.NEAREST_MIPMAP_NEAREST,[Dr]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},re={[Fu]:i.NEVER,[ku]:i.ALWAYS,[Bu]:i.LESS,[$o]:i.LEQUAL,[Ou]:i.EQUAL,[Ko]:i.GEQUAL,[Hu]:i.GREATER,[zu]:i.NOTEQUAL};function te(D,M){if(M.type===An&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===tn||M.magFilter===uo||M.magFilter===Dr||M.magFilter===Ai||M.minFilter===tn||M.minFilter===uo||M.minFilter===Dr||M.minFilter===Ai)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,oe[M.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,oe[M.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,oe[M.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,he[M.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,he[M.minFilter]),M.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Qt||M.minFilter!==Dr&&M.minFilter!==Ai||M.type===An&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Se(D,M){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",E));let K=M.source,j=d.get(K);j===void 0&&(j={},d.set(K,j));let ue=N(M);if(ue!==D.__cacheKey){j[ue]===void 0&&(j[ue]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),j[ue].usedTimes++;let pe=j[D.__cacheKey];pe!==void 0&&(j[D.__cacheKey].usedTimes--,pe.usedTimes===0&&I(M)),D.__cacheKey=ue,D.__webglTexture=j[ue].texture}return X}function J(D,M,X){return Math.floor(Math.floor(D/X)/M)}function $(D,M,X,K){let ue=D.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,X,K,M.data);else{ue.sort((Ne,ye)=>Ne.start-ye.start);let pe=0;for(let Ne=1;Ne<ue.length;Ne++){let ye=ue[pe],ge=ue[Ne],Ue=ye.start+ye.count,ze=J(ge.start,M.width,4),Ke=J(ye.start,M.width,4);ge.start<=Ue+1&&ze===Ke&&J(ge.start+ge.count-1,M.width,4)===ze?ye.count=Math.max(ye.count,ge.start+ge.count-ye.start):(++pe,ue[pe]=ge)}ue.length=pe+1;let ee=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Ne=0,ye=ue.length;Ne<ye;Ne++){let ge=ue[Ne],Ue=Math.floor(ge.start/4),ze=Math.ceil(ge.count/4),Ke=Ue%M.width,H=Math.floor(Ue/M.width),xe=ze,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,Ke,H,xe,ie,X,K,M.data)}D.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function Te(D,M,X){let K=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=i.TEXTURE_3D);let j=Se(D,M),ue=M.source;t.bindTexture(K,D.__webglTexture,i.TEXTURE0+X);let pe=n.get(ue);if(ue.version!==pe.__version||j===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap!="undefined"&&M.image instanceof ImageBitmap)===!1){let ie=it.getPrimaries(it.workingColorSpace),_e=M.colorSpace===vn?null:it.getPrimaries(M.colorSpace),Ee=M.colorSpace===vn||ie===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let se=g(M.image,!1,s.maxTextureSize);se=rn(M,se);let me=r.convert(M.format,M.colorSpace),Ne=r.convert(M.type),ye=v(M.internalFormat,me,Ne,M.normalized,M.colorSpace,M.isVideoTexture);te(K,M);let ge,Ue=M.mipmaps,ze=M.isVideoTexture!==!0,Ke=pe.__version===void 0||j===!0,H=ue.dataReady,xe=w(M,se);if(M.isDepthTexture)ye=S(M.format===Ri,M.type),Ke&&(ze?t.texStorage2D(i.TEXTURE_2D,1,ye,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,ye,se.width,se.height,0,me,Ne,null));else if(M.isDataTexture)if(Ue.length>0){ze&&Ke&&t.texStorage2D(i.TEXTURE_2D,xe,ye,Ue[0].width,Ue[0].height);for(let ie=0,_e=Ue.length;ie<_e;ie++)ge=Ue[ie],ze?H&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ge.width,ge.height,me,Ne,ge.data):t.texImage2D(i.TEXTURE_2D,ie,ye,ge.width,ge.height,0,me,Ne,ge.data);M.generateMipmaps=!1}else ze?(Ke&&t.texStorage2D(i.TEXTURE_2D,xe,ye,se.width,se.height),H&&$(M,se,me,Ne)):t.texImage2D(i.TEXTURE_2D,0,ye,se.width,se.height,0,me,Ne,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ze&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,ye,Ue[0].width,Ue[0].height,se.depth);for(let ie=0,_e=Ue.length;ie<_e;ie++)if(ge=Ue[ie],M.format!==Rn)if(me!==null)if(ze){if(H)if(M.layerUpdates.size>0){let Ee=Pc(ge.width,ge.height,M.format,M.type);for(let ae of M.layerUpdates){let Be=ge.data.subarray(ae*Ee/ge.data.BYTES_PER_ELEMENT,(ae+1)*Ee/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,ae,ge.width,ge.height,1,me,Be)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ge.width,ge.height,se.depth,me,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,ye,ge.width,ge.height,se.depth,0,ge.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ge.width,ge.height,se.depth,me,Ne,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,ye,ge.width,ge.height,se.depth,0,me,Ne,ge.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ze&&Ke&&t.texStorage2D(i.TEXTURE_2D,xe,ye,Ue[0].width,Ue[0].height);for(let ie=0,_e=Ue.length;ie<_e;ie++)ge=Ue[ie],M.format!==Rn?me!==null?ze?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,ye,ge.width,ge.height,0,ge.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?H&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ge.width,ge.height,me,Ne,ge.data):t.texImage2D(i.TEXTURE_2D,ie,ye,ge.width,ge.height,0,me,Ne,ge.data)}else if(M.isDataArrayTexture)if(ze){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,ye,se.width,se.height,se.depth),H)if(M.layerUpdates.size>0){let ie=Pc(se.width,se.height,M.format,M.type);for(let _e of M.layerUpdates){let Ee=se.data.subarray(_e*ie/se.data.BYTES_PER_ELEMENT,(_e+1)*ie/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,se.width,se.height,1,me,Ne,Ee)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,me,Ne,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,se.width,se.height,se.depth,0,me,Ne,se.data);else if(M.isData3DTexture)ze?(Ke&&t.texStorage3D(i.TEXTURE_3D,xe,ye,se.width,se.height,se.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,me,Ne,se.data)):t.texImage3D(i.TEXTURE_3D,0,ye,se.width,se.height,se.depth,0,me,Ne,se.data);else if(M.isFramebufferTexture){if(Ke)if(ze)t.texStorage2D(i.TEXTURE_2D,xe,ye,se.width,se.height);else{let ie=se.width,_e=se.height;for(let Ee=0;Ee<xe;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,ye,ie,_e,0,me,Ne,null),ie>>=1,_e>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),se.parentNode!==ie){ie.appendChild(se),f.add(M),ie.onpaint=_e=>{let Ee=_e.changedElements;for(let ae of f)Ee.includes(ae.image)&&(ae.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{let Ee=i.RGBA,ae=i.RGBA,Be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ee,ae,Be,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(ze&&Ke){let ie=xt(Ue[0]);t.texStorage2D(i.TEXTURE_2D,xe,ye,ie.width,ie.height)}for(let ie=0,_e=Ue.length;ie<_e;ie++)ge=Ue[ie],ze?H&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,me,Ne,ge):t.texImage2D(i.TEXTURE_2D,ie,ye,me,Ne,ge);M.generateMipmaps=!1}else if(ze){if(Ke){let ie=xt(se);t.texStorage2D(i.TEXTURE_2D,xe,ye,ie.width,ie.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Ne,se)}else t.texImage2D(i.TEXTURE_2D,0,ye,me,Ne,se);m(M)&&y(K),pe.__version=ue.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Ge(D,M,X){if(M.image.length!==6)return;let K=Se(D,M),j=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+X);let ue=n.get(j);if(j.version!==ue.__version||K===!0){t.activeTexture(i.TEXTURE0+X);let pe=it.getPrimaries(it.workingColorSpace),ee=M.colorSpace===vn?null:it.getPrimaries(M.colorSpace),se=M.colorSpace===vn||pe===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let me=M.isCompressedTexture||M.image[0].isCompressedTexture,Ne=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let ae=0;ae<6;ae++)!me&&!Ne?ye[ae]=g(M.image[ae],!0,s.maxCubemapSize):ye[ae]=Ne?M.image[ae].image:M.image[ae],ye[ae]=rn(M,ye[ae]);let ge=ye[0],Ue=r.convert(M.format,M.colorSpace),ze=r.convert(M.type),Ke=v(M.internalFormat,Ue,ze,M.normalized,M.colorSpace),H=M.isVideoTexture!==!0,xe=ue.__version===void 0||K===!0,ie=j.dataReady,_e=w(M,ge);te(i.TEXTURE_CUBE_MAP,M);let Ee;if(me){H&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Ke,ge.width,ge.height);for(let ae=0;ae<6;ae++){Ee=ye[ae].mipmaps;for(let Be=0;Be<Ee.length;Be++){let Ie=Ee[Be];M.format!==Rn?Ue!==null?H?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,0,0,Ie.width,Ie.height,Ue,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,Ke,Ie.width,Ie.height,0,Ie.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,0,0,Ie.width,Ie.height,Ue,ze,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,Ke,Ie.width,Ie.height,0,Ue,ze,Ie.data)}}}else{if(Ee=M.mipmaps,H&&xe){Ee.length>0&&_e++;let ae=xt(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Ke,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Ne){H?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ye[ae].width,ye[ae].height,Ue,ze,ye[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ke,ye[ae].width,ye[ae].height,0,Ue,ze,ye[ae].data);for(let Be=0;Be<Ee.length;Be++){let St=Ee[Be].image[ae].image;H?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,0,0,St.width,St.height,Ue,ze,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,Ke,St.width,St.height,0,Ue,ze,St.data)}}else{H?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ue,ze,ye[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ke,Ue,ze,ye[ae]);for(let Be=0;Be<Ee.length;Be++){let Ie=Ee[Be];H?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,0,0,Ue,ze,Ie.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,Ke,Ue,ze,Ie.image[ae])}}}m(M)&&y(i.TEXTURE_CUBE_MAP),ue.__version=j.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function we(D,M,X,K,j,ue){let pe=r.convert(X.format,X.colorSpace),ee=r.convert(X.type),se=v(X.internalFormat,pe,ee,X.normalized,X.colorSpace),me=n.get(M),Ne=n.get(X);if(Ne.__renderTarget=M,!me.__hasExternalTextures){let ye=Math.max(1,M.width>>ue),ge=Math.max(1,M.height>>ue);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,ue,se,ye,ge,M.depth,0,pe,ee,null):t.texImage2D(j,ue,se,ye,ge,0,pe,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Gt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,j,Ne.__webglTexture,0,Dt(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,j,Ne.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(D,M,X){if(i.bindRenderbuffer(i.RENDERBUFFER,D),M.depthBuffer){let K=M.depthTexture,j=K&&K.isDepthTexture?K.type:null,ue=S(M.stencilBuffer,j),pe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Gt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt(M),ue,M.width,M.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt(M),ue,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ue,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,D)}else{let K=M.textures;for(let j=0;j<K.length;j++){let ue=K[j],pe=r.convert(ue.format,ue.colorSpace),ee=r.convert(ue.type),se=v(ue.internalFormat,pe,ee,ue.normalized,ue.colorSpace);Gt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt(M),se,M.width,M.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt(M),se,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,se,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(D,M,X){let K=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(M.depthTexture);if(j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K){if(j.__webglInit===void 0&&(j.__webglInit=!0,M.depthTexture.addEventListener("dispose",E)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),te(i.TEXTURE_CUBE_MAP,M.depthTexture);let me=r.convert(M.depthTexture.format),Ne=r.convert(M.depthTexture.type),ye;M.depthTexture.format===qn?ye=i.DEPTH_COMPONENT24:M.depthTexture.format===Ri&&(ye=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ye,M.width,M.height,0,me,Ne,null)}}else W(M.depthTexture,0);let ue=j.__webglTexture,pe=Dt(M),ee=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,se=M.depthTexture.format===Ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===qn)Gt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ee,ue,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,se,ee,ue,0);else if(M.depthTexture.format===Ri)Gt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ee,ue,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,se,ee,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(D){let M=n.get(D),X=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){let K=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=K}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(X)for(let K=0;K<6;K++)Pt(M.__webglFramebuffer[K],D,K);else{let K=D.texture.mipmaps;K&&K.length>0?Pt(M.__webglFramebuffer[0],D,0):Pt(M.__webglFramebuffer,D,0)}else if(X){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=i.createRenderbuffer(),Qe(M.__webglDepthbuffer[K],D,!1);else{let j=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ue)}}else{let K=D.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Qe(M.__webglDepthbuffer,D,!1);else{let j=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ue)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(D,M,X){let K=n.get(D);M!==void 0&&we(K.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&nt(D)}function ut(D){let M=D.texture,X=n.get(D),K=n.get(M);D.addEventListener("dispose",x);let j=D.textures,ue=D.isWebGLCubeRenderTarget===!0,pe=j.length>1;if(pe||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=M.version,a.memory.textures++),ue){X.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[ee]=[];for(let se=0;se<M.mipmaps.length;se++)X.__webglFramebuffer[ee][se]=i.createFramebuffer()}else X.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let ee=0;ee<M.mipmaps.length;ee++)X.__webglFramebuffer[ee]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(pe)for(let ee=0,se=j.length;ee<se;ee++){let me=n.get(j[ee]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&Gt(D)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ee=0;ee<j.length;ee++){let se=j[ee];X.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ee]);let me=r.convert(se.format,se.colorSpace),Ne=r.convert(se.type),ye=v(se.internalFormat,me,Ne,se.normalized,se.colorSpace,D.isXRRenderTarget===!0),ge=Dt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ye,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,X.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Qe(X.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),te(i.TEXTURE_CUBE_MAP,M);for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0)for(let se=0;se<M.mipmaps.length;se++)we(X.__webglFramebuffer[ee][se],D,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se);else we(X.__webglFramebuffer[ee],D,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(M)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let ee=0,se=j.length;ee<se;ee++){let me=j[ee],Ne=n.get(me),ye=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ye=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,Ne.__webglTexture),te(ye,me),we(X.__webglFramebuffer,D,me,i.COLOR_ATTACHMENT0+ee,ye,0),m(me)&&y(ye)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ee=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,K.__webglTexture),te(ee,M),M.mipmaps&&M.mipmaps.length>0)for(let se=0;se<M.mipmaps.length;se++)we(X.__webglFramebuffer[se],D,M,i.COLOR_ATTACHMENT0,ee,se);else we(X.__webglFramebuffer,D,M,i.COLOR_ATTACHMENT0,ee,0);m(M)&&y(ee),t.unbindTexture()}D.depthBuffer&&nt(D)}function Oe(D){let M=D.textures;for(let X=0,K=M.length;X<K;X++){let j=M[X];if(m(j)){let ue=b(D),pe=n.get(j).__webglTexture;t.bindTexture(ue,pe),y(ue),t.unbindTexture()}}}let _t=[],Jt=[];function pn(D){if(D.samples>0){if(Gt(D)===!1){let M=D.textures,X=D.width,K=D.height,j=i.COLOR_BUFFER_BIT,ue=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(D),ee=M.length>1;if(ee)for(let me=0;me<M.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);let se=D.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let me=0;me<M.length;me++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);let Ne=n.get(M[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,X,K,0,0,X,K,j,i.NEAREST),l===!0&&(_t.length=0,Jt.length=0,_t.push(i.COLOR_ATTACHMENT0+me),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(_t.push(ue),Jt.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Jt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let me=0;me<M.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);let Ne=n.get(M[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let M=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Dt(D){return Math.min(s.maxSamples,D.samples)}function Gt(D){let M=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function G(D){let M=a.render.frame;h.get(D)!==M&&(h.set(D,M),D.update())}function rn(D,M){let X=D.colorSpace,K=D.format,j=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==js&&X!==vn&&(it.getTransfer(X)===ht?(K!==Rn||j!==mn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",X)),M}function xt(D){return typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame!="undefined"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=L,this.getTextureUnits=C,this.setTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=q,this.rebindTextures=Xe,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Dx(i,e){function t(n,s=vn){let r,a=it.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yc)return i.BYTE;if(n===vc)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===fo)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===qt)return i.HALF_FLOAT;if(n===Sc)return i.ALPHA;if(n===Ec)return i.RGB;if(n===Rn)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===Ri)return i.DEPTH_STENCIL;if(n===go)return i.RED;if(n===xo)return i.RED_INTEGER;if(n===Ci)return i.RG;if(n===_o)return i.RG_INTEGER;if(n===yo)return i.RGBA_INTEGER;if(n===Nr||n===Ur||n===Fr||n===Br)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===Mo||n===bo||n===So)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===To||n===wo||n===Ao||n===Ro||n===Or||n===Co)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===To)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ao)return r.COMPRESSED_R11_EAC;if(n===Ro)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Or)return r.COMPRESSED_RG11_EAC;if(n===Co)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Po||n===Io||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Bo||n===Oo||n===Ho||n===zo||n===ko||n===Go||n===Vo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Po)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Io)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===No)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ho)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Go)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wo||n===Xo||n===qo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wo)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yo||n===Zo||n===Hr||n===Jo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ux=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Jc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new mr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ct({vertexShader:Nx,fragmentShader:Ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new Ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$c=class extends Yn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,_=typeof XRWebGLBinding!="undefined",g=new Jc,m={},y=t.getContextAttributes(),b=null,v=null,S=[],w=[],E=new fe,x=null,A=null,I=new Kt;I.viewport=new It;let R=new Kt;R.viewport=new It;let P=[I,R],L=new ro,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let $=S[J];return $===void 0&&($=new Ss,S[J]=$),$.getTargetRaySpace()},this.getControllerGrip=function(J){let $=S[J];return $===void 0&&($=new Ss,S[J]=$),$.getGripSpace()},this.getHand=function(J){let $=S[J];return $===void 0&&($=new Ss,S[J]=$),$.getHandSpace()};function z(J){let $=w.indexOf(J.inputSource);if($===-1)return;let Te=S[$];Te!==void 0&&(Te.update(J.inputSource,J.frame,c||a),Te.dispatchEvent({type:J.type,data:J.inputSource}))}function N(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",W);for(let J=0;J<S.length;J++){let $=w[J];$!==null&&(w[J]=null,S[J].disconnect($))}C=null,U=null,g.reset();for(let J in m)delete m[J];if(e.setRenderTarget(b),d=null,u=null,f=null,s=null,v=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(E.width,E.height,!1),A!==null){let J=A.camera;J.fov=A.fov,J.zoom=A.zoom,J.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",N),s.addEventListener("inputsourceschange",W),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ge=null,we=null;y.depth&&(we=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=y.stencil?Ri:qn,Ge=y.stencil?Ns:On);let Qe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Qe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Ut(u.textureWidth,u.textureHeight,{format:Rn,type:mn,depthTexture:new vi(u.textureWidth,u.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Te={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ut(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Se.setContext(s),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(J){for(let $=0;$<J.removed.length;$++){let Te=J.removed[$],Ge=w.indexOf(Te);Ge>=0&&(w[Ge]=null,S[Ge].disconnect(Te))}for(let $=0;$<J.added.length;$++){let Te=J.added[$],Ge=w.indexOf(Te);if(Ge===-1){for(let Qe=0;Qe<S.length;Qe++)if(Qe>=w.length){w.push(Te),Ge=Qe;break}else if(w[Qe]===null){w[Qe]=Te,Ge=Qe;break}if(Ge===-1)break}let we=S[Ge];we&&we.connect(Te)}}let B=new F,k=new F;function q(J,$,Te){B.setFromMatrixPosition($.matrixWorld),k.setFromMatrixPosition(Te.matrixWorld);let Ge=B.distanceTo(k),we=$.projectionMatrix.elements,Qe=Te.projectionMatrix.elements,Pt=we[14]/(we[10]-1),nt=we[14]/(we[10]+1),Xe=(we[9]+1)/we[5],ut=(we[9]-1)/we[5],Oe=(we[8]-1)/we[0],_t=(Qe[8]+1)/Qe[0],Jt=Pt*Oe,pn=Pt*_t,Dt=Ge/(-Oe+_t),Gt=Dt*-Oe;if($.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Gt),J.translateZ(Dt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),we[10]===-1)J.projectionMatrix.copy($.projectionMatrix),J.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let G=Pt+Dt,rn=nt+Dt,xt=Jt-Gt,D=pn+(Ge-Gt),M=Xe*nt/rn*G,X=ut*nt/rn*G;J.projectionMatrix.makePerspective(xt,D,M,X,G,rn),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function oe(J,$){$===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices($.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let $=J.near,Te=J.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(Te=g.depthFar)),L.near=R.near=I.near=$,L.far=R.far=I.far=Te,(C!==L.near||U!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),C=L.near,U=L.far),L.layers.mask=J.layers.mask|6,I.layers.mask=L.layers.mask&-5,R.layers.mask=L.layers.mask&-3;let Ge=J.parent,we=L.cameras;oe(L,Ge);for(let Qe=0;Qe<we.length;Qe++)oe(we[Qe],Ge);we.length===2?q(L,I,R):L.projectionMatrix.copy(I.projectionMatrix),A===null&&J.isPerspectiveCamera&&(A={camera:J,fov:J.fov,zoom:J.zoom}),he(J,L,Ge)};function he(J,$,Te){Te===null?J.matrix.copy($.matrixWorld):(J.matrix.copy(Te.matrixWorld),J.matrix.invert(),J.matrix.multiply($.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy($.projectionMatrix),J.projectionMatrixInverse.copy($.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ir*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(J){return m[J]};let re=null;function te(J,$){if(h=$.getViewerPose(c||a),p=$,h!==null){let Te=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Ge=!1;Te.length!==L.cameras.length&&(L.cameras.length=0,Ge=!0);for(let nt=0;nt<Te.length;nt++){let Xe=Te[nt],ut=null;if(d!==null)ut=d.getViewport(Xe);else{let _t=f.getViewSubImage(u,Xe);ut=_t.viewport,nt===0&&(e.setRenderTargetTextures(v,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(v))}let Oe=P[nt];Oe===void 0&&(Oe=new Kt,Oe.layers.enable(nt),Oe.viewport=new It,P[nt]=Oe),Oe.matrix.fromArray(Xe.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Xe.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(ut.x,ut.y,ut.width,ut.height),nt===0&&(L.matrix.copy(Oe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ge===!0&&L.cameras.push(Oe)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let nt=f.getDepthInformation(Te[0]);nt&&nt.isValid&&nt.texture&&g.init(nt,s.renderState)}if(we&&we.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let nt=0;nt<Te.length;nt++){let Xe=Te[nt].camera;if(Xe){let ut=m[Xe];ut||(ut=new mr,m[Xe]=ut);let Oe=f.getCameraImage(Xe);ut.sourceTexture=Oe}}}}for(let Te=0;Te<S.length;Te++){let Ge=w[Te],we=S[Te];Ge!==null&&we!==void 0&&we.update(Ge,$,c||a)}re&&re(J,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),p=null}let Se=new _f;Se.setAnimationLoop(te),this.setAnimationLoop=function(J){re=J},this.dispose=function(){}}},Fx=new De,Ef=new Ye;Ef.set(-1,0,0,0,1,0,0,0,1);function Bx(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Ac(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,b,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),b=y.envMap,v=y.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ef),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ox(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let w=S.program;n.uniformBlockBinding(v,w)}function c(v,S){let w=s[v.id];w===void 0&&(g(v),w=h(v),s[v.id]=w,v.addEventListener("dispose",y));let E=S.program;n.updateUBOMapping(v,E);let x=e.render.frame;r[v.id]!==x&&(u(v),r[v.id]=x)}function h(v){let S=f();v.__bindingPointIndex=S;let w=i.createBuffer(),E=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,E,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let S=s[v.id],w=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,A=w.length;x<A;x++){let I=w[x];if(Array.isArray(I))for(let R=0,P=I.length;R<P;R++)d(I[R],x,R,E);else d(I,x,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,S,w,E){if(_(v,S,w,E)===!0){let x=v.__offset,A=v.value;if(Array.isArray(A)){let I=0;for(let R=0;R<A.length;R++){let P=A[R],L=m(P);p(P,v.__data,I),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(I+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function p(v,S,w){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,w)}function _(v,S,w,E){let x=v.value,A=S+"_"+w;if(E[A]===void 0)return typeof x=="number"||typeof x=="boolean"?E[A]=x:ArrayBuffer.isView(x)?E[A]=x.slice():E[A]=x.clone(),!0;{let I=E[A];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return E[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(I.equals(x)===!1)return I.copy(x),!0}}return!1}function g(v){let S=v.uniforms,w=0,E=16;for(let A=0,I=S.length;A<I;A++){let R=Array.isArray(S[A])?S[A]:[S[A]];for(let P=0,L=R.length;P<L;P++){let C=R[P],U=Array.isArray(C.value)?C.value:[C.value];for(let z=0,N=U.length;z<N;z++){let W=U[z],B=m(W),k=w%E,q=k%B.boundary,oe=k+q;w+=q,oe!==0&&E-oe<B.storage&&(w+=E-oe),C.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=w,w+=B.storage}}}let x=w%E;return x>0&&(w+=E-x),v.__size=w,v.__cache={},this}function m(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",v),S}function y(v){let S=v.target;S.removeEventListener("dispose",y);let w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function b(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}var Hx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kn=null;function zx(){return Kn===null&&(Kn=new ur(Hx,16,16,Ci,qt),Kn.name="DFG_LUT",Kn.minFilter=tn,Kn.magFilter=tn,Kn.wrapS=Xn,Kn.wrapT=Xn,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}var nl=class{constructor(e={}){let{canvas:t=Gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=mn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=d,g=new Set([yo,_o,xo]),m=new Set([mn,On,Ds,Ns,po,mo]),y=new Uint32Array(4),b=new Int32Array(4),v=new F,S=null,w=null,E=[],x=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,R=!1,P=null,L=null,C=null,U=null;this._outputColorSpace=Xt;let z=0,N=0,W=null,B=-1,k=null,q=new It,oe=new It,he=null,re=new ce(0),te=0,Se=t.width,J=t.height,$=1,Te=null,Ge=null,we=new It(0,0,Se,J),Qe=new It(0,0,Se,J),Pt=!1,nt=new ws,Xe=!1,ut=!1,Oe=new De,_t=new F,Jt=new It,pn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dt=!1;function Gt(){return W===null?$:1}let G=n;function rn(T,O){return t.getContext(T,O)}let xt,D,M,X,K,j,ue,pe,ee,se,me,Ne,ye,ge,Ue,ze,Ke,H,xe,ie,_e,Ee,ae;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",St,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",In,!1),G===null){let O="webgl2";if(G=rn(O,T),G===null)throw rn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(T){throw t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",In,!1),Ve("WebGLRenderer: "+T.message),T}function Be(){xt=new Ym(G),xt.init(),_e=new Dx(G,xt),D=new Bm(G,xt,e,_e),M=new Ix(G,xt),D.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),L=G.createFramebuffer(),C=G.createFramebuffer(),U=G.createFramebuffer(),X=new $m(G),K=new xx,j=new Lx(G,xt,M,K,D,_e,X),ue=new qm(I),pe=new Qd(G),Ee=new Um(G,pe),ee=new Zm(G,pe,X,Ee),se=new Qm(G,ee,pe,Ee,X),H=new Km(G,D,j),Ue=new Om(K),me=new gx(I,ue,xt,D,Ee,Ue),Ne=new Bx(I,K),ye=new yx,ge=new Tx(xt),Ke=new Nm(I,ue,M,se,p,l),ze=new Px(I,se,D),ae=new Ox(G,X,D,M),xe=new Fm(G,xt,X),ie=new Jm(G,xt,X),X.programs=me.programs,I.capabilities=D,I.extensions=xt,I.properties=K,I.renderLists=ye,I.shadowMap=ze,I.state=M,I.info=X}_!==mn&&(A=new eg(_,t.width,t.height,o,s,r));let Ie=new $c(I,G);this.xr=Ie,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let T=xt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=xt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(Se,J,!1))},this.getSize=function(T){return T.set(Se,J)},this.setSize=function(T,O,Q=!0){if(Ie.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=T,J=O,t.width=Math.floor(T*$),t.height=Math.floor(O*$),Q===!0&&(t.style.width=T+"px",t.style.height=O+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(Se*$,J*$).floor()},this.setDrawingBufferSize=function(T,O,Q){Se=T,J=O,$=Q,t.width=Math.floor(T*Q),t.height=Math.floor(O*Q),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(_===mn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(q)},this.getViewport=function(T){return T.copy(we)},this.setViewport=function(T,O,Q,Y){T.isVector4?we.set(T.x,T.y,T.z,T.w):we.set(T,O,Q,Y),M.viewport(q.copy(we).multiplyScalar($).round())},this.getScissor=function(T){return T.copy(Qe)},this.setScissor=function(T,O,Q,Y){T.isVector4?Qe.set(T.x,T.y,T.z,T.w):Qe.set(T,O,Q,Y),M.scissor(oe.copy(Qe).multiplyScalar($).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(T){M.setScissorTest(Pt=T)},this.setOpaqueSort=function(T){Te=T},this.setTransparentSort=function(T){Ge=T},this.getClearColor=function(T){return T.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,Q=!0){let Y=0;if(T){let Z=!1;if(W!==null){let be=W.texture.format;Z=g.has(be)}if(Z){let be=W.texture.type,Re=m.has(be),Me=Ke.getClearColor(),Ce=Ke.getClearAlpha(),Le=Me.r,je=Me.g,st=Me.b;Re?(y[0]=Le,y[1]=je,y[2]=st,y[3]=Ce,G.clearBufferuiv(G.COLOR,0,y)):(b[0]=Le,b[1]=je,b[2]=st,b[3]=Ce,G.clearBufferiv(G.COLOR,0,b))}else Y|=G.COLOR_BUFFER_BIT}O&&(Y|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),P=T},this.dispose=function(){t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",In,!1),Ke.dispose(),ye.dispose(),ge.dispose(),K.dispose(),ue.dispose(),se.dispose(),Ee.dispose(),ae.dispose(),me.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Eh),Ie.removeEventListener("sessionend",Th),Fi.stop()};function St(T){T.preventDefault(),nr("WebGLRenderer: Context Lost."),R=!0}function ft(){nr("WebGLRenderer: Context Restored."),R=!1;let T=X.autoReset,O=ze.enabled,Q=ze.autoUpdate,Y=ze.needsUpdate,Z=ze.type;Be(),X.autoReset=T,ze.enabled=O,ze.autoUpdate=Q,ze.needsUpdate=Y,ze.type=Z}function In(T){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function kn(T){let O=T.target;O.removeEventListener("dispose",kn),od(O)}function od(T){ld(T),K.remove(T)}function ld(T){let O=K.get(T).programs;O!==void 0&&(O.forEach(function(Q){me.releaseProgram(Q)}),T.isShaderMaterial&&me.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,Q,Y,Z,be){O===null&&(O=pn);let Re=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Me=ud(T,O,Q,Y,Z);M.setMaterial(Y,Re);let Ce=Q.index,Le=1;if(Y.wireframe===!0){if(Ce=ee.getWireframeAttribute(Q),Ce===void 0)return;Le=2}let je=Q.drawRange,st=Q.attributes.position,Pe=je.start*Le,dt=(je.start+je.count)*Le;be!==null&&(Pe=Math.max(Pe,be.start*Le),dt=Math.min(dt,(be.start+be.count)*Le)),Ce!==null?(Pe=Math.max(Pe,0),dt=Math.min(dt,Ce.count)):st!=null&&(Pe=Math.max(Pe,0),dt=Math.min(dt,st.count));let Vt=dt-Pe;if(Vt<0||Vt===1/0)return;Ee.setup(Z,Y,Me,Q,Ce);let wt,Mt=xe;if(Ce!==null&&(wt=pe.get(Ce),Mt=ie,Mt.setIndex(wt)),Z.isMesh)Y.wireframe===!0?(M.setLineWidth(Y.wireframeLinewidth*Gt()),Mt.setMode(G.LINES)):Mt.setMode(G.TRIANGLES);else if(Z.isLine){let an=Y.linewidth;an===void 0&&(an=1),M.setLineWidth(an*Gt()),Z.isLineSegments?Mt.setMode(G.LINES):Z.isLineLoop?Mt.setMode(G.LINE_LOOP):Mt.setMode(G.LINE_STRIP)}else Z.isPoints?Mt.setMode(G.POINTS):Z.isSprite&&Mt.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let an=Z._multiDrawStarts,Ae=Z._multiDrawCounts,hn=Z._multiDrawCount,ct=Ce?pe.get(Ce).bytesPerElement:1,bn=K.get(Y).currentProgram.getUniforms();for(let Gn=0;Gn<hn;Gn++)bn.setValue(G,"_gl_DrawID",Gn),Mt.render(an[Gn]/ct,Ae[Gn])}else if(Z.isInstancedMesh)Mt.renderInstances(Pe,Vt,Z.count);else if(Q.isInstancedBufferGeometry){let an=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ae=Math.min(Q.instanceCount,an);Mt.renderInstances(Pe,Vt,Ae)}else Mt.render(Pe,Vt)};function Sh(T,O,Q,Y){P!==null&&T.isNodeMaterial&&P.setObject(Y,T),Xe===!0&&Ue.setState(T,Q,!1),T.transparent===!0&&T.side===rt&&T.forceSinglePass===!1?(T.side=sn,T.needsUpdate=!0,Qr(T,O,Y),T.side=Ti,T.needsUpdate=!0,Qr(T,O,Y),T.side=rt):Qr(T,O,Y)}this.compile=function(T,O,Q=null){Q===null&&(Q=T),P!==null&&P.renderStart(T,O,Q),w=ge.get(Q),w.init(O),x.push(w),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),T!==Q&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),w.setupLights(),P!==null&&P.updateLights(w.state.lightsArray),ut=this.localClippingEnabled,Xe=Ue.init(this.clippingPlanes,ut),Xe===!0&&Ue.setGlobalState(this.clippingPlanes,O),P!==null&&ze.render(w.state.shadowsArray,Q,O);let Y=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let be=Z.material;if(be)if(Array.isArray(be))for(let Re=0;Re<be.length;Re++){let Me=be[Re];Sh(Me,Q,O,Z),Y.add(Me)}else Sh(be,Q,O,Z),Y.add(be)}),w=x.pop(),P!==null&&P.renderEnd(),Y},this.compileAsync=function(T,O,Q=null){let Y=this.compile(T,O,Q);return new Promise(Z=>{function be(){if(Y.forEach(function(Re){let Ce=K.get(Re).currentProgram;(Ce===void 0||Ce.isReady())&&Y.delete(Re)}),Y.size===0){Z(T);return}setTimeout(be,10)}xt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Pl=null;function cd(T){Pl&&Pl(T)}function Eh(){Fi.stop()}function Th(){Fi.start()}let Fi=new _f;Fi.setAnimationLoop(cd),typeof self!="undefined"&&Fi.setContext(self),this.setAnimationLoop=function(T){Pl=T,Ie.setAnimationLoop(T),T===null?Fi.stop():Fi.start()},Ie.addEventListener("sessionstart",Eh),Ie.addEventListener("sessionend",Th),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P!==null&&P.renderStart(T,O);let Q=Ie.enabled===!0&&Ie.isPresenting===!0,Y=A!==null&&(W===null||Q)&&A.begin(I,W);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(O),O=Ie.getCamera()),T.isScene===!0&&T.onBeforeRender(I,T,O,W),w=ge.get(T,x.length),w.init(O),w.state.textureUnits=j.getTextureUnits(),x.push(w),Oe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),nt.setFromProjectionMatrix(Oe,Fn,O.reversedDepth),ut=this.localClippingEnabled,Xe=Ue.init(this.clippingPlanes,ut),S=ye.get(T,E.length),S.init(),E.push(S),Ie.enabled===!0&&Ie.isPresenting===!0){let Re=I.xr.getDepthSensingMesh();Re!==null&&Il(Re,O,-1/0,I.sortObjects)}Il(T,O,0,I.sortObjects),S.finish(),P!==null&&P.updateLights(w.state.lightsArray),I.sortObjects===!0&&S.sort(Te,Ge),Dt=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,Dt&&Ke.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&Ue.beginShadows();let Z=w.state.shadowsArray;if(ze.render(Z,T,O),Xe===!0&&Ue.endShadows(),(Y&&A.hasRenderPass())===!1){let Re=S.opaque,Me=S.transmissive;if(w.setupLights(),O.isArrayCamera){let Ce=O.cameras;if(Me.length>0)for(let Le=0,je=Ce.length;Le<je;Le++){let st=Ce[Le];Ah(Re,Me,T,st)}Dt&&Ke.render(T);for(let Le=0,je=Ce.length;Le<je;Le++){let st=Ce[Le];wh(S,T,st,st.viewport)}}else Me.length>0&&Ah(Re,Me,T,O),Dt&&Ke.render(T),wh(S,T,O)}W!==null&&N===0&&(j.updateMultisampleRenderTarget(W),j.updateRenderTargetMipmap(W)),Y&&A.end(I),T.isScene===!0&&T.onAfterRender(I,T,O),Ee.resetDefaultState(),B=-1,k=null,x.pop(),x.length>0?(w=x[x.length-1],j.setTextureUnits(w.state.textureUnits),Xe===!0&&Ue.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,P!==null&&P.renderEnd()};function Il(T,O,Q,Y){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(nt)){Y&&Jt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Oe);let Re=se.update(T),Me=T.material;Me.visible&&S.push(T,Re,Me,Q,Jt.z,null,O)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(nt))){let Re=se.update(T),Me=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Jt.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Jt.copy(Re.boundingSphere.center)),Jt.applyMatrix4(T.matrixWorld).applyMatrix4(Oe)),Array.isArray(Me)){let Ce=Re.groups;for(let Le=0,je=Ce.length;Le<je;Le++){let st=Ce[Le],Pe=Me[st.materialIndex];Pe&&Pe.visible&&S.push(T,Re,Pe,Q,Jt.z,st,O)}}else Me.visible&&S.push(T,Re,Me,Q,Jt.z,null,O)}}let be=T.children;for(let Re=0,Me=be.length;Re<Me;Re++)Il(be[Re],O,Q,Y)}function wh(T,O,Q,Y){let{opaque:Z,transmissive:be,transparent:Re}=T;w.setupLightsView(Q),Xe===!0&&Ue.setGlobalState(I.clippingPlanes,Q),Y&&M.viewport(q.copy(Y)),Z.length>0&&Kr(Z,O,Q),be.length>0&&Kr(be,O,Q),Re.length>0&&Kr(Re,O,Q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Ah(T,O,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){let Pe=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new Ut(1,1,{generateMipmaps:!0,type:Pe?qt:mn,minFilter:Ai,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let be=w.state.transmissionRenderTarget[Y.id],Re=Y.viewport||q;be.setSize(Re.z*I.transmissionResolutionScale,Re.w*I.transmissionResolutionScale);let Me=I.getRenderTarget(),Ce=I.getActiveCubeFace(),Le=I.getActiveMipmapLevel();I.setRenderTarget(be),I.getClearColor(re),te=I.getClearAlpha(),te<1&&I.setClearColor(16777215,.5),I.clear(),Dt&&Ke.render(Q);let je=I.toneMapping;I.toneMapping=Bn;let st=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),Xe===!0&&Ue.setGlobalState(I.clippingPlanes,Y),Kr(T,Q,Y),j.updateMultisampleRenderTarget(be),j.updateRenderTargetMipmap(be),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let dt=0,Vt=O.length;dt<Vt;dt++){let wt=O[dt],{object:Mt,geometry:an,material:Ae,group:hn}=wt;if(Ae.side===rt&&Mt.layers.test(Y.layers)){let ct=Ae.side;Ae.side=sn,Ae.needsUpdate=!0,Rh(Mt,Q,Y,an,Ae,hn),Ae.side=ct,Ae.needsUpdate=!0,Pe=!0}}Pe===!0&&(j.updateMultisampleRenderTarget(be),j.updateRenderTargetMipmap(be))}I.setRenderTarget(Me,Ce,Le),I.setClearColor(re,te),st!==void 0&&(Y.viewport=st),I.toneMapping=je}function Kr(T,O,Q){let Y=O.isScene===!0?O.overrideMaterial:null;for(let Z=0,be=T.length;Z<be;Z++){let Re=T[Z],{object:Me,geometry:Ce,group:Le}=Re,je=Re.material;je.allowOverride===!0&&Y!==null&&(je=Y),Me.layers.test(Q.layers)&&Rh(Me,O,Q,Ce,je,Le)}}function Rh(T,O,Q,Y,Z,be){P!==null&&Z.isNodeMaterial&&P.setObject(T,Z),T.onBeforeRender(I,O,Q,Y,Z,be),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(I,O,Q,Y,T,be),Z.transparent===!0&&Z.side===rt&&Z.forceSinglePass===!1?(Z.side=sn,Z.needsUpdate=!0,I.renderBufferDirect(Q,O,Y,Z,T,be),Z.side=Ti,Z.needsUpdate=!0,I.renderBufferDirect(Q,O,Y,Z,T,be),Z.side=rt):I.renderBufferDirect(Q,O,Y,Z,T,be),T.onAfterRender(I,O,Q,Y,Z,be)}function Qr(T,O,Q){O.isScene!==!0&&(O=pn);let Y=K.get(T),Z=w.state.lights,be=w.state.shadowsArray,Re=Z.state.version,Me=me.getParameters(T,Z.state,be,O,Q,w.state.lightProbeGridArray),Ce=me.getProgramCacheKey(Me),Le=Y.programs;Y.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,Y.fog=O.fog;let je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Y.envMap=ue.get(T.envMap||Y.environment,je),Y.envMapRotation=Y.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Le===void 0&&(T.addEventListener("dispose",kn),Le=new Map,Y.programs=Le);let st=Le.get(Ce);if(st!==void 0){if(Y.currentProgram===st&&Y.lightsStateVersion===Re)return Ph(T,Me),st}else Me.uniforms=me.getUniforms(T),P!==null&&T.isNodeMaterial&&P.build(T,Q,Me),T.onBeforeCompile(Me,I),st=me.acquireProgram(Me,Ce),Le.set(Ce,st),Y.uniforms=Me.uniforms;let Pe=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=Ue.uniform),Ph(T,Me),Y.needsLights=dd(T),Y.lightsStateVersion=Re,Y.needsLights&&(Pe.ambientLightColor.value=Z.state.ambient,Pe.lightProbe.value=Z.state.probe,Pe.sunLights.value=Z.state.sun,Pe.sunLightShadows.value=Z.state.sunShadow,Pe.directionalLights.value=Z.state.directional,Pe.directionalLightShadows.value=Z.state.directionalShadow,Pe.spotLights.value=Z.state.spot,Pe.spotLightShadows.value=Z.state.spotShadow,Pe.rectAreaLights.value=Z.state.rectArea,Pe.ltc_1.value=Z.state.rectAreaLTC1,Pe.ltc_2.value=Z.state.rectAreaLTC2,Pe.pointLights.value=Z.state.point,Pe.pointLightShadows.value=Z.state.pointShadow,Pe.hemisphereLights.value=Z.state.hemi,Pe.sunShadowMatrix.value=Z.state.sunShadowMatrix,Pe.sunShadowCascade.value=Z.state.sunShadowCascade,Pe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Pe.spotLightMatrix.value=Z.state.spotLightMatrix,Pe.spotLightMap.value=Z.state.spotLightMap,Pe.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=w.state.lightProbeGridArray.length>0,Y.currentProgram=st,Y.uniformsList=null,st}function Ch(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=Bs.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Ph(T,O){let Q=K.get(T);Q.outputColorSpace=O.outputColorSpace,Q.batching=O.batching,Q.batchingColor=O.batchingColor,Q.instancing=O.instancing,Q.instancingColor=O.instancingColor,Q.instancingMorph=O.instancingMorph,Q.skinning=O.skinning,Q.morphTargets=O.morphTargets,Q.morphNormals=O.morphNormals,Q.morphColors=O.morphColors,Q.morphTargetsCount=O.morphTargetsCount,Q.numClippingPlanes=O.numClippingPlanes,Q.numIntersection=O.numClipIntersection,Q.vertexAlphas=O.vertexAlphas,Q.vertexTangents=O.vertexTangents,Q.toneMapping=O.toneMapping}function hd(T,O){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(O.matrixWorld);for(let Q=0,Y=T.length;Q<Y;Q++){let Z=T[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(v))return Z}return null}function ud(T,O,Q,Y,Z){O.isScene!==!0&&(O=pn),j.resetTextureUnits();let be=O.fog,Re=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?O.environment:null,Me=W===null?I.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:it.workingColorSpace,Ce=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Le=ue.get(Y.envMap||Re,Ce),je=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,st=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Pe=!!Q.morphAttributes.position,dt=!!Q.morphAttributes.normal,Vt=!!Q.morphAttributes.color,wt=Bn;Y.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(wt=I.toneMapping);let Mt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,an=Mt!==void 0?Mt.length:0,Ae=K.get(Y),hn=w.state.lights;if(Xe===!0&&(ut===!0||T!==k)){let Et=T===k&&Y.id===B;Ue.setState(Y,T,Et)}let ct=!1;Y.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==hn.state.version||Ae.outputColorSpace!==Me||Z.isBatchedMesh&&Ae.batching===!1||!Z.isBatchedMesh&&Ae.batching===!0||Z.isBatchedMesh&&Ae.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ae.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ae.instancing===!1||!Z.isInstancedMesh&&Ae.instancing===!0||Z.isSkinnedMesh&&Ae.skinning===!1||!Z.isSkinnedMesh&&Ae.skinning===!0||Z.isInstancedMesh&&Ae.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ae.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ae.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ae.instancingMorph===!1&&Z.morphTexture!==null||Ae.envMap!==Le||Y.fog===!0&&Ae.fog!==be||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Ue.numPlanes||Ae.numIntersection!==Ue.numIntersection)||Ae.vertexAlphas!==je||Ae.vertexTangents!==st||Ae.morphTargets!==Pe||Ae.morphNormals!==dt||Ae.morphColors!==Vt||Ae.toneMapping!==wt||Ae.morphTargetsCount!==an||!!Ae.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Ae.__version=Y.version);let bn=Ae.currentProgram;ct===!0&&(bn=Qr(Y,O,Z),P&&Y.isNodeMaterial&&P.onUpdateProgram(Y,bn,Ae));let Gn=!1,ui=!1,Qi=!1,yt=bn.getUniforms(),Ot=Ae.uniforms;if(M.useProgram(bn.program)&&(Gn=!0,ui=!0,Qi=!0),Y.id!==B&&(B=Y.id,ui=!0),Ae.needsLights){let Et=hd(w.state.lightProbeGridArray,Z);Ae.lightProbeGrid!==Et&&(Ae.lightProbeGrid=Et,ui=!0)}if(Gn||k!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),yt.setValue(G,"projectionMatrix",T.projectionMatrix),yt.setValue(G,"viewMatrix",T.matrixWorldInverse);let di=yt.map.cameraPosition;di!==void 0&&di.setValue(G,_t.setFromMatrixPosition(T.matrixWorld)),D.logarithmicDepthBuffer&&yt.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&yt.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),k!==T&&(k=T,ui=!0,Qi=!0)}if(Ae.needsLights&&(hn.state.sunShadowMap.length>0&&yt.setValue(G,"sunShadowMap",hn.state.sunShadowMap,j),hn.state.directionalShadowMap.length>0&&yt.setValue(G,"directionalShadowMap",hn.state.directionalShadowMap,j),hn.state.spotShadowMap.length>0&&yt.setValue(G,"spotShadowMap",hn.state.spotShadowMap,j),hn.state.pointShadowMap.length>0&&yt.setValue(G,"pointShadowMap",hn.state.pointShadowMap,j)),Z.isSkinnedMesh){yt.setOptional(G,Z,"bindMatrix"),yt.setOptional(G,Z,"bindMatrixInverse");let Et=Z.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),yt.setValue(G,"boneTexture",Et.boneTexture,j))}Z.isBatchedMesh&&(yt.setOptional(G,Z,"batchingTexture"),yt.setValue(G,"batchingTexture",Z._matricesTexture,j),yt.setOptional(G,Z,"batchingIdTexture"),yt.setValue(G,"batchingIdTexture",Z._indirectTexture,j),yt.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&yt.setValue(G,"batchingColorTexture",Z._colorsTexture,j));let fi=Q.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&H.update(Z,Q,bn),(ui||Ae.receiveShadow!==Z.receiveShadow)&&(Ae.receiveShadow=Z.receiveShadow,yt.setValue(G,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&O.environment!==null&&(Ot.envMapIntensity.value=O.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=zx()),ui){if(yt.setValue(G,"toneMappingExposure",I.toneMappingExposure),Ae.needsLights&&fd(Ot,Qi),be&&Y.fog===!0&&Ne.refreshFogUniforms(Ot,be),Ne.refreshMaterialUniforms(Ot,Y,$,J,w.state.transmissionRenderTarget[T.id]),Ae.needsLights&&Ae.lightProbeGrid){let Et=Ae.lightProbeGrid;Ot.probesSH.value=Et.texture,Ot.probesMin.value.copy(Et.boundingBox.min),Ot.probesMax.value.copy(Et.boundingBox.max),Ot.probesResolution.value.copy(Et.resolution)}Bs.upload(G,Ch(Ae),Ot,j)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Bs.upload(G,Ch(Ae),Ot,j),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&yt.setValue(G,"center",Z.center),yt.setValue(G,"modelViewMatrix",Z.modelViewMatrix),yt.setValue(G,"normalMatrix",Z.normalMatrix),yt.setValue(G,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Et=Y.uniformsGroups;for(let di=0,ji=Et.length;di<ji;di++){let Lh=Et[di];ae.update(Lh,bn),ae.bind(Lh,bn)}}return bn}function fd(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.sunLights.needsUpdate=O,T.sunLightShadows.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function dd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(T,O,Q){let Y=K.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),K.get(T.texture).__webglTexture=O,K.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let Q=K.get(T);Q.__webglFramebuffer=O,Q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,Q=0){W=T,z=O,N=Q;let Y=null,Z=!1,be=!1;if(T){let Me=K.get(T);if(Me.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(G.FRAMEBUFFER,Me.__webglFramebuffer),q.copy(T.viewport),oe.copy(T.scissor),he=T.scissorTest,M.viewport(q),M.scissor(oe),M.setScissorTest(he),B=-1;return}else if(Me.__webglFramebuffer===void 0)j.setupRenderTarget(T);else if(Me.__hasExternalTextures)j.rebindTextures(T,K.get(T.texture).__webglTexture,K.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let je=T.depthTexture;if(Me.__boundDepthTexture!==je){if(je!==null&&K.has(je)&&(T.width!==je.image.width||T.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(T)}}let Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(be=!0);let Le=K.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[O])?Y=Le[O][Q]:Y=Le[O],Z=!0):T.samples>0&&j.useMultisampledRTT(T)===!1?Y=K.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?Y=Le[Q]:Y=Le,q.copy(T.viewport),oe.copy(T.scissor),he=T.scissorTest}else q.copy(we).multiplyScalar($).floor(),oe.copy(Qe).multiplyScalar($).floor(),he=Pt;if(Q!==0&&(Y=L),M.bindFramebuffer(G.FRAMEBUFFER,Y)&&M.drawBuffers(T,Y),M.viewport(q),M.scissor(oe),M.setScissorTest(he),Z){let Me=K.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,Q)}else if(be){let Me=O;for(let Ce=0;Ce<T.textures.length;Ce++){let Le=K.get(T.textures[Ce]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,Q,Me)}}else if(T!==null&&Q!==0){let Me=K.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Me.__webglTexture,Q)}B=-1};function Ih(T){let O=K.get(T);return(O.__readFormat!==T.format||O.__readType!==T.type)&&(O.__readFormat=T.format,O.__readType=T.type,O.__formatReadable=D.textureFormatReadable(T.format),O.__typeReadable=D.textureTypeReadable(T.type)),O}this.readRenderTargetPixels=function(T,O,Q,Y,Z,be,Re,Me=0){if(!(T&&T.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=K.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ce=Ce[Re]),Ce){M.bindFramebuffer(G.FRAMEBUFFER,Ce);try{let Le=T.textures[Me],je=Le.format,st=Le.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Me);let Pe=Ih(Le);if(Pe.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-Y&&Q>=0&&Q<=T.height-Z&&G.readPixels(O,Q,Y,Z,_e.convert(je),_e.convert(st),be)}finally{let Le=W!==null?K.get(W).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(T,O,Q,Y,Z,be,Re,Me=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=K.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ce=Ce[Re]),Ce)if(O>=0&&O<=T.width-Y&&Q>=0&&Q<=T.height-Z){M.bindFramebuffer(G.FRAMEBUFFER,Ce);let Le=T.textures[Me],je=Le.format,st=Le.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Me);let Pe=Ih(Le);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,dt),G.bufferData(G.PIXEL_PACK_BUFFER,be.byteLength,G.STREAM_READ),G.readPixels(O,Q,Y,Z,_e.convert(je),_e.convert(st),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Vt=W!==null?K.get(W).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,Vt);let wt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Wu(G,wt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,dt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,be),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(dt),G.deleteSync(wt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,Q=0){let Y=Math.pow(2,-Q),Z=Math.floor(T.image.width*Y),be=Math.floor(T.image.height*Y),Re=O!==null?O.x:0,Me=O!==null?O.y:0;j.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,Q,0,0,Re,Me,Z,be),M.unbindTexture()},this.copyTextureToTexture=function(T,O,Q=null,Y=null,Z=0,be=0){let Re,Me,Ce,Le,je,st,Pe,dt,Vt,wt=T.isCompressedTexture?T.mipmaps[be]:T.image;if(Q!==null)Re=Q.max.x-Q.min.x,Me=Q.max.y-Q.min.y,Ce=Q.isBox3?Q.max.z-Q.min.z:1,Le=Q.min.x,je=Q.min.y,st=Q.isBox3?Q.min.z:0;else{let Ot=Math.pow(2,-Z);Re=Math.floor(wt.width*Ot),Me=Math.floor(wt.height*Ot),T.isDataArrayTexture?Ce=wt.depth:T.isData3DTexture?Ce=Math.floor(wt.depth*Ot):Ce=1,Le=0,je=0,st=0}Y!==null?(Pe=Y.x,dt=Y.y,Vt=Y.z):(Pe=0,dt=0,Vt=0);let Mt=_e.convert(O.format),an=_e.convert(O.type),Ae;O.isData3DTexture?(j.setTexture3D(O,0),Ae=G.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(j.setTexture2DArray(O,0),Ae=G.TEXTURE_2D_ARRAY):(j.setTexture2D(O,0),Ae=G.TEXTURE_2D),M.activeTexture(G.TEXTURE0),M.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,O.flipY),M.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),M.pixelStorei(G.UNPACK_ALIGNMENT,O.unpackAlignment);let hn=M.getParameter(G.UNPACK_ROW_LENGTH),ct=M.getParameter(G.UNPACK_IMAGE_HEIGHT),bn=M.getParameter(G.UNPACK_SKIP_PIXELS),Gn=M.getParameter(G.UNPACK_SKIP_ROWS),ui=M.getParameter(G.UNPACK_SKIP_IMAGES);M.pixelStorei(G.UNPACK_ROW_LENGTH,wt.width),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,wt.height),M.pixelStorei(G.UNPACK_SKIP_PIXELS,Le),M.pixelStorei(G.UNPACK_SKIP_ROWS,je),M.pixelStorei(G.UNPACK_SKIP_IMAGES,st);let Qi=T.isDataArrayTexture||T.isData3DTexture,yt=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let Ot=K.get(T),fi=K.get(O),Et=K.get(Ot.__renderTarget),di=K.get(fi.__renderTarget);M.bindFramebuffer(G.READ_FRAMEBUFFER,Et.__webglFramebuffer),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let ji=0;ji<Ce;ji++)Qi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(T).__webglTexture,Z,st+ji),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(O).__webglTexture,be,Vt+ji)),G.blitFramebuffer(Le,je,Re,Me,Pe,dt,Re,Me,G.DEPTH_BUFFER_BIT,G.NEAREST);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||K.has(T)){let Ot=K.get(T),fi=K.get(O);M.bindFramebuffer(G.READ_FRAMEBUFFER,C),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,U);for(let Et=0;Et<Ce;Et++)Qi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ot.__webglTexture,Z,st+Et):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ot.__webglTexture,Z),yt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,fi.__webglTexture,be,Vt+Et):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,fi.__webglTexture,be),Z!==0?G.blitFramebuffer(Le,je,Re,Me,Pe,dt,Re,Me,G.COLOR_BUFFER_BIT,G.NEAREST):yt?G.copyTexSubImage3D(Ae,be,Pe,dt,Vt+Et,Le,je,Re,Me):G.copyTexSubImage2D(Ae,be,Pe,dt,Le,je,Re,Me);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else yt?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(Ae,be,Pe,dt,Vt,Re,Me,Ce,Mt,an,wt.data):O.isCompressedArrayTexture?G.compressedTexSubImage3D(Ae,be,Pe,dt,Vt,Re,Me,Ce,Mt,wt.data):G.texSubImage3D(Ae,be,Pe,dt,Vt,Re,Me,Ce,Mt,an,wt):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,be,Pe,dt,Re,Me,Mt,an,wt.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,be,Pe,dt,wt.width,wt.height,Mt,wt.data):G.texSubImage2D(G.TEXTURE_2D,be,Pe,dt,Re,Me,Mt,an,wt);M.pixelStorei(G.UNPACK_ROW_LENGTH,hn),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ct),M.pixelStorei(G.UNPACK_SKIP_PIXELS,bn),M.pixelStorei(G.UNPACK_SKIP_ROWS,Gn),M.pixelStorei(G.UNPACK_SKIP_IMAGES,ui),be===0&&O.generateMipmaps&&G.generateMipmap(Ae),M.unbindTexture()},this.initRenderTarget=function(T){K.get(T).__webglFramebuffer===void 0&&j.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?j.setTextureCube(T,0):T.isData3DTexture?j.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?j.setTexture2DArray(T,0):j.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){z=0,N=0,W=null,M.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var Hs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Mn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},kx=new Ei(-1,1,1,-1,0,1),Kc=class extends et{constructor(){super(),this.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new We([0,2,0,0,2,0],2))}},Gx=new Kc,Pi=class{constructor(e){this._mesh=new ne(Gx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,kx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var rl=class extends Mn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=li.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Pi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Wr=class extends Mn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},al=class extends Mn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ol=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new fe);this._width=n.width,this._height=n.height,t=new Ut(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rl(Hs),this.copyPass.material.blending=wn,this.timer=new Er}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Wr!==void 0&&(a instanceof Wr?n=!0:a instanceof al&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ll=class extends Mn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ce}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Tf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var zs=class i extends Mn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new ce(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ut(r,a,{type:qt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Ut(r,a,{type:qt,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Ut(r,a,{type:qt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Tf;this.highPassUniforms=li.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ct({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new fe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=li.clone(Hs.uniforms),this.blendMaterial=new Ct({uniforms:this.copyUniforms,vertexShader:Hs.vertexShader,fragmentShader:Hs.fragmentShader,premultipliedAlpha:!0,blending:$n,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ce,this._oldClearAlpha=1,this._basic=new Lt,this._fsQuad=new Pi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new fe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Ct({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};zs.BlurDirectionX=new fe(1,0);zs.BlurDirectionY=new fe(0,1);var Xr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var cl=class extends Mn{constructor(){super(),this.isOutputPass=!0,this.uniforms=li.clone(Xr.uniforms),this.material=new Cs({name:Xr.name,uniforms:this.uniforms,vertexShader:Xr.vertexShader,fragmentShader:Xr.fragmentShader}),this._fsQuad=new Pi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ar?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Rr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Pr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ir?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Cr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var le=Math.PI*2;function jn(i){return i=i%2147483647||7,function(){return i=i*16807%2147483647,(i-1)/2147483646}}var at=(i,e,t)=>i+(e-i)*t,Af=(i,e,t)=>Math.max(e,Math.min(t,i));function Hn(i,e,t,n){return[at(i[0],e[0],n),at(i[1],e[1],n)-t*4*n*(1-n),at(i[2],e[2],n)]}var Ii={traditional:{bulbs:["#ffd58a","#ffb070","#ffe9b8","#ff9f5a"],flags:["#f08a24","#c2185b","#ffc861","#2f8f5b","#b8312b"],beams:["#ffd696","#ffaa5a","#ffecc8","#ffbe78"],hues:[28,42,16],sat:75,speed:.3,glow:"#ffbe6e"},dandiya:{bulbs:["#ffd58a","#ff6fa3","#7fe0a0","#8fc7ff","#ffb070","#c38fff"],flags:["#f08a24","#2f8f5b","#c2185b","#ffc861","#3b4cc0"],beams:["#ff78be","#78dcff","#ffc85a","#be8cff"],hues:[320,190,45,270],sat:82,speed:.75,glow:"#ffaac8"},devotional:{bulbs:["#ffe9b8","#ffd58a","#fff4dc"],flags:["#f08a24","#ffc861","#b8312b","#f3e6d0"],beams:["#ffecc8","#ffd696"],hues:[34,22],sat:60,speed:.12,glow:"#ffd296"},folk:{bulbs:["#ffb070","#ffd58a","#e8a33d","#9fe7b8"],flags:["#b8312b","#2f8f5b","#e8a33d","#3b4cc0"],beams:["#ffbe78","#d2ebaa","#ffdca0"],hues:[24,90,12],sat:62,speed:.28,glow:"#ffbe78"},sanedo:{bulbs:["#ffd58a","#ff8fb3","#ffb070","#9fe7b8"],flags:["#c2185b","#f08a24","#ffc861","#2f8f5b"],beams:["#ff8cbe","#ffc86e","#ffecc8"],hues:[340,30,50],sat:78,speed:.55,glow:"#ffaaaa"},fusion:{bulbs:["#8fc7ff","#c38fff","#ff6fa3","#7fe0ff"],flags:["#3b4cc0","#8e44ad","#c2185b","#16a085"],beams:["#78dcff","#be78ff","#ff5ab4","#5affdc"],hues:[200,280,320],sat:88,speed:1.05,glow:"#aa96ff"},nonstop:{bulbs:["#ffd58a","#ff6fa3","#8fc7ff","#ffb070","#7fe0a0"],flags:["#f08a24","#2f8f5b","#c2185b","#ffc861","#3b4cc0"],beams:["#ffc86e","#ff78be","#78dcff","#ffecc8"],hues:[30,320,190],sat:80,speed:.65,glow:"#ffbe8c"}};var fl={big:[{role:"tabla",u:.12,d:.95},{role:"dhol",u:.27,d:.75},{role:"guitar",u:.41,d:.85},{role:"drums",u:.56,d:1.8},{role:"keys",u:.72,d:.9},{role:"bass",u:.87,d:.85}],sheri:[{role:"dhol",u:.2,d:1},{role:"tabla",u:.35,d:1},{role:"guitar",u:.64,d:1},{role:"keys",u:.84,d:1}]};var wf=new Map;function ci(i){let e=wf.get(i);return e||(e=new ce(i),wf.set(i,e)),e}function $e(i,e,t,n={}){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new oi(s);return r.colorSpace=n.linear?vn:Xt,r.anisotropy=n.anisotropy||4,n.repeat&&(r.wrapS=r.wrapT=fn,r.repeat.set(n.repeat[0],n.repeat[1])),r}var hl=null;function dl(){return hl||(hl=$e(128,128,(i,e)=>{let t=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.55)"),t.addColorStop(.6,"rgba(255,255,255,.14)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)},{linear:!0}),hl)}function pl(i,e,t){return new ce().setHSL((i%360+360)%360/360,e/100,t/100)}function Qc(i){let e=i.map(([s,r])=>{let a=s.index?s.toNonIndexed():s.clone();return r&&a.applyMatrix4(r),a}),t=0;e.forEach(s=>t+=s.attributes.position.count);let n=new et;return["position","normal","uv","color"].forEach(s=>{if(!e.every(l=>l.attributes[s]))return;let r=e[0].attributes[s].itemSize,a=new Float32Array(t*r),o=0;e.forEach(l=>{a.set(l.attributes[s].array,o),o+=l.attributes[s].array.length}),n.setAttribute(s,new bt(a,r))}),e.forEach(s=>s.dispose()),n}function jc(i,e){let t=i.index?i.toNonIndexed():i.clone(),n=new ce(e),s=t.attributes.position.count,r=new Float32Array(s*3);for(let a=0;a<s;a++)r[a*3]=n.r,r[a*3+1]=n.g,r[a*3+2]=n.b;return t.setAttribute("color",new bt(r,3)),t}function qr(i,e,t,n=0,s=1,r=s,a=s){return new De().compose(new F(i,e,t),new Rt().setFromEuler(new Nt(0,n,0)),new F(s,r,a))}function Ft(i){return i.rotation.y=Math.PI,i.scale.x=-1,i}function Yr(i,e){return i.rotation.y=e,i.scale.x=-1,i}var Fe={flame:"#ff9038",flameCore:"#ffe4a8",tungsten:"#ffc27a",warm:"#ffd6a6",sodium:"#ffb152",tube:"#e4f3ff",flood:"#f3f1ff",amber:"#ffae62"},ul=new F;function Bt(i){i.updateWorldMatrix(!0,!1);let e=i.geometry,t=e.parameters||{},n=[];if(e.type==="CylinderGeometry"){let a=1/Math.cos(Math.PI/8);for(let o=0;o<8;o++){let l=o/8*le,c=Math.cos(l)*a,h=Math.sin(l)*a;n.push([c*t.radiusTop,t.height/2,h*t.radiusTop],[c*t.radiusBottom,-t.height/2,h*t.radiusBottom])}}else{e.boundingBox||e.computeBoundingBox();let r=e.boundingBox;for(let a=0;a<8;a++)n.push([a&1?r.max.x:r.min.x,a&2?r.max.y:r.min.y,a&4?r.max.z:r.min.z])}let s=[];return n.forEach(([r,a,o])=>{ul.set(r,a,o).applyMatrix4(i.matrixWorld),s.push(Math.round(ul.x*1e3)/1e3,Math.round(ul.y*1e3)/1e3,Math.round(ul.z*1e3)/1e3)}),s}function Li(i,e,t,n,s,r){let a=[];for(let o=0;o<8;o++)a.push(o&1?n:i,o&2?s:e,o&4?r:t);return a}var Vx=["ambient","key","architectural","practical","festive","show","flame","garbo"],Rf={paused:{ambient:1,key:.75,architectural:1,practical:1,festive:.7,show:.2,flame:1,garbo:1},playing:{ambient:1,key:1,architectural:.85,practical:1,festive:1,show:1,flame:1,garbo:1},aarti:{ambient:.55,key:.22,architectural:.45,practical:.5,festive:.28,show:.06,flame:1.4,garbo:1.25}},ml=class{constructor(){this.now={...Rf.paused},this.cue="paused"}update(e,t){this.cue=(t.aarti||0)>.5?"aarti":t.on?"playing":"paused";let n=Rf[this.cue],s=t.reduce?1:Math.min(1,e*1.8);return Vx.forEach(r=>{this.now[r]+=(n[r]-this.now[r])*s}),this.garboLit=t.lit!=null?t.lit:t.on?1:.35,this.now}};function eh(i,e){return .8+.11*Math.sin(i*7.3+e)*Math.sin(i*3.1+e*1.7)+.06*Math.sin(i*17+e*3.3)+.03*Math.sin(i*29+e*5.1)}var Di=["key","architectural","practical","festive","show","flame"],Ji={key:"Key",architectural:"Arch",practical:"Practical",festive:"Festive",show:"Show",flame:"Flame"},Cf={soft:[[0,1],[.35,.55],[.7,.16],[1,0]],tight:[[0,1],[.12,.62],[.35,.2],[.7,.05],[1,0]]};function Pf(i,e,t,n,s=1024){let r=e.d/e.w,a=r>1?Math.max(64,Math.round(s/r)):s,o=r>1?s:Math.max(64,Math.round(s*r)),l={},c={};Di.forEach(p=>{let _=document.createElement("canvas");_.width=a,_.height=o,c[p]=_;let g=new oi(_);g.colorSpace=vn,g.flipY=!0,l[p]=g});function h(p){Di.forEach(_=>{let g=c[_].getContext("2d");g.globalCompositeOperation="source-over",g.fillStyle="#000",g.fillRect(0,0,a,o)}),t.forEach(_=>{if(!_.ground||!c[_.layer])return;let g=c[_.layer].getContext("2d"),m=(_.x-e.cx+e.w/2)/e.w*a,y=(_.z-e.cz+e.d/2)/e.d*o,b=_.rx/e.w*a,v=_.rz/e.d*o,S=ci(_.theme?p.glow:_.hex),w=Math.min(1,_.k*2.5);g.save(),g.globalCompositeOperation="lighter",g.translate(m,y),g.scale(Math.max(.5,b),Math.max(.5,v));let E=g.createRadialGradient(0,0,0,0,0,1),x=`${Math.round(S.r*255)},${Math.round(S.g*255)},${Math.round(S.b*255)}`;(Cf[_.falloff]||Cf.soft).forEach(([A,I])=>E.addColorStop(A,`rgba(${x},${w*I})`)),g.fillStyle=E,g.beginPath(),g.arc(0,0,1,0,le),g.fill(),g.restore()}),Di.forEach(_=>l[_].needsUpdate=!0)}h(n);let f={gain:{value:5.8},uT:{value:0}};Di.forEach(p=>{f["lv"+Ji[p]]={value:1},f["m"+Ji[p]]={value:l[p]}});let u=Di.map(p=>`texture2D(m${Ji[p]}, vLayerUv).rgb * lv${Ji[p]}${p==="flame"?" * flameFlicker":""}`).join(" + "),d=i.material;return d.onBeforeCompile=p=>{Object.assign(p.uniforms,f),p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vLayerUv;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vLayerUv = uv;`),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vLayerUv;
uniform sampler2D ${Di.map(_=>"m"+Ji[_]).join(", ")};
uniform float ${Di.map(_=>"lv"+Ji[_]).join(", ")}, gain, uT;`).replace("#include <aomap_fragment>",`float flameFlicker = 0.8 + 0.12 * sin(uT * 7.3 + vLayerUv.x * 331.0 + vLayerUv.y * 197.0) * sin(uT * 3.1 + vLayerUv.y * 263.0) + 0.06 * sin(uT * 17.0 + vLayerUv.x * 157.0);
reflectedLight.indirectDiffuse += diffuseColor.rgb * gain * (${u});
#include <aomap_fragment>`)},d.customProgramCacheKey=()=>"ground-layers-2",d.needsUpdate=!0,{set(p,_){Di.forEach(g=>{f["lv"+Ji[g]].value=p[g]}),f.uT.value=_||0},repaint:h,canvases:c,uniforms:f}}var If=new Map;function V(i,e=.85,t=0,n){let s=i+"|"+e+"|"+t+(n?JSON.stringify(n):""),r=If.get(s);return r||(r=new qe(Object.assign({color:i,roughness:e,metalness:t},n||{})),If.set(s,r)),r}function xl(i,e=3){return new Lt({color:new ce(i).multiplyScalar(e)})}var gl=class{constructor(e=.06,t=6){this.list=[],this.geo=new _n(e,t>6?1:0),this.mesh=null}add(e,t,n,s,r={}){this.list.push({x:e,y:t,z:n,idx:s,ph:r.ph!=null?r.ph:Math.random()*le,k:r.k||1,s:r.s||1,twinkle:r.twinkle!=null?r.twinkle:.28,fixed:r.color||null,group:r.group||0,layer:r.layer||"festive"})}build(e){let t=this.list.length;if(!t)return null;let n=new mt(this.geo,new Lt({color:"#ffffff"}),t),s=new De;return this.list.forEach((r,a)=>n.setMatrixAt(a,s.makeScale(r.s,r.s,r.s).setPosition(r.x,r.y,r.z))),n.instanceColor=new zt(new Float32Array(t*3),3),n.frustumCulled=!1,e.add(n),this.mesh=n,n}update(e,t,n,s,r,a){var c,h;if(!this.mesh)return;let o=this.mesh.instanceColor.array,l=new ce;for(let f=0;f<this.list.length;f++){let u=this.list[f];l.copy(u.fixed?ci(u.fixed):ci(t[u.idx%t.length]));let d=r?1:1-u.twinkle+u.twinkle*Math.sin(e*2.6+u.ph),p=a&&(c=a[u.group])!=null?c:1,_=u.layer==="festive"||u.layer==="show"?s*.25:0,g=u.k*((h=n[u.layer])!=null?h:1)*(d+_)*2.5*p;o[f*3]=l.r*g,o[f*3+1]=l.g*g,o[f*3+2]=l.b*g}this.mesh.instanceColor.needsUpdate=!0}},th=class{constructor(){this.list=[];let e=new et;e.setAttribute("position",new We([-.5,0,0,.5,0,0,0,-1.6,0],3)),e.setAttribute("normal",new We([0,0,1,0,0,1,0,0,1],3)),this.geo=e}add(e,t,n,s,r,a){this.list.push({x:e,y:t,z:n,ry:s,size:r,idx:a,ph:Math.random()*le})}build(e){let t=this.list.length;if(!t)return null;let n=new mt(this.geo,new xr({color:"#ffffff",side:rt}),t);return n.instanceColor=new zt(new Float32Array(t*3),3),n.frustumCulled=!1,e.add(n),this.mesh=n,this.pose(0,!0),n}setPalette(e){if(!this.mesh)return;let t=this.mesh.instanceColor.array;this.list.forEach((n,s)=>{let r=ci(e[n.idx%e.length]);t[s*3]=r.r,t[s*3+1]=r.g,t[s*3+2]=r.b}),this.mesh.instanceColor.needsUpdate=!0}pose(e,t){if(!this.mesh)return;let n=new Rt,s=new Nt,r=new F,a=new F,o=new De;this.list.forEach((l,c)=>{s.set(t?0:Math.sin(e*1.7+l.ph)*.25,l.ry,0,"YXZ"),n.setFromEuler(s),r.set(l.size,l.size,l.size),a.set(l.x,l.y,l.z),this.mesh.setMatrixAt(c,o.compose(a,n,r))}),this.mesh.instanceMatrix.needsUpdate=!0}},nh=class{constructor(e="#2a2019",t=.8){this.pts=[],this.hex=e,this.opacity=t}line(e,t){this.pts.push(e[0],e[1],e[2],t[0],t[1],t[2])}cable(e,t,n,s=20){let r=Hn(e,t,n,0);for(let a=1;a<=s;a++){let o=Hn(e,t,n,a/s);this.line(r,o),r=o}}build(e){if(!this.pts.length)return null;let t=new et;t.setAttribute("position",new We(this.pts,3));let n=new fr(t,new As({color:this.hex,transparent:this.opacity<1,opacity:this.opacity}));return e.add(n),n}};function Ui(i,e,t,n,s,r){i.wires.cable(e,t,n);let a=Math.hypot(t[0]-e[0],t[2]-e[2]),o=Math.max(2,Math.round(a/(s==="flags"?.9:1.1))),l=Math.atan2(t[0]-e[0],t[2]-e[2])+Math.PI/2;for(let c=1;c<o;c++){let h=Hn(e,t,n,c/o);s==="flags"?i.flags.add(h[0],h[1],h[2],l,.3,c+r):(i.bulbs.add(h[0],h[1]-.06,h[2],c+r,{ph:c*1.7+r}),c%3===1&&i.pools.add(h[0],.02,h[2],2.8,2.8,"#ffd58a",.085,{layer:"festive",theme:!0}))}}var ih=class{constructor(){this.list=[]}add(e,t,n,s,r,a,o=1,l={}){let c=!!l.vertical,h=l.layer||"practical";this.list.push({x:e,y:t,z:n,rx:s,rz:r,hex:a,k:o,vertical:c,ry:l.ry||0,theme:l.theme||!1,layer:h,ground:!c&&t<.1&&!l.live,falloff:l.falloff||(h==="flame"?"tight":"soft"),ph:e*3.7+n*1.3})}build(e){this.bakedGround&&(this.list=this.list.filter(c=>!c.ground));let t=this.list.length;if(!t)return null;let n=new Ze(1,1),s=new Lt({map:dl(),color:"#ffffff",transparent:!0,blending:$n,depthWrite:!1,fog:!1,side:rt}),r=new mt(n,s,t);r.instanceColor=new zt(new Float32Array(t*3),3);let a=new Rt,o=new Nt,l=new De;return this.list.forEach((c,h)=>{o.set(c.vertical?0:-Math.PI/2,c.ry,0,"YXZ"),a.setFromEuler(o),r.setMatrixAt(h,l.compose(new F(c.x,c.y,c.z),a,new F(c.rx*2,c.rz*2,1)))}),r.frustumCulled=!1,r.renderOrder=2,e.add(r),this.mesh=r,r}update(e,t,n=0,s=!1){if(!this.mesh)return;let r=this.mesh.instanceColor.array;this.list.forEach((a,o)=>{var h;let l=ci(a.theme?t:a.hex),c=a.k*((h=e[a.layer])!=null?h:1)*(a.layer==="flame"&&!s?eh(n,a.ph):1);r[o*3]=l.r*c,r[o*3+1]=l.g*c,r[o*3+2]=l.b*c}),this.mesh.instanceColor.needsUpdate=!0}};function Wx(){let i=[[0,0],[.42,.1],[.55,.3],[.48,.55],[.3,.8],[.12,.98],[0,1.1]].map(([e,t])=>new fe(e,t));return new nn(i,8)}function Xx(){let i=[[0,0],[.55,.02],[.9,.25],[1,.55],[.92,.6],[.8,.4],[0,.35]].map(([e,t])=>new fe(e,t));return new nn(i,10)}var sh=class{constructor(){this.list=[]}add(e,t,n,s={}){let r=s.s||.045;this.list.push({x:e,y:t,z:n,s:r,bowl:s.bowl===void 0?"clay":s.bowl,layer:s.layer||"flame",ph:s.ph!=null?s.ph:e*5.3+n*2.9+t*7.1,k:s.k||1})}build(e,t){let n=this.list.length;if(!n)return;let s=new De,r=this.list.filter(c=>c.bowl);if(r.length){let c=new mt(Xx(),new qe({color:"#ffffff",roughness:.75,metalness:.2}),r.length),h=new ce;r.forEach((f,u)=>{c.setMatrixAt(u,s.makeScale(f.s,f.s*.8,f.s).setPosition(f.x,f.y,f.z)),c.setColorAt(u,h.set(f.bowl==="brass"?"#c9953a":"#8a3f1e"))}),e.add(c)}let a=Wx(),o=new mt(a,new Lt({color:"#ffffff",fog:!1}),n),l=new mt(a,new Lt({color:"#ffffff",fog:!1}),n);[o,l].forEach(c=>{c.instanceColor=new zt(new Float32Array(n*3),3),c.frustumCulled=!1,e.add(c)}),this.body=o,this.core=l,this.update(0,{flame:1,garbo:1},!0)}lightPools(e){this.list.forEach(t=>{let n=t.s*20;e.pools.add(t.x,t.y<.1?.02:t.y+.01,t.z,n,n,Fe.flame,.24*t.k,{layer:t.layer,live:t.y>=.1})})}update(e,t,n){if(!this.body)return;let s=ci(Fe.flame),r=ci(Fe.flameCore),a=this.body.instanceColor.array,o=this.core.instanceColor.array,l=new Rt,c=new Nt,h=new F,f=new F,u=new De;this.list.forEach((d,p)=>{var v;let _=n?.9:eh(e,d.ph),g=(v=t[d.layer])!=null?v:1,m=d.s*1.5*(.75+.35*_)*Math.min(1.2,g),y=n?0:.12*Math.sin(e*2.3+d.ph)+.05*Math.sin(e*7+d.ph*2);c.set(0,0,y),l.setFromEuler(c),f.set(d.x,d.y+d.s*.3,d.z),h.set(d.s*.42,m,d.s*.42),this.body.setMatrixAt(p,u.compose(f,l,h)),h.set(d.s*.2,m*.55,d.s*.2),this.core.setMatrixAt(p,u.compose(f,l,h));let b=d.k*g*(.7+.45*_);a[p*3]=s.r*3.2*b,a[p*3+1]=s.g*3.2*b,a[p*3+2]=s.b*3.2*b,o[p*3]=r.r*5*b,o[p*3+1]=r.g*5*b,o[p*3+2]=r.b*5*b}),this.body.instanceMatrix.needsUpdate=this.core.instanceMatrix.needsUpdate=!0,this.body.instanceColor.needsUpdate=this.core.instanceColor.needsUpdate=!0}},qx=(()=>{let i=new Je(.04,1,1,20,1,!0);return i.translate(0,-.5,0),i})();function Yx(){return new Ct({uniforms:{color:{value:new ce("#ffffff")},opacity:{value:.2}},vertexShader:"varying float vK; varying vec3 vN; varying vec3 vV; void main(){ vK = -position.y; vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec3 color; uniform float opacity; varying float vK; varying vec3 vN; varying vec3 vV; void main(){ float edge = pow(abs(dot(vN, vV)), 1.4); float a = opacity * pow(1.0 - clamp(vK,0.0,1.0), 1.6) * edge; gl_FragColor = vec4(color * a, a); }",transparent:!0,depthWrite:!1,blending:$n,side:rt})}var Ni=class{constructor(e,t,n=10,s=1.2,r=.18){this.mesh=new ne(qx,Yx()),this.mesh.material.uniforms.color.value.set(t),this.mesh.material.uniforms.opacity.value=r,this.mesh.renderOrder=3,this.mesh.frustumCulled=!1,this.length=n,this.spread=s,this.base=r,e.add(this.mesh),this._up=new F(0,-1,0)}aim(e,t){let n=new F(t[0]-e[0],t[1]-e[1],t[2]-e[2]),s=n.length();this.mesh.position.set(e[0],e[1],e[2]),this.mesh.quaternion.setFromUnitVectors(this._up,n.normalize());let r=Math.tan(this.spread*.5)*s;this.mesh.scale.set(r,s,r)}set(e,t){this.mesh.material.uniforms.color.value.set(e),this.mesh.material.uniforms.opacity.value=this.base*t,this.mesh.visible=t>.01}};function Lf(){let i={bulbs:new gl(.075),bigBulbs:new gl(.13,8),flags:new th,wires:new nh,pools:new ih,flames:new sh,beams:[],updaters:[],lit:[]},e=new Map;return i.glow=(t,n=1,s="practical")=>{let r=t+"|"+n+"|"+s;if(!e.has(r)){let a=xl(t,n);i.lit.push({mat:a,base:a.color.clone(),layer:s}),e.set(r,a)}return e.get(r)},i.selfLit=(t,n,s="practical")=>(t.map&&!t.emissiveMap?(t.emissiveMap=t.map,t.emissive.set("#ffffff")):t.emissive.getHex()===0&&t.emissive.set("#ffffff"),i.lit.push({mat:t,emissive:n,layer:s}),t),i.litMap=(t,n=1,s="practical",r)=>{let a=new Lt(Object.assign({map:t,color:new ce(n,n,n)},r||{}));return i.lit.push({mat:a,base:a.color.clone(),layer:s}),a},i}function Df(i,e){i.lit.forEach(t=>{var s;let n=(s=e[t.layer])!=null?s:1;t.emissive!=null?t.mat.emissiveIntensity=t.emissive*n:t.mat.color.copy(t.base).multiplyScalar(n)})}function Nf(i,e){i.flames.build(e,i),i.bulbs.build(e),i.bigBulbs.build(e),i.flags.build(e),i.wires.build(e),i.pools.build(e)}function zn(i,e,t,n,s,r,a=0,o=0,l=0){let c=new ne(e,t);return c.position.set(n,s,r),c.rotation.set(a,o,l),i.add(c),c}var Pn=(i,e,t,n,s,r,a,o,l,c,h)=>zn(i,new de(e,t,n),o,s,r,a,l,c,h),gt=(i,e,t,n,s,r,a,o,l=16,c,h,f)=>zn(i,new Je(e,t,n,l),o,s,r,a,c,h,f),en={shell:()=>V("#6b1420",.28,.35),chrome:()=>V("#c9ccd1",.22,.9),brass:()=>V("#c99a3a",.28,.95),head:()=>V("#ece6d6",.55),black:()=>V("#141416",.5,.3),wood:()=>V("#7a3f1c",.45,.1)},_l=null;function Zx(){return _l||(_l=$e(256,256,(i,e)=>{let t=e/2;i.fillStyle="#ece6d6",i.beginPath(),i.arc(t,t,t,0,le),i.fill(),i.strokeStyle="#8e1b2c",i.lineWidth=14,i.beginPath(),i.arc(t,t,t-10,0,le),i.stroke(),i.translate(t,t);for(let n=0;n<12;n++)i.save(),i.rotate(n/12*le),i.fillStyle=n%2?"#c9963f":"#8e1b2c",i.beginPath(),i.ellipse(52,0,30,11,0,0,le),i.fill(),i.restore();i.fillStyle="#c9963f",i.beginPath(),i.arc(0,0,22,0,le),i.fill()}),_l)}var yl=null;function Jx(){return yl||(yl=$e(512,128,(i,e,t)=>{i.fillStyle="#16161a",i.fillRect(0,0,e,t),i.fillStyle="#7fd0ff",i.fillRect(e*.42,t*.1,e*.16,t*.18),i.fillStyle="#8c8f96";for(let r=0;r<10;r++)i.beginPath(),i.arc(e*(.08+r*.03),t*.2,4,0,le),i.fill(),i.beginPath(),i.arc(e*(.66+r*.03),t*.2,4,0,le),i.fill();let n=t*.45,s=52;i.fillStyle="#f2efe6",i.fillRect(e*.02,n,e*.96,t*.5),i.fillStyle="rgba(0,0,0,.35)";for(let r=1;r<s;r++)i.fillRect(e*.02+e*.96*r/s,n,1,t*.5);i.fillStyle="#111";for(let r=0;r<s;r++)[0,1,3,4,5].indexOf(r%7)>=0&&i.fillRect(e*.02+e*.96*(r+.68)/s,n,e*.96/s*.6,t*.3)}),yl)}var Uf=null,$x=()=>Uf||(Uf=new qe({roughness:.85,map:$e(128,128,(i,e,t)=>{i.fillStyle="#141313",i.fillRect(0,0,e,t),i.fillStyle="rgba(255,255,255,.06)";for(let n=5;n<t-5;n+=5)for(let s=5;s<e-5;s+=5)i.fillRect(s,n,1.5,1.5);i.strokeStyle="rgba(255,255,255,.14)",i.lineWidth=3,i.beginPath(),i.arc(e/2,t*.58,e*.3,0,le),i.stroke(),i.fillStyle="rgba(232,176,75,.7)",i.fillRect(e*.38,t*.08,e*.24,5)})}));function rh(i,e,t,n,s,r,a,o=0){let l=new pt;return l.position.set(s,r,a),l.rotation.x=o,i.add(l),Pn(l,e,t,n,0,t/2,0,V("#1a1818",.75)),Ft(zn(l,new Ze(e*.92,t*.88),$x(),0,t/2,-n/2-.003)),l}function Kx(i,e,t){let{kit:n,root:s,floor:r}=i,a=[],o=d=>(a.push(Bt(d)),d),l=r+.3,c=en.shell(),h=en.chrome(),f=en.brass();Pn(s,2.3,.3,2,e,r+.15,t-.5,V("#1c1414",.8)),Pn(s,2.2,.01,1.9,e,l+.005,t-.5,V("#4a1420",.95));let u=zn(s,new Ze(2.3,.03),n.glow("#ffb46a",1.2,"show"),e,r+.26,t-1.505);return Ft(u),gt(s,.17,.16,.08,e,l+.52,t+.05,en.black(),16),gt(s,.025,.025,.5,e,l+.25,t+.05,h,6),o(gt(s,.28,.28,.42,e,l+.29,t-.72,c,24,Math.PI/2)),Ft(zn(s,new Tn(.27,28),new qe({map:Zx(),roughness:.6}),e,l+.29,t-.935)),[-.935,-.505].forEach(d=>{zn(s,new jt(.285,.014,5,24),h,e,l+.29,t+d).rotation.set(0,0,0)}),[[-.17,.13],[.17,.12]].forEach(([d,p])=>{let _=o(gt(s,p,p,.2,e+d,l+.8,t-.6,c,18,.35));gt(s,p*1.02,p*1.02,.012,e+d,l+.8+.1*Math.cos(.35),t-.6+.1*Math.sin(.35),en.head(),18,.35),gt(s,.012,.012,.25,e+d*.5,l+.62,t-.66,h,5)}),o(gt(s,.18,.18,.13,e-.42,l+.62,t-.3,h,20,.1)),gt(s,.18,.18,.01,e-.42,l+.69,t-.29,en.head(),20,.1),[0,1,2].forEach(d=>{let p=d/3*le;gt(s,.01,.01,.6,e-.42+Math.cos(p)*.1,l+.28,t-.3+Math.sin(p)*.1,h,4,Math.sin(p)*.3,0,-Math.cos(p)*.3)}),o(gt(s,.2,.2,.38,e+.45,l+.42,t-.28,c,20)),gt(s,.2,.2,.01,e+.45,l+.615,t-.28,en.head(),20),[0,1,2].forEach(d=>{let p=d/3*le+.5;gt(s,.01,.01,.3,e+.45+Math.cos(p)*.2,l+.15,t-.28+Math.sin(p)*.2,h,4)}),gt(s,.012,.012,.95,e-.74,l+.47,t-.22,h,5),o(gt(s,.17,.17,.012,e-.74,l+.93,t-.22,f,22)),gt(s,.17,.17,.012,e-.74,l+.96,t-.22,f,22),gt(s,.012,.012,1.4,e-.66,l+.7,t-.8,h,5),o(gt(s,.24,.24,.01,e-.62,l+1.45,t-.74,f,24,.3,0,.2)),gt(s,.012,.012,1.2,e+.7,l+.6,t-.66,h,5),o(gt(s,.27,.27,.01,e+.66,l+1.25,t-.62,f,24,.3,0,-.2)),gt(s,.03,.02,.15,e+.1,l+.15,t-1.02,en.black(),8,Math.PI/2),a}function Qx(i,e,t){let{root:n,floor:s}=i,r=[],a=t-.36,o=s+.92,l=en.black();[-.45,.45].forEach(f=>{[.5,-.5].forEach(u=>r.push(Bt(Pn(n,.035,1.02,.035,e+f,s+.44,a,l,u)))),Pn(n,.04,.03,.62,e+f,s+.015,a,l)});let c=Pn(n,1.28,.1,.36,e,o,a,l);Ft(zn(n,new Ze(1.2,.05),V("#5a5d66",.35,.8),e,o-.01,a-.182));let h=zn(n,new Ze(1.26,.34),new qe({map:Jx(),roughness:.5}),e,o+.051,a);return h.rotation.x=-Math.PI/2,r.push(Bt(c)),r}function jx(i,e,t){let{root:n,floor:s}=i,r=[];Pn(n,1.2,.1,1.1,e,s+.05,t+.05,V("#ece6d6",.95)),Pn(n,1.22,.02,1.12,e,s+.01,t+.05,V("#7e1827",.9)),gt(n,.13,.13,.9,e,s+.23,t+.52,V("#b8312b",.85),14,0,0,Math.PI/2);let a=t-.32,o=s+.1;[[-.16,.1],[.14,.075]].forEach(([h,f])=>{let u=zn(n,new jt(f*.9,.025,5,16),V("#7e1827",.9),e+h,o+.02,a);u.rotation.x=Math.PI/2});let l=zn(n,new nn([[0,0],[.07,.01],[.12,.07],[.12,.14],[.1,.2]].map(([h,f])=>new fe(h,f)),18),V("#9aa0a6",.25,.85),e-.16,o+.02,a),c=gt(n,.075,.085,.25,e+.14,o+.145,a,en.wood(),16);return gt(n,.1,.1,.008,e-.16,o+.225,a,en.head(),18),gt(n,.075,.075,.008,e+.14,o+.272,a,en.head(),16),gt(n,.035,.035,.01,e-.19,o+.229,a,en.black(),12),gt(n,.028,.028,.01,e+.14,o+.276,a,en.black(),12),r.push(Bt(l),Bt(c)),gt(n,.012,.012,.75,e+.42,o+.37,a+.1,en.black(),5),gt(n,.01,.01,.4,e+.25,o+.72,a,en.black(),5,0,0,Math.PI/2-.3),r}function ah(i,e,t){Pn(i.root,.46,.22,.32,e,i.floor+.13,t,V("#1c1c20",.5,.25),-.45)}function e_(i,e,t){let{root:n,floor:s}=i,r=new pt;r.position.set(e,s,t),r.rotation.x=.22,n.add(r);let a=V("#c46a2a",.3,.1),o=V("#3a2412",.5);gt(r,.19,.19,.1,0,.3,0,a,22,Math.PI/2),gt(r,.15,.15,.1,0,.58,0,a,20,Math.PI/2),Ft(zn(r,new Tn(.05,16),en.black(),0,.46,-.051)),Pn(r,.05,.5,.03,0,.92,-.02,o),Pn(r,.08,.14,.03,0,1.22,-.02,V("#1b120b",.5)),[-.12,.12].forEach(l=>Pn(n,.02,.5,.02,e+l,s+.24,t+.12,en.black(),-.3))}function vl(i,e,t,n){let s={kit:i,root:e,floor:n.floor},r={},a=n.x1-n.x0;return t.forEach(o=>{let l=n.x0+a*o.u,c=n.front+o.d;o.role==="drums"?r.drums=Kx(s,l,c):o.role==="keys"?r.keys=Qx(s,l,c):o.role==="tabla"?r.tabla=jx(s,l,c):o.role==="guitar"?(rh(e,.6,.48,.28,l-.55,n.floor,c+.55),n.small||(e_(s,l+.62,c+.35),ah(s,l,c-.95))):o.role==="bass"?(rh(e,.62,.9,.42,l+.5,n.floor,c+.62),rh(e,.62,.2,.34,l+.5,n.floor+.9,c+.6),ah(s,l,c-.95)):o.role==="dhol"&&!n.small&&ah(s,l,c-.95)}),r}var ks=null;function t_(){return ks||(ks=$e(64,256,(i,e,t)=>{i.clearRect(0,0,e,t),i.strokeStyle="#9a96a6",i.lineWidth=5,i.beginPath(),i.moveTo(3,0),i.lineTo(3,t),i.moveTo(e-3,0),i.lineTo(e-3,t),i.stroke(),i.lineWidth=3,i.beginPath();for(let n=0;n<t;n+=32)i.moveTo(3,n),i.lineTo(e-3,n+16),i.lineTo(3,n+32);i.stroke()}),ks.wrapS=ks.wrapT=fn,ks)}var oh=new Map;function bl(i){if(!oh.has(i)){let e=t_().clone();e.needsUpdate=!0,e.repeat.set(1,i),oh.set(i,new qe({map:e,alphaTest:.4,side:rt,metalness:.7,roughness:.4}))}return oh.get(i)}function n_(){return $e(512,160,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#4a0f18"),n.addColorStop(1,"#2a070d"),i.fillStyle=n,i.fillRect(0,0,e,t),i.strokeStyle="#c9963f",i.lineWidth=5,i.strokeRect(8,8,e-16,t-16),i.lineWidth=2,i.strokeRect(18,18,e-36,t-36),i.translate(e/2,t/2),i.fillStyle="rgba(214,166,74,.55)";for(let s=0;s<12;s++)i.save(),i.rotate(s/12*le),i.beginPath(),i.ellipse(26,0,20,7,0,0,le),i.fill(),i.restore();i.fillStyle="#d6a64a",i.beginPath(),i.arc(0,0,10,0,le),i.fill()})}var Ml=null,i_=i=>Ml&&Ml.kit===i?Ml.mat:(Ml={kit:i,mat:i.selfLit(new qe({map:n_(),roughness:.9}),.35)}).mat;function s_(){return $e(256,128,(i,e,t)=>{i.fillStyle="#6b1420",i.fillRect(0,0,e,t),i.fillStyle="#1f2a5a",i.fillRect(10,10,e-20,t-20),i.fillStyle="#7e1827",i.fillRect(18,18,e-36,t-36),i.strokeStyle="#d6a64a",i.lineWidth=2,i.strokeRect(14,14,e-28,t-28),i.fillStyle="#d6a64a",i.beginPath(),i.ellipse(e/2,t/2,34,22,0,0,le),i.fill(),i.fillStyle="#1f2a5a",i.beginPath(),i.ellipse(e/2,t/2,24,14,0,0,le),i.fill();for(let n=0;n<14;n++)i.fillStyle=n%2?"#d6a64a":"#e9dcc0",i.beginPath(),i.arc(28+n*15.4,26,3,0,le),i.arc(28+n*15.4,t-26,3,0,le),i.fill()})}function lh(i,e,t){let n=new pt,s=bl(t);for(let r=0;r<4;r++){let a=new ne(new Ze(e,i),s),o=r/4*le;a.position.set(Math.sin(o)*e/2,0,Math.cos(o)*e/2),a.rotation.y=o,n.add(a)}return n}var Zr=null;function r_(){return Zr||(Zr=$e(256,64,(i,e,t)=>{for(let n=0;n<e;n++){let s=.5+.5*Math.sin(n/e*le*6);i.fillStyle=`rgb(${Math.round(26+40*s)},${Math.round(5+8*s)},${Math.round(11+16*s)})`,i.fillRect(n,0,1,t)}}),Zr.wrapS=fn,Zr)}function a_(i){return $e(512,64,(e,t,n)=>{let s=t/i;e.fillStyle="#4a1020",e.beginPath(),e.moveTo(0,0),e.lineTo(t,0);for(let r=i;r>0;r--){let a=r*s,o=a-s;e.lineTo(a,n*.45),e.quadraticCurveTo((o+a)/2,n*1.05,o,n*.45)}e.closePath(),e.fill(),e.strokeStyle="#d6a64a",e.lineWidth=3,e.beginPath();for(let r=0;r<i;r++){let a=r*s;e.moveTo(a,n*.45),e.quadraticCurveTo(a+s/2,n*1.02,a+s,n*.45)}e.stroke(),e.fillStyle="#d6a64a",e.fillRect(0,2,t,3)})}function o_(){return $e(512,64,(i,e,t)=>{let n=i.createLinearGradient(0,0,e,0);for(let s=0;s<40;s++)n.addColorStop(s/40,"#1c070b"),n.addColorStop((s+.45)/40,"#4a1420");i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="#c9963f",i.fillRect(0,0,e,4)})}function ch(i,e){let t=new pt,n=e.z,s=e.depth||3.2,r=n+s,a=e.x1-e.x0,o=(e.x0+e.x1)/2,l=.4,c=n+s*.45,h=(N,W,B,k,q)=>{let oe=new ne(N,W);return oe.position.set(B,k,q),t.add(oe),oe},f=h(new Ze(a,e.h),new qe({map:o_(),roughness:.9}),o,e.h/2,n);if(Ft(f),h(new de(a,e.h,s),V("#1a0e0a",.9),o,e.h/2-.005,n+s/2+.01),h(new de(a+.02,.02,s+.02),V("#2a1a12",.6,.05),o,e.h+.01,n+s/2).receiveShadow=!0,h(new de(a+.04,.05,.05),V("#c9963f",.35,.7),o,e.h,n-.02),e.sponsors){let N=e.x0+2.9,W=e.x1-2.9,B=.7,k=(W-N-B*(e.sponsors-1))/e.sponsors;for(let q=0;q<e.sponsors;q++){let oe=h(new Ze(k,e.h*.7),i_(i),N+q*(k+B)+k/2,e.h*.49,n-.02);Ft(oe)}}[-1,1].forEach(N=>{let W=N<0?e.x0+.5:e.x1-2.3,B=4,k=.9/B;for(let he=0;he<B;he++){let re=e.h*(he+1)/B;h(new de(1.8,re,k),V(he%2?"#3a1a14":"#44201a",.85),W+.9,re/2,n-.9+he*k+k/2),h(new de(1.8,.02,.03),V("#d6a64a",.35,.7),W+.9,re,n-.9+he*k)}let q=N<0?W+1.8:W,oe=h(new Je(.02,.02,Math.hypot(.95,e.h)),V("#c9963f",.35,.7),q,e.h/2+.95,n-.47);oe.rotation.x=Math.atan2(.95,e.h)});let u=e.x0+1,d=e.x1-1,p=d-u,_=e.screenBottom||e.h,g=e.screenTop-_;if(h(new de(p+.3,g+.3,.2),V("#0d0b10",.6),o,_+g/2,r+.12),i.pools.add(o,_+g*.5,r-.05,p*.75,g*.9,"#ffffff",.1,{vertical:!0,theme:!0,layer:"show"}),_>e.h+l+.5){let N=h(new Ze(p+.3,_-e.h-l+.15),V("#0b0810",.95),o,(e.h+l+_)/2,r+.01);Ft(N);let W=jn(7);for(let B=0;B<Math.round(p*4);B++)i.bulbs.add(u+W()*p,e.h+l+.2+W()*(_-e.h-l-.3),r-.005,0,{color:"#fff4e0",k:.45,s:.22,twinkle:.85,ph:W()*le,layer:"festive"})}i.pools.add(o,.02,n-3,a*.55,4.5,"#ffffff",.14,{theme:!0,layer:"show"}),i.pools.add(o,.02,n-9,a*.8,7,"#ffffff",.05,{theme:!0,layer:"show"}),h(new de(a-2.8,l,r-c),V("#2b1c14",.8),o,e.h+l/2,(c+r)/2);let m=h(new Ze(a-2.8,.035),new Lt({color:"#ffffff"}),o,e.h+l*.5,c-.01);Ft(m);let y=.4;[e.x0-.4,e.x1+.4].forEach(N=>{let W=lh(e.truss,y,Math.round(e.truss/1.2));W.position.set(N,e.truss/2,n),t.add(W)});let b=lh(a+.8+y,y,Math.round((a+1)/1.2));b.rotation.z=Math.PI/2,b.position.set(o,e.truss,n),t.add(b),[-1,1].forEach(N=>{let W=r_().clone();W.needsUpdate=!0,W.repeat.set(.3,1);let B=h(new Ze(.9,e.truss-.3-e.h),new qe({map:W,roughness:1,side:rt}),N<0?e.x0+.25:e.x1-.25,e.h+(e.truss-.3-e.h)/2,n+.15);Ft(B)});let v=h(new Ze(a+.4,.95),new qe({map:a_(Math.max(4,Math.round(a/2.2))),transparent:!0,alphaTest:.3,roughness:1,side:rt}),o,e.truss-.6,n+.1);Ft(v);let S=[];for(let N=0;N<10;N++){let W=at(e.x0,e.x1,(N+.5)/10),B=e.truss-.35;if(N%2){let k=h(new de(.34,.12,.3),V("#18161b",.5,.3),W,B+.12,n),q=h(new Je(.13,.16,.34,12),V("#232027",.45,.4),W,B-.08,n);q.userData.dynamic=!0,S.push({x:W,y:B-.2,mesh:q,i:N}),k.castShadow=!1}i.bigBulbs.add(W,B-.28,n-.02,N,{ph:N,twinkle:.1,layer:"show"})}let w=S.map((N,W)=>new Ni(t,"#ffffff",10,.32,.12)),E=[];for(let N=0;N<5;N++)E.push(new Ni(t,"#ffffff",8,.3,.16));[-1,1].forEach(N=>{let W=o+N*e.arrays;for(let B=0;B<6;B++){let k=h(new de(1.4,.55,.8),V("#0b0909",.7),W,e.truss-1.3-B*.6,n-.4-B*B*.03);k.rotation.x=-B*.04}[[-.4,.55,.78,1.1],[.4,.55,.78,1.1],[0,1.38,.7,.55]].forEach(([B,k,q,oe])=>h(new de(q,oe,.8),V("#0e0c0c",.75),W+B,k,n-.4))});for(let N=0;N<=16;N++)i.bulbs.add(at(e.x0,e.x1,N/16),e.h-.03,n-.05,N,{ph:N*.7,s:.75,k:.55,twinkle:.15});let x=[];for(let N=0;N<8;N++){let W=[at(e.x0,e.x1,N/8),e.h-.06,n-.06],B=[at(e.x0,e.x1,(N+1)/8),e.h-.06,n-.06];for(let k=1;k<14;k++)x.push(Hn(W,B,.35,k/14))}let A=new mt(new kt(.05,6,4),new qe({color:"#ffffff",roughness:.9}),x.length);A.instanceColor=new zt(new Float32Array(x.length*3),3);let I=new De,R=new ce("#f29a2e"),P=new ce("#f6c342");x.forEach((N,W)=>{A.setMatrixAt(W,I.makeTranslation(N[0],N[1],N[2]));let B=W%3?R:P;A.instanceColor.setXYZ(W,B.r,B.g,B.b)}),t.add(A);let L=[],C=V("#1c1c20",.5,.25),U=V("#0b0b0c",.9);[-.34,-.12,.12,.34].forEach(N=>{let W=o+N*a,B=h(new de(.6,.3,.42),C,W,e.h+.16,n+.2);B.rotation.x=-.45,L.push(Bt(B)),h(new de(.03,.01,s*.55),U,W+.22,e.h+.025,n+.4+s*.275),i.bulbs.add(W+.22,e.h+.1,n-.02,0,{color:"#5aa8ff",k:.5,s:.25,twinkle:0,layer:"show"})});let z=null;e.band&&([.2,.8].forEach(N=>{let W=h(new Ze(a*.3,(r-c)*.7),new qe({map:s_(),roughness:1}),e.x0+a*N,e.h+l+.006,c+(r-c)*.45);W.rotation.x=-Math.PI/2}),z=vl(i,t,e.band,{x0:e.x0,x1:e.x1,front:c,floor:e.h+l}));for(let N=0;N<10;N+=2){let W=at(e.x0,e.x1,(N+.5)/10),B=h(new Je(.12,.1,.3,10),V("#141217",.45,.5),W,e.truss-.5,n-.02);B.rotation.x=.5,h(new de(.28,.03,.03),V("#141217",.5,.5),W,e.truss-.32,n-.02)}return e.sideScreens&&[-1,1].forEach(N=>{let W=Math.min(N*14.4,N*21.4),B=Math.max(N*14.4,N*21.4),k=5,q=9,oe=n+.3;[W+.7,B-.7].forEach(he=>{let re=lh(k,.32,Math.round(k/1.1));re.position.set(he,k/2,oe+.25),t.add(re)}),h(new de(B-W+.5,q-k+.5,.2),V("#0b0a0d",.6),(W+B)/2,(k+q)/2,oe+.12),h(new de(B-W,.12,.5),V("#15131a",.6,.3),(W+B)/2,k-.3,oe+.3),i.pools.add((W+B)/2,.02,oe-3,(B-W)*.6,4,"#ffffff",.12,{theme:!0,layer:"show"})}),{root:t,stageFront:L,bandHoles:z,front:{x:o,y:e.h,z:n},wash:{pos:[o,e.truss-.4,n-3.5],to:[o,e.h,n+s*.6]},update(N,W){let{TH:B,pulse:k,reduce:q,close:oe,lv:he}=W,re=he.show,te=he.show>.5;m.material.color.copy(pl(B.hues[Math.floor(N*.5)%B.hues.length]+20*Math.sin(N*B.speed),B.sat,45)).multiplyScalar((.4+.3*k)*re),S.forEach((Se,J)=>{let $=q?0:N*(.4+B.speed),Te=Math.sin($+J*1.3)*3.5,Ge=[Se.x+Te,0,n-5-(oe?0:2+2*Math.sin($*.7+J))];Se.mesh.rotation.x=-.4+Math.sin($+J)*.2,Se.mesh.rotation.z=Math.sin($+J*1.3)*.3,w[J].aim([Se.x,Se.y,n],Ge),w[J].set(B.beams[J%B.beams.length],re*(.8+.5*k))}),E.forEach((Se,J)=>{let $=at(e.x0+1.9,e.x1-1.9,(J+.5)/5),Te=q?0:Math.sin(N*(.5+B.speed*.6)+J*1.7)*2.2;Se.aim([$,e.h+l,r-.2],[$+Te,e.screenTop+3,r-1.4]),Se.set(B.beams[(J+1)%B.beams.length],Math.max(0,re-.3)/.7*(.9+.5*k))})}}}var $i=29.530588853,l_=Date.UTC(2e3,0,6,18,14);function c_(i){i==null&&(i=((Date.now()-l_)/864e5%$i+$i)%$i);let e=(1-Math.cos(i/$i*le))/2,t=i<$i/2,n=i<1||i>$i-1?"new moon":e>.97?"full moon":Math.abs(e-.5)<.06?t?"first quarter":"last quarter":e<.5?t?"waxing crescent":"waning crescent":t?"waxing gibbous":"waning gibbous";return{age:i,lit:e,name:n,waxing:t}}function h_(i){return $e(256,256,(e,t)=>{let n=t*.2,s=t/2,r=t/2,a=i/$i,o=(1-Math.cos(a*le))/2,l=e.createRadialGradient(s,r,n*.8,s,r,t/2);l.addColorStop(0,`rgba(255,238,205,${.05+.3*o})`),l.addColorStop(.4,`rgba(255,238,205,${.02+.08*o})`),l.addColorStop(1,"rgba(255,238,205,0)"),e.fillStyle=l,e.fillRect(0,0,t,t);let c=e.createRadialGradient(s-n*.2,r-n*.2,n*.1,s,r,n);if(c.addColorStop(0,"rgba(128,134,166,.4)"),c.addColorStop(1,"rgba(78,82,110,.34)"),e.fillStyle=c,e.beginPath(),e.arc(s,r,n,0,le),e.fill(),o<.004)return;let h=()=>{e.beginPath(),e.arc(0,0,n,-Math.PI/2,Math.PI/2,!1),e.ellipse(0,0,n*Math.abs(1-2*o),n,0,Math.PI/2,-Math.PI/2,o<.5),e.closePath()};e.save(),e.translate(s,r),a>.5&&e.scale(-1,1),e.save(),e.globalAlpha=.35,e.filter=`blur(${Math.max(.6,n*.06)}px)`,h(),e.fillStyle="#f5e6c8",e.fill(),e.restore(),h(),e.save(),e.clip();let f=e.createRadialGradient(-n*.25,-n*.3,n*.05,0,0,n*1.02);f.addColorStop(0,"#fffaf0"),f.addColorStop(.55,"#f7ecd6"),f.addColorStop(.88,"#e6d4b2"),f.addColorStop(1,"#c9b692"),e.fillStyle=f,e.fillRect(-n,-n,n*2,n*2),e.filter=`blur(${Math.max(.5,n*.07)}px)`,e.fillStyle="rgba(150,140,128,.22)",[[-.28,-.3,.26,.2],[.08,-.38,.2,.15],[.3,-.05,.22,.26],[-.1,.02,.3,.2],[-.36,.22,.18,.14],[.14,.36,.16,.12]].forEach(u=>{e.beginPath(),e.ellipse(u[0]*n*(a>.5?-1:1),u[1]*n,u[2]*n,u[3]*n,.4,0,le),e.fill()}),e.restore(),e.restore()})}function Ff(i,e){let t=new pt,n=i==="sheri"?"#2a1b36":"#3d1f1a",s=new ne(new kt(900,32,16),new Ct({side:sn,depthWrite:!1,fog:!1,uniforms:{top:{value:new ce("#04051a")},mid:{value:new ce("#140f33")},low:{value:new ce(n)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position.z = gl_Position.w; }",fragmentShader:"uniform vec3 top; uniform vec3 mid; uniform vec3 low; varying vec3 vP; void main(){ float h = clamp(vP.y, -0.2, 1.0); vec3 c = h < 0.12 ? mix(low, mid, smoothstep(-0.02, 0.12, h)) : mix(mid, top, smoothstep(0.12, 0.7, h)); gl_FragColor = vec4(c, 1.0); }"}));s.renderOrder=-10,t.add(s);let r=jn(99),a=900,o=new Float32Array(a*3),l=new Float32Array(a*3);for(let y=0;y<a;y++){let b=r()*le,v=Math.asin(.06+Math.pow(r(),.8)*.94),S=800;o[y*3]=Math.cos(b)*Math.cos(v)*S,o[y*3+1]=Math.sin(v)*S,o[y*3+2]=Math.sin(b)*Math.cos(v)*S;let w=.35+r()*.65,E=r();l[y*3]=w,l[y*3+1]=w*(.92+E*.06),l[y*3+2]=w*(.8+(1-E)*.2)}let c=new et;c.setAttribute("position",new bt(o,3)),c.setAttribute("color",new bt(l,3));let h=new dr(c,new Rs({size:1.6,sizeAttenuation:!1,vertexColors:!0,fog:!1,depthWrite:!1,transparent:!0}));t.add(h);let f=c_(e),u=Math.min(f.age,29.5-f.age,14.8)/14.8,d=new hr(new Es({map:h_(f.age),fog:!1,depthWrite:!1,transparent:!0})),p=at(.08,.5,u),_=.5,g=700;d.position.set(Math.sin(_)*Math.cos(p)*g,Math.sin(p)*g,Math.cos(_)*Math.cos(p)*g),d.scale.setScalar(g*.11),t.add(d);let m={dir:d.position.clone().normalize(),intensity:.08+.25*f.lit};return{root:t,moonLight:m,info:f}}function Bf(i=170){let e=jn(17),t=new pt,n=$e(128,128,(c,h,f)=>{c.fillStyle="#0d0913",c.fillRect(0,0,h,f);for(let u=8;u<f;u+=16)for(let d=6;d<h;d+=14)e()<.3&&(c.fillStyle=e()<.7?"rgba(255,196,120,.9)":"rgba(190,210,255,.6)",c.fillRect(d,u,6,8))});n.wrapS=n.wrapT=fn;let s=new qe({color:"#0d0913",emissive:"#ffffff",emissiveMap:n,emissiveIntensity:.6,roughness:1,fog:!1}),r=new de(1,1,1),a=110,o=new mt(r,s,a),l=new De;for(let c=0;c<a;c++){let h=c/a*le+e()*.03,f=i+e()*60,u=12+e()*22,d=5+Math.pow(e(),2)*26;l.compose(new F(Math.sin(h)*f,d/2-1,Math.cos(h)*f),new Rt().setFromAxisAngle(new F(0,1,0),h),new F(u,d,10)),o.setMatrixAt(c,l)}return t.add(o),t}var u_=["position","normal","uv","color"];function f_(i,e){for(let t=i;t&&t!==e;t=t.parent)if(t.userData.dynamic)return!0;return!1}var Of=(i,e)=>Math.round(i/e)*e;function d_(i,e){return i.isMeshStandardMaterial&&!i.wireframe&&!e.has(i)&&!i.map&&!i.emissiveMap&&!i.normalMap&&!i.alphaMap&&!i.transparent&&i.emissive.getHex()===0&&i.opacity===1}var hh=new Map;function p_(i){let e=Math.min(.95,Math.max(.3,Of(i.roughness,.2))),t=Of(i.metalness,.4),n=e+"|"+t+"|"+i.side+"|"+!!i.flatShading;return hh.has(n)||hh.set(n,new qe({color:"#ffffff",roughness:e,metalness:t,side:i.side,flatShading:i.flatShading,vertexColors:!0})),hh.get(n)}function Sl(i,e=new Set){i.updateMatrixWorld(!0);let t=new De().copy(i.matrixWorld).invert(),n=new Map,s=[];i.traverse(a=>{if(!a.isMesh||a.isInstancedMesh||a.isSkinnedMesh||!a.geometry||!a.visible||f_(a,i))return;let o=a.material;if(Array.isArray(o)||o.isShaderMaterial||o.transparent)return;let l=a.geometry;if(!l.attributes.position||!l.attributes.normal)return;let c=d_(o,e),h=c?p_(o):o,f=c?"position+normal+color":u_.filter(d=>l.attributes[d]).join("+"),u=h.uuid+"|"+f+"|"+a.castShadow+a.receiveShadow;n.has(u)||n.set(u,{mat:h,flat:c,sig:f,list:[],cast:a.castShadow,receive:a.receiveShadow,order:a.renderOrder}),n.get(u).list.push(a)});let r=0;return n.forEach(a=>{if(a.list.length<2&&!a.flat)return;let o=a.sig.split("+"),l=[],c=0;a.list.forEach(u=>{let d=new De().multiplyMatrices(t,u.matrixWorld),p=(u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone()).applyMatrix4(d);if(a.flat){let _=u.material.color,g=p.attributes.position.count,m=u.material.vertexColors&&p.attributes.color,y=new Float32Array(g*3);for(let b=0;b<g;b++)y[b*3]=_.r*(m?m.getX(b):1),y[b*3+1]=_.g*(m?m.getY(b):1),y[b*3+2]=_.b*(m?m.getZ(b):1);p.setAttribute("color",new bt(y,3))}d.determinant()<0&&o.forEach(_=>{let g=p.attributes[_],m=g.itemSize,y=g.array;for(let b=0;b<g.count;b+=3)for(let v=0;v<m;v++){let S=(b+1)*m+v,w=(b+2)*m+v,E=y[S];y[S]=y[w],y[w]=E}}),l.push(p),c+=p.attributes.position.count,s.push(u)});let h=new et;o.forEach(u=>{let d=l[0].attributes[u].itemSize,p=new Float32Array(c*d),_=0;l.forEach(g=>{p.set(g.attributes[u].array,_),_+=g.attributes[u].array.length}),h.setAttribute(u,new bt(p,d))}),l.forEach(u=>u.dispose()),h.computeBoundingSphere();let f=new ne(h,a.mat);f.castShadow=a.cast,f.receiveShadow=a.receive,f.renderOrder=a.order,i.add(f),r+=a.list.length}),s.forEach(a=>a.parent&&a.parent.remove(a)),r}var Hf={mandvi:i=>({r:i?.78:1,top:i?2.4:2.85}),potScale:1.35},m_=[[.3,18,0],[.43,24,1],[.56,24,0],[.69,18,1]];function zf(i,e,t,n){i.fillStyle=n,m_.forEach(([s,r,a])=>{for(let o=0;o<r;o++){let l=(o+.5+(a?.5:0))/r*e,c=s*t,h=5.5;i.beginPath(),a?(i.moveTo(l,c-h*1.3),i.lineTo(l+h*1.1,c+h*.8),i.lineTo(l-h*1.1,c+h*.8),i.closePath()):i.arc(l,c,h,0,le),i.fill()}})}function g_(){let i=$e(512,256,(t,n,s)=>{t.fillStyle="#000",t.fillRect(0,0,n,s),zf(t,n,s,"#fff")}),e=$e(512,256,(t,n,s)=>{let r=t.createLinearGradient(0,0,0,s);r.addColorStop(0,"#8a3f1e"),r.addColorStop(.5,"#b0592b"),r.addColorStop(1,"#6d2f16"),t.fillStyle=r,t.fillRect(0,0,n,s),[[.22,"#f3e6d0"],[.25,"#c9963f"],[.77,"#c9963f"],[.8,"#f3e6d0"]].forEach(([a,o])=>{t.fillStyle=o,t.fillRect(0,a*s,n,3)}),t.strokeStyle="rgba(243,230,208,.8)",t.lineWidth=2;for(let a=0;a<24;a++){let o=a/24*n;t.beginPath(),t.moveTo(o,.84*s),t.lineTo(o+n/48,.9*s),t.lineTo(o+n/24,.84*s),t.stroke()}zf(t,n,s,"rgba(30,10,4,.9)")});return{holes:i,clay:e}}function kf(i,e,t){let n=e/2,s=e/2;i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,e,e),i.translate(n,n),i.fillStyle="rgba(58,29,18,.85)",i.beginPath(),i.arc(0,0,s*.86,0,le),i.fill();let r=[t[0],"#f4a261","#2a9d8f",t[2%t.length],"#e9c46a","#c2185b"];for(let a=0;a<2;a++){let o=a?16:8,l=a?s*.68:s*.42,c=a?s*.14:s*.3,h=a?s*.07:s*.13;for(let f=0;f<o;f++)i.save(),i.rotate(f/o*le+(a?Math.PI/16:0)),i.fillStyle=r[(f+a)%r.length],i.beginPath(),i.ellipse(l,0,c,h,0,0,le),i.fill(),i.fillStyle="rgba(255,243,214,.8)",i.beginPath(),i.ellipse(l,0,c*.35,h*.3,0,0,le),i.fill(),i.restore()}for(let a=0;a<40;a++){let o=a/40*le;i.fillStyle="#fff3d6",i.beginPath(),i.arc(Math.cos(o)*s*.8,Math.sin(o)*s*.8,4,0,le),i.fill()}i.fillStyle="#f6c342",i.beginPath(),i.arc(0,0,s*.2,0,le),i.fill(),i.fillStyle="#c0392b",i.beginPath(),i.arc(0,0,s*.1,0,le),i.fill()}var El=null;function x_(){return El||(El=$e(64,256,(i,e,t)=>{for(let n=0;n<12;n++)i.fillStyle=n%2?"#e8b04b":"#8e1b1b",i.fillRect(0,n/12*t,e,t/12+1);i.fillStyle="rgba(255,230,170,.5)";for(let n=0;n<12;n+=2)for(let s=0;s<e;s+=8)i.fillRect(s+2,(n+.4)/12*t,3,3)}),El)}function Gf(){return $e(128,180,(i,e,t)=>{i.fillStyle="#e8b04b",i.fillRect(0,0,e,t);let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#f6c35a"),n.addColorStop(1,"#c0392b"),i.fillStyle=n,i.fillRect(10,12,e-20,t-22);let s=i.createRadialGradient(e/2,t*.38,2,e/2,t*.38,e*.34);s.addColorStop(0,"rgba(255,248,220,1)"),s.addColorStop(1,"rgba(255,240,200,0)"),i.fillStyle=s,i.fillRect(0,0,e,t),i.fillStyle="#9b1f1a",i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(e/2,t*.22,e,0),i.lineTo(e,t*.4),i.quadraticCurveTo(e*.8,t*.15,e*.7,t*.1),i.lineTo(e*.3,t*.1),i.quadraticCurveTo(e*.2,t*.15,0,t*.4),i.closePath(),i.fill()})}function Vf(i,e,t){let n=new mt(new kt(t,6,4),new qe({color:"#ffffff",roughness:.9}),e.length);n.instanceColor=new zt(new Float32Array(e.length*3),3);let s=new De,r=new ce("#f29a2e"),a=new ce("#f6c342");return e.forEach((o,l)=>{n.setMatrixAt(l,s.makeTranslation(o[0],o[1],o[2])),n.setColorAt(l,l%2?r:a)}),i.add(n),n}function Xf(i,{small:e,flags:t}){let n=new pt,s=Hf.potScale,{r,top:a}=Hf.mandvi(e),o=g_(),l=document.createElement("canvas");l.width=l.height=512,kf(l.getContext("2d"),512,t);let c=new oi(l);c.colorSpace=Xt,c.anisotropy=4;let h=new ne(new Tn(2.1,48),new qe({map:c,roughness:.95,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-2}));h.rotation.x=-Math.PI/2,h.position.y=.012,h.receiveShadow=!0,n.add(h);for(let k=0;k<12;k++){let q=(k+.5)/12*le;i.flames.add(Math.cos(q)*1.95,.012,Math.sin(q)*1.95,{s:.06,k:.32})}let f=new pt;f.scale.setScalar(s),n.add(f),[[-.3,-.3],[.3,-.3],[.3,.3],[-.3,.3]].forEach(([k,q])=>{let oe=new ne(new de(.05,.5,.05),V("#3b2213",.8));oe.position.set(k,.25,q),f.add(oe)});let u=new ne(new Je(.44,.5,.28,16,1,!0),V("#9b1f1a",.85,0,{side:rt}));u.position.y=.42,f.add(u);let d=new ne(new Je(.44,.44,.03,16),V("#4a0c0a",.9));d.position.y=.56,f.add(d);let p=new ne(new jt(.5,.012,4,32),V("#e8b04b",.35,.7));p.rotation.x=Math.PI/2,p.position.y=.285,f.add(p);let _=__.map(([k,q])=>new fe(k,q)),g=new qe({map:o.clay,emissiveMap:o.holes,emissive:"#ffb45a",emissiveIntensity:0,roughness:.82}),m=new ne(new nn(_,40),g);m.position.y=.575,m.castShadow=!0,f.add(m);let y=[];for(let k=0;k<22;k++){let q=k/22*le;y.push([Math.cos(q)*.19,.575+.47+.03*Math.cos(q),Math.sin(q)*.19])}Vf(f,y,.028);let b=new ne(new Je(.1,.06,.05,14),V("#6a2c14",.85));b.position.y=.575+.62,f.add(b);let v=new kt(.045,10,8);v.scale(1,2.4,1),v.translate(0,.1,0);let S=new ne(v,xl("#ffd27a",4));S.position.y=.575+.63,S.userData.dynamic=!0,f.add(S);let w=new ne(v,xl("#fff4d0",7));w.scale.setScalar(.5),w.position.y=.575+.64,w.userData.dynamic=!0,f.add(w);let E=new Je(.06,.075,a,10),x=new qe({map:x_(),roughness:.6,metalness:.15});[[-r,-r],[r,-r],[r,r],[-r,r]].forEach(([k,q])=>{let oe=new ne(E,x);oe.position.set(k,a/2,q),oe.castShadow=!0,n.add(oe);let he=new ne(new de(.2,.12,.2),V("#5a1510",.7));he.position.set(k,.06,q),n.add(he)});let A=new ne(new nn(Wf.map(([k,q])=>new fe(k*r,q)),32),V("#a8141a",.32,.25,{side:rt,emissive:"#8a1410",emissiveIntensity:.9}));A.position.y=a,n.add(A);let I=new ne(new nn(Wf.slice(0,5).map(([k,q])=>new fe(k*r+.01,q)),12),new qe({color:"#f0c24b",wireframe:!0,metalness:.6,roughness:.4}));I.position.y=a,n.add(I);let R=new ne(new nn(y_.map(([k,q])=>new fe(k*r,q)),20),V("#f0c24b",.35,.6,{emissive:"#5a3a08",emissiveIntensity:.6}));R.position.y=a+.8,n.add(R);let P=new ne(new kt(.09,12,8),V("#e8b04b",.3,.8));P.position.y=a+1.36,n.add(P);let L=new ne(new Je(.012,.012,.8),V("#3a2413"));L.position.y=a+1.8,n.add(L);let C=new et;C.setAttribute("position",new We([0,0,0,.55,-.12,0,0,-.3,0],3)),C.computeVertexNormals();let U=new ne(C,V("#d8453a",.8,0,{side:rt}));U.position.y=a+2.18,U.userData.dynamic=!0,n.add(U);let z=new ne(new Je(r*1.32,r*1.32,.08,32),V("#e8b04b",.35,.7,{emissive:"#3a2406",emissiveIntensity:.5}));z.position.y=a,n.add(z);for(let k=0;k<24;k++){let q=k/24*le,oe=Math.cos(q)*r*1.33,he=Math.sin(q)*r*1.33;i.bulbs.add(oe,a-.06,he,k,{ph:k,s:1.2}),i.flags.add(oe,a-.04,he,-q+Math.PI/2,.2,k)}let N=[];[[[-r,-r],[r,-r]],[[-r,-r],[-r,r]],[[r,-r],[r,r]],[[-r,r],[r,r]]].forEach(([k,q])=>{for(let oe=0;oe<=16;oe++)N.push(Hn([k[0],a-.1,k[1]],[q[0],a-.1,q[1]],.5,oe/16))}),Vf(n,N,.045);let W=new qe({map:Gf(),emissiveMap:Gf(),emissive:"#ffffff",emissiveIntensity:.25,roughness:.6,side:rt}),B=Ft(new ne(new Ze(.72,1),W));return B.position.set(0,1.05,r*.75),n.add(B),i.pools.add(0,1.05,r*.74,.7,.7,"#ffb45a",.18,{vertical:!0,layer:"garbo"}),Sl(n,new Set([g,W])),n.userData.dynamic=!0,{root:n,setTheme(k){kf(l.getContext("2d"),512,k.flags),c.needsUpdate=!0},update(k,q,oe,he){n.visible=he,g.emissiveIntensity=3.2*q,W.emissiveIntensity=.15+.3*q;let re=Math.max(0,(q-.2)/.8);S.visible=w.visible=re>.01,S.scale.set(1+(oe?0:.06*Math.sin(k*17)),re*(.85+(oe?0:.15*Math.sin(k*9))),1),S.rotation.z=oe?0:Math.sin(k*5)*.08,w.scale.set(.5,.5*re,.5),U.rotation.y=oe?0:Math.sin(k*2.2)*.35}}}var __=[[0,0],[.12,.005],[.2,.04],[.27,.12],[.3,.24],[.29,.34],[.24,.44],[.16,.51],[.12,.54],[.125,.58],[.15,.6]],Wf=[[1.3,0],[1.2,.18],[.95,.42],[.6,.7],[.25,.86],[.06,.92]],y_=[[.42,0],[.36,.2],[.2,.42],[.03,.52]];function uh(i,e,t,n,s,r,a){let o=new pt;o.position.set(t,n,s),o.userData.dynamic=!0,e.add(o),i.wires.line([t,r,s],[t,n+.55,s]);let l=12,c=[a[0],"#f6c342",a[2%a.length],"#2f8f5b",a[1%a.length],"#3b4cc0"],h=[],f=[],u=new ce;for(let b=0;b<l;b++){let v=b/l*le,S=(b+1)/l*le,w=1.35;u.set(c[b%c.length]),h.push(0,.55,0,Math.cos(S)*w,0,Math.sin(S)*w,Math.cos(v)*w,0,Math.sin(v)*w);for(let E=0;E<3;E++)f.push(u.r,u.g,u.b)}let d=new et;d.setAttribute("position",new We(h,3)),d.setAttribute("color",new We(f,3)),d.computeVertexNormals();let p=new ne(d,V("#ffffff",.7,0,{vertexColors:!0,side:rt}));o.add(p);let _=new mt(new Je(.012,.012,.3,4),V("#e8b04b",.4,.6),l),g=new De;for(let b=0;b<l;b++){let v=b/l*le;_.setMatrixAt(b,g.makeTranslation(Math.cos(v)*1.35,-.15,Math.sin(v)*1.35))}o.add(_);let m=[];for(let b=0;b<l;b++){let v=(b+.5)/l*le;m.push([Math.cos(v)*.8,.24,Math.sin(v)*.8])}let y=new mt(new kt(.045,6,4),new Lt({color:new ce("#fffaf0").multiplyScalar(1.6)}),m.length);return m.forEach((b,v)=>y.setMatrixAt(v,g.makeTranslation(b[0],b[1],b[2]))),o.add(y),{group:o,update(b,v,S){o.rotation.y=v?0:b*.25+S}}}var v_=new Je(.18,.12,.42,8);function fh(i,e,t,n,s,r,a){i.wires.line([t,a,s],[t,n+.21,s]);let o=new ne(v_,i.glow(r,1.3,"practical"));return o.position.set(t,n,s),e.add(o),i.pools.add(t,n,s,.7,.7,r,.35,{vertical:!0}),i.pools.add(t,.02,s,2.2,2.2,r,.12),o}function qf(i,e,t,n,s){i.wires.line([t,s,n],[t,11.1,n]);let r=V("#c9963f",.35,.8);[[11,.95,12],[10.55,.72,10],[10.15,.45,8]].forEach(([a,o,l],c)=>{let h=new ne(new jt(o,.025,4,28),r);h.rotation.x=Math.PI/2,h.position.set(t,a,n),e.add(h);for(let f=0;f<l;f++){let u=f/l*le+c*.3;i.bigBulbs.add(t+Math.cos(u)*o,a-.2,n+Math.sin(u)*o,0,{color:"#fff1d0",k:.9,s:.55,ph:f*1.9,layer:"practical",twinkle:.12})}}),i.bigBulbs.add(t,9.7,n,0,{color:"#ffd58a",k:1.4,layer:"practical",twinkle:.05}),i.pools.add(t,10.4,n,2.6,2.6,"#ffd6a0",.45,{vertical:!0}),i.pools.add(t,.03,n,4.5,4.5,"#ffd6a0",.18)}function Yf(i,e,t){if(!t.length)return;let n=0;t.forEach(u=>n+=u.blobs.length);let s=new mt(new Je(.22,.34,1,7),V("#1c130c",.95),t.length),r=new _n(1,1),a=new mt(r,V("#ffffff",.95,0,{flatShading:!0}),n);a.instanceColor=new zt(new Float32Array(n*3),3);let o=[["#0f1d12","#1a2c18"],["#12200f","#20321a"],["#0d1a14","#1a2b22"]],l=new De,c=new Rt,h=new ce,f=0;t.forEach((u,d)=>{if(s.setMatrixAt(d,l.compose(new F(u.x,2.3*u.s,u.z),c.identity(),new F(u.s,4.6*u.s,u.s))),u.blobs.forEach((p,_)=>{c.setFromEuler(new Nt(_,_*2,0)),a.setMatrixAt(f,l.compose(new F(u.x+p[0]*u.s,p[1]*u.s,u.z+p[2]*u.s),c,new F(p[3]*u.s,p[3]*u.s*.8,p[3]*u.s))),h.set(o[u.tone][_%2]).multiplyScalar(1.6),a.setColorAt(f,h),f++}),u.fairy)for(let p=0;p<30;p++){let _=u.blobs[p%u.blobs.length],g=p*2.4,m=_[3]*.95;i.bulbs.add(u.x+(_[0]+Math.cos(g)*m)*u.s,(_[1]+Math.sin(g)*m*.7)*u.s,u.z+(_[2]-.6*Math.sign(u.z+20))*u.s,u.hue+p,{ph:p*1.3,s:.8,twinkle:.5})}}),s.castShadow=!0,e.add(s),e.add(a)}function dh(i,e,t,n){let s=new ne(new Je(.06,.08,n),V("#1f1914",.8));s.position.set(e,n/2,t),i.add(s);let r=new ne(new de(.9,1.2,.7),V("#0e0c0c",.7));r.position.set(e,n+.6,t),r.rotation.y=-Math.sign(e)*.3,i.add(r);let a=Ft(new ne(new Ze(.75,1),V("#1a1818",1)));a.position.set(e,n+.6,t-.36),i.add(a)}var $f='"Noto Sans Gujarati", "Gujarati Sangam MN", Shruti, "Anek Gujarati", system-ui, sans-serif';function He(i,e,t,n,s,r,a,o,l=0,c=0,h=0){let f=new ne(new de(e,t,n),o);return f.position.set(s,r,a),f.rotation.set(l,c,h),i.add(f),f}function lt(i,e,t,n,s,r,a,o,l=10,c=0,h=0,f=0){let u=new ne(new Je(e,t,n,l),o);return u.position.set(s,r,a),u.rotation.set(c,h,f),i.add(u),u}function Jr(i,e,t,n,s,r,a=16){let o=new ne(new nn(e.map(([l,c])=>new fe(l,c)),a),r);return o.position.set(t,n,s),i.add(o),o}function hi(i,e,t,n,s,r,a){let o=Ft(new ne(new Ze(e,t),a));return o.position.set(n,s,r),i.add(o),o}var Ki=(i,e=.85,t=0,n)=>new qe(Object.assign({map:i,roughness:e,metalness:t},n||{}));function $r(i,e,t,n){let s=new pt;return s.position.set(e,0,t),s.rotation.y=n,i.add(s),s.updateMatrixWorld(!0),s}var gh=class{constructor(){this.list=[]}add(e,t,n,s,r=.035){this.list.push([e,t,n,s,r])}addIn(e,t,n,s,r,a){let o=new F(t,n,s).applyMatrix4(e.matrixWorld);this.add(o.x,o.y,o.z,r,a)}build(e){if(!this.list.length)return;let t=new mt(new _n(1,0),V("#ffffff",.85),this.list.length),n=new De,s=new ce;this.list.forEach(([r,a,o,l,c],h)=>{t.setMatrixAt(h,n.makeScale(c,c,c).setPosition(r,a,o)),t.setColorAt(h,s.set(l))}),e.add(t)}},xh=["#f08a24","#f08a24","#f6c342"];function Kf(i){return $e(512,160,(e,t,n)=>{e.fillStyle=i,e.fillRect(0,0,t,n);for(let s=0;s<9;s++){let r=s/9*t;e.fillStyle=`rgba(0,0,0,${.05+s%3*.03})`,e.fillRect(r,0,t/9,n),e.fillStyle="rgba(0,0,0,.28)",e.fillRect(r,0,2,n)}e.fillStyle="rgba(255,255,255,.05)";for(let s=0;s<160;s++)e.fillRect(Math.random()*t,Math.random()*n,1+Math.random()*14,1);e.fillStyle="#e8b04b",e.fillRect(0,n*.1,t,n*.08),e.fillStyle="rgba(255,240,200,.5)",e.fillRect(0,n*.1,t,2),e.fillStyle="rgba(0,0,0,.35)",e.fillRect(0,n*.86,t,n*.06)})}function Qf(i,e){return $e(512,96,(t,n,s)=>{t.clearRect(0,0,n,s);let r=n/e,a=s*.72;for(let o=0;o<e;o++)t.fillStyle=o%2?"#efe2c8":i,t.fillRect(o*r,0,r+1,a),t.fillStyle=o%2?i:"#efe2c8",t.beginPath(),t.moveTo(o*r,a),t.quadraticCurveTo((o+.5)*r,s*1.05,(o+1)*r,a),t.closePath(),t.fill(),t.fillStyle="#e8b04b",t.beginPath(),t.arc((o+.5)*r,s*.9,4,0,le),t.fill();t.fillStyle="rgba(0,0,0,.18)",t.fillRect(0,0,n,5),t.fillStyle="#e8b04b",t.fillRect(0,a-3,n,3)})}function jf(i,e,t){let n=$e(512,176,()=>{}),s=()=>{let r=n.image,a=r.getContext("2d"),o=r.width,l=r.height;a.clearRect(0,0,o,l),a.fillStyle="#180c06",a.beginPath(),a.roundRect(4,4,o-8,l-8,22),a.fill(),a.strokeStyle=t,a.lineWidth=7,a.stroke(),a.textAlign="center",a.textBaseline="middle",a.fillStyle="#ffd58a",a.font=`700 78px ${$f}`,a.fillText(i,o/2,l*.42),a.fillStyle="rgba(255,230,190,.78)",a.font="600 34px system-ui, sans-serif",a.fillText(e,o/2,l*.8),n.needsUpdate=!0};return s(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(s),n}var Tl=null;function M_(){return Tl||(Tl=$e(512,256,(i,e,t)=>{i.fillStyle="#8e1b2c",i.fillRect(0,0,e,t);for(let n=0;n<9;n++)for(let s=0;s<44;s++){let r=(s+n%2*.5+.5)/44.5*e,a=t*(.28+n*.075);Math.abs(r/e-.5)<.19&&n>1&&n<8||(i.fillStyle=(n+s)%3?"rgba(255,246,230,.85)":"rgba(246,195,66,.9)",i.beginPath(),i.arc(r,a,2.6,0,le),i.fill())}i.fillStyle="#e8b04b",i.fillRect(0,0,e,t*.16),i.fillRect(0,t*.9,e,t*.1),i.fillStyle="rgba(120,70,10,.5)";for(let n=0;n<e;n+=12)i.fillRect(n,t*.05,6,t*.06);for(let n=0;n<16;n++){let s=n/16*e,r=(n+1)/16*e;i.fillStyle=n%2?"#2f8f5b":"#c2185b",i.beginPath(),i.moveTo(s,t*.16),i.lineTo(r,t*.16),i.lineTo((s+r)/2,t*.34),i.closePath(),i.fill(),i.fillStyle="rgba(235,245,255,.95)",i.beginPath(),i.arc((s+r)/2,t*.22,3.5,0,le),i.fill()}}),Tl)}function b_(){return $e(256,128,(i,e,t)=>{i.fillStyle="#140c0a",i.beginPath(),i.roundRect(2,2,e-4,t-4,18),i.fill(),i.textAlign="center",i.textBaseline="middle",i.font="800 84px system-ui, sans-serif",i.shadowColor="#ff78be",i.shadowBlur=24,i.fillStyle="#fff6e6",i.fillText("DJ",e/2,t*.54),i.shadowBlur=8,i.fillText("DJ",e/2,t*.54)})}function S_(){return $e(256,168,(i,e,t)=>{let n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"#c5c9cf"),n.addColorStop(.55,"#9da2a9"),n.addColorStop(1,"#7d8289"),i.fillStyle=n,i.fillRect(0,0,e,t);let s=e*.5,r=t*.52;i.fillStyle="#fff8e8",i.beginPath(),i.ellipse(s,r+6,17,22,0,0,le),i.fill(),i.fillStyle="#e8f0e0";for(let a=-1;a<=1;a++)i.beginPath(),i.ellipse(s+a*7,r-22,4,12,a*.5,0,le),i.fill();i.save(),i.translate(e*.12,t*.16),i.rotate(-.25),i.fillStyle="#f6c342",i.beginPath(),i.roundRect(0,0,64,28,6),i.fill(),i.fillStyle="#8e1b2c",i.font=`700 18px ${$f}`,i.textBaseline="middle",i.fillText("\u0A97\u0AB0\u0AAC\u0ABE",6,15),i.restore(),i.fillStyle="#2f8f5b",i.beginPath();for(let a=0;a<10;a++){let o=a/10*le-Math.PI/2,l=a%2?7:15;i.lineTo(e*.8+Math.cos(o)*l,t*.78+Math.sin(o)*l)}i.closePath(),i.fill()})}function E_(){return $e(256,168,(i,e,t)=>{i.fillStyle="#000",i.fillRect(0,0,e,t);let n=e*.5,s=t*.52;i.fillStyle="#fff",i.beginPath(),i.ellipse(n,s+6,17,22,0,0,le),i.fill();for(let r=-1;r<=1;r++)i.beginPath(),i.ellipse(n+r*7,s-22,4,12,r*.5,0,le),i.fill()})}function T_(){return $e(256,144,(i,e,t)=>{i.fillStyle="#16161a",i.fillRect(0,0,e,t),i.strokeStyle="rgba(255,255,255,.12)",i.lineWidth=2,i.strokeRect(2,2,e-4,t-4);for(let n=0;n<3;n++){let s=e*(.43+n*.07);i.fillStyle="#000",i.fillRect(s-1,t*.2,3,t*.5),i.fillStyle="#d9d9de",i.fillRect(s-5,t*(.3+n*.12),10,4)}i.fillStyle="#000",i.fillRect(e*.42,t*.8,e*.16,3),i.fillStyle="#d9d9de",i.fillRect(e*.49,t*.78,6,8),i.fillStyle="#8c8f96";for(let n=0;n<8;n++)i.beginPath(),i.arc(e*(.4+n%4*.066),t*(n<4?.1:.9),3.5,0,le),i.fill();[.04,.96].forEach(n=>{i.fillStyle="#000",i.fillRect(e*n-1,t*.15,3,t*.6),i.fillStyle="#d9d9de",i.fillRect(e*n-4,t*.42,8,4)})})}function w_(){return $e(128,192,(i,e,t)=>{let n=i.createLinearGradient(0,0,e,0);n.addColorStop(0,"#151414"),n.addColorStop(.5,"#232121"),n.addColorStop(1,"#121111"),i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="rgba(255,255,255,.05)";for(let s=6;s<t-6;s+=5)for(let r=6;r<e-6;r+=5)i.fillRect(r,s,1.5,1.5);i.strokeStyle="rgba(255,255,255,.2)",i.lineWidth=4,i.beginPath(),i.arc(e/2,t*.62,e*.36,0,le),i.stroke(),i.fillStyle="#0b0a0a",i.beginPath(),i.arc(e/2,t*.62,e*.29,0,le),i.fill(),i.fillStyle="rgba(255,255,255,.14)",i.beginPath(),i.arc(e/2,t*.62,e*.08,0,le),i.fill(),i.fillStyle="#0b0a0a",i.beginPath(),i.moveTo(e*.3,t*.12),i.lineTo(e*.7,t*.12),i.lineTo(e*.62,t*.28),i.lineTo(e*.38,t*.28),i.closePath(),i.fill(),i.fillStyle="rgba(232,176,75,.6)",i.fillRect(e*.36,t*.92,e*.28,3),i.strokeStyle="rgba(255,255,255,.14)",i.lineWidth=2,i.strokeRect(1,1,e-2,t-2)})}var Zf=null,A_=()=>Zf||(Zf=Ki(w_(),.8)),ph=null;function R_(){if(ph)return ph;let i=[],e=(s,r,a,o,l=0,c=0)=>{s.rotateX(l),s.rotateZ(c),s.translate(r,a,o),i.push(s.index?s.toNonIndexed():s)};e(new de(.44,.035,.4),0,.45,0),e(new de(.42,.44,.03),0,.69,.22,.09),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([s,r])=>e(new Je(.016,.02,.46,5,1,!0),s*.21,.225,r*.19,-r*.07,s*.07)),[-1,1].forEach(s=>{e(new de(.04,.03,.38),s*.22,.64,.02),e(new de(.03,.18,.03),s*.22,.55,-.16)});let t=0;i.forEach(s=>t+=s.attributes.position.count);let n=new et;return["position","normal","uv"].forEach(s=>{let r=i[0].attributes[s].itemSize,a=new Float32Array(t*r),o=0;i.forEach(l=>{a.set(l.attributes[s].array,o),o+=l.attributes[s].array.length}),n.setAttribute(s,new bt(a,r))}),ph=n,n}var _h=class{constructor(){this.list=[]}add(e,t,n,s,r=0){this.list.push({x:e,z:t,ry:n,hex:s,lift:r});let a=new De().compose(new F(e,r,t),new Rt().setFromEuler(new Nt(0,n,0)),new F(1,1,1)),o=l=>{let c=new F,h=[];for(let f=0;f<l.length;f+=3)c.set(l[f],l[f+1],l[f+2]).applyMatrix4(a),h.push(Math.round(c.x*1e3)/1e3,Math.round(c.y*1e3)/1e3,Math.round(c.z*1e3)/1e3);return h};return{seat:o(Li(-.25,0,-.22,.25,.47,.22)),back:o(Li(-.23,.45,.18,.23,.92,.27)),arms:o(Li(-.25,.47,-.18,.25,.66,.2))}}build(e){if(!this.list.length)return;let t=new mt(R_(),V("#ffffff",.45,0),this.list.length),n=new De,s=new Rt,r=new Nt,a=new ce;this.list.forEach((o,l)=>{r.set(0,o.ry,0),s.setFromEuler(r),t.setMatrixAt(l,n.compose(new F(o.x,o.lift,o.z),s,new F(1,1,1))),t.setColorAt(l,a.set(o.hex).multiplyScalar(.9))}),t.castShadow=!0,e.add(t)}};function Jf(i){let e=0;i.forEach(n=>e+=n.attributes.position.count);let t=new et;return["position","normal","color"].forEach(n=>{let s=i[0].attributes[n].itemSize,r=new Float32Array(e*s),a=0;i.forEach(o=>{r.set(o.attributes[n].array,a),a+=o.attributes[n].array.length}),t.setAttribute(n,new bt(r,s))}),t}function Tt(i,e,t,n,s,r=0,a=0,o=0,l=1,c=1,h=1){i.scale(l,c,h),i.rotateX(r),i.rotateY(a),i.rotateZ(o),i.translate(t,n,s);let f=i.index?i.toNonIndexed():i;f.deleteAttribute("uv");let u=new ce(e),d=f.attributes.position.count,p=new Float32Array(d*3);for(let _=0;_<d;_++)p[_*3]=u.r,p[_*3+1]=u.g,p[_*3+2]=u.b;return f.setAttribute("color",new bt(p,3)),f}var wl=(i,e,t)=>[Tt(new Je(e,e,t,12),"#141414",i,e,0,Math.PI/2),Tt(new Je(e*.5,e*.5,t+.01,8),"#9ca0a5",i,e,0,Math.PI/2)],mh={scooter:{paint:()=>[Tt(new de(.1,.62,.42),"#fff",.44,.62,0,0,0,.22),Tt(new kt(.5,10,6),"#fff",-.36,.56,0,0,0,0,.82,.42,.4),Tt(new de(.28,.07,.15),"#fff",.6,.5,0),Tt(new de(.16,.12,.2),"#fff",.52,1.02,0)],trim:()=>[...wl(.62,.23,.1),...wl(-.6,.23,.1),Tt(new de(.55,.05,.3),"#2a2a2d",0,.3,0),Tt(new de(.62,.09,.3),"#161616",-.32,.8,0),Tt(new Je(.022,.022,.45,6),"#2a2a2a",.5,.86,0,0,0,.25),Tt(new de(.05,.04,.64),"#1c1c1c",.46,1.1,0),Tt(new kt(.055,6,4),"#f4f1e6",.61,1.02,0),Tt(new de(.03,.06,.16),"#a51d1a",-.78,.6,0)],solids:[[-.84,0,-.22,.76,.86,.22],[.36,.86,-.33,.66,1.16,.33]]},bike:{paint:()=>[Tt(new kt(.5,10,6),"#fff",.2,.92,0,0,0,0,.5,.22,.3),Tt(new de(.34,.06,.14),"#fff",.68,.72,0),Tt(new de(.34,.22,.26),"#fff",-.22,.68,0),Tt(new de(.42,.05,.14),"#fff",-.62,.7,0,0,0,.25),Tt(new de(.2,.16,.3),"#fff",.56,.98,0)],trim:()=>[...wl(.66,.31,.1),...wl(-.66,.31,.12),Tt(new de(.36,.3,.26),"#2b2b2e",.05,.47,0),Tt(new de(.55,.08,.26),"#161616",-.27,.9,0),Tt(new Je(.035,.03,.7,8),"#c9ccd1",-.3,.4,.16,0,0,Math.PI/2-.12),Tt(new Je(.02,.02,.62,6),"#2b2b2e",.58,.72,0,0,0,.35),Tt(new de(.04,.04,.7),"#1b1b1b",.5,1.08,0),Tt(new kt(.075,10,8),"#f4f1e6",.66,.98,0),Tt(new Je(.02,.02,.9,6),"#2b2b2e",-.2,.62,0,0,0,1.1),...[-1,1].map(i=>Tt(new Je(.022,.022,.75,6),"#c9ccd1",.58,.67,i*.07,0,0,.22)),...[-1,1].map(i=>Tt(new de(.68,.05,.04),"#2b2b2e",-.33,.38,i*.08,0,0,.2))],solids:[[-.98,0,-.2,.98,1,.2],[.42,.9,-.38,.72,1.14,.38]]}},yh=class{constructor(){this.list={scooter:[],bike:[]}}add(e,t,n,s,r){let a=s>0?0:Math.PI;this.list[e].push({x:t,z:n,ry:a,hex:r});let o=new De().compose(new F(t,0,n),new Rt().setFromEuler(new Nt(0,a,0)),new F(1,1,1));return mh[e].solids.map(l=>{let c=Li(...l),h=new F,f=[];for(let u=0;u<c.length;u+=3)h.set(c[u],c[u+1],c[u+2]).applyMatrix4(o),f.push(Math.round(h.x*1e3)/1e3,Math.round(h.y*1e3)/1e3,Math.round(h.z*1e3)/1e3);return f})}build(e){Object.keys(this.list).forEach(t=>{let n=this.list[t];if(!n.length)return;let s=new mt(Jf(mh[t].paint()),V("#ffffff",.35,.25,{vertexColors:!0}),n.length),r=new mt(Jf(mh[t].trim()),V("#ffffff",.55,.3,{vertexColors:!0}),n.length),a=new De,o=new Rt,l=new Nt,c=new ce;n.forEach((h,f)=>{l.set(0,h.ry,0),o.setFromEuler(l),a.compose(new F(h.x,0,h.z),o,new F(1,1,1)),s.setMatrixAt(f,a),r.setMatrixAt(f,a),s.setColorAt(f,c.set(h.hex))}),s.castShadow=r.castShadow=!0,e.add(s),e.add(r)})}};function C_(i,e){let{kit:t,root:n,beads:s}=i;if(e.cart)return I_(i,e);let r=$r(n,e.x,e.z,Math.atan2(e.V[0],e.V[1])),a=e.w/2,o=e.depth,l=(v,S,w)=>new F(v,S,w).applyMatrix4(r.matrixWorld),c=[],h=[],f=[],u=(v,S)=>{let w=Bt(v);return c.push(w),S&&S.push(w),v};u(He(r,e.w,2.4,.06,0,1.2,o+.03,t.selfLit(new qe({color:"#6a381c",emissive:"#ff9a50",roughness:.9}),.1))),[-1,1].forEach(v=>{let S=He(r,.05,2.4,o,v*a,1.2,o/2,V("#34210f",.9)),w=Bt(S);c.push(w);let E=l(v*a,0,o/2),x=l(v*(a+1),0,o/2).sub(E);f.push({s:w,c:[E.x,E.z],n:[x.x,x.z]})}),He(r,e.w,.04,o,0,.02,o/2,V("#3a2616",.95)),He(r,e.w*.8,.04,.25,0,1.55,o-.12,V("#6b4424",.8));for(let v=0;v<7;v++)lt(r,.06,.06,.16,at(-a*.7,a*.7,v/6),1.65,o-.12,V(["#c9a37a","#b5651d","#e8d5b0","#8e1b2c","#2f6fa8","#e8b04b","#d9d2c5"][v],.4,.2),8);let d=u(He(r,e.w,.97,.45,0,.485,.225,V("#3a2012",.9)),h);hi(r,e.w,.97,0,.485,-.004,t.selfLit(Ki(Kf(e.col),.8),.22)),u(He(r,e.w+.04,.06,.72,0,1,.1,V("#d9c3a0",.6)),h),[-a-.25,a+.25].forEach(v=>{u(lt(r,.045,.05,2.78,v,1.39,-.5,V("#8a6a3a",.8),7),h);for(let S=1;S<5;S++)lt(r,.055,.055,.03,v,S*.55,-.5,V("#5a4020",.9),7);for(let S=0;S<16;S++){let w=S*1.1;s.addIn(r,v+Math.cos(w)*.06,2.6-S*.12,-.5+Math.sin(w)*.06,xh[S%3],.03)}});let p=Math.hypot(o+.5,.2);u(He(r,e.w+.6,.06,p,0,2.85,(o-.5)/2,V("#2a1a10",.9),-Math.atan2(.2,o+.5)),h),hi(r,e.w+.6,.62,0,2.44,-.52,t.selfLit(Ki(Qf(e.col,8),.85,0,{alphaTest:.35,side:rt}),.3,"festive")),h.push(ed(r,-a-.3,2.3,-.54,a+.3,2.75,-.5)),c.push(h[h.length-1]);for(let v=0;v<=7;v++){let S=l(at(-a-.3,a+.3,(v+.5)/8.5),2.15,-.56);t.bulbs.add(S.x,S.y,S.z,v,{ph:v*1.3+e.x,s:.9})}[-.6,.6].forEach(v=>lt(r,.02,.02,.3,v,2.9,-.48,V("#2a1a10",.8),5)),u(He(r,1.72,.64,.05,0,3.32,-.46,V("#1a0e08",.9)),h),hi(r,1.68,.6,0,3.32,-.49,t.litMap(jf(e.sign,e.en,e.col),1.05,"practical"));let _=!(e.en==="Chai"||e.en==="Snacks"),g=_?Fe.tube:Fe.tungsten;if(_)lt(r,.018,.018,Math.min(1.2,e.w*.5),0,2.4,.15,t.glow(Fe.tube,2.4,"practical"),6,0,0,Math.PI/2);else{let v=l(0,2.3,.4);t.bigBulbs.add(v.x,v.y,v.z,0,{color:Fe.tungsten,k:1.3,s:.7,layer:"practical",twinkle:.02})}let m=l(0,1.5,o-.05),y=l(0,0,-1.3),b=l(0,1.06,.1);t.pools.add(m.x,m.y,m.z,a*1.1,1.1,g,.42,{vertical:!0,ry:r.rotation.y,layer:"practical"}),t.pools.add(b.x,b.y,b.z,a*.9,.5,g,.18,{ry:r.rotation.y,layer:"practical",live:!0}),t.pools.add(y.x,.02,y.z,2.8,2.8,g,_?.26:.3,{layer:"practical"}),P_(i,r,e,a,h,c),e.hole3d={back:c,front:h,sides:f}}function ed(i,e,t,n,s,r,a){let o=Li(e,t,n,s,r,a),l=new F,c=[];for(let h=0;h<o.length;h+=3)l.set(o[h],o[h+1],o[h+2]).applyMatrix4(i.matrixWorld),c.push(Math.round(l.x*1e3)/1e3,Math.round(l.y*1e3)/1e3,Math.round(l.z*1e3)/1e3);return c}function P_(i,e,t,n,s,r){let{kit:a,beads:o}=i,l=1.03,c=V("#c9ccd1",.28,.9),h=t.en,f=u=>{let d=Bt(u);return s.push(d),r.push(d),u};if(h==="Chai"){let u=-n*.45;He(e,.44,.08,.3,u,l+.04,.05,V("#2a2a2e",.5,.4));let d=new ne(new jt(.07,.012,5,16),a.glow("#4aa8ff",2.2,"practical"));d.rotation.x=Math.PI/2,d.position.set(u,l+.085,.05),e.add(d),f(Jr(e,[[0,0],[.16,.01],[.19,.08],[.17,.2],[.1,.25],[.02,.28]],u,l+.09,.05,c)),lt(e,.015,.02,.22,u+.2,l+.24,.05,c,6,0,0,-.7);let p=new ne(new jt(.1,.01,4,12,Math.PI),c);p.position.set(u,l+.36,.05),e.add(p);for(let _=0;_<6;_++){let g=n*(.05+_*.13);lt(e,.03,.026,.065,g,l+.033,-.08,V("#b8753a",.3),8),lt(e,.032,.032,.03,g,l+.08,-.08,V("#dfe6ea",.15,.1),8)}}else if(h==="Pani puri"||h==="Dabeli"){let u=-n*.7,d=n*.7,p=d-u;[[u,0],[d,0],[u,.3],[d,.3]].forEach(([g,m])=>He(e,.02,.5,.02,g,l+.25,m-.1,c)),He(e,p,.02,.42,0,l+.5,.05,c),f(He(e,p,.5,.4,0,l+.25,.05,new qe({color:"#dff2ff",roughness:.05,metalness:.1,transparent:!0,opacity:.16,depthWrite:!1}))),lt(e,.012,.012,p*.9,0,l+.47,.05,a.glow(Fe.warm,2,"practical"),6,0,0,Math.PI/2);let _=h==="Dabeli"?"#c98f45":"#dcae62";for(let g=0;g<3;g++)for(let m=0;m<11;m++)o.addIn(e,at(u+.08,d-.08,(m+g%2*.5)/11),l+.06+g*.07,.05+(g%2?.08:-.05),_,h==="Dabeli"?.05:.04);h==="Pani puri"&&(Jr(e,[[0,0],[.13,.01],[.16,.1],[.155,.12]],n*.85,l,-.02,c),lt(e,.15,.15,.01,n*.85,l+.1,-.02,V("#6aa84f",.2),14))}else if(h==="Water")for(let u=0;u<5;u++){let d=-n*.75+u*n*.37;f(Jr(e,[[0,0],[.13,.005],[.14,.05],[.14,.26],[.1,.32],[.04,.35],[.04,.38]],d,l,-.02,V("#2f7fc4",.15,.1))),lt(e,.045,.045,.04,d,l+.39,-.02,V("#e8eef4",.5),8)}else h==="Ice cream"?(f(He(e,n*1,.36,.45,-n*.3,l+.18,.08,V("#f2f4f6",.4))),He(e,n*1+.005,.07,.455,-n*.3,l+.2,.08,V("#3b8fd4",.4)),He(e,n*.96,.01,.42,-n*.3,l+.365,.08,V("#a9c8dc",.1,.2)),["#f6d27a","#f0a0b8","#e9e0c8","#9ad08c"].forEach((u,d)=>{let p=n*(.35+d*.15);lt(e,.006,.006,.1,p,l+.05,-.08,V("#d9c3a0",.8),4);let _=new ne(new kt(.035,8,6),V(u,.5));_.scale.set(1,2.2,1),_.position.set(p,l+.17,-.08),e.add(_)})):[[-.55,"#e6c35a"],[.05,"#f08a24"],[.6,"#d9a35a"]].forEach(([u,d],p)=>{let _=n*u;lt(e,.26,.24,.03,_,l+.015,.02,c,18);for(let g=0;g<14;g++){let m=g*2.4,y=.05+g%5*.035;if(p===1){let b=new ne(new jt(.035,.012,4,10),V(d,.35));b.rotation.x=Math.PI/2-.4,b.position.set(_+Math.cos(m)*y,l+.05+g%3*.02,.02+Math.sin(m)*y),e.add(b)}else He(e,.14,.02,.025,_+Math.cos(m)*y,l+.045+g%3*.018,.02+Math.sin(m)*y,V(d,.7),0,m,0)}});if(h==="Snacks"||h==="Water"){let u=["#f6c342","#d8453a","#2f8f5b","#3b4cc0","#f08a24"];for(let d=0;d<7;d++)for(let p=0;p<3;p++)He(e,.13,.17,.02,-n+.3+(t.w-.6)*d/6,2.05-p*.2,-.42,V(u[(d+p)%5],.35,.3))}}function I_(i,e){let{kit:t,root:n,beads:s}=i,r=$r(n,e.x,e.z,Math.atan2(e.V[0],e.V[1])),a=e.w/2,o=e.depth,l=(b,v,S)=>new F(b,v,S).applyMatrix4(r.matrixWorld),c=[],h=[],f=b=>(c.push(Bt(b)),b),u=V("#5a3218",.8),d=V("#c9ccd1",.28,.9);f(He(r,e.w,.46,o,0,.8,o/2,u)),hi(r,e.w,.46,0,.8,-.004,t.selfLit(Ki(Kf(e.col),.8),.22)),He(r,e.w+.06,.04,o+.06,0,1.05,o/2,V("#d9c3a0",.6)),[[-a+.3,.02],[a-.3,.02],[-a+.3,o-.02],[a-.3,o-.02]].forEach(([b,v])=>{f(lt(r,.28,.28,.05,b,.3,v,V("#1a1512",.8),14,Math.PI/2)),lt(r,.05,.05,.07,b,.3,v,d,8,Math.PI/2)}),[-a+.3,a-.3].forEach(b=>He(r,.04,.04,o,b,.3,o/2,V("#2a2522",.6,.5)));let p=-a*.75,_=a*.4;f(He(r,_-p,.42,o*.6,(p+_)/2,1.28,o*.45,new qe({color:"#dff2ff",roughness:.05,metalness:.1,transparent:!0,opacity:.16,depthWrite:!1}))),He(r,_-p,.02,o*.6,(p+_)/2,1.5,o*.45,d);for(let b=0;b<3;b++)for(let v=0;v<8;v++)s.addIn(r,at(p+.06,_-.06,(v+b%2*.5)/8),1.11+b*.07,o*.45+(b%2?.07:-.06),"#dcae62",.04);f(Jr(r,[[0,0],[.12,.02],[.17,.12],[.15,.24],[.08,.3],[.08,.33]],a*.68,1.07,o*.4,V("#9a4a22",.85))),lt(r,.11,.09,.12,a*.68,1.13,o*.8,d,12),[[-a,0],[a,0],[-a,o],[a,o]].forEach(([b,v])=>f(lt(r,.018,.018,1.2,b,1.65,v,d,5))),f(He(r,e.w+.3,.04,o+.4,0,2.27,o/2,V(e.col,.8),-.08)),hi(r,e.w+.3,.3,0,2.12,-.21,t.selfLit(Ki(Qf(e.col,6),.85,0,{alphaTest:.35,side:rt}),.3,"festive"));for(let b=0;b<=5;b++){let v=l(at(-a-.1,a+.1,(b+.5)/6.5),2,-.23);t.bulbs.add(v.x,v.y,v.z,b,{ph:b*1.3,s:.8})}lt(r,.015,.015,e.w*.6,0,2.18,o*.4,t.glow(Fe.tube,2.4,"practical"),6,0,0,Math.PI/2),f(He(r,1.2,.42,.04,0,2.55,o*.3,V("#1a0e08",.9))),hi(r,1.16,.4,0,2.55,o*.3-.03,t.litMap(jf(e.sign,e.en,e.col),1.05,"practical"));let g=l(0,0,-1),m=l(0,1.12,o*.45);t.pools.add(g.x,.02,g.z,2.2,2.2,Fe.tube,.2,{layer:"practical"}),t.pools.add(m.x,m.y,m.z,a,.5,Fe.tube,.16,{ry:r.rotation.y,layer:"practical",live:!0});let y=l(-a-.4,0,o*.4);e.hole3d={back:c,front:c,sides:[],vendor:[y.x,y.z]}}function L_(i,e){let{kit:t,root:n,beads:s}=i,r=$r(n,e.x,e.z,0),a=.74,o=.8,l=.34,c=(L,C,U)=>new F(L,C,U).applyMatrix4(r.matrixWorld),h=[],f=[],u=(L,C=!0)=>{let U=Bt(L);return h.push(U),C&&f.push(U),L},d=V("#c9ccd1",.25,.9),p=V("#a7acb3",.35,.8),_=V("#9b7a45",.8);u(He(r,o*2,a-.03,l*2,0,(a-.03)/2,0,V("#8e1b2c",.9))),hi(r,o*2,a-.03,0,(a-.03)/2,-l-.004,t.selfLit(Ki(M_(),.85),.12,"festive")),u(He(r,o*2+.04,.03,l*2+.04,0,a-.015,0,V("#4a2e1b",.6))),He(r,o*2+.05,.012,.012,0,a-.03,-l-.02,V("#9a6a3a",.4));for(let L=0;L<=24;L++){let C=L/24;s.addIn(r,at(-o,o,C),a-.05-Math.abs(Math.sin(C*Math.PI*4))*.06,-l-.025,xh[L%3],.028)}for(let L=0;L<16;L++){let C=c(at(-o,o,(L+.5)/16),a-.12,-l-.012);t.bulbs.add(C.x,C.y,C.z,0,{color:"#f4f8ff",k:.35,s:.28,twinkle:.8,ph:L*2.1,layer:"festive"})}hi(r,.5,.25,0,.34,-l-.018,t.litMap(b_(),1.25,"show"));for(let L=0;L<16;L++){let C=L/16*1.5,U=C<.5?-.25+C:C<.75?.25:C<1.25?.25-(C-.75):-.25,z=C<.5?.465:C<.75?.465-(C-.5):C<1.25?.215:.215+(C-1.25),N=c(U,z,-l-.02);t.bulbs.add(N.x,N.y,N.z,L,{ph:L%2*Math.PI,twinkle:.55,s:.32,layer:"show"})}u(He(r,.46,.014,.32,-.13,a+.007,.12,p));let g=new pt;g.position.set(-.13,a+.014,-.04),g.rotation.x=-.26,r.add(g),He(g,.46,.3,.008,0,.15,0,p);let m=Ft(new ne(new Ze(.46,.3),new qe({map:S_(),emissiveMap:E_(),emissive:"#ffffff",emissiveIntensity:.9,roughness:.35,metalness:.6})));m.position.set(0,.15,-.005),g.add(m);let y=new ne(new Ze(.42,.26),t.glow("#bcd4ff",1.1,"practical"));y.position.set(0,.15,.005),g.add(y),g.updateMatrixWorld(!0),h.push(ed(g,-.23,0,-.01,.23,.3,.01)),f.push(h[h.length-1]),u(He(r,.54,.045,.3,.43,a+.0225,-.05,V("#16161a",.5,.3)));let b=new ne(new Ze(.54,.3),Ki(T_(),.5,.2));b.rotation.x=-Math.PI/2,b.position.set(.43,a+.046,-.05),r.add(b);let v=[.27,.59].map((L,C)=>{let U=new pt;U.position.set(L,a+.052,-.07),U.userData.dynamic=!0,r.add(U),lt(U,.075,.075,.012,0,0,0,V("#2a2b31",.3,.6),20),He(U,.004,.004,.06,0,.008,.03,V("#ffffff",.4));let z=new ne(new jt(.078,.004,4,24),t.glow(Ii.traditional.beams[C],1.6,"show"));return z.rotation.x=Math.PI/2,U.add(z),U}),S=new mt(new de(.032,.006,.032),new Lt({color:"#ffffff"}),8),w=new De;for(let L=0;L<8;L++)S.setMatrixAt(L,w.makeTranslation(.43-.27+(L<4?.2:.8)*.54-.06+L%4*.04,a+.048,-.17));S.instanceColor=new zt(new Float32Array(24),3),r.add(S);let E=c(.72,a,.12);t.flames.add(E.x,E.y,E.z,{s:.04,bowl:"brass"}),u(Jr(r,[[0,0],[.065,.005],[.07,.04],[.058,.16],[.05,.19],[.056,.205]],-.62,a,-.05,d));let x=new ne(new jt(.035,.006,4,10,Math.PI),d);x.position.set(-.55,a+.11,-.05),x.rotation.z=-Math.PI/2,r.add(x),u(lt(r,.045,.034,.14,-.45,a+.07,-.18,V("#f4efe4",.7),10)),lt(r,.17,.16,.04,0,.62,.55,V("#3a2a1c",.7),14),[0,1,2].forEach(L=>{let C=L/3*le+.5;lt(r,.015,.018,.64,Math.cos(C)*.12,.31,.55+Math.sin(C)*.12,V("#2a1e14",.6,.3),5,Math.sin(C)*.18,0,-Math.cos(C)*.18)});let A=[];[-1,1].forEach(L=>{let C=L*1.28,U=.2;[0,1,2].forEach(W=>{let B=W/3*le+.3;lt(r,.012,.012,1.1,C+Math.cos(B)*.14,.52,U+Math.sin(B)*.14,V("#1b1814",.6,.4),5,Math.sin(B)*.27,0,-Math.cos(B)*.27)}),u(lt(r,.02,.02,1.25,C,.62,U,V("#1b1814",.6,.4),6),!1),u(He(r,.44,.66,.34,C,1.53,U,V("#161414",.75))),hi(r,.44,.66,C,1.53,U-.172,A_());let z=lt(r,.12,.12,.02,C,1.53-.66*.12,U-.17,V("#0b0a0a",.6),16,Math.PI/2);z.userData.dynamic=!0,A.push(z);let N=c(C+.17,1.83,U-.18);t.bulbs.add(N.x,N.y,N.z,0,{color:"#6dff9a",k:.6,s:.18,twinkle:0,layer:"show"})});let I=.95,R=2.45;[-1.15,1.15].forEach((L,C)=>{u(lt(r,.035,.04,R,L,R/2,I,_,7),!1);for(let U=1;U<5;U++)lt(r,.045,.045,.025,L,U*R/5,I,V("#6b5028",.9),7);for(let U=0;U<18;U++){let z=U*1.2+C;s.addIn(r,L+Math.cos(z)*.05,R-.1-U*.1,I+Math.sin(z)*.05,xh[U%3],.028)}}),u(lt(r,.03,.03,2.4,0,R,I,_,7,0,0,Math.PI/2),!1);for(let L=0;L<13;L++){let C=c(at(-1.15,1.15,(L+.5)/13),R-.01,I-.02);t.flags.add(C.x,C.y,C.z,0,.14,L)}for(let L=0;L<=10;L++){let C=L/10,U=c(at(-1.15,1.15,C),R-.35-Math.sin(C*Math.PI)*.28,I-.03);t.bulbs.add(U.x,U.y,U.z,L,{ph:L*1.7,s:1})}t.wires.cable(c(-1.15,R-.32,I-.03).toArray(),c(1.15,R-.32,I-.03).toArray(),.28);let P=c(0,0,.4);return t.pools.add(P.x,.02,P.z,2.4,2,Fe.tungsten,.16,{layer:"festive"}),e.hole3d={back:h,front:f},{update(L,C){let{reduce:U,beat:z,lv:N,TH:W,pulse:B}=C;v.forEach((oe,he)=>{oe.rotation.y=U?0:L*3*(he?-1:1)});let k=S.instanceColor.array,q=new ce("#2a2a30");for(let oe=0;oe<8;oe++){let he=(Math.floor(z*2)+oe)%4===0,re=he?new ce(W.beams[oe%W.beams.length]).multiplyScalar(2.2*N.show):q;k[oe*3]=re.r,k[oe*3+1]=re.g,k[oe*3+2]=re.b}S.instanceColor.needsUpdate=!0,A.forEach(oe=>{let he=1+(U?0:.08*B);oe.scale.set(he,1,he)})}}}function D_(i,e){let{root:t,chairs:n,beads:s}=i,r=[],a=o=>(r.push(Bt(o)),o);if(e.kind==="cooler")a(He(t,.5,.5,.42,e.x,.25,e.z+.2,V("#3a2a1c",.85))),a(lt(t,.25,.25,.58,e.x,.79,e.z+.2,V("#2f6fb4",.35,.05),18)),[.62,.96].forEach(o=>lt(t,.255,.255,.02,e.x,o,e.z+.2,V("#23548a",.4),18)),lt(t,.012,.012,.08,e.x,.6,e.z-.07,V("#c9ccd1",.25,.9),6,Math.PI/2),lt(t,.035,.03,.08,e.x+.12,.54,e.z-.05,V("#c9ccd1",.25,.9),8);else if(e.kind==="crates")[0,1].forEach(o=>{let l=o*.28,c=o*.04;a(He(t,.6,.27,.4,e.x+c,l+.135,e.z+.2,V(o?"#a8201a":"#8c1a15",.6)));for(let h=0;h<12;h++)s.add(e.x+c-.24+h%6*.095,l+.28,e.z+.08+Math.floor(h/6)*.22,h%2?"#e8b04b":"#d8453a",.022)});else if(e.kind==="chairs")for(let o=0;o<5;o++){let l=n.add(e.x,e.z,0,"#ece6da",o*.09);r.push(l.seat,l.back)}else if(e.kind==="plasticChair"){let o=n.add(e.x,e.z,0,e.col);r.push(o.seat,o.back)}else if(e.kind==="stone"){let o=new ne(new _n(e.r,0),V("#6d6259",.95));o.scale.set(1,.6,.85),o.position.set(e.x,e.r*.3,e.z),o.rotation.y=e.x*3,t.add(o),r.push(Bt(o))}e.hole3d={back:r}}function N_(i,e){let{kit:t,root:n,rides:s,beads:r}=i;if(e.kind==="scooter"||e.kind==="activa"||e.kind==="bike"){let a=s.add(e.kind==="bike"?"bike":"scooter",e.x,e.z,-e.side,e.col);e.hole3d={back:i.id==="outdoors"?[]:a};return}if(e.kind==="van"){e.hole3d={back:U_(i,e)};return}if(e.kind==="tulsi"){let a=Math.sign(e.x)||1,o=.45,l=[];l.push(Bt(He(n,.42,.5,.42,e.x,o+.25,e.z,V("#9a5328",.85)))),He(n,.43,.05,.43,e.x,o+.4,e.z,V("#e8b04b",.6)),He(n,.46,.04,.46,e.x,o+.52,e.z,V("#7a3e1c",.85));for(let c=0;c<5;c++){let h=c/5*le,f=c?.13:0,u=new ne(new _n(c?.13:.17,1),V(c%2?"#2f6b33":"#24552a",.9,0,{flatShading:!0}));u.position.set(e.x+Math.cos(h)*f,o+.72+(c?0:.1),e.z+Math.sin(h)*f),n.add(u)}l.push(Li(e.x-.3,o+.5,e.z-.3,e.x+.3,o+.98,e.z+.3)),t.flames.add(e.x-a*.3,o,e.z-.1,{s:.04}),e.hole3d={back:l};return}e.kind==="tent"&&(F_(i,e),e.hole3d={back:[]})}function U_(i,e){let{kit:t,root:n}=i,s=e.x-.72,r=e.x+.72,a=e.z-1.9,o=e.z+1.9,l=.28,c=1.9,h=[],f=V("#ecece7",.3,.3),u=V("#1f2730",.08,.6),d=$r(n,0,0,0);return h.push(Bt(He(d,r-s,c-l,o-.45-a,e.x,(c+l)/2,(a+o-.45)/2,f))),h.push(Bt(He(d,r-s,1.05-l,.45,e.x,(1.05+l)/2,o-.225,f))),He(d,r-s-.04,Math.hypot(.45,.85),.04,e.x,1.475,o-.225,u,-Math.atan2(.45,.85)),h.push(Li(s,1.05,o-.45,r,c,o)),[-1,1].forEach(p=>{let _=p<0?s-.003:r+.003;He(d,.004,.57,o-.9-a-.25,_,1.435,(a+.25+o-.9)/2,u),He(d,.006,.14,o-a,_,l+.07,e.z,V("#9a9c98",.6))}),He(d,r-s-.28,.6,.004,e.x,1.45,a-.003,u),[s+.13,r-.13].forEach(p=>He(d,.14,.33,.01,p,.785,a-.005,V("#a51d1a",.3))),He(d,.48,.12,.01,e.x,.56,a-.006,V("#f2cf3e",.5)),He(d,r-s+.04,.17,.08,e.x,.37,a-.03,V("#3a3b3d",.7)),He(d,r-s+.04,.17,.08,e.x,.37,o+.03,V("#3a3b3d",.7)),[[a+.65],[o-.7]].forEach(([p])=>[s+.02,r-.02].forEach(_=>{h.push(Bt(lt(d,.3,.3,.18,_,.3,p,V("#141414",.8),16,0,0,Math.PI/2))),lt(d,.15,.15,.19,_,.3,p,V("#8f9398",.4,.6),10,0,0,Math.PI/2)})),t.pools.add(e.x,c+.01,e.z,.9,1.8,Fe.sodium,.08,{layer:"practical",live:!0}),h}function F_(i,e){let{kit:t,root:n}=i,s=$r(n,e.x,e.z,0),r=8,a=5,o=3.2,l=4.6,c=$e(256,64,(u,d,p)=>{for(let _=0;_<8;_++)u.fillStyle=_%2?"#f3e6d0":e.col,u.fillRect(_/8*d,0,d/8+1,p)}),h=new ne(new gr(Math.hypot(r,a)/2,l-o,4,1,!0),new qe({map:c,roughness:.9,side:rt}));h.rotation.y=Math.PI/4,h.scale.set(r/Math.hypot(r,a),1,a/Math.hypot(r,a)),h.position.set(0,(l+o)/2,a/2),s.add(h),He(s,r,o,.05,0,o/2,a,V("#e9dcc2",.9,0,{emissive:"#ffb870",emissiveIntensity:.25})),[-1,1].forEach(u=>He(s,.05,o,a,u*r/2,o/2,a/2,V("#e9dcc2",.9))),[[-r/2,0],[r/2,0],[-r/2,a],[r/2,a]].forEach(([u,d])=>lt(s,.05,.05,o,u,o/2,d,V("#2a1a10",.8),6));for(let u=0;u<=8;u++){let d=new F(at(-r/2,r/2,u/8),o-.05,-.05).applyMatrix4(s.matrixWorld);t.bulbs.add(d.x,d.y,d.z,u,{ph:u})}let f=new F(0,1.6,a-.1).applyMatrix4(s.matrixWorld);t.pools.add(f.x,f.y,f.z,r*.45,1.8,Fe.tungsten,.3,{vertical:!0,layer:"practical"}),t.pools.add(e.x,.02,e.z+a/2,r*.6,a,Fe.tungsten,.2,{layer:"practical"})}function B_(i,e){if(e.kind)return;let t=i.chairs.add(e.x,e.z,e.side*Math.PI/2,e.col);e.hole3d={back:[t.seat,t.back,t.arms]}}function O_(i,e){let{root:t,chairs:n}=i;if(e.kind==="chair"){let s=n.add(e.x,e.z,Math.PI,e.col);e.hole3d={back:[s.seat,s.back,s.arms],front:[s.back]}}else if(e.kind==="benchPlank"){let s=V("#6b3f1f",.8),r=[];r.push(Bt(He(t,e.w+.4,.05,.44,e.x,.425,e.z,s))),[-1,1].forEach(a=>r.push(Bt(He(t,.06,.42,.4,e.x+a*e.w/2,.21,e.z,V("#3b2213",.8))))),e.hole3d={back:r}}else if(e.kind==="step"){let{kit:s}=i;He(t,e.w*2,e.y,1.12,e.x,e.y/2,e.z-.44,H_(s)),He(t,e.w*2,.006,.05,e.x,e.y+.003,e.z+.05,z_(s));for(let r=-e.w+2.4;r<e.w;r+=2.4)He(t,.02,.004,1.1,e.x+r,e.y+.002,e.z-.45,V("#17131b",.95));[-e.w+.3,0,e.w-.3].forEach(r=>{s.bulbs.add(e.x+r,e.y-.1,e.z+.125,0,{color:Fe.amber,k:.8,s:.5,twinkle:0,layer:"architectural"}),s.pools.add(e.x+r,e.y+.008,e.z+.6,1.3,.55,Fe.amber,.22,{layer:"architectural",live:!0})}),e.hole3d={back:[]}}}var H_=i=>i.stepMat||(i.stepMat=i.selfLit(new qe({color:"#2c2734",emissive:"#2c2734",roughness:.92}),.55,"architectural")),z_=i=>i.nosingMat||(i.nosingMat=i.selfLit(new qe({color:"#8a6f2c",emissive:"#8a6f2c",roughness:.8}),.12,"architectural"));function td(i,e,t,n){let s={kit:i,root:e,id:t,beads:new gh,chairs:new _h,rides:new yh},r=[];return(n.stalls||[]).forEach(a=>C_(s,a)),n.dj&&(r.push(L_(s,n.dj)),(n.dj.life||[]).forEach(a=>D_(s,a))),(n.props||[]).forEach(a=>N_(s,a)),(n.seats||[]).forEach(a=>B_(s,a)),(n.gallery||[]).forEach(a=>O_(s,a)),s.beads.build(e),s.chairs.build(e),s.rides.build(e),{update(a,o){r.forEach(l=>l.update(a,o))}}}function k_(){let i=jn(4);return $e(512,512,(e,t)=>{e.fillStyle="#35271b",e.fillRect(0,0,t,t);for(let n=0;n<2600;n++){let s=i()*t,r=i()*t,a=1+i()*3,o=i();e.fillStyle=o<.5?`rgba(255,220,170,${.04+i()*.06})`:`rgba(0,0,0,${.08+i()*.12})`,e.fillRect(s,r,a,a)}for(let n=0;n<90;n++){let s=i()*t,r=i()*t;e.fillStyle="rgba(0,0,0,.12)",e.beginPath(),e.ellipse(s,r,6+i()*10,2+i()*3,i()*le,0,le),e.fill()}},{repeat:[30,30]})}function G_(){let i=jn(8);return $e(256,512,(e,t,n)=>{let s=t/4;for(let r=0;r<4;r++)for(let a=0;a<n;){let o=90+i()*160,l=40+i()*16;e.fillStyle=`rgb(${l+14},${l},${l-12})`,e.fillRect(r*s,a,s-2,o-2),e.fillStyle="rgba(0,0,0,.35)",e.fillRect(r*s,a+o-2,s,2),a+=o}e.fillStyle="rgba(0,0,0,.4)";for(let r=1;r<4;r++)e.fillRect(r*s-2,0,2,n)},{repeat:[52,38]})}function V_(){let i=jn(5);return $e(512,512,(e,t)=>{let n=t/6,s=t/8;for(let r=0;r<8;r++)for(let a=-1;a<7;a++){let o=a*n+r%2*n/2,l=44+Math.floor(i()*18);e.fillStyle=`rgb(${l+10},${l},${l-10})`,e.fillRect(o+2,r*s+2,n-4,s-4),e.fillStyle="rgba(255,230,190,.05)",e.fillRect(o+4,r*s+4,n-8,3)}},{repeat:[3.6,30]})}function Mh(i,e,t,n,s,r=.95,a){let o=new ne(new Ze(t,n),new qe({map:e,roughness:r,metalness:0}));return o.rotation.x=-Math.PI/2,o.position.set(0,0,s),o.receiveShadow=!!a,o.userData.rect={w:t,d:n,cx:0,cz:s},i.add(o),o}function bh(i,e){e.forEach(([t,n,s,r,a,o])=>i.pools.add(t,.02,n,s,s,r,a,{layer:o||"practical"}))}function W_(i){let e=[],t=(n,s,r)=>{let a=5+Math.floor(i()*3),o=[];for(let l=0;l<a;l++)o.push([(i()-.5)*4.2,5+i()*3.2,(i()-.5)*1.5,1.8+i()*1.6]);e.push({x:n,z:s,s:r?1.25:.8+i()*.4,blobs:o,fairy:i()<.55,hue:Math.floor(i()*6),tone:Math.floor(i()*3)})};for(let n=-48;n<=48;n+=6+i()*4)t(n,58+i()*12,i()<.3);return[-1,1].forEach(n=>{for(let s=-14;s<56;s+=7+i()*5)t(n*(35+i()*8),s,i()<.3)}),t(-29.5,-7,!0),t(30.5,-9.5,!0),e}function X_(){return $e(256,128,(i,e,t)=>{i.fillStyle="#b3261e",i.fillRect(0,0,e,t),i.fillStyle="#f1e2c4",i.fillRect(0,t*.18,e,t*.64),i.fillStyle="#b3261e";for(let n=0;n<e;n+=32)i.beginPath(),i.moveTo(n,t*.18),i.lineTo(n+16,t*.34),i.lineTo(n+32,t*.18),i.fill(),i.beginPath(),i.moveTo(n,t*.82),i.lineTo(n+16,t*.66),i.lineTo(n+32,t*.82),i.fill();i.fillStyle="#2f6b3a";for(let n=16;n<e;n+=32)i.beginPath(),i.arc(n,t*.5,9,0,le),i.fill(),i.fillStyle="#e8b04b",i.beginPath(),i.arc(n,t*.5,4,0,le),i.fill(),i.fillStyle="#2f6b3a";i.fillStyle="rgba(0,0,0,.25)",i.fillRect(0,0,3,t)},{repeat:[1,1]})}var vh=null;function Al(i,e,t,n,s,r){if(!vh){let f=X_();f.wrapS=fn,vh=new qe({map:f,roughness:.95,side:rt})}let a=Math.hypot(n-e,s-t),o=new Ze(a,r),l=o.attributes.uv;for(let f=0;f<l.count;f++)l.setX(f,l.getX(f)*a/3);let c=new ne(o,vh);c.position.set((e+n)/2,r/2,(t+s)/2),c.rotation.y=Math.atan2(n-e,s-t)-Math.PI/2,i.add(c);let h=Math.round(a/3);for(let f=0;f<=h;f++){let u=f/h,d=new ne(new Je(.05,.06,r+.3,5),V("#8a6a3a",.9));d.position.set(at(e,n,u),(r+.3)/2,at(t,s,u)),i.add(d)}}function q_(i,e,t,n,s){let r=Mh(e,k_(),320,320,20,.97,t.shadows);bh(i,[[19.5,21.4,2.2,"#9fb8ff",.2,"show"]]),e.add(Bf(175));let a=$e(128,128,(y,b)=>{let v=y.createRadialGradient(b/2,b/2,0,b/2,b/2,b/2);v.addColorStop(0,"rgba(255,255,255,1)"),v.addColorStop(.6,"rgba(255,255,255,.75)"),v.addColorStop(1,"rgba(255,255,255,0)"),y.fillStyle=v,y.fillRect(0,0,b,b)}),o=new ne(new Tn(26,48),new Lt({color:"#c9a27a",map:a,transparent:!0,opacity:.075,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));o.rotation.x=-Math.PI/2,o.position.set(0,.005,16),o.scale.set(1,1.1,1),e.add(o),[-1,1].forEach(y=>{let b=new ne(new Je(.06,.08,5.2,6),V("#22180f",.8));b.position.set(y*6.9,2.6,-19.6),e.add(b);let v=new ne(new de(.5,.12,.35),V("#16110e",.6,.3));v.position.set(y*6.7,5.2,-19.4),v.rotation.z=y*.5,e.add(v),i.bigBulbs.add(y*6.62,5.12,-19.4,0,{color:Fe.warm,k:1.5,s:.9,twinkle:0,layer:"practical"})}),i.pools.add(0,.02,-17.6,8.5,4.2,Fe.warm,.2,{layer:"practical"}),Al(e,-32.5,-16,-32.5,58,2.4),Al(e,32.5,-16,32.5,58,2.4),Al(e,-32.5,58,-14,58,2.4),Al(e,14,58,32.5,58,2.4);let l=[];for(let y=-13;y<=56;y+=6)[-1,1].forEach(b=>l.push([b*32.2,y,Math.PI/2,b,0]));[[-29,-17],[17,29]].forEach(([y,b])=>{for(let v=y;v<=b;v+=6)l.push([v,57.7,0,0,1])}),l.forEach(([y,b,v,S,w])=>Q_(i,e,y,b,v,2.2,S,w)),[-31,31].forEach(y=>{let b=ty(11);b.position.set(y,5.5,16),e.add(b);let v=new ne(new de(2.2,1.2,.4),V("#16110e",.6));v.position.set(y,11.6,16),v.rotation.y=-Math.sign(y)*.5,v.rotation.x=.4,e.add(v);for(let S=0;S<4;S++)i.bigBulbs.add(y+(S%2?.5:-.5)*Math.cos(.5),11.3+(S<2?.3:-.2),16-.25+(S%2?.2:-.2)*Math.sign(y),0,{color:Fe.flood,k:2.4,s:1.3,twinkle:0,layer:"key"});i.pools.add(y*.55,.02,14,14,11,Fe.flood,.15,{layer:"key"}),i.beams.push({from:[y,11.2,16],to:[y*.45,0,14],beam:new Ni(e,Fe.flood,20,.55,.05),layer:"key",hex:Fe.flood})});let c=W_(s);Yf(i,e,c),c.filter(y=>y.fairy&&y.z<58&&Math.abs(y.x)<40).forEach(y=>{i.pools.add(y.x,4.6*y.s,y.z-1.2*y.s,3*y.s,3.4*y.s,Fe.amber,.1,{vertical:!0,layer:"architectural"}),i.pools.add(y.x,.02,y.z,1.6,1.6,Fe.amber,.12,{layer:"architectural"}),i.bigBulbs.add(y.x-.6,.12,y.z-.6,0,{color:Fe.amber,k:.9,s:.5,twinkle:0,layer:"architectural"})});let h=ch(i,{x0:-11,x1:11,z:46,h:1.6,depth:4.4,screenBottom:3.95,screenTop:8.6,truss:10.5,arrays:13,sponsors:3,sideScreens:!0,band:fl.big});e.add(h.root),[-21,21].forEach(y=>dh(e,y,16,6));let f=10,u=[];for(let y=0;y<=24;y++){let b=y/24*le+.3;u.push([Math.cos(b)*8.5,f-.25*(1-Math.abs(Math.sin(b*3))),4+Math.sin(b)*8.5])}for(let y=0;y<24;y++)i.wires.line(u[y],u[y+1]);[[[-31,11,16],[-8.5,f,4]],[[31,11,16],[8.5,f,4]],[[0,10.5,46],[0,f,12.5]]].forEach(([y,b])=>i.wires.cable(y,b,.5));let d=[];for(let y=0;y<6;y++){let b=y/6*le+.3;d.push(uh(i,e,Math.cos(b)*8.5,7.2,4+Math.sin(b)*8.5,f,n.flags))}let p=[-10,5,20,35],_=24,g=7.4;return p.forEach(y=>[-_,_].forEach(b=>{let v=new ne(new Je(.07,.1,g,6),V("#22180f",.9));v.position.set(b,g/2,y),e.add(v)})),p.forEach((y,b)=>{Ui(i,[-_,g,y],[_,g,y],1.5,b%2?"flags":"bulbs",b*5),b<p.length-1&&(Ui(i,[-_,g,y],[_,g,p[b+1]],1.5,"bulbs",b*7),Ui(i,[_,g,y],[-_,g,p[b+1]],1.5,"bulbs",b*11))}),{rig:{hemi:["#36355f","#2a1c12",.37,.58],moon:1,spots:[{pos:[31,11.2,16],to:[12,0,20],color:"#eeeeff",base:105,distance:60,angle:.5,layer:"key"},{pos:[-31,11.2,16],to:[-12,0,20],color:"#eeeeff",base:105,distance:60,angle:.5,layer:"key"}],points:[{pos:[0,7,40],color:"#ffd6a0",base:70,distance:22,layer:"show"},{pos:[0,5.5,4],color:"#ffc47a",base:48,distance:16,layer:"festive"},{pos:[0,6.5,22],color:"#ffc47a",base:42,distance:18,layer:"festive"},{pos:[0,5,-19.2],color:Fe.warm,base:34,distance:13,layer:"practical"}]},stage:h,umbrellas:d,floor:r,fog:new Gi("#150d12",.0105),exposure:1.15}}var Cl={x:[-14,0,14],z:[-16,4,24]},nd=["#c9a37a","#b76b5a","#8f7aa8","#d4b58c","#6c8fa3","#caa0b8","#d98c5f","#7fa37a"];function Y_(i,e,t,n){let s=[];for(let h=0;h<11;h++)for(let f=-27;f<=27;f+=.72)Cl.x.some(u=>Math.abs(f-u)<.55)||s.push([f+(n()-.5)*.15,1.3+h*.95,42+h*1.5+.55,0]);[-1,1].forEach(h=>{for(let f=0;f<9;f++)for(let u=-30;u<=40.5;u+=.8)Cl.z.some(d=>Math.abs(u-d)<.6)||s.push([h*(25+f*1.5+.55),1.3+f*.95,u+(n()-.5)*.15,h])});let r=s.filter(()=>n()<.55+.4*t),a=Qc([[new Je(.17,.22,.8,6),qr(0,.45,0)],[new _n(.12,0),qr(0,.98,0)]]),o=new mt(a,i.selfLit(new qe({color:"#ffffff",roughness:.9,emissive:"#2a2238"}),.55,"architectural"),r.length),l=new De,c=new ce;o.instanceColor=new zt(new Float32Array(r.length*3),3),r.forEach((h,f)=>{let u=.85+n()*.25;o.setMatrixAt(f,l.makeScale(1,u,1).setPosition(h[0],h[1],h[2])),c.set(nd[Math.floor(n()*nd.length)]),o.setColorAt(f,c),n()<.05&&i.bulbs.add(h[0]+(n()-.5)*.2,h[1]+1.35,h[2]-(h[3]?0:.2)-h[3]*.2,0,{color:"#f4f7ff",group:2,layer:"show",twinkle:.9,ph:n()*le,s:.9})}),e.add(o)}function Z_(i,e){let t=[],s=e;for(let p=0;p<12;p++)t.push([at(s.x0,s.x1,p/12),s.edge,s.z1]);for(let p=0;p<12;p++)t.push([s.x1,s.edge,at(s.z1,s.z0,p/12)]);for(let p=0;p<12;p++)t.push([at(s.x1,s.x0,p/12),s.edge,s.z0]);for(let p=0;p<12;p++)t.push([s.x0,s.edge,at(s.z0,s.z1,p/12)]);let r=s.apex,a=["#c85a17","#d8c49c","#7e1827","#d8c49c"],o=[],l=[],c=new ce,h=(p,_,g,m)=>{c.set(m),[p,_,g].forEach(y=>{o.push(y[0],y[1],y[2]),l.push(c.r,c.g,c.b)})};for(let p=0;p<t.length;p++){let _=t[p],g=t[(p+1)%t.length],m=[at(r[0],_[0],.55),at(r[1],s.edge,.55)-.35,at(r[2],_[2],.55)],y=[at(r[0],g[0],.55),at(r[1],s.edge,.55)-.35,at(r[2],g[2],.55)],b=a[p%a.length];h(r,y,m,b),h(m,y,g,b),h(m,g,_,b)}let f=new et;f.setAttribute("position",new We(o,3)),f.setAttribute("color",new We(l,3)),f.computeVertexNormals();let u=new ne(f,new qe({color:"#ffffff",roughness:.95,vertexColors:!0,side:rt,emissive:"#3a1a0a",emissiveIntensity:.8}));i.add(u);let d=$e(256,64,(p,_,g)=>{p.clearRect(0,0,_,g),p.fillStyle="#6b1020",p.beginPath(),p.moveTo(0,0),p.lineTo(_,0);for(let m=4;m>0;m--){let y=m*_/4,b=y-_/4;p.lineTo(y,g*.5),p.quadraticCurveTo((b+y)/2,g*1.05,b,g*.5)}p.closePath(),p.fill(),p.strokeStyle="#d6a64a",p.lineWidth=4,p.beginPath();for(let m=0;m<4;m++){let y=m*_/4;p.moveTo(y,g*.5),p.quadraticCurveTo(y+_/8,g*1.02,y+_/4,g*.5)}p.stroke();for(let m=0;m<4;m++)p.fillStyle="rgba(235,245,255,.9)",p.beginPath(),p.arc((m+.5)*_/4,g*.35,5,0,le),p.fill()});return d.wrapS=fn,[[(s.x0+s.x1)/2,s.z1,s.x1-s.x0,0],[(s.x0+s.x1)/2,s.z0,s.x1-s.x0,Math.PI],[s.x1,(s.z0+s.z1)/2,s.z1-s.z0,Math.PI/2],[s.x0,(s.z0+s.z1)/2,s.z1-s.z0,-Math.PI/2]].forEach(([p,_,g,m])=>{let y=d.clone();y.needsUpdate=!0,y.repeat.set(g/3.2,1);let b=new ne(new Ze(g,.8),new qe({map:y,transparent:!0,alphaTest:.3,side:rt,roughness:.9,emissive:"#2a0a0a"}));b.position.set(p,s.edge-.4,_),b.rotation.y=m,i.add(b)}),u.material}function J_(i,e,t,n,s){let r=Mh(e,G_(),64,92,10,.55,t.shadows);bh(i,[[0,10,22,Fe.tungsten,.07],[15.5,16.4,2.2,"#9fb8ff",.2,"show"]]);let a=new ne(new Ze(140,140),V("#140e0a",.95));a.rotation.x=-Math.PI/2,a.position.set(0,-.01,10),e.add(a);let o=[];for(let R=0;R<=10;R++){let P=42+R*1.5,L=1.3+R*.95;o.push([jc(new de(58,L,1.5),`rgb(${36+R*2},${30+R*2},${44+R*2})`),qr(0,L/2,P+.75)])}[-1,1].forEach(R=>{for(let P=0;P<=8;P++){let L=R*(25+P*1.5),C=1.3+P*.95;o.push([jc(new de(1.5,C,76),`rgb(${30+P*2},${26+P*2},${40+P*2})`),qr(L+R*.75,C/2,4)])}}),e.add(new ne(Qc(o),i.selfLit(new qe({color:"#ffffff",roughness:.9,vertexColors:!0,emissive:"#3a3252"}),.38,"architectural"))),Y_(i,e,t.density,s);let l="#a898ff";[-1,1].forEach(R=>{for(let P=-28;P<=40;P+=8){let L=new ne(new de(.3,.16,1.2),V("#16131c",.5,.4));L.position.set(R*30.5,15.9,P),e.add(L),i.bigBulbs.add(R*30.5,15.78,P,0,{color:l,k:1.1,s:.55,twinkle:0,layer:"architectural"}),i.pools.add(R*28.6,5.4,P,4.2,3.6,l,.09,{vertical:!0,ry:Math.PI/2,layer:"architectural"})}});for(let R=-24;R<=24;R+=8)i.bigBulbs.add(R,15.78,47.5,0,{color:l,k:1.1,s:.55,twinkle:0,layer:"architectural"}),i.pools.add(R,6,48.5,4.2,3.8,l,.08,{vertical:!0,layer:"architectural"});let c=$e(512,64,(R,P,L)=>{R.fillStyle="#0a0608",R.fillRect(0,0,P,L);for(let C=0;C<8;C++){let U=(C+.5)/8*P;if(R.fillStyle="#fff",C%3===0){for(let z=0;z<8;z++){let N=z/8*le;R.beginPath(),R.ellipse(U+Math.cos(N)*13,L/2+Math.sin(N)*13,8,4,N,0,le),R.fill()}R.beginPath(),R.arc(U,L/2,6,0,le),R.fill()}else C%3===1?(R.save(),R.translate(U,L/2),[-.6,.6].forEach(z=>{R.save(),R.rotate(z),R.fillRect(-2.5,-22,5,44),R.restore()}),R.restore()):(R.beginPath(),R.ellipse(U,L*.66,14,6,0,0,Math.PI),R.fill(),R.beginPath(),R.moveTo(U,L*.2),R.quadraticCurveTo(U+7,L*.5,U,L*.62),R.quadraticCurveTo(U-7,L*.5,U,L*.2),R.fill())}R.fillStyle="rgba(255,255,255,.55)";for(let C=4;C<P;C+=8)R.fillRect(C,4,2,2),R.fillRect(C,L-6,2,2)});c.wrapS=fn;let h=[[0,41.9,56,0],[-24.9,4,76,Math.PI/2],[24.9,4,76,Math.PI/2]].map(([R,P,L,C])=>{let U=c.clone();U.needsUpdate=!0,U.repeat.set(L/7,1);let z=new ne(new de(L,.9,.08),new Lt({color:"#ffffff",map:U}));return z.position.set(R,.65,P),z.rotation.y=C,z.userData.dynamic=!0,e.add(z),z}),f={roof:17,apex:[0,13.4,10],edge:11.2,x0:-24,x1:24,z0:-14,z1:34},u=new ne(new de(80,.3,100),V("#130e19",.9));u.position.set(0,f.roof+.15,10),e.add(u);let d=new ne(new de(80,17,.4),V("#191320",.9));d.position.set(0,8.5,59),e.add(d);let p=new ne(new de(80,17,.4),V("#191320",.9));p.position.set(0,8.5,-40),e.add(p),[-1,1].forEach(R=>{let P=new ne(new de(.4,17,100),V("#161120",.9));P.position.set(R*39,8.5,10),e.add(P)});for(let R=0;R<9;R++)i.pools.add(-32+R*8,14.2,58.7,2.4,2.6,Fe.amber,.3,{vertical:!0,layer:"architectural"}),i.bigBulbs.add(-32+R*8,16.4,58.5,0,{color:Fe.amber,k:1,s:.6,twinkle:0,layer:"architectural"});[-1,1].forEach(R=>{for(let P=-30;P<=54;P+=8)i.pools.add(R*38.7,14.2,P,2.4,2.6,Fe.amber,.26,{vertical:!0,ry:Math.PI/2,layer:"architectural"}),i.bigBulbs.add(R*38.5,16.4,P,0,{color:Fe.amber,k:1,s:.6,twinkle:0,layer:"architectural"})}),Cl.x.forEach(R=>{for(let P=0;P<=10;P++)i.bulbs.add(R,1.3+P*.95-.12,42+P*1.5-.02,0,{color:Fe.amber,k:.7,s:.5,twinkle:0,layer:"architectural"})}),[-1,1].forEach(R=>Cl.z.forEach(P=>{for(let L=0;L<=8;L++)i.bulbs.add(R*(25+L*1.5)-R*.02,1.3+L*.95-.12,P,0,{color:Fe.amber,k:.7,s:.5,twinkle:0,layer:"architectural"})}));for(let R=-24;R<=24;R+=8)i.bigBulbs.add(R,16.6,50,0,{color:Fe.warm,k:1.1,s:.7,twinkle:0,layer:"practical"});[-1,1].forEach(R=>{for(let P=-24;P<=40;P+=8)i.bigBulbs.add(R*31,16.6,P,0,{color:Fe.warm,k:1.1,s:.7,twinkle:0,layer:"practical"})});for(let R=-30;R<=57;R+=6){let P=new ne(new Ze(78,.9),bl(1));P.material.map.repeat.set(1,1),P.rotation.z=Math.PI/2,P.position.set(0,f.roof-.45,R),P.rotation.set(0,0,0),e.add(P)}let _=Z_(e,f);[[-12,2],[12,2],[-12,20],[12,20],[0,26]].forEach(([R,P])=>qf(i,e,R,P,f.edge+1.2));let g=[];for(let R=0;R<6;R++){let P=R/6*le+.3;g.push(uh(i,e,Math.cos(P)*8.5,8.2,4+Math.sin(P)*8.5,12.1,n.flags))}let m=[];[-1,1].forEach(R=>{for(let P=0;P<6;P++){let L=R*(9.2+P*.35);for(let C=8.2;C>2.4;C-=.14)m.push([L,C,35.2-P*.05,Math.round(C/.14)%2])}});let y=new mt(new kt(.06,6,4),V("#ffffff",.9),m.length),b=new De;y.instanceColor=new zt(new Float32Array(m.length*3),3);let v=new ce("#f29a2e"),S=new ce("#f6c342");m.forEach((R,P)=>{y.setMatrixAt(P,b.makeTranslation(R[0],R[1],R[2]));let L=R[3]?v:S;y.setColorAt(P,L)}),e.add(y),[2,18,32].forEach((R,P)=>Ui(i,[-24,11,R],[24,11,R],1.6,"flags",P*3));let w=["#ff9f5a","#ff6fa3","#7fe0a0","#ffd58a"],E=0;[34,22,10,-2].forEach(R=>[-15,-5,5,15].forEach(P=>{fh(i,e,P,9.5+E%2*.8,R,w[E%4],11.6),E++})),[-1,1].forEach(R=>{for(let C=-24;C<=36;C+=10){let U=n.flags[((C+40)/10+(R>0?1:0))%n.flags.length],z=Yr(new ne(new Ze(2.2,3.3),V(U,.8,0,{side:rt})),-R*Math.PI/2);z.position.set(R*25.05,3.95,C),e.add(z);let N=Yr(new ne(new Ze(.6,.3),i.glow("#1f8f4b",1.6,"practical")),-R*Math.PI/2);N.position.set(R*25.02,1.9,C+5),e.add(N)}let P=Ft(new ne(new Ze(10,3.5),i.glow("#cfc4ae",.22,"practical")));P.position.set(R*28,9.15,40),e.add(P);let L=new ne(new de(10.5,3.9,.2),V("#0d0b10",.6));L.position.set(R*28,9.15,40.15),e.add(L)}),[-1,1].forEach(R=>{let P=new ne(new de(.06,1.1,40),V("#8a8a92",.4,.7));P.position.set(R*24.4,.55,13),e.add(P)});let x=ch(i,{x0:-8,x1:8,z:35.5,h:1.4,depth:4.4,screenBottom:3.75,screenTop:7.2,truss:8.4,arrays:10,band:fl.big});e.add(x.root);let A=[[-18,0],[-6,0],[6,0],[18,0],[-12,22],[12,22]].map(([R,P],L)=>{let C=new ne(new Je(.2,.26,.5,10),V("#1b1920",.5,.4));C.position.set(R,15.6,P),e.add(C);let U=new ne(new Tn(1,24),new Lt({map:dl(),color:"#ffffff",transparent:!0,opacity:.2,blending:$n,depthWrite:!1,side:rt}));return U.rotation.x=-Math.PI/2,U.renderOrder=2,e.add(U),{x:R,z:P,i:L,beam:new Ni(e,"#ffffff",16,.2,.2),spot:U,layer:"show"}});return{rig:{hemi:["#5e4436","#24170e",.55,.8],moon:0,spots:[{pos:[4,15.5,-2],to:[0,0,6],color:Fe.warm,base:150,distance:40,angle:.6,layer:"key"},{pos:x.wash.pos,to:x.wash.to,color:"#ffd6a0",base:60,distance:18,angle:.75,layer:"show"}],points:[[-10,9.5,2],[10,9.5,2],[-10,9.5,20],[10,9.5,20]].map(R=>({pos:R,color:Fe.tungsten,base:58,distance:34,layer:"practical"}))},stage:x,umbrellas:g,floor:r,fog:new Gi("#140c10",.009),exposure:1.1,update(R,P){let{TH:L,pulse:C,reduce:U,lv:z}=P;_.emissiveIntensity=.8*z.practical,h.forEach((N,W)=>{N.material.color.copy(pl(L.hues[W%L.hues.length]+20*Math.sin(R*L.speed+W),L.sat,52+8*C)).multiplyScalar(1.15*z.festive),U||(N.material.map.offset.x=R*.08*(W?-1:1)%1)}),A.forEach(N=>{let W=U?0:R*L.speed/.3,B=N.x*.4+Math.sin(W*.35+N.i*1.9)*9,k=N.z+Math.cos(W*.27+N.i)*9,q=L.beams[N.i%L.beams.length];N.beam.aim([N.x,15.4,N.z],[B,0,k]),N.beam.set(q,z.show*(.8+.4*C)),N.spot.position.set(B,.03,k),N.spot.scale.setScalar(2.6),N.spot.material.color.set(q),N.spot.material.opacity=.5*z.show})}}}function $_(i,e){let t=i.z2-i.z1,n=26,s=Math.round(t*n),r=Math.round(i.h*n),a=c=>h=>{if(c)h.fillStyle="#000",h.fillRect(0,0,s,r);else{h.fillStyle=i.col,h.fillRect(0,0,s,r),h.fillStyle="rgba(0,0,0,.18)";for(let u=0;u<400;u++)h.fillRect(e()*s,e()*r,2,2);h.fillStyle="rgba(214,176,111,.28)",h.fillRect(0,0,s,.4*n)}let f=Math.max(2,Math.round(t/2.2));for(let u=0;u<i.floors;u++){let d=.9+u*3.1;for(let p=0;p<f;p++){let _=t*(p+.5)/f,g=u===0&&p===Math.floor(f/2),m=g?.75:.5,y=g?2.3:1.5,b=g?0:d,v=(i.lit*10+u*3+p)%3<1.6,S=_*n,w=r-b*n,E=r-(b+y*.7)*n,x=r-(b+y*1.12)*n,A=(I,R)=>{h.fillStyle=R,h.beginPath(),h.moveTo(S-I*n,w),h.lineTo(S-I*n,E),h.quadraticCurveTo(S,x-6,S+I*n,E),h.lineTo(S+I*n,w),h.closePath(),h.fill()};if(c){!g&&v&&A(m,"#ffba60");continue}g?(A(m+.14,"#7a4a22"),A(m,"#3a1f12")):(A(m,v?"#ffba60":"#161022"),u>0&&(h.fillStyle=["#2f5d4a","#3a4f7a","#6b3a1c"][i.hue%3],h.fillRect(S-(m+.34)*n,E,.3*n,y*.72*n),h.fillRect(S+(m+.04)*n,E,.3*n,y*.72*n)))}!c&&u===1&&i.balcony&&(h.fillStyle="rgba(120,80,50,.7)",h.fillRect(.6*n,r-(d+.7)*n,s-1.2*n,.9*n))}if(!c&&i.hue===3&&t>5.5){h.fillStyle="#b8312b";let u=t/2+1.4;h.fillRect((u-1.3)*n,r-3.15*n,2.6*n,.6*n),h.fillStyle="#ffe9b8",h.font=`700 ${Math.round(.42*n)}px "Noto Sans Gujarati", "Gujarati Sangam MN", Shruti, "Anek Gujarati", system-ui, sans-serif`,h.textAlign="center",h.fillText("\u0A95\u0AB0\u0ABF\u0AAF\u0ABE\u0AA3\u0ABE",u*n,r-2.7*n)}},o=$e(s,r,a(!1)),l=$e(s,r,a(!0));return{map:o,em:l}}function K_(i,e,t,n,s){let r=Mh(e,V_(),14.4,124,16,.85,t.shadows);bh(i,[[4.4,60.6,2.2,"#9fb8ff",.2,"show"]]),[-1,1].forEach(E=>{let x=new ne(new de(.35,.45,124),V("#3a3040",.9));x.position.set(E*7.3,.225,16),e.add(x)});let a=[],o=["#3a4468","#5e4526","#5c3040","#28524f","#5b5241","#4a3a5e"],l=[];[-1,1].forEach(E=>{for(let x=-48;x<70;){let A=5+s()*3.5,I=6.8+s()*4.5;a.push({side:E,z1:x,z2:x+A,h:I,col:o[Math.floor(s()*o.length)],floors:I>9.5?3:2,lit:s(),balcony:s()<.5,bulbs:s()<.6,hue:Math.floor(s()*6)}),x+=A+.15}});let c=a.find(E=>E.side>0&&E.z1<=1.5&&E.z2>=1.5);c&&(c.col="#7a4f9e"),a.forEach(E=>{let x=E.z2-E.z1,A=E.side*8,I=(E.z1+E.z2)/2,R=new ne(new de(6,E.h,x),V(E.col,.95));R.position.set(A+E.side*3,E.h/2,I),e.add(R);let P=$_(E,s),L=new qe({map:P.map,emissiveMap:P.em,emissive:"#ffffff",emissiveIntensity:1.2,roughness:.9});l.push(L);let C=Yr(new ne(new Ze(x,E.h),L),-E.side*Math.PI/2);C.position.set(A-E.side*.01,E.h/2,I),e.add(C);let U=new ne(new de(.4,.3,x),V("#d6b06f",.8));if(U.position.set(A-E.side*.1,E.h-.15,I),e.add(U),E.balcony){let z=new ne(new de(.7,.08,x-1.2),V("#5a3a22",.8));z.position.set(A-E.side*.35,3.8,I),e.add(z);let N=new ne(new de(.04,.8,x-1.2),V("#78503a",.7,.2));N.position.set(A-E.side*.7,4.2,I),e.add(N)}if(E.bulbs){for(let z=E.z1+.6;z<E.z2-.3;z+=1.1)for(let N=E.h-.8;N>1.2;N-=.9)i.bulbs.add(A-E.side*.08,N,z,E.hue+Math.round(N),{ph:z+N*2,s:.7,twinkle:.4});for(let z=E.z1+.3;z<E.z2;z+=.7)i.bulbs.add(A-E.side*.12,E.h-.1,z,E.hue,{ph:z})}if(E.hue%2===0){let z=new ne(new Je(.6,.6,1.2,12),V("#1f1d24",.8));z.position.set(A+E.side*1.4,E.h+.6,I),e.add(z)}ey(i,e,E,s)});let h=new ne(new de(16.4,12,3),V("#2c2338",.95));h.position.set(0,6,73.5),e.add(h);let f=new ne(new de(2.4,3.2,1),V("#7a1a14",.7));f.position.set(0,1.6,71.6),e.add(f);let u=new ne(new jt(1.1,.08,6,20,Math.PI),V("#e8b04b",.35,.7));u.position.set(0,2.2,71.05),e.add(u);for(let E=0;E<5;E++)i.flames.add((E-2)*.45,.02,70.9,{s:.05,k:.8});i.pools.add(0,1.6,71.05,1.8,1.8,Fe.flame,.35,{vertical:!0,layer:"flame"});let d=new ne(new de(6.9,3.1,.1),V("#14100c",.7));d.position.set(0,6.6,71.85),e.add(d);let p=new ne(new nn([[3.2,0],[3,3],[2.2,6],[1.2,8.5],[.2,10]].map(([E,x])=>new fe(E,x)),12),V("#231a2c",.9));p.position.set(0,12,80),e.add(p);for(let E=0;E<=20;E++){let x=E/20,A=x*Math.PI,I=-3.2*Math.cos(A),R=12+Math.sin(A)*10*Math.pow(Math.sin(A),.4);i.bulbs.add(I*(1-.7*Math.sin(A)*.9),R,77.2,E,{ph:E})}i.pools.add(0,15,76.8,4.2,6,Fe.amber,.16,{vertical:!0,layer:"architectural"}),i.pools.add(0,3.5,71.95,7,3.5,Fe.amber,.08,{vertical:!0,layer:"architectural"});let _=new ne(new Ze(1.2,.6),V("#d8453a",.8,0,{side:rt}));_.position.set(.6,23.2,80),_.userData.dynamic=!0,e.add(_);for(let E=62;E>=-20;E-=14)[-1,1].forEach((x,A)=>{let I=E+A*7,R=new ne(new de(1.4,.06,.06),V("#1b1510",.8));R.position.set(x*7.3,5.2,I),e.add(R);let P=new ne(new Je(.08,.2,.14,10),V("#1b1510",.6,.4));P.position.set(x*6.6,5.16,I),e.add(P),i.bigBulbs.add(x*6.6,5.05,I,0,{color:Fe.sodium,k:1.05,s:.8,layer:"practical",twinkle:.03}),i.pools.add(x*5.8,.02,I,4.4,4.4,Fe.sodium,.15),i.pools.add(x*7.9,3.4,I,2.4,2.4,Fe.sodium,.09,{vertical:!0,ry:x*Math.PI/2})});[[-1,3.5,8.5],[1,5,10],[-1,34,38.5],[1,36,40.5]].forEach(([E,x,A])=>{let I=Yr(new ne(new Ze(A-x,1.3),V("#d6ccb8",.9)),-E*Math.PI/2);I.position.set(E*7.94,3.15,(x+A)/2),e.add(I)}),[-1,1].forEach(E=>{let x=new ne(new de(1.1,.45,124),V("#4a3a34",.9));x.position.set(E*7.4,.225,16),e.add(x)});let g=new ne(new de(6.8,.6,2.1),V("#6b3f1f",.8));g.position.set(0,.3,64.95),e.add(g);let m=new ne(new Ze(6.6,2),new qe({map:$e(256,64,(E,x,A)=>{for(let I=0;I<7;I++)E.fillStyle=I%2?"#c2721e":"#7e1827",E.fillRect(0,I/7*A,x,A/7+1)}),roughness:1}));m.rotation.x=-Math.PI/2,m.position.set(0,.605,64.95),e.add(m),[-4.6,4.6].forEach(E=>dh(e,E,64,1.8));let y=vl(i,e,fl.sheri,{x0:-3.2,x1:3.2,front:63.9,floor:.6,small:!0}),b=new Je(.08,.1,2.9,8);[[-3.35,63.9],[3.35,63.9],[-3.35,66],[3.35,66]].forEach(([E,x])=>{let A=new ne(b,V("#c0392b",.6));A.position.set(E,.6+1.45,x),e.add(A)});let v=new ne(new de(7,.1,2.3),V("#6b1020",.9));v.position.set(0,3.55,64.95),v.rotation.x=-.12,e.add(v);for(let E=0;E<=28;E++)i.flags.add(at(-3.4,3.4,E/28),3.45,63.86,Math.PI/2+Math.PI/2,.12,E);[12,21,34].forEach((E,x)=>{let A=[],I=[],R=new ce,P=[n.flags[x%n.flags.length],"#f6c342","#2f8f5b","#b8312b"];for(let C=0;C<10;C++){let U=Hn([-8,7.6,E],[8,7.6,E],.9,C/10),z=Hn([-8,7.6,E],[8,7.6,E],.9,(C+1)/10),N=[[U[0],U[1],U[2]],[z[0],z[1],z[2]],[z[0],z[1]-.2,z[2]+1.6],[U[0],U[1]-.2,U[2]+1.6]];R.set(P[C%P.length]),[N[0],N[1],N[2],N[0],N[2],N[3]].forEach(W=>{A.push(W[0],W[1],W[2]),I.push(R.r,R.g,R.b)}),i.flags.add((U[0]+z[0])/2,U[1]-.05,U[2],Math.PI/2+Math.PI/2,.22,C+1)}let L=new et;L.setAttribute("position",new We(A,3)),L.setAttribute("color",new We(I,3)),L.computeVertexNormals(),e.add(new ne(L,V("#ffffff",.9,0,{vertexColors:!0,side:rt,emissive:"#1a0c06"})))}),[[-8,9,6,8,8.5,20],[-8,8.2,26,8,9,14],[-8,9.2,40,8,8,48],[-8,8.6,2,8,8.8,-4],[-7.8,9.4,-6,-7.8,9.4,60],[7.8,9,-6,7.8,9,60]].forEach(E=>i.wires.cable([E[0],E[1],E[2]],[E[3],E[4],E[5]],.6));let S=["#ff9f5a","#ff6fa3","#7fe0a0","#ffd58a"];return[60,50,41,32,24,16,8,0,-8].forEach((E,x)=>{x%3===0?(Ui(i,[-8,6.8,E],[8,6.8,E+2],1.1,"bulbs",x),Ui(i,[-8,6.8,E+2],[8,6.8,E],1.1,"bulbs",x+3)):Ui(i,[-8,6.4,E],[8,6.4,E],1.3,x%3===1?"flags":"bulbs",x),x%2===0&&fh(i,e,0,4.4,E+.5,S[x%4],6.4)}),{rig:{hemi:["#3f3a6c","#1f1612",.5,.72],moon:1,spots:[{pos:[-6.5,9,-3],to:[0,0,1],color:"#ffd9ae",base:70,distance:30,angle:.7,layer:"key"},{pos:[0,5.5,60],to:[0,.6,65],color:"#ffd6a0",base:50,distance:12,angle:.8,layer:"show"}],points:[[-5.8,5,-6],[5.8,5,8],[-5.8,5,22],[5.8,5,50]].map(E=>({pos:E,color:Fe.sodium,base:32,distance:22,layer:"practical"}))},bandHoles:y,floor:r,fog:new Gi("#140d18",.011),exposure:1.05,update(E,x){l.forEach(A=>A.emissiveIntensity=.8*x.lv.practical),_.rotation.y=x.reduce?0:Math.sin(E*3)*.3}}}function Q_(i,e,t,n,s,r,a,o){let l=new ne(new de(.22,.12,.16),V("#15110d",.6,.4));l.position.set(t,.06,n),l.rotation.y=s,e.add(l),i.bigBulbs.add(t,.14,n,0,{color:Fe.amber,k:.9,s:.45,twinkle:0,layer:"architectural"}),i.pools.add(t+a*.24,r*.42,n+o*.24,1.1,r*.75,Fe.amber,.24,{vertical:!0,ry:s,layer:"architectural"}),i.pools.add(t,.02,n,1.3,1.3,Fe.amber,.1,{layer:"architectural"})}var Rl=[];function j_(i){if(Rl[i])return Rl[i];let e=[["#c2185b","#f6c342","#2a9d8f","#fff3d6"],["#f08a24","#3b4cc0","#e9c46a","#fff3d6"],["#2f8f5b","#d8453a","#f6c342","#fff3d6"]][i],t=$e(128,128,(n,s)=>{n.clearRect(0,0,s,s),n.translate(s/2,s/2);for(let r=0;r<8;r++)n.save(),n.rotate(r/8*le),n.fillStyle=e[r%2],n.beginPath(),n.ellipse(s*.26,0,s*.15,s*.07,0,0,le),n.fill(),n.restore();n.fillStyle=e[2],n.beginPath(),n.arc(0,0,s*.14,0,le),n.fill(),n.fillStyle=e[3];for(let r=0;r<16;r++){let a=r/16*le;n.beginPath(),n.arc(Math.cos(a)*s*.44,Math.sin(a)*s*.44,3,0,le),n.fill()}});return Rl[i]=new qe({map:t,transparent:!0,alphaTest:.2,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2}),Rl[i]}function ey(i,e,t,n){let s=t.z2-t.z1,r=t.side*8,a=Math.max(2,Math.round(s/2.2)),o=t.z1+s*(Math.floor(a/2)+.5)/a;if(!(t.z2<-24||t.z1>68)){if(t.lit>.3){let l=new ne(new de(.3,.05,.05),V("#1b1510",.7));l.position.set(r-t.side*.15,2.72,o+.62),e.add(l),i.bigBulbs.add(r-t.side*.28,2.64,o+.62,0,{color:Fe.tungsten,k:1.2,s:.5,twinkle:.02,layer:"practical"}),i.pools.add(r-t.side*.03,2.5,o+.62,.9,1.2,Fe.tungsten,.22,{vertical:!0,ry:t.side*Math.PI/2,layer:"practical"}),i.pools.add(t.side*6.4,.02,o+.4,1.8,1.8,Fe.tungsten,.12,{layer:"practical"})}if(n()<.55){for(let c=0;c<5;c++)i.flames.add(t.side*6.98,.45,o+(c-2)*.24,{s:.038,k:.55});i.pools.add(t.side*6.5,.02,o,1.4,1.6,Fe.flame,.16,{layer:"flame"}),i.pools.add(t.side*6.84,.24,o,1.3,.3,Fe.flame,.2,{vertical:!0,ry:t.side*Math.PI/2,layer:"flame"});let l=new ne(new Tn(.42,24),j_(Math.floor(n()*3)));l.rotation.x=-Math.PI/2,l.position.set(t.side*6.2,.01,o),e.add(l)}for(let l=0;l<a;l++)l===Math.floor(a/2)||(t.lit*10+l)%3>=1.6||i.pools.add(t.side*6.45,.02,t.z1+s*(l+.5)/a,1.1,1.3,Fe.tungsten,.08,{layer:"practical"})}}function ty(i){let e=new pt,t=bl(Math.round(i/1.1)),n=.6;for(let s=0;s<3;s++){let r=new ne(new Ze(n,i),t),a=s/3*le;r.position.set(Math.sin(a)*n*.29,0,Math.cos(a)*n*.29),r.rotation.y=a,e.add(r)}return e}function id(i,e,t,n){let s=Ii[t]||Ii.traditional,r=jn(i==="outdoors"?101:i==="stadium"?202:303),a=new pt,o=Lf(),l=i==="stadium"?null:Ff(i);l&&a.add(l.root);let c=i==="outdoors"?q_(o,a,e,s,r):i==="stadium"?J_(o,a,e,s,r):K_(o,a,e,s,r),h=n?td(o,a,i,n):null;n&&n.stage&&(n.stage.hole3d={front:c.stage?c.stage.stageFront:[],band:c.stage?c.stage.bandHoles:c.bandHoles});let f=Xf(o,{small:i==="sheri",flags:s.flags});a.add(f.root),o.pools.add(0,.02,0,i==="sheri"?3.6:4.4,i==="sheri"?3.6:4.4,"#ffae5c",.2,{layer:"garbo",live:!0}),o.flames.lightPools(o);let u=Pf(c.floor,c.floor.userData.rect,o.pools.list,s,e.name==="phone"?512:1024);return o.pools.bakedGround=!0,Nf(o,a),Sl(a,new Set(o.lit.map(d=>d.mat))),Object.assign({id:i,root:a,kit:o,sky:l,TH:s,lightMaps:u,garbo:f,furnish:h,garboLight:{pos:[0,i==="sheri"?1.6:1.8,0],distance:i==="sheri"?12:15,color:"#ffae5c"}},c)}var sd={phone:{name:"phone",pixels:9e5,shadows:!1,shadowSize:0,bloomScale:.35,spots:0,points:2,samples:0},tablet:{name:"tablet",pixels:16e5,shadows:!1,shadowSize:0,bloomScale:.45,spots:2,points:4,samples:2},desktop:{name:"desktop",pixels:24e5,shadows:!0,shadowSize:2048,bloomScale:.5,spots:2,points:5,samples:4}};function rd(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}function ad(i,e={}){let t=sd[e.tier]||sd.desktop,n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),n.className="venue-backdrop",n.style.cssText="position:fixed;left:0;top:0;width:100%;height:100%;display:block;pointer-events:none;",i.parentNode.insertBefore(n,i);let s=new nl({canvas:n,antialias:!1,powerPreference:"high-performance",alpha:!1,stencil:!1});s.toneMapping=Xi,s.outputColorSpace=Xt,s.shadowMap.enabled=t.shadows,s.shadowMap.type=oo,s.shadowMap.autoUpdate=!1,s.setClearColor("#07060d");let r=new ar,a=new pt;a.scale.z=-1,r.add(a);let o=new Kt(50,1,.3,1400),l=new Ut(1,1,{type:qt,samples:t.samples}),c=new ol(s,l);c.addPass(new ll(r,o));let h=new zs(new fe(256,256),.85,.5,.86);c.addPass(h),c.addPass(new cl);let f={spots:[],points:[]};f.hemi=new yr("#4a4470","#3a2415",.6),a.add(f.hemi),f.moon=new Sr("#9fb0e0",0),a.add(f.moon),a.add(f.moon.target);for(let re=0;re<t.spots;re++){let te=new Mr("#ffe6c4",0,60,.7,.7,1.1);re===0&&t.shadows&&(te.castShadow=!0,te.shadow.mapSize.set(t.shadowSize,t.shadowSize),te.shadow.bias=-6e-4,te.shadow.normalBias=.02,te.shadow.camera.near=3,te.shadow.camera.far=80),a.add(te),a.add(te.target),f.spots.push({light:te,base:0})}for(let re=0;re<t.points;re++){let te=new br("#ffc890",0,20,1.4);a.add(te),f.points.push({light:te,base:0})}function u(re){let te=re.rig;f.hemi.color.set(te.hemi[0]),f.hemi.groundColor.set(te.hemi[1]),f.hemi.userData.base=t.spots?te.hemi[2]:te.hemi[3],f.moon.userData.base=re.sky&&te.moon?re.sky.moonLight.intensity:0,re.sky&&f.moon.position.copy(re.sky.moonLight.dir).multiplyScalar(80),f.spots.forEach((Se,J)=>{let $=te.spots[J];Se.base=$?$.base:0,Se.layer=$&&$.layer||"key",$&&(Se.light.position.set($.pos[0],$.pos[1],$.pos[2]),Se.light.target.position.set($.to[0],$.to[1],$.to[2]),Se.light.color.set($.color),Se.light.distance=$.distance,Se.light.angle=$.angle)}),f.points.forEach((Se,J)=>{let $=J===0?re.garboLight:te.points[J-1];Se.base=$&&J>0?$.base:0,Se.layer=J===0?"garbo":$&&$.layer||"practical",$&&(Se.light.position.set($.pos[0],$.pos[1],$.pos[2]),Se.light.color.set($.color),Se.light.distance=$.distance)}),s.shadowMap.needsUpdate=!0}let d={},p=null,_=null,g=1,m=1,y=1,b="",v="traditional";function S(re,te){if(!d[re]){let Se=id(re,t,te,e.furnish?e.furnish(re):null);Se.ready=!1,Se.root.visible=!1,a.add(Se.root);let J=()=>{Se.ready=!0,x()};(s.compileAsync?s.compileAsync(Se.root,o,r):Promise.resolve(s.compile(Se.root,o,r))).then(J,J),d[re]=Se}return d[re]}let w=["outdoors","stadium","sheri"],E=!1;function x(){if(E||q)return;let re=w.find(Se=>!d[Se]);if(!re||!p)return;E=!0;let te=()=>{E=!1,!d[re]&&!q&&S(re,v)};window.requestIdleCallback?requestIdleCallback(te,{timeout:2500}):setTimeout(te,600)}function A(re){p&&(p.root.visible=!1),p=re,p.root.visible=!0,r.fog=p.fog,p.fogBase=p.fog.density,u(p),_=null}function I(re){o.position.set(re.x,re.y,-re.z),o.rotation.set(0,-(re.yaw||0),0),o.updateMatrixWorld();let te=o.near,Se=o.far,J=re.F;o.projectionMatrix.makePerspective(-re.cx*te/J,(re.W-re.cx)*te/J,re.cy*te/J,-(re.H-re.cy)*te/J,te,Se),o.projectionMatrixInverse.copy(o.projectionMatrix).invert()}function R(){let re=i.getBoundingClientRect();g=Math.max(1,re.width),m=Math.max(1,re.height);let te=Af(Math.sqrt(t.pixels*y*y/(g*m)),.5,Math.min(2,window.devicePixelRatio||1));n.style.width=i.style.width||"100%",n.style.height=i.style.height||"100%",s.setPixelRatio(te),s.setSize(g,m,!1),c.setPixelRatio(te),c.setSize(g,m),h.resolution.set(Math.max(64,Math.round(g*te*t.bloomScale)),Math.max(64,Math.round(m*te*t.bloomScale)))}window.ResizeObserver?new ResizeObserver(R).observe(i):window.addEventListener("resize",R),R();let P=0,L=16,C=0,U=1,z=0,N="";function W(re){if(P){let te=re-P;te<250&&(L+=(te-L)*.05),C=L>30?C+te:0,C>(t.name==="desktop"?2500:1400)&&(y>.6?(y=Math.max(.6,y-.2),R()):h.enabled?h.enabled=!1:U=2,C=0,L=20)}P=re}let B=new ml,k=0,q=!1;n.addEventListener("webglcontextlost",re=>{re.preventDefault(),q=!0}),n.addEventListener("webglcontextrestored",()=>{q=!1,Object.keys(d).forEach(re=>delete d[re]),p=null});function oe(re,te){if(q)return!1;v=te.theme;let Se=S(te.venue,te.theme);if(!Se.ready)return p||(s.setRenderTarget(null),s.clear()),"wait";p!==Se&&(A(Se),x());let J=(i.style.width||"")+"|"+(i.style.height||"");J!==b&&(b=J,R()),W(performance.now());let $=Ii[te.theme]||Ii.traditional;_!==te.theme&&(p.kit.flags.setPalette($.flags),_&&(p.lightMaps.repaint($),p.garbo.setTheme($)),_=te.theme);let Te=k?Math.min(.1,Math.max(0,te.T-k)):.016;k=te.T;let Ge=B.update(Te,te),we=[re.x,re.y,re.z,re.yaw,re.F,re.cx,re.cy,re.W,re.H].map(Oe=>Math.round(Oe*100)).join(","),Qe=we!==N;if(N=we,z++,!Qe&&U>1&&z%U&&!te.reduce||!Qe&&te.reduce&&p._drawn)return!0;I(re);let Pt=te.reduce?0:te.pulse||0,nt=te.reduce?1:.85+.1*Math.sin(te.t*11)*Math.sin(te.t*7.3)+.05*Math.sin(te.t*23),Xe={...Ge,garbo:Ge.garbo*B.garboLit*nt},ut={TH:$,pulse:Pt,lv:Xe,on:te.on,reduce:te.reduce,close:te.listener==="stage"||te.dj};return p.sky&&p.sky.root.position.set(re.x,0,re.z),p.kit.bulbs.update(te.t,$.bulbs,Xe,Pt,te.reduce,[1,1,te.on?1:0]),p.kit.bigBulbs.update(te.t,$.bulbs,Xe,Pt,te.reduce,[1,1,1]),p.kit.pools.update(Xe,$.glow,te.t,te.reduce),p.kit.flames.update(te.t,Xe,te.reduce),Df(p.kit,Xe),p.lightMaps.set(Xe,te.reduce?0:te.t),te.reduce||p.kit.flags.pose(te.T),p.kit.beams.forEach(Oe=>{Oe.beam.aim(Oe.from,Oe.to),Oe.beam.set(Oe.hex||"#fff0d8",.6*Xe[Oe.layer||"key"])}),(p.umbrellas||[]).forEach((Oe,_t)=>Oe.update(te.T,te.reduce,_t)),p.garbo.update(te.t,Xe.garbo,te.reduce,te.garboA==null||te.garboA>.3),p.stage&&p.stage.update(te.T,ut),p.update&&p.update(te.T,ut),p.furnish&&p.furnish.update(te.T,{...ut,beat:te.beat||0}),f.points.forEach((Oe,_t)=>{Oe.light.intensity=_t===0?(p.id==="sheri"?9:12)*Xe.garbo:Oe.base*Xe[Oe.layer]}),f.spots.forEach(Oe=>{Oe.light.intensity=Oe.base*Xe[Oe.layer]}),f.hemi.intensity=f.hemi.userData.base*Xe.ambient,f.moon.intensity=f.moon.userData.base*Xe.ambient,p.fog&&(p.fog.density=p.fogBase*(1+.3*(te.aarti||0))),s.toneMappingExposure=p.exposure*(1-.15*(te.aarti||0)),h.strength=.8+.25*Pt*Xe.show,c.render(),p._drawn=!0,!0}function he(re,te,Se){return!p||q||!p._drawn?!1:(c.render(),re.drawImage(n,0,0,te,Se),!0)}return{draw:oe,resize:R,snapshot:he,tier:t.name,renderer:s,debug:()=>({V:p,scene:r,camera:o,QP:y,every:U,bloom:h.enabled,frameMs:L,venues:Object.keys(d),ready:Object.keys(d).filter(re=>d[re].ready)})}}!/[?&]venue=2d(&|$)/.test(location.search)&&rd()?(window.GarbaVenueBackdrop={create(i,e){let t=ad(i,e);return window.GarbaVenue3D=t,t}},document.documentElement.classList.add("venue-3d")):window.GarbaVenueBackdrop=!1;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
