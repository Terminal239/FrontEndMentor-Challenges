var s=document.querySelector("textarea.text-input"),o=document.querySelector("span#total-characters"),l=document.querySelector("span#word-count"),h=document.querySelector("span#sentence-count"),u=document.querySelector("span#reading-time"),d=document.querySelectorAll("input.config-item"),c=document.querySelectorAll("input.config-item-input"),g=document.querySelectorAll("p.error"),r=class{#t={excludeSpaces:!1,enableCharacterLimit:!1,characterLimit:1/0};#n=0;#e=0;#s=0;#i=0;#r="";processInput(t){if(this.#t.enableCharacterLimit&&t.length>this.#t.characterLimit){s.value=t.substr(0,this.#t.characterLimit),s.classList.add("error"),this.toggleErrors(s.id,!0);return}else s.classList.remove("error"),this.toggleErrors(s.id,!1);this.calculate(t),this.updateUI(),this.#r=t}toggleErrors(t,e){g.forEach(i=>{i.id.startsWith(t)&&(e?i.classList.remove("hidden"):i.classList.add("hidden"))})}toggleHiddenElements(){c.forEach(t=>{t.name==="characterLimit"&&(this.#t.enableCharacterLimit?t.classList.remove("hidden"):t.classList.add("hidden"))})}updateUI(){this.toggleHiddenElements(),o.textContent=`${this.#n<10?0:""}${this.#n}`,l.textContent=`${this.#e<10?0:""}${this.#e}`,h.textContent=`${this.#s<10?0:""}${this.#s}`,u.textContent=`${this.#i<1?"<":""}${Math.ceil(this.#i)} ${Math.ceil(this.#i)<2?"minute":"minutes"}`}calculate(t){this.#n=this.#a(t),this.#e=this.#c(t),this.#s=this.#o(t),this.#i=this.#l(this.#e)}updateConfig(t,e){this.#t[t]=e,this.calculate(this.#r),this.updateUI()}#a=t=>this.#t.excludeSpaces?t.split(" ").join("").length:t.length;#c=t=>t.trim().split(" ").filter(e=>e!=="").length;#o=t=>{let e=0;for(;;){let i=t.indexOf(".");if(i===-1)break;t=t.substring(i+1),i!==0&&e++}return e};#l(t){return t/225}},a=new r;s.addEventListener("input",n=>{a.processInput(n.target.value)});d.forEach(n=>{n.addEventListener("click",t=>{a.updateConfig(t.target.name,t.target.checked)})});c.forEach(n=>{n.addEventListener("change",t=>{a.updateConfig(t.target.name,t.target.value)})});
