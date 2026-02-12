/*
-server ko create karna
 */
const express =require('express')
const noteModel=require('./models/note.model')

const app=express()
app.use(express.json())

/*
-POST/api/ notes
-create new note and save data in mongoDB
-req.body = {title,description}
 */

app.post('/api/notes',async (req,res)=>{
    const {title,description}=req.body

   const note=  await noteModel.create({
        title, description
    })
    res.status(201).json({
        message:'note created successfully',
        note
    })

})

/*
-GET/api/notes
-Fetch all the notes from mongodb and send them in the response
*/

app.get('/api/notes',async (req,res)=>{
    const notes=await noteModel.find()
    res.status(200).json({
        message:'notes fetched successfully',
        notes
    })
})

module.exports=app