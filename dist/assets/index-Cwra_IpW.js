var Ih=Object.defineProperty;var Fh=(s,e,t)=>e in s?Ih(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var oe=(s,e,t)=>Fh(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const So="180",Nh=0,tl=1,Oh=2,Uc=1,Pc=2,bn=3,Hn=0,zt=1,ln=2,zn=0,Bi=1,nl=2,il=3,rl=4,Bh=5,ni=100,kh=101,zh=102,Gh=103,Hh=104,Vh=200,Wh=201,Xh=202,qh=203,Ea=204,Ta=205,Yh=206,jh=207,Kh=208,Zh=209,Jh=210,Qh=211,$h=212,eu=213,tu=214,ba=0,wa=1,Aa=2,zi=3,Ra=4,Ca=5,Ua=6,Pa=7,Dc=0,nu=1,iu=2,Gn=0,ru=1,su=2,au=3,ou=4,lu=5,cu=6,hu=7,Lc=300,Gi=301,Hi=302,Da=303,La=304,Ms=306,Ia=1e3,ri=1001,Fa=1002,Xt=1003,uu=1004,Pr=1005,$t=1006,ks=1007,si=1008,vn=1009,Ic=1010,Fc=1011,xr=1012,Eo=1013,fi=1014,mn=1015,Tr=1016,To=1017,bo=1018,yr=1020,Nc=35902,Oc=35899,Bc=1021,kc=1022,hn=1023,Mr=1026,Sr=1027,wo=1028,Ao=1029,zc=1030,Ro=1031,Co=1033,as=33776,os=33777,ls=33778,cs=33779,Na=35840,Oa=35841,Ba=35842,ka=35843,za=36196,Ga=37492,Ha=37496,Va=37808,Wa=37809,Xa=37810,qa=37811,Ya=37812,ja=37813,Ka=37814,Za=37815,Ja=37816,Qa=37817,$a=37818,eo=37819,to=37820,no=37821,io=36492,ro=36494,so=36495,ao=36283,oo=36284,lo=36285,co=36286,fu=3200,Gc=3201,Hc=0,du=1,kn="",Qt="srgb",Vi="srgb-linear",ds="linear",ct="srgb",xi=7680,sl=519,pu=512,mu=513,gu=514,Vc=515,vu=516,_u=517,xu=518,yu=519,al=35044,Wc=35048,ol="300 es",gn=2e3,ps=2001;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const i=r[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zs=Math.PI/180,ho=180/Math.PI;function br(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pt[s&255]+Pt[s>>8&255]+Pt[s>>16&255]+Pt[s>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[r&255]+Pt[r>>8&255]+Pt[r>>16&255]+Pt[r>>24&255]).toLowerCase()}function et(s,e,t){return Math.max(e,Math.min(t,s))}function Mu(s,e){return(s%e+e)%e}function Gs(s,e,t){return(1-t)*s+t*e}function sr(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Bt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6],this.y=i[1]*t+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),i=Math.sin(t),n=this.x-e.x,a=this.y-e.y;return this.x=n*r-a*i+e.x,this.y=n*i+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class di{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,n,a,o){let l=r[i+0],c=r[i+1],h=r[i+2],u=r[i+3];const f=n[a+0],d=n[a+1],g=n[a+2],v=n[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let m=1-o;const p=l*f+c*d+h*g+u*v,S=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const T=Math.sqrt(E),b=Math.atan2(T,p*S);m=Math.sin(m*b)/T,o=Math.sin(o*b)/T}const _=o*S;if(l=l*m+f*_,c=c*m+d*_,h=h*m+g*_,u=u*m+v*_,m===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,r,i,n,a){const o=r[i],l=r[i+1],c=r[i+2],h=r[i+3],u=n[a],f=n[a+1],d=n[a+2],g=n[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,i=e._y,n=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(r/2),h=o(i/2),u=o(n/2),f=l(r/2),d=l(i/2),g=l(n/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],i=t[4],n=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=r+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(n-c)*d,this._z=(a-i)*d}else if(r>o&&r>u){const d=2*Math.sqrt(1+r-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(n+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-r-u);this._w=(n-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-r-o);this._w=(a-i)/d,this._x=(n+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,i=e._y,n=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=r*h+a*o+i*c-n*l,this._y=i*h+a*l+n*o-r*c,this._z=n*h+a*c+r*l-i*o,this._w=a*h-r*o-i*l-n*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,i=this._y,n=this._z,a=this._w;let o=a*e._w+r*e._x+i*e._y+n*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=r,this._y=i,this._z=n,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*r+t*this._x,this._y=d*i+t*this._y,this._z=d*n+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=r*u+this._x*f,this._y=i*u+this._y*f,this._z=n*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),n=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,r=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ll.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,i=this.z,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6]*i,this.y=n[1]*t+n[4]*r+n[7]*i,this.z=n[2]*t+n[5]*r+n[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,n=e.elements,a=1/(n[3]*t+n[7]*r+n[11]*i+n[15]);return this.x=(n[0]*t+n[4]*r+n[8]*i+n[12])*a,this.y=(n[1]*t+n[5]*r+n[9]*i+n[13])*a,this.z=(n[2]*t+n[6]*r+n[10]*i+n[14])*a,this}applyQuaternion(e){const t=this.x,r=this.y,i=this.z,n=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*r),h=2*(o*t-n*i),u=2*(n*r-a*t);return this.x=t+l*c+a*u-o*h,this.y=r+l*h+o*c-n*u,this.z=i+l*u+n*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,i=this.z,n=e.elements;return this.x=n[0]*t+n[4]*r+n[8]*i,this.y=n[1]*t+n[5]*r+n[9]*i,this.z=n[2]*t+n[6]*r+n[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,i=e.y,n=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-n*o,this.y=n*a-r*l,this.z=r*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Hs.copy(this).projectOnVector(e),this.sub(Hs)}reflect(e){return this.sub(Hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return t*t+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hs=new H,ll=new di;class Ke{constructor(e,t,r,i,n,a,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,i,n,a,o,l,c)}set(e,t,r,i,n,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=n,h[5]=l,h[6]=r,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,n=this.elements,a=r[0],o=r[3],l=r[6],c=r[1],h=r[4],u=r[7],f=r[2],d=r[5],g=r[8],v=i[0],m=i[3],p=i[6],S=i[1],E=i[4],_=i[7],T=i[2],b=i[5],w=i[8];return n[0]=a*v+o*S+l*T,n[3]=a*m+o*E+l*b,n[6]=a*p+o*_+l*w,n[1]=c*v+h*S+u*T,n[4]=c*m+h*E+u*b,n[7]=c*p+h*_+u*w,n[2]=f*v+d*S+g*T,n[5]=f*m+d*E+g*b,n[8]=f*p+d*_+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-r*n*h+r*o*l+i*n*c-i*a*l}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*n,d=c*n-a*l,g=t*u+r*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(i*c-h*r)*v,e[2]=(o*r-i*a)*v,e[3]=f*v,e[4]=(h*t-i*l)*v,e[5]=(i*n-o*t)*v,e[6]=d*v,e[7]=(r*l-c*t)*v,e[8]=(a*t-r*n)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,i,n,a,o){const l=Math.cos(n),c=Math.sin(n);return this.set(r*l,r*c,-r*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vs.makeScale(e,t)),this}rotate(e){return this.premultiply(Vs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vs=new Ke;function Xc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ms(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Su(){const s=ms("canvas");return s.style.display="block",s}const cl={};function Er(s){s in cl||(cl[s]=!0,console.warn(s))}function Eu(s,e,t){return new Promise(function(r,i){function n(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:r()}}setTimeout(n,t)})}const hl=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ul=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tu(){const s={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(i,n,a){return this.enabled===!1||n===a||!n||!a||(this.spaces[n].transfer===ct&&(i.r=wn(i.r),i.g=wn(i.g),i.b=wn(i.b)),this.spaces[n].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[n].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(i.r=ki(i.r),i.g=ki(i.g),i.b=ki(i.b))),i},workingToColorSpace:function(i,n){return this.convert(i,this.workingColorSpace,n)},colorSpaceToWorking:function(i,n){return this.convert(i,n,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kn?ds:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,n=this.workingColorSpace){return i.fromArray(this.spaces[n].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,n,a){return i.copy(this.spaces[n].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,n){return Er("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,n)},toWorkingColorSpace:function(i,n){return Er("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,n)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Vi]:{primaries:e,whitePoint:r,transfer:ds,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:r,transfer:ct,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),s}const nt=Tu();function wn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ki(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let yi;class bu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{yi===void 0&&(yi=ms("canvas")),yi.width=e.width,yi.height=e.height;const i=yi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),r=yi}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ms("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),n=i.data;for(let a=0;a<n.length;a++)n[a]=wn(n[a]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(wn(t[r]/255)*255):t[r]=wn(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wu=0;class Uo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=br(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let n;if(Array.isArray(i)){n=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?n.push(Ws(i[a].image)):n.push(Ws(i[a]))}else n=Ws(i);r.url=n}return t||(e.images[this.uuid]=r),r}}function Ws(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Au=0;const Xs=new H;class Lt extends Xi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,r=ri,i=ri,n=$t,a=si,o=hn,l=vn,c=Lt.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=br(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=n,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xs).x}get height(){return this.source.getSize(Xs).y}get depth(){return this.source.getSize(Xs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&r&&i.isVector2&&r.isVector2||i&&r&&i.isVector3&&r.isVector3||i&&r&&i.isMatrix3&&r.isMatrix3?i.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ia:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ia:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Lc;Lt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,r=0,i=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,n=this.w,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*i+a[12]*n,this.y=a[1]*t+a[5]*r+a[9]*i+a[13]*n,this.z=a[2]*t+a[6]*r+a[10]*i+a[14]*n,this.w=a[3]*t+a[7]*r+a[11]*i+a[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,i,n;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,_=(d+1)/2,T=(p+1)/2,b=(h+f)/4,w=(u+v)/4,U=(g+m)/4;return E>_&&E>T?E<.01?(r=0,i=.707106781,n=.707106781):(r=Math.sqrt(E),i=b/r,n=w/r):_>T?_<.01?(r=.707106781,i=0,n=.707106781):(i=Math.sqrt(_),r=b/i,n=U/i):T<.01?(r=.707106781,i=.707106781,n=0):(n=Math.sqrt(T),r=w/n,i=U/n),this.set(r,i,n,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-v)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ru extends Xi{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const i={width:e,height:t,depth:r.depth},n=new Lt(i);this.textures=[];const a=r.count;for(let o=0;o<a;o++)this.textures[o]=n.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,n=this.textures.length;i<n;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=r,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Uo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends Ru{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class qc extends Lt{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cu extends Lt{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const n=r.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=n.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(n,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Dr.copy(r.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const i=e.children;for(let n=0,a=i.length;n<a;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),Lr.subVectors(this.max,ar),Mi.subVectors(e.a,ar),Si.subVectors(e.b,ar),Ei.subVectors(e.c,ar),Ln.subVectors(Si,Mi),In.subVectors(Ei,Si),Yn.subVectors(Mi,Ei);let t=[0,-Ln.z,Ln.y,0,-In.z,In.y,0,-Yn.z,Yn.y,Ln.z,0,-Ln.x,In.z,0,-In.x,Yn.z,0,-Yn.x,-Ln.y,Ln.x,0,-In.y,In.x,0,-Yn.y,Yn.x,0];return!qs(t,Mi,Si,Ei,Lr)||(t=[1,0,0,0,1,0,0,0,1],!qs(t,Mi,Si,Ei,Lr))?!1:(Ir.crossVectors(Ln,In),t=[Ir.x,Ir.y,Ir.z],qs(t,Mi,Si,Ei,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yn=[new H,new H,new H,new H,new H,new H,new H,new H],sn=new H,Dr=new Cn,Mi=new H,Si=new H,Ei=new H,Ln=new H,In=new H,Yn=new H,ar=new H,Lr=new H,Ir=new H,jn=new H;function qs(s,e,t,r,i){for(let n=0,a=s.length-3;n<=a;n+=3){jn.fromArray(s,n);const o=i.x*Math.abs(jn.x)+i.y*Math.abs(jn.y)+i.z*Math.abs(jn.z),l=e.dot(jn),c=t.dot(jn),h=r.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Uu=new Cn,or=new H,Ys=new H;class Xn{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Uu.setFromPoints(e).getCenter(r);let i=0;for(let n=0,a=e.length;n<a;n++)i=Math.max(i,r.distanceToSquared(e[n]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);const t=or.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(or,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ys.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(Ys)),this.expandByPoint(or.copy(e.center).sub(Ys))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Mn=new H,js=new H,Fr=new H,Fn=new H,Ks=new H,Nr=new H,Zs=new H;class Po{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){js.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(js);const n=e.distanceTo(t)*.5,a=-this.direction.dot(Fr),o=Fn.dot(this.direction),l=-Fn.dot(Fr),c=Fn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=n*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=n,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-n,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*n+o)),f=u>0?-n:Math.min(Math.max(-n,-l),n),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-n,-l),n),d=f*(f+2*l)+c):(u=Math.max(0,-(a*n+o)),f=u>0?n:Math.min(Math.max(-n,-l),n),d=-u*u+f*(f+2*l)+c);else f=a>0?-n:n,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(js).addScaledVector(Fr,f),d}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const r=Mn.dot(this.direction),i=Mn.dot(Mn)-r*r,n=e.radius*e.radius;if(i>n)return null;const a=Math.sqrt(n-i),o=r-a,l=r+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,n,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(n=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(n=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),r>a||n>i||((n>r||isNaN(r))&&(r=n),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),r>l||o>i)||((o>r||r!==r)&&(r=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,r,i,n){Ks.subVectors(t,e),Nr.subVectors(r,e),Zs.crossVectors(Ks,Nr);let a=this.direction.dot(Zs),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fn.subVectors(this.origin,e);const l=o*this.direction.dot(Nr.crossVectors(Fn,Nr));if(l<0)return null;const c=o*this.direction.dot(Ks.cross(Fn));if(c<0||l+c>a)return null;const h=-o*Fn.dot(Zs);return h<0?null:this.at(h/a,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,r,i,n,a,o,l,c,h,u,f,d,g,v,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,i,n,a,o,l,c,h,u,f,d,g,v,m)}set(e,t,r,i,n,a,o,l,c,h,u,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=i,p[1]=n,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,i=1/Ti.setFromMatrixColumn(e,0).length(),n=1/Ti.setFromMatrixColumn(e,1).length(),a=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=0,t[4]=r[4]*n,t[5]=r[5]*n,t[6]=r[6]*n,t[7]=0,t[8]=r[8]*a,t[9]=r[9]*a,t[10]=r[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,i=e.y,n=e.z,a=Math.cos(r),o=Math.sin(r),l=Math.cos(i),c=Math.sin(i),h=Math.cos(n),u=Math.sin(n);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pu,e,Du)}lookAt(e,t,r){const i=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Nn.crossVectors(r,Ht),Nn.lengthSq()===0&&(Math.abs(r.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Nn.crossVectors(r,Ht)),Nn.normalize(),Or.crossVectors(Ht,Nn),i[0]=Nn.x,i[4]=Or.x,i[8]=Ht.x,i[1]=Nn.y,i[5]=Or.y,i[9]=Ht.y,i[2]=Nn.z,i[6]=Or.z,i[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,n=this.elements,a=r[0],o=r[4],l=r[8],c=r[12],h=r[1],u=r[5],f=r[9],d=r[13],g=r[2],v=r[6],m=r[10],p=r[14],S=r[3],E=r[7],_=r[11],T=r[15],b=i[0],w=i[4],U=i[8],y=i[12],x=i[1],P=i[5],C=i[9],L=i[13],I=i[2],V=i[6],k=i[10],ne=i[14],X=i[3],K=i[7],j=i[11],F=i[15];return n[0]=a*b+o*x+l*I+c*X,n[4]=a*w+o*P+l*V+c*K,n[8]=a*U+o*C+l*k+c*j,n[12]=a*y+o*L+l*ne+c*F,n[1]=h*b+u*x+f*I+d*X,n[5]=h*w+u*P+f*V+d*K,n[9]=h*U+u*C+f*k+d*j,n[13]=h*y+u*L+f*ne+d*F,n[2]=g*b+v*x+m*I+p*X,n[6]=g*w+v*P+m*V+p*K,n[10]=g*U+v*C+m*k+p*j,n[14]=g*y+v*L+m*ne+p*F,n[3]=S*b+E*x+_*I+T*X,n[7]=S*w+E*P+_*V+T*K,n[11]=S*U+E*C+_*k+T*j,n[15]=S*y+E*L+_*ne+T*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],i=e[8],n=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+n*l*u-i*c*u-n*o*f+r*c*f+i*o*d-r*l*d)+v*(+t*l*d-t*c*f+n*a*f-i*a*d+i*c*h-n*l*h)+m*(+t*c*u-t*o*d-n*a*u+r*a*d+n*o*h-r*c*h)+p*(-i*o*h-t*l*u+t*o*f+i*a*u-r*a*f+r*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],S=u*m*c-v*f*c+v*l*d-o*m*d-u*l*p+o*f*p,E=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,_=h*v*c-g*u*c+g*o*d-a*v*d-h*o*p+a*u*p,T=g*u*l-h*v*l-g*o*f+a*v*f+h*o*m-a*u*m,b=t*S+r*E+i*_+n*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=S*w,e[1]=(v*f*n-u*m*n-v*i*d+r*m*d+u*i*p-r*f*p)*w,e[2]=(o*m*n-v*l*n+v*i*c-r*m*c-o*i*p+r*l*p)*w,e[3]=(u*l*n-o*f*n-u*i*c+r*f*c+o*i*d-r*l*d)*w,e[4]=E*w,e[5]=(h*m*n-g*f*n+g*i*d-t*m*d-h*i*p+t*f*p)*w,e[6]=(g*l*n-a*m*n-g*i*c+t*m*c+a*i*p-t*l*p)*w,e[7]=(a*f*n-h*l*n+h*i*c-t*f*c-a*i*d+t*l*d)*w,e[8]=_*w,e[9]=(g*u*n-h*v*n-g*r*d+t*v*d+h*r*p-t*u*p)*w,e[10]=(a*v*n-g*o*n+g*r*c-t*v*c-a*r*p+t*o*p)*w,e[11]=(h*o*n-a*u*n-h*r*c+t*u*c+a*r*d-t*o*d)*w,e[12]=T*w,e[13]=(h*v*i-g*u*i+g*r*f-t*v*f-h*r*m+t*u*m)*w,e[14]=(g*o*i-a*v*i-g*r*l+t*v*l+a*r*m-t*o*m)*w,e[15]=(a*u*i-h*o*i+h*r*l-t*u*l-a*r*f+t*o*f)*w,this}scale(e){const t=this.elements,r=e.x,i=e.y,n=e.z;return t[0]*=r,t[4]*=i,t[8]*=n,t[1]*=r,t[5]*=i,t[9]*=n,t[2]*=r,t[6]*=i,t[10]*=n,t[3]*=r,t[7]*=i,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,i))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),i=Math.sin(t),n=1-r,a=e.x,o=e.y,l=e.z,c=n*a,h=n*o;return this.set(c*a+r,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+r,h*l-i*a,0,c*l-i*o,h*l+i*a,n*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,i,n,a){return this.set(1,r,n,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,r){const i=this.elements,n=t._x,a=t._y,o=t._z,l=t._w,c=n+n,h=a+a,u=o+o,f=n*c,d=n*h,g=n*u,v=a*h,m=a*u,p=o*u,S=l*c,E=l*h,_=l*u,T=r.x,b=r.y,w=r.z;return i[0]=(1-(v+p))*T,i[1]=(d+_)*T,i[2]=(g-E)*T,i[3]=0,i[4]=(d-_)*b,i[5]=(1-(f+p))*b,i[6]=(m+S)*b,i[7]=0,i[8]=(g+E)*w,i[9]=(m-S)*w,i[10]=(1-(f+v))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,r){const i=this.elements;let n=Ti.set(i[0],i[1],i[2]).length();const a=Ti.set(i[4],i[5],i[6]).length(),o=Ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(n=-n),e.x=i[12],e.y=i[13],e.z=i[14],an.copy(this);const c=1/n,h=1/a,u=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),r.x=n,r.y=a,r.z=o,this}makePerspective(e,t,r,i,n,a,o=gn,l=!1){const c=this.elements,h=2*n/(t-e),u=2*n/(r-i),f=(t+e)/(t-e),d=(r+i)/(r-i);let g,v;if(l)g=n/(a-n),v=a*n/(a-n);else if(o===gn)g=-(a+n)/(a-n),v=-2*a*n/(a-n);else if(o===ps)g=-a/(a-n),v=-a*n/(a-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,r,i,n,a,o=gn,l=!1){const c=this.elements,h=2/(t-e),u=2/(r-i),f=-(t+e)/(t-e),d=-(r+i)/(r-i);let g,v;if(l)g=1/(a-n),v=a/(a-n);else if(o===gn)g=-2/(a-n),v=-(a+n)/(a-n);else if(o===ps)g=-1/(a-n),v=-n/(a-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ti=new H,an=new ht,Pu=new H(0,0,0),Du=new H(1,1,1),Nn=new H,Or=new H,Ht=new H,fl=new ht,dl=new di;class _n{constructor(e=0,t=0,r=0,i=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,i=this._order){return this._x=e,this._y=t,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const i=e.elements,n=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,n)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fl,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dl.setFromEuler(this),this.setFromQuaternion(dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Yc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lu=0;const pl=new H,bi=new di,Sn=new ht,Br=new H,lr=new H,Iu=new H,Fu=new di,ml=new H(1,0,0),gl=new H(0,1,0),vl=new H(0,0,1),_l={type:"added"},Nu={type:"removed"},wi={type:"childadded",child:null},Js={type:"childremoved",child:null};class vt extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new H,t=new _n,r=new di,i=new H(1,1,1);function n(){r.setFromEuler(t,!1)}function a(){t.setFromQuaternion(r,void 0,!1)}t._onChange(n),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ke}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(ml,e)}rotateY(e){return this.rotateOnAxis(gl,e)}rotateZ(e){return this.rotateOnAxis(vl,e)}translateOnAxis(e,t){return pl.copy(e).applyQuaternion(this.quaternion),this.position.add(pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ml,e)}translateY(e){return this.translateOnAxis(gl,e)}translateZ(e){return this.translateOnAxis(vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Br.copy(e):Br.set(e,t,r);const i=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(lr,Br,this.up):Sn.lookAt(Br,lr,this.up),this.quaternion.setFromRotationMatrix(Sn),i&&(Sn.extractRotation(i.matrixWorld),bi.setFromRotationMatrix(Sn),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_l),wi.child=e,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nu),Js.child=e,this.dispatchEvent(Js),Js.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_l),wi.child=e,this.dispatchEvent(wi),wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,i=this.children.length;r<i;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const i=this.children;for(let n=0,a=i.length;n<a;n++)i[n].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,Iu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Fu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let n=0,a=i.length;n<a;n++)i[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];n(e.shapes,u)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(e.materials,this.material[l]));i.material=o}else i.material=n(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(n(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),u.length>0&&(r.shapes=u),f.length>0&&(r.skeletons=f),d.length>0&&(r.animations=d),g.length>0&&(r.nodes=g)}return r.object=i,r;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}vt.DEFAULT_UP=new H(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new H,En=new H,Qs=new H,Tn=new H,Ai=new H,Ri=new H,xl=new H,$s=new H,ea=new H,ta=new H,na=new st,ia=new st,ra=new st;class cn{constructor(e=new H,t=new H,r=new H){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,i){i.subVectors(r,t),on.subVectors(e,t),i.cross(on);const n=i.lengthSq();return n>0?i.multiplyScalar(1/Math.sqrt(n)):i.set(0,0,0)}static getBarycoord(e,t,r,i,n){on.subVectors(i,t),En.subVectors(r,t),Qs.subVectors(e,t);const a=on.dot(on),o=on.dot(En),l=on.dot(Qs),c=En.dot(En),h=En.dot(Qs),u=a*c-o*o;if(u===0)return n.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return n.set(1-d-g,g,d)}static containsPoint(e,t,r,i){return this.getBarycoord(e,t,r,i,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,r,i,n,a,o,l){return this.getBarycoord(e,t,r,i,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static getInterpolatedAttribute(e,t,r,i,n,a){return na.setScalar(0),ia.setScalar(0),ra.setScalar(0),na.fromBufferAttribute(e,t),ia.fromBufferAttribute(e,r),ra.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(na,n.x),a.addScaledVector(ia,n.y),a.addScaledVector(ra,n.z),a}static isFrontFacing(e,t,r,i){return on.subVectors(r,t),En.subVectors(e,t),on.cross(En).dot(i)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,r,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),En.subVectors(this.a,this.b),on.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,i,n){return cn.getInterpolation(e,this.a,this.b,this.c,t,r,i,n)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,i=this.b,n=this.c;let a,o;Ai.subVectors(i,r),Ri.subVectors(n,r),$s.subVectors(e,r);const l=Ai.dot($s),c=Ri.dot($s);if(l<=0&&c<=0)return t.copy(r);ea.subVectors(e,i);const h=Ai.dot(ea),u=Ri.dot(ea);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(r).addScaledVector(Ai,a);ta.subVectors(e,n);const d=Ai.dot(ta),g=Ri.dot(ta);if(g>=0&&d<=g)return t.copy(n);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(r).addScaledVector(Ri,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return xl.subVectors(n,i),o=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(xl,o);const p=1/(m+v+f);return a=v*p,o=f*p,t.copy(r).addScaledVector(Ai,a).addScaledVector(Ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},kr={h:0,s:0,l:0};function sa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class je{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,i=nt.workingColorSpace){return this.r=e,this.g=t,this.b=r,nt.colorSpaceToWorking(this,i),this}setHSL(e,t,r,i=nt.workingColorSpace){if(e=Mu(e,1),t=et(t,0,1),r=et(r,0,1),t===0)this.r=this.g=this.b=r;else{const n=r<=.5?r*(1+t):r+t-r*t,a=2*r-n;this.r=sa(a,n,e+1/3),this.g=sa(a,n,e),this.b=sa(a,n,e-1/3)}return nt.colorSpaceToWorking(this,i),this}setStyle(e,t=Qt){function r(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=i[1],a=n.length;if(a===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const r=jc[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return nt.workingToColorSpace(Dt.copy(this),e),Math.round(et(Dt.r*255,0,255))*65536+Math.round(et(Dt.g*255,0,255))*256+Math.round(et(Dt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Dt.copy(this),t);const r=Dt.r,i=Dt.g,n=Dt.b,a=Math.max(r,i,n),o=Math.min(r,i,n);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case r:l=(i-n)/u+(i<n?6:0);break;case i:l=(n-r)/u+2;break;case n:l=(r-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Qt){nt.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,r=Dt.g,i=Dt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(kr);const r=Gs(On.h,kr.h,t),i=Gs(On.s,kr.s,t),n=Gs(On.l,kr.l,t);return this.setHSL(r,i,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,i=this.b,n=e.elements;return this.r=n[0]*t+n[3]*r+n[6]*i,this.g=n[1]*t+n[4]*r+n[7]*i,this.b=n[2]*t+n[5]*r+n[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new je;je.NAMES=jc;let Ou=0;class mi extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=br(),this.name="",this.type="Material",this.blending=Bi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ea,this.blendDst=Ta,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(r.blending=this.blending),this.side!==Hn&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ea&&(r.blendSrc=this.blendSrc),this.blendDst!==Ta&&(r.blendDst=this.blendDst),this.blendEquation!==ni&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sl&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(n){const a=[];for(const o in n){const l=n[o];delete l.metadata,a.push(l)}return a}if(t){const n=i(e.textures),a=i(e.images);n.length>0&&(r.textures=n),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const i=t.length;r=new Array(i);for(let n=0;n!==i;++n)r[n]=t[n].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class An extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new H,zr=new Qe;let Bu=0;class en{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=al,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,n=this.itemSize;i<n;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=sr(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Bt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),r=Bt(r,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),r=Bt(r,this.array),i=Bt(i,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==al&&(e.usage=this.usage),e}}class Kc extends en{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Zc extends en{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class at extends en{constructor(e,t,r){super(new Float32Array(e),t,r)}}let ku=0;const Jt=new ht,aa=new vt,Ci=new H,Vt=new Cn,cr=new Cn,wt=new H;class bt extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xc(e)?Zc:Kc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const n=new Ke().getNormalMatrix(e);r.applyNormalMatrix(n),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,r){return Jt.makeTranslation(e,t,r),this.applyMatrix4(Jt),this}scale(e,t,r){return Jt.makeScale(e,t,r),this.applyMatrix4(Jt),this}lookAt(e){return aa.lookAt(e),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let i=0,n=e.length;i<n;i++){const a=e[i];r.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(r,3))}else{const r=Math.min(e.length,t.count);for(let i=0;i<r;i++){const n=e[i];t.setXYZ(i,n.x,n.y,n.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,i=t.length;r<i;r++){const n=t[r];Vt.setFromBufferAttribute(n),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const r=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Vt.min,cr.min),Vt.expandByPoint(wt),wt.addVectors(Vt.max,cr.max),Vt.expandByPoint(wt)):(Vt.expandByPoint(cr.min),Vt.expandByPoint(cr.max))}Vt.getCenter(r);let i=0;for(let n=0,a=e.count;n<a;n++)wt.fromBufferAttribute(e,n),i=Math.max(i,r.distanceToSquared(wt));if(t)for(let n=0,a=t.length;n<a;n++){const o=t[n],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(e,c),wt.add(Ci)),i=Math.max(i,r.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,i=t.normal,n=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*r.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<r.count;U++)o[U]=new H,l[U]=new H;const c=new H,h=new H,u=new H,f=new Qe,d=new Qe,g=new Qe,v=new H,m=new H;function p(U,y,x){c.fromBufferAttribute(r,U),h.fromBufferAttribute(r,y),u.fromBufferAttribute(r,x),f.fromBufferAttribute(n,U),d.fromBufferAttribute(n,y),g.fromBufferAttribute(n,x),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),o[U].add(v),o[y].add(v),o[x].add(v),l[U].add(m),l[y].add(m),l[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let U=0,y=S.length;U<y;++U){const x=S[U],P=x.start,C=x.count;for(let L=P,I=P+C;L<I;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const E=new H,_=new H,T=new H,b=new H;function w(U){T.fromBufferAttribute(i,U),b.copy(T);const y=o[U];E.copy(y),E.sub(T.multiplyScalar(T.dot(y))).normalize(),_.crossVectors(b,y);const P=_.dot(l[U])<0?-1:1;a.setXYZW(U,E.x,E.y,E.z,P)}for(let U=0,y=S.length;U<y;++U){const x=S[U],P=x.start,C=x.count;for(let L=P,I=P+C;L<I;L+=3)w(e.getX(L+0)),w(e.getX(L+1)),w(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,d=r.count;f<d;f++)r.setXYZ(f,0,0,0);const i=new H,n=new H,a=new H,o=new H,l=new H,c=new H,h=new H,u=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),n.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,n),u.subVectors(i,n),h.cross(u),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,m),o.add(h),l.add(h),c.add(h),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),n.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,n),u.subVectors(i,n),h.cross(u),r.setXYZ(f+0,h.x,h.y,h.z),r.setXYZ(f+1,h.x,h.y,h.z),r.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new en(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,r=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,r);t.setAttribute(o,c)}const n=this.morphAttributes;for(const o in n){const l=[],c=n[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,r);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let n=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,n=!0)}n&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const n=e.morphAttributes;for(const c in n){const h=[],u=n[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new ht,Kn=new Po,Gr=new Xn,Ml=new H,Hr=new H,Vr=new H,Wr=new H,oa=new H,Xr=new H,Sl=new H,qr=new H;class dt extends vt{constructor(e=new bt,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){const r=this.geometry,i=r.attributes.position,n=r.morphAttributes.position,a=r.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(n&&o){Xr.set(0,0,0);for(let l=0,c=n.length;l<c;l++){const h=o[l],u=n[l];h!==0&&(oa.fromBufferAttribute(u,e),a?Xr.addScaledVector(oa,h):Xr.addScaledVector(oa.sub(t),h))}t.add(Xr)}return t}raycast(e,t){const r=this.geometry,i=this.material,n=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Gr.copy(r.boundingSphere),Gr.applyMatrix4(n),Kn.copy(e.ray).recast(e.near),!(Gr.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Gr,Ml)===null||Kn.origin.distanceToSquared(Ml)>(e.far-e.near)**2))&&(yl.copy(n).invert(),Kn.copy(e.ray).applyMatrix4(yl),!(r.boundingBox!==null&&Kn.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Kn)))}_computeIntersections(e,t,r){let i;const n=this.geometry,a=this.material,o=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv1,u=n.attributes.normal,f=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=S,T=E;_<T;_+=3){const b=o.getX(_),w=o.getX(_+1),U=o.getX(_+2);i=Yr(this,p,e,r,c,h,u,b,w,U),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=o.getX(m),E=o.getX(m+1),_=o.getX(m+2);i=Yr(this,a,e,r,c,h,u,S,E,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=S,T=E;_<T;_+=3){const b=_,w=_+1,U=_+2;i=Yr(this,p,e,r,c,h,u,b,w,U),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=m,E=m+1,_=m+2;i=Yr(this,a,e,r,c,h,u,S,E,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function zu(s,e,t,r,i,n,a,o){let l;if(e.side===zt?l=r.intersectTriangle(a,n,i,!0,o):l=r.intersectTriangle(i,n,a,e.side===Hn,o),l===null)return null;qr.copy(o),qr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(qr);return c<t.near||c>t.far?null:{distance:c,point:qr.clone(),object:s}}function Yr(s,e,t,r,i,n,a,o,l,c){s.getVertexPosition(o,Hr),s.getVertexPosition(l,Vr),s.getVertexPosition(c,Wr);const h=zu(s,e,t,r,Hr,Vr,Wr,Sl);if(h){const u=new H;cn.getBarycoord(Sl,Hr,Vr,Wr,u),i&&(h.uv=cn.getInterpolatedAttribute(i,o,l,c,u,new Qe)),n&&(h.uv1=cn.getInterpolatedAttribute(n,o,l,c,u,new Qe)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,l,c,u,new H),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new H,materialIndex:0};cn.getNormal(Hr,Vr,Wr,f.normal),h.face=f,h.barycoord=u}return h}class qi extends bt{constructor(e=1,t=1,r=1,i=1,n=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:n,depthSegments:a};const o=this;i=Math.floor(i),n=Math.floor(n),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,r,t,e,a,n,0),g("z","y","x",1,-1,r,t,-e,a,n,1),g("x","z","y",1,1,e,r,t,i,a,2),g("x","z","y",1,-1,e,r,-t,i,a,3),g("x","y","z",1,-1,e,t,r,i,n,4),g("x","y","z",-1,-1,e,t,-r,i,n,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function g(v,m,p,S,E,_,T,b,w,U,y){const x=_/w,P=T/U,C=_/2,L=T/2,I=b/2,V=w+1,k=U+1;let ne=0,X=0;const K=new H;for(let j=0;j<k;j++){const F=j*P-L;for(let W=0;W<V;W++){const $=W*x-C;K[v]=$*S,K[m]=F*E,K[p]=I,c.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[p]=b>0?1:-1,h.push(K.x,K.y,K.z),u.push(W/w),u.push(1-j/U),ne+=1}}for(let j=0;j<U;j++)for(let F=0;F<w;F++){const W=f+F+V*j,$=f+F+V*(j+1),te=f+(F+1)+V*(j+1),Z=f+(F+1)+V*j;l.push(W,$,Z),l.push($,te,Z),X+=6}o.addGroup(d,X,y),d+=X,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wi(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const i=s[t][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=i.clone():Array.isArray(i)?e[t][r]=i.slice():e[t][r]=i}}return e}function It(s){const e={};for(let t=0;t<s.length;t++){const r=Wi(s[t]);for(const i in r)e[i]=r[i]}return e}function Gu(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Jc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Qc={clone:Wi,merge:It};var Hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hu,this.fragmentShader=Vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=Gu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class $c extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new H,El=new Qe,Tl=new Qe;class Wt extends $c{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,El,Tl),t.subVectors(Tl,El)}setViewOffset(e,t,r,i,n,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zs*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,n=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;n+=a.offsetX*i/l,t-=a.offsetY*r/c,i*=a.width/l,r*=a.height/c}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+i,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,Pi=1;class Wu extends vt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wt(Ui,Pi,e,t);i.layers=this.layers,this.add(i);const n=new Wt(Ui,Pi,e,t);n.layers=this.layers,this.add(n);const a=new Wt(Ui,Pi,e,t);a.layers=this.layers,this.add(a);const o=new Wt(Ui,Pi,e,t);o.layers=this.layers,this.add(o);const l=new Wt(Ui,Pi,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Ui,Pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,i,n,a,o,l]=t;for(const c of t)this.remove(c);if(e===gn)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ps)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,n),e.setRenderTarget(r,1,i),e.render(t,a),e.setRenderTarget(r,2,i),e.render(t,o),e.setRenderTarget(r,3,i),e.render(t,l),e.setRenderTarget(r,4,i),e.render(t,c),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class eh extends Lt{constructor(e=[],t=Gi,r,i,n,a,o,l,c,h){super(e,t,r,i,n,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xu extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new eh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new qi(5,5,5),n=new Vn({name:"CubemapFromEquirect",uniforms:Wi(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zt,blending:zn});n.uniforms.tEquirect.value=t;const a=new dt(i,n),o=t.minFilter;return t.minFilter===si&&(t.minFilter=$t),new Wu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,r=!0,i=!0){const n=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,r,i);e.setRenderTarget(n)}}class ai extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qu={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,n=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,r),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,r),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&n!==null&&(i=n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qu)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ai;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Do{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=r}clone(){return new Do(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Yu extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ju extends Lt{constructor(e=null,t=1,r=1,i,n,a,o,l,c=Xt,h=Xt,u,f){super(null,a,o,l,c,h,i,n,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uo extends en{constructor(e,t,r,i=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Di=new ht,bl=new ht,jr=[],wl=new Cn,Ku=new ht,hr=new dt,ur=new Xn;class th extends dt{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new uo(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<r;i++)this.setMatrixAt(i,Ku)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Di),wl.copy(e.boundingBox).applyMatrix4(Di),this.boundingBox.union(wl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Di),ur.copy(e.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const r=t.morphTargetInfluences,i=this.morphTexture.source.data.data,n=r.length+1,a=e*n+1;for(let o=0;o<r.length;o++)r[o]=i[a+o]}raycast(e,t){const r=this.matrixWorld,i=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(r),e.ray.intersectsSphere(ur)!==!1))for(let n=0;n<i;n++){this.getMatrixAt(n,Di),bl.multiplyMatrices(r,Di),hr.matrixWorld=bl,hr.raycast(e,jr);for(let a=0,o=jr.length;a<o;a++){const l=jr[a];l.instanceId=n,l.object=this,t.push(l)}jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new uo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const r=t.morphTargetInfluences,i=r.length+1;this.morphTexture===null&&(this.morphTexture=new ju(new Float32Array(i*this.count),i,this.count,wo,mn));const n=this.morphTexture.source.data.data;let a=0;for(let c=0;c<r.length;c++)a+=r[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;n[l]=o,n.set(r,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ca=new H,Zu=new H,Ju=new Ke;class ei{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const i=ca.subVectors(r,t).cross(Zu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ca),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/i;return n<0||n>1?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Ju.getNormalMatrix(e),i=this.coplanarPoint(ca).applyMatrix4(e),n=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new Xn,Qu=new Qe(.5,.5),Kr=new H;class Lo{constructor(e=new ei,t=new ei,r=new ei,i=new ei,n=new ei,a=new ei){this.planes=[e,t,r,i,n,a]}set(e,t,r,i,n,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(i),o[4].copy(n),o[5].copy(a),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=gn,r=!1){const i=this.planes,n=e.elements,a=n[0],o=n[1],l=n[2],c=n[3],h=n[4],u=n[5],f=n[6],d=n[7],g=n[8],v=n[9],m=n[10],p=n[11],S=n[12],E=n[13],_=n[14],T=n[15];if(i[0].setComponents(c-a,d-h,p-g,T-S).normalize(),i[1].setComponents(c+a,d+h,p+g,T+S).normalize(),i[2].setComponents(c+o,d+u,p+v,T+E).normalize(),i[3].setComponents(c-o,d-u,p-v,T-E).normalize(),r)i[4].setComponents(l,f,m,_).normalize(),i[5].setComponents(c-l,d-f,p-m,T-_).normalize();else if(i[4].setComponents(c-l,d-f,p-m,T-_).normalize(),t===gn)i[5].setComponents(c+l,d+f,p+m,T+_).normalize();else if(t===ps)i[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(e){Zn.center.set(0,0,0);const t=Qu.distanceTo(e.center);return Zn.radius=.7071067811865476+t,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){const t=this.planes,r=e.center,i=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const i=t[r];if(Kr.x=i.normal.x>0?e.max.x:e.min.x,Kr.y=i.normal.y>0?e.max.y:e.min.y,Kr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nh extends mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gs=new H,vs=new H,Al=new ht,fr=new Po,Zr=new Xn,ha=new H,Rl=new H;class $u extends vt{constructor(e=new bt,t=new nh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let i=1,n=t.count;i<n;i++)gs.fromBufferAttribute(t,i-1),vs.fromBufferAttribute(t,i),r[i]=r[i-1],r[i]+=gs.distanceTo(vs);e.setAttribute("lineDistance",new at(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,i=this.matrixWorld,n=e.params.Line.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Zr.copy(r.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=n,e.ray.intersectsSphere(Zr)===!1)return;Al.copy(i).invert(),fr.copy(e.ray).applyMatrix4(Al);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=r.index,f=r.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){const p=h.getX(v),S=h.getX(v+1),E=Jr(this,e,fr,l,p,S,v);E&&t.push(E)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(d),p=Jr(this,e,fr,l,v,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){const p=Jr(this,e,fr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Jr(this,e,fr,l,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function Jr(s,e,t,r,i,n,a){const o=s.geometry.attributes.position;if(gs.fromBufferAttribute(o,i),vs.fromBufferAttribute(o,n),t.distanceSqToSegment(gs,vs,ha,Rl)>r)return;ha.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ha);if(!(c<e.near||c>e.far))return{distance:c,point:Rl.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Cl=new H,Ul=new H;class ef extends $u{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let i=0,n=t.count;i<n;i+=2)Cl.fromBufferAttribute(t,i),Ul.fromBufferAttribute(t,i+1),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+Cl.distanceTo(Ul);e.setAttribute("lineDistance",new at(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ih extends mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pl=new ht,fo=new Po,Qr=new Xn,$r=new H;class tf extends vt{constructor(e=new bt,t=new ih){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,i=this.matrixWorld,n=e.params.Points.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Qr.copy(r.boundingSphere),Qr.applyMatrix4(i),Qr.radius+=n,e.ray.intersectsSphere(Qr)===!1)return;Pl.copy(i).invert(),fo.copy(e.ray).applyMatrix4(Pl);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=r.index,u=r.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,v=d;g<v;g++){const m=c.getX(g);$r.fromBufferAttribute(u,m),Dl($r,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,v=d;g<v;g++)$r.fromBufferAttribute(u,g),Dl($r,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function Dl(s,e,t,r,i,n,a){const o=fo.distanceSqToPoint(s);if(o<t){const l=new H;fo.closestPointToPoint(s,l),l.applyMatrix4(r);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;n.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class rh extends Lt{constructor(e,t,r=fi,i,n,a,o=Xt,l=Xt,c,h=Mr,u=1){if(h!==Mr&&h!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,i,n,a,o,l,h,r,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sh extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ss extends bt{constructor(e=1,t=1,r=4,i=8,n=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:r,radialSegments:i,heightSegments:n},t=Math.max(0,t),r=Math.max(1,Math.floor(r)),i=Math.max(3,Math.floor(i)),n=Math.max(1,Math.floor(n));const a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,g=r*2+n,v=i+1,m=new H,p=new H;for(let S=0;S<=g;S++){let E=0,_=0,T=0,b=0;if(S<=r){const y=S/r,x=y*Math.PI/2;_=-h-e*Math.cos(x),T=e*Math.sin(x),b=-e*Math.cos(x),E=y*u}else if(S<=r+n){const y=(S-r)/n;_=-h+y*t,T=e,b=0,E=u+y*f}else{const y=(S-r-n)/r,x=y*Math.PI/2;_=h+e*Math.sin(x),T=e*Math.cos(x),b=e*Math.sin(x),E=u+f+y*u}const w=Math.max(0,Math.min(1,E/d));let U=0;S===0?U=.5/i:S===g&&(U=-.5/i);for(let y=0;y<=i;y++){const x=y/i,P=x*Math.PI*2,C=Math.sin(P),L=Math.cos(P);p.x=-T*L,p.y=_,p.z=T*C,o.push(p.x,p.y,p.z),m.set(-T*L,b,T*C),m.normalize(),l.push(m.x,m.y,m.z),c.push(x+U,w)}if(S>0){const y=(S-1)*v;for(let x=0;x<i;x++){const P=y+x,C=y+x+1,L=S*v+x,I=S*v+x+1;a.push(P,C,L),a.push(C,I,L)}}}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ci extends bt{constructor(e=1,t=1,r=1,i=32,n=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:i,heightSegments:n,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),n=Math.floor(n);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=r/2;let p=0;S(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(d,2));function S(){const _=new H,T=new H;let b=0;const w=(t-e)/r;for(let U=0;U<=n;U++){const y=[],x=U/n,P=x*(t-e)+e;for(let C=0;C<=i;C++){const L=C/i,I=L*l+o,V=Math.sin(I),k=Math.cos(I);T.x=P*V,T.y=-x*r+m,T.z=P*k,u.push(T.x,T.y,T.z),_.set(V,w,k).normalize(),f.push(_.x,_.y,_.z),d.push(L,1-x),y.push(g++)}v.push(y)}for(let U=0;U<i;U++)for(let y=0;y<n;y++){const x=v[y][U],P=v[y+1][U],C=v[y+1][U+1],L=v[y][U+1];(e>0||y!==0)&&(h.push(x,P,L),b+=3),(t>0||y!==n-1)&&(h.push(P,C,L),b+=3)}c.addGroup(p,b,0),p+=b}function E(_){const T=g,b=new Qe,w=new H;let U=0;const y=_===!0?e:t,x=_===!0?1:-1;for(let C=1;C<=i;C++)u.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),g++;const P=g;for(let C=0;C<=i;C++){const I=C/i*l+o,V=Math.cos(I),k=Math.sin(I);w.x=y*k,w.y=m*x,w.z=y*V,u.push(w.x,w.y,w.z),f.push(0,x,0),b.x=V*.5+.5,b.y=k*.5*x+.5,d.push(b.x,b.y),g++}for(let C=0;C<i;C++){const L=T+C,I=P+C;_===!0?h.push(I,I+1,L):h.push(I+1,I,L),U+=3}c.addGroup(p,U,_===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Io extends ci{constructor(e=1,t=1,r=32,i=1,n=!1,a=0,o=Math.PI*2){super(0,e,t,r,i,n,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:i,openEnded:n,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Io(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fo extends bt{constructor(e=[],t=[],r=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:i};const n=[],a=[];o(i),c(r),h(),this.setAttribute("position",new at(n,3)),this.setAttribute("normal",new at(n.slice(),3)),this.setAttribute("uv",new at(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const E=new H,_=new H,T=new H;for(let b=0;b<t.length;b+=3)d(t[b+0],E),d(t[b+1],_),d(t[b+2],T),l(E,_,T,S)}function l(S,E,_,T){const b=T+1,w=[];for(let U=0;U<=b;U++){w[U]=[];const y=S.clone().lerp(_,U/b),x=E.clone().lerp(_,U/b),P=b-U;for(let C=0;C<=P;C++)C===0&&U===b?w[U][C]=y:w[U][C]=y.clone().lerp(x,C/P)}for(let U=0;U<b;U++)for(let y=0;y<2*(b-U)-1;y++){const x=Math.floor(y/2);y%2===0?(f(w[U][x+1]),f(w[U+1][x]),f(w[U][x])):(f(w[U][x+1]),f(w[U+1][x+1]),f(w[U+1][x]))}}function c(S){const E=new H;for(let _=0;_<n.length;_+=3)E.x=n[_+0],E.y=n[_+1],E.z=n[_+2],E.normalize().multiplyScalar(S),n[_+0]=E.x,n[_+1]=E.y,n[_+2]=E.z}function h(){const S=new H;for(let E=0;E<n.length;E+=3){S.x=n[E+0],S.y=n[E+1],S.z=n[E+2];const _=m(S)/2/Math.PI+.5,T=p(S)/Math.PI+.5;a.push(_,1-T)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){const E=a[S+0],_=a[S+2],T=a[S+4],b=Math.max(E,_,T),w=Math.min(E,_,T);b>.9&&w<.1&&(E<.2&&(a[S+0]+=1),_<.2&&(a[S+2]+=1),T<.2&&(a[S+4]+=1))}}function f(S){n.push(S.x,S.y,S.z)}function d(S,E){const _=S*3;E.x=e[_+0],E.y=e[_+1],E.z=e[_+2]}function g(){const S=new H,E=new H,_=new H,T=new H,b=new Qe,w=new Qe,U=new Qe;for(let y=0,x=0;y<n.length;y+=9,x+=6){S.set(n[y+0],n[y+1],n[y+2]),E.set(n[y+3],n[y+4],n[y+5]),_.set(n[y+6],n[y+7],n[y+8]),b.set(a[x+0],a[x+1]),w.set(a[x+2],a[x+3]),U.set(a[x+4],a[x+5]),T.copy(S).add(E).add(_).divideScalar(3);const P=m(T);v(b,x+0,S,P),v(w,x+2,E,P),v(U,x+4,_,P)}}function v(S,E,_,T){T<0&&S.x===1&&(a[E]=S.x-1),_.x===0&&_.z===0&&(a[E]=T/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.vertices,e.indices,e.radius,e.details)}}class No extends Fo{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,i=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,n,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new No(e.radius,e.detail)}}class qn extends bt{constructor(e=1,t=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};const n=e/2,a=t/2,o=Math.floor(r),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const S=p*f-a;for(let E=0;E<c;E++){const _=E*u-n;g.push(_,-S,0),v.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const E=S+c*p,_=S+c*(p+1),T=S+1+c*(p+1),b=S+1+c*p;d.push(E,_,b),d.push(_,T,b)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(v,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Es extends bt{constructor(e=.5,t=1,r=32,i=1,n=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:i,thetaStart:n,thetaLength:a},r=Math.max(3,r),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const f=(t-e)/i,d=new H,g=new Qe;for(let v=0;v<=i;v++){for(let m=0;m<=r;m++){const p=n+m/r*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<i;v++){const m=v*(r+1);for(let p=0;p<r;p++){const S=p+m,E=S,_=S+r+1,T=S+r+2,b=S+1;o.push(E,_,b),o.push(_,T,b)}}this.setIndex(o),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Oo extends bt{constructor(e=1,t=32,r=16,i=0,n=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:i,phiLength:n,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new H,f=new H,d=[],g=[],v=[],m=[];for(let p=0;p<=r;p++){const S=[],E=p/r;let _=0;p===0&&a===0?_=.5/t:p===r&&l===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){const b=T/t;u.x=-e*Math.cos(i+b*n)*Math.sin(a+E*o),u.y=e*Math.cos(a+E*o),u.z=e*Math.sin(i+b*n)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(b+_,1-E),S.push(c++)}h.push(S)}for(let p=0;p<r;p++)for(let S=0;S<t;S++){const E=h[p][S+1],_=h[p][S],T=h[p+1][S],b=h[p+1][S+1];(p!==0||a>0)&&d.push(E,_,b),(p!==r-1||l<Math.PI)&&d.push(_,T,b)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(v,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _s extends bt{constructor(e=1,t=.4,r=12,i=48,n=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:i,arc:n},r=Math.floor(r),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new H,u=new H,f=new H;for(let d=0;d<=r;d++)for(let g=0;g<=i;g++){const v=g/i*n,m=d/r*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/r)}for(let d=1;d<=r;d++)for(let g=1;g<=i;g++){const v=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,S=(i+1)*d+g;a.push(v,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class oi extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ah extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oh extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ts extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class nf extends Ts{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ua=new ht,Ll=new H,Il=new H;class lh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lo,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Ll.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ll),Il.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Il),t.updateMatrixWorld(),ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fl=new ht,dr=new H,fa=new H;class rf extends lh{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,i=this.matrix,n=e.distance||r.far;n!==r.far&&(r.far=n,r.updateProjectionMatrix()),dr.setFromMatrixPosition(e.matrixWorld),r.position.copy(dr),fa.copy(r.position),fa.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(fa),r.updateMatrixWorld(),i.makeTranslation(-dr.x,-dr.y,-dr.z),Fl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl,r.coordinateSystem,r.reversedDepth)}}class Nl extends Ts{constructor(e,t,r=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=i,this.shadow=new rf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ch extends $c{constructor(e=-1,t=1,r=1,i=-1,n=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=n,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,n,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let n=r-e,a=r+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,a=n+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(n,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sf extends lh{constructor(){super(new ch(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class af extends Ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new sf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class of extends Ts{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class lf extends bt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class cf extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class hf extends ef{constructor(e=10,t=10,r=4473924,i=8947848){r=new je(r),i=new je(i);const n=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,d=0,g=-o;f<=t;f++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=f===n?r:i;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}const h=new bt;h.setAttribute("position",new at(l,3)),h.setAttribute("color",new at(c,3));const u=new nh({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ol(s,e,t,r){const i=uf(r);switch(t){case Bc:return s*e;case wo:return s*e/i.components*i.byteLength;case Ao:return s*e/i.components*i.byteLength;case zc:return s*e*2/i.components*i.byteLength;case Ro:return s*e*2/i.components*i.byteLength;case kc:return s*e*3/i.components*i.byteLength;case hn:return s*e*4/i.components*i.byteLength;case Co:return s*e*4/i.components*i.byteLength;case as:case os:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ls:case cs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oa:case ka:return Math.max(s,16)*Math.max(e,8)/4;case Na:case Ba:return Math.max(s,8)*Math.max(e,8)/2;case za:case Ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ha:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case qa:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ja:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Za:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $a:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case eo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case to:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case no:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case io:case ro:case so:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ao:case oo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case lo:case co:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uf(s){switch(s){case vn:case Ic:return{byteLength:1,components:1};case xr:case Fc:case Tr:return{byteLength:2,components:1};case To:case bo:return{byteLength:2,components:4};case fi:case Eo:case mn:return{byteLength:4,components:1};case Nc:case Oc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:So}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=So);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hh(){let s=null,e=!1,t=null,r=null;function i(n,a){t(n,a),r=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){s=n}}}function ff(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function r(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:i,remove:n,update:a}}var df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pf=`#ifdef USE_ALPHAHASH
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
#endif`,mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xf=`#ifdef USE_AOMAP
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
#endif`,yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mf=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Af=`#ifdef USE_BUMPMAP
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Nf=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Of=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bf=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ed=`#ifdef USE_GRADIENTMAP
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
}`,td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rd=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,sd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ud=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fd=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,md=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sd=`#if defined( USE_POINTS_UV )
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
#endif`,Ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rd=`#ifdef USE_MORPHTARGETS
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
#endif`,Cd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fd=`#ifdef USE_NORMALMAP
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
#endif`,Nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Zd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Jd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$d=`#ifdef USE_SKINNING
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
#endif`,ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ip=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ap=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,op=`#ifdef USE_TRANSMISSION
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dp=`uniform sampler2D t2D;
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
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`#include <common>
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
}`,xp=`#if DEPTH_PACKING == 3200
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
}`,yp=`#define DISTANCE
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
}`,Mp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`uniform float scale;
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
}`,bp=`uniform vec3 diffuse;
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
}`,wp=`#include <common>
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Rp=`#define LAMBERT
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
}`,Cp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Up=`#define MATCAP
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
}`,Pp=`#define MATCAP
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
}`,Dp=`#define NORMAL
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
}`,Lp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ip=`#define PHONG
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
}`,Fp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Np=`#define STANDARD
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
}`,Op=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Bp=`#define TOON
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
}`,kp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,zp=`uniform float size;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Hp=`#include <common>
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
}`,Vp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Wp=`uniform float rotation;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:df,alphahash_pars_fragment:pf,alphamap_fragment:mf,alphamap_pars_fragment:gf,alphatest_fragment:vf,alphatest_pars_fragment:_f,aomap_fragment:xf,aomap_pars_fragment:yf,batching_pars_vertex:Mf,batching_vertex:Sf,begin_vertex:Ef,beginnormal_vertex:Tf,bsdfs:bf,iridescence_fragment:wf,bumpmap_pars_fragment:Af,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Uf,clipping_planes_vertex:Pf,color_fragment:Df,color_pars_fragment:Lf,color_pars_vertex:If,color_vertex:Ff,common:Nf,cube_uv_reflection_fragment:Of,defaultnormal_vertex:Bf,displacementmap_pars_vertex:kf,displacementmap_vertex:zf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Hf,colorspace_fragment:Vf,colorspace_pars_fragment:Wf,envmap_fragment:Xf,envmap_common_pars_fragment:qf,envmap_pars_fragment:Yf,envmap_pars_vertex:jf,envmap_physical_pars_fragment:sd,envmap_vertex:Kf,fog_vertex:Zf,fog_pars_vertex:Jf,fog_fragment:Qf,fog_pars_fragment:$f,gradientmap_pars_fragment:ed,lightmap_pars_fragment:td,lights_lambert_fragment:nd,lights_lambert_pars_fragment:id,lights_pars_begin:rd,lights_toon_fragment:ad,lights_toon_pars_fragment:od,lights_phong_fragment:ld,lights_phong_pars_fragment:cd,lights_physical_fragment:hd,lights_physical_pars_fragment:ud,lights_fragment_begin:fd,lights_fragment_maps:dd,lights_fragment_end:pd,logdepthbuf_fragment:md,logdepthbuf_pars_fragment:gd,logdepthbuf_pars_vertex:vd,logdepthbuf_vertex:_d,map_fragment:xd,map_pars_fragment:yd,map_particle_fragment:Md,map_particle_pars_fragment:Sd,metalnessmap_fragment:Ed,metalnessmap_pars_fragment:Td,morphinstance_vertex:bd,morphcolor_vertex:wd,morphnormal_vertex:Ad,morphtarget_pars_vertex:Rd,morphtarget_vertex:Cd,normal_fragment_begin:Ud,normal_fragment_maps:Pd,normal_pars_fragment:Dd,normal_pars_vertex:Ld,normal_vertex:Id,normalmap_pars_fragment:Fd,clearcoat_normal_fragment_begin:Nd,clearcoat_normal_fragment_maps:Od,clearcoat_pars_fragment:Bd,iridescence_pars_fragment:kd,opaque_fragment:zd,packing:Gd,premultiplied_alpha_fragment:Hd,project_vertex:Vd,dithering_fragment:Wd,dithering_pars_fragment:Xd,roughnessmap_fragment:qd,roughnessmap_pars_fragment:Yd,shadowmap_pars_fragment:jd,shadowmap_pars_vertex:Kd,shadowmap_vertex:Zd,shadowmask_pars_fragment:Jd,skinbase_vertex:Qd,skinning_pars_vertex:$d,skinning_vertex:ep,skinnormal_vertex:tp,specularmap_fragment:np,specularmap_pars_fragment:ip,tonemapping_fragment:rp,tonemapping_pars_fragment:sp,transmission_fragment:ap,transmission_pars_fragment:op,uv_pars_fragment:lp,uv_pars_vertex:cp,uv_vertex:hp,worldpos_vertex:up,background_vert:fp,background_frag:dp,backgroundCube_vert:pp,backgroundCube_frag:mp,cube_vert:gp,cube_frag:vp,depth_vert:_p,depth_frag:xp,distanceRGBA_vert:yp,distanceRGBA_frag:Mp,equirect_vert:Sp,equirect_frag:Ep,linedashed_vert:Tp,linedashed_frag:bp,meshbasic_vert:wp,meshbasic_frag:Ap,meshlambert_vert:Rp,meshlambert_frag:Cp,meshmatcap_vert:Up,meshmatcap_frag:Pp,meshnormal_vert:Dp,meshnormal_frag:Lp,meshphong_vert:Ip,meshphong_frag:Fp,meshphysical_vert:Np,meshphysical_frag:Op,meshtoon_vert:Bp,meshtoon_frag:kp,points_vert:zp,points_frag:Gp,shadow_vert:Hp,shadow_frag:Vp,sprite_vert:Wp,sprite_frag:Xp},De={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},dn={basic:{uniforms:It([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:It([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new je(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:It([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:It([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:It([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new je(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:It([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:It([De.points,De.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:It([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:It([De.common,De.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:It([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:It([De.sprite,De.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:It([De.common,De.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:It([De.lights,De.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};dn.physical={uniforms:It([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const es={r:0,b:0,g:0},Jn=new _n,qp=new ht;function Yp(s,e,t,r,i,n,a){const o=new je(0);let l=n===!0?0:1,c,h,u=null,f=0,d=null;function g(E){let _=E.isScene===!0?E.background:null;return _&&_.isTexture&&(_=(E.backgroundBlurriness>0?t:e).get(_)),_}function v(E){let _=!1;const T=g(E);T===null?p(o,l):T&&T.isColor&&(p(T,1),_=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?r.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,_){const T=g(_);T&&(T.isCubeTexture||T.mapping===Ms)?(h===void 0&&(h=new dt(new qi(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Wi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Jn.copy(_.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qp.makeRotationFromEuler(Jn)),h.material.toneMapped=nt.getTransfer(T.colorSpace)!==ct,(u!==T||f!==T.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,d=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new dt(new qn(2,2),new Vn({name:"BackgroundMaterial",uniforms:Wi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=nt.getTransfer(T.colorSpace)!==ct,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,d=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,_){E.getRGB(es,Jc(s)),r.buffers.color.setClear(es.r,es.g,es.b,_,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,_=1){o.set(E),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:v,addToRenderList:m,dispose:S}}function jp(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},i=f(null);let n=i,a=!1;function o(x,P,C,L,I){let V=!1;const k=u(L,C,P);n!==k&&(n=k,c(n.object)),V=d(x,L,C,I),V&&g(x,L,C,I),I!==null&&e.update(I,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,_(x,P,C,L),I!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,P,C){const L=C.wireframe===!0;let I=r[x.id];I===void 0&&(I={},r[x.id]=I);let V=I[P.id];V===void 0&&(V={},I[P.id]=V);let k=V[L];return k===void 0&&(k=f(l()),V[L]=k),k}function f(x){const P=[],C=[],L=[];for(let I=0;I<t;I++)P[I]=0,C[I]=0,L[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:C,attributeDivisors:L,object:x,attributes:{},index:null}}function d(x,P,C,L){const I=n.attributes,V=P.attributes;let k=0;const ne=C.getAttributes();for(const X in ne)if(ne[X].location>=0){const j=I[X];let F=V[X];if(F===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(F=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(F=x.instanceColor)),j===void 0||j.attribute!==F||F&&j.data!==F.data)return!0;k++}return n.attributesNum!==k||n.index!==L}function g(x,P,C,L){const I={},V=P.attributes;let k=0;const ne=C.getAttributes();for(const X in ne)if(ne[X].location>=0){let j=V[X];j===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(j=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(j=x.instanceColor));const F={};F.attribute=j,j&&j.data&&(F.data=j.data),I[X]=F,k++}n.attributes=I,n.attributesNum=k,n.index=L}function v(){const x=n.newAttributes;for(let P=0,C=x.length;P<C;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){const C=n.newAttributes,L=n.enabledAttributes,I=n.attributeDivisors;C[x]=1,L[x]===0&&(s.enableVertexAttribArray(x),L[x]=1),I[x]!==P&&(s.vertexAttribDivisor(x,P),I[x]=P)}function S(){const x=n.newAttributes,P=n.enabledAttributes;for(let C=0,L=P.length;C<L;C++)P[C]!==x[C]&&(s.disableVertexAttribArray(C),P[C]=0)}function E(x,P,C,L,I,V,k){k===!0?s.vertexAttribIPointer(x,P,C,I,V):s.vertexAttribPointer(x,P,C,L,I,V)}function _(x,P,C,L){v();const I=L.attributes,V=C.getAttributes(),k=P.defaultAttributeValues;for(const ne in V){const X=V[ne];if(X.location>=0){let K=I[ne];if(K===void 0&&(ne==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),ne==="instanceColor"&&x.instanceColor&&(K=x.instanceColor)),K!==void 0){const j=K.normalized,F=K.itemSize,W=e.get(K);if(W===void 0)continue;const $=W.buffer,te=W.type,Z=W.bytesPerElement,G=te===s.INT||te===s.UNSIGNED_INT||K.gpuType===Eo;if(K.isInterleavedBufferAttribute){const z=K.data,J=z.stride,pe=K.offset;if(z.isInstancedInterleavedBuffer){for(let me=0;me<X.locationSize;me++)p(X.location+me,z.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let me=0;me<X.locationSize;me++)m(X.location+me);s.bindBuffer(s.ARRAY_BUFFER,$);for(let me=0;me<X.locationSize;me++)E(X.location+me,F/X.locationSize,te,j,J*Z,(pe+F/X.locationSize*me)*Z,G)}else{if(K.isInstancedBufferAttribute){for(let z=0;z<X.locationSize;z++)p(X.location+z,K.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let z=0;z<X.locationSize;z++)m(X.location+z);s.bindBuffer(s.ARRAY_BUFFER,$);for(let z=0;z<X.locationSize;z++)E(X.location+z,F/X.locationSize,te,j,F*Z,F/X.locationSize*z*Z,G)}}else if(k!==void 0){const j=k[ne];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(X.location,j);break;case 3:s.vertexAttrib3fv(X.location,j);break;case 4:s.vertexAttrib4fv(X.location,j);break;default:s.vertexAttrib1fv(X.location,j)}}}}S()}function T(){U();for(const x in r){const P=r[x];for(const C in P){const L=P[C];for(const I in L)h(L[I].object),delete L[I];delete P[C]}delete r[x]}}function b(x){if(r[x.id]===void 0)return;const P=r[x.id];for(const C in P){const L=P[C];for(const I in L)h(L[I].object),delete L[I];delete P[C]}delete r[x.id]}function w(x){for(const P in r){const C=r[P];if(C[x.id]===void 0)continue;const L=C[x.id];for(const I in L)h(L[I].object),delete L[I];delete C[x.id]}}function U(){y(),a=!0,n!==i&&(n=i,c(n.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:U,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Kp(s,e,t){let r;function i(c){r=c}function n(c,h){s.drawArrays(r,c,h),t.update(h,r,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(r,c,h,u),t.update(h,r,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,r,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(r,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,r,1)}}this.setMode=i,this.render=n,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zp(s,e,t,r){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==hn&&r.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const U=w===Tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==vn&&r.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==mn&&!U)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:_,vertexTextures:T,maxSamples:b}}function Jp(s){const e=this;let t=null,r=0,i=!1,n=!1;const a=new ei,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||r!==0||i;return i=f,r=u.length,d},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||n&&!m)n?h(null):c();else{const S=n?0:r,E=S*4;let _=p.clippingState||null;l.value=_,_=h(g,f,E,d);for(let T=0;T!==E;++T)_[T]=t[T];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,_=d;E!==v;++E,_+=4)a.copy(u[E]).applyMatrix4(S,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Qp(s){let e=new WeakMap;function t(a,o){return o===Da?a.mapping=Gi:o===La&&(a.mapping=Hi),a}function r(a){if(a&&a.isTexture){const o=a.mapping;if(o===Da||o===La)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xu(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function n(){e=new WeakMap}return{get:r,dispose:n}}const Oi=4,Bl=[.125,.215,.35,.446,.526,.582],ii=20,da=new ch,kl=new je;let pa=null,ma=0,ga=0,va=!1;const ti=(1+Math.sqrt(5))/2,Li=1/ti,zl=[new H(-ti,Li,0),new H(ti,Li,0),new H(-Li,0,ti),new H(Li,0,ti),new H(0,ti,-Li),new H(0,ti,Li),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],$p=new H;class Gl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100,n={}){const{size:a=256,position:o=$p}=n;pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pa,ma,ga),this._renderer.xr.enabled=va,e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Tr,format:hn,colorSpace:Vi,depthBuffer:!1},i=Hl(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hl(e,t,r);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=em(n)),this._blurMaterial=tm(n,e,t)}return i}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,da)}_sceneToCubeUV(e,t,r,i,n){const l=new Wt(90,1,t,r),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(kl),u.toneMapping=Gn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const v=new An({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),m=new dt(new qi,v);let p=!1;const S=e.background;S?S.isColor&&(v.color.copy(S),e.background=null,p=!0):(v.color.copy(kl),p=!0);for(let E=0;E<6;E++){const _=E%3;_===0?(l.up.set(0,c[E],0),l.position.set(n.x,n.y,n.z),l.lookAt(n.x+h[E],n.y,n.z)):_===1?(l.up.set(0,0,c[E]),l.position.set(n.x,n.y,n.z),l.lookAt(n.x,n.y+h[E],n.z)):(l.up.set(0,c[E],0),l.position.set(n.x,n.y,n.z),l.lookAt(n.x,n.y,n.z+h[E]));const T=this._cubeSize;ts(i,_*T,E>2?T:0,T,T),u.setRenderTarget(i),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,i=e.mapping===Gi||e.mapping===Hi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vl());const n=i?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],n),o=n.uniforms;o.envMap.value=e;const l=this._cubeSize;ts(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(a,da)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let n=1;n<i;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=zl[(i-n-1)%zl.length];this._blur(e,n-1,n,a,o)}t.autoClear=r}_blur(e,t,r,i,n){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,r,i,"latitudinal",n),this._halfBlur(a,e,r,r,i,"longitudinal",n)}_halfBlur(e,t,r,i,n,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new dt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[r]-1,g=isFinite(n)?Math.PI/(2*d):2*Math.PI/(2*ii-1),v=n/g,m=isFinite(n)?1+Math.floor(h*v):ii;m>ii&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ii}`);const p=[];let S=0;for(let w=0;w<ii;++w){const U=w/v,y=Math.exp(-U*U/2);p.push(y),w===0?S+=y:w<m&&(S+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-r;const _=this._sizeLods[i],T=3*_*(i>E-Oi?i-E+Oi:0),b=4*(this._cubeSize-_);ts(t,T,b,3*_,2*_),l.setRenderTarget(t),l.render(u,da)}}function em(s){const e=[],t=[],r=[];let i=s;const n=s-Oi+1+Bl.length;for(let a=0;a<n;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Oi?l=Bl[a-s+Oi-1]:a===0&&(l=0),r.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*d),E=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let b=0;b<d;b++){const w=b%3*2/3-1,U=b>2?0:-1,y=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];S.set(y,v*g*b),E.set(f,m*g*b);const x=[b,b,b,b,b,b];_.set(x,p*g*b)}const T=new bt;T.setAttribute("position",new en(S,v)),T.setAttribute("uv",new en(E,m)),T.setAttribute("faceIndex",new en(_,p)),e.push(T),i>Oi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Hl(s,e,t){const r=new pi(s,e,t);return r.texture.mapping=Ms,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ts(s,e,t,r,i){s.viewport.set(e,t,r,i),s.scissor.set(e,t,r,i)}function tm(s,e,t){const r=new Float32Array(ii),i=new H(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Vl(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Wl(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Bo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nm(s){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===Da||l===La,h=l===Gi||l===Hi;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Gl(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Gl(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",n),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function n(o){const l=o.target;l.removeEventListener("dispose",n);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:a}}function im(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(r)}return e[r]=i,i}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const i=t(r);return i===null&&Er("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function rm(s,e,t,r){const i={},n=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const d=n.get(f);d&&(e.remove(d),n.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const S=d.array;v=d.version;for(let E=0,_=S.length;E<_;E+=3){const T=S[E+0],b=S[E+1],w=S[E+2];f.push(T,b,b,w,w,T)}}else if(g!==void 0){const S=g.array;v=g.version;for(let E=0,_=S.length/3-1;E<_;E+=3){const T=E+0,b=E+1,w=E+2;f.push(T,b,b,w,w,T)}}else return;const m=new(Xc(f)?Zc:Kc)(f,1);m.version=v;const p=n.get(u);p&&e.remove(p),n.set(u,m)}function h(u){const f=n.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return n.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function sm(s,e,t){let r;function i(f){r=f}let n,a;function o(f){n=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(r,d,n,f*a),t.update(d,r,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(r,d,n,f*a,g),t.update(d,r,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,n,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,r,1)}function u(f,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(r,d,0,n,f,0,v,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*v[S];t.update(p,r,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function am(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(n/3);break;case s.LINES:t.lines+=o*(n/2);break;case s.LINE_STRIP:t.lines+=o*(n-1);break;case s.LINE_LOOP:t.lines+=o*n;break;case s.POINTS:t.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:r}}function om(s,e,t){const r=new WeakMap,i=new st;function n(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=r.get(o);if(f===void 0||f.count!==u){let y=function(){w.dispose(),r.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let E=0;d===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let _=o.attributes.position.count*E,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const b=new Float32Array(_*T*4*u),w=new qc(b,_,T,u);w.type=mn,w.needsUpdate=!0;const U=E*4;for(let x=0;x<u;x++){const P=m[x],C=p[x],L=S[x],I=_*T*4*x;for(let V=0;V<P.count;V++){const k=V*U;d===!0&&(i.fromBufferAttribute(P,V),b[I+k+0]=i.x,b[I+k+1]=i.y,b[I+k+2]=i.z,b[I+k+3]=0),g===!0&&(i.fromBufferAttribute(C,V),b[I+k+4]=i.x,b[I+k+5]=i.y,b[I+k+6]=i.z,b[I+k+7]=0),v===!0&&(i.fromBufferAttribute(L,V),b[I+k+8]=i.x,b[I+k+9]=i.y,b[I+k+10]=i.z,b[I+k+11]=L.itemSize===4?i.w:1)}}f={count:u,texture:w,size:new Qe(_,T)},r.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:n}}function lm(s,e,t,r){let i=new WeakMap;function n(l){const c=r.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:a}}const uh=new Lt,Xl=new rh(1,1),fh=new qc,dh=new Cu,ph=new eh,ql=[],Yl=[],jl=new Float32Array(16),Kl=new Float32Array(9),Zl=new Float32Array(4);function Yi(s,e,t){const r=s[0];if(r<=0||r>0)return s;const i=e*t;let n=ql[i];if(n===void 0&&(n=new Float32Array(i),ql[i]=n),e!==0){r.toArray(n,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(n,o)}return n}function Et(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Tt(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function bs(s,e){let t=Yl[e];t===void 0&&(t=new Int32Array(e),Yl[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function cm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function hm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2fv(this.addr,e),Tt(t,e)}}function um(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;s.uniform3fv(this.addr,e),Tt(t,e)}}function fm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4fv(this.addr,e),Tt(t,e)}}function dm(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Et(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,r))return;Zl.set(r),s.uniformMatrix2fv(this.addr,!1,Zl),Tt(t,r)}}function pm(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Et(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,r))return;Kl.set(r),s.uniformMatrix3fv(this.addr,!1,Kl),Tt(t,r)}}function mm(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Et(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,r))return;jl.set(r),s.uniformMatrix4fv(this.addr,!1,jl),Tt(t,r)}}function gm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function vm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2iv(this.addr,e),Tt(t,e)}}function _m(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3iv(this.addr,e),Tt(t,e)}}function xm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4iv(this.addr,e),Tt(t,e)}}function ym(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Mm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2uiv(this.addr,e),Tt(t,e)}}function Sm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3uiv(this.addr,e),Tt(t,e)}}function Em(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4uiv(this.addr,e),Tt(t,e)}}function Tm(s,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(s.uniform1i(this.addr,i),r[0]=i);let n;this.type===s.SAMPLER_2D_SHADOW?(Xl.compareFunction=Vc,n=Xl):n=uh,t.setTexture2D(e||n,i)}function bm(s,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(s.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(e||dh,i)}function wm(s,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(s.uniform1i(this.addr,i),r[0]=i),t.setTextureCube(e||ph,i)}function Am(s,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(s.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(e||fh,i)}function Rm(s){switch(s){case 5126:return cm;case 35664:return hm;case 35665:return um;case 35666:return fm;case 35674:return dm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return vm;case 35668:case 35672:return _m;case 35669:case 35673:return xm;case 5125:return ym;case 36294:return Mm;case 36295:return Sm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Am}}function Cm(s,e){s.uniform1fv(this.addr,e)}function Um(s,e){const t=Yi(e,this.size,2);s.uniform2fv(this.addr,t)}function Pm(s,e){const t=Yi(e,this.size,3);s.uniform3fv(this.addr,t)}function Dm(s,e){const t=Yi(e,this.size,4);s.uniform4fv(this.addr,t)}function Lm(s,e){const t=Yi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Im(s,e){const t=Yi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Fm(s,e){const t=Yi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Nm(s,e){s.uniform1iv(this.addr,e)}function Om(s,e){s.uniform2iv(this.addr,e)}function Bm(s,e){s.uniform3iv(this.addr,e)}function km(s,e){s.uniform4iv(this.addr,e)}function zm(s,e){s.uniform1uiv(this.addr,e)}function Gm(s,e){s.uniform2uiv(this.addr,e)}function Hm(s,e){s.uniform3uiv(this.addr,e)}function Vm(s,e){s.uniform4uiv(this.addr,e)}function Wm(s,e,t){const r=this.cache,i=e.length,n=bs(t,i);Et(r,n)||(s.uniform1iv(this.addr,n),Tt(r,n));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||uh,n[a])}function Xm(s,e,t){const r=this.cache,i=e.length,n=bs(t,i);Et(r,n)||(s.uniform1iv(this.addr,n),Tt(r,n));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||dh,n[a])}function qm(s,e,t){const r=this.cache,i=e.length,n=bs(t,i);Et(r,n)||(s.uniform1iv(this.addr,n),Tt(r,n));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ph,n[a])}function Ym(s,e,t){const r=this.cache,i=e.length,n=bs(t,i);Et(r,n)||(s.uniform1iv(this.addr,n),Tt(r,n));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||fh,n[a])}function jm(s){switch(s){case 5126:return Cm;case 35664:return Um;case 35665:return Pm;case 35666:return Dm;case 35674:return Lm;case 35675:return Im;case 35676:return Fm;case 5124:case 35670:return Nm;case 35667:case 35671:return Om;case 35668:case 35672:return Bm;case 35669:case 35673:return km;case 5125:return zm;case 36294:return Gm;case 36295:return Hm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}class Km{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Rm(t.type)}}class Zm{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jm(t.type)}}class Jm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const i=this.seq;for(let n=0,a=i.length;n!==a;++n){const o=i[n];o.setValue(e,t[o.id],r)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function Jl(s,e){s.seq.push(e),s.map[e.id]=e}function Qm(s,e,t){const r=s.name,i=r.length;for(_a.lastIndex=0;;){const n=_a.exec(r),a=_a.lastIndex;let o=n[1];const l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Jl(t,c===void 0?new Km(o,s,e):new Zm(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Jm(o),Jl(t,u)),t=u}}}class hs{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const n=e.getActiveUniform(t,i),a=e.getUniformLocation(t,n.name);Qm(n,a,this)}}setValue(e,t,r,i){const n=this.map[t];n!==void 0&&n.setValue(e,r,i)}setOptional(e,t,r){const i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let n=0,a=t.length;n!==a;++n){const o=t[n],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const r=[];for(let i=0,n=e.length;i!==n;++i){const a=e[i];a.id in t&&r.push(a)}return r}}function Ql(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const $m=37297;let eg=0;function tg(s,e){const t=s.split(`
`),r=[],i=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let a=i;a<n;a++){const o=a+1;r.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return r.join(`
`)}const $l=new Ke;function ng(s){nt._getMatrix($l,nt.workingColorSpace,s);const e=`mat3( ${$l.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(s)){case ds:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ec(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),n=(s.getShaderInfoLog(e)||"").trim();if(r&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+tg(s.getShaderSource(e),o)}else return n}function ig(s,e){const t=ng(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rg(s,e){let t;switch(e){case ru:t="Linear";break;case su:t="Reinhard";break;case au:t="Cineon";break;case ou:t="ACESFilmic";break;case cu:t="AgX";break;case hu:t="Neutral";break;case lu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ns=new H;function sg(){nt.getLuminanceCoefficients(ns);const s=ns.x.toFixed(4),e=ns.y.toFixed(4),t=ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ag(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function og(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function lg(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const n=s.getActiveAttrib(e,i),a=n.name;let o=1;n.type===s.FLOAT_MAT2&&(o=2),n.type===s.FLOAT_MAT3&&(o=3),n.type===s.FLOAT_MAT4&&(o=4),t[a]={type:n.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function mr(s){return s!==""}function tc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(s){return s.replace(cg,ug)}const hg=new Map;function ug(s,e){let t=Je[e];if(t===void 0){const r=hg.get(e);if(r!==void 0)t=Je[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return po(t)}const fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(s){return s.replace(fg,dg)}function dg(s,e,t,r){let i="";for(let n=parseInt(e);n<parseInt(t);n++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return i}function rc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Uc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Pc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function mg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gi:case Hi:e="ENVMAP_TYPE_CUBE";break;case Ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Hi:e="ENVMAP_MODE_REFRACTION";break}return e}function vg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Dc:e="ENVMAP_BLENDING_MULTIPLY";break;case nu:e="ENVMAP_BLENDING_MIX";break;case iu:e="ENVMAP_BLENDING_ADD";break}return e}function _g(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function xg(s,e,t,r){const i=s.getContext(),n=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=pg(t),c=mg(t),h=gg(t),u=vg(t),f=_g(t),d=ag(t),g=og(n),v=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),p.length>0&&(p+=`
`)):(m=[rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),p=[rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?Je.tonemapping_pars_fragment:"",t.toneMapping!==Gn?rg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,ig("linearToOutputTexel",t.outputColorSpace),sg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=po(a),a=tc(a,t),a=nc(a,t),o=po(o),o=tc(o,t),o=nc(o,t),a=ic(a),o=ic(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=S+m+a,_=S+p+o,T=Ql(i,i.VERTEX_SHADER,E),b=Ql(i,i.FRAGMENT_SHADER,_);i.attachShader(v,T),i.attachShader(v,b),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function w(P){if(s.debug.checkShaderErrors){const C=i.getProgramInfoLog(v)||"",L=i.getShaderInfoLog(T)||"",I=i.getShaderInfoLog(b)||"",V=C.trim(),k=L.trim(),ne=I.trim();let X=!0,K=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,T,b);else{const j=ec(i,T,"vertex"),F=ec(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+j+`
`+F)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(k===""||ne==="")&&(K=!1);K&&(P.diagnostics={runnable:X,programLog:V,vertexShader:{log:k,prefix:m},fragmentShader:{log:ne,prefix:p}})}i.deleteShader(T),i.deleteShader(b),U=new hs(i,v),y=lg(i,v)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(v,$m)),x},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=b,this}let yg=0;class Mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),n=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Sg(e),t.set(e,r)),r}}class Sg{constructor(e){this.id=yg++,this.code=e,this.usedTimes=0}}function Eg(s,e,t,r,i,n,a){const o=new Yc,l=new Mg,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,P,C,L){const I=C.fog,V=L.geometry,k=y.isMeshStandardMaterial?C.environment:null,ne=(y.isMeshStandardMaterial?t:e).get(y.envMap||k),X=ne&&ne.mapping===Ms?ne.image.height:null,K=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const j=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,F=j!==void 0?j.length:0;let W=0;V.morphAttributes.position!==void 0&&(W=1),V.morphAttributes.normal!==void 0&&(W=2),V.morphAttributes.color!==void 0&&(W=3);let $,te,Z,G;if(K){const Ve=dn[K];$=Ve.vertexShader,te=Ve.fragmentShader}else $=y.vertexShader,te=y.fragmentShader,l.update(y),Z=l.getVertexShaderID(y),G=l.getFragmentShaderID(y);const z=s.getRenderTarget(),J=s.state.buffers.depth.getReversed(),pe=L.isInstancedMesh===!0,me=L.isBatchedMesh===!0,de=!!y.map,_e=!!y.matcap,D=!!ne,Ie=!!y.aoMap,Se=!!y.lightMap,Ee=!!y.bumpMap,ge=!!y.normalMap,ve=!!y.displacementMap,fe=!!y.emissiveMap,be=!!y.metalnessMap,ce=!!y.roughnessMap,ze=y.anisotropy>0,R=y.clearcoat>0,M=y.dispersion>0,O=y.iridescence>0,ee=y.sheen>0,Q=y.transmission>0,q=ze&&!!y.anisotropyMap,Me=R&&!!y.clearcoatMap,he=R&&!!y.clearcoatNormalMap,Re=R&&!!y.clearcoatRoughnessMap,Ce=O&&!!y.iridescenceMap,le=O&&!!y.iridescenceThicknessMap,xe=ee&&!!y.sheenColorMap,Te=ee&&!!y.sheenRoughnessMap,Pe=!!y.specularMap,we=!!y.specularColorMap,He=!!y.specularIntensityMap,B=Q&&!!y.transmissionMap,ae=Q&&!!y.thicknessMap,ye=!!y.gradientMap,Fe=!!y.alphaMap,ue=y.alphaTest>0,ie=!!y.alphaHash,Ue=!!y.extensions;let Oe=Gn;y.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Oe=s.toneMapping);const Be={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:$,fragmentShader:te,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:G,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:me,batchingColor:me&&L._colorsTexture!==null,instancing:pe,instancingColor:pe&&L.instanceColor!==null,instancingMorph:pe&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:z===null?s.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Vi,alphaToCoverage:!!y.alphaToCoverage,map:de,matcap:_e,envMap:D,envMapMode:D&&ne.mapping,envMapCubeUVHeight:X,aoMap:Ie,lightMap:Se,bumpMap:Ee,normalMap:ge,displacementMap:f&&ve,emissiveMap:fe,normalMapObjectSpace:ge&&y.normalMapType===du,normalMapTangentSpace:ge&&y.normalMapType===Hc,metalnessMap:be,roughnessMap:ce,anisotropy:ze,anisotropyMap:q,clearcoat:R,clearcoatMap:Me,clearcoatNormalMap:he,clearcoatRoughnessMap:Re,dispersion:M,iridescence:O,iridescenceMap:Ce,iridescenceThicknessMap:le,sheen:ee,sheenColorMap:xe,sheenRoughnessMap:Te,specularMap:Pe,specularColorMap:we,specularIntensityMap:He,transmission:Q,transmissionMap:B,thicknessMap:ae,gradientMap:ye,opaque:y.transparent===!1&&y.blending===Bi&&y.alphaToCoverage===!1,alphaMap:Fe,alphaTest:ue,alphaHash:ie,combine:y.combine,mapUv:de&&v(y.map.channel),aoMapUv:Ie&&v(y.aoMap.channel),lightMapUv:Se&&v(y.lightMap.channel),bumpMapUv:Ee&&v(y.bumpMap.channel),normalMapUv:ge&&v(y.normalMap.channel),displacementMapUv:ve&&v(y.displacementMap.channel),emissiveMapUv:fe&&v(y.emissiveMap.channel),metalnessMapUv:be&&v(y.metalnessMap.channel),roughnessMapUv:ce&&v(y.roughnessMap.channel),anisotropyMapUv:q&&v(y.anisotropyMap.channel),clearcoatMapUv:Me&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(y.sheenRoughnessMap.channel),specularMapUv:Pe&&v(y.specularMap.channel),specularColorMapUv:we&&v(y.specularColorMap.channel),specularIntensityMapUv:He&&v(y.specularIntensityMap.channel),transmissionMapUv:B&&v(y.transmissionMap.channel),thicknessMapUv:ae&&v(y.thicknessMap.channel),alphaMapUv:Fe&&v(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ge||ze),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(de||Fe),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:J,skinning:L.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:W,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,decodeVideoTexture:de&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===ct,decodeVideoTextureEmissive:fe&&y.emissiveMap.isVideoTexture===!0&&nt.getTransfer(y.emissiveMap.colorSpace)===ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ln,flipSided:y.side===zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ue&&y.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&y.extensions.multiDraw===!0||me)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)x.push(P),x.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(S(x,y),E(x,y),x.push(s.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function S(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function E(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),y.push(o.mask)}function _(y){const x=g[y.type];let P;if(x){const C=dn[x];P=Qc.clone(C.uniforms)}else P=y.uniforms;return P}function T(y,x){let P;for(let C=0,L=h.length;C<L;C++){const I=h[C];if(I.cacheKey===x){P=I,++P.usedTimes;break}}return P===void 0&&(P=new xg(s,x,y,n),h.push(P)),P}function b(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function w(y){l.remove(y)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:T,releaseProgram:b,releaseShaderCache:w,programs:h,dispose:U}}function Tg(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function r(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function n(){s=new WeakMap}return{has:e,get:t,remove:r,update:i,dispose:n}}function bg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function sc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ac(){const s=[];let e=0;const t=[],r=[],i=[];function n(){e=0,t.length=0,r.length=0,i.length=0}function a(u,f,d,g,v,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?r.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?r.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||bg),r.length>1&&r.sort(f||sc),i.length>1&&i.sort(f||sc)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:r,transparent:i,init:n,push:o,unshift:l,finish:h,sort:c}}function wg(){let s=new WeakMap;function e(r,i){const n=s.get(r);let a;return n===void 0?(a=new ac,s.set(r,[a])):i>=n.length?(a=new ac,n.push(a)):a=n[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ag(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new je};break;case"SpotLight":t={position:new H,direction:new H,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=t,t}}}function Rg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Cg=0;function Ug(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Pg(s){const e=new Ag,t=Rg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new H);const i=new H,n=new ht,a=new ht;function o(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)r.probe[y].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,S=0,E=0,_=0,T=0,b=0,w=0;c.sort(Ug);for(let y=0,x=c.length;y<x;y++){const P=c[y],C=P.color,L=P.intensity,I=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=C.r*L,u+=C.g*L,f+=C.b*L;else if(P.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(P.sh.coefficients[k],L);w++}else if(P.isDirectionalLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ne=P.shadow,X=t.get(P);X.shadowIntensity=ne.intensity,X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,r.directionalShadow[d]=X,r.directionalShadowMap[d]=V,r.directionalShadowMatrix[d]=P.shadow.matrix,S++}r.directional[d]=k,d++}else if(P.isSpotLight){const k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(C).multiplyScalar(L),k.distance=I,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,r.spot[v]=k;const ne=P.shadow;if(P.map&&(r.spotLightMap[T]=P.map,T++,ne.updateMatrices(P),P.castShadow&&b++),r.spotLightMatrix[v]=ne.matrix,P.castShadow){const X=t.get(P);X.shadowIntensity=ne.intensity,X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,r.spotShadow[v]=X,r.spotShadowMap[v]=V,_++}v++}else if(P.isRectAreaLight){const k=e.get(P);k.color.copy(C).multiplyScalar(L),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),r.rectArea[m]=k,m++}else if(P.isPointLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const ne=P.shadow,X=t.get(P);X.shadowIntensity=ne.intensity,X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,X.shadowCameraNear=ne.camera.near,X.shadowCameraFar=ne.camera.far,r.pointShadow[g]=X,r.pointShadowMap[g]=V,r.pointShadowMatrix[g]=P.shadow.matrix,E++}r.point[g]=k,g++}else if(P.isHemisphereLight){const k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(L),k.groundColor.copy(P.groundColor).multiplyScalar(L),r.hemi[p]=k,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=u,r.ambient[2]=f;const U=r.hash;(U.directionalLength!==d||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==S||U.numPointShadows!==E||U.numSpotShadows!==_||U.numSpotMaps!==T||U.numLightProbes!==w)&&(r.directional.length=d,r.spot.length=v,r.rectArea.length=m,r.point.length=g,r.hemi.length=p,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=_,r.spotShadowMap.length=_,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=_+T-b,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=w,U.directionalLength=d,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=S,U.numPointShadows=E,U.numSpotShadows=_,U.numSpotMaps=T,U.numLightProbes=w,r.version=Cg++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const E=c[p];if(E.isDirectionalLight){const _=r.directional[u];_.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(E.isSpotLight){const _=r.spot[d];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const _=r.rectArea[g];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),a.identity(),n.copy(E.matrixWorld),n.premultiply(m),a.extractRotation(n),_.halfWidth.set(E.width*.5,0,0),_.halfHeight.set(0,E.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const _=r.point[f];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const _=r.hemi[v];_.direction.setFromMatrixPosition(E.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:r}}function oc(s){const e=new Pg(s),t=[],r=[];function i(h){c.camera=h,t.length=0,r.length=0}function n(h){t.push(h)}function a(h){r.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:a}}function Dg(s){let e=new WeakMap;function t(i,n=0){const a=e.get(i);let o;return a===void 0?(o=new oc(s),e.set(i,[o])):n>=a.length?(o=new oc(s),a.push(o)):o=a[n],o}function r(){e=new WeakMap}return{get:t,dispose:r}}const Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fg(s,e,t){let r=new Lo;const i=new Qe,n=new Qe,a=new st,o=new ah({depthPacking:Gc}),l=new oh,c={},h=t.maxTextureSize,u={[Hn]:zt,[zt]:Hn,[ln]:ln},f=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:Lg,fragmentShader:Ig}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new bt;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new dt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let p=this.type;this.render=function(b,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const y=s.getRenderTarget(),x=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),C=s.state;C.setBlending(zn),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const L=p!==bn&&this.type===bn,I=p===bn&&this.type!==bn;for(let V=0,k=b.length;V<k;V++){const ne=b[V],X=ne.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const K=X.getFrameExtents();if(i.multiply(K),n.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(n.x=Math.floor(h/K.x),i.x=n.x*K.x,X.mapSize.x=n.x),i.y>h&&(n.y=Math.floor(h/K.y),i.y=n.y*K.y,X.mapSize.y=n.y)),X.map===null||L===!0||I===!0){const F=this.type!==bn?{minFilter:Xt,magFilter:Xt}:{};X.map!==null&&X.map.dispose(),X.map=new pi(i.x,i.y,F),X.map.texture.name=ne.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const j=X.getViewportCount();for(let F=0;F<j;F++){const W=X.getViewport(F);a.set(n.x*W.x,n.y*W.y,n.x*W.z,n.y*W.w),C.viewport(a),X.updateMatrices(ne,F),r=X.getFrustum(),_(w,U,X.camera,ne,this.type)}X.isPointLightShadow!==!0&&this.type===bn&&S(X,U),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,x,P)};function S(b,w){const U=e.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new pi(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(w,null,U,f,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(w,null,U,d,v,null)}function E(b,w,U,y){let x=null;const P=U.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)x=P;else if(x=U.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const C=x.uuid,L=w.uuid;let I=c[C];I===void 0&&(I={},c[C]=I);let V=I[L];V===void 0&&(V=x.clone(),I[L]=V,w.addEventListener("dispose",T)),x=V}if(x.visible=w.visible,x.wireframe=w.wireframe,y===bn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:u[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const C=s.properties.get(x);C.light=U}return x}function _(b,w,U,y,x){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===bn)&&(!b.frustumCulled||r.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,b.matrixWorld);const L=e.update(b),I=b.material;if(Array.isArray(I)){const V=L.groups;for(let k=0,ne=V.length;k<ne;k++){const X=V[k],K=I[X.materialIndex];if(K&&K.visible){const j=E(b,K,y,x);b.onBeforeShadow(s,b,w,U,L,j,X),s.renderBufferDirect(U,null,L,j,b,X),b.onAfterShadow(s,b,w,U,L,j,X)}}}else if(I.visible){const V=E(b,I,y,x);b.onBeforeShadow(s,b,w,U,L,V,null),s.renderBufferDirect(U,null,L,V,b,null),b.onAfterShadow(s,b,w,U,L,V,null)}}const C=b.children;for(let L=0,I=C.length;L<I;L++)_(C[L],w,U,y,x)}function T(b){b.target.removeEventListener("dispose",T);for(const U in c){const y=c[U],x=b.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const Ng={[ba]:wa,[Aa]:Ua,[Ra]:Pa,[zi]:Ca,[wa]:ba,[Ua]:Aa,[Pa]:Ra,[Ca]:zi};function Og(s,e){function t(){let B=!1;const ae=new st;let ye=null;const Fe=new st(0,0,0,0);return{setMask:function(ue){ye!==ue&&!B&&(s.colorMask(ue,ue,ue,ue),ye=ue)},setLocked:function(ue){B=ue},setClear:function(ue,ie,Ue,Oe,Be){Be===!0&&(ue*=Oe,ie*=Oe,Ue*=Oe),ae.set(ue,ie,Ue,Oe),Fe.equals(ae)===!1&&(s.clearColor(ue,ie,Ue,Oe),Fe.copy(ae))},reset:function(){B=!1,ye=null,Fe.set(-1,0,0,0)}}}function r(){let B=!1,ae=!1,ye=null,Fe=null,ue=null;return{setReversed:function(ie){if(ae!==ie){const Ue=e.get("EXT_clip_control");ie?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ae=ie;const Oe=ue;ue=null,this.setClear(Oe)}},getReversed:function(){return ae},setTest:function(ie){ie?z(s.DEPTH_TEST):J(s.DEPTH_TEST)},setMask:function(ie){ye!==ie&&!B&&(s.depthMask(ie),ye=ie)},setFunc:function(ie){if(ae&&(ie=Ng[ie]),Fe!==ie){switch(ie){case ba:s.depthFunc(s.NEVER);break;case wa:s.depthFunc(s.ALWAYS);break;case Aa:s.depthFunc(s.LESS);break;case zi:s.depthFunc(s.LEQUAL);break;case Ra:s.depthFunc(s.EQUAL);break;case Ca:s.depthFunc(s.GEQUAL);break;case Ua:s.depthFunc(s.GREATER);break;case Pa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Fe=ie}},setLocked:function(ie){B=ie},setClear:function(ie){ue!==ie&&(ae&&(ie=1-ie),s.clearDepth(ie),ue=ie)},reset:function(){B=!1,ye=null,Fe=null,ue=null,ae=!1}}}function i(){let B=!1,ae=null,ye=null,Fe=null,ue=null,ie=null,Ue=null,Oe=null,Be=null;return{setTest:function(Ve){B||(Ve?z(s.STENCIL_TEST):J(s.STENCIL_TEST))},setMask:function(Ve){ae!==Ve&&!B&&(s.stencilMask(Ve),ae=Ve)},setFunc:function(Ve,pt,ut){(ye!==Ve||Fe!==pt||ue!==ut)&&(s.stencilFunc(Ve,pt,ut),ye=Ve,Fe=pt,ue=ut)},setOp:function(Ve,pt,ut){(ie!==Ve||Ue!==pt||Oe!==ut)&&(s.stencilOp(Ve,pt,ut),ie=Ve,Ue=pt,Oe=ut)},setLocked:function(Ve){B=Ve},setClear:function(Ve){Be!==Ve&&(s.clearStencil(Ve),Be=Ve)},reset:function(){B=!1,ae=null,ye=null,Fe=null,ue=null,ie=null,Ue=null,Oe=null,Be=null}}}const n=new t,a=new r,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,S=null,E=null,_=null,T=null,b=null,w=new je(0,0,0),U=0,y=!1,x=null,P=null,C=null,L=null,I=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ne=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=ne>=2);let K=null,j={};const F=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),$=new st().fromArray(F),te=new st().fromArray(W);function Z(B,ae,ye,Fe){const ue=new Uint8Array(4),ie=s.createTexture();s.bindTexture(B,ie),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ue=0;Ue<ye;Ue++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(ae,0,s.RGBA,1,1,Fe,0,s.RGBA,s.UNSIGNED_BYTE,ue):s.texImage2D(ae+Ue,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ue);return ie}const G={};G[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),G[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),G[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),o.setClear(0),z(s.DEPTH_TEST),a.setFunc(zi),Ee(!1),ge(tl),z(s.CULL_FACE),Ie(zn);function z(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function J(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function pe(B,ae){return u[B]!==ae?(s.bindFramebuffer(B,ae),u[B]=ae,B===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ae),B===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ae),!0):!1}function me(B,ae){let ye=d,Fe=!1;if(B){ye=f.get(ae),ye===void 0&&(ye=[],f.set(ae,ye));const ue=B.textures;if(ye.length!==ue.length||ye[0]!==s.COLOR_ATTACHMENT0){for(let ie=0,Ue=ue.length;ie<Ue;ie++)ye[ie]=s.COLOR_ATTACHMENT0+ie;ye.length=ue.length,Fe=!0}}else ye[0]!==s.BACK&&(ye[0]=s.BACK,Fe=!0);Fe&&s.drawBuffers(ye)}function de(B){return g!==B?(s.useProgram(B),g=B,!0):!1}const _e={[ni]:s.FUNC_ADD,[kh]:s.FUNC_SUBTRACT,[zh]:s.FUNC_REVERSE_SUBTRACT};_e[Gh]=s.MIN,_e[Hh]=s.MAX;const D={[Vh]:s.ZERO,[Wh]:s.ONE,[Xh]:s.SRC_COLOR,[Ea]:s.SRC_ALPHA,[Jh]:s.SRC_ALPHA_SATURATE,[Kh]:s.DST_COLOR,[Yh]:s.DST_ALPHA,[qh]:s.ONE_MINUS_SRC_COLOR,[Ta]:s.ONE_MINUS_SRC_ALPHA,[Zh]:s.ONE_MINUS_DST_COLOR,[jh]:s.ONE_MINUS_DST_ALPHA,[Qh]:s.CONSTANT_COLOR,[$h]:s.ONE_MINUS_CONSTANT_COLOR,[eu]:s.CONSTANT_ALPHA,[tu]:s.ONE_MINUS_CONSTANT_ALPHA};function Ie(B,ae,ye,Fe,ue,ie,Ue,Oe,Be,Ve){if(B===zn){v===!0&&(J(s.BLEND),v=!1);return}if(v===!1&&(z(s.BLEND),v=!0),B!==Bh){if(B!==m||Ve!==y){if((p!==ni||_!==ni)&&(s.blendEquation(s.FUNC_ADD),p=ni,_=ni),Ve)switch(B){case Bi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nl:s.blendFunc(s.ONE,s.ONE);break;case il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case rl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Bi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case il:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}S=null,E=null,T=null,b=null,w.set(0,0,0),U=0,m=B,y=Ve}return}ue=ue||ae,ie=ie||ye,Ue=Ue||Fe,(ae!==p||ue!==_)&&(s.blendEquationSeparate(_e[ae],_e[ue]),p=ae,_=ue),(ye!==S||Fe!==E||ie!==T||Ue!==b)&&(s.blendFuncSeparate(D[ye],D[Fe],D[ie],D[Ue]),S=ye,E=Fe,T=ie,b=Ue),(Oe.equals(w)===!1||Be!==U)&&(s.blendColor(Oe.r,Oe.g,Oe.b,Be),w.copy(Oe),U=Be),m=B,y=!1}function Se(B,ae){B.side===ln?J(s.CULL_FACE):z(s.CULL_FACE);let ye=B.side===zt;ae&&(ye=!ye),Ee(ye),B.blending===Bi&&B.transparent===!1?Ie(zn):Ie(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),n.setMask(B.colorWrite);const Fe=B.stencilWrite;o.setTest(Fe),Fe&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),fe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?z(s.SAMPLE_ALPHA_TO_COVERAGE):J(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(B){x!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),x=B)}function ge(B){B!==Nh?(z(s.CULL_FACE),B!==P&&(B===tl?s.cullFace(s.BACK):B===Oh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):J(s.CULL_FACE),P=B}function ve(B){B!==C&&(k&&s.lineWidth(B),C=B)}function fe(B,ae,ye){B?(z(s.POLYGON_OFFSET_FILL),(L!==ae||I!==ye)&&(s.polygonOffset(ae,ye),L=ae,I=ye)):J(s.POLYGON_OFFSET_FILL)}function be(B){B?z(s.SCISSOR_TEST):J(s.SCISSOR_TEST)}function ce(B){B===void 0&&(B=s.TEXTURE0+V-1),K!==B&&(s.activeTexture(B),K=B)}function ze(B,ae,ye){ye===void 0&&(K===null?ye=s.TEXTURE0+V-1:ye=K);let Fe=j[ye];Fe===void 0&&(Fe={type:void 0,texture:void 0},j[ye]=Fe),(Fe.type!==B||Fe.texture!==ae)&&(K!==ye&&(s.activeTexture(ye),K=ye),s.bindTexture(B,ae||G[B]),Fe.type=B,Fe.texture=ae)}function R(){const B=j[K];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{s.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{s.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{s.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{s.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{s.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{s.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{s.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(B){$.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),$.copy(B))}function Te(B){te.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),te.copy(B))}function Pe(B,ae){let ye=c.get(ae);ye===void 0&&(ye=new WeakMap,c.set(ae,ye));let Fe=ye.get(B);Fe===void 0&&(Fe=s.getUniformBlockIndex(ae,B.name),ye.set(B,Fe))}function we(B,ae){const Fe=c.get(ae).get(B);l.get(ae)!==Fe&&(s.uniformBlockBinding(ae,Fe,B.__bindingPointIndex),l.set(ae,Fe))}function He(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},K=null,j={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,S=null,E=null,_=null,T=null,b=null,w=new je(0,0,0),U=0,y=!1,x=null,P=null,C=null,L=null,I=null,$.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),n.reset(),a.reset(),o.reset()}return{buffers:{color:n,depth:a,stencil:o},enable:z,disable:J,bindFramebuffer:pe,drawBuffers:me,useProgram:de,setBlending:Ie,setMaterial:Se,setFlipSided:Ee,setCullFace:ge,setLineWidth:ve,setPolygonOffset:fe,setScissorTest:be,activeTexture:ce,bindTexture:ze,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:O,texImage2D:Ce,texImage3D:le,updateUBOMapping:Pe,uniformBlockBinding:we,texStorage2D:he,texStorage3D:Re,texSubImage2D:ee,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Me,scissor:xe,viewport:Te,reset:He}}function Bg(s,e,t,r,i,n,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return d?new OffscreenCanvas(R,M):ms("canvas")}function v(R,M,O){let ee=1;const Q=ze(R);if((Q.width>O||Q.height>O)&&(ee=O/Math.max(Q.width,Q.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(ee*Q.width),Me=Math.floor(ee*Q.height);u===void 0&&(u=g(q,Me));const he=M?g(q,Me):u;return he.width=q,he.height=Me,he.getContext("2d").drawImage(R,0,0,q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Me+")."),he}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(R,M,O,ee,Q=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=M;if(M===s.RED&&(O===s.FLOAT&&(q=s.R32F),O===s.HALF_FLOAT&&(q=s.R16F),O===s.UNSIGNED_BYTE&&(q=s.R8)),M===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.R8UI),O===s.UNSIGNED_SHORT&&(q=s.R16UI),O===s.UNSIGNED_INT&&(q=s.R32UI),O===s.BYTE&&(q=s.R8I),O===s.SHORT&&(q=s.R16I),O===s.INT&&(q=s.R32I)),M===s.RG&&(O===s.FLOAT&&(q=s.RG32F),O===s.HALF_FLOAT&&(q=s.RG16F),O===s.UNSIGNED_BYTE&&(q=s.RG8)),M===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RG8UI),O===s.UNSIGNED_SHORT&&(q=s.RG16UI),O===s.UNSIGNED_INT&&(q=s.RG32UI),O===s.BYTE&&(q=s.RG8I),O===s.SHORT&&(q=s.RG16I),O===s.INT&&(q=s.RG32I)),M===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RGB8UI),O===s.UNSIGNED_SHORT&&(q=s.RGB16UI),O===s.UNSIGNED_INT&&(q=s.RGB32UI),O===s.BYTE&&(q=s.RGB8I),O===s.SHORT&&(q=s.RGB16I),O===s.INT&&(q=s.RGB32I)),M===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),O===s.UNSIGNED_INT&&(q=s.RGBA32UI),O===s.BYTE&&(q=s.RGBA8I),O===s.SHORT&&(q=s.RGBA16I),O===s.INT&&(q=s.RGBA32I)),M===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),M===s.RGBA){const Me=Q?ds:nt.getTransfer(ee);O===s.FLOAT&&(q=s.RGBA32F),O===s.HALF_FLOAT&&(q=s.RGBA16F),O===s.UNSIGNED_BYTE&&(q=Me===ct?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function _(R,M){let O;return R?M===null||M===fi||M===yr?O=s.DEPTH24_STENCIL8:M===mn?O=s.DEPTH32F_STENCIL8:M===xr&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===fi||M===yr?O=s.DEPTH_COMPONENT24:M===mn?O=s.DEPTH_COMPONENT32F:M===xr&&(O=s.DEPTH_COMPONENT16),O}function T(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Xt&&R.minFilter!==$t?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function b(R){const M=R.target;M.removeEventListener("dispose",b),U(M),M.isVideoTexture&&h.delete(M)}function w(R){const M=R.target;M.removeEventListener("dispose",w),x(M)}function U(R){const M=r.get(R);if(M.__webglInit===void 0)return;const O=R.source,ee=f.get(O);if(ee){const Q=ee[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(R),Object.keys(ee).length===0&&f.delete(O)}r.remove(R)}function y(R){const M=r.get(R);s.deleteTexture(M.__webglTexture);const O=R.source,ee=f.get(O);delete ee[M.__cacheKey],a.memory.textures--}function x(R){const M=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let Q=0;Q<M.__webglFramebuffer[ee].length;Q++)s.deleteFramebuffer(M.__webglFramebuffer[ee][Q]);else s.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)s.deleteFramebuffer(M.__webglFramebuffer[ee]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=R.textures;for(let ee=0,Q=O.length;ee<Q;ee++){const q=r.get(O[ee]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),r.remove(O[ee])}r.remove(R)}let P=0;function C(){P=0}function L(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function I(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function V(R,M){const O=r.get(R);if(R.isVideoTexture&&be(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(O,R,M);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+M)}function k(R,M){const O=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){G(O,R,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+M)}function ne(R,M){const O=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){G(O,R,M);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+M)}function X(R,M){const O=r.get(R);if(R.version>0&&O.__version!==R.version){z(O,R,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+M)}const K={[Ia]:s.REPEAT,[ri]:s.CLAMP_TO_EDGE,[Fa]:s.MIRRORED_REPEAT},j={[Xt]:s.NEAREST,[uu]:s.NEAREST_MIPMAP_NEAREST,[Pr]:s.NEAREST_MIPMAP_LINEAR,[$t]:s.LINEAR,[ks]:s.LINEAR_MIPMAP_NEAREST,[si]:s.LINEAR_MIPMAP_LINEAR},F={[pu]:s.NEVER,[yu]:s.ALWAYS,[mu]:s.LESS,[Vc]:s.LEQUAL,[gu]:s.EQUAL,[xu]:s.GEQUAL,[vu]:s.GREATER,[_u]:s.NOTEQUAL};function W(R,M){if(M.type===mn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===$t||M.magFilter===ks||M.magFilter===Pr||M.magFilter===si||M.minFilter===$t||M.minFilter===ks||M.minFilter===Pr||M.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,K[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,K[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,K[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,j[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,j[M.minFilter]),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,F[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Xt||M.minFilter!==Pr&&M.minFilter!==si||M.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function $(R,M){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const ee=M.source;let Q=f.get(ee);Q===void 0&&(Q={},f.set(ee,Q));const q=I(M);if(q!==R.__cacheKey){Q[q]===void 0&&(Q[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[q].usedTimes++;const Me=Q[R.__cacheKey];Me!==void 0&&(Q[R.__cacheKey].usedTimes--,Me.usedTimes===0&&y(M)),R.__cacheKey=q,R.__webglTexture=Q[q].texture}return O}function te(R,M,O){return Math.floor(Math.floor(R/O)/M)}function Z(R,M,O,ee){const q=R.updateRanges;if(q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,O,ee,M.data);else{q.sort((le,xe)=>le.start-xe.start);let Me=0;for(let le=1;le<q.length;le++){const xe=q[Me],Te=q[le],Pe=xe.start+xe.count,we=te(Te.start,M.width,4),He=te(xe.start,M.width,4);Te.start<=Pe+1&&we===He&&te(Te.start+Te.count-1,M.width,4)===we?xe.count=Math.max(xe.count,Te.start+Te.count-xe.start):(++Me,q[Me]=Te)}q.length=Me+1;const he=s.getParameter(s.UNPACK_ROW_LENGTH),Re=s.getParameter(s.UNPACK_SKIP_PIXELS),Ce=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let le=0,xe=q.length;le<xe;le++){const Te=q[le],Pe=Math.floor(Te.start/4),we=Math.ceil(Te.count/4),He=Pe%M.width,B=Math.floor(Pe/M.width),ae=we,ye=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,He),s.pixelStorei(s.UNPACK_SKIP_ROWS,B),t.texSubImage2D(s.TEXTURE_2D,0,He,B,ae,ye,O,ee,M.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,he),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Re),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}function G(R,M,O){let ee=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=s.TEXTURE_3D);const Q=$(R,M),q=M.source;t.bindTexture(ee,R.__webglTexture,s.TEXTURE0+O);const Me=r.get(q);if(q.version!==Me.__version||Q===!0){t.activeTexture(s.TEXTURE0+O);const he=nt.getPrimaries(nt.workingColorSpace),Re=M.colorSpace===kn?null:nt.getPrimaries(M.colorSpace),Ce=M.colorSpace===kn||he===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let le=v(M.image,!1,i.maxTextureSize);le=ce(M,le);const xe=n.convert(M.format,M.colorSpace),Te=n.convert(M.type);let Pe=E(M.internalFormat,xe,Te,M.colorSpace,M.isVideoTexture);W(ee,M);let we;const He=M.mipmaps,B=M.isVideoTexture!==!0,ae=Me.__version===void 0||Q===!0,ye=q.dataReady,Fe=T(M,le);if(M.isDepthTexture)Pe=_(M.format===Sr,M.type),ae&&(B?t.texStorage2D(s.TEXTURE_2D,1,Pe,le.width,le.height):t.texImage2D(s.TEXTURE_2D,0,Pe,le.width,le.height,0,xe,Te,null));else if(M.isDataTexture)if(He.length>0){B&&ae&&t.texStorage2D(s.TEXTURE_2D,Fe,Pe,He[0].width,He[0].height);for(let ue=0,ie=He.length;ue<ie;ue++)we=He[ue],B?ye&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,we.width,we.height,xe,Te,we.data):t.texImage2D(s.TEXTURE_2D,ue,Pe,we.width,we.height,0,xe,Te,we.data);M.generateMipmaps=!1}else B?(ae&&t.texStorage2D(s.TEXTURE_2D,Fe,Pe,le.width,le.height),ye&&Z(M,le,xe,Te)):t.texImage2D(s.TEXTURE_2D,0,Pe,le.width,le.height,0,xe,Te,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){B&&ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Pe,He[0].width,He[0].height,le.depth);for(let ue=0,ie=He.length;ue<ie;ue++)if(we=He[ue],M.format!==hn)if(xe!==null)if(B){if(ye)if(M.layerUpdates.size>0){const Ue=Ol(we.width,we.height,M.format,M.type);for(const Oe of M.layerUpdates){const Be=we.data.subarray(Oe*Ue/we.data.BYTES_PER_ELEMENT,(Oe+1)*Ue/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,Oe,we.width,we.height,1,xe,Be)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,we.width,we.height,le.depth,xe,we.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,Pe,we.width,we.height,le.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ye&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,we.width,we.height,le.depth,xe,Te,we.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ue,Pe,we.width,we.height,le.depth,0,xe,Te,we.data)}else{B&&ae&&t.texStorage2D(s.TEXTURE_2D,Fe,Pe,He[0].width,He[0].height);for(let ue=0,ie=He.length;ue<ie;ue++)we=He[ue],M.format!==hn?xe!==null?B?ye&&t.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,we.width,we.height,xe,we.data):t.compressedTexImage2D(s.TEXTURE_2D,ue,Pe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ye&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,we.width,we.height,xe,Te,we.data):t.texImage2D(s.TEXTURE_2D,ue,Pe,we.width,we.height,0,xe,Te,we.data)}else if(M.isDataArrayTexture)if(B){if(ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Pe,le.width,le.height,le.depth),ye)if(M.layerUpdates.size>0){const ue=Ol(le.width,le.height,M.format,M.type);for(const ie of M.layerUpdates){const Ue=le.data.subarray(ie*ue/le.data.BYTES_PER_ELEMENT,(ie+1)*ue/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ie,le.width,le.height,1,xe,Te,Ue)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,xe,Te,le.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,le.width,le.height,le.depth,0,xe,Te,le.data);else if(M.isData3DTexture)B?(ae&&t.texStorage3D(s.TEXTURE_3D,Fe,Pe,le.width,le.height,le.depth),ye&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,xe,Te,le.data)):t.texImage3D(s.TEXTURE_3D,0,Pe,le.width,le.height,le.depth,0,xe,Te,le.data);else if(M.isFramebufferTexture){if(ae)if(B)t.texStorage2D(s.TEXTURE_2D,Fe,Pe,le.width,le.height);else{let ue=le.width,ie=le.height;for(let Ue=0;Ue<Fe;Ue++)t.texImage2D(s.TEXTURE_2D,Ue,Pe,ue,ie,0,xe,Te,null),ue>>=1,ie>>=1}}else if(He.length>0){if(B&&ae){const ue=ze(He[0]);t.texStorage2D(s.TEXTURE_2D,Fe,Pe,ue.width,ue.height)}for(let ue=0,ie=He.length;ue<ie;ue++)we=He[ue],B?ye&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,xe,Te,we):t.texImage2D(s.TEXTURE_2D,ue,Pe,xe,Te,we);M.generateMipmaps=!1}else if(B){if(ae){const ue=ze(le);t.texStorage2D(s.TEXTURE_2D,Fe,Pe,ue.width,ue.height)}ye&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,Te,le)}else t.texImage2D(s.TEXTURE_2D,0,Pe,xe,Te,le);m(M)&&p(ee),Me.__version=q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function z(R,M,O){if(M.image.length!==6)return;const ee=$(R,M),Q=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+O);const q=r.get(Q);if(Q.version!==q.__version||ee===!0){t.activeTexture(s.TEXTURE0+O);const Me=nt.getPrimaries(nt.workingColorSpace),he=M.colorSpace===kn?null:nt.getPrimaries(M.colorSpace),Re=M.colorSpace===kn||Me===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,xe=[];for(let ie=0;ie<6;ie++)!Ce&&!le?xe[ie]=v(M.image[ie],!0,i.maxCubemapSize):xe[ie]=le?M.image[ie].image:M.image[ie],xe[ie]=ce(M,xe[ie]);const Te=xe[0],Pe=n.convert(M.format,M.colorSpace),we=n.convert(M.type),He=E(M.internalFormat,Pe,we,M.colorSpace),B=M.isVideoTexture!==!0,ae=q.__version===void 0||ee===!0,ye=Q.dataReady;let Fe=T(M,Te);W(s.TEXTURE_CUBE_MAP,M);let ue;if(Ce){B&&ae&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,He,Te.width,Te.height);for(let ie=0;ie<6;ie++){ue=xe[ie].mipmaps;for(let Ue=0;Ue<ue.length;Ue++){const Oe=ue[Ue];M.format!==hn?Pe!==null?B?ye&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ue,0,0,Oe.width,Oe.height,Pe,Oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ue,He,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ue,0,0,Oe.width,Oe.height,Pe,we,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ue,He,Oe.width,Oe.height,0,Pe,we,Oe.data)}}}else{if(ue=M.mipmaps,B&&ae){ue.length>0&&Fe++;const ie=ze(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,He,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(le){B?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,xe[ie].width,xe[ie].height,Pe,we,xe[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,He,xe[ie].width,xe[ie].height,0,Pe,we,xe[ie].data);for(let Ue=0;Ue<ue.length;Ue++){const Be=ue[Ue].image[ie].image;B?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ue+1,0,0,Be.width,Be.height,Pe,we,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ue+1,He,Be.width,Be.height,0,Pe,we,Be.data)}}else{B?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Pe,we,xe[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,He,Pe,we,xe[ie]);for(let Ue=0;Ue<ue.length;Ue++){const Oe=ue[Ue];B?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ue+1,0,0,Pe,we,Oe.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ue+1,He,Pe,we,Oe.image[ie])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),q.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function J(R,M,O,ee,Q,q){const Me=n.convert(O.format,O.colorSpace),he=n.convert(O.type),Re=E(O.internalFormat,Me,he,O.colorSpace),Ce=r.get(M),le=r.get(O);if(le.__renderTarget=M,!Ce.__hasExternalTextures){const xe=Math.max(1,M.width>>q),Te=Math.max(1,M.height>>q);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,Re,xe,Te,M.depth,0,Me,he,null):t.texImage2D(Q,q,Re,xe,Te,0,Me,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),fe(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,Q,le.__webglTexture,0,ve(M)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,Q,le.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(R,M,O){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer){const ee=M.depthTexture,Q=ee&&ee.isDepthTexture?ee.type:null,q=_(M.stencilBuffer,Q),Me=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=ve(M);fe(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,q,M.width,M.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,q,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,q,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,R)}else{const ee=M.textures;for(let Q=0;Q<ee.length;Q++){const q=ee[Q],Me=n.convert(q.format,q.colorSpace),he=n.convert(q.type),Re=E(q.internalFormat,Me,he,q.colorSpace),Ce=ve(M);O&&fe(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,Re,M.width,M.height):fe(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,Re,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Re,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function me(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=r.get(M.depthTexture);ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const Q=ee.__webglTexture,q=ve(M);if(M.depthTexture.format===Mr)fe(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Sr)fe(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function de(R){const M=r.get(R),O=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const ee=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",Q)};ee.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=ee}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const ee=R.texture.mipmaps;ee&&ee.length>0?me(M.__webglFramebuffer[0],R):me(M.__webglFramebuffer,R)}else if(O){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=s.createRenderbuffer(),pe(M.__webglDepthbuffer[ee],R,!1);else{const Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[ee];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,q)}}else{const ee=R.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),pe(M.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(R,M,O){const ee=r.get(R);M!==void 0&&J(ee.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&de(R)}function D(R){const M=R.texture,O=r.get(R),ee=r.get(M);R.addEventListener("dispose",w);const Q=R.textures,q=R.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=M.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let Re=0;Re<M.mipmaps.length;Re++)O.__webglFramebuffer[he][Re]=s.createFramebuffer()}else O.__webglFramebuffer[he]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)O.__webglFramebuffer[he]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Me)for(let he=0,Re=Q.length;he<Re;he++){const Ce=r.get(Q[he]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&fe(R)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<Q.length;he++){const Re=Q[he];O.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[he]);const Ce=n.convert(Re.format,Re.colorSpace),le=n.convert(Re.type),xe=E(Re.internalFormat,Ce,le,Re.colorSpace,R.isXRRenderTarget===!0),Te=ve(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,xe,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,O.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),pe(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),W(s.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)J(O.__webglFramebuffer[he][Re],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re);else J(O.__webglFramebuffer[he],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(M)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let he=0,Re=Q.length;he<Re;he++){const Ce=Q[he],le=r.get(Ce);let xe=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,le.__webglTexture),W(xe,Ce),J(O.__webglFramebuffer,R,Ce,s.COLOR_ATTACHMENT0+he,xe,0),m(Ce)&&p(xe)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,ee.__webglTexture),W(he,M),M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)J(O.__webglFramebuffer[Re],R,M,s.COLOR_ATTACHMENT0,he,Re);else J(O.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,he,0);m(M)&&p(he),t.unbindTexture()}R.depthBuffer&&de(R)}function Ie(R){const M=R.textures;for(let O=0,ee=M.length;O<ee;O++){const Q=M[O];if(m(Q)){const q=S(R),Me=r.get(Q).__webglTexture;t.bindTexture(q,Me),p(q),t.unbindTexture()}}}const Se=[],Ee=[];function ge(R){if(R.samples>0){if(fe(R)===!1){const M=R.textures,O=R.width,ee=R.height;let Q=s.COLOR_BUFFER_BIT;const q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=r.get(R),he=M.length>1;if(he)for(let Ce=0;Ce<M.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Re=R.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Ce]);const le=r.get(M[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,le,0)}s.blitFramebuffer(0,0,O,ee,0,0,O,ee,Q,s.NEAREST),l===!0&&(Se.length=0,Ee.length=0,Se.push(s.COLOR_ATTACHMENT0+Ce),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Se.push(q),Ee.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ee)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let Ce=0;Ce<M.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Ce]);const le=r.get(M[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,le,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function ve(R){return Math.min(i.maxSamples,R.samples)}function fe(R){const M=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function be(R){const M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function ce(R,M){const O=R.colorSpace,ee=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Vi&&O!==kn&&(nt.getTransfer(O)===ct?(ee!==hn||Q!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function ze(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=C,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=ne,this.setTextureCube=X,this.rebindTextures=_e,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=J,this.useMultisampledRTT=fe}function kg(s,e){function t(r,i=kn){let n;const a=nt.getTransfer(i);if(r===vn)return s.UNSIGNED_BYTE;if(r===To)return s.UNSIGNED_SHORT_4_4_4_4;if(r===bo)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Nc)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Oc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ic)return s.BYTE;if(r===Fc)return s.SHORT;if(r===xr)return s.UNSIGNED_SHORT;if(r===Eo)return s.INT;if(r===fi)return s.UNSIGNED_INT;if(r===mn)return s.FLOAT;if(r===Tr)return s.HALF_FLOAT;if(r===Bc)return s.ALPHA;if(r===kc)return s.RGB;if(r===hn)return s.RGBA;if(r===Mr)return s.DEPTH_COMPONENT;if(r===Sr)return s.DEPTH_STENCIL;if(r===wo)return s.RED;if(r===Ao)return s.RED_INTEGER;if(r===zc)return s.RG;if(r===Ro)return s.RG_INTEGER;if(r===Co)return s.RGBA_INTEGER;if(r===as||r===os||r===ls||r===cs)if(a===ct)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===as)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===os)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ls)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===cs)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===as)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===os)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ls)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===cs)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Na||r===Oa||r===Ba||r===ka)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Na)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Oa)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ba)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ka)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===za||r===Ga||r===Ha)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(r===za||r===Ga)return a===ct?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Ha)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Va||r===Wa||r===Xa||r===qa||r===Ya||r===ja||r===Ka||r===Za||r===Ja||r===Qa||r===$a||r===eo||r===to||r===no)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(r===Va)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wa)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xa)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qa)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ya)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ja)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ka)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Za)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ja)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qa)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$a)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===eo)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===to)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===no)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===io||r===ro||r===so)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(r===io)return a===ct?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ro)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===so)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ao||r===oo||r===lo||r===co)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(r===ao)return n.COMPRESSED_RED_RGTC1_EXT;if(r===oo)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lo)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===co)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===yr?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gg=`
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

}`;class Hg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new sh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Vn({vertexShader:zg,fragmentShader:Gg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new qn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vg extends Xi{constructor(e,t){super();const r=this;let i=null,n=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Hg,p={},S=t.getContextAttributes();let E=null,_=null;const T=[],b=[],w=new Qe;let U=null;const y=new Wt;y.viewport=new st;const x=new Wt;x.viewport=new st;const P=[y,x],C=new cf;let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let z=T[G];return z===void 0&&(z=new la,T[G]=z),z.getTargetRaySpace()},this.getControllerGrip=function(G){let z=T[G];return z===void 0&&(z=new la,T[G]=z),z.getGripSpace()},this.getHand=function(G){let z=T[G];return z===void 0&&(z=new la,T[G]=z),z.getHandSpace()};function V(G){const z=b.indexOf(G.inputSource);if(z===-1)return;const J=T[z];J!==void 0&&(J.update(G.inputSource,G.frame,c||a),J.dispatchEvent({type:G.type,data:G.inputSource}))}function k(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",ne);for(let G=0;G<T.length;G++){const z=b[G];z!==null&&(b[G]=null,T[G].disconnect(z))}L=null,I=null,m.reset();for(const G in p)delete p[G];e.setRenderTarget(E),d=null,f=null,u=null,i=null,_=null,Z.stop(),r.isPresenting=!1,e.setPixelRatio(U),e.setSize(w.width,w.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){n=G,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",k),i.addEventListener("inputsourceschange",ne),S.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,pe=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=S.stencil?Sr:Mr,pe=S.stencil?yr:fi);const de={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:n};u=this.getBinding(),f=u.createProjectionLayer(de),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new pi(f.textureWidth,f.textureHeight,{format:hn,type:vn,depthTexture:new rh(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const J={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:n};d=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new pi(d.framebufferWidth,d.framebufferHeight,{format:hn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Z.setContext(i),Z.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(G){for(let z=0;z<G.removed.length;z++){const J=G.removed[z],pe=b.indexOf(J);pe>=0&&(b[pe]=null,T[pe].disconnect(J))}for(let z=0;z<G.added.length;z++){const J=G.added[z];let pe=b.indexOf(J);if(pe===-1){for(let de=0;de<T.length;de++)if(de>=b.length){b.push(J),pe=de;break}else if(b[de]===null){b[de]=J,pe=de;break}if(pe===-1)break}const me=T[pe];me&&me.connect(J)}}const X=new H,K=new H;function j(G,z,J){X.setFromMatrixPosition(z.matrixWorld),K.setFromMatrixPosition(J.matrixWorld);const pe=X.distanceTo(K),me=z.projectionMatrix.elements,de=J.projectionMatrix.elements,_e=me[14]/(me[10]-1),D=me[14]/(me[10]+1),Ie=(me[9]+1)/me[5],Se=(me[9]-1)/me[5],Ee=(me[8]-1)/me[0],ge=(de[8]+1)/de[0],ve=_e*Ee,fe=_e*ge,be=pe/(-Ee+ge),ce=be*-Ee;if(z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ce),G.translateZ(be),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),me[10]===-1)G.projectionMatrix.copy(z.projectionMatrix),G.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{const ze=_e+be,R=D+be,M=ve-ce,O=fe+(pe-ce),ee=Ie*D/R*ze,Q=Se*D/R*ze;G.projectionMatrix.makePerspective(M,O,ee,Q,ze,R),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function F(G,z){z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;let z=G.near,J=G.far;m.texture!==null&&(m.depthNear>0&&(z=m.depthNear),m.depthFar>0&&(J=m.depthFar)),C.near=x.near=y.near=z,C.far=x.far=y.far=J,(L!==C.near||I!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,I=C.far),C.layers.mask=G.layers.mask|6,y.layers.mask=C.layers.mask&3,x.layers.mask=C.layers.mask&5;const pe=G.parent,me=C.cameras;F(C,pe);for(let de=0;de<me.length;de++)F(me[de],pe);me.length===2?j(C,y,x):C.projectionMatrix.copy(y.projectionMatrix),W(G,C,pe)};function W(G,z,J){J===null?G.matrix.copy(z.matrixWorld):(G.matrix.copy(J.matrixWorld),G.matrix.invert(),G.matrix.multiply(z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(z.projectionMatrix),G.projectionMatrixInverse.copy(z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ho*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(G){return p[G]};let $=null;function te(G,z){if(h=z.getViewerPose(c||a),g=z,h!==null){const J=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let pe=!1;J.length!==C.cameras.length&&(C.cameras.length=0,pe=!0);for(let D=0;D<J.length;D++){const Ie=J[D];let Se=null;if(d!==null)Se=d.getViewport(Ie);else{const ge=u.getViewSubImage(f,Ie);Se=ge.viewport,D===0&&(e.setRenderTargetTextures(_,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(_))}let Ee=P[D];Ee===void 0&&(Ee=new Wt,Ee.layers.enable(D),Ee.viewport=new st,P[D]=Ee),Ee.matrix.fromArray(Ie.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Ie.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Se.x,Se.y,Se.width,Se.height),D===0&&(C.matrix.copy(Ee.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),pe===!0&&C.cameras.push(Ee)}const me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=r.getBinding();const D=u.getDepthInformation(J[0]);D&&D.isValid&&D.texture&&m.init(D,i.renderState)}if(me&&me.includes("camera-access")&&v){e.state.unbindTexture(),u=r.getBinding();for(let D=0;D<J.length;D++){const Ie=J[D].camera;if(Ie){let Se=p[Ie];Se||(Se=new sh,p[Ie]=Se);const Ee=u.getCameraImage(Ie);Se.sourceTexture=Ee}}}}for(let J=0;J<T.length;J++){const pe=b[J],me=T[J];pe!==null&&me!==void 0&&me.update(pe,z,c||a)}$&&$(G,z),z.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:z}),g=null}const Z=new hh;Z.setAnimationLoop(te),this.setAnimationLoop=function(G){$=G},this.dispose=function(){}}}const Qn=new _n,Wg=new ht;function Xg(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function r(m,p){p.color.getRGB(m.fogColor.value,Jc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,E,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?n(m,p):p.isMeshToonMaterial?(n(m,p),u(m,p)):p.isMeshPhongMaterial?(n(m,p),h(m,p)):p.isMeshStandardMaterial?(n(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(n(m,p),g(m,p)):p.isMeshDepthMaterial?n(m,p):p.isMeshDistanceMaterial?(n(m,p),v(m,p)):p.isMeshNormalMaterial?n(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),E=S.envMap,_=S.envMapRotation;E&&(m.envMap.value=E,Qn.copy(_),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),m.envMapRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(Qn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function qg(s,e,t,r){let i={},n={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const _=E.program;r.uniformBlockBinding(S,_)}function c(S,E){let _=i[S.id];_===void 0&&(g(S),_=h(S),i[S.id]=_,S.addEventListener("dispose",m));const T=E.program;r.updateUBOMapping(S,T);const b=e.render.frame;n[S.id]!==b&&(f(S),n[S.id]=b)}function h(S){const E=u();S.__bindingPointIndex=E;const _=s.createBuffer(),T=S.__size,b=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,T,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,_),_}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const E=i[S.id],_=S.uniforms,T=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let b=0,w=_.length;b<w;b++){const U=Array.isArray(_[b])?_[b]:[_[b]];for(let y=0,x=U.length;y<x;y++){const P=U[y];if(d(P,b,y,T)===!0){const C=P.__offset,L=Array.isArray(P.value)?P.value:[P.value];let I=0;for(let V=0;V<L.length;V++){const k=L[V],ne=v(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,C+I,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,I),I+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,C,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,E,_,T){const b=S.value,w=E+"_"+_;if(T[w]===void 0)return typeof b=="number"||typeof b=="boolean"?T[w]=b:T[w]=b.clone(),!0;{const U=T[w];if(typeof b=="number"||typeof b=="boolean"){if(U!==b)return T[w]=b,!0}else if(U.equals(b)===!1)return U.copy(b),!0}return!1}function g(S){const E=S.uniforms;let _=0;const T=16;for(let w=0,U=E.length;w<U;w++){const y=Array.isArray(E[w])?E[w]:[E[w]];for(let x=0,P=y.length;x<P;x++){const C=y[x],L=Array.isArray(C.value)?C.value:[C.value];for(let I=0,V=L.length;I<V;I++){const k=L[I],ne=v(k),X=_%T,K=X%ne.boundary,j=X+K;_+=K,j!==0&&T-j<ne.storage&&(_+=T-j),C.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=_,_+=ne.storage}}}const b=_%T;return b>0&&(_+=T-b),S.__size=_,S.__cache={},this}function v(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const _=a.indexOf(E.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete n[E.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},n={}}return{bind:l,update:c,dispose:p}}class Yg{constructor(e={}){const{canvas:t=Su(),context:r=null,depth:i=!0,stencil:n=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const S=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let T=!1;this._outputColorSpace=Qt;let b=0,w=0,U=null,y=-1,x=null;const P=new st,C=new st;let L=null;const I=new je(0);let V=0,k=t.width,ne=t.height,X=1,K=null,j=null;const F=new st(0,0,k,ne),W=new st(0,0,k,ne);let $=!1;const te=new Lo;let Z=!1,G=!1;const z=new ht,J=new H,pe=new st,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function _e(){return U===null?X:1}let D=r;function Ie(A,Y){return t.getContext(A,Y)}try{const A={alpha:!0,depth:i,stencil:n,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${So}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",ue,!1),D===null){const Y="webgl2";if(D=Ie(Y,A),D===null)throw Ie(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Se,Ee,ge,ve,fe,be,ce,ze,R,M,O,ee,Q,q,Me,he,Re,Ce,le,xe,Te,Pe,we,He;function B(){Se=new im(D),Se.init(),Pe=new kg(D,Se),Ee=new Zp(D,Se,e,Pe),ge=new Og(D,Se),Ee.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),ve=new am(D),fe=new Tg,be=new Bg(D,Se,ge,fe,Ee,Pe,ve),ce=new Qp(_),ze=new nm(_),R=new ff(D),we=new jp(D,R),M=new rm(D,R,ve,we),O=new lm(D,M,R,ve),le=new om(D,Ee,be),he=new Jp(fe),ee=new Eg(_,ce,ze,Se,Ee,we,he),Q=new Xg(_,fe),q=new wg,Me=new Dg(Se),Ce=new Yp(_,ce,ze,ge,O,d,l),Re=new Fg(_,O,Ee),He=new qg(D,ve,Ee,ge),xe=new Kp(D,Se,ve),Te=new sm(D,Se,ve),ve.programs=ee.programs,_.capabilities=Ee,_.extensions=Se,_.properties=fe,_.renderLists=q,_.shadowMap=Re,_.state=ge,_.info=ve}B();const ae=new Vg(_,D);this.xr=ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=Se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(k,ne,!1))},this.getSize=function(A){return A.set(k,ne)},this.setSize=function(A,Y,re=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,ne=Y,t.width=Math.floor(A*X),t.height=Math.floor(Y*X),re===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(k*X,ne*X).floor()},this.setDrawingBufferSize=function(A,Y,re){k=A,ne=Y,X=re,t.width=Math.floor(A*re),t.height=Math.floor(Y*re),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(F)},this.setViewport=function(A,Y,re,se){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,Y,re,se),ge.viewport(P.copy(F).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(W)},this.setScissor=function(A,Y,re,se){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,Y,re,se),ge.scissor(C.copy(W).multiplyScalar(X).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(A){ge.setScissorTest($=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){j=A},this.getClearColor=function(A){return A.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,re=!0){let se=0;if(A){let N=!1;if(U!==null){const Ae=U.texture.format;N=Ae===Co||Ae===Ro||Ae===Ao}if(N){const Ae=U.texture.type,Le=Ae===vn||Ae===fi||Ae===xr||Ae===yr||Ae===To||Ae===bo,ke=Ce.getClearColor(),Ne=Ce.getClearAlpha(),Xe=ke.r,qe=ke.g,Ge=ke.b;Le?(g[0]=Xe,g[1]=qe,g[2]=Ge,g[3]=Ne,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Xe,v[1]=qe,v[2]=Ge,v[3]=Ne,D.clearBufferiv(D.COLOR,0,v))}else se|=D.COLOR_BUFFER_BIT}Y&&(se|=D.DEPTH_BUFFER_BIT),re&&(se|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Ce.dispose(),q.dispose(),Me.dispose(),fe.dispose(),ce.dispose(),ze.dispose(),O.dispose(),we.dispose(),He.dispose(),ee.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ut),ae.removeEventListener("sessionend",mt),Mt.stop()};function ye(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=ve.autoReset,Y=Re.enabled,re=Re.autoUpdate,se=Re.needsUpdate,N=Re.type;B(),ve.autoReset=A,Re.enabled=Y,Re.autoUpdate=re,Re.needsUpdate=se,Re.type=N}function ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ie(A){const Y=A.target;Y.removeEventListener("dispose",ie),Ue(Y)}function Ue(A){Oe(A),fe.remove(A)}function Oe(A){const Y=fe.get(A).programs;Y!==void 0&&(Y.forEach(function(re){ee.releaseProgram(re)}),A.isShaderMaterial&&ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,re,se,N,Ae){Y===null&&(Y=me);const Le=N.isMesh&&N.matrixWorld.determinant()<0,ke=Zi(A,Y,re,se,N);ge.setMaterial(se,Le);let Ne=re.index,Xe=1;if(se.wireframe===!0){if(Ne=M.getWireframeAttribute(re),Ne===void 0)return;Xe=2}const qe=re.drawRange,Ge=re.attributes.position;let Ze=qe.start*Xe,it=(qe.start+qe.count)*Xe;Ae!==null&&(Ze=Math.max(Ze,Ae.start*Xe),it=Math.min(it,(Ae.start+Ae.count)*Xe)),Ne!==null?(Ze=Math.max(Ze,0),it=Math.min(it,Ne.count)):Ge!=null&&(Ze=Math.max(Ze,0),it=Math.min(it,Ge.count));const ft=it-Ze;if(ft<0||ft===1/0)return;we.setup(N,se,ke,re,Ne);let lt,rt=xe;if(Ne!==null&&(lt=R.get(Ne),rt=Te,rt.setIndex(lt)),N.isMesh)se.wireframe===!0?(ge.setLineWidth(se.wireframeLinewidth*_e()),rt.setMode(D.LINES)):rt.setMode(D.TRIANGLES);else if(N.isLine){let We=se.linewidth;We===void 0&&(We=1),ge.setLineWidth(We*_e()),N.isLineSegments?rt.setMode(D.LINES):N.isLineLoop?rt.setMode(D.LINE_LOOP):rt.setMode(D.LINE_STRIP)}else N.isPoints?rt.setMode(D.POINTS):N.isSprite&&rt.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Er("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))rt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const We=N._multiDrawStarts,ot=N._multiDrawCounts,$e=N._multiDrawCount,xt=Ne?R.get(Ne).bytesPerElement:1,fn=fe.get(se).currentProgram.getUniforms();for(let At=0;At<$e;At++)fn.setValue(D,"_gl_DrawID",At),rt.render(We[At]/xt,ot[At])}else if(N.isInstancedMesh)rt.renderInstances(Ze,ft,N.count);else if(re.isInstancedBufferGeometry){const We=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,ot=Math.min(re.instanceCount,We);rt.renderInstances(Ze,ft,ot)}else rt.render(Ze,ft)};function Be(A,Y,re){A.transparent===!0&&A.side===ln&&A.forceSinglePass===!1?(A.side=zt,A.needsUpdate=!0,_t(A,Y,re),A.side=Hn,A.needsUpdate=!0,_t(A,Y,re),A.side=ln):_t(A,Y,re)}this.compile=function(A,Y,re=null){re===null&&(re=A),p=Me.get(re),p.init(Y),E.push(p),re.traverseVisible(function(N){N.isLight&&N.layers.test(Y.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),A!==re&&A.traverseVisible(function(N){N.isLight&&N.layers.test(Y.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const se=new Set;return A.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Ae=N.material;if(Ae)if(Array.isArray(Ae))for(let Le=0;Le<Ae.length;Le++){const ke=Ae[Le];Be(ke,re,N),se.add(ke)}else Be(Ae,re,N),se.add(Ae)}),p=E.pop(),se},this.compileAsync=function(A,Y,re=null){const se=this.compile(A,Y,re);return new Promise(N=>{function Ae(){if(se.forEach(function(Le){fe.get(Le).currentProgram.isReady()&&se.delete(Le)}),se.size===0){N(A);return}setTimeout(Ae,10)}Se.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Ve=null;function pt(A){Ve&&Ve(A)}function ut(){Mt.stop()}function mt(){Mt.start()}const Mt=new hh;Mt.setAnimationLoop(pt),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(A){Ve=A,ae.setAnimationLoop(A),A===null?Mt.stop():Mt.start()},ae.addEventListener("sessionstart",ut),ae.addEventListener("sessionend",mt),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(Y),Y=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,Y,U),p=Me.get(A,E.length),p.init(Y),E.push(p),z.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),te.setFromProjectionMatrix(z,gn,Y.reversedDepth),G=this.localClippingEnabled,Z=he.init(this.clippingPlanes,G),m=q.get(A,S.length),m.init(),S.push(m),ae.enabled===!0&&ae.isPresenting===!0){const Ae=_.xr.getDepthSensingMesh();Ae!==null&&qt(Ae,Y,-1/0,_.sortObjects)}qt(A,Y,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(K,j),de=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,de&&Ce.addToRenderList(m,A),this.info.render.frame++,Z===!0&&he.beginShadows();const re=p.state.shadowsArray;Re.render(re,A,Y),Z===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=m.opaque,N=m.transmissive;if(p.setupLights(),Y.isArrayCamera){const Ae=Y.cameras;if(N.length>0)for(let Le=0,ke=Ae.length;Le<ke;Le++){const Ne=Ae[Le];tn(se,N,A,Ne)}de&&Ce.render(A);for(let Le=0,ke=Ae.length;Le<ke;Le++){const Ne=Ae[Le];Yt(m,A,Ne,Ne.viewport)}}else N.length>0&&tn(se,N,A,Y),de&&Ce.render(A),Yt(m,A,Y);U!==null&&w===0&&(be.updateMultisampleRenderTarget(U),be.updateRenderTargetMipmap(U)),A.isScene===!0&&A.onAfterRender(_,A,Y),we.resetDefaultState(),y=-1,x=null,E.pop(),E.length>0?(p=E[E.length-1],Z===!0&&he.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function qt(A,Y,re,se){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){se&&pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(z);const Le=O.update(A),ke=A.material;ke.visible&&m.push(A,Le,ke,re,pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||te.intersectsObject(A))){const Le=O.update(A),ke=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),pe.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),pe.copy(Le.boundingSphere.center)),pe.applyMatrix4(A.matrixWorld).applyMatrix4(z)),Array.isArray(ke)){const Ne=Le.groups;for(let Xe=0,qe=Ne.length;Xe<qe;Xe++){const Ge=Ne[Xe],Ze=ke[Ge.materialIndex];Ze&&Ze.visible&&m.push(A,Le,Ze,re,pe.z,Ge)}}else ke.visible&&m.push(A,Le,ke,re,pe.z,null)}}const Ae=A.children;for(let Le=0,ke=Ae.length;Le<ke;Le++)qt(Ae[Le],Y,re,se)}function Yt(A,Y,re,se){const N=A.opaque,Ae=A.transmissive,Le=A.transparent;p.setupLightsView(re),Z===!0&&he.setGlobalState(_.clippingPlanes,re),se&&ge.viewport(P.copy(se)),N.length>0&&jt(N,Y,re),Ae.length>0&&jt(Ae,Y,re),Le.length>0&&jt(Le,Y,re),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function tn(A,Y,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[se.id]===void 0&&(p.state.transmissionRenderTarget[se.id]=new pi(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?Tr:vn,minFilter:si,samples:4,stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const Ae=p.state.transmissionRenderTarget[se.id],Le=se.viewport||P;Ae.setSize(Le.z*_.transmissionResolutionScale,Le.w*_.transmissionResolutionScale);const ke=_.getRenderTarget(),Ne=_.getActiveCubeFace(),Xe=_.getActiveMipmapLevel();_.setRenderTarget(Ae),_.getClearColor(I),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),de&&Ce.render(re);const qe=_.toneMapping;_.toneMapping=Gn;const Ge=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),p.setupLightsView(se),Z===!0&&he.setGlobalState(_.clippingPlanes,se),jt(A,re,se),be.updateMultisampleRenderTarget(Ae),be.updateRenderTargetMipmap(Ae),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let it=0,ft=Y.length;it<ft;it++){const lt=Y[it],rt=lt.object,We=lt.geometry,ot=lt.material,$e=lt.group;if(ot.side===ln&&rt.layers.test(se.layers)){const xt=ot.side;ot.side=zt,ot.needsUpdate=!0,Kt(rt,re,se,We,ot,$e),ot.side=xt,ot.needsUpdate=!0,Ze=!0}}Ze===!0&&(be.updateMultisampleRenderTarget(Ae),be.updateRenderTargetMipmap(Ae))}_.setRenderTarget(ke,Ne,Xe),_.setClearColor(I,V),Ge!==void 0&&(se.viewport=Ge),_.toneMapping=qe}function jt(A,Y,re){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let N=0,Ae=A.length;N<Ae;N++){const Le=A[N],ke=Le.object,Ne=Le.geometry,Xe=Le.group;let qe=Le.material;qe.allowOverride===!0&&se!==null&&(qe=se),ke.layers.test(re.layers)&&Kt(ke,Y,re,Ne,qe,Xe)}}function Kt(A,Y,re,se,N,Ae){A.onBeforeRender(_,Y,re,se,N,Ae),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),N.onBeforeRender(_,Y,re,se,A,Ae),N.transparent===!0&&N.side===ln&&N.forceSinglePass===!1?(N.side=zt,N.needsUpdate=!0,_.renderBufferDirect(re,Y,se,N,A,Ae),N.side=Hn,N.needsUpdate=!0,_.renderBufferDirect(re,Y,se,N,A,Ae),N.side=ln):_.renderBufferDirect(re,Y,se,N,A,Ae),A.onAfterRender(_,Y,re,se,N,Ae)}function _t(A,Y,re){Y.isScene!==!0&&(Y=me);const se=fe.get(A),N=p.state.lights,Ae=p.state.shadowsArray,Le=N.state.version,ke=ee.getParameters(A,N.state,Ae,Y,re),Ne=ee.getProgramCacheKey(ke);let Xe=se.programs;se.environment=A.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(A.isMeshStandardMaterial?ze:ce).get(A.envMap||se.environment),se.envMapRotation=se.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",ie),Xe=new Map,se.programs=Xe);let qe=Xe.get(Ne);if(qe!==void 0){if(se.currentProgram===qe&&se.lightsStateVersion===Le)return Ki(A,ke),qe}else ke.uniforms=ee.getUniforms(A),A.onBeforeCompile(ke,_),qe=ee.acquireProgram(ke,Ne),Xe.set(Ne,qe),se.uniforms=ke.uniforms;const Ge=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=he.uniform),Ki(A,ke),se.needsLights=wr(A),se.lightsStateVersion=Le,se.needsLights&&(Ge.ambientLightColor.value=N.state.ambient,Ge.lightProbe.value=N.state.probe,Ge.directionalLights.value=N.state.directional,Ge.directionalLightShadows.value=N.state.directionalShadow,Ge.spotLights.value=N.state.spot,Ge.spotLightShadows.value=N.state.spotShadow,Ge.rectAreaLights.value=N.state.rectArea,Ge.ltc_1.value=N.state.rectAreaLTC1,Ge.ltc_2.value=N.state.rectAreaLTC2,Ge.pointLights.value=N.state.point,Ge.pointLightShadows.value=N.state.pointShadow,Ge.hemisphereLights.value=N.state.hemi,Ge.directionalShadowMap.value=N.state.directionalShadowMap,Ge.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ge.spotShadowMap.value=N.state.spotShadowMap,Ge.spotLightMatrix.value=N.state.spotLightMatrix,Ge.spotLightMap.value=N.state.spotLightMap,Ge.pointShadowMap.value=N.state.pointShadowMap,Ge.pointShadowMatrix.value=N.state.pointShadowMatrix),se.currentProgram=qe,se.uniformsList=null,qe}function un(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=hs.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Ki(A,Y){const re=fe.get(A);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.batchingColor=Y.batchingColor,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.instancingMorph=Y.instancingMorph,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function Zi(A,Y,re,se,N){Y.isScene!==!0&&(Y=me),be.resetTextureUnits();const Ae=Y.fog,Le=se.isMeshStandardMaterial?Y.environment:null,ke=U===null?_.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Vi,Ne=(se.isMeshStandardMaterial?ze:ce).get(se.envMap||Le),Xe=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,qe=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ge=!!re.morphAttributes.position,Ze=!!re.morphAttributes.normal,it=!!re.morphAttributes.color;let ft=Gn;se.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ft=_.toneMapping);const lt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,rt=lt!==void 0?lt.length:0,We=fe.get(se),ot=p.state.lights;if(Z===!0&&(G===!0||A!==x)){const gt=A===x&&se.id===y;he.setState(se,A,gt)}let $e=!1;se.version===We.__version?(We.needsLights&&We.lightsStateVersion!==ot.state.version||We.outputColorSpace!==ke||N.isBatchedMesh&&We.batching===!1||!N.isBatchedMesh&&We.batching===!0||N.isBatchedMesh&&We.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&We.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&We.instancing===!1||!N.isInstancedMesh&&We.instancing===!0||N.isSkinnedMesh&&We.skinning===!1||!N.isSkinnedMesh&&We.skinning===!0||N.isInstancedMesh&&We.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&We.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&We.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&We.instancingMorph===!1&&N.morphTexture!==null||We.envMap!==Ne||se.fog===!0&&We.fog!==Ae||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==he.numPlanes||We.numIntersection!==he.numIntersection)||We.vertexAlphas!==Xe||We.vertexTangents!==qe||We.morphTargets!==Ge||We.morphNormals!==Ze||We.morphColors!==it||We.toneMapping!==ft||We.morphTargetsCount!==rt)&&($e=!0):($e=!0,We.__version=se.version);let xt=We.currentProgram;$e===!0&&(xt=_t(se,Y,N));let fn=!1,At=!1,xn=!1;const tt=xt.getUniforms(),Ft=We.uniforms;if(ge.useProgram(xt.program)&&(fn=!0,At=!0,xn=!0),se.id!==y&&(y=se.id,At=!0),fn||x!==A){ge.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),tt.setValue(D,"projectionMatrix",A.projectionMatrix),tt.setValue(D,"viewMatrix",A.matrixWorldInverse);const Ct=tt.map.cameraPosition;Ct!==void 0&&Ct.setValue(D,J.setFromMatrixPosition(A.matrixWorld)),Ee.logarithmicDepthBuffer&&tt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&tt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,At=!0,xn=!0)}if(N.isSkinnedMesh){tt.setOptional(D,N,"bindMatrix"),tt.setOptional(D,N,"bindMatrixInverse");const gt=N.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),tt.setValue(D,"boneTexture",gt.boneTexture,be))}N.isBatchedMesh&&(tt.setOptional(D,N,"batchingTexture"),tt.setValue(D,"batchingTexture",N._matricesTexture,be),tt.setOptional(D,N,"batchingIdTexture"),tt.setValue(D,"batchingIdTexture",N._indirectTexture,be),tt.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&tt.setValue(D,"batchingColorTexture",N._colorsTexture,be));const Rt=re.morphAttributes;if((Rt.position!==void 0||Rt.normal!==void 0||Rt.color!==void 0)&&le.update(N,re,xt),(At||We.receiveShadow!==N.receiveShadow)&&(We.receiveShadow=N.receiveShadow,tt.setValue(D,"receiveShadow",N.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Ft.envMap.value=Ne,Ft.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(Ft.envMapIntensity.value=Y.environmentIntensity),At&&(tt.setValue(D,"toneMappingExposure",_.toneMappingExposure),We.needsLights&&As(Ft,xn),Ae&&se.fog===!0&&Q.refreshFogUniforms(Ft,Ae),Q.refreshMaterialUniforms(Ft,se,X,ne,p.state.transmissionRenderTarget[A.id]),hs.upload(D,un(We),Ft,be)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(hs.upload(D,un(We),Ft,be),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&tt.setValue(D,"center",N.center),tt.setValue(D,"modelViewMatrix",N.modelViewMatrix),tt.setValue(D,"normalMatrix",N.normalMatrix),tt.setValue(D,"modelMatrix",N.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const gt=se.uniformsGroups;for(let Ct=0,Un=gt.length;Ct<Un;Ct++){const Zt=gt[Ct];He.update(Zt,xt),He.bind(Zt,xt)}}return xt}function As(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function wr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,Y,re){const se=fe.get(A);se.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),fe.get(A.texture).__webglTexture=Y,fe.get(A.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:re,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const re=fe.get(A);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0};const gi=D.createFramebuffer();this.setRenderTarget=function(A,Y=0,re=0){U=A,b=Y,w=re;let se=!0,N=null,Ae=!1,Le=!1;if(A){const Ne=fe.get(A);if(Ne.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(D.FRAMEBUFFER,null),se=!1;else if(Ne.__webglFramebuffer===void 0)be.setupRenderTarget(A);else if(Ne.__hasExternalTextures)be.rebindTextures(A,fe.get(A.texture).__webglTexture,fe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ge=A.depthTexture;if(Ne.__boundDepthTexture!==Ge){if(Ge!==null&&fe.has(Ge)&&(A.width!==Ge.image.width||A.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Le=!0);const qe=fe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[Y])?N=qe[Y][re]:N=qe[Y],Ae=!0):A.samples>0&&be.useMultisampledRTT(A)===!1?N=fe.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?N=qe[re]:N=qe,P.copy(A.viewport),C.copy(A.scissor),L=A.scissorTest}else P.copy(F).multiplyScalar(X).floor(),C.copy(W).multiplyScalar(X).floor(),L=$;if(re!==0&&(N=gi),ge.bindFramebuffer(D.FRAMEBUFFER,N)&&se&&ge.drawBuffers(A,N),ge.viewport(P),ge.scissor(C),ge.setScissorTest(L),Ae){const Ne=fe.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ne.__webglTexture,re)}else if(Le){const Ne=Y;for(let Xe=0;Xe<A.textures.length;Xe++){const qe=fe.get(A.textures[Xe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Xe,qe.__webglTexture,re,Ne)}}else if(A!==null&&re!==0){const Ne=fe.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ne.__webglTexture,re)}y=-1},this.readRenderTargetPixels=function(A,Y,re,se,N,Ae,Le,ke=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=fe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){ge.bindFramebuffer(D.FRAMEBUFFER,Ne);try{const Xe=A.textures[ke],qe=Xe.format,Ge=Xe.type;if(!Ee.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-se&&re>=0&&re<=A.height-N&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ke),D.readPixels(Y,re,se,N,Pe.convert(qe),Pe.convert(Ge),Ae))}finally{const Xe=U!==null?fe.get(U).__webglFramebuffer:null;ge.bindFramebuffer(D.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,Y,re,se,N,Ae,Le,ke=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=fe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne)if(Y>=0&&Y<=A.width-se&&re>=0&&re<=A.height-N){ge.bindFramebuffer(D.FRAMEBUFFER,Ne);const Xe=A.textures[ke],qe=Xe.format,Ge=Xe.type;if(!Ee.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.bufferData(D.PIXEL_PACK_BUFFER,Ae.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ke),D.readPixels(Y,re,se,N,Pe.convert(qe),Pe.convert(Ge),0);const it=U!==null?fe.get(U).__webglFramebuffer:null;ge.bindFramebuffer(D.FRAMEBUFFER,it);const ft=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Eu(D,ft,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ae),D.deleteBuffer(Ze),D.deleteSync(ft),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,re=0){const se=Math.pow(2,-re),N=Math.floor(A.image.width*se),Ae=Math.floor(A.image.height*se),Le=Y!==null?Y.x:0,ke=Y!==null?Y.y:0;be.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,re,0,0,Le,ke,N,Ae),ge.unbindTexture()};const Ji=D.createFramebuffer(),Rs=D.createFramebuffer();this.copyTextureToTexture=function(A,Y,re=null,se=null,N=0,Ae=null){Ae===null&&(N!==0?(Er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=N,N=0):Ae=0);let Le,ke,Ne,Xe,qe,Ge,Ze,it,ft;const lt=A.isCompressedTexture?A.mipmaps[Ae]:A.image;if(re!==null)Le=re.max.x-re.min.x,ke=re.max.y-re.min.y,Ne=re.isBox3?re.max.z-re.min.z:1,Xe=re.min.x,qe=re.min.y,Ge=re.isBox3?re.min.z:0;else{const Rt=Math.pow(2,-N);Le=Math.floor(lt.width*Rt),ke=Math.floor(lt.height*Rt),A.isDataArrayTexture?Ne=lt.depth:A.isData3DTexture?Ne=Math.floor(lt.depth*Rt):Ne=1,Xe=0,qe=0,Ge=0}se!==null?(Ze=se.x,it=se.y,ft=se.z):(Ze=0,it=0,ft=0);const rt=Pe.convert(Y.format),We=Pe.convert(Y.type);let ot;Y.isData3DTexture?(be.setTexture3D(Y,0),ot=D.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(be.setTexture2DArray(Y,0),ot=D.TEXTURE_2D_ARRAY):(be.setTexture2D(Y,0),ot=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Y.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Y.unpackAlignment);const $e=D.getParameter(D.UNPACK_ROW_LENGTH),xt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),fn=D.getParameter(D.UNPACK_SKIP_PIXELS),At=D.getParameter(D.UNPACK_SKIP_ROWS),xn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,lt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,lt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);const tt=A.isDataArrayTexture||A.isData3DTexture,Ft=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const Rt=fe.get(A),gt=fe.get(Y),Ct=fe.get(Rt.__renderTarget),Un=fe.get(gt.__renderTarget);ge.bindFramebuffer(D.READ_FRAMEBUFFER,Ct.__webglFramebuffer),ge.bindFramebuffer(D.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let Zt=0;Zt<Ne;Zt++)tt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,fe.get(A).__webglTexture,N,Ge+Zt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,fe.get(Y).__webglTexture,Ae,ft+Zt)),D.blitFramebuffer(Xe,qe,Le,ke,Ze,it,Le,ke,D.DEPTH_BUFFER_BIT,D.NEAREST);ge.bindFramebuffer(D.READ_FRAMEBUFFER,null),ge.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(N!==0||A.isRenderTargetTexture||fe.has(A)){const Rt=fe.get(A),gt=fe.get(Y);ge.bindFramebuffer(D.READ_FRAMEBUFFER,Ji),ge.bindFramebuffer(D.DRAW_FRAMEBUFFER,Rs);for(let Ct=0;Ct<Ne;Ct++)tt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Rt.__webglTexture,N,Ge+Ct):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Rt.__webglTexture,N),Ft?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,gt.__webglTexture,Ae,ft+Ct):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gt.__webglTexture,Ae),N!==0?D.blitFramebuffer(Xe,qe,Le,ke,Ze,it,Le,ke,D.COLOR_BUFFER_BIT,D.NEAREST):Ft?D.copyTexSubImage3D(ot,Ae,Ze,it,ft+Ct,Xe,qe,Le,ke):D.copyTexSubImage2D(ot,Ae,Ze,it,Xe,qe,Le,ke);ge.bindFramebuffer(D.READ_FRAMEBUFFER,null),ge.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ft?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(ot,Ae,Ze,it,ft,Le,ke,Ne,rt,We,lt.data):Y.isCompressedArrayTexture?D.compressedTexSubImage3D(ot,Ae,Ze,it,ft,Le,ke,Ne,rt,lt.data):D.texSubImage3D(ot,Ae,Ze,it,ft,Le,ke,Ne,rt,We,lt):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ae,Ze,it,Le,ke,rt,We,lt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ae,Ze,it,lt.width,lt.height,rt,lt.data):D.texSubImage2D(D.TEXTURE_2D,Ae,Ze,it,Le,ke,rt,We,lt);D.pixelStorei(D.UNPACK_ROW_LENGTH,$e),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fn),D.pixelStorei(D.UNPACK_SKIP_ROWS,At),D.pixelStorei(D.UNPACK_SKIP_IMAGES,xn),Ae===0&&Y.generateMipmaps&&D.generateMipmap(ot),ge.unbindTexture()},this.initRenderTarget=function(A){fe.get(A).__webglFramebuffer===void 0&&be.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?be.setTextureCube(A,0):A.isData3DTexture?be.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?be.setTexture2DArray(A,0):be.setTexture2D(A,0),ge.unbindTexture()},this.resetState=function(){b=0,w=0,U=null,ge.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const hi=50,jg=20,Kg=.15,Zg=1.2,Jg=.6,Qg=34,$g=5,lc=10,mh=160,e0=1.25,t0=16,n0=mh,i0=2e3,is=[{startsAt:0,spawnInterval:3.2,waveSize:Math.round(e0*3.2),speedMultiplier:1,maxAlive:45,maxWordTier:0},{startsAt:30,spawnInterval:2.6,waveSize:7,speedMultiplier:1.1,maxAlive:75,maxWordTier:1},{startsAt:60,spawnInterval:2.1,waveSize:10,speedMultiplier:1.2,maxAlive:105,maxWordTier:2},{startsAt:90,spawnInterval:1.7,waveSize:13,speedMultiplier:1.3,maxAlive:135,maxWordTier:2},{startsAt:120,spawnInterval:1.4,waveSize:16,speedMultiplier:1.4,maxAlive:mh,maxWordTier:3}];function mo(s){let e=is[0];for(let t=1;t<is.length;t++)s>=is[t].startsAt&&(e=is[t]);return e}const Ye={arena:{radius:hi,gridDivisions:64,groundColor:857126,gridColor:2051210,rimColor:3662079,pylonColor:1122364,pylonGlowColor:3662079,pylonCount:10,fogColor:395796,fogNear:48,fogFar:145,starCount:350},camera:{fov:60,near:.5,far:400,height:20,distance:17,lookAtHeight:1.4,followRate:5,maxShake:1.4},player:{radius:.62,capsuleRadius:.5,capsuleLength:.7,bodyY:.85,color:3114751,emissive:802718,indicatorColor:5884159,maxSpeed:7.5,acceleration:6.5,turnRate:9},enemies:{capacity:200,radius:.45,capsuleRadius:.4,capsuleLength:.4,bodyY:.6,color:16724807,emissive:8195350,baseSpeed:2.2,speedVariance:.3,wobbleAmplitude:.42,wobbleFrequency:2.4,separationRadius:1.15,separationStrength:7,spawnRadius:hi-3,spawnRadiusJitter:4,spawnArenaMargin:2,spawnMinSeparation:1.1,spawnClusterSpread:.45},projectile:{capacity:96,speed:Qg,letterSpreadAngle:Kg,letterSpreadDistance:Zg,letterStackHeight:Jg,letterSpeedVariance:.08,maxDistance:jg,gravity:32,restY:.68,launchHeight:1,groundLifetimeMs:2e3,fadeMs:300,hitRadius:1.2,impactRadius:3,groundHazardRadius:1.6,fillColor:16777215,outlineColor:4843263},typing:{visibleWords:3,repeatWindow:8,errorRecoveryMs:i0},scoring:{correctWord:100,kill:50,longWordBonusPerChar:10,longWordThreshold:8,wrongChar:-10,skip:-5},density:{sectors:12},steering:{avoidanceWeight:1,centerWeight:.85,boundaryStart:hi-12,boundaryWeight:1.7,inertiaWeight:.35,roamWeight:.3,roamTurnRate:.9},targeting:{threatDistanceScale:10,threatSidewaysFactor:.45,threatUrgencyBoost:.8,threatUrgencyTimeScale:2},effects:{particleCapacity:700,shockwaveCapacity:12,particleLifetime:.55,shockwaveLifetime:.35},audio:{masterGain:.32}};class r0{constructor(){oe(this,"context",null);oe(this,"master",null);oe(this,"noiseBuffer",null);oe(this,"muted",!1)}unlock(){if(this.context===null){const e=window.AudioContext??window.webkitAudioContext;if(e===void 0)return;try{this.context=new e}catch{return}this.master=this.context.createGain(),this.master.gain.value=this.muted?0:Ye.audio.masterGain,this.master.connect(this.context.destination),this.noiseBuffer=this.createNoiseBuffer(this.context)}this.context.state==="suspended"&&this.context.resume()}get isMuted(){return this.muted}setMuted(e){this.muted=e,this.master!==null&&this.context!==null&&this.master.gain.setTargetAtTime(e?0:Ye.audio.masterGain,this.context.currentTime,.02)}toggleMuted(){return this.setMuted(!this.muted),this.muted}correct(e){const t=Math.min(640*Math.pow(1.06,e),1500);this.tone({frequency:t,duration:.06,type:"triangle",level:.16})}wrong(){this.tone({frequency:190,endFrequency:90,duration:.17,type:"square",level:.22})}launch(){this.tone({frequency:260,endFrequency:840,duration:.16,type:"sawtooth",level:.14}),this.noise(.1,.1,2400)}kill(){this.tone({frequency:520+Math.random()*140,duration:.07,type:"square",level:.1})}impact(){this.tone({frequency:110,endFrequency:60,duration:.2,type:"sine",level:.3}),this.noise(.22,.24,1100)}skip(){this.tone({frequency:330,endFrequency:230,duration:.09,type:"triangle",level:.12})}death(){this.tone({frequency:420,endFrequency:55,duration:.85,type:"sawtooth",level:.26}),this.noise(.5,.2,600)}dispose(){this.context!==null&&this.context.close(),this.context=null,this.master=null,this.noiseBuffer=null}tone(e){const t=this.context,r=this.master;if(t===null||r===null||this.muted)return;const i=t.currentTime+(e.delay??0),n=t.createOscillator(),a=t.createGain();n.type=e.type,n.frequency.setValueAtTime(e.frequency,i),e.endFrequency!==void 0&&n.frequency.exponentialRampToValueAtTime(Math.max(e.endFrequency,1),i+e.duration),a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(e.level,i+.012),a.gain.exponentialRampToValueAtTime(1e-4,i+e.duration),n.connect(a),a.connect(r),n.start(i),n.stop(i+e.duration+.03),n.onended=()=>{n.disconnect(),a.disconnect()}}noise(e,t,r){const i=this.context,n=this.master;if(i===null||n===null||this.muted||this.noiseBuffer===null)return;const a=i.currentTime,o=i.createBufferSource();o.buffer=this.noiseBuffer;const l=i.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(r,a);const c=i.createGain();c.gain.setValueAtTime(t,a),c.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l),l.connect(c),c.connect(n),o.start(a),o.stop(a+e),o.onended=()=>{o.disconnect(),l.disconnect(),c.disconnect()}}createNoiseBuffer(e){const t=Math.floor(e.sampleRate*.5),r=e.createBuffer(1,t,e.sampleRate),i=r.getChannelData(0);for(let n=0;n<t;n++)i[n]=Math.random()*2-1;return r}}class gh{constructor(){oe(this,"hits",[])}findPlayerCollision(e,t,r){for(let i=0;i<r.length;i++){const n=r[i],a=n.position.x-e.x,o=n.position.z-e.z,l=t+n.radius;if(a*a+o*o<=l*l)return n}return null}collectAt(e,t,r){this.hits.length=0;const i=t*t;for(let n=0;n<r.length;n++){const a=r[n],o=a.position.x-e.x,l=a.position.z-e.z;o*o+l*l<=i&&this.hits.push(a)}return this.hits}}const Wn=Math.PI*2;function Rn(s,e,t){return s<e?e:s>t?t:s}function vh(s,e,t){return s+(e-s)*t}function xs(s,e,t,r){return vh(s,e,1-Math.exp(-t*r))}function li(s,e){return s+Math.random()*(e-s)}function s0(s,e){return Math.floor(li(s,e+1))}function a0(){let s=0,e=0;for(;s===0;)s=Math.random();for(;e===0;)e=Math.random();return Math.sqrt(-2*Math.log(s))*Math.cos(Wn*e)}function cc(s,e){const t=(s+Math.PI)/Wn,r=Math.floor(t*e);return Rn(r,0,e-1)}function o0(s,e,t){const r=-Math.PI+(s+.5)/e*Wn;return t.set(Math.cos(r),0,Math.sin(r)),t}function _h(s){const e=Math.max(0,Math.floor(s)),t=Math.floor(e/60),r=e%60;return`${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`}const hc=60,l0=15;class c0{constructor(){oe(this,"sectors");oe(this,"weights");oe(this,"centroidX");oe(this,"centroidZ");oe(this,"centroidWeight");oe(this,"direction",new H);oe(this,"originX",0);oe(this,"originZ",0);oe(this,"roamAngle",Math.random()*Math.PI*2);this.sectors=Ye.density.sectors,this.weights=new Float64Array(this.sectors),this.centroidX=new Float64Array(this.sectors),this.centroidZ=new Float64Array(this.sectors),this.centroidWeight=new Float64Array(this.sectors)}analyze(e,t){this.weights.fill(0),this.centroidX.fill(0),this.centroidZ.fill(0),this.centroidWeight.fill(0),this.originX=t.x,this.originZ=t.z;for(let r=0;r<e.length;r++){const i=e[r],n=i.position.x-t.x,a=i.position.z-t.z,o=Math.hypot(n,a);if(o>hc)continue;const l=cc(Math.atan2(a,n),this.sectors);this.weights[l]+=1/(1+o/l0);const c=1/(1+o*.08);this.centroidX[l]+=i.position.x*c,this.centroidZ[l]+=i.position.z*c,this.centroidWeight[l]+=c}}computeSteering(e,t,r,i){const{steering:n}=Ye;let a=0,o=0,l=0,c=0;for(let g=0;g<this.sectors;g++){const v=this.weights[g];v!==0&&(o0(g,this.sectors,this.direction),l+=this.direction.x*v,c+=this.direction.z*v)}const h=Math.hypot(l,c);h>1e-6&&(a+=-l/h*n.avoidanceWeight,o+=-c/h*n.avoidanceWeight);const u=Math.hypot(t.x,t.z);if(u>1e-6){const g=u/hi*n.centerWeight;if(a+=-t.x/u*g,o+=-t.z/u*g,u>n.boundaryStart){const m=(u-n.boundaryStart)/(hi-n.boundaryStart)*n.boundaryWeight;a+=-t.x/u*m,o+=-t.z/u*m}}const f=Math.hypot(r.x,r.z);f>.5&&(a+=r.x/f*n.inertiaWeight,o+=r.z/f*n.inertiaWeight),this.roamAngle+=(Math.random()*2-1)*n.roamTurnRate*i,a+=Math.cos(this.roamAngle)*n.roamWeight,o+=Math.sin(this.roamAngle)*n.roamWeight;const d=Math.hypot(a,o);if(d<1e-6){e.set(0,0,0);return}e.set(a/d,0,o/d)}computeAimPoint(e,t){let r=null,i=-1,n=0;for(let c=0;c<t.length;c++){const h=t[c],u=h.position.x-this.originX,f=h.position.z-this.originZ,d=Math.hypot(u,f);if(d>hc)continue;const g=this.threatScore(h,u,f,d);g>n&&(n=g,r=h,i=cc(Math.atan2(f,u),this.sectors))}if(r===null||i<0)return!1;let a=0,o=0,l=0;for(let c=-1;c<=1;c++){const h=(i+c+this.sectors)%this.sectors;a+=this.centroidX[h],o+=this.centroidZ[h],l+=this.centroidWeight[h]}return l>0?e.set(a/l,0,o/l):e.set(r.position.x,0,r.position.z),!0}threatScore(e,t,r,i){const{targeting:n}=Ye,a=1/(1+i/n.threatDistanceScale),o=Math.max(0,-(e.velocity.x*t+e.velocity.z*r)/Math.max(i,1e-4)),l=Math.min(o/Math.max(e.speed,1e-4),1),c=n.threatSidewaysFactor+(1-n.threatSidewaysFactor)*l;let h=0;return o>1e-4&&(h=1/(1+i/o/n.threatUrgencyTimeScale)),a*c*(1+n.threatUrgencyBoost*h)}}class ko{constructor(e,t=0){oe(this,"free",[]);for(let r=0;r<t;r++)this.free.push(e())}acquire(){return this.free.pop()}release(e){this.free.push(e)}get available(){return this.free.length}dispose(e){if(e)for(const t of this.free)e(t);this.free.length=0}}const h0=14,xa=.5,u0=4.5;class f0{constructor(){oe(this,"particles");oe(this,"particleGeometry");oe(this,"particleMaterial");oe(this,"pool");oe(this,"active",[]);oe(this,"shockwaveGeometry");oe(this,"shockwaves",[]);oe(this,"activeShockwaves",[]);oe(this,"nextShockwave",0);oe(this,"dummy",new vt);oe(this,"lastWritten",0);const{effects:e}=Ye;this.particleGeometry=new qi(.16,.16,.16),this.particleMaterial=new An({toneMapped:!1}),this.particles=new th(this.particleGeometry,this.particleMaterial,e.particleCapacity),this.particles.instanceMatrix.setUsage(Wc),this.particles.frustumCulled=!1;const t=new je(16777215);this.dummy.scale.setScalar(0),this.dummy.updateMatrix();for(let r=0;r<e.particleCapacity;r++)this.particles.setMatrixAt(r,this.dummy.matrix),this.particles.setColorAt(r,t);this.particles.instanceMatrix.needsUpdate=!0,this.particles.instanceColor&&(this.particles.instanceColor.needsUpdate=!0),this.pool=new ko(()=>({position:new H,velocity:new H,color:new je,life:0,maxLife:1,size:1,spin:0}),e.particleCapacity),this.shockwaveGeometry=new Es(.7,1,48);for(let r=0;r<e.shockwaveCapacity;r++){const i=new An({transparent:!0,depthWrite:!1,side:ln,toneMapped:!1}),n=new dt(this.shockwaveGeometry,i);n.rotation.x=-Math.PI/2,n.visible=!1,this.shockwaves.push({mesh:n,material:i,life:0})}}burst(e,t,r,i){const{effects:n}=Ye;for(let a=0;a<r;a++){const o=this.pool.acquire();if(o===void 0)return;if(this.active.length>=n.particleCapacity){this.pool.release(o);return}o.position.copy(e),o.color.set(t);let l=Math.random()-.5,c=Math.random()*.9+.15,h=Math.random()-.5;const u=Math.hypot(l,c,h)||1,f=i*(.4+Math.random()*.9);l=l/u*f,c=c/u*f,h=h/u*f,o.velocity.set(l,c,h),o.maxLife=n.particleLifetime*(.7+Math.random()*.6),o.life=o.maxLife,o.size=.6+Math.random()*1.1,o.spin=Math.random()*Wn,this.active.push(o)}}shockwave(e,t){const{effects:r}=Ye,i=this.shockwaves[this.nextShockwave];this.nextShockwave=(this.nextShockwave+1)%this.shockwaves.length,i.life=r.shockwaveLifetime,i.mesh.position.set(e.x,.12,e.z),i.mesh.scale.setScalar(xa),i.material.color.set(t),i.material.opacity=.9,i.mesh.visible=!0,this.activeShockwaves.includes(i)||this.activeShockwaves.push(i)}update(e){this.updateParticles(e),this.updateShockwaves(e)}updateParticles(e){for(let t=this.active.length-1;t>=0;t--){const r=this.active[t];if(r.life-=e,r.life<=0){const n=this.active.pop();n!==void 0&&n!==r&&(this.active[t]=n);continue}r.velocity.y-=h0*e;const i=Math.exp(-3*e);r.velocity.multiplyScalar(i),r.position.addScaledVector(r.velocity,e),r.position.y<.08&&(r.position.y=.08,r.velocity.y=Math.abs(r.velocity.y)*.35)}for(let t=0;t<this.active.length;t++){const r=this.active[t],i=Rn(r.life/r.maxLife,0,1);this.dummy.position.copy(r.position),this.dummy.rotation.set(r.spin+i*4,r.spin+i*3,0),this.dummy.scale.setScalar(r.size*i),this.dummy.updateMatrix(),this.particles.setMatrixAt(t,this.dummy.matrix),this.particles.setColorAt(t,r.color)}this.dummy.scale.setScalar(0),this.dummy.updateMatrix();for(let t=this.active.length;t<this.lastWritten;t++)this.particles.setMatrixAt(t,this.dummy.matrix);(this.active.length>0||this.lastWritten!==this.active.length)&&(this.particles.instanceMatrix.needsUpdate=!0,this.particles.instanceColor&&(this.particles.instanceColor.needsUpdate=!0)),this.lastWritten=this.active.length}updateShockwaves(e){const{effects:t}=Ye;for(let r=this.activeShockwaves.length-1;r>=0;r--){const i=this.activeShockwaves[r];i.life-=e;const n=1-Rn(i.life/t.shockwaveLifetime,0,1);if(i.mesh.scale.setScalar(xa+(u0-xa)*n),i.material.opacity=(1-n)*.9,i.life<=0){i.mesh.visible=!1;const a=this.activeShockwaves.pop();a!==void 0&&a!==i&&(this.activeShockwaves[r]=a)}}}reset(){for(const e of this.active)this.pool.release(e);this.active.length=0;for(const e of this.activeShockwaves)e.mesh.visible=!1;this.activeShockwaves.length=0,this.dummy.scale.setScalar(0),this.dummy.updateMatrix();for(let e=0;e<this.lastWritten;e++)this.particles.setMatrixAt(e,this.dummy.matrix);this.lastWritten>0&&(this.particles.instanceMatrix.needsUpdate=!0),this.lastWritten=0}addTo(e){e.add(this.particles);for(const t of this.shockwaves)e.add(t.mesh)}dispose(e){e.remove(this.particles);for(const t of this.shockwaves)e.remove(t.mesh),t.material.dispose();this.particleGeometry.dispose(),this.particleMaterial.dispose(),this.shockwaveGeometry.dispose(),this.pool.dispose(),this.active.length=0,this.activeShockwaves.length=0,this.shockwaves.length=0}}class ys{constructor(e){oe(this,"cells",new Map);this.cellSize=e}static key(e,t){return(e+4096)*8192+(t+4096)}clear(){for(const e of this.cells.values())e.length=0}insert(e){const t=Math.floor(e.position.x/this.cellSize),r=Math.floor(e.position.z/this.cellSize),i=ys.key(t,r);let n=this.cells.get(i);n===void 0&&(n=[],this.cells.set(i,n)),n.push(e)}collect(e,t,r,i){i.length=0;const n=Math.ceil(r/this.cellSize),a=Math.floor(e/this.cellSize),o=Math.floor(t/this.cellSize);for(let l=a-n;l<=a+n;l++)for(let c=o-n;c<=o+n;c++){const h=this.cells.get(ys.key(l,c));if(h!==void 0)for(let u=0;u<h.length;u++)i.push(h[u])}return i}}function d0(){return{active:!1,position:new H,velocity:new H,speed:0,radius:Ye.enemies.radius,wobblePhase:0,wobbleFrequency:0,wobbleAmplitude:0,flash:0,slot:-1}}const uc=.16;class p0{constructor(){oe(this,"mesh");oe(this,"material");oe(this,"pool");oe(this,"active",[]);oe(this,"dying",[]);oe(this,"freeSlots",[]);oe(this,"dummy",new vt);oe(this,"hash");oe(this,"neighbours",[]);oe(this,"baseColor");oe(this,"flashColor",new je(16777215));oe(this,"scratchColor",new je);oe(this,"elapsed",0);const{enemies:e}=Ye,t=new Ss(e.capsuleRadius,e.capsuleLength,4,12);this.material=new oi({color:e.color,emissive:e.emissive,emissiveIntensity:.7,roughness:.45,metalness:.1}),this.baseColor=new je(e.color),this.mesh=new th(t,this.material,e.capacity),this.mesh.instanceMatrix.setUsage(Wc),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,this.dummy.scale.setScalar(0),this.dummy.updateMatrix();for(let r=0;r<e.capacity;r++)this.mesh.setMatrixAt(r,this.dummy.matrix),this.mesh.setColorAt(r,this.baseColor),this.freeSlots.push(r);this.freeSlots.reverse(),this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.pool=new ko(d0,e.capacity),this.hash=new ys(e.separationRadius*1.5)}get activeCount(){return this.active.length}get activeEnemies(){return this.active}spawn(e,t,r){const{enemies:i}=Ye,n=this.pool.acquire(),a=this.freeSlots.pop();return n===void 0||a===void 0?(n!==void 0&&this.pool.release(n),null):(n.active=!0,n.position.set(e,i.bodyY,t),n.velocity.set(0,0,0),n.speed=r,n.radius=i.radius,n.wobblePhase=Math.random()*Math.PI*2,n.wobbleFrequency=i.wobbleFrequency*(.75+Math.random()*.5),n.wobbleAmplitude=i.wobbleAmplitude*(.5+Math.random()),n.flash=0,n.slot=a,this.dummy.position.copy(n.position),this.dummy.rotation.set(0,Math.atan2(-e,-t),0),this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),this.mesh.setMatrixAt(a,this.dummy.matrix),this.mesh.setColorAt(a,this.baseColor),this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.active.push(n),n)}kill(e){if(!e.active)return;e.active=!1,e.flash=uc;const t=this.active.indexOf(e);if(t>=0){const r=this.active.pop();r!==void 0&&r!==e&&(this.active[t]=r)}this.dying.push(e)}update(e,t){const{enemies:r}=Ye;this.elapsed+=e,this.hash.clear();for(let i=0;i<this.active.length;i++)this.hash.insert(this.active[i]);for(let i=this.active.length-1;i>=0;i--){const n=this.active[i];let a=t.x-n.position.x,o=t.z-n.position.z;const l=Math.hypot(a,o)||1;a/=l,o/=l;const c=Math.sin(this.elapsed*n.wobbleFrequency+n.wobblePhase)*n.wobbleAmplitude;let h=a-o*c,u=o+a*c;const f=Math.hypot(h,u)||1;h=h/f*n.speed,u=u/f*n.speed;const d=this.hash.collect(n.position.x,n.position.z,r.separationRadius,this.neighbours);for(let g=0;g<d.length;g++){const v=d[g];if(v===n)continue;const m=n.position.x-v.position.x,p=n.position.z-v.position.z,S=m*m+p*p,E=r.separationRadius;if(S>=E*E||S<1e-6)continue;const _=Math.sqrt(S),T=(1-_/E)*r.separationStrength;h+=m/_*T,u+=p/_*T}n.velocity.set(h,0,u),n.position.x+=h*e,n.position.z+=u*e,n.position.y=r.bodyY,this.writeInstance(n,h,u,1,0)}this.updateDying(e),this.mesh.instanceMatrix.needsUpdate=!0}updateDying(e){for(let t=this.dying.length-1;t>=0;t--){const r=this.dying[t];r.flash-=e;const i=Rn(r.flash/uc,0,1);if(this.writeInstance(r,r.velocity.x,r.velocity.z,i,i),r.flash<=0){this.dummy.position.copy(r.position),this.dummy.scale.setScalar(0),this.dummy.updateMatrix(),this.mesh.setMatrixAt(r.slot,this.dummy.matrix);const n=this.dying.pop();n!==void 0&&n!==r&&(this.dying[t]=n),this.freeSlots.push(r.slot),r.slot=-1,r.flash=0,this.pool.release(r)}}this.dying.length>0&&this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}writeInstance(e,t,r,i,n){this.dummy.position.copy(e.position),this.dummy.rotation.set(0,Math.atan2(t,r),0),this.dummy.scale.setScalar(i),this.dummy.updateMatrix(),this.mesh.setMatrixAt(e.slot,this.dummy.matrix),this.scratchColor.copy(this.baseColor).lerp(this.flashColor,n),this.mesh.setColorAt(e.slot,this.scratchColor)}reset(){const e=t=>{t.active=!1,t.flash=0,t.slot=-1,this.pool.release(t)};for(let t=0;t<this.active.length;t++)e(this.active[t]);for(let t=0;t<this.dying.length;t++)e(this.dying[t]);this.active.length=0,this.dying.length=0,this.freeSlots.length=0;for(let t=Ye.enemies.capacity-1;t>=0;t--)this.freeSlots.push(t),this.dummy.position.set(0,0,0),this.dummy.rotation.set(0,0,0),this.dummy.scale.setScalar(0),this.dummy.updateMatrix(),this.mesh.setMatrixAt(t,this.dummy.matrix);this.mesh.instanceMatrix.needsUpdate=!0,this.elapsed=0}addTo(e){e.add(this.mesh)}dispose(e){e.remove(this.mesh),this.mesh.geometry.dispose(),this.material.dispose(),this.pool.dispose(),this.active.length=0,this.dying.length=0,this.freeSlots.length=0,this.neighbours.length=0}}const m0=12,g0=12;class v0{constructor(){oe(this,"timer",0)}reset(){this.timer=0}update(e,t,r,i){const n=mo(t);this.timer+=e,!(!(r.activeCount<lc)&&this.timer<n.spawnInterval)&&(this.timer=0,this.spawnWave(t,r,i))}seed(e,t){let r=0;for(;e.activeCount<lc&&r<g0;)this.spawnWave(0,e,t),r++}spawnWave(e,t,r){const{enemies:i}=Ye,n=mo(e),o=Math.min(n.maxAlive,n0,i.capacity)-t.activeCount;if(o<=0)return;const l=e>=60?2:1,c=Math.random()*Wn,h=Math.round(n.waveSize*li(.8,1.3));let u=Math.min(h,t0,o),f=0;for(let d=0;d<l&&u>0;d++){const g=c+d/l*Wn+li(-.5,.5),v=Math.max(1,Math.ceil(u/(l-d)));u-=v;for(let m=0;m<v;m++){if(f>=o)return;const p=i.baseSpeed*n.speedMultiplier*li(1-i.speedVariance,1+i.speedVariance);this.trySpawn(t,r,g,p)&&f++}}}trySpawn(e,t,r,i){const{enemies:n}=Ye;for(let a=0;a<m0;a++){const o=r+a0()*n.spawnClusterSpread,l=n.spawnRadius+li(-4,n.spawnRadiusJitter),c=Math.cos(o)*l,h=Math.sin(o)*l;if(!(Math.hypot(c,h)>hi-n.spawnArenaMargin||Math.hypot(c-t.x,h-t.z)<$g+Ye.player.radius)&&!this.overlapsEnemy(e,c,h))return e.spawn(c,h,i)!==null}return!1}overlapsEnemy(e,t,r){const{enemies:i}=Ye,n=e.activeEnemies,a=i.spawnMinSeparation*i.spawnMinSeparation;for(let o=0;o<n.length;o++){const l=n[o].position.x-t,c=n[o].position.z-r;if(l*l+c*c<a)return!0}return!1}}const _0=""+new URL("roboto-latin-400-normal-D27F5sTu.woff",import.meta.url).href;function x0(){var s=Object.create(null);function e(i,n){var a=i.id,o=i.name,l=i.dependencies;l===void 0&&(l=[]);var c=i.init;c===void 0&&(c=function(){});var h=i.getTransferables;if(h===void 0&&(h=null),!s[a])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=s[f.id].value),f}),c=r("<"+o+">.init",c),h&&(h=r("<"+o+">.getTransferables",h));var u=null;typeof c=="function"?u=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[a]={id:a,value:u,getTransferables:h},n(u)}catch(f){f&&f.noLog||console.error(f),n(f)}}function t(i,n){var a,o=i.id,l=i.args;(!s[o]||typeof s[o].value!="function")&&n(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(a=s[o]).value.apply(a,l);c&&typeof c.then=="function"?c.then(h,function(u){return n(u instanceof Error?u:new Error(""+u))}):h(c)}catch(u){n(u)}function h(u){try{var f=s[o].getTransferables&&s[o].getTransferables(u);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),n(u,f)}catch(d){console.error(d),n(d)}}}function r(i,n){var a=void 0;self.troikaDefine=function(l){return a=l};var o=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+n+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(i){var n=i.data,a=n.messageId,o=n.action,l=n.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,h){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},h||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function y0(s){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,r=s.init;t=Array.isArray(t)?t.map(function(n){return n&&(n=n.onMainThread||n,n._getInitResult&&(n=n._getInitResult())),n}):[];var i=Promise.all(t).then(function(n){return r.apply(null,n)});return e._getInitResult=function(){return i},i},e}var xh=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return xh=function(){return s},s},M0=0,S0=0,ya=!1,vr=Object.create(null),_r=Object.create(null),go=Object.create(null);function ji(s){if((!s||typeof s.init!="function")&&!ya)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,r=s.getTransferables,i=s.workerId,n=y0(s);i==null&&(i="#default");var a="workerModule"+ ++M0,o=s.name||a,l=null;e=e&&e.map(function(h){return typeof h=="function"&&!h.workerModuleData&&(ya=!0,h=ji({workerId:i,name:"<"+o+"> function dependency: "+h.name,init:`function(){return (
`+us(h)+`
)}`}),ya=!1),h&&h.workerModuleData&&(h=h.workerModuleData),h});function c(){for(var h=[],u=arguments.length;u--;)h[u]=arguments[u];if(!xh())return n.apply(void 0,h);if(!l){l=fc(i,"registerModule",c.workerModuleData);var f=function(){l=null,_r[i].delete(f)};(_r[i]||(_r[i]=new Set)).add(f)}return l.then(function(d){var g=d.isCallable;if(g)return fc(i,"callModule",{id:a,args:h});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:a,name:o,dependencies:e,init:us(t),getTransferables:r&&us(r)},c.onMainThread=n,c}function E0(s){_r[s]&&_r[s].forEach(function(e){e()}),vr[s]&&(vr[s].terminate(),delete vr[s])}function us(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function T0(s){var e=vr[s];if(!e){var t=us(x0);e=vr[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var i=r.data,n=i.messageId,a=go[n];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete go[n],a(i)}}return e}function fc(s,e,t){return new Promise(function(r,i){var n=++S0;go[n]=function(a){a.success?r(a.result):i(new Error("Error in worker "+e+" call: "+a.error))},T0(s).postMessage({messageId:n,action:e,data:t})})}function yh(){var s=function(e){function t(K,j,F,W,$,te,Z,G){var z=1-Z;G.x=z*z*K+2*z*Z*F+Z*Z*$,G.y=z*z*j+2*z*Z*W+Z*Z*te}function r(K,j,F,W,$,te,Z,G,z,J){var pe=1-z;J.x=pe*pe*pe*K+3*pe*pe*z*F+3*pe*z*z*$+z*z*z*Z,J.y=pe*pe*pe*j+3*pe*pe*z*W+3*pe*z*z*te+z*z*z*G}function i(K,j){for(var F=/([MLQCZ])([^MLQCZ]*)/g,W,$,te,Z,G;W=F.exec(K);){var z=W[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(J){return parseFloat(J)});switch(W[1]){case"M":Z=$=z[0],G=te=z[1];break;case"L":(z[0]!==Z||z[1]!==G)&&j("L",Z,G,Z=z[0],G=z[1]);break;case"Q":{j("Q",Z,G,Z=z[2],G=z[3],z[0],z[1]);break}case"C":{j("C",Z,G,Z=z[4],G=z[5],z[0],z[1],z[2],z[3]);break}case"Z":(Z!==$||G!==te)&&j("L",Z,G,$,te);break}}}function n(K,j,F){F===void 0&&(F=16);var W={x:0,y:0};i(K,function($,te,Z,G,z,J,pe,me,de){switch($){case"L":j(te,Z,G,z);break;case"Q":{for(var _e=te,D=Z,Ie=1;Ie<F;Ie++)t(te,Z,J,pe,G,z,Ie/(F-1),W),j(_e,D,W.x,W.y),_e=W.x,D=W.y;break}case"C":{for(var Se=te,Ee=Z,ge=1;ge<F;ge++)r(te,Z,J,pe,me,de,G,z,ge/(F-1),W),j(Se,Ee,W.x,W.y),Se=W.x,Ee=W.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function h(K,j){var F=K.getContext?K.getContext("webgl",c):K,W=l.get(F);if(!W){let pe=function(Se){var Ee=te[Se];if(!Ee&&(Ee=te[Se]=F.getExtension(Se),!Ee))throw new Error(Se+" not supported");return Ee},me=function(Se,Ee){var ge=F.createShader(Ee);return F.shaderSource(ge,Se),F.compileShader(ge),ge},de=function(Se,Ee,ge,ve){if(!Z[Se]){var fe={},be={},ce=F.createProgram();F.attachShader(ce,me(Ee,F.VERTEX_SHADER)),F.attachShader(ce,me(ge,F.FRAGMENT_SHADER)),F.linkProgram(ce),Z[Se]={program:ce,transaction:function(R){F.useProgram(ce),R({setUniform:function(O,ee){for(var Q=[],q=arguments.length-2;q-- >0;)Q[q]=arguments[q+2];var Me=be[ee]||(be[ee]=F.getUniformLocation(ce,ee));F["uniform"+O].apply(F,[Me].concat(Q))},setAttribute:function(O,ee,Q,q,Me){var he=fe[O];he||(he=fe[O]={buf:F.createBuffer(),loc:F.getAttribLocation(ce,O),data:null}),F.bindBuffer(F.ARRAY_BUFFER,he.buf),F.vertexAttribPointer(he.loc,ee,F.FLOAT,!1,0,0),F.enableVertexAttribArray(he.loc),$?F.vertexAttribDivisor(he.loc,q):pe("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(he.loc,q),Me!==he.data&&(F.bufferData(F.ARRAY_BUFFER,Me,Q),he.data=Me)}})}}}Z[Se].transaction(ve)},_e=function(Se,Ee){z++;try{F.activeTexture(F.TEXTURE0+z);var ge=G[Se];ge||(ge=G[Se]=F.createTexture(),F.bindTexture(F.TEXTURE_2D,ge),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MIN_FILTER,F.NEAREST),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MAG_FILTER,F.NEAREST)),F.bindTexture(F.TEXTURE_2D,ge),Ee(ge,z)}finally{z--}},D=function(Se,Ee,ge){var ve=F.createFramebuffer();J.push(ve),F.bindFramebuffer(F.FRAMEBUFFER,ve),F.activeTexture(F.TEXTURE0+Ee),F.bindTexture(F.TEXTURE_2D,Se),F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Se,0);try{ge(ve)}finally{F.deleteFramebuffer(ve),F.bindFramebuffer(F.FRAMEBUFFER,J[--J.length-1]||null)}},Ie=function(){te={},Z={},G={},z=-1,J.length=0};var $=typeof WebGL2RenderingContext<"u"&&F instanceof WebGL2RenderingContext,te={},Z={},G={},z=-1,J=[];F.canvas.addEventListener("webglcontextlost",function(Se){Ie(),Se.preventDefault()},!1),l.set(F,W={gl:F,isWebGL2:$,getExtension:pe,withProgram:de,withTexture:_e,withTextureFramebuffer:D,handleContextLoss:Ie})}j(W)}function u(K,j,F,W,$,te,Z,G){Z===void 0&&(Z=15),G===void 0&&(G=null),h(K,function(z){var J=z.gl,pe=z.withProgram,me=z.withTexture;me("copy",function(de,_e){J.texImage2D(J.TEXTURE_2D,0,J.RGBA,$,te,0,J.RGBA,J.UNSIGNED_BYTE,j),pe("copy",a,o,function(D){var Ie=D.setUniform,Se=D.setAttribute;Se("aUV",2,J.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Ie("1i","image",_e),J.bindFramebuffer(J.FRAMEBUFFER,G||null),J.disable(J.BLEND),J.colorMask(Z&8,Z&4,Z&2,Z&1),J.viewport(F,W,$,te),J.scissor(F,W,$,te),J.drawArrays(J.TRIANGLES,0,3)})})})}function f(K,j,F){var W=K.width,$=K.height;h(K,function(te){var Z=te.gl,G=new Uint8Array(W*$*4);Z.readPixels(0,0,W,$,Z.RGBA,Z.UNSIGNED_BYTE,G),K.width=j,K.height=F,u(Z,G,0,0,W,$)})}var d=Object.freeze({__proto__:null,withWebGLContext:h,renderImageData:u,resizeWebGLCanvasWithoutClearing:f});function g(K,j,F,W,$,te){te===void 0&&(te=1);var Z=new Uint8Array(K*j),G=W[2]-W[0],z=W[3]-W[1],J=[];n(F,function(Se,Ee,ge,ve){J.push({x1:Se,y1:Ee,x2:ge,y2:ve,minX:Math.min(Se,ge),minY:Math.min(Ee,ve),maxX:Math.max(Se,ge),maxY:Math.max(Ee,ve)})}),J.sort(function(Se,Ee){return Se.maxX-Ee.maxX});for(var pe=0;pe<K;pe++)for(var me=0;me<j;me++){var de=D(W[0]+G*(pe+.5)/K,W[1]+z*(me+.5)/j),_e=Math.pow(1-Math.abs(de)/$,te)/2;de<0&&(_e=1-_e),_e=Math.max(0,Math.min(255,Math.round(_e*255))),Z[me*K+pe]=_e}return Z;function D(Se,Ee){for(var ge=1/0,ve=1/0,fe=J.length;fe--;){var be=J[fe];if(be.maxX+ve<=Se)break;if(Se+ve>be.minX&&Ee-ve<be.maxY&&Ee+ve>be.minY){var ce=p(Se,Ee,be.x1,be.y1,be.x2,be.y2);ce<ge&&(ge=ce,ve=Math.sqrt(ge))}}return Ie(Se,Ee)&&(ve=-ve),ve}function Ie(Se,Ee){for(var ge=0,ve=J.length;ve--;){var fe=J[ve];if(fe.maxX<=Se)break;var be=fe.y1>Ee!=fe.y2>Ee&&Se<(fe.x2-fe.x1)*(Ee-fe.y1)/(fe.y2-fe.y1)+fe.x1;be&&(ge+=fe.y1<fe.y2?1:-1)}return ge!==0}}function v(K,j,F,W,$,te,Z,G,z,J){te===void 0&&(te=1),G===void 0&&(G=0),z===void 0&&(z=0),J===void 0&&(J=0),m(K,j,F,W,$,te,Z,null,G,z,J)}function m(K,j,F,W,$,te,Z,G,z,J,pe){te===void 0&&(te=1),z===void 0&&(z=0),J===void 0&&(J=0),pe===void 0&&(pe=0);for(var me=g(K,j,F,W,$,te),de=new Uint8Array(me.length*4),_e=0;_e<me.length;_e++)de[_e*4+pe]=me[_e];u(Z,de,z,J,K,j,1<<3-pe,G)}function p(K,j,F,W,$,te){var Z=$-F,G=te-W,z=Z*Z+G*G,J=z?Math.max(0,Math.min(1,((K-F)*Z+(j-W)*G)/z)):0,pe=K-(F+J*Z),me=j-(W+J*G);return pe*pe+me*me}var S=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:v,generateIntoFramebuffer:m}),E="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",_="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",T="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",b=new Float32Array([0,0,2,0,0,2]),w=null,U=!1,y={},x=new WeakMap;function P(K){if(!U&&!V(K))throw new Error("WebGL generation not supported")}function C(K,j,F,W,$,te,Z){if(te===void 0&&(te=1),Z===void 0&&(Z=null),!Z&&(Z=w,!Z)){var G=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!G)throw new Error("OffscreenCanvas or DOM canvas not supported");Z=w=G.getContext("webgl",{depth:!1})}P(Z);var z=new Uint8Array(K*j*4);h(Z,function(de){var _e=de.gl,D=de.withTexture,Ie=de.withTextureFramebuffer;D("readable",function(Se,Ee){_e.texImage2D(_e.TEXTURE_2D,0,_e.RGBA,K,j,0,_e.RGBA,_e.UNSIGNED_BYTE,null),Ie(Se,Ee,function(ge){I(K,j,F,W,$,te,_e,ge,0,0,0),_e.readPixels(0,0,K,j,_e.RGBA,_e.UNSIGNED_BYTE,z)})})});for(var J=new Uint8Array(K*j),pe=0,me=0;pe<z.length;pe+=4)J[me++]=z[pe];return J}function L(K,j,F,W,$,te,Z,G,z,J){te===void 0&&(te=1),G===void 0&&(G=0),z===void 0&&(z=0),J===void 0&&(J=0),I(K,j,F,W,$,te,Z,null,G,z,J)}function I(K,j,F,W,$,te,Z,G,z,J,pe){te===void 0&&(te=1),z===void 0&&(z=0),J===void 0&&(J=0),pe===void 0&&(pe=0),P(Z);var me=[];n(F,function(de,_e,D,Ie){me.push(de,_e,D,Ie)}),me=new Float32Array(me),h(Z,function(de){var _e=de.gl,D=de.isWebGL2,Ie=de.getExtension,Se=de.withProgram,Ee=de.withTexture,ge=de.withTextureFramebuffer,ve=de.handleContextLoss;if(Ee("rawDistances",function(fe,be){(K!==fe._lastWidth||j!==fe._lastHeight)&&_e.texImage2D(_e.TEXTURE_2D,0,_e.RGBA,fe._lastWidth=K,fe._lastHeight=j,0,_e.RGBA,_e.UNSIGNED_BYTE,null),Se("main",E,_,function(ce){var ze=ce.setAttribute,R=ce.setUniform,M=!D&&Ie("ANGLE_instanced_arrays"),O=!D&&Ie("EXT_blend_minmax");ze("aUV",2,_e.STATIC_DRAW,0,b),ze("aLineSegment",4,_e.DYNAMIC_DRAW,1,me),R.apply(void 0,["4f","uGlyphBounds"].concat(W)),R("1f","uMaxDistance",$),R("1f","uExponent",te),ge(fe,be,function(ee){_e.enable(_e.BLEND),_e.colorMask(!0,!0,!0,!0),_e.viewport(0,0,K,j),_e.scissor(0,0,K,j),_e.blendFunc(_e.ONE,_e.ONE),_e.blendEquationSeparate(_e.FUNC_ADD,D?_e.MAX:O.MAX_EXT),_e.clear(_e.COLOR_BUFFER_BIT),D?_e.drawArraysInstanced(_e.TRIANGLES,0,3,me.length/4):M.drawArraysInstancedANGLE(_e.TRIANGLES,0,3,me.length/4)})}),Se("post",a,T,function(ce){ce.setAttribute("aUV",2,_e.STATIC_DRAW,0,b),ce.setUniform("1i","tex",be),_e.bindFramebuffer(_e.FRAMEBUFFER,G),_e.disable(_e.BLEND),_e.colorMask(pe===0,pe===1,pe===2,pe===3),_e.viewport(z,J,K,j),_e.scissor(z,J,K,j),_e.drawArrays(_e.TRIANGLES,0,3)})}),_e.isContextLost())throw ve(),new Error("webgl context lost")})}function V(K){var j=!K||K===w?y:K.canvas||K,F=x.get(j);if(F===void 0){U=!0;var W=null;try{var $=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],te=C(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,K);F=te&&$.length===te.length&&te.every(function(Z,G){return Z===$[G]}),F||(W="bad trial run results",console.info($,te))}catch(Z){F=!1,W=Z.message}W&&console.warn("WebGL SDF generation not supported:",W),U=!1,x.set(j,F)}return F}var k=Object.freeze({__proto__:null,generate:C,generateIntoCanvas:L,generateIntoFramebuffer:I,isSupported:V});function ne(K,j,F,W,$,te){$===void 0&&($=Math.max(W[2]-W[0],W[3]-W[1])/2),te===void 0&&(te=1);try{return C.apply(k,arguments)}catch(Z){return console.info("WebGL SDF generation failed, falling back to JS",Z),g.apply(S,arguments)}}function X(K,j,F,W,$,te,Z,G,z,J){$===void 0&&($=Math.max(W[2]-W[0],W[3]-W[1])/2),te===void 0&&(te=1),G===void 0&&(G=0),z===void 0&&(z=0),J===void 0&&(J=0);try{return L.apply(k,arguments)}catch(pe){return console.info("WebGL SDF generation failed, falling back to JS",pe),v.apply(S,arguments)}}return e.forEachPathCommand=i,e.generate=ne,e.generateIntoCanvas=X,e.javascript=S,e.pathToLineSegments=n,e.webgl=k,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}function b0(){var s=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},i={};r.L=1,i[1]="L",Object.keys(t).forEach(function(ve,fe){r[ve]=1<<fe+1,i[r[ve]]=ve}),Object.freeze(r);var n=r.LRI|r.RLI|r.FSI,a=r.L|r.R|r.AL,o=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,l=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|n|r.PDI|l,h=null;function u(){if(!h){h=new Map;var ve=0;for(var fe in t)if(t.hasOwnProperty(fe))for(var be=t[fe],ce="",ze=void 0,R=!1,M=0,O=0;O<=be.length+1;O+=1){var ee=be[O];if(ee!==","&&O!==be.length)ee==="+"?(R=!0,M=ve=M+parseInt(ce,36),ce=""):ce+=ee;else{R?ze=ve+parseInt(ce,36):(M=ve=M+parseInt(ce,36),ze=ve),R=!1,ce="",M=ze;for(var Q=ve;Q<ze+1;Q+=1)h.set(Q,r[fe])}}}}function f(ve){return u(),h.get(ve.codePointAt(0))||r.L}function d(ve){return i[f(ve)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(ve,fe){var be=36,ce=0,ze=new Map,R=fe&&new Map,M;return ve.split(",").forEach(function O(ee){if(ee.indexOf("+")!==-1)for(var Q=+ee;Q--;)O(M);else{M=ee;var q=ee.split(">"),Me=q[0],he=q[1];Me=String.fromCodePoint(ce+=parseInt(Me,be)),he=String.fromCodePoint(ce+=parseInt(he,be)),ze.set(Me,he),fe&&R.set(he,Me)}}),{map:ze,reverseMap:R}}var m,p,S;function E(){if(!m){var ve=v(g.pairs,!0),fe=ve.map,be=ve.reverseMap;m=fe,p=be,S=v(g.canonical,!1).map}}function _(ve){return E(),m.get(ve)||null}function T(ve){return E(),p.get(ve)||null}function b(ve){return E(),S.get(ve)||null}var w=r.L,U=r.R,y=r.EN,x=r.ES,P=r.ET,C=r.AN,L=r.CS,I=r.B,V=r.S,k=r.ON,ne=r.BN,X=r.NSM,K=r.AL,j=r.LRO,F=r.RLO,W=r.LRE,$=r.RLE,te=r.PDF,Z=r.LRI,G=r.RLI,z=r.FSI,J=r.PDI;function pe(ve,fe){for(var be=125,ce=new Uint32Array(ve.length),ze=0;ze<ve.length;ze++)ce[ze]=f(ve[ze]);var R=new Map;function M(Nt,rn){var Ot=ce[Nt];ce[Nt]=rn,R.set(Ot,R.get(Ot)-1),Ot&o&&R.set(o,R.get(o)-1),R.set(rn,(R.get(rn)||0)+1),rn&o&&R.set(o,(R.get(o)||0)+1)}for(var O=new Uint8Array(ve.length),ee=new Map,Q=[],q=null,Me=0;Me<ve.length;Me++)q||Q.push(q={start:Me,end:ve.length-1,level:fe==="rtl"?1:fe==="ltr"?0:$o(Me,!1)}),ce[Me]&I&&(q.end=Me,q=null);for(var he=$|W|F|j|n|J|te|I,Re=function(Nt){return Nt+(Nt&1?1:2)},Ce=function(Nt){return Nt+(Nt&1?2:1)},le=0;le<Q.length;le++){q=Q[le];var xe=[{_level:q.level,_override:0,_isolate:0}],Te=void 0,Pe=0,we=0,He=0;R.clear();for(var B=q.start;B<=q.end;B++){var ae=ce[B];if(Te=xe[xe.length-1],R.set(ae,(R.get(ae)||0)+1),ae&o&&R.set(o,(R.get(o)||0)+1),ae&he)if(ae&($|W)){O[B]=Te._level;var ye=(ae===$?Ce:Re)(Te._level);ye<=be&&!Pe&&!we?xe.push({_level:ye,_override:0,_isolate:0}):Pe||we++}else if(ae&(F|j)){O[B]=Te._level;var Fe=(ae===F?Ce:Re)(Te._level);Fe<=be&&!Pe&&!we?xe.push({_level:Fe,_override:ae&F?U:w,_isolate:0}):Pe||we++}else if(ae&n){ae&z&&(ae=$o(B+1,!0)===1?G:Z),O[B]=Te._level,Te._override&&M(B,Te._override);var ue=(ae===G?Ce:Re)(Te._level);ue<=be&&Pe===0&&we===0?(He++,xe.push({_level:ue,_override:0,_isolate:1,_isolInitIndex:B})):Pe++}else if(ae&J){if(Pe>0)Pe--;else if(He>0){for(we=0;!xe[xe.length-1]._isolate;)xe.pop();var ie=xe[xe.length-1]._isolInitIndex;ie!=null&&(ee.set(ie,B),ee.set(B,ie)),xe.pop(),He--}Te=xe[xe.length-1],O[B]=Te._level,Te._override&&M(B,Te._override)}else ae&te?(Pe===0&&(we>0?we--:!Te._isolate&&xe.length>1&&(xe.pop(),Te=xe[xe.length-1])),O[B]=Te._level):ae&I&&(O[B]=q.level);else O[B]=Te._level,Te._override&&ae!==ne&&M(B,Te._override)}for(var Ue=[],Oe=null,Be=q.start;Be<=q.end;Be++){var Ve=ce[Be];if(!(Ve&l)){var pt=O[Be],ut=Ve&n,mt=Ve===J;Oe&&pt===Oe._level?(Oe._end=Be,Oe._endsWithIsolInit=ut):Ue.push(Oe={_start:Be,_end:Be,_level:pt,_startsWithPDI:mt,_endsWithIsolInit:ut})}}for(var Mt=[],qt=0;qt<Ue.length;qt++){var Yt=Ue[qt];if(!Yt._startsWithPDI||Yt._startsWithPDI&&!ee.has(Yt._start)){for(var tn=[Oe=Yt],jt=void 0;Oe&&Oe._endsWithIsolInit&&(jt=ee.get(Oe._end))!=null;)for(var Kt=qt+1;Kt<Ue.length;Kt++)if(Ue[Kt]._start===jt){tn.push(Oe=Ue[Kt]);break}for(var _t=[],un=0;un<tn.length;un++)for(var Ki=tn[un],Zi=Ki._start;Zi<=Ki._end;Zi++)_t.push(Zi);for(var As=O[_t[0]],wr=q.level,gi=_t[0]-1;gi>=0;gi--)if(!(ce[gi]&l)){wr=O[gi];break}var Ji=_t[_t.length-1],Rs=O[Ji],A=q.level;if(!(ce[Ji]&n)){for(var Y=Ji+1;Y<=q.end;Y++)if(!(ce[Y]&l)){A=O[Y];break}}Mt.push({_seqIndices:_t,_sosType:Math.max(wr,As)%2?U:w,_eosType:Math.max(A,Rs)%2?U:w})}}for(var re=0;re<Mt.length;re++){var se=Mt[re],N=se._seqIndices,Ae=se._sosType,Le=se._eosType,ke=O[N[0]]&1?U:w;if(R.get(X))for(var Ne=0;Ne<N.length;Ne++){var Xe=N[Ne];if(ce[Xe]&X){for(var qe=Ae,Ge=Ne-1;Ge>=0;Ge--)if(!(ce[N[Ge]]&l)){qe=ce[N[Ge]];break}M(Xe,qe&(n|J)?k:qe)}}if(R.get(y))for(var Ze=0;Ze<N.length;Ze++){var it=N[Ze];if(ce[it]&y)for(var ft=Ze-1;ft>=-1;ft--){var lt=ft===-1?Ae:ce[N[ft]];if(lt&a){lt===K&&M(it,C);break}}}if(R.get(K))for(var rt=0;rt<N.length;rt++){var We=N[rt];ce[We]&K&&M(We,U)}if(R.get(x)||R.get(L))for(var ot=1;ot<N.length-1;ot++){var $e=N[ot];if(ce[$e]&(x|L)){for(var xt=0,fn=0,At=ot-1;At>=0&&(xt=ce[N[At]],!!(xt&l));At--);for(var xn=ot+1;xn<N.length&&(fn=ce[N[xn]],!!(fn&l));xn++);xt===fn&&(ce[$e]===x?xt===y:xt&(y|C))&&M($e,xt)}}if(R.get(y))for(var tt=0;tt<N.length;tt++){var Ft=N[tt];if(ce[Ft]&y){for(var Rt=tt-1;Rt>=0&&ce[N[Rt]]&(P|l);Rt--)M(N[Rt],y);for(tt++;tt<N.length&&ce[N[tt]]&(P|l|y);tt++)ce[N[tt]]!==y&&M(N[tt],y)}}if(R.get(P)||R.get(x)||R.get(L))for(var gt=0;gt<N.length;gt++){var Ct=N[gt];if(ce[Ct]&(P|x|L)){M(Ct,k);for(var Un=gt-1;Un>=0&&ce[N[Un]]&l;Un--)M(N[Un],k);for(var Zt=gt+1;Zt<N.length&&ce[N[Zt]]&l;Zt++)M(N[Zt],k)}}if(R.get(y))for(var Cs=0,Go=Ae;Cs<N.length;Cs++){var Ho=N[Cs],Us=ce[Ho];Us&y?Go===w&&M(Ho,w):Us&a&&(Go=Us)}if(R.get(o)){var Qi=U|y|C,Vo=Qi|w,Ar=[];{for(var vi=[],_i=0;_i<N.length;_i++)if(ce[N[_i]]&o){var $i=ve[N[_i]],Wo=void 0;if(_($i)!==null)if(vi.length<63)vi.push({char:$i,seqIndex:_i});else break;else if((Wo=T($i))!==null)for(var er=vi.length-1;er>=0;er--){var Ps=vi[er].char;if(Ps===Wo||Ps===T(b($i))||_(b(Ps))===$i){Ar.push([vi[er].seqIndex,_i]),vi.length=er;break}}}Ar.sort(function(Nt,rn){return Nt[0]-rn[0]})}for(var Ds=0;Ds<Ar.length;Ds++){for(var Xo=Ar[Ds],Rr=Xo[0],Ls=Xo[1],qo=!1,nn=0,Is=Rr+1;Is<Ls;Is++){var Yo=N[Is];if(ce[Yo]&Vo){qo=!0;var jo=ce[Yo]&Qi?U:w;if(jo===ke){nn=jo;break}}}if(qo&&!nn){nn=Ae;for(var Fs=Rr-1;Fs>=0;Fs--){var Ko=N[Fs];if(ce[Ko]&Vo){var Zo=ce[Ko]&Qi?U:w;Zo!==ke?nn=Zo:nn=ke;break}}}if(nn){if(ce[N[Rr]]=ce[N[Ls]]=nn,nn!==ke){for(var tr=Rr+1;tr<N.length;tr++)if(!(ce[N[tr]]&l)){f(ve[N[tr]])&X&&(ce[N[tr]]=nn);break}}if(nn!==ke){for(var nr=Ls+1;nr<N.length;nr++)if(!(ce[N[nr]]&l)){f(ve[N[nr]])&X&&(ce[N[nr]]=nn);break}}}}for(var Pn=0;Pn<N.length;Pn++)if(ce[N[Pn]]&o){for(var Jo=Pn,Ns=Pn,Os=Ae,ir=Pn-1;ir>=0;ir--)if(ce[N[ir]]&l)Jo=ir;else{Os=ce[N[ir]]&Qi?U:w;break}for(var Qo=Le,rr=Pn+1;rr<N.length;rr++)if(ce[N[rr]]&(o|l))Ns=rr;else{Qo=ce[N[rr]]&Qi?U:w;break}for(var Bs=Jo;Bs<=Ns;Bs++)ce[N[Bs]]=Os===Qo?Os:ke;Pn=Ns}}}for(var Gt=q.start;Gt<=q.end;Gt++){var Dh=O[Gt],Cr=ce[Gt];if(Dh&1?Cr&(w|y|C)&&O[Gt]++:Cr&U?O[Gt]++:Cr&(C|y)&&(O[Gt]+=2),Cr&l&&(O[Gt]=Gt===0?q.level:O[Gt-1]),Gt===q.end||f(ve[Gt])&(V|I))for(var Ur=Gt;Ur>=0&&f(ve[Ur])&c;Ur--)O[Ur]=q.level}}return{levels:O,paragraphs:Q};function $o(Nt,rn){for(var Ot=Nt;Ot<ve.length;Ot++){var Dn=ce[Ot];if(Dn&(U|K))return 1;if(Dn&(I|w)||rn&&Dn===J)return 0;if(Dn&n){var el=Lh(Ot);Ot=el===-1?ve.length:el}}return 0}function Lh(Nt){for(var rn=1,Ot=Nt+1;Ot<ve.length;Ot++){var Dn=ce[Ot];if(Dn&I)break;if(Dn&J){if(--rn===0)return Ot}else Dn&n&&rn++}return-1}}var me="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",de;function _e(){if(!de){var ve=v(me,!0),fe=ve.map,be=ve.reverseMap;be.forEach(function(ce,ze){fe.set(ze,ce)}),de=fe}}function D(ve){return _e(),de.get(ve)||null}function Ie(ve,fe,be,ce){var ze=ve.length;be=Math.max(0,be==null?0:+be),ce=Math.min(ze-1,ce==null?ze-1:+ce);for(var R=new Map,M=be;M<=ce;M++)if(fe[M]&1){var O=D(ve[M]);O!==null&&R.set(M,O)}return R}function Se(ve,fe,be,ce){var ze=ve.length;be=Math.max(0,be==null?0:+be),ce=Math.min(ze-1,ce==null?ze-1:+ce);var R=[];return fe.paragraphs.forEach(function(M){var O=Math.max(be,M.start),ee=Math.min(ce,M.end);if(O<ee){for(var Q=fe.levels.slice(O,ee+1),q=ee;q>=O&&f(ve[q])&c;q--)Q[q]=M.level;for(var Me=M.level,he=1/0,Re=0;Re<Q.length;Re++){var Ce=Q[Re];Ce>Me&&(Me=Ce),Ce<he&&(he=Ce|1)}for(var le=Me;le>=he;le--)for(var xe=0;xe<Q.length;xe++)if(Q[xe]>=le){for(var Te=xe;xe+1<Q.length&&Q[xe+1]>=le;)xe++;xe>Te&&R.push([Te+O,xe+O])}}}),R}function Ee(ve,fe,be,ce){var ze=ge(ve,fe,be,ce),R=[].concat(ve);return ze.forEach(function(M,O){R[O]=(fe.levels[M]&1?D(ve[M]):null)||ve[M]}),R.join("")}function ge(ve,fe,be,ce){for(var ze=Se(ve,fe,be,ce),R=[],M=0;M<ve.length;M++)R[M]=M;return ze.forEach(function(O){for(var ee=O[0],Q=O[1],q=R.slice(ee,Q+1),Me=q.length;Me--;)R[Q-Me]=q[Me]}),R}return e.closingToOpeningBracket=T,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=b,e.getEmbeddingLevels=pe,e.getMirroredCharacter=D,e.getMirroredCharactersMap=Ie,e.getReorderSegments=Se,e.getReorderedIndices=ge,e.getReorderedString=Ee,e.openingToClosingBracket=_,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}const Mh=/\bvoid\s+main\s*\(\s*\)\s*{/g;function vo(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,i){let n=Je[i];return n?vo(n):r}return s.replace(e,t)}const Ut=[];for(let s=0;s<256;s++)Ut[s]=(s<16?"0":"")+s.toString(16);function w0(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ut[s&255]+Ut[s>>8&255]+Ut[s>>16&255]+Ut[s>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[r&255]+Ut[r>>8&255]+Ut[r>>16&255]+Ut[r>>24&255]).toUpperCase()}const $n=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let i in r)Object.prototype.hasOwnProperty.call(r,i)&&(s[i]=r[i])}return s},A0=Date.now(),dc=new WeakMap,pc=new Map;let R0=1e10;function _o(s,e){const t=D0(e);let r=dc.get(s);if(r||dc.set(s,r=Object.create(null)),r[t])return new r[t];const i=`_onBeforeCompile${t}`,n=function(c,h){s.onBeforeCompile.call(this,c,h);const u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=pc[u];if(!f){const d=C0(this,c,e,t);f=pc[u]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,$n(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-A0}}),this[i]&&this[i](c)},a=function(){return o(e.chained?s:s.clone())},o=function(c){const h=Object.create(c,l);return Object.defineProperty(h,"baseMaterial",{value:s}),Object.defineProperty(h,"id",{value:R0++}),h.uuid=w0(),h.uniforms=$n({},c.uniforms,e.uniforms),h.defines=$n({},c.defines,e.defines),h.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",h.extensions=$n({},c.extensions,e.extensions),h._listeners=void 0,h},l={constructor:{value:a},isDerivedMaterial:{value:!0},type:{get:()=>s.type,set:c=>{s.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const h=this.baseMaterial;return c===h||h.isDerivedMaterial&&h.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return n},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&($n(this.extensions,c.extensions),$n(this.defines,c.defines),$n(this.uniforms,Qc.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=_o(s.isDerivedMaterial?s.getDepthMaterial():new ah({depthPacking:Gc}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=_o(s.isDerivedMaterial?s.getDistanceMaterial():new oh,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:h}=this;c&&c.dispose(),h&&h.dispose(),s.dispose.call(this)}}};return r[t]=a,new a}function C0(s,{vertexShader:e,fragmentShader:t},r,i){let{vertexDefs:n,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:h,fragmentMainOutro:u,fragmentColorTransform:f,customRewriter:d,timeUniform:g}=r;if(n=n||"",a=a||"",o=o||"",c=c||"",h=h||"",u=u||"",(l||d)&&(e=vo(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=vo(t)),d){let v=d({vertexShader:e,fragmentShader:t});e=v.vertexShader,t=v.fragmentShader}if(f){let v=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(v.push(m),"")),u=`${f}
${v.join(`
`)}
${u}`}if(g){const v=`
uniform float ${g};
`;n=v+n,c=v+c}return l&&(e=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${e}
`,n=`${n}
void troikaVertexTransform${i}() {
  vec3 position = troika_position_${i};
  vec3 normal = troika_normal_${i};
  vec2 uv = troika_uv_${i};
  ${l}
  troika_position_${i} = position;
  troika_normal_${i} = normal;
  troika_uv_${i} = uv;
}
`,a=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}();
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(v,m,p,S)=>/\battribute\s+vec[23]\s+$/.test(S.substr(0,p))?m:`troika_${m}_${i}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${i}`))),e=mc(e,i,n,a,o),t=mc(t,i,c,h,u),{vertexShader:e,fragmentShader:t}}function mc(s,e,t,r,i){return(r||i||t)&&(s=s.replace(Mh,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${i}
}`),s}function U0(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let P0=0;const gc=new Map;function D0(s){const e=JSON.stringify(s,U0);let t=gc.get(e);return t==null&&gc.set(e,t=++P0),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function L0(){return typeof window>"u"&&(self.window=self),function(s){var e={parse:function(i){var n=e._bin,a=new Uint8Array(i);if(n.readASCII(a,0,4)=="ttcf"){var o=4;n.readUshort(a,o),o+=2,n.readUshort(a,o),o+=2;var l=n.readUint(a,o);o+=4;for(var c=[],h=0;h<l;h++){var u=n.readUint(a,o);o+=4,c.push(e._readFont(a,u))}return c}return[e._readFont(a,0)]},_readFont:function(i,n){var a=e._bin,o=n;a.readFixed(i,n),n+=4;var l=a.readUshort(i,n);n+=2,a.readUshort(i,n),n+=2,a.readUshort(i,n),n+=2,a.readUshort(i,n),n+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],h={_data:i,_offset:o},u={},f=0;f<l;f++){var d=a.readASCII(i,n,4);n+=4,a.readUint(i,n),n+=4;var g=a.readUint(i,n);n+=4;var v=a.readUint(i,n);n+=4,u[d]={offset:g,length:v}}for(f=0;f<c.length;f++){var m=c[f];u[m]&&(h[m.trim()]=e[m.trim()].parse(i,u[m].offset,u[m].length,h))}return h},_tabOffset:function(i,n,a){for(var o=e._bin,l=o.readUshort(i,a+4),c=a+12,h=0;h<l;h++){var u=o.readASCII(i,c,4);c+=4,o.readUint(i,c),c+=4;var f=o.readUint(i,c);if(c+=4,o.readUint(i,c),c+=4,u==n)return f}return 0}};e._bin={readFixed:function(i,n){return(i[n]<<8|i[n+1])+(i[n+2]<<8|i[n+3])/65540},readF2dot14:function(i,n){return e._bin.readShort(i,n)/16384},readInt:function(i,n){return e._bin._view(i).getInt32(n)},readInt8:function(i,n){return e._bin._view(i).getInt8(n)},readShort:function(i,n){return e._bin._view(i).getInt16(n)},readUshort:function(i,n){return e._bin._view(i).getUint16(n)},readUshorts:function(i,n,a){for(var o=[],l=0;l<a;l++)o.push(e._bin.readUshort(i,n+2*l));return o},readUint:function(i,n){return e._bin._view(i).getUint32(n)},readUint64:function(i,n){return 4294967296*e._bin.readUint(i,n)+e._bin.readUint(i,n+4)},readASCII:function(i,n,a){for(var o="",l=0;l<a;l++)o+=String.fromCharCode(i[n+l]);return o},readUnicode:function(i,n,a){for(var o="",l=0;l<a;l++){var c=i[n++]<<8|i[n++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,n,a){var o=e._bin._tdec;return o&&n==0&&a==i.length?o.decode(i):e._bin.readASCII(i,n,a)},readBytes:function(i,n,a){for(var o=[],l=0;l<a;l++)o.push(i[n+l]);return o},readASCIIArray:function(i,n,a){for(var o=[],l=0;l<a;l++)o.push(String.fromCharCode(i[n+l]));return o},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,n,a,o,l){var c=e._bin,h={},u=n;c.readFixed(i,n),n+=4;var f=c.readUshort(i,n);n+=2;var d=c.readUshort(i,n);n+=2;var g=c.readUshort(i,n);return n+=2,h.scriptList=e._lctf.readScriptList(i,u+f),h.featureList=e._lctf.readFeatureList(i,u+d),h.lookupList=e._lctf.readLookupList(i,u+g,l),h},e._lctf.readLookupList=function(i,n,a){var o=e._bin,l=n,c=[],h=o.readUshort(i,n);n+=2;for(var u=0;u<h;u++){var f=o.readUshort(i,n);n+=2;var d=e._lctf.readLookupTable(i,l+f,a);c.push(d)}return c},e._lctf.readLookupTable=function(i,n,a){var o=e._bin,l=n,c={tabs:[]};c.ltype=o.readUshort(i,n),n+=2,c.flag=o.readUshort(i,n),n+=2;var h=o.readUshort(i,n);n+=2;for(var u=c.ltype,f=0;f<h;f++){var d=o.readUshort(i,n);n+=2;var g=a(i,u,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(i){for(var n=0,a=0;a<32;a++)i>>>a&1&&n++;return n},e._lctf.readClassDef=function(i,n){var a=e._bin,o=[],l=a.readUshort(i,n);if(n+=2,l==1){var c=a.readUshort(i,n);n+=2;var h=a.readUshort(i,n);n+=2;for(var u=0;u<h;u++)o.push(c+u),o.push(c+u),o.push(a.readUshort(i,n)),n+=2}if(l==2){var f=a.readUshort(i,n);for(n+=2,u=0;u<f;u++)o.push(a.readUshort(i,n)),n+=2,o.push(a.readUshort(i,n)),n+=2,o.push(a.readUshort(i,n)),n+=2}return o},e._lctf.getInterval=function(i,n){for(var a=0;a<i.length;a+=3){var o=i[a],l=i[a+1];if(i[a+2],o<=n&&n<=l)return a}return-1},e._lctf.readCoverage=function(i,n){var a=e._bin,o={};o.fmt=a.readUshort(i,n),n+=2;var l=a.readUshort(i,n);return n+=2,o.fmt==1&&(o.tab=a.readUshorts(i,n,l)),o.fmt==2&&(o.tab=a.readUshorts(i,n,3*l)),o},e._lctf.coverageIndex=function(i,n){var a=i.tab;if(i.fmt==1)return a.indexOf(n);if(i.fmt==2){var o=e._lctf.getInterval(a,n);if(o!=-1)return a[o+2]+(n-a[o])}return-1},e._lctf.readFeatureList=function(i,n){var a=e._bin,o=n,l=[],c=a.readUshort(i,n);n+=2;for(var h=0;h<c;h++){var u=a.readASCII(i,n,4);n+=4;var f=a.readUshort(i,n);n+=2;var d=e._lctf.readFeatureTable(i,o+f);d.tag=u.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(i,n){var a=e._bin,o=n,l={},c=a.readUshort(i,n);n+=2,c>0&&(l.featureParams=o+c);var h=a.readUshort(i,n);n+=2,l.tab=[];for(var u=0;u<h;u++)l.tab.push(a.readUshort(i,n+2*u));return l},e._lctf.readScriptList=function(i,n){var a=e._bin,o=n,l={},c=a.readUshort(i,n);n+=2;for(var h=0;h<c;h++){var u=a.readASCII(i,n,4);n+=4;var f=a.readUshort(i,n);n+=2,l[u.trim()]=e._lctf.readScriptTable(i,o+f)}return l},e._lctf.readScriptTable=function(i,n){var a=e._bin,o=n,l={},c=a.readUshort(i,n);n+=2,c>0&&(l.default=e._lctf.readLangSysTable(i,o+c));var h=a.readUshort(i,n);n+=2;for(var u=0;u<h;u++){var f=a.readASCII(i,n,4);n+=4;var d=a.readUshort(i,n);n+=2,l[f.trim()]=e._lctf.readLangSysTable(i,o+d)}return l},e._lctf.readLangSysTable=function(i,n){var a=e._bin,o={};a.readUshort(i,n),n+=2,o.reqFeature=a.readUshort(i,n),n+=2;var l=a.readUshort(i,n);return n+=2,o.features=a.readUshorts(i,n,l),o},e.CFF={},e.CFF.parse=function(i,n,a){var o=e._bin;(i=new Uint8Array(i.buffer,n,a))[n=0],i[++n],i[++n],i[++n],n++;var l=[];n=e.CFF.readIndex(i,n,l);for(var c=[],h=0;h<l.length-1;h++)c.push(o.readASCII(i,n+l[h],l[h+1]-l[h]));n+=l[l.length-1];var u=[];n=e.CFF.readIndex(i,n,u);var f=[];for(h=0;h<u.length-1;h++)f.push(e.CFF.readDict(i,n+u[h],n+u[h+1]));n+=u[u.length-1];var d=f[0],g=[];n=e.CFF.readIndex(i,n,g);var v=[];for(h=0;h<g.length-1;h++)v.push(o.readASCII(i,n+g[h],g[h+1]-g[h]));if(n+=g[g.length-1],e.CFF.readSubrs(i,n,d),d.CharStrings){n=d.CharStrings,g=[],n=e.CFF.readIndex(i,n,g);var m=[];for(h=0;h<g.length-1;h++)m.push(o.readBytes(i,n+g[h],g[h+1]-g[h]));d.CharStrings=m}if(d.ROS){n=d.FDArray;var p=[];for(n=e.CFF.readIndex(i,n,p),d.FDArray=[],h=0;h<p.length-1;h++){var S=e.CFF.readDict(i,n+p[h],n+p[h+1]);e.CFF._readFDict(i,S,v),d.FDArray.push(S)}n+=p[p.length-1],n=d.FDSelect,d.FDSelect=[];var E=i[n];if(n++,E!=3)throw E;var _=o.readUshort(i,n);for(n+=2,h=0;h<_+1;h++)d.FDSelect.push(o.readUshort(i,n),i[n+2]),n+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(i,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(i,d.charset,d.CharStrings.length)),e.CFF._readFDict(i,d,v),d},e.CFF._readFDict=function(i,n,a){var o;for(var l in n.Private&&(o=n.Private[1],n.Private=e.CFF.readDict(i,o,o+n.Private[0]),n.Private.Subrs&&e.CFF.readSubrs(i,o+n.Private.Subrs,n.Private)),n)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(n[l]=a[n[l]-426+35])},e.CFF.readSubrs=function(i,n,a){var o=e._bin,l=[];n=e.CFF.readIndex(i,n,l);var c,h=l.length;c=h<1240?107:h<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var u=0;u<l.length-1;u++)a.Subrs.push(o.readBytes(i,n+l[u],l[u+1]-l[u]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,n){for(var a=0;a<i.charset.length;a++)if(i.charset[a]==n)return a;return-1},e.CFF.glyphBySE=function(i,n){return n<0||n>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[n])},e.CFF.readEncoding=function(i,n,a){e._bin;var o=[".notdef"],l=i[n];if(n++,l!=0)throw"error: unknown encoding format: "+l;var c=i[n];n++;for(var h=0;h<c;h++)o.push(i[n+h]);return o},e.CFF.readCharset=function(i,n,a){var o=e._bin,l=[".notdef"],c=i[n];if(n++,c==0)for(var h=0;h<a;h++){var u=o.readUshort(i,n);n+=2,l.push(u)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<a;){u=o.readUshort(i,n),n+=2;var f=0;for(c==1?(f=i[n],n++):(f=o.readUshort(i,n),n+=2),h=0;h<=f;h++)l.push(u),u++}}return l},e.CFF.readIndex=function(i,n,a){var o=e._bin,l=o.readUshort(i,n)+1,c=i[n+=2];if(n++,c==1)for(var h=0;h<l;h++)a.push(i[n+h]);else if(c==2)for(h=0;h<l;h++)a.push(o.readUshort(i,n+2*h));else if(c==3)for(h=0;h<l;h++)a.push(16777215&o.readUint(i,n+3*h-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(n+=l*c)-1},e.CFF.getCharString=function(i,n,a){var o=e._bin,l=i[n],c=i[n+1];i[n+2],i[n+3],i[n+4];var h=1,u=null,f=null;l<=20&&(u=l,h=1),l==12&&(u=100*l+c,h=2),21<=l&&l<=27&&(u=l,h=1),l==28&&(f=o.readShort(i,n+1),h=3),29<=l&&l<=31&&(u=l,h=1),32<=l&&l<=246&&(f=l-139,h=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,h=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,h=2),l==255&&(f=o.readInt(i,n+1)/65535,h=5),a.val=f??"o"+u,a.size=h},e.CFF.readCharString=function(i,n,a){for(var o=n+a,l=e._bin,c=[];n<o;){var h=i[n],u=i[n+1];i[n+2],i[n+3],i[n+4];var f=1,d=null,g=null;h<=20&&(d=h,f=1),h==12&&(d=100*h+u,f=2),h!=19&&h!=20||(d=h,f=2),21<=h&&h<=27&&(d=h,f=1),h==28&&(g=l.readShort(i,n+1),f=3),29<=h&&h<=31&&(d=h,f=1),32<=h&&h<=246&&(g=h-139,f=1),247<=h&&h<=250&&(g=256*(h-247)+u+108,f=2),251<=h&&h<=254&&(g=256*-(h-251)-u-108,f=2),h==255&&(g=l.readInt(i,n+1)/65535,f=5),c.push(g??"o"+d),n+=f}return c},e.CFF.readDict=function(i,n,a){for(var o=e._bin,l={},c=[];n<a;){var h=i[n],u=i[n+1];i[n+2],i[n+3],i[n+4];var f=1,d=null,g=null;if(h==28&&(g=o.readShort(i,n+1),f=3),h==29&&(g=o.readInt(i,n+1),f=5),32<=h&&h<=246&&(g=h-139,f=1),247<=h&&h<=250&&(g=256*(h-247)+u+108,f=2),251<=h&&h<=254&&(g=256*-(h-251)-u-108,f=2),h==255)throw g=o.readInt(i,n+1)/65535,f=5,"unknown number";if(h==30){var v=[];for(f=1;;){var m=i[n+f];f++;var p=m>>4,S=15&m;if(p!=15&&v.push(p),S!=15&&v.push(S),S==15)break}for(var E="",_=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],T=0;T<v.length;T++)E+=_[v[T]];g=parseFloat(E)}h<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][h],f=1,h==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][u],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),n+=f}return l},e.cmap={},e.cmap.parse=function(i,n,a){i=new Uint8Array(i.buffer,n,a),n=0;var o=e._bin,l={};o.readUshort(i,n),n+=2;var c=o.readUshort(i,n);n+=2;var h=[];l.tables=[];for(var u=0;u<c;u++){var f=o.readUshort(i,n);n+=2;var d=o.readUshort(i,n);n+=2;var g=o.readUint(i,n);n+=4;var v="p"+f+"e"+d,m=h.indexOf(g);if(m==-1){var p;m=l.tables.length,h.push(g);var S=o.readUshort(i,g);S==0?p=e.cmap.parse0(i,g):S==4?p=e.cmap.parse4(i,g):S==6?p=e.cmap.parse6(i,g):S==12?p=e.cmap.parse12(i,g):console.debug("unknown format: "+S,f,d,g),l.tables.push(p)}if(l[v]!=null)throw"multiple tables for one platform+encoding";l[v]=m}return l},e.cmap.parse0=function(i,n){var a=e._bin,o={};o.format=a.readUshort(i,n),n+=2;var l=a.readUshort(i,n);n+=2,a.readUshort(i,n),n+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(i[n+c]);return o},e.cmap.parse4=function(i,n){var a=e._bin,o=n,l={};l.format=a.readUshort(i,n),n+=2;var c=a.readUshort(i,n);n+=2,a.readUshort(i,n),n+=2;var h=a.readUshort(i,n);n+=2;var u=h/2;l.searchRange=a.readUshort(i,n),n+=2,l.entrySelector=a.readUshort(i,n),n+=2,l.rangeShift=a.readUshort(i,n),n+=2,l.endCount=a.readUshorts(i,n,u),n+=2*u,n+=2,l.startCount=a.readUshorts(i,n,u),n+=2*u,l.idDelta=[];for(var f=0;f<u;f++)l.idDelta.push(a.readShort(i,n)),n+=2;for(l.idRangeOffset=a.readUshorts(i,n,u),n+=2*u,l.glyphIdArray=[];n<o+c;)l.glyphIdArray.push(a.readUshort(i,n)),n+=2;return l},e.cmap.parse6=function(i,n){var a=e._bin,o={};o.format=a.readUshort(i,n),n+=2,a.readUshort(i,n),n+=2,a.readUshort(i,n),n+=2,o.firstCode=a.readUshort(i,n),n+=2;var l=a.readUshort(i,n);n+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(a.readUshort(i,n)),n+=2;return o},e.cmap.parse12=function(i,n){var a=e._bin,o={};o.format=a.readUshort(i,n),n+=2,n+=2,a.readUint(i,n),n+=4,a.readUint(i,n),n+=4;var l=a.readUint(i,n);n+=4,o.groups=[];for(var c=0;c<l;c++){var h=n+12*c,u=a.readUint(i,h+0),f=a.readUint(i,h+4),d=a.readUint(i,h+8);o.groups.push([u,f,d])}return o},e.glyf={},e.glyf.parse=function(i,n,a,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(i,n){var a=e._bin,o=i._data,l=e._tabOffset(o,"glyf",i._offset)+i.loca[n];if(i.loca[n]==i.loca[n+1])return null;var c={};if(c.noc=a.readShort(o,l),l+=2,c.xMin=a.readShort(o,l),l+=2,c.yMin=a.readShort(o,l),l+=2,c.xMax=a.readShort(o,l),l+=2,c.yMax=a.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var h=0;h<c.noc;h++)c.endPts.push(a.readUshort(o,l)),l+=2;var u=a.readUshort(o,l);if(l+=2,o.length-l<u)return null;c.instructions=a.readBytes(o,l,u),l+=u;var f=c.endPts[c.noc-1]+1;for(c.flags=[],h=0;h<f;h++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var g=o[l];l++;for(var v=0;v<g;v++)c.flags.push(d),h++}}for(c.xs=[],h=0;h<f;h++){var m=(2&c.flags[h])!=0,p=(16&c.flags[h])!=0;m?(c.xs.push(p?o[l]:-o[l]),l++):p?c.xs.push(0):(c.xs.push(a.readShort(o,l)),l+=2)}for(c.ys=[],h=0;h<f;h++)m=(4&c.flags[h])!=0,p=(32&c.flags[h])!=0,m?(c.ys.push(p?o[l]:-o[l]),l++):p?c.ys.push(0):(c.ys.push(a.readShort(o,l)),l+=2);var S=0,E=0;for(h=0;h<f;h++)S+=c.xs[h],E+=c.ys[h],c.xs[h]=S,c.ys[h]=E}else{var _;c.parts=[];do{_=a.readUshort(o,l),l+=2;var T={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(T),T.glyphIndex=a.readUshort(o,l),l+=2,1&_){var b=a.readShort(o,l);l+=2;var w=a.readShort(o,l);l+=2}else b=a.readInt8(o,l),l++,w=a.readInt8(o,l),l++;2&_?(T.m.tx=b,T.m.ty=w):(T.p1=b,T.p2=w),8&_?(T.m.a=T.m.d=a.readF2dot14(o,l),l+=2):64&_?(T.m.a=a.readF2dot14(o,l),l+=2,T.m.d=a.readF2dot14(o,l),l+=2):128&_&&(T.m.a=a.readF2dot14(o,l),l+=2,T.m.b=a.readF2dot14(o,l),l+=2,T.m.c=a.readF2dot14(o,l),l+=2,T.m.d=a.readF2dot14(o,l),l+=2)}while(32&_);if(256&_){var U=a.readUshort(o,l);for(l+=2,c.instr=[],h=0;h<U;h++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(i,n,a,o){var l=n;n+=4;var c=e._bin.readUshort(i,n);return{glyphClassDef:c===0?null:e._lctf.readClassDef(i,l+c)}},e.GPOS={},e.GPOS.parse=function(i,n,a,o){return e._lctf.parse(i,n,a,o,e.GPOS.subt)},e.GPOS.subt=function(i,n,a,o){var l=e._bin,c=a,h={};if(h.fmt=l.readUshort(i,a),a+=2,n==1||n==2||n==3||n==7||n==8&&h.fmt<=2){var u=l.readUshort(i,a);a+=2,h.coverage=e._lctf.readCoverage(i,u+c)}if(n==1&&h.fmt==1){var f=l.readUshort(i,a);a+=2,f!=0&&(h.pos=e.GPOS.readValueRecord(i,a,f))}else if(n==2&&h.fmt>=1&&h.fmt<=2){f=l.readUshort(i,a),a+=2;var d=l.readUshort(i,a);a+=2;var g=e._lctf.numOfOnes(f),v=e._lctf.numOfOnes(d);if(h.fmt==1){h.pairsets=[];var m=l.readUshort(i,a);a+=2;for(var p=0;p<m;p++){var S=c+l.readUshort(i,a);a+=2;var E=l.readUshort(i,S);S+=2;for(var _=[],T=0;T<E;T++){var b=l.readUshort(i,S);S+=2,f!=0&&(C=e.GPOS.readValueRecord(i,S,f),S+=2*g),d!=0&&(L=e.GPOS.readValueRecord(i,S,d),S+=2*v),_.push({gid2:b,val1:C,val2:L})}h.pairsets.push(_)}}if(h.fmt==2){var w=l.readUshort(i,a);a+=2;var U=l.readUshort(i,a);a+=2;var y=l.readUshort(i,a);a+=2;var x=l.readUshort(i,a);for(a+=2,h.classDef1=e._lctf.readClassDef(i,c+w),h.classDef2=e._lctf.readClassDef(i,c+U),h.matrix=[],p=0;p<y;p++){var P=[];for(T=0;T<x;T++){var C=null,L=null;f!=0&&(C=e.GPOS.readValueRecord(i,a,f),a+=2*g),d!=0&&(L=e.GPOS.readValueRecord(i,a,d),a+=2*v),P.push({val1:C,val2:L})}h.matrix.push(P)}}}else if(n==4&&h.fmt==1)h.markCoverage=e._lctf.readCoverage(i,l.readUshort(i,a)+c),h.baseCoverage=e._lctf.readCoverage(i,l.readUshort(i,a+2)+c),h.markClassCount=l.readUshort(i,a+4),h.markArray=e.GPOS.readMarkArray(i,l.readUshort(i,a+6)+c),h.baseArray=e.GPOS.readBaseArray(i,l.readUshort(i,a+8)+c,h.markClassCount);else if(n==6&&h.fmt==1)h.mark1Coverage=e._lctf.readCoverage(i,l.readUshort(i,a)+c),h.mark2Coverage=e._lctf.readCoverage(i,l.readUshort(i,a+2)+c),h.markClassCount=l.readUshort(i,a+4),h.mark1Array=e.GPOS.readMarkArray(i,l.readUshort(i,a+6)+c),h.mark2Array=e.GPOS.readBaseArray(i,l.readUshort(i,a+8)+c,h.markClassCount);else{if(n==9&&h.fmt==1){var I=l.readUshort(i,a);a+=2;var V=l.readUint(i,a);if(a+=4,o.ltype==9)o.ltype=I;else if(o.ltype!=I)throw"invalid extension substitution";return e.GPOS.subt(i,o.ltype,c+V)}console.debug("unsupported GPOS table LookupType",n,"format",h.fmt)}return h},e.GPOS.readValueRecord=function(i,n,a){var o=e._bin,l=[];return l.push(1&a?o.readShort(i,n):0),n+=1&a?2:0,l.push(2&a?o.readShort(i,n):0),n+=2&a?2:0,l.push(4&a?o.readShort(i,n):0),n+=4&a?2:0,l.push(8&a?o.readShort(i,n):0),n+=8&a?2:0,l},e.GPOS.readBaseArray=function(i,n,a){var o=e._bin,l=[],c=n,h=o.readUshort(i,n);n+=2;for(var u=0;u<h;u++){for(var f=[],d=0;d<a;d++)f.push(e.GPOS.readAnchorRecord(i,c+o.readUshort(i,n))),n+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(i,n){var a=e._bin,o=[],l=n,c=a.readUshort(i,n);n+=2;for(var h=0;h<c;h++){var u=e.GPOS.readAnchorRecord(i,a.readUshort(i,n+2)+l);u.markClass=a.readUshort(i,n),o.push(u),n+=4}return o},e.GPOS.readAnchorRecord=function(i,n){var a=e._bin,o={};return o.fmt=a.readUshort(i,n),o.x=a.readShort(i,n+2),o.y=a.readShort(i,n+4),o},e.GSUB={},e.GSUB.parse=function(i,n,a,o){return e._lctf.parse(i,n,a,o,e.GSUB.subt)},e.GSUB.subt=function(i,n,a,o){var l=e._bin,c=a,h={};if(h.fmt=l.readUshort(i,a),a+=2,n!=1&&n!=2&&n!=4&&n!=5&&n!=6)return null;if(n==1||n==2||n==4||n==5&&h.fmt<=2||n==6&&h.fmt<=2){var u=l.readUshort(i,a);a+=2,h.coverage=e._lctf.readCoverage(i,c+u)}if(n==1&&h.fmt>=1&&h.fmt<=2){if(h.fmt==1)h.delta=l.readShort(i,a),a+=2;else if(h.fmt==2){var f=l.readUshort(i,a);a+=2,h.newg=l.readUshorts(i,a,f),a+=2*h.newg.length}}else if(n==2&&h.fmt==1){f=l.readUshort(i,a),a+=2,h.seqs=[];for(var d=0;d<f;d++){var g=l.readUshort(i,a)+c;a+=2;var v=l.readUshort(i,g);h.seqs.push(l.readUshorts(i,g+2,v))}}else if(n==4)for(h.vals=[],f=l.readUshort(i,a),a+=2,d=0;d<f;d++){var m=l.readUshort(i,a);a+=2,h.vals.push(e.GSUB.readLigatureSet(i,c+m))}else if(n==5&&h.fmt==2){if(h.fmt==2){var p=l.readUshort(i,a);a+=2,h.cDef=e._lctf.readClassDef(i,c+p),h.scset=[];var S=l.readUshort(i,a);for(a+=2,d=0;d<S;d++){var E=l.readUshort(i,a);a+=2,h.scset.push(E==0?null:e.GSUB.readSubClassSet(i,c+E))}}}else if(n==6&&h.fmt==3){if(h.fmt==3){for(d=0;d<3;d++){f=l.readUshort(i,a),a+=2;for(var _=[],T=0;T<f;T++)_.push(e._lctf.readCoverage(i,c+l.readUshort(i,a+2*T)));a+=2*f,d==0&&(h.backCvg=_),d==1&&(h.inptCvg=_),d==2&&(h.ahedCvg=_)}f=l.readUshort(i,a),a+=2,h.lookupRec=e.GSUB.readSubstLookupRecords(i,a,f)}}else{if(n==7&&h.fmt==1){var b=l.readUshort(i,a);a+=2;var w=l.readUint(i,a);if(a+=4,o.ltype==9)o.ltype=b;else if(o.ltype!=b)throw"invalid extension substitution";return e.GSUB.subt(i,o.ltype,c+w)}console.debug("unsupported GSUB table LookupType",n,"format",h.fmt)}return h},e.GSUB.readSubClassSet=function(i,n){var a=e._bin.readUshort,o=n,l=[],c=a(i,n);n+=2;for(var h=0;h<c;h++){var u=a(i,n);n+=2,l.push(e.GSUB.readSubClassRule(i,o+u))}return l},e.GSUB.readSubClassRule=function(i,n){var a=e._bin.readUshort,o={},l=a(i,n),c=a(i,n+=2);n+=2,o.input=[];for(var h=0;h<l-1;h++)o.input.push(a(i,n)),n+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(i,n,c),o},e.GSUB.readSubstLookupRecords=function(i,n,a){for(var o=e._bin.readUshort,l=[],c=0;c<a;c++)l.push(o(i,n),o(i,n+2)),n+=4;return l},e.GSUB.readChainSubClassSet=function(i,n){var a=e._bin,o=n,l=[],c=a.readUshort(i,n);n+=2;for(var h=0;h<c;h++){var u=a.readUshort(i,n);n+=2,l.push(e.GSUB.readChainSubClassRule(i,o+u))}return l},e.GSUB.readChainSubClassRule=function(i,n){for(var a=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var h=a.readUshort(i,n);n+=2,c==1&&h--,o[l[c]]=a.readUshorts(i,n,h),n+=2*o[l[c]].length}return h=a.readUshort(i,n),n+=2,o.subst=a.readUshorts(i,n,2*h),n+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(i,n){var a=e._bin,o=n,l=[],c=a.readUshort(i,n);n+=2;for(var h=0;h<c;h++){var u=a.readUshort(i,n);n+=2,l.push(e.GSUB.readLigature(i,o+u))}return l},e.GSUB.readLigature=function(i,n){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(i,n),n+=2;var l=a.readUshort(i,n);n+=2;for(var c=0;c<l-1;c++)o.chain.push(a.readUshort(i,n)),n+=2;return o},e.head={},e.head.parse=function(i,n,a){var o=e._bin,l={};return o.readFixed(i,n),n+=4,l.fontRevision=o.readFixed(i,n),n+=4,o.readUint(i,n),n+=4,o.readUint(i,n),n+=4,l.flags=o.readUshort(i,n),n+=2,l.unitsPerEm=o.readUshort(i,n),n+=2,l.created=o.readUint64(i,n),n+=8,l.modified=o.readUint64(i,n),n+=8,l.xMin=o.readShort(i,n),n+=2,l.yMin=o.readShort(i,n),n+=2,l.xMax=o.readShort(i,n),n+=2,l.yMax=o.readShort(i,n),n+=2,l.macStyle=o.readUshort(i,n),n+=2,l.lowestRecPPEM=o.readUshort(i,n),n+=2,l.fontDirectionHint=o.readShort(i,n),n+=2,l.indexToLocFormat=o.readShort(i,n),n+=2,l.glyphDataFormat=o.readShort(i,n),n+=2,l},e.hhea={},e.hhea.parse=function(i,n,a){var o=e._bin,l={};return o.readFixed(i,n),n+=4,l.ascender=o.readShort(i,n),n+=2,l.descender=o.readShort(i,n),n+=2,l.lineGap=o.readShort(i,n),n+=2,l.advanceWidthMax=o.readUshort(i,n),n+=2,l.minLeftSideBearing=o.readShort(i,n),n+=2,l.minRightSideBearing=o.readShort(i,n),n+=2,l.xMaxExtent=o.readShort(i,n),n+=2,l.caretSlopeRise=o.readShort(i,n),n+=2,l.caretSlopeRun=o.readShort(i,n),n+=2,l.caretOffset=o.readShort(i,n),n+=2,n+=8,l.metricDataFormat=o.readShort(i,n),n+=2,l.numberOfHMetrics=o.readUshort(i,n),n+=2,l},e.hmtx={},e.hmtx.parse=function(i,n,a,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},h=0,u=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(h=l.readUshort(i,n),n+=2,u=l.readShort(i,n),n+=2),c.aWidth.push(h),c.lsBearing.push(u);return c},e.kern={},e.kern.parse=function(i,n,a,o){var l=e._bin,c=l.readUshort(i,n);if(n+=2,c==1)return e.kern.parseV1(i,n-2,a,o);var h=l.readUshort(i,n);n+=2;for(var u={glyph1:[],rval:[]},f=0;f<h;f++){n+=2,a=l.readUshort(i,n),n+=2;var d=l.readUshort(i,n);n+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;n=e.kern.readFormat0(i,n,u)}return u},e.kern.parseV1=function(i,n,a,o){var l=e._bin;l.readFixed(i,n),n+=4;var c=l.readUint(i,n);n+=4;for(var h={glyph1:[],rval:[]},u=0;u<c;u++){l.readUint(i,n),n+=4;var f=l.readUshort(i,n);n+=2,l.readUshort(i,n),n+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;n=e.kern.readFormat0(i,n,h)}return h},e.kern.readFormat0=function(i,n,a){var o=e._bin,l=-1,c=o.readUshort(i,n);n+=2,o.readUshort(i,n),n+=2,o.readUshort(i,n),n+=2,o.readUshort(i,n),n+=2;for(var h=0;h<c;h++){var u=o.readUshort(i,n);n+=2;var f=o.readUshort(i,n);n+=2;var d=o.readShort(i,n);n+=2,u!=l&&(a.glyph1.push(u),a.rval.push({glyph2:[],vals:[]}));var g=a.rval[a.rval.length-1];g.glyph2.push(f),g.vals.push(d),l=u}return n},e.loca={},e.loca.parse=function(i,n,a,o){var l=e._bin,c=[],h=o.head.indexToLocFormat,u=o.maxp.numGlyphs+1;if(h==0)for(var f=0;f<u;f++)c.push(l.readUshort(i,n+(f<<1))<<1);if(h==1)for(f=0;f<u;f++)c.push(l.readUint(i,n+(f<<2)));return c},e.maxp={},e.maxp.parse=function(i,n,a){var o=e._bin,l={},c=o.readUint(i,n);return n+=4,l.numGlyphs=o.readUshort(i,n),n+=2,c==65536&&(l.maxPoints=o.readUshort(i,n),n+=2,l.maxContours=o.readUshort(i,n),n+=2,l.maxCompositePoints=o.readUshort(i,n),n+=2,l.maxCompositeContours=o.readUshort(i,n),n+=2,l.maxZones=o.readUshort(i,n),n+=2,l.maxTwilightPoints=o.readUshort(i,n),n+=2,l.maxStorage=o.readUshort(i,n),n+=2,l.maxFunctionDefs=o.readUshort(i,n),n+=2,l.maxInstructionDefs=o.readUshort(i,n),n+=2,l.maxStackElements=o.readUshort(i,n),n+=2,l.maxSizeOfInstructions=o.readUshort(i,n),n+=2,l.maxComponentElements=o.readUshort(i,n),n+=2,l.maxComponentDepth=o.readUshort(i,n),n+=2),l},e.name={},e.name.parse=function(i,n,a){var o=e._bin,l={};o.readUshort(i,n),n+=2;var c=o.readUshort(i,n);n+=2,o.readUshort(i,n);for(var h,u=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=n+=2,d=0;d<c;d++){var g=o.readUshort(i,n);n+=2;var v=o.readUshort(i,n);n+=2;var m=o.readUshort(i,n);n+=2;var p=o.readUshort(i,n);n+=2;var S=o.readUshort(i,n);n+=2;var E=o.readUshort(i,n);n+=2;var _,T=u[p],b=f+12*c+E;if(g==0)_=o.readUnicode(i,b,S/2);else if(g==3&&v==0)_=o.readUnicode(i,b,S/2);else if(v==0)_=o.readASCII(i,b,S);else if(v==1)_=o.readUnicode(i,b,S/2);else if(v==3)_=o.readUnicode(i,b,S/2);else{if(g!=1)throw"unknown encoding "+v+", platformID: "+g;_=o.readASCII(i,b,S),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var w="p"+g+","+m.toString(16);l[w]==null&&(l[w]={}),l[w][T!==void 0?T:p]=_,l[w]._lang=m}for(var U in l)if(l[U].postScriptName!=null&&l[U]._lang==1033)return l[U];for(var U in l)if(l[U].postScriptName!=null&&l[U]._lang==0)return l[U];for(var U in l)if(l[U].postScriptName!=null&&l[U]._lang==3084)return l[U];for(var U in l)if(l[U].postScriptName!=null)return l[U];for(var U in l){h=U;break}return console.debug("returning name table with languageID "+l[h]._lang),l[h]},e["OS/2"]={},e["OS/2"].parse=function(i,n,a){var o=e._bin.readUshort(i,n);n+=2;var l={};if(o==0)e["OS/2"].version0(i,n,l);else if(o==1)e["OS/2"].version1(i,n,l);else if(o==2||o==3||o==4)e["OS/2"].version2(i,n,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(i,n,l)}return l},e["OS/2"].version0=function(i,n,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(i,n),n+=2,a.usWeightClass=o.readUshort(i,n),n+=2,a.usWidthClass=o.readUshort(i,n),n+=2,a.fsType=o.readUshort(i,n),n+=2,a.ySubscriptXSize=o.readShort(i,n),n+=2,a.ySubscriptYSize=o.readShort(i,n),n+=2,a.ySubscriptXOffset=o.readShort(i,n),n+=2,a.ySubscriptYOffset=o.readShort(i,n),n+=2,a.ySuperscriptXSize=o.readShort(i,n),n+=2,a.ySuperscriptYSize=o.readShort(i,n),n+=2,a.ySuperscriptXOffset=o.readShort(i,n),n+=2,a.ySuperscriptYOffset=o.readShort(i,n),n+=2,a.yStrikeoutSize=o.readShort(i,n),n+=2,a.yStrikeoutPosition=o.readShort(i,n),n+=2,a.sFamilyClass=o.readShort(i,n),n+=2,a.panose=o.readBytes(i,n,10),n+=10,a.ulUnicodeRange1=o.readUint(i,n),n+=4,a.ulUnicodeRange2=o.readUint(i,n),n+=4,a.ulUnicodeRange3=o.readUint(i,n),n+=4,a.ulUnicodeRange4=o.readUint(i,n),n+=4,a.achVendID=[o.readInt8(i,n),o.readInt8(i,n+1),o.readInt8(i,n+2),o.readInt8(i,n+3)],n+=4,a.fsSelection=o.readUshort(i,n),n+=2,a.usFirstCharIndex=o.readUshort(i,n),n+=2,a.usLastCharIndex=o.readUshort(i,n),n+=2,a.sTypoAscender=o.readShort(i,n),n+=2,a.sTypoDescender=o.readShort(i,n),n+=2,a.sTypoLineGap=o.readShort(i,n),n+=2,a.usWinAscent=o.readUshort(i,n),n+=2,a.usWinDescent=o.readUshort(i,n),n+=2},e["OS/2"].version1=function(i,n,a){var o=e._bin;return n=e["OS/2"].version0(i,n,a),a.ulCodePageRange1=o.readUint(i,n),n+=4,a.ulCodePageRange2=o.readUint(i,n),n+=4},e["OS/2"].version2=function(i,n,a){var o=e._bin;return n=e["OS/2"].version1(i,n,a),a.sxHeight=o.readShort(i,n),n+=2,a.sCapHeight=o.readShort(i,n),n+=2,a.usDefault=o.readUshort(i,n),n+=2,a.usBreak=o.readUshort(i,n),n+=2,a.usMaxContext=o.readUshort(i,n),n+=2},e["OS/2"].version5=function(i,n,a){var o=e._bin;return n=e["OS/2"].version2(i,n,a),a.usLowerOpticalPointSize=o.readUshort(i,n),n+=2,a.usUpperOpticalPointSize=o.readUshort(i,n),n+=2},e.post={},e.post.parse=function(i,n,a){var o=e._bin,l={};return l.version=o.readFixed(i,n),n+=4,l.italicAngle=o.readFixed(i,n),n+=4,l.underlinePosition=o.readShort(i,n),n+=2,l.underlineThickness=o.readShort(i,n),n+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,n){var a=i.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var l=a.tables[o];if(l.format==0)return n>=l.map.length?0:l.map[n];if(l.format==4){for(var c=-1,h=0;h<l.endCount.length;h++)if(n<=l.endCount[h]){c=h;break}return c==-1||l.startCount[c]>n?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[n-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:n+l.idDelta[c])}if(l.format==12){if(n>l.groups[l.groups.length-1][1])return 0;for(h=0;h<l.groups.length;h++){var u=l.groups[h];if(u[0]<=n&&n<=u[1])return u[2]+(n-u[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(i,n){var a={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[n]){var o=i.SVG.entries[n];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),i.SVG.entries[n]=o),o)}if(i.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},c=i.CFF,h=i.CFF.Private;if(c.ROS){for(var u=0;c.FDSelect[u+2]<=n;)u+=2;h=c.FDArray[c.FDSelect[u+1]].Private}e.U._drawCFF(i.CFF.CharStrings[n],l,c,h,a)}else i.glyf&&e.U._drawGlyf(n,i,a);return a},e.U._drawGlyf=function(i,n,a){var o=n.glyf[i];o==null&&(o=n.glyf[i]=e.glyf._parseGlyf(n,i)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,n,a))},e.U._simpleGlyph=function(i,n){for(var a=0;a<i.noc;a++){for(var o=a==0?0:i.endPts[a-1]+1,l=i.endPts[a],c=o;c<=l;c++){var h=c==o?l:c-1,u=c==l?o:c+1,f=1&i.flags[c],d=1&i.flags[h],g=1&i.flags[u],v=i.xs[c],m=i.ys[c];if(c==o)if(f){if(!d){e.U.P.moveTo(n,v,m);continue}e.U.P.moveTo(n,i.xs[h],i.ys[h])}else d?e.U.P.moveTo(n,i.xs[h],i.ys[h]):e.U.P.moveTo(n,(i.xs[h]+v)/2,(i.ys[h]+m)/2);f?d&&e.U.P.lineTo(n,v,m):g?e.U.P.qcurveTo(n,v,m,i.xs[u],i.ys[u]):e.U.P.qcurveTo(n,v,m,(v+i.xs[u])/2,(m+i.ys[u])/2)}e.U.P.closePath(n)}},e.U._compoGlyph=function(i,n,a){for(var o=0;o<i.parts.length;o++){var l={cmds:[],crds:[]},c=i.parts[o];e.U._drawGlyf(c.glyphIndex,n,l);for(var h=c.m,u=0;u<l.crds.length;u+=2){var f=l.crds[u],d=l.crds[u+1];a.crds.push(f*h.a+d*h.b+h.tx),a.crds.push(f*h.c+d*h.d+h.ty)}for(u=0;u<l.cmds.length;u++)a.cmds.push(l.cmds[u])}},e.U._getGlyphClass=function(i,n){var a=e._lctf.getInterval(n,i);return a==-1?0:n[a+2]},e.U._applySubs=function(i,n,a,o){for(var l=i.length-n-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var h,u=a.tabs[c];if(!u.coverage||(h=e._lctf.coverageIndex(u.coverage,i[n]))!=-1){if(a.ltype==1)i[n],u.fmt==1?i[n]=i[n]+u.delta:i[n]=u.newg[h];else if(a.ltype==4)for(var f=u.vals[h],d=0;d<f.length;d++){var g=f[d],v=g.chain.length;if(!(v>l)){for(var m=!0,p=0,S=0;S<v;S++){for(;i[n+p+(1+S)]==-1;)p++;g.chain[S]!=i[n+p+(1+S)]&&(m=!1)}if(m){for(i[n]=g.nglyph,S=0;S<v+p;S++)i[n+S+1]=-1;break}}}else if(a.ltype==5&&u.fmt==2)for(var E=e._lctf.getInterval(u.cDef,i[n]),_=u.cDef[E+2],T=u.scset[_],b=0;b<T.length;b++){var w=T[b],U=w.input;if(!(U.length>l)){for(m=!0,S=0;S<U.length;S++){var y=e._lctf.getInterval(u.cDef,i[n+1+S]);if(E==-1&&u.cDef[y+2]!=U[S]){m=!1;break}}if(m){var x=w.substLookupRecords;for(d=0;d<x.length;d+=2)x[d],x[d+1]}}}else if(a.ltype==6&&u.fmt==3){if(!e.U._glsCovered(i,u.backCvg,n-u.backCvg.length)||!e.U._glsCovered(i,u.inptCvg,n)||!e.U._glsCovered(i,u.ahedCvg,n+u.inptCvg.length))continue;var P=u.lookupRec;for(b=0;b<P.length;b+=2){E=P[b];var C=o[P[b+1]];e.U._applySubs(i,n+E,C,o)}}}}},e.U._glsCovered=function(i,n,a){for(var o=0;o<n.length;o++)if(e._lctf.coverageIndex(n[o],i[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(i,n,a){for(var o={cmds:[],crds:[]},l=0,c=0;c<n.length;c++){var h=n[c];if(h!=-1){for(var u=c<n.length-1&&n[c+1]!=-1?n[c+1]:0,f=e.U.glyphToPath(i,h),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+l),o.crds.push(f.crds[d+1]);for(a&&o.cmds.push(a),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);a&&o.cmds.push("X"),l+=i.hmtx.aWidth[h],c<n.length-1&&(l+=e.U.getPairAdjustment(i,h,u))}}return o},e.U.P={},e.U.P.moveTo=function(i,n,a){i.cmds.push("M"),i.crds.push(n,a)},e.U.P.lineTo=function(i,n,a){i.cmds.push("L"),i.crds.push(n,a)},e.U.P.curveTo=function(i,n,a,o,l,c,h){i.cmds.push("C"),i.crds.push(n,a,o,l,c,h)},e.U.P.qcurveTo=function(i,n,a,o,l){i.cmds.push("Q"),i.crds.push(n,a,o,l)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,n,a,o,l){for(var c=n.stack,h=n.nStems,u=n.haveWidth,f=n.width,d=n.open,g=0,v=n.x,m=n.y,p=0,S=0,E=0,_=0,T=0,b=0,w=0,U=0,y=0,x=0,P={val:0,size:0};g<i.length;){e.CFF.getCharString(i,g,P);var C=P.val;if(g+=P.size,C=="o1"||C=="o18")c.length%2!=0&&!u&&(f=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(C=="o3"||C=="o23")c.length%2!=0&&!u&&(f=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(C=="o4")c.length>1&&!u&&(f=c.shift()+o.nominalWidthX,u=!0),d&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,v,m),d=!0;else if(C=="o5")for(;c.length>0;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);else if(C=="o6"||C=="o7")for(var L=c.length,I=C=="o6",V=0;V<L;V++){var k=c.shift();I?v+=k:m+=k,I=!I,e.U.P.lineTo(l,v,m)}else if(C=="o8"||C=="o24"){L=c.length;for(var ne=0;ne+6<=L;)p=v+c.shift(),S=m+c.shift(),E=p+c.shift(),_=S+c.shift(),v=E+c.shift(),m=_+c.shift(),e.U.P.curveTo(l,p,S,E,_,v,m),ne+=6;C=="o24"&&(v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m))}else{if(C=="o11")break;if(C=="o1234"||C=="o1235"||C=="o1236"||C=="o1237")C=="o1234"&&(S=m,E=(p=v+c.shift())+c.shift(),x=_=S+c.shift(),b=_,U=m,v=(w=(T=(y=E+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,p,S,E,_,y,x),e.U.P.curveTo(l,T,b,w,U,v,m)),C=="o1235"&&(p=v+c.shift(),S=m+c.shift(),E=p+c.shift(),_=S+c.shift(),y=E+c.shift(),x=_+c.shift(),T=y+c.shift(),b=x+c.shift(),w=T+c.shift(),U=b+c.shift(),v=w+c.shift(),m=U+c.shift(),c.shift(),e.U.P.curveTo(l,p,S,E,_,y,x),e.U.P.curveTo(l,T,b,w,U,v,m)),C=="o1236"&&(p=v+c.shift(),S=m+c.shift(),E=p+c.shift(),x=_=S+c.shift(),b=_,w=(T=(y=E+c.shift())+c.shift())+c.shift(),U=b+c.shift(),v=w+c.shift(),e.U.P.curveTo(l,p,S,E,_,y,x),e.U.P.curveTo(l,T,b,w,U,v,m)),C=="o1237"&&(p=v+c.shift(),S=m+c.shift(),E=p+c.shift(),_=S+c.shift(),y=E+c.shift(),x=_+c.shift(),T=y+c.shift(),b=x+c.shift(),w=T+c.shift(),U=b+c.shift(),Math.abs(w-v)>Math.abs(U-m)?v=w+c.shift():m=U+c.shift(),e.U.P.curveTo(l,p,S,E,_,y,x),e.U.P.curveTo(l,T,b,w,U,v,m));else if(C=="o14"){if(c.length>0&&!u&&(f=c.shift()+a.nominalWidthX,u=!0),c.length==4){var X=c.shift(),K=c.shift(),j=c.shift(),F=c.shift(),W=e.CFF.glyphBySE(a,j),$=e.CFF.glyphBySE(a,F);e.U._drawCFF(a.CharStrings[W],n,a,o,l),n.x=X,n.y=K,e.U._drawCFF(a.CharStrings[$],n,a,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(C=="o19"||C=="o20")c.length%2!=0&&!u&&(f=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0,g+=h+7>>3;else if(C=="o21")c.length>2&&!u&&(f=c.shift()+o.nominalWidthX,u=!0),m+=c.pop(),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),d=!0;else if(C=="o22")c.length>1&&!u&&(f=c.shift()+o.nominalWidthX,u=!0),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),d=!0;else if(C=="o25"){for(;c.length>6;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);p=v+c.shift(),S=m+c.shift(),E=p+c.shift(),_=S+c.shift(),v=E+c.shift(),m=_+c.shift(),e.U.P.curveTo(l,p,S,E,_,v,m)}else if(C=="o26")for(c.length%2&&(v+=c.shift());c.length>0;)p=v,S=m+c.shift(),v=E=p+c.shift(),m=(_=S+c.shift())+c.shift(),e.U.P.curveTo(l,p,S,E,_,v,m);else if(C=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)S=m,E=(p=v+c.shift())+c.shift(),_=S+c.shift(),v=E+c.shift(),m=_,e.U.P.curveTo(l,p,S,E,_,v,m);else if(C=="o10"||C=="o29"){var te=C=="o10"?o:a;if(c.length==0)console.debug("error: empty stack");else{var Z=c.pop(),G=te.Subrs[Z+te.Bias];n.x=v,n.y=m,n.nStems=h,n.haveWidth=u,n.width=f,n.open=d,e.U._drawCFF(G,n,a,o,l),v=n.x,m=n.y,h=n.nStems,u=n.haveWidth,f=n.width,d=n.open}}else if(C=="o30"||C=="o31"){var z=c.length,J=(ne=0,C=="o31");for(ne+=z-(L=-3&z);ne<L;)J?(S=m,E=(p=v+c.shift())+c.shift(),m=(_=S+c.shift())+c.shift(),L-ne==5?(v=E+c.shift(),ne++):v=E,J=!1):(p=v,S=m+c.shift(),E=p+c.shift(),_=S+c.shift(),v=E+c.shift(),L-ne==5?(m=_+c.shift(),ne++):m=_,J=!0),e.U.P.curveTo(l,p,S,E,_,v,m),ne+=4}else{if((C+"").charAt(0)=="o")throw console.debug("Unknown operation: "+C,i),C;c.push(C)}}}n.x=v,n.y=m,n.nStems=h,n.haveWidth=u,n.width=f,n.open=d};var t=e,r={Typr:t};return s.Typr=t,s.default=r,Object.defineProperty(s,"__esModule",{value:!0}),s}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function I0(){return function(s){var e=Uint8Array,t=Uint16Array,r=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),n=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(C,L){for(var I=new t(31),V=0;V<31;++V)I[V]=L+=1<<C[V-1];var k=new r(I[30]);for(V=1;V<30;++V)for(var ne=I[V];ne<I[V+1];++ne)k[ne]=ne-I[V]<<5|V;return[I,k]},l=o(i,2),c=l[0],h=l[1];c[28]=258,h[258]=28;for(var u=o(n,0)[0],f=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,f[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var v=function(C,L,I){for(var V=C.length,k=0,ne=new t(L);k<V;++k)++ne[C[k]-1];var X,K=new t(L);for(k=0;k<L;++k)K[k]=K[k-1]+ne[k-1]<<1;{X=new t(1<<L);var j=15-L;for(k=0;k<V;++k)if(C[k])for(var F=k<<4|C[k],W=L-C[k],$=K[C[k]-1]++<<W,te=$|(1<<W)-1;$<=te;++$)X[f[$]>>>j]=F}return X},m=new e(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var p=new e(32);for(d=0;d<32;++d)p[d]=5;var S=v(m,9),E=v(p,5),_=function(C){for(var L=C[0],I=1;I<C.length;++I)C[I]>L&&(L=C[I]);return L},T=function(C,L,I){var V=L/8|0;return(C[V]|C[V+1]<<8)>>(7&L)&I},b=function(C,L){var I=L/8|0;return(C[I]|C[I+1]<<8|C[I+2]<<16)>>(7&L)},w=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],U=function(C,L,I){var V=new Error(L||w[C]);if(V.code=C,Error.captureStackTrace&&Error.captureStackTrace(V,U),!I)throw V;return V},y=function(C,L,I){var V=C.length;if(!V||I&&!I.l&&V<5)return L||new e(0);var k=!L||I,ne=!I||I.i;I||(I={}),L||(L=new e(3*V));var X,K=function(Te){var Pe=L.length;if(Te>Pe){var we=new e(Math.max(2*Pe,Te));we.set(L),L=we}},j=I.f||0,F=I.p||0,W=I.b||0,$=I.l,te=I.d,Z=I.m,G=I.n,z=8*V;do{if(!$){I.f=j=T(C,F,1);var J=T(C,F+1,3);if(F+=3,!J){var pe=C[(be=((X=F)/8|0)+(7&X&&1)+4)-4]|C[be-3]<<8,me=be+pe;if(me>V){ne&&U(0);break}k&&K(W+pe),L.set(C.subarray(be,me),W),I.b=W+=pe,I.p=F=8*me;continue}if(J==1)$=S,te=E,Z=9,G=5;else if(J==2){var de=T(C,F,31)+257,_e=T(C,F+10,15)+4,D=de+T(C,F+5,31)+1;F+=14;for(var Ie=new e(D),Se=new e(19),Ee=0;Ee<_e;++Ee)Se[a[Ee]]=T(C,F+3*Ee,7);F+=3*_e;var ge=_(Se),ve=(1<<ge)-1,fe=v(Se,ge);for(Ee=0;Ee<D;){var be,ce=fe[T(C,F,ve)];if(F+=15&ce,(be=ce>>>4)<16)Ie[Ee++]=be;else{var ze=0,R=0;for(be==16?(R=3+T(C,F,3),F+=2,ze=Ie[Ee-1]):be==17?(R=3+T(C,F,7),F+=3):be==18&&(R=11+T(C,F,127),F+=7);R--;)Ie[Ee++]=ze}}var M=Ie.subarray(0,de),O=Ie.subarray(de);Z=_(M),G=_(O),$=v(M,Z),te=v(O,G)}else U(1);if(F>z){ne&&U(0);break}}k&&K(W+131072);for(var ee=(1<<Z)-1,Q=(1<<G)-1,q=F;;q=F){var Me=(ze=$[b(C,F)&ee])>>>4;if((F+=15&ze)>z){ne&&U(0);break}if(ze||U(2),Me<256)L[W++]=Me;else{if(Me==256){q=F,$=null;break}var he=Me-254;if(Me>264){var Re=i[Ee=Me-257];he=T(C,F,(1<<Re)-1)+c[Ee],F+=Re}var Ce=te[b(C,F)&Q],le=Ce>>>4;if(Ce||U(3),F+=15&Ce,O=u[le],le>3&&(Re=n[le],O+=b(C,F)&(1<<Re)-1,F+=Re),F>z){ne&&U(0);break}k&&K(W+131072);for(var xe=W+he;W<xe;W+=4)L[W]=L[W-O],L[W+1]=L[W+1-O],L[W+2]=L[W+2-O],L[W+3]=L[W+3-O];W=xe}}I.l=$,I.p=q,I.b=W,$&&(j=1,I.m=Z,I.d=te,I.n=G)}while(!j);return W==L.length?L:function(Te,Pe,we){(we==null||we>Te.length)&&(we=Te.length);var He=new(Te instanceof t?t:Te instanceof r?r:e)(we-Pe);return He.set(Te.subarray(Pe,we)),He}(L,0,W)},x=new e(0),P=typeof TextDecoder<"u"&&new TextDecoder;try{P.decode(x,{stream:!0})}catch{}return s.convert_streams=function(C){var L=new DataView(C),I=0;function V(){var de=L.getUint16(I);return I+=2,de}function k(){var de=L.getUint32(I);return I+=4,de}function ne(de){pe.setUint16(me,de),me+=2}function X(de){pe.setUint32(me,de),me+=4}for(var K={signature:k(),flavor:k(),length:k(),numTables:V(),reserved:V(),totalSfntSize:k(),majorVersion:V(),minorVersion:V(),metaOffset:k(),metaLength:k(),metaOrigLength:k(),privOffset:k(),privLength:k()},j=0;Math.pow(2,j)<=K.numTables;)j++;j--;for(var F=16*Math.pow(2,j),W=16*K.numTables-F,$=12,te=[],Z=0;Z<K.numTables;Z++)te.push({tag:k(),offset:k(),compLength:k(),origLength:k(),origChecksum:k()}),$+=16;var G,z=new Uint8Array(12+16*te.length+te.reduce(function(de,_e){return de+_e.origLength+4},0)),J=z.buffer,pe=new DataView(J),me=0;return X(K.flavor),ne(K.numTables),ne(F),ne(j),ne(W),te.forEach(function(de){X(de.tag),X(de.origChecksum),X($),X(de.origLength),de.outOffset=$,($+=de.origLength)%4!=0&&($+=4-$%4)}),te.forEach(function(de){var _e,D=C.slice(de.offset,de.offset+de.compLength);if(de.compLength!=de.origLength){var Ie=new Uint8Array(de.origLength);_e=new Uint8Array(D,2),y(_e,Ie)}else Ie=new Uint8Array(D);z.set(Ie,de.outOffset);var Se=0;($=de.outOffset+de.origLength)%4!=0&&(Se=4-$%4),z.set(new Uint8Array(Se).buffer,de.outOffset+de.origLength),G=$+Se}),J.slice(0,G)},Object.defineProperty(s,"__esModule",{value:!0}),s}({}).convert_streams}function F0(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,n=2,a=4,o=8,l=16,c=32;let h;function u(w){if(!h){const U={R:n,L:i,D:a,C:l,U:c,T:o};h=new Map;for(let y in r){let x=0;r[y].split(",").forEach(P=>{let[C,L]=P.split("+");C=parseInt(C,36),L=L?parseInt(L,36):0,h.set(x+=C,U[y]);for(let I=L;I--;)h.set(++x,U[y])})}}return h.get(w)||c}const f=1,d=2,g=3,v=4,m=[null,"isol","init","fina","medi"];function p(w){const U=new Uint8Array(w.length);let y=c,x=f,P=-1;for(let C=0;C<w.length;C++){const L=w.codePointAt(C);let I=u(L)|0,V=f;I&o||(y&(i|a|l)?I&(n|a|l)?(V=g,(x===f||x===g)&&U[P]++):I&(i|c)&&(x===d||x===v)&&U[P]--:y&(n|c)&&(x===d||x===v)&&U[P]--,x=U[C]=V,y=I,P=C,L>65535&&C++)}return U}function S(w,U){const y=[];for(let P=0;P<U.length;P++){const C=U.codePointAt(P);C>65535&&P++,y.push(s.U.codeToGlyph(w,C))}const x=w.GSUB;if(x){const{lookupList:P,featureList:C}=x;let L;const I=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,V=[];C.forEach(k=>{if(I.test(k.tag))for(let ne=0;ne<k.tab.length;ne++){if(V[k.tab[ne]])continue;V[k.tab[ne]]=!0;const X=P[k.tab[ne]],K=/^(isol|init|fina|medi)$/.test(k.tag);K&&!L&&(L=p(U));for(let j=0;j<y.length;j++)(!L||!K||m[L[j]]===k.tag)&&s.U._applySubs(y,j,X,P)}})}return y}function E(w,U){const y=new Int16Array(U.length*3);let x=0;for(;x<U.length;x++){const I=U[x];if(I===-1)continue;y[x*3+2]=w.hmtx.aWidth[I];const V=w.GPOS;if(V){const k=V.lookupList;for(let ne=0;ne<k.length;ne++){const X=k[ne];for(let K=0;K<X.tabs.length;K++){const j=X.tabs[K];if(X.ltype===1){if(s._lctf.coverageIndex(j.coverage,I)!==-1&&j.pos){L(j.pos,x);break}}else if(X.ltype===2){let F=null,W=P();if(W!==-1){const $=s._lctf.coverageIndex(j.coverage,U[W]);if($!==-1){if(j.fmt===1){const te=j.pairsets[$];for(let Z=0;Z<te.length;Z++)te[Z].gid2===I&&(F=te[Z])}else if(j.fmt===2){const te=s.U._getGlyphClass(U[W],j.classDef1),Z=s.U._getGlyphClass(I,j.classDef2);F=j.matrix[te][Z]}if(F){F.val1&&L(F.val1,W),F.val2&&L(F.val2,x);break}}}}else if(X.ltype===4){const F=s._lctf.coverageIndex(j.markCoverage,I);if(F!==-1){const W=P(C),$=W===-1?-1:s._lctf.coverageIndex(j.baseCoverage,U[W]);if($!==-1){const te=j.markArray[F],Z=j.baseArray[$][te.markClass];y[x*3]=Z.x-te.x+y[W*3]-y[W*3+2],y[x*3+1]=Z.y-te.y+y[W*3+1];break}}}else if(X.ltype===6){const F=s._lctf.coverageIndex(j.mark1Coverage,I);if(F!==-1){const W=P();if(W!==-1){const $=U[W];if(_(w,$)===3){const te=s._lctf.coverageIndex(j.mark2Coverage,$);if(te!==-1){const Z=j.mark1Array[F],G=j.mark2Array[te][Z.markClass];y[x*3]=G.x-Z.x+y[W*3]-y[W*3+2],y[x*3+1]=G.y-Z.y+y[W*3+1];break}}}}}}}}else if(w.kern&&!w.cff){const k=P();if(k!==-1){const ne=w.kern.glyph1.indexOf(U[k]);if(ne!==-1){const X=w.kern.rval[ne].glyph2.indexOf(I);X!==-1&&(y[k*3+2]+=w.kern.rval[ne].vals[X])}}}}return y;function P(I){for(let V=x-1;V>=0;V--)if(U[V]!==-1&&(!I||I(U[V])))return V;return-1}function C(I){return _(w,I)===1}function L(I,V){for(let k=0;k<3;k++)y[V*3+k]+=I[k]||0}}function _(w,U){const y=w.GDEF&&w.GDEF.glyphClassDef;return y?s.U._getGlyphClass(U,y):0}function T(...w){for(let U=0;U<w.length;U++)if(typeof w[U]=="number")return w[U]}function b(w){const U=Object.create(null),y=w["OS/2"],x=w.hhea,P=w.head.unitsPerEm,C=T(y&&y.sTypoAscender,x&&x.ascender,P),L={unitsPerEm:P,ascender:C,descender:T(y&&y.sTypoDescender,x&&x.descender,0),capHeight:T(y&&y.sCapHeight,C),xHeight:T(y&&y.sxHeight,C),lineGap:T(y&&y.sTypoLineGap,x&&x.lineGap),supportsCodePoint(I){return s.U.codeToGlyph(w,I)>0},forEachGlyph(I,V,k,ne){let X=0;const K=1/L.unitsPerEm*V,j=S(w,I);let F=0;const W=E(w,j);return j.forEach(($,te)=>{if($!==-1){let Z=U[$];if(!Z){const{cmds:G,crds:z}=s.U.glyphToPath(w,$);let J="",pe=0;for(let Ie=0,Se=G.length;Ie<Se;Ie++){const Ee=t[G[Ie]];J+=G[Ie];for(let ge=1;ge<=Ee;ge++)J+=(ge>1?",":"")+z[pe++]}let me,de,_e,D;if(z.length){me=de=1/0,_e=D=-1/0;for(let Ie=0,Se=z.length;Ie<Se;Ie+=2){let Ee=z[Ie],ge=z[Ie+1];Ee<me&&(me=Ee),ge<de&&(de=ge),Ee>_e&&(_e=Ee),ge>D&&(D=ge)}}else me=_e=de=D=0;Z=U[$]={index:$,advanceWidth:w.hmtx.aWidth[$],xMin:me,yMin:de,xMax:_e,yMax:D,path:J}}ne.call(null,Z,X+W[te*3]*K,W[te*3+1]*K,F),X+=W[te*3+2]*K,k&&(X+=k*V)}F+=I.codePointAt(F)>65535?2:1}),X}};return L}return function(U){const y=new Uint8Array(U,0,4),x=s._bin.readASCII(y,0,4);if(x==="wOFF")U=e(U);else if(x==="wOF2")throw new Error("woff2 fonts not supported");return b(s.parse(U)[0])}}const N0=ji({name:"Typr Font Parser",dependencies:[L0,I0,F0],init(s,e,t){const r=s(),i=e();return t(r,i)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function O0(){return function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(E){var _=E>>5;this.buckets.set(_,(this.buckets.get(_)||0)|1<<(31&E))},e.prototype.has=function(E){var _=this.buckets.get(E>>5);return _!==void 0&&(_&1<<(31&E))!=0},e.prototype.serialize=function(){var E=[];return this.buckets.forEach(function(_,T){E.push((+T).toString(36)+":"+_.toString(36))}),E.join(",")},e.prototype.deserialize=function(E){var _=this;this.buckets.clear(),E.split(",").forEach(function(T){var b=T.split(":");_.buckets.set(parseInt(b[0],36),parseInt(b[1],36))})};var t=Math.pow(2,8),r=t-1,i=~r;function n(E){var _=function(b){return b&i}(E).toString(16),T=function(b){return(b&i)+t-1}(E).toString(16);return"codepoint-index/plane"+(E>>16)+"/"+_+"-"+T+".json"}function a(E,_){var T=E&r,b=_.codePointAt(T/6|0);return((b=(b||48)-48)&1<<T%6)!=0}function o(E,_){var T;(T=E,T.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(b){return b.split("-").map(function(w){return parseInt(w.trim(),16)})})).forEach(function(b){var w=b[0],U=b[1];U===void 0&&(U=w),_(w,U)})}function l(E,_){o(E,function(T,b){for(var w=T;w<=b;w++)_(w)})}var c={},h={},u=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(E){var _=u.get(E);return _||(_=new e,l(E.ranges,function(T){return _.add(T)}),u.set(E,_)),_}var g,v=new Map;function m(E,_,T){return E[_]?_:E[T]?T:function(b){for(var w in b)return w}(E)}function p(E,_){var T=_;if(!E.includes(T)){T=1/0;for(var b=0;b<E.length;b++)Math.abs(E[b]-_)<Math.abs(T-_)&&(T=E[b])}return T}function S(E){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(_){g.add(_)})),g.has(E)}return s.CodePointSet=e,s.clearCache=function(){c={},h={}},s.getFontsForString=function(E,_){_===void 0&&(_={});var T,b=_.lang;b===void 0&&(b=/\p{Script=Hangul}/u.test(T=E)?"ko":/\p{Script=Hiragana}|\p{Script=Katakana}/u.test(T)?"ja":"en");var w=_.category;w===void 0&&(w="sans-serif");var U=_.style;U===void 0&&(U="normal");var y=_.weight;y===void 0&&(y=400);var x=(_.dataUrl||f).replace(/\/$/g,""),P=new Map,C=new Uint8Array(E.length),L={},I={},V=new Array(E.length),k=new Map,ne=!1;function X(F){var W=v.get(F);return W||(W=fetch(x+"/"+F).then(function($){if(!$.ok)throw new Error($.statusText);return $.json().then(function(te){if(!Array.isArray(te)||te[0]!==1)throw new Error("Incorrect schema version; need 1, got "+te[0]);return te[1]})}).catch(function($){if(x!==f)return ne||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+x+'", trying default CDN. '+$.message),ne=!0),x=f,v.delete(F),X(F);throw $}),v.set(F,W)),W}for(var K=function(F){var W=E.codePointAt(F),$=n(W);V[F]=$,c[$]||k.has($)||k.set($,X($).then(function(te){c[$]=te})),W>65535&&(F++,j=F)},j=0;j<E.length;j++)K(j);return Promise.all(k.values()).then(function(){k.clear();for(var F=function($){var te=E.codePointAt($),Z=null,G=c[V[$]],z=void 0;for(var J in G){var pe=I[J];if(pe===void 0&&(pe=I[J]=new RegExp(J).test(b||"en")),pe){for(var me in z=J,G[J])if(a(te,G[J][me])){Z=me;break}break}}if(!Z){e:for(var de in G)if(de!==z){for(var _e in G[de])if(a(te,G[de][_e])){Z=_e;break e}}}Z||(console.debug("No font coverage for U+"+te.toString(16)),Z="latin"),V[$]=Z,h[Z]||k.has(Z)||k.set(Z,X("font-meta/"+Z+".json").then(function(D){h[Z]=D})),te>65535&&($++,W=$)},W=0;W<E.length;W++)F(W);return Promise.all(k.values())}).then(function(){for(var F,W=null,$=0;$<E.length;$++){var te=E.codePointAt($);if(W&&(S(te)||d(W).has(te)))C[$]=C[$-1];else{W=h[V[$]];var Z=L[W.id];if(!Z){var G=W.typeforms,z=m(G,w,"sans-serif"),J=m(G[z],U,"normal"),pe=p((F=G[z])===null||F===void 0?void 0:F[J],y);Z=L[W.id]=x+"/font-files/"+W.id+"/"+z+"."+J+"."+pe+".woff"}var me=P.get(Z);me==null&&(me=P.size,P.set(Z,me)),C[$]=me}te>65535&&($++,C[$]=C[$-1])}return{fontUrls:Array.from(P.keys()),chars:C}})},Object.defineProperty(s,"__esModule",{value:!0}),s}({})}function B0(s,e){const t=Object.create(null),r=Object.create(null);function i(a,o){const l=c=>{console.error(`Failure loading font ${a}`,c)};try{const c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const h=s(c.response);h.src=a,o(h)}catch(h){l(h)}},c.onerror=l,c.send()}catch(c){l(c)}}function n(a,o){let l=t[a];l?o(l):r[a]?r[a].push(o):(r[a]=[o],i(a,c=>{c.src=a,t[a]=c,r[a].forEach(h=>h(c)),delete r[a]}))}return function(a,o,{lang:l,fonts:c=[],style:h="normal",weight:u="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(a.length),g=[];a.length||S();const v=new Map,m=[];if(h!=="italic"&&(h="normal"),typeof u!="number"&&(u=u==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(_=>!_.lang||_.lang.test(l)).reverse(),c.length){let w=0;(function U(y=0){for(let x=y,P=a.length;x<P;x++){const C=a.codePointAt(x);if(w===1&&g[d[x-1]].supportsCodePoint(C)||x>0&&/\s/.test(a[x]))d[x]=d[x-1],w===2&&(m[m.length-1][1]=x);else for(let L=d[x],I=c.length;L<=I;L++)if(L===I){const V=w===2?m[m.length-1]:m[m.length]=[x,x];V[1]=x,w=2}else{d[x]=L;const{src:V,unicodeRange:k}=c[L];if(!k||E(C,k)){const ne=t[V];if(!ne){n(V,()=>{U(x)});return}if(ne.supportsCodePoint(C)){let X=v.get(ne);typeof X!="number"&&(X=g.length,g.push(ne),v.set(ne,X)),d[x]=X,w=1;break}}}C>65535&&x+1<P&&(d[x+1]=d[x],x++,w===2&&(m[m.length-1][1]=x))}p()})()}else m.push([0,a.length-1]),p();function p(){if(m.length){const _=m.map(T=>a.substring(T[0],T[1]+1)).join(`
`);e.getFontsForString(_,{lang:l||void 0,style:h,weight:u,dataUrl:f}).then(({fontUrls:T,chars:b})=>{const w=g.length;let U=0;m.forEach(x=>{for(let P=0,C=x[1]-x[0];P<=C;P++)d[x[0]+P]=b[U++]+w;U++});let y=0;T.forEach((x,P)=>{n(x,C=>{g[P+w]=C,++y===T.length&&S()})})})}else S()}function S(){o({chars:d,fonts:g})}function E(_,T){for(let b=0;b<T.length;b++){const[w,U=w]=T[b];if(w<=_&&_<=U)return!0}return!1}}}const k0=ji({name:"FontResolver",dependencies:[B0,N0,O0],init(s,e,t){return s(e,t())}});function z0(s,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,i="[^\\S\\u00A0]",n=new RegExp(`${i}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:g,lang:v,fonts:m,style:p,weight:S,preResolvedFonts:E,unicodeFontsURL:_},T){const b=({chars:w,fonts:U})=>{let y,x;const P=[];for(let C=0;C<w.length;C++)w[C]!==x?(x=w[C],P.push(y={start:C,end:C,fontObj:U[w[C]]})):y.end=C;T(P)};E?b(E):s(g,b,{lang:v,fonts:m,style:p,weight:S,unicodeFontsURL:_})}function o({text:g="",font:v,lang:m,sdfGlyphSize:p=64,fontSize:S=400,fontWeight:E=1,fontStyle:_="normal",letterSpacing:T=0,lineHeight:b="normal",maxWidth:w=1/0,direction:U,textAlign:y="left",textIndent:x=0,whiteSpace:P="normal",overflowWrap:C="normal",anchorX:L=0,anchorY:I=0,metricsOnly:V=!1,unicodeFontsURL:k,preResolvedFonts:ne=null,includeCaretPositions:X=!1,chunkedBoundsSize:K=8192,colorRanges:j=null},F){const W=u(),$={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),S=+S,T=+T,w=+w,b=b||"normal",x=+x,a({text:g,lang:m,style:_,weight:E,fonts:typeof v=="string"?[{src:v}]:v,unicodeFontsURL:k,preResolvedFonts:ne},te=>{$.fontLoad=u()-W;const Z=isFinite(w);let G=null,z=null,J=null,pe=null,me=null,de=null,_e=null,D=null,Ie=0,Se=0,Ee=P!=="nowrap";const ge=new Map,ve=u();let fe=x,be=0,ce=new f;const ze=[ce];te.forEach(Q=>{const{fontObj:q}=Q,{ascender:Me,descender:he,unitsPerEm:Re,lineGap:Ce,capHeight:le,xHeight:xe}=q;let Te=ge.get(q);if(!Te){const ae=S/Re,ye=b==="normal"?(Me-he+Ce)*ae:b*S,Fe=(ye-(Me-he)*ae)/2,ue=Math.min(ye,(Me-he)*ae),ie=(Me+he)/2*ae+ue/2;Te={index:ge.size,src:q.src,fontObj:q,fontSizeMult:ae,unitsPerEm:Re,ascender:Me*ae,descender:he*ae,capHeight:le*ae,xHeight:xe*ae,lineHeight:ye,baseline:-Fe-Me*ae,caretTop:ie,caretBottom:ie-ue},ge.set(q,Te)}const{fontSizeMult:Pe}=Te,we=g.slice(Q.start,Q.end+1);let He,B;q.forEachGlyph(we,S,T,(ae,ye,Fe,ue)=>{ye+=be,ue+=Q.start,He=ye,B=ae;const ie=g.charAt(ue),Ue=ae.advanceWidth*Pe,Oe=ce.count;let Be;if("isEmpty"in ae||(ae.isWhitespace=!!ie&&new RegExp(i).test(ie),ae.canBreakAfter=!!ie&&n.test(ie),ae.isEmpty=ae.xMin===ae.xMax||ae.yMin===ae.yMax||r.test(ie)),!ae.isWhitespace&&!ae.isEmpty&&Se++,Ee&&Z&&!ae.isWhitespace&&ye+Ue+fe>w&&Oe){if(ce.glyphAt(Oe-1).glyphObj.canBreakAfter)Be=new f,fe=-ye;else for(let pt=Oe;pt--;)if(pt===0&&C==="break-word"){Be=new f,fe=-ye;break}else if(ce.glyphAt(pt).glyphObj.canBreakAfter){Be=ce.splitAt(pt+1);const ut=Be.glyphAt(0).x;fe-=ut;for(let mt=Be.count;mt--;)Be.glyphAt(mt).x-=ut;break}Be&&(ce.isSoftWrapped=!0,ce=Be,ze.push(ce),Ie=w)}let Ve=ce.glyphAt(ce.count);Ve.glyphObj=ae,Ve.x=ye+fe,Ve.y=Fe,Ve.width=Ue,Ve.charIndex=ue,Ve.fontData=Te,ie===`
`&&(ce=new f,ze.push(ce),fe=-(ye+Ue+T*S)+x)}),be=He+B.advanceWidth*Pe+T*S});let R=0;ze.forEach(Q=>{let q=!0;for(let Me=Q.count;Me--;){const he=Q.glyphAt(Me);q&&!he.glyphObj.isWhitespace&&(Q.width=he.x+he.width,Q.width>Ie&&(Ie=Q.width),q=!1);let{lineHeight:Re,capHeight:Ce,xHeight:le,baseline:xe}=he.fontData;Re>Q.lineHeight&&(Q.lineHeight=Re);const Te=xe-Q.baseline;Te<0&&(Q.baseline+=Te,Q.cap+=Te,Q.ex+=Te),Q.cap=Math.max(Q.cap,Q.baseline+Ce),Q.ex=Math.max(Q.ex,Q.baseline+le)}Q.baseline-=R,Q.cap-=R,Q.ex-=R,R+=Q.lineHeight});let M=0,O=0;if(L&&(typeof L=="number"?M=-L:typeof L=="string"&&(M=-Ie*(L==="left"?0:L==="center"?.5:L==="right"?1:c(L)))),I&&(typeof I=="number"?O=-I:typeof I=="string"&&(O=I==="top"?0:I==="top-baseline"?-ze[0].baseline:I==="top-cap"?-ze[0].cap:I==="top-ex"?-ze[0].ex:I==="middle"?R/2:I==="bottom"?R:I==="bottom-baseline"?-ze[ze.length-1].baseline:c(I)*R)),!V){const Q=e.getEmbeddingLevels(g,U);G=new Uint16Array(Se),z=new Uint8Array(Se),J=new Float32Array(Se*2),pe={},_e=[1/0,1/0,-1/0,-1/0],D=[],X&&(de=new Float32Array(g.length*4)),j&&(me=new Uint8Array(Se*3));let q=0,Me=-1,he=-1,Re,Ce;if(ze.forEach((le,xe)=>{let{count:Te,width:Pe}=le;if(Te>0){let we=0;for(let ue=Te;ue--&&le.glyphAt(ue).glyphObj.isWhitespace;)we++;let He=0,B=0;if(y==="center")He=(Ie-Pe)/2;else if(y==="right")He=Ie-Pe;else if(y==="justify"&&le.isSoftWrapped){let ue=0;for(let ie=Te-we;ie--;)le.glyphAt(ie).glyphObj.isWhitespace&&ue++;B=(Ie-Pe)/ue}if(B||He){let ue=0;for(let ie=0;ie<Te;ie++){let Ue=le.glyphAt(ie);const Oe=Ue.glyphObj;Ue.x+=He+ue,B!==0&&Oe.isWhitespace&&ie<Te-we&&(ue+=B,Ue.width+=B)}}const ae=e.getReorderSegments(g,Q,le.glyphAt(0).charIndex,le.glyphAt(le.count-1).charIndex);for(let ue=0;ue<ae.length;ue++){const[ie,Ue]=ae[ue];let Oe=1/0,Be=-1/0;for(let Ve=0;Ve<Te;Ve++)if(le.glyphAt(Ve).charIndex>=ie){let pt=Ve,ut=Ve;for(;ut<Te;ut++){let mt=le.glyphAt(ut);if(mt.charIndex>Ue)break;ut<Te-we&&(Oe=Math.min(Oe,mt.x),Be=Math.max(Be,mt.x+mt.width))}for(let mt=pt;mt<ut;mt++){const Mt=le.glyphAt(mt);Mt.x=Be-(Mt.x+Mt.width-Oe)}break}}let ye;const Fe=ue=>ye=ue;for(let ue=0;ue<Te;ue++){const ie=le.glyphAt(ue);ye=ie.glyphObj;const Ue=ye.index,Oe=Q.levels[ie.charIndex]&1;if(Oe){const Be=e.getMirroredCharacter(g[ie.charIndex]);Be&&ie.fontData.fontObj.forEachGlyph(Be,0,0,Fe)}if(X){const{charIndex:Be,fontData:Ve}=ie,pt=ie.x+M,ut=ie.x+ie.width+M;de[Be*4]=Oe?ut:pt,de[Be*4+1]=Oe?pt:ut,de[Be*4+2]=le.baseline+Ve.caretBottom+O,de[Be*4+3]=le.baseline+Ve.caretTop+O;const mt=Be-Me;mt>1&&h(de,Me,mt),Me=Be}if(j){const{charIndex:Be}=ie;for(;Be>he;)he++,j.hasOwnProperty(he)&&(Ce=j[he])}if(!ye.isWhitespace&&!ye.isEmpty){const Be=q++,{fontSizeMult:Ve,src:pt,index:ut}=ie.fontData,mt=pe[pt]||(pe[pt]={});mt[Ue]||(mt[Ue]={path:ye.path,pathBounds:[ye.xMin,ye.yMin,ye.xMax,ye.yMax]});const Mt=ie.x+M,qt=ie.y+le.baseline+O;J[Be*2]=Mt,J[Be*2+1]=qt;const Yt=Mt+ye.xMin*Ve,tn=qt+ye.yMin*Ve,jt=Mt+ye.xMax*Ve,Kt=qt+ye.yMax*Ve;Yt<_e[0]&&(_e[0]=Yt),tn<_e[1]&&(_e[1]=tn),jt>_e[2]&&(_e[2]=jt),Kt>_e[3]&&(_e[3]=Kt),Be%K===0&&(Re={start:Be,end:Be,rect:[1/0,1/0,-1/0,-1/0]},D.push(Re)),Re.end++;const _t=Re.rect;if(Yt<_t[0]&&(_t[0]=Yt),tn<_t[1]&&(_t[1]=tn),jt>_t[2]&&(_t[2]=jt),Kt>_t[3]&&(_t[3]=Kt),G[Be]=Ue,z[Be]=ut,j){const un=Be*3;me[un]=Ce>>16&255,me[un+1]=Ce>>8&255,me[un+2]=Ce&255}}}}}),de){const le=g.length-Me;le>1&&h(de,Me,le)}}const ee=[];ge.forEach(({index:Q,src:q,unitsPerEm:Me,ascender:he,descender:Re,lineHeight:Ce,capHeight:le,xHeight:xe})=>{ee[Q]={src:q,unitsPerEm:Me,ascender:he,descender:Re,lineHeight:Ce,capHeight:le,xHeight:xe}}),$.typesetting=u()-ve,F({glyphIds:G,glyphFontIndices:z,glyphPositions:J,glyphData:pe,fontData:ee,caretPositions:de,glyphColors:me,chunkedBounds:D,fontSize:S,topBaseline:O+ze[0].baseline,blockBounds:[M,O-R,M+Ie,O],visibleBounds:_e,timings:$})})}function l(g,v){o({...g,metricsOnly:!0},m=>{const[p,S,E,_]=m.blockBounds;v({width:E-p,height:_-S})})}function c(g){let v=g.match(/^([\d.]+)%$/),m=v?parseFloat(v[1]):NaN;return isNaN(m)?0:m/100}function h(g,v,m){const p=g[v*4],S=g[v*4+1],E=g[v*4+2],_=g[v*4+3],T=(S-p)/m;for(let b=0;b<m;b++){const w=(v+b)*4;g[w]=p+T*b,g[w+1]=p+T*(b+1),g[w+2]=E,g[w+3]=_}}function u(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let v=f.flyweight;return v.data=this.data,v.index=g,v},splitAt(g){let v=new f;return v.data=this.data.splice(g*d.length),v}},f.flyweight=d.reduce((g,v,m,p)=>(Object.defineProperty(g,v,{get(){return this.data[this.index*d.length+m]},set(S){this.data[this.index*d.length+m]=S}}),g),{data:null,index:0}),{typeset:o,measure:l}}const ui=()=>(self.performance||Date).now(),ws=yh();let vc;function G0(s,e,t,r,i,n,a,o,l,c,h=!0){return h?V0(s,e,t,r,i,n,a,o,l,c).then(null,u=>(vc||(console.warn("WebGL SDF generation failed, falling back to JS",u),vc=!0),xc(s,e,t,r,i,n,a,o,l,c))):xc(s,e,t,r,i,n,a,o,l,c)}const fs=[],H0=5;let xo=0;function Sh(){const s=ui();for(;fs.length&&ui()-s<H0;)fs.shift()();xo=fs.length?setTimeout(Sh,0):0}const V0=(...s)=>new Promise((e,t)=>{fs.push(()=>{const r=ui();try{ws.webgl.generateIntoCanvas(...s),e({timing:ui()-r})}catch(i){t(i)}}),xo||(xo=setTimeout(Sh,0))}),W0=4,X0=2e3,_c={};let q0=0;function xc(s,e,t,r,i,n,a,o,l,c){const h="TroikaTextSDFGenerator_JS_"+q0++%W0;let u=_c[h];return u||(u=_c[h]={workerModule:ji({name:h,workerId:h,dependencies:[yh,ui],init(f,d){const g=f().javascript.generate;return function(...v){const m=d();return{textureData:g(...v),timing:d()-m}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),u.requests++,clearTimeout(u.idleTimer),u.workerModule(s,e,t,r,i,n).then(({textureData:f,timing:d})=>{const g=ui(),v=new Uint8Array(f.length*4);for(let m=0;m<f.length;m++)v[m*4+c]=f[m];return ws.webglUtils.renderImageData(a,v,o,l,s,e,1<<3-c),d+=ui()-g,--u.requests===0&&(u.idleTimer=setTimeout(()=>{E0(h)},X0)),{timing:d}})}function Y0(s){s._warm||(ws.webgl.isSupported(s),s._warm=!0)}const j0=ws.webglUtils.resizeWebGLCanvasWithoutClearing,gr={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},K0=new je;function Ii(){return(self.performance||Date).now()}const yc=Object.create(null);function Z0(s,e){s=Q0({},s);const t=Ii(),r=[];if(s.font&&r.push({label:"user",src:$0(s.font)}),s.font=r,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||gr.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||gr.unicodeFontsURL,s.colorRanges!=null){let f={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let g=s.colorRanges[d];typeof g!="number"&&(g=K0.set(g).getHex()),f[d]=g}s.colorRanges=f}Object.freeze(s);const{textureWidth:i,sdfExponent:n}=gr,{sdfGlyphSize:a}=s,o=i/a*4;let l=yc[a];if(!l){const f=document.createElement("canvas");f.width=i,f.height=a*256/o,l=yc[a]={glyphCount:0,sdfGlyphSize:a,sdfCanvas:f,sdfTexture:new Lt(f,void 0,void 0,void 0,$t,$t),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,J0(l)}const{sdfTexture:c,sdfCanvas:h}=l;bh(s).then(f=>{const{glyphIds:d,glyphFontIndices:g,fontData:v,glyphPositions:m,fontSize:p,timings:S}=f,E=[],_=new Float32Array(d.length*4);let T=0,b=0;const w=Ii(),U=v.map(L=>{let I=l.glyphsByFont.get(L.src);return I||l.glyphsByFont.set(L.src,I=new Map),I});d.forEach((L,I)=>{const V=g[I],{src:k,unitsPerEm:ne}=v[V];let X=U[V].get(L);if(!X){const{path:$,pathBounds:te}=f.glyphData[k][L],Z=Math.max(te[2]-te[0],te[3]-te[1])/a*(gr.sdfMargin*a+.5),G=l.glyphCount++,z=[te[0]-Z,te[1]-Z,te[2]+Z,te[3]+Z];U[V].set(L,X={path:$,atlasIndex:G,sdfViewBox:z}),E.push(X)}const{sdfViewBox:K}=X,j=m[b++],F=m[b++],W=p/ne;_[T++]=j+K[0]*W,_[T++]=F+K[1]*W,_[T++]=j+K[2]*W,_[T++]=F+K[3]*W,d[I]=X.atlasIndex}),S.quads=(S.quads||0)+(Ii()-w);const y=Ii();S.sdf={};const x=h.height,P=Math.ceil(l.glyphCount/o),C=Math.pow(2,Math.ceil(Math.log2(P*a)));C>x&&(console.info(`Increasing SDF texture size ${x}->${C}`),j0(h,i,C),c.dispose()),Promise.all(E.map(L=>Eh(L,l,s.gpuAccelerateSDF).then(({timing:I})=>{S.sdf[L.atlasIndex]=I}))).then(()=>{E.length&&!l.contextLost&&(Th(l),c.needsUpdate=!0),S.sdfTotal=Ii()-y,S.total=Ii()-t,e(Object.freeze({parameters:s,sdfTexture:c,sdfGlyphSize:a,sdfExponent:n,glyphBounds:_,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{l.contextLost||Y0(h)})}function Eh({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:i,contextLost:n},a){if(n)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=gr,c=Math.max(t[2]-t[0],t[3]-t[1]),h=Math.floor(e/4),u=h%(o/r)*r,f=Math.floor(h/(o/r))*r,d=e%4;return G0(r,r,s,t,c,l,i,u,f,d,a)}function J0(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const r=[];s.glyphsByFont.forEach(i=>{i.forEach(n=>{r.push(Eh(n,s,!0))})}),Promise.all(r).then(()=>{Th(s),s.sdfTexture.needsUpdate=!0})})}function Q0(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let rs;function $0(s){return rs||(rs=typeof document>"u"?{}:document.createElement("a")),rs.href=s,rs.href}function Th(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:r,height:i}=e,n=s.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==r*i*4)&&(a=new Uint8Array(r*i*4),t.image={width:r,height:i,data:a},t.flipY=!1,t.isDataTexture=!0),n.readPixels(0,0,r,i,n.RGBA,n.UNSIGNED_BYTE,a)}}const ev=ji({name:"Typesetter",dependencies:[z0,k0,b0],init(s,e,t){return s(e,t())}}),bh=ji({name:"Typesetter",dependencies:[ev],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}});bh.onMainThread;const Mc={};function tv(s){let e=Mc[s];return e||(e=Mc[s]=new qn(1,1,s,s).translate(.5,.5,0)),e}const nv="aTroikaGlyphBounds",Sc="aTroikaGlyphIndex",iv="aTroikaGlyphColor";class rv extends lf{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Xn,this.boundingBox=new Cn}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=tv(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,i,n){this.updateAttributeData(nv,e,4),this.updateAttributeData(Sc,t,1),this.updateAttributeData(iv,n,3),this._blockBounds=r,this._chunkedBounds=i,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:i,floor:n,min:a,max:o,sin:l,cos:c}=Math,h=i/2,u=i*2,f=Math.abs(t),d=e[0]/f,g=e[2]/f,v=n((d+h)/u)!==n((g+h)/u)?-f:a(l(d)*f,l(g)*f),m=n((d-h)/u)!==n((g-h)/u)?f:o(l(d)*f,l(g)*f),p=n((d+i)/u)!==n((g+i)/u)?f*2:o(f-c(d)*f,f-c(g)*f);r.min.set(v,e[1],t<0?-p:0),r.max.set(m,e[3],t<0?0:p)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Sc).count,r=this._chunkedBounds;if(r)for(let i=r.length;i--;){t=r[i].end;let n=r[i].rect;if(n[1]<e.w&&n[3]>e.y&&n[0]<e.z&&n[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,r){const i=this.getAttribute(e);t?i&&i.array.length===t.length?(i.array.set(t),i.needsUpdate=!0):(this.setAttribute(e,new uo(t,r)),delete this._maxInstanceCount,this.dispose()):i&&this.deleteAttribute(e)}}const sv=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,av=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,ov=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,lv=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function cv(s){const e=_o(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Qe},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new st(0,0,0,0)},uTroikaClipRect:{value:new st(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Qe},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new je},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ke},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:sv,vertexTransform:av,fragmentDefs:ov,fragmentColorTransform:lv,customRewriter({vertexShader:t,fragmentShader:r}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(r)&&(r=r.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(Mh,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const zo=new An({color:16777215,side:ln,transparent:!0}),Ec=8421504,Tc=new ht,ss=new H,Ma=new H,pr=[],hv=new H,Sa="+x+y";function bc(s){return Array.isArray(s)?s[0]:s}let wh=()=>{const s=new dt(new qn(1,1),zo);return wh=()=>s,s},Ah=()=>{const s=new dt(new qn(1,1,32,1),zo);return Ah=()=>s,s};const uv={type:"syncstart"},fv={type:"synccomplete"},Rh=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],dv=Rh.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Ch extends dt{constructor(){const e=new rv;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Ec,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Sa,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(uv),Z0({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(i=>i&&i())})),this.dispatchEvent(fv),e&&e()})))}onBeforeRender(e,t,r,i,n,a){this.sync(),n.isTroikaTextMaterial&&this._prepareForRender(n)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return cv(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=zo.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.hasOutline()){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function i(){e.removeEventListener("dispose",i),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return bc(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return bc(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,i=this.textRenderInfo;if(i){const{sdfTexture:o,blockBounds:l}=i;r.uTroikaSDFTexture.value=o,r.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),r.uTroikaSDFGlyphSize.value=i.sdfGlyphSize,r.uTroikaSDFExponent.value=i.sdfExponent,r.uTroikaTotalBounds.value.fromArray(l),r.uTroikaUseGlyphColors.value=!t&&!!i.glyphColors;let c=0,h=0,u=0,f,d,g,v=0,m=0;if(t){let{outlineWidth:S,outlineOffsetX:E,outlineOffsetY:_,outlineBlur:T,outlineOpacity:b}=this;c=this._parsePercent(S)||0,h=Math.max(0,this._parsePercent(T)||0),f=b,v=this._parsePercent(E)||0,m=this._parsePercent(_)||0}else u=Math.max(0,this._parsePercent(this.strokeWidth)||0),u&&(g=this.strokeColor,r.uTroikaStrokeColor.value.set(g??Ec),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;r.uTroikaEdgeOffset.value=c,r.uTroikaPositionOffset.value.set(v,m),r.uTroikaBlurRadius.value=h,r.uTroikaStrokeWidth.value=u,r.uTroikaStrokeOpacity.value=d,r.uTroikaFillOpacity.value=f??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)r.uTroikaClipRect.value.fromArray(p);else{const S=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(l[0]-S,l[1]-S,l[2]+S,l[3]+S)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const n=t?this.outlineColor||0:this.color;if(n==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new je;(n!==o._input||typeof n=="object")&&o.set(o._input=n)}let a=this.orientation||Sa;if(a!==e._orientation){let o=r.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let l=a!==Sa&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,h,u,f]=l;ss.set(0,0,0)[h]=c==="-"?1:-1,Ma.set(0,0,0)[f]=u==="-"?-1:1,Tc.lookAt(hv,ss.cross(Ma),Ma),o.setFromMatrix4(Tc)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Qe){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new Qe){return ss.copy(e),this.localPositionToTextCoords(this.worldToLocal(ss),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:i}=this;if(r){const n=r.blockBounds,a=i?Ah():wh(),o=a.geometry,{position:l,uv:c}=o.attributes;for(let h=0;h<c.count;h++){let u=n[0]+c.getX(h)*(n[2]-n[0]);const f=n[1]+c.getY(h)*(n[3]-n[1]);let d=0;i&&(d=i-Math.cos(u/i)*i,u=Math.sin(u/i)*i),l.setXYZ(h,u,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,pr.length=0,a.raycast(e,pr);for(let h=0;h<pr.length;h++)pr[h].object=this,t.push(pr[h])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,dv.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}Rh.forEach(s=>{const e="_private_"+s;Object.defineProperty(Ch.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new Cn;new je;const pv=new H(0,0,1);class mv{constructor(e){oe(this,"pool");oe(this,"active",[]);oe(this,"collision",new gh);oe(this,"impactPoint",new H);oe(this,"cameraSpace",new H);oe(this,"inverseCamera",new di);oe(this,"roll",new di);oe(this,"baseDir",new H);oe(this,"perpDir",new H);const{projectile:t}=Ye;this.pool=new ko(()=>{const r=new Ch;return r.font=_0,r.anchorX="center",r.anchorY="middle",r.color=t.fillColor,r.outlineColor=t.outlineColor,r.outlineWidth=.05,r.outlineOpacity=1,r.fillOpacity=1,r.visible=!1,r.frustumCulled=!1,e.add(r),{mesh:r,state:"grounded",velocity:new H,distanceFlown:0,timer:0,splashed:!1}},t.capacity)}get activeCount(){return this.active.length}launch(e,t,r){const{projectile:i}=Ye,n=e.length;if(n===0)return!1;this.baseDir.copy(r),this.baseDir.y=0,this.baseDir.lengthSq()<1e-6&&this.baseDir.set(0,0,-1),this.baseDir.normalize(),this.perpDir.set(-this.baseDir.z,0,this.baseDir.x);const a=Rn(1.35-(n-4)*.03,.9,1.4);let o=0;for(let l=0;l<n;l++){const c=this.pool.acquire();if(c===void 0)break;const h=n===1?0:l/(n-1)-.5,u=h*2*i.letterSpreadAngle+li(-.03,.03),f=i.speed*li(1-i.letterSpeedVariance,1+i.letterSpeedVariance),d=Math.cos(u),g=Math.sin(u);c.velocity.set((this.baseDir.x*d+this.baseDir.z*g)*f,0,(-this.baseDir.x*g+this.baseDir.z*d)*f),c.mesh.position.set(t.x+this.perpDir.x*h*i.letterSpreadDistance,t.y-h*i.letterStackHeight,t.z+this.perpDir.z*h*i.letterSpreadDistance),c.state="flying",c.distanceFlown=0,c.timer=0,c.splashed=!1,c.mesh.visible=!0,c.mesh.fontSize=a,c.mesh.text=e[l],c.mesh.fillOpacity=1,c.mesh.outlineOpacity=1,c.mesh.sync(),this.active.push(c),o++}return o>0}update(e,t,r,i){const{projectile:n}=Ye;this.inverseCamera.copy(r).invert();for(let a=this.active.length-1;a>=0;a--){const o=this.active[a];let l=!1;switch(o.state){case"flying":{const c=Math.hypot(o.velocity.x,o.velocity.z)||1,h=c*e,u=n.maxDistance-o.distanceFlown,f=Math.min(h,Math.max(u,0)),d=1/c;o.mesh.position.x+=o.velocity.x*d*f,o.mesh.position.z+=o.velocity.z*d*f,o.distanceFlown+=f,this.impactPoint.copy(o.mesh.position);const g=this.collision.collectAt(this.impactPoint,n.hitRadius,t);if(g.length>0){for(let v=0;v<g.length;v++)i.onEnemyKilled(g[v]);if(!o.splashed){o.splashed=!0;const v=this.collision.collectAt(this.impactPoint,n.impactRadius,t);for(let m=0;m<v.length;m++)i.onEnemyKilled(v[m]);i.onImpact(this.impactPoint)}}o.distanceFlown>=n.maxDistance&&(o.state="falling",o.velocity.set(0,0,0));break}case"falling":{o.velocity.y-=n.gravity*e;const c=Math.exp(-2.2*e);o.velocity.x*=c,o.velocity.z*=c,o.mesh.position.addScaledVector(o.velocity,e),this.killGroundHazards(o,t,i),o.mesh.position.y<=n.restY&&(o.mesh.position.y=n.restY,o.velocity.set(0,0,0),o.state="grounded",o.timer=n.groundLifetimeMs);break}case"grounded":{this.killGroundHazards(o,t,i),o.timer-=e*1e3,o.timer<=0&&(o.state="fading",o.timer=n.fadeMs);break}case"fading":{this.killGroundHazards(o,t,i),o.timer-=e*1e3;const c=Rn(o.timer/n.fadeMs,0,1);o.mesh.fillOpacity=c,o.mesh.outlineOpacity=c,o.timer<=0&&(l=!0);break}}if(this.orient(o,r,this.inverseCamera),l){const c=this.active.pop();c!==void 0&&c!==o&&(this.active[a]=c),o.mesh.visible=!1,this.pool.release(o)}}}killGroundHazards(e,t,r){const{projectile:i}=Ye;this.impactPoint.copy(e.mesh.position);const n=this.collision.collectAt(this.impactPoint,i.groundHazardRadius,t);for(let a=0;a<n.length;a++)r.onEnemyKilled(n[a])}orient(e,t,r){if(this.cameraSpace.copy(e.velocity).applyQuaternion(r),this.cameraSpace.lengthSq()<1e-6){e.mesh.quaternion.copy(t);return}let i=Math.atan2(this.cameraSpace.y,this.cameraSpace.x);i>Math.PI/2?i-=Math.PI:i<-Math.PI/2&&(i+=Math.PI),this.roll.setFromAxisAngle(pv,Rn(i,-.45,.45)),e.mesh.quaternion.copy(t).multiply(this.roll)}reset(){for(const e of this.active)e.mesh.visible=!1,this.pool.release(e);this.active.length=0}dispose(e){this.reset(),this.pool.dispose(t=>{e.remove(t.mesh),t.mesh.dispose()}),this.active.length=0}}function gv(s,e=!1){const t=s[0].index!==null,r=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),n={},a={},o=s[0].morphTargetsRelative,l=new bt;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;n[d]===void 0&&(n[d]=[]),n[d].push(u.attributes[d]),f++}if(f!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(const h in n){const u=wc(n[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][f]);const g=wc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function wc(s){let e,t,r,i=-1,n=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=h.normalized),r!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=h.count*t}const a=new e(n),o=new en(a,t,r);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){const v=h.getComponent(f,g);o.setComponent(f+u,g,v)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}const vv=4,Ac=7;class _v{constructor(){oe(this,"group",new ai);oe(this,"velocity",new H);oe(this,"radius",Ye.player.radius);oe(this,"body");oe(this,"indicator");oe(this,"indicatorMaterial");oe(this,"characterParts",[]);oe(this,"facing",0);oe(this,"bobTime",0);const{player:e}=Ye;this.body=new dt(new Ss(e.capsuleRadius,e.capsuleLength,6,16),new oi({color:e.color,emissive:e.emissive,emissiveIntensity:.85,roughness:.35,metalness:.15})),this.body.position.y=e.bodyY,this.body.castShadow=!0,this.group.add(this.body),this.indicatorMaterial=new An({color:e.indicatorColor,transparent:!0,opacity:.55,depthWrite:!1}),this.indicator=new dt(new Es(e.radius*.95,e.radius*1.25,40),this.indicatorMaterial),this.indicator.rotation.x=-Math.PI/2,this.indicator.position.y=.05,this.group.add(this.indicator),this.buildHat(),this.buildMustache()}buildHat(){const e=new oi({color:1316381,roughness:.8,metalness:.05}),t=new oi({color:3662079,emissive:3662079,emissiveIntensity:.4,roughness:.4,metalness:.1}),r=new dt(new ci(.46,.5,.05,28),e),i=new dt(new ci(.3,.35,.42,28),e);i.position.y=.235;const n=new dt(new ci(.355,.36,.09,28),t);n.position.y=.065;for(const o of[r,i,n])o.castShadow=!0;const a=new ai;a.name="hat",a.position.y=.865,a.rotation.z=.07,a.rotation.x=-.04,a.add(r,i,n),this.body.add(a),this.characterParts.push(r.geometry,i.geometry,n.geometry,e,t)}buildMustache(){const e=[];for(const n of[-1,1]){for(let o=0;o<Ac;o++){const l=o/(Ac-1),c=1-l,h=c*c*.24+2*c*l*.56+l*l*.5,u=c*c*.15+2*c*l*-.25+l*l*-.6,f=c*c*.44+2*c*l*.47+l*l*.46,d=vh(.085,.05,l),g=(o%2===0?1:-1)*.03*(1-.35*l),v=new Oo(1,10,8);v.scale(d*1.15,d*1.7,d*.85),v.rotateY((o%2===0?1:-1)*.7),v.translate(n*(h+g),u,f+(o%2===0?.015:-.015)),e.push(v)}const a=new Io(.04,.15,10);a.rotateX(Math.PI),a.translate(n*.5,-.67,.46),e.push(a)}const t=gv(e,!1);for(const n of e)n.dispose();if(t===null)return;const r=new oi({color:657935,roughness:.6,metalness:.05}),i=new dt(t,r);i.name="mustache",i.castShadow=!0,this.body.add(i),this.characterParts.push(i.geometry,r)}get position(){return this.group.position}reset(){this.group.position.set(0,0,0),this.velocity.set(0,0,0),this.facing=0,this.bobTime=0,this.body.rotation.y=0,this.body.position.y=Ye.player.bodyY}update(e,t){const{player:r}=Ye;this.velocity.x=xs(this.velocity.x,t.x*r.maxSpeed,r.acceleration,e),this.velocity.z=xs(this.velocity.z,t.z*r.maxSpeed,r.acceleration,e),this.group.position.x+=this.velocity.x*e,this.group.position.z+=this.velocity.z*e;const i=hi-vv,n=this.group.position.x,a=this.group.position.z,o=Math.hypot(n,a);if(o>i&&o>0){const h=n/o,u=a/o;this.group.position.x=h*i,this.group.position.z=u*i;const f=this.velocity.x*h+this.velocity.z*u;f>0&&(this.velocity.x-=h*f,this.velocity.z-=u*f)}const l=Math.hypot(this.velocity.x,this.velocity.z);if(l>.35){let u=Math.atan2(this.velocity.x,this.velocity.z)-this.facing;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;this.facing+=Rn(u,-9*e,r.turnRate*e),this.body.rotation.y=this.facing}this.bobTime+=e;const c=Math.sin(this.bobTime*9)*.04*Math.min(l/r.maxSpeed,1);this.body.position.y=r.bodyY+c,this.indicatorMaterial.opacity=Rn(.45+l*.04,.45,.75)}addTo(e){e.add(this.group)}dispose(e){e.remove(this.group),this.body.geometry.dispose(),xv(this.body.material),this.indicator.geometry.dispose(),this.indicatorMaterial.dispose();for(const t of this.characterParts)t.dispose();this.characterParts.length=0}}function xv(s){if(Array.isArray(s))for(const e of s)e.dispose();else s.dispose()}class yv{constructor(e){oe(this,"words",[]);this.wordManager=e,this.reset()}get current(){return this.words[0]}get all(){return this.words}wordAt(e){return this.words[e]}shift(){const e=this.words.shift()??"";return this.words.push(this.wordManager.next()),e}reset(){this.words.length=0;for(let e=0;e<Ye.typing.visibleWords;e++)this.words.push(this.wordManager.next())}}const Mv=s=>s>="a"&&s<="z";class Sv{constructor(e,t){oe(this,"queue");oe(this,"typedLength",0);oe(this,"errored",!1);oe(this,"errorTimerMs",0);oe(this,"enabled",!1);oe(this,"onKeyDown",e=>this.handleKeyDown(e));this.wordManager=e,this.callbacks=t,this.queue=new yv(e)}get typed(){return this.typedLength}get hasError(){return this.errored}attach(){window.addEventListener("keydown",this.onKeyDown)}detach(){window.removeEventListener("keydown",this.onKeyDown)}enable(){this.enabled=!0}disable(){this.enabled=!1}reset(){this.wordManager.reset(),this.queue.reset(),this.typedLength=0,this.errored=!1,this.errorTimerMs=0,this.callbacks.onChanged()}update(e){this.errored&&(this.errorTimerMs-=e*1e3,this.errorTimerMs<=0&&(this.errorTimerMs=0,this.errored=!1,this.callbacks.onChanged()))}handleKeyDown(e){if(!this.enabled||e.ctrlKey||e.metaKey||e.altKey)return;if(e.key==="Enter"){e.preventDefault(),this.skipCurrentWord();return}if(e.key.length!==1)return;if(e.key===" "){e.preventDefault();return}const t=e.key.toLowerCase();if(!Mv(t)||(e.preventDefault(),this.errored))return;const r=this.queue.current;if(t===r[this.typedLength]){if(this.typedLength++,this.callbacks.onCorrectChar(r,this.typedLength-1),this.typedLength>=r.length){this.completeCurrentWord();return}}else this.errored=!0,this.errorTimerMs=Ye.typing.errorRecoveryMs,this.callbacks.onWrongChar(r,t);this.callbacks.onChanged()}completeCurrentWord(){const e=this.queue.shift();this.typedLength=0,this.errored=!1,this.errorTimerMs=0,this.callbacks.onWordCompleted(e),this.callbacks.onChanged()}skipCurrentWord(){const e=this.errored,t=this.queue.shift();this.typedLength=0,this.errored=!1,this.errorTimerMs=0,this.callbacks.onWordSkipped(t,e),this.callbacks.onChanged()}}const yo=[["cat","tree","game","blue","fast","star","wind","fire","rain","bird","fish","moon","leaf","snow","rock","sand","lake","hill","road","gold","jump","rush","play","type","word","key","hit","grab","dash","zoom","glow","wave","beam","ring","core","seed","nest","cave","dune","frost","light","storm","cloud","river","blade"],["planet","machine","window","galaxy","engine","future","rocket","sensor","vector","pulse","laser","drone","shield","orbit","crystal","thunder","winter","garden","bridge","castle","forest","ocean","travel","motion","signal","matrix","cyber","boost","random","source","buffer","cursor","render","socket","thread","sprite","shader","stream","tunnel","vortex","beacon","chroma","delta","flame","grasp"],["computer","javascript","mountain","keyboard","building","strategy","network","compiler","database","firewall","gravity","hardware","infinite","logistics","magnetic","observer","pipeline","platform","creature","festival","grammar","harvest","morning","diamond","emergency","furniture","hurricane","knowledge","languages","mushroom","newspaper","operation","painting","question","skeleton","tailwind","umbrella","volunteer"],["architecture","development","transformation","performance","configuration","engineering","environment","information","technology","connection","generation","imagination","incredible","opportunity","remarkable","celebration","communicate","complicated","determined","everything","electrical","fascinated","interactive","maintenance","observation","persistent","revolution","significant","temperature","understand"]];function Ev(s){const e=Math.max(0,Math.min(s,yo.length-1));return e===0?0:Math.random()<.55?e:Math.floor(Math.random()*(e+1))}class Tv{constructor(){oe(this,"maxTier",0);oe(this,"recent",[])}setMaxTier(e){this.maxTier=Math.max(0,Math.min(e,yo.length-1))}next(){let e=this.draw();for(let t=0;t<6&&this.recent.includes(e);t++)e=this.draw();return this.recent.push(e),this.recent.length>Ye.typing.repeatWindow&&this.recent.shift(),e}reset(){this.recent.length=0}draw(){const e=yo[Ev(this.maxTier)];return e[s0(0,e.length-1)]}}var kt=(s=>(s.Menu="menu",s.Playing="playing",s.GameOver="game_over",s))(kt||{});function Rc(){return{score:0,wordsTyped:0,correctWords:0,incorrectWords:0,skippedWords:0,charsTyped:0,charsCorrect:0,charsWrong:0,kills:0,elapsed:0}}function Uh(s){return s.charsTyped===0?100:s.charsCorrect/s.charsTyped*100}function Ph(s){const e=s.elapsed/60;return e<=0?0:s.charsCorrect/5/e}function St(s,e){const t=s.querySelector(`#${e}`);if(t===null)throw new Error(`Missing required UI element #${e}`);return t}function pn(s,e){s.classList.toggle("hidden",!e)}const Cc=.1;class bv{constructor(e){oe(this,"root");oe(this,"score");oe(this,"wpm");oe(this,"accuracy");oe(this,"kills");oe(this,"time");oe(this,"accumulator",0);oe(this,"shown",{score:"",wpm:"",accuracy:"",kills:"",time:""});this.root=St(e,"hud"),this.score=St(this.root,"stat-score"),this.wpm=St(this.root,"stat-wpm"),this.accuracy=St(this.root,"stat-accuracy"),this.kills=St(this.root,"stat-kills"),this.time=St(this.root,"stat-time")}show(){pn(this.root,!0)}hide(){pn(this.root,!1)}reset(e){this.accumulator=Cc,this.shown.score="",this.shown.wpm="",this.shown.accuracy="",this.shown.kills="",this.shown.time="",this.update(0,e)}update(e,t){this.accumulator+=e,!(this.accumulator<Cc)&&(this.accumulator=0,this.write(this.score,"score",Math.round(t.score).toLocaleString("en-US")),this.write(this.wpm,"wpm",Math.round(Ph(t)).toString()),this.write(this.accuracy,"accuracy",`${Math.round(Uh(t))}%`),this.write(this.kills,"kills",t.kills.toString()),this.write(this.time,"time",_h(t.elapsed)))}write(e,t,r){this.shown[t]!==r&&(this.shown[t]=r,e.textContent=r)}}class wv{constructor(e,t){oe(this,"menu");oe(this,"gameover");oe(this,"audioToggle");this.menu=St(e,"menu-screen"),this.gameover=St(e,"gameover-screen"),this.audioToggle=St(e,"audio-toggle-btn"),this.bindButton(e,"start-btn",t.onStart),this.bindButton(e,"restart-btn",t.onRestart),this.bindButton(e,"audio-toggle-btn",t.onToggleAudio)}setAudioEnabled(e){this.audioToggle.textContent=e?"🔊 SOUND: ON":"🔇 SOUND: OFF"}bindButton(e,t,r){const i=St(e,t);i.addEventListener("click",()=>{i.blur(),r()})}showMenu(){pn(this.menu,!0),pn(this.gameover,!1)}showGameOver(e){const t=this.gameover;St(t,"final-score").textContent=Math.round(e.score).toLocaleString("en-US"),St(t,"final-words").textContent=e.wordsTyped.toString(),St(t,"final-accuracy").textContent=`${Math.round(Uh(e))}%`,St(t,"final-wpm").textContent=Math.round(Ph(e)).toString(),St(t,"final-kills").textContent=e.kills.toString(),St(t,"final-time").textContent=_h(e.elapsed),pn(this.menu,!1),pn(this.gameover,!0)}hide(){pn(this.menu,!1),pn(this.gameover,!1)}}class Av{constructor(e,t){oe(this,"root");oe(this,"boxes",[]);oe(this,"labels",[]);oe(this,"cache",[]);this.root=St(e,"word-row");for(let r=0;r<t;r++){const i=document.createElement("div");i.className="word-box";const n=document.createElement("span");n.className="word-text",i.appendChild(n),this.root.appendChild(i),this.boxes.push(i),this.labels.push(n),this.cache.push({words:"",typed:-1,error:!1}),i.addEventListener("animationend",()=>{i.classList.remove("shake","success")})}}show(){pn(this.root,!0)}hide(){pn(this.root,!1)}render(e,t,r,i){const n=e[0]??"",a=this.boxes[0],o=this.labels[0],l=this.cache[0];a.classList.toggle("active",i),a.classList.toggle("error",r&&i),(l.words!==n||l.typed!==t||l.error!==r)&&(l.words=n,l.typed=t,l.error=r,this.paintActive(o,n,t));for(let c=1;c<this.boxes.length;c++){const h=e[c]??"",u=this.boxes[c],f=this.labels[c];u.classList.remove("active","error"),this.cache[c].words!==h&&(this.cache[c].words=h,f.textContent=h)}}flashSuccess(){this.restartAnimation(this.boxes[0],"success")}shake(){this.restartAnimation(this.boxes[0],"shake")}paintActive(e,t,r){e.textContent="";for(let i=0;i<t.length;i++){const n=document.createElement("span");n.className=i<r?"char typed":"char",n.textContent=t[i],e.appendChild(n)}}restartAnimation(e,t){e.classList.remove("shake","success"),e.offsetWidth,e.classList.add(t)}}const Rv=32;class Cv{constructor(){oe(this,"group",new ai);oe(this,"geometries",[]);oe(this,"materials",[]);const{arena:e}=Ye,t=(e.radius+Rv)*2,r=new dt(Fi(this.geometries,new qn(t,t)),Ni(this.materials,new oi({color:e.groundColor,roughness:.95,metalness:.05})));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,this.group.add(r);const i=new hf(t,e.gridDivisions,e.gridColor,e.gridColor),n=i.material;n.transparent=!0,n.opacity=.4,i.position.y=.03,this.geometries.push(i.geometry),this.materials.push(n),this.group.add(i);const a=new dt(Fi(this.geometries,new _s(e.radius,.3,8,180)),Ni(this.materials,new An({color:e.rimColor})));a.rotation.x=-Math.PI/2,a.position.y=.16,this.group.add(a);const o=new dt(Fi(this.geometries,new _s(e.radius*.55,.12,6,140)),Ni(this.materials,new An({color:e.rimColor,transparent:!0,opacity:.35})));o.rotation.x=-Math.PI/2,o.position.y=.05,this.group.add(o),this.buildPylons(),this.group.add(this.buildStars())}buildPylons(){const{arena:e}=Ye,t=Fi(this.geometries,new ci(.32,.5,4.4,8)),r=Fi(this.geometries,new No(.42,0)),i=Ni(this.materials,new oi({color:e.pylonColor,roughness:.6})),n=Ni(this.materials,new An({color:e.pylonGlowColor}));for(let a=0;a<e.pylonCount;a++){const o=a/e.pylonCount*Wn,l=e.radius*.96,c=Math.cos(o)*l,h=Math.sin(o)*l,u=new dt(t,i);u.position.set(c,2.2,h),u.castShadow=!0,this.group.add(u);const f=new dt(r,n);f.position.set(c,4.7,h),this.group.add(f)}}buildStars(){const{arena:e}=Ye,t=new Float32Array(e.starCount*3);for(let a=0;a<e.starCount;a++){const o=Math.random()*Wn,l=e.radius+30+Math.random()*90;t[a*3]=Math.cos(o)*l,t[a*3+1]=18+Math.random()*55,t[a*3+2]=Math.sin(o)*l}const r=Fi(this.geometries,new bt);r.setAttribute("position",new at(t,3));const i=Ni(this.materials,new ih({color:10475775,size:.6,sizeAttenuation:!0,fog:!1,transparent:!0,opacity:.75})),n=new tf(r,i);return n.frustumCulled=!1,n}applyAtmosphere(e){const{arena:t}=Ye;e.fog=new Do(t.fogColor,t.fogNear,t.fogFar)}addTo(e){e.add(this.group)}dispose(e){e.remove(this.group),e.fog=null;for(const t of this.geometries)t.dispose();for(const t of this.materials)t.dispose();this.geometries.length=0,this.materials.length=0}}function Fi(s,e){return s.push(e),e}function Ni(s,e){return s.push(e),e}class Uv{constructor(){oe(this,"camera");oe(this,"focus",new H);oe(this,"desired",new H);oe(this,"lookTarget",new H);oe(this,"shake",0);const{camera:e}=Ye;this.camera=new Wt(e.fov,1,e.near,e.far),this.camera.position.set(0,e.height,e.distance),this.camera.lookAt(0,e.lookAtHeight,0)}addShake(e){const{camera:t}=Ye;this.shake=Math.min(this.shake+e,t.maxShake)}snapTo(e){this.focus.set(e.x,0,e.z),this.shake=0,this.applyTransform()}update(e,t){const{camera:r}=Ye;this.focus.x=xs(this.focus.x,t.x,r.followRate,e),this.focus.z=xs(this.focus.z,t.z,r.followRate,e),this.shake*=Math.exp(-5*e),this.shake<.001&&(this.shake=0),this.applyTransform()}applyTransform(){const{camera:e}=Ye;if(this.desired.set(this.focus.x,e.height,this.focus.z+e.distance),this.camera.position.copy(this.desired),this.shake>0){const t=this.shake;this.camera.position.x+=(Math.random()-.5)*t,this.camera.position.y+=(Math.random()-.5)*t*.6,this.camera.position.z+=(Math.random()-.5)*t}this.lookTarget.set(this.focus.x,e.lookAtHeight,this.focus.z),this.camera.lookAt(this.lookTarget)}setAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}getInverseOrientation(e){return e.copy(this.camera.quaternion).invert()}}class Pv{constructor(e){oe(this,"lights",[]);const{arena:t}=Ye,r=new nf(10406143,1186350,1.1);e.add(r);const i=new of(16777215,.35);e.add(i);const n=new af(16777215,2.1);n.position.set(34,52,24),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.camera.near=1,n.shadow.camera.far=160,n.shadow.camera.left=-56,n.shadow.camera.right=t.radius+6,n.shadow.camera.top=t.radius+6,n.shadow.camera.bottom=-56,n.shadow.bias=-6e-4,n.shadow.normalBias=.02,e.add(n),e.add(n.target);const a=new Nl(t.rimColor,90,t.radius*1.1,2);a.position.set(-50*.5,7,-50*.5),e.add(a);const o=new Nl(16732043,70,t.radius,2);o.position.set(t.radius*.5,6,t.radius*.45),e.add(o),this.lights.push(r,i,n,a,o)}dispose(e){for(const t of this.lights)e.remove(t),t.dispose();this.lights.length=0}}const Dv=.05;class Lv{constructor(e){oe(this,"rafId",0);oe(this,"lastTime",0);oe(this,"running",!1);this.onFrame=e}start(){if(this.running)return;this.running=!0,this.lastTime=performance.now();const e=t=>{if(!this.running)return;const r=(t-this.lastTime)/1e3;this.lastTime=t,this.onFrame(Math.min(Math.max(r,0),Dv)),this.rafId=requestAnimationFrame(e)};this.rafId=requestAnimationFrame(e)}stop(){this.running&&(this.running=!1,cancelAnimationFrame(this.rafId))}get isRunning(){return this.running}}const Iv=750,Fv=3,Nv=2,Ov=40,Bv=14,kv=8;class zv{constructor(e){oe(this,"container");oe(this,"canvas");oe(this,"renderer");oe(this,"scene",new Yu);oe(this,"arena",new Cv);oe(this,"lighting",new Pv(this.scene));oe(this,"cameraRig",new Uv);oe(this,"player",new _v);oe(this,"enemies",new p0);oe(this,"spawner",new v0);oe(this,"targeting",new c0);oe(this,"collision",new gh);oe(this,"effects",new f0);oe(this,"sound",new r0);oe(this,"wordManager",new Tv);oe(this,"projectiles");oe(this,"typing");oe(this,"hud");oe(this,"wordDisplay");oe(this,"screens");oe(this,"vignette");oe(this,"loop");oe(this,"state",kt.Menu);oe(this,"stats",Rc());oe(this,"audioEnabled",!0);oe(this,"deathPanelTimer",null);oe(this,"killSoundsThisFrame",0);oe(this,"impactsThisFrame",0);oe(this,"steer",new H);oe(this,"aimPoint",new H);oe(this,"launchOrigin",new H);oe(this,"launchDirection",new H);oe(this,"projectileEvents",{onEnemyKilled:e=>this.handleEnemyKilled(e),onImpact:e=>this.handleImpact(e)});oe(this,"typingCallbacks",{onCorrectChar:(e,t)=>{this.stats.charsTyped++,this.stats.charsCorrect++,this.sound.correct(t)},onWrongChar:()=>{this.stats.charsTyped++,this.stats.charsWrong++,this.stats.score=Math.max(0,this.stats.score+Ye.scoring.wrongChar),this.sound.wrong(),this.wordDisplay.shake()},onWordCompleted:e=>this.launchWord(e),onWordSkipped:(e,t)=>{this.stats.skippedWords++,t&&this.stats.incorrectWords++,this.stats.score=Math.max(0,this.stats.score+Ye.scoring.skip),this.sound.skip()},onChanged:()=>this.refreshWords()});oe(this,"onWindowResize",()=>this.resize());oe(this,"onGlobalKeyDown",e=>this.handleGlobalKeyDown(e));this.container=e,this.canvas=St(e,"game-canvas"),this.renderer=new Yg({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Pc,this.projectiles=new mv(this.scene),this.typing=new Sv(this.wordManager,this.typingCallbacks),this.hud=new bv(e),this.wordDisplay=new Av(e,Ye.typing.visibleWords),this.screens=new wv(e,{onStart:()=>this.startGame(),onRestart:()=>this.startGame(),onToggleAudio:()=>this.toggleAudio()}),this.vignette=St(e,"vignette"),this.arena.addTo(this.scene),this.arena.applyAtmosphere(this.scene),this.player.addTo(this.scene),this.enemies.addTo(this.scene),this.effects.addTo(this.scene),this.loop=new Lv(t=>this.frame(t)),this.typing.attach(),window.addEventListener("resize",this.onWindowResize),window.addEventListener("keydown",this.onGlobalKeyDown),this.resize(),this.screens.showMenu(),this.hud.hide(),this.wordDisplay.hide(),this.render(),this.loop.start()}startGame(){this.state!==kt.Playing&&(this.clearDeathPanel(),this.loop.start(),this.sound.unlock(),this.state=kt.Playing,this.stats=Rc(),this.killSoundsThisFrame=0,this.player.reset(),this.enemies.reset(),this.spawner.reset(),this.projectiles.reset(),this.effects.reset(),this.typing.reset(),this.typing.enable(),this.cameraRig.snapTo(this.player.position),this.spawner.seed(this.enemies,this.player.position),this.screens.hide(),this.hud.reset(this.stats),this.hud.show(),this.wordDisplay.show(),this.refreshWords())}returnToMenu(){this.clearDeathPanel(),this.state=kt.Menu,this.typing.disable(),this.enemies.reset(),this.projectiles.reset(),this.effects.reset(),this.screens.showMenu(),this.hud.hide(),this.wordDisplay.hide()}dispose(){this.loop.stop(),this.clearDeathPanel(),this.typing.detach(),window.removeEventListener("resize",this.onWindowResize),window.removeEventListener("keydown",this.onGlobalKeyDown),this.projectiles.dispose(this.scene),this.effects.dispose(this.scene),this.enemies.dispose(this.scene),this.player.dispose(this.scene),this.arena.dispose(this.scene),this.lighting.dispose(this.scene),this.sound.dispose(),this.renderer.dispose()}frame(e){this.killSoundsThisFrame=0,this.impactsThisFrame=0,this.state===kt.Playing?this.updatePlaying(e):this.cameraRig.update(e,this.player.position),this.effects.update(e),this.render()}updatePlaying(e){if(this.stats.elapsed+=e,this.wordManager.setMaxTier(mo(this.stats.elapsed).maxWordTier),this.typing.update(e),this.targeting.analyze(this.enemies.activeEnemies,this.player.position),this.targeting.computeSteering(this.steer,this.player.position,this.player.velocity,e),this.player.update(e,this.steer),this.spawner.update(e,this.stats.elapsed,this.enemies,this.player.position),this.enemies.update(e,this.player.position),this.projectiles.update(e,this.enemies.activeEnemies,this.cameraRig.camera.quaternion,this.projectileEvents),this.collision.findPlayerCollision(this.player.position,this.player.radius,this.enemies.activeEnemies)){this.handleDeath();return}this.cameraRig.update(e,this.player.position),this.hud.update(e,this.stats)}handleEnemyKilled(e){this.enemies.kill(e),this.stats.kills++,this.stats.score+=Ye.scoring.kill,this.effects.burst(e.position,Ye.enemies.color,kv,5),this.killSoundsThisFrame<Fv&&(this.killSoundsThisFrame++,this.sound.kill())}handleImpact(e){this.impactsThisFrame>=Nv||(this.impactsThisFrame++,this.effects.shockwave(e,Ye.projectile.outlineColor),this.effects.burst(e,Ye.projectile.fillColor,Bv,7),this.sound.impact(),this.cameraRig.addShake(.3))}launchWord(e){const{scoring:t,projectile:r}=Ye;this.stats.wordsTyped++,this.stats.correctWords++;let i=t.correctWord;e.length>=t.longWordThreshold&&(i+=t.longWordBonusPerChar*e.length),this.stats.score+=i,this.launchOrigin.copy(this.player.position),this.launchOrigin.y=r.launchHeight,this.targeting.computeAimPoint(this.aimPoint,this.enemies.activeEnemies)?this.launchDirection.copy(this.aimPoint).sub(this.launchOrigin):this.launchDirection.copy(this.player.velocity),this.launchDirection.y=0,this.launchDirection.lengthSq()<1e-6&&this.launchDirection.set(0,0,-1),this.projectiles.launch(e,this.launchOrigin,this.launchDirection)&&(this.sound.launch(),this.wordDisplay.flashSuccess())}handleDeath(){this.state===kt.Playing&&(this.state=kt.GameOver,this.typing.disable(),this.wordDisplay.hide(),this.sound.death(),this.cameraRig.addShake(Ye.camera.maxShake),this.effects.burst(this.player.position,Ye.player.color,Ov,9),this.effects.shockwave(this.player.position,Ye.player.color),this.flashVignette(),this.hud.update(1,this.stats),this.deathPanelTimer=window.setTimeout(()=>{this.deathPanelTimer=null,this.state===kt.GameOver&&this.screens.showGameOver(this.stats)},Iv))}clearDeathPanel(){this.deathPanelTimer!==null&&(window.clearTimeout(this.deathPanelTimer),this.deathPanelTimer=null)}flashVignette(){this.vignette.classList.remove("flash"),this.vignette.offsetWidth,this.vignette.classList.add("flash")}handleGlobalKeyDown(e){if(!(e.ctrlKey||e.metaKey||e.altKey)){if(e.key==="Enter"){this.state===kt.Menu?this.startGame():this.state===kt.GameOver&&this.deathPanelTimer===null&&this.startGame();return}e.key==="Escape"&&this.state===kt.GameOver&&this.deathPanelTimer===null&&this.returnToMenu()}}toggleAudio(){const e=this.sound.toggleMuted();this.audioEnabled=!e,this.screens.setAudioEnabled(this.audioEnabled)}refreshWords(){this.wordDisplay.render(this.typing.queue.all,this.typing.typed,this.typing.hasError,this.state===kt.Playing)}resize(){const e=Math.max(this.container.clientWidth,1),t=Math.max(this.container.clientHeight,1);this.renderer.setSize(e,t,!1),this.cameraRig.setAspect(e/t),this.state!==kt.Playing&&this.render()}render(){this.renderer.render(this.scene,this.cameraRig.camera)}}const Mo=document.getElementById("app");if(Mo===null)throw new Error("Missing #app mount point");try{const s=new zv(Mo)}catch(s){const e=document.createElement("div");throw e.className="fatal",e.textContent=s instanceof Error?`Unable to start Typing Survivor: ${s.message}`:"Unable to start Typing Survivor.",Mo.appendChild(e),s}
