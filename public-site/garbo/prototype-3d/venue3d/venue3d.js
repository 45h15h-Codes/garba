/* PlayGarba 3D venues (source: venue3d/src). Bundles three.js r186 (MIT, (c) 2010-2025 three.js authors). */
(()=>{var uf=0,eh=1,ff=2;var Kr=1,Vo=2,Gs=3,Ii=0,cn=1,at=2,Ln=0,ks=1,wn=2,th=3,nh=4,df=5;var Ji=100,pf=101,mf=102,gf=103,xf=104,_f=200,yf=201,vf=202,Mf=203,ih=204,sh=205,bf=206,Ef=207,Sf=208,Tf=209,wf=210,Rf=211,Af=212,Cf=213,Pf=214,io=0,so=1,ro=2,ws=3,ao=4,oo=5,lo=6,co=7,Wo=0,If=1,Lf=2,Vn=0,Qr=1,jr=2,ea=3,ta=4,na=5,ia=6,Ki=7;var rh=300,Li=301,Qi=302,Xo=303,qo=304,sa=306,Jt=1e3,Kn=1001,ho=1002,sn=1003,Df=1004;var ra=1005;var on=1006,Yo=1007;var Di=1008;var vn=1009,ah=1010,oh=1011,Vs=1012,Zo=1013,Wn=1014,Dn=1015,Kt=1016,$o=1017,Jo=1018,Ws=1020,lh=35902,ch=35899,hh=1021,uh=1022,Un=1023,Qn=1026,Ui=1027,Ko=1028,Qo=1029,Ni=1030,jo=1031;var el=1033,aa=33776,oa=33777,la=33778,ca=33779,tl=35840,nl=35841,il=35842,sl=35843,rl=36196,al=37492,ol=37496,ll=37488,cl=37489,ha=37490,hl=37491,ul=37808,fl=37809,dl=37810,pl=37811,ml=37812,gl=37813,xl=37814,_l=37815,yl=37816,vl=37817,Ml=37818,bl=37819,El=37820,Sl=37821,Tl=36492,wl=36494,Rl=36495,Al=36283,Cl=36284,ua=36285,Pl=36286;var gr=2300,uo=2301,to=2302,zc=2303,Gc=2400,kc=2401,Vc=2402;var Uf=3200;var fa=0,Nf=1,xn="",zt="srgb",xr="srgb-linear",_r="linear",bt="srgb";var no=7680;var Ff=519,Bf=512,Of=513,Hf=514,Il=515,zf=516,Gf=517,Ll=518,kf=519,fh=35044;var dh="300 es",kn=2e3,Rs=2001;function Lp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Dp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vf(){let i=yr("canvas");return i.style.display="block",i}var Ru={},As=null;function vr(...i){let e="THREE."+i.shift();As?As("log",e,...i):console.log(e,...i)}function Wf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function je(...i){i=Wf(i);let e="THREE."+i.shift();if(As)As("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function tt(...i){i=Wf(i);let e="THREE."+i.shift();if(As)As("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Xi(...i){let e=i.join(" ");e in Ru||(Ru[e]=!0,je(...i))}function Xf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var qf={[io]:so,[ro]:lo,[ao]:co,[ws]:oo,[so]:io,[lo]:ro,[co]:ao,[oo]:ws},jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fc=Math.PI/180,Mr=180/Math.PI;function mi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function Up(i,e){return(i%e+e)%e}function dc(i,e,t){return(1-t)*i+t*e}function Jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var yh=class yh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yh.prototype.isVector2=!0;var le=yh,It=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],p=r[a+1],m=r[a+2],v=r[a+3];if(f!==v||l!==u||c!==p||h!==m){let g=l*u+c*p+h*m+f*v;g<0&&(u=-u,p=-p,m=-m,v=-v,g=-g);let d=1-o;if(g<.9995){let x=Math.acos(g),b=Math.sin(x);d=Math.sin(d*x)/b,o=Math.sin(o*x)/b,l=l*d+u*o,c=c*d+p*o,h=h*d+m*o,f=f*d+v*o}else{l=l*d+u*o,c=c*d+p*o,h=h*d+m*o,f=f*d+v*o;let x=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=x,c*=x,h*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+h*f+l*p-c*u,e[t+1]=l*m+h*u+c*f-o*p,e[t+2]=c*m+h*p+o*u-l*f,e[t+3]=h*m-o*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*p*m,this._y=c*p*f-u*h*m,this._z=c*h*m+u*p*f,this._w=c*h*f-u*p*m;break;case"YXZ":this._x=u*h*f+c*p*m,this._y=c*p*f-u*h*m,this._z=c*h*m-u*p*f,this._w=c*h*f+u*p*m;break;case"ZXY":this._x=u*h*f-c*p*m,this._y=c*p*f+u*h*m,this._z=c*h*m+u*p*f,this._w=c*h*f-u*p*m;break;case"ZYX":this._x=u*h*f-c*p*m,this._y=c*p*f+u*h*m,this._z=c*h*m-u*p*f,this._w=c*h*f+u*p*m;break;case"YZX":this._x=u*h*f+c*p*m,this._y=c*p*f+u*h*m,this._z=c*h*m-u*p*f,this._w=c*h*f-u*p*m;break;case"XZY":this._x=u*h*f-c*p*m,this._y=c*p*f-u*h*m,this._z=c*h*m+u*p*f,this._w=c*h*f+u*p*m;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},vh=class vh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Au.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vh.prototype.isVector3=!0;var D=vh,pc=new D,Au=new It,Mh=class Mh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],p=n[5],m=n[8],v=s[0],g=s[3],d=s[6],x=s[1],b=s[4],_=s[7],E=s[2],T=s[5],w=s[8];return r[0]=a*v+o*x+l*E,r[3]=a*g+o*b+l*T,r[6]=a*d+o*_+l*w,r[1]=c*v+h*x+f*E,r[4]=c*g+h*b+f*T,r[7]=c*d+h*_+f*w,r[2]=u*v+p*x+m*E,r[5]=u*g+p*b+m*T,r[8]=u*d+p*_+m*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,p=c*r-a*l,m=t*f+n*u+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=f*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mc.makeScale(e,t)),this}rotate(e){return Xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mc.makeRotation(-e)),this}translate(e,t){return Xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Mh.prototype.isMatrix3=!0;var rt=Mh,mc=new rt,Cu=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pu=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Np(){let i={enabled:!0,workingColorSpace:xr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===bt&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xn?_r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xr]:{primaries:e,whitePoint:n,transfer:_r,toXYZ:Cu,fromXYZ:Pu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:Cu,fromXYZ:Pu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}var dt=Np();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var os,fo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{os===void 0&&(os=yr("canvas")),os.width=e.width,os.height=e.height;let s=os.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=os}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fp=0,Cs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gc(s[a].image)):r.push(gc(s[a]))}else r=gc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function gc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?fo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}var Bp=0,xc=new D,gn=class i extends jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Kn,s=Kn,r=on,a=Di,o=Un,l=vn,c=i.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=mi(),this.name="",this.source=new Cs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xc).x}get height(){return this.source.getSize(xc).y}get depth(){return this.source.getSize(xc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jt:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jt:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=rh;gn.DEFAULT_ANISOTROPY=1;var bh=class bh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],m=l[9],v=l[2],g=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,_=(p+1)/2,E=(d+1)/2,T=(h+u)/4,w=(f+v)/4,y=(m+g)/4;return b>_&&b>E?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=w/n):_>E?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=y/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=w/r,s=y/r),this.set(n,s,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(f-v)/x,this.z=(u-h)/x,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bh.prototype.isVector4=!0;var Nt=bh,po=class extends jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new gn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Cs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends po{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},br=class extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var mo=class extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ko=class ko{constructor(e,t,n,s,r,a,o,l,c,h,f,u,p,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,p,m,v,g)}set(e,t,n,s,r,a,o,l,c,h,f,u,p,m,v,g){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=m,d[11]=v,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ko().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ls.setFromMatrixColumn(e,0).length(),r=1/ls.setFromMatrixColumn(e,1).length(),a=1/ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,p=a*f,m=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+m*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*f,m=c*h,v=c*f;t[0]=u+v*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*f,m=c*h,v=c*f;t[0]=u-v*o,t[4]=-a*f,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*f,m=o*h,v=o*f;t[0]=l*h,t[4]=m*c-p,t[8]=u*c+v,t[1]=l*f,t[5]=v*c+u,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=v-u*f,t[8]=m*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*f+m,t[10]=u-v*f}else if(e.order==="XZY"){let u=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+v,t[5]=a*h,t[9]=p*f-m,t[2]=m*f-p,t[6]=o*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Op,e,Hp)}lookAt(e,t,n){let s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),bi.crossVectors(n,bn),bi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),bi.crossVectors(n,bn)),bi.normalize(),wa.crossVectors(bn,bi),s[0]=bi.x,s[4]=wa.x,s[8]=bn.x,s[1]=bi.y,s[5]=wa.y,s[9]=bn.y,s[2]=bi.z,s[6]=wa.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],p=n[13],m=n[2],v=n[6],g=n[10],d=n[14],x=n[3],b=n[7],_=n[11],E=n[15],T=s[0],w=s[4],y=s[8],M=s[12],A=s[1],I=s[5],N=s[9],C=s[13],P=s[2],H=s[6],F=s[10],B=s[14],G=s[3],V=s[7],X=s[11],O=s[15];return r[0]=a*T+o*A+l*P+c*G,r[4]=a*w+o*I+l*H+c*V,r[8]=a*y+o*N+l*F+c*X,r[12]=a*M+o*C+l*B+c*O,r[1]=h*T+f*A+u*P+p*G,r[5]=h*w+f*I+u*H+p*V,r[9]=h*y+f*N+u*F+p*X,r[13]=h*M+f*C+u*B+p*O,r[2]=m*T+v*A+g*P+d*G,r[6]=m*w+v*I+g*H+d*V,r[10]=m*y+v*N+g*F+d*X,r[14]=m*M+v*C+g*B+d*O,r[3]=x*T+b*A+_*P+E*G,r[7]=x*w+b*I+_*H+E*V,r[11]=x*y+b*N+_*F+E*X,r[15]=x*M+b*C+_*B+E*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],p=e[14],m=e[3],v=e[7],g=e[11],d=e[15],x=l*p-c*u,b=o*p-c*f,_=o*u-l*f,E=a*p-c*h,T=a*u-l*h,w=a*f-o*h;return t*(v*x-g*b+d*_)-n*(m*x-g*E+d*T)+s*(m*b-v*E+d*w)-r*(m*_-v*T+g*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],p=e[11],m=e[12],v=e[13],g=e[14],d=e[15],x=t*o-n*a,b=t*l-s*a,_=t*c-r*a,E=n*l-s*o,T=n*c-r*o,w=s*c-r*l,y=h*v-f*m,M=h*g-u*m,A=h*d-p*m,I=f*g-u*v,N=f*d-p*v,C=u*d-p*g,P=x*C-b*N+_*I+E*A-T*M+w*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/P;return e[0]=(o*C-l*N+c*I)*H,e[1]=(s*N-n*C-r*I)*H,e[2]=(v*w-g*T+d*E)*H,e[3]=(u*T-f*w-p*E)*H,e[4]=(l*A-a*C-c*M)*H,e[5]=(t*C-s*A+r*M)*H,e[6]=(g*_-m*w-d*b)*H,e[7]=(h*w-u*_+p*b)*H,e[8]=(a*N-o*A+c*y)*H,e[9]=(n*A-t*N-r*y)*H,e[10]=(m*T-v*_+d*x)*H,e[11]=(f*_-h*T-p*x)*H,e[12]=(o*M-a*I-l*y)*H,e[13]=(t*I-n*M+s*y)*H,e[14]=(v*b-m*E-g*x)*H,e[15]=(h*E-f*b+u*x)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,p=r*h,m=r*f,v=a*h,g=a*f,d=o*f,x=l*c,b=l*h,_=l*f,E=n.x,T=n.y,w=n.z;return s[0]=(1-(v+d))*E,s[1]=(p+_)*E,s[2]=(m-b)*E,s[3]=0,s[4]=(p-_)*T,s[5]=(1-(u+d))*T,s[6]=(g+x)*T,s[7]=0,s[8]=(m+b)*w,s[9]=(g-x)*w,s[10]=(1-(u+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ls.set(s[0],s[1],s[2]).length(),o=ls.set(s[4],s[5],s[6]).length(),l=ls.set(s[8],s[9],s[10]).length();r<0&&(a=-a),On.copy(this);let c=1/a,h=1/o,f=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,t.setFromRotationMatrix(On),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=kn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),m,v;if(l)m=r/(a-r),v=a*r/(a-r);else if(o===kn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Rs)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=kn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s),m,v;if(l)m=1/(a-r),v=a/(a-r);else if(o===kn)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===Rs)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ko.prototype.isMatrix4=!0;var Ge=ko,ls=new D,On=new Ge,Op=new D(0,0,0),Hp=new D(1,1,1),bi=new D,wa=new D,bn=new D,Iu=new Ge,Lu=new It,Gt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Iu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lu.setFromEuler(this),this.setFromQuaternion(Lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gt.DEFAULT_ORDER="XYZ";var Er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zp=0,Du=new D,cs=new It,ci=new Ge,Ra=new D,ir=new D,Gp=new D,kp=new It,Uu=new D(1,0,0),Nu=new D(0,1,0),Fu=new D(0,0,1),Bu={type:"added"},Vp={type:"removed"},hs={type:"childadded",child:null},_c={type:"childremoved",child:null},Yt=class i extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Gt,n=new It,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new rt}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Uu,e)}rotateY(e){return this.rotateOnAxis(Nu,e)}rotateZ(e){return this.rotateOnAxis(Fu,e)}translateOnAxis(e,t){return Du.copy(e).applyQuaternion(this.quaternion),this.position.add(Du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uu,e)}translateY(e){return this.translateOnAxis(Nu,e)}translateZ(e){return this.translateOnAxis(Fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ra.copy(e):Ra.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(ir,Ra,this.up):ci.lookAt(Ra,ir,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(ci),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bu),hs.child=e,this.dispatchEvent(hs),hs.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vp),_c.child=e,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bu),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,Gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,kp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Yt.DEFAULT_UP=new D(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gt=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wp={type:"move"},Ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),d=this._getHandJoint(c,v);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function yc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=Up(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=yc(a,r,e+1/3),this.g=yc(a,r,e),this.b=yc(a,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let n=Yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return dt.workingToColorSpace(fn.copy(this),e),Math.round(pt(fn.r*255,0,255))*65536+Math.round(pt(fn.g*255,0,255))*256+Math.round(pt(fn.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(fn.copy(this),t);let n=fn.r,s=fn.g,r=fn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=zt){dt.workingToColorSpace(fn.copy(this),e);let t=fn.r,n=fn.g,s=fn.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(Aa);let n=dc(Ei.h,Aa.h,t),s=dc(Ei.s,Aa.s,t),r=dc(Ei.l,Aa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new ye;ye.NAMES=Yf;var qi=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Sr=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gt,this.environmentIntensity=1,this.environmentRotation=new Gt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hn=new D,hi=new D,vc=new D,ui=new D,us=new D,fs=new D,Ou=new D,Mc=new D,bc=new D,Ec=new D,Sc=new Nt,Tc=new Nt,wc=new Nt,pi=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hn.subVectors(s,t),hi.subVectors(n,t),vc.subVectors(e,t);let a=Hn.dot(Hn),o=Hn.dot(hi),l=Hn.dot(vc),c=hi.dot(hi),h=hi.dot(vc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-p-m,m,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Sc.setScalar(0),Tc.setScalar(0),wc.setScalar(0),Sc.fromBufferAttribute(e,t),Tc.fromBufferAttribute(e,n),wc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Sc,r.x),a.addScaledVector(Tc,r.y),a.addScaledVector(wc,r.z),a}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),hi.subVectors(e,t),Hn.cross(hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Hn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;us.subVectors(s,n),fs.subVectors(r,n),Mc.subVectors(e,n);let l=us.dot(Mc),c=fs.dot(Mc);if(l<=0&&c<=0)return t.copy(n);bc.subVectors(e,s);let h=us.dot(bc),f=fs.dot(bc);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(us,a);Ec.subVectors(e,r);let p=us.dot(Ec),m=fs.dot(Ec);if(m>=0&&p<=m)return t.copy(r);let v=p*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(fs,o);let g=h*m-p*f;if(g<=0&&f-h>=0&&p-m>=0)return Ou.subVectors(r,s),o=(f-h)/(f-h+(p-m)),t.copy(s).addScaledVector(Ou,o);let d=1/(g+v+u);return a=v*d,o=u*d,t.copy(n).addScaledVector(us,a).addScaledVector(fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ei=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ca.copy(n.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Pa.subVectors(this.max,sr),ds.subVectors(e.a,sr),ps.subVectors(e.b,sr),ms.subVectors(e.c,sr),Si.subVectors(ps,ds),Ti.subVectors(ms,ps),zi.subVectors(ds,ms);let t=[0,-Si.z,Si.y,0,-Ti.z,Ti.y,0,-zi.z,zi.y,Si.z,0,-Si.x,Ti.z,0,-Ti.x,zi.z,0,-zi.x,-Si.y,Si.x,0,-Ti.y,Ti.x,0,-zi.y,zi.x,0];return!Rc(t,ds,ps,ms,Pa)||(t=[1,0,0,0,1,0,0,0,1],!Rc(t,ds,ps,ms,Pa))?!1:(Ia.crossVectors(Si,Ti),t=[Ia.x,Ia.y,Ia.z],Rc(t,ds,ps,ms,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fi=[new D,new D,new D,new D,new D,new D,new D,new D],zn=new D,Ca=new ei,ds=new D,ps=new D,ms=new D,Si=new D,Ti=new D,zi=new D,sr=new D,Pa=new D,Ia=new D,Gi=new D;function Rc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gi.fromArray(i,r);let o=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var $t=new D,La=new le,Xp=0,Pt=class extends jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fh,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)La.fromBufferAttribute(this,t),La.applyMatrix3(e),this.setXY(t,La.x,La.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Tr=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var wr=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},qp=new ei,rr=new D,Ac=new D,ti=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):qp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);let t=rr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(rr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(Ac)),this.expandByPoint(rr.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Yp=0,Pn=new Ge,Cc=new Yt,gs=new D,En=new ei,ar=new ei,nn=new D,lt=class i extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lp(e)?wr:Tr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(En.min,ar.min),En.expandByPoint(nn),nn.addVectors(En.max,ar.max),En.expandByPoint(nn)):(En.expandByPoint(ar.min),En.expandByPoint(ar.max))}En.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(nn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)nn.fromBufferAttribute(o,c),l&&(gs.fromBufferAttribute(e,c),nn.add(gs)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Pt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new D,l[y]=new D;let c=new D,h=new D,f=new D,u=new le,p=new le,m=new le,v=new D,g=new D;function d(y,M,A){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,A),u.fromBufferAttribute(r,y),p.fromBufferAttribute(r,M),m.fromBufferAttribute(r,A),h.sub(c),f.sub(c),p.sub(u),m.sub(u);let I=1/(p.x*m.y-m.x*p.y);isFinite(I)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(I),g.copy(f).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(I),o[y].add(v),o[M].add(v),o[A].add(v),l[y].add(g),l[M].add(g),l[A].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,M=x.length;y<M;++y){let A=x[y],I=A.start,N=A.count;for(let C=I,P=I+N;C<P;C+=3)d(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let b=new D,_=new D,E=new D,T=new D;function w(y){E.fromBufferAttribute(s,y),T.copy(E);let M=o[y];b.copy(M),b.sub(E.multiplyScalar(E.dot(M))).normalize(),_.crossVectors(T,M);let I=_.dot(l[y])<0?-1:1;a.setXYZW(y,b.x,b.y,b.z,I)}for(let y=0,M=x.length;y<M;++y){let A=x[y],I=A.start,N=A.count;for(let C=I,P=I+N;C<P;C+=3)w(e.getX(C+0)),w(e.getX(C+1)),w(e.getX(C+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,f=new D;if(e)for(let u=0,p=e.count;u<p;u+=3){let m=e.getX(u+0),v=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),p=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let d=0;d<h;d++)u[m++]=c[p++]}return new Pt(u,h,f)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},go=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fh,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},mn=new D,Rr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){vr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){vr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Pc=new D,Zp=new D,$p=new rt,Gn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Pc.subVectors(n,t).cross(Zp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Pc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$p.getNormalMatrix(e),s=this.coplanarPoint(Pc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Jp=0,In=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=ks,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=sh,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Gn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Is=class extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xs,or=new D,_s=new D,ys=new D,vs=new le,lr=new le,Zf=new Ge,Da=new D,cr=new D,Ua=new D,Hu=new le,Ic=new le,zu=new le,Ar=class extends Yt{constructor(e=new Is){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new go(t,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new Rr(n,3,0,!1)),xs.setAttribute("uv",new Rr(n,2,3,!1))}this.geometry=xs,this.material=e,this.center=new le(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),Zf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-ys.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Na(Da.set(-.5,-.5,0),ys,a,_s,s,r),Na(cr.set(.5,-.5,0),ys,a,_s,s,r),Na(Ua.set(.5,.5,0),ys,a,_s,s,r),Hu.set(0,0),Ic.set(1,0),zu.set(1,1);let o=e.ray.intersectTriangle(Da,cr,Ua,!1,or);if(o===null&&(Na(cr.set(-.5,.5,0),ys,a,_s,s,r),Ic.set(0,1),o=e.ray.intersectTriangle(Da,Ua,cr,!1,or),o===null))return;let l=e.ray.origin.distanceTo(or);l<e.near||l>e.far||t.push({distance:l,point:or.clone(),uv:pi.getInterpolation(or,Da,cr,Ua,Hu,Ic,zu,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Na(i,e,t,n,s,r){vs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(lr.x=r*vs.x-s*vs.y,lr.y=s*vs.x+r*vs.y):lr.copy(vs),i.copy(e),i.x+=lr.x,i.y+=lr.y,i.applyMatrix4(Zf)}var di=new D,Lc=new D,Fa=new D,Ba=new D,Ls=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Lc.copy(e).add(t).multiplyScalar(.5),Fa.copy(t).sub(e).normalize(),Ba.copy(this.origin).sub(Lc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Fa),o=Ba.dot(this.direction),l=-Ba.dot(Fa),c=Ba.lengthSq(),h=Math.abs(1-a*a),f,u,p,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){let v=1/h;f*=v,u*=v,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Lc).addScaledVector(Fa,u),p}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);let n=di.dot(this.direction),s=di.dot(di)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,p=e.z-a.z,m=t.x-a.x,v=t.y-a.y,g=t.z-a.z,d=n.x-a.x,x=n.y-a.y,b=n.z-a.z,_=Math.abs(l),E=Math.abs(c),T=Math.abs(h),w,y,M,A,I,N,C,P,H,F,B,G;if(_>=E&&_>=T?(M=l,N=f,H=m,G=d,l>=0?(w=c,y=h,A=u,I=p,C=v,P=g,F=x,B=b):(w=h,y=c,A=p,I=u,C=g,P=v,F=b,B=x)):E>=T?(M=c,N=u,H=v,G=x,c>=0?(w=h,y=l,A=p,I=f,C=g,P=m,F=b,B=d):(w=l,y=h,A=f,I=p,C=m,P=g,F=d,B=b)):(M=h,N=p,H=g,G=b,h>=0?(w=l,y=c,A=f,I=u,C=m,P=v,F=d,B=x):(w=c,y=l,A=u,I=f,C=v,P=m,F=x,B=d)),M===0)return null;let V=w/M,X=y/M,O=1/M,$=A-V*N,ie=I-X*N,Ee=C-V*H,_e=P-X*H,Ne=F-V*G,J=B-X*G,re=Ne*_e-J*Ee,Se=$*J-ie*Ne,Le=Ee*ie-_e*$;if(s){if(re<0||Se<0||Le<0)return null}else if((re<0||Se<0||Le<0)&&(re>0||Se>0||Le>0))return null;let ge=re+Se+Le;if(ge===0)return null;let Fe=O*(re*N+Se*H+Le*G);return(ge>0?Fe<0:Fe>0)?null:this.at(Fe/ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gu=new Ge,ki=new Ls,Oa=new ti,ku=new D,Ha=new D,za=new D,Ga=new D,Dc=new D,ka=new D,Vu=new D,Va=new D,te=class extends Yt{constructor(e=new lt,t=new vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Dc.fromBufferAttribute(f,e),a?ka.addScaledVector(Dc,h):ka.addScaledVector(Dc.sub(t),h))}t.add(ka)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(r),ki.copy(e.ray).recast(e.near),!(Oa.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Oa,ku)===null||ki.origin.distanceToSquared(ku)>(e.far-e.near)**2))&&(Gu.copy(r).invert(),ki.copy(e.ray).applyMatrix4(Gu),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){let g=u[m],d=a[g.materialIndex],x=Math.max(g.start,p.start),b=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let _=x,E=b;_<E;_+=3){let T=o.getX(_),w=o.getX(_+1),y=o.getX(_+2);s=Wa(this,d,e,n,c,h,f,T,w,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=m,d=v;g<d;g+=3){let x=o.getX(g),b=o.getX(g+1),_=o.getX(g+2);s=Wa(this,a,e,n,c,h,f,x,b,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){let g=u[m],d=a[g.materialIndex],x=Math.max(g.start,p.start),b=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=x,E=b;_<E;_+=3){let T=_,w=_+1,y=_+2;s=Wa(this,d,e,n,c,h,f,T,w,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=m,d=v;g<d;g+=3){let x=g,b=g+1,_=g+2;s=Wa(this,a,e,n,c,h,f,x,b,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Kp(i,e,t,n,s,r,a,o){let l;if(e.side===cn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ii,o),l===null)return null;Va.copy(o),Va.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Va);return c<t.near||c>t.far?null:{distance:c,point:Va.clone(),object:i}}function Wa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ha),i.getVertexPosition(l,za),i.getVertexPosition(c,Ga);let h=Kp(i,e,t,n,Ha,za,Ga,Vu);if(h){let f=new D;pi.getBarycoord(Vu,Ha,za,Ga,f),s&&(h.uv=pi.getInterpolatedAttribute(s,o,l,c,f,new le)),r&&(h.uv1=pi.getInterpolatedAttribute(r,o,l,c,f,new le)),a&&(h.normal=pi.getInterpolatedAttribute(a,o,l,c,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};pi.getNormal(Ha,za,Ga,u.normal),h.face=u,h.barycoord=f}return h}var Yi=class extends gn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=sn,h=sn,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wt=class extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ms=new Ge,Wu=new Ge,Xa=[],Xu=new ei,Qp=new Ge,hr=new te,ur=new ti,Mt=class extends te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wt(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Qp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),Xu.copy(e.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Xu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),ur.copy(e.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),e.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ms),Wu.multiplyMatrices(n,Ms),hr.matrixWorld=Wu,hr.raycast(e,Xa);for(let a=0,o=Xa.length;a<o;a++){let l=Xa[a];l.instanceId=r,l.object=this,t.push(l)}Xa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Wt(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yi(new Float32Array(s*this.count),s,this.count,Ko,Dn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vi=new ti,jp=new le(.5,.5),qa=new D,Ds=class{constructor(e=new Gn,t=new Gn,n=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],p=r[7],m=r[8],v=r[9],g=r[10],d=r[11],x=r[12],b=r[13],_=r[14],E=r[15];if(s[0].setComponents(c-a,p-h,d-m,E-x).normalize(),s[1].setComponents(c+a,p+h,d+m,E+x).normalize(),s[2].setComponents(c+o,p+f,d+v,E+b).normalize(),s[3].setComponents(c-o,p-f,d-v,E-b).normalize(),n)s[4].setComponents(l,u,g,_).normalize(),s[5].setComponents(c-l,p-u,d-g,E-_).normalize();else if(s[4].setComponents(c-l,p-u,d-g,E-_).normalize(),t===kn)s[5].setComponents(c+l,p+u,d+g,E+_).normalize();else if(t===Rs)s[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);let t=jp.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(qa.x=s.normal.x>0?e.max.x:e.min.x,qa.y=s.normal.y>0?e.max.y:e.min.y,qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Us=class extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xo=new D,_o=new D,qu=new Ge,fr=new Ls,Ya=new ti,Uc=new D,Yu=new D,yo=class extends Yt{constructor(e=new lt,t=new Us){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)xo.fromBufferAttribute(t,s-1),_o.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=xo.distanceTo(_o);e.setAttribute("lineDistance",new Qe(n,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(s),Ya.radius+=r,e.ray.intersectsSphere(Ya)===!1)return;qu.copy(s).invert(),fr.copy(e.ray).applyMatrix4(qu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=p,g=m-1;v<g;v+=c){let d=h.getX(v),x=h.getX(v+1),b=Za(this,e,fr,l,d,x,v);b&&t.push(b)}if(this.isLineLoop){let v=h.getX(m-1),g=h.getX(p),d=Za(this,e,fr,l,v,g,m-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=p,g=m-1;v<g;v+=c){let d=Za(this,e,fr,l,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){let v=Za(this,e,fr,l,m-1,p,m-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Za(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(xo.fromBufferAttribute(o,s),_o.fromBufferAttribute(o,r),t.distanceSqToSegment(xo,_o,Uc,Yu)>n)return;Uc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Uc);if(!(c<e.near||c>e.far))return{distance:c,point:Yu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Zu=new D,$u=new D,Cr=class extends yo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Zu.fromBufferAttribute(t,s),$u.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zu.distanceTo($u);e.setAttribute("lineDistance",new Qe(n,1))}else je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ns=class extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ju=new Ge,Wc=new Ls,$a=new ti,Ja=new D,Pr=class extends Yt{constructor(e=new lt,t=new Ns){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(s),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;Ju.copy(s).invert(),Wc.copy(e.ray).applyMatrix4(Ju);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=u,v=p;m<v;m++){let g=c.getX(m);Ja.fromBufferAttribute(f,g),Ku(Ja,g,l,s,e,t,this)}}else{let u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let m=u,v=p;m<v;m++)Ja.fromBufferAttribute(f,m),Ku(Ja,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ku(i,e,t,n,s,r,a){let o=Wc.distanceSqToPoint(i);if(o<t){let l=new D;Wc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ir=class extends gn{constructor(e=[],t=Li,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_n=class extends gn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ri=class extends gn{constructor(e,t,n=Wn,s,r,a,o=sn,l=sn,c,h=Qn,f=1){if(h!==Qn&&h!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},vo=class extends Ri{constructor(e,t=Wn,n=Li,s,r,a=sn,o=sn,l,c=Qn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Lr=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xe=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,p=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(f,2));function m(v,g,d,x,b,_,E,T,w,y,M){let A=_/w,I=E/y,N=_/2,C=E/2,P=T/2,H=w+1,F=y+1,B=0,G=0,V=new D;for(let X=0;X<F;X++){let O=X*I-C;for(let $=0;$<H;$++){let ie=$*A-N;V[v]=ie*x,V[g]=O*b,V[d]=P,c.push(V.x,V.y,V.z),V[v]=0,V[g]=0,V[d]=T>0?1:-1,h.push(V.x,V.y,V.z),f.push($/w),f.push(1-X/y),B+=1}}for(let X=0;X<y;X++)for(let O=0;O<w;O++){let $=u+O+H*X,ie=u+O+H*(X+1),Ee=u+(O+1)+H*(X+1),_e=u+(O+1)+H*X;l.push($,ie,_e),l.push(ie,Ee,_e),G+=6}o.addGroup(p,G,M),p+=G,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ln=class i extends lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new D,h=new le;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let p=n+f/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(o,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},nt=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],p=[],m=0,v=[],g=n/2,d=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Qe(f,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(p,2));function x(){let _=new D,E=new D,T=0,w=(t-e)/n;for(let y=0;y<=r;y++){let M=[],A=y/r,I=A*(t-e)+e;for(let N=0;N<=s;N++){let C=N/s,P=C*l+o,H=Math.sin(P),F=Math.cos(P);E.x=I*H,E.y=-A*n+g,E.z=I*F,f.push(E.x,E.y,E.z),_.set(H,w,F).normalize(),u.push(_.x,_.y,_.z),p.push(C,1-A),M.push(m++)}v.push(M)}for(let y=0;y<s;y++)for(let M=0;M<r;M++){let A=v[M][y],I=v[M+1][y],N=v[M+1][y+1],C=v[M][y+1];(e>0||M!==0)&&(h.push(A,I,C),T+=3),(t>0||M!==r-1)&&(h.push(I,N,C),T+=3)}c.addGroup(d,T,0),d+=T}function b(_){let E=m,T=new le,w=new D,y=0,M=_===!0?e:t,A=_===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,g*A,0),u.push(0,A,0),p.push(.5,.5),m++;let I=m;for(let N=0;N<=s;N++){let P=N/s*l+o,H=Math.cos(P),F=Math.sin(P);w.x=M*F,w.y=g*A,w.z=M*H,f.push(w.x,w.y,w.z),u.push(0,A,0),T.x=H*.5+.5,T.y=F*.5*A+.5,p.push(T.x,T.y),m++}for(let N=0;N<s;N++){let C=E+N,P=I+N;_===!0?h.push(P,P+1,C):h.push(P+1,P,C),y+=3}c.addGroup(d,y,_===!0?1:2),d+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Dr=class i extends nt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mo=class i extends lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let b=new D,_=new D,E=new D;for(let T=0;T<t.length;T+=3)p(t[T+0],b),p(t[T+1],_),p(t[T+2],E),l(b,_,E,x)}function l(x,b,_,E){let T=E+1,w=[];for(let y=0;y<=T;y++){w[y]=[];let M=x.clone().lerp(_,y/T),A=b.clone().lerp(_,y/T),I=T-y;for(let N=0;N<=I;N++)N===0&&y===T?w[y][N]=M:w[y][N]=M.clone().lerp(A,N/I)}for(let y=0;y<T;y++)for(let M=0;M<2*(T-y)-1;M++){let A=Math.floor(M/2);M%2===0?(u(w[y][A+1]),u(w[y+1][A]),u(w[y][A])):(u(w[y][A+1]),u(w[y+1][A+1]),u(w[y+1][A]))}}function c(x){let b=new D;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(x),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){let x=new D;for(let b=0;b<r.length;b+=3){x.x=r[b+0],x.y=r[b+1],x.z=r[b+2];let _=g(x)/2/Math.PI+.5,E=d(x)/Math.PI+.5;a.push(_,1-E)}m(),f()}function f(){for(let x=0;x<a.length;x+=6){let b=a[x+0],_=a[x+2],E=a[x+4],T=Math.max(b,_,E),w=Math.min(b,_,E);T>.9&&w<.1&&(b<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),E<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function p(x,b){let _=x*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function m(){let x=new D,b=new D,_=new D,E=new D,T=new le,w=new le,y=new le;for(let M=0,A=0;M<r.length;M+=9,A+=6){x.set(r[M+0],r[M+1],r[M+2]),b.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),T.set(a[A+0],a[A+1]),w.set(a[A+2],a[A+3]),y.set(a[A+4],a[A+5]),E.copy(x).add(b).add(_).divideScalar(3);let I=g(E);v(T,A+0,x,I),v(w,A+2,b,I),v(y,A+4,_,I)}}function v(x,b,_,E){E<0&&x.x===1&&(a[b]=x.x-1),_.x===0&&_.z===0&&(a[b]=E/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new le:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new Ge;for(let p=0;p<=e;p++){let m=p/e;s[p]=this.getTangentAt(m,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(pt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(pt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fs=class extends Sn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*f+this.aX,c=u*f+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bo=class extends Fs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ph(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Qu=new D,ju=new D,Nc=new ph,Fc=new ph,Bc=new ph,Eo=class extends Sn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ju.subVectors(s[0],s[1]).add(s[0]),c=ju);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Qu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qu),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(h),p);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Nc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,v,g),Fc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,v,g),Bc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Nc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Fc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Bc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Nc.calc(l),Fc.calc(l),Bc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ef(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function e0(i,e){let t=1-i;return t*t*e}function t0(i,e){return 2*(1-i)*i*e}function n0(i,e){return i*i*e}function pr(i,e,t,n){return e0(i,e)+t0(i,t)+n0(i,n)}function i0(i,e){let t=1-i;return t*t*t*e}function s0(i,e){let t=1-i;return 3*t*t*i*e}function r0(i,e){return 3*(1-i)*i*i*e}function a0(i,e){return i*i*i*e}function mr(i,e,t,n,s){return i0(i,e)+s0(i,t)+r0(i,n)+a0(i,s)}var Ur=class extends Sn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(mr(e,s.x,r.x,a.x,o.x),mr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},So=class extends Sn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(mr(e,s.x,r.x,a.x,o.x),mr(e,s.y,r.y,a.y,o.y),mr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nr=class extends Sn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},To=class extends Sn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fr=class extends Sn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(pr(e,s.x,r.x,a.x),pr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wo=class extends Sn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(pr(e,s.x,r.x,a.x),pr(e,s.y,r.y,a.y),pr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Br=class extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(ef(o,l.x,c.x,h.x,f.x),ef(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},Xc=Object.freeze({__proto__:null,ArcCurve:bo,CatmullRomCurve3:Eo,CubicBezierCurve:Ur,CubicBezierCurve3:So,EllipseCurve:Fs,LineCurve:Nr,LineCurve3:To,QuadraticBezierCurve:Fr,QuadraticBezierCurve3:wo,SplineCurve:Br}),Ro=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Xc[s.type]().fromJSON(s))}return this}},Or=class extends Ro{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Nr(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Fr(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ur(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Br(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Fs(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Bs=class extends Or{constructor(e){super(e),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Or().fromJSON(s))}return this}};function o0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=$f(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=f0(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,f=l;for(let u=t;u<s;u+=t){let p=i[u],m=i[u+1];p<o&&(o=p),m<l&&(l=m),p>h&&(h=p),m>f&&(f=m)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Hr(r,a,t,o,l,c,0),a}function $f(i,e,t,n,s){let r;if(s===E0(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=tf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=tf(a/n|0,i[a],i[a+1],r);return r&&Os(r,r.next)&&(Gr(r),r=r.next),r}function Zi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Os(t,t.next)||kt(t.prev,t,t.next)===0)){if(Gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Hr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&x0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?c0(i,n,s,r):l0(i)){e.push(l.i,i.i,c.i),Gr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=h0(Zi(i),e),Hr(i,e,t,n,s,r,2)):a===2&&u0(i,e,t,n,s,r):Hr(Zi(i),e,t,n,s,r,1);break}}}function l0(i){let e=i.prev,t=i,n=i.next;if(kt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),p=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=p&&dr(s,o,r,l,a,c,m.x,m.y)&&kt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function c0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(kt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,p=Math.min(o,l,c),m=Math.min(h,f,u),v=Math.max(o,l,c),g=Math.max(h,f,u),d=qc(p,m,e,t,n),x=qc(v,g,e,t,n),b=i.prevZ,_=i.nextZ;for(;b&&b.z>=d&&_&&_.z<=x;){if(b.x>=p&&b.x<=v&&b.y>=m&&b.y<=g&&b!==s&&b!==a&&dr(o,h,l,f,c,u,b.x,b.y)&&kt(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=p&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&dr(o,h,l,f,c,u,_.x,_.y)&&kt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=d;){if(b.x>=p&&b.x<=v&&b.y>=m&&b.y<=g&&b!==s&&b!==a&&dr(o,h,l,f,c,u,b.x,b.y)&&kt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=x;){if(_.x>=p&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&dr(o,h,l,f,c,u,_.x,_.y)&&kt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function h0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Os(n,s)&&Kf(n,t,t.next,s)&&zr(n,s)&&zr(s,n)&&(e.push(n.i,t.i,s.i),Gr(t),Gr(t.next),t=i=s),t=t.next}while(t!==i);return Zi(t)}function u0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&v0(a,o)){let l=Qf(a,o);a=Zi(a,a.next),l=Zi(l,l.next),Hr(a,e,t,n,s,r,0),Hr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function f0(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=$f(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(y0(c))}s.sort(d0);for(let r=0;r<s.length;r++)t=p0(s[r],t);return t}function d0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function p0(i,e){let t=m0(i,e);if(!t)return e;let n=Qf(t,i);return Zi(n,n.next),Zi(t,t.next)}function m0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Os(i,t))return t;do{if(Os(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Jf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);zr(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&g0(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function g0(i,e){return kt(i.prev,i,e.prev)<0&&kt(e.next,i,i.next)<0}function x0(i,e,t,n){let s=i;do s.z===0&&(s.z=qc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_0(s)}function _0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function qc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function y0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Jf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function dr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Jf(i,e,t,n,s,r,a,o)}function v0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!M0(i,e)&&(zr(i,e)&&zr(e,i)&&b0(i,e)&&(kt(i.prev,i,e.prev)||kt(i,e.prev,e))||Os(i,e)&&kt(i.prev,i,i.next)>0&&kt(e.prev,e,e.next)>0)}function kt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Os(i,e){return i.x===e.x&&i.y===e.y}function Kf(i,e,t,n){let s=Qa(kt(i,e,t)),r=Qa(kt(i,e,n)),a=Qa(kt(t,n,i)),o=Qa(kt(t,n,e));return!!(s!==r&&a!==o||s===0&&Ka(i,t,e)||r===0&&Ka(i,n,e)||a===0&&Ka(t,i,n)||o===0&&Ka(t,e,n))}function Ka(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Qa(i){return i>0?1:i<0?-1:0}function M0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Kf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function zr(i,e){return kt(i.prev,i,i.next)<0?kt(i,e,i.next)>=0&&kt(i,i.prev,e)>=0:kt(i,e,i.prev)<0||kt(i,i.next,e)<0}function b0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Qf(i,e){let t=Yc(i.i,i.x,i.y),n=Yc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function tf(i,e,t,n){let s=Yc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Yc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function E0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Zc=class{static triangulate(e,t,n=2){return o0(e,t,n)}},Wi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];nf(e),sf(n,e);let a=e.length;t.forEach(nf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,sf(n,t[l]);let o=Zc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function nf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function sf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var kr=class i extends lt{constructor(e=new Bs([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Qe(s,3)),this.setAttribute("uv",new Qe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:S0,b,_=!1,E,T,w,y;if(d){b=d.getSpacedPoints(h),_=!0,u=!1;let oe=d.isCatmullRomCurve3?d.closed:!1;E=d.computeFrenetFrames(h,oe),T=new D,w=new D,y=new D}u||(g=0,p=0,m=0,v=0);let M=o.extractPoints(c),A=M.shape,I=M.holes;if(!Wi.isClockWise(A)){A=A.reverse();for(let oe=0,fe=I.length;oe<fe;oe++){let he=I[oe];Wi.isClockWise(he)&&(I[oe]=he.reverse())}}function C(oe){let he=10000000000000001e-36,pe=oe[0];for(let Me=1;Me<=oe.length;Me++){let Z=Me%oe.length,q=oe[Z],be=q.x-pe.x,Te=q.y-pe.y,U=be*be+Te*Te,_t=Math.max(Math.abs(q.x),Math.abs(q.y),Math.abs(pe.x),Math.abs(pe.y)),st=he*_t*_t;if(U<=st){oe.splice(Z,1),Me--;continue}pe=q}}C(A),I.forEach(C);let P=I.length,H=A;for(let oe=0;oe<P;oe++){let fe=I[oe];A=A.concat(fe)}function F(oe,fe,he){return fe||tt("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(fe,he)}let B=A.length;function G(oe,fe,he){let pe,Me,Z,q=oe.x-fe.x,be=oe.y-fe.y,Te=he.x-oe.x,U=he.y-oe.y,_t=q*q+be*be,st=q*U-be*Te;if(Math.abs(st)>Number.EPSILON){let L=Math.sqrt(_t),S=Math.sqrt(Te*Te+U*U),Y=fe.x-be/L,j=fe.y+q/L,ee=he.x-U/S,ve=he.y+Te/S,me=((ee-Y)*U-(ve-j)*Te)/(q*U-be*Te);pe=Y+q*me-oe.x,Me=j+be*me-oe.y;let ae=pe*pe+Me*Me;if(ae<=2)return new le(pe,Me);Z=Math.sqrt(ae/2)}else{let L=!1;q>Number.EPSILON?Te>Number.EPSILON&&(L=!0):q<-Number.EPSILON?Te<-Number.EPSILON&&(L=!0):Math.sign(be)===Math.sign(U)&&(L=!0),L?(pe=-be,Me=q,Z=Math.sqrt(_t)):(pe=q,Me=be,Z=Math.sqrt(_t/2))}return new le(pe/Z,Me/Z)}let V=[];for(let oe=0,fe=H.length,he=fe-1,pe=oe+1;oe<fe;oe++,he++,pe++)he===fe&&(he=0),pe===fe&&(pe=0),V[oe]=G(H[oe],H[he],H[pe]);let X=[],O,$=V.concat();for(let oe=0,fe=P;oe<fe;oe++){let he=I[oe];O=[];for(let pe=0,Me=he.length,Z=Me-1,q=pe+1;pe<Me;pe++,Z++,q++)Z===Me&&(Z=0),q===Me&&(q=0),O[pe]=G(he[pe],he[Z],he[q]);X.push(O),$=$.concat(O)}let ie;if(g===0)ie=Wi.triangulateShape(H,I);else{let oe=[],fe=[];for(let he=0;he<g;he++){let pe=he/g,Me=p*Math.cos(pe*Math.PI/2),Z=m*Math.sin(pe*Math.PI/2)+v;for(let q=0,be=H.length;q<be;q++){let Te=F(H[q],V[q],Z);Se(Te.x,Te.y,-Me),pe===0&&oe.push(Te)}for(let q=0,be=P;q<be;q++){let Te=I[q];O=X[q];let U=[];for(let _t=0,st=Te.length;_t<st;_t++){let L=F(Te[_t],O[_t],Z);Se(L.x,L.y,-Me),pe===0&&U.push(L)}pe===0&&fe.push(U)}}ie=Wi.triangulateShape(oe,fe)}let Ee=ie.length,_e=m+v;for(let oe=0;oe<B;oe++){let fe=u?F(A[oe],$[oe],_e):A[oe];_?(w.copy(E.normals[0]).multiplyScalar(fe.x),T.copy(E.binormals[0]).multiplyScalar(fe.y),y.copy(b[0]).add(w).add(T),Se(y.x,y.y,y.z)):Se(fe.x,fe.y,0)}for(let oe=1;oe<=h;oe++)for(let fe=0;fe<B;fe++){let he=u?F(A[fe],$[fe],_e):A[fe];_?(w.copy(E.normals[oe]).multiplyScalar(he.x),T.copy(E.binormals[oe]).multiplyScalar(he.y),y.copy(b[oe]).add(w).add(T),Se(y.x,y.y,y.z)):Se(he.x,he.y,f/h*oe)}for(let oe=g-1;oe>=0;oe--){let fe=oe/g,he=p*Math.cos(fe*Math.PI/2),pe=m*Math.sin(fe*Math.PI/2)+v;for(let Me=0,Z=H.length;Me<Z;Me++){let q=F(H[Me],V[Me],pe);Se(q.x,q.y,f+he)}for(let Me=0,Z=I.length;Me<Z;Me++){let q=I[Me];O=X[Me];for(let be=0,Te=q.length;be<Te;be++){let U=F(q[be],O[be],pe);_?Se(U.x,U.y+b[h-1].y,b[h-1].x+he):Se(U.x,U.y,f+he)}}}Ne(),J();function Ne(){let oe=s.length/3;if(u){let fe=0,he=B*fe;for(let pe=0;pe<Ee;pe++){let Me=ie[pe];Le(Me[2]+he,Me[1]+he,Me[0]+he)}fe=h+g*2,he=B*fe;for(let pe=0;pe<Ee;pe++){let Me=ie[pe];Le(Me[0]+he,Me[1]+he,Me[2]+he)}}else{for(let fe=0;fe<Ee;fe++){let he=ie[fe];Le(he[2],he[1],he[0])}for(let fe=0;fe<Ee;fe++){let he=ie[fe];Le(he[0]+B*h,he[1]+B*h,he[2]+B*h)}}n.addGroup(oe,s.length/3-oe,0)}function J(){let oe=s.length/3,fe=0;re(H,fe),fe+=H.length;for(let he=0,pe=I.length;he<pe;he++){let Me=I[he];re(Me,fe),fe+=Me.length}n.addGroup(oe,s.length/3-oe,1)}function re(oe,fe){let he=oe.length;for(;--he>=0;){let pe=he,Me=he-1;Me<0&&(Me=oe.length-1);for(let Z=0,q=h+g*2;Z<q;Z++){let be=B*Z,Te=B*(Z+1),U=fe+pe+be,_t=fe+Me+be,st=fe+Me+Te,L=fe+pe+Te;ge(U,_t,st,L)}}}function Se(oe,fe,he){l.push(oe),l.push(fe),l.push(he)}function Le(oe,fe,he){Fe(oe),Fe(fe),Fe(he);let pe=s.length/3,Me=x.generateTopUV(n,s,pe-3,pe-2,pe-1);ht(Me[0]),ht(Me[1]),ht(Me[2])}function ge(oe,fe,he,pe){Fe(oe),Fe(fe),Fe(pe),Fe(fe),Fe(he),Fe(pe);let Me=s.length/3,Z=x.generateSideWallUV(n,s,Me-6,Me-3,Me-2,Me-1);ht(Z[0]),ht(Z[1]),ht(Z[3]),ht(Z[1]),ht(Z[2]),ht(Z[3])}function Fe(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function ht(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return T0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Xc[s.type]().fromJSON(s)),new i(n,e.options)}},S0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new le(r,a),new le(o,l),new le(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],p=e[s*3+1],m=e[s*3+2],v=e[r*3],g=e[r*3+1],d=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new le(a,1-l),new le(c,1-f),new le(u,1-m),new le(v,1-d)]:[new le(o,1-l),new le(h,1-f),new le(p,1-m),new le(g,1-d)]}};function T0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var yn=class i extends Mo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},rn=class i extends lt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=pt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,f=new D,u=new le,p=new D,m=new D,v=new D,g=0,d=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,d=e[x+1].y-e[x].y,p.x=d*1,p.y=-g,p.z=d*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[x+1].x-e[x].x,d=e[x+1].y-e[x].y,p.x=d*1,p.y=-g,p.z=d*0,m.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(m)}for(let x=0;x<=t;x++){let b=n+x*h*s,_=Math.sin(b),E=Math.cos(b);for(let T=0;T<=e.length-1;T++){f.x=e[T].x*_,f.y=e[T].y,f.z=e[T].x*E,a.push(f.x,f.y,f.z),u.x=x/t,u.y=T/(e.length-1),o.push(u.x,u.y);let w=l[3*T+0]*_,y=l[3*T+1],M=l[3*T+0]*E;c.push(w,y,M)}}for(let x=0;x<t;x++)for(let b=0;b<e.length-1;b++){let _=b+x*e.length,E=_,T=_+e.length,w=_+e.length+1,y=_+1;r.push(E,T,y),r.push(w,y,T)}this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("uv",new Qe(o,2)),this.setAttribute("normal",new Qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ke=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,p=[],m=[],v=[],g=[];for(let d=0;d<h;d++){let x=d*u-a;for(let b=0;b<c;b++){let _=b*f-r;m.push(_,-x,0),v.push(0,0,1),g.push(b/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){let b=x+c*d,_=x+c*(d+1),E=x+1+c*(d+1),T=x+1+c*d;p.push(b,_,T),p.push(_,E,T)}this.setIndex(p),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ft=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new D,u=new D,p=[],m=[],v=[],g=[];for(let d=0;d<=n;d++){let x=[],b=d/n,_=a+b*o,E=e*Math.cos(_),T=Math.sqrt(e*e-E*E),w=0;d===0&&a===0?w=.5/t:d===n&&l===Math.PI&&(w=-.5/t);for(let y=0;y<=t;y++){let M=y/t,A=s+M*r;f.x=-T*Math.cos(A),f.y=E,f.z=T*Math.sin(A),m.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),g.push(M+w,1-b),x.push(c++)}h.push(x)}for(let d=0;d<n;d++)for(let x=0;x<t;x++){let b=h[d][x+1],_=h[d][x],E=h[d+1][x],T=h[d+1][x+1];(d!==0||a>0)&&p.push(b,_,T),(d!==n-1||l<Math.PI)&&p.push(_,E,T)}this.setIndex(p),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var jt=class i extends lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new D,p=new D,m=new D;for(let v=0;v<=n;v++){let g=a+v/n*o;for(let d=0;d<=s;d++){let x=d/s*r;p.x=(e+t*Math.cos(g))*Math.cos(x),p.y=(e+t*Math.cos(g))*Math.sin(x),p.z=t*Math.sin(g),c.push(p.x,p.y,p.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),m.subVectors(p,u).normalize(),h.push(m.x,m.y,m.z),f.push(d/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){let d=(s+1)*v+g-1,x=(s+1)*(v-1)+g-1,b=(s+1)*(v-1)+g,_=(s+1)*v+g;l.push(d,x,_),l.push(x,b,_)}this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ji(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(rf(s))s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(rf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function dn(i){let e={};for(let t=0;t<i.length;t++){let n=ji(i[t]);for(let s in n)e[s]=n[s]}return e}function rf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function w0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function mh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var xi={clone:ji,merge:dn},R0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R0,this.fragmentShader=A0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=w0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ye().setHex(s.value);break;case"v2":this.uniforms[n].value=new le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new rt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ge().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Hs=class extends Lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$e=class extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Vr=class extends In{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=Wo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ao=class extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Co=class extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function bs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Oc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ai=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Po=class extends Ai{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gc,endingEnd:Gc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case kc:r=e,o=2*t-n;break;case Vc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case kc:a=e,l=2*n-t;break;case Vc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,m=(n-t)/(s-t),v=m*m,g=v*m,d=-u*g+2*u*v-u*m,x=(1+u)*g+(-1.5-2*u)*v+(-.5+u)*m+1,b=(-1-p)*g+(1.5+p)*v+.5*m,_=p*g-p*v;for(let E=0;E!==o;++E)r[E]=d*a[h+E]+x*a[c+E]+b*a[l+E]+_*a[f+E];return r}},Io=class extends Ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Lo=class extends Ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Do=class extends Ai{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(n-t)/(s-t),v=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*v+a[l+g]*m;return r}let u=o*2,p=e-1;for(let m=0;m!==o;++m){let v=a[c+m],g=a[l+m],d=p*u+m*2,x=f[d],b=f[d+1],_=e*u+m*2,E=h[_],T=h[_+1],w=P0(n,t,x,E,s);r[m]=jf(w,v,b,T,g)}return r}};function jf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function C0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function P0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=jf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=C0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Tn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bs(t,this.TimeBufferType),this.values=bs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bs(e.times,Array),values:bs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Oc(e.settings)&&(n.settings={inTangents:bs(e.settings.inTangents,Array),outTangents:bs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Do(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case gr:t=this.InterpolantFactoryMethodDiscrete;break;case uo:t=this.InterpolantFactoryMethodLinear;break;case to:t=this.InterpolantFactoryMethodSmooth;break;case zc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return uo;case this.InterpolantFactoryMethodSmooth:return to;case this.InterpolantFactoryMethodBezier:return zc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Oc(this.settings)&&(af(this.settings.inTangents,e),af(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){tt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){tt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Dp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){tt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===to,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,u=f-n,p=f+n;for(let m=0;m!==n;++m){let v=t[f+m];if(v!==t[u+m]||v!==t[p+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Oc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function af(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=uo;var Ci=class extends Tn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=gr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};Uo.prototype.ValueTypeName="color";var No=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};No.prototype.ValueTypeName="number";var Fo=class extends Ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)It.slerpFlat(r,0,a,c-o,a,c,l);return r}},Wr=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Fo(this.times,this.values,this.getValueSize(),e)}};Wr.prototype.ValueTypeName="quaternion";Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends Tn{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=gr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};Bo.prototype.ValueTypeName="vector";var Oo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let p=c[f],m=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ed=new Oo,Ho=class{constructor(e){this.manager=e!==void 0?e:ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ho.DEFAULT_MATERIAL_NAME="__DEFAULT";var $i=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xr=class extends $i{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Hc=new Ge,of=new D,lf=new D,zs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;of.setFromMatrixPosition(e.matrixWorld),t.position.copy(of),lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Hc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Rs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ja=new D,eo=new It,$n=new D,qr=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ja,eo,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,eo,$n.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ja,eo,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,eo,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wi=new D,cf=new le,hf=new le,Qt=class extends qr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,cf,hf),t.subVectors(hf,cf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$c=class extends zs{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Mr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Yr=class extends $i{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new $c}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Jc=class extends zs{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0}},Zr=class extends $i{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ni=class extends qr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kc=class extends zs{constructor(){super(new ni(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends $i{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Kc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Es=-90,Ss=1,zo=class extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qt(Es,Ss,e,t);s.layers=this.layers,this.add(s);let r=new Qt(Es,Ss,e,t);r.layers=this.layers,this.add(r);let a=new Qt(Es,Ss,e,t);a.layers=this.layers,this.add(a);let o=new Qt(Es,Ss,e,t);o.layers=this.layers,this.add(o);let l=new Qt(Es,Ss,e,t);l.layers=this.layers,this.add(l);let c=new Qt(Es,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Go=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Jr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=I0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function I0(){this._document.hidden===!1&&this.reset()}var gh="\\[\\]\\.:\\/",L0=new RegExp("["+gh+"]","g"),xh="[^"+gh+"]",D0="[^"+gh.replace("\\.","")+"]",U0=/((?:WC+[\/:])*)/.source.replace("WC",xh),N0=/(WCOD+)?/.source.replace("WCOD",D0),F0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),B0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),O0=new RegExp("^"+U0+N0+F0+B0+"$"),H0=["material","materials","bones","map"],Qc=class{constructor(e,t,n){let s=n||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ht=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(L0,"")}static parseTrackName(e){let t=O0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);H0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;tt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ht.Composite=Qc;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sv=new Float32Array(1);var Eh=class Eh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Eh.prototype.isMatrix2=!0;var jc=Eh;function _h(i,e,t,n){let s=z0(n);switch(t){case hh:return i*e;case Ko:return i*e/s.components*s.byteLength;case Qo:return i*e/s.components*s.byteLength;case Ni:return i*e*2/s.components*s.byteLength;case jo:return i*e*2/s.components*s.byteLength;case uh:return i*e*3/s.components*s.byteLength;case Un:return i*e*4/s.components*s.byteLength;case el:return i*e*4/s.components*s.byteLength;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case la:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nl:case sl:return Math.max(i,16)*Math.max(e,8)/4;case tl:case il:return Math.max(i,8)*Math.max(e,8)/2;case rl:case al:case ll:case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ol:case ha:case hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case dl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case pl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case gl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _l:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Tl:case wl:case Rl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Al:case Cl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ua:case Pl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function z0(i){switch(i){case vn:case ah:return{byteLength:1,components:1};case Vs:case oh:case Kt:return{byteLength:2,components:1};case $o:case Jo:return{byteLength:2,components:4};case Wn:case Zo:case Dn:return{byteLength:4,components:1};case lh:case ch:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function bd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function k0(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<f.length;p++){let m=f[u],v=f[p];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,f[u]=v)}f.length=u+1;for(let p=0,m=f.length;p<m;p++){let v=f[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W0=`#ifdef USE_ALPHAHASH
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
#endif`,X0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$0=`#ifdef USE_AOMAP
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
#endif`,J0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K0=`#ifdef USE_BATCHING
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
#endif`,Q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nm=`#ifdef USE_IRIDESCENCE
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
#endif`,im=`#ifdef USE_BUMPMAP
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
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fm=`#define PI 3.141592653589793
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
} // validated`,dm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pm=`vec3 transformedNormal = objectNormal;
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
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mm=`#ifdef USE_ENVMAP
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
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
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
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
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
#endif`,Gm=`uniform sampler2D dfgLUT;
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
}`,km=`
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jm=`#if defined( USE_POINTS_UV )
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
#endif`,eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ig=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`#ifdef USE_MORPHTARGETS
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
#endif`,ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,og=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
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
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_g=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ag=`float getShadowMask() {
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
}`,Cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wg=`uniform sampler2D t2D;
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`#include <common>
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
}`,Jg=`#if DEPTH_PACKING == 3200
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
}`,Kg=`#define DISTANCE
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
}`,Qg=`#define DISTANCE
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`uniform float scale;
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#include <common>
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
}`,sx=`uniform vec3 diffuse;
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
}`,rx=`#define LAMBERT
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
}`,ax=`#define LAMBERT
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
}`,ox=`#define MATCAP
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
}`,lx=`#define MATCAP
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
}`,cx=`#define NORMAL
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
}`,hx=`#define NORMAL
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
}`,ux=`#define PHONG
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
}`,fx=`#define PHONG
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
}`,dx=`#define STANDARD
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
}`,px=`#define STANDARD
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
}`,mx=`#define TOON
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
}`,gx=`#define TOON
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
}`,xx=`uniform float size;
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
}`,_x=`uniform vec3 diffuse;
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
}`,yx=`#include <common>
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
}`,vx=`uniform vec3 color;
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
}`,Mx=`uniform float rotation;
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
}`,bx=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:V0,alphahash_pars_fragment:W0,alphamap_fragment:X0,alphamap_pars_fragment:q0,alphatest_fragment:Y0,alphatest_pars_fragment:Z0,aomap_fragment:$0,aomap_pars_fragment:J0,batching_pars_vertex:K0,batching_vertex:Q0,begin_vertex:j0,beginnormal_vertex:em,bsdfs:tm,iridescence_fragment:nm,bumpmap_pars_fragment:im,clipping_planes_fragment:sm,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:am,clipping_planes_vertex:om,color_fragment:lm,color_pars_fragment:cm,color_pars_vertex:hm,color_vertex:um,common:fm,cube_uv_reflection_fragment:dm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:xm,emissivemap_pars_fragment:_m,colorspace_fragment:ym,colorspace_pars_fragment:vm,envmap_fragment:Mm,envmap_common_pars_fragment:bm,envmap_pars_fragment:Em,envmap_pars_vertex:Sm,envmap_physical_pars_fragment:Nm,envmap_vertex:Tm,fog_vertex:wm,fog_pars_vertex:Rm,fog_fragment:Am,fog_pars_fragment:Cm,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Im,lights_lambert_fragment:Lm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Um,lights_toon_fragment:Fm,lights_toon_pars_fragment:Bm,lights_phong_fragment:Om,lights_phong_pars_fragment:Hm,lights_physical_fragment:zm,lights_physical_pars_fragment:Gm,lights_fragment_begin:km,lights_fragment_maps:Vm,lights_fragment_end:Wm,lightprobes_pars_fragment:Xm,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:$m,map_fragment:Jm,map_pars_fragment:Km,map_particle_fragment:Qm,map_particle_pars_fragment:jm,metalnessmap_fragment:eg,metalnessmap_pars_fragment:tg,morphinstance_vertex:ng,morphcolor_vertex:ig,morphnormal_vertex:sg,morphtarget_pars_vertex:rg,morphtarget_vertex:ag,normal_fragment_begin:og,normal_fragment_maps:lg,normal_pars_fragment:cg,normal_pars_vertex:hg,normal_vertex:ug,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,iridescence_pars_fragment:gg,opaque_fragment:xg,packing:_g,premultiplied_alpha_fragment:yg,project_vertex:vg,dithering_fragment:Mg,dithering_pars_fragment:bg,roughnessmap_fragment:Eg,roughnessmap_pars_fragment:Sg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:wg,shadowmap_vertex:Rg,shadowmask_pars_fragment:Ag,skinbase_vertex:Cg,skinning_pars_vertex:Pg,skinning_vertex:Ig,skinnormal_vertex:Lg,specularmap_fragment:Dg,specularmap_pars_fragment:Ug,tonemapping_fragment:Ng,tonemapping_pars_fragment:Fg,transmission_fragment:Bg,transmission_pars_fragment:Og,uv_pars_fragment:Hg,uv_pars_vertex:zg,uv_vertex:Gg,worldpos_vertex:kg,background_vert:Vg,background_frag:Wg,backgroundCube_vert:Xg,backgroundCube_frag:qg,cube_vert:Yg,cube_frag:Zg,depth_vert:$g,depth_frag:Jg,distance_vert:Kg,distance_frag:Qg,equirect_vert:jg,equirect_frag:ex,linedashed_vert:tx,linedashed_frag:nx,meshbasic_vert:ix,meshbasic_frag:sx,meshlambert_vert:rx,meshlambert_frag:ax,meshmatcap_vert:ox,meshmatcap_frag:lx,meshnormal_vert:cx,meshnormal_frag:hx,meshphong_vert:ux,meshphong_frag:fx,meshphysical_vert:dx,meshphysical_frag:px,meshtoon_vert:mx,meshtoon_frag:gx,points_vert:xx,points_frag:_x,shadow_vert:yx,shadow_frag:vx,sprite_vert:Mx,sprite_frag:bx},Ie={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},si={basic:{uniforms:dn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:dn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:dn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:dn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:dn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new ye(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:dn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:dn([Ie.points,Ie.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:dn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:dn([Ie.common,Ie.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:dn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:dn([Ie.sprite,Ie.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:dn([Ie.common,Ie.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:dn([Ie.lights,Ie.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};si.physical={uniforms:dn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Dl={r:0,b:0,g:0},Ex=new Ge,Ed=new rt;Ed.set(-1,0,0,0,1,0,0,0,1);function Sx(i,e,t,n,s,r){let a=new ye(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function p(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){let _=x.backgroundBlurriness>0;b=e.get(b,_)}return b}function m(x){let b=!1,_=p(x);_===null?g(a,o):_&&_.isColor&&(g(_,1),b=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,b){let _=p(b);_&&(_.isCubeTexture||_.mapping===sa)?(c===void 0&&(c=new te(new xe(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:ji(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ed),c.material.toneMapped=dt.getTransfer(_.colorSpace)!==bt,(h!==_||f!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new te(new Ke(2,2),new Lt({name:"BackgroundMaterial",uniforms:ji(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=dt.getTransfer(_.colorSpace)!==bt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,b){x.getRGB(Dl,mh(i)),t.buffers.color.setClear(Dl.r,Dl.g,Dl.b,b,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:m,addToRenderList:v,dispose:d}}function Tx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(I,N,C,P,H){let F=!1,B=f(I,P,C,N);r!==B&&(r=B,c(r.object)),F=p(I,P,C,H),F&&m(I,P,C,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,_(I,N,C,P),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function f(I,N,C,P){let H=P.wireframe===!0,F=n[N.id];F===void 0&&(F={},n[N.id]=F);let B=I.isInstancedMesh===!0?I.id:0,G=F[B];G===void 0&&(G={},F[B]=G);let V=G[C.id];V===void 0&&(V={},G[C.id]=V);let X=V[H];return X===void 0&&(X=u(l()),V[H]=X),X}function u(I){let N=[],C=[],P=[];for(let H=0;H<t;H++)N[H]=0,C[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:C,attributeDivisors:P,object:I,attributes:{},index:null}}function p(I,N,C,P){let H=r.attributes,F=N.attributes,B=0,G=C.getAttributes();for(let V in G)if(G[V].location>=0){let O=H[V],$=F[V];if($===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),O===void 0||O.attribute!==$||$&&O.data!==$.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function m(I,N,C,P){let H={},F=N.attributes,B=0,G=C.getAttributes();for(let V in G)if(G[V].location>=0){let O=F[V];O===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(O=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(O=I.instanceColor));let $={};$.attribute=O,O&&O.data&&($.data=O.data),H[V]=$,B++}r.attributes=H,r.attributesNum=B,r.index=P}function v(){let I=r.newAttributes;for(let N=0,C=I.length;N<C;N++)I[N]=0}function g(I){d(I,0)}function d(I,N){let C=r.newAttributes,P=r.enabledAttributes,H=r.attributeDivisors;C[I]=1,P[I]===0&&(i.enableVertexAttribArray(I),P[I]=1),H[I]!==N&&(i.vertexAttribDivisor(I,N),H[I]=N)}function x(){let I=r.newAttributes,N=r.enabledAttributes;for(let C=0,P=N.length;C<P;C++)N[C]!==I[C]&&(i.disableVertexAttribArray(C),N[C]=0)}function b(I,N,C,P,H,F,B){B===!0?i.vertexAttribIPointer(I,N,C,H,F):i.vertexAttribPointer(I,N,C,P,H,F)}function _(I,N,C,P){v();let H=P.attributes,F=C.getAttributes(),B=N.defaultAttributeValues;for(let G in F){let V=F[G];if(V.location>=0){let X=H[G];if(X===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){let O=X.normalized,$=X.itemSize,ie=e.get(X);if(ie===void 0)continue;let Ee=ie.buffer,_e=ie.type,Ne=ie.bytesPerElement,J=_e===i.INT||_e===i.UNSIGNED_INT||X.gpuType===Zo;if(X.isInterleavedBufferAttribute){let re=X.data,Se=re.stride,Le=X.offset;if(re.isInstancedInterleavedBuffer){for(let ge=0;ge<V.locationSize;ge++)d(V.location+ge,re.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ge=0;ge<V.locationSize;ge++)g(V.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let ge=0;ge<V.locationSize;ge++)b(V.location+ge,$/V.locationSize,_e,O,Se*Ne,(Le+$/V.locationSize*ge)*Ne,J)}else{if(X.isInstancedBufferAttribute){for(let re=0;re<V.locationSize;re++)d(V.location+re,X.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let re=0;re<V.locationSize;re++)g(V.location+re);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let re=0;re<V.locationSize;re++)b(V.location+re,$/V.locationSize,_e,O,$*Ne,$/V.locationSize*re*Ne,J)}}else if(B!==void 0){let O=B[G];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(V.location,O);break;case 3:i.vertexAttrib3fv(V.location,O);break;case 4:i.vertexAttrib4fv(V.location,O);break;default:i.vertexAttrib1fv(V.location,O)}}}}x()}function E(){M();for(let I in n){let N=n[I];for(let C in N){let P=N[C];for(let H in P){let F=P[H];for(let B in F)h(F[B].object),delete F[B];delete P[H]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;let N=n[I.id];for(let C in N){let P=N[C];for(let H in P){let F=P[H];for(let B in F)h(F[B].object),delete F[B];delete P[H]}}delete n[I.id]}function w(I){for(let N in n){let C=n[N];for(let P in C){let H=C[P];if(H[I.id]===void 0)continue;let F=H[I.id];for(let B in F)h(F[B].object),delete F[B];delete H[I.id]}}}function y(I){for(let N in n){let C=n[N],P=I.isInstancedMesh===!0?I.id:0,H=C[P];if(H!==void 0){for(let F in H){let B=H[F];for(let G in B)h(B[G].object),delete B[G];delete H[F]}delete C[P],Object.keys(C).length===0&&delete n[N]}}}function M(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:M,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function wx(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Rx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Un&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let y=w===Kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==vn&&w!==Dn&&!y&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(je("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:_,maxSamples:E,samples:T}}function Ax(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Gn,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||n!==0||s;return s=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){let m=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,d=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let x=r?0:n,b=x*4,_=d.clippingState||null;l.value=_,_=h(m,u,b,p);for(let E=0;E!==b;++E)_[E]=t[E];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,p,m){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=l.value,m!==!0||g===null){let d=p+v*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let b=0,_=p;b!==v;++b,_+=4)a.copy(f[b]).applyMatrix4(x,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var qs=4,Cx=6,Px=20,Ix=256,da=new ni,td=new ye,Sh=null,Th=0,wh=0,Rh=!1,Lx=new D,es=new D,Nl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Lx}=r;Sh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sh,Th,wh),this._renderer.xr.enabled=Rh,e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Kt,format:Un,colorSpace:xr,depthBuffer:!1},s=nd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Dx(r)),this._blurMaterial=Nx(r,e,t),this._ggxMaterial=Ux(r,e,t)}return s}_compileMaterial(e){let t=new te(new lt,e);this._renderer.compile(t,da)}_sceneToCubeUV(e,t,n,s,r){let l=new Qt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(td),f.toneMapping=Vn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new te(new xe,new vt({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,d=!1,x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,d=!0):(g.color.copy(td),d=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):_===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let E=this._cubeSize;Xs(s,_*E,b>2?E:0,E,E),f.setRenderTarget(s),d&&f.render(v,l),f.render(e,l)}f.toneMapping=p,f.autoClear=u,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Li||e.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=id());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Xs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,da)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,p=f*u,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-qs?n-m+qs:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-t,Xs(r,g,d,3*v,2*v),s.setRenderTarget(r),s.render(o,da),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Xs(e,g,d,3*v,2*v),s.setRenderTarget(e),s.render(o,da)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-qs?s-this._lodMax+qs:0),u=4*(this._cubeSize-h);Xs(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(l,da)}};function Dx(i){let e=[],t=[],n=i,s=i-qs+1+Cx;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,p=3,m=new Float32Array(p*u*f),v=new Float32Array(p*u*f);for(let d=0;d<f;d++){let x=d%3*2/3-1,b=d>2?0:-1,_=[x,b,0,x+2/3,b,0,x+2/3,b+1,0,x,b,0,x+2/3,b+1,0,x,b+1,0];m.set(_,p*u*d);for(let E=0;E<u;E++){let T=h[E*2]*2-1,w=h[E*2+1]*2-1;d===0?es.set(1,w,T):d===1?es.set(-T,1,-w):d===2?es.set(-T,w,1):d===3?es.set(-1,w,-T):d===4?es.set(-T,-1,w):es.set(T,w,-1),es.toArray(v,(d*u+E)*p)}}let g=new lt;g.setAttribute("position",new Pt(m,p)),g.setAttribute("outputDirection",new Pt(v,p)),t.push(new te(g,null)),n>qs&&n--}return{lodMeshes:t,sizeLods:e}}function nd(i,e,t){let n=new Vt(i,e,t);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ux(i,e,t){return new Lt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ix,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Nx(i,e,t){return new Lt({name:"SphericalGaussianBlur",defines:{SAMPLES:Px,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function id(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function sd(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ol(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fl=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ir(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xe(5,5,5),r=new Lt({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Ln});r.uniforms.tEquirect.value=t;let a=new te(s,r),o=t.minFilter;return t.minFilter===Di&&(t.minFilter=on),new zo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Fx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Xo||p===qo)if(e.has(u)){let m=e.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let v=new Fl(m.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,m=p===Xo||p===qo,v=p===Li||p===Qi;if(m||v){let g=t.get(u),d=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new Nl(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let x=u.image;return m&&x&&x.height>0||v&&x&&l(x)?(n===null&&(n=new Nl(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,p){return p===Xo?u.mapping=Li:p===qo&&(u.mapping=Qi),u}function l(u){let p=0,m=6;for(let v=0;v<m;v++)u[v]!==void 0&&p++;return p===m}function c(u){let p=u.target;p.removeEventListener("dispose",c);let m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Bx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Xi("WebGLRenderer: "+n+" extension not supported."),s}}}function Ox(i,e,t,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let p in u)e.update(u[p],i.ARRAY_BUFFER)}function c(f){let u=[],p=f.index,m=f.attributes.position,v=0;if(m===void 0)return;if(p!==null){let x=p.array;v=p.version;for(let b=0,_=x.length;b<_;b+=3){let E=x[b+0],T=x[b+1],w=x[b+2];u.push(E,T,T,w,w,E)}}else{let x=m.array;v=m.version;for(let b=0,_=x.length/3-1;b<_;b+=3){let E=b+0,T=b+1,w=b+2;u.push(E,T,T,w,w,E)}}let g=new(m.count>=65535?wr:Tr)(u,1);g.version=v;let d=r.get(f);d&&e.remove(d),r.set(f,g)}function h(f){let u=r.get(f);if(u){let p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Hx(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,f*a,p),t.update(u,n,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,p);let v=0;for(let g=0;g<p;g++)v+=u[g];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Gx(i,e,t){let n=new WeakMap,s=new Nt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let M=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],b=0;p===!0&&(b=1),m===!0&&(b=2),v===!0&&(b=3);let _=o.attributes.position.count*b,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*E*4*f),w=new br(T,_,E,f);w.type=Dn,w.needsUpdate=!0;let y=b*4;for(let A=0;A<f;A++){let I=g[A],N=d[A],C=x[A],P=_*E*4*A;for(let H=0;H<I.count;H++){let F=H*y;p===!0&&(s.fromBufferAttribute(I,H),T[P+F+0]=s.x,T[P+F+1]=s.y,T[P+F+2]=s.z,T[P+F+3]=0),m===!0&&(s.fromBufferAttribute(N,H),T[P+F+4]=s.x,T[P+F+5]=s.y,T[P+F+6]=s.z,T[P+F+7]=0),v===!0&&(s.fromBufferAttribute(C,H),T[P+F+8]=s.x,T[P+F+9]=s.y,T[P+F+10]=s.z,T[P+F+11]=C.itemSize===4?s.w:1)}}u={count:f,texture:w,size:new le(_,E)},n.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function kx(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Vx={[Qr]:"LINEAR_TONE_MAPPING",[jr]:"REINHARD_TONE_MAPPING",[ea]:"CINEON_TONE_MAPPING",[ta]:"ACES_FILMIC_TONE_MAPPING",[ia]:"AGX_TONE_MAPPING",[Ki]:"NEUTRAL_TONE_MAPPING",[na]:"CUSTOM_TONE_MAPPING"};function Wx(i,e,t,n,s,r){let a=new Vt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new lt;c.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qe([0,2,0,0,2,0],2));let h=new Hs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new te(c,h),u=new ni(-1,1,1,-1,0,1),p=null,m=null,v=!1,g,d=null,x=[],b=!1;this.setSize=function(_,E){a.setSize(_,E),o!==null&&o.setSize(_,E),l!==null&&l.setSize(_,E);for(let T=0;T<x.length;T++){let w=x[T];w.setSize&&w.setSize(_,E)}},this.setEffects=function(_){x=_,b=x.length>0&&x[0].isRenderPass===!0;let E=a.width,T=a.height;x.length>0&&o===null&&(o=new Vt(E,T,{type:Kt,depthBuffer:!1,stencilBuffer:!1}),l=new Vt(E,T,{type:Kt,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<x.length;w++){let y=x[w];y.setSize&&y.setSize(E,T)}},this.begin=function(_,E){if(v||_.toneMapping===Vn&&x.length===0)return!1;if(d=E,E!==null){let T=E.width,w=E.height;(a.width!==T||a.height!==w)&&this.setSize(T,w)}return b===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=Vn,!0},this.hasRenderPass=function(){return b},this.end=function(_,E){_.toneMapping=g,v=!0;let T=a,w=o;for(let y=0;y<x.length;y++){let M=x[y];M.enabled!==!1&&(M.render(_,w,T,E),M.needsSwap!==!1&&(T=w,w=w===o?l:o))}if(p!==_.outputColorSpace||m!==_.toneMapping){p=_.outputColorSpace,m=_.toneMapping,h.defines={},dt.getTransfer(p)===bt&&(h.defines.SRGB_TRANSFER="");let y=Vx[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(d),_.render(f,u),d=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Sd=new gn,Ph=new Ri(1,1),Td=new br,wd=new mo,Rd=new Ir,rd=[],ad=[],od=new Float32Array(16),ld=new Float32Array(9),cd=new Float32Array(4);function Zs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=rd[s];if(r===void 0&&(r=new Float32Array(s),rd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hl(i,e){let t=ad[e];t===void 0&&(t=new Int32Array(e),ad[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Xx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function Yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function Zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function $x(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;cd.set(n),i.uniformMatrix2fv(this.addr,!1,cd),tn(t,n)}}function Jx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;ld.set(n),i.uniformMatrix3fv(this.addr,!1,ld),tn(t,n)}}function Kx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;od.set(n),i.uniformMatrix4fv(this.addr,!1,od),tn(t,n)}}function Qx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function n_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function a_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ph.compareFunction=t.isReversedDepthBuffer()?Ll:Il,r=Ph):r=Sd,t.setTexture2D(e||r,s)}function o_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wd,s)}function l_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Rd,s)}function c_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Td,s)}function h_(i){switch(i){case 5126:return Xx;case 35664:return qx;case 35665:return Yx;case 35666:return Zx;case 35674:return $x;case 35675:return Jx;case 35676:return Kx;case 5124:case 35670:return Qx;case 35667:case 35671:return jx;case 35668:case 35672:return e_;case 35669:case 35673:return t_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}function u_(i,e){i.uniform1fv(this.addr,e)}function f_(i,e){let t=Zs(e,this.size,2);i.uniform2fv(this.addr,t)}function d_(i,e){let t=Zs(e,this.size,3);i.uniform3fv(this.addr,t)}function p_(i,e){let t=Zs(e,this.size,4);i.uniform4fv(this.addr,t)}function m_(i,e){let t=Zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function g_(i,e){let t=Zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function x_(i,e){let t=Zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function __(i,e){i.uniform1iv(this.addr,e)}function y_(i,e){i.uniform2iv(this.addr,e)}function v_(i,e){i.uniform3iv(this.addr,e)}function M_(i,e){i.uniform4iv(this.addr,e)}function b_(i,e){i.uniform1uiv(this.addr,e)}function E_(i,e){i.uniform2uiv(this.addr,e)}function S_(i,e){i.uniform3uiv(this.addr,e)}function T_(i,e){i.uniform4uiv(this.addr,e)}function w_(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ph:a=Sd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function R_(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wd,r[a])}function A_(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Rd,r[a])}function C_(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Td,r[a])}function P_(i){switch(i){case 5126:return u_;case 35664:return f_;case 35665:return d_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return x_;case 5124:case 35670:return __;case 35667:case 35671:return y_;case 35668:case 35672:return v_;case 35669:case 35673:return M_;case 5125:return b_;case 36294:return E_;case 36295:return S_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return C_}}var Ih=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=h_(t.type)}},Lh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P_(t.type)}},Dh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ah=/(\w+)(\])?(\[|\.)?/g;function hd(i,e){i.seq.push(e),i.map[e.id]=e}function I_(i,e,t){let n=i.name,s=n.length;for(Ah.lastIndex=0;;){let r=Ah.exec(n),a=Ah.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){hd(t,c===void 0?new Ih(o,i,e):new Lh(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Dh(o),hd(t,f)),t=f}}}var Ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);I_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ud(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var L_=37297,D_=0;function U_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var fd=new rt;function N_(i){dt._getMatrix(fd,dt.workingColorSpace,i);let e=`mat3( ${fd.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case _r:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function dd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+U_(i.getShaderSource(e),o)}else return r}function F_(i,e){let t=N_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var B_={[Qr]:"Linear",[jr]:"Reinhard",[ea]:"Cineon",[ta]:"ACESFilmic",[ia]:"AgX",[Ki]:"Neutral",[na]:"Custom"};function O_(i,e){let t=B_[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ul=new D;function H_(){dt.getLuminanceCoefficients(Ul);let i=Ul.x.toFixed(4),e=Ul.y.toFixed(4),t=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function G_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function k_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ma(i){return i!==""}function pd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function md(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var V_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(i){return i.replace(V_,X_)}var W_=new Map;function X_(i,e){let t=ft[e];if(t===void 0){let n=W_.get(e);if(n!==void 0)t=ft[n],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Uh(t)}var q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gd(i){return i.replace(q_,Y_)}function Y_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Z_={[Kr]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function $_(i){return Z_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var J_={[Li]:"ENVMAP_TYPE_CUBE",[Qi]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE_UV"};function K_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":J_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Q_={[Qi]:"ENVMAP_MODE_REFRACTION"};function j_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Q_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ey={[Wo]:"ENVMAP_BLENDING_MULTIPLY",[If]:"ENVMAP_BLENDING_MIX",[Lf]:"ENVMAP_BLENDING_ADD"};function ty(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ey[i.combine]||"ENVMAP_BLENDING_NONE"}function ny(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function iy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=$_(t),c=K_(t),h=j_(t),f=ty(t),u=ny(t),p=z_(t),m=G_(r),v=s.createProgram(),g,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ma).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ma).join(`
`),d.length>0&&(d+=`
`)):(g=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),d=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?ft.tonemapping_pars_fragment:"",t.toneMapping!==Vn?O_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,F_("linearToOutputTexel",t.outputColorSpace),H_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),a=Uh(a),a=pd(a,t),a=md(a,t),o=Uh(o),o=pd(o,t),o=md(o,t),a=gd(a),o=gd(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let b=x+g+a,_=x+d+o,E=ud(s,s.VERTEX_SHADER,b),T=ud(s,s.FRAGMENT_SHADER,_);s.attachShader(v,E),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(I){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(v)||"",C=s.getShaderInfoLog(E)||"",P=s.getShaderInfoLog(T)||"",H=N.trim(),F=C.trim(),B=P.trim(),G=!0,V=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,E,T);else{let X=dd(s,E,"vertex"),O=dd(s,T,"fragment");tt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+X+`
`+O)}else H!==""?je("WebGLProgram: Program Info Log:",H):(F===""||B==="")&&(V=!1);V&&(I.diagnostics={runnable:G,programLog:H,vertexShader:{log:F,prefix:g},fragmentShader:{log:B,prefix:d}})}s.deleteShader(E),s.deleteShader(T),y=new Ys(s,v),M=k_(s,v)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(v,L_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=T,this}var sy=0,Nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Fh(e),t.set(e,n)),n}},Fh=class{constructor(e){this.id=sy++,this.code=e,this.usedTimes=0}};function ry(i){return i===Ni||i===ha||i===ua}function ay(i,e,t,n,s,r){let a=new Er,o=new Nh,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,M,A,I,N,C){let P=I.fog,H=N.geometry,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,G=e.get(y.envMap||F,B),V=G&&G.mapping===sa?G.image.height:null,X=p[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&je("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let O=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,$=O!==void 0?O.length:0,ie=0;H.morphAttributes.position!==void 0&&(ie=1),H.morphAttributes.normal!==void 0&&(ie=2),H.morphAttributes.color!==void 0&&(ie=3);let Ee,_e,Ne,J;if(X){let Dt=si[X];Ee=Dt.vertexShader,_e=Dt.fragmentShader}else{Ee=y.vertexShader,_e=y.fragmentShader;let Dt=o.getVertexShaderStage(y),Et=o.getFragmentShaderStage(y);o.update(y,Dt,Et),Ne=Dt.id,J=Et.id}let re=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Le=N.isInstancedMesh===!0,ge=N.isBatchedMesh===!0,Fe=!!y.map,ht=!!y.matcap,oe=!!G,fe=!!y.aoMap,he=!!y.lightMap,pe=!!y.bumpMap&&y.wireframe===!1,Me=!!y.normalMap,Z=!!y.displacementMap,q=!!y.emissiveMap,be=!!y.metalnessMap,Te=!!y.roughnessMap,U=y.anisotropy>0,_t=y.clearcoat>0,st=y.dispersion>0,L=y.retroreflectivity>0,S=y.iridescence>0,Y=y.sheen>0,j=y.transmission>0,ee=U&&!!y.anisotropyMap,ve=_t&&!!y.clearcoatMap,me=_t&&!!y.clearcoatNormalMap,ae=_t&&!!y.clearcoatRoughnessMap,ue=S&&!!y.iridescenceMap,we=S&&!!y.iridescenceThicknessMap,Ye=Y&&!!y.sheenColorMap,Pe=Y&&!!y.sheenRoughnessMap,Re=!!y.specularMap,Ze=!!y.specularColorMap,et=!!y.specularIntensityMap,ot=j&&!!y.transmissionMap,W=j&&!!y.thicknessMap,Ae=!!y.gradientMap,ce=!!y.alphaMap,Ce=y.alphaTest>0,Be=!!y.alphaHash,de=!!y.extensions,Je=Vn;y.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Je=i.toneMapping);let We={shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:Ee,fragmentShader:_e,defines:y.defines,customVertexShaderID:Ne,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:ge,batchingColor:ge&&N._colorsTexture!==null,instancing:Le,instancingColor:Le&&N.instanceColor!==null,instancingMorph:Le&&N.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Fe,matcap:ht,envMap:oe,envMapMode:oe&&G.mapping,envMapCubeUVHeight:V,aoMap:fe,lightMap:he,bumpMap:pe,normalMap:Me,displacementMap:Z,emissiveMap:q,normalMapObjectSpace:Me&&y.normalMapType===Nf,normalMapTangentSpace:Me&&y.normalMapType===fa,packedNormalMap:Me&&y.normalMapType===fa&&ry(y.normalMap.format),metalnessMap:be,roughnessMap:Te,anisotropy:U,anisotropyMap:ee,clearcoat:_t,clearcoatMap:ve,clearcoatNormalMap:me,clearcoatRoughnessMap:ae,dispersion:st,retroreflection:L,iridescence:S,iridescenceMap:ue,iridescenceThicknessMap:we,sheen:Y,sheenColorMap:Ye,sheenRoughnessMap:Pe,specularMap:Re,specularColorMap:Ze,specularIntensityMap:et,transmission:j,transmissionMap:ot,thicknessMap:W,gradientMap:Ae,opaque:y.transparent===!1&&y.blending===ks&&y.alphaToCoverage===!1,alphaMap:ce,alphaTest:Ce,alphaHash:Be,combine:y.combine,mapUv:Fe&&m(y.map.channel),aoMapUv:fe&&m(y.aoMap.channel),lightMapUv:he&&m(y.lightMap.channel),bumpMapUv:pe&&m(y.bumpMap.channel),normalMapUv:Me&&m(y.normalMap.channel),displacementMapUv:Z&&m(y.displacementMap.channel),emissiveMapUv:q&&m(y.emissiveMap.channel),metalnessMapUv:be&&m(y.metalnessMap.channel),roughnessMapUv:Te&&m(y.roughnessMap.channel),anisotropyMapUv:ee&&m(y.anisotropyMap.channel),clearcoatMapUv:ve&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&m(y.sheenRoughnessMap.channel),specularMapUv:Re&&m(y.specularMap.channel),specularColorMapUv:Ze&&m(y.specularColorMap.channel),specularIntensityMapUv:et&&m(y.specularIntensityMap.channel),transmissionMapUv:ot&&m(y.transmissionMap.channel),thicknessMapUv:W&&m(y.thicknessMap.channel),alphaMapUv:ce&&m(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Me||U),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(Fe||ce),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&Me===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Se,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ie,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,decodeVideoTexture:Fe&&y.map.isVideoTexture===!0&&dt.getTransfer(y.map.colorSpace)===bt,decodeVideoTextureEmissive:q&&y.emissiveMap.isVideoTexture===!0&&dt.getTransfer(y.emissiveMap.colorSpace)===bt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===at,flipSided:y.side===cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:de&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&y.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function g(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let A in y.defines)M.push(A),M.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(d(M,y),x(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function d(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numSunLights),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numSunLightShadows),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function x(y,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function b(y){let M=p[y.type],A;if(M){let I=si[M];A=xi.clone(I.uniforms)}else A=y.uniforms;return A}function _(y,M){let A=h.get(M);return A!==void 0?++A.usedTimes:(A=new iy(i,M,y,s),c.push(A),h.set(M,A)),A}function E(y){if(--y.usedTimes===0){let M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:b,acquireProgram:_,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:w}}function oy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ly(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function _d(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,m,v,g,d){let x=i[e];return x===void 0?(x={id:u.id,object:u,geometry:p,material:m,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:g,group:d},i[e]=x):(x.id=u.id,x.object=u,x.geometry=p,x.material=m,x.materialVariant=a(u),x.groupOrder=v,x.renderOrder=u.renderOrder,x.z=g,x.group=d),e++,x}function l(u,p,m,v,g,d,x){x.reversedDepth===!0&&(g=-g);let b=o(u,p,m,v,g,d);m.transmission>0?n.push(b):m.transparent===!0?s.push(b):t.push(b)}function c(u,p,m,v,g,d){let x=o(u,p,m,v,g,d);m.transmission>0?n.unshift(x):m.transparent===!0?s.unshift(x):t.unshift(x)}function h(u,p){t.length>1&&t.sort(u||ly),n.length>1&&n.sort(p||_d),s.length>1&&s.sort(p||_d)}function f(){for(let u=e,p=i.length;u<p;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function cy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new yd,i.set(n,[a])):s>=r.length?(a=new yd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function hy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new ye};break;case"SpotLight":t={position:new D,direction:new D,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function uy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var fy=0;function dy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function py(i){let e=new hy,t=uy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new Ge,a=new Ge;function o(c){let h=0,f=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let p=0,m=0,v=0,g=0,d=0,x=0,b=0,_=0,E=0,T=0,w=0,y=0,M=0,A=0;c.sort(dy);for(let N=0,C=c.length;N<C;N++){let P=c[N],H=P.color,F=P.intensity,B=P.distance,G=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ni?G=P.shadow.map.texture:G=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=H.r*F,f+=H.g*F,u+=H.b*F;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],F);A++}else if(P.isSunLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,O=t.get(P);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[m]=O,n.sunShadowMap[m]=G;let $=X.getViewportCount();for(let ie=0;ie<$;ie++)n.sunShadowMatrix[v+ie]=X.getMatrix(ie),n.sunShadowCascade[v+ie]=X._cascadeData[ie];v+=$,m++}n.sun[p]=V,p++}else if(P.isDirectionalLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,O=t.get(P);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,n.directionalShadow[g]=O,n.directionalShadowMap[g]=G,n.directionalShadowMatrix[g]=P.shadow.matrix,E++}n.directional[g]=V,g++}else if(P.isSpotLight){let V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(H).multiplyScalar(F),V.distance=B,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[x]=V;let X=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,X.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[x]=X.matrix,P.castShadow){let O=t.get(P);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,n.spotShadow[x]=O,n.spotShadowMap[x]=G,w++}x++}else if(P.isRectAreaLight){let V=e.get(P);V.color.copy(H).multiplyScalar(F),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[b]=V,b++}else if(P.isPointLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){let X=P.shadow,O=t.get(P);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,O.shadowCameraNear=X.camera.near,O.shadowCameraFar=X.camera.far,n.pointShadow[d]=O,n.pointShadowMap[d]=G,n.pointShadowMatrix[d]=P.shadow.matrix,T++}n.point[d]=V,d++}else if(P.isHemisphereLight){let V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(F),V.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[_]=V,_++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let I=n.hash;(I.sunLength!==p||I.directionalLength!==g||I.pointLength!==d||I.spotLength!==x||I.rectAreaLength!==b||I.hemiLength!==_||I.numSunShadows!==m||I.numDirectionalShadows!==E||I.numPointShadows!==T||I.numSpotShadows!==w||I.numSpotMaps!==y||I.numLightProbes!==A)&&(n.sun.length=p,n.directional.length=g,n.spot.length=x,n.rectArea.length=b,n.point.length=d,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+y-M,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=A,I.sunLength=p,I.directionalLength=g,I.pointLength=d,I.spotLength=x,I.rectAreaLength=b,I.hemiLength=_,I.numSunShadows=m,I.numDirectionalShadows=E,I.numPointShadows=T,I.numSpotShadows=w,I.numSpotMaps=y,I.numLightProbes=A,n.version=fy++)}function l(c,h){let f=0,u=0,p=0,m=0,v=0,g=0,d=h.matrixWorldInverse;for(let x=0,b=c.length;x<b;x++){let _=c[x];if(_.isSunLight){let E=n.sun[f];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(d),f++}else if(_.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),u++}else if(_.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),m++}else if(_.isRectAreaLight){let E=n.rectArea[v];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(d),a.identity(),r.copy(_.matrixWorld),r.premultiply(d),a.extractRotation(r),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){let E=n.point[p];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:n}}function vd(i){let e=new py(i),t=[],n=[],s=[];function r(u){f.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function my(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new vd(i),e.set(s,[o])):r>=a.length?(o=new vd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xy=`uniform sampler2D shadow_pass;
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
}`,_y=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],yy=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Md=new Ge,pa=new D,Ch=new D;function vy(i,e,t){let n=new Ds,s=new le,r=new le,a=new Nt,o=new Ao,l=new Co,c={},h=t.maxTextureSize,f={[Ii]:cn,[cn]:Ii,[at]:at},u=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:gy,fragmentShader:xy}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let m=new lt;m.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new te(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kr;let d=this.type;this.render=function(T,w,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Vo&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Kr);let M=i.getRenderTarget(),A=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ln),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let C=d!==this.type;C&&w.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(H=>H.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,H=T.length;P<H;P++){let F=T[P],B=F.shadow;if(B===void 0){je("WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let G=B.getFrameExtents();s.multiply(G),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,B.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=V,B.map===null||C===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Gs){if(F.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Vt(s.x,s.y,{format:Ni,type:Kt,minFilter:on,magFilter:on,generateMipmaps:!1}),B.map.texture.name=F.name+".shadowMap",B.map.depthTexture=new Ri(s.x,s.y,Dn),B.map.depthTexture.name=F.name+".shadowMapDepth",B.map.depthTexture.format=Qn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=sn,B.map.depthTexture.magFilter=sn}else F.isPointLight?(B.map=new Fl(s.x),B.map.depthTexture=new vo(s.x,Wn)):(B.map=new Vt(s.x,s.y),B.map.depthTexture=new Ri(s.x,s.y,Wn)),B.map.depthTexture.name=F.name+".shadowMap",B.map.depthTexture.format=Qn,this.type===Kr?(B.map.depthTexture.compareFunction=V?Ll:Il,B.map.depthTexture.minFilter=on,B.map.depthTexture.magFilter=on):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=sn,B.map.depthTexture.magFilter=sn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let X=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();F.isPointLight!==!0&&B.updateMatrices(F,y);for(let O=0;O<X;O++){let $=B.getCamera(O);if(F.isPointLight){let ie=B.camera,Ee=B.matrix,_e=F.distance||ie.far;_e!==ie.far&&(ie.far=_e,ie.updateProjectionMatrix()),pa.setFromMatrixPosition(F.matrixWorld),ie.position.copy(pa),Ch.copy(ie.position),Ch.add(_y[O]),ie.up.copy(yy[O]),ie.lookAt(Ch),ie.updateMatrixWorld(),Ee.makeTranslation(-pa.x,-pa.y,-pa.z),Md.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Md,ie.coordinateSystem,ie.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,O),i.clear();else{O===0&&(i.setRenderTarget(B.map),i.clear());let ie=B.getViewport(O);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),N.viewport(a)}n=B.getFrustum(O),_(w,y,$,F,this.type)}B.isPointLightShadow!==!0&&this.type===Gs&&x(B,y),B.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(M,A,I)};function x(T,w){let y=e.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Vt(s.x,s.y,{format:Ni,type:Kt}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,y,u,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,y,p,v,null)}function b(T,w,y,M){let A=null,I=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)A=I;else if(A=y.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let N=A.uuid,C=w.uuid,P=c[N];P===void 0&&(P={},c[N]=P);let H=P[C];H===void 0&&(H=A.clone(),P[C]=H,w.addEventListener("dispose",E)),A=H}if(A.visible=w.visible,A.wireframe=w.wireframe,M===Gs?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:f[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let N=i.properties.get(A);N.light=y}return A}function _(T,w,y,M,A){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===Gs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let C=e.update(T),P=T.material;if(Array.isArray(P)){let H=C.groups;for(let F=0,B=H.length;F<B;F++){let G=H[F],V=P[G.materialIndex];if(V&&V.visible){let X=b(T,V,M,A);T.onBeforeShadow(i,T,w,y,C,X,G),i.renderBufferDirect(y,null,C,X,T,G),T.onAfterShadow(i,T,w,y,C,X,G)}}}else if(P.visible){let H=b(T,P,M,A);T.onBeforeShadow(i,T,w,y,C,H,null),i.renderBufferDirect(y,null,C,H,T,null),T.onAfterShadow(i,T,w,y,C,H,null)}}let N=T.children;for(let C=0,P=N.length;C<P;C++)_(N[C],w,y,M,A)}function E(T){T.target.removeEventListener("dispose",E);for(let y in c){let M=c[y],A=T.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function My(i,e){function t(){let W=!1,Ae=new Nt,ce=null,Ce=new Nt(0,0,0,0);return{setMask:function(Be){ce!==Be&&!W&&(i.colorMask(Be,Be,Be,Be),ce=Be)},setLocked:function(Be){W=Be},setClear:function(Be,de,Je,We,Dt){Dt===!0&&(Be*=We,de*=We,Je*=We),Ae.set(Be,de,Je,We),Ce.equals(Ae)===!1&&(i.clearColor(Be,de,Je,We),Ce.copy(Ae))},reset:function(){W=!1,ce=null,Ce.set(-1,0,0,0)}}}function n(){let W=!1,Ae=!1,ce=null,Ce=null,Be=null;return{setReversed:function(de){if(Ae!==de){let Je=e.get("EXT_clip_control");de?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Ae=de;let We=Be;Be=null,this.setClear(We)}},getReversed:function(){return Ae},setTest:function(de){de?re(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(de){ce!==de&&!W&&(i.depthMask(de),ce=de)},setFunc:function(de){if(Ae&&(de=qf[de]),Ce!==de){switch(de){case io:i.depthFunc(i.NEVER);break;case so:i.depthFunc(i.ALWAYS);break;case ro:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case ao:i.depthFunc(i.EQUAL);break;case oo:i.depthFunc(i.GEQUAL);break;case lo:i.depthFunc(i.GREATER);break;case co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=de}},setLocked:function(de){W=de},setClear:function(de){Be!==de&&(Be=de,Ae&&(de=1-de),i.clearDepth(de))},reset:function(){W=!1,ce=null,Ce=null,Be=null,Ae=!1}}}function s(){let W=!1,Ae=null,ce=null,Ce=null,Be=null,de=null,Je=null,We=null,Dt=null;return{setTest:function(Et){W||(Et?re(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(Et){Ae!==Et&&!W&&(i.stencilMask(Et),Ae=Et)},setFunc:function(Et,Bn,Yn){(ce!==Et||Ce!==Bn||Be!==Yn)&&(i.stencilFunc(Et,Bn,Yn),ce=Et,Ce=Bn,Be=Yn)},setOp:function(Et,Bn,Yn){(de!==Et||Je!==Bn||We!==Yn)&&(i.stencilOp(Et,Bn,Yn),de=Et,Je=Bn,We=Yn)},setLocked:function(Et){W=Et},setClear:function(Et){Dt!==Et&&(i.clearStencil(Et),Dt=Et)},reset:function(){W=!1,Ae=null,ce=null,Ce=null,Be=null,de=null,Je=null,We=null,Dt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},p=new WeakMap,m=[],v=null,g=!1,d=null,x=null,b=null,_=null,E=null,T=null,w=null,y=new ye(0,0,0),M=0,A=!1,I=null,N=null,C=null,P=null,H=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,G=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=G>=1):V.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=G>=2);let X=null,O={},$=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),Ee=new Nt().fromArray($),_e=new Nt().fromArray(ie);function Ne(W,Ae,ce,Ce){let Be=new Uint8Array(4),de=i.createTexture();i.bindTexture(W,de),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<ce;Je++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,Be):i.texImage2D(Ae+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Be);return de}let J={};J[i.TEXTURE_2D]=Ne(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(ws),pe(!1),Me(eh),re(i.CULL_FACE),fe(Ln);function re(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function Se(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function Le(W,Ae){return u[W]!==Ae?(i.bindFramebuffer(W,Ae),u[W]=Ae,W===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ae),W===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function ge(W,Ae){let ce=m,Ce=!1;if(W){ce=p.get(Ae),ce===void 0&&(ce=[],p.set(Ae,ce));let Be=W.textures;if(ce.length!==Be.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Je=Be.length;de<Je;de++)ce[de]=i.COLOR_ATTACHMENT0+de;ce.length=Be.length,Ce=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(ce)}function Fe(W){return v!==W?(i.useProgram(W),v=W,!0):!1}let ht={[Ji]:i.FUNC_ADD,[pf]:i.FUNC_SUBTRACT,[mf]:i.FUNC_REVERSE_SUBTRACT};ht[gf]=i.MIN,ht[xf]=i.MAX;let oe={[_f]:i.ZERO,[yf]:i.ONE,[vf]:i.SRC_COLOR,[ih]:i.SRC_ALPHA,[wf]:i.SRC_ALPHA_SATURATE,[Sf]:i.DST_COLOR,[bf]:i.DST_ALPHA,[Mf]:i.ONE_MINUS_SRC_COLOR,[sh]:i.ONE_MINUS_SRC_ALPHA,[Tf]:i.ONE_MINUS_DST_COLOR,[Ef]:i.ONE_MINUS_DST_ALPHA,[Rf]:i.CONSTANT_COLOR,[Af]:i.ONE_MINUS_CONSTANT_COLOR,[Cf]:i.CONSTANT_ALPHA,[Pf]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(W,Ae,ce,Ce,Be,de,Je,We,Dt,Et){if(W===Ln){g===!0&&(Se(i.BLEND),g=!1);return}if(g===!1&&(re(i.BLEND),g=!0),W!==df){if(W!==d||Et!==A){if((x!==Ji||E!==Ji)&&(i.blendEquation(i.FUNC_ADD),x=Ji,E=Ji),Et)switch(W){case ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wn:i.blendFunc(i.ONE,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:tt("WebGLState: Invalid blending: ",W);break}else switch(W){case ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case th:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nh:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",W);break}b=null,_=null,T=null,w=null,y.set(0,0,0),M=0,d=W,A=Et}return}Be=Be||Ae,de=de||ce,Je=Je||Ce,(Ae!==x||Be!==E)&&(i.blendEquationSeparate(ht[Ae],ht[Be]),x=Ae,E=Be),(ce!==b||Ce!==_||de!==T||Je!==w)&&(i.blendFuncSeparate(oe[ce],oe[Ce],oe[de],oe[Je]),b=ce,_=Ce,T=de,w=Je),(We.equals(y)===!1||Dt!==M)&&(i.blendColor(We.r,We.g,We.b,Dt),y.copy(We),M=Dt),d=W,A=!1}function he(W,Ae){W.side===at?Se(i.CULL_FACE):re(i.CULL_FACE);let ce=W.side===cn;Ae&&(ce=!ce),pe(ce),W.blending===ks&&W.transparent===!1?fe(Ln):fe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);let Ce=W.stencilWrite;o.setTest(Ce),Ce&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),q(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function pe(W){I!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),I=W)}function Me(W){W!==uf?(re(i.CULL_FACE),W!==N&&(W===eh?i.cullFace(i.BACK):W===ff?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),N=W}function Z(W){W!==C&&(B&&i.lineWidth(W),C=W)}function q(W,Ae,ce){W?(re(i.POLYGON_OFFSET_FILL),(P!==Ae||H!==ce)&&(P=Ae,H=ce,a.getReversed()&&(Ae=-Ae),i.polygonOffset(Ae,ce))):Se(i.POLYGON_OFFSET_FILL)}function be(W){W?re(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function Te(W){W===void 0&&(W=i.TEXTURE0+F-1),X!==W&&(i.activeTexture(W),X=W)}function U(W,Ae,ce){ce===void 0&&(X===null?ce=i.TEXTURE0+F-1:ce=X);let Ce=O[ce];Ce===void 0&&(Ce={type:void 0,texture:void 0},O[ce]=Ce),(Ce.type!==W||Ce.texture!==Ae)&&(X!==ce&&(i.activeTexture(ce),X=ce),i.bindTexture(W,Ae||J[W]),Ce.type=W,Ce.texture=Ae)}function _t(){let W=O[X];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function st(){try{i.compressedTexImage2D(...arguments)}catch(W){tt("WebGLState:",W)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(W){tt("WebGLState:",W)}}function S(){try{i.texSubImage2D(...arguments)}catch(W){tt("WebGLState:",W)}}function Y(){try{i.texSubImage3D(...arguments)}catch(W){tt("WebGLState:",W)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(W){tt("WebGLState:",W)}}function ee(){try{i.compressedTexSubImage3D(...arguments)}catch(W){tt("WebGLState:",W)}}function ve(){try{i.texStorage2D(...arguments)}catch(W){tt("WebGLState:",W)}}function me(){try{i.texStorage3D(...arguments)}catch(W){tt("WebGLState:",W)}}function ae(){try{i.texImage2D(...arguments)}catch(W){tt("WebGLState:",W)}}function ue(){try{i.texImage3D(...arguments)}catch(W){tt("WebGLState:",W)}}function we(W){return f[W]!==void 0?f[W]:i.getParameter(W)}function Ye(W,Ae){f[W]!==Ae&&(i.pixelStorei(W,Ae),f[W]=Ae)}function Pe(W){Ee.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Ee.copy(W))}function Re(W){_e.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),_e.copy(W))}function Ze(W,Ae){let ce=c.get(Ae);ce===void 0&&(ce=new WeakMap,c.set(Ae,ce));let Ce=ce.get(W);Ce===void 0&&(Ce=i.getUniformBlockIndex(Ae,W.name),ce.set(W,Ce))}function et(W,Ae){let Ce=c.get(Ae).get(W);l.get(Ae)!==Ce&&(i.uniformBlockBinding(Ae,Ce,W.__bindingPointIndex),l.set(Ae,Ce))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},X=null,O={},u={},p=new WeakMap,m=[],v=null,g=!1,d=null,x=null,b=null,_=null,E=null,T=null,w=null,y=new ye(0,0,0),M=0,A=!1,I=null,N=null,C=null,P=null,H=null,Ee.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:Se,bindFramebuffer:Le,drawBuffers:ge,useProgram:Fe,setBlending:fe,setMaterial:he,setFlipSided:pe,setCullFace:Me,setLineWidth:Z,setPolygonOffset:q,setScissorTest:be,activeTexture:Te,bindTexture:U,unbindTexture:_t,compressedTexImage2D:st,compressedTexImage3D:L,texImage2D:ae,texImage3D:ue,pixelStorei:Ye,getParameter:we,updateUBOMapping:Ze,uniformBlockBinding:et,texStorage2D:ve,texStorage3D:me,texSubImage2D:S,texSubImage3D:Y,compressedTexSubImage2D:j,compressedTexSubImage3D:ee,scissor:Pe,viewport:Re,reset:ot}}function by(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,f=new Set,u,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,S){return m?new OffscreenCanvas(L,S):yr("canvas")}function g(L,S,Y){let j=1,ee=st(L);if((ee.width>Y||ee.height>Y)&&(j=Y/Math.max(ee.width,ee.height)),j<1)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let ve=Math.floor(j*ee.width),me=Math.floor(j*ee.height);u===void 0&&(u=v(ve,me));let ae=S?v(ve,me):u;return ae.width=ve,ae.height=me,ae.getContext("2d").drawImage(L,0,0,ve,me),je("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ve+"x"+me+")."),ae}else return"data"in L&&je("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),L;return L}function d(L){return L.generateMipmaps}function x(L){i.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(L,S,Y,j,ee,ve=!1){if(L!==null){if(i[L]!==void 0)return i[L];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let me;j&&(me=e.get("EXT_texture_norm16"),me||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=S;if(S===i.RED&&(Y===i.FLOAT&&(ae=i.R32F),Y===i.HALF_FLOAT&&(ae=i.R16F),Y===i.UNSIGNED_BYTE&&(ae=i.R8),Y===i.UNSIGNED_SHORT&&me&&(ae=me.R16_EXT),Y===i.SHORT&&me&&(ae=me.R16_SNORM_EXT)),S===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ae=i.R8UI),Y===i.UNSIGNED_SHORT&&(ae=i.R16UI),Y===i.UNSIGNED_INT&&(ae=i.R32UI),Y===i.BYTE&&(ae=i.R8I),Y===i.SHORT&&(ae=i.R16I),Y===i.INT&&(ae=i.R32I)),S===i.RG&&(Y===i.FLOAT&&(ae=i.RG32F),Y===i.HALF_FLOAT&&(ae=i.RG16F),Y===i.UNSIGNED_BYTE&&(ae=i.RG8),Y===i.UNSIGNED_SHORT&&me&&(ae=me.RG16_EXT),Y===i.SHORT&&me&&(ae=me.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ae=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ae=i.RG16UI),Y===i.UNSIGNED_INT&&(ae=i.RG32UI),Y===i.BYTE&&(ae=i.RG8I),Y===i.SHORT&&(ae=i.RG16I),Y===i.INT&&(ae=i.RG32I)),S===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),Y===i.UNSIGNED_INT&&(ae=i.RGB32UI),Y===i.BYTE&&(ae=i.RGB8I),Y===i.SHORT&&(ae=i.RGB16I),Y===i.INT&&(ae=i.RGB32I)),S===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ae=i.RGBA32UI),Y===i.BYTE&&(ae=i.RGBA8I),Y===i.SHORT&&(ae=i.RGBA16I),Y===i.INT&&(ae=i.RGBA32I)),S===i.RGB&&(Y===i.UNSIGNED_SHORT&&me&&(ae=me.RGB16_EXT),Y===i.SHORT&&me&&(ae=me.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(ae=i.R11F_G11F_B10F)),S===i.RGBA){let ue=ve?_r:dt.getTransfer(ee);Y===i.FLOAT&&(ae=i.RGBA32F),Y===i.HALF_FLOAT&&(ae=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ae=ue===bt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&me&&(ae=me.RGBA16_EXT),Y===i.SHORT&&me&&(ae=me.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function E(L,S){let Y;return L?S===null||S===Wn||S===Ws?Y=i.DEPTH24_STENCIL8:S===Dn?Y=i.DEPTH32F_STENCIL8:S===Vs&&(Y=i.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Wn||S===Ws?Y=i.DEPTH_COMPONENT24:S===Dn?Y=i.DEPTH_COMPONENT32F:S===Vs&&(Y=i.DEPTH_COMPONENT16),Y}function T(L,S){return d(L)===!0||L.isFramebufferTexture&&L.minFilter!==sn&&L.minFilter!==on?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function w(L){let S=L.target;S.removeEventListener("dispose",w),M(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&f.delete(S)}function y(L){let S=L.target;S.removeEventListener("dispose",y),I(S)}function M(L){let S=n.get(L);if(S.__webglInit===void 0)return;let Y=L.source,j=p.get(Y);if(j){let ee=j[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&A(L),Object.keys(j).length===0&&p.delete(Y)}n.remove(L)}function A(L){let S=n.get(L);i.deleteTexture(S.__webglTexture);let Y=L.source,j=p.get(Y);delete j[S.__cacheKey],a.memory.textures--}function I(L){let S=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let ee=0;ee<S.__webglFramebuffer[j].length;ee++)i.deleteFramebuffer(S.__webglFramebuffer[j][ee]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let Y=L.textures;for(let j=0,ee=Y.length;j<ee;j++){let ve=n.get(Y[j]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(Y[j])}n.remove(L)}let N=0;function C(){N=0}function P(){return N}function H(L){N=L}function F(){let L=N;return L>=s.maxTextures&&je("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,L}function B(L){let S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function G(L,S){let Y=n.get(L);if(L.isVideoTexture&&U(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Y.__version!==L.version){let j=L.image;if(j===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(Y,L,S);return}}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+S)}function V(L,S){let Y=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){Se(Y,L,S);return}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+S)}function X(L,S){let Y=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){Se(Y,L,S);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+S)}function O(L,S){let Y=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&Y.__version!==L.version){Le(Y,L,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+S)}let $={[Jt]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[ho]:i.MIRRORED_REPEAT},ie={[sn]:i.NEAREST,[Df]:i.NEAREST_MIPMAP_NEAREST,[ra]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Yo]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},Ee={[Bf]:i.NEVER,[kf]:i.ALWAYS,[Of]:i.LESS,[Il]:i.LEQUAL,[Hf]:i.EQUAL,[Ll]:i.GEQUAL,[zf]:i.GREATER,[Gf]:i.NOTEQUAL};function _e(L,S){if(S.type===Dn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===on||S.magFilter===Yo||S.magFilter===ra||S.magFilter===Di||S.minFilter===on||S.minFilter===Yo||S.minFilter===ra||S.minFilter===Di)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,$[S.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,$[S.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,$[S.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ie[S.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ie[S.minFilter]),S.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Ee[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===sn||S.minFilter!==ra&&S.minFilter!==Di||S.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ne(L,S){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",w));let j=S.source,ee=p.get(j);ee===void 0&&(ee={},p.set(j,ee));let ve=B(S);if(ve!==L.__cacheKey){ee[ve]===void 0&&(ee[ve]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ee[ve].usedTimes++;let me=ee[L.__cacheKey];me!==void 0&&(ee[L.__cacheKey].usedTimes--,me.usedTimes===0&&A(S)),L.__cacheKey=ve,L.__webglTexture=ee[ve].texture}return Y}function J(L,S,Y){return Math.floor(Math.floor(L/Y)/S)}function re(L,S,Y,j){let ve=L.updateRanges;if(ve.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,Y,j,S.data);else{ve.sort((Ye,Pe)=>Ye.start-Pe.start);let me=0;for(let Ye=1;Ye<ve.length;Ye++){let Pe=ve[me],Re=ve[Ye],Ze=Pe.start+Pe.count,et=J(Re.start,S.width,4),ot=J(Pe.start,S.width,4);Re.start<=Ze+1&&et===ot&&J(Re.start+Re.count-1,S.width,4)===et?Pe.count=Math.max(Pe.count,Re.start+Re.count-Pe.start):(++me,ve[me]=Re)}ve.length=me+1;let ae=t.getParameter(i.UNPACK_ROW_LENGTH),ue=t.getParameter(i.UNPACK_SKIP_PIXELS),we=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Ye=0,Pe=ve.length;Ye<Pe;Ye++){let Re=ve[Ye],Ze=Math.floor(Re.start/4),et=Math.ceil(Re.count/4),ot=Ze%S.width,W=Math.floor(Ze/S.width),Ae=et,ce=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,ot,W,Ae,ce,Y,j,S.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ae),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function Se(L,S,Y){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);let ee=Ne(L,S),ve=S.source;t.bindTexture(j,L.__webglTexture,i.TEXTURE0+Y);let me=n.get(ve);if(ve.version!==me.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap!="undefined"&&S.image instanceof ImageBitmap)===!1){let ce=dt.getPrimaries(dt.workingColorSpace),Ce=S.colorSpace===xn?null:dt.getPrimaries(S.colorSpace),Be=S.colorSpace===xn||ce===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let ue=g(S.image,!1,s.maxTextureSize);ue=_t(S,ue);let we=r.convert(S.format,S.colorSpace),Ye=r.convert(S.type),Pe=_(S.internalFormat,we,Ye,S.normalized,S.colorSpace,S.isVideoTexture);_e(j,S);let Re,Ze=S.mipmaps,et=S.isVideoTexture!==!0,ot=me.__version===void 0||ee===!0,W=ve.dataReady,Ae=T(S,ue);if(S.isDepthTexture)Pe=E(S.format===Ui,S.type),ot&&(et?t.texStorage2D(i.TEXTURE_2D,1,Pe,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Pe,ue.width,ue.height,0,we,Ye,null));else if(S.isDataTexture)if(Ze.length>0){et&&ot&&t.texStorage2D(i.TEXTURE_2D,Ae,Pe,Ze[0].width,Ze[0].height);for(let ce=0,Ce=Ze.length;ce<Ce;ce++)Re=Ze[ce],et?W&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Re.width,Re.height,we,Ye,Re.data):t.texImage2D(i.TEXTURE_2D,ce,Pe,Re.width,Re.height,0,we,Ye,Re.data);S.generateMipmaps=!1}else et?(ot&&t.texStorage2D(i.TEXTURE_2D,Ae,Pe,ue.width,ue.height),W&&re(S,ue,we,Ye)):t.texImage2D(i.TEXTURE_2D,0,Pe,ue.width,ue.height,0,we,Ye,ue.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){et&&ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Pe,Ze[0].width,Ze[0].height,ue.depth);for(let ce=0,Ce=Ze.length;ce<Ce;ce++)if(Re=Ze[ce],S.format!==Un)if(we!==null)if(et){if(W)if(S.layerUpdates.size>0){let Be=_h(Re.width,Re.height,S.format,S.type);for(let de of S.layerUpdates){let Je=Re.data.subarray(de*Be/Re.data.BYTES_PER_ELEMENT,(de+1)*Be/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,de,Re.width,Re.height,1,we,Je)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Re.width,Re.height,ue.depth,we,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,Pe,Re.width,Re.height,ue.depth,0,Re.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Re.width,Re.height,ue.depth,we,Ye,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,Pe,Re.width,Re.height,ue.depth,0,we,Ye,Re.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{et&&ot&&t.texStorage2D(i.TEXTURE_2D,Ae,Pe,Ze[0].width,Ze[0].height);for(let ce=0,Ce=Ze.length;ce<Ce;ce++)Re=Ze[ce],S.format!==Un?we!==null?et?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,Re.width,Re.height,we,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,Pe,Re.width,Re.height,0,Re.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?W&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Re.width,Re.height,we,Ye,Re.data):t.texImage2D(i.TEXTURE_2D,ce,Pe,Re.width,Re.height,0,we,Ye,Re.data)}else if(S.isDataArrayTexture)if(et){if(ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Pe,ue.width,ue.height,ue.depth),W)if(S.layerUpdates.size>0){let ce=_h(ue.width,ue.height,S.format,S.type);for(let Ce of S.layerUpdates){let Be=ue.data.subarray(Ce*ce/ue.data.BYTES_PER_ELEMENT,(Ce+1)*ce/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ce,ue.width,ue.height,1,we,Ye,Be)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,we,Ye,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,ue.width,ue.height,ue.depth,0,we,Ye,ue.data);else if(S.isData3DTexture)et?(ot&&t.texStorage3D(i.TEXTURE_3D,Ae,Pe,ue.width,ue.height,ue.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,we,Ye,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,ue.width,ue.height,ue.depth,0,we,Ye,ue.data);else if(S.isFramebufferTexture){if(ot)if(et)t.texStorage2D(i.TEXTURE_2D,Ae,Pe,ue.width,ue.height);else{let ce=ue.width,Ce=ue.height;for(let Be=0;Be<Ae;Be++)t.texImage2D(i.TEXTURE_2D,Be,Pe,ce,Ce,0,we,Ye,null),ce>>=1,Ce>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let ce=i.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),ue.parentNode!==ce){ce.appendChild(ue),f.add(S),ce.onpaint=Ce=>{let Be=Ce.changedElements;for(let de of f)Be.includes(de.image)&&(de.needsUpdate=!0)},ce.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ue);else{let Be=i.RGBA,de=i.RGBA,Je=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Be,de,Je,ue)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(et&&ot){let ce=st(Ze[0]);t.texStorage2D(i.TEXTURE_2D,Ae,Pe,ce.width,ce.height)}for(let ce=0,Ce=Ze.length;ce<Ce;ce++)Re=Ze[ce],et?W&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,we,Ye,Re):t.texImage2D(i.TEXTURE_2D,ce,Pe,we,Ye,Re);S.generateMipmaps=!1}else if(et){if(ot){let ce=st(ue);t.texStorage2D(i.TEXTURE_2D,Ae,Pe,ce.width,ce.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Ye,ue)}else t.texImage2D(i.TEXTURE_2D,0,Pe,we,Ye,ue);d(S)&&x(j),me.__version=ve.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function Le(L,S,Y){if(S.image.length!==6)return;let j=Ne(L,S),ee=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+Y);let ve=n.get(ee);if(ee.version!==ve.__version||j===!0){t.activeTexture(i.TEXTURE0+Y);let me=dt.getPrimaries(dt.workingColorSpace),ae=S.colorSpace===xn?null:dt.getPrimaries(S.colorSpace),ue=S.colorSpace===xn||me===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let we=S.isCompressedTexture||S.image[0].isCompressedTexture,Ye=S.image[0]&&S.image[0].isDataTexture,Pe=[];for(let de=0;de<6;de++)!we&&!Ye?Pe[de]=g(S.image[de],!0,s.maxCubemapSize):Pe[de]=Ye?S.image[de].image:S.image[de],Pe[de]=_t(S,Pe[de]);let Re=Pe[0],Ze=r.convert(S.format,S.colorSpace),et=r.convert(S.type),ot=_(S.internalFormat,Ze,et,S.normalized,S.colorSpace),W=S.isVideoTexture!==!0,Ae=ve.__version===void 0||j===!0,ce=ee.dataReady,Ce=T(S,Re);_e(i.TEXTURE_CUBE_MAP,S);let Be;if(we){W&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,ot,Re.width,Re.height);for(let de=0;de<6;de++){Be=Pe[de].mipmaps;for(let Je=0;Je<Be.length;Je++){let We=Be[Je];S.format!==Un?Ze!==null?W?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Je,0,0,We.width,We.height,Ze,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Je,ot,We.width,We.height,0,We.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Je,0,0,We.width,We.height,Ze,et,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Je,ot,We.width,We.height,0,Ze,et,We.data)}}}else{if(Be=S.mipmaps,W&&Ae){Be.length>0&&Ce++;let de=st(Pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,ot,de.width,de.height)}for(let de=0;de<6;de++)if(Ye){W?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Pe[de].width,Pe[de].height,Ze,et,Pe[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ot,Pe[de].width,Pe[de].height,0,Ze,et,Pe[de].data);for(let Je=0;Je<Be.length;Je++){let Dt=Be[Je].image[de].image;W?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Je+1,0,0,Dt.width,Dt.height,Ze,et,Dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Je+1,ot,Dt.width,Dt.height,0,Ze,et,Dt.data)}}else{W?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ze,et,Pe[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ot,Ze,et,Pe[de]);for(let Je=0;Je<Be.length;Je++){let We=Be[Je];W?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Je+1,0,0,Ze,et,We.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Je+1,ot,Ze,et,We.image[de])}}}d(S)&&x(i.TEXTURE_CUBE_MAP),ve.__version=ee.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function ge(L,S,Y,j,ee,ve){let me=r.convert(Y.format,Y.colorSpace),ae=r.convert(Y.type),ue=_(Y.internalFormat,me,ae,Y.normalized,Y.colorSpace),we=n.get(S),Ye=n.get(Y);if(Ye.__renderTarget=S,!we.__hasExternalTextures){let Pe=Math.max(1,S.width>>ve),Re=Math.max(1,S.height>>ve);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ve,ue,Pe,Re,S.depth,0,me,ae,null):t.texImage2D(ee,ve,ue,Pe,Re,0,me,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Te(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ee,Ye.__webglTexture,0,be(S)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ee,Ye.__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(L,S,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,L),S.depthBuffer){let j=S.depthTexture,ee=j&&j.isDepthTexture?j.type:null,ve=E(S.stencilBuffer,ee),me=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Te(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be(S),ve,S.width,S.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,be(S),ve,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ve,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,L)}else{let j=S.textures;for(let ee=0;ee<j.length;ee++){let ve=j[ee],me=r.convert(ve.format,ve.colorSpace),ae=r.convert(ve.type),ue=_(ve.internalFormat,me,ae,ve.normalized,ve.colorSpace);Te(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be(S),ue,S.width,S.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,be(S),ue,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ue,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(L,S,Y){let j=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(S.depthTexture);if(ee.__renderTarget=S,(!ee.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),ee.__webglTexture===void 0){ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),_e(i.TEXTURE_CUBE_MAP,S.depthTexture);let we=r.convert(S.depthTexture.format),Ye=r.convert(S.depthTexture.type),Pe;S.depthTexture.format===Qn?Pe=i.DEPTH_COMPONENT24:S.depthTexture.format===Ui&&(Pe=i.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Pe,S.width,S.height,0,we,Ye,null)}}else G(S.depthTexture,0);let ve=ee.__webglTexture,me=be(S),ae=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,ue=S.depthTexture.format===Ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Qn)Te(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,ae,ve,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ue,ae,ve,0);else if(S.depthTexture.format===Ui)Te(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,ae,ve,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ue,ae,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(L){let S=n.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){let j=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){let ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",ee)};j.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=j}if(L.depthTexture&&!S.__autoAllocateDepthBuffer)if(Y)for(let j=0;j<6;j++)ht(S.__webglFramebuffer[j],L,j);else{let j=L.texture.mipmaps;j&&j.length>0?ht(S.__webglFramebuffer[0],L,0):ht(S.__webglFramebuffer,L,0)}else if(Y){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),Fe(S.__webglDepthbuffer[j],L,!1);else{let ee=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ve)}}else{let j=L.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Fe(S.__webglDepthbuffer,L,!1);else{let ee=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ve)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(L,S,Y){let j=n.get(L);S!==void 0&&ge(j.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&oe(L)}function he(L){let S=L.texture,Y=n.get(L),j=n.get(S);L.addEventListener("dispose",y);let ee=L.textures,ve=L.isWebGLCubeRenderTarget===!0,me=ee.length>1;if(me||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,a.memory.textures++),ve){Y.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[ae]=[];for(let ue=0;ue<S.mipmaps.length;ue++)Y.__webglFramebuffer[ae][ue]=i.createFramebuffer()}else Y.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)Y.__webglFramebuffer[ae]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(me)for(let ae=0,ue=ee.length;ae<ue;ae++){let we=n.get(ee[ae]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&Te(L)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){let ue=ee[ae];Y.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ae]);let we=r.convert(ue.format,ue.colorSpace),Ye=r.convert(ue.type),Pe=_(ue.internalFormat,we,Ye,ue.normalized,ue.colorSpace,L.isXRRenderTarget===!0),Re=be(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Pe,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(Y.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),_e(i.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)ge(Y.__webglFramebuffer[ae][ue],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else ge(Y.__webglFramebuffer[ae],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);d(S)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ae=0,ue=ee.length;ae<ue;ae++){let we=ee[ae],Ye=n.get(we),Pe=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Pe=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Ye.__webglTexture),_e(Pe,we),ge(Y.__webglFramebuffer,L,we,i.COLOR_ATTACHMENT0+ae,Pe,0),d(we)&&x(Pe)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ae=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),_e(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)ge(Y.__webglFramebuffer[ue],L,S,i.COLOR_ATTACHMENT0,ae,ue);else ge(Y.__webglFramebuffer,L,S,i.COLOR_ATTACHMENT0,ae,0);d(S)&&x(ae),t.unbindTexture()}L.depthBuffer&&oe(L)}function pe(L){let S=L.textures;for(let Y=0,j=S.length;Y<j;Y++){let ee=S[Y];if(d(ee)){let ve=b(L),me=n.get(ee).__webglTexture;t.bindTexture(ve,me),x(ve),t.unbindTexture()}}}let Me=[],Z=[];function q(L){if(L.samples>0){if(Te(L)===!1){let S=L.textures,Y=L.width,j=L.height,ee=i.COLOR_BUFFER_BIT,ve=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(L),ae=S.length>1;if(ae)for(let we=0;we<S.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let ue=L.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let we=0;we<S.length;we++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[we]);let Ye=n.get(S[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ye,0)}i.blitFramebuffer(0,0,Y,j,0,0,Y,j,ee,i.NEAREST),l===!0&&(Me.length=0,Z.length=0,Me.push(i.COLOR_ATTACHMENT0+we),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Me.push(ve),Z.push(ve),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let we=0;we<S.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,me.__webglColorRenderbuffer[we]);let Ye=n.get(S[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let S=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function be(L){return Math.min(s.maxSamples,L.samples)}function Te(L){let S=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function U(L){let S=a.render.frame;h.get(L)!==S&&(h.set(L,S),L.update())}function _t(L,S){let Y=L.colorSpace,j=L.format,ee=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==xr&&Y!==xn&&(dt.getTransfer(Y)===bt?(j!==Un||ee!==vn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",Y)),S}function st(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=C,this.getTextureUnits=P,this.setTextureUnits=H,this.setTexture2D=G,this.setTexture2DArray=V,this.setTexture3D=X,this.setTextureCube=O,this.rebindTextures=fe,this.setupRenderTarget=he,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ey(i,e){function t(n,s=xn){let r,a=dt.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===$o)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ch)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ah)return i.BYTE;if(n===oh)return i.SHORT;if(n===Vs)return i.UNSIGNED_SHORT;if(n===Zo)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Kt)return i.HALF_FLOAT;if(n===hh)return i.ALPHA;if(n===uh)return i.RGB;if(n===Un)return i.RGBA;if(n===Qn)return i.DEPTH_COMPONENT;if(n===Ui)return i.DEPTH_STENCIL;if(n===Ko)return i.RED;if(n===Qo)return i.RED_INTEGER;if(n===Ni)return i.RG;if(n===jo)return i.RG_INTEGER;if(n===el)return i.RGBA_INTEGER;if(n===aa||n===oa||n===la||n===ca)if(a===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tl||n===nl||n===il||n===sl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rl||n===al||n===ol||n===ll||n===cl||n===ha||n===hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rl||n===al)return a===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ol)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ll)return r.COMPRESSED_R11_EAC;if(n===cl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ha)return r.COMPRESSED_RG11_EAC;if(n===hl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ul||n===fl||n===dl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl||n===vl||n===Ml||n===bl||n===El||n===Sl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ul)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ml)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_l)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ml)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tl||n===wl||n===Rl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Tl)return a===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Al||n===Cl||n===ua||n===Pl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Al)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ty=`
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

}`,Bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Lr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Lt({vertexShader:Sy,fragmentShader:Ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new te(new Ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oh=class extends jn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,m=null,v=typeof XRWebGLBinding!="undefined",g=new Bh,d={},x=t.getContextAttributes(),b=null,_=null,E=[],T=[],w=new le,y=null,M=null,A=new Qt;A.viewport=new Nt;let I=new Qt;I.viewport=new Nt;let N=[A,I],C=new Go,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let re=E[J];return re===void 0&&(re=new Ps,E[J]=re),re.getTargetRaySpace()},this.getControllerGrip=function(J){let re=E[J];return re===void 0&&(re=new Ps,E[J]=re),re.getGripSpace()},this.getHand=function(J){let re=E[J];return re===void 0&&(re=new Ps,E[J]=re),re.getHandSpace()};function F(J){let re=T.indexOf(J.inputSource);if(re===-1)return;let Se=E[re];Se!==void 0&&(Se.update(J.inputSource,J.frame,c||a),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",G);for(let J=0;J<E.length;J++){let re=T[J];re!==null&&(T[J]=null,E[J].disconnect(re))}P=null,H=null,g.reset();for(let J in d)delete d[J];if(e.setRenderTarget(b),p=null,u=null,f=null,s=null,_=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(w.width,w.height,!1),M!==null){let J=M.camera;J.fov=M.fov,J.zoom=M.zoom,J.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",B),s.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Le=null,ge=null;x.depth&&(ge=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=x.stencil?Ui:Qn,Le=x.stencil?Ws:Wn);let Fe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Fe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Vt(u.textureWidth,u.textureHeight,{format:Un,type:vn,depthTexture:new Ri(u.textureWidth,u.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Vt(p.framebufferWidth,p.framebufferHeight,{format:Un,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(J){for(let re=0;re<J.removed.length;re++){let Se=J.removed[re],Le=T.indexOf(Se);Le>=0&&(T[Le]=null,E[Le].disconnect(Se))}for(let re=0;re<J.added.length;re++){let Se=J.added[re],Le=T.indexOf(Se);if(Le===-1){for(let Fe=0;Fe<E.length;Fe++)if(Fe>=T.length){T.push(Se),Le=Fe;break}else if(T[Fe]===null){T[Fe]=Se,Le=Fe;break}if(Le===-1)break}let ge=E[Le];ge&&ge.connect(Se)}}let V=new D,X=new D;function O(J,re,Se){V.setFromMatrixPosition(re.matrixWorld),X.setFromMatrixPosition(Se.matrixWorld);let Le=V.distanceTo(X),ge=re.projectionMatrix.elements,Fe=Se.projectionMatrix.elements,ht=ge[14]/(ge[10]-1),oe=ge[14]/(ge[10]+1),fe=(ge[9]+1)/ge[5],he=(ge[9]-1)/ge[5],pe=(ge[8]-1)/ge[0],Me=(Fe[8]+1)/Fe[0],Z=ht*pe,q=ht*Me,be=Le/(-pe+Me),Te=be*-pe;if(re.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Te),J.translateZ(be),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ge[10]===-1)J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let U=ht+be,_t=oe+be,st=Z-Te,L=q+(Le-Te),S=fe*oe/_t*U,Y=he*oe/_t*U;J.projectionMatrix.makePerspective(st,L,S,Y,U,_t),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function $(J,re){re===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(re.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let re=J.near,Se=J.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),C.near=I.near=A.near=re,C.far=I.far=A.far=Se,(P!==C.near||H!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,H=C.far),C.layers.mask=J.layers.mask|6,A.layers.mask=C.layers.mask&-5,I.layers.mask=C.layers.mask&-3;let Le=J.parent,ge=C.cameras;$(C,Le);for(let Fe=0;Fe<ge.length;Fe++)$(ge[Fe],Le);ge.length===2?O(C,A,I):C.projectionMatrix.copy(A.projectionMatrix),M===null&&J.isPerspectiveCamera&&(M={camera:J,fov:J.fov,zoom:J.zoom}),ie(J,C,Le)};function ie(J,re,Se){Se===null?J.matrix.copy(re.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(re.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Mr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function(J){return d[J]};let Ee=null;function _e(J,re){if(h=re.getViewerPose(c||a),m=re,h!==null){let Se=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Le=!1;Se.length!==C.cameras.length&&(C.cameras.length=0,Le=!0);for(let oe=0;oe<Se.length;oe++){let fe=Se[oe],he=null;if(p!==null)he=p.getViewport(fe);else{let Me=f.getViewSubImage(u,fe);he=Me.viewport,oe===0&&(e.setRenderTargetTextures(_,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(_))}let pe=N[oe];pe===void 0&&(pe=new Qt,pe.layers.enable(oe),pe.viewport=new Nt,N[oe]=pe),pe.matrix.fromArray(fe.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(fe.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(he.x,he.y,he.width,he.height),oe===0&&(C.matrix.copy(pe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Le===!0&&C.cameras.push(pe)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let oe=f.getDepthInformation(Se[0]);oe&&oe.isValid&&oe.texture&&g.init(oe,s.renderState)}if(ge&&ge.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let oe=0;oe<Se.length;oe++){let fe=Se[oe].camera;if(fe){let he=d[fe];he||(he=new Lr,d[fe]=he);let pe=f.getCameraImage(fe);he.sourceTexture=pe}}}}for(let Se=0;Se<E.length;Se++){let Le=T[Se],ge=E[Se];Le!==null&&ge!==void 0&&ge.update(Le,re,c||a)}Ee&&Ee(J,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),m=null}let Ne=new bd;Ne.setAnimationLoop(_e),this.setAnimationLoop=function(J){Ee=J},this.dispose=function(){}}},wy=new Ge,Ad=new rt;Ad.set(-1,0,0,0,1,0,0,0,1);function Ry(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,mh(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,x,b,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(g,d):d.isMeshLambertMaterial?(r(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(g,d),f(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(g,d),u(g,d),d.isMeshPhysicalMaterial&&p(g,d,_)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),v(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,x,b):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===cn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===cn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let x=e.get(d),b=x.envMap,_=x.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(wy.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ad),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,x,b){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=b*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===cn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function v(g,d){let x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ay(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){let T=E.program;n.uniformBlockBinding(_,T)}function c(_,E){let T=s[_.id];T===void 0&&(g(_),T=h(_),s[_.id]=T,_.addEventListener("dispose",x));let w=E.program;n.updateUBOMapping(_,w);let y=e.render.frame;r[_.id]!==y&&(u(_),r[_.id]=y)}function h(_){let E=f();_.__bindingPointIndex=E;let T=i.createBuffer(),w=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,w,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,T),T}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let E=s[_.id],T=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let y=0,M=T.length;y<M;y++){let A=T[y];if(Array.isArray(A))for(let I=0,N=A.length;I<N;I++)p(A[I],y,I,w);else p(A,y,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,E,T,w){if(v(_,E,T,w)===!0){let y=_.__offset,M=_.value;if(Array.isArray(M)){let A=0;for(let I=0;I<M.length;I++){let N=M[I],C=d(N);m(N,_.__data,A),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(A+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(M,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,_.__data)}}function m(_,E,T){typeof _=="number"||typeof _=="boolean"?E[0]=_:_.isMatrix3?(E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0):ArrayBuffer.isView(_)?E.set(new _.constructor(_.buffer,_.byteOffset,E.length)):_.toArray(E,T)}function v(_,E,T,w){let y=_.value,M=E+"_"+T;if(w[M]===void 0)return typeof y=="number"||typeof y=="boolean"?w[M]=y:ArrayBuffer.isView(y)?w[M]=y.slice():w[M]=y.clone(),!0;{let A=w[M];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return w[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function g(_){let E=_.uniforms,T=0,w=16;for(let M=0,A=E.length;M<A;M++){let I=Array.isArray(E[M])?E[M]:[E[M]];for(let N=0,C=I.length;N<C;N++){let P=I[N],H=Array.isArray(P.value)?P.value:[P.value];for(let F=0,B=H.length;F<B;F++){let G=H[F],V=d(G),X=T%w,O=X%V.boundary,$=X+O;T+=O,$!==0&&w-$<V.storage&&(T+=w-$),P.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=T,T+=V.storage}}}let y=T%w;return y>0&&(T+=w-y),_.__size=T,_.__cache={},this}function d(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):je("WebGLRenderer: Unsupported uniform value type.",_),E}function x(_){let E=_.target;E.removeEventListener("dispose",x);let T=a.indexOf(E.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function b(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}var Cy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;function Py(){return ii===null&&(ii=new Yi(Cy,16,16,Ni,Kt),ii.name="DFG_LUT",ii.minFilter=on,ii.magFilter=on,ii.wrapS=Kn,ii.wrapT=Kn,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}var Bl=class{constructor(e={}){let{canvas:t=Vf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=vn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let v=p,g=new Set([el,jo,Qo]),d=new Set([vn,Wn,Vs,Ws,$o,Jo]),x=new Uint32Array(4),b=new Int32Array(4),_=new D,E=null,T=null,w=[],y=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,N=null,C=null,P=null,H=null;this._outputColorSpace=zt;let F=0,B=0,G=null,V=-1,X=null,O=new Nt,$=new Nt,ie=null,Ee=new ye(0),_e=0,Ne=t.width,J=t.height,re=1,Se=null,Le=null,ge=new Nt(0,0,Ne,J),Fe=new Nt(0,0,Ne,J),ht=!1,oe=new Ds,fe=!1,he=!1,pe=new Ge,Me=new D,Z=new Nt,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},be=!1;function Te(){return G===null?re:1}let U=n;function _t(R,k){return t.getContext(R,k)}let st,L,S,Y,j,ee,ve,me,ae,ue,we,Ye,Pe,Re,Ze,et,ot,W,Ae,ce,Ce,Be,de;try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Dt,!1),t.addEventListener("webglcontextrestored",Et,!1),t.addEventListener("webglcontextcreationerror",Bn,!1),U===null){let k="webgl2";if(U=_t(k,R),U===null)throw _t(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(R){throw t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",Bn,!1),tt("WebGLRenderer: "+R.message),R}function Je(){st=new Bx(U),st.init(),Ce=new Ey(U,st),L=new Rx(U,st,e,Ce),S=new My(U,st),L.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),C=U.createFramebuffer(),P=U.createFramebuffer(),H=U.createFramebuffer(),Y=new zx(U),j=new oy,ee=new by(U,st,S,j,L,Ce,Y),ve=new Fx(A),me=new k0(U),Be=new Tx(U,me),ae=new Ox(U,me,Y,Be),ue=new kx(U,ae,me,Be,Y),W=new Gx(U,L,ee),Ze=new Ax(j),we=new ay(A,ve,st,L,Be,Ze),Ye=new Ry(A,j),Pe=new cy,Re=new my(st),ot=new Sx(A,ve,S,ue,m,l),et=new vy(A,ue,L),de=new Ay(U,Y,L,S),Ae=new wx(U,st,Y),ce=new Hx(U,st,Y),Y.programs=we.programs,A.capabilities=L,A.extensions=st,A.properties=j,A.renderLists=Pe,A.shadowMap=et,A.state=S,A.info=Y}v!==vn&&(M=new Wx(v,t.width,t.height,o,s,r));let We=new Oh(A,U);this.xr=We,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let R=st.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=st.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(R){R!==void 0&&(re=R,this.setSize(Ne,J,!1))},this.getSize=function(R){return R.set(Ne,J)},this.setSize=function(R,k,ne=!0){if(We.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}Ne=R,J=k,t.width=Math.floor(R*re),t.height=Math.floor(k*re),ne===!0&&(t.style.width=R+"px",t.style.height=k+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(Ne*re,J*re).floor()},this.setDrawingBufferSize=function(R,k,ne){Ne=R,J=k,re=ne,t.width=Math.floor(R*ne),t.height=Math.floor(k*ne),this.setViewport(0,0,R,k)},this.setEffects=function(R){if(v===vn){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let k=0;k<R.length;k++)if(R[k].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(ge)},this.setViewport=function(R,k,ne,K){R.isVector4?ge.set(R.x,R.y,R.z,R.w):ge.set(R,k,ne,K),S.viewport(O.copy(ge).multiplyScalar(re).round())},this.getScissor=function(R){return R.copy(Fe)},this.setScissor=function(R,k,ne,K){R.isVector4?Fe.set(R.x,R.y,R.z,R.w):Fe.set(R,k,ne,K),S.scissor($.copy(Fe).multiplyScalar(re).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(R){S.setScissorTest(ht=R)},this.setOpaqueSort=function(R){Se=R},this.setTransparentSort=function(R){Le=R},this.getClearColor=function(R){return R.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,ne=!0){let K=0;if(R){let Q=!1;if(G!==null){let Ue=G.texture.format;Q=g.has(Ue)}if(Q){let Ue=G.texture.type,He=d.has(Ue),De=ot.getClearColor(),ke=ot.getClearAlpha(),Xe=De.r,ut=De.g,mt=De.b;He?(x[0]=Xe,x[1]=ut,x[2]=mt,x[3]=ke,U.clearBufferuiv(U.COLOR,0,x)):(b[0]=Xe,b[1]=ut,b[2]=mt,b[3]=ke,U.clearBufferiv(U.COLOR,0,b))}else K|=U.COLOR_BUFFER_BIT}k&&(K|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(K|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&U.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),N=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",Bn,!1),ot.dispose(),Pe.dispose(),Re.dispose(),j.dispose(),ve.dispose(),ue.dispose(),Be.dispose(),de.dispose(),we.dispose(),We.dispose(),We.removeEventListener("sessionstart",_u),We.removeEventListener("sessionend",yu),Hi.stop()};function Dt(R){R.preventDefault(),vr("WebGLRenderer: Context Lost."),I=!0}function Et(){vr("WebGLRenderer: Context Restored."),I=!1;let R=Y.autoReset,k=et.enabled,ne=et.autoUpdate,K=et.needsUpdate,Q=et.type;Je(),Y.autoReset=R,et.enabled=k,et.autoUpdate=ne,et.needsUpdate=K,et.type=Q}function Bn(R){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Yn(R){let k=R.target;k.removeEventListener("dispose",Yn),Tp(k)}function Tp(R){wp(R),j.remove(R)}function wp(R){let k=j.get(R).programs;k!==void 0&&(k.forEach(function(ne){we.releaseProgram(ne)}),R.isShaderMaterial&&we.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,ne,K,Q,Ue){k===null&&(k=q);let He=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,De=Cp(R,k,ne,K,Q);S.setMaterial(K,He);let ke=ne.index,Xe=1;if(K.wireframe===!0){if(ke=ae.getWireframeAttribute(ne),ke===void 0)return;Xe=2}let ut=ne.drawRange,mt=ne.attributes.position,Ve=ut.start*Xe,St=(ut.start+ut.count)*Xe;Ue!==null&&(Ve=Math.max(Ve,Ue.start*Xe),St=Math.min(St,(Ue.start+Ue.count)*Xe)),ke!==null?(Ve=Math.max(Ve,0),St=Math.min(St,ke.count)):mt!=null&&(Ve=Math.max(Ve,0),St=Math.min(St,mt.count));let Zt=St-Ve;if(Zt<0||Zt===1/0)return;Be.setup(Q,K,De,ne,ke);let Ot,Ct=Ae;if(ke!==null&&(Ot=me.get(ke),Ct=ce,Ct.setIndex(Ot)),Q.isMesh)K.wireframe===!0?(S.setLineWidth(K.wireframeLinewidth*Te()),Ct.setMode(U.LINES)):Ct.setMode(U.TRIANGLES);else if(Q.isLine){let hn=K.linewidth;hn===void 0&&(hn=1),S.setLineWidth(hn*Te()),Q.isLineSegments?Ct.setMode(U.LINES):Q.isLineLoop?Ct.setMode(U.LINE_LOOP):Ct.setMode(U.LINE_STRIP)}else Q.isPoints?Ct.setMode(U.POINTS):Q.isSprite&&Ct.setMode(U.TRIANGLES);if(Q.isBatchedMesh)if(st.get("WEBGL_multi_draw"))Ct.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let hn=Q._multiDrawStarts,Oe=Q._multiDrawCounts,pn=Q._multiDrawCount,yt=ke?me.get(ke).bytesPerElement:1,Cn=j.get(K).currentProgram.getUniforms();for(let Zn=0;Zn<pn;Zn++)Cn.setValue(U,"_gl_DrawID",Zn),Ct.render(hn[Zn]/yt,Oe[Zn])}else if(Q.isInstancedMesh)Ct.renderInstances(Ve,Zt,Q.count);else if(ne.isInstancedBufferGeometry){let hn=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Oe=Math.min(ne.instanceCount,hn);Ct.renderInstances(Ve,Zt,Oe)}else Ct.render(Ve,Zt)};function xu(R,k,ne,K){N!==null&&R.isNodeMaterial&&N.setObject(K,R),fe===!0&&Ze.setState(R,ne,!1),R.transparent===!0&&R.side===at&&R.forceSinglePass===!1?(R.side=cn,R.needsUpdate=!0,Ta(R,k,K),R.side=Ii,R.needsUpdate=!0,Ta(R,k,K),R.side=at):Ta(R,k,K)}this.compile=function(R,k,ne=null){ne===null&&(ne=R),N!==null&&N.renderStart(R,k,ne),T=Re.get(ne),T.init(k),y.push(T),ne.traverseVisible(function(Q){Q.isLight&&Q.layers.test(k.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),R!==ne&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(k.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),he=this.localClippingEnabled,fe=Ze.init(this.clippingPlanes,he),fe===!0&&Ze.setGlobalState(this.clippingPlanes,k),N!==null&&et.render(T.state.shadowsArray,ne,k);let K=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ue=Q.material;if(Ue)if(Array.isArray(Ue))for(let He=0;He<Ue.length;He++){let De=Ue[He];xu(De,ne,k,Q),K.add(De)}else xu(Ue,ne,k,Q),K.add(Ue)}),T=y.pop(),N!==null&&N.renderEnd(),K},this.compileAsync=function(R,k,ne=null){let K=this.compile(R,k,ne);return new Promise(Q=>{function Ue(){if(K.forEach(function(He){let ke=j.get(He).currentProgram;(ke===void 0||ke.isReady())&&K.delete(He)}),K.size===0){Q(R);return}setTimeout(Ue,10)}st.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let hc=null;function Rp(R){hc&&hc(R)}function _u(){Hi.stop()}function yu(){Hi.start()}let Hi=new bd;Hi.setAnimationLoop(Rp),typeof self!="undefined"&&Hi.setContext(self),this.setAnimationLoop=function(R){hc=R,We.setAnimationLoop(R),R===null?Hi.stop():Hi.start()},We.addEventListener("sessionstart",_u),We.addEventListener("sessionend",yu),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(R,k);let ne=We.enabled===!0&&We.isPresenting===!0,K=M!==null&&(G===null||ne)&&M.begin(A,G);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(k),k=We.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,k,G),T=Re.get(R,y.length),T.init(k),T.state.textureUnits=ee.getTextureUnits(),y.push(T),pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),oe.setFromProjectionMatrix(pe,kn,k.reversedDepth),he=this.localClippingEnabled,fe=Ze.init(this.clippingPlanes,he),E=Pe.get(R,w.length),E.init(),w.push(E),We.enabled===!0&&We.isPresenting===!0){let He=A.xr.getDepthSensingMesh();He!==null&&uc(He,k,-1/0,A.sortObjects)}uc(R,k,0,A.sortObjects),E.finish(),N!==null&&N.updateLights(T.state.lightsArray),A.sortObjects===!0&&E.sort(Se,Le),be=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,be&&ot.addToRenderList(E,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),fe===!0&&Ze.beginShadows();let Q=T.state.shadowsArray;if(et.render(Q,R,k),fe===!0&&Ze.endShadows(),(K&&M.hasRenderPass())===!1){let He=E.opaque,De=E.transmissive;if(T.setupLights(),k.isArrayCamera){let ke=k.cameras;if(De.length>0)for(let Xe=0,ut=ke.length;Xe<ut;Xe++){let mt=ke[Xe];Mu(He,De,R,mt)}be&&ot.render(R);for(let Xe=0,ut=ke.length;Xe<ut;Xe++){let mt=ke[Xe];vu(E,R,mt,mt.viewport)}}else De.length>0&&Mu(He,De,R,k),be&&ot.render(R),vu(E,R,k)}G!==null&&B===0&&(ee.updateMultisampleRenderTarget(G),ee.updateRenderTargetMipmap(G)),K&&M.end(A),R.isScene===!0&&R.onAfterRender(A,R,k),Be.resetDefaultState(),V=-1,X=null,y.pop(),y.length>0?(T=y[y.length-1],ee.setTextureUnits(T.state.textureUnits),fe===!0&&Ze.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?E=w[w.length-1]:E=null,N!==null&&N.renderEnd()};function uc(R,k,ne,K){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLightProbeGrid)T.pushLightProbeGrid(R);else if(R.isLight)T.pushLight(R),R.castShadow&&T.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(oe)){K&&Z.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pe);let He=ue.update(R),De=R.material;De.visible&&E.push(R,He,De,ne,Z.z,null,k)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(oe))){let He=ue.update(R),De=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Z.copy(R.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Z.copy(He.boundingSphere.center)),Z.applyMatrix4(R.matrixWorld).applyMatrix4(pe)),Array.isArray(De)){let ke=He.groups;for(let Xe=0,ut=ke.length;Xe<ut;Xe++){let mt=ke[Xe],Ve=De[mt.materialIndex];Ve&&Ve.visible&&E.push(R,He,Ve,ne,Z.z,mt,k)}}else De.visible&&E.push(R,He,De,ne,Z.z,null,k)}}let Ue=R.children;for(let He=0,De=Ue.length;He<De;He++)uc(Ue[He],k,ne,K)}function vu(R,k,ne,K){let{opaque:Q,transmissive:Ue,transparent:He}=R;T.setupLightsView(ne),fe===!0&&Ze.setGlobalState(A.clippingPlanes,ne),K&&S.viewport(O.copy(K)),Q.length>0&&Sa(Q,k,ne),Ue.length>0&&Sa(Ue,k,ne),He.length>0&&Sa(He,k,ne),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Mu(R,k,ne,K){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[K.id]===void 0){let Ve=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[K.id]=new Vt(1,1,{generateMipmaps:!0,type:Ve?Kt:vn,minFilter:Di,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Ue=T.state.transmissionRenderTarget[K.id],He=K.viewport||O;Ue.setSize(He.z*A.transmissionResolutionScale,He.w*A.transmissionResolutionScale);let De=A.getRenderTarget(),ke=A.getActiveCubeFace(),Xe=A.getActiveMipmapLevel();A.setRenderTarget(Ue),A.getClearColor(Ee),_e=A.getClearAlpha(),_e<1&&A.setClearColor(16777215,.5),A.clear(),be&&ot.render(ne);let ut=A.toneMapping;A.toneMapping=Vn;let mt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),T.setupLightsView(K),fe===!0&&Ze.setGlobalState(A.clippingPlanes,K),Sa(R,ne,K),ee.updateMultisampleRenderTarget(Ue),ee.updateRenderTargetMipmap(Ue),st.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let St=0,Zt=k.length;St<Zt;St++){let Ot=k[St],{object:Ct,geometry:hn,material:Oe,group:pn}=Ot;if(Oe.side===at&&Ct.layers.test(K.layers)){let yt=Oe.side;Oe.side=cn,Oe.needsUpdate=!0,bu(Ct,ne,K,hn,Oe,pn),Oe.side=yt,Oe.needsUpdate=!0,Ve=!0}}Ve===!0&&(ee.updateMultisampleRenderTarget(Ue),ee.updateRenderTargetMipmap(Ue))}A.setRenderTarget(De,ke,Xe),A.setClearColor(Ee,_e),mt!==void 0&&(K.viewport=mt),A.toneMapping=ut}function Sa(R,k,ne){let K=k.isScene===!0?k.overrideMaterial:null;for(let Q=0,Ue=R.length;Q<Ue;Q++){let He=R[Q],{object:De,geometry:ke,group:Xe}=He,ut=He.material;ut.allowOverride===!0&&K!==null&&(ut=K),De.layers.test(ne.layers)&&bu(De,k,ne,ke,ut,Xe)}}function bu(R,k,ne,K,Q,Ue){N!==null&&Q.isNodeMaterial&&N.setObject(R,Q),R.onBeforeRender(A,k,ne,K,Q,Ue),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(A,k,ne,K,R,Ue),Q.transparent===!0&&Q.side===at&&Q.forceSinglePass===!1?(Q.side=cn,Q.needsUpdate=!0,A.renderBufferDirect(ne,k,K,Q,R,Ue),Q.side=Ii,Q.needsUpdate=!0,A.renderBufferDirect(ne,k,K,Q,R,Ue),Q.side=at):A.renderBufferDirect(ne,k,K,Q,R,Ue),R.onAfterRender(A,k,ne,K,Q,Ue)}function Ta(R,k,ne){k.isScene!==!0&&(k=q);let K=j.get(R),Q=T.state.lights,Ue=T.state.shadowsArray,He=Q.state.version,De=we.getParameters(R,Q.state,Ue,k,ne,T.state.lightProbeGridArray),ke=we.getProgramCacheKey(De),Xe=K.programs;K.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?k.environment:null,K.fog=k.fog;let ut=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;K.envMap=ve.get(R.envMap||K.environment,ut),K.envMapRotation=K.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",Yn),Xe=new Map,K.programs=Xe);let mt=Xe.get(ke);if(mt!==void 0){if(K.currentProgram===mt&&K.lightsStateVersion===He)return Su(R,De),mt}else De.uniforms=we.getUniforms(R),N!==null&&R.isNodeMaterial&&N.build(R,ne,De),R.onBeforeCompile(De,A),mt=we.acquireProgram(De,ke),Xe.set(ke,mt),K.uniforms=De.uniforms;let Ve=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=Ze.uniform),Su(R,De),K.needsLights=Ip(R),K.lightsStateVersion=He,K.needsLights&&(Ve.ambientLightColor.value=Q.state.ambient,Ve.lightProbe.value=Q.state.probe,Ve.sunLights.value=Q.state.sun,Ve.sunLightShadows.value=Q.state.sunShadow,Ve.directionalLights.value=Q.state.directional,Ve.directionalLightShadows.value=Q.state.directionalShadow,Ve.spotLights.value=Q.state.spot,Ve.spotLightShadows.value=Q.state.spotShadow,Ve.rectAreaLights.value=Q.state.rectArea,Ve.ltc_1.value=Q.state.rectAreaLTC1,Ve.ltc_2.value=Q.state.rectAreaLTC2,Ve.pointLights.value=Q.state.point,Ve.pointLightShadows.value=Q.state.pointShadow,Ve.hemisphereLights.value=Q.state.hemi,Ve.sunShadowMatrix.value=Q.state.sunShadowMatrix,Ve.sunShadowCascade.value=Q.state.sunShadowCascade,Ve.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ve.spotLightMatrix.value=Q.state.spotLightMatrix,Ve.spotLightMap.value=Q.state.spotLightMap,Ve.pointShadowMatrix.value=Q.state.pointShadowMatrix),K.lightProbeGrid=T.state.lightProbeGridArray.length>0,K.currentProgram=mt,K.uniformsList=null,mt}function Eu(R){if(R.uniformsList===null){let k=R.currentProgram.getUniforms();R.uniformsList=Ys.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Su(R,k){let ne=j.get(R);ne.outputColorSpace=k.outputColorSpace,ne.batching=k.batching,ne.batchingColor=k.batchingColor,ne.instancing=k.instancing,ne.instancingColor=k.instancingColor,ne.instancingMorph=k.instancingMorph,ne.skinning=k.skinning,ne.morphTargets=k.morphTargets,ne.morphNormals=k.morphNormals,ne.morphColors=k.morphColors,ne.morphTargetsCount=k.morphTargetsCount,ne.numClippingPlanes=k.numClippingPlanes,ne.numIntersection=k.numClipIntersection,ne.vertexAlphas=k.vertexAlphas,ne.vertexTangents=k.vertexTangents,ne.toneMapping=k.toneMapping}function Ap(R,k){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;_.setFromMatrixPosition(k.matrixWorld);for(let ne=0,K=R.length;ne<K;ne++){let Q=R[ne];if(Q.texture!==null&&Q.boundingBox.containsPoint(_))return Q}return null}function Cp(R,k,ne,K,Q){k.isScene!==!0&&(k=q),ee.resetTextureUnits();let Ue=k.fog,He=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?k.environment:null,De=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:dt.workingColorSpace,ke=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Xe=ve.get(K.envMap||He,ke),ut=K.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,mt=!!ne.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ve=!!ne.morphAttributes.position,St=!!ne.morphAttributes.normal,Zt=!!ne.morphAttributes.color,Ot=Vn;K.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ot=A.toneMapping);let Ct=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,hn=Ct!==void 0?Ct.length:0,Oe=j.get(K),pn=T.state.lights;if(fe===!0&&(he===!0||R!==X)){let Ut=R===X&&K.id===V;Ze.setState(K,R,Ut)}let yt=!1;K.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==pn.state.version||Oe.outputColorSpace!==De||Q.isBatchedMesh&&Oe.batching===!1||!Q.isBatchedMesh&&Oe.batching===!0||Q.isBatchedMesh&&Oe.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Oe.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Oe.instancing===!1||!Q.isInstancedMesh&&Oe.instancing===!0||Q.isSkinnedMesh&&Oe.skinning===!1||!Q.isSkinnedMesh&&Oe.skinning===!0||Q.isInstancedMesh&&Oe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Oe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Oe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Oe.instancingMorph===!1&&Q.morphTexture!==null||Oe.envMap!==Xe||K.fog===!0&&Oe.fog!==Ue||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Ze.numPlanes||Oe.numIntersection!==Ze.numIntersection)||Oe.vertexAlphas!==ut||Oe.vertexTangents!==mt||Oe.morphTargets!==Ve||Oe.morphNormals!==St||Oe.morphColors!==Zt||Oe.toneMapping!==Ot||Oe.morphTargetsCount!==hn||!!Oe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Oe.__version=K.version);let Cn=Oe.currentProgram;yt===!0&&(Cn=Ta(K,k,Q),N&&K.isNodeMaterial&&N.onUpdateProgram(K,Cn,Oe));let Zn=!1,yi=!1,rs=!1,Rt=Cn.getUniforms(),qt=Oe.uniforms;if(S.useProgram(Cn.program)&&(Zn=!0,yi=!0,rs=!0),K.id!==V&&(V=K.id,yi=!0),Oe.needsLights){let Ut=Ap(T.state.lightProbeGridArray,Q);Oe.lightProbeGrid!==Ut&&(Oe.lightProbeGrid=Ut,yi=!0)}if(Zn||X!==R){S.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Rt.setValue(U,"projectionMatrix",R.projectionMatrix),Rt.setValue(U,"viewMatrix",R.matrixWorldInverse);let Mi=Rt.map.cameraPosition;Mi!==void 0&&Mi.setValue(U,Me.setFromMatrixPosition(R.matrixWorld)),L.logarithmicDepthBuffer&&Rt.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Rt.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),X!==R&&(X=R,yi=!0,rs=!0)}if(Oe.needsLights&&(pn.state.sunShadowMap.length>0&&Rt.setValue(U,"sunShadowMap",pn.state.sunShadowMap,ee),pn.state.directionalShadowMap.length>0&&Rt.setValue(U,"directionalShadowMap",pn.state.directionalShadowMap,ee),pn.state.spotShadowMap.length>0&&Rt.setValue(U,"spotShadowMap",pn.state.spotShadowMap,ee),pn.state.pointShadowMap.length>0&&Rt.setValue(U,"pointShadowMap",pn.state.pointShadowMap,ee)),Q.isSkinnedMesh){Rt.setOptional(U,Q,"bindMatrix"),Rt.setOptional(U,Q,"bindMatrixInverse");let Ut=Q.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Rt.setValue(U,"boneTexture",Ut.boneTexture,ee))}Q.isBatchedMesh&&(Rt.setOptional(U,Q,"batchingTexture"),Rt.setValue(U,"batchingTexture",Q._matricesTexture,ee),Rt.setOptional(U,Q,"batchingIdTexture"),Rt.setValue(U,"batchingIdTexture",Q._indirectTexture,ee),Rt.setOptional(U,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Rt.setValue(U,"batchingColorTexture",Q._colorsTexture,ee));let vi=ne.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&W.update(Q,ne,Cn),(yi||Oe.receiveShadow!==Q.receiveShadow)&&(Oe.receiveShadow=Q.receiveShadow,Rt.setValue(U,"receiveShadow",Q.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&k.environment!==null&&(qt.envMapIntensity.value=k.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=Py()),yi){if(Rt.setValue(U,"toneMappingExposure",A.toneMappingExposure),Oe.needsLights&&Pp(qt,rs),Ue&&K.fog===!0&&Ye.refreshFogUniforms(qt,Ue),Ye.refreshMaterialUniforms(qt,K,re,J,T.state.transmissionRenderTarget[R.id]),Oe.needsLights&&Oe.lightProbeGrid){let Ut=Oe.lightProbeGrid;qt.probesSH.value=Ut.texture,qt.probesMin.value.copy(Ut.boundingBox.min),qt.probesMax.value.copy(Ut.boundingBox.max),qt.probesResolution.value.copy(Ut.resolution)}Ys.upload(U,Eu(Oe),qt,ee)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ys.upload(U,Eu(Oe),qt,ee),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Rt.setValue(U,"center",Q.center),Rt.setValue(U,"modelViewMatrix",Q.modelViewMatrix),Rt.setValue(U,"normalMatrix",Q.normalMatrix),Rt.setValue(U,"modelMatrix",Q.matrixWorld),K.uniformsGroups!==void 0){let Ut=K.uniformsGroups;for(let Mi=0,as=Ut.length;Mi<as;Mi++){let wu=Ut[Mi];de.update(wu,Cn),de.bind(wu,Cn)}}return Cn}function Pp(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.sunLights.needsUpdate=k,R.sunLightShadows.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Ip(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,k,ne){let K=j.get(R);K.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),j.get(R.texture).__webglTexture=k,j.get(R.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:ne,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){let ne=j.get(R);ne.__webglFramebuffer=k,ne.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,ne=0){G=R,F=k,B=ne;let K=null,Q=!1,Ue=!1;if(R){let De=j.get(R);if(De.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(U.FRAMEBUFFER,De.__webglFramebuffer),O.copy(R.viewport),$.copy(R.scissor),ie=R.scissorTest,S.viewport(O),S.scissor($),S.setScissorTest(ie),V=-1;return}else if(De.__webglFramebuffer===void 0)ee.setupRenderTarget(R);else if(De.__hasExternalTextures)ee.rebindTextures(R,j.get(R.texture).__webglTexture,j.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ut=R.depthTexture;if(De.__boundDepthTexture!==ut){if(ut!==null&&j.has(ut)&&(R.width!==ut.image.width||R.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(R)}}let ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ue=!0);let Xe=j.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xe[k])?K=Xe[k][ne]:K=Xe[k],Q=!0):R.samples>0&&ee.useMultisampledRTT(R)===!1?K=j.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?K=Xe[ne]:K=Xe,O.copy(R.viewport),$.copy(R.scissor),ie=R.scissorTest}else O.copy(ge).multiplyScalar(re).floor(),$.copy(Fe).multiplyScalar(re).floor(),ie=ht;if(ne!==0&&(K=C),S.bindFramebuffer(U.FRAMEBUFFER,K)&&S.drawBuffers(R,K),S.viewport(O),S.scissor($),S.setScissorTest(ie),Q){let De=j.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,De.__webglTexture,ne)}else if(Ue){let De=k;for(let ke=0;ke<R.textures.length;ke++){let Xe=j.get(R.textures[ke]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ke,Xe.__webglTexture,ne,De)}}else if(R!==null&&ne!==0){let De=j.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,De.__webglTexture,ne)}V=-1};function Tu(R){let k=j.get(R);return(k.__readFormat!==R.format||k.__readType!==R.type)&&(k.__readFormat=R.format,k.__readType=R.type,k.__formatReadable=L.textureFormatReadable(R.format),k.__typeReadable=L.textureTypeReadable(R.type)),k}this.readRenderTargetPixels=function(R,k,ne,K,Q,Ue,He,De=0){if(!(R&&R.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=j.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(ke=ke[He]),ke){S.bindFramebuffer(U.FRAMEBUFFER,ke);try{let Xe=R.textures[De],ut=Xe.format,mt=Xe.type;R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+De);let Ve=Tu(Xe);if(Ve.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-K&&ne>=0&&ne<=R.height-Q&&U.readPixels(k,ne,K,Q,Ce.convert(ut),Ce.convert(mt),Ue)}finally{let Xe=G!==null?j.get(G).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(R,k,ne,K,Q,Ue,He,De=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=j.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(ke=ke[He]),ke)if(k>=0&&k<=R.width-K&&ne>=0&&ne<=R.height-Q){S.bindFramebuffer(U.FRAMEBUFFER,ke);let Xe=R.textures[De],ut=Xe.format,mt=Xe.type;R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+De);let Ve=Tu(Xe);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let St=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,St),U.bufferData(U.PIXEL_PACK_BUFFER,Ue.byteLength,U.STREAM_READ),U.readPixels(k,ne,K,Q,Ce.convert(ut),Ce.convert(mt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Zt=G!==null?j.get(G).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,Zt);let Ot=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Xf(U,Ot,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,St),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ue),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(St),U.deleteSync(Ot),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,ne=0){let K=Math.pow(2,-ne),Q=Math.floor(R.image.width*K),Ue=Math.floor(R.image.height*K),He=k!==null?k.x:0,De=k!==null?k.y:0;ee.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,ne,0,0,He,De,Q,Ue),S.unbindTexture()},this.copyTextureToTexture=function(R,k,ne=null,K=null,Q=0,Ue=0){let He,De,ke,Xe,ut,mt,Ve,St,Zt,Ot=R.isCompressedTexture?R.mipmaps[Ue]:R.image;if(ne!==null)He=ne.max.x-ne.min.x,De=ne.max.y-ne.min.y,ke=ne.isBox3?ne.max.z-ne.min.z:1,Xe=ne.min.x,ut=ne.min.y,mt=ne.isBox3?ne.min.z:0;else{let qt=Math.pow(2,-Q);He=Math.floor(Ot.width*qt),De=Math.floor(Ot.height*qt),R.isDataArrayTexture?ke=Ot.depth:R.isData3DTexture?ke=Math.floor(Ot.depth*qt):ke=1,Xe=0,ut=0,mt=0}K!==null?(Ve=K.x,St=K.y,Zt=K.z):(Ve=0,St=0,Zt=0);let Ct=Ce.convert(k.format),hn=Ce.convert(k.type),Oe;k.isData3DTexture?(ee.setTexture3D(k,0),Oe=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ee.setTexture2DArray(k,0),Oe=U.TEXTURE_2D_ARRAY):(ee.setTexture2D(k,0),Oe=U.TEXTURE_2D),S.activeTexture(U.TEXTURE0),S.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),S.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),S.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);let pn=S.getParameter(U.UNPACK_ROW_LENGTH),yt=S.getParameter(U.UNPACK_IMAGE_HEIGHT),Cn=S.getParameter(U.UNPACK_SKIP_PIXELS),Zn=S.getParameter(U.UNPACK_SKIP_ROWS),yi=S.getParameter(U.UNPACK_SKIP_IMAGES);S.pixelStorei(U.UNPACK_ROW_LENGTH,Ot.width),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ot.height),S.pixelStorei(U.UNPACK_SKIP_PIXELS,Xe),S.pixelStorei(U.UNPACK_SKIP_ROWS,ut),S.pixelStorei(U.UNPACK_SKIP_IMAGES,mt);let rs=R.isDataArrayTexture||R.isData3DTexture,Rt=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){let qt=j.get(R),vi=j.get(k),Ut=j.get(qt.__renderTarget),Mi=j.get(vi.__renderTarget);S.bindFramebuffer(U.READ_FRAMEBUFFER,Ut.__webglFramebuffer),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let as=0;as<ke;as++)rs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,j.get(R).__webglTexture,Q,mt+as),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,j.get(k).__webglTexture,Ue,Zt+as)),U.blitFramebuffer(Xe,ut,He,De,Ve,St,He,De,U.DEPTH_BUFFER_BIT,U.NEAREST);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||j.has(R)){let qt=j.get(R),vi=j.get(k);S.bindFramebuffer(U.READ_FRAMEBUFFER,P),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let Ut=0;Ut<ke;Ut++)rs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qt.__webglTexture,Q,mt+Ut):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,qt.__webglTexture,Q),Rt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,vi.__webglTexture,Ue,Zt+Ut):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,vi.__webglTexture,Ue),Q!==0?U.blitFramebuffer(Xe,ut,He,De,Ve,St,He,De,U.COLOR_BUFFER_BIT,U.NEAREST):Rt?U.copyTexSubImage3D(Oe,Ue,Ve,St,Zt+Ut,Xe,ut,He,De):U.copyTexSubImage2D(Oe,Ue,Ve,St,Xe,ut,He,De);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Rt?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(Oe,Ue,Ve,St,Zt,He,De,ke,Ct,hn,Ot.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Oe,Ue,Ve,St,Zt,He,De,ke,Ct,Ot.data):U.texSubImage3D(Oe,Ue,Ve,St,Zt,He,De,ke,Ct,hn,Ot):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ue,Ve,St,He,De,Ct,hn,Ot.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ue,Ve,St,Ot.width,Ot.height,Ct,Ot.data):U.texSubImage2D(U.TEXTURE_2D,Ue,Ve,St,He,De,Ct,hn,Ot);S.pixelStorei(U.UNPACK_ROW_LENGTH,pn),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,yt),S.pixelStorei(U.UNPACK_SKIP_PIXELS,Cn),S.pixelStorei(U.UNPACK_SKIP_ROWS,Zn),S.pixelStorei(U.UNPACK_SKIP_IMAGES,yi),Ue===0&&k.generateMipmaps&&U.generateMipmap(Oe),S.unbindTexture()},this.initRenderTarget=function(R){j.get(R).__webglFramebuffer===void 0&&ee.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ee.setTextureCube(R,0):R.isData3DTexture?ee.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ee.setTexture2DArray(R,0):ee.setTexture2D(R,0),S.unbindTexture()},this.resetState=function(){F=0,B=0,G=null,S.reset(),Be.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var $s={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Rn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Iy=new ni(-1,1,1,-1,0,1),Hh=class extends lt{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}},Ly=new Hh,Fi=class{constructor(e){this._mesh=new te(Ly,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Iy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var zl=class extends Rn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xi.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Fi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ga=class extends Rn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Gl=class extends Rn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var kl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new zl($s),this.copyPass.material.blending=Ln,this.timer=new Jr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ga!==void 0&&(a instanceof ga?n=!0:a instanceof Gl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Vl=class extends Rn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ye}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Cd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Js=class i extends Rn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new ye(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(r,a,{type:Kt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Vt(r,a,{type:Kt,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Vt(r,a,{type:Kt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Cd;this.highPassUniforms=xi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new le(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=xi.clone($s.uniforms),this.blendMaterial=new Lt({uniforms:this.copyUniforms,vertexShader:$s.vertexShader,fragmentShader:$s.fragmentShader,premultipliedAlpha:!0,blending:wn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ye,this._oldClearAlpha=1,this._basic=new vt,this._fsQuad=new Fi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Lt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Lt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Js.BlurDirectionX=new le(1,0);Js.BlurDirectionY=new le(0,1);var xa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Wl=class extends Rn{constructor(){super(),this.isOutputPass=!0,this.uniforms=xi.clone(xa.uniforms),this.material=new Hs({name:xa.name,uniforms:this.uniforms,vertexShader:xa.vertexShader,fragmentShader:xa.fragmentShader}),this._fsQuad=new Fi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ea?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ta?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ia?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ki?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===na&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var se=Math.PI*2;function An(i){return i=i%2147483647||7,function(){return i=i*16807%2147483647,(i-1)/2147483646}}var ct=(i,e,t)=>i+(e-i)*t,Id=(i,e,t)=>Math.max(e,Math.min(t,i));function Nn(i,e,t,n){return[ct(i[0],e[0],n),ct(i[1],e[1],n)-t*4*n*(1-n),ct(i[2],e[2],n)]}var Bi={traditional:{bulbs:["#ffd58a","#ffb070","#ff8fb3","#ffe9b8","#9fe7b8","#ff9f5a"],flags:["#f08a24","#c2185b","#ffc861","#2f8f5b","#b8312b"],beams:["#ffd696","#ffaa5a","#ffecc8","#ffbe78"],hues:[28,42,16],sat:75,speed:.3,glow:"#ffbe6e"},dandiya:{bulbs:["#ffd58a","#ff6fa3","#7fe0a0","#8fc7ff","#ffb070","#c38fff"],flags:["#f08a24","#2f8f5b","#c2185b","#ffc861","#3b4cc0"],beams:["#ff78be","#78dcff","#ffc85a","#be8cff"],hues:[320,190,45,270],sat:82,speed:.75,glow:"#ffaac8"},devotional:{bulbs:["#ffe9b8","#ffd58a","#fff4dc"],flags:["#f08a24","#ffc861","#b8312b","#f3e6d0"],beams:["#ffecc8","#ffd696"],hues:[34,22],sat:60,speed:.12,glow:"#ffd296"},folk:{bulbs:["#ffb070","#ffd58a","#e8a33d","#9fe7b8"],flags:["#b8312b","#2f8f5b","#e8a33d","#3b4cc0"],beams:["#ffbe78","#d2ebaa","#ffdca0"],hues:[24,90,12],sat:62,speed:.28,glow:"#ffbe78"},sanedo:{bulbs:["#ffd58a","#ff8fb3","#ffb070","#9fe7b8"],flags:["#c2185b","#f08a24","#ffc861","#2f8f5b"],beams:["#ff8cbe","#ffc86e","#ffecc8"],hues:[340,30,50],sat:78,speed:.55,glow:"#ffaaaa"},fusion:{bulbs:["#8fc7ff","#c38fff","#ff6fa3","#7fe0ff"],flags:["#3b4cc0","#8e44ad","#c2185b","#16a085"],beams:["#78dcff","#be78ff","#ff5ab4","#5affdc"],hues:[200,280,320],sat:88,speed:1.05,glow:"#aa96ff"},nonstop:{bulbs:["#ffd58a","#ff6fa3","#8fc7ff","#ffb070","#7fe0a0"],flags:["#f08a24","#2f8f5b","#c2185b","#ffc861","#3b4cc0"],beams:["#ffc86e","#ff78be","#78dcff","#ffecc8"],hues:[30,320,190],sat:80,speed:.65,glow:"#ffbe8c"}};var Yl={big:[{role:"tabla",u:.12,d:.95},{role:"dhol",u:.27,d:.75},{role:"guitar",u:.41,d:.85},{role:"drums",u:.56,d:1.8},{role:"keys",u:.72,d:.9},{role:"bass",u:.87,d:.85}],sheri:[{role:"dhol",u:.2,d:1},{role:"tabla",u:.35,d:1},{role:"guitar",u:.64,d:1},{role:"keys",u:.84,d:1}]};var Pd=new Map;function ri(i){let e=Pd.get(i);return e||(e=new ye(i),Pd.set(i,e)),e}function it(i,e,t,n={}){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new _n(s);return r.colorSpace=n.linear?xn:zt,r.anisotropy=n.anisotropy||4,n.repeat&&(r.wrapS=r.wrapT=Jt,r.repeat.set(n.repeat[0],n.repeat[1])),r}var Xl=null;function Qs(){return Xl||(Xl=it(128,128,(i,e)=>{let t=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.55)"),t.addColorStop(.6,"rgba(255,255,255,.14)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)},{linear:!0}),Xl)}function js(i,e,t){return new ye().setHSL((i%360+360)%360/360,e/100,t/100)}function Gh(i){let e=i.map(([s,r])=>{let a=s.index?s.toNonIndexed():s.clone();return r&&a.applyMatrix4(r),a}),t=0;e.forEach(s=>t+=s.attributes.position.count);let n=new lt;return["position","normal","uv","color"].forEach(s=>{if(!e.every(l=>l.attributes[s]))return;let r=e[0].attributes[s].itemSize,a=new Float32Array(t*r),o=0;e.forEach(l=>{a.set(l.attributes[s].array,o),o+=l.attributes[s].array.length}),n.setAttribute(s,new Pt(a,r))}),e.forEach(s=>s.dispose()),n}function _a(i,e){let t=i.index?i.toNonIndexed():i.clone(),n=new ye(e),s=t.attributes.position.count,r=new Float32Array(s*3);for(let a=0;a<s;a++)r[a*3]=n.r,r[a*3+1]=n.g,r[a*3+2]=n.b;return t.setAttribute("color",new Pt(r,3)),t}function ts(i,e,t,n=0,s=1,r=s,a=s){return new Ge().compose(new D(i,e,t),new It().setFromEuler(new Gt(0,n,0)),new D(s,r,a))}function Tt(i){return i.rotation.y=Math.PI,i.scale.x=-1,i}function er(i,e){return i.rotation.y=e,i.scale.x=-1,i}var ze={flame:"#ff9038",flameCore:"#ffe4a8",tungsten:"#ffc27a",warm:"#ffd6a6",sodium:"#ffb152",tube:"#e4f3ff",flood:"#f3f1ff",amber:"#ffae62"},ql=new D;function Xt(i){i.updateWorldMatrix(!0,!1);let e=i.geometry,t=e.parameters||{},n=[];if(e.type==="CylinderGeometry"){let a=1/Math.cos(Math.PI/8);for(let o=0;o<8;o++){let l=o/8*se,c=Math.cos(l)*a,h=Math.sin(l)*a;n.push([c*t.radiusTop,t.height/2,h*t.radiusTop],[c*t.radiusBottom,-t.height/2,h*t.radiusBottom])}}else{e.boundingBox||e.computeBoundingBox();let r=e.boundingBox;for(let a=0;a<8;a++)n.push([a&1?r.max.x:r.min.x,a&2?r.max.y:r.min.y,a&4?r.max.z:r.min.z])}let s=[];return n.forEach(([r,a,o])=>{ql.set(r,a,o).applyMatrix4(i.matrixWorld),s.push(Math.round(ql.x*1e3)/1e3,Math.round(ql.y*1e3)/1e3,Math.round(ql.z*1e3)/1e3)}),s}function Xn(i,e,t,n,s,r){let a=[];for(let o=0;o<8;o++)a.push(o&1?n:i,o&2?s:e,o&4?r:t);return a}var Ks={z0:-15,tread:1.5,y0:1.3,rise:.95,rows:11,cam:6,aisle:14,pitch:.62};function kh(){let i=[];for(let e=0;e<78;e++){let t=Ks.pitch*(e-38.5);Math.abs(Math.abs(t)-Ks.aisle)>=.6&&i.push(t)}return i}var zh=new Map;function ya(i,e,t){let n=e+"|"+i;return zh.has(n)||zh.set(n,t(i)),zh.get(n)}var Vh=["side-left","side-right","stage-left","stage-centre","stage-right"].map(i=>`sponsors/bookphysio-${i}.webp`);function Wh(i){let e=i.width,t=i.height,n=document.createElement("canvas");n.width=e,n.height=t;let s=n.getContext("2d");s.drawImage(i,0,0);let r=s.getImageData(0,0,e,t).data,a=e,o=t,l=-1,c=-1;for(let h=0;h<t;h++)for(let f=0;f<e;f++){let u=(h*e+f)*4;r[u+3]>24&&!(r[u]>238&&r[u+1]>238&&r[u+2]>238)&&(f<a&&(a=f),f>l&&(l=f),h<o&&(o=h),h>c&&(c=h))}return l<a?{x:0,y:0,w:e,h:t}:{x:a,y:o,w:l-a+1,h:c-o+1}}function Xh(i,e,t,n={}){let s=n.bg||"#09080b",r=it(e,t,o=>{o.fillStyle=s,o.fillRect(0,0,e,t)}),a=new Image;return a.onload=()=>{let o=r.image.getContext("2d"),l=Wh(a),c=(n.fit==="contain"?Math.min:Math.max)(e/l.w,t/l.h),h=l.w*c,f=l.h*c;o.fillStyle=s,o.fillRect(0,0,e,t),o.imageSmoothingQuality="high",o.drawImage(a,l.x,l.y,l.w,l.h,(e-h)/2,(t-f)/2,h,f),r.needsUpdate=!0},a.src=i,r}var Dy=["ambient","key","architectural","practical","festive","show","flame","garbo"],Ld={paused:{ambient:1,key:.75,architectural:1,practical:1,festive:.7,show:.2,flame:1,garbo:1},playing:{ambient:1,key:1,architectural:.85,practical:1,festive:1,show:1,flame:1,garbo:1},aarti:{ambient:.55,key:.22,architectural:.45,practical:.5,festive:.28,show:.06,flame:1.4,garbo:1.25}},Zl=class{constructor(){this.now={...Ld.paused},this.cue="paused"}update(e,t){this.cue=(t.aarti||0)>.5?"aarti":t.on?"playing":"paused";let n=Ld[this.cue],s=t.reduce?1:Math.min(1,e*1.8);return Dy.forEach(r=>{this.now[r]+=(n[r]-this.now[r])*s}),this.garboLit=t.lit!=null?t.lit:t.on?1:.35,this.now}};function qh(i,e){return .8+.11*Math.sin(i*7.3+e)*Math.sin(i*3.1+e*1.7)+.06*Math.sin(i*17+e*3.3)+.03*Math.sin(i*29+e*5.1)}var Oi=["key","architectural","practical","festive","show","flame"],ns={key:"Key",architectural:"Arch",practical:"Practical",festive:"Festive",show:"Show",flame:"Flame"},Dd={soft:[[0,1],[.35,.55],[.7,.16],[1,0]],tight:[[0,1],[.12,.62],[.35,.2],[.7,.05],[1,0]]};function Ud(i,e,t,n,s=1024,r=null){let a=e.d/e.w,o=a>1?Math.max(64,Math.round(s/a)):s,l=a>1?s:Math.max(64,Math.round(s*a)),c={},h={};Oi.forEach(v=>{let g=document.createElement("canvas");g.width=o,g.height=l,h[v]=g;let d=new _n(g);d.colorSpace=xn,d.flipY=!0,c[v]=d});function f(v){Oi.forEach(g=>{let d=h[g].getContext("2d");d.globalCompositeOperation="source-over",d.fillStyle="#000",d.fillRect(0,0,o,l)}),t.forEach(g=>{if(!g.ground||!h[g.layer])return;let d=h[g.layer].getContext("2d"),x=(g.x-e.cx+e.w/2)/e.w*o,b=(g.z-e.cz+e.d/2)/e.d*l,_=g.rx/e.w*o,E=g.rz/e.d*l,T=ri(g.theme?v.glow:g.hex),w=Math.min(1,g.k*2.5);d.save(),d.globalCompositeOperation="lighter",d.translate(x,b),d.scale(Math.max(.5,_),Math.max(.5,E));let y=d.createRadialGradient(0,0,0,0,0,1),M=`${Math.round(T.r*255)},${Math.round(T.g*255)},${Math.round(T.b*255)}`;(Dd[g.falloff]||Dd.soft).forEach(([A,I])=>y.addColorStop(A,`rgba(${M},${w*I})`)),d.fillStyle=y,d.beginPath(),d.arc(0,0,1,0,se),d.fill(),d.restore()}),Oi.forEach(g=>c[g].needsUpdate=!0)}f(n);let u={gain:{value:5.8},uT:{value:0},mDecal:{value:null},decalA:{value:new Nt(0,-1,0,-1)}};if(r){let v=new _n(r.canvas);v.colorSpace=zt,v.anisotropy=8,u.mDecal.value=v;let g=r.rect,d=g.cx-g.w/2,x=g.cz-g.d/2;u.decalA.value.set(e.w/g.w,(e.cx-e.w/2-d)/g.w,e.d/g.d,1-(e.cz+e.d/2-x)/g.d)}else{let v=new Yi(new Uint8Array(4),1,1);v.needsUpdate=!0,u.mDecal.value=v}Oi.forEach(v=>{u["lv"+ns[v]]={value:1},u["m"+ns[v]]={value:c[v]}});let p=Oi.map(v=>`texture2D(m${ns[v]}, vLayerUv).rgb * lv${ns[v]}${v==="flame"?" * flameFlicker":""}`).join(" + "),m=i.material;return m.onBeforeCompile=v=>{Object.assign(v.uniforms,u),v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vLayerUv;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vLayerUv = uv;`),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vLayerUv;
uniform sampler2D ${Oi.map(g=>"m"+ns[g]).join(", ")}, mDecal;
uniform float ${Oi.map(g=>"lv"+ns[g]).join(", ")}, gain, uT;
uniform vec4 decalA;`).replace("#include <map_fragment>",`#include <map_fragment>
vec2 dUv = vec2(vLayerUv.x * decalA.x + decalA.y, vLayerUv.y * decalA.z + decalA.w);
if (dUv.x > 0.0 && dUv.x < 1.0 && dUv.y > 0.0 && dUv.y < 1.0) { vec4 dc = texture2D(mDecal, dUv); diffuseColor.rgb = mix(diffuseColor.rgb, dc.rgb, dc.a); }`).replace("#include <aomap_fragment>",`float flameFlicker = 0.8 + 0.12 * sin(uT * 7.3 + vLayerUv.x * 331.0 + vLayerUv.y * 197.0) * sin(uT * 3.1 + vLayerUv.y * 263.0) + 0.06 * sin(uT * 17.0 + vLayerUv.x * 157.0);
reflectedLight.indirectDiffuse += diffuseColor.rgb * gain * (${p});
#include <aomap_fragment>`)},m.customProgramCacheKey=()=>"ground-layers-3",m.needsUpdate=!0,{set(v,g){Oi.forEach(d=>{u["lv"+ns[d]].value=v[d]}),u.uT.value=g||0},repaint:f,canvases:h,uniforms:u}}var Nd=new Map;function z(i,e=.85,t=0,n){let s=i+"|"+e+"|"+t+(n?JSON.stringify(n):""),r=Nd.get(s);return r||(r=new $e(Object.assign({color:i,roughness:e,metalness:t},n||{})),Nd.set(s,r)),r}function Jl(i,e=3){return new vt({color:new ye(i).multiplyScalar(e)})}var $l=class{constructor(e=.06,t=6){this.list=[],this.geo=new yn(e,t>6?1:0),this.mesh=null}add(e,t,n,s,r={}){this.list.push({x:e,y:t,z:n,idx:s,ph:r.ph!=null?r.ph:Math.random()*se,k:r.k||1,s:r.s||1,twinkle:r.twinkle!=null?r.twinkle:.28,fixed:r.color||null,group:r.group||0,layer:r.layer||"festive"})}build(e){let t=this.list.length;if(!t)return null;let n=new Mt(this.geo,new vt({color:"#ffffff"}),t),s=new Ge;return this.list.forEach((r,a)=>n.setMatrixAt(a,s.makeScale(r.s,r.s,r.s).setPosition(r.x,r.y,r.z))),n.instanceColor=new Wt(new Float32Array(t*3),3),n.frustumCulled=!1,e.add(n),this.mesh=n,n}update(e,t,n,s,r,a){var c,h;if(!this.mesh)return;let o=this.mesh.instanceColor.array,l=new ye;for(let f=0;f<this.list.length;f++){let u=this.list[f];l.copy(u.fixed?ri(u.fixed):ri(t[u.idx%t.length]));let p=r?1:1-u.twinkle+u.twinkle*Math.sin(e*2.6+u.ph),m=a&&(c=a[u.group])!=null?c:1,v=u.layer==="festive"||u.layer==="show"?s*.25:0,g=u.k*((h=n[u.layer])!=null?h:1)*(p+v)*2.3*m;o[f*3]=l.r*g,o[f*3+1]=l.g*g,o[f*3+2]=l.b*g}this.mesh.instanceColor.needsUpdate=!0}},Yh=class{constructor(){this.list=[];let e=new lt;e.setAttribute("position",new Qe([-.5,0,0,.5,0,0,0,-1.6,0],3)),e.setAttribute("normal",new Qe([0,0,1,0,0,1,0,0,1],3)),this.geo=e}add(e,t,n,s,r,a){this.list.push({x:e,y:t,z:n,ry:s,size:r,idx:a,ph:Math.random()*se})}build(e){let t=this.list.length;if(!t)return null;let n=new Mt(this.geo,new Vr({color:"#ffffff",side:at}),t);return n.instanceColor=new Wt(new Float32Array(t*3),3),n.frustumCulled=!1,e.add(n),this.mesh=n,this.pose(0,!0),n}setPalette(e){if(!this.mesh)return;let t=this.mesh.instanceColor.array;this.list.forEach((n,s)=>{let r=ri(e[n.idx%e.length]);t[s*3]=r.r,t[s*3+1]=r.g,t[s*3+2]=r.b}),this.mesh.instanceColor.needsUpdate=!0}pose(e,t){if(!this.mesh)return;let n=new It,s=new Gt,r=new D,a=new D,o=new Ge;this.list.forEach((l,c)=>{s.set(t?0:Math.sin(e*1.7+l.ph)*.25,l.ry,0,"YXZ"),n.setFromEuler(s),r.set(l.size,l.size,l.size),a.set(l.x,l.y,l.z),this.mesh.setMatrixAt(c,o.compose(a,n,r))}),this.mesh.instanceMatrix.needsUpdate=!0}},Zh=class{constructor(e="#2a2019",t=.8){this.pts=[],this.hex=e,this.opacity=t}line(e,t){this.pts.push(e[0],e[1],e[2],t[0],t[1],t[2])}cable(e,t,n,s=20){let r=Nn(e,t,n,0);for(let a=1;a<=s;a++){let o=Nn(e,t,n,a/s);this.line(r,o),r=o}}build(e){if(!this.pts.length)return null;let t=new lt;t.setAttribute("position",new Qe(this.pts,3));let n=new Cr(t,new Us({color:this.hex,transparent:this.opacity<1,opacity:this.opacity}));return e.add(n),n}};function oi(i,e,t,n,s,r,a={}){i.wires.cable(e,t,n);let o=Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),l=Math.max(2,Math.round(o/(a.gap||(s==="flags"?.9:1.1)))),c=Math.atan2(t[0]-e[0],t[2]-e[2])+Math.PI/2;for(let h=1;h<l;h++){let f=Nn(e,t,n,h/l);s==="flags"?i.flags.add(f[0],f[1],f[2],c,.3,h+r):(i.bulbs.add(f[0],f[1]-.06,f[2],h+r,{ph:h*1.7+r,s:a.s||1}),a.pools!==!1&&h%3===1&&i.pools.add(f[0],.02,f[2],2.8,2.8,"#ffd58a",.085,{layer:"festive",theme:!0}))}}function Uy(){return Ny(128,t=>{t.clearRect(0,0,128,128);for(let n=0;n<4;n++){let s=(n+.5)*128/4;t.fillStyle="rgba(255,255,255,.05)",t.fillRect(s-.5,0,1,128);for(let r=0;r<8;r++){let a=(r+.5)*128/8+n%2*128/16,o=r%4===n%4?1:.5,l=t.createRadialGradient(s,a,0,s,a,6);l.addColorStop(0,`rgba(255,255,255,${o})`),l.addColorStop(.35,`rgba(255,255,255,${o*.55})`),l.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=l,t.fillRect(s-6,a-6,12,12)}}})}function Ny(i,e){let t=document.createElement("canvas");t.width=t.height=i,e(t.getContext("2d"));let n=new _n(t);return n.wrapS=n.wrapT=Jt,n.colorSpace=zt,n.anisotropy=4,n}var $h=class{constructor(){this.list=[],this.sets=[]}add(e,t,n,s,r,a,o,l,c){this.list.push({x0:e,z0:t,x1:n,z1:s,y0:r,y1:a,nx:o,nz:l,idx:(c%3+3)%3})}build(e){if(!this.list.length)return;let t=Uy(),n=1.2;for(let s=0;s<3;s++){let r=[],a=[];if(this.list.filter(f=>f.idx===s).forEach(f=>{let u=Math.hypot(f.x1-f.x0,f.z1-f.z0),p=f.nx*.04,m=f.nz*.04,v=u/n,g=(f.y1-f.y0)/n,d=[f.x0+p,f.y0,f.z0+m],x=[f.x1+p,f.y0,f.z1+m],b=[f.x1+p,f.y1,f.z1+m],_=[f.x0+p,f.y1,f.z0+m];[d,x,b,d,b,_].forEach(E=>r.push(E[0],E[1],E[2])),a.push(0,0,v,0,v,g,0,0,v,g,0,g)}),!r.length)continue;let o=new lt;o.setAttribute("position",new Qe(r,3)),o.setAttribute("uv",new Qe(a,2));let l=t.clone();l.needsUpdate=!0;let c=new vt({map:l,color:"#ffffff",transparent:!0,depthWrite:!1,blending:wn,side:at,fog:!1}),h=new te(o,c);h.renderOrder=3,h.frustumCulled=!1,h.userData.dynamic=!0,e.add(h),this.sets.push({m:c,t:l,s})}}update(e,t,n,s,r){this.sets.forEach(({m:a,t:o,s:l})=>{var h;let c=((h=n.festive)!=null?h:1)*(1.7+.35*s)*(r?1:.88+.12*Math.sin(e*1.1+l*2.1));a.color.copy(ri(t[[1,2,4][l]%t.length])).multiplyScalar(c),r||(o.offset.y=e*(.16+l*.04)%1)})}},Jh=class{constructor(){this.list=[]}add(e,t,n,s,r,a,o=1,l={}){let c=!!l.vertical,h=l.layer||"practical";this.list.push({x:e,y:t,z:n,rx:s,rz:r,hex:a,k:o,vertical:c,ry:l.ry||0,theme:l.theme||!1,layer:h,ground:!c&&t<.1&&!l.live,falloff:l.falloff||(h==="flame"?"tight":"soft"),ph:e*3.7+n*1.3})}build(e){this.bakedGround&&(this.list=this.list.filter(c=>!c.ground));let t=this.list.length;if(!t)return null;let n=new Ke(1,1),s=new vt({map:Qs(),color:"#ffffff",transparent:!0,blending:wn,depthWrite:!1,fog:!1,side:at}),r=new Mt(n,s,t);r.instanceColor=new Wt(new Float32Array(t*3),3);let a=new It,o=new Gt,l=new Ge;return this.list.forEach((c,h)=>{o.set(c.vertical?0:-Math.PI/2,c.ry,0,"YXZ"),a.setFromEuler(o),r.setMatrixAt(h,l.compose(new D(c.x,c.y,c.z),a,new D(c.rx*2,c.rz*2,1)))}),r.frustumCulled=!1,r.renderOrder=2,e.add(r),this.mesh=r,r}update(e,t,n=0,s=!1){if(!this.mesh)return;let r=this.mesh.instanceColor.array;this.list.forEach((a,o)=>{var h;let l=ri(a.theme?t:a.hex),c=a.k*((h=e[a.layer])!=null?h:1)*(a.layer==="flame"&&!s?qh(n,a.ph):1);r[o*3]=l.r*c,r[o*3+1]=l.g*c,r[o*3+2]=l.b*c}),this.mesh.instanceColor.needsUpdate=!0}};function Fy(){let i=[[0,0],[.42,.1],[.55,.3],[.48,.55],[.3,.8],[.12,.98],[0,1.1]].map(([e,t])=>new le(e,t));return new rn(i,8)}function By(){let i=[[0,0],[.55,.02],[.9,.25],[1,.55],[.92,.6],[.8,.4],[0,.35]].map(([e,t])=>new le(e,t));return new rn(i,10)}var Kh=class{constructor(){this.list=[]}add(e,t,n,s={}){let r=s.s||.045;this.list.push({x:e,y:t,z:n,s:r,bowl:s.bowl===void 0?"clay":s.bowl,layer:s.layer||"flame",ph:s.ph!=null?s.ph:e*5.3+n*2.9+t*7.1,k:s.k||1})}build(e,t){let n=this.list.length;if(!n)return;let s=new Ge,r=this.list.filter(c=>c.bowl);if(r.length){let c=new Mt(By(),new $e({color:"#ffffff",roughness:.75,metalness:.2}),r.length),h=new ye;r.forEach((f,u)=>{c.setMatrixAt(u,s.makeScale(f.s,f.s*.8,f.s).setPosition(f.x,f.y,f.z)),c.setColorAt(u,h.set(f.bowl==="brass"?"#c9953a":"#8a3f1e"))}),e.add(c)}let a=Fy(),o=new Mt(a,new vt({color:"#ffffff",fog:!1}),n),l=new Mt(a,new vt({color:"#ffffff",fog:!1}),n);[o,l].forEach(c=>{c.instanceColor=new Wt(new Float32Array(n*3),3),c.frustumCulled=!1,e.add(c)}),this.body=o,this.core=l,this.update(0,{flame:1,garbo:1},!0)}lightPools(e){this.list.forEach(t=>{let n=t.s*20;e.pools.add(t.x,t.y<.1?.02:t.y+.01,t.z,n,n,ze.flame,.24*t.k,{layer:t.layer,live:t.y>=.1})})}update(e,t,n){if(!this.body)return;let s=ri(ze.flame),r=ri(ze.flameCore),a=this.body.instanceColor.array,o=this.core.instanceColor.array,l=new It,c=new Gt,h=new D,f=new D,u=new Ge;this.list.forEach((p,m)=>{var _;let v=n?.9:qh(e,p.ph),g=(_=t[p.layer])!=null?_:1,d=p.s*1.5*(.75+.35*v)*Math.min(1.2,g),x=n?0:.12*Math.sin(e*2.3+p.ph)+.05*Math.sin(e*7+p.ph*2);c.set(0,0,x),l.setFromEuler(c),f.set(p.x,p.y+p.s*.3,p.z),h.set(p.s*.42,d,p.s*.42),this.body.setMatrixAt(m,u.compose(f,l,h)),h.set(p.s*.2,d*.55,p.s*.2),this.core.setMatrixAt(m,u.compose(f,l,h));let b=p.k*g*(.7+.45*v);a[m*3]=s.r*3.2*b,a[m*3+1]=s.g*3.2*b,a[m*3+2]=s.b*3.2*b,o[m*3]=r.r*5*b,o[m*3+1]=r.g*5*b,o[m*3+2]=r.b*5*b}),this.body.instanceMatrix.needsUpdate=this.core.instanceMatrix.needsUpdate=!0,this.body.instanceColor.needsUpdate=this.core.instanceColor.needsUpdate=!0}},Oy=(()=>{let i=new nt(.04,1,1,20,1,!0);return i.translate(0,-.5,0),i})();function Hy(){return new Lt({uniforms:{color:{value:new ye("#ffffff")},opacity:{value:.2}},vertexShader:"varying float vK; varying vec3 vN; varying vec3 vV; void main(){ vK = -position.y; vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec3 color; uniform float opacity; varying float vK; varying vec3 vN; varying vec3 vV; void main(){ float edge = pow(abs(dot(vN, vV)), 1.4); float a = opacity * pow(1.0 - clamp(vK,0.0,1.0), 1.6) * edge; gl_FragColor = vec4(color * a, a); }",transparent:!0,depthWrite:!1,blending:wn,side:at})}var ai=class{constructor(e,t,n=10,s=1.2,r=.18){this.mesh=new te(Oy,Hy()),this.mesh.material.uniforms.color.value.set(t),this.mesh.material.uniforms.opacity.value=r,this.mesh.renderOrder=3,this.mesh.frustumCulled=!1,this.length=n,this.spread=s,this.base=r,e.add(this.mesh),this._up=new D(0,-1,0)}aim(e,t){let n=new D(t[0]-e[0],t[1]-e[1],t[2]-e[2]),s=n.length();this.mesh.position.set(e[0],e[1],e[2]),this.mesh.quaternion.setFromUnitVectors(this._up,n.normalize());let r=Math.tan(this.spread*.5)*s;this.mesh.scale.set(r,s,r)}set(e,t){this.mesh.material.uniforms.color.value.set(e),this.mesh.material.uniforms.opacity.value=this.base*t,this.mesh.visible=t>.01}};function Fd(){let i={bulbs:new $l(.07,8),bigBulbs:new $l(.13,8),flags:new Yh,wires:new Zh,pools:new Jh,flames:new Kh,curtains:new $h,beams:[],updaters:[],lit:[]},e=new Map;return i.glow=(t,n=1,s="practical")=>{let r=t+"|"+n+"|"+s;if(!e.has(r)){let a=Jl(t,n);i.lit.push({mat:a,base:a.color.clone(),layer:s}),e.set(r,a)}return e.get(r)},i.selfLit=(t,n,s="practical")=>(t.map&&!t.emissiveMap?(t.emissiveMap=t.map,t.emissive.set("#ffffff")):t.emissive.getHex()===0&&t.emissive.set("#ffffff"),i.lit.push({mat:t,emissive:n,layer:s}),t),i.litMap=(t,n=1,s="practical",r)=>{let a=new vt(Object.assign({map:t,color:new ye(n,n,n)},r||{}));return i.lit.push({mat:a,base:a.color.clone(),layer:s}),a},i}function Bd(i,e){i.lit.forEach(t=>{var s;let n=(s=e[t.layer])!=null?s:1;t.emissive!=null?t.mat.emissiveIntensity=t.emissive*n:t.mat.color.copy(t.base).multiplyScalar(n)})}function Od(i,e){i.flames.build(e,i),i.curtains.build(e),i.bulbs.build(e),i.bigBulbs.build(e),i.flags.build(e),i.wires.build(e),i.pools.build(e)}function qn(i,e,t,n,s,r,a=0,o=0,l=0){let c=new te(e,t);return c.position.set(n,s,r),c.rotation.set(a,o,l),i.add(c),c}var Fn=(i,e,t,n,s,r,a,o,l,c,h)=>qn(i,new xe(e,t,n),o,s,r,a,l,c,h),wt=(i,e,t,n,s,r,a,o,l=16,c,h,f)=>qn(i,new nt(e,t,n,l),o,s,r,a,c,h,f),an={shell:()=>z("#6b1420",.35,.3),chrome:()=>z("#b9bcc2",.3,.85),brass:()=>z("#b88a34",.42,.8),head:()=>z("#cfc4ad",.6),black:()=>z("#141416",.5,.3),wood:()=>z("#7a3f1c",.45,.1)},Kl=null;function zy(){return Kl||(Kl=it(256,256,(i,e)=>{let t=e/2;i.fillStyle="#c9bda4",i.beginPath(),i.arc(t,t,t,0,se),i.fill(),i.strokeStyle="#8e1b2c",i.lineWidth=14,i.beginPath(),i.arc(t,t,t-10,0,se),i.stroke(),i.translate(t,t);for(let n=0;n<12;n++)i.save(),i.rotate(n/12*se),i.fillStyle=n%2?"#c9963f":"#8e1b2c",i.beginPath(),i.ellipse(52,0,30,11,0,0,se),i.fill(),i.restore();i.fillStyle="#c9963f",i.beginPath(),i.arc(0,0,22,0,se),i.fill()}),Kl)}var Ql=null;function Gy(){return Ql||(Ql=it(512,128,(i,e,t)=>{i.fillStyle="#16161a",i.fillRect(0,0,e,t),i.fillStyle="#7fd0ff",i.fillRect(e*.42,t*.1,e*.16,t*.18),i.fillStyle="#8c8f96";for(let r=0;r<10;r++)i.beginPath(),i.arc(e*(.08+r*.03),t*.2,4,0,se),i.fill(),i.beginPath(),i.arc(e*(.66+r*.03),t*.2,4,0,se),i.fill();let n=t*.45,s=52;i.fillStyle="#f2efe6",i.fillRect(e*.02,n,e*.96,t*.5),i.fillStyle="rgba(0,0,0,.35)";for(let r=1;r<s;r++)i.fillRect(e*.02+e*.96*r/s,n,1,t*.5);i.fillStyle="#111";for(let r=0;r<s;r++)[0,1,3,4,5].indexOf(r%7)>=0&&i.fillRect(e*.02+e*.96*(r+.68)/s,n,e*.96/s*.6,t*.3)}),Ql)}var Hd=null,ky=()=>Hd||(Hd=new $e({roughness:.85,map:it(128,128,(i,e,t)=>{i.fillStyle="#141313",i.fillRect(0,0,e,t),i.fillStyle="rgba(255,255,255,.06)";for(let n=5;n<t-5;n+=5)for(let s=5;s<e-5;s+=5)i.fillRect(s,n,1.5,1.5);i.strokeStyle="rgba(255,255,255,.14)",i.lineWidth=3,i.beginPath(),i.arc(e/2,t*.58,e*.3,0,se),i.stroke(),i.fillStyle="rgba(232,176,75,.7)",i.fillRect(e*.38,t*.08,e*.24,5)})}));function Qh(i,e,t,n,s,r,a,o=0){let l=new gt;return l.position.set(s,r,a),l.rotation.x=o,i.add(l),Fn(l,e,t,n,0,t/2,0,z("#1a1818",.75)),Tt(qn(l,new Ke(e*.92,t*.88),ky(),0,t/2,-n/2-.003)),l}function Vy(i,e,t){let{kit:n,root:s,floor:r}=i,a=[],o=p=>(a.push(Xt(p)),p),l=r+.3,c=an.shell(),h=an.chrome(),f=an.brass();Fn(s,2.3,.3,2,e,r+.15,t-.5,z("#1c1414",.8)),Fn(s,2.2,.01,1.9,e,l+.005,t-.5,z("#4a1420",.95));let u=qn(s,new Ke(2.3,.03),n.glow("#ffb46a",1.2,"show"),e,r+.26,t-1.505);return Tt(u),wt(s,.17,.16,.08,e,l+.52,t+.05,an.black(),16),wt(s,.025,.025,.5,e,l+.25,t+.05,h,6),o(wt(s,.28,.28,.42,e,l+.29,t-.72,c,24,Math.PI/2)),Tt(qn(s,new ln(.27,28),new $e({map:zy(),roughness:.6}),e,l+.29,t-.935)),[-.935,-.505].forEach(p=>{qn(s,new jt(.285,.014,5,24),h,e,l+.29,t+p).rotation.set(0,0,0)}),[[-.17,.13],[.17,.12]].forEach(([p,m])=>{let v=o(wt(s,m,m,.2,e+p,l+.8,t-.6,c,18,.35));wt(s,m*1.02,m*1.02,.012,e+p,l+.8+.1*Math.cos(.35),t-.6+.1*Math.sin(.35),an.head(),18,.35),wt(s,.012,.012,.25,e+p*.5,l+.62,t-.66,h,5)}),o(wt(s,.18,.18,.13,e-.42,l+.62,t-.3,h,20,.1)),wt(s,.18,.18,.01,e-.42,l+.69,t-.29,an.head(),20,.1),[0,1,2].forEach(p=>{let m=p/3*se;wt(s,.01,.01,.6,e-.42+Math.cos(m)*.1,l+.28,t-.3+Math.sin(m)*.1,h,4,Math.sin(m)*.3,0,-Math.cos(m)*.3)}),o(wt(s,.2,.2,.38,e+.45,l+.42,t-.28,c,20)),wt(s,.2,.2,.01,e+.45,l+.615,t-.28,an.head(),20),[0,1,2].forEach(p=>{let m=p/3*se+.5;wt(s,.01,.01,.3,e+.45+Math.cos(m)*.2,l+.15,t-.28+Math.sin(m)*.2,h,4)}),wt(s,.012,.012,.95,e-.74,l+.47,t-.22,h,5),o(wt(s,.17,.17,.012,e-.74,l+.93,t-.22,f,22)),wt(s,.17,.17,.012,e-.74,l+.96,t-.22,f,22),wt(s,.012,.012,1.4,e-.66,l+.7,t-.8,h,5),o(wt(s,.24,.24,.01,e-.62,l+1.45,t-.74,f,24,.3,0,.2)),wt(s,.012,.012,1.2,e+.7,l+.6,t-.66,h,5),o(wt(s,.27,.27,.01,e+.66,l+1.25,t-.62,f,24,.3,0,-.2)),wt(s,.03,.02,.15,e+.1,l+.15,t-1.02,an.black(),8,Math.PI/2),a}function Wy(i,e,t){let{root:n,floor:s}=i,r=[],a=t-.36,o=s+.92,l=an.black();[-.45,.45].forEach(f=>{[.5,-.5].forEach(u=>r.push(Xt(Fn(n,.035,1.02,.035,e+f,s+.44,a,l,u)))),Fn(n,.04,.03,.62,e+f,s+.015,a,l)});let c=Fn(n,1.28,.1,.36,e,o,a,l);Tt(qn(n,new Ke(1.2,.05),z("#5a5d66",.35,.8),e,o-.01,a-.182));let h=qn(n,new Ke(1.26,.34),new $e({map:Gy(),roughness:.5}),e,o+.051,a);return h.rotation.x=-Math.PI/2,r.push(Xt(c)),r}function Xy(i,e,t){let{root:n,floor:s}=i,r=[];Fn(n,1.2,.1,1.1,e,s+.05,t+.05,z("#ece6d6",.95)),Fn(n,1.22,.02,1.12,e,s+.01,t+.05,z("#7e1827",.9)),wt(n,.13,.13,.9,e,s+.23,t+.52,z("#b8312b",.85),14,0,0,Math.PI/2);let a=t-.32,o=s+.1;[[-.16,.1],[.14,.075]].forEach(([h,f])=>{let u=qn(n,new jt(f*.9,.025,5,16),z("#7e1827",.9),e+h,o+.02,a);u.rotation.x=Math.PI/2});let l=qn(n,new rn([[0,0],[.07,.01],[.12,.07],[.12,.14],[.1,.2]].map(([h,f])=>new le(h,f)),18),z("#9aa0a6",.25,.85),e-.16,o+.02,a),c=wt(n,.075,.085,.25,e+.14,o+.145,a,an.wood(),16);return wt(n,.1,.1,.008,e-.16,o+.225,a,an.head(),18),wt(n,.075,.075,.008,e+.14,o+.272,a,an.head(),16),wt(n,.035,.035,.01,e-.19,o+.229,a,an.black(),12),wt(n,.028,.028,.01,e+.14,o+.276,a,an.black(),12),r.push(Xt(l),Xt(c)),wt(n,.012,.012,.75,e+.42,o+.37,a+.1,an.black(),5),wt(n,.01,.01,.4,e+.25,o+.72,a,an.black(),5,0,0,Math.PI/2-.3),r}function jh(i,e,t){Fn(i.root,.46,.22,.32,e,i.floor+.13,t,z("#1c1c20",.5,.25),-.45)}function qy(i,e,t){let{root:n,floor:s}=i,r=new gt;r.position.set(e,s,t),r.rotation.x=.22,n.add(r);let a=z("#c46a2a",.3,.1),o=z("#3a2412",.5);wt(r,.19,.19,.1,0,.3,0,a,22,Math.PI/2),wt(r,.15,.15,.1,0,.58,0,a,20,Math.PI/2),Tt(qn(r,new ln(.05,16),an.black(),0,.46,-.051)),Fn(r,.05,.5,.03,0,.92,-.02,o),Fn(r,.08,.14,.03,0,1.22,-.02,z("#1b120b",.5)),[-.12,.12].forEach(l=>Fn(n,.02,.5,.02,e+l,s+.24,t+.12,an.black(),-.3))}function jl(i,e,t,n){let s={kit:i,root:e,floor:n.floor},r={},a=n.x1-n.x0;return t.forEach(o=>{let l=n.x0+a*o.u,c=n.front+o.d;o.role==="drums"?r.drums=Vy(s,l,c):o.role==="keys"?r.keys=Wy(s,l,c):o.role==="tabla"?r.tabla=Xy(s,l,c):o.role==="guitar"?(Qh(e,.6,.48,.28,l-.55,n.floor,c+.55),n.small||(qy(s,l+.62,c+.35),jh(s,l,c-.95))):o.role==="bass"?(Qh(e,.62,.9,.42,l+.5,n.floor,c+.62),Qh(e,.62,.2,.34,l+.5,n.floor+.9,c+.6),jh(s,l,c-.95)):o.role==="dhol"&&!n.small&&jh(s,l,c-.95)}),r}function zd(i){let e=new gt,t=new gt;e.add(t),i.add(e);let n=z("#2e2b33",.4,.3),s=z("#141417",.45,.5),r=z("#9a9ea6",.3,.8),a=(E,T,w,y,M,A=0,I=0,N=0)=>{let C=new te(E,T);return C.position.set(w,y,M),C.rotation.set(A,I,N),t.add(C),C};a(new Ft(.2,16,10),n,0,0,0).scale.set(1,.42,1.45),a(new xe(.18,.07,.3),z("#1d1b22",.5,.2),0,.085,-.03);let l=[],c=[];[[1,1],[-1,1],[1,-1],[-1,-1]].forEach(([E,T],w)=>{let y=E*.38,M=T*.36,A=Math.hypot(y,M);a(new xe(.035,.03,A),s,y/2,.01,M/2,0,Math.atan2(y,M)),l.push(a(new nt(.04,.045,.06,12),r,y,.04,M));let I=a(new ln(.2,24),new vt({color:"#d8dce6",transparent:!0,opacity:.16,depthWrite:!1,side:at}),y,.075,M,-Math.PI/2),N=a(new xe(.4,.004,.025),z("#1a1a1e",.5),y,.078,M);c.push({blade:N,dir:w%3===0?1:-1}),I.renderOrder=4}),[-1,1].forEach(E=>{a(new xe(.02,.2,.02),s,E*.12,-.14,.05,0,0,E*.25),a(new xe(.02,.02,.34),s,E*.15,-.24,.02)});let h=new gt;h.position.set(0,-.1,.2),t.add(h),h.add(new te(new xe(.1,.08,.1),z("#222127",.4,.4)));let f=new te(new nt(.03,.035,.06,14),z("#0c0c10",.15,.6));f.rotation.x=Math.PI/2,f.position.z=.07,h.add(f);let u=new te(new ln(.024,14),new vt({color:new ye("#5a7cc0").multiplyScalar(1.4)}));u.position.z=.101,h.add(u);let p=(E,T,w,y,M)=>{let A=new te(new Ft(T,8,6),new vt({color:"#ffffff",fog:!1}));return A.position.set(w,y,M),A.userData.hex=new ye(E),t.add(A),A},m=p("#ff4a3a",.03,-.38,0,.36),v=p("#5dff8a",.03,.38,0,.36),g=p("#ffffff",.022,0,0,.3),d=p("#ff2a1e",.03,0,.13,-.05),x=p("#ffffff",.035,0,-.1,-.1),b=p("#ff2020",.008,.035,.03,.05);h.add(b);let _=(E,T)=>{E.material.color.copy(E.userData.hex).multiplyScalar(T),E.visible=T>.01};return e.visible=!1,{group:e,update(E,T,w){if(!E){e.visible=!1;return}e.visible=!0,e.position.set(E.x,E.y,E.z);let y=E.tx-E.x,M=E.tz-E.z,A=Math.hypot(y,M)||1;e.rotation.y=Math.atan2(y,M),t.rotation.x=.08+(w?0:.03*Math.sin(T*1.3)),t.rotation.z=w?0:.04*Math.sin(T*.9+1),h.rotation.x=Math.atan2(E.y,A)-t.rotation.x,c.forEach((P,H)=>{P.blade.rotation.y=w?H:T*90*P.dir});let I=T%1,N=w||I<.08||I>.18&&I<.26?1:0,C=w?0:T%1.6<.05?1:0;_(m,3),_(v,3),_(g,2.2),_(d,5*N),_(x,8*C),_(b,3*(Math.floor(T*1.5)%2===0||w?1:.3))}}}function Gd(i,e){i.fov=e.fov,i.aspect=e.aspect,i.near=.3,i.far=400,i.position.set(e.eye[0],e.eye[1],-e.eye[2]),i.up.set(0,1,0),i.lookAt(e.at[0],e.at[1],-e.at[2]),i.updateProjectionMatrix(),i.updateMatrixWorld()}function kd(i,e,t=10){let n=Math.acos(Math.max(.2,Math.min(1,1-.45*e.tilt))),s=Math.cos(e.rot),r=Math.sin(e.rot),a=new D(r,0,-s),o=new D(e.fx,0,-e.fz);i.position.copy(o).addScaledVector(new D(0,1,0),Math.cos(n)*90).addScaledVector(a,-Math.sin(n)*90),i.up.copy(a),i.lookAt(o);let l=e.span*e.aspect/2;i.left=-l,i.right=l,i.top=.56*e.span,i.bottom=-.44*e.span,i.near=Math.max(5,90-Math.max(3,t-1)/Math.cos(n)),i.far=200,i.updateProjectionMatrix(),i.updateMatrixWorld()}function ec(i){return new Lt({uniforms:{map:{value:null},texel:{value:new le(1/256,1/256)},blur:{value:0},gain:{value:i}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D map; uniform vec2 texel; uniform float blur, gain; varying vec2 vUv;
      void main(){
        vec3 c = texture2D(map, vUv).rgb;
        if (blur > 0.0) {
          vec2 d = texel * blur;
          c = c * 0.25 + (texture2D(map, vUv + vec2(d.x, 0.0)).rgb + texture2D(map, vUv - vec2(d.x, 0.0)).rgb + texture2D(map, vUv + vec2(0.0, d.y)).rgb + texture2D(map, vUv - vec2(0.0, d.y)).rgb) * 0.125
            + (texture2D(map, vUv + d).rgb + texture2D(map, vUv - d).rgb + texture2D(map, vUv + vec2(d.x, -d.y)).rgb + texture2D(map, vUv + vec2(-d.x, d.y)).rgb) * 0.0625;
        }
        gl_FragColor = vec4(c * gain, 1.0);
      }`})}var tr=null;function Yy(){return tr||(tr=it(64,256,(i,e,t)=>{i.clearRect(0,0,e,t),i.strokeStyle="#9a96a6",i.lineWidth=5,i.beginPath(),i.moveTo(3,0),i.lineTo(3,t),i.moveTo(e-3,0),i.lineTo(e-3,t),i.stroke(),i.lineWidth=3,i.beginPath();for(let n=0;n<t;n+=32)i.moveTo(3,n),i.lineTo(e-3,n+16),i.lineTo(3,n+32);i.stroke()}),tr.wrapS=tr.wrapT=Jt,tr)}var eu=new Map;function tc(i){if(!eu.has(i)){let e=Yy().clone();e.needsUpdate=!0,e.repeat.set(1,i),eu.set(i,new $e({map:e,alphaTest:.4,side:at,metalness:.7,roughness:.4}))}return eu.get(i)}function Zy(){return it(256,128,(i,e,t)=>{i.fillStyle="#6b1420",i.fillRect(0,0,e,t),i.fillStyle="#1f2a5a",i.fillRect(10,10,e-20,t-20),i.fillStyle="#7e1827",i.fillRect(18,18,e-36,t-36),i.strokeStyle="#d6a64a",i.lineWidth=2,i.strokeRect(14,14,e-28,t-28),i.fillStyle="#d6a64a",i.beginPath(),i.ellipse(e/2,t/2,34,22,0,0,se),i.fill(),i.fillStyle="#1f2a5a",i.beginPath(),i.ellipse(e/2,t/2,24,14,0,0,se),i.fill();for(let n=0;n<14;n++)i.fillStyle=n%2?"#d6a64a":"#e9dcc0",i.beginPath(),i.arc(28+n*15.4,26,3,0,se),i.arc(28+n*15.4,t-26,3,0,se),i.fill()})}function tu(i,e,t){let n=new gt,s=tc(t);for(let r=0;r<4;r++){let a=new te(new Ke(e,i),s),o=r/4*se;a.position.set(Math.sin(o)*e/2,0,Math.cos(o)*e/2),a.rotation.y=o,n.add(a)}return n}var va=null;function $y(){return va||(va=it(256,64,(i,e,t)=>{for(let n=0;n<e;n++){let s=.5+.5*Math.sin(n/e*se*6);i.fillStyle=`rgb(${Math.round(26+40*s)},${Math.round(5+8*s)},${Math.round(11+16*s)})`,i.fillRect(n,0,1,t)}}),va.wrapS=Jt,va)}function Jy(i){return it(512,64,(e,t,n)=>{let s=t/i;e.fillStyle="#4a1020",e.beginPath(),e.moveTo(0,0),e.lineTo(t,0);for(let r=i;r>0;r--){let a=r*s,o=a-s;e.lineTo(a,n*.45),e.quadraticCurveTo((o+a)/2,n*1.05,o,n*.45)}e.closePath(),e.fill(),e.strokeStyle="#d6a64a",e.lineWidth=3,e.beginPath();for(let r=0;r<i;r++){let a=r*s;e.moveTo(a,n*.45),e.quadraticCurveTo(a+s/2,n*1.02,a+s,n*.45)}e.stroke(),e.fillStyle="#d6a64a",e.fillRect(0,2,t,3)})}function Ky(){return it(512,64,(i,e,t)=>{let n=i.createLinearGradient(0,0,e,0);for(let s=0;s<40;s++)n.addColorStop(s/40,"#1c070b"),n.addColorStop((s+.45)/40,"#4a1420");i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="#c9963f",i.fillRect(0,0,e,4)})}function Qy(i){let t=Math.round(160*i);return it(t,160,n=>{let s=n.createLinearGradient(0,0,0,160);s.addColorStop(0,"#5a1320"),s.addColorStop(1,"#2e0810"),n.fillStyle=s,n.fillRect(0,0,t,160),n.strokeStyle="#d6a64a",n.lineWidth=5,n.strokeRect(8,8,t-16,144),n.lineWidth=2,n.strokeRect(18,18,t-36,124),n.fillStyle="rgba(214,166,74,.35)";for(let r=34;r<t-30;r+=22)n.beginPath(),n.arc(r,26,2.2,0,se),n.arc(r,134,2.2,0,se),n.fill()})}function jy(){return it(256,256,(i,e)=>{i.clearRect(0,0,e,e),i.translate(e/2,e/2),[[12,.38,.14,"rgba(240,138,36,.9)"],[12,.26,.1,"rgba(214,166,74,.95)"],[8,.15,.07,"rgba(255,214,120,1)"]].forEach(([t,n,s,r],a)=>{for(let o=0;o<t;o++)i.save(),i.rotate((o+a*.5)/t*se),i.fillStyle=r,i.beginPath(),i.ellipse(n*e*.95,0,s*e,s*e*.36,0,0,se),i.fill(),i.restore()}),i.fillStyle="#ffe6a8",i.beginPath(),i.arc(0,0,e*.06,0,se),i.fill(),i.strokeStyle="rgba(214,166,74,.8)",i.lineWidth=3,i.beginPath(),i.arc(0,0,e*.47,0,se),i.stroke()})}function e1(i,e){let n=Math.round(320*e),s=it(n,320,a=>a.clearRect(0,0,n,320)),r=new Image;return r.onload=()=>{let a=s.image.getContext("2d"),o=Wh(r),l=Math.min(n*.94/o.w,320*.9/o.h),c=o.w*l,h=o.h*l,f=(n-c)/2,u=(320-h)/2;a.clearRect(0,0,n,320),a.save(),a.shadowColor="rgba(0,0,0,.6)",a.shadowBlur=16,a.shadowOffsetY=3,a.fillStyle="#000",a.fillRect(f+2,u+2,c-4,h-4),a.restore(),a.imageSmoothingQuality="high",a.drawImage(r,o.x,o.y,o.w,o.h,f,u,c,h),s.needsUpdate=!0},r.src=i,s}function t1(i,e){let t=it(64,64,(n,s)=>{n.clearRect(0,0,s,s),n.fillStyle="rgba(0,0,0,.42)";for(let r=0;r<s;r+=8)n.fillRect(r,0,2,s),n.fillRect(0,r,s,2)});return t.wrapS=t.wrapT=Jt,t.repeat.set(i/.2,e/.2),t}function nu(i,e){let t=new gt,n=e.z,s=e.depth||3.2,r=n+s,a=e.x1-e.x0,o=(e.x0+e.x1)/2,l=.4,c=n+s*.45,h=(O,$,ie,Ee,_e)=>{let Ne=new te(O,$);return Ne.position.set(ie,Ee,_e),t.add(Ne),Ne},f=h(new Ke(a,e.h),new $e({map:Ky(),roughness:.9}),o,e.h/2,n);Tt(f),h(new xe(a,e.h,s),z("#1a0e0a",.9),o,e.h/2-.005,n+s/2+.01),h(new xe(a+.02,.02,s+.02),z("#2a1a12",.78,.05),o,e.h+.01,n+s/2).receiveShadow=!0,h(new xe(a+.04,.05,.05),z("#c9963f",.35,.7),o,e.h,n-.02);let u=[],p=null,m=1;if(e.sponsors){let O=e.x0+2.9,$=e.x1-2.9,ie=e.sponsors>3?.45:.7,Ee=($-O-ie*(e.sponsors-1))/e.sponsors,_e=e.h*.7,Ne=e.h*.49,J=i.litMap(Qy(Ee/_e),.9,"practical"),re=new vt({map:t1(Ee,_e),transparent:!0,depthWrite:!1}),Se=[];m=Ee/_e;for(let Le=0;Le<e.sponsors;Le++){let ge=O+Le*(Ee+ie)+Ee/2;h(new xe(Ee+.14,_e+.14,.1),z("#0c0a0e",.5,.3),ge,Ne,n-.02),Tt(h(new Ke(Ee,_e),J,ge,Ne,n-.075)),[[0,.42,1],[-.33,.24,-1],[.33,.24,-1]].forEach(([fe,he,pe])=>Se.push({x:ge+fe*Ee,y:Ne,z:n-.08,r:_e*he*2,dir:pe,k:Se.length}));let Fe=Tt(h(new Ke(Ee,_e),i.litMap(null,.92,"practical",{transparent:!0,opacity:0,depthWrite:!1}),ge,Ne,n-.09));Fe.visible=!1,Fe.userData.dynamic=!0,Fe.renderOrder=2;let ht=re.clone(),oe=Tt(h(new Ke(Ee,_e),ht,ge,Ne,n-.1));oe.renderOrder=3,oe.userData.dynamic=!0,u.push({sp:Fe,grid:ht,a:0})}p=new Mt(new Ke(1,1),new vt({map:jy(),transparent:!0,depthWrite:!1,side:at}),Se.length),p.userData={spots:Se,dynamic:!0},p.renderOrder=1,p.frustumCulled=!1,t.add(p)}[-1,1].forEach(O=>{let $=O<0?e.x0+.5:e.x1-2.3,ie=4,Ee=.9/ie;for(let J=0;J<ie;J++){let re=e.h*(J+1)/ie;h(new xe(1.8,re,Ee),z(J%2?"#3a1a14":"#44201a",.85),$+.9,re/2,n-.9+J*Ee+Ee/2),h(new xe(1.8,.02,.03),z("#d6a64a",.35,.7),$+.9,re,n-.9+J*Ee)}let _e=O<0?$+1.8:$,Ne=h(new nt(.02,.02,Math.hypot(.95,e.h)),z("#c9963f",.35,.7),_e,e.h/2+.95,n-.47);Ne.rotation.x=Math.atan2(.95,e.h)});let v=e.x0+1,g=e.x1-1,d=g-v,x=e.screenBottom||e.h,b=e.screenTop-x;h(new xe(d+.3,b+.3,.2),z("#0d0b10",.6),o,x+b/2,r+.12),i.pools.add(o,x+b*.5,r-.05,d*.75,b*.9,"#ffffff",.1,{vertical:!0,theme:!0,layer:"show"});let _=Tt(h(new Ke(d,b),ec(1.3),o,x+b/2,r));if(_.visible=!1,_.userData.dynamic=!0,x>e.h+l+.5){let O=h(new Ke(d+.3,x-e.h-l+.15),z("#0b0810",.95),o,(e.h+l+x)/2,r+.01);Tt(O);let $=An(7);for(let ie=0;ie<Math.round(d*4);ie++)i.bulbs.add(v+$()*d,e.h+l+.2+$()*(x-e.h-l-.3),r-.005,0,{color:"#fff4e0",k:.45,s:.22,twinkle:.85,ph:$()*se,layer:"festive"})}i.pools.add(o,.02,n-3,a*.55,4.5,"#ffffff",.14,{theme:!0,layer:"show"}),i.pools.add(o,.02,n-9,a*.8,7,"#ffffff",.05,{theme:!0,layer:"show"}),h(new xe(a-2.8,l,r-c),z("#2b1c14",.8),o,e.h+l/2,(c+r)/2);let E=h(new Ke(a-2.8,.035),new vt({color:"#ffffff"}),o,e.h+l*.5,c-.01);Tt(E);let T=.4;[e.x0-.4,e.x1+.4].forEach(O=>{let $=tu(e.truss,T,Math.round(e.truss/1.2));$.position.set(O,e.truss/2,n),t.add($)});let w=tu(a+.8+T,T,Math.round((a+1)/1.2));w.rotation.z=Math.PI/2,w.position.set(o,e.truss,n),t.add(w),[e.x0-.4,e.x1+.4].forEach(O=>{h(new xe(.28,.16,.22),z("#141217",.5,.4),O,.08,n-.45),i.bigBulbs.add(O,.18,n-.45,0,{color:"#ffffff",k:.8,s:.45,twinkle:0,layer:"show"}),i.pools.add(O,e.truss*.42,n-.24,.55,e.truss*.48,"#ffffff",.2,{vertical:!0,theme:!0,layer:"show"}),i.pools.add(O,.02,n-.6,1.4,1.4,"#ffffff",.12,{theme:!0,layer:"show"})}),[-1,1].forEach(O=>i.pools.add(O<0?e.x0+.25:e.x1-.25,e.h+(e.truss-e.h)*.4,n+.1,.5,(e.truss-e.h)*.45,"#ffffff",.14,{vertical:!0,theme:!0,layer:"show"}));for(let O=0;O<6;O++){let $=ct(e.x0+1.5,e.x1-1.5,(O+.5)/6);h(new xe(.22,.1,.16),z("#141217",.5,.4),$,.05,n-.55),i.pools.add($,e.h*.45,n-.03,1.2,e.h*.5,ze.warm,.05,{vertical:!0,layer:"show"})}[-1,1].forEach(O=>{let $=$y().clone();$.needsUpdate=!0,$.repeat.set(.3,1);let ie=h(new Ke(.9,e.truss-.3-e.h),new $e({map:$,roughness:1,side:at}),O<0?e.x0+.25:e.x1-.25,e.h+(e.truss-.3-e.h)/2,n+.15);Tt(ie)});let y=h(new Ke(a+.4,.95),new $e({map:Jy(Math.max(4,Math.round(a/2.2))),transparent:!0,alphaTest:.3,roughness:1,side:at}),o,e.truss-.6,n+.1);Tt(y);let M=[];for(let O=0;O<10;O++){let $=ct(e.x0,e.x1,(O+.5)/10),ie=e.truss-.35;if(O%2){let Ee=h(new xe(.34,.12,.3),z("#18161b",.5,.3),$,ie+.12,n),_e=h(new nt(.13,.16,.34,12),z("#232027",.45,.4),$,ie-.08,n);_e.userData.dynamic=!0,M.push({x:$,y:ie-.2,mesh:_e,i:O}),Ee.castShadow=!1}i.bigBulbs.add($,ie-.28,n-.02,O,{ph:O,twinkle:.1,layer:"show"})}let A=M.map((O,$)=>new ai(t,"#ffffff",10,.32,.12)),I=[];for(let O=0;O<5;O++)I.push(new ai(t,"#ffffff",8,.3,.16));[-1,1].forEach(O=>{let $=o+O*e.arrays;for(let ie=0;ie<6;ie++){let Ee=h(new xe(1.4,.55,.8),z("#0b0909",.7),$,e.truss-1.3-ie*.6,n-.4-ie*ie*.03);Ee.rotation.x=-ie*.04}[[-.4,.55,.78,1.1],[.4,.55,.78,1.1],[0,1.38,.7,.55]].forEach(([ie,Ee,_e,Ne])=>h(new xe(_e,Ne,.8),z("#0e0c0c",.75),$+ie,Ee,n-.4))});for(let O=0;O<=16;O++)i.bulbs.add(ct(e.x0,e.x1,O/16),e.h-.03,n-.05,O,{ph:O*.7,s:.75,k:.55,twinkle:.15});let N=[];for(let O=0;O<8;O++){let $=[ct(e.x0,e.x1,O/8),e.h-.06,n-.06],ie=[ct(e.x0,e.x1,(O+1)/8),e.h-.06,n-.06];for(let Ee=1;Ee<14;Ee++)N.push(Nn($,ie,.35,Ee/14))}let C=new Mt(new Ft(.05,6,4),new $e({color:"#ffffff",roughness:.9}),N.length);C.instanceColor=new Wt(new Float32Array(N.length*3),3);let P=new Ge,H=new ye("#f29a2e"),F=new ye("#f6c342");N.forEach((O,$)=>{C.setMatrixAt($,P.makeTranslation(O[0],O[1],O[2]));let ie=$%3?H:F;C.instanceColor.setXYZ($,ie.r,ie.g,ie.b)}),t.add(C);let B=[],G=z("#1c1c20",.5,.25),V=z("#0b0b0c",.9);[-.34,-.12,.12,.34].forEach(O=>{let $=o+O*a,ie=h(new xe(.6,.3,.42),G,$,e.h+.16,n+.2);ie.rotation.x=-.45,B.push(Xt(ie)),h(new xe(.03,.01,s*.55),V,$+.22,e.h+.025,n+.4+s*.275),i.bulbs.add($+.22,e.h+.1,n-.02,0,{color:"#5aa8ff",k:.5,s:.25,twinkle:0,layer:"show"})});let X=null;e.band&&([.2,.8].forEach(O=>{let $=h(new Ke(a*.3,(r-c)*.7),new $e({map:Zy(),roughness:1}),e.x0+a*O,e.h+l+.006,c+(r-c)*.45);$.rotation.x=-Math.PI/2}),X=jl(i,t,e.band,{x0:e.x0,x1:e.x1,front:c,floor:e.h+l}));for(let O=0;O<10;O+=2){let $=ct(e.x0,e.x1,(O+.5)/10),ie=h(new nt(.12,.1,.3,10),z("#141217",.45,.5),$,e.truss-.5,n-.02);ie.rotation.x=.5,h(new xe(.28,.03,.03),z("#141217",.5,.5),$,e.truss-.32,n-.02)}return e.sideScreens&&[-1,1].forEach(O=>{let $=Math.min(O*14.6,O*24.2),ie=Math.max(O*14.6,O*24.2),Ee=4.4,_e=9.8,Ne=n+.3;[$+.7,ie-.7].forEach(J=>{let re=tu(Ee,.32,Math.round(Ee/1.1));re.position.set(J,Ee/2,Ne+.25),t.add(re)}),h(new xe(ie-$+.5,_e-Ee+.5,.2),z("#0b0a0d",.6),($+ie)/2,(Ee+_e)/2,Ne+.12),h(new xe(ie-$,.12,.5),z("#15131a",.6,.3),($+ie)/2,Ee-.3,Ne+.3),i.pools.add(($+ie)/2,.02,Ne-3,(ie-$)*.6,4,"#ffffff",.12,{theme:!0,layer:"show"})}),{root:t,stageFront:B,bandHoles:X,feedScreen:_,front:{x:o,y:e.h,z:n},wash:{pos:[o,e.truss-.4,n-4],to:[o,e.h+l+1.3,n+s*.62]},update(O,$){let{TH:ie,pulse:Ee,reduce:_e,close:Ne,lv:J}=$,re=J.show,Se=J.show>.5;if(p){let Le=new Ge,ge=new It,Fe=new Gt,ht=new D,oe=new D,fe=$.sponsors;u.forEach((he,pe)=>{let Me=fe&&fe.panels&&fe.panels[pe],Z=Me&&Me.k>=0?fe.urls[Me.k]:null;if(he.a=Z?Me.a:0,Z&&he.a>.01){let q=ya(Z,"panel"+m.toFixed(2),be=>e1(be,m));if(he.sp.material.map!==q){let be=!!he.sp.material.map;he.sp.material.map=q,be||(he.sp.material.needsUpdate=!0)}}he.sp.visible=he.a>.01,he.sp.material.opacity=he.a,he.grid.opacity=1-he.a}),p.userData.spots.forEach((he,pe)=>{let Me=he.r*(1+.04*Ee)*(1-(u[Math.floor(pe/3)]||{a:0}).a);Fe.set(0,Math.PI,_e?0:he.dir*O*.25+pe),ge.setFromEuler(Fe),p.setMatrixAt(pe,Le.compose(oe.set(he.x,he.y,he.z),ge,ht.set(-Me,Me,1)))}),p.instanceMatrix.needsUpdate=!0,p.material.color.setScalar((.9+.35*Ee*J.show)*J.practical)}E.material.color.copy(js(ie.hues[Math.floor(O*.5)%ie.hues.length]+20*Math.sin(O*ie.speed),ie.sat,45)).multiplyScalar((.4+.3*Ee)*re),M.forEach((Le,ge)=>{let Fe=_e?0:O*(.4+ie.speed),ht=Math.sin(Fe+ge*1.3)*3.5,oe=[Le.x+ht,0,n-5-(Ne?0:2+2*Math.sin(Fe*.7+ge))];Le.mesh.rotation.x=-.4+Math.sin(Fe+ge)*.2,Le.mesh.rotation.z=Math.sin(Fe+ge*1.3)*.3,A[ge].aim([Le.x,Le.y,n],oe),A[ge].set(ie.beams[ge%ie.beams.length],re*(.8+.5*Ee))}),I.forEach((Le,ge)=>{let Fe=ct(e.x0+1.9,e.x1-1.9,(ge+.5)/5),ht=_e?0:Math.sin(O*(.5+ie.speed*.6)+ge*1.7)*2.2;Le.aim([Fe,e.h+l,r-.2],[Fe+ht,e.screenTop+3,r-1.4]),Le.set(ie.beams[(ge+1)%ie.beams.length],Math.max(0,re-.3)/.7*(.9+.5*Ee))})}}}var is=29.530588853,n1=Date.UTC(2e3,0,6,18,14);function i1(i){i==null&&(i=((Date.now()-n1)/864e5%is+is)%is);let e=(1-Math.cos(i/is*se))/2,t=i<is/2,n=i<1||i>is-1?"new moon":e>.97?"full moon":Math.abs(e-.5)<.06?t?"first quarter":"last quarter":e<.5?t?"waxing crescent":"waning crescent":t?"waxing gibbous":"waning gibbous";return{age:i,lit:e,name:n,waxing:t}}function s1(i){return it(256,256,(e,t)=>{let n=t*.2,s=t/2,r=t/2,a=i/is,o=(1-Math.cos(a*se))/2,l=e.createRadialGradient(s,r,n*.8,s,r,t/2);l.addColorStop(0,`rgba(255,238,205,${.05+.3*o})`),l.addColorStop(.4,`rgba(255,238,205,${.02+.08*o})`),l.addColorStop(1,"rgba(255,238,205,0)"),e.fillStyle=l,e.fillRect(0,0,t,t);let c=e.createRadialGradient(s-n*.2,r-n*.2,n*.1,s,r,n);if(c.addColorStop(0,"rgba(128,134,166,.4)"),c.addColorStop(1,"rgba(78,82,110,.34)"),e.fillStyle=c,e.beginPath(),e.arc(s,r,n,0,se),e.fill(),o<.004)return;let h=()=>{e.beginPath(),e.arc(0,0,n,-Math.PI/2,Math.PI/2,!1),e.ellipse(0,0,n*Math.abs(1-2*o),n,0,Math.PI/2,-Math.PI/2,o<.5),e.closePath()};e.save(),e.translate(s,r),a>.5&&e.scale(-1,1),e.save(),e.globalAlpha=.35,e.filter=`blur(${Math.max(.6,n*.06)}px)`,h(),e.fillStyle="#f5e6c8",e.fill(),e.restore(),h(),e.save(),e.clip();let f=e.createRadialGradient(-n*.25,-n*.3,n*.05,0,0,n*1.02);f.addColorStop(0,"#fffaf0"),f.addColorStop(.55,"#f7ecd6"),f.addColorStop(.88,"#e6d4b2"),f.addColorStop(1,"#c9b692"),e.fillStyle=f,e.fillRect(-n,-n,n*2,n*2),e.filter=`blur(${Math.max(.5,n*.07)}px)`,e.fillStyle="rgba(150,140,128,.22)",[[-.28,-.3,.26,.2],[.08,-.38,.2,.15],[.3,-.05,.22,.26],[-.1,.02,.3,.2],[-.36,.22,.18,.14],[.14,.36,.16,.12]].forEach(u=>{e.beginPath(),e.ellipse(u[0]*n*(a>.5?-1:1),u[1]*n,u[2]*n,u[3]*n,.4,0,se),e.fill()}),e.restore(),e.restore()})}function Vd(i,e){let t=new gt,n=i==="sheri"?"#2a1b36":"#3d1f1a",s=new te(new Ft(900,32,16),new Lt({side:cn,depthWrite:!1,fog:!1,uniforms:{top:{value:new ye("#04051a")},mid:{value:new ye("#140f33")},low:{value:new ye(n)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position.z = gl_Position.w; }",fragmentShader:"uniform vec3 top; uniform vec3 mid; uniform vec3 low; varying vec3 vP; void main(){ float h = clamp(vP.y, -0.2, 1.0); vec3 c = h < 0.12 ? mix(low, mid, smoothstep(-0.02, 0.12, h)) : mix(mid, top, smoothstep(0.12, 0.7, h)); gl_FragColor = vec4(c, 1.0); }"}));s.renderOrder=-10,t.add(s);let r=An(99),a=900,o=new Float32Array(a*3),l=new Float32Array(a*3);for(let x=0;x<a;x++){let b=r()*se,_=Math.asin(.06+Math.pow(r(),.8)*.94),E=800;o[x*3]=Math.cos(b)*Math.cos(_)*E,o[x*3+1]=Math.sin(_)*E,o[x*3+2]=Math.sin(b)*Math.cos(_)*E;let T=.35+r()*.65,w=r();l[x*3]=T,l[x*3+1]=T*(.92+w*.06),l[x*3+2]=T*(.8+(1-w)*.2)}let c=new lt;c.setAttribute("position",new Pt(o,3)),c.setAttribute("color",new Pt(l,3));let h=new Pr(c,new Ns({size:1.6,sizeAttenuation:!1,vertexColors:!0,fog:!1,depthWrite:!1,transparent:!0}));t.add(h);let f=i1(e),u=Math.min(f.age,29.5-f.age,14.8)/14.8,p=new Ar(new Is({map:s1(f.age),fog:!1,depthWrite:!1,transparent:!0})),m=ct(.08,.5,u),v=.5,g=700;p.position.set(Math.sin(v)*Math.cos(m)*g,Math.sin(m)*g,Math.cos(v)*Math.cos(m)*g),p.scale.setScalar(g*.11),t.add(p);let d={dir:p.position.clone().normalize(),intensity:.08+.25*f.lit};return{root:t,moonLight:d,info:f}}function Wd(i=170){let e=An(17),t=new gt,n=it(128,128,(c,h,f)=>{c.fillStyle="#0d0913",c.fillRect(0,0,h,f);for(let u=8;u<f;u+=16)for(let p=6;p<h;p+=14)e()<.3&&(c.fillStyle=e()<.7?"rgba(255,196,120,.9)":"rgba(190,210,255,.6)",c.fillRect(p,u,6,8))});n.wrapS=n.wrapT=Jt;let s=new $e({color:"#0d0913",emissive:"#ffffff",emissiveMap:n,emissiveIntensity:.6,roughness:1,fog:!1}),r=new xe(1,1,1),a=110,o=new Mt(r,s,a),l=new Ge;for(let c=0;c<a;c++){let h=c/a*se+e()*.03,f=i+e()*60,u=12+e()*22,p=5+Math.pow(e(),2)*26;l.compose(new D(Math.sin(h)*f,p/2-1,Math.cos(h)*f),new It().setFromAxisAngle(new D(0,1,0),h),new D(u,p,10)),o.setMatrixAt(c,l)}return t.add(o),t}var r1=["position","normal","uv","color"];function a1(i,e){for(let t=i;t&&t!==e;t=t.parent)if(t.userData.dynamic)return!0;return!1}var Xd=(i,e)=>Math.round(i/e)*e;function o1(i,e){return i.isMeshStandardMaterial&&!i.wireframe&&!e.has(i)&&!i.map&&!i.emissiveMap&&!i.normalMap&&!i.alphaMap&&!i.transparent&&i.emissive.getHex()===0&&i.opacity===1}var iu=new Map;function l1(i){let e=Math.min(.95,Math.max(.3,Xd(i.roughness,.2))),t=Xd(i.metalness,.4),n=e+"|"+t+"|"+i.side+"|"+!!i.flatShading;return iu.has(n)||iu.set(n,new $e({color:"#ffffff",roughness:e,metalness:t,side:i.side,flatShading:i.flatShading,vertexColors:!0})),iu.get(n)}function nc(i,e=new Set){i.updateMatrixWorld(!0);let t=new Ge().copy(i.matrixWorld).invert(),n=new Map,s=[];i.traverse(a=>{if(!a.isMesh||a.isInstancedMesh||a.isSkinnedMesh||!a.geometry||!a.visible||a1(a,i))return;let o=a.material;if(Array.isArray(o)||o.isShaderMaterial||o.transparent)return;let l=a.geometry;if(!l.attributes.position||!l.attributes.normal)return;let c=o1(o,e),h=c?l1(o):o,f=c?"position+normal+color":r1.filter(p=>l.attributes[p]).join("+"),u=h.uuid+"|"+f+"|"+a.castShadow+a.receiveShadow;n.has(u)||n.set(u,{mat:h,flat:c,sig:f,list:[],cast:a.castShadow,receive:a.receiveShadow,order:a.renderOrder}),n.get(u).list.push(a)});let r=0;return n.forEach(a=>{if(a.list.length<2&&!a.flat)return;let o=a.sig.split("+"),l=[],c=0;a.list.forEach(u=>{let p=new Ge().multiplyMatrices(t,u.matrixWorld),m=(u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone()).applyMatrix4(p);if(a.flat){let v=u.material.color,g=m.attributes.position.count,d=u.material.vertexColors&&m.attributes.color,x=new Float32Array(g*3);for(let b=0;b<g;b++)x[b*3]=v.r*(d?d.getX(b):1),x[b*3+1]=v.g*(d?d.getY(b):1),x[b*3+2]=v.b*(d?d.getZ(b):1);m.setAttribute("color",new Pt(x,3))}p.determinant()<0&&o.forEach(v=>{let g=m.attributes[v],d=g.itemSize,x=g.array;for(let b=0;b<g.count;b+=3)for(let _=0;_<d;_++){let E=(b+1)*d+_,T=(b+2)*d+_,w=x[E];x[E]=x[T],x[T]=w}}),l.push(m),c+=m.attributes.position.count,s.push(u)});let h=new lt;o.forEach(u=>{let p=l[0].attributes[u].itemSize,m=new Float32Array(c*p),v=0;l.forEach(g=>{m.set(g.attributes[u].array,v),v+=g.attributes[u].array.length}),h.setAttribute(u,new Pt(m,p))}),l.forEach(u=>u.dispose()),h.computeBoundingSphere();let f=new te(h,a.mat);f.castShadow=a.cast,f.receiveShadow=a.receive,f.renderOrder=a.order,i.add(f),r+=a.list.length}),s.forEach(a=>a.parent&&a.parent.remove(a)),r}var qd={mandvi:i=>({r:i?.78:1,top:i?2.4:2.85}),potScale:1.35},c1=[[.3,18,0],[.43,24,1],[.56,24,0],[.69,18,1]];function Yd(i,e,t,n){i.fillStyle=n,c1.forEach(([s,r,a])=>{for(let o=0;o<r;o++){let l=(o+.5+(a?.5:0))/r*e,c=s*t,h=5.5;i.beginPath(),a?(i.moveTo(l,c-h*1.3),i.lineTo(l+h*1.1,c+h*.8),i.lineTo(l-h*1.1,c+h*.8),i.closePath()):i.arc(l,c,h,0,se),i.fill()}})}function h1(){let i=it(512,256,(t,n,s)=>{let r=t.createLinearGradient(0,0,0,s);r.addColorStop(0,"#0c0603"),r.addColorStop(1,"#3a200e"),t.fillStyle=r,t.fillRect(0,0,n,s),Yd(t,n,s,"#fff")}),e=it(512,256,(t,n,s)=>{let r=t.createLinearGradient(0,0,0,s);r.addColorStop(0,"#8a3f1e"),r.addColorStop(.5,"#b0592b"),r.addColorStop(1,"#6d2f16"),t.fillStyle=r,t.fillRect(0,0,n,s),[[.22,"#f3e6d0"],[.25,"#c9963f"],[.77,"#c9963f"],[.8,"#f3e6d0"]].forEach(([a,o])=>{t.fillStyle=o,t.fillRect(0,a*s,n,3)}),t.strokeStyle="rgba(243,230,208,.8)",t.lineWidth=2;for(let a=0;a<24;a++){let o=a/24*n;t.beginPath(),t.moveTo(o,.84*s),t.lineTo(o+n/48,.9*s),t.lineTo(o+n/24,.84*s),t.stroke()}Yd(t,n,s,"rgba(30,10,4,.9)")});return{holes:i,clay:e}}function Zd(i,e,t){let n=e/2,s=e/2;i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,e,e),i.translate(n,n),i.fillStyle="rgba(58,29,18,.85)",i.beginPath(),i.arc(0,0,s*.86,0,se),i.fill();let r=[t[0],"#f4a261","#2a9d8f",t[2%t.length],"#e9c46a","#c2185b"];for(let a=0;a<2;a++){let o=a?16:8,l=a?s*.68:s*.42,c=a?s*.14:s*.3,h=a?s*.07:s*.13;for(let f=0;f<o;f++)i.save(),i.rotate(f/o*se+(a?Math.PI/16:0)),i.fillStyle=r[(f+a)%r.length],i.beginPath(),i.ellipse(l,0,c,h,0,0,se),i.fill(),i.fillStyle="rgba(255,243,214,.8)",i.beginPath(),i.ellipse(l,0,c*.35,h*.3,0,0,se),i.fill(),i.restore()}for(let a=0;a<40;a++){let o=a/40*se;i.fillStyle="#fff3d6",i.beginPath(),i.arc(Math.cos(o)*s*.8,Math.sin(o)*s*.8,4,0,se),i.fill()}i.fillStyle="#f6c342",i.beginPath(),i.arc(0,0,s*.2,0,se),i.fill(),i.fillStyle="#c0392b",i.beginPath(),i.arc(0,0,s*.1,0,se),i.fill()}var ic=null;function u1(){return ic||(ic=it(64,256,(i,e,t)=>{for(let n=0;n<12;n++)i.fillStyle=n%2?"#e8b04b":"#8e1b1b",i.fillRect(0,n/12*t,e,t/12+1);i.fillStyle="rgba(255,230,170,.5)";for(let n=0;n<12;n+=2)for(let s=0;s<e;s+=8)i.fillRect(s+2,(n+.4)/12*t,3,3)}),ic)}function $d(){return it(128,180,(i,e,t)=>{i.fillStyle="#e8b04b",i.fillRect(0,0,e,t);let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#f6c35a"),n.addColorStop(1,"#c0392b"),i.fillStyle=n,i.fillRect(10,12,e-20,t-22);let s=i.createRadialGradient(e/2,t*.38,2,e/2,t*.38,e*.34);s.addColorStop(0,"rgba(255,248,220,1)"),s.addColorStop(1,"rgba(255,240,200,0)"),i.fillStyle=s,i.fillRect(0,0,e,t),i.fillStyle="#9b1f1a",i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(e/2,t*.22,e,0),i.lineTo(e,t*.4),i.quadraticCurveTo(e*.8,t*.15,e*.7,t*.1),i.lineTo(e*.3,t*.1),i.quadraticCurveTo(e*.2,t*.15,0,t*.4),i.closePath(),i.fill()})}function Jd(i,e,t){let n=new Mt(new Ft(t,6,4),new $e({color:"#ffffff",roughness:.9}),e.length);n.instanceColor=new Wt(new Float32Array(e.length*3),3);let s=new Ge,r=new ye("#f29a2e"),a=new ye("#f6c342");return e.forEach((o,l)=>{n.setMatrixAt(l,s.makeTranslation(o[0],o[1],o[2])),n.setColorAt(l,l%2?r:a)}),i.add(n),n}function Qd(i,{small:e,flags:t}){let n=new gt,s=qd.potScale,{r,top:a}=qd.mandvi(e),o=h1(),l=document.createElement("canvas");l.width=l.height=512,Zd(l.getContext("2d"),512,t);let c=new _n(l);c.colorSpace=zt,c.anisotropy=4;let h=new te(new ln(2.1,48),new $e({map:c,roughness:.95,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-2}));h.rotation.x=-Math.PI/2,h.position.y=.012,h.receiveShadow=!0,n.add(h);for(let X=0;X<12;X++){let O=(X+.5)/12*se;i.flames.add(Math.cos(O)*1.95,.012,Math.sin(O)*1.95,{s:.06,k:.32})}let f=new gt;f.scale.setScalar(s),n.add(f),[[-.3,-.3],[.3,-.3],[.3,.3],[-.3,.3]].forEach(([X,O])=>{let $=new te(new xe(.05,.5,.05),z("#3b2213",.8));$.position.set(X,.25,O),f.add($)});let u=new te(new nt(.44,.5,.28,16,1,!0),i.selfLit(new $e({color:"#9b1f1a",roughness:.85,side:at,emissive:"#7a2412"}),.55,"flame"));u.position.y=.42,f.add(u);let p=new te(new nt(.44,.44,.03,16),z("#4a0c0a",.9));p.position.y=.56,f.add(p);let m=new te(new jt(.5,.012,4,32),z("#e8b04b",.35,.7));m.rotation.x=Math.PI/2,m.position.y=.285,f.add(m);let v=f1.map(([X,O])=>new le(X,O)),g=new $e({map:o.clay,emissiveMap:o.holes,emissive:"#ffb45a",emissiveIntensity:0,roughness:.82}),d=new te(new rn(v,40),g);d.position.y=.575,d.castShadow=!0,f.add(d);let x=[];for(let X=0;X<22;X++){let O=X/22*se;x.push([Math.cos(O)*.19,.575+.47+.03*Math.cos(O),Math.sin(O)*.19])}Jd(f,x,.028);let b=new te(new nt(.1,.06,.05,14),z("#6a2c14",.85));b.position.y=.575+.62,f.add(b);let _=new Ft(.045,10,8);_.scale(1,2.4,1),_.translate(0,.1,0);let E=new te(_,Jl("#ffd27a",4));E.position.y=.575+.63,E.userData.dynamic=!0,f.add(E);let T=new te(_,Jl("#fff4d0",7));T.scale.setScalar(.5),T.position.y=.575+.64,T.userData.dynamic=!0,f.add(T);let w=new nt(.06,.075,a,10),y=i.selfLit(new $e({map:u1(),roughness:.6,metalness:.15}),.28,"flame");[[-r,-r],[r,-r],[r,r],[-r,r]].forEach(([X,O])=>{let $=new te(w,y);$.position.set(X,a/2,O),$.castShadow=!0,n.add($);let ie=new te(new xe(.2,.12,.2),z("#5a1510",.7));ie.position.set(X,.06,O),n.add(ie)});let M=new te(new rn(Kd.map(([X,O])=>new le(X*r,O)),32),z("#a8141a",.32,.25,{side:at,emissive:"#8a1410",emissiveIntensity:.9}));M.position.y=a,n.add(M);let A=new te(new rn(Kd.slice(0,5).map(([X,O])=>new le(X*r+.01,O)),12),new $e({color:"#f0c24b",wireframe:!0,metalness:.6,roughness:.4}));A.position.y=a,n.add(A);let I=new te(new rn(d1.map(([X,O])=>new le(X*r,O)),20),z("#f0c24b",.35,.6,{emissive:"#5a3a08",emissiveIntensity:.6}));I.position.y=a+.8,n.add(I);let N=new te(new Ft(.09,12,8),z("#e8b04b",.3,.8));N.position.y=a+1.36,n.add(N);let C=new te(new nt(.012,.012,.8),z("#3a2413"));C.position.y=a+1.8,n.add(C);let P=new lt;P.setAttribute("position",new Qe([0,0,0,.55,-.12,0,0,-.3,0],3)),P.computeVertexNormals();let H=new te(P,z("#d8453a",.8,0,{side:at}));H.position.y=a+2.18,H.userData.dynamic=!0,n.add(H);let F=new te(new nt(r*1.32,r*1.32,.08,32),z("#e8b04b",.35,.7,{emissive:"#3a2406",emissiveIntensity:.5}));F.position.y=a,n.add(F);for(let X=0;X<24;X++){let O=X/24*se,$=Math.cos(O)*r*1.33,ie=Math.sin(O)*r*1.33;i.bulbs.add($,a-.06,ie,X,{ph:X,s:1.2}),i.flags.add($,a-.04,ie,-O+Math.PI/2,.2,X)}let B=[];[[[-r,-r],[r,-r]],[[-r,-r],[-r,r]],[[r,-r],[r,r]],[[-r,r],[r,r]]].forEach(([X,O])=>{for(let $=0;$<=16;$++)B.push(Nn([X[0],a-.1,X[1]],[O[0],a-.1,O[1]],.5,$/16))}),Jd(n,B,.045);let G=new $e({map:$d(),emissiveMap:$d(),emissive:"#ffffff",emissiveIntensity:.25,roughness:.6,side:at}),V=Tt(new te(new Ke(.72,1),G));return V.position.set(0,1.05,r*.75),n.add(V),i.pools.add(0,1.05,r*.74,.7,.7,"#ffb45a",.18,{vertical:!0,layer:"garbo"}),nc(n,new Set([g,G])),n.userData.dynamic=!0,{root:n,setTheme(X){Zd(l.getContext("2d"),512,X.flags),c.needsUpdate=!0},update(X,O,$,ie){n.visible=ie,g.emissiveIntensity=3.2*O,G.emissiveIntensity=.15+.3*O;let Ee=Math.max(0,(O-.2)/.8);E.visible=T.visible=Ee>.01,E.scale.set(1+($?0:.06*Math.sin(X*17)),Ee*(.85+($?0:.15*Math.sin(X*9))),1),E.rotation.z=$?0:Math.sin(X*5)*.08,T.scale.set(.5,.5*Ee,.5),H.rotation.y=$?0:Math.sin(X*2.2)*.35}}}var f1=[[0,0],[.12,.005],[.2,.04],[.27,.12],[.3,.24],[.29,.34],[.24,.44],[.16,.51],[.12,.54],[.125,.58],[.15,.6]],Kd=[[1.3,0],[1.2,.18],[.95,.42],[.6,.7],[.25,.86],[.06,.92]],d1=[[.42,0],[.36,.2],[.2,.42],[.03,.52]];function su(i,e,t,n,s,r,a){let o=new gt;o.position.set(t,n,s),o.userData.dynamic=!0,e.add(o),i.wires.line([t,r,s],[t,n+.55,s]);let l=12,c=[a[0],"#f6c342",a[2%a.length],"#2f8f5b",a[1%a.length],"#3b4cc0"],h=[],f=[],u=new ye;for(let b=0;b<l;b++){let _=b/l*se,E=(b+1)/l*se,T=1.35;u.set(c[b%c.length]),h.push(0,.55,0,Math.cos(E)*T,0,Math.sin(E)*T,Math.cos(_)*T,0,Math.sin(_)*T);for(let w=0;w<3;w++)f.push(u.r,u.g,u.b)}let p=new lt;p.setAttribute("position",new Qe(h,3)),p.setAttribute("color",new Qe(f,3)),p.computeVertexNormals();let m=new te(p,z("#ffffff",.7,0,{vertexColors:!0,side:at}));o.add(m);let v=new Mt(new nt(.012,.012,.3,4),z("#e8b04b",.4,.6),l),g=new Ge;for(let b=0;b<l;b++){let _=b/l*se;v.setMatrixAt(b,g.makeTranslation(Math.cos(_)*1.35,-.15,Math.sin(_)*1.35))}o.add(v);let d=[];for(let b=0;b<l;b++){let _=(b+.5)/l*se;d.push([Math.cos(_)*.8,.24,Math.sin(_)*.8])}let x=new Mt(new Ft(.045,6,4),new vt({color:new ye("#fffaf0").multiplyScalar(1.6)}),d.length);return d.forEach((b,_)=>x.setMatrixAt(_,g.makeTranslation(b[0],b[1],b[2]))),o.add(x),{group:o,update(b,_,E){o.rotation.y=_?0:b*.25+E}}}var p1=new nt(.18,.12,.42,8);function jd(i,e,t,n,s,r,a){i.wires.line([t,a,s],[t,n+.21,s]);let o=new te(p1,i.glow(r,1.3,"practical"));return o.position.set(t,n,s),e.add(o),i.pools.add(t,n,s,.7,.7,r,.35,{vertical:!0}),i.pools.add(t,.02,s,2.2,2.2,r,.12),o}var m1=(()=>{let i=new Bs;for(let t=0;t<=10;t++){let n=Math.PI/2+t/10*se,s=t%2?.17:.4,r=Math.cos(n)*s,a=Math.sin(n)*s;t?i.lineTo(r,a):i.moveTo(r,a)}let e=new kr(i,{depth:.16,bevelEnabled:!0,bevelThickness:.05,bevelSize:.03,bevelSegments:1});return e.translate(0,0,-.08),e})(),g1=new jt(.2,.012,4,20);function Ma(i,e,t,n,s,r,a){i.wires.line([t,a,s],[t,n+.42,s]);let o=new gt;return o.position.set(t,n,s),e.add(o),o.add(new te(m1,i.glow(r,.5,"festive"))),[-1,1].forEach(l=>{let c=new te(g1,i.glow("#fff2d6",.42,"festive"));c.position.z=l*.11,o.add(c)}),[-.07,.07].forEach((l,c)=>{let h=new te(new Ke(.07,.62),i.glow(c?"#fff2d6":r,.32,"festive"));h.position.set(l,-.62,0),h.rotation.z=l*.8,o.add(h)}),i.pools.add(t,n,s,1,1,r,.2,{vertical:!0,layer:"festive"}),i.pools.add(t,.02,s,2,2,r,.07,{layer:"festive"}),o}function ep(i,e,t,n,s){i.wires.line([t,s,n],[t,11.1,n]);let r=z("#c9963f",.35,.8);[[11,.95,12],[10.55,.72,10],[10.15,.45,8]].forEach(([a,o,l],c)=>{let h=new te(new jt(o,.025,4,28),r);h.rotation.x=Math.PI/2,h.position.set(t,a,n),e.add(h);for(let f=0;f<l;f++){let u=f/l*se+c*.3;i.bigBulbs.add(t+Math.cos(u)*o,a-.2,n+Math.sin(u)*o,0,{color:"#fff1d0",k:.7,s:.5,ph:f*1.9,layer:"practical",twinkle:.12})}}),i.bigBulbs.add(t,9.7,n,0,{color:"#ffd58a",k:1,layer:"practical",twinkle:.05}),i.pools.add(t,10.4,n,2.6,2.6,"#ffd6a0",.45,{vertical:!0}),i.pools.add(t,.03,n,4.5,4.5,"#ffd6a0",.18)}function tp(i,e,t){if(!t.length)return;let n=0;t.forEach(u=>n+=u.blobs.length);let s=new Mt(new nt(.22,.34,1,7),z("#1c130c",.95),t.length),r=new yn(1,1),a=new Mt(r,z("#ffffff",.95,0,{flatShading:!0}),n);a.instanceColor=new Wt(new Float32Array(n*3),3);let o=[["#0f1d12","#1a2c18"],["#12200f","#20321a"],["#0d1a14","#1a2b22"]],l=new Ge,c=new It,h=new ye,f=0;t.forEach((u,p)=>{if(s.setMatrixAt(p,l.compose(new D(u.x,2.3*u.s,u.z),c.identity(),new D(u.s,4.6*u.s,u.s))),u.blobs.forEach((m,v)=>{c.setFromEuler(new Gt(v,v*2,0)),a.setMatrixAt(f,l.compose(new D(u.x+m[0]*u.s,m[1]*u.s,u.z+m[2]*u.s),c,new D(m[3]*u.s,m[3]*u.s*.8,m[3]*u.s))),h.set(o[u.tone][v%2]).multiplyScalar(1.6),a.setColorAt(f,h),f++}),u.fairy)for(let m=0;m<30;m++){let v=u.blobs[m%u.blobs.length],g=m*2.4,d=v[3]*.95;i.bulbs.add(u.x+(v[0]+Math.cos(g)*d)*u.s,(v[1]+Math.sin(g)*d*.7)*u.s,u.z+(v[2]-.6*Math.sign(u.z+20))*u.s,u.hue+m,{ph:m*1.3,s:.8,twinkle:.5})}}),s.castShadow=!0,e.add(s),e.add(a)}function ru(i,e,t,n){let s=new te(new nt(.06,.08,n),z("#1f1914",.8));s.position.set(e,n/2,t),i.add(s);let r=new te(new xe(.9,1.2,.7),z("#0e0c0c",.7));r.position.set(e,n+.6,t),r.rotation.y=-Math.sign(e)*.3,i.add(r);let a=Tt(new te(new Ke(.75,1),z("#1a1818",1)));a.position.set(e,n+.6,t-.36),i.add(a)}var sp='"Noto Sans Gujarati", "Gujarati Sangam MN", Shruti, "Anek Gujarati", system-ui, sans-serif';function qe(i,e,t,n,s,r,a,o,l=0,c=0,h=0){let f=new te(new xe(e,t,n),o);return f.position.set(s,r,a),f.rotation.set(l,c,h),i.add(f),f}function xt(i,e,t,n,s,r,a,o,l=10,c=0,h=0,f=0){let u=new te(new nt(e,t,n,l),o);return u.position.set(s,r,a),u.rotation.set(c,h,f),i.add(u),u}function ba(i,e,t,n,s,r,a=16){let o=new te(new rn(e.map(([l,c])=>new le(l,c)),a),r);return o.position.set(t,n,s),i.add(o),o}function _i(i,e,t,n,s,r,a){let o=Tt(new te(new Ke(e,t),a));return o.position.set(n,s,r),i.add(o),o}var ss=(i,e=.85,t=0,n)=>new $e(Object.assign({map:i,roughness:e,metalness:t},n||{}));function Ea(i,e,t,n){let s=new gt;return s.position.set(e,0,t),s.rotation.y=n,i.add(s),s.updateMatrixWorld(!0),s}var lu=class{constructor(){this.list=[]}add(e,t,n,s,r=.035){this.list.push([e,t,n,s,r])}addIn(e,t,n,s,r,a){let o=new D(t,n,s).applyMatrix4(e.matrixWorld);this.add(o.x,o.y,o.z,r,a)}build(e){if(!this.list.length)return;let t=new Mt(new yn(1,0),z("#ffffff",.85),this.list.length),n=new Ge,s=new ye;this.list.forEach(([r,a,o,l,c],h)=>{t.setMatrixAt(h,n.makeScale(c,c,c).setPosition(r,a,o)),t.setColorAt(h,s.set(l))}),e.add(t)}},cu=["#f08a24","#f08a24","#f6c342"];function rp(i){return it(512,160,(e,t,n)=>{e.fillStyle=i,e.fillRect(0,0,t,n);for(let s=0;s<9;s++){let r=s/9*t;e.fillStyle=`rgba(0,0,0,${.05+s%3*.03})`,e.fillRect(r,0,t/9,n),e.fillStyle="rgba(0,0,0,.28)",e.fillRect(r,0,2,n)}e.fillStyle="rgba(255,255,255,.05)";for(let s=0;s<160;s++)e.fillRect(Math.random()*t,Math.random()*n,1+Math.random()*14,1);e.fillStyle="#e8b04b",e.fillRect(0,n*.1,t,n*.08),e.fillStyle="rgba(255,240,200,.5)",e.fillRect(0,n*.1,t,2),e.fillStyle="rgba(0,0,0,.35)",e.fillRect(0,n*.86,t,n*.06)})}function ap(i,e){return it(512,96,(t,n,s)=>{t.clearRect(0,0,n,s);let r=n/e,a=s*.72;for(let o=0;o<e;o++)t.fillStyle=o%2?"#efe2c8":i,t.fillRect(o*r,0,r+1,a),t.fillStyle=o%2?i:"#efe2c8",t.beginPath(),t.moveTo(o*r,a),t.quadraticCurveTo((o+.5)*r,s*1.05,(o+1)*r,a),t.closePath(),t.fill(),t.fillStyle="#e8b04b",t.beginPath(),t.arc((o+.5)*r,s*.9,4,0,se),t.fill();t.fillStyle="rgba(0,0,0,.18)",t.fillRect(0,0,n,5),t.fillStyle="#e8b04b",t.fillRect(0,a-3,n,3)})}function op(i,e,t){let n=it(512,176,()=>{}),s=()=>{let r=n.image,a=r.getContext("2d"),o=r.width,l=r.height;a.clearRect(0,0,o,l),a.fillStyle="#180c06",a.beginPath(),a.roundRect(4,4,o-8,l-8,22),a.fill(),a.strokeStyle=t,a.lineWidth=7,a.stroke(),a.textAlign="center",a.textBaseline="middle",a.fillStyle="#ffd58a",a.font=`700 78px ${sp}`,a.fillText(i,o/2,l*.42),a.fillStyle="rgba(255,230,190,.78)",a.font="600 34px system-ui, sans-serif",a.fillText(e,o/2,l*.8),n.needsUpdate=!0};return s(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(s),n}var sc=null;function x1(){return sc||(sc=it(512,256,(i,e,t)=>{i.fillStyle="#8e1b2c",i.fillRect(0,0,e,t);for(let n=0;n<9;n++)for(let s=0;s<44;s++){let r=(s+n%2*.5+.5)/44.5*e,a=t*(.28+n*.075);Math.abs(r/e-.5)<.19&&n>1&&n<8||(i.fillStyle=(n+s)%3?"rgba(255,246,230,.85)":"rgba(246,195,66,.9)",i.beginPath(),i.arc(r,a,2.6,0,se),i.fill())}i.fillStyle="#e8b04b",i.fillRect(0,0,e,t*.16),i.fillRect(0,t*.9,e,t*.1),i.fillStyle="rgba(120,70,10,.5)";for(let n=0;n<e;n+=12)i.fillRect(n,t*.05,6,t*.06);for(let n=0;n<16;n++){let s=n/16*e,r=(n+1)/16*e;i.fillStyle=n%2?"#2f8f5b":"#c2185b",i.beginPath(),i.moveTo(s,t*.16),i.lineTo(r,t*.16),i.lineTo((s+r)/2,t*.34),i.closePath(),i.fill(),i.fillStyle="rgba(235,245,255,.95)",i.beginPath(),i.arc((s+r)/2,t*.22,3.5,0,se),i.fill()}}),sc)}function _1(){return it(256,128,(i,e,t)=>{i.fillStyle="#140c0a",i.beginPath(),i.roundRect(2,2,e-4,t-4,18),i.fill(),i.textAlign="center",i.textBaseline="middle",i.font="800 84px system-ui, sans-serif",i.shadowColor="#ff78be",i.shadowBlur=18,i.fillStyle="#f6e8d2",i.fillText("DJ",e/2,t*.54)})}function y1(i,e,t){let n=document.createElement("canvas");n.width=Math.ceil(i*1.3),n.height=Math.ceil(i*2.05);let s=n.getContext("2d"),r=n.width/2,a=n.height-i*.6;s.fillStyle=e,[[-.62,.62],[-.3,.86],[0,1],[.3,.86],[.62,.62]].forEach(([o,l])=>{s.save(),s.translate(r,a-i*.5),s.rotate(o),s.beginPath(),s.moveTo(-i*.075,0),s.quadraticCurveTo(-i*.06,-i*l*.5,0,-i*l*.72),s.quadraticCurveTo(i*.06,-i*l*.5,i*.075,0),s.closePath(),s.fill(),s.restore()}),s.beginPath(),s.ellipse(r,a,i*.4,i*.55,0,0,se),s.fill(),s.save(),s.clip(),s.strokeStyle=t,s.lineWidth=Math.max(1,i*.04);for(let o=-5;o<=5;o++){let l=o*i*.19;s.beginPath(),s.moveTo(r+l-i,a-i),s.lineTo(r+l+i,a+i),s.moveTo(r+l+i,a-i),s.lineTo(r+l-i,a+i),s.stroke()}return s.restore(),s.globalCompositeOperation="destination-out",s.beginPath(),s.arc(r+i*.47,a-i*.14,i*.25,0,se),s.fill(),n}function lp(i,e,t,n,s){let a=y1(46,n,s);i.drawImage(a,e*.5-a.width/2,t*.5-a.height*.52)}function v1(){return it(256,168,(i,e,t)=>{let n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"#c5c9cf"),n.addColorStop(.55,"#9da2a9"),n.addColorStop(1,"#7d8289"),i.fillStyle=n,i.fillRect(0,0,e,t),lp(i,e,t,"#fff8e8","rgba(150,120,60,.35)"),i.save(),i.translate(e*.12,t*.16),i.rotate(-.25),i.fillStyle="#f6c342",i.beginPath(),i.roundRect(0,0,64,28,6),i.fill(),i.fillStyle="#8e1b2c",i.font=`700 18px ${sp}`,i.textBaseline="middle",i.fillText("\u0A97\u0AB0\u0AAC\u0ABE",6,15),i.restore(),i.fillStyle="#2f8f5b",i.beginPath();for(let s=0;s<10;s++){let r=s/10*se-Math.PI/2,a=s%2?7:15;i.lineTo(e*.8+Math.cos(r)*a,t*.78+Math.sin(r)*a)}i.closePath(),i.fill()})}function M1(){return it(256,168,(i,e,t)=>{i.fillStyle="#000",i.fillRect(0,0,e,t),lp(i,e,t,"#ffffff","rgba(0,0,0,.4)")})}function b1(){return it(256,144,(i,e,t)=>{i.fillStyle="#16161a",i.fillRect(0,0,e,t),i.strokeStyle="rgba(255,255,255,.12)",i.lineWidth=2,i.strokeRect(2,2,e-4,t-4);for(let n=0;n<3;n++){let s=e*(.43+n*.07);i.fillStyle="#000",i.fillRect(s-1,t*.2,3,t*.5),i.fillStyle="#d9d9de",i.fillRect(s-5,t*(.3+n*.12),10,4)}i.fillStyle="#000",i.fillRect(e*.42,t*.8,e*.16,3),i.fillStyle="#d9d9de",i.fillRect(e*.49,t*.78,6,8),i.fillStyle="#8c8f96";for(let n=0;n<8;n++)i.beginPath(),i.arc(e*(.4+n%4*.066),t*(n<4?.1:.9),3.5,0,se),i.fill();[.04,.96].forEach(n=>{i.fillStyle="#000",i.fillRect(e*n-1,t*.15,3,t*.6),i.fillStyle="#d9d9de",i.fillRect(e*n-4,t*.42,8,4)})})}function E1(){return it(128,192,(i,e,t)=>{let n=i.createLinearGradient(0,0,e,0);n.addColorStop(0,"#151414"),n.addColorStop(.5,"#232121"),n.addColorStop(1,"#121111"),i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="rgba(255,255,255,.05)";for(let s=6;s<t-6;s+=5)for(let r=6;r<e-6;r+=5)i.fillRect(r,s,1.5,1.5);i.strokeStyle="rgba(255,255,255,.2)",i.lineWidth=4,i.beginPath(),i.arc(e/2,t*.62,e*.36,0,se),i.stroke(),i.fillStyle="#0b0a0a",i.beginPath(),i.arc(e/2,t*.62,e*.29,0,se),i.fill(),i.fillStyle="rgba(255,255,255,.14)",i.beginPath(),i.arc(e/2,t*.62,e*.08,0,se),i.fill(),i.fillStyle="#0b0a0a",i.beginPath(),i.moveTo(e*.3,t*.12),i.lineTo(e*.7,t*.12),i.lineTo(e*.62,t*.28),i.lineTo(e*.38,t*.28),i.closePath(),i.fill(),i.fillStyle="rgba(232,176,75,.6)",i.fillRect(e*.36,t*.92,e*.28,3),i.strokeStyle="rgba(255,255,255,.14)",i.lineWidth=2,i.strokeRect(1,1,e-2,t-2)})}var np=null,S1=()=>np||(np=ss(E1(),.8)),au=null;function T1(){if(au)return au;let i=[],e=(s,r,a,o,l=0,c=0)=>{s.rotateX(l),s.rotateZ(c),s.translate(r,a,o),i.push(s.index?s.toNonIndexed():s)};e(new xe(.44,.035,.4),0,.45,0),e(new xe(.42,.44,.03),0,.69,.22,.09),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([s,r])=>e(new nt(.016,.02,.46,5,1,!0),s*.21,.225,r*.19,-r*.07,s*.07)),[-1,1].forEach(s=>{e(new xe(.04,.03,.38),s*.22,.64,.02),e(new xe(.03,.18,.03),s*.22,.55,-.16)});let t=0;i.forEach(s=>t+=s.attributes.position.count);let n=new lt;return["position","normal","uv"].forEach(s=>{let r=i[0].attributes[s].itemSize,a=new Float32Array(t*r),o=0;i.forEach(l=>{a.set(l.attributes[s].array,o),o+=l.attributes[s].array.length}),n.setAttribute(s,new Pt(a,r))}),au=n,n}var hu=class{constructor(){this.list=[]}add(e,t,n,s,r=0){this.list.push({x:e,z:t,ry:n,hex:s,lift:r});let a=new Ge().compose(new D(e,r,t),new It().setFromEuler(new Gt(0,n,0)),new D(1,1,1)),o=l=>{let c=new D,h=[];for(let f=0;f<l.length;f+=3)c.set(l[f],l[f+1],l[f+2]).applyMatrix4(a),h.push(Math.round(c.x*1e3)/1e3,Math.round(c.y*1e3)/1e3,Math.round(c.z*1e3)/1e3);return h};return{seat:o(Xn(-.25,0,-.22,.25,.47,.22)),back:o(Xn(-.23,.45,.18,.23,.92,.27)),arms:o(Xn(-.25,.47,-.18,.25,.66,.2))}}build(e){if(!this.list.length)return;let t=new Mt(T1(),z("#ffffff",.45,0),this.list.length),n=new Ge,s=new It,r=new Gt,a=new ye;this.list.forEach((o,l)=>{r.set(0,o.ry,0),s.setFromEuler(r),t.setMatrixAt(l,n.compose(new D(o.x,o.lift,o.z),s,new D(1,1,1))),t.setColorAt(l,a.set(o.hex).multiplyScalar(.9))}),t.castShadow=!0,e.add(t)}};function ip(i){let e=0;i.forEach(n=>e+=n.attributes.position.count);let t=new lt;return["position","normal","color"].forEach(n=>{let s=i[0].attributes[n].itemSize,r=new Float32Array(e*s),a=0;i.forEach(o=>{r.set(o.attributes[n].array,a),a+=o.attributes[n].array.length}),t.setAttribute(n,new Pt(r,s))}),t}function Bt(i,e,t,n,s,r=0,a=0,o=0,l=1,c=1,h=1){i.scale(l,c,h),i.rotateX(r),i.rotateY(a),i.rotateZ(o),i.translate(t,n,s);let f=i.index?i.toNonIndexed():i;f.deleteAttribute("uv");let u=new ye(e),p=f.attributes.position.count,m=new Float32Array(p*3);for(let v=0;v<p;v++)m[v*3]=u.r,m[v*3+1]=u.g,m[v*3+2]=u.b;return f.setAttribute("color",new Pt(m,3)),f}var rc=(i,e,t)=>[Bt(new nt(e,e,t,12),"#141414",i,e,0,Math.PI/2),Bt(new nt(e*.5,e*.5,t+.01,8),"#9ca0a5",i,e,0,Math.PI/2)],ou={scooter:{paint:()=>[Bt(new xe(.1,.62,.42),"#fff",.44,.62,0,0,0,.22),Bt(new Ft(.5,10,6),"#fff",-.36,.56,0,0,0,0,.82,.42,.4),Bt(new xe(.28,.07,.15),"#fff",.6,.5,0),Bt(new xe(.16,.12,.2),"#fff",.52,1.02,0)],trim:()=>[...rc(.62,.23,.1),...rc(-.6,.23,.1),Bt(new xe(.55,.05,.3),"#2a2a2d",0,.3,0),Bt(new xe(.62,.09,.3),"#161616",-.32,.8,0),Bt(new nt(.022,.022,.45,6),"#2a2a2a",.5,.86,0,0,0,.25),Bt(new xe(.05,.04,.64),"#1c1c1c",.46,1.1,0),Bt(new Ft(.055,6,4),"#f4f1e6",.61,1.02,0),Bt(new xe(.03,.06,.16),"#a51d1a",-.78,.6,0)],solids:[[-.84,0,-.22,.76,.86,.22],[.36,.86,-.33,.66,1.16,.33]]},bike:{paint:()=>[Bt(new Ft(.5,10,6),"#fff",.2,.92,0,0,0,0,.5,.22,.3),Bt(new xe(.34,.06,.14),"#fff",.68,.72,0),Bt(new xe(.34,.22,.26),"#fff",-.22,.68,0),Bt(new xe(.42,.05,.14),"#fff",-.62,.7,0,0,0,.25),Bt(new xe(.2,.16,.3),"#fff",.56,.98,0)],trim:()=>[...rc(.66,.31,.1),...rc(-.66,.31,.12),Bt(new xe(.36,.3,.26),"#2b2b2e",.05,.47,0),Bt(new xe(.55,.08,.26),"#161616",-.27,.9,0),Bt(new nt(.035,.03,.7,8),"#c9ccd1",-.3,.4,.16,0,0,Math.PI/2-.12),Bt(new nt(.02,.02,.62,6),"#2b2b2e",.58,.72,0,0,0,.35),Bt(new xe(.04,.04,.7),"#1b1b1b",.5,1.08,0),Bt(new Ft(.075,10,8),"#f4f1e6",.66,.98,0),Bt(new nt(.02,.02,.9,6),"#2b2b2e",-.2,.62,0,0,0,1.1),...[-1,1].map(i=>Bt(new nt(.022,.022,.75,6),"#c9ccd1",.58,.67,i*.07,0,0,.22)),...[-1,1].map(i=>Bt(new xe(.68,.05,.04),"#2b2b2e",-.33,.38,i*.08,0,0,.2))],solids:[[-.98,0,-.2,.98,1,.2],[.42,.9,-.38,.72,1.14,.38]]}},uu=class{constructor(){this.list={scooter:[],bike:[]}}add(e,t,n,s,r){let a=s>0?0:Math.PI;this.list[e].push({x:t,z:n,ry:a,hex:r});let o=new Ge().compose(new D(t,0,n),new It().setFromEuler(new Gt(0,a,0)),new D(1,1,1));return ou[e].solids.map(l=>{let c=Xn(...l),h=new D,f=[];for(let u=0;u<c.length;u+=3)h.set(c[u],c[u+1],c[u+2]).applyMatrix4(o),f.push(Math.round(h.x*1e3)/1e3,Math.round(h.y*1e3)/1e3,Math.round(h.z*1e3)/1e3);return f})}build(e){Object.keys(this.list).forEach(t=>{let n=this.list[t];if(!n.length)return;let s=new Mt(ip(ou[t].paint()),z("#ffffff",.35,.25,{vertexColors:!0}),n.length),r=new Mt(ip(ou[t].trim()),z("#ffffff",.55,.3,{vertexColors:!0}),n.length),a=new Ge,o=new It,l=new Gt,c=new ye;n.forEach((h,f)=>{l.set(0,h.ry,0),o.setFromEuler(l),a.compose(new D(h.x,0,h.z),o,new D(1,1,1)),s.setMatrixAt(f,a),r.setMatrixAt(f,a),s.setColorAt(f,c.set(h.hex))}),s.castShadow=r.castShadow=!0,e.add(s),e.add(r)})}};function w1(i,e){let{kit:t,root:n,beads:s}=i;if(e.cart)return A1(i,e);let r=Ea(n,e.x,e.z,Math.atan2(e.V[0],e.V[1])),a=e.w/2,o=e.depth,l=(_,E,T)=>new D(_,E,T).applyMatrix4(r.matrixWorld),c=[],h=[],f=[],u=(_,E)=>{let T=Xt(_);return c.push(T),E&&E.push(T),_};u(qe(r,e.w,2.4,.06,0,1.2,o+.03,t.selfLit(new $e({color:"#6a381c",emissive:"#ff9a50",roughness:.9}),.1))),[-1,1].forEach(_=>{let E=qe(r,.05,2.4,o,_*a,1.2,o/2,z("#34210f",.9)),T=Xt(E);c.push(T);let w=l(_*a,0,o/2),y=l(_*(a+1),0,o/2).sub(w);f.push({s:T,c:[w.x,w.z],n:[y.x,y.z]})}),qe(r,e.w,.04,o,0,.02,o/2,z("#3a2616",.95)),qe(r,e.w*.8,.04,.25,0,1.55,o-.12,z("#6b4424",.8));for(let _=0;_<7;_++)xt(r,.06,.06,.16,ct(-a*.7,a*.7,_/6),1.65,o-.12,z(["#c9a37a","#b5651d","#e8d5b0","#8e1b2c","#2f6fa8","#e8b04b","#d9d2c5"][_],.4,.2),8);let p=u(qe(r,e.w,.97,.45,0,.485,.225,z("#3a2012",.9)),h);_i(r,e.w,.97,0,.485,-.004,t.selfLit(ss(rp(e.col),.8),.22)),u(qe(r,e.w+.04,.06,.72,0,1,.1,z("#d9c3a0",.6)),h),[-a-.25,a+.25].forEach(_=>{u(xt(r,.045,.05,2.78,_,1.39,-.5,z("#8a6a3a",.8),7),h);for(let E=1;E<5;E++)xt(r,.055,.055,.03,_,E*.55,-.5,z("#5a4020",.9),7);for(let E=0;E<16;E++){let T=E*1.1;s.addIn(r,_+Math.cos(T)*.06,2.6-E*.12,-.5+Math.sin(T)*.06,cu[E%3],.03)}});let m=Math.hypot(o+.5,.2);u(qe(r,e.w+.6,.06,m,0,2.85,(o-.5)/2,z("#2a1a10",.9),-Math.atan2(.2,o+.5)),h),_i(r,e.w+.6,.62,0,2.44,-.52,t.selfLit(ss(ap(e.col,8),.85,0,{alphaTest:.35,side:at}),.3,"festive")),h.push(cp(r,-a-.3,2.3,-.54,a+.3,2.75,-.5)),c.push(h[h.length-1]);for(let _=0;_<=7;_++){let E=l(ct(-a-.3,a+.3,(_+.5)/8.5),2.15,-.56);t.bulbs.add(E.x,E.y,E.z,_,{ph:_*1.3+e.x,s:.9})}[-.6,.6].forEach(_=>xt(r,.02,.02,.3,_,2.9,-.48,z("#2a1a10",.8),5)),u(qe(r,1.72,.64,.05,0,3.32,-.46,z("#1a0e08",.9)),h),_i(r,1.68,.6,0,3.32,-.49,t.litMap(op(e.sign,e.en,e.col),1.05,"practical"));let v=!(e.en==="Chai"||e.en==="Snacks"),g=v?ze.tube:ze.tungsten;if(v)xt(r,.018,.018,Math.min(1.2,e.w*.5),0,2.4,.15,t.glow(ze.tube,2.4,"practical"),6,0,0,Math.PI/2);else{let _=l(0,2.3,.4);t.bigBulbs.add(_.x,_.y,_.z,0,{color:ze.tungsten,k:1.3,s:.7,layer:"practical",twinkle:.02})}let d=l(0,1.5,o-.05),x=l(0,0,-1.3),b=l(0,1.06,.1);t.pools.add(d.x,d.y,d.z,a*1.1,1.1,g,.42,{vertical:!0,ry:r.rotation.y,layer:"practical"}),t.pools.add(b.x,b.y,b.z,a*.9,.5,g,.18,{ry:r.rotation.y,layer:"practical",live:!0}),t.pools.add(x.x,.02,x.z,2.8,2.8,g,v?.26:.3,{layer:"practical"}),R1(i,r,e,a,h,c),e.hole3d={back:c,front:h,sides:f}}function cp(i,e,t,n,s,r,a){let o=Xn(e,t,n,s,r,a),l=new D,c=[];for(let h=0;h<o.length;h+=3)l.set(o[h],o[h+1],o[h+2]).applyMatrix4(i.matrixWorld),c.push(Math.round(l.x*1e3)/1e3,Math.round(l.y*1e3)/1e3,Math.round(l.z*1e3)/1e3);return c}function R1(i,e,t,n,s,r){let{kit:a,beads:o}=i,l=1.03,c=z("#c9ccd1",.28,.9),h=t.en,f=u=>{let p=Xt(u);return s.push(p),r.push(p),u};if(h==="Chai"){let u=-n*.45;qe(e,.44,.08,.3,u,l+.04,.05,z("#2a2a2e",.5,.4));let p=new te(new jt(.07,.012,5,16),a.glow("#4aa8ff",2.2,"practical"));p.rotation.x=Math.PI/2,p.position.set(u,l+.085,.05),e.add(p),f(ba(e,[[0,0],[.16,.01],[.19,.08],[.17,.2],[.1,.25],[.02,.28]],u,l+.09,.05,c)),xt(e,.015,.02,.22,u+.2,l+.24,.05,c,6,0,0,-.7);let m=new te(new jt(.1,.01,4,12,Math.PI),c);m.position.set(u,l+.36,.05),e.add(m);for(let v=0;v<6;v++){let g=n*(.05+v*.13);xt(e,.03,.026,.065,g,l+.033,-.08,z("#b8753a",.3),8),xt(e,.032,.032,.03,g,l+.08,-.08,z("#dfe6ea",.15,.1),8)}}else if(h==="Pani puri"||h==="Dabeli"){let u=-n*.7,p=n*.7,m=p-u;[[u,0],[p,0],[u,.3],[p,.3]].forEach(([g,d])=>qe(e,.02,.5,.02,g,l+.25,d-.1,c)),qe(e,m,.02,.42,0,l+.5,.05,c),f(qe(e,m,.5,.4,0,l+.25,.05,new $e({color:"#dff2ff",roughness:.05,metalness:.1,transparent:!0,opacity:.16,depthWrite:!1}))),xt(e,.012,.012,m*.9,0,l+.47,.05,a.glow(ze.warm,2,"practical"),6,0,0,Math.PI/2);let v=h==="Dabeli"?"#c98f45":"#dcae62";for(let g=0;g<3;g++)for(let d=0;d<11;d++)o.addIn(e,ct(u+.08,p-.08,(d+g%2*.5)/11),l+.06+g*.07,.05+(g%2?.08:-.05),v,h==="Dabeli"?.05:.04);h==="Pani puri"&&(ba(e,[[0,0],[.13,.01],[.16,.1],[.155,.12]],n*.85,l,-.02,c),xt(e,.15,.15,.01,n*.85,l+.1,-.02,z("#6aa84f",.2),14))}else if(h==="Water")for(let u=0;u<5;u++){let p=-n*.75+u*n*.37;f(ba(e,[[0,0],[.13,.005],[.14,.05],[.14,.26],[.1,.32],[.04,.35],[.04,.38]],p,l,-.02,z("#2f7fc4",.15,.1))),xt(e,.045,.045,.04,p,l+.39,-.02,z("#e8eef4",.5),8)}else h==="Ice cream"?(f(qe(e,n*1,.36,.45,-n*.3,l+.18,.08,z("#f2f4f6",.4))),qe(e,n*1+.005,.07,.455,-n*.3,l+.2,.08,z("#3b8fd4",.4)),qe(e,n*.96,.01,.42,-n*.3,l+.365,.08,z("#a9c8dc",.1,.2)),["#f6d27a","#f0a0b8","#e9e0c8","#9ad08c"].forEach((u,p)=>{let m=n*(.35+p*.15);xt(e,.006,.006,.1,m,l+.05,-.08,z("#d9c3a0",.8),4);let v=new te(new Ft(.035,8,6),z(u,.5));v.scale.set(1,2.2,1),v.position.set(m,l+.17,-.08),e.add(v)})):[[-.55,"#e6c35a"],[.05,"#f08a24"],[.6,"#d9a35a"]].forEach(([u,p],m)=>{let v=n*u;xt(e,.26,.24,.03,v,l+.015,.02,c,18);for(let g=0;g<14;g++){let d=g*2.4,x=.05+g%5*.035;if(m===1){let b=new te(new jt(.035,.012,4,10),z(p,.35));b.rotation.x=Math.PI/2-.4,b.position.set(v+Math.cos(d)*x,l+.05+g%3*.02,.02+Math.sin(d)*x),e.add(b)}else qe(e,.14,.02,.025,v+Math.cos(d)*x,l+.045+g%3*.018,.02+Math.sin(d)*x,z(p,.7),0,d,0)}});if(h==="Snacks"||h==="Water"){let u=["#f6c342","#d8453a","#2f8f5b","#3b4cc0","#f08a24"];for(let p=0;p<7;p++)for(let m=0;m<3;m++)qe(e,.13,.17,.02,-n+.3+(t.w-.6)*p/6,2.05-m*.2,-.42,z(u[(p+m)%5],.35,.3))}}function A1(i,e){let{kit:t,root:n,beads:s}=i,r=Ea(n,e.x,e.z,Math.atan2(e.V[0],e.V[1])),a=e.w/2,o=e.depth,l=(b,_,E)=>new D(b,_,E).applyMatrix4(r.matrixWorld),c=[],h=[],f=b=>(c.push(Xt(b)),b),u=z("#5a3218",.8),p=z("#c9ccd1",.28,.9);f(qe(r,e.w,.46,o,0,.8,o/2,u)),_i(r,e.w,.46,0,.8,-.004,t.selfLit(ss(rp(e.col),.8),.22)),qe(r,e.w+.06,.04,o+.06,0,1.05,o/2,z("#d9c3a0",.6)),[[-a+.3,.02],[a-.3,.02],[-a+.3,o-.02],[a-.3,o-.02]].forEach(([b,_])=>{f(xt(r,.28,.28,.05,b,.3,_,z("#1a1512",.8),14,Math.PI/2)),xt(r,.05,.05,.07,b,.3,_,p,8,Math.PI/2)}),[-a+.3,a-.3].forEach(b=>qe(r,.04,.04,o,b,.3,o/2,z("#2a2522",.6,.5)));let m=-a*.75,v=a*.4;f(qe(r,v-m,.42,o*.6,(m+v)/2,1.28,o*.45,new $e({color:"#dff2ff",roughness:.05,metalness:.1,transparent:!0,opacity:.16,depthWrite:!1}))),qe(r,v-m,.02,o*.6,(m+v)/2,1.5,o*.45,p);for(let b=0;b<3;b++)for(let _=0;_<8;_++)s.addIn(r,ct(m+.06,v-.06,(_+b%2*.5)/8),1.11+b*.07,o*.45+(b%2?.07:-.06),"#dcae62",.04);f(ba(r,[[0,0],[.12,.02],[.17,.12],[.15,.24],[.08,.3],[.08,.33]],a*.68,1.07,o*.4,z("#9a4a22",.85))),xt(r,.11,.09,.12,a*.68,1.13,o*.8,p,12),[[-a,0],[a,0],[-a,o],[a,o]].forEach(([b,_])=>f(xt(r,.018,.018,1.2,b,1.65,_,p,5))),f(qe(r,e.w+.3,.04,o+.4,0,2.27,o/2,z(e.col,.8),-.08)),_i(r,e.w+.3,.3,0,2.12,-.21,t.selfLit(ss(ap(e.col,6),.85,0,{alphaTest:.35,side:at}),.3,"festive"));for(let b=0;b<=5;b++){let _=l(ct(-a-.1,a+.1,(b+.5)/6.5),2,-.23);t.bulbs.add(_.x,_.y,_.z,b,{ph:b*1.3,s:.8})}xt(r,.015,.015,e.w*.6,0,2.18,o*.4,t.glow(ze.tube,2.4,"practical"),6,0,0,Math.PI/2),f(qe(r,1.2,.42,.04,0,2.55,o*.3,z("#1a0e08",.9))),_i(r,1.16,.4,0,2.55,o*.3-.03,t.litMap(op(e.sign,e.en,e.col),1.05,"practical"));let g=l(0,0,-1),d=l(0,1.12,o*.45);t.pools.add(g.x,.02,g.z,2.2,2.2,ze.tube,.2,{layer:"practical"}),t.pools.add(d.x,d.y,d.z,a,.5,ze.tube,.16,{ry:r.rotation.y,layer:"practical",live:!0});let x=l(-a-.4,0,o*.4);e.hole3d={back:c,front:c,sides:[],vendor:[x.x,x.z]}}function C1(i,e){let{kit:t,root:n,beads:s}=i,r=Ea(n,e.x,e.z,0),a=.74,o=.8,l=.34,c=(F,B,G)=>new D(F,B,G).applyMatrix4(r.matrixWorld),h=[],f=[],u=(F,B=!0)=>{let G=Xt(F);return h.push(G),B&&f.push(G),F},p=z("#c9ccd1",.25,.9),m=z("#a7acb3",.35,.8),v=z("#9b7a45",.8);u(qe(r,o*2,a-.03,l*2,0,(a-.03)/2,0,z("#8e1b2c",.9))),_i(r,o*2,a-.03,0,(a-.03)/2,-l-.004,t.selfLit(ss(x1(),.85),.12,"festive")),u(qe(r,o*2+.04,.03,l*2+.04,0,a-.015,0,z("#4a2e1b",.6))),qe(r,o*2+.05,.012,.012,0,a-.03,-l-.02,z("#9a6a3a",.4));for(let F=0;F<=24;F++){let B=F/24;s.addIn(r,ct(-o,o,B),a-.05-Math.abs(Math.sin(B*Math.PI*4))*.06,-l-.025,cu[F%3],.028)}for(let F=0;F<16;F++){let B=c(ct(-o,o,(F+.5)/16),a-.12,-l-.012);t.bulbs.add(B.x,B.y,B.z,0,{color:"#f4f8ff",k:.35,s:.28,twinkle:.8,ph:F*2.1,layer:"festive"})}_i(r,.5,.25,0,.34,-l-.018,t.litMap(_1(),.78,"show"));for(let F=0;F<16;F++){let B=F/16*1.5,G=B<.5?-.25+B:B<.75?.25:B<1.25?.25-(B-.75):-.25,V=B<.5?.465:B<.75?.465-(B-.5):B<1.25?.215:.215+(B-1.25),X=c(G,V,-l-.02);t.bulbs.add(X.x,X.y,X.z,F,{ph:F%2*Math.PI,twinkle:.55,s:.26,k:.42,layer:"show"})}u(qe(r,.46,.014,.32,-.13,a+.007,.12,m));let g=new gt;g.position.set(-.13,a+.014,-.04),g.rotation.x=-.26,r.add(g),qe(g,.46,.3,.008,0,.15,0,m);let d=Tt(new te(new Ke(.46,.3),new $e({map:v1(),emissiveMap:M1(),emissive:"#ffffff",emissiveIntensity:.62,roughness:.35,metalness:.6})));d.position.set(0,.15,-.005),g.add(d);let x=new te(new Ke(.42,.26),t.glow("#bcd4ff",1.1,"practical"));x.position.set(0,.15,.005),g.add(x),g.updateMatrixWorld(!0),h.push(cp(g,-.23,0,-.01,.23,.3,.01)),f.push(h[h.length-1]),u(qe(r,.54,.045,.3,.43,a+.0225,-.05,z("#16161a",.5,.3)));let b=new te(new Ke(.54,.3),ss(b1(),.5,.2));b.rotation.x=-Math.PI/2,b.position.set(.43,a+.046,-.05),r.add(b);let _=[.27,.59].map((F,B)=>{let G=new gt;G.position.set(F,a+.052,-.07),G.userData.dynamic=!0,r.add(G),xt(G,.075,.075,.012,0,0,0,z("#2a2b31",.3,.6),20),qe(G,.004,.004,.06,0,.008,.03,z("#ffffff",.4));let V=new te(new jt(.078,.004,4,24),t.glow(Bi.traditional.beams[B],1.6,"show"));return V.rotation.x=Math.PI/2,G.add(V),G}),E=new Mt(new xe(.032,.006,.032),new vt({color:"#ffffff"}),8),T=new Ge;for(let F=0;F<8;F++)E.setMatrixAt(F,T.makeTranslation(.43-.27+(F<4?.2:.8)*.54-.06+F%4*.04,a+.048,-.17));E.instanceColor=new Wt(new Float32Array(24),3),r.add(E);let w=c(.72,a,.12);t.flames.add(w.x,w.y,w.z,{s:.04,bowl:"brass"}),u(ba(r,[[0,0],[.065,.005],[.07,.04],[.058,.16],[.05,.19],[.056,.205]],-.62,a,-.05,p));let y=new te(new jt(.035,.006,4,10,Math.PI),p);y.position.set(-.55,a+.11,-.05),y.rotation.z=-Math.PI/2,r.add(y),u(xt(r,.045,.034,.14,-.45,a+.07,-.18,z("#f4efe4",.7),10)),xt(r,.17,.16,.04,0,.62,.55,z("#3a2a1c",.7),14),[0,1,2].forEach(F=>{let B=F/3*se+.5;xt(r,.015,.018,.64,Math.cos(B)*.12,.31,.55+Math.sin(B)*.12,z("#2a1e14",.6,.3),5,Math.sin(B)*.18,0,-Math.cos(B)*.18)});let M=[];[-1,1].forEach(F=>{let B=F*1.28,G=.2;[0,1,2].forEach(O=>{let $=O/3*se+.3;xt(r,.012,.012,1.1,B+Math.cos($)*.14,.52,G+Math.sin($)*.14,z("#1b1814",.6,.4),5,Math.sin($)*.27,0,-Math.cos($)*.27)}),u(xt(r,.02,.02,1.25,B,.62,G,z("#1b1814",.6,.4),6),!1),u(qe(r,.44,.66,.34,B,1.53,G,z("#161414",.75))),_i(r,.44,.66,B,1.53,G-.172,S1());let V=xt(r,.12,.12,.02,B,1.53-.66*.12,G-.17,z("#0b0a0a",.6),16,Math.PI/2);V.userData.dynamic=!0,M.push(V);let X=c(B+.17,1.83,G-.18);t.bulbs.add(X.x,X.y,X.z,0,{color:"#6dff9a",k:.6,s:.18,twinkle:0,layer:"show"})});let A=[-1,1].map(F=>{let B=F*1.28,G=.2;qe(r,.22,.05,.18,B,1.885,G,z("#141217",.5,.4));let V=new gt;V.position.set(B,1.91,G),V.userData.dynamic=!0,r.add(V),[-1,1].forEach(ie=>qe(V,.025,.13,.12,ie*.085,.07,0,z("#1b1920",.5,.4)));let X=new gt;X.position.y=.09,V.add(X),xt(X,.06,.07,.13,0,0,0,z("#232027",.45,.4),12,Math.PI/2);let O=new te(new ln(.05,14),new vt({color:"#ffffff"}));O.position.z=-.066,O.rotation.y=Math.PI,X.add(O);let $=new te(new ln(1,24),new vt({map:Qs(),color:"#ffffff",transparent:!0,opacity:.35,blending:wn,depthWrite:!1}));return $.rotation.x=-Math.PI/2,$.renderOrder=2,$.userData.dynamic=!0,n.add($),{sd:F,x:B,z:G,yoke:V,hd:X,lens:O,spot:$,beam:new ai(n,"#ffffff",6,.2,.22),from:c(B,2,G)}}),I=qe(r,o*2-.04,.018,.012,0,a-.055,-l-.03,new vt({color:"#ffffff"}));I.userData.dynamic=!0;let N=c(0,a*.45,-l-.04);t.pools.add(N.x,N.y,N.z,o*1.1,a*.6,"#ffffff",.22,{vertical:!0,theme:!0,layer:"show"}),[-1.15,1.15].forEach(F=>{qe(r,.14,.08,.12,F,.04,.95-.16,z("#141217",.5,.4));let B=c(F,.09,.95-.22);t.bigBulbs.add(B.x,B.y,B.z,0,{k:.6,s:.3,twinkle:0,layer:"show"});let G=c(F,1.3,.95-.06);t.pools.add(G.x,G.y,G.z,.35,1.2,"#ffffff",.3,{vertical:!0,theme:!0,layer:"show"})});let C=.95,P=2.45;[-1.15,1.15].forEach((F,B)=>{u(xt(r,.035,.04,P,F,P/2,C,v,7),!1);for(let G=1;G<5;G++)xt(r,.045,.045,.025,F,G*P/5,C,z("#6b5028",.9),7);for(let G=0;G<18;G++){let V=G*1.2+B;s.addIn(r,F+Math.cos(V)*.05,P-.1-G*.1,C+Math.sin(V)*.05,cu[G%3],.028)}}),u(xt(r,.03,.03,2.4,0,P,C,v,7,0,0,Math.PI/2),!1);for(let F=0;F<13;F++){let B=c(ct(-1.15,1.15,(F+.5)/13),P-.01,C-.02);t.flags.add(B.x,B.y,B.z,0,.14,F)}for(let F=0;F<=10;F++){let B=F/10,G=c(ct(-1.15,1.15,B),P-.35-Math.sin(B*Math.PI)*.28,C-.03);t.bulbs.add(G.x,G.y,G.z,F,{ph:F*1.7,s:1})}t.wires.cable(c(-1.15,P-.32,C-.03).toArray(),c(1.15,P-.32,C-.03).toArray(),.28);let H=c(0,0,.4);return t.pools.add(H.x,.02,H.z,2.4,2,ze.tungsten,.16,{layer:"festive"}),e.hole3d={back:h,front:f},{update(F,B){let{reduce:G,beat:V,lv:X,TH:O,pulse:$}=B;_.forEach((_e,Ne)=>{_e.rotation.y=G?0:F*3*(Ne?-1:1)});let ie=E.instanceColor.array,Ee=new ye("#2a2a30");for(let _e=0;_e<8;_e++){let Ne=(Math.floor(V*2)+_e)%4===0,J=Ne?new ye(O.beams[_e%O.beams.length]).multiplyScalar(2.2*X.show):Ee;ie[_e*3]=J.r,ie[_e*3+1]=J.g,ie[_e*3+2]=J.b}E.instanceColor.needsUpdate=!0,M.forEach(_e=>{let Ne=1+(G?0:.08*$);_e.scale.set(Ne,1,Ne)}),I.material.color.copy(js(O.hues[Math.floor(F*.7)%O.hues.length]+25*Math.sin(F*O.speed),O.sat,50)).multiplyScalar((1.1+.6*$)*X.show),A.forEach((_e,Ne)=>{let J=G?.6:F*(.45+O.speed*.5),re=Math.sin(J+Ne*2.4),Se=Math.sin(J*.7+Ne),Le=c(_e.sd*(3.2+1.6*re),.02,-1.2-2.2*(.5+.5*Se));_e.yoke.rotation.y=-_e.sd*(.9+.35*re),_e.hd.rotation.x=-.55-Se*.2;let ge=O.beams[(Ne+Math.floor(F/6))%O.beams.length],Fe=X.show*(.85+.4*$);_e.beam.aim(_e.from.toArray(),[Le.x,Le.y,Le.z]),_e.beam.set(ge,Fe),_e.lens.material.color.set(ge).multiplyScalar(2.2*X.show),_e.spot.position.set(Le.x,.025,Le.z),_e.spot.scale.setScalar(.75),_e.spot.material.color.set(ge),_e.spot.material.opacity=.32*Fe,_e.spot.visible=Fe>.02})}}}function P1(i,e){let{root:t,chairs:n,beads:s}=i,r=[],a=o=>(r.push(Xt(o)),o);if(e.kind==="cooler")a(qe(t,.5,.5,.42,e.x,.25,e.z+.2,z("#3a2a1c",.85))),a(xt(t,.25,.25,.58,e.x,.79,e.z+.2,z("#2f6fb4",.35,.05),18)),[.62,.96].forEach(o=>xt(t,.255,.255,.02,e.x,o,e.z+.2,z("#23548a",.4),18)),xt(t,.012,.012,.08,e.x,.6,e.z-.07,z("#c9ccd1",.25,.9),6,Math.PI/2),xt(t,.035,.03,.08,e.x+.12,.54,e.z-.05,z("#c9ccd1",.25,.9),8);else if(e.kind==="crates")[0,1].forEach(o=>{let l=o*.28,c=o*.04;a(qe(t,.6,.27,.4,e.x+c,l+.135,e.z+.2,z(o?"#a8201a":"#8c1a15",.6)));for(let h=0;h<12;h++)s.add(e.x+c-.24+h%6*.095,l+.28,e.z+.08+Math.floor(h/6)*.22,h%2?"#e8b04b":"#d8453a",.022)});else if(e.kind==="chairs")for(let o=0;o<5;o++){let l=n.add(e.x,e.z,0,"#ece6da",o*.09);r.push(l.seat,l.back)}else if(e.kind==="plasticChair"){let o=n.add(e.x,e.z,0,e.col);r.push(o.seat,o.back)}else if(e.kind==="stone"){let o=new te(new yn(e.r,0),z("#6d6259",.95));o.scale.set(1,.6,.85),o.position.set(e.x,e.r*.3,e.z),o.rotation.y=e.x*3,t.add(o),r.push(Xt(o))}e.hole3d={back:r}}function I1(i,e){let{kit:t,root:n,rides:s,beads:r}=i;if(e.kind==="scooter"||e.kind==="activa"||e.kind==="bike"){let a=s.add(e.kind==="bike"?"bike":"scooter",e.x,e.z,-e.side,e.col);e.hole3d={back:i.id==="outdoors"?[]:a};return}if(e.kind==="van"){e.hole3d={back:L1(i,e)};return}if(e.kind==="tulsi"){let a=Math.sign(e.x)||1,o=.45,l=[];l.push(Xt(qe(n,.42,.5,.42,e.x,o+.25,e.z,z("#9a5328",.85)))),qe(n,.43,.05,.43,e.x,o+.4,e.z,z("#e8b04b",.6)),qe(n,.46,.04,.46,e.x,o+.52,e.z,z("#7a3e1c",.85));for(let c=0;c<5;c++){let h=c/5*se,f=c?.13:0,u=new te(new yn(c?.13:.17,1),z(c%2?"#2f6b33":"#24552a",.9,0,{flatShading:!0}));u.position.set(e.x+Math.cos(h)*f,o+.72+(c?0:.1),e.z+Math.sin(h)*f),n.add(u)}l.push(Xn(e.x-.3,o+.5,e.z-.3,e.x+.3,o+.98,e.z+.3)),t.flames.add(e.x-a*.3,o,e.z-.1,{s:.04}),e.hole3d={back:l};return}e.kind==="tent"&&(D1(i,e),e.hole3d={back:[]})}function L1(i,e){let{kit:t,root:n}=i,s=e.x-.72,r=e.x+.72,a=e.z-1.9,o=e.z+1.9,l=.28,c=1.9,h=[],f=z("#ecece7",.3,.3),u=z("#1f2730",.08,.6),p=Ea(n,0,0,0);return h.push(Xt(qe(p,r-s,c-l,o-.45-a,e.x,(c+l)/2,(a+o-.45)/2,f))),h.push(Xt(qe(p,r-s,1.05-l,.45,e.x,(1.05+l)/2,o-.225,f))),qe(p,r-s-.04,Math.hypot(.45,.85),.04,e.x,1.475,o-.225,u,-Math.atan2(.45,.85)),h.push(Xn(s,1.05,o-.45,r,c,o)),[-1,1].forEach(m=>{let v=m<0?s-.003:r+.003;qe(p,.004,.57,o-.9-a-.25,v,1.435,(a+.25+o-.9)/2,u),qe(p,.006,.14,o-a,v,l+.07,e.z,z("#9a9c98",.6))}),qe(p,r-s-.28,.6,.004,e.x,1.45,a-.003,u),[s+.13,r-.13].forEach(m=>qe(p,.14,.33,.01,m,.785,a-.005,z("#a51d1a",.3))),qe(p,.48,.12,.01,e.x,.56,a-.006,z("#f2cf3e",.5)),qe(p,r-s+.04,.17,.08,e.x,.37,a-.03,z("#3a3b3d",.7)),qe(p,r-s+.04,.17,.08,e.x,.37,o+.03,z("#3a3b3d",.7)),[[a+.65],[o-.7]].forEach(([m])=>[s+.02,r-.02].forEach(v=>{h.push(Xt(xt(p,.3,.3,.18,v,.3,m,z("#141414",.8),16,0,0,Math.PI/2))),xt(p,.15,.15,.19,v,.3,m,z("#8f9398",.4,.6),10,0,0,Math.PI/2)})),t.pools.add(e.x,c+.01,e.z,.9,1.8,ze.sodium,.08,{layer:"practical",live:!0}),h}function D1(i,e){let{kit:t,root:n}=i,s=Ea(n,e.x,e.z,0),r=8,a=5,o=3.2,l=4.6,c=it(256,64,(u,p,m)=>{for(let v=0;v<8;v++)u.fillStyle=v%2?"#f3e6d0":e.col,u.fillRect(v/8*p,0,p/8+1,m)}),h=new te(new Dr(Math.hypot(r,a)/2,l-o,4,1,!0),new $e({map:c,roughness:.9,side:at}));h.rotation.y=Math.PI/4,h.scale.set(r/Math.hypot(r,a),1,a/Math.hypot(r,a)),h.position.set(0,(l+o)/2,a/2),s.add(h),qe(s,r,o,.05,0,o/2,a,z("#e9dcc2",.9,0,{emissive:"#ffb870",emissiveIntensity:.25})),[-1,1].forEach(u=>qe(s,.05,o,a,u*r/2,o/2,a/2,z("#e9dcc2",.9))),[[-r/2,0],[r/2,0],[-r/2,a],[r/2,a]].forEach(([u,p])=>xt(s,.05,.05,o,u,o/2,p,z("#2a1a10",.8),6));for(let u=0;u<=8;u++){let p=new D(ct(-r/2,r/2,u/8),o-.05,-.05).applyMatrix4(s.matrixWorld);t.bulbs.add(p.x,p.y,p.z,u,{ph:u})}let f=new D(0,1.6,a-.1).applyMatrix4(s.matrixWorld);t.pools.add(f.x,f.y,f.z,r*.45,1.8,ze.tungsten,.3,{vertical:!0,layer:"practical"}),t.pools.add(e.x,.02,e.z+a/2,r*.6,a,ze.tungsten,.2,{layer:"practical"})}function U1(i,e){if(e.kind)return;let t=i.chairs.add(e.x,e.z,e.side*Math.PI/2,e.col);e.hole3d={back:[t.seat,t.back,t.arms]}}function N1(i,e){let{root:t,chairs:n}=i;if(e.kind==="chair"){let s=n.add(e.x,e.z,Math.PI,e.col);e.hole3d={back:[s.seat,s.back,s.arms],front:[s.back]}}else if(e.kind==="benchPlank"){let s=z("#6b3f1f",.8),r=[];r.push(Xt(qe(t,e.w+.4,.05,.44,e.x,.425,e.z,s))),[-1,1].forEach(a=>r.push(Xt(qe(t,.06,.42,.4,e.x+a*e.w/2,.21,e.z,z("#3b2213",.8))))),e.hole3d={back:r}}else if(e.kind==="step"){let{kit:s}=i;qe(t,e.w*2,e.y,1.12,e.x,e.y/2,e.z-.44,F1(s)),qe(t,e.w*2,.006,.05,e.x,e.y+.003,e.z+.05,B1(s));for(let r=-e.w+2.4;r<e.w;r+=2.4)qe(t,.02,.004,1.1,e.x+r,e.y+.002,e.z-.45,z("#17131b",.95));[-e.w+.3,0,e.w-.3].forEach(r=>{s.bulbs.add(e.x+r,e.y-.1,e.z+.125,0,{color:ze.amber,k:.8,s:.5,twinkle:0,layer:"architectural"}),s.pools.add(e.x+r,e.y+.008,e.z+.6,1.3,.55,ze.amber,.22,{layer:"architectural",live:!0})}),e.hole3d={back:[]}}}var F1=i=>i.stepMat||(i.stepMat=i.selfLit(new $e({color:"#2c2734",emissive:"#2c2734",roughness:.92}),.55,"architectural")),B1=i=>i.nosingMat||(i.nosingMat=i.selfLit(new $e({color:"#8a6f2c",emissive:"#8a6f2c",roughness:.8}),.12,"architectural"));function hp(i,e,t,n){let s={kit:i,root:e,id:t,beads:new lu,chairs:new hu,rides:new uu},r=[];return(n.stalls||[]).forEach(a=>w1(s,a)),n.dj&&(r.push(C1(s,n.dj)),(n.dj.life||[]).forEach(a=>P1(s,a))),(n.props||[]).forEach(a=>I1(s,a)),(n.seats||[]).forEach(a=>U1(s,a)),(n.gallery||[]).forEach(a=>N1(s,a)),s.beads.build(e),s.chairs.build(e),s.rides.build(e),{update(a,o){r.forEach(l=>l.update(a,o))}}}function li(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function fu(i,e,t,n,s,r){for(let a of[0,-i,i])for(let o of[0,-e,e])a&&(t+a<-s||t+a>i+s)||o&&(n+o<-s||n+o>e+s)||r(t+a,n+o)}function du(i,e){let t=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,t,n).data,r=li(t,n),a=r.getContext("2d"),o=a.createImageData(t,n),l=o.data,c=(h,f)=>s[((f+n)%n*t+(h+t)%t)*4]/255;for(let h=0;h<n;h++)for(let f=0;f<t;f++){let u=(c(f+1,h)-c(f-1,h))*e,p=(c(f,h+1)-c(f,h-1))*e,m=Math.hypot(u,p,1),v=(h*t+f)*4;l[v]=(-u/m*.5+.5)*255,l[v+1]=(p/m*.5+.5)*255,l[v+2]=(1/m*.5+.5)*255,l[v+3]=255}return a.putImageData(o,0,0),r}function nr(i,e,t){let n=new _n(i);return n.colorSpace=t?xn:zt,n.anisotropy=8,n.wrapS=n.wrapT=Jt,n.repeat.set(e[0],e[1]),n}function O1(i){let e=An(41),t=li(i,i),n=li(i,i),s=t.getContext("2d"),r=n.getContext("2d"),a=i/1024;s.fillStyle="#4a3624",s.fillRect(0,0,i,i),r.fillStyle="#808080",r.fillRect(0,0,i,i);for(let o=0;o<70;o++){let l=e()*i,c=e()*i,h=(40+e()*140)*a,f=e()<.5;fu(i,i,l,c,h,(u,p)=>{let m=s.createRadialGradient(u,p,0,u,p,h);m.addColorStop(0,f?"rgba(120,92,64,.1)":"rgba(20,12,6,.1)"),m.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=m,s.fillRect(u-h,p-h,h*2,h*2)})}for(let o=0;o<26e3;o++){let l=e()*i,c=e()*i,h=(.6+e()*1.8)*a,f=e();s.fillStyle=f<.45?`rgba(170,135,100,${.03+e()*.05})`:f<.9?`rgba(0,0,0,${.04+e()*.08})`:`rgba(120,112,104,${.04+e()*.05})`,s.fillRect(l,c,h,h),r.fillStyle=f<.45?"rgba(255,255,255,.08)":"rgba(0,0,0,.08)",r.fillRect(l,c,h,h)}for(let o=0;o<150;o++){let l=e()*i,c=e()*i,h=(1.5+e()*3)*a,f=h*(.6+e()*.4),u=e()*se,p=58+e()*34;fu(i,i,l,c,h*2,(m,v)=>{s.fillStyle="rgba(0,0,0,.18)",s.beginPath(),s.ellipse(m+h*.3,v+h*.3,h,f,u,0,se),s.fill(),s.fillStyle=`rgb(${p},${p*.86},${p*.72})`,s.beginPath(),s.ellipse(m,v,h,f,u,0,se),s.fill(),s.fillStyle="rgba(255,240,220,.08)",s.beginPath(),s.ellipse(m-h*.3,v-f*.3,h*.4,f*.35,u,0,se),s.fill();let g=r.createRadialGradient(m,v,0,m,v,h);g.addColorStop(0,"#fff"),g.addColorStop(1,"rgba(128,128,128,0)"),r.fillStyle=g,r.beginPath(),r.ellipse(m,v,h,f,u,0,se),r.fill()})}s.lineCap=r.lineCap="round";for(let o=0;o<40;o++){let l=e()*i,c=e()*i,h=e()*se,f=6+Math.floor(e()*10);s.strokeStyle="rgba(8,4,2,.26)",s.lineWidth=(.8+e())*a,r.strokeStyle="rgba(0,0,0,.3)",r.lineWidth=1.6*a,s.beginPath(),s.moveTo(l,c),r.beginPath(),r.moveTo(l,c);for(let u=0;u<f;u++)h+=(e()-.5)*1.2,l+=Math.cos(h)*12*a,c+=Math.sin(h)*12*a,s.lineTo(l,c),r.lineTo(l,c);s.stroke(),r.stroke()}for(let o=0;o<160;o++){let l=e()*i,c=e()*i,h=e()*se;fu(i,i,l,c,20*a,(f,u)=>{s.fillStyle=`rgba(0,0,0,${.05+e()*.07})`,s.beginPath(),s.ellipse(f,u,(8+e()*10)*a,(3+e()*3)*a,h,0,se),s.fill()})}return{c:t,n:du(n,2)}}function H1(i){let e=An(53),t=li(i,i),n=li(i,i),s=t.getContext("2d"),r=n.getContext("2d"),a=2,o=i/a,l=i/1024;r.fillStyle="#b0b0b0",r.fillRect(0,0,i,i);let c=[{ground:"#3e1715",petal:"#6e3420",ring:"#8a5e3c",heart:"#9c7450",corner:"#5a2618"},{ground:"#4a2216",petal:"#3a1412",ring:"#8a5e3c",heart:"#6e3420",corner:"#3a1412"}];for(let h=0;h<a;h++)for(let f=0;f<a;f++){let u=c[(f+h)%2],p=f*o,m=h*o,v=p+o/2,g=m+o/2;s.fillStyle=u.ground,s.fillRect(p,m,o,o),s.save(),s.beginPath(),s.rect(p,m,o,o),s.clip(),s.strokeStyle=u.ring,s.lineWidth=6*l,s.beginPath(),s.arc(v,g,o*.36,0,se),s.stroke();for(let d=0;d<4;d++)s.save(),s.translate(v,g),s.rotate(d*Math.PI/2+Math.PI/4),s.fillStyle=u.petal,s.beginPath(),s.moveTo(0,0),s.quadraticCurveTo(o*.13,-o*.13,0,-o*.31),s.quadraticCurveTo(-o*.13,-o*.13,0,0),s.fill(),s.restore();for(let d=0;d<4;d++)s.save(),s.translate(v,g),s.rotate(d*Math.PI/2),s.fillStyle=u.ring,s.beginPath(),s.ellipse(0,-o*.22,o*.025,o*.06,0,0,se),s.fill(),s.restore();s.fillStyle=u.heart,s.beginPath(),s.arc(v,g,o*.06,0,se),s.fill(),[[p,m],[p+o,m],[p,m+o],[p+o,m+o]].forEach(([d,x])=>{s.fillStyle=u.corner,s.beginPath(),s.arc(d,x,o*.16,0,se),s.fill(),s.strokeStyle=u.ring,s.lineWidth=4*l,s.beginPath(),s.arc(d,x,o*.2,0,se),s.stroke()});for(let d=0;d<6;d++){let x=p+e()*o,b=m+e()*o,_=s.createRadialGradient(x,b,0,x,b,(30+e()*70)*l);_.addColorStop(0,`rgba(${e()<.5?"255,240,220":"0,0,0"},${.04+e()*.04})`),_.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=_,s.fillRect(p,m,o,o)}for(let d=0;d<700;d++)s.fillStyle=`rgba(${e()<.5?"255,245,230":"0,0,0"},${e()*.05})`,s.fillRect(p+e()*o,m+e()*o,1.5*l,1.5*l);s.restore(),s.fillStyle="rgba(30,16,12,.55)",s.fillRect(p,m,o,2*l),s.fillRect(p,m,2*l,o),r.fillStyle="#7a7a7a",r.fillRect(p,m,o,2.5*l),r.fillRect(p,m,2.5*l,o)}return{c:t,n:du(n,1.2)}}function z1(i){let e=An(31),t=li(i,i),n=li(i,i),s=t.getContext("2d"),r=n.getContext("2d"),a=4,o=i/a,l=i/1024,c=i/1.2;s.fillStyle="#26282a",s.fillRect(0,0,i,i),r.fillStyle="#404040",r.fillRect(0,0,i,i);let h=[[66,70,74],[72,72,70],[60,66,68],[74,72,68],[64,70,66],[70,70,76],[58,62,64]];for(let f=0;f<a;f++){let u=-e()*.3*c,p=f*o,m=u+i;for(;u<m;){let v=(.25+e()*.3)*c,g=Math.min(v,m-u),d=h[Math.floor(e()*h.length)],x=2*l,b=_=>{let E=u+_+x,T=p+x,w=g-x*2,y=o-x*2;s.fillStyle=`rgb(${d[0]},${d[1]},${d[2]})`,s.fillRect(E,T,w,y),r.fillStyle="#b4b4b4",r.fillRect(E,T,w,y);for(let A=0;A<5;A++){let I=T+e()*y,N=.02+e()*.04;s.fillStyle=`rgba(${e()<.5?"230,236,240":"0,0,0"},${N})`,s.fillRect(E,I,w,(3+e()*10)*l),r.fillStyle=`rgba(${e()<.5?"255,255,255":"0,0,0"},.06)`,r.fillRect(E,I,w,(3+e()*8)*l)}let M=s.createLinearGradient(E,T,E+w,T+y);M.addColorStop(0,"rgba(255,255,255,.035)"),M.addColorStop(1,"rgba(0,0,0,.05)"),s.fillStyle=M,s.fillRect(E,T,w,y);for(let A=0;A<220;A++)s.fillStyle=`rgba(${e()<.5?"235,240,245":"0,0,0"},${e()*.05})`,s.fillRect(E+e()*w,T+e()*y,1.5*l,1.5*l)};b(0),u+g>i&&b(-i),u<0&&b(i),u+=g}}return{c:t,n:du(n,2.4)}}function G1(i,e,t){let s=li(2048,2048),r=s.getContext("2d"),a=2048/i.w,o=u=>(u-(i.cx-i.w/2))*a,l=u=>(u-(i.cz-i.d/2))*a,c=r.createRadialGradient(o(0),l(14),4*a,o(0),l(14),30*a);c.addColorStop(0,"rgba(142,112,82,.42)"),c.addColorStop(.6,"rgba(142,112,82,.26)"),c.addColorStop(1,"rgba(142,112,82,0)"),r.fillStyle=c,r.fillRect(0,0,2048,2048),(e||[]).forEach(u=>{let p=o(u.x),m=l(u.z),v=u.R*a,g=Math.max(.5,Math.min(1.2,u.R*.22))*a,d=r.createRadialGradient(p,m,Math.max(0,v-g*1.6),p,m,v+g*1.6);d.addColorStop(0,"rgba(150,118,84,0)"),d.addColorStop(.5,"rgba(150,118,84,.24)"),d.addColorStop(1,"rgba(150,118,84,0)"),r.fillStyle=d,r.beginPath(),r.arc(p,m,v+g*1.6,0,se),r.fill()});let h=o(0),f=l(0);r.strokeStyle="rgba(214,206,190,.38)",r.lineWidth=.06*a,r.beginPath(),r.arc(h,f,2.7*a,0,se),r.stroke(),r.setLineDash([.06*a,.18*a]),r.lineWidth=.05*a,r.beginPath(),r.arc(h,f,3.05*a,0,se),r.stroke(),r.setLineDash([]);for(let u=0;u<36;u++){let p=u/36*se;r.fillStyle="rgba(214,206,190,.36)",r.beginPath(),r.ellipse(h+Math.cos(p)*2.88*a,f+Math.sin(p)*2.88*a,.1*a,.04*a,p,0,se),r.fill()}return up(r,h,f,2.2*a,5.5*a,900,a,t),s}function up(i,e,t,n,s,r,a,o){for(let l=0;l<r;l++){let c=o()*se,h=n+Math.pow(o(),1.6)*(s-n);i.fillStyle=o()<.6?`rgba(240,${120+Math.floor(o()*40)},30,.85)`:"rgba(246,196,60,.85)",i.beginPath(),i.ellipse(e+Math.cos(c)*h,t+Math.sin(c)*h,.035*a,.022*a,o()*se,0,se),i.fill()}}function k1(i,e){let n=li(2048,2048),s=n.getContext("2d"),r=2048/i.w,a=(0-(i.cx-i.w/2))*r,o=(0-(i.cz-i.d/2))*r,l=6*r;s.fillStyle="rgba(80,14,24,.82)",s.beginPath(),s.arc(a,o,l,0,se),s.fill();let c="rgba(214,166,74,.9)",h=(u,p)=>{s.strokeStyle=c,s.lineWidth=p*r,s.beginPath(),s.arc(a,o,u*l,0,se),s.stroke()};h(1,.05),h(.965,.02),h(.82,.02),h(.58,.03),h(.4,.02);for(let u=0;u<20;u++){let p=u/20*se,m=p-se/44,v=p+se/44,g=.6*l,d=.8*l;s.beginPath(),s.moveTo(a+Math.cos(m)*g,o+Math.sin(m)*g),s.quadraticCurveTo(a+Math.cos(m)*d*.9,o+Math.sin(m)*d*.9,a+Math.cos(p)*d,o+Math.sin(p)*d),s.quadraticCurveTo(a+Math.cos(v)*d*.9,o+Math.sin(v)*d*.9,a+Math.cos(v)*g,o+Math.sin(v)*g),s.closePath(),s.fillStyle="rgba(214,112,40,.55)",s.fill(),s.strokeStyle=c,s.lineWidth=.02*r,s.stroke(),s.fillStyle="rgba(243,230,208,.7)",s.beginPath(),s.arc(a+Math.cos(p)*.69*l,o+Math.sin(p)*.69*l,.06*r,0,se),s.fill()}[[.49,40,"rgba(243,230,208,.75)",.04],[.885,72,"rgba(214,166,74,.85)",.05],[.94,96,"rgba(47,143,91,.7)",.03]].forEach(([u,p,m,v])=>{for(let g=0;g<p;g++){let d=g/p*se;s.fillStyle=m,s.beginPath(),s.arc(a+Math.cos(d)*u*l,o+Math.sin(d)*u*l,v*r,0,se),s.fill()}});let f=An(9);for(let u=0;u<500;u++){let p=f()*se,m=l*(.42+f()*.58);s.fillStyle="rgba(0,0,0,.1)",s.beginPath(),s.ellipse(a+Math.cos(p)*m,o+Math.sin(p)*m,.12*r,.04*r,p+Math.PI/2,0,se),s.fill()}return n}function V1(i,e){let n=li(2048,2048),s=n.getContext("2d"),r=2048/i.w,a=(0-(i.cx-i.w/2))*r,o=(0-(i.cz-i.d/2))*r,l=["rgba(194,24,91,.78)","rgba(240,138,36,.8)","rgba(246,195,66,.8)","rgba(47,143,91,.78)","rgba(59,76,192,.76)"],c="rgba(236,230,214,.45)";for(let h=0;h<30;h++){let f=h/30*se,u=(h+1)/30*se;s.fillStyle=l[h%5],s.beginPath(),s.arc(a,o,2.55*r,f,u),s.arc(a,o,2.2*r,u,f,!0),s.closePath(),s.fill()}s.strokeStyle=c,s.lineWidth=.025*r,[2.2,2.55].forEach(h=>{s.beginPath(),s.arc(a,o,h*r,0,se),s.stroke()});for(let h=0;h<18;h++){let f=h/18*se,u=f-se/40,p=f+se/40,m=2.6*r,v=3.2*r;s.beginPath(),s.moveTo(a+Math.cos(u)*m,o+Math.sin(u)*m),s.quadraticCurveTo(a+Math.cos(u)*v*.95,o+Math.sin(u)*v*.95,a+Math.cos(f)*v,o+Math.sin(f)*v),s.quadraticCurveTo(a+Math.cos(p)*v*.95,o+Math.sin(p)*v*.95,a+Math.cos(p)*m,o+Math.sin(p)*m),s.closePath(),s.fillStyle=l[h*2%5],s.fill(),s.strokeStyle=c,s.lineWidth=.02*r,s.stroke(),s.fillStyle="rgba(236,230,214,.55)",s.beginPath(),s.arc(a+Math.cos(f)*2.88*r,o+Math.sin(f)*2.88*r,.05*r,0,se),s.fill()}for(let h=0;h<54;h++){let f=h/54*se;s.fillStyle=h%2?c:l[2],s.beginPath(),s.arc(a+Math.cos(f)*3.36*r,o+Math.sin(f)*3.36*r,.045*r,0,se),s.fill()}s.globalCompositeOperation="source-atop";for(let h=0;h<6e4;h++)s.fillStyle=e()<.5?"rgba(0,0,0,.14)":"rgba(255,255,255,.1)",s.fillRect(e()*2048,e()*2048,2,2);s.globalCompositeOperation="source-over";for(let h=0;h<900;h++){let f=e()*se,u=(2.2+e()*1.6)*r;s.fillStyle=l[Math.floor(e()*5)].replace(/[\d.]+\)$/,".35)"),s.fillRect(a+Math.cos(f)*u,o+Math.sin(f)*u,2,2)}return up(s,a,o,3.5*r,4.4*r,120,r,e),n}function ac(i,e,t,n){let s=n.name==="phone"?512:1024,r=An(i.length*7+3);if(i==="outdoors"){let l=O1(s),c={cx:0,cz:12,w:64,d:64};return{map:nr(l.c,[80,80]),normalMap:nr(l.n,[80,80],!0),normalScale:.45,roughness:.96,decal:G1(c,t,r),decalRect:c}}if(i==="stadium"){let l=H1(s),c={cx:0,cz:0,w:16,d:16};return{map:nr(l.c,[53,77]),normalMap:nr(l.n,[53,77],!0),normalScale:.35,roughness:.74,decal:k1(c,e),decalRect:c}}let a=z1(s),o={cx:0,cz:0,w:14.4,d:14.4};return{map:nr(a.c,[12,103]),normalMap:nr(a.n,[12,103],!0),normalScale:.5,roughness:.86,decal:V1(o,r),decalRect:o}}function mu(i,e,t,n,s,r){let a=new te(new Ke(t,n),new $e({map:e.map,normalMap:e.normalMap,normalScale:new le(e.normalScale,e.normalScale),roughness:e.roughness,metalness:0}));return a.userData.decal={canvas:e.decal,rect:e.decalRect},a.rotation.x=-Math.PI/2,a.position.set(0,0,s),a.receiveShadow=!!r,a.userData.rect={w:t,d:n,cx:0,cz:s},i.add(a),a}function gu(i,e){e.forEach(([t,n,s,r,a,o])=>i.pools.add(t,.02,n,s,s,r,a,{layer:o||"practical"}))}function W1(i){let e=[],t=(n,s,r)=>{let a=5+Math.floor(i()*3),o=[];for(let l=0;l<a;l++)o.push([(i()-.5)*4.2,5+i()*3.2,(i()-.5)*1.5,1.8+i()*1.6]);e.push({x:n,z:s,s:r?1.25:.8+i()*.4,blobs:o,fairy:i()<.55,hue:Math.floor(i()*6),tone:Math.floor(i()*3)})};for(let n=-48;n<=48;n+=6+i()*4)t(n,58+i()*12,i()<.3);return[-1,1].forEach(n=>{for(let s=-14;s<56;s+=7+i()*5)t(n*(35+i()*8),s,i()<.3)}),t(-29.5,-7,!0),t(30.5,-9.5,!0),e}function X1(){return it(256,128,(i,e,t)=>{i.fillStyle="#b3261e",i.fillRect(0,0,e,t),i.fillStyle="#f1e2c4",i.fillRect(0,t*.18,e,t*.64),i.fillStyle="#b3261e";for(let n=0;n<e;n+=32)i.beginPath(),i.moveTo(n,t*.18),i.lineTo(n+16,t*.34),i.lineTo(n+32,t*.18),i.fill(),i.beginPath(),i.moveTo(n,t*.82),i.lineTo(n+16,t*.66),i.lineTo(n+32,t*.82),i.fill();i.fillStyle="#2f6b3a";for(let n=16;n<e;n+=32)i.beginPath(),i.arc(n,t*.5,9,0,se),i.fill(),i.fillStyle="#e8b04b",i.beginPath(),i.arc(n,t*.5,4,0,se),i.fill(),i.fillStyle="#2f6b3a";i.fillStyle="rgba(0,0,0,.25)",i.fillRect(0,0,3,t)},{repeat:[1,1]})}var pu=null;function oc(i,e,t,n,s,r){if(!pu){let f=X1();f.wrapS=Jt,pu=new $e({map:f,roughness:.95,side:at})}let a=Math.hypot(n-e,s-t),o=new Ke(a,r),l=o.attributes.uv;for(let f=0;f<l.count;f++)l.setX(f,l.getX(f)*a/3);let c=new te(o,pu);c.position.set((e+n)/2,r/2,(t+s)/2),c.rotation.y=Math.atan2(n-e,s-t)-Math.PI/2,i.add(c);let h=Math.round(a/3);for(let f=0;f<=h;f++){let u=f/h,p=new te(new nt(.05,.06,r+.3,5),z("#8a6a3a",.9));p.position.set(ct(e,n,u),(r+.3)/2,ct(t,s,u)),i.add(p)}}function q1(i,e,t,n,s,r){let a=mu(e,ac("outdoors",n,r&&r.circles,t),320,320,20,t.shadows);gu(i,[[19.5,21.4,2.2,"#9fb8ff",.2,"show"]]),e.add(Wd(175)),[-1,1].forEach(d=>{let x=new te(new nt(.06,.08,5.2,6),z("#22180f",.8));x.position.set(d*6.9,2.6,-19.6),e.add(x);let b=new te(new xe(.5,.12,.35),z("#16110e",.6,.3));b.position.set(d*6.7,5.2,-19.4),b.rotation.z=d*.5,e.add(b),i.bigBulbs.add(d*6.62,5.12,-19.4,0,{color:ze.warm,k:1.5,s:.9,twinkle:0,layer:"practical"})}),i.pools.add(0,.02,-17.6,8.5,4.2,ze.warm,.2,{layer:"practical"}),oc(e,-32.5,-16,-32.5,58,2.4),oc(e,32.5,-16,32.5,58,2.4),oc(e,-32.5,58,-14,58,2.4),oc(e,14,58,32.5,58,2.4);let o=[];for(let d=-13;d<=56;d+=6)[-1,1].forEach(x=>o.push([x*32.2,d,Math.PI/2,x,0]));[[-29,-17],[17,29]].forEach(([d,x])=>{for(let b=d;b<=x;b+=6)o.push([b,57.7,0,0,1])}),o.forEach(([d,x,b,_,E])=>vp(i,e,d,x,b,2.2,_,E)),[-31,31].forEach(d=>{let x=iv(11);x.position.set(d,5.5,16),e.add(x);let b=new te(new xe(2.2,1.2,.4),z("#16110e",.6));b.position.set(d,11.6,16),b.rotation.y=-Math.sign(d)*.5,b.rotation.x=.4,e.add(b);for(let _=0;_<4;_++)i.bigBulbs.add(d+(_%2?.5:-.5)*Math.cos(.5),11.3+(_<2?.3:-.2),16-.25+(_%2?.2:-.2)*Math.sign(d),0,{color:ze.flood,k:2.4,s:1.3,twinkle:0,layer:"key"});i.pools.add(d*.55,.02,14,14,11,ze.flood,.19,{layer:"key"}),i.beams.push({from:[d,11.2,16],to:[d*.45,0,14],beam:new ai(e,ze.flood,20,.55,.05),layer:"key",hex:ze.flood})});let l=W1(s);tp(i,e,l),l.filter(d=>d.fairy&&d.z<58&&Math.abs(d.x)<40).forEach(d=>{i.pools.add(d.x,4.6*d.s,d.z-1.2*d.s,3*d.s,3.4*d.s,ze.amber,.1,{vertical:!0,layer:"architectural"}),i.pools.add(d.x,.02,d.z,1.6,1.6,ze.amber,.12,{layer:"architectural"}),i.bigBulbs.add(d.x-.6,.12,d.z-.6,0,{color:ze.amber,k:.9,s:.5,twinkle:0,layer:"architectural"})});let c=nu(i,{x0:-11.5,x1:11.5,z:46,h:1.6,depth:4.4,screenBottom:2,screenTop:9.9,truss:12,arrays:13.5,sponsors:5,sideScreens:!0,band:Yl.big});e.add(c.root),[-21,21].forEach(d=>ru(e,d,16,6));let h=10,f=[];for(let d=0;d<=24;d++){let x=d/24*se+.3;f.push([Math.cos(x)*8.5,h-.25*(1-Math.abs(Math.sin(x*3))),4+Math.sin(x)*8.5])}for(let d=0;d<24;d++)i.wires.line(f[d],f[d+1]);[[[-31,11,16],[-8.5,h,4]],[[31,11,16],[8.5,h,4]],[[0,10.5,46],[0,h,12.5]]].forEach(([d,x])=>i.wires.cable(d,x,.5));let u=[];for(let d=0;d<6;d++){let x=d/6*se+.3;u.push(su(i,e,Math.cos(x)*8.5,7.2,4+Math.sin(x)*8.5,h,n.flags))}let p=[-4,10,24,38],m=24,v=7.4;return p.forEach(d=>[-m,m].forEach(x=>{let b=new te(new nt(.07,.1,v,6),z("#22180f",.9));b.position.set(x,v/2,d),e.add(b)})),p.forEach((d,x)=>{oi(i,[-m,v,d],[m,v,d],1.5,x%2?"flags":"bulbs",x*5),x<p.length-1&&(oi(i,[-m,v,d],[m,v,p[x+1]],1.5,"bulbs",x*7),oi(i,[m,v,d],[-m,v,p[x+1]],1.5,"bulbs",x*11))}),{rig:{hemi:["#36355f","#2a1c12",.37,.58],moon:1,spots:[{pos:[31,11.2,16],to:[12,0,20],color:"#eeeeff",base:105,distance:60,angle:.5,layer:"key"},{pos:c.wash.pos,to:c.wash.to,color:"#ffe4c4",base:150,distance:32,angle:.55,layer:"show"}],points:[{pos:[0,5.2,44.2],color:"#ffe0b8",base:80,distance:15,layer:"show"},{pos:[0,5.5,4],color:"#ffc47a",base:48,distance:16,layer:"festive"},{pos:[0,6.5,22],color:"#ffc47a",base:42,distance:18,layer:"festive"},{pos:[0,5,-19.2],color:ze.warm,base:34,distance:13,layer:"practical"}]},stage:c,umbrellas:u,feedScreen:c.feedScreen,floor:a,fog:new qi("#150d12",.0105),exposure:.98}}var cc={x:[-14,0,14],z:[-16,4,24]},fp=["#c9a37a","#b76b5a","#8f7aa8","#d4b58c","#6c8fa3","#caa0b8","#d98c5f","#7fa37a"];function Y1(i,e,t,n){let s=[];for(let u=0;u<11;u++)for(let p=-27;p<=27;p+=.72)cc.x.some(m=>Math.abs(p-m)<.55)||s.push([p+(n()-.5)*.15,1.3+u*.95,42+u*1.5+.55,0]);[-1,1].forEach(u=>{for(let p=0;p<9;p++)for(let m=-30;m<=40.5;m+=.8)cc.z.some(v=>Math.abs(m-v)<.6)||s.push([u*(25+p*1.5+.55),1.3+p*.95,m+(n()-.5)*.15,u])});let r=Ks,a=kh();for(let u=0;u<r.rows;u++)a.forEach(p=>{(Math.abs(p)>r.aisle||u>r.cam)&&s.push([p,r.y0+u*r.rise+.07,r.z0-u*r.tread-.95,"n"])});let o=s.filter(()=>n()<.55+.4*t),l=Gh([[new nt(.17,.22,.8,6),ts(0,.45,0)],[new yn(.12,0),ts(0,.98,0)]]),c=new Mt(l,i.selfLit(new $e({color:"#ffffff",roughness:.9,emissive:"#2a2238"}),.55,"architectural"),o.length),h=new Ge,f=new ye;c.instanceColor=new Wt(new Float32Array(o.length*3),3),o.forEach((u,p)=>{let m=.85+n()*.25;c.setMatrixAt(p,h.makeScale(1,m,1).setPosition(u[0],u[1],u[2])),f.set(fp[Math.floor(n()*fp.length)]),c.setColorAt(p,f),n()<.05&&i.bulbs.add(u[0]+(n()-.5)*.2,u[1]+1.35,u[3]==="n"?u[2]+.2:u[2]-(u[3]?0:.2)-u[3]*.2,0,{color:"#f4f7ff",group:2,layer:"show",twinkle:.9,ph:n()*se,s:.9})}),e.add(c)}function Z1(i,e,t){let n=Ks,s=kh(),r=[];for(let c=0;c<n.rows;c++){let h=n.z0-c*n.tread,f=n.y0+c*n.rise;if(t.push([_a(new xe(48.6,f,n.tread),`rgb(${36+c*2},${30+c*2},${46+c*2})`),ts(0,f/2,h-n.tread/2)]),t.push([_a(new xe(48.6,.03,.06),"#8a7a5a"),ts(0,f+.006,h-.03)]),s.forEach((u,p)=>r.push([u,f,h-.95,(c*3+Math.floor((u+24)/4.96))%dp.length])),[-n.aisle,n.aisle].forEach(u=>i.bulbs.add(u,f-.12,h+.02,0,{color:ze.amber,k:.7,s:.5,twinkle:0,layer:"architectural"})),c%2===0)for(let u=-20;u<=20;u+=10)i.pools.add(u,f+.012,h-.75,5,1.6,"#a898ff",.07,{layer:"architectural"})}let a=new Mt(new xe(.46,.07,.42),i.selfLit(new $e({color:"#ffffff",roughness:.6,emissive:"#2a2238"}),.3,"architectural"),r.length),o=new Ge,l=new ye;a.instanceColor=new Wt(new Float32Array(r.length*3),3),r.forEach((c,h)=>{a.setMatrixAt(h,o.makeTranslation(c[0],c[1]+.035,c[2])),l.set(dp[c[3]]),a.setColorAt(h,l)}),e.add(a);for(let c=-24;c<=24;c+=8)i.bigBulbs.add(c,15.78,n.z0-n.rows*n.tread-1.5,0,{color:"#a898ff",k:1.1,s:.55,twinkle:0,layer:"architectural"})}var dp=["#8e1b2c","#c2641a","#7a2a5a","#b8312b","#d08a2a"];function $1(i,e){let t=[],s=e;for(let m=0;m<12;m++)t.push([ct(s.x0,s.x1,m/12),s.edge,s.z1]);for(let m=0;m<12;m++)t.push([s.x1,s.edge,ct(s.z1,s.z0,m/12)]);for(let m=0;m<12;m++)t.push([ct(s.x1,s.x0,m/12),s.edge,s.z0]);for(let m=0;m<12;m++)t.push([s.x0,s.edge,ct(s.z0,s.z1,m/12)]);let r=s.apex,a=["#c85a17","#d8c49c","#7e1827","#d8c49c"],o=[],l=[],c=new ye,h=(m,v,g,d)=>{c.set(d),[m,v,g].forEach(x=>{o.push(x[0],x[1],x[2]),l.push(c.r,c.g,c.b)})};for(let m=0;m<t.length;m++){let v=t[m],g=t[(m+1)%t.length],d=[ct(r[0],v[0],.55),ct(r[1],s.edge,.55)-.35,ct(r[2],v[2],.55)],x=[ct(r[0],g[0],.55),ct(r[1],s.edge,.55)-.35,ct(r[2],g[2],.55)],b=a[m%a.length];h(r,x,d,b),h(d,x,g,b),h(d,g,v,b)}let f=new lt;f.setAttribute("position",new Qe(o,3)),f.setAttribute("color",new Qe(l,3)),f.computeVertexNormals();let u=new te(f,new $e({color:"#ffffff",roughness:.95,vertexColors:!0,side:at,emissive:"#3a1a0a",emissiveIntensity:.8}));i.add(u);let p=it(256,64,(m,v,g)=>{m.clearRect(0,0,v,g),m.fillStyle="#6b1020",m.beginPath(),m.moveTo(0,0),m.lineTo(v,0);for(let d=4;d>0;d--){let x=d*v/4,b=x-v/4;m.lineTo(x,g*.5),m.quadraticCurveTo((b+x)/2,g*1.05,b,g*.5)}m.closePath(),m.fill(),m.strokeStyle="#d6a64a",m.lineWidth=4,m.beginPath();for(let d=0;d<4;d++){let x=d*v/4;m.moveTo(x,g*.5),m.quadraticCurveTo(x+v/8,g*1.02,x+v/4,g*.5)}m.stroke();for(let d=0;d<4;d++)m.fillStyle="rgba(235,245,255,.9)",m.beginPath(),m.arc((d+.5)*v/4,g*.35,5,0,se),m.fill()});return p.wrapS=Jt,[[(s.x0+s.x1)/2,s.z1,s.x1-s.x0,0],[(s.x0+s.x1)/2,s.z0,s.x1-s.x0,Math.PI],[s.x1,(s.z0+s.z1)/2,s.z1-s.z0,Math.PI/2],[s.x0,(s.z0+s.z1)/2,s.z1-s.z0,-Math.PI/2]].forEach(([m,v,g,d])=>{let x=p.clone();x.needsUpdate=!0,x.repeat.set(g/3.2,1);let b=new te(new Ke(g,.8),new $e({map:x,transparent:!0,alphaTest:.3,side:at,roughness:.9,emissive:"#2a0a0a"}));b.position.set(m,s.edge-.4,v),b.rotation.y=d,i.add(b)}),u.material}function J1(i,e,t,n,s,r){let a=mu(e,ac("stadium",n,r&&r.circles,t),64,92,10,t.shadows);gu(i,[[0,10,22,ze.tungsten,.07],[15.5,16.4,2.2,"#9fb8ff",.2,"show"]]);let o=new te(new Ke(140,140),z("#140e0a",.95));o.rotation.x=-Math.PI/2,o.position.set(0,-.01,10),e.add(o);let l=[];for(let C=0;C<=10;C++){let P=42+C*1.5,H=1.3+C*.95;l.push([_a(new xe(58,H,1.5),`rgb(${36+C*2},${30+C*2},${44+C*2})`),ts(0,H/2,P+.75)])}[-1,1].forEach(C=>{for(let P=0;P<=8;P++){let H=C*(25+P*1.5),F=1.3+P*.95;l.push([_a(new xe(1.5,F,76),`rgb(${30+P*2},${26+P*2},${40+P*2})`),ts(H+C*.75,F/2,4)])}}),Z1(i,e,l),e.add(new te(Gh(l),i.selfLit(new $e({color:"#ffffff",roughness:.9,vertexColors:!0,emissive:"#3a3252"}),.38,"architectural"))),Y1(i,e,t.density,s);let c="#a898ff";[-1,1].forEach(C=>{for(let P=-28;P<=40;P+=8){let H=new te(new xe(.3,.16,1.2),z("#16131c",.5,.4));H.position.set(C*30.5,15.9,P),e.add(H),i.bigBulbs.add(C*30.5,15.78,P,0,{color:c,k:1.1,s:.55,twinkle:0,layer:"architectural"}),i.pools.add(C*28.6,5.4,P,4.2,3.6,c,.09,{vertical:!0,ry:Math.PI/2,layer:"architectural"})}});for(let C=-24;C<=24;C+=8)i.bigBulbs.add(C,15.78,47.5,0,{color:c,k:1.1,s:.55,twinkle:0,layer:"architectural"}),i.pools.add(C,6,48.5,4.2,3.8,c,.08,{vertical:!0,layer:"architectural"});let h=it(512,64,(C,P,H)=>{C.fillStyle="#0a0608",C.fillRect(0,0,P,H);for(let F=0;F<8;F++){let B=(F+.5)/8*P;if(C.fillStyle="#fff",F%3===0){for(let G=0;G<8;G++){let V=G/8*se;C.beginPath(),C.ellipse(B+Math.cos(V)*13,H/2+Math.sin(V)*13,8,4,V,0,se),C.fill()}C.beginPath(),C.arc(B,H/2,6,0,se),C.fill()}else F%3===1?(C.save(),C.translate(B,H/2),[-.6,.6].forEach(G=>{C.save(),C.rotate(G),C.fillRect(-2.5,-22,5,44),C.restore()}),C.restore()):(C.beginPath(),C.ellipse(B,H*.66,14,6,0,0,Math.PI),C.fill(),C.beginPath(),C.moveTo(B,H*.2),C.quadraticCurveTo(B+7,H*.5,B,H*.62),C.quadraticCurveTo(B-7,H*.5,B,H*.2),C.fill())}C.fillStyle="rgba(255,255,255,.55)";for(let F=4;F<P;F+=8)C.fillRect(F,4,2,2),C.fillRect(F,H-6,2,2)});h.wrapS=Jt;let f=[[0,41.9,56,0],[-24.9,4,76,Math.PI/2],[24.9,4,76,Math.PI/2],[0,Ks.z0+.1,48.6,0]].map(([C,P,H,F])=>{let B=h.clone();B.needsUpdate=!0,B.repeat.set(H/7,1);let G=new te(new xe(H,.9,.08),new vt({color:"#ffffff",map:B}));return G.position.set(C,.65,P),G.rotation.y=F,G.userData.dynamic=!0,e.add(G),G}),u={roof:17,apex:[0,13.4,10],edge:11.2,x0:-24,x1:24,z0:-14,z1:34},p=new te(new xe(80,.3,100),z("#130e19",.9));p.position.set(0,u.roof+.15,10),e.add(p);let m=new te(new xe(80,17,.4),z("#191320",.9));m.position.set(0,8.5,59),e.add(m);let v=new te(new xe(80,17,.4),z("#191320",.9));v.position.set(0,8.5,-40),e.add(v),[-1,1].forEach(C=>{let P=new te(new xe(.4,17,100),z("#161120",.9));P.position.set(C*39,8.5,10),e.add(P)});for(let C=0;C<9;C++)i.pools.add(-32+C*8,14.2,58.7,2.4,2.6,ze.amber,.3,{vertical:!0,layer:"architectural"}),i.bigBulbs.add(-32+C*8,16.4,58.5,0,{color:ze.amber,k:1,s:.6,twinkle:0,layer:"architectural"});[-1,1].forEach(C=>{for(let P=-30;P<=54;P+=8)i.pools.add(C*38.7,14.2,P,2.4,2.6,ze.amber,.26,{vertical:!0,ry:Math.PI/2,layer:"architectural"}),i.bigBulbs.add(C*38.5,16.4,P,0,{color:ze.amber,k:1,s:.6,twinkle:0,layer:"architectural"})}),cc.x.forEach(C=>{for(let P=0;P<=10;P++)i.bulbs.add(C,1.3+P*.95-.12,42+P*1.5-.02,0,{color:ze.amber,k:.7,s:.5,twinkle:0,layer:"architectural"})}),[-1,1].forEach(C=>cc.z.forEach(P=>{for(let H=0;H<=8;H++)i.bulbs.add(C*(25+H*1.5)-C*.02,1.3+H*.95-.12,P,0,{color:ze.amber,k:.7,s:.5,twinkle:0,layer:"architectural"})}));for(let C=-24;C<=24;C+=8)i.bigBulbs.add(C,16.6,50,0,{color:ze.warm,k:1.1,s:.7,twinkle:0,layer:"practical"});[-1,1].forEach(C=>{for(let P=-24;P<=40;P+=8)i.bigBulbs.add(C*31,16.6,P,0,{color:ze.warm,k:1.1,s:.7,twinkle:0,layer:"practical"})});for(let C=-30;C<=57;C+=6){let P=new te(new Ke(78,.9),tc(1));P.material.map.repeat.set(1,1),P.rotation.z=Math.PI/2,P.position.set(0,u.roof-.45,C),P.rotation.set(0,0,0),e.add(P)}let g=$1(e,u);[[-12,2],[12,2],[-12,20],[12,20],[0,26]].forEach(([C,P])=>ep(i,e,C,P,u.edge+1.2));let d=[];for(let C=0;C<6;C++){let P=C/6*se+.3;d.push(su(i,e,Math.cos(P)*8.5,8.2,4+Math.sin(P)*8.5,12.1,n.flags))}let x=[];[-1,1].forEach(C=>{for(let P=0;P<6;P++){let H=C*(9.2+P*.35);for(let F=8.2;F>2.4;F-=.14)x.push([H,F,35.2-P*.05,Math.round(F/.14)%2])}});let b=new Mt(new Ft(.06,6,4),z("#ffffff",.9),x.length),_=new Ge;b.instanceColor=new Wt(new Float32Array(x.length*3),3);let E=new ye("#f29a2e"),T=new ye("#f6c342");x.forEach((C,P)=>{b.setMatrixAt(P,_.makeTranslation(C[0],C[1],C[2]));let H=C[3]?E:T;b.setColorAt(P,H)}),e.add(b),[2,18,32].forEach((C,P)=>oi(i,[-24,11,C],[24,11,C],1.6,"flags",P*3));let w=["#ff9f5a","#ff6fa3","#7fe0a0","#ffd58a"],y=0;[34,22,10,-2].forEach(C=>[-15,-5,5,15].forEach(P=>{jd(i,e,P,9.5+y%2*.8,C,w[y%4],11.6),y++}));let M=[];[-1,1].forEach(C=>{for(let F=-24;F<=36;F+=10){let B=n.flags[((F+40)/10+(C>0?1:0))%n.flags.length],G=er(new te(new Ke(2.2,3.3),z(B,.8,0,{side:at})),-C*Math.PI/2);G.position.set(C*25.05,3.95,F),e.add(G);let V=er(new te(new Ke(.6,.3),i.glow("#1f8f4b",1.6,"practical")),-C*Math.PI/2);V.position.set(C*25.02,1.9,F+5),e.add(V)}let P=Tt(new te(new Ke(10,3.5),i.litMap(pp(Vh[C<0?0:3]),.9,"practical")));P.position.set(C*28,9.15,40),P.userData.dynamic=!0,e.add(P),M.push(P);let H=new te(new xe(10.5,3.9,.2),z("#0d0b10",.6));H.position.set(C*28,9.15,40.15),e.add(H)}),[-1,1].forEach(C=>{let P=new te(new xe(.06,1.1,40),z("#8a8a92",.4,.7));P.position.set(C*24.4,.55,13),e.add(P)});let A=nu(i,{x0:-8.5,x1:8.5,z:35.5,h:1.4,depth:4.4,screenBottom:1.8,screenTop:8.3,truss:9.6,arrays:10.5,band:Yl.big});e.add(A.root);let I=[[-18,0],[-6,0],[6,0],[18,0],[-12,22],[12,22]].map(([C,P],H)=>{let F=new te(new nt(.2,.26,.5,10),z("#1b1920",.5,.4));F.position.set(C,15.6,P),e.add(F);let B=new te(new ln(1,24),new vt({map:Qs(),color:"#ffffff",transparent:!0,opacity:.2,blending:wn,depthWrite:!1,side:at}));return B.rotation.x=-Math.PI/2,B.renderOrder=2,e.add(B),{x:C,z:P,i:H,beam:new ai(e,"#ffffff",16,.2,.2),spot:B,layer:"show"}});return{rig:{hemi:["#5e4436","#24170e",.55,.8],moon:0,spots:[{pos:[4,15.5,-2],to:[0,0,6],color:ze.warm,base:100,distance:40,angle:.6,layer:"key"},{pos:A.wash.pos,to:A.wash.to,color:"#ffe4c4",base:130,distance:28,angle:.55,layer:"show"}],points:[[-10,9.5,2],[10,9.5,2],[-10,9.5,20],[10,9.5,20]].map(C=>({pos:C,color:ze.tungsten,base:58,distance:34,layer:"practical"}))},stage:A,umbrellas:d,feedScreen:A.feedScreen,floor:a,fog:new qi("#140c10",.009),exposure:.92,update(C,P){let{TH:H,pulse:F,reduce:B,lv:G}=P;g.emissiveIntensity=.5*G.practical,_p(M,P.sponsors&&P.sponsors.corners,P.sponsors,pp,(V,X)=>V.material.color.multiplyScalar(X)),f.forEach((V,X)=>{V.material.color.copy(js(H.hues[X%H.hues.length]+20*Math.sin(C*H.speed+X),H.sat,52+8*F)).multiplyScalar(1.15*G.festive),B||(V.material.map.offset.x=C*.08*(X?-1:1)%1)}),I.forEach(V=>{let X=B?0:C*H.speed/.3,O=V.x*.4+Math.sin(X*.35+V.i*1.9)*9,$=V.z+Math.cos(X*.27+V.i)*9,ie=H.beams[V.i%H.beams.length];V.beam.aim([V.x,15.4,V.z],[O,0,$]),V.beam.set(ie,G.show*(.8+.4*F)),V.spot.position.set(O,.03,$),V.spot.scale.setScalar(2.6),V.spot.material.color.set(ie),V.spot.material.opacity=.5*G.show})}}}var pp=i=>ya(i,"corner",e=>Xh(e,1024,358)),mp=i=>ya(i,"board",e=>Xh(e,768,Math.round(768/2.34)));function _p(i,e,t,n,s){!e||!t||i.forEach((r,a)=>{let o=e[a];if(!o||o.k<0)return;let l=n(t.urls[o.k]);r.material.map!==l&&(r.material.map=l),s(r,o.a)})}var gp=["#2f5d4a","#3a4f7a","#6b3a1c","#7a2a2a","#2c6a6a","#5a3a6a"],xp=["#b8312b","#2f8f5b","#d6a24a","#8e44ad","#c2185b","#3b4cc0"];function K1(i){let e=i.z2-i.z1,t=Math.max(2,Math.round(e/2.2)),n=[];for(let s=0;s<i.floors;s++)for(let r=0;r<t;r++){let a=s===0&&r===Math.floor(t/2);n.push({f:s,c:r,door:a,u:e*(r+.5)/t,ww:a?.75:.5,wh:a?2.3:1.5,yb:a?0:.9+s*3.1,lit:!a&&(i.lit*10+s*3+r)%3<1.6,cur:xp[(s*7+r*3+i.hue)%xp.length],open:(s+r+i.hue)%3})}return{W:e,cols:t,wins:n}}function yp(i,e){let{W:t,wins:n}=K1(i),s=30,r=Math.round(t*s),a=Math.round(i.h*s),o=gp[i.hue%gp.length],l=d=>d*s,c=d=>a-d*s,h=(d,x,b,_,E,T)=>{d.fillStyle=T,d.beginPath(),d.moveTo(l(x-_),c(b)),d.lineTo(l(x-_),c(b+E*.7)),d.quadraticCurveTo(l(x),c(b+E*1.12)-6,l(x+_),c(b+E*.7)),d.lineTo(l(x+_),c(b)),d.closePath(),d.fill()},f=(d,x,b,_,E)=>{d.beginPath(),d.moveTo(l(x-_),c(b)),d.lineTo(l(x-_),c(b+E*.7)),d.quadraticCurveTo(l(x),c(b+E*1.12)-6,l(x+_),c(b+E*.7)),d.lineTo(l(x+_),c(b)),d.closePath(),d.clip()},u=(d,x,b)=>{let _=x.u,E=d.createRadialGradient(l(_),c(x.yb+x.wh*.35),2,l(_),c(x.yb+x.wh*.5),x.wh*s*.8);E.addColorStop(0,b?"#fff0c8":"#ffe2a8"),E.addColorStop(.55,b?"#ffc070":"#f7b566"),E.addColorStop(1,b?"#d87a30":"#c9772f"),d.save(),f(d,_,x.yb,x.ww,x.wh),d.fillStyle=E,d.fillRect(l(_-x.ww),c(x.yb+x.wh*1.2),l(x.ww*2),x.wh*1.2*s);let T=[.42,.3,.55][x.open],w=new ye(x.cur),y=b?.55:1;d.fillStyle=`rgba(${Math.round(w.r*255*y)},${Math.round(w.g*255*y)},${Math.round(w.b*255*y)},${b?.9:.92})`,[-1,1].forEach(M=>{d.beginPath();let A=_+M*x.ww,I=_+M*x.ww*(1-T*2);d.moveTo(l(A),c(x.yb+x.wh*1.2)),d.lineTo(l(I),c(x.yb+x.wh*1.2)),d.quadraticCurveTo(l(I+M*x.ww*.12),c(x.yb+x.wh*.45),l(I+M*x.ww*.3),c(x.yb)),d.lineTo(l(A),c(x.yb)),d.closePath(),d.fill()}),d.fillRect(l(_-x.ww),c(x.yb+x.wh*.95),l(x.ww*2),x.wh*.14*s),d.restore()},p=(d,x,b)=>{let _=x.u;if(d.fillStyle=b,x.f===0){for(let E=1;E<4;E++)d.fillRect(l(_-x.ww+E*x.ww/2)-1,c(x.yb+x.wh*1.08),2,x.wh*1.08*s);d.fillRect(l(_-x.ww),c(x.yb+x.wh*.5),l(x.ww*2),2)}else d.fillRect(l(_)-1,c(x.yb+x.wh*1.1),3,x.wh*1.1*s),d.fillRect(l(_-x.ww),c(x.yb+x.wh*.62),l(x.ww*2),3)},m=d=>x=>{if(d){x.fillStyle="#000",x.fillRect(0,0,r,a),n.forEach(_=>{if(!_.lit)return;let E=x.createRadialGradient(l(_.u),c(_.yb+_.wh*.5),4,l(_.u),c(_.yb+_.wh*.5),_.wh*s*1.05);E.addColorStop(0,"rgba(255,170,90,.2)"),E.addColorStop(1,"rgba(255,170,90,0)"),x.fillStyle=E,x.fillRect(0,0,r,a),u(x,_,!0),p(x,_,"rgba(0,0,0,.85)")});return}x.fillStyle=i.col,x.fillRect(0,0,r,a);let b=x.createLinearGradient(0,0,0,a);b.addColorStop(0,"rgba(255,235,200,.06)"),b.addColorStop(.7,"rgba(0,0,0,0)"),b.addColorStop(1,"rgba(0,0,0,.28)"),x.fillStyle=b,x.fillRect(0,0,r,a);for(let _=0;_<18;_++)x.fillStyle=`rgba(0,0,0,${.03+e()*.05})`,x.fillRect(e()*r,e()*a*.3,2+e()*4,a*(.2+e()*.6));x.fillStyle="rgba(0,0,0,.16)";for(let _=0;_<500;_++)x.fillRect(e()*r,e()*a,2,2);x.fillStyle="rgba(40,30,28,.55)",x.fillRect(0,c(.5),r,.5*s),x.fillStyle="rgba(255,236,200,.1)",x.fillRect(0,0,.35*s,a),x.fillRect(r-.35*s,0,.35*s,a);for(let _=1;_<i.floors;_++){let E=c(_*3.1+.55);x.fillStyle="rgba(214,176,111,.55)",x.fillRect(0,E-5,r,5),x.fillStyle="rgba(0,0,0,.3)",x.fillRect(0,E,r,4)}x.fillStyle="rgba(214,176,111,.35)",x.fillRect(0,0,r,.62*s),x.fillStyle="rgba(0,0,0,.45)";for(let _=6;_<r-6;_+=14)x.beginPath(),x.moveTo(_,.52*s),x.lineTo(_,.26*s),x.quadraticCurveTo(_+4,.1*s,_+8,.26*s),x.lineTo(_+8,.52*s),x.closePath(),x.fill();if(n.forEach(_=>{let E=_.u;if(_.door){h(x,E,0,_.ww+.16,_.wh+.08,"#c9963f"),h(x,E,0,_.ww+.1,_.wh+.04,o),h(x,E,0,_.ww,_.wh,"#4a2412"),x.fillStyle="rgba(0,0,0,.45)",x.fillRect(l(E)-1,c(_.wh*.95),2,_.wh*.95*s),[-1,1].forEach(M=>{[.3,1,1.6].forEach(A=>{x.strokeStyle="rgba(214,166,74,.55)",x.lineWidth=2,x.strokeRect(l(E+M*_.ww*.5)-_.ww*.3*s,c(A+.5),_.ww*.6*s,.5*s)}),x.fillStyle="#e8b04b";for(let A=0;A<5;A++)x.fillRect(l(E+M*_.ww*.5)-1.5,c(.25+A*.4),3,3)});let T=c(_.wh*1.12+.12),w=l(E-_.ww-.3),y=l(E+_.ww+.3);x.strokeStyle="#6b4a22",x.lineWidth=1.5,x.beginPath(),x.moveTo(w,T),x.lineTo(y,T),x.stroke();for(let M=0,A=Math.round((y-w)/7);M<=A;M++){let I=w+(y-w)*M/A;M%2?(x.fillStyle="#2f7a3a",x.beginPath(),x.moveTo(I-3,T),x.lineTo(I+3,T),x.lineTo(I,T+11),x.closePath(),x.fill()):(x.fillStyle=M%4?"#f6c342":"#f08a24",x.beginPath(),x.arc(I,T+3,3.2,0,se),x.fill())}x.fillStyle="#c0392b",x.textAlign="center",x.textBaseline="middle",x.font=`700 ${Math.round(.34*s)}px "Noto Sans Gujarati", "Gujarati Sangam MN", Shruti, "Anek Gujarati", system-ui, sans-serif`,x.fillText("\u0AB6\u0AC1\u0AAD",l(E-_.ww-.55),c(1.55)),x.fillText("\u0AB2\u0ABE\u0AAD",l(E+_.ww+.55),c(1.55));return}if(h(x,E,_.yb-.02,_.ww+.09,_.wh+.07,o),x.fillStyle="rgba(230,200,150,.65)",x.fillRect(l(E-_.ww-.18),c(_.yb),l(_.ww*2+.36),.1*s),_.lit)u(x,_,!1);else{let T=x.createLinearGradient(0,c(_.yb+_.wh*1.1),0,c(_.yb));T.addColorStop(0,"#2a2640"),T.addColorStop(1,"#0e0b18"),h(x,E,_.yb,_.ww,_.wh,T),x.fillStyle="rgba(160,170,220,.12)",x.beginPath(),x.moveTo(l(E-_.ww*.6),c(_.yb+_.wh*.2)),x.lineTo(l(E-_.ww*.2),c(_.yb+_.wh*.9)),x.lineTo(l(E),c(_.yb+_.wh*.9)),x.lineTo(l(E-_.ww*.4),c(_.yb+_.wh*.2)),x.closePath(),x.fill()}if(p(x,_,"rgba(20,12,8,.85)"),_.f>0){x.fillStyle=o,x.fillRect(l(E-_.ww-.36),c(_.yb+_.wh*.72),.3*s,_.wh*.72*s),x.fillRect(l(E+_.ww+.06),c(_.yb+_.wh*.72),.3*s,_.wh*.72*s),x.fillStyle="rgba(0,0,0,.3)";for(let T=1;T<6;T++)x.fillRect(l(E-_.ww-.36),c(_.yb+_.wh*.72*T/6),.3*s,1.5),x.fillRect(l(E+_.ww+.06),c(_.yb+_.wh*.72*T/6),.3*s,1.5)}}),i.balcony&&(x.fillStyle="rgba(120,80,50,.7)",x.fillRect(.6*s,c(.9+3.1+.7),r-1.2*s,.9*s)),i.hue===3&&t>5.5){x.fillStyle="#b8312b";let _=t/2+1.4;x.fillRect(l(_-1.3),c(3.15),2.6*s,.6*s),x.fillStyle="#ffe9b8",x.font=`700 ${Math.round(.42*s)}px "Noto Sans Gujarati", "Gujarati Sangam MN", Shruti, "Anek Gujarati", system-ui, sans-serif`,x.textAlign="center",x.textBaseline="alphabetic",x.fillText("\u0A95\u0AB0\u0ABF\u0AAF\u0ABE\u0AA3\u0ABE",l(_),c(2.7))}},v=it(r,a,m(!1)),g=it(r,a,m(!0));return{map:v,em:g}}function Q1(i,e,t,n,s,r){let a=mu(e,ac("sheri",n,r&&r.circles,t),14.4,124,16,t.shadows);gu(i,[[4.4,60.6,2.2,"#9fb8ff",.2,"show"]]),[-1,1].forEach(M=>{let A=new te(new xe(.35,.45,124),z("#3a3040",.9));A.position.set(M*7.3,.225,16),e.add(A)});let o=[],l=["#3a4468","#5e4526","#5c3040","#28524f","#5b5241","#4a3a5e"],c=[];[-1,1].forEach(M=>{for(let A=-48;A<70;){let I=5+s()*3.5,N=6.8+s()*4.5;o.push({side:M,z1:A,z2:A+I,h:N,col:l[Math.floor(s()*l.length)],floors:N>9.5?3:2,lit:s(),balcony:s()<.5,bulbs:s()<.6,hue:Math.floor(s()*6)}),A+=I+.15}});let h=o.find(M=>M.side>0&&M.z1<=1.5&&M.z2>=1.5);h&&(h.col="#7a4f9e"),o.forEach(M=>{let A=M.z2-M.z1,I=M.side*8,N=(M.z1+M.z2)/2,C=new te(new xe(6,M.h,A),z(M.col,.95));C.position.set(I+M.side*3,M.h/2,N),e.add(C);let P=yp(M,s),H=new $e({map:P.map,emissiveMap:P.em,emissive:"#ffffff",emissiveIntensity:1.2,roughness:.9});c.push(H);let F=er(new te(new Ke(A,M.h),H),-M.side*Math.PI/2);F.position.set(I-M.side*.01,M.h/2,N),e.add(F);let B=new te(new xe(.4,.3,A),z("#d6b06f",.8));if(B.position.set(I-M.side*.1,M.h-.15,N),e.add(B),M.balcony){let G=new te(new xe(.7,.08,A-1.2),z("#5a3a22",.8));G.position.set(I-M.side*.35,3.8,N),e.add(G);let V=new te(new xe(.04,.8,A-1.2),z("#78503a",.7,.2));V.position.set(I-M.side*.7,4.2,N),e.add(V)}M.bulbs&&i.curtains.add(I-M.side*.12,M.z1+.35,I-M.side*.12,M.z2-.35,2.95,M.h-.45,-M.side,0,M.hue);for(let G=M.z1+.25;G<M.z2;G+=.45)i.bulbs.add(I-M.side*.12,M.h-.1,G,M.hue+Math.round(G*2),{ph:G,s:.8});if(M.hue%2===0){let G=new te(new nt(.6,.6,1.2,12),z("#1f1d24",.8));G.position.set(I+M.side*1.4,M.h+.6,N),e.add(G)}nv(i,e,M,s)}),c.push(ev(i,e,s));let f=new te(new xe(2.4,3.2,1),z("#7a1a14",.7));f.position.set(0,1.6,71.6),e.add(f);let u=new te(new jt(1.1,.08,6,20,Math.PI),z("#e8b04b",.35,.7));u.position.set(0,2.2,71.05),e.add(u);for(let M=0;M<5;M++)i.flames.add((M-2)*.45,.02,70.9,{s:.05,k:.8});i.pools.add(0,1.6,71.05,1.8,1.8,ze.flame,.35,{vertical:!0,layer:"flame"});let p=new te(new xe(6.9,3.1,.1),z("#14100c",.7));p.position.set(0,7.4,71.85),e.add(p);let m=Tt(new te(new Ke(6.6,2.9),ec(1.2)));m.position.set(0,7.4,71.7),m.visible=!1,m.userData.dynamic=!0,e.add(m);let v=new te(new rn([[3.2,0],[3,3],[2.2,6],[1.2,8.5],[.2,10]].map(([M,A])=>new le(M,A)),12),z("#231a2c",.9));v.position.set(0,12,80),e.add(v);for(let M=0;M<=20;M++){let A=M/20,I=A*Math.PI,N=-3.2*Math.cos(I),C=12+Math.sin(I)*10*Math.pow(Math.sin(I),.4);i.bulbs.add(N*(1-.7*Math.sin(I)*.9),C,77.2,M,{ph:M})}i.pools.add(0,15,76.8,4.2,6,ze.amber,.16,{vertical:!0,layer:"architectural"}),i.pools.add(0,3.5,71.95,7,3.5,ze.amber,.08,{vertical:!0,layer:"architectural"});let g=new te(new Ke(1.2,.6),z("#d8453a",.8,0,{side:at}));g.position.set(.6,23.2,80),g.userData.dynamic=!0,e.add(g);for(let M=62;M>=-20;M-=14)[-1,1].forEach((A,I)=>{let N=M+I*7,C=new te(new xe(1.4,.06,.06),z("#1b1510",.8));C.position.set(A*7.3,5.2,N),e.add(C);let P=new te(new nt(.08,.2,.14,10),z("#1b1510",.6,.4));P.position.set(A*6.6,5.16,N),e.add(P),i.bigBulbs.add(A*6.6,5.05,N,0,{color:ze.sodium,k:.62,s:.6,layer:"practical",twinkle:.03}),i.pools.add(A*5.8,.02,N,4.4,4.4,ze.sodium,.15),i.pools.add(A*7.9,3.4,N,2.4,2.4,ze.sodium,.09,{vertical:!0,ry:A*Math.PI/2})});let d=[];[[-1,3.5,8.5,2],[1,5,10,3],[-1,34,38.5,4],[1,36,40.5,0]].forEach(([M,A,I,N])=>{let C=I-A,P=C/2.34,H=er(new te(new Ke(C,P),i.selfLit(new $e({map:mp(Vh[N]),roughness:.8}),.35)),-M*Math.PI/2);H.position.set(M*7.94,3.1,(A+I)/2),H.userData.dynamic=!0,e.add(H),d.push(H),i.bigBulbs.add(M*7.6,3.1+P/2+.15,(A+I)/2,0,{color:ze.warm,k:.8,s:.4,twinkle:0,layer:"practical"}),i.pools.add(M*7.9,3.1,(A+I)/2,C*.55,P*.7,ze.warm,.1,{vertical:!0,ry:M*Math.PI/2,layer:"practical"})}),[-1,1].forEach(M=>{let A=new te(new xe(1.1,.45,124),z("#4a3a34",.9));A.position.set(M*7.4,.225,16),e.add(A)});let x=new te(new xe(6.8,.6,2.1),z("#6b3f1f",.8));x.position.set(0,.3,64.95),e.add(x);let b=new te(new Ke(6.6,2),new $e({map:it(256,64,(M,A,I)=>{for(let N=0;N<7;N++)M.fillStyle=N%2?"#c2721e":"#7e1827",M.fillRect(0,N/7*I,A,I/7+1)}),roughness:1}));b.rotation.x=-Math.PI/2,b.position.set(0,.605,64.95),e.add(b),[-4.6,4.6].forEach(M=>ru(e,M,64,1.8));let _=jl(i,e,Yl.sheri,{x0:-3.2,x1:3.2,front:63.9,floor:.6,small:!0}),E=j1(i,e,n);[12,21,34].forEach((M,A)=>{let I=[],N=[],C=new ye,P=[n.flags[A%n.flags.length],"#f6c342","#2f8f5b","#b8312b"];for(let F=0;F<10;F++){let B=Nn([-8,7.6,M],[8,7.6,M],.9,F/10),G=Nn([-8,7.6,M],[8,7.6,M],.9,(F+1)/10),V=[[B[0],B[1],B[2]],[G[0],G[1],G[2]],[G[0],G[1]-.2,G[2]+1.6],[B[0],B[1]-.2,B[2]+1.6]];C.set(P[F%P.length]),[V[0],V[1],V[2],V[0],V[2],V[3]].forEach(X=>{I.push(X[0],X[1],X[2]),N.push(C.r,C.g,C.b)}),i.flags.add((B[0]+G[0])/2,B[1]-.05,B[2],Math.PI/2+Math.PI/2,.22,F+1)}let H=new lt;H.setAttribute("position",new Qe(I,3)),H.setAttribute("color",new Qe(N,3)),H.computeVertexNormals(),e.add(new te(H,z("#ffffff",.9,0,{vertexColors:!0,side:at,emissive:"#1a0c06"})))}),[[-8,9,6,8,8.5,20],[-8,8.2,26,8,9,14],[-8,9.2,40,8,8,48],[-8,8.6,2,8,8.8,-4],[-7.8,9.4,-6,-7.8,9.4,60],[7.8,9,-6,7.8,9,60]].forEach(M=>i.wires.cable([M[0],M[1],M[2]],[M[3],M[4],M[5]],.6));let T=["#ff9f5a","#ff6fa3","#7fe0a0","#ffd58a","#8fc7ff"];[60,50,41,32,24,16,8,0,-8].forEach((M,A)=>{A%3===0?(oi(i,[-8,6.8,M],[8,6.8,M+2],1.1,"bulbs",A,{gap:.55}),oi(i,[-8,6.8,M+2],[8,6.8,M],1.1,"bulbs",A+3,{gap:.55,pools:!1})):oi(i,[-8,6.4,M],[8,6.4,M],1.3,A%3===1?"flags":"bulbs",A,{gap:.55}),Ma(i,e,A%2?-2.6:2.6,5.15+A%3*.25,M+.8,T[A%T.length],A%3===0?6.3:6.1)});let w=[0,10.4,58.5];return[50,54,58,62,66,70].forEach((M,A)=>[-1,1].forEach(I=>oi(i,w,[I*7.9,7.3+A%2*.4,M],.5,"bulbs",A*2+(I>0?1:0),{gap:.42,pools:!1,s:.85}))),[-5.5,-1.8,1.8,5.5].forEach((M,A)=>oi(i,w,[M,11.8,71.9],.4,"bulbs",20+A,{gap:.42,pools:!1,s:.85})),Ma(i,e,w[0],w[1]-.9,w[2],"#ff6fa3",w[1]),Ma(i,e,-2.2,6.9,61.8,"#ffd58a",8.2),Ma(i,e,2.2,7.1,62.2,"#7fe0a0",8.3),i.pools.add(0,.02,60.5,6.5,5.5,"#ffd58a",.09,{layer:"festive",theme:!0}),{rig:{hemi:["#3f3a6c","#1f1612",.5,.72],moon:1,spots:[{pos:[-6.5,9,-3],to:[0,0,1],color:"#ffd9ae",base:70,distance:30,angle:.7,layer:"key"},{pos:[0,3,58.6],to:[0,1.7,65.2],color:"#ffe4c4",base:52,distance:14,angle:.5,layer:"show"}],points:[[-5.8,5,-6],[5.8,5,8],[-5.8,5,22],[5.8,5,50]].map(M=>({pos:M,color:ze.sodium,base:32,distance:22,layer:"practical"}))},bandHoles:_,mandapHoles:E,feedScreen:m,floor:a,fog:new qi("#140d18",.011),exposure:.95,update(M,A){c.forEach(I=>I.emissiveIntensity=1.05*A.lv.practical),_p(d,A.sponsors&&A.sponsors.boards,A.sponsors,mp,(I,N)=>{I.material.color.setScalar(N),I.material.emissiveIntensity*=N}),g.rotation.y=A.reduce?0:Math.sin(M*3)*.3}}}function j1(i,e,t){let o=it(64,256,(w,y,M)=>{w.fillStyle="#a81e1e",w.fillRect(0,0,y,M),[.05,.12,.45,.52,.88,.95].forEach(A=>{w.fillStyle="#d6a64a",w.fillRect(0,A*M,y,M*.025)}),w.fillStyle="rgba(255,230,170,.45)";for(let A=.2;A<.42;A+=.04)for(let I=4;I<y;I+=12)w.fillRect(I,A*M,4,3)}),l=new rn([[.12,0],[.13,.08],[.085,.16],[.075,1.1],[.11,1.2],[.075,1.3],[.07,2.55],[.11,2.66],[.14,2.78],[.1,2.85]].map(([w,y])=>new le(w,y)),14),c=new $e({map:o,roughness:.45,metalness:.2});[[-3.35,63.9],[3.35,63.9],[-3.35,66],[3.35,66]].forEach(([w,y],M)=>{let A=new te(l,c);if(A.position.set(w,.6,y),e.add(A),M<2)for(let I=0;I<26;I++){let N=I*.9,C=new te(new yn(.04,0),z(I%3?"#f08a24":"#f6c342",.85));C.position.set(w+Math.cos(N)*.1,.6+2.7-I*.1,y+Math.sin(N)*.1),e.add(C)}});let h=it(256,64,(w,y,M)=>{let A=["#c8641a","#6e1422","#c9b48e","#6e1422"];for(let I=0;I<16;I++)w.fillStyle=A[I%4],w.fillRect(I/16*y,0,y/16+1,M)}),f=new te(new Ke(7.3,Math.hypot(66-63.9+.5,.4)),new $e({map:h,roughness:.9,side:at}));f.rotation.x=-Math.PI/2-Math.atan2(.4,66-63.9+.5),f.position.set(0,3.45+.2,(63.9+66)/2),e.add(f);let u=(w,y)=>it(512,96,(M,A,I)=>{M.clearRect(0,0,A,I);let N=A/w;for(let C=0;C<w;C++)M.fillStyle=C%2?y:"#f3e6d0",M.fillRect(C*N,0,N+1,I*.6),M.beginPath(),M.moveTo(C*N,I*.6),M.quadraticCurveTo((C+.5)*N,I*1.02,(C+1)*N,I*.6),M.closePath(),M.fill(),M.fillStyle="#d6a64a",M.beginPath(),M.arc((C+.5)*N,I*.88,5,0,se),M.fill();M.fillStyle="#d6a64a",M.fillRect(0,I*.58,A,4)}),p=new $e({map:u(12,"#7e1827"),roughness:.9,alphaTest:.35,side:at}),m=new $e({map:u(5,"#7e1827"),roughness:.9,alphaTest:.35,side:at}),v=Tt(new te(new Ke(7.3,.5),p));v.position.set(0,3.45-.02,63.9-.26),e.add(v),[-1,1].forEach(w=>{let y=er(new te(new Ke(2.6000000000000014,.5),m),-w*Math.PI/2);y.position.set(w*3.65,3.45+.1,(63.9+66)/2),e.add(y)});for(let w=0;w<=18;w++)i.bulbs.add(ct(-3.6,3.6,w/18),3.45-.3,63.9-.28,w,{ph:w*1.1,s:.8});for(let w=0;w<=28;w++)i.flags.add(ct(-3.4,3.4,w/28),3.45-.34,63.9-.2,Math.PI,.1,w);let g=it(512,96,()=>{}),d=()=>{let w=g.image.getContext("2d"),y=512,M=96;w.fillStyle="#6b1020",w.fillRect(0,0,y,M),w.strokeStyle="#d6a64a",w.lineWidth=6,w.strokeRect(5,5,y-10,M-10),w.fillStyle="#ffe6a8",w.textAlign="center",w.textBaseline="middle",w.font='700 50px "Noto Sans Gujarati", "Gujarati Sangam MN", Shruti, system-ui, sans-serif',w.fillText("\u0AA8\u0AB5\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0AC0 \u0AAE\u0AB9\u0ACB\u0AA4\u0ACD\u0AB8\u0AB5",y/2,M*.54),g.needsUpdate=!0};d(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(d);let x=Tt(new te(new Ke(3.6,.64),i.litMap(g,1,"practical")));x.position.set(0,3.45+.5,63.9-.28),e.add(x);let b=[Xn(-1.8,3.45+.18,63.9-.3,1.8,3.45+.82,63.9-.26),Xn(-3.65,3.45-.27,63.9-.3,3.65,3.45+.4,66+.3)];[-1.4,1.4].forEach(w=>{let y=new te(new nt(.02,.02,.4,5),z("#2a1a10",.7));y.position.set(w,3.45+.22,63.9-.26),e.add(y)});let _=it(512,208,()=>{}),E=()=>{let w=_.image.getContext("2d"),y=512,M=208,A=w.createLinearGradient(0,0,0,M);A.addColorStop(0,"#5a0c16"),A.addColorStop(1,"#8e1b2c"),w.fillStyle=A,w.fillRect(0,0,y,M),w.strokeStyle="#d6a64a",w.lineWidth=5,w.strokeRect(8,8,y-16,M-16),w.save(),w.translate(y/2,M*.46);for(let I=0;I<16;I++)w.save(),w.rotate(I/16*se),w.fillStyle=I%2?"rgba(214,166,74,.8)":"rgba(240,138,36,.7)",w.beginPath(),w.ellipse(34,0,26,8,0,0,se),w.fill(),w.restore();w.fillStyle="#d6a64a",w.beginPath(),w.arc(0,0,14,0,se),w.fill(),w.restore(),w.fillStyle="#ffe6a8",w.textAlign="center",w.font='700 30px "Noto Sans Gujarati", "Gujarati Sangam MN", Shruti, system-ui, sans-serif',w.fillText("\u0A9C\u0AAF \u0A85\u0A82\u0AAC\u0AC7",y/2,M*.9),_.needsUpdate=!0};E(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(E);let T=Tt(new te(new Ke(6.5,2.65),i.selfLit(new $e({map:_,roughness:.95}),.05)));return T.position.set(0,.6+1.4,66-.06),e.add(T),[-1,1].forEach(w=>{let y=new te(new nt(.07,.1,.18,10),z("#1a1714",.5,.4));y.position.set(w*3.2,3.45-.35,63.9+.05),y.rotation.z=w*.7,e.add(y),i.bigBulbs.add(w*3.12,3.45-.42,63.9+.08,0,{color:ze.warm,k:.55,s:.32,twinkle:0,layer:"show"}),i.pools.add(w*1.6,.6+1.3,66-.1,2.2,1.4,ze.warm,.06,{vertical:!0,layer:"show"})}),i.pools.add(0,.02,63.9-1.2,3.6,1.6,ze.warm,.06,{layer:"show"}),b}function ev(i,e,t){let n={side:0,z1:-8.2,z2:8.2,h:12,col:"#6a3446",floors:3,lit:.37,balcony:!1,hue:4},s=71.99,r=new te(new xe(16.4,12,3),z("#3a2433",.95));r.position.set(0,6,73.5),e.add(r);let a=yp(n,t),o=new $e({map:a.map,emissiveMap:a.em,emissive:"#ffffff",emissiveIntensity:1.05,roughness:.9}),l=Tt(new te(new Ke(16.4,12),o));l.position.set(0,6,s),e.add(l);let c=new te(new xe(16.8,.3,.5),z("#d6b06f",.8));c.position.set(0,11.85,s-.15),e.add(c);let h=z("#c9963f",.4,.6),f=z("#5a2e16",.8);[-4.69,4.69].forEach(d=>{let x=new te(new xe(1.9,.22,.9),f);x.position.set(d,3.85,s-.45),e.add(x);let b=new te(new xe(1.9,.55,.05),h);b.position.set(d,4.25,s-.88),e.add(b),[-.85,.85].forEach(T=>{let w=new te(new nt(.045,.05,2,8),h);w.position.set(d+T,4.95,s-.82),e.add(w)});let _=new te(new Ft(1,16,6,0,se,0,Math.PI/2),z("#b8863a",.45,.5));_.scale.set(1.05,.6,.55),_.position.set(d,6.02,s-.45),e.add(_);let E=new te(new xe(2.2,.08,1),f);E.position.set(d,5.98,s-.45),e.add(E);for(let T=0;T<=10;T++)i.bulbs.add(d-1.05+T*.21,5.9,s-.97,T,{ph:T,s:.8});i.pools.add(d,4.9,s-.02,1.1,1.2,ze.tungsten,.3,{vertical:!0,layer:"practical"})});let u=[];for(let d=0;d<8;d++){let x=[ct(-8,8,d/8),3.72,s-.08],b=[ct(-8,8,(d+1)/8),3.72,s-.08];for(let _=1;_<16;_++)u.push(Nn(x,b,.4,_/16))}let p=new Mt(new Ft(.055,6,4),new $e({color:"#ffffff",roughness:.9,emissive:"#3a1800"}),u.length),m=new Ge,v=new ye("#f29a2e"),g=new ye("#f6c342");p.instanceColor=new Wt(new Float32Array(u.length*3),3),u.forEach((d,x)=>{p.setMatrixAt(x,m.makeTranslation(d[0],d[1],d[2]));let b=x%3?v:g;p.instanceColor.setXYZ(x,b.r,b.g,b.b)}),e.add(p),i.curtains.add(-8,s-.06,-3.75,s-.06,2.7,11.5,0,-1,0),i.curtains.add(3.75,s-.06,8,s-.06,2.7,11.5,0,-1,1),i.curtains.add(-3.55,s-.06,3.55,s-.06,9.2,11.5,0,-1,2);for(let d=-8.1;d<=8.1;d+=.36)i.bulbs.add(d,12.08,s-.32,Math.round(d*3),{ph:d,s:.85});return[-7.2,-2.2,2.2,7.2].forEach(d=>vp(i,e,d,s-.45,0,12,0,1)),o}function vp(i,e,t,n,s,r,a,o){let l=new te(new xe(.22,.12,.16),z("#15110d",.6,.4));l.position.set(t,.06,n),l.rotation.y=s,e.add(l),i.bigBulbs.add(t,.14,n,0,{color:ze.amber,k:.9,s:.45,twinkle:0,layer:"architectural"}),i.pools.add(t+a*.24,r*.42,n+o*.24,1.1,r*.75,ze.amber,.24,{vertical:!0,ry:s,layer:"architectural"}),i.pools.add(t,.02,n,1.3,1.3,ze.amber,.1,{layer:"architectural"})}var lc=[];function tv(i){if(lc[i])return lc[i];let e=[["#c2185b","#f6c342","#2a9d8f","#fff3d6"],["#f08a24","#3b4cc0","#e9c46a","#fff3d6"],["#2f8f5b","#d8453a","#f6c342","#fff3d6"]][i],t=it(128,128,(n,s)=>{n.clearRect(0,0,s,s),n.translate(s/2,s/2);for(let r=0;r<8;r++)n.save(),n.rotate(r/8*se),n.fillStyle=e[r%2],n.beginPath(),n.ellipse(s*.26,0,s*.15,s*.07,0,0,se),n.fill(),n.restore();n.fillStyle=e[2],n.beginPath(),n.arc(0,0,s*.14,0,se),n.fill(),n.fillStyle=e[3];for(let r=0;r<16;r++){let a=r/16*se;n.beginPath(),n.arc(Math.cos(a)*s*.44,Math.sin(a)*s*.44,3,0,se),n.fill()}});return lc[i]=new $e({map:t,transparent:!0,alphaTest:.2,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2}),lc[i]}function nv(i,e,t,n){let s=t.z2-t.z1,r=t.side*8,a=Math.max(2,Math.round(s/2.2)),o=t.z1+s*(Math.floor(a/2)+.5)/a;if(!(t.z2<-24||t.z1>68)){if(t.lit>.3){let l=new te(new xe(.3,.05,.05),z("#1b1510",.7));l.position.set(r-t.side*.15,2.72,o+.62),e.add(l),i.bigBulbs.add(r-t.side*.28,2.64,o+.62,0,{color:ze.tungsten,k:1.2,s:.5,twinkle:.02,layer:"practical"}),i.pools.add(r-t.side*.03,2.5,o+.62,.9,1.2,ze.tungsten,.22,{vertical:!0,ry:t.side*Math.PI/2,layer:"practical"}),i.pools.add(t.side*6.4,.02,o+.4,1.8,1.8,ze.tungsten,.12,{layer:"practical"})}if(n()<.55){for(let c=0;c<5;c++)i.flames.add(t.side*6.98,.45,o+(c-2)*.24,{s:.038,k:.55});i.pools.add(t.side*6.5,.02,o,1.4,1.6,ze.flame,.16,{layer:"flame"}),i.pools.add(t.side*6.84,.24,o,1.3,.3,ze.flame,.2,{vertical:!0,ry:t.side*Math.PI/2,layer:"flame"});let l=new te(new ln(.42,24),tv(Math.floor(n()*3)));l.rotation.x=-Math.PI/2,l.position.set(t.side*6.2,.01,o),e.add(l)}for(let l=0;l<a;l++)l===Math.floor(a/2)||(t.lit*10+l)%3>=1.6||i.pools.add(t.side*6.45,.02,t.z1+s*(l+.5)/a,1.1,1.3,ze.tungsten,.08,{layer:"practical"})}}function iv(i){let e=new gt,t=tc(Math.round(i/1.1)),n=.6;for(let s=0;s<3;s++){let r=new te(new Ke(n,i),t),a=s/3*se;r.position.set(Math.sin(a)*n*.29,0,Math.cos(a)*n*.29),r.rotation.y=a,e.add(r)}return e}function Mp(i,e,t,n){let s=Bi[t]||Bi.traditional,r=An(i==="outdoors"?101:i==="stadium"?202:303),a=new gt,o=Fd(),l=i==="stadium"?null:Vd(i);l&&a.add(l.root);let c=i==="outdoors"?q1(o,a,e,s,r,n):i==="stadium"?J1(o,a,e,s,r,n):Q1(o,a,e,s,r,n),h=n?hp(o,a,i,n):null;n&&n.stage&&(n.stage.hole3d={front:c.stage?c.stage.stageFront:[],band:c.stage?c.stage.bandHoles:c.bandHoles,mandap:c.mandapHoles||[]});let f=Qd(o,{small:i==="sheri",flags:s.flags});a.add(f.root),o.pools.add(0,.02,0,i==="sheri"?3.6:4.4,i==="sheri"?3.6:4.4,"#ffae5c",.2,{layer:"garbo",live:!0}),o.flames.lightPools(o);let u=Ud(c.floor,c.floor.userData.rect,o.pools.list,s,e.name==="phone"?512:1024,c.floor.userData.decal);return o.pools.bakedGround=!0,Od(o,a),nc(a,new Set(o.lit.map(p=>p.mat))),Object.assign({id:i,root:a,kit:o,sky:l,TH:s,lightMaps:u,garbo:f,furnish:h,garboLight:{pos:[0,i==="sheri"?1.3:1.45,0],distance:i==="sheri"?12:15,color:"#ffae5c"}},c)}var bp={phone:{name:"phone",pixels:9e5,shadows:!1,shadowSize:0,bloomScale:.35,spots:0,points:2,samples:0},tablet:{name:"tablet",pixels:16e5,shadows:!1,shadowSize:0,bloomScale:.45,spots:2,points:4,samples:2},desktop:{name:"desktop",pixels:18e5,shadows:!0,shadowSize:2048,bloomScale:.5,spots:2,points:5,samples:2}};function Ep(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}function Sp(i,e={}){let t=bp[e.tier]||bp.desktop,n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),n.className="venue-backdrop",n.style.cssText="position:fixed;left:0;top:0;width:100%;height:100%;display:block;pointer-events:none;",i.parentNode.insertBefore(n,i);let s=new Bl({canvas:n,antialias:!1,powerPreference:"high-performance",alpha:!1,stencil:!1});s.toneMapping=Ki,s.outputColorSpace=zt,s.shadowMap.enabled=t.shadows,s.shadowMap.type=Vo,s.shadowMap.autoUpdate=!1,s.setClearColor("#07060d");let r=new Sr,a=new gt;a.scale.z=-1,r.add(a);let o=new Qt(50,1,.3,1400),l=new Vt(1,1,{type:Kt,samples:t.samples}),c=new kl(s,l);c.addPass(new Vl(r,o));let h=new Js(new le(256,256),.62,.5,.9);c.addPass(h),c.addPass(new Wl);let f={spots:[],points:[]};f.hemi=new Xr("#4a4470","#3a2415",.6),a.add(f.hemi),f.moon=new $r("#9fb0e0",0),a.add(f.moon),a.add(f.moon.target);for(let Z=0;Z<t.spots;Z++){let q=new Yr("#ffe6c4",0,60,.7,.7,1.1);Z===0&&t.shadows&&(q.castShadow=!0,q.shadow.mapSize.set(t.shadowSize,t.shadowSize),q.shadow.bias=-6e-4,q.shadow.normalBias=.02,q.shadow.camera.near=3,q.shadow.camera.far=80),a.add(q),a.add(q.target),f.spots.push({light:q,base:0})}for(let Z=0;Z<t.points;Z++){let q=new Zr("#ffc890",0,20,1.4);a.add(q),f.points.push({light:q,base:0})}function u(Z){let q=Z.rig;f.hemi.color.set(q.hemi[0]),f.hemi.groundColor.set(q.hemi[1]),f.hemi.userData.base=t.spots?q.hemi[2]:q.hemi[3],f.moon.userData.base=Z.sky&&q.moon?Z.sky.moonLight.intensity:0,Z.sky&&f.moon.position.copy(Z.sky.moonLight.dir).multiplyScalar(80),f.spots.forEach((be,Te)=>{let U=q.spots[Te];be.base=U?U.base:0,be.layer=U&&U.layer||"key",U&&(be.light.position.set(U.pos[0],U.pos[1],U.pos[2]),be.light.target.position.set(U.to[0],U.to[1],U.to[2]),be.light.color.set(U.color),be.light.distance=U.distance,be.light.angle=U.angle)}),f.points.forEach((be,Te)=>{let U=Te===0?Z.garboLight:q.points[Te-1];be.base=U&&Te>0?U.base:0,be.layer=Te===0?"garbo":U&&U.layer||"practical",U&&(be.light.position.set(U.pos[0],U.pos[1],U.pos[2]),be.light.color.set(U.color),be.light.distance=U.distance)}),s.shadowMap.needsUpdate=!0}let p=zd(a),m=new ni(-1,1,1,-1,5,200),v=new Qt(40,1.8,.3,400),g=t.name!=="phone",d={},x=-1;function b(Z,q,be){let Te=d[Z];return Te&&Te.width===q&&Te.height===be?Te:(Te&&Te.dispose(),d[Z]=new Vt(q,be,{type:Kt}))}function _(Z,q,be){let Te=Z.feedScreen;if(!Te)return;if(!g||!q){Te.visible=!1;return}let U=q.close?320:t.name==="desktop"?640:480,_t=Math.max(128,Math.min(U,Math.round((q.px||U)/64)*64)),st=b(q.close?"close":"aerial",_t,Math.max(64,Math.min(400,Math.round(_t/q.aspect)))),L=Te.material.uniforms;if(L.map.value!==st.texture&&(L.map.value=st.texture,L.texel.value.set(1/st.width,1/st.height),x=-1),L.blur.value=q.close?1.8:0,q.n!==x){x=q.n;let S=q.close?v:m;q.close?Gd(v,q):kd(m,q,be);let Y=r.fog,j=p.group.visible,ee=Z.sky?Z.sky.root.position.clone():null;Te.visible=!1,q.close?Z.sky&&Z.sky.root.position.set(q.eye[0],0,q.eye[2]):(r.fog=null,p.group.visible=!1,Z.sky&&(Z.sky.root.visible=!1)),s.setRenderTarget(st),s.clear(),s.render(r,S),s.setRenderTarget(null),r.fog=Y,p.group.visible=j,Z.sky&&(Z.sky.root.visible=!0,Z.sky.root.position.copy(ee))}Te.visible=!0}let E="";function T(Z){let q=Z?[Z.x,Z.y,Z.w,Z.h].map(Math.round).join(","):"";q!==E&&(E=q,n.style.clipPath=Z?`polygon(evenodd, 0 0, 100% 0, 100% 100%, 0 100%, 0 0, ${Z.x}px ${Z.y}px, ${Z.x+Z.w}px ${Z.y}px, ${Z.x+Z.w}px ${Z.y+Z.h}px, ${Z.x}px ${Z.y+Z.h}px, ${Z.x}px ${Z.y}px)`:"")}let w={},y=null,M=null,A=1,I=1,N=1,C="",P="traditional";function H(Z,q){if(!w[Z]){let be=performance.now(),Te=Mp(Z,t,q,e.furnish?e.furnish(Z):null);Te.buildMs=Math.round(performance.now()-be),Te.ready=!1,Te.root.visible=!1,a.add(Te.root);let U=()=>{Te.ready=!0,ge(),G()};ge(),(s.compileAsync?s.compileAsync(Te.root,o,r):Promise.resolve(s.compile(Te.root,o,r))).then(U,U),w[Z]=Te}return w[Z]}let F=["outdoors","stadium","sheri"],B=!1;function G(){if(B||he||t.name==="phone")return;let Z=F.find(be=>!w[be]);if(!Z||!y)return;B=!0;let q=()=>{B=!1,ge(),!w[Z]&&!he&&H(Z,P)};window.requestIdleCallback?requestIdleCallback(q,{timeout:2500}):setTimeout(q,600)}function V(Z){let q=w[Z];q&&(a.remove(q.root),delete w[Z],q.root.traverse(be=>{be.geometry&&be.geometry.dispose(),(Array.isArray(be.material)?be.material:be.material?[be.material]:[]).forEach(Te=>["map","emissiveMap","normalMap","alphaMap"].forEach(U=>Te[U]&&Te[U].dispose()))}),q.lightMaps&&q.lightMaps.dispose&&q.lightMaps.dispose())}function X(Z){if(ge(1500),y&&(y.root.visible=!1),y&&t.name==="phone"){let q=y.id;setTimeout(()=>{y&&y.id!==q&&V(q)},1200)}y=Z,y.root.visible=!0,r.fog=y.fog,y.fogBase=y.fog.density,u(y),M=null}function O(Z){o.position.set(Z.x,Z.y,-Z.z),o.rotation.set(0,-(Z.yaw||0),0),o.updateMatrixWorld();let q=o.near,be=o.far,Te=Z.F;o.projectionMatrix.makePerspective(-Z.cx*q/Te,(Z.W-Z.cx)*q/Te,Z.cy*q/Te,-(Z.H-Z.cy)*q/Te,q,be),o.projectionMatrixInverse.copy(o.projectionMatrix).invert()}function $(){let Z=i.getBoundingClientRect();A=Math.max(1,Z.width),I=Math.max(1,Z.height);let q=Id(Math.sqrt(t.pixels*N*N/(A*I)),.5,Math.min(2,window.devicePixelRatio||1));n.style.width=i.style.width||"100%",n.style.height=i.style.height||"100%",s.setPixelRatio(q),s.setSize(A,I,!1),c.setPixelRatio(q),c.setSize(A,I),h.resolution.set(Math.max(64,Math.round(A*q*t.bloomScale)),Math.max(64,Math.round(I*q*t.bloomScale)))}window.ResizeObserver?new ResizeObserver($).observe(i):window.addEventListener("resize",$),$();let ie=0,Ee=16,_e=0,Ne=0,J=1,re=0,Se="",Le=0,ge=(Z=2500)=>{Le=Math.max(Le,performance.now()+Z)},Fe=()=>B||performance.now()<Le||Object.keys(w).some(Z=>!w[Z].ready);function ht(Z){if(ie&&!document.hidden){let q=Z-ie;q<250&&(Ee+=(q-Ee)*.05),q>=250||Fe()?(_e=0,Ne=0):(_e=Ee>30?_e+q:0,Ne=Ee<19?Ne+q:0,_e>(t.name==="desktop"?2500:1400)?(N>.6?(N=Math.max(.6,N-.2),$()):h.enabled?h.enabled=!1:J=2,_e=0,Ne=0,Ee=20):Ne>8e3&&(J>1||!h.enabled||N<1)&&(J>1?J=1:h.enabled?(N=Math.min(1,N+.2),$()):h.enabled=!0,Ne=0,Ee=18))}ie=Z}let oe=new Zl,fe=0,he=!1;n.addEventListener("webglcontextlost",Z=>{Z.preventDefault(),he=!0}),n.addEventListener("webglcontextrestored",()=>{he=!1,Object.keys(w).forEach(Z=>delete w[Z]),y=null});function pe(Z,q){if(he)return!1;P=q.theme;let be=H(q.venue,q.theme);if(!be.ready)return y||(s.setRenderTarget(null),s.clear()),"wait";y!==be&&(X(be),G());let Te=(i.style.width||"")+"|"+(i.style.height||"");Te!==C&&(C=Te,$()),ht(performance.now());let U=Bi[q.theme]||Bi.traditional;M!==q.theme&&(y.kit.flags.setPalette(U.flags),M&&(y.lightMaps.repaint(U),y.garbo.setTheme(U)),M=q.theme);let _t=fe?Math.min(.1,Math.max(0,q.T-fe)):.016;fe=q.T;let st=oe.update(_t,q),L=[Z.x,Z.y,Z.z,Z.yaw,Z.F,Z.cx,Z.cy,Z.W,Z.H].map(me=>Math.round(me*100)).join(","),S=L!==Se;if(Se=L,re++,!S&&J>1&&re%J&&!q.reduce||!S&&q.reduce&&y._drawn)return!0;O(Z);let Y=q.reduce?0:q.pulse||0,j=q.reduce?1:.85+.1*Math.sin(q.t*11)*Math.sin(q.t*7.3)+.05*Math.sin(q.t*23),ee={...st,garbo:st.garbo*oe.garboLit*j},ve={TH:U,pulse:Y,lv:ee,on:q.on,reduce:q.reduce,close:q.listener==="stage"||q.dj,sponsors:q.sponsors||null};return y.sky&&y.sky.root.position.set(Z.x,0,Z.z),y.kit.bulbs.update(q.t,U.bulbs,ee,Y,q.reduce,[1,1,q.on?1:0]),y.kit.bigBulbs.update(q.t,U.bulbs,ee,Y,q.reduce,[1,1,1]),y.kit.curtains.update(q.t,U.bulbs,ee,Y,q.reduce),y.kit.pools.update(ee,U.glow,q.t,q.reduce),y.kit.flames.update(q.t,ee,q.reduce),Bd(y.kit,ee),y.lightMaps.set(ee,q.reduce?0:q.t),q.reduce||y.kit.flags.pose(q.T),y.kit.beams.forEach(me=>{me.beam.aim(me.from,me.to),me.beam.set(me.hex||"#fff0d8",.6*ee[me.layer||"key"])}),(y.umbrellas||[]).forEach((me,ae)=>me.update(q.T,q.reduce,ae)),y.garbo.update(q.t,ee.garbo,q.reduce,q.garboA==null||q.garboA>.3),y.stage&&y.stage.update(q.T,ve),y.update&&y.update(q.T,ve),y.furnish&&y.furnish.update(q.T,{...ve,beat:q.beat||0}),p.update(q.drone,q.T,q.reduce),_(y,q.aerial,q.drone?q.drone.y:10),f.points.forEach((me,ae)=>{me.light.intensity=ae===0?({sheri:10,stadium:6.5}[y.id]||13)*ee.garbo:me.base*ee[me.layer]}),f.spots.forEach(me=>{me.light.intensity=me.base*ee[me.layer]}),f.hemi.intensity=f.hemi.userData.base*ee.ambient,f.moon.intensity=f.moon.userData.base*ee.ambient,y.fog&&(y.fog.density=y.fogBase*(1+.3*(q.aarti||0))),s.toneMappingExposure=y.exposure*(1-.15*(q.aarti||0)),h.strength=.6+.16*Y*ee.show,c.render(),y._drawn=!0,!0}function Me(Z,q,be){return!y||he||!y._drawn?!1:(c.render(),Z.drawImage(n,0,0,q,be),!0)}return{draw:pe,resize:$,snapshot:Me,hole:T,aerial:g,tier:t.name,renderer:s,busy:Fe,debug:()=>({V:y,scene:r,camera:o,QP:N,every:J,bloom:h.enabled,frameMs:Ee,venues:Object.keys(w),ready:Object.keys(w).filter(Z=>w[Z].ready),buildMs:Object.fromEntries(Object.keys(w).map(Z=>[Z,w[Z].buildMs]))})}}!/[?&]venue=2d(&|$)/.test(location.search)&&Ep()?(window.GarbaVenueBackdrop={create(i,e){let t=Sp(i,e);return window.GarbaVenue3D=t,t}},document.documentElement.classList.add("venue-3d")):window.GarbaVenueBackdrop=!1;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
