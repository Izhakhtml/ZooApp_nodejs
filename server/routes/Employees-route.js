const express = require('express').Router();
const Employee = require('../controllers/Employees-controller');
express.get('/',Employee.GetAllEmployees);
express.get('/:id',Employee.GetEmployeeById);
express.post('/',Employee.CreateEmployee);
express.put('/:id',Employee.UpdateEmployee);
express.delete('/:id',Employee.DeleteEmployee);
module.exports = express;