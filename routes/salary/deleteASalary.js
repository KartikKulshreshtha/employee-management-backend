const express = require('express');
const connection = require('../../dbConfig');
const router = express.Router();

router.delete('/', async(req, res) => {
    try {
        const sqlQuery = 'delete from salary where id = ?';
        connection.query(sqlQuery, [req.params.id], (err, result) => {
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