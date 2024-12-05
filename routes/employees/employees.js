const express = require('express');
const router = express.Router();
const addEmployees = require('./addEmployee');
const getEmployees = require('./getEmployee');
const getAnEmployee = require('./getAnEmployee');
const updateEmployee = require('./updateEmployee');
const deleteAnEmployee = require('./deleteAnEmployee')

router.use('/addEmployees', addEmployees);
router.use('/getEmployees', getEmployees);
router.use('/getAnEmployee', getAnEmployee);
router.use('/updateEmployee', updateEmployee);
router.use('/deleteAnEmployee', deleteAnEmployee);

module.exports = router;