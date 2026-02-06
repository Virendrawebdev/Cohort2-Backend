/*server ko start karna 
npx nodemon server.js*/


const app = require("./src/app")

app.listen(3000,()=>{
    console.log("server started at port 3000")
})