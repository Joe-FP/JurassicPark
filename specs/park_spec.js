const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Jurassic Park', 40);
    dino1 = new Dinosaur('Diplodocus', 'herbivore', 150);
    dino2 = new Dinosaur('Diplodocus', 'herbivore', 100);
    dino3 = new Dinosaur('Allosaurus', 'omnivore', 250);
    dino4 = new Dinosaur('Tyrannosaurus', 'carnivore', 300);
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.addDino(dino4);
  })

  it('should have a name', function(){
    assert.strictEqual(park.name, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 40);
  });

  it('should have a collection of dinosaurs', function(){
    assert.strictEqual(park.dinosaurs.length, 4);
  });

  it('should be able to add a dinosaur to its collection', function(){
    dino = new Dinosaur('Tyrannosaurus', 'carnivore', 150);
    park.addDino(dino);
    assert.strictEqual(park.dinosaurs.length, 5);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDino();
    assert.strictEqual(park.dinosaurs.length, 3);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    assert.strictEqual(park.getMostpopularDino(), dino4);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    let actual = park.getAllDinosFromSpecies('Diplodocus');
    assert.deepStrictEqual(actual, [dino1, dino2]);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    let actual = park.removeAllDinosOfSpecies('Diplodocus');
    assert.deepStrictEqual(actual, [dino3, dino4]);
  });

  it('should be able to calculate guests per day', function(){
    let actual = park.getTotalVisitorsPerDay();
    assert.strictEqual(actual, 800);
  });

  it('should be able to calculate guests per year', function(){
    let actual = park.getTotalVisitorsPerYear()
    assert.strictEqual(actual, 292000);
  });

  it('should be able to calculate total revenue per year', function(){
    let actual = park.getTotalRevenuePerYear()
    assert.strictEqual(actual, 11680000);
  });

});
