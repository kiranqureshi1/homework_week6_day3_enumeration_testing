const Journey = function(startLocation, endLocation, modelOfTransport, distanceInMiles){
  this.startLocation = startLocation;
  this.endLocation = endLocation;
  this.modelOfTransport = modelOfTransport;
  this.distanceInMiles = distanceInMiles;
};
module.exports = Journey;
