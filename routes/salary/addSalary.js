const express = require('express');
const connection = require('../../dbConfig');
const router = express.Router();

router.post('/', async(req, res) => {
    try {
        const {salary, employeeEmail} = req.body;
        const sqlQuery = 'insert into salary (salary, employeeEmail) values (?, ?)';
        connection.query(sqlQuery, [salary, employeeEmail], (err, result) => {
            if(err){
                return res.status(500).json({success: false, message: "Error Occured while inserting salary"});
            }
            else{
                return res.status(200).json({success: true, message: "Successfully inserted salary"})
            }
        });
    } catch (error) {
        return res.status(500).json({success: false, message: "Internal Server Error"});
    }
})

module.exports = router;