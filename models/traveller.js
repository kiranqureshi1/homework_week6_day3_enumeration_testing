const Traveller = function(listofJournies){
  this.listofJournies = listofJournies;
};

module.exports = Traveller;

Traveller.prototype.journies_start_location = function(){
  const startLocation = this.listofJournies.map((journey) => journey.startLocation);
  return startLocation;
};

Traveller.prototype.journies_end_location = function(){
  const endLocation = this.listofJournies.map((journey) => journey.endLocation);
  return endLocation;
};

Traveller.prototype.journies_by_transport = function(transport){
  const byTranport = this.listofJournies.filter((journey) => journey.modelOfTransport === transport);
  return byTranport;
};

Traveller.prototype.journies_over_certain_distance = function(distance){
  const list = this.listofJournies.filter((journey) => journey.distanceInMiles > distance);
  return list;
};

Traveller.prototype.total_distance_travelled = function(){
  const sumJourneies = this.listofJournies.reduce((total, journey) => total + journey.distanceInMiles, 0);
  return sumJourneies;
};
