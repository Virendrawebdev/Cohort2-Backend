/*Server ko create karna 
Server ko config karna */

const  express= require("express")
const app = express()/*Server create ho chuka hai */
app.use(express.json())  /*Middleware use karna taki hum request body ko access kar sake */

 const notes =[]  /*Data store karne ke liye array ka use kar rahe hai */
  /*API create karna */
  /*POST /notes */
  app.post("/notes",(req,res)=>{
    // console.log(req.body) /*Request body ko console me print karna */
    notes.push(req.body) /*Request body ko notes array me push karna */
    res.status(201).json({message:"Note created successfully"}) /*Response bhejna */
  })

  /*GET /notes Server side ka data client ke liye bhejna */
  app.get("/notes",(req,res)=>{
    res.status(200).json({notes:notes}) /*Notes array ko response me bhejna */
  })

  /*DELETE /notes/:index */
  app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index] /*Notes array me se index ke hisab se note ko delete karna */
    res.status(200).json({message:"Note deleted successfully"}) /*Response bhejna */
  })

  /*PATCH /notes/:index */
app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description = req.body.description /*Notes array me se index ke hisab se note ko update karna */
    res.status(200).json({message:"Note updated successfully"}) /*Response bhejna */
  })

 

module.exports = app