const AnimalsModle = require('../model/Animals-model');
const GetAllAnimals = async (req, res) => {
  return await AnimalsModle.find({})
    .then(result => res.status(200).send(result))
    .catch(reject => res.status(400).send(reject));
}
const GetAnimalById = async (req, res) => {
  return await AnimalsModle.findOne({ _id: req.params.id })
    .then(result => res.status(200).send(result))
    .catch(reject => res.status(400).send(reject));
}
const CreateAnimal = async (req, res) => {
  return await AnimalsModle.create(req.body)
    .then(() => res.status(200).send({ success_create: true }))
    .catch(reject => res.status(400).send(reject));
}
const UpdateAnimal = async (req, res) => {
  return await AnimalsModle.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.status(200).send({ update_success: true }))
    .catch((reject) => res.status(400).send(reject));
}
const DeleteAnimal = async (req, res) => {
  return await AnimalsModle.findByIdAndDelete({ _id: req.params.id })
    .then(() => res.status(200).send({ delete_success: true }))
    .catch((reject) => res.status(400).send(reject));
}
module.exports = { GetAllAnimals, GetAnimalById, CreateAnimal, UpdateAnimal, DeleteAnimal }