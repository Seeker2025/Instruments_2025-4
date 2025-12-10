import { common } from '../common';

const{ KEY_FAVORITE, KEY_BASKET, KEY_INSTRUMENT } = common;
import { instruments } from '../instruments';
import { findProduct } from './findProduct';

let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
let basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
console.log(favoriteArr);

 let instrumentSet = null;

 if(JSON.parse(localStorage.getItem(KEY_INSTRUMENT))){
     instrumentSet = JSON.parse(localStorage.getItem(KEY_INSTRUMENT))
 }else{
     instrumentSet = instruments;
 }

function toFavorite(elemFuv){

               const product = findProduct(elemFuv);
               console.log(product);
               let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
               const inStorage = favoriteArr.some((itm)=> itm.id === product.id);
                                              
        if(inStorage){
         
               let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
               favoriteArr = favoriteArr.filter((itm)=>itm.id!==product.id);
               localStorage.setItem( KEY_FAVORITE, JSON.stringify(favoriteArr));
              
                                        instrumentSet =  instrumentSet.map((itm) =>{
                                        if(itm.id === product.id) {
                                        itm.presentFav = 0;
                                        return itm;
                                        }  
                                        return itm;    
                                        })
               localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(instrumentSet));
               
              
           }else{
               favoriteArr.push(product);
               localStorage.setItem( KEY_FAVORITE, JSON.stringify(favoriteArr));
                                        instrumentSet =  instrumentSet.map((itm) =>{
                                        if(itm.id === product.id) {
                                        itm.presentFav = 1;
                                        return itm;
                                        }  
                                        return itm;    
                                        })
               localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(instrumentSet));
              
               }
  }




//========================================================================================





 function toBusket(elemBus){
                const product = findProduct(elemBus);
                const inStorage = basketArr.some(({ id })=> id === product.id);
                                                                           
        if(inStorage){
              
               basketArr = basketArr.filter((itm)=>itm.id!==product.id);
               localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));
                                        instrumentSet =  instrumentSet.map((itm) =>{
                                        if(itm.id === product.id) {
                                        itm.presentBas = 0;
                                        return itm;
                                        }  
                                        return itm;    
                                        })
               localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(instrumentSet));  

                    
          }else{
                                   
               basketArr.push(product);
               localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr)); 
              
                                        instrumentSet =  instrumentSet.map((itm) =>{
                                        if(itm.id === product.id) {
                                        itm.presentBas = 1;
                                        return itm;
                                        }  
                                        return itm;    
                                        })
               localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(instrumentSet));  
                                     
          }
 }

export { toFavorite, toBusket };  

