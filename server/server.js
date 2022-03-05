require('dotenv').config();
require('./BD/index');
const express = require('express');
const App = express();
const AnimalRouter = require('./routes/Animals-route');
const EmployeeRouter = require('./routes/Employees-route');
const UserRouter = require('./routes/User-route');
const Cors = require('cors');
const passport = require('passport');
require('./confige/Passport')(passport);
const Port = process.env.PORT || 8000
App.use(Cors());
App.use(express.json());
App.use(passport.initialize());
App.use('/animal',passport.authenticate("jwt",{ session: false }),AnimalRouter);
App.use('/employee',passport.authenticate("jwt",{ session: false }),EmployeeRouter);
App.use('/api',UserRouter);
App.listen(Port);