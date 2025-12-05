import { common } from '../common';
const{ KEY_FAVORITE, KEY_BASKET, KEY_INSTRUMENT } = common;
// import { instruments } from '../instruments';
import { findProduct } from './findProduct';
// const allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));
// import { allInstruments } from '../index';
import { stringify } from 'postcss';

let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
let basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
console.log(favoriteArr);




// let a = 0;
function toFavorite(elemFuv){
//  console.log(a llInstruments);

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
                                   // allInstruments = allInstruments.map((itm) =>{
                                   //      // console.log(itm.id);
                                   //      // console.log(product.id);
                                   //       if(itm.id === product.id) {
                                             
                                   //        itm.presentFuv = 1;

                                   //        return itm;
                                   //      //  console.log(itm.presentFuv);
                                   //           }  
                                   //           return itm;    
                                   //               })
               // localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(allInstruments));
               // console.log(allInstruments);
               //    a = a + 1;
               // console.log(a);
             

              
               // console.log(JSON.parse(localStorage.getItem(KEY_INSTRUMENT)));                                 
               
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
                                        // allInstruments = allInstruments.map(itm =>{
                                        // if(itm.id === product.id) {
                                        // itm.presentBas = 1;
                                        //     }      
                                        //          })
               // localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(allInstruments));  
               
          }
 }



export { toFavorite, toBusket };  
