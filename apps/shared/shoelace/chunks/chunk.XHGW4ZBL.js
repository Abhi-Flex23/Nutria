import{a as h}from"./chunk.YPD5NWSS.js";import{a as p}from"./chunk.MWDEA25W.js";import{a as n}from"./chunk.DBCWAMJH.js";import{a}from"./chunk.JUX3LFDW.js";import{a as c,b as i,f as m}from"./chunk.X7Q42RGY.js";import{c as l}from"./chunk.3G4FHXSN.js";import{g as s}from"./chunk.OAQCUA7X.js";var t=class extends m{constructor(){super(...arguments);this.mode="cors";this.allowScripts=!1}executeScript(e){let r=document.createElement("script");[...e.attributes].forEach(o=>r.setAttribute(o.name,o.value)),r.textContent=e.textContent,e.parentNode.replaceChild(r,e)}async handleSrcChange(){try{let e=this.src,r=await p(e,this.mode);if(e!==this.src)return;if(!r.ok){a(this,"sl-error",{detail:{status:r.status}});return}this.innerHTML=r.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(o=>this.executeScript(o)),a(this,"sl-load")}catch(e){a(this,"sl-error",{detail:{status:-1}})}}render(){return l`<slot></slot>`}};t.styles=h,s([i()],t.prototype,"src",2),s([i()],t.prototype,"mode",2),s([i({attribute:"allow-scripts",type:Boolean})],t.prototype,"allowScripts",2),s([n("src")],t.prototype,"handleSrcChange",1),t=s([c("sl-include")],t);export{t as a};