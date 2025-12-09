import{b as M}from"./vendor-BfMHouvv.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const J="/Instruments_2025-4/assets/in01-DDtRZv0L.jpg",T="/Instruments_2025-4/assets/in02-BLtyIFcg.jpg",K="/Instruments_2025-4/assets/in03-DxX5vNo9.jpg",D="/Instruments_2025-4/assets/in04-BFeooFc0.jpg",$="/Instruments_2025-4/assets/in05-D0f0Nwn2.jpg",w="/Instruments_2025-4/assets/in06-CCY3mjLl.jpg",Y="/Instruments_2025-4/assets/in07-DSke7PNe.jpg",F="/Instruments_2025-4/assets/in08-Cffekw7m.jpg",P="/Instruments_2025-4/assets/in09-B7A1B4HK.jpg",U="/Instruments_2025-4/assets/in10-C8QsgQ0Q.jpg",x=[{id:1,img:J,name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт ТD-30-Надійний помічник для робіт по дому"},{id:2,img:T,name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M BH-20 Використовується для сверління"},{id:3,img:K,name:"Шліфмашина",price:1299,description:"Кутова шліфмашина Dnipro-M GS-98 - модель яка поєднує в собі"},{id:4,img:D,name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL"},{id:5,img:$,name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M"},{id:6,img:w,name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу трави"},{id:7,img:Y,name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначений для покосу трави, чагарників, бур'янів"},{id:8,img:F,name:"Генератор",price:10890,description:"Бензиновый генератор Dnipro-M GX-25 номінальною потужністю 2,5 кВт"},{id:9,img:P,name:"Культиватор",price:10890,description:"Культиватор електричний Dnipro-M 40"},{id:10,img:U,name:"Лобзик",price:10890,description:"Лобзик електричний Dnipro-M JS-80LX + Набір пиляльних полотен 5 шт"}],R={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_INSTRUMENT:"instruments"},H="/Instruments_2025-4/assets/no_img-LHHwQ-Ik.png",Q=document.getElementById("index"),V=document.getElementById("favorite"),q=document.getElementById("basket"),X="visible",G="invisible";function y(r,e){let s;r.length?(s=r.map(({id:o,img:t,name:n,presentFuv:m,presentBas:u})=>`
                    <li data-id=${o} class="card js-card">
                    <img src="${t}" alt="${n}" width="300">
                    <h2>${n}</h2>
                    
                    <span>id${o}</span>
                    
                    <p></p>
                    <p></p>
                    
                    <p><a href="#" class="info js-info">More Information (Modal)</a></p>
    <div class="${Q??V??q?G:X}">
    <button class="js-favorite" type="button"></button>
    <button class="js-basket" type="button"></button>
                    </div>
                    </li>
                    `).join(""),e.innerHTML=s):(s=`<li class="js-card">
                    <img src=${H} alt="404" width="300">
                    </li>`,e.innerHTML=s)}function W(r){r.code==="Escape"&&this.close()}const Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function _(r){const e=Number(r.closest(".js-card").dataset.id);return x.find(({id:s})=>s===e)}const{KEY_FAVORITE:g,KEY_BASKET:b,KEY_INSTRUMENT:f}=R;let z=JSON.parse(localStorage.getItem(g))??[],d=JSON.parse(localStorage.getItem(b))??[];console.log(z);let l=null;function S(r){const e=_(r);console.log(e);let s=JSON.parse(localStorage.getItem(g))??[];if(s.some(t=>t.id===e.id)){let t=JSON.parse(localStorage.getItem(g))??[];t=t.filter(n=>n.id!==e.id),localStorage.setItem(g,JSON.stringify(t))}else s.push(e),localStorage.setItem(g,JSON.stringify(s)),l=JSON.parse(localStorage.getItem(f)),l=l.map(t=>(t.id===e.id&&(t.presentFav=1),t)),localStorage.setItem(f,JSON.stringify(l))}function v(r){const e=_(r);d.some(({id:o})=>o===e.id)?(d=d.filter(o=>o.id!==e.id),localStorage.setItem(b,JSON.stringify(d))):(d.push(e),localStorage.setItem(b,JSON.stringify(d)),l=JSON.parse(localStorage.getItem(f)),l=l.map(o=>(o.id===e.id&&(o.presentBas=1),o)),localStorage.setItem(f,JSON.stringify(l)))}console.log("a");const{KEY_FAVORITE:I,KEY_BASKET:E,KEY_INSTRUMENT:tt}=R;localStorage.setItem(tt,JSON.stringify(x));JSON.parse(localStorage.getItem(I));JSON.parse(localStorage.getItem(E));const et=document.querySelector(".favorite_list"),ot=document.querySelector(".checkout_list"),h=document.getElementById("index"),B=document.getElementById("favorite"),O=document.getElementById("basket");function it({img:r,name:e,price:s,description:o,id:t,presentFuv:n,presentBas:m}){const u=M.create(`
	    <div class="modal js-card" data-id=${t}>
            <div class="cross">
                 <img src=${Z} alt="close">
            </div>
            <img src="${r}" alt="${e}" width="300">
            <h2>${e} <span>id${t}</span></h2>
            <h3>${s}point</h3>
                

            <p>${o}</p>
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
`,{handler:null,onShow(i){this.handler=W.bind(i),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler),N.removeEventListener("click",k)}});u.show();const N=document.querySelector(".cross");N.addEventListener("click",k);function k(){u.close()}const j=document.querySelector(".modal");let p=JSON.parse(localStorage.getItem("KEY_INSTRUMENT02"))??[];console.log(p);const a=document.querySelector("div.modal button.js-basket");p.some(i=>i.presentBas===1)?a.textContent="Remove from basket":a.textContent="Add to basket";const c=document.querySelector("div.modal button.js-favorite"),C=p.some(i=>i.presentFav===1);console.log(C),C?c.textContent="Remove from favorite":c.textContent="Add to favorite",j.addEventListener("click",L);function L(i){if(i.preventDefault(),i.target.closest(".js-favorite")){if(h&&(S(i.target),c.textContent==="Add to favorite"?c.textContent="Remove from favorite":c.textContent="Add to favorite"),B){S(i.target);const A=JSON.parse(localStorage.getItem(I))??[];y(A,et),c.textContent==="Add to favorite"?c.textContent="Remove from favorite":c.textContent="Add to favorite"}O&&(JSON.parse(localStorage.getItem(I)),S(i.target),c.textContent==="Remove from favorite"?c.textContent="Add to favorite":c.textContent="Remove from favorite")}if(i.target.closest(".js-basket")){if(h&&(v(i.target),a.textContent==="Remove from basket"?a.textContent="Add to basket":a.textContent="Remove from basket"),O){v(i.target);const A=JSON.parse(localStorage.getItem(E))??[];y(A,ot),a.textContent==="Remove from basket"?a.textContent="Add to basket":a.textContent="Remove from basket"}B&&(JSON.parse(localStorage.getItem(E)),v(i.target),a.textContent==="Remove from basket"?a.textContent="Add to basket":a.textContent="Remove from basket")}}}export{it as a,v as b,y as c,R as d,_ as f,x as i,S as t};
//# sourceMappingURL=createModal-C9Bk6c9J.js.map
