const e={text:document.querySelector(".calc__list"),column:document.querySelector(".column"),formBunny:document.querySelector(".form-bunny"),formScaleway:document.querySelector(".form-scaleway"),inputHDD:document.querySelector(".form__input--hdd"),inputSSD:document.querySelector(".form__input--ssd"),inputMulti:document.querySelector(".form__input--multi"),inputSingle:document.querySelector(".form__input--single"),columnVultr:document.querySelector(".column-vultr"),columnScaleway:document.querySelector(".column-scaleway"),columnBunny:document.querySelector(".column-bunny"),columnBackblaze:document.querySelector(".column-backblaze"),radio:document.querySelector(".radio"),calcFform:document.querySelector(".calc__form"),storageSpan:document.querySelector(".calc__span--storage"),transferSpan:document.querySelector(".calc__span--transfer")};function t(t){const{elements:{storage:c,transfer:n}}=t;e.storageSpan.innerHTML=Number(c.value),e.transferSpan.innerHTML=Number(n.value)}let c=0,n=0,r=0,l=0,o=0,u=0;function a(t){let r=e.columnBunny;const o=e.inputHDD,u=e.inputSSD;u.classList.contains("checked")?u.classList.remove("checked"):u.classList.add("checked"),o.classList.contains("checked")?o.classList.remove("checked"):o.classList.add("checked"),l=o.classList.contains("checked")?(.01*c+.01*n).toFixed(2):(.02*c+.01*n).toFixed(2),l<=10||(l="10"),r.style.height=10*l+"px",e.text.children[1].insertAdjacentHTML("afterbegin",`${l}$`)}function s(t){let r=e.columnScaleway;const l=e.inputMulti,u=e.inputSingle;l.classList.contains("checked")?l.classList.remove("checked"):l.classList.add("checked"),u.classList.contains("checked")?u.classList.remove("checked"):u.classList.add("checked"),o=l.classList.contains("checked")?(.06*(c-75)+.02*(n-75)).toFixed(2):(.03*(c-75)+.02*(n-75)).toFixed(2),c<=75&&(o=0),r.style.height=10*o+"px",e.text.children[2].insertAdjacentHTML("afterbegin",`${o}$`)}function i(e){const t={backblaze:Number(r),bunny:Number(l),scaleway:Number(o),vultr:Number(u)};let c=Object.entries(t);for(let e=0;e<c.length;e+=1)if(c[e][1]<c[e+1][1]){return c[e][0]}}e.calcFform.addEventListener("input",(function(l){e.text.children.innerHTML="",e.column.classList.remove("orangered"),c=Number(e.calcFform.elements.storage.value),n=Number(e.calcFform.elements.transfer.value),t(l.currentTarget),function(){let t=e.columnBackblaze;r=(.005*c+.01*n).toFixed(2),r<=7&&(r="7"),t.style.height=10*r+"px",e.text.children[0].insertAdjacentHTML("afterbegin",`${r}$`)}(),a(),s(),function(){let t=e.columnVultr;u=(.01*c+.01*n).toFixed(2),u<=5&&(u=5),t.style.height=10*u+"px",e.text.children[3].insertAdjacentHTML("afterbegin",`${u}$`)}(),i(l.currentTarget);const o={backblaze:e.columnBackblaze,bunny:e.columnBunny,scaleway:e.columnScaleway,vultr:e.columnVultr};let d=Object.entries(o);for(let e=0;e<d.length;e+=1){if(i(l.currentTarget)===d[e][0])return console.log(d[e][1]),d[e][1].classList.add("orangered")}})),e.formBunny.addEventListener("input",(e=>a(e.currentTarget))),e.formScaleway.addEventListener("input",(e=>s(e.currentTarget)));
//# sourceMappingURL=index.ece75c16.js.map
