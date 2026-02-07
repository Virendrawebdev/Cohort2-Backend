/*
-server create karna
- server ko config karna
 */


const express = require('express')


const app =express()  /*server create ho jata hai.*/ 

app.use(express.json()) /*request body ko json format me parse karna.*/

const notes=[
    // {
    //     tirle:"test title 1",
    //     description:"test description 1"
    // }
]
app.get("/",(req,res)=>{
    res.send("hello world")
})

/*POST /notes*/
app.post("/notes",(req,res)=>{
    console.log(req.body) /*request body ko print karna.*/
    notes.push(req.body) /*request body ko notes array me push karna.*/
    console.log(notes) /*notes array ko print karna.*/
    res.send("note created") /*response bhejna.*/
})

/*GET /notes*/
app.get("/notes",(req,res)=>{
    res.send(notes) /*notes array ko response me bhejna.*/
})

/*DELETE /notes */
/*params*/ 
/*delte/notes/1*/ 
app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index] /*request params ko print karna.*/
    res.send("notes deleted suceessfully") /*notes array ko print karna.*/
})

/*PATCH /notes/:index */
app.patch("/notes/:index",(req,res)=>{
    // notes[req.params.index].title=req.body.title
    notes[req.params.index].description=req.body.description
    res.send("notes updated successfully")
})

module.exports =app /*server ko export karna.*/