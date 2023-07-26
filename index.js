const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT
const app = express()

app.get('/',(req,res) => { 
    res.send("Home page")
 })

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})