import{b as j}from"./vendor-BfMHouvv.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const O="/Instruments_2025-4.git/assets/in01-DDtRZv0L.jpg",_="/Instruments_2025-4.git/assets/in02-BLtyIFcg.jpg",L="/Instruments_2025-4.git/assets/in03-DxX5vNo9.jpg",N="/Instruments_2025-4.git/assets/in04-BFeooFc0.jpg",M="/Instruments_2025-4.git/assets/in05-D0f0Nwn2.jpg",D="/Instruments_2025-4.git/assets/in06-CCY3mjLl.jpg",J="/Instruments_2025-4.git/assets/in07-DSke7PNe.jpg",$="/Instruments_2025-4.git/assets/in08-Cffekw7m.jpg",K="/Instruments_2025-4.git/assets/in09-B7A1B4HK.jpg",T="/Instruments_2025-4.git/assets/in10-C8QsgQ0Q.jpg",w=[{id:1,img:O,name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт ТD-30-Надійний помічник для робіт по дому"},{id:2,img:_,name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M BH-20 Використовується для сверління"},{id:3,img:L,name:"Шліфмашина",price:1299,description:"Кутова шліфмашина Dnipro-M GS-98 - модель яка поєднує в собі"},{id:4,img:N,name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL"},{id:5,img:M,name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M"},{id:6,img:D,name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу трави"},{id:7,img:J,name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначений для покосу трави, чагарників, бур'янів"},{id:8,img:$,name:"Генератор",price:10890,description:"Бензиновый генератор Dnipro-M GX-25 номінальною потужністю 2,5 кВт"},{id:9,img:K,name:"Культиватор",price:10890,description:"Культиватор електричний Dnipro-M 40"},{id:10,img:T,name:"Лобзик",price:10890,description:"Лобзик електричний Dnipro-M JS-80LX + Набір пиляльних полотен 5 шт"}],R={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_INSTRUMENT:"instruments"},F="/Instruments_2025-4.git/assets/no_img-LHHwQ-Ik.png";function Y(i){i.code==="Escape"&&this.close()}const P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function x(i){const e=Number(i.closest(".js-card").dataset.id);return w.find(({id:n})=>n===e)}const{KEY_FAVORITE:m,KEY_BASKET:A}=R;let H=JSON.parse(localStorage.getItem(m))??[],d=JSON.parse(localStorage.getItem(A))??[];console.log(H);function u(i){const e=x(i);console.log(e);let n=JSON.parse(localStorage.getItem(m))??[];if(n.some(t=>t.id===e.id)){let t=JSON.parse(localStorage.getItem(m))??[];t=t.filter(o=>o.id!==e.id),localStorage.setItem(m,JSON.stringify(t))}else n.push(e),localStorage.setItem(m,JSON.stringify(n))}function p(i){const e=x(i);d.some(({id:r})=>r===e.id)?(d=d.filter(r=>r.id!==e.id),localStorage.setItem(A,JSON.stringify(d))):(d.push(e),localStorage.setItem(A,JSON.stringify(d)))}const{KEY_FAVORITE:v,KEY_BASKET:b}=R;let Q=JSON.parse(localStorage.getItem(v))??[],U=JSON.parse(localStorage.getItem(b))??[];const V=document.querySelector(".favorite_list"),q=document.querySelector(".checkout_list"),S=document.getElementById("index"),I=document.getElementById("favorite"),k=document.getElementById("basket");function st({img:i,name:e,price:n,description:r,id:t,presentFuv:o,presentBas:l}){const f=j.create(`
	    <div class="modal js-card" data-id=${t}>
            <div class="cross">
                 <img src=${P} alt="close">
            </div>
            <img src="${i}" alt="${e}" width="300">
            <h2>${e} <span>id${t}</span></h2>
            <h3>${n}point</h3>
                

            <p>${r}</p>
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
`,{handler:null,onShow(s){this.handler=Y.bind(s),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),C.removeEventListener("click",E)}});f.show();const C=document.querySelector(".cross");C.addEventListener("click",E);function E(){f.close()}const y=document.querySelector(".modal"),a=document.querySelector("div.modal button.js-basket");U.some(s=>s.id===t)?a.textContent="Remove from basket":a.textContent="Add to basket";const c=document.querySelector("div.modal button.js-favorite");Q.some(s=>s.id===t)?c.textContent="Remove from favorite":c.textContent="Add to favorite",y.addEventListener("click",B);function B(s){if(s.preventDefault(),s.target.closest(".js-favorite")){if(S&&(u(s.target),c.textContent==="Add to favorite"?c.textContent="Remove from favorite":c.textContent="Add to favorite"),I){u(s.target);const g=JSON.parse(localStorage.getItem(v))??[];h(g,V),c.textContent==="Add to favorite"?c.textContent="Remove from favorite":c.textContent="Add to favorite"}k&&(JSON.parse(localStorage.getItem(v)),u(s.target),c.textContent==="Remove from favorite"?c.textContent="Add to favorite":c.textContent="Remove from favorite")}if(s.target.closest(".js-basket")){if(S&&(p(s.target),a.textContent==="Remove from basket"?a.textContent="Add to basket":a.textContent="Remove from basket"),k){p(s.target);const g=JSON.parse(localStorage.getItem(b))??[];h(g,q),a.textContent==="Remove from basket"?a.textContent="Add to basket":a.textContent="Remove from basket"}I&&(JSON.parse(localStorage.getItem(b)),p(s.target),a.textContent==="Remove from basket"?a.textContent="Add to basket":a.textContent="Remove from basket")}}}let X="Add to favorite",G="Remove from",W="Add to basket",Z="Remove from";const z="visible",tt="invisible";function h(i,e){let n;i.length?(n=i.map(({id:r,img:t,name:o,presentFuv:l,presentBas:f})=>`
                    <li data-id=${r} class="card js-card">
                    <img src="${t}" alt="${o}" width="300">
                    <h2>${o}</h2>
                    
                    <span>id${r}</span>
                    
                    <p></p>
                    <p></p>
                    
                    <p><a href="#" class="info js-info">More Information (Modal)</a></p>
    <div class="${S??I??k?tt:z}">
    <button class="js-favorite" type="button">${l?G:X}</button>
    <button class="js-basket" type="button">${f?Z:W}</button>
                    </div>
                    </li>
                    `).join(""),e.innerHTML=n):(n=`<li class="js-card">
                    <img src=${F} alt="404" width="300">
                    </li>`,e.innerHTML=n)}export{h as a,st as b,R as c,p as d,x as f,w as i,u as t};
//# sourceMappingURL=createMarkup-BQuarlsC.js.map
