const express = require('express');
const router = express.Router();
const connection = require('../../dbConfig')

router.get('/', async(req, res) => {
    try {
        const sqlQuery = 'SELECT * from employees';
        connection.query(sqlQuery, (err, result) => {
            if(err){
                return res.status(500).json({success: false, message: "Error Occured"})
            }
            else{
                return res.json({success: true, data: result})
            }
        })
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
})

module.exports = router