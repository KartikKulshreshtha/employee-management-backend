const express = require('express')
const router = express.Router();
const connection = require('../../dbConfig');

router.post('/', async (req, res) => {
    try {
        const { name, email, phone, department, position } = req.body;
        const query = 'INSERT INTO employees (name, email, phone, department, position) VALUES (?,?, ?, ?, ?)';
        connection.query(query, [name, email, phone, department, position], (err, result) => {
            if(err){
                return res.status(500).json({success: false, message: "Error Occured"})
            }
            else{
                return res.status(200).json({success: true, message: "Employee added successfully"})
            }
        }) 
    } catch (error) {
        return res.status(500).json({success: false, message:"Internal Server Error"})
    }
})

module.exports = router;