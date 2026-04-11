import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import authRouter from './routes/auth.routes.js';



const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(morgan('dev'));


app.get("/", (req,res)=>{
    res.status(200).json({
        message:"Welcome to Snitch API"
    })
})

app.use("/api/auth", authRouter);

export default app;