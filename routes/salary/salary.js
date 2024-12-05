const express = require('express');
const router = express.Router();
const addSalary = require('./addSalary')
const getAllSalary = require('./getAllSalary')
const getASalary = require('./getASalary');
const updateASalary = require('./updateASalary');
const deleteASalary = require('./deleteASalary');

router.use('/addSalary', addSalary);
router.use('/getAllSalary', getAllSalary);
router.use('/getASalary', getASalary);
router.use('/updateASalary', updateASalary);
router.use('/deleteASalary', deleteASalary);

module.exports = router;