"use strict";(self["webpackChunkexemplejson2"]=self["webpackChunkexemplejson2"]||[]).push([[594],{450:function(t,a,r){r.r(a),r.d(a,{default:function(){return g}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")]),a("section",[a("b-card-group",{attrs:{deck:""}},t._l(t.proyectos,(function(t){return a("div",{key:t.id,attrs:{columns:""}},[a("Card2",{attrs:{autor:t.autor,srcimg:t.srcimg,alt:t.alt,titulo:t.titulo,texto:t.texto,url:t.url}})],1)})),0)],1)])},o=[],s=function(){var t=this,a=t._self._c;return a("div",[a("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.titulo,"img-src":t.srcimg,"img-alt":t.alt,"img-top":"",footer:t.autor,tag:"proyecto"}},[a("b-card-text",[t._v(" "+t._s(t.texto)+" ")]),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Ir a la página del proyecto",variant:"primary",href:t.url}},[t._v("Ir al proyecto")])],1)],1)},i=[],l={props:["id","autor","titulo","srcimg","alt","texto","url"]},c=l,n=r(656),u=(0,n.A)(c,s,i,!1,null,"7111a7ce",null),p=u.exports;const d="https://raw.githubusercontent.com/afrikiudl/proyectoswd2425/refs/heads/main/WD_Practica1_2425.json";var m={props:{name:{type:String,default:"ListaProyectos"}},components:{Card2:p},data(){return{proyectos:[],githubPage:1,page:1,loading:!1,perPage:5}},mounted(){this.fetchData()},methods:{async fetchData(){const t=await fetch(d),a=await t.json();this.proyectos=a,console.log(a)}}},h=m,f=(0,n.A)(h,e,o,!1,null,null,null),g=f.exports}}]);
//# sourceMappingURL=about.71ec1b55.js.map