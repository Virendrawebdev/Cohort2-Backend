const mongoose = require("mongoose")
function connectToDb(){
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected to db")
})
}

module.exports = connectToDb 


/*npm i dotenv
require("dotenv").config()  isse hum .env file se data le skte hai. 
process.env.MONGO_URI  isse hum .env file me se MONGO_URI ka value le skte hai.  */
