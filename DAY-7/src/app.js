/*
-server ko create karna
 */

const express = require("express")
const noteModel = require("./models/notes.model")

const app = express()
app.use(express.json()) /*ye isliye use krte hai taki hum req.body se data le ske. */
/*
-POST /notes
-req.body=>{title,description} 
*/
app.post("/notes", async(req,res)=>{
    const {title,description,age} = req.body

   const note = await noteModel.create({
        title,description,age
    })
    res.status(201).json({
        message:"Note created successfully",
        note
    })
})

/* 
-GET /notes
-fetch all notes Data
*/
app.get("/notes", async(req,res)=>{
    const notes = await noteModel.find()
    res.status(200).json({
        message:"All notes fetched successfully",
        notes
    })
})

module.exports =app