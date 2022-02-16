import{T as d}from"./TutorialDataService.2d0dfe04.js";import{r as h,o as r,c as n,a as t,i as v,v as T,F as m,j as p,d as u,t as a,b as g,w as b,n as f}from"./vendor.fd78f4d5.js";import{_ as k}from"./index.ebdec5c3.js";import"./http-common.f99229a1.js";const y={name:"tutorials-list",data(){return{tutorials:[],currentTutorial:null,currentIndex:-1,title:""}},methods:{retrieveTutorials(){d.getAll().then(e=>{this.tutorials=e.data,console.log(e.data)}).catch(e=>{console.log(e)})},refreshList(){this.retrieveTutorials(),this.currentTutorial=null,this.currentIndex=-1},setActiveTutorial(e,s){this.currentTutorial=e,this.currentIndex=e?s:-1},removeAllTutorials(){d.deleteAll().then(e=>{console.log(e.data),this.refreshList()}).catch(e=>{console.log(e)})},searchTitle(){d.findByTitle(this.title).then(e=>{this.tutorials=e.data,this.setActiveTutorial(null),console.log(e.data)}).catch(e=>{console.log(e)})}},mounted(){this.retrieveTutorials()}},x={class:"list row"},A={class:"col-md-8"},C={class:"input-group mb-3"},L={class:"input-group-append"},w={class:"col-md-6"},S=t("h4",null,"Tutorials List",-1),B={class:"list-group"},D=["onClick"],I={class:"col-md-6"},V={key:0},N=t("h4",null,"Tutorial",-1),P=t("label",null,[t("strong",null,"Title:")],-1),E=t("label",null,[t("strong",null,"Description:")],-1),F=t("label",null,[t("strong",null,"Status:")],-1),j=u("Edit"),z={key:1},M=t("br",null,null,-1),R=t("p",null,"Please click on a Tutorial...",-1),U=[M,R];function q(e,s,G,H,l,i){const _=h("router-link");return r(),n("div",x,[t("div",A,[t("div",C,[v(t("input",{type:"text",class:"form-control",placeholder:"Search by title","onUpdate:modelValue":s[0]||(s[0]=o=>l.title=o)},null,512),[[T,l.title]]),t("div",L,[t("button",{class:"btn btn-outline-secondary",type:"button",onClick:s[1]||(s[1]=(...o)=>i.searchTitle&&i.searchTitle(...o))}," Search ")])])]),t("div",w,[S,t("ul",B,[(r(!0),n(m,null,p(l.tutorials,(o,c)=>(r(),n("li",{class:f(["list-group-item",{active:c==l.currentIndex}]),key:c,onClick:J=>i.setActiveTutorial(o,c)},a(o.title),11,D))),128))]),t("button",{class:"m-3 btn btn-sm btn-danger",onClick:s[2]||(s[2]=(...o)=>i.removeAllTutorials&&i.removeAllTutorials(...o))}," Remove All ")]),t("div",I,[l.currentTutorial?(r(),n("div",V,[N,t("div",null,[P,u(" "+a(l.currentTutorial.title),1)]),t("div",null,[E,u(" "+a(l.currentTutorial.description),1)]),t("div",null,[F,u(" "+a(l.currentTutorial.published?"Published":"Pending"),1)]),g(_,{to:"/tutorials/"+l.currentTutorial.id,class:"badge badge-warning"},{default:b(()=>[j]),_:1},8,["to"])])):(r(),n("div",z,U))])])}var X=k(y,[["render",q]]);export{X as default};