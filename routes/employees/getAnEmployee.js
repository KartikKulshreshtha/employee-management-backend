const express = require('express');
const connection = require('../../dbConfig');
const router = express.Router();

router.get('/:email', async(req,res) => {
    try {
        const email = req.params.email;
        const sqlQuery = "select * from employees where email = ?";
        connection.query(sqlQuery, (err, result) => {
            if(err){
                return res.status(500).json({success: false, message: "Error Occured"})
            }
            else{
                return res.status(200).json({success: true, data: result})
            }
        })
    } catch (error) {
        return res.status(500).json({success: false, message: "Internal Server Error"})
    }
})


module.exports = router;