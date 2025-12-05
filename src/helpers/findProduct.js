import { instruments } from '../instruments';
// console.log(instruments);

// import { common } from '../common';
// const  { KEY_FAVORITE, KEY_BASKET, KEY_INSTRUMENT }   =   common;

// const allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));
// console.log( allInstruments);

function findProduct(elem){
    const productId = Number(elem.closest('.js-card').dataset.id)
    return instruments.find(({id}) => id === productId);
   
}


export { findProduct };