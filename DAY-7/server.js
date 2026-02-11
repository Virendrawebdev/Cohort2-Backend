/*
-serverko start karna
database se connect karna
 */
require("dotenv").config() /*ye isliye use krte hai taki hum .env file se data le ske. */
const app= require("./src/app")
// const mongoose =require("mongoose")
const connectToDb = require("./src/config/db")

connectToDb()


app.listen(3000,()=>{
    console.log("server is running at port 3000")
})