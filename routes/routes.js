const express = require('express');
const router = express.Router();
const employees = require('./employees/employees')
const salary = require('./salary/salary')

router.use('/employees', employees)
router.use('/salary', salary)


module.exports = router;