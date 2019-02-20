const assert = require('assert');
const Advanced = require('../models/advanced.js');


describe("advanced", function(){
  let advanced1;
  let alphabets;

  beforeEach(function(){
    alphabets = ["a", "b", "c", "d"]
  advanced1 = new Advanced(alphabets)
  });

  it('should be able to capitalize', function(){
    assert.deepStrictEqual(advanced1.capitalize_array(), ["A", "B", "C", "D"]);
  });

});
