import app from './src/app.js'

const port = process.env.PORT || 3000;

app.listen(port, (req, res)=>{
    console.log(`server is running on port ${port}`)
})