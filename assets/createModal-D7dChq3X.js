import{b as j}from"./vendor-BfMHouvv.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const O="/Instruments_2025-4/assets/in01-DDtRZv0L.jpg",_="/Instruments_2025-4/assets/in02-BLtyIFcg.jpg",L="/Instruments_2025-4/assets/in03-DxX5vNo9.jpg",N="/Instruments_2025-4/assets/in04-BFeooFc0.jpg",M="/Instruments_2025-4/assets/in05-D0f0Nwn2.jpg",D="/Instruments_2025-4/assets/in06-CCY3mjLl.jpg",$="/Instruments_2025-4/assets/in07-DSke7PNe.jpg",J="/Instruments_2025-4/assets/in08-Cffekw7m.jpg",K="/Instruments_2025-4/assets/in09-B7A1B4HK.jpg",w="/Instruments_2025-4/assets/in10-C8QsgQ0Q.jpg",T=[{id:1,img:O,name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт ТD-30-Надійний помічник для робіт по дому"},{id:2,img:_,name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M BH-20 Використовується для сверління"},{id:3,img:L,name:"Шліфмашина",price:1299,description:"Кутова шліфмашина Dnipro-M GS-98 - модель яка поєднує в собі"},{id:4,img:N,name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL"},{id:5,img:M,name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M"},{id:6,img:D,name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу трави"},{id:7,img:$,name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначений для покосу трави, чагарників, бур'янів"},{id:8,img:J,name:"Генератор",price:10890,description:"Бензиновый генератор Dnipro-M GX-25 номінальною потужністю 2,5 кВт"},{id:9,img:K,name:"Культиватор",price:10890,description:"Культиватор електричний Dnipro-M 40"},{id:10,img:w,name:"Лобзик",price:10890,description:"Лобзик електричний Dnipro-M JS-80LX + Набір пиляльних полотен 5 шт"}],y={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_INSTRUMENT:"instruments"},F="/Instruments_2025-4/assets/no_img-LHHwQ-Ik.png",P=document.getElementById("index"),Y=document.getElementById("favorite"),H=document.getElementById("basket"),Q="visible",U="invisible";function k(i,e){let n;i.length?(n=i.map(({id:r,img:t,name:o,presentFuv:d,presentBas:f})=>`
                    <li data-id=${r} class="card js-card">
                    <img src="${t}" alt="${o}" width="300">
                    <h2>${o}</h2>
                    
                    <span>id${r}</span>
                    
                    <p></p>
                    <p></p>
                    
                    <p><a href="#" class="info js-info">More Information (Modal)</a></p>
    <div class="${P??Y??H?U:Q}">
    <button class="js-favorite" type="button"></button>
    <button class="js-basket" type="button"></button>
                    </div>
                    </li>
                    `).join(""),e.innerHTML=n):(n=`<li class="js-card">
                    <img src=${F} alt="404" width="300">
                    </li>`,e.innerHTML=n)}function V(i){i.code==="Escape"&&this.close()}const q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function x(i){const e=Number(i.closest(".js-card").dataset.id);return T.find(({id:n})=>n===e)}const{KEY_FAVORITE:m,KEY_BASKET:A}=y;let X=JSON.parse(localStorage.getItem(m))??[],l=JSON.parse(localStorage.getItem(A))??[];console.log(X);function u(i){const e=x(i);console.log(e);let n=JSON.parse(localStorage.getItem(m))??[];if(n.some(t=>t.id===e.id)){let t=JSON.parse(localStorage.getItem(m))??[];t=t.filter(o=>o.id!==e.id),localStorage.setItem(m,JSON.stringify(t))}else n.push(e),localStorage.setItem(m,JSON.stringify(n))}function p(i){const e=x(i);l.some(({id:r})=>r===e.id)?(l=l.filter(r=>r.id!==e.id),localStorage.setItem(A,JSON.stringify(l))):(l.push(e),localStorage.setItem(A,JSON.stringify(l)))}const{KEY_FAVORITE:v,KEY_BASKET:b}=y;let G=JSON.parse(localStorage.getItem(v))??[],W=JSON.parse(localStorage.getItem(b))??[];const Z=document.querySelector(".favorite_list"),z=document.querySelector(".checkout_list"),E=document.getElementById("index"),C=document.getElementById("favorite"),h=document.getElementById("basket");function nt({img:i,name:e,price:n,description:r,id:t,presentFuv:o,presentBas:d}){const f=j.create(`
	    <div class="modal js-card" data-id=${t}>
            <div class="cross">
                 <img src=${q} alt="close">
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
`,{handler:null,onShow(s){this.handler=V.bind(s),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),S.removeEventListener("click",I)}});f.show();const S=document.querySelector(".cross");S.addEventListener("click",I);function I(){f.close()}const B=document.querySelector(".modal"),a=document.querySelector("div.modal button.js-basket");W.some(s=>s.id===t)?a.textContent="Remove from basket":a.textContent="Add to basket";const c=document.querySelector("div.modal button.js-favorite");G.some(s=>s.id===t)?c.textContent="Remove from favorite":c.textContent="Add to favorite",B.addEventListener("click",R);function R(s){if(s.preventDefault(),s.target.closest(".js-favorite")){if(E&&(u(s.target),c.textContent==="Add to favorite"?c.textContent="Remove from favorite":c.textContent="Add to favorite"),C){u(s.target);const g=JSON.parse(localStorage.getItem(v))??[];k(g,Z),c.textContent==="Add to favorite"?c.textContent="Remove from favorite":c.textContent="Add to favorite"}h&&(JSON.parse(localStorage.getItem(v)),u(s.target),c.textContent==="Remove from favorite"?c.textContent="Add to favorite":c.textContent="Remove from favorite")}if(s.target.closest(".js-basket")){if(E&&(p(s.target),a.textContent==="Remove from basket"?a.textContent="Add to basket":a.textContent="Remove from basket"),h){p(s.target);const g=JSON.parse(localStorage.getItem(b))??[];k(g,z),a.textContent==="Remove from basket"?a.textContent="Add to basket":a.textContent="Remove from basket"}C&&(JSON.parse(localStorage.getItem(b)),p(s.target),a.textContent==="Remove from basket"?a.textContent="Add to basket":a.textContent="Remove from basket")}}}export{k as a,nt as b,y as c,p as d,x as f,T as i,u as t};
//# sourceMappingURL=createModal-D7dChq3X.js.map
