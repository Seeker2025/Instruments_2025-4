
import { instruments    } from './instruments';
import { common         } from './common';
import { createMarkup   } from './helpers/createMarkup';
import { createModal    } from './helpers/createModal';
import { 
         toFavorite,
         toBusket
                        } from './helpers/favoriteFun';
import { findProduct    } from './helpers/findProduct';
const  { KEY_FAVORITE, KEY_BASKET, KEY_INSTRUMENT }   =   common;

// const search = document.querySelector('.js-search');
const jsList = document.querySelector('.js-list');

localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(instruments));
const allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));
// export { allInstruments };
// let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
// let basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];

console.log(allInstruments);
createMarkup(allInstruments, jsList);


jsList.addEventListener('click', onClick);

function onClick(evt){
    evt.preventDefault();
    // console.log(allInstruments);
    
    if(evt.target.classList.contains('js-info')){
       
            const product = findProduct(evt.target);
            
            // product.presentFuv = 0;
            // product.presentBas = 0;
       
            const{img, name, price, description, id, presentFuv, presentBas} = product
            createModal({img, name, price, description, id, presentFuv, presentBas})
       
    }
    if(evt.target.classList.contains('js-favorite')){
         toFavorite(evt.target)
      
            //   const product = findProduct(evt.target);
            //     console.log(product);
             
            //    let favoriteArr = JSON.parse(localStorage.getItem('favorite01')) ?? [];
            //     const inStorage = favoriteArr.some((itm)=> itm.id === product.id);
            //     console.log(inStorage);//// false or true
                                                     
        // if(inStorage){
        
        //        console.log('if');
        //        console.log(product);
        //        let favoriteArr = JSON.parse(localStorage.getItem('favorite01')) ?? [];
        //        favoriteArr = favoriteArr.filter((itm)=>itm.id!==product.id);
        //        localStorage.setItem('favorite01', JSON.stringify(favoriteArr));
      
        // }else{
             
            //    console.log('else'); 
            //    console.log(product);
            //    product.presentFuv = 1;
               
            //    favoriteArr.push(product);
            //    console.log(favoriteArr);
               
            //    localStorage.setItem('favorite01', JSON.stringify(favoriteArr));
                       
               
            //    }
  }    

     if(evt.target.classList.contains('js-basket')){
        //     product.presentBas = 1;    
            toBusket(evt.target);
             

            
    }
}


 

// function findProduct(elem){
//     const productId = Number(elem.closest('.js-card').dataset.id)
//     // const allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));
//    return instruments.find(({id}) => id === productId);
   
// }


export { allInstruments };