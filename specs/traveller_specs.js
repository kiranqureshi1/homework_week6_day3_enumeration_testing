const assert = require('assert');
const Traveller = require('../models/traveller.js');
const Journey = require('../models/journey.js');


describe("traveller", function(){
  let journey1;
  let journey2;
  let journey3;
  let journey4;
  let journies;
  let traveller1;

  beforeEach(function(){
    journey1 = new Journey("Edinburgh", "Glassgow", "coach", 50);
    journey2 = new Journey("Boston", "Missisippi", "train", 200);
    journey3 = new Journey("London", "Manchester", "train", 150);
    journey4 = new Journey("Dundee", "Aberdeen", "coach", 100);

    journies = [journey1, journey2, journey3, journey4];
    traveller1 = new Traveller(journies);
  });

  it('should have a collection of journies ', function(){
    const actual = traveller1.listofJournies; //wierd
    assert.deepStrictEqual(actual, journies);
  });

  it(" should be able to get the journies start location", function(){
    assert.deepStrictEqual(traveller1.journies_start_location(), ["Edinburgh","Boston","London","Dundee"]);
  });

  it("should be able to get journies end location", function(){
    assert.deepStrictEqual(traveller1.journies_end_location(), ["Glassgow", "Missisippi", "Manchester", "Aberdeen"]);
  });

  it("should be able to get journies by transport", function(){
    assert.deepStrictEqual(traveller1.journies_by_transport("coach"), [journey1, journey4]);
  });
  //
  it("should be able to get journeys over a certain distance", function(){
    assert.deepStrictEqual(traveller1.journies_over_certain_distance(50), [journey2, journey3, journey4]);
  });

  it("should be able to calculate total distance travelled", function(){
    assert.deepStrictEqual(traveller1.total_distance_travelled(), 500);
  });
  //
  // it("should be able to get a unique list of modes of transport", function(){
  //   assert.deepStrictEqual(traveller1.ahah(), expected);
  // });

});
