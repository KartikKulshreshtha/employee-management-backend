const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes/routes');
const mysql = require('mysql')
const { configDotenv } = require('dotenv');
configDotenv()

const app = express()
const port = process.env.PORT || 8000;
app.use(cors())
app.use("/api", routes);

// const connection = mysql.createConnection({
//     host: "localhost",
//     port: "3309",
//     user: "root",
//     password: "",
//     database: "employeesmanagement",
// })


// connection.connect(function (err) {
//     if (err) {
//         console.log("Error in the connection")
//         console.log(err)
//     }
//     else {
//         console.log(`Database Connected`)
        
//     }
// })

app.use(bodyParser.json());
app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`) 
})