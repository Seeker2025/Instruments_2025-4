import{b as L}from"./vendor-BfMHouvv.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const M="/Instruments_2025-4/assets/in01-DDtRZv0L.jpg",J="/Instruments_2025-4/assets/in02-BLtyIFcg.jpg",T="/Instruments_2025-4/assets/in03-DxX5vNo9.jpg",K="/Instruments_2025-4/assets/in04-BFeooFc0.jpg",D="/Instruments_2025-4/assets/in05-D0f0Nwn2.jpg",$="/Instruments_2025-4/assets/in06-CCY3mjLl.jpg",w="/Instruments_2025-4/assets/in07-DSke7PNe.jpg",F="/Instruments_2025-4/assets/in08-Cffekw7m.jpg",Y="/Instruments_2025-4/assets/in09-B7A1B4HK.jpg",P="/Instruments_2025-4/assets/in10-C8QsgQ0Q.jpg",E=[{id:1,img:M,name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт ТD-30-Надійний помічник для робіт по дому"},{id:2,img:J,name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M BH-20 Використовується для сверління"},{id:3,img:T,name:"Шліфмашина",price:1299,description:"Кутова шліфмашина Dnipro-M GS-98 - модель яка поєднує в собі"},{id:4,img:K,name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL"},{id:5,img:D,name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M"},{id:6,img:$,name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу трави"},{id:7,img:w,name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначений для покосу трави, чагарників, бур'янів"},{id:8,img:F,name:"Генератор",price:10890,description:"Бензиновый генератор Dnipro-M GX-25 номінальною потужністю 2,5 кВт"},{id:9,img:Y,name:"Культиватор",price:10890,description:"Культиватор електричний Dnipro-M 40"},{id:10,img:P,name:"Лобзик",price:10890,description:"Лобзик електричний Dnipro-M JS-80LX + Набір пиляльних полотен 5 шт"}],O={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_INSTRUMENT:"instruments"},U="/Instruments_2025-4/assets/no_img-LHHwQ-Ik.png",H=document.getElementById("index"),Q=document.getElementById("favorite"),V=document.getElementById("basket"),q="visible",X="invisible";function N(r,e){let n;r.length?(n=r.map(({id:i,img:t,name:o,presentFuv:d,presentBas:f})=>`
                    <li data-id=${i} class="card js-card">
                    <img src="${t}" alt="${o}" width="300">
                    <h2>${o}</h2>
                    
                    <span>id${i}</span>
                    
                    <p></p>
                    <p></p>
                    
                    <p><a href="#" class="info js-info">More Information (Modal)</a></p>
    <div class="${H??Q??V?X:q}">
    <button class="js-favorite" type="button"></button>
    <button class="js-basket" type="button"></button>
                    </div>
                    </li>
                    `).join(""),e.innerHTML=n):(n=`<li class="js-card">
                    <img src=${U} alt="404" width="300">
                    </li>`,e.innerHTML=n)}function G(r){r.code==="Escape"&&this.close()}const W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function R(r){const e=Number(r.closest(".js-card").dataset.id);return E.find(({id:n})=>n===e)}const{KEY_FAVORITE:m,KEY_BASKET:S,KEY_INSTRUMENT:k}=O;let p=localStorage.setItem(k,JSON.stringify(E)),Z=JSON.parse(localStorage.getItem(m))??[],l=JSON.parse(localStorage.getItem(S))??[];console.log(Z);function A(r){const e=R(r);console.log(e);let n=JSON.parse(localStorage.getItem(m))??[];if(n.some(t=>t.id===e.id)){let t=JSON.parse(localStorage.getItem(m))??[];t=t.filter(o=>o.id!==e.id),localStorage.setItem(m,JSON.stringify(t))}else n.push(e),localStorage.setItem(m,JSON.stringify(n)),p=p.map(t=>(t.id===e.id&&(t.presentFav=1),t)),localStorage.setItem(k,JSON.stringify(p))}function v(r){const e=R(r);if(l.some(({id:i})=>i===e.id))l=l.filter(i=>i.id!==e.id),localStorage.setItem(S,JSON.stringify(l));else{l.push(e),localStorage.setItem(S,JSON.stringify(l));let i=E.map(t=>(t.id===e.id&&(t.presentBas=1),t));localStorage.setItem(k,JSON.stringify(i))}}const{KEY_FAVORITE:b,KEY_BASKET:I,KEY_INSTRUMENT:z}=O;JSON.parse(localStorage.getItem(b));JSON.parse(localStorage.getItem(I));const tt=document.querySelector(".favorite_list"),et=document.querySelector(".checkout_list"),h=document.getElementById("index"),B=document.getElementById("favorite"),x=document.getElementById("basket");function it({img:r,name:e,price:n,description:i,id:t,presentFuv:o,presentBas:d}){const f=L.create(`
	    <div class="modal js-card" data-id=${t}>
            <div class="cross">
                 <img src=${W} alt="close">
            </div>
            <img src="${r}" alt="${e}" width="300">
            <h2>${e} <span>id${t}</span></h2>
            <h3>${n}point</h3>
                

            <p>${i}</p>
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
`,{handler:null,onShow(s){this.handler=G.bind(s),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),C.removeEventListener("click",y)}});f.show();const C=document.querySelector(".cross");C.addEventListener("click",y);function y(){f.close()}const _=document.querySelector(".modal"),g=JSON.parse(localStorage.getItem(z));console.log(g);const a=document.querySelector("div.modal button.js-basket");g.some(s=>s.presentBas===1)?a.textContent="Remove from basket":a.textContent="Add to basket";const c=document.querySelector("div.modal button.js-favorite");g.some(s=>s.presentFuv===1)?c.textContent="Remove from favorite":c.textContent="Add to favorite",_.addEventListener("click",j);function j(s){if(s.preventDefault(),s.target.closest(".js-favorite")){if(h&&(A(s.target),c.textContent==="Add to favorite"?c.textContent="Remove from favorite":c.textContent="Add to favorite"),B){A(s.target);const u=JSON.parse(localStorage.getItem(b))??[];N(u,tt),c.textContent==="Add to favorite"?c.textContent="Remove from favorite":c.textContent="Add to favorite"}x&&(JSON.parse(localStorage.getItem(b)),A(s.target),c.textContent==="Remove from favorite"?c.textContent="Add to favorite":c.textContent="Remove from favorite")}if(s.target.closest(".js-basket")){if(h&&(v(s.target),a.textContent==="Remove from basket"?a.textContent="Add to basket":a.textContent="Remove from basket"),x){v(s.target);const u=JSON.parse(localStorage.getItem(I))??[];N(u,et),a.textContent==="Remove from basket"?a.textContent="Add to basket":a.textContent="Remove from basket"}B&&(JSON.parse(localStorage.getItem(I)),v(s.target),a.textContent==="Remove from basket"?a.textContent="Add to basket":a.textContent="Remove from basket")}}}export{it as a,v as b,N as c,O as d,R as f,E as i,A as t};
//# sourceMappingURL=createModal-Cat6Ck35.js.map
