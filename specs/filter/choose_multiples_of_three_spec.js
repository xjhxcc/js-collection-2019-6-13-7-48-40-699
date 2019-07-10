'use strict';

var choose_multiples_of_three = require("../../practices/filter/choose_multiples_of_three.js");

describe('choose_multiples_of_three', function() {

  var collection = [0, 1, 2, 3, 4, 5, 6, 9, 11];

  it('choose_multiples_of_three', function() {
    const condition=(coll)=>{
      return (coll%3==0);
    }

    var result = choose_multiples_of_three(collection,condition);

    expect(result).toEqual([0, 3, 6, 9]);
  })
});
