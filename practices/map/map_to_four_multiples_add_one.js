'use strict';
var map_to_four_multiples_add_one = function(collection){
  return collection.map(item=>item*4+1);
  //return [5,9,13,17,21];
};

module.exports = map_to_four_multiples_add_one;

//node_modules/jasmine-node/bin/jasmine-node --verbose specs/map
