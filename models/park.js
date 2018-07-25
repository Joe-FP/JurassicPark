const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.addDino = function(dinosaur){
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDino = function(){
  this.dinosaurs.pop();
}

Park.prototype.getMostpopularDino = function(){
  let maxGuests = 0;
  let mostPopularDino = null;
  for(let dino of this.dinosaurs){
    if(dino.guestsAttractedPerDay > maxGuests){
      maxGuests = dino.guestsAttractedPerDay;
      mostPopularDino = dino;
    }
  }
  return mostPopularDino;
}

Park.prototype.getAllDinosFromSpecies = function(species){
  let dinos = [];
  for(let dino of this.dinosaurs){
    if(dino.species === species){
      dinos.push(dino);
    }
  }
  return dinos;
}

Park.prototype.removeAllDinosOfSpecies = function(species){
  let dinos = this.dinosaurs;
  let i = dinos.length;
  while (i--) {
    if (dinos[i].species === species) {
        dinos.splice(i, 1);
    }
  }
  return dinos;
  // Could also put dinos which are not of 'species'
  // into a new array. Then return that.
}

Park.prototype.getTotalVisitorsPerDay = function(){
  let total = 0;
  for(let dino of this.dinosaurs){
    total += dino.guestsAttractedPerDay;
  }
  return total;
}

Park.prototype.getTotalVisitorsPerYear = function(){
  return this.getTotalVisitorsPerDay()*365;
}

Park.prototype.getTotalRevenuePerYear = function(){
  return this.getTotalVisitorsPerYear()*this.ticketPrice;
}

module.exports = Park;
