const mongoose = require('mongoose');


function connectTODb(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("connected to DB")
    })
}
module.exports = connectTODb;