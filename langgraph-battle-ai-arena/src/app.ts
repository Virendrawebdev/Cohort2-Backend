import express from 'express';
import runGraph from './ai/graph.ai.js'


const app = express();

app.get("/", async (req, res)=>{
    const result =await runGraph("what is langgraph? explain in 5 words.")
    res.json(result)
})




export default app;

