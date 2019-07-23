const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, "/../public")
const port = process.env.PORT || 3000 
let app = express();
let server = http.createServer(app)
let io = socketIO(server)

app.use(express.static(publicPath));

// io.on('connection', (socket)=>{
//     console.log("a new user just connected")
// })

server.listen(port, ()=>{
    console.log(`server is up on port ${port}`)
})

io.sockets.on('connection', (socket)=>{
    console.log('new connection id: ' + socket.id)

    socket.on('mando-left', (data)=>{
        io.sockets.emit('mando-left-serveremiter', data);
    })
    socket.on('mando-top', (data)=>{
        io.sockets.emit('mando-top-serveremiter', data);
    })
    socket.on('mando-right', (data)=>{
        io.sockets.emit('mando-right-serveremiter', data);
    })
    socket.on('mando-bottom', (data)=>{
        io.sockets.emit('mando-bottom-serveremiter', data);
    })
    socket.on('btn-a', (data)=>{
        io.sockets.emit('btn-a-serveremiter', data);
    })
    socket.on('btn-b', (data)=>{
        io.sockets.emit('btn-b-serveremiter', data);
    })
})
