import{b as j}from"./vendor-DaP2veRQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const J="/Instruments_2025-4/assets/in01-DDtRZv0L.jpg",L="/Instruments_2025-4/assets/in02-BLtyIFcg.jpg",M="/Instruments_2025-4/assets/in03-DxX5vNo9.jpg",T="/Instruments_2025-4/assets/in04-BFeooFc0.jpg",K="/Instruments_2025-4/assets/in05-D0f0Nwn2.jpg",D="/Instruments_2025-4/assets/in06-CCY3mjLl.jpg",$="/Instruments_2025-4/assets/in07-DSke7PNe.jpg",w="/Instruments_2025-4/assets/in08-Cffekw7m.jpg",Y="/Instruments_2025-4/assets/in09-B7A1B4HK.jpg",F="/Instruments_2025-4/assets/in10-C8QsgQ0Q.jpg",B=[{id:1,img:J,name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт ТD-30-Надійний помічник для робіт по дому"},{id:2,img:L,name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M BH-20 Використовується для сверління"},{id:3,img:M,name:"Шліфмашина",price:1299,description:"Кутова шліфмашина Dnipro-M GS-98 - модель яка поєднує в собі"},{id:4,img:T,name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL"},{id:5,img:K,name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M"},{id:6,img:D,name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу трави"},{id:7,img:$,name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначений для покосу трави, чагарників, бур'янів"},{id:8,img:w,name:"Генератор",price:10890,description:"Бензиновый генератор Dnipro-M GX-25 номінальною потужністю 2,5 кВт"},{id:9,img:Y,name:"Культиватор",price:10890,description:"Культиватор електричний Dnipro-M 40"},{id:10,img:F,name:"Лобзик",price:10890,description:"Лобзик електричний Dnipro-M JS-80LX + Набір пиляльних полотен 5 шт"}],O={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_INSTRUMENT:"instruments"},P="/Instruments_2025-4/assets/no_img-LHHwQ-Ik.png",U=document.getElementById("index"),H=document.getElementById("favorite"),Q=document.getElementById("basket"),V="visible",q="invisible";function k(a,e){let s;a.length?(s=a.map(({id:n,img:t,name:o,presentFuv:d,presentBas:u})=>`
                    <li data-id=${n} class="card js-card">
                    <img src="${t}" alt="${o}" width="300">
                    <h2>${o}</h2>
                    
                    <span>id${n}</span>
                    
                    <p></p>
                    <p></p>
                    
                    <p><a href="#" class="info js-info">More Information (Modal)</a></p>
    <div class="${U??H??Q?q:V}">
    <button class="js-favorite" type="button"></button>
    <button class="js-basket" type="button"></button>
                    </div>
                    </li>
                    `).join(""),e.innerHTML=s):(s=`<li class="js-card">
                    <img src=${P} alt="404" width="300">
                    </li>`,e.innerHTML=s)}function X(a){a.code==="Escape"&&this.close()}const G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function x(a){const e=Number(a.closest(".js-card").dataset.id);return B.find(({id:s})=>s===e)}const{KEY_FAVORITE:g,KEY_BASKET:b,KEY_INSTRUMENT:f}=O;let W=JSON.parse(localStorage.getItem(g))??[],m=JSON.parse(localStorage.getItem(b))??[];console.log(W);let i=null;JSON.parse(localStorage.getItem(f))?i=JSON.parse(localStorage.getItem(f)):i=B;function S(a){const e=x(a);console.log(e);let s=JSON.parse(localStorage.getItem(g))??[];if(s.some(t=>t.id===e.id)){let t=JSON.parse(localStorage.getItem(g))??[];t=t.filter(o=>o.id!==e.id),localStorage.setItem(g,JSON.stringify(t)),i=i.map(o=>(o.id===e.id&&(o.presentFav=0),o)),localStorage.setItem(f,JSON.stringify(i))}else s.push(e),localStorage.setItem(g,JSON.stringify(s)),i=i.map(t=>(t.id===e.id&&(t.presentFav=1),t)),localStorage.setItem(f,JSON.stringify(i))}function v(a){const e=x(a);m.some(({id:n})=>n===e.id)?(m=m.filter(n=>n.id!==e.id),localStorage.setItem(b,JSON.stringify(m)),i=i.map(n=>(n.id===e.id&&(n.presentBas=0),n)),localStorage.setItem(f,JSON.stringify(i))):(m.push(e),localStorage.setItem(b,JSON.stringify(m)),i=i.map(n=>(n.id===e.id&&(n.presentBas=1),n)),localStorage.setItem(f,JSON.stringify(i)))}const{KEY_FAVORITE:I,KEY_BASKET:E,KEY_INSTRUMENT:Z}=O;JSON.parse(localStorage.getItem(I));JSON.parse(localStorage.getItem(E));const z=document.querySelector(".favorite_list"),tt=document.querySelector(".checkout_list"),y=document.getElementById("index"),C=document.getElementById("favorite"),h=document.getElementById("basket");function nt({img:a,name:e,price:s,description:n,id:t}){const o=j.create(`
	    <div class="modal js-card" data-id=${t}>
            <div class="cross">
                 <img src=${G} alt="close">
            </div>
            <img src="${a}" alt="${e}" width="300">
            <h2>${e} <span>id${t}</span></h2>
            <h3>${s}point</h3>
                

            <p>${n}</p>
              <ul class="container_for_button">
                <li> 
                  <button class="button js-favorite button_fav" type="button">
                       'text'
                  </button>
                </li>
                <li> 
                  <button class="button js-basket button_fav" type="button">
                        'text'
                  </button>
                </li>  
              </ul>
      </div>
`,{handler:null,onShow(r){this.handler=X.bind(r),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),d.removeEventListener("click",u)}});o.show();const d=document.querySelector(".cross");d.addEventListener("click",u);function u(){o.close()}const R=document.querySelector(".modal");let p=JSON.parse(localStorage.getItem(Z))??[];console.log(p);const c=document.querySelector("div.modal button.js-favorite"),N=p.find(r=>r.id===t);console.log(N),N?.presentFav?c.textContent="Remove from favorite":c.textContent="Add to favorite";const l=document.querySelector("div.modal button.js-basket");p.find(r=>r.id===t)?.presentBas?l.textContent="Remove from basket":l.textContent="Add to basket",R.addEventListener("click",_);function _(r){if(r.preventDefault(),r.target.closest(".js-favorite")){if(y&&(S(r.target),c.textContent==="Add to favorite"?c.textContent="Remove from favorite":c.textContent="Add to favorite"),C){S(r.target);const A=JSON.parse(localStorage.getItem(I))??[];k(A,z),c.textContent==="Add to favorite"?c.textContent="Remove from favorite":c.textContent="Add to favorite"}h&&(JSON.parse(localStorage.getItem(I)),S(r.target),c.textContent==="Remove from favorite"?c.textContent="Add to favorite":c.textContent="Remove from favorite")}if(r.target.closest(".js-basket")){if(y&&(v(r.target),l.textContent==="Remove from basket"?l.textContent="Add to basket":l.textContent="Remove from basket"),h){v(r.target);const A=JSON.parse(localStorage.getItem(E))??[];k(A,tt),l.textContent==="Remove from basket"?l.textContent="Add to basket":l.textContent="Remove from basket"}C&&(JSON.parse(localStorage.getItem(E)),v(r.target),l.textContent==="Remove from basket"?l.textContent="Add to basket":l.textContent="Remove from basket")}}}export{nt as a,v as b,k as c,O as d,x as f,B as i,S as t};
//# sourceMappingURL=createModal-DALT0gvM.js.map
