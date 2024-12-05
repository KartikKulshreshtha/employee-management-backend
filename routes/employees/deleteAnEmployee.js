const express = require('express');
const connection = require('../../dbConfig');
const router = express.Router();

router.delete('/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const sqlQuery = "delete from employees where email = ?";
        connection.query(sqlQuery, (err, result) => {
            if(err) {
                console.log(err)
                return res.status(500).json({ success: false, message: "Error Occured" })
            }
            else{
                return res.status(200).json({ success: true, message:"Employee Deleted Successfull"});
            }
        })
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server Error" })
    }
})


module.exports = router;