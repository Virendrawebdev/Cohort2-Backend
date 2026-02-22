const express =require('express');
const app = express();
const cookieParser =require('cookie-parser')
const authRouter =require('./routes/auth.routes')
const postRouter =require('./routes/post.routes')

app.use(cookieParser()) //middleware cookie parser use karne ke liye
app.use(express.json());  //middleware req.body main data lane ke liye
app.use("/api/auth",authRouter) //authRouter ko app main use karne ke liye
app.use("/api/posts",postRouter) //postRouter ko app main use karne ke liye
module.exports = app;