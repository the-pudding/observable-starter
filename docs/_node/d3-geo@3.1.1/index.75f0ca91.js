import{Adder as Y,merge as Rr,range as xn}from"../d3-array@3.2.4/index.f89e3560.js";var _=1e-6,jn=1e-12,z=Math.PI,T=z/2,Qn=z/4,O=z*2,F=180/z,N=z/180,C=Math.abs,_n=Math.atan,I=Math.atan2,x=Math.cos,nt=Math.ceil,Ar=Math.exp,Ht=Math.hypot,tt=Math.log,Ft=Math.pow,y=Math.sin,on=Math.sign||function(n){return n>0?1:n<0?-1:0},k=Math.sqrt,Gt=Math.tan;function zr(n){return n>1?0:n<-1?z:Math.acos(n)}function J(n){return n>1?T:n<-1?-T:Math.asin(n)}function Cr(n){return(n=y(n/2))*n}function D(){}function rt(n,t){n&&Pr.hasOwnProperty(n.type)&&Pr[n.type](n,t)}var br={Feature:function(n,t){rt(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length;++r<i;)rt(e[r].geometry,t)}},Pr={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){Dt(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)Dt(e[r],t,0)},Polygon:function(n,t){jr(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)jr(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length;++r<i;)rt(e[r],t)}};function Dt(n,t,e){var r=-1,i=n.length-e,o;for(t.lineStart();++r<i;)o=n[r],t.point(o[0],o[1],o[2]);t.lineEnd()}function jr(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)Dt(n[e],t,1);t.polygonEnd()}function un(n,t){n&&br.hasOwnProperty(n.type)?br[n.type](n,t):rt(n,t)}var et=new Y,it=new Y,qr,Hr,Lt,Tt,Bt,ln={point:D,lineStart:D,lineEnd:D,polygonStart:function(){et=new Y,ln.lineStart=Oe,ln.lineEnd=Ie},polygonEnd:function(){var n=+et;it.add(n<0?O+n:n),this.lineStart=this.lineEnd=this.point=D},sphere:function(){it.add(O)}};function Oe(){ln.point=Je}function Ie(){Fr(qr,Hr)}function Je(n,t){ln.point=Fr,qr=n,Hr=t,n*=N,t*=N,Lt=n,Tt=x(t=t/2+Qn),Bt=y(t)}function Fr(n,t){n*=N,t*=N,t=t/2+Qn;var e=n-Lt,r=e>=0?1:-1,i=r*e,o=x(t),a=y(t),u=Bt*a,l=Tt*o+u*x(i),p=u*r*y(i);et.add(I(p,l)),Lt=n,Tt=o,Bt=a}function Ue(n){return it=new Y,un(n,ln),it*2}function ot(n){return[I(n[1],n[0]),J(n[2])]}function yn(n){var t=n[0],e=n[1],r=x(e);return[r*x(t),r*y(t),y(e)]}function ut(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function Nn(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Wt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function at(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function ct(n){var t=k(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}var L,nn,B,tn,Sn,Gr,Dr,Rn,qn,dn,$n,vn={point:Xt,lineStart:Tr,lineEnd:Br,polygonStart:function(){vn.point=Wr,vn.lineStart=Ze,vn.lineEnd=Ve,qn=new Y,ln.polygonStart()},polygonEnd:function(){ln.polygonEnd(),vn.point=Xt,vn.lineStart=Tr,vn.lineEnd=Br,et<0?(L=-(B=180),nn=-(tn=90)):qn>_?tn=90:qn<-_&&(nn=-90),$n[0]=L,$n[1]=B},sphere:function(){L=-(B=180),nn=-(tn=90)}};function Xt(n,t){dn.push($n=[L=n,B=n]),t<nn&&(nn=t),t>tn&&(tn=t)}function Lr(n,t){var e=yn([n*N,t*N]);if(Rn){var r=Nn(Rn,e),i=[r[1],-r[0],0],o=Nn(i,r);ct(o),o=ot(o);var a=n-Sn,u=a>0?1:-1,l=o[0]*F*u,p,c=C(a)>180;c^(u*Sn<l&&l<u*n)?(p=o[1]*F,p>tn&&(tn=p)):(l=(l+360)%360-180,c^(u*Sn<l&&l<u*n)?(p=-o[1]*F,p<nn&&(nn=p)):(t<nn&&(nn=t),t>tn&&(tn=t))),c?n<Sn?rn(L,n)>rn(L,B)&&(B=n):rn(n,B)>rn(L,B)&&(L=n):B>=L?(n<L&&(L=n),n>B&&(B=n)):n>Sn?rn(L,n)>rn(L,B)&&(B=n):rn(n,B)>rn(L,B)&&(L=n)}else dn.push($n=[L=n,B=n]);t<nn&&(nn=t),t>tn&&(tn=t),Rn=e,Sn=n}function Tr(){vn.point=Lr}function Br(){$n[0]=L,$n[1]=B,vn.point=Xt,Rn=null}function Wr(n,t){if(Rn){var e=n-Sn;qn.add(C(e)>180?e+(e>0?360:-360):e)}else Gr=n,Dr=t;ln.point(n,t),Lr(n,t)}function Ze(){ln.lineStart()}function Ve(){Wr(Gr,Dr),ln.lineEnd(),C(qn)>_&&(L=-(B=180)),$n[0]=L,$n[1]=B,Rn=null}function rn(n,t){return(t-=n)<0?t+360:t}function Ke(n,t){return n[0]-t[0]}function Xr(n,t){return n[0]<=n[1]?n[0]<=t&&t<=n[1]:t<n[0]||n[1]<t}function Qe(n){var t,e,r,i,o,a,u;if(tn=B=-(L=nn=1/0),dn=[],un(n,vn),e=dn.length){for(dn.sort(Ke),t=1,r=dn[0],o=[r];t<e;++t)i=dn[t],Xr(r,i[0])||Xr(r,i[1])?(rn(r[0],i[1])>rn(r[0],r[1])&&(r[1]=i[1]),rn(i[0],r[1])>rn(r[0],r[1])&&(r[0]=i[0])):o.push(r=i);for(a=-1/0,e=o.length-1,t=0,r=o[e];t<=e;r=i,++t)i=o[t],(u=rn(r[1],i[0]))>a&&(a=u,L=i[0],B=r[1])}return dn=$n=null,L===1/0||nn===1/0?[[NaN,NaN],[NaN,NaN]]:[[L,nn],[B,tn]]}var Hn,lt,ft,st,pt,gt,ht,$t,kt,Yt,Ot,kr,Yr,U,Z,V,an={sphere:D,point:It,lineStart:Or,lineEnd:Ir,polygonStart:function(){an.lineStart=ri,an.lineEnd=ei},polygonEnd:function(){an.lineStart=Or,an.lineEnd=Ir}};function It(n,t){n*=N,t*=N;var e=x(t);Fn(e*x(n),e*y(n),y(t))}function Fn(n,t,e){++Hn,ft+=(n-ft)/Hn,st+=(t-st)/Hn,pt+=(e-pt)/Hn}function Or(){an.point=ni}function ni(n,t){n*=N,t*=N;var e=x(t);U=e*x(n),Z=e*y(n),V=y(t),an.point=ti,Fn(U,Z,V)}function ti(n,t){n*=N,t*=N;var e=x(t),r=e*x(n),i=e*y(n),o=y(t),a=I(k((a=Z*o-V*i)*a+(a=V*r-U*o)*a+(a=U*i-Z*r)*a),U*r+Z*i+V*o);lt+=a,gt+=a*(U+(U=r)),ht+=a*(Z+(Z=i)),$t+=a*(V+(V=o)),Fn(U,Z,V)}function Ir(){an.point=It}function ri(){an.point=ii}function ei(){Jr(kr,Yr),an.point=It}function ii(n,t){kr=n,Yr=t,n*=N,t*=N,an.point=Jr;var e=x(t);U=e*x(n),Z=e*y(n),V=y(t),Fn(U,Z,V)}function Jr(n,t){n*=N,t*=N;var e=x(t),r=e*x(n),i=e*y(n),o=y(t),a=Z*o-V*i,u=V*r-U*o,l=U*i-Z*r,p=Ht(a,u,l),c=J(p),s=p&&-c/p;kt.add(s*a),Yt.add(s*u),Ot.add(s*l),lt+=c,gt+=c*(U+(U=r)),ht+=c*(Z+(Z=i)),$t+=c*(V+(V=o)),Fn(U,Z,V)}function oi(n){Hn=lt=ft=st=pt=gt=ht=$t=0,kt=new Y,Yt=new Y,Ot=new Y,un(n,an);var t=+kt,e=+Yt,r=+Ot,i=Ht(t,e,r);return i<jn&&(t=gt,e=ht,r=$t,lt<_&&(t=ft,e=st,r=pt),i=Ht(t,e,r),i<jn)?[NaN,NaN]:[I(e,t)*F,J(r/i)*F]}function An(n){return function(){return n}}function Jt(n,t){function e(r,i){return r=n(r,i),t(r[0],r[1])}return n.invert&&t.invert&&(e.invert=function(r,i){return r=t.invert(r,i),r&&n.invert(r[0],r[1])}),e}function Ut(n,t){return C(n)>z&&(n-=Math.round(n/O)*O),[n,t]}Ut.invert=Ut;function Zt(n,t,e){return(n%=O)?t||e?Jt(Zr(n),Vr(t,e)):Zr(n):t||e?Vr(t,e):Ut}function Ur(n){return function(t,e){return t+=n,C(t)>z&&(t-=Math.round(t/O)*O),[t,e]}}function Zr(n){var t=Ur(n);return t.invert=Ur(-n),t}function Vr(n,t){var e=x(n),r=y(n),i=x(t),o=y(t);function a(u,l){var p=x(l),c=x(u)*p,s=y(u)*p,f=y(l),g=f*e+c*r;return[I(s*i-g*o,c*e-f*r),J(g*i+s*o)]}return a.invert=function(u,l){var p=x(l),c=x(u)*p,s=y(u)*p,f=y(l),g=f*i-s*o;return[I(s*i+f*o,c*e+g*r),J(g*e-c*r)]},a}function Kr(n){n=Zt(n[0]*N,n[1]*N,n.length>2?n[2]*N:0);function t(e){return e=n(e[0]*N,e[1]*N),e[0]*=F,e[1]*=F,e}return t.invert=function(e){return e=n.invert(e[0]*N,e[1]*N),e[0]*=F,e[1]*=F,e},t}function Qr(n,t,e,r,i,o){if(e){var a=x(t),u=y(t),l=r*e;i==null?(i=t+r*O,o=t-l/2):(i=ne(a,i),o=ne(a,o),(r>0?i<o:i>o)&&(i+=r*O));for(var p,c=i;r>0?c>o:c<o;c-=l)p=ot([a,-u*x(c),-u*y(c)]),n.point(p[0],p[1])}}function ne(n,t){t=yn(t),t[0]-=n,ct(t);var e=zr(-t[1]);return((-t[2]<0?-e:e)+O-_)%O}function ui(){var n=An([0,0]),t=An(90),e=An(2),r,i,o={point:a};function a(l,p){r.push(l=i(l,p)),l[0]*=F,l[1]*=F}function u(){var l=n.apply(this,arguments),p=t.apply(this,arguments)*N,c=e.apply(this,arguments)*N;return r=[],i=Zt(-l[0]*N,-l[1]*N,0).invert,Qr(o,p,c,1),l={type:"Polygon",coordinates:[r]},r=i=null,l}return u.center=function(l){return arguments.length?(n=typeof l=="function"?l:An([+l[0],+l[1]]),u):n},u.radius=function(l){return arguments.length?(t=typeof l=="function"?l:An(+l),u):t},u.precision=function(l){return arguments.length?(e=typeof l=="function"?l:An(+l),u):e},u}function te(){var n=[],t;return{point:function(e,r,i){t.push([e,r,i])},lineStart:function(){n.push(t=[])},lineEnd:D,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}}function vt(n,t){return C(n[0]-t[0])<_&&C(n[1]-t[1])<_}function dt(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function re(n,t,e,r,i){var o=[],a=[],u,l;if(n.forEach(function(h){if(!((E=h.length-1)<=0)){var E,m=h[0],S=h[E],w;if(vt(m,S)){if(!m[2]&&!S[2]){for(i.lineStart(),u=0;u<E;++u)i.point((m=h[u])[0],m[1]);i.lineEnd();return}S[0]+=2*_}o.push(w=new dt(m,h,null,!0)),a.push(w.o=new dt(m,null,w,!1)),o.push(w=new dt(S,h,null,!1)),a.push(w.o=new dt(S,null,w,!0))}}),!!o.length){for(a.sort(t),ee(o),ee(a),u=0,l=a.length;u<l;++u)a[u].e=e=!e;for(var p=o[0],c,s;;){for(var f=p,g=!0;f.v;)if((f=f.n)===p)return;c=f.z,i.lineStart();do{if(f.v=f.o.v=!0,f.e){if(g)for(u=0,l=c.length;u<l;++u)i.point((s=c[u])[0],s[1]);else r(f.x,f.n.x,1,i);f=f.n}else{if(g)for(c=f.p.z,u=c.length-1;u>=0;--u)i.point((s=c[u])[0],s[1]);else r(f.x,f.p.x,-1,i);f=f.p}f=f.o,c=f.z,g=!g}while(!f.v);i.lineEnd()}}}function ee(n){if(t=n.length){for(var t,e=0,r=n[0],i;++e<t;)r.n=i=n[e],i.p=r,r=i;r.n=i=n[0],i.p=r}}function Vt(n){return C(n[0])<=z?n[0]:on(n[0])*((C(n[0])+z)%O-z)}function ie(n,t){var e=Vt(t),r=t[1],i=y(r),o=[y(e),-x(e),0],a=0,u=0,l=new Y;i===1?r=T+_:i===-1&&(r=-T-_);for(var p=0,c=n.length;p<c;++p)if(f=(s=n[p]).length)for(var s,f,g=s[f-1],h=Vt(g),E=g[1]/2+Qn,m=y(E),S=x(E),w=0;w<f;++w,h=v,m=R,S=P,g=$){var $=s[w],v=Vt($),M=$[1]/2+Qn,R=y(M),P=x(M),j=v-h,q=j>=0?1:-1,G=q*j,A=G>z,K=m*R;if(l.add(I(K*q*y(G),S*P+K*x(G))),a+=A?j+q*O:j,A^h>=e^v>=e){var W=Nn(yn(g),yn($));ct(W);var H=Nn(o,W);ct(H);var d=(A^j>=0?-1:1)*J(H[2]);(r>d||r===d&&(W[0]||W[1]))&&(u+=A^j>=0?1:-1)}}return(a<-_||a<_&&l<-jn)^u&1}function oe(n,t,e,r){return function(i){var o=t(i),a=te(),u=t(a),l=!1,p,c,s,f={point:g,lineStart:E,lineEnd:m,polygonStart:function(){f.point=S,f.lineStart=w,f.lineEnd=$,c=[],p=[]},polygonEnd:function(){f.point=g,f.lineStart=E,f.lineEnd=m,c=Rr(c);var v=ie(p,r);c.length?(l||(i.polygonStart(),l=!0),re(c,ci,v,e,i)):v&&(l||(i.polygonStart(),l=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),l&&(i.polygonEnd(),l=!1),c=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function g(v,M){n(v,M)&&i.point(v,M)}function h(v,M){o.point(v,M)}function E(){f.point=h,o.lineStart()}function m(){f.point=g,o.lineEnd()}function S(v,M){s.push([v,M]),u.point(v,M)}function w(){u.lineStart(),s=[]}function $(){S(s[0][0],s[0][1]),u.lineEnd();var v=u.clean(),M=a.result(),R,P=M.length,j,q,G;if(s.pop(),p.push(s),s=null,!!P){if(v&1){if(q=M[0],(j=q.length-1)>0){for(l||(i.polygonStart(),l=!0),i.lineStart(),R=0;R<j;++R)i.point((G=q[R])[0],G[1]);i.lineEnd()}return}P>1&&v&2&&M.push(M.pop().concat(M.shift())),c.push(M.filter(ai))}}return f}}function ai(n){return n.length>1}function ci(n,t){return((n=n.x)[0]<0?n[1]-T-_:T-n[1])-((t=t.x)[0]<0?t[1]-T-_:T-t[1])}var Kt=oe(function(){return!0},li,si,[-z,-T]);function li(n){var t=NaN,e=NaN,r=NaN,i;return{lineStart:function(){n.lineStart(),i=1},point:function(o,a){var u=o>0?z:-z,l=C(o-t);C(l-z)<_?(n.point(t,e=(e+a)/2>0?T:-T),n.point(r,e),n.lineEnd(),n.lineStart(),n.point(u,e),n.point(o,e),i=0):r!==u&&l>=z&&(C(t-r)<_&&(t-=r*_),C(o-u)<_&&(o-=u*_),e=fi(t,e,o,a),n.point(r,e),n.lineEnd(),n.lineStart(),n.point(u,e),i=0),n.point(t=o,e=a),r=u},lineEnd:function(){n.lineEnd(),t=e=NaN},clean:function(){return 2-i}}}function fi(n,t,e,r){var i,o,a=y(n-e);return C(a)>_?_n((y(t)*(o=x(r))*y(e)-y(r)*(i=x(t))*y(n))/(i*o*a)):(t+r)/2}function si(n,t,e,r){var i;if(n==null)i=e*T,r.point(-z,i),r.point(0,i),r.point(z,i),r.point(z,0),r.point(z,-i),r.point(0,-i),r.point(-z,-i),r.point(-z,0),r.point(-z,i);else if(C(n[0]-t[0])>_){var o=n[0]<t[0]?z:-z;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(t[0],t[1])}function ue(n){var t=x(n),e=2*N,r=t>0,i=C(t)>_;function o(c,s,f,g){Qr(g,n,e,f,c,s)}function a(c,s){return x(c)*x(s)>t}function u(c){var s,f,g,h,E;return{lineStart:function(){h=g=!1,E=1},point:function(m,S){var w=[m,S],$,v=a(m,S),M=r?v?0:p(m,S):v?p(m+(m<0?z:-z),S):0;if(!s&&(h=g=v)&&c.lineStart(),v!==g&&($=l(s,w),(!$||vt(s,$)||vt(w,$))&&(w[2]=1)),v!==g)E=0,v?(c.lineStart(),$=l(w,s),c.point($[0],$[1])):($=l(s,w),c.point($[0],$[1],2),c.lineEnd()),s=$;else if(i&&s&&r^v){var R;!(M&f)&&(R=l(w,s,!0))&&(E=0,r?(c.lineStart(),c.point(R[0][0],R[0][1]),c.point(R[1][0],R[1][1]),c.lineEnd()):(c.point(R[1][0],R[1][1]),c.lineEnd(),c.lineStart(),c.point(R[0][0],R[0][1],3)))}v&&(!s||!vt(s,w))&&c.point(w[0],w[1]),s=w,g=v,f=M},lineEnd:function(){g&&c.lineEnd(),s=null},clean:function(){return E|(h&&g)<<1}}}function l(c,s,f){var g=yn(c),h=yn(s),E=[1,0,0],m=Nn(g,h),S=ut(m,m),w=m[0],$=S-w*w;if(!$)return!f&&c;var v=t*S/$,M=-t*w/$,R=Nn(E,m),P=at(E,v),j=at(m,M);Wt(P,j);var q=R,G=ut(P,q),A=ut(q,q),K=G*G-A*(ut(P,P)-1);if(!(K<0)){var W=k(K),H=at(q,(-G-W)/A);if(Wt(H,P),H=ot(H),!f)return H;var d=c[0],b=s[0],X=c[1],Q=s[1],en;b<d&&(en=d,d=b,b=en);var Pn=b-d,gn=C(Pn-z)<_,En=gn||Pn<_;if(!gn&&Q<X&&(en=X,X=Q,Q=en),En?gn?X+Q>0^H[1]<(C(H[0]-d)<_?X:Q):X<=H[1]&&H[1]<=Q:Pn>z^(d<=H[0]&&H[0]<=b)){var hn=at(q,(-G+W)/A);return Wt(hn,P),[H,ot(hn)]}}}function p(c,s){var f=r?n:z-n,g=0;return c<-f?g|=1:c>f&&(g|=2),s<-f?g|=4:s>f&&(g|=8),g}return oe(a,u,o,r?[0,-n]:[-z,n-z])}function pi(n,t,e,r,i,o){var a=n[0],u=n[1],l=t[0],p=t[1],c=0,s=1,f=l-a,g=p-u,h;if(h=e-a,!(!f&&h>0)){if(h/=f,f<0){if(h<c)return;h<s&&(s=h)}else if(f>0){if(h>s)return;h>c&&(c=h)}if(h=i-a,!(!f&&h<0)){if(h/=f,f<0){if(h>s)return;h>c&&(c=h)}else if(f>0){if(h<c)return;h<s&&(s=h)}if(h=r-u,!(!g&&h>0)){if(h/=g,g<0){if(h<c)return;h<s&&(s=h)}else if(g>0){if(h>s)return;h>c&&(c=h)}if(h=o-u,!(!g&&h<0)){if(h/=g,g<0){if(h>s)return;h>c&&(c=h)}else if(g>0){if(h<c)return;h<s&&(s=h)}return c>0&&(n[0]=a+c*f,n[1]=u+c*g),s<1&&(t[0]=a+s*f,t[1]=u+s*g),!0}}}}}var Gn=1e9,mt=-Gn;function Et(n,t,e,r){function i(p,c){return n<=p&&p<=e&&t<=c&&c<=r}function o(p,c,s,f){var g=0,h=0;if(p==null||(g=a(p,s))!==(h=a(c,s))||l(p,c)<0^s>0)do f.point(g===0||g===3?n:e,g>1?r:t);while((g=(g+s+4)%4)!==h);else f.point(c[0],c[1])}function a(p,c){return C(p[0]-n)<_?c>0?0:3:C(p[0]-e)<_?c>0?2:1:C(p[1]-t)<_?c>0?1:0:c>0?3:2}function u(p,c){return l(p.x,c.x)}function l(p,c){var s=a(p,1),f=a(c,1);return s!==f?s-f:s===0?c[1]-p[1]:s===1?p[0]-c[0]:s===2?p[1]-c[1]:c[0]-p[0]}return function(p){var c=p,s=te(),f,g,h,E,m,S,w,$,v,M,R,P={point:j,lineStart:K,lineEnd:W,polygonStart:G,polygonEnd:A};function j(d,b){i(d,b)&&c.point(d,b)}function q(){for(var d=0,b=0,X=g.length;b<X;++b)for(var Q=g[b],en=1,Pn=Q.length,gn=Q[0],En,hn,Kn=gn[0],wn=gn[1];en<Pn;++en)En=Kn,hn=wn,gn=Q[en],Kn=gn[0],wn=gn[1],hn<=r?wn>r&&(Kn-En)*(r-hn)>(wn-hn)*(n-En)&&++d:wn<=r&&(Kn-En)*(r-hn)<(wn-hn)*(n-En)&&--d;return d}function G(){c=s,f=[],g=[],R=!0}function A(){var d=q(),b=R&&d,X=(f=Rr(f)).length;(b||X)&&(p.polygonStart(),b&&(p.lineStart(),o(null,null,1,p),p.lineEnd()),X&&re(f,u,d,o,p),p.polygonEnd()),c=p,f=g=h=null}function K(){P.point=H,g&&g.push(h=[]),M=!0,v=!1,w=$=NaN}function W(){f&&(H(E,m),S&&v&&s.rejoin(),f.push(s.result())),P.point=j,v&&c.lineEnd()}function H(d,b){var X=i(d,b);if(g&&h.push([d,b]),M)E=d,m=b,S=X,M=!1,X&&(c.lineStart(),c.point(d,b));else if(X&&v)c.point(d,b);else{var Q=[w=Math.max(mt,Math.min(Gn,w)),$=Math.max(mt,Math.min(Gn,$))],en=[d=Math.max(mt,Math.min(Gn,d)),b=Math.max(mt,Math.min(Gn,b))];pi(Q,en,n,t,e,r)?(v||(c.lineStart(),c.point(Q[0],Q[1])),c.point(en[0],en[1]),X||c.lineEnd(),R=!1):X&&(c.lineStart(),c.point(d,b),R=!1)}w=d,$=b,v=X}return P}}function gi(){var n=0,t=0,e=960,r=500,i,o,a;return a={stream:function(u){return i&&o===u?i:i=Et(n,t,e,r)(o=u)},extent:function(u){return arguments.length?(n=+u[0][0],t=+u[0][1],e=+u[1][0],r=+u[1][1],i=o=null,a):[[n,t],[e,r]]}}}var Qt,nr,yt,St,zn={sphere:D,point:D,lineStart:hi,lineEnd:D,polygonStart:D,polygonEnd:D};function hi(){zn.point=vi,zn.lineEnd=$i}function $i(){zn.point=zn.lineEnd=D}function vi(n,t){n*=N,t*=N,nr=n,yt=y(t),St=x(t),zn.point=di}function di(n,t){n*=N,t*=N;var e=y(t),r=x(t),i=C(n-nr),o=x(i),a=y(i),u=r*a,l=St*e-yt*r*o,p=yt*e+St*r*o;Qt.add(I(k(u*u+l*l),p)),nr=n,yt=e,St=r}function ae(n){return Qt=new Y,un(n,zn),+Qt}var tr=[null,null],mi={type:"LineString",coordinates:tr};function Mt(n,t){return tr[0]=n,tr[1]=t,ae(mi)}var ce={Feature:function(n,t){return wt(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length;++r<i;)if(wt(e[r].geometry,t))return!0;return!1}},le={Sphere:function(){return!0},Point:function(n,t){return fe(n.coordinates,t)},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)if(fe(e[r],t))return!0;return!1},LineString:function(n,t){return se(n.coordinates,t)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)if(se(e[r],t))return!0;return!1},Polygon:function(n,t){return pe(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)if(pe(e[r],t))return!0;return!1},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length;++r<i;)if(wt(e[r],t))return!0;return!1}};function wt(n,t){return n&&le.hasOwnProperty(n.type)?le[n.type](n,t):!1}function fe(n,t){return Mt(n,t)===0}function se(n,t){for(var e,r,i,o=0,a=n.length;o<a;o++){if(r=Mt(n[o],t),r===0||o>0&&(i=Mt(n[o],n[o-1]),i>0&&e<=i&&r<=i&&(e+r-i)*(1-Math.pow((e-r)/i,2))<jn*i))return!0;e=r}return!1}function pe(n,t){return!!ie(n.map(Ei),ge(t))}function Ei(n){return n=n.map(ge),n.pop(),n}function ge(n){return[n[0]*N,n[1]*N]}function yi(n,t){return(n&&ce.hasOwnProperty(n.type)?ce[n.type]:wt)(n,t)}function he(n,t,e){var r=xn(n,t-_,e).concat(t);return function(i){return r.map(function(o){return[i,o]})}}function $e(n,t,e){var r=xn(n,t-_,e).concat(t);return function(i){return r.map(function(o){return[o,i]})}}function ve(){var n,t,e,r,i,o,a,u,l=10,p=l,c=90,s=360,f,g,h,E,m=2.5;function S(){return{type:"MultiLineString",coordinates:w()}}function w(){return xn(nt(r/c)*c,e,c).map(h).concat(xn(nt(u/s)*s,a,s).map(E)).concat(xn(nt(t/l)*l,n,l).filter(function($){return C($%c)>_}).map(f)).concat(xn(nt(o/p)*p,i,p).filter(function($){return C($%s)>_}).map(g))}return S.lines=function(){return w().map(function($){return{type:"LineString",coordinates:$}})},S.outline=function(){return{type:"Polygon",coordinates:[h(r).concat(E(a).slice(1),h(e).reverse().slice(1),E(u).reverse().slice(1))]}},S.extent=function($){return arguments.length?S.extentMajor($).extentMinor($):S.extentMinor()},S.extentMajor=function($){return arguments.length?(r=+$[0][0],e=+$[1][0],u=+$[0][1],a=+$[1][1],r>e&&($=r,r=e,e=$),u>a&&($=u,u=a,a=$),S.precision(m)):[[r,u],[e,a]]},S.extentMinor=function($){return arguments.length?(t=+$[0][0],n=+$[1][0],o=+$[0][1],i=+$[1][1],t>n&&($=t,t=n,n=$),o>i&&($=o,o=i,i=$),S.precision(m)):[[t,o],[n,i]]},S.step=function($){return arguments.length?S.stepMajor($).stepMinor($):S.stepMinor()},S.stepMajor=function($){return arguments.length?(c=+$[0],s=+$[1],S):[c,s]},S.stepMinor=function($){return arguments.length?(l=+$[0],p=+$[1],S):[l,p]},S.precision=function($){return arguments.length?(m=+$,f=he(o,i,90),g=$e(t,n,m),h=he(u,a,90),E=$e(r,e,m),S):m},S.extentMajor([[-180,-90+_],[180,90-_]]).extentMinor([[-180,-80-_],[180,80+_]])}function Si(){return ve()()}function Mi(n,t){var e=n[0]*N,r=n[1]*N,i=t[0]*N,o=t[1]*N,a=x(r),u=y(r),l=x(o),p=y(o),c=a*x(e),s=a*y(e),f=l*x(i),g=l*y(i),h=2*J(k(Cr(o-r)+a*l*Cr(i-e))),E=y(h),m=h?function(S){var w=y(S*=h)/E,$=y(h-S)/E,v=$*c+w*f,M=$*s+w*g,R=$*u+w*p;return[I(M,v)*F,I(R,k(v*v+M*M))*F]}:function(){return[e*F,r*F]};return m.distance=h,m}var Dn=n=>n,rr=new Y,er=new Y,de,me,ir,or,mn={point:D,lineStart:D,lineEnd:D,polygonStart:function(){mn.lineStart=wi,mn.lineEnd=_i},polygonEnd:function(){mn.lineStart=mn.lineEnd=mn.point=D,rr.add(C(er)),er=new Y},result:function(){var n=rr/2;return rr=new Y,n}};function wi(){mn.point=xi}function xi(n,t){mn.point=Ee,de=ir=n,me=or=t}function Ee(n,t){er.add(or*n-ir*t),ir=n,or=t}function _i(){Ee(de,me)}var ye=mn,Cn=1/0,xt=Cn,Ln=-Cn,_t=Ln,Ni={point:Ri,lineStart:D,lineEnd:D,polygonStart:D,polygonEnd:D,result:function(){var n=[[Cn,xt],[Ln,_t]];return Ln=_t=-(xt=Cn=1/0),n}};function Ri(n,t){n<Cn&&(Cn=n),n>Ln&&(Ln=n),t<xt&&(xt=t),t>_t&&(_t=t)}var Nt=Ni,ur=0,ar=0,Tn=0,Rt=0,At=0,bn=0,cr=0,lr=0,Bn=0,Se,Me,fn,sn,cn={point:Mn,lineStart:we,lineEnd:xe,polygonStart:function(){cn.lineStart=Ci,cn.lineEnd=bi},polygonEnd:function(){cn.point=Mn,cn.lineStart=we,cn.lineEnd=xe},result:function(){var n=Bn?[cr/Bn,lr/Bn]:bn?[Rt/bn,At/bn]:Tn?[ur/Tn,ar/Tn]:[NaN,NaN];return ur=ar=Tn=Rt=At=bn=cr=lr=Bn=0,n}};function Mn(n,t){ur+=n,ar+=t,++Tn}function we(){cn.point=Ai}function Ai(n,t){cn.point=zi,Mn(fn=n,sn=t)}function zi(n,t){var e=n-fn,r=t-sn,i=k(e*e+r*r);Rt+=i*(fn+n)/2,At+=i*(sn+t)/2,bn+=i,Mn(fn=n,sn=t)}function xe(){cn.point=Mn}function Ci(){cn.point=Pi}function bi(){_e(Se,Me)}function Pi(n,t){cn.point=_e,Mn(Se=fn=n,Me=sn=t)}function _e(n,t){var e=n-fn,r=t-sn,i=k(e*e+r*r);Rt+=i*(fn+n)/2,At+=i*(sn+t)/2,bn+=i,i=sn*n-fn*t,cr+=i*(fn+n),lr+=i*(sn+t),Bn+=i*3,Mn(fn=n,sn=t)}var Ne=cn;function Re(n){this._context=n}Re.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:{this._context.moveTo(n,t),this._point=1;break}case 1:{this._context.lineTo(n,t);break}default:{this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,O);break}}},result:D};var fr=new Y,sr,Ae,ze,Wn,Xn,zt={point:D,lineStart:function(){zt.point=ji},lineEnd:function(){sr&&Ce(Ae,ze),zt.point=D},polygonStart:function(){sr=!0},polygonEnd:function(){sr=null},result:function(){var n=+fr;return fr=new Y,n}};function ji(n,t){zt.point=Ce,Ae=Wn=n,ze=Xn=t}function Ce(n,t){Wn-=n,Xn-=t,fr.add(k(Wn*Wn+Xn*Xn)),Wn=n,Xn=t}var be=zt;let Pe,Ct,je,qe,He=class{constructor(t){this._append=t==null?Fe:qi(t),this._radius=4.5,this._=""}pointRadius(t){return this._radius=+t,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(t,e){switch(this._point){case 0:{this._append`M${t},${e}`,this._point=1;break}case 1:{this._append`L${t},${e}`;break}default:{if(this._append`M${t},${e}`,this._radius!==je||this._append!==Ct){const r=this._radius,i=this._;this._="",this._append`m0,${r}a${r},${r} 0 1,1 0,${-2*r}a${r},${r} 0 1,1 0,${2*r}z`,je=r,Ct=this._append,qe=this._,this._=i}this._+=qe;break}}}result(){const t=this._;return this._="",t.length?t:null}};function Fe(n){let t=1;this._+=n[0];for(const e=n.length;t<e;++t)this._+=arguments[t]+n[t]}function qi(n){const t=Math.floor(n);if(!(t>=0))throw new RangeError(`invalid digits: ${n}`);if(t>15)return Fe;if(t!==Pe){const e=10**t;Pe=t,Ct=function(r){let i=1;this._+=r[0];for(const o=r.length;i<o;++i)this._+=Math.round(arguments[i]*e)/e+r[i]}}return Ct}function Hi(n,t){let e=3,r=4.5,i,o;function a(u){return u&&(typeof r=="function"&&o.pointRadius(+r.apply(this,arguments)),un(u,i(o))),o.result()}return a.area=function(u){return un(u,i(ye)),ye.result()},a.measure=function(u){return un(u,i(be)),be.result()},a.bounds=function(u){return un(u,i(Nt)),Nt.result()},a.centroid=function(u){return un(u,i(Ne)),Ne.result()},a.projection=function(u){return arguments.length?(i=u==null?(n=null,Dn):(n=u).stream,a):n},a.context=function(u){return arguments.length?(o=u==null?(t=null,new He(e)):new Re(t=u),typeof r!="function"&&o.pointRadius(r),a):t},a.pointRadius=function(u){return arguments.length?(r=typeof u=="function"?u:(o.pointRadius(+u),+u),a):r},a.digits=function(u){if(!arguments.length)return e;if(u==null)e=null;else{const l=Math.floor(u);if(!(l>=0))throw new RangeError(`invalid digits: ${u}`);e=l}return t===null&&(o=new He(e)),a},a.projection(n).digits(e).context(t)}function Fi(n){return{stream:kn(n)}}function kn(n){return function(t){var e=new pr;for(var r in n)e[r]=n[r];return e.stream=t,e}}function pr(){}pr.prototype={constructor:pr,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function gr(n,t,e){var r=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),r!=null&&n.clipExtent(null),un(e,n.stream(Nt)),t(Nt.result()),r!=null&&n.clipExtent(r),n}function bt(n,t,e){return gr(n,function(r){var i=t[1][0]-t[0][0],o=t[1][1]-t[0][1],a=Math.min(i/(r[1][0]-r[0][0]),o/(r[1][1]-r[0][1])),u=+t[0][0]+(i-a*(r[1][0]+r[0][0]))/2,l=+t[0][1]+(o-a*(r[1][1]+r[0][1]))/2;n.scale(150*a).translate([u,l])},e)}function hr(n,t,e){return bt(n,[[0,0],t],e)}function $r(n,t,e){return gr(n,function(r){var i=+t,o=i/(r[1][0]-r[0][0]),a=(i-o*(r[1][0]+r[0][0]))/2,u=-o*r[0][1];n.scale(150*o).translate([a,u])},e)}function vr(n,t,e){return gr(n,function(r){var i=+t,o=i/(r[1][1]-r[0][1]),a=-o*r[0][0],u=(i-o*(r[1][1]+r[0][1]))/2;n.scale(150*o).translate([a,u])},e)}var Ge=16,Gi=x(30*N);function De(n,t){return+t?Li(n,t):Di(n)}function Di(n){return kn({point:function(t,e){t=n(t,e),this.stream.point(t[0],t[1])}})}function Li(n,t){function e(r,i,o,a,u,l,p,c,s,f,g,h,E,m){var S=p-r,w=c-i,$=S*S+w*w;if($>4*t&&E--){var v=a+f,M=u+g,R=l+h,P=k(v*v+M*M+R*R),j=J(R/=P),q=C(C(R)-1)<_||C(o-s)<_?(o+s)/2:I(M,v),G=n(q,j),A=G[0],K=G[1],W=A-r,H=K-i,d=w*W-S*H;(d*d/$>t||C((S*W+w*H)/$-.5)>.3||a*f+u*g+l*h<Gi)&&(e(r,i,o,a,u,l,A,K,q,v/=P,M/=P,R,E,m),m.point(A,K),e(A,K,q,v,M,R,p,c,s,f,g,h,E,m))}}return function(r){var i,o,a,u,l,p,c,s,f,g,h,E,m={point:S,lineStart:w,lineEnd:v,polygonStart:function(){r.polygonStart(),m.lineStart=M},polygonEnd:function(){r.polygonEnd(),m.lineStart=w}};function S(j,q){j=n(j,q),r.point(j[0],j[1])}function w(){s=NaN,m.point=$,r.lineStart()}function $(j,q){var G=yn([j,q]),A=n(j,q);e(s,f,c,g,h,E,s=A[0],f=A[1],c=j,g=G[0],h=G[1],E=G[2],Ge,r),r.point(s,f)}function v(){m.point=S,r.lineEnd()}function M(){w(),m.point=R,m.lineEnd=P}function R(j,q){$(i=j,q),o=s,a=f,u=g,l=h,p=E,m.point=$}function P(){e(s,f,c,g,h,E,o,a,i,u,l,p,Ge,r),m.lineEnd=v,v()}return m}}var Ti=kn({point:function(n,t){this.stream.point(n*N,t*N)}});function Bi(n){return kn({point:function(t,e){var r=n(t,e);return this.stream.point(r[0],r[1])}})}function Wi(n,t,e,r,i){function o(a,u){return a*=r,u*=i,[t+n*a,e-n*u]}return o.invert=function(a,u){return[(a-t)/n*r,(e-u)/n*i]},o}function Le(n,t,e,r,i,o){if(!o)return Wi(n,t,e,r,i);var a=x(o),u=y(o),l=a*n,p=u*n,c=a/n,s=u/n,f=(u*e-a*t)/n,g=(u*t+a*e)/n;function h(E,m){return E*=r,m*=i,[l*E-p*m+t,e-p*E-l*m]}return h.invert=function(E,m){return[r*(c*E-s*m+f),i*(g-s*E-c*m)]},h}function pn(n){return dr(function(){return n})()}function dr(n){var t,e=150,r=480,i=250,o=0,a=0,u=0,l=0,p=0,c,s=0,f=1,g=1,h=null,E=Kt,m=null,S,w,$,v=Dn,M=.5,R,P,j,q,G;function A(d){return j(d[0]*N,d[1]*N)}function K(d){return d=j.invert(d[0],d[1]),d&&[d[0]*F,d[1]*F]}A.stream=function(d){return q&&G===d?q:q=Ti(Bi(c)(E(R(v(G=d)))))},A.preclip=function(d){return arguments.length?(E=d,h=void 0,H()):E},A.postclip=function(d){return arguments.length?(v=d,m=S=w=$=null,H()):v},A.clipAngle=function(d){return arguments.length?(E=+d?ue(h=d*N):(h=null,Kt),H()):h*F},A.clipExtent=function(d){return arguments.length?(v=d==null?(m=S=w=$=null,Dn):Et(m=+d[0][0],S=+d[0][1],w=+d[1][0],$=+d[1][1]),H()):m==null?null:[[m,S],[w,$]]},A.scale=function(d){return arguments.length?(e=+d,W()):e},A.translate=function(d){return arguments.length?(r=+d[0],i=+d[1],W()):[r,i]},A.center=function(d){return arguments.length?(o=d[0]%360*N,a=d[1]%360*N,W()):[o*F,a*F]},A.rotate=function(d){return arguments.length?(u=d[0]%360*N,l=d[1]%360*N,p=d.length>2?d[2]%360*N:0,W()):[u*F,l*F,p*F]},A.angle=function(d){return arguments.length?(s=d%360*N,W()):s*F},A.reflectX=function(d){return arguments.length?(f=d?-1:1,W()):f<0},A.reflectY=function(d){return arguments.length?(g=d?-1:1,W()):g<0},A.precision=function(d){return arguments.length?(R=De(P,M=d*d),H()):k(M)},A.fitExtent=function(d,b){return bt(A,d,b)},A.fitSize=function(d,b){return hr(A,d,b)},A.fitWidth=function(d,b){return $r(A,d,b)},A.fitHeight=function(d,b){return vr(A,d,b)};function W(){var d=Le(e,0,0,f,g,s).apply(null,t(o,a)),b=Le(e,r-d[0],i-d[1],f,g,s);return c=Zt(u,l,p),P=Jt(t,b),j=Jt(c,P),R=De(P,M),H()}function H(){return q=G=null,A}return function(){return t=n.apply(this,arguments),A.invert=t.invert&&K,W()}}function mr(n){var t=0,e=z/3,r=dr(n),i=r(t,e);return i.parallels=function(o){return arguments.length?r(t=o[0]*N,e=o[1]*N):[t*F,e*F]},i}function Xi(n){var t=x(n);function e(r,i){return[r*t,y(i)/t]}return e.invert=function(r,i){return[r/t,J(i*t)]},e}function Te(n,t){var e=y(n),r=(e+y(t))/2;if(C(r)<_)return Xi(n);var i=1+e*(2*r-e),o=k(i)/r;function a(u,l){var p=k(i-2*r*y(l))/r;return[p*y(u*=r),o-p*x(u)]}return a.invert=function(u,l){var p=o-l,c=I(u,C(p))*on(p);return p*r<0&&(c-=z*on(u)*on(p)),[c/r,J((i-(u*u+p*p)*r*r)/(2*r))]},a}function Pt(){return mr(Te).scale(155.424).center([0,33.6442])}function Be(){return Pt().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function ki(n){var t=n.length;return{point:function(e,r){for(var i=-1;++i<t;)n[i].point(e,r)},sphere:function(){for(var e=-1;++e<t;)n[e].sphere()},lineStart:function(){for(var e=-1;++e<t;)n[e].lineStart()},lineEnd:function(){for(var e=-1;++e<t;)n[e].lineEnd()},polygonStart:function(){for(var e=-1;++e<t;)n[e].polygonStart()},polygonEnd:function(){for(var e=-1;++e<t;)n[e].polygonEnd()}}}function Yi(){var n,t,e=Be(),r,i=Pt().rotate([154,0]).center([-2,58.5]).parallels([55,65]),o,a=Pt().rotate([157,0]).center([-3,19.9]).parallels([8,18]),u,l,p={point:function(f,g){l=[f,g]}};function c(f){var g=f[0],h=f[1];return l=null,r.point(g,h),l||(o.point(g,h),l)||(u.point(g,h),l)}c.invert=function(f){var g=e.scale(),h=e.translate(),E=(f[0]-h[0])/g,m=(f[1]-h[1])/g;return(m>=.12&&m<.234&&E>=-.425&&E<-.214?i:m>=.166&&m<.234&&E>=-.214&&E<-.115?a:e).invert(f)},c.stream=function(f){return n&&t===f?n:n=ki([e.stream(t=f),i.stream(f),a.stream(f)])},c.precision=function(f){return arguments.length?(e.precision(f),i.precision(f),a.precision(f),s()):e.precision()},c.scale=function(f){return arguments.length?(e.scale(f),i.scale(f*.35),a.scale(f),c.translate(e.translate())):e.scale()},c.translate=function(f){if(!arguments.length)return e.translate();var g=e.scale(),h=+f[0],E=+f[1];return r=e.translate(f).clipExtent([[h-.455*g,E-.238*g],[h+.455*g,E+.238*g]]).stream(p),o=i.translate([h-.307*g,E+.201*g]).clipExtent([[h-.425*g+_,E+.12*g+_],[h-.214*g-_,E+.234*g-_]]).stream(p),u=a.translate([h-.205*g,E+.212*g]).clipExtent([[h-.214*g+_,E+.166*g+_],[h-.115*g-_,E+.234*g-_]]).stream(p),s()},c.fitExtent=function(f,g){return bt(c,f,g)},c.fitSize=function(f,g){return hr(c,f,g)},c.fitWidth=function(f,g){return $r(c,f,g)},c.fitHeight=function(f,g){return vr(c,f,g)};function s(){return n=t=null,c}return c.scale(1070)}function We(n){return function(t,e){var r=x(t),i=x(e),o=n(r*i);return o===1/0?[2,0]:[o*i*y(t),o*y(e)]}}function Yn(n){return function(t,e){var r=k(t*t+e*e),i=n(r),o=y(i),a=x(i);return[I(t*o,r*a),J(r&&e*o/r)]}}var Er=We(function(n){return k(2/(1+n))});Er.invert=Yn(function(n){return 2*J(n/2)});function Oi(){return pn(Er).scale(124.75).clipAngle(180-.001)}var yr=We(function(n){return(n=zr(n))&&n/y(n)});yr.invert=Yn(function(n){return n});function Ii(){return pn(yr).scale(79.4188).clipAngle(180-.001)}function On(n,t){return[n,tt(Gt((T+t)/2))]}On.invert=function(n,t){return[n,2*_n(Ar(t))-T]};function Ji(){return Xe(On).scale(961/O)}function Xe(n){var t=pn(n),e=t.center,r=t.scale,i=t.translate,o=t.clipExtent,a=null,u,l,p;t.scale=function(s){return arguments.length?(r(s),c()):r()},t.translate=function(s){return arguments.length?(i(s),c()):i()},t.center=function(s){return arguments.length?(e(s),c()):e()},t.clipExtent=function(s){return arguments.length?(s==null?a=u=l=p=null:(a=+s[0][0],u=+s[0][1],l=+s[1][0],p=+s[1][1]),c()):a==null?null:[[a,u],[l,p]]};function c(){var s=z*r(),f=t(Kr(t.rotate()).invert([0,0]));return o(a==null?[[f[0]-s,f[1]-s],[f[0]+s,f[1]+s]]:n===On?[[Math.max(f[0]-s,a),u],[Math.min(f[0]+s,l),p]]:[[a,Math.max(f[1]-s,u)],[l,Math.min(f[1]+s,p)]])}return c()}function jt(n){return Gt((T+n)/2)}function ke(n,t){var e=x(n),r=n===t?y(n):tt(e/x(t))/tt(jt(t)/jt(n)),i=e*Ft(jt(n),r)/r;if(!r)return On;function o(a,u){i>0?u<-T+_&&(u=-T+_):u>T-_&&(u=T-_);var l=i/Ft(jt(u),r);return[l*y(r*a),i-l*x(r*a)]}return o.invert=function(a,u){var l=i-u,p=on(r)*k(a*a+l*l),c=I(a,C(l))*on(l);return l*r<0&&(c-=z*on(a)*on(l)),[c/r,2*_n(Ft(i/p,1/r))-T]},o}function Ui(){return mr(ke).scale(109.5).parallels([30,30])}function In(n,t){return[n,t]}In.invert=In;function Zi(){return pn(In).scale(152.63)}function Ye(n,t){var e=x(n),r=n===t?y(n):(e-x(t))/(t-n),i=e/r+n;if(C(r)<_)return In;function o(a,u){var l=i-u,p=r*a;return[l*y(p),i-l*x(p)]}return o.invert=function(a,u){var l=i-u,p=I(a,C(l))*on(l);return l*r<0&&(p-=z*on(a)*on(l)),[p/r,i-on(r)*k(a*a+l*l)]},o}function Vi(){return mr(Ye).scale(131.154).center([0,13.9389])}var Jn=1.340264,Un=-.081106,Zn=893e-6,Vn=.003796,qt=k(3)/2,Ki=12;function Sr(n,t){var e=J(qt*y(t)),r=e*e,i=r*r*r;return[n*x(e)/(qt*(Jn+3*Un*r+i*(7*Zn+9*Vn*r))),e*(Jn+Un*r+i*(Zn+Vn*r))]}Sr.invert=function(n,t){for(var e=t,r=e*e,i=r*r*r,o=0,a,u,l;o<Ki&&(u=e*(Jn+Un*r+i*(Zn+Vn*r))-t,l=Jn+3*Un*r+i*(7*Zn+9*Vn*r),e-=a=u/l,r=e*e,i=r*r*r,!(C(a)<jn));++o);return[qt*n*(Jn+3*Un*r+i*(7*Zn+9*Vn*r))/x(e),J(y(e)/qt)]};function Qi(){return pn(Sr).scale(177.158)}function Mr(n,t){var e=x(t),r=x(n)*e;return[e*y(n)/r,y(t)/r]}Mr.invert=Yn(_n);function no(){return pn(Mr).scale(144.049).clipAngle(60)}function to(){var n=1,t=0,e=0,r=1,i=1,o=0,a,u,l=null,p,c,s,f=1,g=1,h=kn({point:function(v,M){var R=$([v,M]);this.stream.point(R[0],R[1])}}),E=Dn,m,S;function w(){return f=n*r,g=n*i,m=S=null,$}function $(v){var M=v[0]*f,R=v[1]*g;if(o){var P=R*a-M*u;M=M*a+R*u,R=P}return[M+t,R+e]}return $.invert=function(v){var M=v[0]-t,R=v[1]-e;if(o){var P=R*a+M*u;M=M*a-R*u,R=P}return[M/f,R/g]},$.stream=function(v){return m&&S===v?m:m=h(E(S=v))},$.postclip=function(v){return arguments.length?(E=v,l=p=c=s=null,w()):E},$.clipExtent=function(v){return arguments.length?(E=v==null?(l=p=c=s=null,Dn):Et(l=+v[0][0],p=+v[0][1],c=+v[1][0],s=+v[1][1]),w()):l==null?null:[[l,p],[c,s]]},$.scale=function(v){return arguments.length?(n=+v,w()):n},$.translate=function(v){return arguments.length?(t=+v[0],e=+v[1],w()):[t,e]},$.angle=function(v){return arguments.length?(o=v%360*N,u=y(o),a=x(o),w()):o*F},$.reflectX=function(v){return arguments.length?(r=v?-1:1,w()):r<0},$.reflectY=function(v){return arguments.length?(i=v?-1:1,w()):i<0},$.fitExtent=function(v,M){return bt($,v,M)},$.fitSize=function(v,M){return hr($,v,M)},$.fitWidth=function(v,M){return $r($,v,M)},$.fitHeight=function(v,M){return vr($,v,M)},$}function wr(n,t){var e=t*t,r=e*e;return[n*(.8707-.131979*e+r*(-.013791+r*(.003971*e-.001529*r))),t*(1.007226+e*(.015085+r*(-.044475+.028874*e-.005916*r)))]}wr.invert=function(n,t){var e=t,r=25,i;do{var o=e*e,a=o*o;e-=i=(e*(1.007226+o*(.015085+a*(-.044475+.028874*o-.005916*a)))-t)/(1.007226+o*(.015085*3+a*(-.044475*7+.028874*9*o-.005916*11*a)))}while(C(i)>_&&--r>0);return[n/(.8707+(o=e*e)*(-.131979+o*(-.013791+o*o*o*(.003971-.001529*o)))),e]};function ro(){return pn(wr).scale(175.295)}function xr(n,t){return[x(t)*y(n),y(t)]}xr.invert=Yn(J);function eo(){return pn(xr).scale(249.5).clipAngle(90+_)}function _r(n,t){var e=x(t),r=1+x(n)*e;return[e*y(n)/r,y(t)/r]}_r.invert=Yn(function(n){return 2*_n(n)});function io(){return pn(_r).scale(250).clipAngle(142)}function Nr(n,t){return[tt(Gt((T+t)/2)),-n]}Nr.invert=function(n,t){return[-t,2*_n(Ar(n))-T]};function oo(){var n=Xe(Nr),t=n.center,e=n.rotate;return n.center=function(r){return arguments.length?t([-r[1],r[0]]):(r=t(),[r[1],-r[0]])},n.rotate=function(r){return arguments.length?e([r[0],r[1],r.length>2?r[2]+90:90]):(r=e(),[r[0],r[1],r[2]-90])},e([0,0,90]).scale(159.155)}export{Be as geoAlbers,Yi as geoAlbersUsa,Ue as geoArea,Oi as geoAzimuthalEqualArea,Er as geoAzimuthalEqualAreaRaw,Ii as geoAzimuthalEquidistant,yr as geoAzimuthalEquidistantRaw,Qe as geoBounds,oi as geoCentroid,ui as geoCircle,Kt as geoClipAntimeridian,ue as geoClipCircle,gi as geoClipExtent,Et as geoClipRectangle,Ui as geoConicConformal,ke as geoConicConformalRaw,Pt as geoConicEqualArea,Te as geoConicEqualAreaRaw,Vi as geoConicEquidistant,Ye as geoConicEquidistantRaw,yi as geoContains,Mt as geoDistance,Qi as geoEqualEarth,Sr as geoEqualEarthRaw,Zi as geoEquirectangular,In as geoEquirectangularRaw,no as geoGnomonic,Mr as geoGnomonicRaw,ve as geoGraticule,Si as geoGraticule10,to as geoIdentity,Mi as geoInterpolate,ae as geoLength,Ji as geoMercator,On as geoMercatorRaw,ro as geoNaturalEarth1,wr as geoNaturalEarth1Raw,eo as geoOrthographic,xr as geoOrthographicRaw,Hi as geoPath,pn as geoProjection,dr as geoProjectionMutator,Kr as geoRotation,io as geoStereographic,_r as geoStereographicRaw,un as geoStream,Fi as geoTransform,oo as geoTransverseMercator,Nr as geoTransverseMercatorRaw};
