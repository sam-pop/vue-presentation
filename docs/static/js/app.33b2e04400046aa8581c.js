webpackJsonp([0],{DNUY:function(t,e,n){t.exports=n.p+"static/img/profile_pic.196bf4f.jpg"},MNJE:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},i,!1,function(t){n("MNJE")},null,null).exports,a=n("/ocq"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"circleImg",attrs:{src:n("DNUY")}}),this._v(" "),e("h1",[this._v(this._s(this.name))])])},staticRenderFns:[]};var l=n("VU/8")({data:function(){return{name:"Samuel Poplovitch"}}},r,!1,function(t){n("oon7")},"data-v-0ac70784",null).exports,c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("p",[this._v(this._s(this.desc))])])},staticRenderFns:[]};var u=n("VU/8")({data:function(){return{desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}}},c,!1,function(t){n("jOxu")},"data-v-67eb109b",null).exports,p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"skills"},[n("h2",[t._v("Skills")]),t._v(" "),n("form",{staticClass:"input-group-text col-4",on:{submit:function(e){return e.preventDefault(),t.addSkill(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.skill,expression:"skill"}],attrs:{type:"text",placeholder:"Add a skill..."},domProps:{value:t.skill},on:{input:function(e){e.target.composing||(t.skill=e.target.value)}}}),n("br")]),t._v(" "),n("div",{staticClass:"row"},t._l(t.mySkills,function(e,s){return n("div",{key:s,staticClass:"col-2 animated bounceIn"},[n("button",{staticClass:"btn btn-sm btn-dark",attrs:{id:s},on:{click:function(e){t.removeSkill(s)}}},[t._v("x")]),t._v("\n                "+t._s(e.name)+"\n            ")])}))])},staticRenderFns:[]};var d=n("VU/8")({data:function(){return{mySkills:[{name:"Vue.js"},{name:"JavaScript"}],skill:""}},methods:{addSkill:function(){this.mySkills.push({name:this.skill}),this.skill=""},removeSkill:function(t){this.mySkills.splice(t,1)}}},p,!1,function(t){n("h0bY")},"data-v-f1c56910",null).exports,m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container add-space"},[n("h1",[t._v("Applied positions history")]),t._v(" "),n("form",{on:{submit:function(t){t.preventDefault()}}},[n("div",{staticClass:"input-group add-space"},[n("div",{staticClass:"input-group-prepend center"},[n("span",{staticClass:"input-group-text",attrs:{id:""}},[t._v("Posting")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newName,expression:"newName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Company name"},domProps:{value:t.newName},on:{input:function(e){e.target.composing||(t.newName=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newPosition,expression:"newPosition"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Position"},domProps:{value:t.newPosition},on:{input:function(e){e.target.composing||(t.newPosition=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newURL,expression:"newURL"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Posting URL"},domProps:{value:t.newURL},on:{input:function(e){e.target.composing||(t.newURL=e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn btn-success",on:{click:t.addPosting}},[t._v("Add!")])])])]),t._v(" "),n("div",{staticClass:"row"},t._l(t.jobs,function(e,s){return n("div",{key:s,class:{isChecked:e.noGo}},[n("div",{staticClass:"col add-space"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.noGo,expression:"data.noGo"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.noGo)?t._i(e.noGo,null)>-1:e.noGo},on:{change:function(n){var s=e.noGo,i=n.target,o=!!i.checked;if(Array.isArray(s)){var a=t._i(s,null);i.checked?a<0&&t.$set(e,"noGo",s.concat([null])):a>-1&&t.$set(e,"noGo",s.slice(0,a).concat(s.slice(a+1)))}else t.$set(e,"noGo",o)}}}),n("br"),t._v(" "),n("span",{staticStyle:{"font-size":"2em"}},[t._v(t._s(e.name))]),t._v(" "),n("br"),t._v(" "),n("span",{staticStyle:{"font-size":"1.5em"}},[t._v(t._s(e.position))]),n("br"),t._v(" "),e.url?n("span",[n("a",{attrs:{href:e.url,target:"_blank"}},[t._v("(Link to position)")])]):t._e(),t._v(" "),n("br"),n("br")])])}))])},staticRenderFns:[]};var v=n("VU/8")({data:function(){return{jobs:[{name:"Facebook",position:"Vue Developer",url:"http://www.google.com",noGo:!1},{name:"Google",position:"React Developer",url:"",noGo:!1}],newName:"",newPosition:"",newURL:""}},methods:{addPosting:function(){this.newURL.includes("http")||!this.newURL?this.jobs.push({name:this.newName,position:this.newPosition,url:this.newURL,noGo:!1}):this.jobs.push({name:this.newName,position:this.newPosition,url:"http://"+this.newURL,noGo:!1}),this.newName="",this.newPosition="",this.newURL=""}}},m,!1,function(t){n("SmXz")},"data-v-fb2eab24",null).exports,h={components:{Header:l,Bio:u,Skills:d,JobApp:v}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container animated slideInUp"},[n("Header"),t._v(" "),n("Bio"),t._v(" "),n("hr"),t._v(" "),n("skills"),t._v(" "),n("hr"),t._v(" "),n("JobApp"),t._v(" "),n("hr"),t._v(" "),n("router-link",{attrs:{to:"/about"}},[t._v("\n    Click here for more info\n  ")])],1)},staticRenderFns:[]};var _=n("VU/8")(h,f,!1,function(t){n("UsVw")},null,null).exports,w={components:{Header:l,Bio:u,Skills:d,JobApp:v},data:function(){return{}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container animated zoomIn"},[e("Bio"),this._v(" "),e("Bio"),this._v(" "),e("Bio"),this._v(" "),e("hr"),this._v(" "),e("router-link",{attrs:{to:"/"}},[this._v("\n    Back to home\n    ")])],1)},staticRenderFns:[]};var g=n("VU/8")(w,k,!1,function(t){n("uFKP")},null,null).exports;s.a.use(a.a);var b=new a.a({routes:[{path:"/",name:"Main",component:_},{path:"/about",name:"About",component:g}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:b,components:{App:o},template:"<App/>"})},SmXz:function(t,e){},UsVw:function(t,e){},h0bY:function(t,e){},jOxu:function(t,e){},oon7:function(t,e){},uFKP:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.33b2e04400046aa8581c.js.map