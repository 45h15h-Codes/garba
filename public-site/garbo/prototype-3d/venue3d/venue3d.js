/* PlayGarba 3D venues (source: venue3d/src). Bundles three.js r186 (MIT, (c) 2010-2025 three.js authors). */
(()=>{var xu=0,_c=1,_u=2;var Rr=1,uo=2,Ds=3,wi=0,on=1,tt=2,Cn=0,Us=1,jn=2,yc=3,vc=4,yu=5;var qi=100,vu=101,Mu=102,bu=103,Su=104,Eu=200,Tu=201,wu=202,Au=203,Mc=204,bc=205,Ru=206,Cu=207,Pu=208,Iu=209,Lu=210,Du=211,Uu=212,Nu=213,Fu=214,La=0,Da=1,Ua=2,Ms=3,Na=4,Fa=5,Ba=6,Oa=7,fo=0,Bu=1,Ou=2,Hn=0,Cr=1,Pr=2,Ir=3,Yi=4,Lr=5,Dr=6,Ur=7;var Sc=300,Ai=301,Zi=302,po=303,mo=304,Nr=306,rn=1e3,Yn=1001,Ha=1002,en=1003,Hu=1004;var Fr=1005;var an=1006,go=1007;var Ri=1008;var _n=1009,Ec=1010,Tc=1011,Ns=1012,xo=1013,zn=1014,Pn=1015,$t=1016,_o=1017,yo=1018,Fs=1020,wc=35902,Ac=35899,Rc=1021,Cc=1022,In=1023,Zn=1026,Ci=1027,vo=1028,Mo=1029,Pi=1030,bo=1031;var So=1033,Br=33776,Or=33777,Hr=33778,zr=33779,Eo=35840,To=35841,wo=35842,Ao=35843,Ro=36196,Co=37492,Po=37496,Io=37488,Lo=37489,kr=37490,Do=37491,Uo=37808,No=37809,Fo=37810,Bo=37811,Oo=37812,Ho=37813,zo=37814,ko=37815,Go=37816,Vo=37817,Wo=37818,Xo=37819,qo=37820,Yo=37821,Zo=36492,$o=36494,Jo=36495,Ko=36283,Qo=36284,Gr=36285,jo=36286;var nr=2300,za=2301,Pa=2302,lc=2303,cc=2400,hc=2401,uc=2402;var zu=3200;var Vr=0,ku=1,mn="",Bt="srgb",ir="srgb-linear",sr="linear",pt="srgb";var Ia=7680;var Gu=519,Vu=512,Wu=513,Xu=514,el=515,qu=516,Yu=517,tl=518,Zu=519,Pc=35044;var Ic="300 es",On=2e3,bs=2001;function Td(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $u(){let i=rr("canvas");return i.style.display="block",i}var zh={},Ss=null;function ar(...i){let e="THREE."+i.shift();Ss?Ss("log",e,...i):console.log(e,...i)}function Ju(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xe(...i){i=Ju(i);let e="THREE."+i.shift();if(Ss)Ss("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Ju(i);let e="THREE."+i.shift();if(Ss)Ss("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Gi(...i){let e=i.join(" ");e in zh||(zh[e]=!0,Xe(...i))}function Ku(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Qu={[La]:Da,[Ua]:Ba,[Na]:Oa,[Ms]:Fa,[Da]:La,[Ba]:Ua,[Oa]:Na,[Fa]:Ms},$n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Bl=Math.PI/180,or=180/Math.PI;function Mi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function ct(i,e,t){return Math.max(e,Math.min(t,i))}function Ad(i,e){return(i%e+e)%e}function Ol(i,e,t){return(1-t)*i+t*e}function qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Fc=class Fc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fc.prototype.isVector2=!0;var de=Fc,Nt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(f!==_||l!==u||c!==p||h!==g){let m=l*u+c*p+h*g+f*_;m<0&&(u=-u,p=-p,g=-g,_=-_,m=-m);let d=1-o;if(m<.9995){let b=Math.acos(m),w=Math.sin(b);d=Math.sin(d*b)/w,o=Math.sin(o*b)/w,l=l*d+u*o,c=c*d+p*o,h=h*d+g*o,f=f*d+_*o}else{l=l*d+u*o,c=c*d+p*o,h=h*d+g*o,f=f*d+_*o;let b=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=b,c*=b,h*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*f+l*p-c*u,e[t+1]=l*g+h*u+c*f-o*p,e[t+2]=c*g+h*p+o*u-l*f,e[t+3]=h*g-o*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"YZX":this._x=u*h*f+c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f-u*p*g;break;case"XZY":this._x=u*h*f-c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f+u*p*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Bc=class Bc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hl.copy(this).projectOnVector(e),this.sub(Hl)}reflect(e){return this.sub(Hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bc.prototype.isVector3=!0;var N=Bc,Hl=new N,kh=new Nt,Oc=class Oc{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],b=s[1],w=s[4],y=s[7],E=s[2],v=s[5],S=s[8];return r[0]=a*_+o*b+l*E,r[3]=a*m+o*w+l*v,r[6]=a*d+o*y+l*S,r[1]=c*_+h*b+f*E,r[4]=c*m+h*w+f*v,r[7]=c*d+h*y+f*S,r[2]=u*_+p*b+g*E,r[5]=u*m+p*w+g*v,r[8]=u*d+p*y+g*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=t*f+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Gi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zl.makeScale(e,t)),this}rotate(e){return Gi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zl.makeRotation(-e)),this}translate(e,t){return Gi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Oc.prototype.isMatrix3=!0;var Qe=Oc,zl=new Qe,Gh=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rd(){let i={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pt&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mn?sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ir]:{primaries:e,whitePoint:n,transfer:sr,toXYZ:Gh,fromXYZ:Vh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:Gh,fromXYZ:Vh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),i}var ot=Rd();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ns,ka=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ns===void 0&&(ns=rr("canvas")),ns.width=e.width,ns.height=e.height;let s=ns.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ns}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=rr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cd=0,Es=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(kl(s[a].image)):r.push(kl(s[a]))}else r=kl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function kl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var Pd=0,Gl=new N,pn=class i extends $n{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Yn,s=Yn,r=an,a=Ri,o=In,l=_n,c=i.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Mi(),this.name="",this.source=new Es(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gl).x}get height(){return this.source.getSize(Gl).y}get depth(){return this.source.getSize(Gl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rn:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rn:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Sc;pn.DEFAULT_ANISOTROPY=1;var Hc=class Hc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,y=(p+1)/2,E=(d+1)/2,v=(h+u)/4,S=(f+_)/4,x=(g+m)/4;return w>y&&w>E?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=v/n,r=S/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=v/s,r=x/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=S/r,s=x/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-_)/b,this.z=(u-h)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hc.prototype.isVector4=!0;var Pt=Hc,Ga=class extends $n{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new pn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Es(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ot=class extends Ga{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},lr=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Va=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ho=class ho{constructor(e,t,n,s,r,a,o,l,c,h,f,u,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,p,g,_,m)}set(e,t,n,s,r,a,o,l,c,h,f,u,p,g,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ho().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),a=1/is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,p=a*f,g=o*h,_=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*f,g=c*h,_=c*f;t[0]=u+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*f,g=c*h,_=c*f;t[0]=u-_*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*f,g=o*h,_=o*f;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+_,t[1]=l*f,t[5]=_*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*f,t[8]=g*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*f+g,t[10]=u-_*f}else if(e.order==="XZY"){let u=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+_,t[5]=a*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*h,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Id,e,Ld)}lookAt(e,t,n){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),gi.crossVectors(n,vn),gi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),gi.crossVectors(n,vn)),gi.normalize(),ia.crossVectors(vn,gi),s[0]=gi.x,s[4]=ia.x,s[8]=vn.x,s[1]=gi.y,s[5]=ia.y,s[9]=vn.y,s[2]=gi.z,s[6]=ia.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],b=n[3],w=n[7],y=n[11],E=n[15],v=s[0],S=s[4],x=s[8],T=s[12],C=s[1],U=s[5],R=s[9],I=s[13],P=s[2],D=s[6],k=s[10],W=s[14],B=s[3],O=s[7],F=s[11],X=s[15];return r[0]=a*v+o*C+l*P+c*B,r[4]=a*S+o*U+l*D+c*O,r[8]=a*x+o*R+l*k+c*F,r[12]=a*T+o*I+l*W+c*X,r[1]=h*v+f*C+u*P+p*B,r[5]=h*S+f*U+u*D+p*O,r[9]=h*x+f*R+u*k+p*F,r[13]=h*T+f*I+u*W+p*X,r[2]=g*v+_*C+m*P+d*B,r[6]=g*S+_*U+m*D+d*O,r[10]=g*x+_*R+m*k+d*F,r[14]=g*T+_*I+m*W+d*X,r[3]=b*v+w*C+y*P+E*B,r[7]=b*S+w*U+y*D+E*O,r[11]=b*x+w*R+y*k+E*F,r[15]=b*T+w*I+y*W+E*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15],b=l*p-c*u,w=o*p-c*f,y=o*u-l*f,E=a*p-c*h,v=a*u-l*h,S=a*f-o*h;return t*(_*b-m*w+d*y)-n*(g*b-m*E+d*v)+s*(g*w-_*E+d*S)-r*(g*y-_*v+m*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],b=t*o-n*a,w=t*l-s*a,y=t*c-r*a,E=n*l-s*o,v=n*c-r*o,S=s*c-r*l,x=h*_-f*g,T=h*m-u*g,C=h*d-p*g,U=f*m-u*_,R=f*d-p*_,I=u*d-p*m,P=b*I-w*R+y*U+E*C-v*T+S*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/P;return e[0]=(o*I-l*R+c*U)*D,e[1]=(s*R-n*I-r*U)*D,e[2]=(_*S-m*v+d*E)*D,e[3]=(u*v-f*S-p*E)*D,e[4]=(l*C-a*I-c*T)*D,e[5]=(t*I-s*C+r*T)*D,e[6]=(m*y-g*S-d*w)*D,e[7]=(h*S-u*y+p*w)*D,e[8]=(a*R-o*C+c*x)*D,e[9]=(n*C-t*R-r*x)*D,e[10]=(g*v-_*y+d*b)*D,e[11]=(f*y-h*v-p*b)*D,e[12]=(o*T-a*U-l*x)*D,e[13]=(t*U-n*T+s*x)*D,e[14]=(_*w-g*E-m*b)*D,e[15]=(h*E-f*w+u*b)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,p=r*h,g=r*f,_=a*h,m=a*f,d=o*f,b=l*c,w=l*h,y=l*f,E=n.x,v=n.y,S=n.z;return s[0]=(1-(_+d))*E,s[1]=(p+y)*E,s[2]=(g-w)*E,s[3]=0,s[4]=(p-y)*v,s[5]=(1-(u+d))*v,s[6]=(m+b)*v,s[7]=0,s[8]=(g+w)*S,s[9]=(m-b)*S,s[10]=(1-(u+_))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=is.set(s[0],s[1],s[2]).length(),o=is.set(s[4],s[5],s[6]).length(),l=is.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Un.copy(this);let c=1/a,h=1/o,f=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,t.setFromRotationMatrix(Un),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=On,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===On)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===bs)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=On,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===On)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===bs)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ho.prototype.isMatrix4=!0;var Fe=ho,is=new N,Un=new Fe,Id=new N(0,0,0),Ld=new N(1,1,1),gi=new N,ia=new N,vn=new N,Wh=new Fe,Xh=new Nt,Ht=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ht.DEFAULT_ORDER="XYZ";var cr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dd=0,qh=new N,ss=new Nt,ii=new Fe,sa=new N,qs=new N,Ud=new N,Nd=new Nt,Yh=new N(1,0,0),Zh=new N(0,1,0),$h=new N(0,0,1),Jh={type:"added"},Fd={type:"removed"},rs={type:"childadded",child:null},Vl={type:"childremoved",child:null},Wt=class i extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new Ht,n=new Nt,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Qe}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis(Zh,e)}rotateZ(e){return this.rotateOnAxis($h,e)}translateOnAxis(e,t){return qh.copy(e).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis(Zh,e)}translateZ(e){return this.translateOnAxis($h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sa.copy(e):sa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(qs,sa,this.up):ii.lookAt(sa,qs,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(ii),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jh),rs.child=e,this.dispatchEvent(rs),rs.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fd),Vl.child=e,this.dispatchEvent(Vl),Vl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jh),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,Ud),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Nd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Wt.DEFAULT_UP=new N(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ft=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bd={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Wl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var he=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=Ad(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wl(a,r,e+1/3),this.g=Wl(a,r,e),this.b=Wl(a,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return ot.workingToColorSpace(hn.copy(this),e),Math.round(ct(hn.r*255,0,255))*65536+Math.round(ct(hn.g*255,0,255))*256+Math.round(ct(hn.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(hn.copy(this),t);let n=hn.r,s=hn.g,r=hn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Bt){ot.workingToColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,s=hn.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(ra);let n=Ol(xi.h,ra.h,t),s=Ol(xi.s,ra.s,t),r=Ol(xi.l,ra.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new he;he.NAMES=ju;var Vi=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new he(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var hr=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ht,this.environmentIntensity=1,this.environmentRotation=new Ht,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Nn=new N,si=new N,Xl=new N,ri=new N,as=new N,os=new N,Kh=new N,ql=new N,Yl=new N,Zl=new N,$l=new Pt,Jl=new Pt,Kl=new Pt,li=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Nn.subVectors(e,t),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Nn.subVectors(s,t),si.subVectors(n,t),Xl.subVectors(e,t);let a=Nn.dot(Nn),o=Nn.dot(si),l=Nn.dot(Xl),c=si.dot(si),h=si.dot(Xl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return $l.setScalar(0),Jl.setScalar(0),Kl.setScalar(0),$l.fromBufferAttribute(e,t),Jl.fromBufferAttribute(e,n),Kl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector($l,r.x),a.addScaledVector(Jl,r.y),a.addScaledVector(Kl,r.z),a}static isFrontFacing(e,t,n,s){return Nn.subVectors(n,t),si.subVectors(e,t),Nn.cross(si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Nn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;as.subVectors(s,n),os.subVectors(r,n),ql.subVectors(e,n);let l=as.dot(ql),c=os.dot(ql);if(l<=0&&c<=0)return t.copy(n);Yl.subVectors(e,s);let h=as.dot(Yl),f=os.dot(Yl);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(as,a);Zl.subVectors(e,r);let p=as.dot(Zl),g=os.dot(Zl);if(g>=0&&p<=g)return t.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(os,o);let m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return Kh.subVectors(r,s),o=(f-h)/(f-h+(p-g)),t.copy(s).addScaledVector(Kh,o);let d=1/(m+_+u);return a=_*d,o=u*d,t.copy(n).addScaledVector(as,a).addScaledVector(os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),oa.subVectors(this.max,Ys),ls.subVectors(e.a,Ys),cs.subVectors(e.b,Ys),hs.subVectors(e.c,Ys),_i.subVectors(cs,ls),yi.subVectors(hs,cs),Oi.subVectors(ls,hs);let t=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-Oi.z,Oi.y,_i.z,0,-_i.x,yi.z,0,-yi.x,Oi.z,0,-Oi.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-Oi.y,Oi.x,0];return!Ql(t,ls,cs,hs,oa)||(t=[1,0,0,0,1,0,0,0,1],!Ql(t,ls,cs,hs,oa))?!1:(la.crossVectors(_i,yi),t=[la.x,la.y,la.z],Ql(t,ls,cs,hs,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ai=[new N,new N,new N,new N,new N,new N,new N,new N],Fn=new N,aa=new Jn,ls=new N,cs=new N,hs=new N,_i=new N,yi=new N,Oi=new N,Ys=new N,oa=new N,la=new N,Hi=new N;function Ql(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hi.fromArray(i,r);let o=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=e.dot(Hi),c=t.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Zt=new N,ca=new de,Od=0,St=class extends $n{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Od++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ur=class extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var fr=class extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var $e=class extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}},Hd=new Jn,Zs=new N,jl=new N,Kn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Hd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);let t=Zs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(jl)),this.expandByPoint(Zs.copy(e.center).sub(jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},zd=0,wn=new Fe,ec=new Wt,us=new N,Mn=new Jn,$s=new Jn,jt=new N,st=class i extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Td(e)?fr:ur)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Mn.min,$s.min),Mn.expandByPoint(jt),jt.addVectors(Mn.max,$s.max),Mn.expandByPoint(jt)):(Mn.expandByPoint($s.min),Mn.expandByPoint($s.max))}Mn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)jt.fromBufferAttribute(o,c),l&&(us.fromBufferAttribute(e,c),jt.add(us)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new St(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new N,l[x]=new N;let c=new N,h=new N,f=new N,u=new de,p=new de,g=new de,_=new N,m=new N;function d(x,T,C){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,C),u.fromBufferAttribute(r,x),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,C),h.sub(c),f.sub(c),p.sub(u),g.sub(u);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(U),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(U),o[x].add(_),o[T].add(_),o[C].add(_),l[x].add(m),l[T].add(m),l[C].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let x=0,T=b.length;x<T;++x){let C=b[x],U=C.start,R=C.count;for(let I=U,P=U+R;I<P;I+=3)d(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let w=new N,y=new N,E=new N,v=new N;function S(x){E.fromBufferAttribute(s,x),v.copy(E);let T=o[x];w.copy(T),w.sub(E.multiplyScalar(E.dot(T))).normalize(),y.crossVectors(v,T);let U=y.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,U)}for(let x=0,T=b.length;x<T;++x){let C=b[x],U=C.start,R=C.count;for(let I=U,P=U+R;I<P;I+=3)S(e.getX(I+0)),S(e.getX(I+1)),S(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,f=new N;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let d=0;d<h;d++)u[g++]=c[p++]}return new St(u,h,f)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pc,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},dn=new N,dr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ar("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ar("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},tc=new N,kd=new N,Gd=new Qe,Bn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=tc.subVectors(n,t).cross(kd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(tc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Gd.getNormalMatrix(e),s=this.coplanarPoint(tc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Vd=0,An=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Us,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=bc,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ia,this.stencilZFail=Ia,this.stencilZPass=Ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new he().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new de().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ws=class extends An{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fs,Js=new N,ds=new N,ps=new N,ms=new de,Ks=new de,ef=new Fe,ha=new N,Qs=new N,ua=new N,Qh=new de,nc=new de,jh=new de,pr=class extends Wt{constructor(e=new ws){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new st;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wa(t,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new dr(n,3,0,!1)),fs.setAttribute("uv",new dr(n,2,3,!1))}this.geometry=fs,this.material=e,this.center=new de(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),ef.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-ps.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;fa(ha.set(-.5,-.5,0),ps,a,ds,s,r),fa(Qs.set(.5,-.5,0),ps,a,ds,s,r),fa(ua.set(.5,.5,0),ps,a,ds,s,r),Qh.set(0,0),nc.set(1,0),jh.set(1,1);let o=e.ray.intersectTriangle(ha,Qs,ua,!1,Js);if(o===null&&(fa(Qs.set(-.5,.5,0),ps,a,ds,s,r),nc.set(0,1),o=e.ray.intersectTriangle(ha,ua,Qs,!1,Js),o===null))return;let l=e.ray.origin.distanceTo(Js);l<e.near||l>e.far||t.push({distance:l,point:Js.clone(),uv:li.getInterpolation(Js,ha,Qs,ua,Qh,nc,jh,new de),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function fa(i,e,t,n,s,r){ms.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ks.x=r*ms.x-s*ms.y,Ks.y=s*ms.x+r*ms.y):Ks.copy(ms),i.copy(e),i.x+=Ks.x,i.y+=Ks.y,i.applyMatrix4(ef)}var oi=new N,ic=new N,da=new N,pa=new N,As=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ic.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),pa.copy(this.origin).sub(ic);let r=e.distanceTo(t)*.5,a=-this.direction.dot(da),o=pa.dot(this.direction),l=-pa.dot(da),c=pa.lengthSq(),h=Math.abs(1-a*a),f,u,p,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let _=1/h;f*=_,u*=_,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ic).addScaledVector(da,u),p}intersectSphere(e,t){if(e.radius<0)return null;oi.subVectors(e.center,this.origin);let n=oi.dot(this.direction),s=oi.dot(oi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,p=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,d=n.x-a.x,b=n.y-a.y,w=n.z-a.z,y=Math.abs(l),E=Math.abs(c),v=Math.abs(h),S,x,T,C,U,R,I,P,D,k,W,B;if(y>=E&&y>=v?(T=l,R=f,D=g,B=d,l>=0?(S=c,x=h,C=u,U=p,I=_,P=m,k=b,W=w):(S=h,x=c,C=p,U=u,I=m,P=_,k=w,W=b)):E>=v?(T=c,R=u,D=_,B=b,c>=0?(S=h,x=l,C=p,U=f,I=m,P=g,k=w,W=d):(S=l,x=h,C=f,U=p,I=g,P=m,k=d,W=w)):(T=h,R=p,D=m,B=w,h>=0?(S=l,x=c,C=f,U=u,I=g,P=_,k=d,W=b):(S=c,x=l,C=u,U=f,I=_,P=g,k=b,W=d)),T===0)return null;let O=S/T,F=x/T,X=1/T,oe=C-O*R,ce=U-F*R,Ge=I-O*D,Ye=P-F*D,ht=k-O*B,Q=W-F*B,se=ht*Ye-Q*Ge,ye=oe*Q-ce*ht,Ve=Ge*ce-Ye*oe;if(s){if(se<0||ye<0||Ve<0)return null}else if((se<0||ye<0||Ve<0)&&(se>0||ye>0||Ve>0))return null;let ve=se+ye+Ve;if(ve===0)return null;let nt=X*(se*R+ye*D+Ve*B);return(ve>0?nt<0:nt>0)?null:this.at(nt/ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Et=class extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},eu=new Fe,zi=new As,ma=new Kn,tu=new N,ga=new N,xa=new N,_a=new N,sc=new N,ya=new N,nu=new N,va=new N,ee=class extends Wt{constructor(e=new st,t=new Et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ya.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(sc.fromBufferAttribute(f,e),a?ya.addScaledVector(sc,h):ya.addScaledVector(sc.sub(t),h))}t.add(ya)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),zi.copy(e.ray).recast(e.near),!(ma.containsPoint(zi.origin)===!1&&(zi.intersectSphere(ma,tu)===null||zi.origin.distanceToSquared(tu)>(e.far-e.near)**2))&&(eu.copy(r).invert(),zi.copy(e.ray).applyMatrix4(eu),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,E=w;y<E;y+=3){let v=o.getX(y),S=o.getX(y+1),x=o.getX(y+2);s=Ma(this,d,e,n,c,h,f,v,S,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let b=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);s=Ma(this,a,e,n,c,h,f,b,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,E=w;y<E;y+=3){let v=y,S=y+1,x=y+2;s=Ma(this,d,e,n,c,h,f,v,S,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let b=m,w=m+1,y=m+2;s=Ma(this,a,e,n,c,h,f,b,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Wd(i,e,t,n,s,r,a,o){let l;if(e.side===on?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===wi,o),l===null)return null;va.copy(o),va.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(va);return c<t.near||c>t.far?null:{distance:c,point:va.clone(),object:i}}function Ma(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ga),i.getVertexPosition(l,xa),i.getVertexPosition(c,_a);let h=Wd(i,e,t,n,ga,xa,_a,nu);if(h){let f=new N;li.getBarycoord(nu,ga,xa,_a,f),s&&(h.uv=li.getInterpolatedAttribute(s,o,l,c,f,new de)),r&&(h.uv1=li.getInterpolatedAttribute(r,o,l,c,f,new de)),a&&(h.normal=li.getInterpolatedAttribute(a,o,l,c,f,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new N,materialIndex:0};li.getNormal(ga,xa,_a,u.normal),h.face=u,h.barycoord=f}return h}var Wi=class extends pn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=en,h=en,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xt=class extends St{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gs=new Fe,iu=new Fe,ba=[],su=new Jn,Xd=new Fe,js=new ee,er=new Kn,xt=class extends ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xt(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),su.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(su)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),er.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),e.ray.intersectsSphere(er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gs),iu.multiplyMatrices(n,gs),js.matrixWorld=iu,js.raycast(e,ba);for(let a=0,o=ba.length;a<o;a++){let l=ba[a];l.instanceId=r,l.object=this,t.push(l)}ba.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xt(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wi(new Float32Array(s*this.count),s,this.count,vo,Pn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ki=new Kn,qd=new de(.5,.5),Sa=new N,Rs=class{constructor(e=new Bn,t=new Bn,n=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],p=r[7],g=r[8],_=r[9],m=r[10],d=r[11],b=r[12],w=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-a,p-h,d-g,E-b).normalize(),s[1].setComponents(c+a,p+h,d+g,E+b).normalize(),s[2].setComponents(c+o,p+f,d+_,E+w).normalize(),s[3].setComponents(c-o,p-f,d-_,E-w).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,p-u,d-m,E-y).normalize();else if(s[4].setComponents(c-l,p-u,d-m,E-y).normalize(),t===On)s[5].setComponents(c+l,p+u,d+m,E+y).normalize();else if(t===bs)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){ki.center.set(0,0,0);let t=qd.distanceTo(e.center);return ki.radius=.7071067811865476+t,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Sa.x=s.normal.x>0?e.max.x:e.min.x,Sa.y=s.normal.y>0?e.max.y:e.min.y,Sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Cs=class extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xa=new N,qa=new N,ru=new Fe,tr=new As,Ea=new Kn,rc=new N,au=new N,Ya=class extends Wt{constructor(e=new st,t=new Cs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Xa.fromBufferAttribute(t,s-1),qa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Xa.distanceTo(qa);e.setAttribute("lineDistance",new $e(n,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;ru.copy(s).invert(),tr.copy(e.ray).applyMatrix4(ru);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){let d=h.getX(_),b=h.getX(_+1),w=Ta(this,e,tr,l,d,b,_);w&&t.push(w)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(p),d=Ta(this,e,tr,l,_,m,g-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){let d=Ta(this,e,tr,l,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){let _=Ta(this,e,tr,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ta(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Xa.fromBufferAttribute(o,s),qa.fromBufferAttribute(o,r),t.distanceSqToSegment(Xa,qa,rc,au)>n)return;rc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(rc);if(!(c<e.near||c>e.far))return{distance:c,point:au.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var ou=new N,lu=new N,mr=class extends Ya{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ou.fromBufferAttribute(t,s),lu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ou.distanceTo(lu);e.setAttribute("lineDistance",new $e(n,1))}else Xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ps=class extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cu=new Fe,fc=new As,wa=new Kn,Aa=new N,gr=class extends Wt{constructor(e=new st,t=new Ps){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),wa.radius+=r,e.ray.intersectsSphere(wa)===!1)return;cu.copy(s).invert(),fc.copy(e.ray).applyMatrix4(cu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=u,_=p;g<_;g++){let m=c.getX(g);Aa.fromBufferAttribute(f,m),hu(Aa,m,l,s,e,t,this)}}else{let u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=u,_=p;g<_;g++)Aa.fromBufferAttribute(f,g),hu(Aa,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hu(i,e,t,n,s,r,a){let o=fc.distanceSqToPoint(i);if(o<t){let l=new N;fc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var xr=class extends pn{constructor(e=[],t=Ai,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Rn=class extends pn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bi=class extends pn{constructor(e,t,n=zn,s,r,a,o=en,l=en,c,h=Zn,f=1){if(h!==Zn&&h!==Ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Es(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Za=class extends bi{constructor(e,t=zn,n=Ai,s,r,a=en,o=en,l,c=Zn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},_r=class extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ue=class i extends st{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(f,2));function g(_,m,d,b,w,y,E,v,S,x,T){let C=y/S,U=E/x,R=y/2,I=E/2,P=v/2,D=S+1,k=x+1,W=0,B=0,O=new N;for(let F=0;F<k;F++){let X=F*U-I;for(let oe=0;oe<D;oe++){let ce=oe*C-R;O[_]=ce*b,O[m]=X*w,O[d]=P,c.push(O.x,O.y,O.z),O[_]=0,O[m]=0,O[d]=v>0?1:-1,h.push(O.x,O.y,O.z),f.push(oe/S),f.push(1-F/x),W+=1}}for(let F=0;F<x;F++)for(let X=0;X<S;X++){let oe=u+X+D*F,ce=u+X+D*(F+1),Ge=u+(X+1)+D*(F+1),Ye=u+(X+1)+D*F;l.push(oe,ce,Ye),l.push(ce,Ge,Ye),B+=6}o.addGroup(p,B,T),p+=B,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var gn=class i extends st{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new N,h=new de;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let p=n+f/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Je=class i extends st{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],p=[],g=0,_=[],m=n/2,d=0;b(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new $e(f,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(p,2));function b(){let y=new N,E=new N,v=0,S=(t-e)/n;for(let x=0;x<=r;x++){let T=[],C=x/r,U=C*(t-e)+e;for(let R=0;R<=s;R++){let I=R/s,P=I*l+o,D=Math.sin(P),k=Math.cos(P);E.x=U*D,E.y=-C*n+m,E.z=U*k,f.push(E.x,E.y,E.z),y.set(D,S,k).normalize(),u.push(y.x,y.y,y.z),p.push(I,1-C),T.push(g++)}_.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let C=_[T][x],U=_[T+1][x],R=_[T+1][x+1],I=_[T][x+1];(e>0||T!==0)&&(h.push(C,U,I),v+=3),(t>0||T!==r-1)&&(h.push(U,R,I),v+=3)}c.addGroup(d,v,0),d+=v}function w(y){let E=g,v=new de,S=new N,x=0,T=y===!0?e:t,C=y===!0?1:-1;for(let R=1;R<=s;R++)f.push(0,m*C,0),u.push(0,C,0),p.push(.5,.5),g++;let U=g;for(let R=0;R<=s;R++){let P=R/s*l+o,D=Math.cos(P),k=Math.sin(P);S.x=T*k,S.y=m*C,S.z=T*D,f.push(S.x,S.y,S.z),u.push(0,C,0),v.x=D*.5+.5,v.y=k*.5*C+.5,p.push(v.x,v.y),g++}for(let R=0;R<s;R++){let I=E+R,P=U+R;y===!0?h.push(P,P+1,I):h.push(P+1,P,I),x+=3}c.addGroup(d,x,y===!0?1:2),d+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},yr=class i extends Je{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$a=class i extends st{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let w=new N,y=new N,E=new N;for(let v=0;v<t.length;v+=3)p(t[v+0],w),p(t[v+1],y),p(t[v+2],E),l(w,y,E,b)}function l(b,w,y,E){let v=E+1,S=[];for(let x=0;x<=v;x++){S[x]=[];let T=b.clone().lerp(y,x/v),C=w.clone().lerp(y,x/v),U=v-x;for(let R=0;R<=U;R++)R===0&&x===v?S[x][R]=T:S[x][R]=T.clone().lerp(C,R/U)}for(let x=0;x<v;x++)for(let T=0;T<2*(v-x)-1;T++){let C=Math.floor(T/2);T%2===0?(u(S[x][C+1]),u(S[x+1][C]),u(S[x][C])):(u(S[x][C+1]),u(S[x+1][C+1]),u(S[x+1][C]))}}function c(b){let w=new N;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(b),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function h(){let b=new N;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];let y=m(b)/2/Math.PI+.5,E=d(b)/Math.PI+.5;a.push(y,1-E)}g(),f()}function f(){for(let b=0;b<a.length;b+=6){let w=a[b+0],y=a[b+2],E=a[b+4],v=Math.max(w,y,E),S=Math.min(w,y,E);v>.9&&S<.1&&(w<.2&&(a[b+0]+=1),y<.2&&(a[b+2]+=1),E<.2&&(a[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function p(b,w){let y=b*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function g(){let b=new N,w=new N,y=new N,E=new N,v=new de,S=new de,x=new de;for(let T=0,C=0;T<r.length;T+=9,C+=6){b.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),v.set(a[C+0],a[C+1]),S.set(a[C+2],a[C+3]),x.set(a[C+4],a[C+5]),E.copy(b).add(w).add(y).divideScalar(3);let U=m(E);_(v,C+0,b,U),_(S,C+2,w,U),_(x,C+4,y,U)}}function _(b,w,y,E){E<0&&b.x===1&&(a[w]=b.x-1),y.x===0&&y.z===0&&(a[w]=E/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var xn=class i extends $a{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},tn=class i extends st{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ct(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,f=new N,u=new de,p=new N,g=new N,_=new N,m=0,d=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,d=e[b+1].y-e[b].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[b+1].x-e[b].x,d=e[b+1].y-e[b].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let b=0;b<=t;b++){let w=n+b*h*s,y=Math.sin(w),E=Math.cos(w);for(let v=0;v<=e.length-1;v++){f.x=e[v].x*y,f.y=e[v].y,f.z=e[v].x*E,a.push(f.x,f.y,f.z),u.x=b/t,u.y=v/(e.length-1),o.push(u.x,u.y);let S=l[3*v+0]*y,x=l[3*v+1],T=l[3*v+0]*E;c.push(S,x,T)}}for(let b=0;b<t;b++)for(let w=0;w<e.length-1;w++){let y=w+b*e.length,E=y,v=y+e.length,S=y+e.length+1,x=y+1;r.push(E,v,x),r.push(S,x,v)}this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("uv",new $e(o,2)),this.setAttribute("normal",new $e(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var qe=class i extends st{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){let b=d*u-a;for(let w=0;w<c;w++){let y=w*f-r;g.push(y,-b,0),_.push(0,0,1),m.push(w/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){let w=b+c*d,y=b+c*(d+1),E=b+1+c*(d+1),v=b+1+c*d;p.push(w,y,v),p.push(y,E,v)}this.setIndex(p),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ft=class i extends st{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new N,u=new N,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){let b=[],w=d/n,y=a+w*o,E=e*Math.cos(y),v=Math.sqrt(e*e-E*E),S=0;d===0&&a===0?S=.5/t:d===n&&l===Math.PI&&(S=-.5/t);for(let x=0;x<=t;x++){let T=x/t,C=s+T*r;f.x=-v*Math.cos(C),f.y=E,f.z=v*Math.sin(C),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),m.push(T+S,1-w),b.push(c++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<t;b++){let w=h[d][b+1],y=h[d][b],E=h[d+1][b],v=h[d+1][b+1];(d!==0||a>0)&&p.push(w,y,v),(d!==n-1||l<Math.PI)&&p.push(y,E,v)}this.setIndex(p),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var nn=class i extends st{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new N,p=new N,g=new N;for(let _=0;_<=n;_++){let m=a+_/n*o;for(let d=0;d<=s;d++){let b=d/s*r;p.x=(e+t*Math.cos(m))*Math.cos(b),p.y=(e+t*Math.cos(m))*Math.sin(b),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),f.push(d/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let d=(s+1)*_+m-1,b=(s+1)*(_-1)+m-1,w=(s+1)*(_-1)+m,y=(s+1)*_+m;l.push(d,b,y),l.push(b,w,y)}this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function $i(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(uu(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(uu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=$i(i[t]);for(let s in n)e[s]=n[s]}return e}function uu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Yd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Lc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var hi={clone:$i,merge:un},Zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tt=class extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zd,this.fragmentShader=$d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=Yd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new he().setHex(s.value);break;case"v2":this.uniforms[n].value=new de().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Fe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Is=class extends Tt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ze=class extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var vr=class extends An{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=fo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ja=class extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ka=class extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ac(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Si=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qa=class extends Si{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cc,endingEnd:cc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case hc:r=e,o=2*t-n;break;case uc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hc:a=e,l=2*n-t;break;case uc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,d=-u*m+2*u*_-u*g,b=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,w=(-1-p)*m+(1.5+p)*_+.5*g,y=p*m-p*_;for(let E=0;E!==o;++E)r[E]=d*a[h+E]+b*a[c+E]+w*a[l+E]+y*a[f+E];return r}},ja=class extends Si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},eo=class extends Si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},to=class extends Si{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-t)/(s-t),_=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*g;return r}let u=o*2,p=e-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],d=p*u+g*2,b=f[d],w=f[d+1],y=e*u+g*2,E=h[y],v=h[y+1],S=Kd(n,t,b,E,s);r[g]=tf(S,_,w,v,m)}return r}};function tf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Jd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Kd(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=tf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Jd(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xs(t,this.TimeBufferType),this.values=xs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xs(e.times,Array),values:xs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ac(e.settings)&&(n.settings={inTangents:xs(e.settings.inTangents,Array),outTangents:xs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new to(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case nr:t=this.InterpolantFactoryMethodDiscrete;break;case za:t=this.InterpolantFactoryMethodLinear;break;case Pa:t=this.InterpolantFactoryMethodSmooth;break;case lc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return za;case this.InterpolantFactoryMethodSmooth:return Pa;case this.InterpolantFactoryMethodBezier:return lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ac(this.settings)&&(fu(this.settings.inTangents,e),fu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&wd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,u=f-n,p=f+n;for(let g=0;g!==n;++g){let _=t[f+g];if(_!==t[u+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ac(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function fu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=za;var Ei=class extends bn{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=nr;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends bn{constructor(e,t,n,s){super(e,t,n,s)}};no.prototype.ValueTypeName="color";var io=class extends bn{constructor(e,t,n,s){super(e,t,n,s)}};io.prototype.ValueTypeName="number";var so=class extends Si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Nt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Mr=class extends bn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new so(this.times,this.values,this.getValueSize(),e)}};Mr.prototype.ValueTypeName="quaternion";Mr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends bn{constructor(e,t,n){super(e,t,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=nr;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var ro=class extends bn{constructor(e,t,n,s){super(e,t,n,s)}};ro.prototype.ValueTypeName="vector";var ao=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nf=new ao,oo=class{constructor(e){this.manager=e!==void 0?e:nf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};oo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xi=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},br=class extends Xi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},oc=new Fe,du=new N,pu=new N,Ls=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rs,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;du.setFromMatrixPosition(e.matrixWorld),t.position.copy(du),pu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){oc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(oc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===bs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ra=new N,Ca=new Nt,Xn=new N,Sr=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ra,Ca,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,Xn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ra,Ca,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vi=new N,mu=new de,gu=new de,Jt=class extends Sr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return or*2*Math.atan(Math.tan(Bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,mu,gu),t.subVectors(gu,mu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Bl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},dc=class extends Ls{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=or*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Er=class extends Xi{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new dc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},pc=class extends Ls{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0}},Tr=class extends Xi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new pc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Qn=class extends Sr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mc=class extends Ls{constructor(){super(new Qn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wr=class extends Xi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new mc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var _s=-90,ys=1,lo=class extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Jt(_s,ys,e,t);s.layers=this.layers,this.add(s);let r=new Jt(_s,ys,e,t);r.layers=this.layers,this.add(r);let a=new Jt(_s,ys,e,t);a.layers=this.layers,this.add(a);let o=new Jt(_s,ys,e,t);o.layers=this.layers,this.add(o);let l=new Jt(_s,ys,e,t);l.layers=this.layers,this.add(l);let c=new Jt(_s,ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},co=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ar=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Qd.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Qd(){this._document.hidden===!1&&this.reset()}var Dc="\\[\\]\\.:\\/",jd=new RegExp("["+Dc+"]","g"),Uc="[^"+Dc+"]",ep="[^"+Dc.replace("\\.","")+"]",tp=/((?:WC+[\/:])*)/.source.replace("WC",Uc),np=/(WCOD+)?/.source.replace("WCOD",ep),ip=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uc),sp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uc),rp=new RegExp("^"+tp+np+ip+sp+"$"),ap=["material","materials","bones","map"],gc=class{constructor(e,t,n){let s=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jd,"")}static parseTrackName(e){let t=rp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ap.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=gc;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var my=new Float32Array(1);var zc=class zc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};zc.prototype.isMatrix2=!0;var xc=zc;function Nc(i,e,t,n){let s=op(n);switch(t){case Rc:return i*e;case vo:return i*e/s.components*s.byteLength;case Mo:return i*e/s.components*s.byteLength;case Pi:return i*e*2/s.components*s.byteLength;case bo:return i*e*2/s.components*s.byteLength;case Cc:return i*e*3/s.components*s.byteLength;case In:return i*e*4/s.components*s.byteLength;case So:return i*e*4/s.components*s.byteLength;case Br:case Or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hr:case zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case To:case Ao:return Math.max(i,16)*Math.max(e,8)/4;case Eo:case wo:return Math.max(i,8)*Math.max(e,8)/2;case Ro:case Co:case Io:case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Po:case kr:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case No:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Go:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Zo:case $o:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ko:case Qo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Gr:case jo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function op(i){switch(i){case _n:case Ec:return{byteLength:1,components:1};case Ns:case Tc:case $t:return{byteLength:2,components:1};case _o:case yo:return{byteLength:2,components:4};case zn:case xo:case Pn:return{byteLength:4,components:1};case wc:case Ac:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Tf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function cp(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){let g=f[u],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){let _=f[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,up=`#ifdef USE_ALPHAHASH
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
#endif`,fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gp=`#ifdef USE_AOMAP
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
#endif`,xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
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
#endif`,yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ep=`#ifdef USE_BUMPMAP
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Dp=`#define PI 3.141592653589793
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
} // validated`,Up=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Np=`vec3 transformedNormal = objectNormal;
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
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kp=`#ifdef USE_GRADIENTMAP
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
}`,Qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o0=`PhysicalMaterial material;
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
#endif`,l0=`uniform sampler2D dfgLUT;
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
}`,c0=`
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
#endif`,h0=`#if defined( RE_IndirectDiffuse )
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
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,d0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v0=`#if defined( USE_POINTS_UV )
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
#endif`,M0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,E0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`#ifdef USE_MORPHTARGETS
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
#endif`,A0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,D0=`#ifdef USE_NORMALMAP
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
#endif`,U0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$0=`float getShadowMask() {
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
}`,J0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K0=`#ifdef USE_SKINNING
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
#endif`,Q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j0=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,um=`uniform sampler2D t2D;
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`#include <common>
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
}`,xm=`#if DEPTH_PACKING == 3200
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
}`,_m=`#define DISTANCE
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
}`,ym=`#define DISTANCE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`uniform float scale;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Tm=`uniform vec3 diffuse;
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
}`,wm=`#define LAMBERT
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
}`,Am=`#define LAMBERT
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define MATCAP
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
}`,Pm=`#define NORMAL
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
}`,Im=`#define NORMAL
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
}`,Lm=`#define PHONG
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
}`,Dm=`#define PHONG
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
}`,Um=`#define STANDARD
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
}`,Nm=`#define STANDARD
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
}`,Fm=`#define TOON
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
}`,Bm=`#define TOON
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
}`,Om=`uniform float size;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,km=`uniform vec3 color;
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
}`,Gm=`uniform float rotation;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:hp,alphahash_pars_fragment:up,alphamap_fragment:fp,alphamap_pars_fragment:dp,alphatest_fragment:pp,alphatest_pars_fragment:mp,aomap_fragment:gp,aomap_pars_fragment:xp,batching_pars_vertex:_p,batching_vertex:yp,begin_vertex:vp,beginnormal_vertex:Mp,bsdfs:bp,iridescence_fragment:Sp,bumpmap_pars_fragment:Ep,clipping_planes_fragment:Tp,clipping_planes_pars_fragment:wp,clipping_planes_pars_vertex:Ap,clipping_planes_vertex:Rp,color_fragment:Cp,color_pars_fragment:Pp,color_pars_vertex:Ip,color_vertex:Lp,common:Dp,cube_uv_reflection_fragment:Up,defaultnormal_vertex:Np,displacementmap_pars_vertex:Fp,displacementmap_vertex:Bp,emissivemap_fragment:Op,emissivemap_pars_fragment:Hp,colorspace_fragment:zp,colorspace_pars_fragment:kp,envmap_fragment:Gp,envmap_common_pars_fragment:Vp,envmap_pars_fragment:Wp,envmap_pars_vertex:Xp,envmap_physical_pars_fragment:n0,envmap_vertex:qp,fog_vertex:Yp,fog_pars_vertex:Zp,fog_fragment:$p,fog_pars_fragment:Jp,gradientmap_pars_fragment:Kp,lightmap_pars_fragment:Qp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:e0,lights_pars_begin:t0,lights_toon_fragment:i0,lights_toon_pars_fragment:s0,lights_phong_fragment:r0,lights_phong_pars_fragment:a0,lights_physical_fragment:o0,lights_physical_pars_fragment:l0,lights_fragment_begin:c0,lights_fragment_maps:h0,lights_fragment_end:u0,lightprobes_pars_fragment:f0,logdepthbuf_fragment:d0,logdepthbuf_pars_fragment:p0,logdepthbuf_pars_vertex:m0,logdepthbuf_vertex:g0,map_fragment:x0,map_pars_fragment:_0,map_particle_fragment:y0,map_particle_pars_fragment:v0,metalnessmap_fragment:M0,metalnessmap_pars_fragment:b0,morphinstance_vertex:S0,morphcolor_vertex:E0,morphnormal_vertex:T0,morphtarget_pars_vertex:w0,morphtarget_vertex:A0,normal_fragment_begin:R0,normal_fragment_maps:C0,normal_pars_fragment:P0,normal_pars_vertex:I0,normal_vertex:L0,normalmap_pars_fragment:D0,clearcoat_normal_fragment_begin:U0,clearcoat_normal_fragment_maps:N0,clearcoat_pars_fragment:F0,iridescence_pars_fragment:B0,opaque_fragment:O0,packing:H0,premultiplied_alpha_fragment:z0,project_vertex:k0,dithering_fragment:G0,dithering_pars_fragment:V0,roughnessmap_fragment:W0,roughnessmap_pars_fragment:X0,shadowmap_pars_fragment:q0,shadowmap_pars_vertex:Y0,shadowmap_vertex:Z0,shadowmask_pars_fragment:$0,skinbase_vertex:J0,skinning_pars_vertex:K0,skinning_vertex:Q0,skinnormal_vertex:j0,specularmap_fragment:em,specularmap_pars_fragment:tm,tonemapping_fragment:nm,tonemapping_pars_fragment:im,transmission_fragment:sm,transmission_pars_fragment:rm,uv_pars_fragment:am,uv_pars_vertex:om,uv_vertex:lm,worldpos_vertex:cm,background_vert:hm,background_frag:um,backgroundCube_vert:fm,backgroundCube_frag:dm,cube_vert:pm,cube_frag:mm,depth_vert:gm,depth_frag:xm,distance_vert:_m,distance_frag:ym,equirect_vert:vm,equirect_frag:Mm,linedashed_vert:bm,linedashed_frag:Sm,meshbasic_vert:Em,meshbasic_frag:Tm,meshlambert_vert:wm,meshlambert_frag:Am,meshmatcap_vert:Rm,meshmatcap_frag:Cm,meshnormal_vert:Pm,meshnormal_frag:Im,meshphong_vert:Lm,meshphong_frag:Dm,meshphysical_vert:Um,meshphysical_frag:Nm,meshtoon_vert:Fm,meshtoon_frag:Bm,points_vert:Om,points_frag:Hm,shadow_vert:zm,shadow_frag:km,sprite_vert:Gm,sprite_frag:Vm},be={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ti={basic:{uniforms:un([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:un([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new he(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:un([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:un([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:un([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new he(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:un([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:un([be.points,be.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:un([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:un([be.common,be.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:un([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:un([be.sprite,be.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:un([be.common,be.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:un([be.lights,be.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ti.physical={uniforms:un([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var nl={r:0,b:0,g:0},Wm=new Fe,wf=new Qe;wf.set(-1,0,0,0,1,0,0,0,1);function Xm(i,e,t,n,s,r){let a=new he(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function p(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let y=b.backgroundBlurriness>0;w=e.get(w,y)}return w}function g(b){let w=!1,y=p(b);y===null?m(a,o):y&&y.isColor&&(m(y,1),w=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,w){let y=p(w);y&&(y.isCubeTexture||y.mapping===Nr)?(c===void 0&&(c=new ee(new ue(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:$i(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,v,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Wm.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wf),c.material.toneMapped=ot.getTransfer(y.colorSpace)!==pt,(h!==y||f!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ee(new qe(2,2),new Tt({name:"BackgroundMaterial",uniforms:$i(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ot.getTransfer(y.colorSpace)!==pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,w){b.getRGB(nl,Lc(i)),t.buffers.color.setClear(nl.r,nl.g,nl.b,w,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:_,dispose:d}}function qm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(U,R,I,P,D){let k=!1,W=f(U,P,I,R);r!==W&&(r=W,c(r.object)),k=p(U,P,I,D),k&&g(U,P,I,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,y(U,R,I,P),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function f(U,R,I,P){let D=P.wireframe===!0,k=n[R.id];k===void 0&&(k={},n[R.id]=k);let W=U.isInstancedMesh===!0?U.id:0,B=k[W];B===void 0&&(B={},k[W]=B);let O=B[I.id];O===void 0&&(O={},B[I.id]=O);let F=O[D];return F===void 0&&(F=u(l()),O[D]=F),F}function u(U){let R=[],I=[],P=[];for(let D=0;D<t;D++)R[D]=0,I[D]=0,P[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:P,object:U,attributes:{},index:null}}function p(U,R,I,P){let D=r.attributes,k=R.attributes,W=0,B=I.getAttributes();for(let O in B)if(B[O].location>=0){let X=D[O],oe=k[O];if(oe===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor)),X===void 0||X.attribute!==oe||oe&&X.data!==oe.data)return!0;W++}return r.attributesNum!==W||r.index!==P}function g(U,R,I,P){let D={},k=R.attributes,W=0,B=I.getAttributes();for(let O in B)if(B[O].location>=0){let X=k[O];X===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(X=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(X=U.instanceColor));let oe={};oe.attribute=X,X&&X.data&&(oe.data=X.data),D[O]=oe,W++}r.attributes=D,r.attributesNum=W,r.index=P}function _(){let U=r.newAttributes;for(let R=0,I=U.length;R<I;R++)U[R]=0}function m(U){d(U,0)}function d(U,R){let I=r.newAttributes,P=r.enabledAttributes,D=r.attributeDivisors;I[U]=1,P[U]===0&&(i.enableVertexAttribArray(U),P[U]=1),D[U]!==R&&(i.vertexAttribDivisor(U,R),D[U]=R)}function b(){let U=r.newAttributes,R=r.enabledAttributes;for(let I=0,P=R.length;I<P;I++)R[I]!==U[I]&&(i.disableVertexAttribArray(I),R[I]=0)}function w(U,R,I,P,D,k,W){W===!0?i.vertexAttribIPointer(U,R,I,D,k):i.vertexAttribPointer(U,R,I,P,D,k)}function y(U,R,I,P){_();let D=P.attributes,k=I.getAttributes(),W=R.defaultAttributeValues;for(let B in k){let O=k[B];if(O.location>=0){let F=D[B];if(F===void 0&&(B==="instanceMatrix"&&U.instanceMatrix&&(F=U.instanceMatrix),B==="instanceColor"&&U.instanceColor&&(F=U.instanceColor)),F!==void 0){let X=F.normalized,oe=F.itemSize,ce=e.get(F);if(ce===void 0)continue;let Ge=ce.buffer,Ye=ce.type,ht=ce.bytesPerElement,Q=Ye===i.INT||Ye===i.UNSIGNED_INT||F.gpuType===xo;if(F.isInterleavedBufferAttribute){let se=F.data,ye=se.stride,Ve=F.offset;if(se.isInstancedInterleavedBuffer){for(let ve=0;ve<O.locationSize;ve++)d(O.location+ve,se.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ve=0;ve<O.locationSize;ve++)m(O.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let ve=0;ve<O.locationSize;ve++)w(O.location+ve,oe/O.locationSize,Ye,X,ye*ht,(Ve+oe/O.locationSize*ve)*ht,Q)}else{if(F.isInstancedBufferAttribute){for(let se=0;se<O.locationSize;se++)d(O.location+se,F.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let se=0;se<O.locationSize;se++)m(O.location+se);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let se=0;se<O.locationSize;se++)w(O.location+se,oe/O.locationSize,Ye,X,oe*ht,oe/O.locationSize*se*ht,Q)}}else if(W!==void 0){let X=W[B];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(O.location,X);break;case 3:i.vertexAttrib3fv(O.location,X);break;case 4:i.vertexAttrib4fv(O.location,X);break;default:i.vertexAttrib1fv(O.location,X)}}}}b()}function E(){T();for(let U in n){let R=n[U];for(let I in R){let P=R[I];for(let D in P){let k=P[D];for(let W in k)h(k[W].object),delete k[W];delete P[D]}}delete n[U]}}function v(U){if(n[U.id]===void 0)return;let R=n[U.id];for(let I in R){let P=R[I];for(let D in P){let k=P[D];for(let W in k)h(k[W].object),delete k[W];delete P[D]}}delete n[U.id]}function S(U){for(let R in n){let I=n[R];for(let P in I){let D=I[P];if(D[U.id]===void 0)continue;let k=D[U.id];for(let W in k)h(k[W].object),delete k[W];delete D[U.id]}}}function x(U){for(let R in n){let I=n[R],P=U.isInstancedMesh===!0?U.id:0,D=I[P];if(D!==void 0){for(let k in D){let W=D[k];for(let B in W)h(W[B].object),delete W[B];delete D[k]}delete I[P],Object.keys(I).length===0&&delete n[R]}}}function T(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:v,releaseStatesOfObject:x,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Ym(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Zm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(S){return!(S!==In&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){let x=S===$t&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==_n&&S!==Pn&&!x&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Xe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:y,maxSamples:E,samples:v}}function $m(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Bn,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||n!==0||s;return s=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){let g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,w=b*4,y=d.clippingState||null;l.value=y,y=h(g,u,w,p);for(let E=0;E!==w;++E)y[E]=t[E];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,p,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let d=p+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,y=p;w!==_;++w,y+=4)a.copy(f[w]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Os=4,Jm=6,Km=20,Qm=256,Wr=new Qn,sf=new he,kc=null,Gc=0,Vc=0,Wc=!1,jm=new N,Ji=new N,sl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=jm}=r;kc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kc,Gc,Vc),this._renderer.xr.enabled=Wc,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:$t,format:In,colorSpace:ir,depthBuffer:!1},s=rf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=eg(r)),this._blurMaterial=ng(r,e,t),this._ggxMaterial=tg(r,e,t)}return s}_compileMaterial(e){let t=new ee(new st,e);this._renderer.compile(t,Wr)}_sceneToCubeUV(e,t,n,s,r){let l=new Jt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(sf),f.toneMapping=Hn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ee(new ue,new Et({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,d=!1,b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,d=!0):(m.color.copy(sf),d=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let E=this._cubeSize;Bs(s,y*E,w>2?E:0,E,E),f.setRenderTarget(s),d&&f.render(_,l),f.render(e,l)}f.toneMapping=p,f.autoClear=u,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ai||e.mapping===Zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Bs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Wr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,p=f*u,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Os?n-g+Os:0),d=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,Bs(r,m,d,3*_,2*_),s.setRenderTarget(r),s.render(o,Wr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Bs(e,m,d,3*_,2*_),s.setRenderTarget(e),s.render(o,Wr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Os?s-this._lodMax+Os:0),u=4*(this._cubeSize-h);Bs(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Wr)}};function eg(i){let e=[],t=[],n=i,s=i-Os+1+Jm;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,p=3,g=new Float32Array(p*u*f),_=new Float32Array(p*u*f);for(let d=0;d<f;d++){let b=d%3*2/3-1,w=d>2?0:-1,y=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];g.set(y,p*u*d);for(let E=0;E<u;E++){let v=h[E*2]*2-1,S=h[E*2+1]*2-1;d===0?Ji.set(1,S,v):d===1?Ji.set(-v,1,-S):d===2?Ji.set(-v,S,1):d===3?Ji.set(-1,S,-v):d===4?Ji.set(-v,-1,S):Ji.set(v,S,-1),Ji.toArray(_,(d*u+E)*p)}}let m=new st;m.setAttribute("position",new St(g,p)),m.setAttribute("outputDirection",new St(_,p)),t.push(new ee(m,null)),n>Os&&n--}return{lodMeshes:t,sizeLods:e}}function rf(i,e,t){let n=new Ot(i,e,t);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function tg(i,e,t){return new Tt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ol(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function ng(i,e,t){return new Tt({name:"SphericalGaussianBlur",defines:{SAMPLES:Km,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ol(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function af(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function of(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function ol(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var rl=class extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new xr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ue(5,5,5),r=new Tt({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Cn});r.uniforms.tEquirect.value=t;let a=new ee(s,r),o=t.minFilter;return t.minFilter===Ri&&(t.minFilter=an),new lo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function ig(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===po||p===mo)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new rl(g.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,g=p===po||p===mo,_=p===Ai||p===Zi;if(g||_){let m=t.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new sl(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return g&&b&&b.height>0||_&&b&&l(b)?(n===null&&(n=new sl(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===po?u.mapping=Ai:p===mo&&(u.mapping=Zi),u}function l(u){let p=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&p++;return p===g}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function sg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Gi("WebGLRenderer: "+n+" extension not supported."),s}}}function rg(i,e,t,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let p in u)e.update(u[p],i.ARRAY_BUFFER)}function c(f){let u=[],p=f.index,g=f.attributes.position,_=0;if(g===void 0)return;if(p!==null){let b=p.array;_=p.version;for(let w=0,y=b.length;w<y;w+=3){let E=b[w+0],v=b[w+1],S=b[w+2];u.push(E,v,v,S,S,E)}}else{let b=g.array;_=g.version;for(let w=0,y=b.length/3-1;w<y;w+=3){let E=w+0,v=w+1,S=w+2;u.push(E,v,v,S,S,E)}}let m=new(g.count>=65535?fr:ur)(u,1);m.version=_;let d=r.get(f);d&&e.remove(d),r.set(f,m)}function h(f){let u=r.get(f);if(u){let p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function ag(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,f*a,p),t.update(u,n,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,p);let _=0;for(let m=0;m<p;m++)_+=u[m];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function og(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function lg(i,e,t){let n=new WeakMap,s=new Pt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let T=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],w=0;p===!0&&(w=1),g===!0&&(w=2),_===!0&&(w=3);let y=o.attributes.position.count*w,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let v=new Float32Array(y*E*4*f),S=new lr(v,y,E,f);S.type=Pn,S.needsUpdate=!0;let x=w*4;for(let C=0;C<f;C++){let U=m[C],R=d[C],I=b[C],P=y*E*4*C;for(let D=0;D<U.count;D++){let k=D*x;p===!0&&(s.fromBufferAttribute(U,D),v[P+k+0]=s.x,v[P+k+1]=s.y,v[P+k+2]=s.z,v[P+k+3]=0),g===!0&&(s.fromBufferAttribute(R,D),v[P+k+4]=s.x,v[P+k+5]=s.y,v[P+k+6]=s.z,v[P+k+7]=0),_===!0&&(s.fromBufferAttribute(I,D),v[P+k+8]=s.x,v[P+k+9]=s.y,v[P+k+10]=s.z,v[P+k+11]=I.itemSize===4?s.w:1)}}u={count:f,texture:S,size:new de(y,E)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function cg(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var hg={[Cr]:"LINEAR_TONE_MAPPING",[Pr]:"REINHARD_TONE_MAPPING",[Ir]:"CINEON_TONE_MAPPING",[Yi]:"ACES_FILMIC_TONE_MAPPING",[Dr]:"AGX_TONE_MAPPING",[Ur]:"NEUTRAL_TONE_MAPPING",[Lr]:"CUSTOM_TONE_MAPPING"};function ug(i,e,t,n,s,r){let a=new Ot(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new st;c.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new $e([0,2,0,0,2,0],2));let h=new Is({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ee(c,h),u=new Qn(-1,1,1,-1,0,1),p=null,g=null,_=!1,m,d=null,b=[],w=!1;this.setSize=function(y,E){a.setSize(y,E),o!==null&&o.setSize(y,E),l!==null&&l.setSize(y,E);for(let v=0;v<b.length;v++){let S=b[v];S.setSize&&S.setSize(y,E)}},this.setEffects=function(y){b=y,w=b.length>0&&b[0].isRenderPass===!0;let E=a.width,v=a.height;b.length>0&&o===null&&(o=new Ot(E,v,{type:$t,depthBuffer:!1,stencilBuffer:!1}),l=new Ot(E,v,{type:$t,depthBuffer:!1,stencilBuffer:!1}));for(let S=0;S<b.length;S++){let x=b[S];x.setSize&&x.setSize(E,v)}},this.begin=function(y,E){if(_||y.toneMapping===Hn&&b.length===0)return!1;if(d=E,E!==null){let v=E.width,S=E.height;(a.width!==v||a.height!==S)&&this.setSize(v,S)}return w===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Hn,!0},this.hasRenderPass=function(){return w},this.end=function(y,E){y.toneMapping=m,_=!0;let v=a,S=o;for(let x=0;x<b.length;x++){let T=b[x];T.enabled!==!1&&(T.render(y,S,v,E),T.needsSwap!==!1&&(v=S,S=S===o?l:o))}if(p!==y.outputColorSpace||g!==y.toneMapping){p=y.outputColorSpace,g=y.toneMapping,h.defines={},ot.getTransfer(p)===pt&&(h.defines.SRGB_TRANSFER="");let x=hg[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=v.texture,y.setRenderTarget(d),y.render(f,u),d=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Af=new pn,Yc=new bi(1,1),Rf=new lr,Cf=new Va,Pf=new xr,lf=[],cf=[],hf=new Float32Array(16),uf=new Float32Array(9),ff=new Float32Array(4);function zs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=lf[s];if(r===void 0&&(r=new Float32Array(s),lf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ll(i,e){let t=cf[e];t===void 0&&(t=new Int32Array(e),cf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2fv(this.addr,e),Qt(t,e)}}function pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;i.uniform3fv(this.addr,e),Qt(t,e)}}function mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4fv(this.addr,e),Qt(t,e)}}function gg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,n))return;ff.set(n),i.uniformMatrix2fv(this.addr,!1,ff),Qt(t,n)}}function xg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,n))return;uf.set(n),i.uniformMatrix3fv(this.addr,!1,uf),Qt(t,n)}}function _g(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,n))return;hf.set(n),i.uniformMatrix4fv(this.addr,!1,hf),Qt(t,n)}}function yg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2iv(this.addr,e),Qt(t,e)}}function Mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3iv(this.addr,e),Qt(t,e)}}function bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4iv(this.addr,e),Qt(t,e)}}function Sg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2uiv(this.addr,e),Qt(t,e)}}function Tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3uiv(this.addr,e),Qt(t,e)}}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4uiv(this.addr,e),Qt(t,e)}}function Ag(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yc.compareFunction=t.isReversedDepthBuffer()?tl:el,r=Yc):r=Af,t.setTexture2D(e||r,s)}function Rg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Cf,s)}function Cg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pf,s)}function Pg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Rf,s)}function Ig(i){switch(i){case 5126:return fg;case 35664:return dg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return xg;case 35676:return _g;case 5124:case 35670:return yg;case 35667:case 35671:return vg;case 35668:case 35672:return Mg;case 35669:case 35673:return bg;case 5125:return Sg;case 36294:return Eg;case 36295:return Tg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Pg}}function Lg(i,e){i.uniform1fv(this.addr,e)}function Dg(i,e){let t=zs(e,this.size,2);i.uniform2fv(this.addr,t)}function Ug(i,e){let t=zs(e,this.size,3);i.uniform3fv(this.addr,t)}function Ng(i,e){let t=zs(e,this.size,4);i.uniform4fv(this.addr,t)}function Fg(i,e){let t=zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bg(i,e){let t=zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Og(i,e){let t=zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Hg(i,e){i.uniform1iv(this.addr,e)}function zg(i,e){i.uniform2iv(this.addr,e)}function kg(i,e){i.uniform3iv(this.addr,e)}function Gg(i,e){i.uniform4iv(this.addr,e)}function Vg(i,e){i.uniform1uiv(this.addr,e)}function Wg(i,e){i.uniform2uiv(this.addr,e)}function Xg(i,e){i.uniform3uiv(this.addr,e)}function qg(i,e){i.uniform4uiv(this.addr,e)}function Yg(i,e,t){let n=this.cache,s=e.length,r=ll(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Yc:a=Af;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Zg(i,e,t){let n=this.cache,s=e.length,r=ll(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Cf,r[a])}function $g(i,e,t){let n=this.cache,s=e.length,r=ll(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Pf,r[a])}function Jg(i,e,t){let n=this.cache,s=e.length,r=ll(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Rf,r[a])}function Kg(i){switch(i){case 5126:return Lg;case 35664:return Dg;case 35665:return Ug;case 35666:return Ng;case 35674:return Fg;case 35675:return Bg;case 35676:return Og;case 5124:case 35670:return Hg;case 35667:case 35671:return zg;case 35668:case 35672:return kg;case 35669:case 35673:return Gg;case 5125:return Vg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Jg}}var Zc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ig(t.type)}},$c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kg(t.type)}},Jc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Xc=/(\w+)(\])?(\[|\.)?/g;function df(i,e){i.seq.push(e),i.map[e.id]=e}function Qg(i,e,t){let n=i.name,s=n.length;for(Xc.lastIndex=0;;){let r=Xc.exec(n),a=Xc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){df(t,c===void 0?new Zc(o,i,e):new $c(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Jc(o),df(t,f)),t=f}}}var Hs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Qg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function pf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var jg=37297,ex=0;function tx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var mf=new Qe;function nx(i){ot._getMatrix(mf,ot.workingColorSpace,i);let e=`mat3( ${mf.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case sr:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+tx(i.getShaderSource(e),o)}else return r}function ix(i,e){let t=nx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var sx={[Cr]:"Linear",[Pr]:"Reinhard",[Ir]:"Cineon",[Yi]:"ACESFilmic",[Dr]:"AgX",[Ur]:"Neutral",[Lr]:"Custom"};function rx(i,e){let t=sx[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var il=new N;function ax(){ot.getLuminanceCoefficients(il);let i=il.x.toFixed(4),e=il.y.toFixed(4),t=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ox(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function lx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function qr(i){return i!==""}function xf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _f(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(i){return i.replace(hx,fx)}var ux=new Map;function fx(i,e){let t=rt[e];if(t===void 0){let n=ux.get(e);if(n!==void 0)t=rt[n],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Kc(t)}var dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(i){return i.replace(dx,px)}function px(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var mx={[Rr]:"SHADOWMAP_TYPE_PCF",[Ds]:"SHADOWMAP_TYPE_VSM"};function gx(i){return mx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xx={[Ai]:"ENVMAP_TYPE_CUBE",[Zi]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE_UV"};function _x(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":xx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var yx={[Zi]:"ENVMAP_MODE_REFRACTION"};function vx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Mx={[fo]:"ENVMAP_BLENDING_MULTIPLY",[Bu]:"ENVMAP_BLENDING_MIX",[Ou]:"ENVMAP_BLENDING_ADD"};function bx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Mx[i.combine]||"ENVMAP_BLENDING_NONE"}function Sx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ex(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=gx(t),c=_x(t),h=vx(t),f=bx(t),u=Sx(t),p=ox(t),g=lx(r),_=s.createProgram(),m,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qr).join(`
`),d.length>0&&(d+=`
`)):(m=[vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),d=[vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?rt.tonemapping_pars_fragment:"",t.toneMapping!==Hn?rx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,ix("linearToOutputTexel",t.outputColorSpace),ax(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qr).join(`
`)),a=Kc(a),a=xf(a,t),a=_f(a,t),o=Kc(o),o=xf(o,t),o=_f(o,t),a=yf(a),o=yf(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let w=b+m+a,y=b+d+o,E=pf(s,s.VERTEX_SHADER,w),v=pf(s,s.FRAGMENT_SHADER,y);s.attachShader(_,E),s.attachShader(_,v),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function S(U){if(i.debug.checkShaderErrors){let R=s.getProgramInfoLog(_)||"",I=s.getShaderInfoLog(E)||"",P=s.getShaderInfoLog(v)||"",D=R.trim(),k=I.trim(),W=P.trim(),B=!0,O=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,v);else{let F=gf(s,E,"vertex"),X=gf(s,v,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+D+`
`+F+`
`+X)}else D!==""?Xe("WebGLProgram: Program Info Log:",D):(k===""||W==="")&&(O=!1);O&&(U.diagnostics={runnable:B,programLog:D,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:d}})}s.deleteShader(E),s.deleteShader(v),x=new Hs(s,_),T=cx(s,_)}let x;this.getUniforms=function(){return x===void 0&&S(this),x};let T;this.getAttributes=function(){return T===void 0&&S(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,jg)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ex++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=v,this}var Tx=0,Qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jc(e),t.set(e,n)),n}},jc=class{constructor(e){this.id=Tx++,this.code=e,this.usedTimes=0}};function wx(i){return i===Pi||i===kr||i===Gr}function Ax(i,e,t,n,s,r){let a=new cr,o=new Qc,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,T,C,U,R,I){let P=U.fog,D=R.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=e.get(x.envMap||k,W),O=B&&B.mapping===Nr?B.image.height:null,F=p[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Xe("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let X=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,oe=X!==void 0?X.length:0,ce=0;D.morphAttributes.position!==void 0&&(ce=1),D.morphAttributes.normal!==void 0&&(ce=2),D.morphAttributes.color!==void 0&&(ce=3);let Ge,Ye,ht,Q;if(F){let Rt=ti[F];Ge=Rt.vertexShader,Ye=Rt.fragmentShader}else{Ge=x.vertexShader,Ye=x.fragmentShader;let Rt=o.getVertexShaderStage(x),mt=o.getFragmentShaderStage(x);o.update(x,Rt,mt),ht=Rt.id,Q=mt.id}let se=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ve=R.isInstancedMesh===!0,ve=R.isBatchedMesh===!0,nt=!!x.map,Gt=!!x.matcap,j=!!B,J=!!x.aoMap,Pe=!!x.lightMap,we=!!x.bumpMap&&x.wireframe===!1,De=!!x.normalMap,At=!!x.displacementMap,zt=!!x.emissiveMap,yt=!!x.metalnessMap,Lt=!!x.roughnessMap,z=x.anisotropy>0,qt=x.clearcoat>0,Ke=x.dispersion>0,L=x.retroreflectivity>0,M=x.iridescence>0,q=x.sheen>0,$=x.transmission>0,te=z&&!!x.anisotropyMap,fe=qt&&!!x.clearcoatMap,pe=qt&&!!x.clearcoatNormalMap,ie=qt&&!!x.clearcoatRoughnessMap,ae=M&&!!x.iridescenceMap,me=M&&!!x.iridescenceThicknessMap,Be=q&&!!x.sheenColorMap,Me=q&&!!x.sheenRoughnessMap,ge=!!x.specularMap,Oe=!!x.specularColorMap,We=!!x.specularIntensityMap,et=$&&!!x.transmissionMap,G=$&&!!x.thicknessMap,xe=!!x.gradientMap,re=!!x.alphaMap,_e=x.alphaTest>0,Te=!!x.alphaHash,le=!!x.extensions,He=Hn;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(He=i.toneMapping);let Ue={shaderID:F,shaderType:x.type,shaderName:x.name,vertexShader:Ge,fragmentShader:Ye,defines:x.defines,customVertexShaderID:ht,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ve,batchingColor:ve&&R._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&R.instanceColor!==null,instancingMorph:Ve&&R.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:nt,matcap:Gt,envMap:j,envMapMode:j&&B.mapping,envMapCubeUVHeight:O,aoMap:J,lightMap:Pe,bumpMap:we,normalMap:De,displacementMap:At,emissiveMap:zt,normalMapObjectSpace:De&&x.normalMapType===ku,normalMapTangentSpace:De&&x.normalMapType===Vr,packedNormalMap:De&&x.normalMapType===Vr&&wx(x.normalMap.format),metalnessMap:yt,roughnessMap:Lt,anisotropy:z,anisotropyMap:te,clearcoat:qt,clearcoatMap:fe,clearcoatNormalMap:pe,clearcoatRoughnessMap:ie,dispersion:Ke,retroreflection:L,iridescence:M,iridescenceMap:ae,iridescenceThicknessMap:me,sheen:q,sheenColorMap:Be,sheenRoughnessMap:Me,specularMap:ge,specularColorMap:Oe,specularIntensityMap:We,transmission:$,transmissionMap:et,thicknessMap:G,gradientMap:xe,opaque:x.transparent===!1&&x.blending===Us&&x.alphaToCoverage===!1,alphaMap:re,alphaTest:_e,alphaHash:Te,combine:x.combine,mapUv:nt&&g(x.map.channel),aoMapUv:J&&g(x.aoMap.channel),lightMapUv:Pe&&g(x.lightMap.channel),bumpMapUv:we&&g(x.bumpMap.channel),normalMapUv:De&&g(x.normalMap.channel),displacementMapUv:At&&g(x.displacementMap.channel),emissiveMapUv:zt&&g(x.emissiveMap.channel),metalnessMapUv:yt&&g(x.metalnessMap.channel),roughnessMapUv:Lt&&g(x.roughnessMap.channel),anisotropyMapUv:te&&g(x.anisotropyMap.channel),clearcoatMapUv:fe&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:me&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(x.sheenRoughnessMap.channel),specularMapUv:ge&&g(x.specularMap.channel),specularColorMapUv:Oe&&g(x.specularColorMap.channel),specularIntensityMapUv:We&&g(x.specularIntensityMap.channel),transmissionMapUv:et&&g(x.transmissionMap.channel),thicknessMapUv:G&&g(x.thicknessMap.channel),alphaMapUv:re&&g(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(De||z),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!D.attributes.uv&&(nt||re),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&De===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ye,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ce,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:nt&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:zt&&x.emissiveMap.isVideoTexture===!0&&ot.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===tt,flipSided:x.side===on,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:le&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&x.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(d(T,x),b(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function d(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){let T=p[x.type],C;if(T){let U=ti[T];C=hi.clone(U.uniforms)}else C=x.uniforms;return C}function y(x,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new Ex(i,T,x,s),c.push(C),h.set(T,C)),C}function E(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function v(x){o.remove(x)}function S(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:E,releaseShaderCache:v,programs:c,dispose:S}}function Rx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Cx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Mf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,_,m,d){let b=i[e];return b===void 0?(b={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:d},i[e]=b):(b.id=u.id,b.object=u,b.geometry=p,b.material=g,b.materialVariant=a(u),b.groupOrder=_,b.renderOrder=u.renderOrder,b.z=m,b.group=d),e++,b}function l(u,p,g,_,m,d,b){b.reversedDepth===!0&&(m=-m);let w=o(u,p,g,_,m,d);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):t.push(w)}function c(u,p,g,_,m,d){let b=o(u,p,g,_,m,d);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):t.unshift(b)}function h(u,p){t.length>1&&t.sort(u||Cx),n.length>1&&n.sort(p||Mf),s.length>1&&s.sort(p||Mf)}function f(){for(let u=e,p=i.length;u<p;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function Px(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new bf,i.set(n,[a])):s>=r.length?(a=new bf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ix(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new he};break;case"SpotLight":t={position:new N,direction:new N,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Lx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Dx=0;function Ux(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Nx(i){let e=new Ix,t=Lx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new Fe,a=new Fe;function o(c){let h=0,f=0,u=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,b=0,w=0,y=0,E=0,v=0,S=0,x=0,T=0,C=0;c.sort(Ux);for(let R=0,I=c.length;R<I;R++){let P=c[R],D=P.color,k=P.intensity,W=P.distance,B=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Pi?B=P.shadow.map.texture:B=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=D.r*k,f+=D.g*k,u+=D.b*k;else if(P.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(P.sh.coefficients[O],k);C++}else if(P.isSunLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let F=P.shadow,X=t.get(P);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize.copy(F.mapSize).multiply(F.getFrameExtents()),n.sunShadow[g]=X,n.sunShadowMap[g]=B;let oe=F.getViewportCount();for(let ce=0;ce<oe;ce++)n.sunShadowMatrix[_+ce]=F.getMatrix(ce),n.sunShadowCascade[_+ce]=F._cascadeData[ce];_+=oe,g++}n.sun[p]=O,p++}else if(P.isDirectionalLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let F=P.shadow,X=t.get(P);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,n.directionalShadow[m]=X,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=P.shadow.matrix,E++}n.directional[m]=O,m++}else if(P.isSpotLight){let O=e.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(D).multiplyScalar(k),O.distance=W,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,n.spot[b]=O;let F=P.shadow;if(P.map&&(n.spotLightMap[x]=P.map,x++,F.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[b]=F.matrix,P.castShadow){let X=t.get(P);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,n.spotShadow[b]=X,n.spotShadowMap[b]=B,S++}b++}else if(P.isRectAreaLight){let O=e.get(P);O.color.copy(D).multiplyScalar(k),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),n.rectArea[w]=O,w++}else if(P.isPointLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){let F=P.shadow,X=t.get(P);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,X.shadowCameraNear=F.camera.near,X.shadowCameraFar=F.camera.far,n.pointShadow[d]=X,n.pointShadowMap[d]=B,n.pointShadowMatrix[d]=P.shadow.matrix,v++}n.point[d]=O,d++}else if(P.isHemisphereLight){let O=e.get(P);O.skyColor.copy(P.color).multiplyScalar(k),O.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[y]=O,y++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let U=n.hash;(U.sunLength!==p||U.directionalLength!==m||U.pointLength!==d||U.spotLength!==b||U.rectAreaLength!==w||U.hemiLength!==y||U.numSunShadows!==g||U.numDirectionalShadows!==E||U.numPointShadows!==v||U.numSpotShadows!==S||U.numSpotMaps!==x||U.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=b,n.rectArea.length=w,n.point.length=d,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.spotLightMatrix.length=S+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,U.sunLength=p,U.directionalLength=m,U.pointLength=d,U.spotLength=b,U.rectAreaLength=w,U.hemiLength=y,U.numSunShadows=g,U.numDirectionalShadows=E,U.numPointShadows=v,U.numSpotShadows=S,U.numSpotMaps=x,U.numLightProbes=C,n.version=Dx++)}function l(c,h){let f=0,u=0,p=0,g=0,_=0,m=0,d=h.matrixWorldInverse;for(let b=0,w=c.length;b<w;b++){let y=c[b];if(y.isSunLight){let E=n.sun[f];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(d),f++}else if(y.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),u++}else if(y.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),g++}else if(y.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let E=n.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:n}}function Sf(i){let e=new Nx(i),t=[],n=[],s=[];function r(u){f.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Fx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Sf(i),e.set(s,[o])):r>=a.length?(o=new Sf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ox=`uniform sampler2D shadow_pass;
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
}`,Hx=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],zx=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Ef=new Fe,Xr=new N,qc=new N;function kx(i,e,t){let n=new Rs,s=new de,r=new de,a=new Pt,o=new Ja,l=new Ka,c={},h=t.maxTextureSize,f={[wi]:on,[on]:wi,[tt]:tt},u=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Bx,fragmentShader:Ox}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new st;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ee(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rr;let d=this.type;this.render=function(v,S,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===uo&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rr);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),R=i.state;R.setBlending(Cn),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let I=d!==this.type;I&&S.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(D=>D.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,D=v.length;P<D;P++){let k=v[P],W=k.shadow;if(W===void 0){Xe("WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let B=W.getFrameExtents();s.multiply(B),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/B.x),s.x=r.x*B.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/B.y),s.y=r.y*B.y,W.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=O,W.map===null||I===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ds){if(k.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ot(s.x,s.y,{format:Pi,type:$t,minFilter:an,magFilter:an,generateMipmaps:!1}),W.map.texture.name=k.name+".shadowMap",W.map.depthTexture=new bi(s.x,s.y,Pn),W.map.depthTexture.name=k.name+".shadowMapDepth",W.map.depthTexture.format=Zn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=en,W.map.depthTexture.magFilter=en}else k.isPointLight?(W.map=new rl(s.x),W.map.depthTexture=new Za(s.x,zn)):(W.map=new Ot(s.x,s.y),W.map.depthTexture=new bi(s.x,s.y,zn)),W.map.depthTexture.name=k.name+".shadowMap",W.map.depthTexture.format=Zn,this.type===Rr?(W.map.depthTexture.compareFunction=O?tl:el,W.map.depthTexture.minFilter=an,W.map.depthTexture.magFilter=an):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=en,W.map.depthTexture.magFilter=en);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let F=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();k.isPointLight!==!0&&W.updateMatrices(k,x);for(let X=0;X<F;X++){let oe=W.getCamera(X);if(k.isPointLight){let ce=W.camera,Ge=W.matrix,Ye=k.distance||ce.far;Ye!==ce.far&&(ce.far=Ye,ce.updateProjectionMatrix()),Xr.setFromMatrixPosition(k.matrixWorld),ce.position.copy(Xr),qc.copy(ce.position),qc.add(Hx[X]),ce.up.copy(zx[X]),ce.lookAt(qc),ce.updateMatrixWorld(),Ge.makeTranslation(-Xr.x,-Xr.y,-Xr.z),Ef.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Ef,ce.coordinateSystem,ce.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,X),i.clear();else{X===0&&(i.setRenderTarget(W.map),i.clear());let ce=W.getViewport(X);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),R.viewport(a)}n=W.getFrustum(X),y(S,x,oe,k,this.type)}W.isPointLightShadow!==!0&&this.type===Ds&&b(W,x),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(T,C,U)};function b(v,S){let x=e.update(_);u.defines.VSM_SAMPLES!==v.blurSamples&&(u.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null?v.mapPass=new Ot(s.x,s.y,{format:Pi,type:$t}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),u.uniforms.shadow_pass.value=v.map.depthTexture,u.uniforms.resolution.value.set(v.map.width,v.map.height),u.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(S,null,x,u,_,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value.set(v.map.width,v.map.height),p.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(S,null,x,p,_,null)}function w(v,S,x,T){let C=null,U=x.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(U!==void 0)C=U;else if(C=x.isPointLight===!0?l:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){let R=C.uuid,I=S.uuid,P=c[R];P===void 0&&(P={},c[R]=P);let D=P[I];D===void 0&&(D=C.clone(),P[I]=D,S.addEventListener("dispose",E)),C=D}if(C.visible=S.visible,C.wireframe=S.wireframe,T===Ds?C.side=S.shadowSide!==null?S.shadowSide:S.side:C.side=S.shadowSide!==null?S.shadowSide:f[S.side],C.alphaMap=S.alphaMap,C.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,C.map=S.map,C.clipShadows=S.clipShadows,C.clippingPlanes=S.clippingPlanes,C.clipIntersection=S.clipIntersection,C.displacementMap=S.displacementMap,C.displacementScale=S.displacementScale,C.displacementBias=S.displacementBias,C.wireframeLinewidth=S.wireframeLinewidth,C.linewidth=S.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let R=i.properties.get(C);R.light=x}return C}function y(v,S,x,T,C){if(v.visible===!1)return;if(v.layers.test(S.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&C===Ds)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,v.matrixWorld);let I=e.update(v),P=v.material;if(Array.isArray(P)){let D=I.groups;for(let k=0,W=D.length;k<W;k++){let B=D[k],O=P[B.materialIndex];if(O&&O.visible){let F=w(v,O,T,C);v.onBeforeShadow(i,v,S,x,I,F,B),i.renderBufferDirect(x,null,I,F,v,B),v.onAfterShadow(i,v,S,x,I,F,B)}}}else if(P.visible){let D=w(v,P,T,C);v.onBeforeShadow(i,v,S,x,I,D,null),i.renderBufferDirect(x,null,I,D,v,null),v.onAfterShadow(i,v,S,x,I,D,null)}}let R=v.children;for(let I=0,P=R.length;I<P;I++)y(R[I],S,x,T,C)}function E(v){v.target.removeEventListener("dispose",E);for(let x in c){let T=c[x],C=v.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Gx(i,e){function t(){let G=!1,xe=new Pt,re=null,_e=new Pt(0,0,0,0);return{setMask:function(Te){re!==Te&&!G&&(i.colorMask(Te,Te,Te,Te),re=Te)},setLocked:function(Te){G=Te},setClear:function(Te,le,He,Ue,Rt){Rt===!0&&(Te*=Ue,le*=Ue,He*=Ue),xe.set(Te,le,He,Ue),_e.equals(xe)===!1&&(i.clearColor(Te,le,He,Ue),_e.copy(xe))},reset:function(){G=!1,re=null,_e.set(-1,0,0,0)}}}function n(){let G=!1,xe=!1,re=null,_e=null,Te=null;return{setReversed:function(le){if(xe!==le){let He=e.get("EXT_clip_control");le?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),xe=le;let Ue=Te;Te=null,this.setClear(Ue)}},getReversed:function(){return xe},setTest:function(le){le?se(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(le){re!==le&&!G&&(i.depthMask(le),re=le)},setFunc:function(le){if(xe&&(le=Qu[le]),_e!==le){switch(le){case La:i.depthFunc(i.NEVER);break;case Da:i.depthFunc(i.ALWAYS);break;case Ua:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case Na:i.depthFunc(i.EQUAL);break;case Fa:i.depthFunc(i.GEQUAL);break;case Ba:i.depthFunc(i.GREATER);break;case Oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=le}},setLocked:function(le){G=le},setClear:function(le){Te!==le&&(Te=le,xe&&(le=1-le),i.clearDepth(le))},reset:function(){G=!1,re=null,_e=null,Te=null,xe=!1}}}function s(){let G=!1,xe=null,re=null,_e=null,Te=null,le=null,He=null,Ue=null,Rt=null;return{setTest:function(mt){G||(mt?se(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(mt){xe!==mt&&!G&&(i.stencilMask(mt),xe=mt)},setFunc:function(mt,Dn,Vn){(re!==mt||_e!==Dn||Te!==Vn)&&(i.stencilFunc(mt,Dn,Vn),re=mt,_e=Dn,Te=Vn)},setOp:function(mt,Dn,Vn){(le!==mt||He!==Dn||Ue!==Vn)&&(i.stencilOp(mt,Dn,Vn),le=mt,He=Dn,Ue=Vn)},setLocked:function(mt){G=mt},setClear:function(mt){Rt!==mt&&(i.clearStencil(mt),Rt=mt)},reset:function(){G=!1,xe=null,re=null,_e=null,Te=null,le=null,He=null,Ue=null,Rt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},p=new WeakMap,g=[],_=null,m=!1,d=null,b=null,w=null,y=null,E=null,v=null,S=null,x=new he(0,0,0),T=0,C=!1,U=null,R=null,I=null,P=null,D=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,B=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(O)[1]),W=B>=1):O.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),W=B>=2);let F=null,X={},oe=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),Ge=new Pt().fromArray(oe),Ye=new Pt().fromArray(ce);function ht(G,xe,re,_e){let Te=new Uint8Array(4),le=i.createTexture();i.bindTexture(G,le),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<re;He++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(xe+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return le}let Q={};Q[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(Ms),we(!1),De(_c),se(i.CULL_FACE),J(Cn);function se(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function ye(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function Ve(G,xe){return u[G]!==xe?(i.bindFramebuffer(G,xe),u[G]=xe,G===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xe),G===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function ve(G,xe){let re=g,_e=!1;if(G){re=p.get(xe),re===void 0&&(re=[],p.set(xe,re));let Te=G.textures;if(re.length!==Te.length||re[0]!==i.COLOR_ATTACHMENT0){for(let le=0,He=Te.length;le<He;le++)re[le]=i.COLOR_ATTACHMENT0+le;re.length=Te.length,_e=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,_e=!0);_e&&i.drawBuffers(re)}function nt(G){return _!==G?(i.useProgram(G),_=G,!0):!1}let Gt={[qi]:i.FUNC_ADD,[vu]:i.FUNC_SUBTRACT,[Mu]:i.FUNC_REVERSE_SUBTRACT};Gt[bu]=i.MIN,Gt[Su]=i.MAX;let j={[Eu]:i.ZERO,[Tu]:i.ONE,[wu]:i.SRC_COLOR,[Mc]:i.SRC_ALPHA,[Lu]:i.SRC_ALPHA_SATURATE,[Pu]:i.DST_COLOR,[Ru]:i.DST_ALPHA,[Au]:i.ONE_MINUS_SRC_COLOR,[bc]:i.ONE_MINUS_SRC_ALPHA,[Iu]:i.ONE_MINUS_DST_COLOR,[Cu]:i.ONE_MINUS_DST_ALPHA,[Du]:i.CONSTANT_COLOR,[Uu]:i.ONE_MINUS_CONSTANT_COLOR,[Nu]:i.CONSTANT_ALPHA,[Fu]:i.ONE_MINUS_CONSTANT_ALPHA};function J(G,xe,re,_e,Te,le,He,Ue,Rt,mt){if(G===Cn){m===!0&&(ye(i.BLEND),m=!1);return}if(m===!1&&(se(i.BLEND),m=!0),G!==yu){if(G!==d||mt!==C){if((b!==qi||E!==qi)&&(i.blendEquation(i.FUNC_ADD),b=qi,E=qi),mt)switch(G){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jn:i.blendFunc(i.ONE,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",G);break}else switch(G){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yc:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vc:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",G);break}w=null,y=null,v=null,S=null,x.set(0,0,0),T=0,d=G,C=mt}return}Te=Te||xe,le=le||re,He=He||_e,(xe!==b||Te!==E)&&(i.blendEquationSeparate(Gt[xe],Gt[Te]),b=xe,E=Te),(re!==w||_e!==y||le!==v||He!==S)&&(i.blendFuncSeparate(j[re],j[_e],j[le],j[He]),w=re,y=_e,v=le,S=He),(Ue.equals(x)===!1||Rt!==T)&&(i.blendColor(Ue.r,Ue.g,Ue.b,Rt),x.copy(Ue),T=Rt),d=G,C=!1}function Pe(G,xe){G.side===tt?ye(i.CULL_FACE):se(i.CULL_FACE);let re=G.side===on;xe&&(re=!re),we(re),G.blending===Us&&G.transparent===!1?J(Cn):J(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);let _e=G.stencilWrite;o.setTest(_e),_e&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),zt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(G){U!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),U=G)}function De(G){G!==xu?(se(i.CULL_FACE),G!==R&&(G===_c?i.cullFace(i.BACK):G===_u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),R=G}function At(G){G!==I&&(W&&i.lineWidth(G),I=G)}function zt(G,xe,re){G?(se(i.POLYGON_OFFSET_FILL),(P!==xe||D!==re)&&(P=xe,D=re,a.getReversed()&&(xe=-xe),i.polygonOffset(xe,re))):ye(i.POLYGON_OFFSET_FILL)}function yt(G){G?se(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Lt(G){G===void 0&&(G=i.TEXTURE0+k-1),F!==G&&(i.activeTexture(G),F=G)}function z(G,xe,re){re===void 0&&(F===null?re=i.TEXTURE0+k-1:re=F);let _e=X[re];_e===void 0&&(_e={type:void 0,texture:void 0},X[re]=_e),(_e.type!==G||_e.texture!==xe)&&(F!==re&&(i.activeTexture(re),F=re),i.bindTexture(G,xe||Q[G]),_e.type=G,_e.texture=xe)}function qt(){let G=X[F];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ke(){try{i.compressedTexImage2D(...arguments)}catch(G){Ze("WebGLState:",G)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(G){Ze("WebGLState:",G)}}function M(){try{i.texSubImage2D(...arguments)}catch(G){Ze("WebGLState:",G)}}function q(){try{i.texSubImage3D(...arguments)}catch(G){Ze("WebGLState:",G)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(G){Ze("WebGLState:",G)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(G){Ze("WebGLState:",G)}}function fe(){try{i.texStorage2D(...arguments)}catch(G){Ze("WebGLState:",G)}}function pe(){try{i.texStorage3D(...arguments)}catch(G){Ze("WebGLState:",G)}}function ie(){try{i.texImage2D(...arguments)}catch(G){Ze("WebGLState:",G)}}function ae(){try{i.texImage3D(...arguments)}catch(G){Ze("WebGLState:",G)}}function me(G){return f[G]!==void 0?f[G]:i.getParameter(G)}function Be(G,xe){f[G]!==xe&&(i.pixelStorei(G,xe),f[G]=xe)}function Me(G){Ge.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Ge.copy(G))}function ge(G){Ye.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Ye.copy(G))}function Oe(G,xe){let re=c.get(xe);re===void 0&&(re=new WeakMap,c.set(xe,re));let _e=re.get(G);_e===void 0&&(_e=i.getUniformBlockIndex(xe,G.name),re.set(G,_e))}function We(G,xe){let _e=c.get(xe).get(G);l.get(xe)!==_e&&(i.uniformBlockBinding(xe,_e,G.__bindingPointIndex),l.set(xe,_e))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},F=null,X={},u={},p=new WeakMap,g=[],_=null,m=!1,d=null,b=null,w=null,y=null,E=null,v=null,S=null,x=new he(0,0,0),T=0,C=!1,U=null,R=null,I=null,P=null,D=null,Ge.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:ye,bindFramebuffer:Ve,drawBuffers:ve,useProgram:nt,setBlending:J,setMaterial:Pe,setFlipSided:we,setCullFace:De,setLineWidth:At,setPolygonOffset:zt,setScissorTest:yt,activeTexture:Lt,bindTexture:z,unbindTexture:qt,compressedTexImage2D:Ke,compressedTexImage3D:L,texImage2D:ie,texImage3D:ae,pixelStorei:Be,getParameter:me,updateUBOMapping:Oe,uniformBlockBinding:We,texStorage2D:fe,texStorage3D:pe,texSubImage2D:M,texSubImage3D:q,compressedTexSubImage2D:$,compressedTexSubImage3D:te,scissor:Me,viewport:ge,reset:et}}function Vx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,h=new WeakMap,f=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,M){return g?new OffscreenCanvas(L,M):rr("canvas")}function m(L,M,q){let $=1,te=Ke(L);if((te.width>q||te.height>q)&&($=q/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let fe=Math.floor($*te.width),pe=Math.floor($*te.height);u===void 0&&(u=_(fe,pe));let ie=M?_(fe,pe):u;return ie.width=fe,ie.height=pe,ie.getContext("2d").drawImage(L,0,0,fe,pe),Xe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+fe+"x"+pe+")."),ie}else return"data"in L&&Xe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),L;return L}function d(L){return L.generateMipmaps}function b(L){i.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(L,M,q,$,te,fe=!1){if(L!==null){if(i[L]!==void 0)return i[L];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let pe;$&&(pe=e.get("EXT_texture_norm16"),pe||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=M;if(M===i.RED&&(q===i.FLOAT&&(ie=i.R32F),q===i.HALF_FLOAT&&(ie=i.R16F),q===i.UNSIGNED_BYTE&&(ie=i.R8),q===i.UNSIGNED_SHORT&&pe&&(ie=pe.R16_EXT),q===i.SHORT&&pe&&(ie=pe.R16_SNORM_EXT)),M===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ie=i.R8UI),q===i.UNSIGNED_SHORT&&(ie=i.R16UI),q===i.UNSIGNED_INT&&(ie=i.R32UI),q===i.BYTE&&(ie=i.R8I),q===i.SHORT&&(ie=i.R16I),q===i.INT&&(ie=i.R32I)),M===i.RG&&(q===i.FLOAT&&(ie=i.RG32F),q===i.HALF_FLOAT&&(ie=i.RG16F),q===i.UNSIGNED_BYTE&&(ie=i.RG8),q===i.UNSIGNED_SHORT&&pe&&(ie=pe.RG16_EXT),q===i.SHORT&&pe&&(ie=pe.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ie=i.RG8UI),q===i.UNSIGNED_SHORT&&(ie=i.RG16UI),q===i.UNSIGNED_INT&&(ie=i.RG32UI),q===i.BYTE&&(ie=i.RG8I),q===i.SHORT&&(ie=i.RG16I),q===i.INT&&(ie=i.RG32I)),M===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),q===i.UNSIGNED_INT&&(ie=i.RGB32UI),q===i.BYTE&&(ie=i.RGB8I),q===i.SHORT&&(ie=i.RGB16I),q===i.INT&&(ie=i.RGB32I)),M===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),q===i.UNSIGNED_INT&&(ie=i.RGBA32UI),q===i.BYTE&&(ie=i.RGBA8I),q===i.SHORT&&(ie=i.RGBA16I),q===i.INT&&(ie=i.RGBA32I)),M===i.RGB&&(q===i.UNSIGNED_SHORT&&pe&&(ie=pe.RGB16_EXT),q===i.SHORT&&pe&&(ie=pe.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),M===i.RGBA){let ae=fe?sr:ot.getTransfer(te);q===i.FLOAT&&(ie=i.RGBA32F),q===i.HALF_FLOAT&&(ie=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ie=ae===pt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&pe&&(ie=pe.RGBA16_EXT),q===i.SHORT&&pe&&(ie=pe.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function E(L,M){let q;return L?M===null||M===zn||M===Fs?q=i.DEPTH24_STENCIL8:M===Pn?q=i.DEPTH32F_STENCIL8:M===Ns&&(q=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===zn||M===Fs?q=i.DEPTH_COMPONENT24:M===Pn?q=i.DEPTH_COMPONENT32F:M===Ns&&(q=i.DEPTH_COMPONENT16),q}function v(L,M){return d(L)===!0||L.isFramebufferTexture&&L.minFilter!==en&&L.minFilter!==an?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function S(L){let M=L.target;M.removeEventListener("dispose",S),T(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&f.delete(M)}function x(L){let M=L.target;M.removeEventListener("dispose",x),U(M)}function T(L){let M=n.get(L);if(M.__webglInit===void 0)return;let q=L.source,$=p.get(q);if($){let te=$[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(L),Object.keys($).length===0&&p.delete(q)}n.remove(L)}function C(L){let M=n.get(L);i.deleteTexture(M.__webglTexture);let q=L.source,$=p.get(q);delete $[M.__cacheKey],a.memory.textures--}function U(L){let M=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let te=0;te<M.__webglFramebuffer[$].length;te++)i.deleteFramebuffer(M.__webglFramebuffer[$][te]);else i.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)i.deleteFramebuffer(M.__webglFramebuffer[$]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let q=L.textures;for(let $=0,te=q.length;$<te;$++){let fe=n.get(q[$]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(q[$])}n.remove(L)}let R=0;function I(){R=0}function P(){return R}function D(L){R=L}function k(){let L=R;return L>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),R+=1,L}function W(L){let M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function B(L,M){let q=n.get(L);if(L.isVideoTexture&&z(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){let $=L.image;if($===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(q,L,M);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+M)}function O(L,M){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){ye(q,L,M);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+M)}function F(L,M){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){ye(q,L,M);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+M)}function X(L,M){let q=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){Ve(q,L,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+M)}let oe={[rn]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},ce={[en]:i.NEAREST,[Hu]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[go]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},Ge={[Vu]:i.NEVER,[Zu]:i.ALWAYS,[Wu]:i.LESS,[el]:i.LEQUAL,[Xu]:i.EQUAL,[tl]:i.GEQUAL,[qu]:i.GREATER,[Yu]:i.NOTEQUAL};function Ye(L,M){if(M.type===Pn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===an||M.magFilter===go||M.magFilter===Fr||M.magFilter===Ri||M.minFilter===an||M.minFilter===go||M.minFilter===Fr||M.minFilter===Ri)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,oe[M.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,oe[M.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,oe[M.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ce[M.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ce[M.minFilter]),M.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Ge[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===en||M.minFilter!==Fr&&M.minFilter!==Ri||M.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ht(L,M){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",S));let $=M.source,te=p.get($);te===void 0&&(te={},p.set($,te));let fe=W(M);if(fe!==L.__cacheKey){te[fe]===void 0&&(te[fe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),te[fe].usedTimes++;let pe=te[L.__cacheKey];pe!==void 0&&(te[L.__cacheKey].usedTimes--,pe.usedTimes===0&&C(M)),L.__cacheKey=fe,L.__webglTexture=te[fe].texture}return q}function Q(L,M,q){return Math.floor(Math.floor(L/q)/M)}function se(L,M,q,$){let fe=L.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,q,$,M.data);else{fe.sort((Be,Me)=>Be.start-Me.start);let pe=0;for(let Be=1;Be<fe.length;Be++){let Me=fe[pe],ge=fe[Be],Oe=Me.start+Me.count,We=Q(ge.start,M.width,4),et=Q(Me.start,M.width,4);ge.start<=Oe+1&&We===et&&Q(ge.start+ge.count-1,M.width,4)===We?Me.count=Math.max(Me.count,ge.start+ge.count-Me.start):(++pe,fe[pe]=ge)}fe.length=pe+1;let ie=t.getParameter(i.UNPACK_ROW_LENGTH),ae=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Be=0,Me=fe.length;Be<Me;Be++){let ge=fe[Be],Oe=Math.floor(ge.start/4),We=Math.ceil(ge.count/4),et=Oe%M.width,G=Math.floor(Oe/M.width),xe=We,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,et),t.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,et,G,xe,re,q,$,M.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function ye(L,M,q){let $=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=i.TEXTURE_3D);let te=ht(L,M),fe=M.source;t.bindTexture($,L.__webglTexture,i.TEXTURE0+q);let pe=n.get(fe);if(fe.version!==pe.__version||te===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap!="undefined"&&M.image instanceof ImageBitmap)===!1){let re=ot.getPrimaries(ot.workingColorSpace),_e=M.colorSpace===mn?null:ot.getPrimaries(M.colorSpace),Te=M.colorSpace===mn||re===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let ae=m(M.image,!1,s.maxTextureSize);ae=qt(M,ae);let me=r.convert(M.format,M.colorSpace),Be=r.convert(M.type),Me=y(M.internalFormat,me,Be,M.normalized,M.colorSpace,M.isVideoTexture);Ye($,M);let ge,Oe=M.mipmaps,We=M.isVideoTexture!==!0,et=pe.__version===void 0||te===!0,G=fe.dataReady,xe=v(M,ae);if(M.isDepthTexture)Me=E(M.format===Ci,M.type),et&&(We?t.texStorage2D(i.TEXTURE_2D,1,Me,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Me,ae.width,ae.height,0,me,Be,null));else if(M.isDataTexture)if(Oe.length>0){We&&et&&t.texStorage2D(i.TEXTURE_2D,xe,Me,Oe[0].width,Oe[0].height);for(let re=0,_e=Oe.length;re<_e;re++)ge=Oe[re],We?G&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ge.width,ge.height,me,Be,ge.data):t.texImage2D(i.TEXTURE_2D,re,Me,ge.width,ge.height,0,me,Be,ge.data);M.generateMipmaps=!1}else We?(et&&t.texStorage2D(i.TEXTURE_2D,xe,Me,ae.width,ae.height),G&&se(M,ae,me,Be)):t.texImage2D(i.TEXTURE_2D,0,Me,ae.width,ae.height,0,me,Be,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Me,Oe[0].width,Oe[0].height,ae.depth);for(let re=0,_e=Oe.length;re<_e;re++)if(ge=Oe[re],M.format!==In)if(me!==null)if(We){if(G)if(M.layerUpdates.size>0){let Te=Nc(ge.width,ge.height,M.format,M.type);for(let le of M.layerUpdates){let He=ge.data.subarray(le*Te/ge.data.BYTES_PER_ELEMENT,(le+1)*Te/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,le,ge.width,ge.height,1,me,He)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,ae.depth,me,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Me,ge.width,ge.height,ae.depth,0,ge.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,ae.depth,me,Be,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Me,ge.width,ge.height,ae.depth,0,me,Be,ge.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{We&&et&&t.texStorage2D(i.TEXTURE_2D,xe,Me,Oe[0].width,Oe[0].height);for(let re=0,_e=Oe.length;re<_e;re++)ge=Oe[re],M.format!==In?me!==null?We?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Me,ge.width,ge.height,0,ge.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?G&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ge.width,ge.height,me,Be,ge.data):t.texImage2D(i.TEXTURE_2D,re,Me,ge.width,ge.height,0,me,Be,ge.data)}else if(M.isDataArrayTexture)if(We){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Me,ae.width,ae.height,ae.depth),G)if(M.layerUpdates.size>0){let re=Nc(ae.width,ae.height,M.format,M.type);for(let _e of M.layerUpdates){let Te=ae.data.subarray(_e*re/ae.data.BYTES_PER_ELEMENT,(_e+1)*re/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,ae.width,ae.height,1,me,Be,Te)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,me,Be,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ae.width,ae.height,ae.depth,0,me,Be,ae.data);else if(M.isData3DTexture)We?(et&&t.texStorage3D(i.TEXTURE_3D,xe,Me,ae.width,ae.height,ae.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,me,Be,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ae.width,ae.height,ae.depth,0,me,Be,ae.data);else if(M.isFramebufferTexture){if(et)if(We)t.texStorage2D(i.TEXTURE_2D,xe,Me,ae.width,ae.height);else{let re=ae.width,_e=ae.height;for(let Te=0;Te<xe;Te++)t.texImage2D(i.TEXTURE_2D,Te,Me,re,_e,0,me,Be,null),re>>=1,_e>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ae.parentNode!==re){re.appendChild(ae),f.add(M),re.onpaint=_e=>{let Te=_e.changedElements;for(let le of f)Te.includes(le.image)&&(le.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ae);else{let Te=i.RGBA,le=i.RGBA,He=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Te,le,He,ae)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(We&&et){let re=Ke(Oe[0]);t.texStorage2D(i.TEXTURE_2D,xe,Me,re.width,re.height)}for(let re=0,_e=Oe.length;re<_e;re++)ge=Oe[re],We?G&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,me,Be,ge):t.texImage2D(i.TEXTURE_2D,re,Me,me,Be,ge);M.generateMipmaps=!1}else if(We){if(et){let re=Ke(ae);t.texStorage2D(i.TEXTURE_2D,xe,Me,re.width,re.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Be,ae)}else t.texImage2D(i.TEXTURE_2D,0,Me,me,Be,ae);d(M)&&b($),pe.__version=fe.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Ve(L,M,q){if(M.image.length!==6)return;let $=ht(L,M),te=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+q);let fe=n.get(te);if(te.version!==fe.__version||$===!0){t.activeTexture(i.TEXTURE0+q);let pe=ot.getPrimaries(ot.workingColorSpace),ie=M.colorSpace===mn?null:ot.getPrimaries(M.colorSpace),ae=M.colorSpace===mn||pe===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let me=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let le=0;le<6;le++)!me&&!Be?Me[le]=m(M.image[le],!0,s.maxCubemapSize):Me[le]=Be?M.image[le].image:M.image[le],Me[le]=qt(M,Me[le]);let ge=Me[0],Oe=r.convert(M.format,M.colorSpace),We=r.convert(M.type),et=y(M.internalFormat,Oe,We,M.normalized,M.colorSpace),G=M.isVideoTexture!==!0,xe=fe.__version===void 0||$===!0,re=te.dataReady,_e=v(M,ge);Ye(i.TEXTURE_CUBE_MAP,M);let Te;if(me){G&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,et,ge.width,ge.height);for(let le=0;le<6;le++){Te=Me[le].mipmaps;for(let He=0;He<Te.length;He++){let Ue=Te[He];M.format!==In?Oe!==null?G?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He,0,0,Ue.width,Ue.height,Oe,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He,et,Ue.width,Ue.height,0,Ue.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He,0,0,Ue.width,Ue.height,Oe,We,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He,et,Ue.width,Ue.height,0,Oe,We,Ue.data)}}}else{if(Te=M.mipmaps,G&&xe){Te.length>0&&_e++;let le=Ke(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,et,le.width,le.height)}for(let le=0;le<6;le++)if(Be){G?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Me[le].width,Me[le].height,Oe,We,Me[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,et,Me[le].width,Me[le].height,0,Oe,We,Me[le].data);for(let He=0;He<Te.length;He++){let Rt=Te[He].image[le].image;G?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He+1,0,0,Rt.width,Rt.height,Oe,We,Rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He+1,et,Rt.width,Rt.height,0,Oe,We,Rt.data)}}else{G?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Oe,We,Me[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,et,Oe,We,Me[le]);for(let He=0;He<Te.length;He++){let Ue=Te[He];G?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He+1,0,0,Oe,We,Ue.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He+1,et,Oe,We,Ue.image[le])}}}d(M)&&b(i.TEXTURE_CUBE_MAP),fe.__version=te.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ve(L,M,q,$,te,fe){let pe=r.convert(q.format,q.colorSpace),ie=r.convert(q.type),ae=y(q.internalFormat,pe,ie,q.normalized,q.colorSpace),me=n.get(M),Be=n.get(q);if(Be.__renderTarget=M,!me.__hasExternalTextures){let Me=Math.max(1,M.width>>fe),ge=Math.max(1,M.height>>fe);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,fe,ae,Me,ge,M.depth,0,pe,ie,null):t.texImage2D(te,fe,ae,Me,ge,0,pe,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Lt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,te,Be.__webglTexture,0,yt(M)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,te,Be.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(L,M,q){if(i.bindRenderbuffer(i.RENDERBUFFER,L),M.depthBuffer){let $=M.depthTexture,te=$&&$.isDepthTexture?$.type:null,fe=E(M.stencilBuffer,te),pe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Lt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(M),fe,M.width,M.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(M),fe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,fe,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,L)}else{let $=M.textures;for(let te=0;te<$.length;te++){let fe=$[te],pe=r.convert(fe.format,fe.colorSpace),ie=r.convert(fe.type),ae=y(fe.internalFormat,pe,ie,fe.normalized,fe.colorSpace);Lt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(M),ae,M.width,M.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(M),ae,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ae,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Gt(L,M,q){let $=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(M.depthTexture);if(te.__renderTarget=M,(!te.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$){if(te.__webglInit===void 0&&(te.__webglInit=!0,M.depthTexture.addEventListener("dispose",S)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,M.depthTexture);let me=r.convert(M.depthTexture.format),Be=r.convert(M.depthTexture.type),Me;M.depthTexture.format===Zn?Me=i.DEPTH_COMPONENT24:M.depthTexture.format===Ci&&(Me=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Me,M.width,M.height,0,me,Be,null)}}else B(M.depthTexture,0);let fe=te.__webglTexture,pe=yt(M),ie=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,ae=M.depthTexture.format===Ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Zn)Lt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,ie,fe,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ae,ie,fe,0);else if(M.depthTexture.format===Ci)Lt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,ie,fe,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ae,ie,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(L){let M=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){let $=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=$}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(q)for(let $=0;$<6;$++)Gt(M.__webglFramebuffer[$],L,$);else{let $=L.texture.mipmaps;$&&$.length>0?Gt(M.__webglFramebuffer[0],L,0):Gt(M.__webglFramebuffer,L,0)}else if(q){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=i.createRenderbuffer(),nt(M.__webglDepthbuffer[$],L,!1);else{let te=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,fe)}}else{let $=L.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),nt(M.__webglDepthbuffer,L,!1);else{let te=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,fe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function J(L,M,q){let $=n.get(L);M!==void 0&&ve($.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&j(L)}function Pe(L){let M=L.texture,q=n.get(L),$=n.get(M);L.addEventListener("dispose",x);let te=L.textures,fe=L.isWebGLCubeRenderTarget===!0,pe=te.length>1;if(pe||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,a.memory.textures++),fe){q.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[ie]=[];for(let ae=0;ae<M.mipmaps.length;ae++)q.__webglFramebuffer[ie][ae]=i.createFramebuffer()}else q.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let ie=0;ie<M.mipmaps.length;ie++)q.__webglFramebuffer[ie]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(pe)for(let ie=0,ae=te.length;ie<ae;ie++){let me=n.get(te[ie]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&Lt(L)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ie=0;ie<te.length;ie++){let ae=te[ie];q.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ie]);let me=r.convert(ae.format,ae.colorSpace),Be=r.convert(ae.type),Me=y(ae.internalFormat,me,Be,ae.normalized,ae.colorSpace,L.isXRRenderTarget===!0),ge=yt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,Me,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,q.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,M);for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)ve(q.__webglFramebuffer[ie][ae],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae);else ve(q.__webglFramebuffer[ie],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);d(M)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let ie=0,ae=te.length;ie<ae;ie++){let me=te[ie],Be=n.get(me),Me=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Me=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,Be.__webglTexture),Ye(Me,me),ve(q.__webglFramebuffer,L,me,i.COLOR_ATTACHMENT0+ie,Me,0),d(me)&&b(Me)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ie=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,$.__webglTexture),Ye(ie,M),M.mipmaps&&M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)ve(q.__webglFramebuffer[ae],L,M,i.COLOR_ATTACHMENT0,ie,ae);else ve(q.__webglFramebuffer,L,M,i.COLOR_ATTACHMENT0,ie,0);d(M)&&b(ie),t.unbindTexture()}L.depthBuffer&&j(L)}function we(L){let M=L.textures;for(let q=0,$=M.length;q<$;q++){let te=M[q];if(d(te)){let fe=w(L),pe=n.get(te).__webglTexture;t.bindTexture(fe,pe),b(fe),t.unbindTexture()}}}let De=[],At=[];function zt(L){if(L.samples>0){if(Lt(L)===!1){let M=L.textures,q=L.width,$=L.height,te=i.COLOR_BUFFER_BIT,fe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(L),ie=M.length>1;if(ie)for(let me=0;me<M.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);let ae=L.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let me=0;me<M.length;me++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);let Be=n.get(M[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,q,$,0,0,q,$,te,i.NEAREST),l===!0&&(De.length=0,At.length=0,De.push(i.COLOR_ATTACHMENT0+me),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(De.push(fe),At.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,At)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let me=0;me<M.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);let Be=n.get(M[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let M=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function yt(L){return Math.min(s.maxSamples,L.samples)}function Lt(L){let M=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function z(L){let M=a.render.frame;h.get(L)!==M&&(h.set(L,M),L.update())}function qt(L,M){let q=L.colorSpace,$=L.format,te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==ir&&q!==mn&&(ot.getTransfer(q)===pt?($!==In||te!==_n)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",q)),M}function Ke(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=I,this.getTextureUnits=P,this.setTextureUnits=D,this.setTexture2D=B,this.setTexture2DArray=O,this.setTexture3D=F,this.setTextureCube=X,this.rebindTextures=J,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Wx(i,e){function t(n,s=mn){let r,a=ot.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===_o)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ac)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ec)return i.BYTE;if(n===Tc)return i.SHORT;if(n===Ns)return i.UNSIGNED_SHORT;if(n===xo)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===$t)return i.HALF_FLOAT;if(n===Rc)return i.ALPHA;if(n===Cc)return i.RGB;if(n===In)return i.RGBA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===Ci)return i.DEPTH_STENCIL;if(n===vo)return i.RED;if(n===Mo)return i.RED_INTEGER;if(n===Pi)return i.RG;if(n===bo)return i.RG_INTEGER;if(n===So)return i.RGBA_INTEGER;if(n===Br||n===Or||n===Hr||n===zr)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eo||n===To||n===wo||n===Ao)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===To)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ro||n===Co||n===Po||n===Io||n===Lo||n===kr||n===Do)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ro||n===Co)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Po)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Io)return r.COMPRESSED_R11_EAC;if(n===Lo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===kr)return r.COMPRESSED_RG11_EAC;if(n===Do)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uo||n===No||n===Fo||n===Bo||n===Oo||n===Ho||n===zo||n===ko||n===Go||n===Vo||n===Wo||n===Xo||n===qo||n===Yo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===No)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ho)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ko)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Go)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zo||n===$o||n===Jo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Zo)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ko||n===Qo||n===Gr||n===jo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qx=`
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

}`,eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new _r(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tt({vertexShader:Xx,fragmentShader:qx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ee(new qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},th=class extends $n{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,g=null,_=typeof XRWebGLBinding!="undefined",m=new eh,d={},b=t.getContextAttributes(),w=null,y=null,E=[],v=[],S=new de,x=null,T=null,C=new Jt;C.viewport=new Pt;let U=new Jt;U.viewport=new Pt;let R=[C,U],I=new co,P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let se=E[Q];return se===void 0&&(se=new Ts,E[Q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Q){let se=E[Q];return se===void 0&&(se=new Ts,E[Q]=se),se.getGripSpace()},this.getHand=function(Q){let se=E[Q];return se===void 0&&(se=new Ts,E[Q]=se),se.getHandSpace()};function k(Q){let se=v.indexOf(Q.inputSource);if(se===-1)return;let ye=E[se];ye!==void 0&&(ye.update(Q.inputSource,Q.frame,c||a),ye.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",B);for(let Q=0;Q<E.length;Q++){let se=v[Q];se!==null&&(v[Q]=null,E[Q].disconnect(se))}P=null,D=null,m.reset();for(let Q in d)delete d[Q];if(e.setRenderTarget(w),p=null,u=null,f=null,s=null,y=null,ht.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(S.width,S.height,!1),T!==null){let Q=T.camera;Q.fov=T.fov,Q.zoom=T.zoom,Q.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",W),s.addEventListener("inputsourceschange",B),b.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(S),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ve=null,ve=null;b.depth&&(ve=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=b.stencil?Ci:Zn,Ve=b.stencil?Fs:zn);let nt={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(nt),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Ot(u.textureWidth,u.textureHeight,{format:In,type:_n,depthTexture:new bi(u.textureWidth,u.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ye={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ot(p.framebufferWidth,p.framebufferHeight,{format:In,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ht.setContext(s),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(Q){for(let se=0;se<Q.removed.length;se++){let ye=Q.removed[se],Ve=v.indexOf(ye);Ve>=0&&(v[Ve]=null,E[Ve].disconnect(ye))}for(let se=0;se<Q.added.length;se++){let ye=Q.added[se],Ve=v.indexOf(ye);if(Ve===-1){for(let nt=0;nt<E.length;nt++)if(nt>=v.length){v.push(ye),Ve=nt;break}else if(v[nt]===null){v[nt]=ye,Ve=nt;break}if(Ve===-1)break}let ve=E[Ve];ve&&ve.connect(ye)}}let O=new N,F=new N;function X(Q,se,ye){O.setFromMatrixPosition(se.matrixWorld),F.setFromMatrixPosition(ye.matrixWorld);let Ve=O.distanceTo(F),ve=se.projectionMatrix.elements,nt=ye.projectionMatrix.elements,Gt=ve[14]/(ve[10]-1),j=ve[14]/(ve[10]+1),J=(ve[9]+1)/ve[5],Pe=(ve[9]-1)/ve[5],we=(ve[8]-1)/ve[0],De=(nt[8]+1)/nt[0],At=Gt*we,zt=Gt*De,yt=Ve/(-we+De),Lt=yt*-we;if(se.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Lt),Q.translateZ(yt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ve[10]===-1)Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let z=Gt+yt,qt=j+yt,Ke=At-Lt,L=zt+(Ve-Lt),M=J*j/qt*z,q=Pe*j/qt*z;Q.projectionMatrix.makePerspective(Ke,L,M,q,z,qt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function oe(Q,se){se===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(se.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let se=Q.near,ye=Q.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),I.near=U.near=C.near=se,I.far=U.far=C.far=ye,(P!==I.near||D!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),P=I.near,D=I.far),I.layers.mask=Q.layers.mask|6,C.layers.mask=I.layers.mask&-5,U.layers.mask=I.layers.mask&-3;let Ve=Q.parent,ve=I.cameras;oe(I,Ve);for(let nt=0;nt<ve.length;nt++)oe(ve[nt],Ve);ve.length===2?X(I,C,U):I.projectionMatrix.copy(C.projectionMatrix),T===null&&Q.isPerspectiveCamera&&(T={camera:Q,fov:Q.fov,zoom:Q.zoom}),ce(Q,I,Ve)};function ce(Q,se,ye){ye===null?Q.matrix.copy(se.matrixWorld):(Q.matrix.copy(ye.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(se.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=or*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Q){return d[Q]};let Ge=null;function Ye(Q,se){if(h=se.getViewerPose(c||a),g=se,h!==null){let ye=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ve=!1;ye.length!==I.cameras.length&&(I.cameras.length=0,Ve=!0);for(let j=0;j<ye.length;j++){let J=ye[j],Pe=null;if(p!==null)Pe=p.getViewport(J);else{let De=f.getViewSubImage(u,J);Pe=De.viewport,j===0&&(e.setRenderTargetTextures(y,De.colorTexture,De.depthStencilTexture),e.setRenderTarget(y))}let we=R[j];we===void 0&&(we=new Jt,we.layers.enable(j),we.viewport=new Pt,R[j]=we),we.matrix.fromArray(J.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(J.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),j===0&&(I.matrix.copy(we.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ve===!0&&I.cameras.push(we)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let j=f.getDepthInformation(ye[0]);j&&j.isValid&&j.texture&&m.init(j,s.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let j=0;j<ye.length;j++){let J=ye[j].camera;if(J){let Pe=d[J];Pe||(Pe=new _r,d[J]=Pe);let we=f.getCameraImage(J);Pe.sourceTexture=we}}}}for(let ye=0;ye<E.length;ye++){let Ve=v[ye],ve=E[ye];Ve!==null&&ve!==void 0&&ve.update(Ve,se,c||a)}Ge&&Ge(Q,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}let ht=new Tf;ht.setAnimationLoop(Ye),this.setAnimationLoop=function(Q){Ge=Q},this.dispose=function(){}}},Yx=new Fe,If=new Qe;If.set(-1,0,0,0,1,0,0,0,1);function Zx(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Lc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,w,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,b,w):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===on&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===on&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let b=e.get(d),w=b.envMap,y=b.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(If),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=w*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===on&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $x(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){let v=E.program;n.uniformBlockBinding(y,v)}function c(y,E){let v=s[y.id];v===void 0&&(m(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",b));let S=E.program;n.updateUBOMapping(y,S);let x=e.render.frame;r[y.id]!==x&&(u(y),r[y.id]=x)}function h(y){let E=f();y.__bindingPointIndex=E;let v=i.createBuffer(),S=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,S,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let E=s[y.id],v=y.uniforms,S=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let x=0,T=v.length;x<T;x++){let C=v[x];if(Array.isArray(C))for(let U=0,R=C.length;U<R;U++)p(C[U],x,U,S);else p(C,x,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,E,v,S){if(_(y,E,v,S)===!0){let x=y.__offset,T=y.value;if(Array.isArray(T)){let C=0;for(let U=0;U<T.length;U++){let R=T[U],I=d(R);g(R,y.__data,C),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(C+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function g(y,E,v){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,v)}function _(y,E,v,S){let x=y.value,T=E+"_"+v;if(S[T]===void 0)return typeof x=="number"||typeof x=="boolean"?S[T]=x:ArrayBuffer.isView(x)?S[T]=x.slice():S[T]=x.clone(),!0;{let C=S[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return S[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(y){let E=y.uniforms,v=0,S=16;for(let T=0,C=E.length;T<C;T++){let U=Array.isArray(E[T])?E[T]:[E[T]];for(let R=0,I=U.length;R<I;R++){let P=U[R],D=Array.isArray(P.value)?P.value:[P.value];for(let k=0,W=D.length;k<W;k++){let B=D[k],O=d(B),F=v%S,X=F%O.boundary,oe=F+X;v+=X,oe!==0&&S-oe<O.storage&&(v+=S-oe),P.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=O.storage}}}let x=v%S;return x>0&&(v+=S-x),y.__size=v,y.__cache={},this}function d(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",y),E}function b(y){let E=y.target;E.removeEventListener("dispose",b);let v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function w(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var Jx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ei=null;function Kx(){return ei===null&&(ei=new Wi(Jx,16,16,Pi,$t),ei.name="DFG_LUT",ei.minFilter=an,ei.magFilter=an,ei.wrapS=Yn,ei.wrapT=Yn,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}var al=class{constructor(e={}){let{canvas:t=$u(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=_n}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=p,m=new Set([So,bo,Mo]),d=new Set([_n,zn,Ns,Fs,_o,yo]),b=new Uint32Array(4),w=new Int32Array(4),y=new N,E=null,v=null,S=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,U=!1,R=null,I=null,P=null,D=null;this._outputColorSpace=Bt;let k=0,W=0,B=null,O=-1,F=null,X=new Pt,oe=new Pt,ce=null,Ge=new he(0),Ye=0,ht=t.width,Q=t.height,se=1,ye=null,Ve=null,ve=new Pt(0,0,ht,Q),nt=new Pt(0,0,ht,Q),Gt=!1,j=new Rs,J=!1,Pe=!1,we=new Fe,De=new N,At=new Pt,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function Lt(){return B===null?se:1}let z=n;function qt(A,H){return t.getContext(A,H)}let Ke,L,M,q,$,te,fe,pe,ie,ae,me,Be,Me,ge,Oe,We,et,G,xe,re,_e,Te,le;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Rt,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",Dn,!1),z===null){let H="webgl2";if(z=qt(H,A),z===null)throw qt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(A){throw t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),Ze("WebGLRenderer: "+A.message),A}function He(){Ke=new sg(z),Ke.init(),_e=new Wx(z,Ke),L=new Zm(z,Ke,e,_e),M=new Gx(z,Ke),L.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),I=z.createFramebuffer(),P=z.createFramebuffer(),D=z.createFramebuffer(),q=new og(z),$=new Rx,te=new Vx(z,Ke,M,$,L,_e,q),fe=new ig(C),pe=new cp(z),Te=new qm(z,pe),ie=new rg(z,pe,q,Te),ae=new cg(z,ie,pe,Te,q),G=new lg(z,L,te),Oe=new $m($),me=new Ax(C,fe,Ke,L,Te,Oe),Be=new Zx(C,$),Me=new Px,ge=new Fx(Ke),et=new Xm(C,fe,M,ae,g,l),We=new kx(C,ae,L),le=new $x(z,q,L,M),xe=new Ym(z,Ke,q),re=new ag(z,Ke,q),q.programs=me.programs,C.capabilities=L,C.extensions=Ke,C.properties=$,C.renderLists=Me,C.shadowMap=We,C.state=M,C.info=q}_!==_n&&(T=new ug(_,t.width,t.height,o,s,r));let Ue=new th(C,z);this.xr=Ue,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let A=Ke.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ke.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(A){A!==void 0&&(se=A,this.setSize(ht,Q,!1))},this.getSize=function(A){return A.set(ht,Q)},this.setSize=function(A,H,K=!0){if(Ue.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}ht=A,Q=H,t.width=Math.floor(A*se),t.height=Math.floor(H*se),K===!0&&(t.style.width=A+"px",t.style.height=H+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(ht*se,Q*se).floor()},this.setDrawingBufferSize=function(A,H,K){ht=A,Q=H,se=K,t.width=Math.floor(A*K),t.height=Math.floor(H*K),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(_===_n){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(X)},this.getViewport=function(A){return A.copy(ve)},this.setViewport=function(A,H,K,Y){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,H,K,Y),M.viewport(X.copy(ve).multiplyScalar(se).round())},this.getScissor=function(A){return A.copy(nt)},this.setScissor=function(A,H,K,Y){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,H,K,Y),M.scissor(oe.copy(nt).multiplyScalar(se).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(A){M.setScissorTest(Gt=A)},this.setOpaqueSort=function(A){ye=A},this.setTransparentSort=function(A){Ve=A},this.getClearColor=function(A){return A.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,K=!0){let Y=0;if(A){let Z=!1;if(B!==null){let Ee=B.texture.format;Z=m.has(Ee)}if(Z){let Ee=B.texture.type,Re=d.has(Ee),Se=et.getClearColor(),Ie=et.getClearAlpha(),Ne=Se.r,it=Se.g,lt=Se.b;Re?(b[0]=Ne,b[1]=it,b[2]=lt,b[3]=Ie,z.clearBufferuiv(z.COLOR,0,b)):(w[0]=Ne,w[1]=it,w[2]=lt,w[3]=Ie,z.clearBufferiv(z.COLOR,0,w))}else Y|=z.COLOR_BUFFER_BIT}H&&(Y|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),R=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),et.dispose(),Me.dispose(),ge.dispose(),$.dispose(),fe.dispose(),ae.dispose(),Te.dispose(),le.dispose(),me.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Ih),Ue.removeEventListener("sessionend",Lh),Bi.stop()};function Rt(A){A.preventDefault(),ar("WebGLRenderer: Context Lost."),U=!0}function mt(){ar("WebGLRenderer: Context Restored."),U=!1;let A=q.autoReset,H=We.enabled,K=We.autoUpdate,Y=We.needsUpdate,Z=We.type;He(),q.autoReset=A,We.enabled=H,We.autoUpdate=K,We.needsUpdate=Y,We.type=Z}function Dn(A){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Vn(A){let H=A.target;H.removeEventListener("dispose",Vn),_d(H)}function _d(A){yd(A),$.remove(A)}function yd(A){let H=$.get(A).programs;H!==void 0&&(H.forEach(function(K){me.releaseProgram(K)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,K,Y,Z,Ee){H===null&&(H=zt);let Re=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Se=bd(A,H,K,Y,Z);M.setMaterial(Y,Re);let Ie=K.index,Ne=1;if(Y.wireframe===!0){if(Ie=ie.getWireframeAttribute(K),Ie===void 0)return;Ne=2}let it=K.drawRange,lt=K.attributes.position,Le=it.start*Ne,gt=(it.start+it.count)*Ne;Ee!==null&&(Le=Math.max(Le,Ee.start*Ne),gt=Math.min(gt,(Ee.start+Ee.count)*Ne)),Ie!==null?(Le=Math.max(Le,0),gt=Math.min(gt,Ie.count)):lt!=null&&(Le=Math.max(Le,0),gt=Math.min(gt,lt.count));let Yt=gt-Le;if(Yt<0||Yt===1/0)return;Te.setup(Z,Y,Se,K,Ie);let Dt,bt=xe;if(Ie!==null&&(Dt=pe.get(Ie),bt=re,bt.setIndex(Dt)),Z.isMesh)Y.wireframe===!0?(M.setLineWidth(Y.wireframeLinewidth*Lt()),bt.setMode(z.LINES)):bt.setMode(z.TRIANGLES);else if(Z.isLine){let ln=Y.linewidth;ln===void 0&&(ln=1),M.setLineWidth(ln*Lt()),Z.isLineSegments?bt.setMode(z.LINES):Z.isLineLoop?bt.setMode(z.LINE_LOOP):bt.setMode(z.LINE_STRIP)}else Z.isPoints?bt.setMode(z.POINTS):Z.isSprite&&bt.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))bt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let ln=Z._multiDrawStarts,Ae=Z._multiDrawCounts,fn=Z._multiDrawCount,dt=Ie?pe.get(Ie).bytesPerElement:1,Tn=$.get(Y).currentProgram.getUniforms();for(let Wn=0;Wn<fn;Wn++)Tn.setValue(z,"_gl_DrawID",Wn),bt.render(ln[Wn]/dt,Ae[Wn])}else if(Z.isInstancedMesh)bt.renderInstances(Le,Yt,Z.count);else if(K.isInstancedBufferGeometry){let ln=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ae=Math.min(K.instanceCount,ln);bt.renderInstances(Le,Yt,Ae)}else bt.render(Le,Yt)};function Ph(A,H,K,Y){R!==null&&A.isNodeMaterial&&R.setObject(Y,A),J===!0&&Oe.setState(A,K,!1),A.transparent===!0&&A.side===tt&&A.forceSinglePass===!1?(A.side=on,A.needsUpdate=!0,na(A,H,Y),A.side=wi,A.needsUpdate=!0,na(A,H,Y),A.side=tt):na(A,H,Y)}this.compile=function(A,H,K=null){K===null&&(K=A),R!==null&&R.renderStart(A,H,K),v=ge.get(K),v.init(H),x.push(v),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),A!==K&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights(),R!==null&&R.updateLights(v.state.lightsArray),Pe=this.localClippingEnabled,J=Oe.init(this.clippingPlanes,Pe),J===!0&&Oe.setGlobalState(this.clippingPlanes,H),R!==null&&We.render(v.state.shadowsArray,K,H);let Y=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Ee=Z.material;if(Ee)if(Array.isArray(Ee))for(let Re=0;Re<Ee.length;Re++){let Se=Ee[Re];Ph(Se,K,H,Z),Y.add(Se)}else Ph(Ee,K,H,Z),Y.add(Ee)}),v=x.pop(),R!==null&&R.renderEnd(),Y},this.compileAsync=function(A,H,K=null){let Y=this.compile(A,H,K);return new Promise(Z=>{function Ee(){if(Y.forEach(function(Re){let Ie=$.get(Re).currentProgram;(Ie===void 0||Ie.isReady())&&Y.delete(Re)}),Y.size===0){Z(A);return}setTimeout(Ee,10)}Ke.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Nl=null;function vd(A){Nl&&Nl(A)}function Ih(){Bi.stop()}function Lh(){Bi.start()}let Bi=new Tf;Bi.setAnimationLoop(vd),typeof self!="undefined"&&Bi.setContext(self),this.setAnimationLoop=function(A){Nl=A,Ue.setAnimationLoop(A),A===null?Bi.stop():Bi.start()},Ue.addEventListener("sessionstart",Ih),Ue.addEventListener("sessionend",Lh),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;R!==null&&R.renderStart(A,H);let K=Ue.enabled===!0&&Ue.isPresenting===!0,Y=T!==null&&(B===null||K)&&T.begin(C,B);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(H),H=Ue.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,H,B),v=ge.get(A,x.length),v.init(H),v.state.textureUnits=te.getTextureUnits(),x.push(v),we.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),j.setFromProjectionMatrix(we,On,H.reversedDepth),Pe=this.localClippingEnabled,J=Oe.init(this.clippingPlanes,Pe),E=Me.get(A,S.length),E.init(),S.push(E),Ue.enabled===!0&&Ue.isPresenting===!0){let Re=C.xr.getDepthSensingMesh();Re!==null&&Fl(Re,H,-1/0,C.sortObjects)}Fl(A,H,0,C.sortObjects),E.finish(),R!==null&&R.updateLights(v.state.lightsArray),C.sortObjects===!0&&E.sort(ye,Ve),yt=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,yt&&et.addToRenderList(E,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),J===!0&&Oe.beginShadows();let Z=v.state.shadowsArray;if(We.render(Z,A,H),J===!0&&Oe.endShadows(),(Y&&T.hasRenderPass())===!1){let Re=E.opaque,Se=E.transmissive;if(v.setupLights(),H.isArrayCamera){let Ie=H.cameras;if(Se.length>0)for(let Ne=0,it=Ie.length;Ne<it;Ne++){let lt=Ie[Ne];Uh(Re,Se,A,lt)}yt&&et.render(A);for(let Ne=0,it=Ie.length;Ne<it;Ne++){let lt=Ie[Ne];Dh(E,A,lt,lt.viewport)}}else Se.length>0&&Uh(Re,Se,A,H),yt&&et.render(A),Dh(E,A,H)}B!==null&&W===0&&(te.updateMultisampleRenderTarget(B),te.updateRenderTargetMipmap(B)),Y&&T.end(C),A.isScene===!0&&A.onAfterRender(C,A,H),Te.resetDefaultState(),O=-1,F=null,x.pop(),x.length>0?(v=x[x.length-1],te.setTextureUnits(v.state.textureUnits),J===!0&&Oe.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,S.pop(),S.length>0?E=S[S.length-1]:E=null,R!==null&&R.renderEnd()};function Fl(A,H,K,Y){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)v.pushLightProbeGrid(A);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(j)){Y&&At.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);let Re=ae.update(A),Se=A.material;Se.visible&&E.push(A,Re,Se,K,At.z,null,H)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(j))){let Re=ae.update(A),Se=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),At.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),At.copy(Re.boundingSphere.center)),At.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Se)){let Ie=Re.groups;for(let Ne=0,it=Ie.length;Ne<it;Ne++){let lt=Ie[Ne],Le=Se[lt.materialIndex];Le&&Le.visible&&E.push(A,Re,Le,K,At.z,lt,H)}}else Se.visible&&E.push(A,Re,Se,K,At.z,null,H)}}let Ee=A.children;for(let Re=0,Se=Ee.length;Re<Se;Re++)Fl(Ee[Re],H,K,Y)}function Dh(A,H,K,Y){let{opaque:Z,transmissive:Ee,transparent:Re}=A;v.setupLightsView(K),J===!0&&Oe.setGlobalState(C.clippingPlanes,K),Y&&M.viewport(X.copy(Y)),Z.length>0&&ta(Z,H,K),Ee.length>0&&ta(Ee,H,K),Re.length>0&&ta(Re,H,K),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Uh(A,H,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[Y.id]===void 0){let Le=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[Y.id]=new Ot(1,1,{generateMipmaps:!0,type:Le?$t:_n,minFilter:Ri,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let Ee=v.state.transmissionRenderTarget[Y.id],Re=Y.viewport||X;Ee.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);let Se=C.getRenderTarget(),Ie=C.getActiveCubeFace(),Ne=C.getActiveMipmapLevel();C.setRenderTarget(Ee),C.getClearColor(Ge),Ye=C.getClearAlpha(),Ye<1&&C.setClearColor(16777215,.5),C.clear(),yt&&et.render(K);let it=C.toneMapping;C.toneMapping=Hn;let lt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),v.setupLightsView(Y),J===!0&&Oe.setGlobalState(C.clippingPlanes,Y),ta(A,K,Y),te.updateMultisampleRenderTarget(Ee),te.updateRenderTargetMipmap(Ee),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let gt=0,Yt=H.length;gt<Yt;gt++){let Dt=H[gt],{object:bt,geometry:ln,material:Ae,group:fn}=Dt;if(Ae.side===tt&&bt.layers.test(Y.layers)){let dt=Ae.side;Ae.side=on,Ae.needsUpdate=!0,Nh(bt,K,Y,ln,Ae,fn),Ae.side=dt,Ae.needsUpdate=!0,Le=!0}}Le===!0&&(te.updateMultisampleRenderTarget(Ee),te.updateRenderTargetMipmap(Ee))}C.setRenderTarget(Se,Ie,Ne),C.setClearColor(Ge,Ye),lt!==void 0&&(Y.viewport=lt),C.toneMapping=it}function ta(A,H,K){let Y=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Ee=A.length;Z<Ee;Z++){let Re=A[Z],{object:Se,geometry:Ie,group:Ne}=Re,it=Re.material;it.allowOverride===!0&&Y!==null&&(it=Y),Se.layers.test(K.layers)&&Nh(Se,H,K,Ie,it,Ne)}}function Nh(A,H,K,Y,Z,Ee){R!==null&&Z.isNodeMaterial&&R.setObject(A,Z),A.onBeforeRender(C,H,K,Y,Z,Ee),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(C,H,K,Y,A,Ee),Z.transparent===!0&&Z.side===tt&&Z.forceSinglePass===!1?(Z.side=on,Z.needsUpdate=!0,C.renderBufferDirect(K,H,Y,Z,A,Ee),Z.side=wi,Z.needsUpdate=!0,C.renderBufferDirect(K,H,Y,Z,A,Ee),Z.side=tt):C.renderBufferDirect(K,H,Y,Z,A,Ee),A.onAfterRender(C,H,K,Y,Z,Ee)}function na(A,H,K){H.isScene!==!0&&(H=zt);let Y=$.get(A),Z=v.state.lights,Ee=v.state.shadowsArray,Re=Z.state.version,Se=me.getParameters(A,Z.state,Ee,H,K,v.state.lightProbeGridArray),Ie=me.getProgramCacheKey(Se),Ne=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,Y.fog=H.fog;let it=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=fe.get(A.envMap||Y.environment,it),Y.envMapRotation=Y.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Ne===void 0&&(A.addEventListener("dispose",Vn),Ne=new Map,Y.programs=Ne);let lt=Ne.get(Ie);if(lt!==void 0){if(Y.currentProgram===lt&&Y.lightsStateVersion===Re)return Bh(A,Se),lt}else Se.uniforms=me.getUniforms(A),R!==null&&A.isNodeMaterial&&R.build(A,K,Se),A.onBeforeCompile(Se,C),lt=me.acquireProgram(Se,Ie),Ne.set(Ie,lt),Y.uniforms=Se.uniforms;let Le=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=Oe.uniform),Bh(A,Se),Y.needsLights=Ed(A),Y.lightsStateVersion=Re,Y.needsLights&&(Le.ambientLightColor.value=Z.state.ambient,Le.lightProbe.value=Z.state.probe,Le.sunLights.value=Z.state.sun,Le.sunLightShadows.value=Z.state.sunShadow,Le.directionalLights.value=Z.state.directional,Le.directionalLightShadows.value=Z.state.directionalShadow,Le.spotLights.value=Z.state.spot,Le.spotLightShadows.value=Z.state.spotShadow,Le.rectAreaLights.value=Z.state.rectArea,Le.ltc_1.value=Z.state.rectAreaLTC1,Le.ltc_2.value=Z.state.rectAreaLTC2,Le.pointLights.value=Z.state.point,Le.pointLightShadows.value=Z.state.pointShadow,Le.hemisphereLights.value=Z.state.hemi,Le.sunShadowMatrix.value=Z.state.sunShadowMatrix,Le.sunShadowCascade.value=Z.state.sunShadowCascade,Le.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Le.spotLightMatrix.value=Z.state.spotLightMatrix,Le.spotLightMap.value=Z.state.spotLightMap,Le.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=v.state.lightProbeGridArray.length>0,Y.currentProgram=lt,Y.uniformsList=null,lt}function Fh(A){if(A.uniformsList===null){let H=A.currentProgram.getUniforms();A.uniformsList=Hs.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Bh(A,H){let K=$.get(A);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function Md(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(H.matrixWorld);for(let K=0,Y=A.length;K<Y;K++){let Z=A[K];if(Z.texture!==null&&Z.boundingBox.containsPoint(y))return Z}return null}function bd(A,H,K,Y,Z){H.isScene!==!0&&(H=zt),te.resetTextureUnits();let Ee=H.fog,Re=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?H.environment:null,Se=B===null?C.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ot.workingColorSpace,Ie=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ne=fe.get(Y.envMap||Re,Ie),it=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,lt=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!K.morphAttributes.position,gt=!!K.morphAttributes.normal,Yt=!!K.morphAttributes.color,Dt=Hn;Y.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Dt=C.toneMapping);let bt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ln=bt!==void 0?bt.length:0,Ae=$.get(Y),fn=v.state.lights;if(J===!0&&(Pe===!0||A!==F)){let Ct=A===F&&Y.id===O;Oe.setState(Y,A,Ct)}let dt=!1;Y.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==fn.state.version||Ae.outputColorSpace!==Se||Z.isBatchedMesh&&Ae.batching===!1||!Z.isBatchedMesh&&Ae.batching===!0||Z.isBatchedMesh&&Ae.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ae.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ae.instancing===!1||!Z.isInstancedMesh&&Ae.instancing===!0||Z.isSkinnedMesh&&Ae.skinning===!1||!Z.isSkinnedMesh&&Ae.skinning===!0||Z.isInstancedMesh&&Ae.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ae.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ae.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ae.instancingMorph===!1&&Z.morphTexture!==null||Ae.envMap!==Ne||Y.fog===!0&&Ae.fog!==Ee||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Oe.numPlanes||Ae.numIntersection!==Oe.numIntersection)||Ae.vertexAlphas!==it||Ae.vertexTangents!==lt||Ae.morphTargets!==Le||Ae.morphNormals!==gt||Ae.morphColors!==Yt||Ae.toneMapping!==Dt||Ae.morphTargetsCount!==ln||!!Ae.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Ae.__version=Y.version);let Tn=Ae.currentProgram;dt===!0&&(Tn=na(Y,H,Z),R&&Y.isNodeMaterial&&R.onUpdateProgram(Y,Tn,Ae));let Wn=!1,di=!1,es=!1,vt=Tn.getUniforms(),Vt=Ae.uniforms;if(M.useProgram(Tn.program)&&(Wn=!0,di=!0,es=!0),Y.id!==O&&(O=Y.id,di=!0),Ae.needsLights){let Ct=Md(v.state.lightProbeGridArray,Z);Ae.lightProbeGrid!==Ct&&(Ae.lightProbeGrid=Ct,di=!0)}if(Wn||F!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),vt.setValue(z,"projectionMatrix",A.projectionMatrix),vt.setValue(z,"viewMatrix",A.matrixWorldInverse);let mi=vt.map.cameraPosition;mi!==void 0&&mi.setValue(z,De.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&vt.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&vt.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),F!==A&&(F=A,di=!0,es=!0)}if(Ae.needsLights&&(fn.state.sunShadowMap.length>0&&vt.setValue(z,"sunShadowMap",fn.state.sunShadowMap,te),fn.state.directionalShadowMap.length>0&&vt.setValue(z,"directionalShadowMap",fn.state.directionalShadowMap,te),fn.state.spotShadowMap.length>0&&vt.setValue(z,"spotShadowMap",fn.state.spotShadowMap,te),fn.state.pointShadowMap.length>0&&vt.setValue(z,"pointShadowMap",fn.state.pointShadowMap,te)),Z.isSkinnedMesh){vt.setOptional(z,Z,"bindMatrix"),vt.setOptional(z,Z,"bindMatrixInverse");let Ct=Z.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),vt.setValue(z,"boneTexture",Ct.boneTexture,te))}Z.isBatchedMesh&&(vt.setOptional(z,Z,"batchingTexture"),vt.setValue(z,"batchingTexture",Z._matricesTexture,te),vt.setOptional(z,Z,"batchingIdTexture"),vt.setValue(z,"batchingIdTexture",Z._indirectTexture,te),vt.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&vt.setValue(z,"batchingColorTexture",Z._colorsTexture,te));let pi=K.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&G.update(Z,K,Tn),(di||Ae.receiveShadow!==Z.receiveShadow)&&(Ae.receiveShadow=Z.receiveShadow,vt.setValue(z,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&H.environment!==null&&(Vt.envMapIntensity.value=H.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=Kx()),di){if(vt.setValue(z,"toneMappingExposure",C.toneMappingExposure),Ae.needsLights&&Sd(Vt,es),Ee&&Y.fog===!0&&Be.refreshFogUniforms(Vt,Ee),Be.refreshMaterialUniforms(Vt,Y,se,Q,v.state.transmissionRenderTarget[A.id]),Ae.needsLights&&Ae.lightProbeGrid){let Ct=Ae.lightProbeGrid;Vt.probesSH.value=Ct.texture,Vt.probesMin.value.copy(Ct.boundingBox.min),Vt.probesMax.value.copy(Ct.boundingBox.max),Vt.probesResolution.value.copy(Ct.resolution)}Hs.upload(z,Fh(Ae),Vt,te)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Hs.upload(z,Fh(Ae),Vt,te),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&vt.setValue(z,"center",Z.center),vt.setValue(z,"modelViewMatrix",Z.modelViewMatrix),vt.setValue(z,"normalMatrix",Z.normalMatrix),vt.setValue(z,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Ct=Y.uniformsGroups;for(let mi=0,ts=Ct.length;mi<ts;mi++){let Hh=Ct[mi];le.update(Hh,Tn),le.bind(Hh,Tn)}}return Tn}function Sd(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Ed(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(A,H,K){let Y=$.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),$.get(A.texture).__webglTexture=H,$.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){let K=$.get(A);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,K=0){B=A,k=H,W=K;let Y=null,Z=!1,Ee=!1;if(A){let Se=$.get(A);if(Se.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(z.FRAMEBUFFER,Se.__webglFramebuffer),X.copy(A.viewport),oe.copy(A.scissor),ce=A.scissorTest,M.viewport(X),M.scissor(oe),M.setScissorTest(ce),O=-1;return}else if(Se.__webglFramebuffer===void 0)te.setupRenderTarget(A);else if(Se.__hasExternalTextures)te.rebindTextures(A,$.get(A.texture).__webglTexture,$.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let it=A.depthTexture;if(Se.__boundDepthTexture!==it){if(it!==null&&$.has(it)&&(A.width!==it.image.width||A.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(A)}}let Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ee=!0);let Ne=$.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ne[H])?Y=Ne[H][K]:Y=Ne[H],Z=!0):A.samples>0&&te.useMultisampledRTT(A)===!1?Y=$.get(A).__webglMultisampledFramebuffer:Array.isArray(Ne)?Y=Ne[K]:Y=Ne,X.copy(A.viewport),oe.copy(A.scissor),ce=A.scissorTest}else X.copy(ve).multiplyScalar(se).floor(),oe.copy(nt).multiplyScalar(se).floor(),ce=Gt;if(K!==0&&(Y=I),M.bindFramebuffer(z.FRAMEBUFFER,Y)&&M.drawBuffers(A,Y),M.viewport(X),M.scissor(oe),M.setScissorTest(ce),Z){let Se=$.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Se.__webglTexture,K)}else if(Ee){let Se=H;for(let Ie=0;Ie<A.textures.length;Ie++){let Ne=$.get(A.textures[Ie]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ie,Ne.__webglTexture,K,Se)}}else if(A!==null&&K!==0){let Se=$.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Se.__webglTexture,K)}O=-1};function Oh(A){let H=$.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=L.textureFormatReadable(A.format),H.__typeReadable=L.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,K,Y,Z,Ee,Re,Se=0){if(!(A&&A.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){M.bindFramebuffer(z.FRAMEBUFFER,Ie);try{let Ne=A.textures[Se],it=Ne.format,lt=Ne.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Se);let Le=Oh(Ne);if(Le.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Y&&K>=0&&K<=A.height-Z&&z.readPixels(H,K,Y,Z,_e.convert(it),_e.convert(lt),Ee)}finally{let Ne=B!==null?$.get(B).__webglFramebuffer:null;M.bindFramebuffer(z.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(A,H,K,Y,Z,Ee,Re,Se=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie)if(H>=0&&H<=A.width-Y&&K>=0&&K<=A.height-Z){M.bindFramebuffer(z.FRAMEBUFFER,Ie);let Ne=A.textures[Se],it=Ne.format,lt=Ne.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Se);let Le=Oh(Ne);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,gt),z.bufferData(z.PIXEL_PACK_BUFFER,Ee.byteLength,z.STREAM_READ),z.readPixels(H,K,Y,Z,_e.convert(it),_e.convert(lt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Yt=B!==null?$.get(B).__webglFramebuffer:null;M.bindFramebuffer(z.FRAMEBUFFER,Yt);let Dt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Ku(z,Dt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,gt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ee),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(gt),z.deleteSync(Dt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,K=0){let Y=Math.pow(2,-K),Z=Math.floor(A.image.width*Y),Ee=Math.floor(A.image.height*Y),Re=H!==null?H.x:0,Se=H!==null?H.y:0;te.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,K,0,0,Re,Se,Z,Ee),M.unbindTexture()},this.copyTextureToTexture=function(A,H,K=null,Y=null,Z=0,Ee=0){let Re,Se,Ie,Ne,it,lt,Le,gt,Yt,Dt=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if(K!==null)Re=K.max.x-K.min.x,Se=K.max.y-K.min.y,Ie=K.isBox3?K.max.z-K.min.z:1,Ne=K.min.x,it=K.min.y,lt=K.isBox3?K.min.z:0;else{let Vt=Math.pow(2,-Z);Re=Math.floor(Dt.width*Vt),Se=Math.floor(Dt.height*Vt),A.isDataArrayTexture?Ie=Dt.depth:A.isData3DTexture?Ie=Math.floor(Dt.depth*Vt):Ie=1,Ne=0,it=0,lt=0}Y!==null?(Le=Y.x,gt=Y.y,Yt=Y.z):(Le=0,gt=0,Yt=0);let bt=_e.convert(H.format),ln=_e.convert(H.type),Ae;H.isData3DTexture?(te.setTexture3D(H,0),Ae=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(te.setTexture2DArray(H,0),Ae=z.TEXTURE_2D_ARRAY):(te.setTexture2D(H,0),Ae=z.TEXTURE_2D),M.activeTexture(z.TEXTURE0),M.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),M.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),M.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);let fn=M.getParameter(z.UNPACK_ROW_LENGTH),dt=M.getParameter(z.UNPACK_IMAGE_HEIGHT),Tn=M.getParameter(z.UNPACK_SKIP_PIXELS),Wn=M.getParameter(z.UNPACK_SKIP_ROWS),di=M.getParameter(z.UNPACK_SKIP_IMAGES);M.pixelStorei(z.UNPACK_ROW_LENGTH,Dt.width),M.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Dt.height),M.pixelStorei(z.UNPACK_SKIP_PIXELS,Ne),M.pixelStorei(z.UNPACK_SKIP_ROWS,it),M.pixelStorei(z.UNPACK_SKIP_IMAGES,lt);let es=A.isDataArrayTexture||A.isData3DTexture,vt=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){let Vt=$.get(A),pi=$.get(H),Ct=$.get(Vt.__renderTarget),mi=$.get(pi.__renderTarget);M.bindFramebuffer(z.READ_FRAMEBUFFER,Ct.__webglFramebuffer),M.bindFramebuffer(z.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let ts=0;ts<Ie;ts++)es&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$.get(A).__webglTexture,Z,lt+ts),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$.get(H).__webglTexture,Ee,Yt+ts)),z.blitFramebuffer(Ne,it,Re,Se,Le,gt,Re,Se,z.DEPTH_BUFFER_BIT,z.NEAREST);M.bindFramebuffer(z.READ_FRAMEBUFFER,null),M.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||$.has(A)){let Vt=$.get(A),pi=$.get(H);M.bindFramebuffer(z.READ_FRAMEBUFFER,P),M.bindFramebuffer(z.DRAW_FRAMEBUFFER,D);for(let Ct=0;Ct<Ie;Ct++)es?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Vt.__webglTexture,Z,lt+Ct):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Vt.__webglTexture,Z),vt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,pi.__webglTexture,Ee,Yt+Ct):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,pi.__webglTexture,Ee),Z!==0?z.blitFramebuffer(Ne,it,Re,Se,Le,gt,Re,Se,z.COLOR_BUFFER_BIT,z.NEAREST):vt?z.copyTexSubImage3D(Ae,Ee,Le,gt,Yt+Ct,Ne,it,Re,Se):z.copyTexSubImage2D(Ae,Ee,Le,gt,Ne,it,Re,Se);M.bindFramebuffer(z.READ_FRAMEBUFFER,null),M.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else vt?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Ae,Ee,Le,gt,Yt,Re,Se,Ie,bt,ln,Dt.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(Ae,Ee,Le,gt,Yt,Re,Se,Ie,bt,Dt.data):z.texSubImage3D(Ae,Ee,Le,gt,Yt,Re,Se,Ie,bt,ln,Dt):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ee,Le,gt,Re,Se,bt,ln,Dt.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ee,Le,gt,Dt.width,Dt.height,bt,Dt.data):z.texSubImage2D(z.TEXTURE_2D,Ee,Le,gt,Re,Se,bt,ln,Dt);M.pixelStorei(z.UNPACK_ROW_LENGTH,fn),M.pixelStorei(z.UNPACK_IMAGE_HEIGHT,dt),M.pixelStorei(z.UNPACK_SKIP_PIXELS,Tn),M.pixelStorei(z.UNPACK_SKIP_ROWS,Wn),M.pixelStorei(z.UNPACK_SKIP_IMAGES,di),Ee===0&&H.generateMipmaps&&z.generateMipmap(Ae),M.unbindTexture()},this.initRenderTarget=function(A){$.get(A).__webglFramebuffer===void 0&&te.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?te.setTextureCube(A,0):A.isData3DTexture?te.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?te.setTexture2DArray(A,0):te.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){k=0,W=0,B=null,M.reset(),Te.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var ks={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Sn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Qx=new Qn(-1,1,1,-1,0,1),nh=class extends st{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}},jx=new nh,Ii=class{constructor(e){this._mesh=new ee(jx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Qx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var cl=class extends Sn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hi.clone(e.uniforms),this.material=new Tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ii(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Yr=class extends Sn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},hl=class extends Sn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ul=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new de);this._width=n.width,this._height=n.height,t=new Ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$t}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cl(ks),this.copyPass.material.blending=Cn,this.timer=new Ar}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Yr!==void 0&&(a instanceof Yr?n=!0:a instanceof hl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var fl=class extends Sn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new he}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Lf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new he(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Gs=class i extends Sn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new de(e.x,e.y):new de(256,256),this.clearColor=new he(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ot(r,a,{type:$t,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Ot(r,a,{type:$t,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Ot(r,a,{type:$t,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Lf;this.highPassUniforms=hi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Tt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new de(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=hi.clone(ks.uniforms),this.blendMaterial=new Tt({uniforms:this.copyUniforms,vertexShader:ks.vertexShader,fragmentShader:ks.fragmentShader,premultipliedAlpha:!0,blending:jn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new he,this._oldClearAlpha=1,this._basic=new Et,this._fsQuad=new Ii(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new de(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Tt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Gs.BlurDirectionX=new de(1,0);Gs.BlurDirectionY=new de(0,1);var Zr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var dl=class extends Sn{constructor(){super(),this.isOutputPass=!0,this.uniforms=hi.clone(Zr.uniforms),this.material=new Is({name:Zr.name,uniforms:this.uniforms,vertexShader:Zr.vertexShader,fragmentShader:Zr.fragmentShader}),this._fsQuad=new Ii(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Pr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ir?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Dr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ur?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Lr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ne=Math.PI*2;function En(i){return i=i%2147483647||7,function(){return i=i*16807%2147483647,(i-1)/2147483646}}var at=(i,e,t)=>i+(e-i)*t,Uf=(i,e,t)=>Math.max(e,Math.min(t,i));function kn(i,e,t,n){return[at(i[0],e[0],n),at(i[1],e[1],n)-t*4*n*(1-n),at(i[2],e[2],n)]}var Li={traditional:{bulbs:["#ffd58a","#ffb070","#ffe9b8","#ff9f5a"],flags:["#f08a24","#c2185b","#ffc861","#2f8f5b","#b8312b"],beams:["#ffd696","#ffaa5a","#ffecc8","#ffbe78"],hues:[28,42,16],sat:75,speed:.3,glow:"#ffbe6e"},dandiya:{bulbs:["#ffd58a","#ff6fa3","#7fe0a0","#8fc7ff","#ffb070","#c38fff"],flags:["#f08a24","#2f8f5b","#c2185b","#ffc861","#3b4cc0"],beams:["#ff78be","#78dcff","#ffc85a","#be8cff"],hues:[320,190,45,270],sat:82,speed:.75,glow:"#ffaac8"},devotional:{bulbs:["#ffe9b8","#ffd58a","#fff4dc"],flags:["#f08a24","#ffc861","#b8312b","#f3e6d0"],beams:["#ffecc8","#ffd696"],hues:[34,22],sat:60,speed:.12,glow:"#ffd296"},folk:{bulbs:["#ffb070","#ffd58a","#e8a33d","#9fe7b8"],flags:["#b8312b","#2f8f5b","#e8a33d","#3b4cc0"],beams:["#ffbe78","#d2ebaa","#ffdca0"],hues:[24,90,12],sat:62,speed:.28,glow:"#ffbe78"},sanedo:{bulbs:["#ffd58a","#ff8fb3","#ffb070","#9fe7b8"],flags:["#c2185b","#f08a24","#ffc861","#2f8f5b"],beams:["#ff8cbe","#ffc86e","#ffecc8"],hues:[340,30,50],sat:78,speed:.55,glow:"#ffaaaa"},fusion:{bulbs:["#8fc7ff","#c38fff","#ff6fa3","#7fe0ff"],flags:["#3b4cc0","#8e44ad","#c2185b","#16a085"],beams:["#78dcff","#be78ff","#ff5ab4","#5affdc"],hues:[200,280,320],sat:88,speed:1.05,glow:"#aa96ff"},nonstop:{bulbs:["#ffd58a","#ff6fa3","#8fc7ff","#ffb070","#7fe0a0"],flags:["#f08a24","#2f8f5b","#c2185b","#ffc861","#3b4cc0"],beams:["#ffc86e","#ff78be","#78dcff","#ffecc8"],hues:[30,320,190],sat:80,speed:.65,glow:"#ffbe8c"}};var gl={big:[{role:"tabla",u:.12,d:.95},{role:"dhol",u:.27,d:.75},{role:"guitar",u:.41,d:.85},{role:"drums",u:.56,d:1.8},{role:"keys",u:.72,d:.9},{role:"bass",u:.87,d:.85}],sheri:[{role:"dhol",u:.2,d:1},{role:"tabla",u:.35,d:1},{role:"guitar",u:.64,d:1},{role:"keys",u:.84,d:1}]};var Df=new Map;function ui(i){let e=Df.get(i);return e||(e=new he(i),Df.set(i,e)),e}function je(i,e,t,n={}){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new Rn(s);return r.colorSpace=n.linear?mn:Bt,r.anisotropy=n.anisotropy||4,n.repeat&&(r.wrapS=r.wrapT=rn,r.repeat.set(n.repeat[0],n.repeat[1])),r}var pl=null;function xl(){return pl||(pl=je(128,128,(i,e)=>{let t=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.55)"),t.addColorStop(.6,"rgba(255,255,255,.14)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)},{linear:!0}),pl)}function _l(i,e,t){return new he().setHSL((i%360+360)%360/360,e/100,t/100)}function ih(i){let e=i.map(([s,r])=>{let a=s.index?s.toNonIndexed():s.clone();return r&&a.applyMatrix4(r),a}),t=0;e.forEach(s=>t+=s.attributes.position.count);let n=new st;return["position","normal","uv","color"].forEach(s=>{if(!e.every(l=>l.attributes[s]))return;let r=e[0].attributes[s].itemSize,a=new Float32Array(t*r),o=0;e.forEach(l=>{a.set(l.attributes[s].array,o),o+=l.attributes[s].array.length}),n.setAttribute(s,new St(a,r))}),e.forEach(s=>s.dispose()),n}function sh(i,e){let t=i.index?i.toNonIndexed():i.clone(),n=new he(e),s=t.attributes.position.count,r=new Float32Array(s*3);for(let a=0;a<s;a++)r[a*3]=n.r,r[a*3+1]=n.g,r[a*3+2]=n.b;return t.setAttribute("color",new St(r,3)),t}function $r(i,e,t,n=0,s=1,r=s,a=s){return new Fe().compose(new N(i,e,t),new Nt().setFromEuler(new Ht(0,n,0)),new N(s,r,a))}function wt(i){return i.rotation.y=Math.PI,i.scale.x=-1,i}function Vs(i,e){return i.rotation.y=e,i.scale.x=-1,i}var Ce={flame:"#ff9038",flameCore:"#ffe4a8",tungsten:"#ffc27a",warm:"#ffd6a6",sodium:"#ffb152",tube:"#e4f3ff",flood:"#f3f1ff",amber:"#ffae62"},ml=new N;function kt(i){i.updateWorldMatrix(!0,!1);let e=i.geometry,t=e.parameters||{},n=[];if(e.type==="CylinderGeometry"){let a=1/Math.cos(Math.PI/8);for(let o=0;o<8;o++){let l=o/8*ne,c=Math.cos(l)*a,h=Math.sin(l)*a;n.push([c*t.radiusTop,t.height/2,h*t.radiusTop],[c*t.radiusBottom,-t.height/2,h*t.radiusBottom])}}else{e.boundingBox||e.computeBoundingBox();let r=e.boundingBox;for(let a=0;a<8;a++)n.push([a&1?r.max.x:r.min.x,a&2?r.max.y:r.min.y,a&4?r.max.z:r.min.z])}let s=[];return n.forEach(([r,a,o])=>{ml.set(r,a,o).applyMatrix4(i.matrixWorld),s.push(Math.round(ml.x*1e3)/1e3,Math.round(ml.y*1e3)/1e3,Math.round(ml.z*1e3)/1e3)}),s}function Di(i,e,t,n,s,r){let a=[];for(let o=0;o<8;o++)a.push(o&1?n:i,o&2?s:e,o&4?r:t);return a}var Jr=["side-left","side-right","stage-left","stage-centre","stage-right"].map(i=>`sponsors/bookphysio-${i}.webp`);function Kr(i,e,t,n={}){let s=je(e,t,a=>{a.fillStyle=n.bg||"#fbf1dc",a.fillRect(0,0,e,t)}),r=new Image;return r.onload=()=>{let a=s.image.getContext("2d"),o=n.pad!=null?n.pad:.04,l=e*(1-o*2),c=t*(1-o*2),h=Math.min(l/r.width,c/r.height),f=r.width*h,u=r.height*h;a.fillStyle=n.bg||"#fbf1dc",a.fillRect(0,0,e,t),a.imageSmoothingQuality="high",a.drawImage(r,(e-f)/2,(t-u)/2,f,u),n.frame&&(a.strokeStyle=n.frame,a.lineWidth=Math.max(3,t*.035),a.strokeRect(a.lineWidth/2,a.lineWidth/2,e-a.lineWidth,t-a.lineWidth)),s.needsUpdate=!0},r.src=i,s}var e_=["ambient","key","architectural","practical","festive","show","flame","garbo"],Nf={paused:{ambient:1,key:.75,architectural:1,practical:1,festive:.7,show:.2,flame:1,garbo:1},playing:{ambient:1,key:1,architectural:.85,practical:1,festive:1,show:1,flame:1,garbo:1},aarti:{ambient:.55,key:.22,architectural:.45,practical:.5,festive:.28,show:.06,flame:1.4,garbo:1.25}},yl=class{constructor(){this.now={...Nf.paused},this.cue="paused"}update(e,t){this.cue=(t.aarti||0)>.5?"aarti":t.on?"playing":"paused";let n=Nf[this.cue],s=t.reduce?1:Math.min(1,e*1.8);return e_.forEach(r=>{this.now[r]+=(n[r]-this.now[r])*s}),this.garboLit=t.lit!=null?t.lit:t.on?1:.35,this.now}};function rh(i,e){return .8+.11*Math.sin(i*7.3+e)*Math.sin(i*3.1+e*1.7)+.06*Math.sin(i*17+e*3.3)+.03*Math.sin(i*29+e*5.1)}var Ui=["key","architectural","practical","festive","show","flame"],Ki={key:"Key",architectural:"Arch",practical:"Practical",festive:"Festive",show:"Show",flame:"Flame"},Ff={soft:[[0,1],[.35,.55],[.7,.16],[1,0]],tight:[[0,1],[.12,.62],[.35,.2],[.7,.05],[1,0]]};function Bf(i,e,t,n,s=1024,r=null){let a=e.d/e.w,o=a>1?Math.max(64,Math.round(s/a)):s,l=a>1?s:Math.max(64,Math.round(s*a)),c={},h={};Ui.forEach(_=>{let m=document.createElement("canvas");m.width=o,m.height=l,h[_]=m;let d=new Rn(m);d.colorSpace=mn,d.flipY=!0,c[_]=d});function f(_){Ui.forEach(m=>{let d=h[m].getContext("2d");d.globalCompositeOperation="source-over",d.fillStyle="#000",d.fillRect(0,0,o,l)}),t.forEach(m=>{if(!m.ground||!h[m.layer])return;let d=h[m.layer].getContext("2d"),b=(m.x-e.cx+e.w/2)/e.w*o,w=(m.z-e.cz+e.d/2)/e.d*l,y=m.rx/e.w*o,E=m.rz/e.d*l,v=ui(m.theme?_.glow:m.hex),S=Math.min(1,m.k*2.5);d.save(),d.globalCompositeOperation="lighter",d.translate(b,w),d.scale(Math.max(.5,y),Math.max(.5,E));let x=d.createRadialGradient(0,0,0,0,0,1),T=`${Math.round(v.r*255)},${Math.round(v.g*255)},${Math.round(v.b*255)}`;(Ff[m.falloff]||Ff.soft).forEach(([C,U])=>x.addColorStop(C,`rgba(${T},${S*U})`)),d.fillStyle=x,d.beginPath(),d.arc(0,0,1,0,ne),d.fill(),d.restore()}),Ui.forEach(m=>c[m].needsUpdate=!0)}f(n);let u={gain:{value:5.8},uT:{value:0},mDecal:{value:null},decalA:{value:new Pt(0,-1,0,-1)}};if(r){let _=new Rn(r.canvas);_.colorSpace=Bt,_.anisotropy=8,u.mDecal.value=_;let m=r.rect,d=m.cx-m.w/2,b=m.cz-m.d/2;u.decalA.value.set(e.w/m.w,(e.cx-e.w/2-d)/m.w,e.d/m.d,1-(e.cz+e.d/2-b)/m.d)}else{let _=new Wi(new Uint8Array(4),1,1);_.needsUpdate=!0,u.mDecal.value=_}Ui.forEach(_=>{u["lv"+Ki[_]]={value:1},u["m"+Ki[_]]={value:c[_]}});let p=Ui.map(_=>`texture2D(m${Ki[_]}, vLayerUv).rgb * lv${Ki[_]}${_==="flame"?" * flameFlicker":""}`).join(" + "),g=i.material;return g.onBeforeCompile=_=>{Object.assign(_.uniforms,u),_.vertexShader=_.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vLayerUv;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vLayerUv = uv;`),_.fragmentShader=_.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vLayerUv;
uniform sampler2D ${Ui.map(m=>"m"+Ki[m]).join(", ")}, mDecal;
uniform float ${Ui.map(m=>"lv"+Ki[m]).join(", ")}, gain, uT;
uniform vec4 decalA;`).replace("#include <map_fragment>",`#include <map_fragment>
vec2 dUv = vec2(vLayerUv.x * decalA.x + decalA.y, vLayerUv.y * decalA.z + decalA.w);
if (dUv.x > 0.0 && dUv.x < 1.0 && dUv.y > 0.0 && dUv.y < 1.0) { vec4 dc = texture2D(mDecal, dUv); diffuseColor.rgb = mix(diffuseColor.rgb, dc.rgb, dc.a); }`).replace("#include <aomap_fragment>",`float flameFlicker = 0.8 + 0.12 * sin(uT * 7.3 + vLayerUv.x * 331.0 + vLayerUv.y * 197.0) * sin(uT * 3.1 + vLayerUv.y * 263.0) + 0.06 * sin(uT * 17.0 + vLayerUv.x * 157.0);
reflectedLight.indirectDiffuse += diffuseColor.rgb * gain * (${p});
#include <aomap_fragment>`)},g.customProgramCacheKey=()=>"ground-layers-3",g.needsUpdate=!0,{set(_,m){Ui.forEach(d=>{u["lv"+Ki[d]].value=_[d]}),u.uT.value=m||0},repaint:f,canvases:h,uniforms:u}}var Of=new Map;function V(i,e=.85,t=0,n){let s=i+"|"+e+"|"+t+(n?JSON.stringify(n):""),r=Of.get(s);return r||(r=new ze(Object.assign({color:i,roughness:e,metalness:t},n||{})),Of.set(s,r)),r}function Ml(i,e=3){return new Et({color:new he(i).multiplyScalar(e)})}var vl=class{constructor(e=.06,t=6){this.list=[],this.geo=new xn(e,t>6?1:0),this.mesh=null}add(e,t,n,s,r={}){this.list.push({x:e,y:t,z:n,idx:s,ph:r.ph!=null?r.ph:Math.random()*ne,k:r.k||1,s:r.s||1,twinkle:r.twinkle!=null?r.twinkle:.28,fixed:r.color||null,group:r.group||0,layer:r.layer||"festive"})}build(e){let t=this.list.length;if(!t)return null;let n=new xt(this.geo,new Et({color:"#ffffff"}),t),s=new Fe;return this.list.forEach((r,a)=>n.setMatrixAt(a,s.makeScale(r.s,r.s,r.s).setPosition(r.x,r.y,r.z))),n.instanceColor=new Xt(new Float32Array(t*3),3),n.frustumCulled=!1,e.add(n),this.mesh=n,n}update(e,t,n,s,r,a){var c,h;if(!this.mesh)return;let o=this.mesh.instanceColor.array,l=new he;for(let f=0;f<this.list.length;f++){let u=this.list[f];l.copy(u.fixed?ui(u.fixed):ui(t[u.idx%t.length]));let p=r?1:1-u.twinkle+u.twinkle*Math.sin(e*2.6+u.ph),g=a&&(c=a[u.group])!=null?c:1,_=u.layer==="festive"||u.layer==="show"?s*.25:0,m=u.k*((h=n[u.layer])!=null?h:1)*(p+_)*1.9*g;o[f*3]=l.r*m,o[f*3+1]=l.g*m,o[f*3+2]=l.b*m}this.mesh.instanceColor.needsUpdate=!0}},ah=class{constructor(){this.list=[];let e=new st;e.setAttribute("position",new $e([-.5,0,0,.5,0,0,0,-1.6,0],3)),e.setAttribute("normal",new $e([0,0,1,0,0,1,0,0,1],3)),this.geo=e}add(e,t,n,s,r,a){this.list.push({x:e,y:t,z:n,ry:s,size:r,idx:a,ph:Math.random()*ne})}build(e){let t=this.list.length;if(!t)return null;let n=new xt(this.geo,new vr({color:"#ffffff",side:tt}),t);return n.instanceColor=new Xt(new Float32Array(t*3),3),n.frustumCulled=!1,e.add(n),this.mesh=n,this.pose(0,!0),n}setPalette(e){if(!this.mesh)return;let t=this.mesh.instanceColor.array;this.list.forEach((n,s)=>{let r=ui(e[n.idx%e.length]);t[s*3]=r.r,t[s*3+1]=r.g,t[s*3+2]=r.b}),this.mesh.instanceColor.needsUpdate=!0}pose(e,t){if(!this.mesh)return;let n=new Nt,s=new Ht,r=new N,a=new N,o=new Fe;this.list.forEach((l,c)=>{s.set(t?0:Math.sin(e*1.7+l.ph)*.25,l.ry,0,"YXZ"),n.setFromEuler(s),r.set(l.size,l.size,l.size),a.set(l.x,l.y,l.z),this.mesh.setMatrixAt(c,o.compose(a,n,r))}),this.mesh.instanceMatrix.needsUpdate=!0}},oh=class{constructor(e="#2a2019",t=.8){this.pts=[],this.hex=e,this.opacity=t}line(e,t){this.pts.push(e[0],e[1],e[2],t[0],t[1],t[2])}cable(e,t,n,s=20){let r=kn(e,t,n,0);for(let a=1;a<=s;a++){let o=kn(e,t,n,a/s);this.line(r,o),r=o}}build(e){if(!this.pts.length)return null;let t=new st;t.setAttribute("position",new $e(this.pts,3));let n=new mr(t,new Cs({color:this.hex,transparent:this.opacity<1,opacity:this.opacity}));return e.add(n),n}};function Fi(i,e,t,n,s,r){i.wires.cable(e,t,n);let a=Math.hypot(t[0]-e[0],t[2]-e[2]),o=Math.max(2,Math.round(a/(s==="flags"?.9:1.1))),l=Math.atan2(t[0]-e[0],t[2]-e[2])+Math.PI/2;for(let c=1;c<o;c++){let h=kn(e,t,n,c/o);s==="flags"?i.flags.add(h[0],h[1],h[2],l,.3,c+r):(i.bulbs.add(h[0],h[1]-.06,h[2],c+r,{ph:c*1.7+r}),c%3===1&&i.pools.add(h[0],.02,h[2],2.8,2.8,"#ffd58a",.085,{layer:"festive",theme:!0}))}}var lh=class{constructor(){this.list=[]}add(e,t,n,s,r,a,o=1,l={}){let c=!!l.vertical,h=l.layer||"practical";this.list.push({x:e,y:t,z:n,rx:s,rz:r,hex:a,k:o,vertical:c,ry:l.ry||0,theme:l.theme||!1,layer:h,ground:!c&&t<.1&&!l.live,falloff:l.falloff||(h==="flame"?"tight":"soft"),ph:e*3.7+n*1.3})}build(e){this.bakedGround&&(this.list=this.list.filter(c=>!c.ground));let t=this.list.length;if(!t)return null;let n=new qe(1,1),s=new Et({map:xl(),color:"#ffffff",transparent:!0,blending:jn,depthWrite:!1,fog:!1,side:tt}),r=new xt(n,s,t);r.instanceColor=new Xt(new Float32Array(t*3),3);let a=new Nt,o=new Ht,l=new Fe;return this.list.forEach((c,h)=>{o.set(c.vertical?0:-Math.PI/2,c.ry,0,"YXZ"),a.setFromEuler(o),r.setMatrixAt(h,l.compose(new N(c.x,c.y,c.z),a,new N(c.rx*2,c.rz*2,1)))}),r.frustumCulled=!1,r.renderOrder=2,e.add(r),this.mesh=r,r}update(e,t,n=0,s=!1){if(!this.mesh)return;let r=this.mesh.instanceColor.array;this.list.forEach((a,o)=>{var h;let l=ui(a.theme?t:a.hex),c=a.k*((h=e[a.layer])!=null?h:1)*(a.layer==="flame"&&!s?rh(n,a.ph):1);r[o*3]=l.r*c,r[o*3+1]=l.g*c,r[o*3+2]=l.b*c}),this.mesh.instanceColor.needsUpdate=!0}};function t_(){let i=[[0,0],[.42,.1],[.55,.3],[.48,.55],[.3,.8],[.12,.98],[0,1.1]].map(([e,t])=>new de(e,t));return new tn(i,8)}function n_(){let i=[[0,0],[.55,.02],[.9,.25],[1,.55],[.92,.6],[.8,.4],[0,.35]].map(([e,t])=>new de(e,t));return new tn(i,10)}var ch=class{constructor(){this.list=[]}add(e,t,n,s={}){let r=s.s||.045;this.list.push({x:e,y:t,z:n,s:r,bowl:s.bowl===void 0?"clay":s.bowl,layer:s.layer||"flame",ph:s.ph!=null?s.ph:e*5.3+n*2.9+t*7.1,k:s.k||1})}build(e,t){let n=this.list.length;if(!n)return;let s=new Fe,r=this.list.filter(c=>c.bowl);if(r.length){let c=new xt(n_(),new ze({color:"#ffffff",roughness:.75,metalness:.2}),r.length),h=new he;r.forEach((f,u)=>{c.setMatrixAt(u,s.makeScale(f.s,f.s*.8,f.s).setPosition(f.x,f.y,f.z)),c.setColorAt(u,h.set(f.bowl==="brass"?"#c9953a":"#8a3f1e"))}),e.add(c)}let a=t_(),o=new xt(a,new Et({color:"#ffffff",fog:!1}),n),l=new xt(a,new Et({color:"#ffffff",fog:!1}),n);[o,l].forEach(c=>{c.instanceColor=new Xt(new Float32Array(n*3),3),c.frustumCulled=!1,e.add(c)}),this.body=o,this.core=l,this.update(0,{flame:1,garbo:1},!0)}lightPools(e){this.list.forEach(t=>{let n=t.s*20;e.pools.add(t.x,t.y<.1?.02:t.y+.01,t.z,n,n,Ce.flame,.24*t.k,{layer:t.layer,live:t.y>=.1})})}update(e,t,n){if(!this.body)return;let s=ui(Ce.flame),r=ui(Ce.flameCore),a=this.body.instanceColor.array,o=this.core.instanceColor.array,l=new Nt,c=new Ht,h=new N,f=new N,u=new Fe;this.list.forEach((p,g)=>{var y;let _=n?.9:rh(e,p.ph),m=(y=t[p.layer])!=null?y:1,d=p.s*1.5*(.75+.35*_)*Math.min(1.2,m),b=n?0:.12*Math.sin(e*2.3+p.ph)+.05*Math.sin(e*7+p.ph*2);c.set(0,0,b),l.setFromEuler(c),f.set(p.x,p.y+p.s*.3,p.z),h.set(p.s*.42,d,p.s*.42),this.body.setMatrixAt(g,u.compose(f,l,h)),h.set(p.s*.2,d*.55,p.s*.2),this.core.setMatrixAt(g,u.compose(f,l,h));let w=p.k*m*(.7+.45*_);a[g*3]=s.r*3.2*w,a[g*3+1]=s.g*3.2*w,a[g*3+2]=s.b*3.2*w,o[g*3]=r.r*5*w,o[g*3+1]=r.g*5*w,o[g*3+2]=r.b*5*w}),this.body.instanceMatrix.needsUpdate=this.core.instanceMatrix.needsUpdate=!0,this.body.instanceColor.needsUpdate=this.core.instanceColor.needsUpdate=!0}},i_=(()=>{let i=new Je(.04,1,1,20,1,!0);return i.translate(0,-.5,0),i})();function s_(){return new Tt({uniforms:{color:{value:new he("#ffffff")},opacity:{value:.2}},vertexShader:"varying float vK; varying vec3 vN; varying vec3 vV; void main(){ vK = -position.y; vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec3 color; uniform float opacity; varying float vK; varying vec3 vN; varying vec3 vV; void main(){ float edge = pow(abs(dot(vN, vV)), 1.4); float a = opacity * pow(1.0 - clamp(vK,0.0,1.0), 1.6) * edge; gl_FragColor = vec4(color * a, a); }",transparent:!0,depthWrite:!1,blending:jn,side:tt})}var Ni=class{constructor(e,t,n=10,s=1.2,r=.18){this.mesh=new ee(i_,s_()),this.mesh.material.uniforms.color.value.set(t),this.mesh.material.uniforms.opacity.value=r,this.mesh.renderOrder=3,this.mesh.frustumCulled=!1,this.length=n,this.spread=s,this.base=r,e.add(this.mesh),this._up=new N(0,-1,0)}aim(e,t){let n=new N(t[0]-e[0],t[1]-e[1],t[2]-e[2]),s=n.length();this.mesh.position.set(e[0],e[1],e[2]),this.mesh.quaternion.setFromUnitVectors(this._up,n.normalize());let r=Math.tan(this.spread*.5)*s;this.mesh.scale.set(r,s,r)}set(e,t){this.mesh.material.uniforms.color.value.set(e),this.mesh.material.uniforms.opacity.value=this.base*t,this.mesh.visible=t>.01}};function Hf(){let i={bulbs:new vl(.062),bigBulbs:new vl(.13,8),flags:new ah,wires:new oh,pools:new lh,flames:new ch,beams:[],updaters:[],lit:[]},e=new Map;return i.glow=(t,n=1,s="practical")=>{let r=t+"|"+n+"|"+s;if(!e.has(r)){let a=Ml(t,n);i.lit.push({mat:a,base:a.color.clone(),layer:s}),e.set(r,a)}return e.get(r)},i.selfLit=(t,n,s="practical")=>(t.map&&!t.emissiveMap?(t.emissiveMap=t.map,t.emissive.set("#ffffff")):t.emissive.getHex()===0&&t.emissive.set("#ffffff"),i.lit.push({mat:t,emissive:n,layer:s}),t),i.litMap=(t,n=1,s="practical",r)=>{let a=new Et(Object.assign({map:t,color:new he(n,n,n)},r||{}));return i.lit.push({mat:a,base:a.color.clone(),layer:s}),a},i}function zf(i,e){i.lit.forEach(t=>{var s;let n=(s=e[t.layer])!=null?s:1;t.emissive!=null?t.mat.emissiveIntensity=t.emissive*n:t.mat.color.copy(t.base).multiplyScalar(n)})}function kf(i,e){i.flames.build(e,i),i.bulbs.build(e),i.bigBulbs.build(e),i.flags.build(e),i.wires.build(e),i.pools.build(e)}function Gn(i,e,t,n,s,r,a=0,o=0,l=0){let c=new ee(e,t);return c.position.set(n,s,r),c.rotation.set(a,o,l),i.add(c),c}var Ln=(i,e,t,n,s,r,a,o,l,c,h)=>Gn(i,new ue(e,t,n),o,s,r,a,l,c,h),_t=(i,e,t,n,s,r,a,o,l=16,c,h,f)=>Gn(i,new Je(e,t,n,l),o,s,r,a,c,h,f),sn={shell:()=>V("#6b1420",.35,.3),chrome:()=>V("#b9bcc2",.3,.85),brass:()=>V("#b88a34",.42,.8),head:()=>V("#cfc4ad",.6),black:()=>V("#141416",.5,.3),wood:()=>V("#7a3f1c",.45,.1)},bl=null;function r_(){return bl||(bl=je(256,256,(i,e)=>{let t=e/2;i.fillStyle="#c9bda4",i.beginPath(),i.arc(t,t,t,0,ne),i.fill(),i.strokeStyle="#8e1b2c",i.lineWidth=14,i.beginPath(),i.arc(t,t,t-10,0,ne),i.stroke(),i.translate(t,t);for(let n=0;n<12;n++)i.save(),i.rotate(n/12*ne),i.fillStyle=n%2?"#c9963f":"#8e1b2c",i.beginPath(),i.ellipse(52,0,30,11,0,0,ne),i.fill(),i.restore();i.fillStyle="#c9963f",i.beginPath(),i.arc(0,0,22,0,ne),i.fill()}),bl)}var Sl=null;function a_(){return Sl||(Sl=je(512,128,(i,e,t)=>{i.fillStyle="#16161a",i.fillRect(0,0,e,t),i.fillStyle="#7fd0ff",i.fillRect(e*.42,t*.1,e*.16,t*.18),i.fillStyle="#8c8f96";for(let r=0;r<10;r++)i.beginPath(),i.arc(e*(.08+r*.03),t*.2,4,0,ne),i.fill(),i.beginPath(),i.arc(e*(.66+r*.03),t*.2,4,0,ne),i.fill();let n=t*.45,s=52;i.fillStyle="#f2efe6",i.fillRect(e*.02,n,e*.96,t*.5),i.fillStyle="rgba(0,0,0,.35)";for(let r=1;r<s;r++)i.fillRect(e*.02+e*.96*r/s,n,1,t*.5);i.fillStyle="#111";for(let r=0;r<s;r++)[0,1,3,4,5].indexOf(r%7)>=0&&i.fillRect(e*.02+e*.96*(r+.68)/s,n,e*.96/s*.6,t*.3)}),Sl)}var Gf=null,o_=()=>Gf||(Gf=new ze({roughness:.85,map:je(128,128,(i,e,t)=>{i.fillStyle="#141313",i.fillRect(0,0,e,t),i.fillStyle="rgba(255,255,255,.06)";for(let n=5;n<t-5;n+=5)for(let s=5;s<e-5;s+=5)i.fillRect(s,n,1.5,1.5);i.strokeStyle="rgba(255,255,255,.14)",i.lineWidth=3,i.beginPath(),i.arc(e/2,t*.58,e*.3,0,ne),i.stroke(),i.fillStyle="rgba(232,176,75,.7)",i.fillRect(e*.38,t*.08,e*.24,5)})}));function hh(i,e,t,n,s,r,a,o=0){let l=new ft;return l.position.set(s,r,a),l.rotation.x=o,i.add(l),Ln(l,e,t,n,0,t/2,0,V("#1a1818",.75)),wt(Gn(l,new qe(e*.92,t*.88),o_(),0,t/2,-n/2-.003)),l}function l_(i,e,t){let{kit:n,root:s,floor:r}=i,a=[],o=p=>(a.push(kt(p)),p),l=r+.3,c=sn.shell(),h=sn.chrome(),f=sn.brass();Ln(s,2.3,.3,2,e,r+.15,t-.5,V("#1c1414",.8)),Ln(s,2.2,.01,1.9,e,l+.005,t-.5,V("#4a1420",.95));let u=Gn(s,new qe(2.3,.03),n.glow("#ffb46a",1.2,"show"),e,r+.26,t-1.505);return wt(u),_t(s,.17,.16,.08,e,l+.52,t+.05,sn.black(),16),_t(s,.025,.025,.5,e,l+.25,t+.05,h,6),o(_t(s,.28,.28,.42,e,l+.29,t-.72,c,24,Math.PI/2)),wt(Gn(s,new gn(.27,28),new ze({map:r_(),roughness:.6}),e,l+.29,t-.935)),[-.935,-.505].forEach(p=>{Gn(s,new nn(.285,.014,5,24),h,e,l+.29,t+p).rotation.set(0,0,0)}),[[-.17,.13],[.17,.12]].forEach(([p,g])=>{let _=o(_t(s,g,g,.2,e+p,l+.8,t-.6,c,18,.35));_t(s,g*1.02,g*1.02,.012,e+p,l+.8+.1*Math.cos(.35),t-.6+.1*Math.sin(.35),sn.head(),18,.35),_t(s,.012,.012,.25,e+p*.5,l+.62,t-.66,h,5)}),o(_t(s,.18,.18,.13,e-.42,l+.62,t-.3,h,20,.1)),_t(s,.18,.18,.01,e-.42,l+.69,t-.29,sn.head(),20,.1),[0,1,2].forEach(p=>{let g=p/3*ne;_t(s,.01,.01,.6,e-.42+Math.cos(g)*.1,l+.28,t-.3+Math.sin(g)*.1,h,4,Math.sin(g)*.3,0,-Math.cos(g)*.3)}),o(_t(s,.2,.2,.38,e+.45,l+.42,t-.28,c,20)),_t(s,.2,.2,.01,e+.45,l+.615,t-.28,sn.head(),20),[0,1,2].forEach(p=>{let g=p/3*ne+.5;_t(s,.01,.01,.3,e+.45+Math.cos(g)*.2,l+.15,t-.28+Math.sin(g)*.2,h,4)}),_t(s,.012,.012,.95,e-.74,l+.47,t-.22,h,5),o(_t(s,.17,.17,.012,e-.74,l+.93,t-.22,f,22)),_t(s,.17,.17,.012,e-.74,l+.96,t-.22,f,22),_t(s,.012,.012,1.4,e-.66,l+.7,t-.8,h,5),o(_t(s,.24,.24,.01,e-.62,l+1.45,t-.74,f,24,.3,0,.2)),_t(s,.012,.012,1.2,e+.7,l+.6,t-.66,h,5),o(_t(s,.27,.27,.01,e+.66,l+1.25,t-.62,f,24,.3,0,-.2)),_t(s,.03,.02,.15,e+.1,l+.15,t-1.02,sn.black(),8,Math.PI/2),a}function c_(i,e,t){let{root:n,floor:s}=i,r=[],a=t-.36,o=s+.92,l=sn.black();[-.45,.45].forEach(f=>{[.5,-.5].forEach(u=>r.push(kt(Ln(n,.035,1.02,.035,e+f,s+.44,a,l,u)))),Ln(n,.04,.03,.62,e+f,s+.015,a,l)});let c=Ln(n,1.28,.1,.36,e,o,a,l);wt(Gn(n,new qe(1.2,.05),V("#5a5d66",.35,.8),e,o-.01,a-.182));let h=Gn(n,new qe(1.26,.34),new ze({map:a_(),roughness:.5}),e,o+.051,a);return h.rotation.x=-Math.PI/2,r.push(kt(c)),r}function h_(i,e,t){let{root:n,floor:s}=i,r=[];Ln(n,1.2,.1,1.1,e,s+.05,t+.05,V("#ece6d6",.95)),Ln(n,1.22,.02,1.12,e,s+.01,t+.05,V("#7e1827",.9)),_t(n,.13,.13,.9,e,s+.23,t+.52,V("#b8312b",.85),14,0,0,Math.PI/2);let a=t-.32,o=s+.1;[[-.16,.1],[.14,.075]].forEach(([h,f])=>{let u=Gn(n,new nn(f*.9,.025,5,16),V("#7e1827",.9),e+h,o+.02,a);u.rotation.x=Math.PI/2});let l=Gn(n,new tn([[0,0],[.07,.01],[.12,.07],[.12,.14],[.1,.2]].map(([h,f])=>new de(h,f)),18),V("#9aa0a6",.25,.85),e-.16,o+.02,a),c=_t(n,.075,.085,.25,e+.14,o+.145,a,sn.wood(),16);return _t(n,.1,.1,.008,e-.16,o+.225,a,sn.head(),18),_t(n,.075,.075,.008,e+.14,o+.272,a,sn.head(),16),_t(n,.035,.035,.01,e-.19,o+.229,a,sn.black(),12),_t(n,.028,.028,.01,e+.14,o+.276,a,sn.black(),12),r.push(kt(l),kt(c)),_t(n,.012,.012,.75,e+.42,o+.37,a+.1,sn.black(),5),_t(n,.01,.01,.4,e+.25,o+.72,a,sn.black(),5,0,0,Math.PI/2-.3),r}function uh(i,e,t){Ln(i.root,.46,.22,.32,e,i.floor+.13,t,V("#1c1c20",.5,.25),-.45)}function u_(i,e,t){let{root:n,floor:s}=i,r=new ft;r.position.set(e,s,t),r.rotation.x=.22,n.add(r);let a=V("#c46a2a",.3,.1),o=V("#3a2412",.5);_t(r,.19,.19,.1,0,.3,0,a,22,Math.PI/2),_t(r,.15,.15,.1,0,.58,0,a,20,Math.PI/2),wt(Gn(r,new gn(.05,16),sn.black(),0,.46,-.051)),Ln(r,.05,.5,.03,0,.92,-.02,o),Ln(r,.08,.14,.03,0,1.22,-.02,V("#1b120b",.5)),[-.12,.12].forEach(l=>Ln(n,.02,.5,.02,e+l,s+.24,t+.12,sn.black(),-.3))}function El(i,e,t,n){let s={kit:i,root:e,floor:n.floor},r={},a=n.x1-n.x0;return t.forEach(o=>{let l=n.x0+a*o.u,c=n.front+o.d;o.role==="drums"?r.drums=l_(s,l,c):o.role==="keys"?r.keys=c_(s,l,c):o.role==="tabla"?r.tabla=h_(s,l,c):o.role==="guitar"?(hh(e,.6,.48,.28,l-.55,n.floor,c+.55),n.small||(u_(s,l+.62,c+.35),uh(s,l,c-.95))):o.role==="bass"?(hh(e,.62,.9,.42,l+.5,n.floor,c+.62),hh(e,.62,.2,.34,l+.5,n.floor+.9,c+.6),uh(s,l,c-.95)):o.role==="dhol"&&!n.small&&uh(s,l,c-.95)}),r}function Vf(i){let e=new ft,t=new ft;e.add(t),i.add(e);let n=V("#2e2b33",.4,.3),s=V("#141417",.45,.5),r=V("#9a9ea6",.3,.8),a=(E,v,S,x,T,C=0,U=0,R=0)=>{let I=new ee(E,v);return I.position.set(S,x,T),I.rotation.set(C,U,R),t.add(I),I};a(new Ft(.2,16,10),n,0,0,0).scale.set(1,.42,1.45),a(new ue(.18,.07,.3),V("#1d1b22",.5,.2),0,.085,-.03);let l=[],c=[];[[1,1],[-1,1],[1,-1],[-1,-1]].forEach(([E,v],S)=>{let x=E*.38,T=v*.36,C=Math.hypot(x,T);a(new ue(.035,.03,C),s,x/2,.01,T/2,0,Math.atan2(x,T)),l.push(a(new Je(.04,.045,.06,12),r,x,.04,T));let U=a(new gn(.2,24),new Et({color:"#d8dce6",transparent:!0,opacity:.16,depthWrite:!1,side:tt}),x,.075,T,-Math.PI/2),R=a(new ue(.4,.004,.025),V("#1a1a1e",.5),x,.078,T);c.push({blade:R,dir:S%3===0?1:-1}),U.renderOrder=4}),[-1,1].forEach(E=>{a(new ue(.02,.2,.02),s,E*.12,-.14,.05,0,0,E*.25),a(new ue(.02,.02,.34),s,E*.15,-.24,.02)});let h=new ft;h.position.set(0,-.1,.2),t.add(h),h.add(new ee(new ue(.1,.08,.1),V("#222127",.4,.4)));let f=new ee(new Je(.03,.035,.06,14),V("#0c0c10",.15,.6));f.rotation.x=Math.PI/2,f.position.z=.07,h.add(f);let u=new ee(new gn(.024,14),new Et({color:new he("#5a7cc0").multiplyScalar(1.4)}));u.position.z=.101,h.add(u);let p=(E,v,S,x,T)=>{let C=new ee(new Ft(v,8,6),new Et({color:"#ffffff",fog:!1}));return C.position.set(S,x,T),C.userData.hex=new he(E),t.add(C),C},g=p("#ff4a3a",.03,-.38,0,.36),_=p("#5dff8a",.03,.38,0,.36),m=p("#ffffff",.022,0,0,.3),d=p("#ff2a1e",.03,0,.13,-.05),b=p("#ffffff",.035,0,-.1,-.1),w=p("#ff2020",.008,.035,.03,.05);h.add(w);let y=(E,v)=>{E.material.color.copy(E.userData.hex).multiplyScalar(v),E.visible=v>.01};return e.visible=!1,{group:e,update(E,v,S){if(!E){e.visible=!1;return}e.visible=!0,e.position.set(E.x,E.y,E.z);let x=E.tx-E.x,T=E.tz-E.z,C=Math.hypot(x,T)||1;e.rotation.y=Math.atan2(x,T),t.rotation.x=.08+(S?0:.03*Math.sin(v*1.3)),t.rotation.z=S?0:.04*Math.sin(v*.9+1),h.rotation.x=Math.atan2(E.y,C)-t.rotation.x,c.forEach((P,D)=>{P.blade.rotation.y=S?D:v*90*P.dir});let U=v%1,R=S||U<.08||U>.18&&U<.26?1:0,I=S?0:v%1.6<.05?1:0;y(g,3),y(_,3),y(m,2.2),y(d,5*R),y(b,8*I),y(w,3*(Math.floor(v*1.5)%2===0||S?1:.3))}}}function Wf(i,e){i.fov=e.fov,i.aspect=e.aspect,i.near=.3,i.far=400,i.position.set(e.eye[0],e.eye[1],-e.eye[2]),i.up.set(0,1,0),i.lookAt(e.at[0],e.at[1],-e.at[2]),i.updateProjectionMatrix(),i.updateMatrixWorld()}function Xf(i,e,t=10){let n=Math.acos(Math.max(.2,Math.min(1,1-.45*e.tilt))),s=Math.cos(e.rot),r=Math.sin(e.rot),a=new N(r,0,-s),o=new N(e.fx,0,-e.fz);i.position.copy(o).addScaledVector(new N(0,1,0),Math.cos(n)*90).addScaledVector(a,-Math.sin(n)*90),i.up.copy(a),i.lookAt(o);let l=e.span*e.aspect/2;i.left=-l,i.right=l,i.top=.56*e.span,i.bottom=-.44*e.span,i.near=Math.max(5,90-Math.max(3,t-1)/Math.cos(n)),i.far=200,i.updateProjectionMatrix(),i.updateMatrixWorld()}function Tl(i){return new Tt({uniforms:{map:{value:null},texel:{value:new de(1/256,1/256)},blur:{value:0},gain:{value:i}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D map; uniform vec2 texel; uniform float blur, gain; varying vec2 vUv;
      void main(){
        vec3 c = texture2D(map, vUv).rgb;
        if (blur > 0.0) {
          vec2 d = texel * blur;
          c = c * 0.25 + (texture2D(map, vUv + vec2(d.x, 0.0)).rgb + texture2D(map, vUv - vec2(d.x, 0.0)).rgb + texture2D(map, vUv + vec2(0.0, d.y)).rgb + texture2D(map, vUv - vec2(0.0, d.y)).rgb) * 0.125
            + (texture2D(map, vUv + d).rgb + texture2D(map, vUv - d).rgb + texture2D(map, vUv + vec2(d.x, -d.y)).rgb + texture2D(map, vUv + vec2(-d.x, d.y)).rgb) * 0.0625;
        }
        gl_FragColor = vec4(c * gain, 1.0);
      }`})}var Ws=null;function f_(){return Ws||(Ws=je(64,256,(i,e,t)=>{i.clearRect(0,0,e,t),i.strokeStyle="#9a96a6",i.lineWidth=5,i.beginPath(),i.moveTo(3,0),i.lineTo(3,t),i.moveTo(e-3,0),i.lineTo(e-3,t),i.stroke(),i.lineWidth=3,i.beginPath();for(let n=0;n<t;n+=32)i.moveTo(3,n),i.lineTo(e-3,n+16),i.lineTo(3,n+32);i.stroke()}),Ws.wrapS=Ws.wrapT=rn,Ws)}var fh=new Map;function wl(i){if(!fh.has(i)){let e=f_().clone();e.needsUpdate=!0,e.repeat.set(1,i),fh.set(i,new ze({map:e,alphaTest:.4,side:tt,metalness:.7,roughness:.4}))}return fh.get(i)}function d_(){return je(256,128,(i,e,t)=>{i.fillStyle="#6b1420",i.fillRect(0,0,e,t),i.fillStyle="#1f2a5a",i.fillRect(10,10,e-20,t-20),i.fillStyle="#7e1827",i.fillRect(18,18,e-36,t-36),i.strokeStyle="#d6a64a",i.lineWidth=2,i.strokeRect(14,14,e-28,t-28),i.fillStyle="#d6a64a",i.beginPath(),i.ellipse(e/2,t/2,34,22,0,0,ne),i.fill(),i.fillStyle="#1f2a5a",i.beginPath(),i.ellipse(e/2,t/2,24,14,0,0,ne),i.fill();for(let n=0;n<14;n++)i.fillStyle=n%2?"#d6a64a":"#e9dcc0",i.beginPath(),i.arc(28+n*15.4,26,3,0,ne),i.arc(28+n*15.4,t-26,3,0,ne),i.fill()})}function dh(i,e,t){let n=new ft,s=wl(t);for(let r=0;r<4;r++){let a=new ee(new qe(e,i),s),o=r/4*ne;a.position.set(Math.sin(o)*e/2,0,Math.cos(o)*e/2),a.rotation.y=o,n.add(a)}return n}var Qr=null;function p_(){return Qr||(Qr=je(256,64,(i,e,t)=>{for(let n=0;n<e;n++){let s=.5+.5*Math.sin(n/e*ne*6);i.fillStyle=`rgb(${Math.round(26+40*s)},${Math.round(5+8*s)},${Math.round(11+16*s)})`,i.fillRect(n,0,1,t)}}),Qr.wrapS=rn,Qr)}function m_(i){return je(512,64,(e,t,n)=>{let s=t/i;e.fillStyle="#4a1020",e.beginPath(),e.moveTo(0,0),e.lineTo(t,0);for(let r=i;r>0;r--){let a=r*s,o=a-s;e.lineTo(a,n*.45),e.quadraticCurveTo((o+a)/2,n*1.05,o,n*.45)}e.closePath(),e.fill(),e.strokeStyle="#d6a64a",e.lineWidth=3,e.beginPath();for(let r=0;r<i;r++){let a=r*s;e.moveTo(a,n*.45),e.quadraticCurveTo(a+s/2,n*1.02,a+s,n*.45)}e.stroke(),e.fillStyle="#d6a64a",e.fillRect(0,2,t,3)})}function g_(){return je(512,64,(i,e,t)=>{let n=i.createLinearGradient(0,0,e,0);for(let s=0;s<40;s++)n.addColorStop(s/40,"#1c070b"),n.addColorStop((s+.45)/40,"#4a1420");i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="#c9963f",i.fillRect(0,0,e,4)})}function ph(i,e){let t=new ft,n=e.z,s=e.depth||3.2,r=n+s,a=e.x1-e.x0,o=(e.x0+e.x1)/2,l=.4,c=n+s*.45,h=(B,O,F,X,oe)=>{let ce=new ee(B,O);return ce.position.set(F,X,oe),t.add(ce),ce},f=h(new qe(a,e.h),new ze({map:g_(),roughness:.9}),o,e.h/2,n);if(wt(f),h(new ue(a,e.h,s),V("#1a0e0a",.9),o,e.h/2-.005,n+s/2+.01),h(new ue(a+.02,.02,s+.02),V("#2a1a12",.78,.05),o,e.h+.01,n+s/2).receiveShadow=!0,h(new ue(a+.04,.05,.05),V("#c9963f",.35,.7),o,e.h,n-.02),e.sponsors){let B=e.x0+2.9,O=e.x1-2.9,F=.7,X=(O-B-F*(e.sponsors-1))/e.sponsors;for(let oe=0;oe<e.sponsors;oe++){let ce=Kr(Jr[2+oe%3],1024,Math.round(1024*e.h*.7/X),{bg:"#fbf1dc",frame:"#c9963f",pad:.03}),Ge=h(new qe(X,e.h*.7),i.selfLit(new ze({map:ce,color:"#a8a296",roughness:.8}),.12),B+oe*(X+F)+X/2,e.h*.49,n-.02);wt(Ge)}}[-1,1].forEach(B=>{let O=B<0?e.x0+.5:e.x1-2.3,F=4,X=.9/F;for(let Ge=0;Ge<F;Ge++){let Ye=e.h*(Ge+1)/F;h(new ue(1.8,Ye,X),V(Ge%2?"#3a1a14":"#44201a",.85),O+.9,Ye/2,n-.9+Ge*X+X/2),h(new ue(1.8,.02,.03),V("#d6a64a",.35,.7),O+.9,Ye,n-.9+Ge*X)}let oe=B<0?O+1.8:O,ce=h(new Je(.02,.02,Math.hypot(.95,e.h)),V("#c9963f",.35,.7),oe,e.h/2+.95,n-.47);ce.rotation.x=Math.atan2(.95,e.h)});let u=e.x0+1,p=e.x1-1,g=p-u,_=e.screenBottom||e.h,m=e.screenTop-_;h(new ue(g+.3,m+.3,.2),V("#0d0b10",.6),o,_+m/2,r+.12),i.pools.add(o,_+m*.5,r-.05,g*.75,m*.9,"#ffffff",.1,{vertical:!0,theme:!0,layer:"show"});let d=wt(h(new qe(g,m),Tl(1.3),o,_+m/2,r));if(d.visible=!1,d.userData.dynamic=!0,_>e.h+l+.5){let B=h(new qe(g+.3,_-e.h-l+.15),V("#0b0810",.95),o,(e.h+l+_)/2,r+.01);wt(B);let O=En(7);for(let F=0;F<Math.round(g*4);F++)i.bulbs.add(u+O()*g,e.h+l+.2+O()*(_-e.h-l-.3),r-.005,0,{color:"#fff4e0",k:.45,s:.22,twinkle:.85,ph:O()*ne,layer:"festive"})}i.pools.add(o,.02,n-3,a*.55,4.5,"#ffffff",.14,{theme:!0,layer:"show"}),i.pools.add(o,.02,n-9,a*.8,7,"#ffffff",.05,{theme:!0,layer:"show"}),h(new ue(a-2.8,l,r-c),V("#2b1c14",.8),o,e.h+l/2,(c+r)/2);let b=h(new qe(a-2.8,.035),new Et({color:"#ffffff"}),o,e.h+l*.5,c-.01);wt(b);let w=.4;[e.x0-.4,e.x1+.4].forEach(B=>{let O=dh(e.truss,w,Math.round(e.truss/1.2));O.position.set(B,e.truss/2,n),t.add(O)});let y=dh(a+.8+w,w,Math.round((a+1)/1.2));y.rotation.z=Math.PI/2,y.position.set(o,e.truss,n),t.add(y),[e.x0-.4,e.x1+.4].forEach(B=>{h(new ue(.28,.16,.22),V("#141217",.5,.4),B,.08,n-.45),i.bigBulbs.add(B,.18,n-.45,0,{color:"#ffffff",k:.8,s:.45,twinkle:0,layer:"show"}),i.pools.add(B,e.truss*.42,n-.24,.55,e.truss*.48,"#ffffff",.2,{vertical:!0,theme:!0,layer:"show"}),i.pools.add(B,.02,n-.6,1.4,1.4,"#ffffff",.12,{theme:!0,layer:"show"})}),[-1,1].forEach(B=>i.pools.add(B<0?e.x0+.25:e.x1-.25,e.h+(e.truss-e.h)*.4,n+.1,.5,(e.truss-e.h)*.45,"#ffffff",.14,{vertical:!0,theme:!0,layer:"show"}));for(let B=0;B<6;B++){let O=at(e.x0+1.5,e.x1-1.5,(B+.5)/6);h(new ue(.22,.1,.16),V("#141217",.5,.4),O,.05,n-.55),i.pools.add(O,e.h*.45,n-.03,1.2,e.h*.5,Ce.warm,.05,{vertical:!0,layer:"show"})}[-1,1].forEach(B=>{let O=p_().clone();O.needsUpdate=!0,O.repeat.set(.3,1);let F=h(new qe(.9,e.truss-.3-e.h),new ze({map:O,roughness:1,side:tt}),B<0?e.x0+.25:e.x1-.25,e.h+(e.truss-.3-e.h)/2,n+.15);wt(F)});let E=h(new qe(a+.4,.95),new ze({map:m_(Math.max(4,Math.round(a/2.2))),transparent:!0,alphaTest:.3,roughness:1,side:tt}),o,e.truss-.6,n+.1);wt(E);let v=[];for(let B=0;B<10;B++){let O=at(e.x0,e.x1,(B+.5)/10),F=e.truss-.35;if(B%2){let X=h(new ue(.34,.12,.3),V("#18161b",.5,.3),O,F+.12,n),oe=h(new Je(.13,.16,.34,12),V("#232027",.45,.4),O,F-.08,n);oe.userData.dynamic=!0,v.push({x:O,y:F-.2,mesh:oe,i:B}),X.castShadow=!1}i.bigBulbs.add(O,F-.28,n-.02,B,{ph:B,twinkle:.1,layer:"show"})}let S=v.map((B,O)=>new Ni(t,"#ffffff",10,.32,.12)),x=[];for(let B=0;B<5;B++)x.push(new Ni(t,"#ffffff",8,.3,.16));[-1,1].forEach(B=>{let O=o+B*e.arrays;for(let F=0;F<6;F++){let X=h(new ue(1.4,.55,.8),V("#0b0909",.7),O,e.truss-1.3-F*.6,n-.4-F*F*.03);X.rotation.x=-F*.04}[[-.4,.55,.78,1.1],[.4,.55,.78,1.1],[0,1.38,.7,.55]].forEach(([F,X,oe,ce])=>h(new ue(oe,ce,.8),V("#0e0c0c",.75),O+F,X,n-.4))});for(let B=0;B<=16;B++)i.bulbs.add(at(e.x0,e.x1,B/16),e.h-.03,n-.05,B,{ph:B*.7,s:.75,k:.55,twinkle:.15});let T=[];for(let B=0;B<8;B++){let O=[at(e.x0,e.x1,B/8),e.h-.06,n-.06],F=[at(e.x0,e.x1,(B+1)/8),e.h-.06,n-.06];for(let X=1;X<14;X++)T.push(kn(O,F,.35,X/14))}let C=new xt(new Ft(.05,6,4),new ze({color:"#ffffff",roughness:.9}),T.length);C.instanceColor=new Xt(new Float32Array(T.length*3),3);let U=new Fe,R=new he("#f29a2e"),I=new he("#f6c342");T.forEach((B,O)=>{C.setMatrixAt(O,U.makeTranslation(B[0],B[1],B[2]));let F=O%3?R:I;C.instanceColor.setXYZ(O,F.r,F.g,F.b)}),t.add(C);let P=[],D=V("#1c1c20",.5,.25),k=V("#0b0b0c",.9);[-.34,-.12,.12,.34].forEach(B=>{let O=o+B*a,F=h(new ue(.6,.3,.42),D,O,e.h+.16,n+.2);F.rotation.x=-.45,P.push(kt(F)),h(new ue(.03,.01,s*.55),k,O+.22,e.h+.025,n+.4+s*.275),i.bulbs.add(O+.22,e.h+.1,n-.02,0,{color:"#5aa8ff",k:.5,s:.25,twinkle:0,layer:"show"})});let W=null;e.band&&([.2,.8].forEach(B=>{let O=h(new qe(a*.3,(r-c)*.7),new ze({map:d_(),roughness:1}),e.x0+a*B,e.h+l+.006,c+(r-c)*.45);O.rotation.x=-Math.PI/2}),W=El(i,t,e.band,{x0:e.x0,x1:e.x1,front:c,floor:e.h+l}));for(let B=0;B<10;B+=2){let O=at(e.x0,e.x1,(B+.5)/10),F=h(new Je(.12,.1,.3,10),V("#141217",.45,.5),O,e.truss-.5,n-.02);F.rotation.x=.5,h(new ue(.28,.03,.03),V("#141217",.5,.5),O,e.truss-.32,n-.02)}return e.sideScreens&&[-1,1].forEach(B=>{let O=Math.min(B*14.4,B*21.4),F=Math.max(B*14.4,B*21.4),X=5,oe=9,ce=n+.3;[O+.7,F-.7].forEach(Ge=>{let Ye=dh(X,.32,Math.round(X/1.1));Ye.position.set(Ge,X/2,ce+.25),t.add(Ye)}),h(new ue(F-O+.5,oe-X+.5,.2),V("#0b0a0d",.6),(O+F)/2,(X+oe)/2,ce+.12),h(new ue(F-O,.12,.5),V("#15131a",.6,.3),(O+F)/2,X-.3,ce+.3),i.pools.add((O+F)/2,.02,ce-3,(F-O)*.6,4,"#ffffff",.12,{theme:!0,layer:"show"})}),{root:t,stageFront:P,bandHoles:W,feedScreen:d,front:{x:o,y:e.h,z:n},wash:{pos:[o,e.truss-.4,n-4],to:[o,e.h+l+1.3,n+s*.62]},update(B,O){let{TH:F,pulse:X,reduce:oe,close:ce,lv:Ge}=O,Ye=Ge.show,ht=Ge.show>.5;b.material.color.copy(_l(F.hues[Math.floor(B*.5)%F.hues.length]+20*Math.sin(B*F.speed),F.sat,45)).multiplyScalar((.4+.3*X)*Ye),v.forEach((Q,se)=>{let ye=oe?0:B*(.4+F.speed),Ve=Math.sin(ye+se*1.3)*3.5,ve=[Q.x+Ve,0,n-5-(ce?0:2+2*Math.sin(ye*.7+se))];Q.mesh.rotation.x=-.4+Math.sin(ye+se)*.2,Q.mesh.rotation.z=Math.sin(ye+se*1.3)*.3,S[se].aim([Q.x,Q.y,n],ve),S[se].set(F.beams[se%F.beams.length],Ye*(.8+.5*X))}),x.forEach((Q,se)=>{let ye=at(e.x0+1.9,e.x1-1.9,(se+.5)/5),Ve=oe?0:Math.sin(B*(.5+F.speed*.6)+se*1.7)*2.2;Q.aim([ye,e.h+l,r-.2],[ye+Ve,e.screenTop+3,r-1.4]),Q.set(F.beams[(se+1)%F.beams.length],Math.max(0,Ye-.3)/.7*(.9+.5*X))})}}}var Qi=29.530588853,x_=Date.UTC(2e3,0,6,18,14);function __(i){i==null&&(i=((Date.now()-x_)/864e5%Qi+Qi)%Qi);let e=(1-Math.cos(i/Qi*ne))/2,t=i<Qi/2,n=i<1||i>Qi-1?"new moon":e>.97?"full moon":Math.abs(e-.5)<.06?t?"first quarter":"last quarter":e<.5?t?"waxing crescent":"waning crescent":t?"waxing gibbous":"waning gibbous";return{age:i,lit:e,name:n,waxing:t}}function y_(i){return je(256,256,(e,t)=>{let n=t*.2,s=t/2,r=t/2,a=i/Qi,o=(1-Math.cos(a*ne))/2,l=e.createRadialGradient(s,r,n*.8,s,r,t/2);l.addColorStop(0,`rgba(255,238,205,${.05+.3*o})`),l.addColorStop(.4,`rgba(255,238,205,${.02+.08*o})`),l.addColorStop(1,"rgba(255,238,205,0)"),e.fillStyle=l,e.fillRect(0,0,t,t);let c=e.createRadialGradient(s-n*.2,r-n*.2,n*.1,s,r,n);if(c.addColorStop(0,"rgba(128,134,166,.4)"),c.addColorStop(1,"rgba(78,82,110,.34)"),e.fillStyle=c,e.beginPath(),e.arc(s,r,n,0,ne),e.fill(),o<.004)return;let h=()=>{e.beginPath(),e.arc(0,0,n,-Math.PI/2,Math.PI/2,!1),e.ellipse(0,0,n*Math.abs(1-2*o),n,0,Math.PI/2,-Math.PI/2,o<.5),e.closePath()};e.save(),e.translate(s,r),a>.5&&e.scale(-1,1),e.save(),e.globalAlpha=.35,e.filter=`blur(${Math.max(.6,n*.06)}px)`,h(),e.fillStyle="#f5e6c8",e.fill(),e.restore(),h(),e.save(),e.clip();let f=e.createRadialGradient(-n*.25,-n*.3,n*.05,0,0,n*1.02);f.addColorStop(0,"#fffaf0"),f.addColorStop(.55,"#f7ecd6"),f.addColorStop(.88,"#e6d4b2"),f.addColorStop(1,"#c9b692"),e.fillStyle=f,e.fillRect(-n,-n,n*2,n*2),e.filter=`blur(${Math.max(.5,n*.07)}px)`,e.fillStyle="rgba(150,140,128,.22)",[[-.28,-.3,.26,.2],[.08,-.38,.2,.15],[.3,-.05,.22,.26],[-.1,.02,.3,.2],[-.36,.22,.18,.14],[.14,.36,.16,.12]].forEach(u=>{e.beginPath(),e.ellipse(u[0]*n*(a>.5?-1:1),u[1]*n,u[2]*n,u[3]*n,.4,0,ne),e.fill()}),e.restore(),e.restore()})}function qf(i,e){let t=new ft,n=i==="sheri"?"#2a1b36":"#3d1f1a",s=new ee(new Ft(900,32,16),new Tt({side:on,depthWrite:!1,fog:!1,uniforms:{top:{value:new he("#04051a")},mid:{value:new he("#140f33")},low:{value:new he(n)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position.z = gl_Position.w; }",fragmentShader:"uniform vec3 top; uniform vec3 mid; uniform vec3 low; varying vec3 vP; void main(){ float h = clamp(vP.y, -0.2, 1.0); vec3 c = h < 0.12 ? mix(low, mid, smoothstep(-0.02, 0.12, h)) : mix(mid, top, smoothstep(0.12, 0.7, h)); gl_FragColor = vec4(c, 1.0); }"}));s.renderOrder=-10,t.add(s);let r=En(99),a=900,o=new Float32Array(a*3),l=new Float32Array(a*3);for(let b=0;b<a;b++){let w=r()*ne,y=Math.asin(.06+Math.pow(r(),.8)*.94),E=800;o[b*3]=Math.cos(w)*Math.cos(y)*E,o[b*3+1]=Math.sin(y)*E,o[b*3+2]=Math.sin(w)*Math.cos(y)*E;let v=.35+r()*.65,S=r();l[b*3]=v,l[b*3+1]=v*(.92+S*.06),l[b*3+2]=v*(.8+(1-S)*.2)}let c=new st;c.setAttribute("position",new St(o,3)),c.setAttribute("color",new St(l,3));let h=new gr(c,new Ps({size:1.6,sizeAttenuation:!1,vertexColors:!0,fog:!1,depthWrite:!1,transparent:!0}));t.add(h);let f=__(e),u=Math.min(f.age,29.5-f.age,14.8)/14.8,p=new pr(new ws({map:y_(f.age),fog:!1,depthWrite:!1,transparent:!0})),g=at(.08,.5,u),_=.5,m=700;p.position.set(Math.sin(_)*Math.cos(g)*m,Math.sin(g)*m,Math.cos(_)*Math.cos(g)*m),p.scale.setScalar(m*.11),t.add(p);let d={dir:p.position.clone().normalize(),intensity:.08+.25*f.lit};return{root:t,moonLight:d,info:f}}function Yf(i=170){let e=En(17),t=new ft,n=je(128,128,(c,h,f)=>{c.fillStyle="#0d0913",c.fillRect(0,0,h,f);for(let u=8;u<f;u+=16)for(let p=6;p<h;p+=14)e()<.3&&(c.fillStyle=e()<.7?"rgba(255,196,120,.9)":"rgba(190,210,255,.6)",c.fillRect(p,u,6,8))});n.wrapS=n.wrapT=rn;let s=new ze({color:"#0d0913",emissive:"#ffffff",emissiveMap:n,emissiveIntensity:.6,roughness:1,fog:!1}),r=new ue(1,1,1),a=110,o=new xt(r,s,a),l=new Fe;for(let c=0;c<a;c++){let h=c/a*ne+e()*.03,f=i+e()*60,u=12+e()*22,p=5+Math.pow(e(),2)*26;l.compose(new N(Math.sin(h)*f,p/2-1,Math.cos(h)*f),new Nt().setFromAxisAngle(new N(0,1,0),h),new N(u,p,10)),o.setMatrixAt(c,l)}return t.add(o),t}var v_=["position","normal","uv","color"];function M_(i,e){for(let t=i;t&&t!==e;t=t.parent)if(t.userData.dynamic)return!0;return!1}var Zf=(i,e)=>Math.round(i/e)*e;function b_(i,e){return i.isMeshStandardMaterial&&!i.wireframe&&!e.has(i)&&!i.map&&!i.emissiveMap&&!i.normalMap&&!i.alphaMap&&!i.transparent&&i.emissive.getHex()===0&&i.opacity===1}var mh=new Map;function S_(i){let e=Math.min(.95,Math.max(.3,Zf(i.roughness,.2))),t=Zf(i.metalness,.4),n=e+"|"+t+"|"+i.side+"|"+!!i.flatShading;return mh.has(n)||mh.set(n,new ze({color:"#ffffff",roughness:e,metalness:t,side:i.side,flatShading:i.flatShading,vertexColors:!0})),mh.get(n)}function Al(i,e=new Set){i.updateMatrixWorld(!0);let t=new Fe().copy(i.matrixWorld).invert(),n=new Map,s=[];i.traverse(a=>{if(!a.isMesh||a.isInstancedMesh||a.isSkinnedMesh||!a.geometry||!a.visible||M_(a,i))return;let o=a.material;if(Array.isArray(o)||o.isShaderMaterial||o.transparent)return;let l=a.geometry;if(!l.attributes.position||!l.attributes.normal)return;let c=b_(o,e),h=c?S_(o):o,f=c?"position+normal+color":v_.filter(p=>l.attributes[p]).join("+"),u=h.uuid+"|"+f+"|"+a.castShadow+a.receiveShadow;n.has(u)||n.set(u,{mat:h,flat:c,sig:f,list:[],cast:a.castShadow,receive:a.receiveShadow,order:a.renderOrder}),n.get(u).list.push(a)});let r=0;return n.forEach(a=>{if(a.list.length<2&&!a.flat)return;let o=a.sig.split("+"),l=[],c=0;a.list.forEach(u=>{let p=new Fe().multiplyMatrices(t,u.matrixWorld),g=(u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone()).applyMatrix4(p);if(a.flat){let _=u.material.color,m=g.attributes.position.count,d=u.material.vertexColors&&g.attributes.color,b=new Float32Array(m*3);for(let w=0;w<m;w++)b[w*3]=_.r*(d?d.getX(w):1),b[w*3+1]=_.g*(d?d.getY(w):1),b[w*3+2]=_.b*(d?d.getZ(w):1);g.setAttribute("color",new St(b,3))}p.determinant()<0&&o.forEach(_=>{let m=g.attributes[_],d=m.itemSize,b=m.array;for(let w=0;w<m.count;w+=3)for(let y=0;y<d;y++){let E=(w+1)*d+y,v=(w+2)*d+y,S=b[E];b[E]=b[v],b[v]=S}}),l.push(g),c+=g.attributes.position.count,s.push(u)});let h=new st;o.forEach(u=>{let p=l[0].attributes[u].itemSize,g=new Float32Array(c*p),_=0;l.forEach(m=>{g.set(m.attributes[u].array,_),_+=m.attributes[u].array.length}),h.setAttribute(u,new St(g,p))}),l.forEach(u=>u.dispose()),h.computeBoundingSphere();let f=new ee(h,a.mat);f.castShadow=a.cast,f.receiveShadow=a.receive,f.renderOrder=a.order,i.add(f),r+=a.list.length}),s.forEach(a=>a.parent&&a.parent.remove(a)),r}var $f={mandvi:i=>({r:i?.78:1,top:i?2.4:2.85}),potScale:1.35},E_=[[.3,18,0],[.43,24,1],[.56,24,0],[.69,18,1]];function Jf(i,e,t,n){i.fillStyle=n,E_.forEach(([s,r,a])=>{for(let o=0;o<r;o++){let l=(o+.5+(a?.5:0))/r*e,c=s*t,h=5.5;i.beginPath(),a?(i.moveTo(l,c-h*1.3),i.lineTo(l+h*1.1,c+h*.8),i.lineTo(l-h*1.1,c+h*.8),i.closePath()):i.arc(l,c,h,0,ne),i.fill()}})}function T_(){let i=je(512,256,(t,n,s)=>{let r=t.createLinearGradient(0,0,0,s);r.addColorStop(0,"#0c0603"),r.addColorStop(1,"#3a200e"),t.fillStyle=r,t.fillRect(0,0,n,s),Jf(t,n,s,"#fff")}),e=je(512,256,(t,n,s)=>{let r=t.createLinearGradient(0,0,0,s);r.addColorStop(0,"#8a3f1e"),r.addColorStop(.5,"#b0592b"),r.addColorStop(1,"#6d2f16"),t.fillStyle=r,t.fillRect(0,0,n,s),[[.22,"#f3e6d0"],[.25,"#c9963f"],[.77,"#c9963f"],[.8,"#f3e6d0"]].forEach(([a,o])=>{t.fillStyle=o,t.fillRect(0,a*s,n,3)}),t.strokeStyle="rgba(243,230,208,.8)",t.lineWidth=2;for(let a=0;a<24;a++){let o=a/24*n;t.beginPath(),t.moveTo(o,.84*s),t.lineTo(o+n/48,.9*s),t.lineTo(o+n/24,.84*s),t.stroke()}Jf(t,n,s,"rgba(30,10,4,.9)")});return{holes:i,clay:e}}function Kf(i,e,t){let n=e/2,s=e/2;i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,e,e),i.translate(n,n),i.fillStyle="rgba(58,29,18,.85)",i.beginPath(),i.arc(0,0,s*.86,0,ne),i.fill();let r=[t[0],"#f4a261","#2a9d8f",t[2%t.length],"#e9c46a","#c2185b"];for(let a=0;a<2;a++){let o=a?16:8,l=a?s*.68:s*.42,c=a?s*.14:s*.3,h=a?s*.07:s*.13;for(let f=0;f<o;f++)i.save(),i.rotate(f/o*ne+(a?Math.PI/16:0)),i.fillStyle=r[(f+a)%r.length],i.beginPath(),i.ellipse(l,0,c,h,0,0,ne),i.fill(),i.fillStyle="rgba(255,243,214,.8)",i.beginPath(),i.ellipse(l,0,c*.35,h*.3,0,0,ne),i.fill(),i.restore()}for(let a=0;a<40;a++){let o=a/40*ne;i.fillStyle="#fff3d6",i.beginPath(),i.arc(Math.cos(o)*s*.8,Math.sin(o)*s*.8,4,0,ne),i.fill()}i.fillStyle="#f6c342",i.beginPath(),i.arc(0,0,s*.2,0,ne),i.fill(),i.fillStyle="#c0392b",i.beginPath(),i.arc(0,0,s*.1,0,ne),i.fill()}var Rl=null;function w_(){return Rl||(Rl=je(64,256,(i,e,t)=>{for(let n=0;n<12;n++)i.fillStyle=n%2?"#e8b04b":"#8e1b1b",i.fillRect(0,n/12*t,e,t/12+1);i.fillStyle="rgba(255,230,170,.5)";for(let n=0;n<12;n+=2)for(let s=0;s<e;s+=8)i.fillRect(s+2,(n+.4)/12*t,3,3)}),Rl)}function Qf(){return je(128,180,(i,e,t)=>{i.fillStyle="#e8b04b",i.fillRect(0,0,e,t);let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#f6c35a"),n.addColorStop(1,"#c0392b"),i.fillStyle=n,i.fillRect(10,12,e-20,t-22);let s=i.createRadialGradient(e/2,t*.38,2,e/2,t*.38,e*.34);s.addColorStop(0,"rgba(255,248,220,1)"),s.addColorStop(1,"rgba(255,240,200,0)"),i.fillStyle=s,i.fillRect(0,0,e,t),i.fillStyle="#9b1f1a",i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(e/2,t*.22,e,0),i.lineTo(e,t*.4),i.quadraticCurveTo(e*.8,t*.15,e*.7,t*.1),i.lineTo(e*.3,t*.1),i.quadraticCurveTo(e*.2,t*.15,0,t*.4),i.closePath(),i.fill()})}function jf(i,e,t){let n=new xt(new Ft(t,6,4),new ze({color:"#ffffff",roughness:.9}),e.length);n.instanceColor=new Xt(new Float32Array(e.length*3),3);let s=new Fe,r=new he("#f29a2e"),a=new he("#f6c342");return e.forEach((o,l)=>{n.setMatrixAt(l,s.makeTranslation(o[0],o[1],o[2])),n.setColorAt(l,l%2?r:a)}),i.add(n),n}function td(i,{small:e,flags:t}){let n=new ft,s=$f.potScale,{r,top:a}=$f.mandvi(e),o=T_(),l=document.createElement("canvas");l.width=l.height=512,Kf(l.getContext("2d"),512,t);let c=new Rn(l);c.colorSpace=Bt,c.anisotropy=4;let h=new ee(new gn(2.1,48),new ze({map:c,roughness:.95,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-2}));h.rotation.x=-Math.PI/2,h.position.y=.012,h.receiveShadow=!0,n.add(h);for(let F=0;F<12;F++){let X=(F+.5)/12*ne;i.flames.add(Math.cos(X)*1.95,.012,Math.sin(X)*1.95,{s:.06,k:.32})}let f=new ft;f.scale.setScalar(s),n.add(f),[[-.3,-.3],[.3,-.3],[.3,.3],[-.3,.3]].forEach(([F,X])=>{let oe=new ee(new ue(.05,.5,.05),V("#3b2213",.8));oe.position.set(F,.25,X),f.add(oe)});let u=new ee(new Je(.44,.5,.28,16,1,!0),i.selfLit(new ze({color:"#9b1f1a",roughness:.85,side:tt,emissive:"#7a2412"}),.55,"flame"));u.position.y=.42,f.add(u);let p=new ee(new Je(.44,.44,.03,16),V("#4a0c0a",.9));p.position.y=.56,f.add(p);let g=new ee(new nn(.5,.012,4,32),V("#e8b04b",.35,.7));g.rotation.x=Math.PI/2,g.position.y=.285,f.add(g);let _=A_.map(([F,X])=>new de(F,X)),m=new ze({map:o.clay,emissiveMap:o.holes,emissive:"#ffb45a",emissiveIntensity:0,roughness:.82}),d=new ee(new tn(_,40),m);d.position.y=.575,d.castShadow=!0,f.add(d);let b=[];for(let F=0;F<22;F++){let X=F/22*ne;b.push([Math.cos(X)*.19,.575+.47+.03*Math.cos(X),Math.sin(X)*.19])}jf(f,b,.028);let w=new ee(new Je(.1,.06,.05,14),V("#6a2c14",.85));w.position.y=.575+.62,f.add(w);let y=new Ft(.045,10,8);y.scale(1,2.4,1),y.translate(0,.1,0);let E=new ee(y,Ml("#ffd27a",4));E.position.y=.575+.63,E.userData.dynamic=!0,f.add(E);let v=new ee(y,Ml("#fff4d0",7));v.scale.setScalar(.5),v.position.y=.575+.64,v.userData.dynamic=!0,f.add(v);let S=new Je(.06,.075,a,10),x=i.selfLit(new ze({map:w_(),roughness:.6,metalness:.15}),.28,"flame");[[-r,-r],[r,-r],[r,r],[-r,r]].forEach(([F,X])=>{let oe=new ee(S,x);oe.position.set(F,a/2,X),oe.castShadow=!0,n.add(oe);let ce=new ee(new ue(.2,.12,.2),V("#5a1510",.7));ce.position.set(F,.06,X),n.add(ce)});let T=new ee(new tn(ed.map(([F,X])=>new de(F*r,X)),32),V("#a8141a",.32,.25,{side:tt,emissive:"#8a1410",emissiveIntensity:.9}));T.position.y=a,n.add(T);let C=new ee(new tn(ed.slice(0,5).map(([F,X])=>new de(F*r+.01,X)),12),new ze({color:"#f0c24b",wireframe:!0,metalness:.6,roughness:.4}));C.position.y=a,n.add(C);let U=new ee(new tn(R_.map(([F,X])=>new de(F*r,X)),20),V("#f0c24b",.35,.6,{emissive:"#5a3a08",emissiveIntensity:.6}));U.position.y=a+.8,n.add(U);let R=new ee(new Ft(.09,12,8),V("#e8b04b",.3,.8));R.position.y=a+1.36,n.add(R);let I=new ee(new Je(.012,.012,.8),V("#3a2413"));I.position.y=a+1.8,n.add(I);let P=new st;P.setAttribute("position",new $e([0,0,0,.55,-.12,0,0,-.3,0],3)),P.computeVertexNormals();let D=new ee(P,V("#d8453a",.8,0,{side:tt}));D.position.y=a+2.18,D.userData.dynamic=!0,n.add(D);let k=new ee(new Je(r*1.32,r*1.32,.08,32),V("#e8b04b",.35,.7,{emissive:"#3a2406",emissiveIntensity:.5}));k.position.y=a,n.add(k);for(let F=0;F<24;F++){let X=F/24*ne,oe=Math.cos(X)*r*1.33,ce=Math.sin(X)*r*1.33;i.bulbs.add(oe,a-.06,ce,F,{ph:F,s:1.2}),i.flags.add(oe,a-.04,ce,-X+Math.PI/2,.2,F)}let W=[];[[[-r,-r],[r,-r]],[[-r,-r],[-r,r]],[[r,-r],[r,r]],[[-r,r],[r,r]]].forEach(([F,X])=>{for(let oe=0;oe<=16;oe++)W.push(kn([F[0],a-.1,F[1]],[X[0],a-.1,X[1]],.5,oe/16))}),jf(n,W,.045);let B=new ze({map:Qf(),emissiveMap:Qf(),emissive:"#ffffff",emissiveIntensity:.25,roughness:.6,side:tt}),O=wt(new ee(new qe(.72,1),B));return O.position.set(0,1.05,r*.75),n.add(O),i.pools.add(0,1.05,r*.74,.7,.7,"#ffb45a",.18,{vertical:!0,layer:"garbo"}),Al(n,new Set([m,B])),n.userData.dynamic=!0,{root:n,setTheme(F){Kf(l.getContext("2d"),512,F.flags),c.needsUpdate=!0},update(F,X,oe,ce){n.visible=ce,m.emissiveIntensity=3.2*X,B.emissiveIntensity=.15+.3*X;let Ge=Math.max(0,(X-.2)/.8);E.visible=v.visible=Ge>.01,E.scale.set(1+(oe?0:.06*Math.sin(F*17)),Ge*(.85+(oe?0:.15*Math.sin(F*9))),1),E.rotation.z=oe?0:Math.sin(F*5)*.08,v.scale.set(.5,.5*Ge,.5),D.rotation.y=oe?0:Math.sin(F*2.2)*.35}}}var A_=[[0,0],[.12,.005],[.2,.04],[.27,.12],[.3,.24],[.29,.34],[.24,.44],[.16,.51],[.12,.54],[.125,.58],[.15,.6]],ed=[[1.3,0],[1.2,.18],[.95,.42],[.6,.7],[.25,.86],[.06,.92]],R_=[[.42,0],[.36,.2],[.2,.42],[.03,.52]];function gh(i,e,t,n,s,r,a){let o=new ft;o.position.set(t,n,s),o.userData.dynamic=!0,e.add(o),i.wires.line([t,r,s],[t,n+.55,s]);let l=12,c=[a[0],"#f6c342",a[2%a.length],"#2f8f5b",a[1%a.length],"#3b4cc0"],h=[],f=[],u=new he;for(let w=0;w<l;w++){let y=w/l*ne,E=(w+1)/l*ne,v=1.35;u.set(c[w%c.length]),h.push(0,.55,0,Math.cos(E)*v,0,Math.sin(E)*v,Math.cos(y)*v,0,Math.sin(y)*v);for(let S=0;S<3;S++)f.push(u.r,u.g,u.b)}let p=new st;p.setAttribute("position",new $e(h,3)),p.setAttribute("color",new $e(f,3)),p.computeVertexNormals();let g=new ee(p,V("#ffffff",.7,0,{vertexColors:!0,side:tt}));o.add(g);let _=new xt(new Je(.012,.012,.3,4),V("#e8b04b",.4,.6),l),m=new Fe;for(let w=0;w<l;w++){let y=w/l*ne;_.setMatrixAt(w,m.makeTranslation(Math.cos(y)*1.35,-.15,Math.sin(y)*1.35))}o.add(_);let d=[];for(let w=0;w<l;w++){let y=(w+.5)/l*ne;d.push([Math.cos(y)*.8,.24,Math.sin(y)*.8])}let b=new xt(new Ft(.045,6,4),new Et({color:new he("#fffaf0").multiplyScalar(1.6)}),d.length);return d.forEach((w,y)=>b.setMatrixAt(y,m.makeTranslation(w[0],w[1],w[2]))),o.add(b),{group:o,update(w,y,E){o.rotation.y=y?0:w*.25+E}}}var C_=new Je(.18,.12,.42,8);function xh(i,e,t,n,s,r,a){i.wires.line([t,a,s],[t,n+.21,s]);let o=new ee(C_,i.glow(r,1.3,"practical"));return o.position.set(t,n,s),e.add(o),i.pools.add(t,n,s,.7,.7,r,.35,{vertical:!0}),i.pools.add(t,.02,s,2.2,2.2,r,.12),o}function nd(i,e,t,n,s){i.wires.line([t,s,n],[t,11.1,n]);let r=V("#c9963f",.35,.8);[[11,.95,12],[10.55,.72,10],[10.15,.45,8]].forEach(([a,o,l],c)=>{let h=new ee(new nn(o,.025,4,28),r);h.rotation.x=Math.PI/2,h.position.set(t,a,n),e.add(h);for(let f=0;f<l;f++){let u=f/l*ne+c*.3;i.bigBulbs.add(t+Math.cos(u)*o,a-.2,n+Math.sin(u)*o,0,{color:"#fff1d0",k:.7,s:.5,ph:f*1.9,layer:"practical",twinkle:.12})}}),i.bigBulbs.add(t,9.7,n,0,{color:"#ffd58a",k:1,layer:"practical",twinkle:.05}),i.pools.add(t,10.4,n,2.6,2.6,"#ffd6a0",.45,{vertical:!0}),i.pools.add(t,.03,n,4.5,4.5,"#ffd6a0",.18)}function id(i,e,t){if(!t.length)return;let n=0;t.forEach(u=>n+=u.blobs.length);let s=new xt(new Je(.22,.34,1,7),V("#1c130c",.95),t.length),r=new xn(1,1),a=new xt(r,V("#ffffff",.95,0,{flatShading:!0}),n);a.instanceColor=new Xt(new Float32Array(n*3),3);let o=[["#0f1d12","#1a2c18"],["#12200f","#20321a"],["#0d1a14","#1a2b22"]],l=new Fe,c=new Nt,h=new he,f=0;t.forEach((u,p)=>{if(s.setMatrixAt(p,l.compose(new N(u.x,2.3*u.s,u.z),c.identity(),new N(u.s,4.6*u.s,u.s))),u.blobs.forEach((g,_)=>{c.setFromEuler(new Ht(_,_*2,0)),a.setMatrixAt(f,l.compose(new N(u.x+g[0]*u.s,g[1]*u.s,u.z+g[2]*u.s),c,new N(g[3]*u.s,g[3]*u.s*.8,g[3]*u.s))),h.set(o[u.tone][_%2]).multiplyScalar(1.6),a.setColorAt(f,h),f++}),u.fairy)for(let g=0;g<30;g++){let _=u.blobs[g%u.blobs.length],m=g*2.4,d=_[3]*.95;i.bulbs.add(u.x+(_[0]+Math.cos(m)*d)*u.s,(_[1]+Math.sin(m)*d*.7)*u.s,u.z+(_[2]-.6*Math.sign(u.z+20))*u.s,u.hue+g,{ph:g*1.3,s:.8,twinkle:.5})}}),s.castShadow=!0,e.add(s),e.add(a)}function _h(i,e,t,n){let s=new ee(new Je(.06,.08,n),V("#1f1914",.8));s.position.set(e,n/2,t),i.add(s);let r=new ee(new ue(.9,1.2,.7),V("#0e0c0c",.7));r.position.set(e,n+.6,t),r.rotation.y=-Math.sign(e)*.3,i.add(r);let a=wt(new ee(new qe(.75,1),V("#1a1818",1)));a.position.set(e,n+.6,t-.36),i.add(a)}var ad='"Noto Sans Gujarati", "Gujarati Sangam MN", Shruti, "Anek Gujarati", system-ui, sans-serif';function ke(i,e,t,n,s,r,a,o,l=0,c=0,h=0){let f=new ee(new ue(e,t,n),o);return f.position.set(s,r,a),f.rotation.set(l,c,h),i.add(f),f}function ut(i,e,t,n,s,r,a,o,l=10,c=0,h=0,f=0){let u=new ee(new Je(e,t,n,l),o);return u.position.set(s,r,a),u.rotation.set(c,h,f),i.add(u),u}function jr(i,e,t,n,s,r,a=16){let o=new ee(new tn(e.map(([l,c])=>new de(l,c)),a),r);return o.position.set(t,n,s),i.add(o),o}function fi(i,e,t,n,s,r,a){let o=wt(new ee(new qe(e,t),a));return o.position.set(n,s,r),i.add(o),o}var ji=(i,e=.85,t=0,n)=>new ze(Object.assign({map:i,roughness:e,metalness:t},n||{}));function ea(i,e,t,n){let s=new ft;return s.position.set(e,0,t),s.rotation.y=n,i.add(s),s.updateMatrixWorld(!0),s}var Mh=class{constructor(){this.list=[]}add(e,t,n,s,r=.035){this.list.push([e,t,n,s,r])}addIn(e,t,n,s,r,a){let o=new N(t,n,s).applyMatrix4(e.matrixWorld);this.add(o.x,o.y,o.z,r,a)}build(e){if(!this.list.length)return;let t=new xt(new xn(1,0),V("#ffffff",.85),this.list.length),n=new Fe,s=new he;this.list.forEach(([r,a,o,l,c],h)=>{t.setMatrixAt(h,n.makeScale(c,c,c).setPosition(r,a,o)),t.setColorAt(h,s.set(l))}),e.add(t)}},bh=["#f08a24","#f08a24","#f6c342"];function od(i){return je(512,160,(e,t,n)=>{e.fillStyle=i,e.fillRect(0,0,t,n);for(let s=0;s<9;s++){let r=s/9*t;e.fillStyle=`rgba(0,0,0,${.05+s%3*.03})`,e.fillRect(r,0,t/9,n),e.fillStyle="rgba(0,0,0,.28)",e.fillRect(r,0,2,n)}e.fillStyle="rgba(255,255,255,.05)";for(let s=0;s<160;s++)e.fillRect(Math.random()*t,Math.random()*n,1+Math.random()*14,1);e.fillStyle="#e8b04b",e.fillRect(0,n*.1,t,n*.08),e.fillStyle="rgba(255,240,200,.5)",e.fillRect(0,n*.1,t,2),e.fillStyle="rgba(0,0,0,.35)",e.fillRect(0,n*.86,t,n*.06)})}function ld(i,e){return je(512,96,(t,n,s)=>{t.clearRect(0,0,n,s);let r=n/e,a=s*.72;for(let o=0;o<e;o++)t.fillStyle=o%2?"#efe2c8":i,t.fillRect(o*r,0,r+1,a),t.fillStyle=o%2?i:"#efe2c8",t.beginPath(),t.moveTo(o*r,a),t.quadraticCurveTo((o+.5)*r,s*1.05,(o+1)*r,a),t.closePath(),t.fill(),t.fillStyle="#e8b04b",t.beginPath(),t.arc((o+.5)*r,s*.9,4,0,ne),t.fill();t.fillStyle="rgba(0,0,0,.18)",t.fillRect(0,0,n,5),t.fillStyle="#e8b04b",t.fillRect(0,a-3,n,3)})}function cd(i,e,t){let n=je(512,176,()=>{}),s=()=>{let r=n.image,a=r.getContext("2d"),o=r.width,l=r.height;a.clearRect(0,0,o,l),a.fillStyle="#180c06",a.beginPath(),a.roundRect(4,4,o-8,l-8,22),a.fill(),a.strokeStyle=t,a.lineWidth=7,a.stroke(),a.textAlign="center",a.textBaseline="middle",a.fillStyle="#ffd58a",a.font=`700 78px ${ad}`,a.fillText(i,o/2,l*.42),a.fillStyle="rgba(255,230,190,.78)",a.font="600 34px system-ui, sans-serif",a.fillText(e,o/2,l*.8),n.needsUpdate=!0};return s(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(s),n}var Cl=null;function P_(){return Cl||(Cl=je(512,256,(i,e,t)=>{i.fillStyle="#8e1b2c",i.fillRect(0,0,e,t);for(let n=0;n<9;n++)for(let s=0;s<44;s++){let r=(s+n%2*.5+.5)/44.5*e,a=t*(.28+n*.075);Math.abs(r/e-.5)<.19&&n>1&&n<8||(i.fillStyle=(n+s)%3?"rgba(255,246,230,.85)":"rgba(246,195,66,.9)",i.beginPath(),i.arc(r,a,2.6,0,ne),i.fill())}i.fillStyle="#e8b04b",i.fillRect(0,0,e,t*.16),i.fillRect(0,t*.9,e,t*.1),i.fillStyle="rgba(120,70,10,.5)";for(let n=0;n<e;n+=12)i.fillRect(n,t*.05,6,t*.06);for(let n=0;n<16;n++){let s=n/16*e,r=(n+1)/16*e;i.fillStyle=n%2?"#2f8f5b":"#c2185b",i.beginPath(),i.moveTo(s,t*.16),i.lineTo(r,t*.16),i.lineTo((s+r)/2,t*.34),i.closePath(),i.fill(),i.fillStyle="rgba(235,245,255,.95)",i.beginPath(),i.arc((s+r)/2,t*.22,3.5,0,ne),i.fill()}}),Cl)}function I_(){return je(256,128,(i,e,t)=>{i.fillStyle="#140c0a",i.beginPath(),i.roundRect(2,2,e-4,t-4,18),i.fill(),i.textAlign="center",i.textBaseline="middle",i.font="800 84px system-ui, sans-serif",i.shadowColor="#ff78be",i.shadowBlur=24,i.fillStyle="#fff6e6",i.fillText("DJ",e/2,t*.54),i.shadowBlur=8,i.fillText("DJ",e/2,t*.54)})}function L_(){return je(256,168,(i,e,t)=>{let n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"#c5c9cf"),n.addColorStop(.55,"#9da2a9"),n.addColorStop(1,"#7d8289"),i.fillStyle=n,i.fillRect(0,0,e,t);let s=e*.5,r=t*.52;i.fillStyle="#fff8e8",i.beginPath(),i.ellipse(s,r+6,17,22,0,0,ne),i.fill(),i.fillStyle="#e8f0e0";for(let a=-1;a<=1;a++)i.beginPath(),i.ellipse(s+a*7,r-22,4,12,a*.5,0,ne),i.fill();i.save(),i.translate(e*.12,t*.16),i.rotate(-.25),i.fillStyle="#f6c342",i.beginPath(),i.roundRect(0,0,64,28,6),i.fill(),i.fillStyle="#8e1b2c",i.font=`700 18px ${ad}`,i.textBaseline="middle",i.fillText("\u0A97\u0AB0\u0AAC\u0ABE",6,15),i.restore(),i.fillStyle="#2f8f5b",i.beginPath();for(let a=0;a<10;a++){let o=a/10*ne-Math.PI/2,l=a%2?7:15;i.lineTo(e*.8+Math.cos(o)*l,t*.78+Math.sin(o)*l)}i.closePath(),i.fill()})}function D_(){return je(256,168,(i,e,t)=>{i.fillStyle="#000",i.fillRect(0,0,e,t);let n=e*.5,s=t*.52;i.fillStyle="#fff",i.beginPath(),i.ellipse(n,s+6,17,22,0,0,ne),i.fill();for(let r=-1;r<=1;r++)i.beginPath(),i.ellipse(n+r*7,s-22,4,12,r*.5,0,ne),i.fill()})}function U_(){return je(256,144,(i,e,t)=>{i.fillStyle="#16161a",i.fillRect(0,0,e,t),i.strokeStyle="rgba(255,255,255,.12)",i.lineWidth=2,i.strokeRect(2,2,e-4,t-4);for(let n=0;n<3;n++){let s=e*(.43+n*.07);i.fillStyle="#000",i.fillRect(s-1,t*.2,3,t*.5),i.fillStyle="#d9d9de",i.fillRect(s-5,t*(.3+n*.12),10,4)}i.fillStyle="#000",i.fillRect(e*.42,t*.8,e*.16,3),i.fillStyle="#d9d9de",i.fillRect(e*.49,t*.78,6,8),i.fillStyle="#8c8f96";for(let n=0;n<8;n++)i.beginPath(),i.arc(e*(.4+n%4*.066),t*(n<4?.1:.9),3.5,0,ne),i.fill();[.04,.96].forEach(n=>{i.fillStyle="#000",i.fillRect(e*n-1,t*.15,3,t*.6),i.fillStyle="#d9d9de",i.fillRect(e*n-4,t*.42,8,4)})})}function N_(){return je(128,192,(i,e,t)=>{let n=i.createLinearGradient(0,0,e,0);n.addColorStop(0,"#151414"),n.addColorStop(.5,"#232121"),n.addColorStop(1,"#121111"),i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="rgba(255,255,255,.05)";for(let s=6;s<t-6;s+=5)for(let r=6;r<e-6;r+=5)i.fillRect(r,s,1.5,1.5);i.strokeStyle="rgba(255,255,255,.2)",i.lineWidth=4,i.beginPath(),i.arc(e/2,t*.62,e*.36,0,ne),i.stroke(),i.fillStyle="#0b0a0a",i.beginPath(),i.arc(e/2,t*.62,e*.29,0,ne),i.fill(),i.fillStyle="rgba(255,255,255,.14)",i.beginPath(),i.arc(e/2,t*.62,e*.08,0,ne),i.fill(),i.fillStyle="#0b0a0a",i.beginPath(),i.moveTo(e*.3,t*.12),i.lineTo(e*.7,t*.12),i.lineTo(e*.62,t*.28),i.lineTo(e*.38,t*.28),i.closePath(),i.fill(),i.fillStyle="rgba(232,176,75,.6)",i.fillRect(e*.36,t*.92,e*.28,3),i.strokeStyle="rgba(255,255,255,.14)",i.lineWidth=2,i.strokeRect(1,1,e-2,t-2)})}var sd=null,F_=()=>sd||(sd=ji(N_(),.8)),yh=null;function B_(){if(yh)return yh;let i=[],e=(s,r,a,o,l=0,c=0)=>{s.rotateX(l),s.rotateZ(c),s.translate(r,a,o),i.push(s.index?s.toNonIndexed():s)};e(new ue(.44,.035,.4),0,.45,0),e(new ue(.42,.44,.03),0,.69,.22,.09),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([s,r])=>e(new Je(.016,.02,.46,5,1,!0),s*.21,.225,r*.19,-r*.07,s*.07)),[-1,1].forEach(s=>{e(new ue(.04,.03,.38),s*.22,.64,.02),e(new ue(.03,.18,.03),s*.22,.55,-.16)});let t=0;i.forEach(s=>t+=s.attributes.position.count);let n=new st;return["position","normal","uv"].forEach(s=>{let r=i[0].attributes[s].itemSize,a=new Float32Array(t*r),o=0;i.forEach(l=>{a.set(l.attributes[s].array,o),o+=l.attributes[s].array.length}),n.setAttribute(s,new St(a,r))}),yh=n,n}var Sh=class{constructor(){this.list=[]}add(e,t,n,s,r=0){this.list.push({x:e,z:t,ry:n,hex:s,lift:r});let a=new Fe().compose(new N(e,r,t),new Nt().setFromEuler(new Ht(0,n,0)),new N(1,1,1)),o=l=>{let c=new N,h=[];for(let f=0;f<l.length;f+=3)c.set(l[f],l[f+1],l[f+2]).applyMatrix4(a),h.push(Math.round(c.x*1e3)/1e3,Math.round(c.y*1e3)/1e3,Math.round(c.z*1e3)/1e3);return h};return{seat:o(Di(-.25,0,-.22,.25,.47,.22)),back:o(Di(-.23,.45,.18,.23,.92,.27)),arms:o(Di(-.25,.47,-.18,.25,.66,.2))}}build(e){if(!this.list.length)return;let t=new xt(B_(),V("#ffffff",.45,0),this.list.length),n=new Fe,s=new Nt,r=new Ht,a=new he;this.list.forEach((o,l)=>{r.set(0,o.ry,0),s.setFromEuler(r),t.setMatrixAt(l,n.compose(new N(o.x,o.lift,o.z),s,new N(1,1,1))),t.setColorAt(l,a.set(o.hex).multiplyScalar(.9))}),t.castShadow=!0,e.add(t)}};function rd(i){let e=0;i.forEach(n=>e+=n.attributes.position.count);let t=new st;return["position","normal","color"].forEach(n=>{let s=i[0].attributes[n].itemSize,r=new Float32Array(e*s),a=0;i.forEach(o=>{r.set(o.attributes[n].array,a),a+=o.attributes[n].array.length}),t.setAttribute(n,new St(r,s))}),t}function It(i,e,t,n,s,r=0,a=0,o=0,l=1,c=1,h=1){i.scale(l,c,h),i.rotateX(r),i.rotateY(a),i.rotateZ(o),i.translate(t,n,s);let f=i.index?i.toNonIndexed():i;f.deleteAttribute("uv");let u=new he(e),p=f.attributes.position.count,g=new Float32Array(p*3);for(let _=0;_<p;_++)g[_*3]=u.r,g[_*3+1]=u.g,g[_*3+2]=u.b;return f.setAttribute("color",new St(g,3)),f}var Pl=(i,e,t)=>[It(new Je(e,e,t,12),"#141414",i,e,0,Math.PI/2),It(new Je(e*.5,e*.5,t+.01,8),"#9ca0a5",i,e,0,Math.PI/2)],vh={scooter:{paint:()=>[It(new ue(.1,.62,.42),"#fff",.44,.62,0,0,0,.22),It(new Ft(.5,10,6),"#fff",-.36,.56,0,0,0,0,.82,.42,.4),It(new ue(.28,.07,.15),"#fff",.6,.5,0),It(new ue(.16,.12,.2),"#fff",.52,1.02,0)],trim:()=>[...Pl(.62,.23,.1),...Pl(-.6,.23,.1),It(new ue(.55,.05,.3),"#2a2a2d",0,.3,0),It(new ue(.62,.09,.3),"#161616",-.32,.8,0),It(new Je(.022,.022,.45,6),"#2a2a2a",.5,.86,0,0,0,.25),It(new ue(.05,.04,.64),"#1c1c1c",.46,1.1,0),It(new Ft(.055,6,4),"#f4f1e6",.61,1.02,0),It(new ue(.03,.06,.16),"#a51d1a",-.78,.6,0)],solids:[[-.84,0,-.22,.76,.86,.22],[.36,.86,-.33,.66,1.16,.33]]},bike:{paint:()=>[It(new Ft(.5,10,6),"#fff",.2,.92,0,0,0,0,.5,.22,.3),It(new ue(.34,.06,.14),"#fff",.68,.72,0),It(new ue(.34,.22,.26),"#fff",-.22,.68,0),It(new ue(.42,.05,.14),"#fff",-.62,.7,0,0,0,.25),It(new ue(.2,.16,.3),"#fff",.56,.98,0)],trim:()=>[...Pl(.66,.31,.1),...Pl(-.66,.31,.12),It(new ue(.36,.3,.26),"#2b2b2e",.05,.47,0),It(new ue(.55,.08,.26),"#161616",-.27,.9,0),It(new Je(.035,.03,.7,8),"#c9ccd1",-.3,.4,.16,0,0,Math.PI/2-.12),It(new Je(.02,.02,.62,6),"#2b2b2e",.58,.72,0,0,0,.35),It(new ue(.04,.04,.7),"#1b1b1b",.5,1.08,0),It(new Ft(.075,10,8),"#f4f1e6",.66,.98,0),It(new Je(.02,.02,.9,6),"#2b2b2e",-.2,.62,0,0,0,1.1),...[-1,1].map(i=>It(new Je(.022,.022,.75,6),"#c9ccd1",.58,.67,i*.07,0,0,.22)),...[-1,1].map(i=>It(new ue(.68,.05,.04),"#2b2b2e",-.33,.38,i*.08,0,0,.2))],solids:[[-.98,0,-.2,.98,1,.2],[.42,.9,-.38,.72,1.14,.38]]}},Eh=class{constructor(){this.list={scooter:[],bike:[]}}add(e,t,n,s,r){let a=s>0?0:Math.PI;this.list[e].push({x:t,z:n,ry:a,hex:r});let o=new Fe().compose(new N(t,0,n),new Nt().setFromEuler(new Ht(0,a,0)),new N(1,1,1));return vh[e].solids.map(l=>{let c=Di(...l),h=new N,f=[];for(let u=0;u<c.length;u+=3)h.set(c[u],c[u+1],c[u+2]).applyMatrix4(o),f.push(Math.round(h.x*1e3)/1e3,Math.round(h.y*1e3)/1e3,Math.round(h.z*1e3)/1e3);return f})}build(e){Object.keys(this.list).forEach(t=>{let n=this.list[t];if(!n.length)return;let s=new xt(rd(vh[t].paint()),V("#ffffff",.35,.25,{vertexColors:!0}),n.length),r=new xt(rd(vh[t].trim()),V("#ffffff",.55,.3,{vertexColors:!0}),n.length),a=new Fe,o=new Nt,l=new Ht,c=new he;n.forEach((h,f)=>{l.set(0,h.ry,0),o.setFromEuler(l),a.compose(new N(h.x,0,h.z),o,new N(1,1,1)),s.setMatrixAt(f,a),r.setMatrixAt(f,a),s.setColorAt(f,c.set(h.hex))}),s.castShadow=r.castShadow=!0,e.add(s),e.add(r)})}};function O_(i,e){let{kit:t,root:n,beads:s}=i;if(e.cart)return z_(i,e);let r=ea(n,e.x,e.z,Math.atan2(e.V[0],e.V[1])),a=e.w/2,o=e.depth,l=(y,E,v)=>new N(y,E,v).applyMatrix4(r.matrixWorld),c=[],h=[],f=[],u=(y,E)=>{let v=kt(y);return c.push(v),E&&E.push(v),y};u(ke(r,e.w,2.4,.06,0,1.2,o+.03,t.selfLit(new ze({color:"#6a381c",emissive:"#ff9a50",roughness:.9}),.1))),[-1,1].forEach(y=>{let E=ke(r,.05,2.4,o,y*a,1.2,o/2,V("#34210f",.9)),v=kt(E);c.push(v);let S=l(y*a,0,o/2),x=l(y*(a+1),0,o/2).sub(S);f.push({s:v,c:[S.x,S.z],n:[x.x,x.z]})}),ke(r,e.w,.04,o,0,.02,o/2,V("#3a2616",.95)),ke(r,e.w*.8,.04,.25,0,1.55,o-.12,V("#6b4424",.8));for(let y=0;y<7;y++)ut(r,.06,.06,.16,at(-a*.7,a*.7,y/6),1.65,o-.12,V(["#c9a37a","#b5651d","#e8d5b0","#8e1b2c","#2f6fa8","#e8b04b","#d9d2c5"][y],.4,.2),8);let p=u(ke(r,e.w,.97,.45,0,.485,.225,V("#3a2012",.9)),h);fi(r,e.w,.97,0,.485,-.004,t.selfLit(ji(od(e.col),.8),.22)),u(ke(r,e.w+.04,.06,.72,0,1,.1,V("#d9c3a0",.6)),h),[-a-.25,a+.25].forEach(y=>{u(ut(r,.045,.05,2.78,y,1.39,-.5,V("#8a6a3a",.8),7),h);for(let E=1;E<5;E++)ut(r,.055,.055,.03,y,E*.55,-.5,V("#5a4020",.9),7);for(let E=0;E<16;E++){let v=E*1.1;s.addIn(r,y+Math.cos(v)*.06,2.6-E*.12,-.5+Math.sin(v)*.06,bh[E%3],.03)}});let g=Math.hypot(o+.5,.2);u(ke(r,e.w+.6,.06,g,0,2.85,(o-.5)/2,V("#2a1a10",.9),-Math.atan2(.2,o+.5)),h),fi(r,e.w+.6,.62,0,2.44,-.52,t.selfLit(ji(ld(e.col,8),.85,0,{alphaTest:.35,side:tt}),.3,"festive")),h.push(hd(r,-a-.3,2.3,-.54,a+.3,2.75,-.5)),c.push(h[h.length-1]);for(let y=0;y<=7;y++){let E=l(at(-a-.3,a+.3,(y+.5)/8.5),2.15,-.56);t.bulbs.add(E.x,E.y,E.z,y,{ph:y*1.3+e.x,s:.9})}[-.6,.6].forEach(y=>ut(r,.02,.02,.3,y,2.9,-.48,V("#2a1a10",.8),5)),u(ke(r,1.72,.64,.05,0,3.32,-.46,V("#1a0e08",.9)),h),fi(r,1.68,.6,0,3.32,-.49,t.litMap(cd(e.sign,e.en,e.col),1.05,"practical"));let _=!(e.en==="Chai"||e.en==="Snacks"),m=_?Ce.tube:Ce.tungsten;if(_)ut(r,.018,.018,Math.min(1.2,e.w*.5),0,2.4,.15,t.glow(Ce.tube,2.4,"practical"),6,0,0,Math.PI/2);else{let y=l(0,2.3,.4);t.bigBulbs.add(y.x,y.y,y.z,0,{color:Ce.tungsten,k:1.3,s:.7,layer:"practical",twinkle:.02})}let d=l(0,1.5,o-.05),b=l(0,0,-1.3),w=l(0,1.06,.1);t.pools.add(d.x,d.y,d.z,a*1.1,1.1,m,.42,{vertical:!0,ry:r.rotation.y,layer:"practical"}),t.pools.add(w.x,w.y,w.z,a*.9,.5,m,.18,{ry:r.rotation.y,layer:"practical",live:!0}),t.pools.add(b.x,.02,b.z,2.8,2.8,m,_?.26:.3,{layer:"practical"}),H_(i,r,e,a,h,c),e.hole3d={back:c,front:h,sides:f}}function hd(i,e,t,n,s,r,a){let o=Di(e,t,n,s,r,a),l=new N,c=[];for(let h=0;h<o.length;h+=3)l.set(o[h],o[h+1],o[h+2]).applyMatrix4(i.matrixWorld),c.push(Math.round(l.x*1e3)/1e3,Math.round(l.y*1e3)/1e3,Math.round(l.z*1e3)/1e3);return c}function H_(i,e,t,n,s,r){let{kit:a,beads:o}=i,l=1.03,c=V("#c9ccd1",.28,.9),h=t.en,f=u=>{let p=kt(u);return s.push(p),r.push(p),u};if(h==="Chai"){let u=-n*.45;ke(e,.44,.08,.3,u,l+.04,.05,V("#2a2a2e",.5,.4));let p=new ee(new nn(.07,.012,5,16),a.glow("#4aa8ff",2.2,"practical"));p.rotation.x=Math.PI/2,p.position.set(u,l+.085,.05),e.add(p),f(jr(e,[[0,0],[.16,.01],[.19,.08],[.17,.2],[.1,.25],[.02,.28]],u,l+.09,.05,c)),ut(e,.015,.02,.22,u+.2,l+.24,.05,c,6,0,0,-.7);let g=new ee(new nn(.1,.01,4,12,Math.PI),c);g.position.set(u,l+.36,.05),e.add(g);for(let _=0;_<6;_++){let m=n*(.05+_*.13);ut(e,.03,.026,.065,m,l+.033,-.08,V("#b8753a",.3),8),ut(e,.032,.032,.03,m,l+.08,-.08,V("#dfe6ea",.15,.1),8)}}else if(h==="Pani puri"||h==="Dabeli"){let u=-n*.7,p=n*.7,g=p-u;[[u,0],[p,0],[u,.3],[p,.3]].forEach(([m,d])=>ke(e,.02,.5,.02,m,l+.25,d-.1,c)),ke(e,g,.02,.42,0,l+.5,.05,c),f(ke(e,g,.5,.4,0,l+.25,.05,new ze({color:"#dff2ff",roughness:.05,metalness:.1,transparent:!0,opacity:.16,depthWrite:!1}))),ut(e,.012,.012,g*.9,0,l+.47,.05,a.glow(Ce.warm,2,"practical"),6,0,0,Math.PI/2);let _=h==="Dabeli"?"#c98f45":"#dcae62";for(let m=0;m<3;m++)for(let d=0;d<11;d++)o.addIn(e,at(u+.08,p-.08,(d+m%2*.5)/11),l+.06+m*.07,.05+(m%2?.08:-.05),_,h==="Dabeli"?.05:.04);h==="Pani puri"&&(jr(e,[[0,0],[.13,.01],[.16,.1],[.155,.12]],n*.85,l,-.02,c),ut(e,.15,.15,.01,n*.85,l+.1,-.02,V("#6aa84f",.2),14))}else if(h==="Water")for(let u=0;u<5;u++){let p=-n*.75+u*n*.37;f(jr(e,[[0,0],[.13,.005],[.14,.05],[.14,.26],[.1,.32],[.04,.35],[.04,.38]],p,l,-.02,V("#2f7fc4",.15,.1))),ut(e,.045,.045,.04,p,l+.39,-.02,V("#e8eef4",.5),8)}else h==="Ice cream"?(f(ke(e,n*1,.36,.45,-n*.3,l+.18,.08,V("#f2f4f6",.4))),ke(e,n*1+.005,.07,.455,-n*.3,l+.2,.08,V("#3b8fd4",.4)),ke(e,n*.96,.01,.42,-n*.3,l+.365,.08,V("#a9c8dc",.1,.2)),["#f6d27a","#f0a0b8","#e9e0c8","#9ad08c"].forEach((u,p)=>{let g=n*(.35+p*.15);ut(e,.006,.006,.1,g,l+.05,-.08,V("#d9c3a0",.8),4);let _=new ee(new Ft(.035,8,6),V(u,.5));_.scale.set(1,2.2,1),_.position.set(g,l+.17,-.08),e.add(_)})):[[-.55,"#e6c35a"],[.05,"#f08a24"],[.6,"#d9a35a"]].forEach(([u,p],g)=>{let _=n*u;ut(e,.26,.24,.03,_,l+.015,.02,c,18);for(let m=0;m<14;m++){let d=m*2.4,b=.05+m%5*.035;if(g===1){let w=new ee(new nn(.035,.012,4,10),V(p,.35));w.rotation.x=Math.PI/2-.4,w.position.set(_+Math.cos(d)*b,l+.05+m%3*.02,.02+Math.sin(d)*b),e.add(w)}else ke(e,.14,.02,.025,_+Math.cos(d)*b,l+.045+m%3*.018,.02+Math.sin(d)*b,V(p,.7),0,d,0)}});if(h==="Snacks"||h==="Water"){let u=["#f6c342","#d8453a","#2f8f5b","#3b4cc0","#f08a24"];for(let p=0;p<7;p++)for(let g=0;g<3;g++)ke(e,.13,.17,.02,-n+.3+(t.w-.6)*p/6,2.05-g*.2,-.42,V(u[(p+g)%5],.35,.3))}}function z_(i,e){let{kit:t,root:n,beads:s}=i,r=ea(n,e.x,e.z,Math.atan2(e.V[0],e.V[1])),a=e.w/2,o=e.depth,l=(w,y,E)=>new N(w,y,E).applyMatrix4(r.matrixWorld),c=[],h=[],f=w=>(c.push(kt(w)),w),u=V("#5a3218",.8),p=V("#c9ccd1",.28,.9);f(ke(r,e.w,.46,o,0,.8,o/2,u)),fi(r,e.w,.46,0,.8,-.004,t.selfLit(ji(od(e.col),.8),.22)),ke(r,e.w+.06,.04,o+.06,0,1.05,o/2,V("#d9c3a0",.6)),[[-a+.3,.02],[a-.3,.02],[-a+.3,o-.02],[a-.3,o-.02]].forEach(([w,y])=>{f(ut(r,.28,.28,.05,w,.3,y,V("#1a1512",.8),14,Math.PI/2)),ut(r,.05,.05,.07,w,.3,y,p,8,Math.PI/2)}),[-a+.3,a-.3].forEach(w=>ke(r,.04,.04,o,w,.3,o/2,V("#2a2522",.6,.5)));let g=-a*.75,_=a*.4;f(ke(r,_-g,.42,o*.6,(g+_)/2,1.28,o*.45,new ze({color:"#dff2ff",roughness:.05,metalness:.1,transparent:!0,opacity:.16,depthWrite:!1}))),ke(r,_-g,.02,o*.6,(g+_)/2,1.5,o*.45,p);for(let w=0;w<3;w++)for(let y=0;y<8;y++)s.addIn(r,at(g+.06,_-.06,(y+w%2*.5)/8),1.11+w*.07,o*.45+(w%2?.07:-.06),"#dcae62",.04);f(jr(r,[[0,0],[.12,.02],[.17,.12],[.15,.24],[.08,.3],[.08,.33]],a*.68,1.07,o*.4,V("#9a4a22",.85))),ut(r,.11,.09,.12,a*.68,1.13,o*.8,p,12),[[-a,0],[a,0],[-a,o],[a,o]].forEach(([w,y])=>f(ut(r,.018,.018,1.2,w,1.65,y,p,5))),f(ke(r,e.w+.3,.04,o+.4,0,2.27,o/2,V(e.col,.8),-.08)),fi(r,e.w+.3,.3,0,2.12,-.21,t.selfLit(ji(ld(e.col,6),.85,0,{alphaTest:.35,side:tt}),.3,"festive"));for(let w=0;w<=5;w++){let y=l(at(-a-.1,a+.1,(w+.5)/6.5),2,-.23);t.bulbs.add(y.x,y.y,y.z,w,{ph:w*1.3,s:.8})}ut(r,.015,.015,e.w*.6,0,2.18,o*.4,t.glow(Ce.tube,2.4,"practical"),6,0,0,Math.PI/2),f(ke(r,1.2,.42,.04,0,2.55,o*.3,V("#1a0e08",.9))),fi(r,1.16,.4,0,2.55,o*.3-.03,t.litMap(cd(e.sign,e.en,e.col),1.05,"practical"));let m=l(0,0,-1),d=l(0,1.12,o*.45);t.pools.add(m.x,.02,m.z,2.2,2.2,Ce.tube,.2,{layer:"practical"}),t.pools.add(d.x,d.y,d.z,a,.5,Ce.tube,.16,{ry:r.rotation.y,layer:"practical",live:!0});let b=l(-a-.4,0,o*.4);e.hole3d={back:c,front:c,sides:[],vendor:[b.x,b.z]}}function k_(i,e){let{kit:t,root:n,beads:s}=i,r=ea(n,e.x,e.z,0),a=.74,o=.8,l=.34,c=(I,P,D)=>new N(I,P,D).applyMatrix4(r.matrixWorld),h=[],f=[],u=(I,P=!0)=>{let D=kt(I);return h.push(D),P&&f.push(D),I},p=V("#c9ccd1",.25,.9),g=V("#a7acb3",.35,.8),_=V("#9b7a45",.8);u(ke(r,o*2,a-.03,l*2,0,(a-.03)/2,0,V("#8e1b2c",.9))),fi(r,o*2,a-.03,0,(a-.03)/2,-l-.004,t.selfLit(ji(P_(),.85),.12,"festive")),u(ke(r,o*2+.04,.03,l*2+.04,0,a-.015,0,V("#4a2e1b",.6))),ke(r,o*2+.05,.012,.012,0,a-.03,-l-.02,V("#9a6a3a",.4));for(let I=0;I<=24;I++){let P=I/24;s.addIn(r,at(-o,o,P),a-.05-Math.abs(Math.sin(P*Math.PI*4))*.06,-l-.025,bh[I%3],.028)}for(let I=0;I<16;I++){let P=c(at(-o,o,(I+.5)/16),a-.12,-l-.012);t.bulbs.add(P.x,P.y,P.z,0,{color:"#f4f8ff",k:.35,s:.28,twinkle:.8,ph:I*2.1,layer:"festive"})}fi(r,.5,.25,0,.34,-l-.018,t.litMap(I_(),1.25,"show"));for(let I=0;I<16;I++){let P=I/16*1.5,D=P<.5?-.25+P:P<.75?.25:P<1.25?.25-(P-.75):-.25,k=P<.5?.465:P<.75?.465-(P-.5):P<1.25?.215:.215+(P-1.25),W=c(D,k,-l-.02);t.bulbs.add(W.x,W.y,W.z,I,{ph:I%2*Math.PI,twinkle:.55,s:.32,layer:"show"})}u(ke(r,.46,.014,.32,-.13,a+.007,.12,g));let m=new ft;m.position.set(-.13,a+.014,-.04),m.rotation.x=-.26,r.add(m),ke(m,.46,.3,.008,0,.15,0,g);let d=wt(new ee(new qe(.46,.3),new ze({map:L_(),emissiveMap:D_(),emissive:"#ffffff",emissiveIntensity:.9,roughness:.35,metalness:.6})));d.position.set(0,.15,-.005),m.add(d);let b=new ee(new qe(.42,.26),t.glow("#bcd4ff",1.1,"practical"));b.position.set(0,.15,.005),m.add(b),m.updateMatrixWorld(!0),h.push(hd(m,-.23,0,-.01,.23,.3,.01)),f.push(h[h.length-1]),u(ke(r,.54,.045,.3,.43,a+.0225,-.05,V("#16161a",.5,.3)));let w=new ee(new qe(.54,.3),ji(U_(),.5,.2));w.rotation.x=-Math.PI/2,w.position.set(.43,a+.046,-.05),r.add(w);let y=[.27,.59].map((I,P)=>{let D=new ft;D.position.set(I,a+.052,-.07),D.userData.dynamic=!0,r.add(D),ut(D,.075,.075,.012,0,0,0,V("#2a2b31",.3,.6),20),ke(D,.004,.004,.06,0,.008,.03,V("#ffffff",.4));let k=new ee(new nn(.078,.004,4,24),t.glow(Li.traditional.beams[P],1.6,"show"));return k.rotation.x=Math.PI/2,D.add(k),D}),E=new xt(new ue(.032,.006,.032),new Et({color:"#ffffff"}),8),v=new Fe;for(let I=0;I<8;I++)E.setMatrixAt(I,v.makeTranslation(.43-.27+(I<4?.2:.8)*.54-.06+I%4*.04,a+.048,-.17));E.instanceColor=new Xt(new Float32Array(24),3),r.add(E);let S=c(.72,a,.12);t.flames.add(S.x,S.y,S.z,{s:.04,bowl:"brass"}),u(jr(r,[[0,0],[.065,.005],[.07,.04],[.058,.16],[.05,.19],[.056,.205]],-.62,a,-.05,p));let x=new ee(new nn(.035,.006,4,10,Math.PI),p);x.position.set(-.55,a+.11,-.05),x.rotation.z=-Math.PI/2,r.add(x),u(ut(r,.045,.034,.14,-.45,a+.07,-.18,V("#f4efe4",.7),10)),ut(r,.17,.16,.04,0,.62,.55,V("#3a2a1c",.7),14),[0,1,2].forEach(I=>{let P=I/3*ne+.5;ut(r,.015,.018,.64,Math.cos(P)*.12,.31,.55+Math.sin(P)*.12,V("#2a1e14",.6,.3),5,Math.sin(P)*.18,0,-Math.cos(P)*.18)});let T=[];[-1,1].forEach(I=>{let P=I*1.28,D=.2;[0,1,2].forEach(B=>{let O=B/3*ne+.3;ut(r,.012,.012,1.1,P+Math.cos(O)*.14,.52,D+Math.sin(O)*.14,V("#1b1814",.6,.4),5,Math.sin(O)*.27,0,-Math.cos(O)*.27)}),u(ut(r,.02,.02,1.25,P,.62,D,V("#1b1814",.6,.4),6),!1),u(ke(r,.44,.66,.34,P,1.53,D,V("#161414",.75))),fi(r,.44,.66,P,1.53,D-.172,F_());let k=ut(r,.12,.12,.02,P,1.53-.66*.12,D-.17,V("#0b0a0a",.6),16,Math.PI/2);k.userData.dynamic=!0,T.push(k);let W=c(P+.17,1.83,D-.18);t.bulbs.add(W.x,W.y,W.z,0,{color:"#6dff9a",k:.6,s:.18,twinkle:0,layer:"show"})});let C=.95,U=2.45;[-1.15,1.15].forEach((I,P)=>{u(ut(r,.035,.04,U,I,U/2,C,_,7),!1);for(let D=1;D<5;D++)ut(r,.045,.045,.025,I,D*U/5,C,V("#6b5028",.9),7);for(let D=0;D<18;D++){let k=D*1.2+P;s.addIn(r,I+Math.cos(k)*.05,U-.1-D*.1,C+Math.sin(k)*.05,bh[D%3],.028)}}),u(ut(r,.03,.03,2.4,0,U,C,_,7,0,0,Math.PI/2),!1);for(let I=0;I<13;I++){let P=c(at(-1.15,1.15,(I+.5)/13),U-.01,C-.02);t.flags.add(P.x,P.y,P.z,0,.14,I)}for(let I=0;I<=10;I++){let P=I/10,D=c(at(-1.15,1.15,P),U-.35-Math.sin(P*Math.PI)*.28,C-.03);t.bulbs.add(D.x,D.y,D.z,I,{ph:I*1.7,s:1})}t.wires.cable(c(-1.15,U-.32,C-.03).toArray(),c(1.15,U-.32,C-.03).toArray(),.28);let R=c(0,0,.4);return t.pools.add(R.x,.02,R.z,2.4,2,Ce.tungsten,.16,{layer:"festive"}),e.hole3d={back:h,front:f},{update(I,P){let{reduce:D,beat:k,lv:W,TH:B,pulse:O}=P;y.forEach((oe,ce)=>{oe.rotation.y=D?0:I*3*(ce?-1:1)});let F=E.instanceColor.array,X=new he("#2a2a30");for(let oe=0;oe<8;oe++){let ce=(Math.floor(k*2)+oe)%4===0,Ge=ce?new he(B.beams[oe%B.beams.length]).multiplyScalar(2.2*W.show):X;F[oe*3]=Ge.r,F[oe*3+1]=Ge.g,F[oe*3+2]=Ge.b}E.instanceColor.needsUpdate=!0,T.forEach(oe=>{let ce=1+(D?0:.08*O);oe.scale.set(ce,1,ce)})}}}function G_(i,e){let{root:t,chairs:n,beads:s}=i,r=[],a=o=>(r.push(kt(o)),o);if(e.kind==="cooler")a(ke(t,.5,.5,.42,e.x,.25,e.z+.2,V("#3a2a1c",.85))),a(ut(t,.25,.25,.58,e.x,.79,e.z+.2,V("#2f6fb4",.35,.05),18)),[.62,.96].forEach(o=>ut(t,.255,.255,.02,e.x,o,e.z+.2,V("#23548a",.4),18)),ut(t,.012,.012,.08,e.x,.6,e.z-.07,V("#c9ccd1",.25,.9),6,Math.PI/2),ut(t,.035,.03,.08,e.x+.12,.54,e.z-.05,V("#c9ccd1",.25,.9),8);else if(e.kind==="crates")[0,1].forEach(o=>{let l=o*.28,c=o*.04;a(ke(t,.6,.27,.4,e.x+c,l+.135,e.z+.2,V(o?"#a8201a":"#8c1a15",.6)));for(let h=0;h<12;h++)s.add(e.x+c-.24+h%6*.095,l+.28,e.z+.08+Math.floor(h/6)*.22,h%2?"#e8b04b":"#d8453a",.022)});else if(e.kind==="chairs")for(let o=0;o<5;o++){let l=n.add(e.x,e.z,0,"#ece6da",o*.09);r.push(l.seat,l.back)}else if(e.kind==="plasticChair"){let o=n.add(e.x,e.z,0,e.col);r.push(o.seat,o.back)}else if(e.kind==="stone"){let o=new ee(new xn(e.r,0),V("#6d6259",.95));o.scale.set(1,.6,.85),o.position.set(e.x,e.r*.3,e.z),o.rotation.y=e.x*3,t.add(o),r.push(kt(o))}e.hole3d={back:r}}function V_(i,e){let{kit:t,root:n,rides:s,beads:r}=i;if(e.kind==="scooter"||e.kind==="activa"||e.kind==="bike"){let a=s.add(e.kind==="bike"?"bike":"scooter",e.x,e.z,-e.side,e.col);e.hole3d={back:i.id==="outdoors"?[]:a};return}if(e.kind==="van"){e.hole3d={back:W_(i,e)};return}if(e.kind==="tulsi"){let a=Math.sign(e.x)||1,o=.45,l=[];l.push(kt(ke(n,.42,.5,.42,e.x,o+.25,e.z,V("#9a5328",.85)))),ke(n,.43,.05,.43,e.x,o+.4,e.z,V("#e8b04b",.6)),ke(n,.46,.04,.46,e.x,o+.52,e.z,V("#7a3e1c",.85));for(let c=0;c<5;c++){let h=c/5*ne,f=c?.13:0,u=new ee(new xn(c?.13:.17,1),V(c%2?"#2f6b33":"#24552a",.9,0,{flatShading:!0}));u.position.set(e.x+Math.cos(h)*f,o+.72+(c?0:.1),e.z+Math.sin(h)*f),n.add(u)}l.push(Di(e.x-.3,o+.5,e.z-.3,e.x+.3,o+.98,e.z+.3)),t.flames.add(e.x-a*.3,o,e.z-.1,{s:.04}),e.hole3d={back:l};return}e.kind==="tent"&&(X_(i,e),e.hole3d={back:[]})}function W_(i,e){let{kit:t,root:n}=i,s=e.x-.72,r=e.x+.72,a=e.z-1.9,o=e.z+1.9,l=.28,c=1.9,h=[],f=V("#ecece7",.3,.3),u=V("#1f2730",.08,.6),p=ea(n,0,0,0);return h.push(kt(ke(p,r-s,c-l,o-.45-a,e.x,(c+l)/2,(a+o-.45)/2,f))),h.push(kt(ke(p,r-s,1.05-l,.45,e.x,(1.05+l)/2,o-.225,f))),ke(p,r-s-.04,Math.hypot(.45,.85),.04,e.x,1.475,o-.225,u,-Math.atan2(.45,.85)),h.push(Di(s,1.05,o-.45,r,c,o)),[-1,1].forEach(g=>{let _=g<0?s-.003:r+.003;ke(p,.004,.57,o-.9-a-.25,_,1.435,(a+.25+o-.9)/2,u),ke(p,.006,.14,o-a,_,l+.07,e.z,V("#9a9c98",.6))}),ke(p,r-s-.28,.6,.004,e.x,1.45,a-.003,u),[s+.13,r-.13].forEach(g=>ke(p,.14,.33,.01,g,.785,a-.005,V("#a51d1a",.3))),ke(p,.48,.12,.01,e.x,.56,a-.006,V("#f2cf3e",.5)),ke(p,r-s+.04,.17,.08,e.x,.37,a-.03,V("#3a3b3d",.7)),ke(p,r-s+.04,.17,.08,e.x,.37,o+.03,V("#3a3b3d",.7)),[[a+.65],[o-.7]].forEach(([g])=>[s+.02,r-.02].forEach(_=>{h.push(kt(ut(p,.3,.3,.18,_,.3,g,V("#141414",.8),16,0,0,Math.PI/2))),ut(p,.15,.15,.19,_,.3,g,V("#8f9398",.4,.6),10,0,0,Math.PI/2)})),t.pools.add(e.x,c+.01,e.z,.9,1.8,Ce.sodium,.08,{layer:"practical",live:!0}),h}function X_(i,e){let{kit:t,root:n}=i,s=ea(n,e.x,e.z,0),r=8,a=5,o=3.2,l=4.6,c=je(256,64,(u,p,g)=>{for(let _=0;_<8;_++)u.fillStyle=_%2?"#f3e6d0":e.col,u.fillRect(_/8*p,0,p/8+1,g)}),h=new ee(new yr(Math.hypot(r,a)/2,l-o,4,1,!0),new ze({map:c,roughness:.9,side:tt}));h.rotation.y=Math.PI/4,h.scale.set(r/Math.hypot(r,a),1,a/Math.hypot(r,a)),h.position.set(0,(l+o)/2,a/2),s.add(h),ke(s,r,o,.05,0,o/2,a,V("#e9dcc2",.9,0,{emissive:"#ffb870",emissiveIntensity:.25})),[-1,1].forEach(u=>ke(s,.05,o,a,u*r/2,o/2,a/2,V("#e9dcc2",.9))),[[-r/2,0],[r/2,0],[-r/2,a],[r/2,a]].forEach(([u,p])=>ut(s,.05,.05,o,u,o/2,p,V("#2a1a10",.8),6));for(let u=0;u<=8;u++){let p=new N(at(-r/2,r/2,u/8),o-.05,-.05).applyMatrix4(s.matrixWorld);t.bulbs.add(p.x,p.y,p.z,u,{ph:u})}let f=new N(0,1.6,a-.1).applyMatrix4(s.matrixWorld);t.pools.add(f.x,f.y,f.z,r*.45,1.8,Ce.tungsten,.3,{vertical:!0,layer:"practical"}),t.pools.add(e.x,.02,e.z+a/2,r*.6,a,Ce.tungsten,.2,{layer:"practical"})}function q_(i,e){if(e.kind)return;let t=i.chairs.add(e.x,e.z,e.side*Math.PI/2,e.col);e.hole3d={back:[t.seat,t.back,t.arms]}}function Y_(i,e){let{root:t,chairs:n}=i;if(e.kind==="chair"){let s=n.add(e.x,e.z,Math.PI,e.col);e.hole3d={back:[s.seat,s.back,s.arms],front:[s.back]}}else if(e.kind==="benchPlank"){let s=V("#6b3f1f",.8),r=[];r.push(kt(ke(t,e.w+.4,.05,.44,e.x,.425,e.z,s))),[-1,1].forEach(a=>r.push(kt(ke(t,.06,.42,.4,e.x+a*e.w/2,.21,e.z,V("#3b2213",.8))))),e.hole3d={back:r}}else if(e.kind==="step"){let{kit:s}=i;ke(t,e.w*2,e.y,1.12,e.x,e.y/2,e.z-.44,Z_(s)),ke(t,e.w*2,.006,.05,e.x,e.y+.003,e.z+.05,$_(s));for(let r=-e.w+2.4;r<e.w;r+=2.4)ke(t,.02,.004,1.1,e.x+r,e.y+.002,e.z-.45,V("#17131b",.95));[-e.w+.3,0,e.w-.3].forEach(r=>{s.bulbs.add(e.x+r,e.y-.1,e.z+.125,0,{color:Ce.amber,k:.8,s:.5,twinkle:0,layer:"architectural"}),s.pools.add(e.x+r,e.y+.008,e.z+.6,1.3,.55,Ce.amber,.22,{layer:"architectural",live:!0})}),e.hole3d={back:[]}}}var Z_=i=>i.stepMat||(i.stepMat=i.selfLit(new ze({color:"#2c2734",emissive:"#2c2734",roughness:.92}),.55,"architectural")),$_=i=>i.nosingMat||(i.nosingMat=i.selfLit(new ze({color:"#8a6f2c",emissive:"#8a6f2c",roughness:.8}),.12,"architectural"));function ud(i,e,t,n){let s={kit:i,root:e,id:t,beads:new Mh,chairs:new Sh,rides:new Eh},r=[];return(n.stalls||[]).forEach(a=>O_(s,a)),n.dj&&(r.push(k_(s,n.dj)),(n.dj.life||[]).forEach(a=>G_(s,a))),(n.props||[]).forEach(a=>V_(s,a)),(n.seats||[]).forEach(a=>q_(s,a)),(n.gallery||[]).forEach(a=>Y_(s,a)),s.beads.build(e),s.chairs.build(e),s.rides.build(e),{update(a,o){r.forEach(l=>l.update(a,o))}}}function ni(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function Th(i,e,t,n,s,r){for(let a of[0,-i,i])for(let o of[0,-e,e])a&&(t+a<-s||t+a>i+s)||o&&(n+o<-s||n+o>e+s)||r(t+a,n+o)}function wh(i,e){let t=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,t,n).data,r=ni(t,n),a=r.getContext("2d"),o=a.createImageData(t,n),l=o.data,c=(h,f)=>s[((f+n)%n*t+(h+t)%t)*4]/255;for(let h=0;h<n;h++)for(let f=0;f<t;f++){let u=(c(f+1,h)-c(f-1,h))*e,p=(c(f,h+1)-c(f,h-1))*e,g=Math.hypot(u,p,1),_=(h*t+f)*4;l[_]=(-u/g*.5+.5)*255,l[_+1]=(p/g*.5+.5)*255,l[_+2]=(1/g*.5+.5)*255,l[_+3]=255}return a.putImageData(o,0,0),r}function Xs(i,e,t){let n=new Rn(i);return n.colorSpace=t?mn:Bt,n.anisotropy=8,n.wrapS=n.wrapT=rn,n.repeat.set(e[0],e[1]),n}function J_(i){let e=En(41),t=ni(i,i),n=ni(i,i),s=t.getContext("2d"),r=n.getContext("2d"),a=i/1024;s.fillStyle="#3b2b1e",s.fillRect(0,0,i,i),r.fillStyle="#808080",r.fillRect(0,0,i,i);for(let o=0;o<70;o++){let l=e()*i,c=e()*i,h=(40+e()*140)*a,f=e()<.5;Th(i,i,l,c,h,(u,p)=>{let g=s.createRadialGradient(u,p,0,u,p,h);g.addColorStop(0,f?"rgba(120,92,64,.16)":"rgba(20,12,6,.18)"),g.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=g,s.fillRect(u-h,p-h,h*2,h*2)})}for(let o=0;o<26e3;o++){let l=e()*i,c=e()*i,h=(.6+e()*1.8)*a,f=e();s.fillStyle=f<.45?`rgba(170,135,100,${.04+e()*.07})`:f<.9?`rgba(0,0,0,${.08+e()*.14})`:`rgba(120,112,104,${.06+e()*.08})`,s.fillRect(l,c,h,h),r.fillStyle=f<.45?"rgba(255,255,255,.12)":"rgba(0,0,0,.12)",r.fillRect(l,c,h,h)}for(let o=0;o<260;o++){let l=e()*i,c=e()*i,h=(1.5+e()*3.5)*a,f=h*(.6+e()*.4),u=e()*ne,p=58+e()*34;Th(i,i,l,c,h*2,(g,_)=>{s.fillStyle="rgba(0,0,0,.35)",s.beginPath(),s.ellipse(g+h*.35,_+h*.35,h,f,u,0,ne),s.fill(),s.fillStyle=`rgb(${p},${p*.86},${p*.72})`,s.beginPath(),s.ellipse(g,_,h,f,u,0,ne),s.fill(),s.fillStyle="rgba(255,240,220,.08)",s.beginPath(),s.ellipse(g-h*.3,_-f*.3,h*.4,f*.35,u,0,ne),s.fill();let m=r.createRadialGradient(g,_,0,g,_,h);m.addColorStop(0,"#fff"),m.addColorStop(1,"rgba(128,128,128,0)"),r.fillStyle=m,r.beginPath(),r.ellipse(g,_,h,f,u,0,ne),r.fill()})}s.lineCap=r.lineCap="round";for(let o=0;o<40;o++){let l=e()*i,c=e()*i,h=e()*ne,f=6+Math.floor(e()*10);s.strokeStyle="rgba(8,4,2,.5)",s.lineWidth=(.8+e())*a,r.strokeStyle="rgba(0,0,0,.5)",r.lineWidth=1.6*a,s.beginPath(),s.moveTo(l,c),r.beginPath(),r.moveTo(l,c);for(let u=0;u<f;u++)h+=(e()-.5)*1.2,l+=Math.cos(h)*12*a,c+=Math.sin(h)*12*a,s.lineTo(l,c),r.lineTo(l,c);s.stroke(),r.stroke()}for(let o=0;o<160;o++){let l=e()*i,c=e()*i,h=e()*ne;Th(i,i,l,c,20*a,(f,u)=>{s.fillStyle=`rgba(0,0,0,${.05+e()*.07})`,s.beginPath(),s.ellipse(f,u,(8+e()*10)*a,(3+e()*3)*a,h,0,ne),s.fill()})}return{c:t,n:wh(n,3.2)}}function K_(i){let e=En(17),t=ni(i,i),n=ni(i,i),s=t.getContext("2d"),r=n.getContext("2d"),a=8,o=i/a,l=i/1024;r.fillStyle="#9a9a9a",r.fillRect(0,0,i,i);for(let c=0;c<a;c++){let h=-e()*i;for(;h<i;){let f=i*(.35+e()*.5),u=e(),p=[150+u*40,100+u*30,58+u*18].map(Math.round),g=c*o,_=(d,b)=>{s.fillStyle=`rgb(${p[0]},${p[1]},${p[2]})`,s.fillRect(g,d,o,b);for(let w=0;w<14;w++){let y=g+e()*o,E=e()*ne,v=e()<.6;s.strokeStyle=v?`rgba(60,32,12,${.1+e()*.15})`:`rgba(255,220,170,${.05+e()*.08})`,s.lineWidth=(.6+e()*1.4)*l,s.beginPath();for(let S=0;S<=b;S+=8*l)s.lineTo(y+Math.sin(S/(40*l)+E)*2.5*l,d+S);s.stroke()}if(e()<.18){let w=g+o*(.3+e()*.4),y=d+b*e();s.fillStyle="rgba(70,36,14,.55)",s.beginPath(),s.ellipse(w,y,5*l,8*l,0,0,ne),s.fill(),s.strokeStyle="rgba(70,36,14,.3)",s.lineWidth=1*l,s.beginPath(),s.ellipse(w,y,9*l,16*l,0,0,ne),s.stroke()}s.fillStyle=`rgba(0,0,0,${e()*.08})`,s.fillRect(g,d,o,b)};h<0?(_(0,h+f),_(i+h,-h)):h+f>i?(_(h,i-h),_(0,h+f-i)):_(h,f);let m=((h+f)%i+i)%i;s.fillStyle="rgba(20,10,4,.75)",s.fillRect(g,m-1.2*l,o,2.4*l),r.fillStyle="#000",r.fillRect(g,m-1.5*l,o,3*l),h+=f}s.fillStyle="rgba(20,10,4,.8)",s.fillRect(c*o-1.2*l,0,2.4*l,i),r.fillStyle="#000",r.fillRect(c*o-1.5*l,0,3*l,i)}for(let c=0;c<600;c++)s.fillStyle=`rgba(255,240,220,${e()*.04})`,s.fillRect(e()*i,e()*i,1*l,(6+e()*20)*l);return{c:t,n:wh(n,2)}}function Q_(i){let e=En(29),t=ni(i,i),n=ni(i,i),s=t.getContext("2d"),r=n.getContext("2d"),a=4,o=4,l=i/a,c=i/o,h=i/1024;s.fillStyle="#1c1c1a",s.fillRect(0,0,i,i),r.fillStyle="#000",r.fillRect(0,0,i,i);let f=[[92,96,86],[104,104,90],[86,92,88],[112,106,92],[96,100,94]];for(let u=0;u<a;u++)for(let p=-1;p<=o;p++){let g=p*c+u%2*c/2,_=u*l,m=f[Math.floor(e()*f.length)],d=2.5*h,b=w=>{let y=g+w+d,E=_+d,v=c-d*2,S=l-d*2,x=s.createLinearGradient(y,E,y+v,E+S);x.addColorStop(0,`rgb(${m[0]+8},${m[1]+8},${m[2]+6})`),x.addColorStop(1,`rgb(${m[0]-8},${m[1]-8},${m[2]-8})`),s.fillStyle=x,s.fillRect(y,E,v,S),r.fillStyle="#c8c8c8",r.fillRect(y,E,v,S);for(let T=0;T<9;T++){s.strokeStyle=`rgba(${e()<.5?"255,250,235":"20,24,18"},${.03+e()*.05})`,s.lineWidth=(2+e()*8)*h,s.beginPath();let C=E+e()*S;s.moveTo(y,C),s.bezierCurveTo(y+v*.3,C+(e()-.5)*30*h,y+v*.7,C+(e()-.5)*30*h,y+v,C+(e()-.5)*20*h),s.stroke()}for(let T=0;T<3;T++){let C=s.createRadialGradient(y+e()*v,E+e()*S,0,y+e()*v,E+e()*S,(20+e()*50)*h);C.addColorStop(0,"rgba(30,24,16,.18)"),C.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=C,s.fillRect(y,E,v,S)}if(e()<.35){let T=e()<.5?y:y+v,C=e()<.5?E:E+S,U=(6+e()*10)*h;s.fillStyle="#1c1c1a",s.beginPath(),s.arc(T,C,U,0,ne),s.fill(),r.fillStyle="#000",r.beginPath(),r.arc(T,C,U,0,ne),r.fill()}for(let T=0;T<900;T++)s.fillStyle=`rgba(${e()<.5?"255,255,245":"0,0,0"},${e()*.06})`,s.fillRect(y+e()*v,E+e()*S,1.5*h,1.5*h)};b(0),g+c>i&&b(-i),g<0&&b(i)}return{c:t,n:wh(n,4)}}function j_(i,e,t){let s=ni(2048,2048),r=s.getContext("2d"),a=2048/i.w,o=f=>(f-(i.cx-i.w/2))*a,l=f=>(f-(i.cz-i.d/2))*a;(e||[]).forEach(f=>{let u=o(f.x),p=l(f.z),g=f.R*a,_=Math.max(.5,Math.min(1.2,f.R*.22))*a,m=r.createRadialGradient(u,p,Math.max(0,g-_*1.6),u,p,g+_*1.6);m.addColorStop(0,"rgba(150,118,84,0)"),m.addColorStop(.5,"rgba(150,118,84,.24)"),m.addColorStop(1,"rgba(150,118,84,0)"),r.fillStyle=m,r.beginPath(),r.arc(u,p,g+_*1.6,0,ne),r.fill()});let c=o(0),h=l(0);r.strokeStyle="rgba(214,206,190,.38)",r.lineWidth=.06*a,r.beginPath(),r.arc(c,h,2.7*a,0,ne),r.stroke(),r.setLineDash([.06*a,.18*a]),r.lineWidth=.05*a,r.beginPath(),r.arc(c,h,3.05*a,0,ne),r.stroke(),r.setLineDash([]);for(let f=0;f<36;f++){let u=f/36*ne;r.fillStyle="rgba(214,206,190,.36)",r.beginPath(),r.ellipse(c+Math.cos(u)*2.88*a,h+Math.sin(u)*2.88*a,.1*a,.04*a,u,0,ne),r.fill()}return fd(r,c,h,2.2*a,5.5*a,900,a,t),s}function fd(i,e,t,n,s,r,a,o){for(let l=0;l<r;l++){let c=o()*ne,h=n+Math.pow(o(),1.6)*(s-n);i.fillStyle=o()<.6?`rgba(240,${120+Math.floor(o()*40)},30,.85)`:"rgba(246,196,60,.85)",i.beginPath(),i.ellipse(e+Math.cos(c)*h,t+Math.sin(c)*h,.035*a,.022*a,o()*ne,0,ne),i.fill()}}function ey(i,e){let n=ni(2048,2048),s=n.getContext("2d"),r=2048/i.w,a=(0-(i.cx-i.w/2))*r,o=(0-(i.cz-i.d/2))*r,l=6*r;s.fillStyle="rgba(80,14,24,.82)",s.beginPath(),s.arc(a,o,l,0,ne),s.fill();let c="rgba(214,166,74,.9)",h=(u,p)=>{s.strokeStyle=c,s.lineWidth=p*r,s.beginPath(),s.arc(a,o,u*l,0,ne),s.stroke()};h(1,.05),h(.965,.02),h(.82,.02),h(.58,.03),h(.4,.02);for(let u=0;u<20;u++){let p=u/20*ne,g=p-ne/44,_=p+ne/44,m=.6*l,d=.8*l;s.beginPath(),s.moveTo(a+Math.cos(g)*m,o+Math.sin(g)*m),s.quadraticCurveTo(a+Math.cos(g)*d*.9,o+Math.sin(g)*d*.9,a+Math.cos(p)*d,o+Math.sin(p)*d),s.quadraticCurveTo(a+Math.cos(_)*d*.9,o+Math.sin(_)*d*.9,a+Math.cos(_)*m,o+Math.sin(_)*m),s.closePath(),s.fillStyle="rgba(214,112,40,.55)",s.fill(),s.strokeStyle=c,s.lineWidth=.02*r,s.stroke(),s.fillStyle="rgba(243,230,208,.7)",s.beginPath(),s.arc(a+Math.cos(p)*.69*l,o+Math.sin(p)*.69*l,.06*r,0,ne),s.fill()}[[.49,40,"rgba(243,230,208,.75)",.04],[.885,72,"rgba(214,166,74,.85)",.05],[.94,96,"rgba(47,143,91,.7)",.03]].forEach(([u,p,g,_])=>{for(let m=0;m<p;m++){let d=m/p*ne;s.fillStyle=g,s.beginPath(),s.arc(a+Math.cos(d)*u*l,o+Math.sin(d)*u*l,_*r,0,ne),s.fill()}});let f=En(9);for(let u=0;u<500;u++){let p=f()*ne,g=l*(.42+f()*.58);s.fillStyle="rgba(0,0,0,.1)",s.beginPath(),s.ellipse(a+Math.cos(p)*g,o+Math.sin(p)*g,.12*r,.04*r,p+Math.PI/2,0,ne),s.fill()}return n}function ty(i,e){let n=ni(2048,2048),s=n.getContext("2d"),r=2048/i.w,a=(0-(i.cx-i.w/2))*r,o=(0-(i.cz-i.d/2))*r,l=["rgba(194,24,91,.78)","rgba(240,138,36,.8)","rgba(246,195,66,.8)","rgba(47,143,91,.78)","rgba(59,76,192,.76)"],c="rgba(236,230,214,.45)";for(let h=0;h<30;h++){let f=h/30*ne,u=(h+1)/30*ne;s.fillStyle=l[h%5],s.beginPath(),s.arc(a,o,2.55*r,f,u),s.arc(a,o,2.2*r,u,f,!0),s.closePath(),s.fill()}s.strokeStyle=c,s.lineWidth=.025*r,[2.2,2.55].forEach(h=>{s.beginPath(),s.arc(a,o,h*r,0,ne),s.stroke()});for(let h=0;h<18;h++){let f=h/18*ne,u=f-ne/40,p=f+ne/40,g=2.6*r,_=3.2*r;s.beginPath(),s.moveTo(a+Math.cos(u)*g,o+Math.sin(u)*g),s.quadraticCurveTo(a+Math.cos(u)*_*.95,o+Math.sin(u)*_*.95,a+Math.cos(f)*_,o+Math.sin(f)*_),s.quadraticCurveTo(a+Math.cos(p)*_*.95,o+Math.sin(p)*_*.95,a+Math.cos(p)*g,o+Math.sin(p)*g),s.closePath(),s.fillStyle=l[h*2%5],s.fill(),s.strokeStyle=c,s.lineWidth=.02*r,s.stroke(),s.fillStyle="rgba(236,230,214,.55)",s.beginPath(),s.arc(a+Math.cos(f)*2.88*r,o+Math.sin(f)*2.88*r,.05*r,0,ne),s.fill()}for(let h=0;h<54;h++){let f=h/54*ne;s.fillStyle=h%2?c:l[2],s.beginPath(),s.arc(a+Math.cos(f)*3.36*r,o+Math.sin(f)*3.36*r,.045*r,0,ne),s.fill()}s.globalCompositeOperation="source-atop";for(let h=0;h<6e4;h++)s.fillStyle=e()<.5?"rgba(0,0,0,.14)":"rgba(255,255,255,.1)",s.fillRect(e()*2048,e()*2048,2,2);s.globalCompositeOperation="source-over";for(let h=0;h<900;h++){let f=e()*ne,u=(2.2+e()*1.6)*r;s.fillStyle=l[Math.floor(e()*5)].replace(/[\d.]+\)$/,".35)"),s.fillRect(a+Math.cos(f)*u,o+Math.sin(f)*u,2,2)}return fd(s,a,o,3.5*r,4.4*r,120,r,e),n}function Il(i,e,t,n){let s=n.name==="phone"?512:1024,r=En(i.length*7+3);if(i==="outdoors"){let l=J_(s),c={cx:0,cz:12,w:64,d:64};return{map:Xs(l.c,[80,80]),normalMap:Xs(l.n,[80,80],!0),normalScale:.9,roughness:.96,decal:j_(c,t,r),decalRect:c}}if(i==="stadium"){let l=K_(s),c={cx:0,cz:0,w:16,d:16};return{map:Xs(l.c,[53,77]),normalMap:Xs(l.n,[53,77],!0),normalScale:.5,roughness:.58,decal:ey(c,e),decalRect:c}}let a=Q_(s),o={cx:0,cz:0,w:14.4,d:14.4};return{map:Xs(a.c,[6,52]),normalMap:Xs(a.n,[6,52],!0),normalScale:.8,roughness:.78,decal:ty(o,r),decalRect:o}}function Rh(i,e,t,n,s,r){let a=new ee(new qe(t,n),new ze({map:e.map,normalMap:e.normalMap,normalScale:new de(e.normalScale,e.normalScale),roughness:e.roughness,metalness:0}));return a.userData.decal={canvas:e.decal,rect:e.decalRect},a.rotation.x=-Math.PI/2,a.position.set(0,0,s),a.receiveShadow=!!r,a.userData.rect={w:t,d:n,cx:0,cz:s},i.add(a),a}function Ch(i,e){e.forEach(([t,n,s,r,a,o])=>i.pools.add(t,.02,n,s,s,r,a,{layer:o||"practical"}))}function ny(i){let e=[],t=(n,s,r)=>{let a=5+Math.floor(i()*3),o=[];for(let l=0;l<a;l++)o.push([(i()-.5)*4.2,5+i()*3.2,(i()-.5)*1.5,1.8+i()*1.6]);e.push({x:n,z:s,s:r?1.25:.8+i()*.4,blobs:o,fairy:i()<.55,hue:Math.floor(i()*6),tone:Math.floor(i()*3)})};for(let n=-48;n<=48;n+=6+i()*4)t(n,58+i()*12,i()<.3);return[-1,1].forEach(n=>{for(let s=-14;s<56;s+=7+i()*5)t(n*(35+i()*8),s,i()<.3)}),t(-29.5,-7,!0),t(30.5,-9.5,!0),e}function iy(){return je(256,128,(i,e,t)=>{i.fillStyle="#b3261e",i.fillRect(0,0,e,t),i.fillStyle="#f1e2c4",i.fillRect(0,t*.18,e,t*.64),i.fillStyle="#b3261e";for(let n=0;n<e;n+=32)i.beginPath(),i.moveTo(n,t*.18),i.lineTo(n+16,t*.34),i.lineTo(n+32,t*.18),i.fill(),i.beginPath(),i.moveTo(n,t*.82),i.lineTo(n+16,t*.66),i.lineTo(n+32,t*.82),i.fill();i.fillStyle="#2f6b3a";for(let n=16;n<e;n+=32)i.beginPath(),i.arc(n,t*.5,9,0,ne),i.fill(),i.fillStyle="#e8b04b",i.beginPath(),i.arc(n,t*.5,4,0,ne),i.fill(),i.fillStyle="#2f6b3a";i.fillStyle="rgba(0,0,0,.25)",i.fillRect(0,0,3,t)},{repeat:[1,1]})}var Ah=null;function Ll(i,e,t,n,s,r){if(!Ah){let f=iy();f.wrapS=rn,Ah=new ze({map:f,roughness:.95,side:tt})}let a=Math.hypot(n-e,s-t),o=new qe(a,r),l=o.attributes.uv;for(let f=0;f<l.count;f++)l.setX(f,l.getX(f)*a/3);let c=new ee(o,Ah);c.position.set((e+n)/2,r/2,(t+s)/2),c.rotation.y=Math.atan2(n-e,s-t)-Math.PI/2,i.add(c);let h=Math.round(a/3);for(let f=0;f<=h;f++){let u=f/h,p=new ee(new Je(.05,.06,r+.3,5),V("#8a6a3a",.9));p.position.set(at(e,n,u),(r+.3)/2,at(t,s,u)),i.add(p)}}function sy(i,e,t,n,s,r){let a=Rh(e,Il("outdoors",n,r&&r.circles,t),320,320,20,t.shadows);Ch(i,[[19.5,21.4,2.2,"#9fb8ff",.2,"show"]]),e.add(Yf(175)),[-1,1].forEach(d=>{let b=new ee(new Je(.06,.08,5.2,6),V("#22180f",.8));b.position.set(d*6.9,2.6,-19.6),e.add(b);let w=new ee(new ue(.5,.12,.35),V("#16110e",.6,.3));w.position.set(d*6.7,5.2,-19.4),w.rotation.z=d*.5,e.add(w),i.bigBulbs.add(d*6.62,5.12,-19.4,0,{color:Ce.warm,k:1.5,s:.9,twinkle:0,layer:"practical"})}),i.pools.add(0,.02,-17.6,8.5,4.2,Ce.warm,.2,{layer:"practical"}),Ll(e,-32.5,-16,-32.5,58,2.4),Ll(e,32.5,-16,32.5,58,2.4),Ll(e,-32.5,58,-14,58,2.4),Ll(e,14,58,32.5,58,2.4);let o=[];for(let d=-13;d<=56;d+=6)[-1,1].forEach(b=>o.push([b*32.2,d,Math.PI/2,b,0]));[[-29,-17],[17,29]].forEach(([d,b])=>{for(let w=d;w<=b;w+=6)o.push([w,57.7,0,0,1])}),o.forEach(([d,b,w,y,E])=>uy(i,e,d,b,w,2.2,y,E)),[-31,31].forEach(d=>{let b=py(11);b.position.set(d,5.5,16),e.add(b);let w=new ee(new ue(2.2,1.2,.4),V("#16110e",.6));w.position.set(d,11.6,16),w.rotation.y=-Math.sign(d)*.5,w.rotation.x=.4,e.add(w);for(let y=0;y<4;y++)i.bigBulbs.add(d+(y%2?.5:-.5)*Math.cos(.5),11.3+(y<2?.3:-.2),16-.25+(y%2?.2:-.2)*Math.sign(d),0,{color:Ce.flood,k:2.4,s:1.3,twinkle:0,layer:"key"});i.pools.add(d*.55,.02,14,14,11,Ce.flood,.15,{layer:"key"}),i.beams.push({from:[d,11.2,16],to:[d*.45,0,14],beam:new Ni(e,Ce.flood,20,.55,.05),layer:"key",hex:Ce.flood})});let l=ny(s);id(i,e,l),l.filter(d=>d.fairy&&d.z<58&&Math.abs(d.x)<40).forEach(d=>{i.pools.add(d.x,4.6*d.s,d.z-1.2*d.s,3*d.s,3.4*d.s,Ce.amber,.1,{vertical:!0,layer:"architectural"}),i.pools.add(d.x,.02,d.z,1.6,1.6,Ce.amber,.12,{layer:"architectural"}),i.bigBulbs.add(d.x-.6,.12,d.z-.6,0,{color:Ce.amber,k:.9,s:.5,twinkle:0,layer:"architectural"})});let c=ph(i,{x0:-11,x1:11,z:46,h:1.6,depth:4.4,screenBottom:2,screenTop:9.2,truss:11.2,arrays:13,sponsors:3,sideScreens:!0,band:gl.big});e.add(c.root),[-21,21].forEach(d=>_h(e,d,16,6));let h=10,f=[];for(let d=0;d<=24;d++){let b=d/24*ne+.3;f.push([Math.cos(b)*8.5,h-.25*(1-Math.abs(Math.sin(b*3))),4+Math.sin(b)*8.5])}for(let d=0;d<24;d++)i.wires.line(f[d],f[d+1]);[[[-31,11,16],[-8.5,h,4]],[[31,11,16],[8.5,h,4]],[[0,10.5,46],[0,h,12.5]]].forEach(([d,b])=>i.wires.cable(d,b,.5));let u=[];for(let d=0;d<6;d++){let b=d/6*ne+.3;u.push(gh(i,e,Math.cos(b)*8.5,7.2,4+Math.sin(b)*8.5,h,n.flags))}let p=[-10,5,20,35],g=24,_=7.4;return p.forEach(d=>[-g,g].forEach(b=>{let w=new ee(new Je(.07,.1,_,6),V("#22180f",.9));w.position.set(b,_/2,d),e.add(w)})),p.forEach((d,b)=>{Fi(i,[-g,_,d],[g,_,d],1.5,b%2?"flags":"bulbs",b*5),b<p.length-1&&(Fi(i,[-g,_,d],[g,_,p[b+1]],1.5,"bulbs",b*7),Fi(i,[g,_,d],[-g,_,p[b+1]],1.5,"bulbs",b*11))}),{rig:{hemi:["#36355f","#2a1c12",.37,.58],moon:1,spots:[{pos:[31,11.2,16],to:[12,0,20],color:"#eeeeff",base:105,distance:60,angle:.5,layer:"key"},{pos:c.wash.pos,to:c.wash.to,color:"#ffe4c4",base:150,distance:32,angle:.55,layer:"show"}],points:[{pos:[0,5.2,44.2],color:"#ffe0b8",base:80,distance:15,layer:"show"},{pos:[0,5.5,4],color:"#ffc47a",base:48,distance:16,layer:"festive"},{pos:[0,6.5,22],color:"#ffc47a",base:42,distance:18,layer:"festive"},{pos:[0,5,-19.2],color:Ce.warm,base:34,distance:13,layer:"practical"}]},stage:c,umbrellas:u,feedScreen:c.feedScreen,floor:a,fog:new Vi("#150d12",.0105),exposure:1.15}}var Ul={x:[-14,0,14],z:[-16,4,24]},dd=["#c9a37a","#b76b5a","#8f7aa8","#d4b58c","#6c8fa3","#caa0b8","#d98c5f","#7fa37a"];function ry(i,e,t,n){let s=[];for(let h=0;h<11;h++)for(let f=-27;f<=27;f+=.72)Ul.x.some(u=>Math.abs(f-u)<.55)||s.push([f+(n()-.5)*.15,1.3+h*.95,42+h*1.5+.55,0]);[-1,1].forEach(h=>{for(let f=0;f<9;f++)for(let u=-30;u<=40.5;u+=.8)Ul.z.some(p=>Math.abs(u-p)<.6)||s.push([h*(25+f*1.5+.55),1.3+f*.95,u+(n()-.5)*.15,h])});let r=s.filter(()=>n()<.55+.4*t),a=ih([[new Je(.17,.22,.8,6),$r(0,.45,0)],[new xn(.12,0),$r(0,.98,0)]]),o=new xt(a,i.selfLit(new ze({color:"#ffffff",roughness:.9,emissive:"#2a2238"}),.55,"architectural"),r.length),l=new Fe,c=new he;o.instanceColor=new Xt(new Float32Array(r.length*3),3),r.forEach((h,f)=>{let u=.85+n()*.25;o.setMatrixAt(f,l.makeScale(1,u,1).setPosition(h[0],h[1],h[2])),c.set(dd[Math.floor(n()*dd.length)]),o.setColorAt(f,c),n()<.05&&i.bulbs.add(h[0]+(n()-.5)*.2,h[1]+1.35,h[2]-(h[3]?0:.2)-h[3]*.2,0,{color:"#f4f7ff",group:2,layer:"show",twinkle:.9,ph:n()*ne,s:.9})}),e.add(o)}function ay(i,e){let t=[],s=e;for(let g=0;g<12;g++)t.push([at(s.x0,s.x1,g/12),s.edge,s.z1]);for(let g=0;g<12;g++)t.push([s.x1,s.edge,at(s.z1,s.z0,g/12)]);for(let g=0;g<12;g++)t.push([at(s.x1,s.x0,g/12),s.edge,s.z0]);for(let g=0;g<12;g++)t.push([s.x0,s.edge,at(s.z0,s.z1,g/12)]);let r=s.apex,a=["#c85a17","#d8c49c","#7e1827","#d8c49c"],o=[],l=[],c=new he,h=(g,_,m,d)=>{c.set(d),[g,_,m].forEach(b=>{o.push(b[0],b[1],b[2]),l.push(c.r,c.g,c.b)})};for(let g=0;g<t.length;g++){let _=t[g],m=t[(g+1)%t.length],d=[at(r[0],_[0],.55),at(r[1],s.edge,.55)-.35,at(r[2],_[2],.55)],b=[at(r[0],m[0],.55),at(r[1],s.edge,.55)-.35,at(r[2],m[2],.55)],w=a[g%a.length];h(r,b,d,w),h(d,b,m,w),h(d,m,_,w)}let f=new st;f.setAttribute("position",new $e(o,3)),f.setAttribute("color",new $e(l,3)),f.computeVertexNormals();let u=new ee(f,new ze({color:"#ffffff",roughness:.95,vertexColors:!0,side:tt,emissive:"#3a1a0a",emissiveIntensity:.8}));i.add(u);let p=je(256,64,(g,_,m)=>{g.clearRect(0,0,_,m),g.fillStyle="#6b1020",g.beginPath(),g.moveTo(0,0),g.lineTo(_,0);for(let d=4;d>0;d--){let b=d*_/4,w=b-_/4;g.lineTo(b,m*.5),g.quadraticCurveTo((w+b)/2,m*1.05,w,m*.5)}g.closePath(),g.fill(),g.strokeStyle="#d6a64a",g.lineWidth=4,g.beginPath();for(let d=0;d<4;d++){let b=d*_/4;g.moveTo(b,m*.5),g.quadraticCurveTo(b+_/8,m*1.02,b+_/4,m*.5)}g.stroke();for(let d=0;d<4;d++)g.fillStyle="rgba(235,245,255,.9)",g.beginPath(),g.arc((d+.5)*_/4,m*.35,5,0,ne),g.fill()});return p.wrapS=rn,[[(s.x0+s.x1)/2,s.z1,s.x1-s.x0,0],[(s.x0+s.x1)/2,s.z0,s.x1-s.x0,Math.PI],[s.x1,(s.z0+s.z1)/2,s.z1-s.z0,Math.PI/2],[s.x0,(s.z0+s.z1)/2,s.z1-s.z0,-Math.PI/2]].forEach(([g,_,m,d])=>{let b=p.clone();b.needsUpdate=!0,b.repeat.set(m/3.2,1);let w=new ee(new qe(m,.8),new ze({map:b,transparent:!0,alphaTest:.3,side:tt,roughness:.9,emissive:"#2a0a0a"}));w.position.set(g,s.edge-.4,_),w.rotation.y=d,i.add(w)}),u.material}function oy(i,e,t,n,s,r){let a=Rh(e,Il("stadium",n,r&&r.circles,t),64,92,10,t.shadows);Ch(i,[[0,10,22,Ce.tungsten,.07],[15.5,16.4,2.2,"#9fb8ff",.2,"show"]]);let o=new ee(new qe(140,140),V("#140e0a",.95));o.rotation.x=-Math.PI/2,o.position.set(0,-.01,10),e.add(o);let l=[];for(let R=0;R<=10;R++){let I=42+R*1.5,P=1.3+R*.95;l.push([sh(new ue(58,P,1.5),`rgb(${36+R*2},${30+R*2},${44+R*2})`),$r(0,P/2,I+.75)])}[-1,1].forEach(R=>{for(let I=0;I<=8;I++){let P=R*(25+I*1.5),D=1.3+I*.95;l.push([sh(new ue(1.5,D,76),`rgb(${30+I*2},${26+I*2},${40+I*2})`),$r(P+R*.75,D/2,4)])}}),e.add(new ee(ih(l),i.selfLit(new ze({color:"#ffffff",roughness:.9,vertexColors:!0,emissive:"#3a3252"}),.38,"architectural"))),ry(i,e,t.density,s);let c="#a898ff";[-1,1].forEach(R=>{for(let I=-28;I<=40;I+=8){let P=new ee(new ue(.3,.16,1.2),V("#16131c",.5,.4));P.position.set(R*30.5,15.9,I),e.add(P),i.bigBulbs.add(R*30.5,15.78,I,0,{color:c,k:1.1,s:.55,twinkle:0,layer:"architectural"}),i.pools.add(R*28.6,5.4,I,4.2,3.6,c,.09,{vertical:!0,ry:Math.PI/2,layer:"architectural"})}});for(let R=-24;R<=24;R+=8)i.bigBulbs.add(R,15.78,47.5,0,{color:c,k:1.1,s:.55,twinkle:0,layer:"architectural"}),i.pools.add(R,6,48.5,4.2,3.8,c,.08,{vertical:!0,layer:"architectural"});let h=je(512,64,(R,I,P)=>{R.fillStyle="#0a0608",R.fillRect(0,0,I,P);for(let D=0;D<8;D++){let k=(D+.5)/8*I;if(R.fillStyle="#fff",D%3===0){for(let W=0;W<8;W++){let B=W/8*ne;R.beginPath(),R.ellipse(k+Math.cos(B)*13,P/2+Math.sin(B)*13,8,4,B,0,ne),R.fill()}R.beginPath(),R.arc(k,P/2,6,0,ne),R.fill()}else D%3===1?(R.save(),R.translate(k,P/2),[-.6,.6].forEach(W=>{R.save(),R.rotate(W),R.fillRect(-2.5,-22,5,44),R.restore()}),R.restore()):(R.beginPath(),R.ellipse(k,P*.66,14,6,0,0,Math.PI),R.fill(),R.beginPath(),R.moveTo(k,P*.2),R.quadraticCurveTo(k+7,P*.5,k,P*.62),R.quadraticCurveTo(k-7,P*.5,k,P*.2),R.fill())}R.fillStyle="rgba(255,255,255,.55)";for(let D=4;D<I;D+=8)R.fillRect(D,4,2,2),R.fillRect(D,P-6,2,2)});h.wrapS=rn;let f=[[0,41.9,56,0],[-24.9,4,76,Math.PI/2],[24.9,4,76,Math.PI/2]].map(([R,I,P,D])=>{let k=h.clone();k.needsUpdate=!0,k.repeat.set(P/7,1);let W=new ee(new ue(P,.9,.08),new Et({color:"#ffffff",map:k}));return W.position.set(R,.65,I),W.rotation.y=D,W.userData.dynamic=!0,e.add(W),W}),u={roof:17,apex:[0,13.4,10],edge:11.2,x0:-24,x1:24,z0:-14,z1:34},p=new ee(new ue(80,.3,100),V("#130e19",.9));p.position.set(0,u.roof+.15,10),e.add(p);let g=new ee(new ue(80,17,.4),V("#191320",.9));g.position.set(0,8.5,59),e.add(g);let _=new ee(new ue(80,17,.4),V("#191320",.9));_.position.set(0,8.5,-40),e.add(_),[-1,1].forEach(R=>{let I=new ee(new ue(.4,17,100),V("#161120",.9));I.position.set(R*39,8.5,10),e.add(I)});for(let R=0;R<9;R++)i.pools.add(-32+R*8,14.2,58.7,2.4,2.6,Ce.amber,.3,{vertical:!0,layer:"architectural"}),i.bigBulbs.add(-32+R*8,16.4,58.5,0,{color:Ce.amber,k:1,s:.6,twinkle:0,layer:"architectural"});[-1,1].forEach(R=>{for(let I=-30;I<=54;I+=8)i.pools.add(R*38.7,14.2,I,2.4,2.6,Ce.amber,.26,{vertical:!0,ry:Math.PI/2,layer:"architectural"}),i.bigBulbs.add(R*38.5,16.4,I,0,{color:Ce.amber,k:1,s:.6,twinkle:0,layer:"architectural"})}),Ul.x.forEach(R=>{for(let I=0;I<=10;I++)i.bulbs.add(R,1.3+I*.95-.12,42+I*1.5-.02,0,{color:Ce.amber,k:.7,s:.5,twinkle:0,layer:"architectural"})}),[-1,1].forEach(R=>Ul.z.forEach(I=>{for(let P=0;P<=8;P++)i.bulbs.add(R*(25+P*1.5)-R*.02,1.3+P*.95-.12,I,0,{color:Ce.amber,k:.7,s:.5,twinkle:0,layer:"architectural"})}));for(let R=-24;R<=24;R+=8)i.bigBulbs.add(R,16.6,50,0,{color:Ce.warm,k:1.1,s:.7,twinkle:0,layer:"practical"});[-1,1].forEach(R=>{for(let I=-24;I<=40;I+=8)i.bigBulbs.add(R*31,16.6,I,0,{color:Ce.warm,k:1.1,s:.7,twinkle:0,layer:"practical"})});for(let R=-30;R<=57;R+=6){let I=new ee(new qe(78,.9),wl(1));I.material.map.repeat.set(1,1),I.rotation.z=Math.PI/2,I.position.set(0,u.roof-.45,R),I.rotation.set(0,0,0),e.add(I)}let m=ay(e,u);[[-12,2],[12,2],[-12,20],[12,20],[0,26]].forEach(([R,I])=>nd(i,e,R,I,u.edge+1.2));let d=[];for(let R=0;R<6;R++){let I=R/6*ne+.3;d.push(gh(i,e,Math.cos(I)*8.5,8.2,4+Math.sin(I)*8.5,12.1,n.flags))}let b=[];[-1,1].forEach(R=>{for(let I=0;I<6;I++){let P=R*(9.2+I*.35);for(let D=8.2;D>2.4;D-=.14)b.push([P,D,35.2-I*.05,Math.round(D/.14)%2])}});let w=new xt(new Ft(.06,6,4),V("#ffffff",.9),b.length),y=new Fe;w.instanceColor=new Xt(new Float32Array(b.length*3),3);let E=new he("#f29a2e"),v=new he("#f6c342");b.forEach((R,I)=>{w.setMatrixAt(I,y.makeTranslation(R[0],R[1],R[2]));let P=R[3]?E:v;w.setColorAt(I,P)}),e.add(w),[2,18,32].forEach((R,I)=>Fi(i,[-24,11,R],[24,11,R],1.6,"flags",I*3));let S=["#ff9f5a","#ff6fa3","#7fe0a0","#ffd58a"],x=0;[34,22,10,-2].forEach(R=>[-15,-5,5,15].forEach(I=>{xh(i,e,I,9.5+x%2*.8,R,S[x%4],11.6),x++})),[-1,1].forEach(R=>{for(let D=-24;D<=36;D+=10){let k=n.flags[((D+40)/10+(R>0?1:0))%n.flags.length],W=Vs(new ee(new qe(2.2,3.3),V(k,.8,0,{side:tt})),-R*Math.PI/2);W.position.set(R*25.05,3.95,D),e.add(W);let B=Vs(new ee(new qe(.6,.3),i.glow("#1f8f4b",1.6,"practical")),-R*Math.PI/2);B.position.set(R*25.02,1.9,D+5),e.add(B)}let I=wt(new ee(new qe(10,3.5),i.litMap(Kr(Jr[R<0?0:1],1024,358,{bg:"#fbf1dc",pad:.02}),.9,"practical")));I.position.set(R*28,9.15,40),e.add(I);let P=new ee(new ue(10.5,3.9,.2),V("#0d0b10",.6));P.position.set(R*28,9.15,40.15),e.add(P)}),[-1,1].forEach(R=>{let I=new ee(new ue(.06,1.1,40),V("#8a8a92",.4,.7));I.position.set(R*24.4,.55,13),e.add(I)});let T=ph(i,{x0:-8,x1:8,z:35.5,h:1.4,depth:4.4,screenBottom:1.8,screenTop:7.8,truss:9,arrays:10,band:gl.big});e.add(T.root);let C=[[-18,0],[-6,0],[6,0],[18,0],[-12,22],[12,22]].map(([R,I],P)=>{let D=new ee(new Je(.2,.26,.5,10),V("#1b1920",.5,.4));D.position.set(R,15.6,I),e.add(D);let k=new ee(new gn(1,24),new Et({map:xl(),color:"#ffffff",transparent:!0,opacity:.2,blending:jn,depthWrite:!1,side:tt}));return k.rotation.x=-Math.PI/2,k.renderOrder=2,e.add(k),{x:R,z:I,i:P,beam:new Ni(e,"#ffffff",16,.2,.2),spot:k,layer:"show"}});return{rig:{hemi:["#5e4436","#24170e",.55,.8],moon:0,spots:[{pos:[4,15.5,-2],to:[0,0,6],color:Ce.warm,base:150,distance:40,angle:.6,layer:"key"},{pos:T.wash.pos,to:T.wash.to,color:"#ffe4c4",base:130,distance:28,angle:.55,layer:"show"}],points:[[-10,9.5,2],[10,9.5,2],[-10,9.5,20],[10,9.5,20]].map(R=>({pos:R,color:Ce.tungsten,base:58,distance:34,layer:"practical"}))},stage:T,umbrellas:d,feedScreen:T.feedScreen,floor:a,fog:new Vi("#140c10",.009),exposure:1.1,update(R,I){let{TH:P,pulse:D,reduce:k,lv:W}=I;m.emissiveIntensity=.5*W.practical,f.forEach((B,O)=>{B.material.color.copy(_l(P.hues[O%P.hues.length]+20*Math.sin(R*P.speed+O),P.sat,52+8*D)).multiplyScalar(1.15*W.festive),k||(B.material.map.offset.x=R*.08*(O?-1:1)%1)}),C.forEach(B=>{let O=k?0:R*P.speed/.3,F=B.x*.4+Math.sin(O*.35+B.i*1.9)*9,X=B.z+Math.cos(O*.27+B.i)*9,oe=P.beams[B.i%P.beams.length];B.beam.aim([B.x,15.4,B.z],[F,0,X]),B.beam.set(oe,W.show*(.8+.4*D)),B.spot.position.set(F,.03,X),B.spot.scale.setScalar(2.6),B.spot.material.color.set(oe),B.spot.material.opacity=.5*W.show})}}}function ly(i,e){let t=i.z2-i.z1,n=26,s=Math.round(t*n),r=Math.round(i.h*n),a=c=>h=>{if(c)h.fillStyle="#000",h.fillRect(0,0,s,r);else{h.fillStyle=i.col,h.fillRect(0,0,s,r),h.fillStyle="rgba(0,0,0,.18)";for(let u=0;u<400;u++)h.fillRect(e()*s,e()*r,2,2);h.fillStyle="rgba(214,176,111,.28)",h.fillRect(0,0,s,.4*n)}let f=Math.max(2,Math.round(t/2.2));for(let u=0;u<i.floors;u++){let p=.9+u*3.1;for(let g=0;g<f;g++){let _=t*(g+.5)/f,m=u===0&&g===Math.floor(f/2),d=m?.75:.5,b=m?2.3:1.5,w=m?0:p,y=(i.lit*10+u*3+g)%3<1.6,E=_*n,v=r-w*n,S=r-(w+b*.7)*n,x=r-(w+b*1.12)*n,T=(C,U)=>{h.fillStyle=U,h.beginPath(),h.moveTo(E-C*n,v),h.lineTo(E-C*n,S),h.quadraticCurveTo(E,x-6,E+C*n,S),h.lineTo(E+C*n,v),h.closePath(),h.fill()};if(c){!m&&y&&T(d,"#ffba60");continue}m?(T(d+.14,"#7a4a22"),T(d,"#3a1f12")):(T(d,y?"#ffba60":"#161022"),u>0&&(h.fillStyle=["#2f5d4a","#3a4f7a","#6b3a1c"][i.hue%3],h.fillRect(E-(d+.34)*n,S,.3*n,b*.72*n),h.fillRect(E+(d+.04)*n,S,.3*n,b*.72*n)))}!c&&u===1&&i.balcony&&(h.fillStyle="rgba(120,80,50,.7)",h.fillRect(.6*n,r-(p+.7)*n,s-1.2*n,.9*n))}if(!c&&i.hue===3&&t>5.5){h.fillStyle="#b8312b";let u=t/2+1.4;h.fillRect((u-1.3)*n,r-3.15*n,2.6*n,.6*n),h.fillStyle="#ffe9b8",h.font=`700 ${Math.round(.42*n)}px "Noto Sans Gujarati", "Gujarati Sangam MN", Shruti, "Anek Gujarati", system-ui, sans-serif`,h.textAlign="center",h.fillText("\u0A95\u0AB0\u0ABF\u0AAF\u0ABE\u0AA3\u0ABE",u*n,r-2.7*n)}},o=je(s,r,a(!1)),l=je(s,r,a(!0));return{map:o,em:l}}function cy(i,e,t,n,s,r){let a=Rh(e,Il("sheri",n,r&&r.circles,t),14.4,124,16,t.shadows);Ch(i,[[4.4,60.6,2.2,"#9fb8ff",.2,"show"]]),[-1,1].forEach(S=>{let x=new ee(new ue(.35,.45,124),V("#3a3040",.9));x.position.set(S*7.3,.225,16),e.add(x)});let o=[],l=["#3a4468","#5e4526","#5c3040","#28524f","#5b5241","#4a3a5e"],c=[];[-1,1].forEach(S=>{for(let x=-48;x<70;){let T=5+s()*3.5,C=6.8+s()*4.5;o.push({side:S,z1:x,z2:x+T,h:C,col:l[Math.floor(s()*l.length)],floors:C>9.5?3:2,lit:s(),balcony:s()<.5,bulbs:s()<.6,hue:Math.floor(s()*6)}),x+=T+.15}});let h=o.find(S=>S.side>0&&S.z1<=1.5&&S.z2>=1.5);h&&(h.col="#7a4f9e"),o.forEach(S=>{let x=S.z2-S.z1,T=S.side*8,C=(S.z1+S.z2)/2,U=new ee(new ue(6,S.h,x),V(S.col,.95));U.position.set(T+S.side*3,S.h/2,C),e.add(U);let R=ly(S,s),I=new ze({map:R.map,emissiveMap:R.em,emissive:"#ffffff",emissiveIntensity:1.2,roughness:.9});c.push(I);let P=Vs(new ee(new qe(x,S.h),I),-S.side*Math.PI/2);P.position.set(T-S.side*.01,S.h/2,C),e.add(P);let D=new ee(new ue(.4,.3,x),V("#d6b06f",.8));if(D.position.set(T-S.side*.1,S.h-.15,C),e.add(D),S.balcony){let k=new ee(new ue(.7,.08,x-1.2),V("#5a3a22",.8));k.position.set(T-S.side*.35,3.8,C),e.add(k);let W=new ee(new ue(.04,.8,x-1.2),V("#78503a",.7,.2));W.position.set(T-S.side*.7,4.2,C),e.add(W)}if(S.bulbs){for(let k=S.z1+.6;k<S.z2-.3;k+=1.1)for(let W=S.h-.8;W>1.2;W-=.9)i.bulbs.add(T-S.side*.08,W,k,S.hue+Math.round(W),{ph:k+W*2,s:.7,twinkle:.4});for(let k=S.z1+.3;k<S.z2;k+=.7)i.bulbs.add(T-S.side*.12,S.h-.1,k,S.hue,{ph:k})}if(S.hue%2===0){let k=new ee(new Je(.6,.6,1.2,12),V("#1f1d24",.8));k.position.set(T+S.side*1.4,S.h+.6,C),e.add(k)}dy(i,e,S,s)});let f=new ee(new ue(16.4,12,3),V("#2c2338",.95));f.position.set(0,6,73.5),e.add(f);let u=new ee(new ue(2.4,3.2,1),V("#7a1a14",.7));u.position.set(0,1.6,71.6),e.add(u);let p=new ee(new nn(1.1,.08,6,20,Math.PI),V("#e8b04b",.35,.7));p.position.set(0,2.2,71.05),e.add(p);for(let S=0;S<5;S++)i.flames.add((S-2)*.45,.02,70.9,{s:.05,k:.8});i.pools.add(0,1.6,71.05,1.8,1.8,Ce.flame,.35,{vertical:!0,layer:"flame"});let g=new ee(new ue(6.9,3.1,.1),V("#14100c",.7));g.position.set(0,6.6,71.85),e.add(g);let _=wt(new ee(new qe(6.6,2.9),Tl(1.2)));_.position.set(0,6.6,71.7),_.visible=!1,_.userData.dynamic=!0,e.add(_);let m=new ee(new tn([[3.2,0],[3,3],[2.2,6],[1.2,8.5],[.2,10]].map(([S,x])=>new de(S,x)),12),V("#231a2c",.9));m.position.set(0,12,80),e.add(m);for(let S=0;S<=20;S++){let x=S/20,T=x*Math.PI,C=-3.2*Math.cos(T),U=12+Math.sin(T)*10*Math.pow(Math.sin(T),.4);i.bulbs.add(C*(1-.7*Math.sin(T)*.9),U,77.2,S,{ph:S})}i.pools.add(0,15,76.8,4.2,6,Ce.amber,.16,{vertical:!0,layer:"architectural"}),i.pools.add(0,3.5,71.95,7,3.5,Ce.amber,.08,{vertical:!0,layer:"architectural"});let d=new ee(new qe(1.2,.6),V("#d8453a",.8,0,{side:tt}));d.position.set(.6,23.2,80),d.userData.dynamic=!0,e.add(d);for(let S=62;S>=-20;S-=14)[-1,1].forEach((x,T)=>{let C=S+T*7,U=new ee(new ue(1.4,.06,.06),V("#1b1510",.8));U.position.set(x*7.3,5.2,C),e.add(U);let R=new ee(new Je(.08,.2,.14,10),V("#1b1510",.6,.4));R.position.set(x*6.6,5.16,C),e.add(R),i.bigBulbs.add(x*6.6,5.05,C,0,{color:Ce.sodium,k:1.05,s:.8,layer:"practical",twinkle:.03}),i.pools.add(x*5.8,.02,C,4.4,4.4,Ce.sodium,.15),i.pools.add(x*7.9,3.4,C,2.4,2.4,Ce.sodium,.09,{vertical:!0,ry:x*Math.PI/2})});[[-1,3.5,8.5,2],[1,5,10,3],[-1,34,38.5,4],[1,36,40.5,0]].forEach(([S,x,T,C])=>{let U=T-x,R=U/2.34,I=Vs(new ee(new qe(U,R),i.selfLit(new ze({map:Kr(Jr[C],768,Math.round(768/2.34),{pad:0}),roughness:.8}),.35)),-S*Math.PI/2);I.position.set(S*7.94,3.1,(x+T)/2),e.add(I),i.bigBulbs.add(S*7.6,3.1+R/2+.15,(x+T)/2,0,{color:Ce.warm,k:.8,s:.4,twinkle:0,layer:"practical"}),i.pools.add(S*7.9,3.1,(x+T)/2,U*.55,R*.7,Ce.warm,.1,{vertical:!0,ry:S*Math.PI/2,layer:"practical"})}),[-1,1].forEach(S=>{let x=new ee(new ue(1.1,.45,124),V("#4a3a34",.9));x.position.set(S*7.4,.225,16),e.add(x)});let b=new ee(new ue(6.8,.6,2.1),V("#6b3f1f",.8));b.position.set(0,.3,64.95),e.add(b);let w=new ee(new qe(6.6,2),new ze({map:je(256,64,(S,x,T)=>{for(let C=0;C<7;C++)S.fillStyle=C%2?"#c2721e":"#7e1827",S.fillRect(0,C/7*T,x,T/7+1)}),roughness:1}));w.rotation.x=-Math.PI/2,w.position.set(0,.605,64.95),e.add(w),[-4.6,4.6].forEach(S=>_h(e,S,64,1.8));let y=El(i,e,gl.sheri,{x0:-3.2,x1:3.2,front:63.9,floor:.6,small:!0});hy(i,e,n),[12,21,34].forEach((S,x)=>{let T=[],C=[],U=new he,R=[n.flags[x%n.flags.length],"#f6c342","#2f8f5b","#b8312b"];for(let P=0;P<10;P++){let D=kn([-8,7.6,S],[8,7.6,S],.9,P/10),k=kn([-8,7.6,S],[8,7.6,S],.9,(P+1)/10),W=[[D[0],D[1],D[2]],[k[0],k[1],k[2]],[k[0],k[1]-.2,k[2]+1.6],[D[0],D[1]-.2,D[2]+1.6]];U.set(R[P%R.length]),[W[0],W[1],W[2],W[0],W[2],W[3]].forEach(B=>{T.push(B[0],B[1],B[2]),C.push(U.r,U.g,U.b)}),i.flags.add((D[0]+k[0])/2,D[1]-.05,D[2],Math.PI/2+Math.PI/2,.22,P+1)}let I=new st;I.setAttribute("position",new $e(T,3)),I.setAttribute("color",new $e(C,3)),I.computeVertexNormals(),e.add(new ee(I,V("#ffffff",.9,0,{vertexColors:!0,side:tt,emissive:"#1a0c06"})))}),[[-8,9,6,8,8.5,20],[-8,8.2,26,8,9,14],[-8,9.2,40,8,8,48],[-8,8.6,2,8,8.8,-4],[-7.8,9.4,-6,-7.8,9.4,60],[7.8,9,-6,7.8,9,60]].forEach(S=>i.wires.cable([S[0],S[1],S[2]],[S[3],S[4],S[5]],.6));let E=["#ff9f5a","#ff6fa3","#7fe0a0","#ffd58a"];return[60,50,41,32,24,16,8,0,-8].forEach((S,x)=>{x%3===0?(Fi(i,[-8,6.8,S],[8,6.8,S+2],1.1,"bulbs",x),Fi(i,[-8,6.8,S+2],[8,6.8,S],1.1,"bulbs",x+3)):Fi(i,[-8,6.4,S],[8,6.4,S],1.3,x%3===1?"flags":"bulbs",x),x%2===0&&xh(i,e,0,4.4,S+.5,E[x%4],6.4)}),{rig:{hemi:["#3f3a6c","#1f1612",.5,.72],moon:1,spots:[{pos:[-6.5,9,-3],to:[0,0,1],color:"#ffd9ae",base:70,distance:30,angle:.7,layer:"key"},{pos:[0,5.2,59.8],to:[0,1.9,64.9],color:"#ffe4c4",base:62,distance:14,angle:.55,layer:"show"}],points:[[-5.8,5,-6],[5.8,5,8],[-5.8,5,22],[5.8,5,50]].map(S=>({pos:S,color:Ce.sodium,base:32,distance:22,layer:"practical"}))},bandHoles:y,feedScreen:_,floor:a,fog:new Vi("#140d18",.011),exposure:1.05,update(S,x){c.forEach(T=>T.emissiveIntensity=.8*x.lv.practical),d.rotation.y=x.reduce?0:Math.sin(S*3)*.3}}}function hy(i,e,t){let o=je(64,256,(v,S,x)=>{v.fillStyle="#a81e1e",v.fillRect(0,0,S,x),[.05,.12,.45,.52,.88,.95].forEach(T=>{v.fillStyle="#d6a64a",v.fillRect(0,T*x,S,x*.025)}),v.fillStyle="rgba(255,230,170,.45)";for(let T=.2;T<.42;T+=.04)for(let C=4;C<S;C+=12)v.fillRect(C,T*x,4,3)}),l=new tn([[.12,0],[.13,.08],[.085,.16],[.075,1.1],[.11,1.2],[.075,1.3],[.07,2.55],[.11,2.66],[.14,2.78],[.1,2.85]].map(([v,S])=>new de(v,S)),14),c=new ze({map:o,roughness:.45,metalness:.2});[[-3.35,63.9],[3.35,63.9],[-3.35,66],[3.35,66]].forEach(([v,S],x)=>{let T=new ee(l,c);if(T.position.set(v,.6,S),e.add(T),x<2)for(let C=0;C<26;C++){let U=C*.9,R=new ee(new xn(.04,0),V(C%3?"#f08a24":"#f6c342",.85));R.position.set(v+Math.cos(U)*.1,.6+2.7-C*.1,S+Math.sin(U)*.1),e.add(R)}});let h=je(256,64,(v,S,x)=>{let T=["#e8781e","#7e1827","#f3e6d0","#7e1827"];for(let C=0;C<16;C++)v.fillStyle=T[C%4],v.fillRect(C/16*S,0,S/16+1,x)}),f=new ee(new qe(7.3,Math.hypot(66-63.9+.5,.4)),new ze({map:h,roughness:.9,side:tt}));f.rotation.x=-Math.PI/2-Math.atan2(.4,66-63.9+.5),f.position.set(0,3.45+.2,(63.9+66)/2),e.add(f);let u=(v,S)=>je(512,96,(x,T,C)=>{x.clearRect(0,0,T,C);let U=T/v;for(let R=0;R<v;R++)x.fillStyle=R%2?S:"#f3e6d0",x.fillRect(R*U,0,U+1,C*.6),x.beginPath(),x.moveTo(R*U,C*.6),x.quadraticCurveTo((R+.5)*U,C*1.02,(R+1)*U,C*.6),x.closePath(),x.fill(),x.fillStyle="#d6a64a",x.beginPath(),x.arc((R+.5)*U,C*.88,5,0,ne),x.fill();x.fillStyle="#d6a64a",x.fillRect(0,C*.58,T,4)}),p=new ze({map:u(12,"#7e1827"),roughness:.9,alphaTest:.35,side:tt}),g=new ze({map:u(5,"#7e1827"),roughness:.9,alphaTest:.35,side:tt}),_=wt(new ee(new qe(7.3,.5),p));_.position.set(0,3.45-.02,63.9-.26),e.add(_),[-1,1].forEach(v=>{let S=Vs(new ee(new qe(2.6000000000000014,.5),g),-v*Math.PI/2);S.position.set(v*3.65,3.45+.1,(63.9+66)/2),e.add(S)});for(let v=0;v<=18;v++)i.bulbs.add(at(-3.6,3.6,v/18),3.45-.3,63.9-.28,v,{ph:v*1.1,s:.8});for(let v=0;v<=28;v++)i.flags.add(at(-3.4,3.4,v/28),3.45-.34,63.9-.2,Math.PI,.1,v);let m=je(512,96,()=>{}),d=()=>{let v=m.image.getContext("2d"),S=512,x=96;v.fillStyle="#6b1020",v.fillRect(0,0,S,x),v.strokeStyle="#d6a64a",v.lineWidth=6,v.strokeRect(5,5,S-10,x-10),v.fillStyle="#ffe6a8",v.textAlign="center",v.textBaseline="middle",v.font='700 50px "Noto Sans Gujarati", "Gujarati Sangam MN", Shruti, system-ui, sans-serif',v.fillText("\u0AA8\u0AB5\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0AC0 \u0AAE\u0AB9\u0ACB\u0AA4\u0ACD\u0AB8\u0AB5",S/2,x*.54),m.needsUpdate=!0};d(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(d);let b=wt(new ee(new qe(4.2,.78),i.litMap(m,1,"practical")));b.position.set(0,3.45+.72,63.9-.28),e.add(b),[-1.6,1.6].forEach(v=>{let S=new ee(new Je(.02,.02,.5,5),V("#2a1a10",.7));S.position.set(v,3.45+.3,63.9-.26),e.add(S)});let w=je(512,208,()=>{}),y=()=>{let v=w.image.getContext("2d"),S=512,x=208,T=v.createLinearGradient(0,0,0,x);T.addColorStop(0,"#5a0c16"),T.addColorStop(1,"#8e1b2c"),v.fillStyle=T,v.fillRect(0,0,S,x),v.strokeStyle="#d6a64a",v.lineWidth=5,v.strokeRect(8,8,S-16,x-16),v.save(),v.translate(S/2,x*.46);for(let C=0;C<16;C++)v.save(),v.rotate(C/16*ne),v.fillStyle=C%2?"rgba(214,166,74,.8)":"rgba(240,138,36,.7)",v.beginPath(),v.ellipse(34,0,26,8,0,0,ne),v.fill(),v.restore();v.fillStyle="#d6a64a",v.beginPath(),v.arc(0,0,14,0,ne),v.fill(),v.restore(),v.fillStyle="#ffe6a8",v.textAlign="center",v.font='700 30px "Noto Sans Gujarati", "Gujarati Sangam MN", Shruti, system-ui, sans-serif',v.fillText("\u0A9C\u0AAF \u0A85\u0A82\u0AAC\u0AC7",S/2,x*.9),w.needsUpdate=!0};y(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(y);let E=wt(new ee(new qe(6.5,2.65),i.selfLit(new ze({map:w,roughness:.95}),.05)));E.position.set(0,.6+1.4,66-.06),e.add(E),[-1,1].forEach(v=>{let S=new ee(new Je(.07,.1,.18,10),V("#1a1714",.5,.4));S.position.set(v*3.2,3.45-.35,63.9+.05),S.rotation.z=v*.7,e.add(S),i.bigBulbs.add(v*3.12,3.45-.42,63.9+.08,0,{color:Ce.warm,k:1.2,s:.45,twinkle:0,layer:"show"}),i.pools.add(v*1.6,.6+1.3,66-.1,2.2,1.4,Ce.warm,.06,{vertical:!0,layer:"show"})}),i.pools.add(0,.02,63.9-1.2,3.6,1.6,Ce.warm,.06,{layer:"show"})}function uy(i,e,t,n,s,r,a,o){let l=new ee(new ue(.22,.12,.16),V("#15110d",.6,.4));l.position.set(t,.06,n),l.rotation.y=s,e.add(l),i.bigBulbs.add(t,.14,n,0,{color:Ce.amber,k:.9,s:.45,twinkle:0,layer:"architectural"}),i.pools.add(t+a*.24,r*.42,n+o*.24,1.1,r*.75,Ce.amber,.24,{vertical:!0,ry:s,layer:"architectural"}),i.pools.add(t,.02,n,1.3,1.3,Ce.amber,.1,{layer:"architectural"})}var Dl=[];function fy(i){if(Dl[i])return Dl[i];let e=[["#c2185b","#f6c342","#2a9d8f","#fff3d6"],["#f08a24","#3b4cc0","#e9c46a","#fff3d6"],["#2f8f5b","#d8453a","#f6c342","#fff3d6"]][i],t=je(128,128,(n,s)=>{n.clearRect(0,0,s,s),n.translate(s/2,s/2);for(let r=0;r<8;r++)n.save(),n.rotate(r/8*ne),n.fillStyle=e[r%2],n.beginPath(),n.ellipse(s*.26,0,s*.15,s*.07,0,0,ne),n.fill(),n.restore();n.fillStyle=e[2],n.beginPath(),n.arc(0,0,s*.14,0,ne),n.fill(),n.fillStyle=e[3];for(let r=0;r<16;r++){let a=r/16*ne;n.beginPath(),n.arc(Math.cos(a)*s*.44,Math.sin(a)*s*.44,3,0,ne),n.fill()}});return Dl[i]=new ze({map:t,transparent:!0,alphaTest:.2,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2}),Dl[i]}function dy(i,e,t,n){let s=t.z2-t.z1,r=t.side*8,a=Math.max(2,Math.round(s/2.2)),o=t.z1+s*(Math.floor(a/2)+.5)/a;if(!(t.z2<-24||t.z1>68)){if(t.lit>.3){let l=new ee(new ue(.3,.05,.05),V("#1b1510",.7));l.position.set(r-t.side*.15,2.72,o+.62),e.add(l),i.bigBulbs.add(r-t.side*.28,2.64,o+.62,0,{color:Ce.tungsten,k:1.2,s:.5,twinkle:.02,layer:"practical"}),i.pools.add(r-t.side*.03,2.5,o+.62,.9,1.2,Ce.tungsten,.22,{vertical:!0,ry:t.side*Math.PI/2,layer:"practical"}),i.pools.add(t.side*6.4,.02,o+.4,1.8,1.8,Ce.tungsten,.12,{layer:"practical"})}if(n()<.55){for(let c=0;c<5;c++)i.flames.add(t.side*6.98,.45,o+(c-2)*.24,{s:.038,k:.55});i.pools.add(t.side*6.5,.02,o,1.4,1.6,Ce.flame,.16,{layer:"flame"}),i.pools.add(t.side*6.84,.24,o,1.3,.3,Ce.flame,.2,{vertical:!0,ry:t.side*Math.PI/2,layer:"flame"});let l=new ee(new gn(.42,24),fy(Math.floor(n()*3)));l.rotation.x=-Math.PI/2,l.position.set(t.side*6.2,.01,o),e.add(l)}for(let l=0;l<a;l++)l===Math.floor(a/2)||(t.lit*10+l)%3>=1.6||i.pools.add(t.side*6.45,.02,t.z1+s*(l+.5)/a,1.1,1.3,Ce.tungsten,.08,{layer:"practical"})}}function py(i){let e=new ft,t=wl(Math.round(i/1.1)),n=.6;for(let s=0;s<3;s++){let r=new ee(new qe(n,i),t),a=s/3*ne;r.position.set(Math.sin(a)*n*.29,0,Math.cos(a)*n*.29),r.rotation.y=a,e.add(r)}return e}function pd(i,e,t,n){let s=Li[t]||Li.traditional,r=En(i==="outdoors"?101:i==="stadium"?202:303),a=new ft,o=Hf(),l=i==="stadium"?null:qf(i);l&&a.add(l.root);let c=i==="outdoors"?sy(o,a,e,s,r,n):i==="stadium"?oy(o,a,e,s,r,n):cy(o,a,e,s,r,n),h=n?ud(o,a,i,n):null;n&&n.stage&&(n.stage.hole3d={front:c.stage?c.stage.stageFront:[],band:c.stage?c.stage.bandHoles:c.bandHoles});let f=td(o,{small:i==="sheri",flags:s.flags});a.add(f.root),o.pools.add(0,.02,0,i==="sheri"?3.6:4.4,i==="sheri"?3.6:4.4,"#ffae5c",.2,{layer:"garbo",live:!0}),o.flames.lightPools(o);let u=Bf(c.floor,c.floor.userData.rect,o.pools.list,s,e.name==="phone"?512:1024,c.floor.userData.decal);return o.pools.bakedGround=!0,kf(o,a),Al(a,new Set(o.lit.map(p=>p.mat))),Object.assign({id:i,root:a,kit:o,sky:l,TH:s,lightMaps:u,garbo:f,furnish:h,garboLight:{pos:[0,i==="sheri"?1.3:1.45,0],distance:i==="sheri"?12:15,color:"#ffae5c"}},c)}var md={phone:{name:"phone",pixels:9e5,shadows:!1,shadowSize:0,bloomScale:.35,spots:0,points:2,samples:0},tablet:{name:"tablet",pixels:16e5,shadows:!1,shadowSize:0,bloomScale:.45,spots:2,points:4,samples:2},desktop:{name:"desktop",pixels:24e5,shadows:!0,shadowSize:2048,bloomScale:.5,spots:2,points:5,samples:4}};function gd(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}function xd(i,e={}){let t=md[e.tier]||md.desktop,n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),n.className="venue-backdrop",n.style.cssText="position:fixed;left:0;top:0;width:100%;height:100%;display:block;pointer-events:none;",i.parentNode.insertBefore(n,i);let s=new al({canvas:n,antialias:!1,powerPreference:"high-performance",alpha:!1,stencil:!1});s.toneMapping=Yi,s.outputColorSpace=Bt,s.shadowMap.enabled=t.shadows,s.shadowMap.type=uo,s.shadowMap.autoUpdate=!1,s.setClearColor("#07060d");let r=new hr,a=new ft;a.scale.z=-1,r.add(a);let o=new Jt(50,1,.3,1400),l=new Ot(1,1,{type:$t,samples:t.samples}),c=new ul(s,l);c.addPass(new fl(r,o));let h=new Gs(new de(256,256),.7,.45,.88);c.addPass(h),c.addPass(new dl);let f={spots:[],points:[]};f.hemi=new br("#4a4470","#3a2415",.6),a.add(f.hemi),f.moon=new wr("#9fb0e0",0),a.add(f.moon),a.add(f.moon.target);for(let j=0;j<t.spots;j++){let J=new Er("#ffe6c4",0,60,.7,.7,1.1);j===0&&t.shadows&&(J.castShadow=!0,J.shadow.mapSize.set(t.shadowSize,t.shadowSize),J.shadow.bias=-6e-4,J.shadow.normalBias=.02,J.shadow.camera.near=3,J.shadow.camera.far=80),a.add(J),a.add(J.target),f.spots.push({light:J,base:0})}for(let j=0;j<t.points;j++){let J=new Tr("#ffc890",0,20,1.4);a.add(J),f.points.push({light:J,base:0})}function u(j){let J=j.rig;f.hemi.color.set(J.hemi[0]),f.hemi.groundColor.set(J.hemi[1]),f.hemi.userData.base=t.spots?J.hemi[2]:J.hemi[3],f.moon.userData.base=j.sky&&J.moon?j.sky.moonLight.intensity:0,j.sky&&f.moon.position.copy(j.sky.moonLight.dir).multiplyScalar(80),f.spots.forEach((Pe,we)=>{let De=J.spots[we];Pe.base=De?De.base:0,Pe.layer=De&&De.layer||"key",De&&(Pe.light.position.set(De.pos[0],De.pos[1],De.pos[2]),Pe.light.target.position.set(De.to[0],De.to[1],De.to[2]),Pe.light.color.set(De.color),Pe.light.distance=De.distance,Pe.light.angle=De.angle)}),f.points.forEach((Pe,we)=>{let De=we===0?j.garboLight:J.points[we-1];Pe.base=De&&we>0?De.base:0,Pe.layer=we===0?"garbo":De&&De.layer||"practical",De&&(Pe.light.position.set(De.pos[0],De.pos[1],De.pos[2]),Pe.light.color.set(De.color),Pe.light.distance=De.distance)}),s.shadowMap.needsUpdate=!0}let p=Vf(a),g=new Qn(-1,1,1,-1,5,200),_=new Jt(40,1.8,.3,400),m=t.name!=="phone",d={},b=-1;function w(j,J,Pe){let we=d[j];return we&&we.width===J&&we.height===Pe?we:(we&&we.dispose(),d[j]=new Ot(J,Pe,{type:$t}))}function y(j,J,Pe){let we=j.feedScreen;if(!we)return;if(!m||!J){we.visible=!1;return}let De=J.close?320:t.name==="desktop"?640:480,At=w(J.close?"close":"aerial",De,Math.max(64,Math.min(400,Math.round(De/J.aspect)))),zt=we.material.uniforms;if(zt.map.value!==At.texture&&(zt.map.value=At.texture,zt.texel.value.set(1/At.width,1/At.height),b=-1),zt.blur.value=J.close?1.8:0,J.n!==b){b=J.n;let yt=J.close?_:g;J.close?Wf(_,J):Xf(g,J,Pe);let Lt=r.fog,z=p.group.visible,qt=j.sky?j.sky.root.position.clone():null;we.visible=!1,J.close?j.sky&&j.sky.root.position.set(J.eye[0],0,J.eye[2]):(r.fog=null,p.group.visible=!1,j.sky&&(j.sky.root.visible=!1)),s.setRenderTarget(At),s.clear(),s.render(r,yt),s.setRenderTarget(null),r.fog=Lt,p.group.visible=z,j.sky&&(j.sky.root.visible=!0,j.sky.root.position.copy(qt))}we.visible=!0}let E="";function v(j){let J=j?[j.x,j.y,j.w,j.h].map(Math.round).join(","):"";J!==E&&(E=J,n.style.clipPath=j?`polygon(evenodd, 0 0, 100% 0, 100% 100%, 0 100%, 0 0, ${j.x}px ${j.y}px, ${j.x+j.w}px ${j.y}px, ${j.x+j.w}px ${j.y+j.h}px, ${j.x}px ${j.y+j.h}px, ${j.x}px ${j.y}px)`:"")}let S={},x=null,T=null,C=1,U=1,R=1,I="",P="traditional";function D(j,J){if(!S[j]){let Pe=pd(j,t,J,e.furnish?e.furnish(j):null);Pe.ready=!1,Pe.root.visible=!1,a.add(Pe.root);let we=()=>{Pe.ready=!0,B()};(s.compileAsync?s.compileAsync(Pe.root,o,r):Promise.resolve(s.compile(Pe.root,o,r))).then(we,we),S[j]=Pe}return S[j]}let k=["outdoors","stadium","sheri"],W=!1;function B(){if(W||ve)return;let j=k.find(Pe=>!S[Pe]);if(!j||!x)return;W=!0;let J=()=>{W=!1,!S[j]&&!ve&&D(j,P)};window.requestIdleCallback?requestIdleCallback(J,{timeout:2500}):setTimeout(J,600)}function O(j){x&&(x.root.visible=!1),x=j,x.root.visible=!0,r.fog=x.fog,x.fogBase=x.fog.density,u(x),T=null}function F(j){o.position.set(j.x,j.y,-j.z),o.rotation.set(0,-(j.yaw||0),0),o.updateMatrixWorld();let J=o.near,Pe=o.far,we=j.F;o.projectionMatrix.makePerspective(-j.cx*J/we,(j.W-j.cx)*J/we,j.cy*J/we,-(j.H-j.cy)*J/we,J,Pe),o.projectionMatrixInverse.copy(o.projectionMatrix).invert()}function X(){let j=i.getBoundingClientRect();C=Math.max(1,j.width),U=Math.max(1,j.height);let J=Uf(Math.sqrt(t.pixels*R*R/(C*U)),.5,Math.min(2,window.devicePixelRatio||1));n.style.width=i.style.width||"100%",n.style.height=i.style.height||"100%",s.setPixelRatio(J),s.setSize(C,U,!1),c.setPixelRatio(J),c.setSize(C,U),h.resolution.set(Math.max(64,Math.round(C*J*t.bloomScale)),Math.max(64,Math.round(U*J*t.bloomScale)))}window.ResizeObserver?new ResizeObserver(X).observe(i):window.addEventListener("resize",X),X();let oe=0,ce=16,Ge=0,Ye=1,ht=0,Q="";function se(j){if(oe){let J=j-oe;J<250&&(ce+=(J-ce)*.05),Ge=ce>30?Ge+J:0,Ge>(t.name==="desktop"?2500:1400)&&(R>.6?(R=Math.max(.6,R-.2),X()):h.enabled?h.enabled=!1:Ye=2,Ge=0,ce=20)}oe=j}let ye=new yl,Ve=0,ve=!1;n.addEventListener("webglcontextlost",j=>{j.preventDefault(),ve=!0}),n.addEventListener("webglcontextrestored",()=>{ve=!1,Object.keys(S).forEach(j=>delete S[j]),x=null});function nt(j,J){if(ve)return!1;P=J.theme;let Pe=D(J.venue,J.theme);if(!Pe.ready)return x||(s.setRenderTarget(null),s.clear()),"wait";x!==Pe&&(O(Pe),B());let we=(i.style.width||"")+"|"+(i.style.height||"");we!==I&&(I=we,X()),se(performance.now());let De=Li[J.theme]||Li.traditional;T!==J.theme&&(x.kit.flags.setPalette(De.flags),T&&(x.lightMaps.repaint(De),x.garbo.setTheme(De)),T=J.theme);let At=Ve?Math.min(.1,Math.max(0,J.T-Ve)):.016;Ve=J.T;let zt=ye.update(At,J),yt=[j.x,j.y,j.z,j.yaw,j.F,j.cx,j.cy,j.W,j.H].map(M=>Math.round(M*100)).join(","),Lt=yt!==Q;if(Q=yt,ht++,!Lt&&Ye>1&&ht%Ye&&!J.reduce||!Lt&&J.reduce&&x._drawn)return!0;F(j);let z=J.reduce?0:J.pulse||0,qt=J.reduce?1:.85+.1*Math.sin(J.t*11)*Math.sin(J.t*7.3)+.05*Math.sin(J.t*23),Ke={...zt,garbo:zt.garbo*ye.garboLit*qt},L={TH:De,pulse:z,lv:Ke,on:J.on,reduce:J.reduce,close:J.listener==="stage"||J.dj};return x.sky&&x.sky.root.position.set(j.x,0,j.z),x.kit.bulbs.update(J.t,De.bulbs,Ke,z,J.reduce,[1,1,J.on?1:0]),x.kit.bigBulbs.update(J.t,De.bulbs,Ke,z,J.reduce,[1,1,1]),x.kit.pools.update(Ke,De.glow,J.t,J.reduce),x.kit.flames.update(J.t,Ke,J.reduce),zf(x.kit,Ke),x.lightMaps.set(Ke,J.reduce?0:J.t),J.reduce||x.kit.flags.pose(J.T),x.kit.beams.forEach(M=>{M.beam.aim(M.from,M.to),M.beam.set(M.hex||"#fff0d8",.6*Ke[M.layer||"key"])}),(x.umbrellas||[]).forEach((M,q)=>M.update(J.T,J.reduce,q)),x.garbo.update(J.t,Ke.garbo,J.reduce,J.garboA==null||J.garboA>.3),x.stage&&x.stage.update(J.T,L),x.update&&x.update(J.T,L),x.furnish&&x.furnish.update(J.T,{...L,beat:J.beat||0}),p.update(J.drone,J.T,J.reduce),y(x,J.aerial,J.drone?J.drone.y:10),f.points.forEach((M,q)=>{M.light.intensity=q===0?({sheri:10,stadium:9}[x.id]||13)*Ke.garbo:M.base*Ke[M.layer]}),f.spots.forEach(M=>{M.light.intensity=M.base*Ke[M.layer]}),f.hemi.intensity=f.hemi.userData.base*Ke.ambient,f.moon.intensity=f.moon.userData.base*Ke.ambient,x.fog&&(x.fog.density=x.fogBase*(1+.3*(J.aarti||0))),s.toneMappingExposure=x.exposure*(1-.15*(J.aarti||0)),h.strength=.62+.2*z*Ke.show,c.render(),x._drawn=!0,!0}function Gt(j,J,Pe){return!x||ve||!x._drawn?!1:(c.render(),j.drawImage(n,0,0,J,Pe),!0)}return{draw:nt,resize:X,snapshot:Gt,hole:v,aerial:m,tier:t.name,renderer:s,debug:()=>({V:x,scene:r,camera:o,QP:R,every:Ye,bloom:h.enabled,frameMs:ce,venues:Object.keys(S),ready:Object.keys(S).filter(j=>S[j].ready)})}}!/[?&]venue=2d(&|$)/.test(location.search)&&gd()?(window.GarbaVenueBackdrop={create(i,e){let t=xd(i,e);return window.GarbaVenue3D=t,t}},document.documentElement.classList.add("venue-3d")):window.GarbaVenueBackdrop=!1;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
