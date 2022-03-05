const EmployeesModel = require('../model/Employees-model')
const GetAllEmployees = async (req, res) => {
    return await EmployeesModel.find({})
        .then(result => res.status(200).send(result))
        .catch(reject => res.status(500).send(reject))
}
const GetEmployeeById = async (req, res) => {
    return await EmployeesModel.findOne({ _id: req.params.id })
        .then(result => res.status(200).send(result))
        .catch(reject => res.status(500).send(reject))
}
const CreateEmployee = async (req, res) => {
    return await EmployeesModel.create(req.body)
        .then(() => res.status(200).send({ success_create: true }))
        .catch(reject => res.status(500).send(reject))
}
const UpdateEmployee = async (req, res) => {
    return await EmployeesModel.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.status(200).send({ success_update: true }))
        .catch(reject => res.status(500).send(reject))
}
const DeleteEmployee = async (req, res) => {
    return await EmployeesModel.findOneAndDelete({ _id: req.params.id })
        .then(() => res.status(200).send({ success_delete: true }))
        .catch(reject => res.status(500).send(reject))
}
module.exports = { GetAllEmployees, GetEmployeeById, CreateEmployee, UpdateEmployee, DeleteEmployee }