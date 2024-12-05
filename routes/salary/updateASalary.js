const express = require('express');
const connection = require('../../dbConfig');
const router = express.Router();

router.put('/:id', async(req, res) => {
    try {
        const {salary} = req.body;
        const sqlQuery = 'update salary set salary = ? where id = ?';
        connection.query(sqlQuery, [salary, req.params.id], (err, result) => {
            if(err){
                return res.status(500).json({success: false, message: "Error while getting salary"})
            }
            else{
                return res.status(200).json({success: true, data: result})
            }
        })
    } catch (error) {
        return res.status(500).json({success: false, message: "Internal Server Error"});
    }
})

module.exports = router;