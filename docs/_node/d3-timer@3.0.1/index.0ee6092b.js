var o=0,l=0,s=0,d=1e3,w,u,h=0,e=0,p=0,c=typeof performance=="object"&&performance.now?performance:Date,T=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function v(){return e||(T(q),e=c.now()+p)}function q(){e=0}function f(){this._call=this._time=this._next=null}f.prototype=b.prototype={constructor:f,restart:function(n,t,i){if(typeof n!="function")throw new TypeError("callback is not a function");i=(i==null?v():+i)+(t==null?0:+t),!this._next&&u!==this&&(u?u._next=this:w=this,u=this),this._call=n,this._time=i,x()},stop:function(){this._call&&(this._call=null,this._time=1/0,x())}};function b(n,t,i){var r=new f;return r.restart(n,t,i),r}function F(){v(),++o;for(var n=w,t;n;)(t=e-n._time)>=0&&n._call.call(void 0,t),n=n._next;--o}function I(){e=(h=c.now())+p,o=l=0;try{F()}finally{o=0,$(),e=0}}function A(){var n=c.now(),t=n-h;t>d&&(p-=t,h=n)}function $(){for(var n,t=w,i,r=1/0;t;)t._call?(r>t._time&&(r=t._time),n=t,t=t._next):(i=t._next,t._next=null,t=n?n._next=i:w=i);u=n,x(r)}function x(n){if(!o){l&&(l=clearTimeout(l));var t=n-e;t>24?(n<1/0&&(l=setTimeout(I,n-c.now()-p)),s&&(s=clearInterval(s))):(s||(h=c.now(),s=setInterval(A,d)),o=1,T(I))}}function D(n,t,i){var r=new f;return t=t==null?0:+t,r.restart(_=>{r.stop(),n(_+t)},t,i),r}function E(n,t,i){var r=new f,_=t;return t==null?(r.restart(n,t,i),r):(r._restart=r.restart,r.restart=function(j,m,a){m=+m,a=a==null?v():+a,r._restart(function k(y){y+=_,r._restart(k,_+=m,a),j(y)},m,a)},r.restart(n,t,i),r)}export{E as interval,v as now,D as timeout,b as timer,F as timerFlush};
