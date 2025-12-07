import { common } from '../common';
// import { allInstruments023 } from '../index';
// console.log(allInstruments023);
const{ KEY_FAVORITE, KEY_BASKET, KEY_INSTRUMENT } = common;
import { instruments } from '../instruments';
import { findProduct } from './findProduct';
// const allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));
// import { allInstruments02 } from '../index';

 let allInstruments=localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(instruments));
 
//  let allInstruments = [...instrumentsFromLocal];
 
// console.log(allInstruments);









import { stringify } from 'postcss';


let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
let basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
console.log(favoriteArr);


function toFavorite(elemFuv){
// console.log(allInstruments);
               const product = findProduct(elemFuv);
               console.log(product);
               //  console.log(favoriteArr);
               let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
               const inStorage = favoriteArr.some((itm)=> itm.id === product.id);
               //console.log(inStorage);//// false or true
               //  const favoriteBtn = document.querySelector('button.js-favorite');                                    
        if(inStorage){
          //    product.presentFuv = 1;
               // console.log('if');
               // console.log(product);
               
               // console.log(favoriteBtn);
               let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
               favoriteArr = favoriteArr.filter((itm)=>itm.id!==product.id);
               // favoriteBtn.textContent = 'add';
               localStorage.setItem( KEY_FAVORITE, JSON.stringify(favoriteArr));
               // console.log(favoriteArr);
            
              
                                        // allInstruments = allInstruments.map(itm =>{
                                        // if(itm.id === product.id) {
                                        // itm.presentFuv = 0;
                                        //     }      
                                        //          })
               // localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(allInstruments)); 
             
               //  product.presentFuv = 0;
               //   localStorage.setItem('favorite01', JSON.stringify(favoriteArr));
               
              
           }else{
               // console.log(allInstruments);
               // console.log('else'); 
               // console.log(product);
               // product.presentFuv = 1;
               
               favoriteArr.push(product);
               // console.log(favoriteArr);
               // favoriteBtn.textContent = 'rem';
               
               localStorage.setItem( KEY_FAVORITE, JSON.stringify(favoriteArr));
               //  console.log(favoriteArr);
               // let allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));
                                  allInstruments = allInstruments.map((itm) =>{
                                        if(itm.id === product.id) {
                                        itm.presentFav = 1;
                                        // console.log(itm);
                                        return itm;
                                        }  
                                        return itm;    
                                        })
               localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(allInstruments));
               }
  }
// console.log(a);


 function toBusket(elemBus){
                const product = findProduct(elemBus);
                const inStorage = basketArr.some(({ id })=> id === product.id);
                                                                           
        if(inStorage){
              
               basketArr = basketArr.filter((itm)=>itm.id!==product.id);
               localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));
                                        // allInstruments = allInstruments.map(itm =>{
                                        // if(itm.id === product.id) {
                                        // itm.presentBas = 0;
                                        //     }      
                                        //          })
                                           
               // localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(allInstruments));  
               

                    
          }else{
               // product.presentBas = 1;                    
               basketArr.push(product);
               localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr)); 
               // let allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));
                                     let allInstruments = instruments.map((itm) =>{
                                        if(itm.id === product.id) {
                                        itm.presentBas = 1;
                                        // console.log(itm);
                                        return itm;
                                        }  
                                        return itm;    
                                        })
               localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(allInstruments));  
                                        
          }
 }



export { toFavorite, toBusket };  
// export { allInstruments };
