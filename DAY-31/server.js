import app from "./src/app.js";
import { createServer } from 'http';
import { Server } from "socket.io";


const httpServer = createServer(app);
const io =new Server(httpServer, {});

io.on("connection", (socket)=>{
    console.log("new connection created")

    socket.on("message", (msg)=>{
        console.log("socket io on fire")
        console.log(msg)
        io.emit("abc")
    })
});


httpServer.listen(3000, ()=>{
    console.log("server running on port 3000")
});


//io => server
//socket =>single user
//on =>event ko listen
//emit => event ko fire


//socket.emit()
//socket.broadcast().emit()
//io.emit()