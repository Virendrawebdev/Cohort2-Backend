const mongoose = require("mongoose")


const noteSchema = new mongoose.Schema({
    title:String,
    description:String,
    age:Number   /*this is process is known as schema create hota ye format batane k liye */
})


const noteModel = mongoose.model("note",noteSchema) /*this is process is known as model create hota hai operation perform krne k liye. */

module.exports = noteModel