'use strict';

function choose_multiples_of_three(collection,condition) {
  return collection.filter(condition);
}

// function choose_multiples_of_three(collection) {
//   let result=[];
//   for(let i=0;i<collection.length;i++){
//     if(i%3==0){
//         result.push(collection[i]);
//     }
//   }
// }

module.exports = choose_multiples_of_three;
