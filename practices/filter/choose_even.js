'use strict';

function choose_even(collection,condition) {
  return collection.filter(condition);
}
// function choose_even(collection) {
//   let result=[];
//   for(let i=0;i<collection.length;i++){
//     if(i%2==0){
//         result.push(collection[i]);
//     }
//   }
// }

module.exports = choose_even;
