import{r as f,o as v,c as y,a as i,b as c,w as d,d as _,e as b,f as g,g as k,h as E}from"./vendor.fd78f4d5.js";const L=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};L();var O=(a,n)=>{const s=a.__vccOpts||a;for(const[r,e]of n)s[r]=e;return s};const P={name:"app"},$={id:"app"},A={class:"navbar navbar-expand navbar-dark bg-dark"},w=_("bezKoder"),x={class:"navbar-nav mr-auto"},N={class:"nav-item"},V=_("Clients"),C={class:"nav-item"},R=_("Add"),I={class:"container mt-3"};function T(a,n,s,r,e,o){const t=f("router-link"),l=f("router-view");return v(),y("div",$,[i("nav",A,[c(t,{to:"/",class:"navbar-brand"},{default:d(()=>[w]),_:1}),i("div",x,[i("li",N,[c(t,{to:"/clients",class:"nav-link"},{default:d(()=>[V]),_:1})]),i("li",C,[c(t,{to:"/add",class:"nav-link"},{default:d(()=>[R]),_:1})])])]),i("div",I,[c(l)])])}var B=O(P,[["render",T]]);const D="modulepreload",m={},S="/",u=function(n,s){return!s||s.length===0?n():Promise.all(s.map(r=>{if(r=`${S}${r}`,r in m)return;m[r]=!0;const e=r.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const t=document.createElement("link");if(t.rel=e?"stylesheet":D,e||(t.as="script",t.crossOrigin=""),t.href=r,document.head.appendChild(t),e)return new Promise((l,h)=>{t.addEventListener("load",l),t.addEventListener("error",h)})})).then(()=>n())},q=b({history:g("/"),routes:[{path:"/",alias:"/clients",name:"clients",component:()=>u(()=>import("./ClientsList.c60ab097.js"),["assets/ClientsList.c60ab097.js","assets/ClientsList.522d8bbf.css","assets/ClientDataService.b3cfa2bf.js","assets/http-common.f99229a1.js","assets/vendor.fd78f4d5.js"])},{path:"/tutorials/:id",name:"tutorial-details",component:()=>u(()=>import("./Tutorial.76e4cea7.js"),["assets/Tutorial.76e4cea7.js","assets/Tutorial.cde48dbe.css","assets/http-common.f99229a1.js","assets/vendor.fd78f4d5.js"])},{path:"/add",name:"add",component:()=>u(()=>import("./AddClient.1d87f302.js"),["assets/AddClient.1d87f302.js","assets/AddClient.bdf16a15.css","assets/ClientDataService.b3cfa2bf.js","assets/http-common.f99229a1.js","assets/vendor.fd78f4d5.js"])}]});const p=k(B);p.use(E());p.use(q);p.mount("#app");export{O as _};