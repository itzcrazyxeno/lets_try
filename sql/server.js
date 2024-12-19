//imports
const express=require("express")
app=express()
const cors = require("cors")
const port = process.report.port || 3002
const mysql = require("mysql2")


//create server 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    "extended":false
}))

const controller = require("./controller/controller")
app.use(controller)

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
})

//create mysql connection & pool


//create controller-CRUD functionalities

