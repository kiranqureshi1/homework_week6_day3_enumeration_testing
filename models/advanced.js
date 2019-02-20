const Advanced = function(arrayOfStrings){
  this.arrayOfStrings = arrayOfStrings;
};
module.exports = Advanced;


Advanced.prototype.capitalize_array = function() {
  const capitalizedArray = this.arrayOfStrings.map((string) => string.toUpperCase);
  return capitalizedArray;
};
