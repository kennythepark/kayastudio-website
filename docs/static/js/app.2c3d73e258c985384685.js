webpackJsonp([1],{"99+j":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("wPRp"),i=n.n(a),s=n("R5/K"),r=n("Ml+6"),o=document.querySelector("canvas"),c=o.offsetWidth,l=o.offsetHeight,u=new r.i({canvas:o,antialias:!0,alpha:!0});u.setPixelRatio(window.devicePixelRatio>1?2:1),u.setSize(c,l),u.setClearColor(0,0);var d=new r.f,v=new r.e(45,c/l,1,1e3);v.position.set(0,0,360);var p=new r.b;p.rotation.x=Math.PI/8,d.add(p);for(var m=new r.d({color:1705397}),h=100,f=75,y=0;y<25;y++){var w=y,_=new r.a;_.y=w/25*h*2;for(var g=0;g<=f;g++){var x=new r.h;x.x=Math.cos(g/f*Math.PI*2),x.z=Math.sin(g/f*Math.PI*2),x._o=x.clone(),_.vertices.push(x)}var C=new r.c(_,m);p.add(C)}function M(){o.style.width="",o.style.height="",c=o.offsetWidth,l=o.offsetHeight,v.aspect=c/l,v.updateProjectionMatrix(),u.setSize(c,l)}var P,z=new r.g(.8,.5);requestAnimationFrame(function e(t){requestAnimationFrame(e),function(e){for(var t=0;t<p.children.length;t++){var n=p.children[t];n.geometry.y+=.3,n.geometry.y>2*h&&(n.geometry.y=0);for(var a=Math.sqrt(n.geometry.y*(2*h-n.geometry.y)),s=0;s<=f;s++){var r=n.geometry.vertices[s],o=75*i.a.noise.simplex3(.015*r.x,.009*r.z+6e-4*e,.009*n.geometry.y);r.copy(r._o),r.multiplyScalar(a+o),r.y=n.geometry.y-h}n.geometry.verticesNeedUpdate=!0}}(t),u.render(d,v)}),window.addEventListener("mousemove",function(e){z.y=e.clientY/window.innerHeight,s.a.to(p.rotation,2,{x:1*z.y,ease:Power1.easeOut})}),window.addEventListener("resize",function(){P=clearTimeout(P),P=setTimeout(M,200)})},"CN/B":function(e,t){},DOuS:function(e,t,n){e.exports=n.p+"static/img/test_image.0991902.png"},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view",{attrs:{name:"mainDisplay"}})],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},i,!1,function(e){n("YxU0")},null,null).exports,r=n("/ocq"),o={name:"HelloWorld",data:()=>({msg:"사랑해 하예림 😘"})},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var l=n("VU/8")(o,c,!1,function(e){n("CN/B")},"data-v-b1e1d38a",null).exports,u={name:"MainDisplay",data:()=>({msg:"똥꼬야~~"}),mounted(){n("99+j")}},d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"kaya-wrapper-container"},[t("img",{staticClass:"responsive",attrs:{src:n("DOuS")}}),this._v(" "),t("div",{staticClass:"content"},[t("canvas",{staticClass:"scene scene--full",attrs:{id:"scene"}}),this._v(" "),t("div",{staticClass:"content__inner"},[t("h2",{staticClass:"content__title"},[this._v("KAYA")])])])])}]};var v=n("VU/8")(u,d,!1,function(e){n("O2Bz")},"data-v-653ee882",null).exports;a.a.use(r.a);var p=new r.a({routes:[{path:"/",components:{hello:l,mainDisplay:v}}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:p,components:{App:s},template:"<App/>"})},O2Bz:function(e,t){},YxU0:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.2c3d73e258c985384685.js.map