const express = require('express');
const connection = require('../../dbConfig');
const router = express.Router();

router.put('/:email', async (req, res) => {
    try {
        const { name, email, phone, department, position } = req.body;
        const userEmail = req.params.email;
        const sqlQeury = "UPDATE employees SET name = ?, email = ?, phone = ?, department = ?, position = ? where email = ?";
        connection.query(sqlQeury, [name, email, phone, department, position, userEmail], (err, result) => {
            if (err) {
                return res.status(500).json({ success: false, message: "Error Occured" })
            }
            else {
                return res.status(200).json({ success: true, message: "Employee Updated Successfully" })
            }
        })
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server Error" })
    }
})


module.exports = router;