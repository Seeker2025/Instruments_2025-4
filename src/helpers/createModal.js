import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css";

import { instruments    } from '../instruments';

import { common } from '../common';
const  { KEY_FAVORITE, KEY_BASKET } = common;

let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
let basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];

import {  closeMadal } from './closeModal';
import { createMarkup } from './createMarkup';
import    closeIcon from '../img/close.png';
import { 
          toFavorite,
          toBusket,
                     } from './favoriteFun';

const favList = document.querySelector('.favorite_list');
const basketList = document.querySelector('.checkout_list');

export const indexPage = document.getElementById('index');
export const favoritePage = document.getElementById('favorite');
export const basketPage = document.getElementById('basket');


function createModal({img, name, price, description, id, presentFuv, presentBas}){
  
 
     const instance = basicLightbox.create(`
	    <div class="modal js-card" data-id=${id}>
            <div class="cross">
                 <img src=${closeIcon} alt="close">
            </div>
            <img src="${img}" alt="${name}" width="300">
            <h2>${name} <span>id${id}</span></h2>
            <h3>${price}point</h3>
                

            <p>${description}</p>
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
`, {
    handler: null,
    onShow(instance){
      // console.log(this);
      this.handler = closeMadal.bind(instance);
      document.addEventListener('keydown', this.handler);

  },
    onClose(){
      // console.log(this);
      document.removeEventListener('keydown', this.handler);
      cross.removeEventListener('click', toClose);
  },
  
});


instance.show();

                    const cross = document.querySelector('.cross');
                    cross.addEventListener('click', toClose);
                    function toClose(){
                    instance.close();
                    }

 const modal = document.querySelector('.modal');


              ////// This is for second button
 const btnBasket = document.querySelector('div.modal button.js-basket');
              const inBasket = basketArr.some(itm=>itm.id===id);

                if(inBasket){
              btnBasket.textContent = 'Remove from basket';
                }else{
              btnBasket.textContent = 'Add to basket';
                }
              ////// This is for first button
 const btnFavorite = document.querySelector('div.modal button.js-favorite');              
              const inFavor = favoriteArr.some(itm=>itm.id===id);
              
                if(inFavor){
              btnFavorite.textContent = 'Remove from favorite';
                }else{
              btnFavorite.textContent = 'Add to favorite';
                }

 modal.addEventListener('click', onClick);
                    
                                          function onClick(evt){
                                          evt.preventDefault();
                                         
                                                
      if(evt.target.closest('.js-favorite')){
                 
                                                if(indexPage){
                  
                toFavorite(evt.target, instruments);
                  if(btnFavorite.textContent === 'Add to favorite'){
                btnFavorite.textContent = 'Remove from favorite';
                  }else{
                btnFavorite.textContent = 'Add to favorite';
                  }     
              
                                               
                                                }
                                                if(favoritePage){
                                                  
                toFavorite(evt.target, favoriteArr);
                const favoriteLoc = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
                createMarkup(favoriteLoc, favList);

                  if(btnFavorite.textContent === 'Add to favorite'){
                btnFavorite.textContent = 'Remove from favorite';
                  }else{
                btnFavorite.textContent = 'Add to favorite';
                  } 
                  
                                                }
                                                if(basketPage){
                let  favoriteLoc = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];                                  
                toFavorite(evt.target, favoriteLoc);
                  if(btnFavorite.textContent === 'Remove from favorite'){
                btnFavorite.textContent = 'Add to favorite';
                  }else{
                btnFavorite.textContent = 'Remove from favorite';
                  } 
                          }
                                  }
                                         
                     
 
      if(evt.target.closest('.js-basket')){
                                                if(indexPage){
                toBusket(evt.target, basketArr);
                 if(btnBasket.textContent === 'Remove from basket'){
                btnBasket.textContent = 'Add to basket';
                }else{
                btnBasket.textContent = 'Remove from basket';
                }  
                                                }
                                                if(basketPage){
                                         
                toBusket(evt.target, basketArr);
                const basketArrLoc = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
                createMarkup(basketArrLoc, basketList);
                  if(btnBasket.textContent === 'Remove from basket'){
                btnBasket.textContent = 'Add to basket';
                  }else{
                btnBasket.textContent = 'Remove from basket';
                  }  
                                                
                  
                                                }
                                                if(favoritePage){
                let basketArrLoc = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];                                  
                toBusket(evt.target, basketArrLoc);
                  if(btnBasket.textContent === 'Remove from basket'){
                btnBasket.textContent = 'Add to basket';
                  }else{
                btnBasket.textContent = 'Remove from basket';
                  } 
               
                                                }
                                            }
                                          }
}


export { createModal };


