const express = require('express').Router(); 
const Animals = require('../controllers/Animals-controller')
express.get('/',Animals.GetAllAnimals);
express.get('/:id',Animals.GetAnimalById);
express.post('/',Animals.CreateAnimal);
express.put('/:id',Animals.UpdateAnimal)
express.delete('/:id',Animals.DeleteAnimal);
module.exports = express;