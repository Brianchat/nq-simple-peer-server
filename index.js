const PORT = 8081
const http = require('http');
const SimplePeerServer = require('simple-peer-server');

const server = http.createServer();
const spServer = new SimplePeerServer(server, true);

// const io = require('socket.io')(server);
// const socketByPeerId = new Map();
// const socketsByRoom = new Map();
// io.on('connection', function (socket) {
//     socket.on('signal', (message) => {
//         socketByPeerId.get(message.to).emit('signal', message);
//     });
//     socket.on('join', (message) => {
//         if (!socketsByRoom.has(message.room)) {
//             console.log('START NEW ROOM: ' + message.room);
//             socketsByRoom.set(message.room, []);
//         }
//         socketsByRoom.get(message.room).push({
//             socket,
//             peerId: message.peerId
//         });
//         socketByPeerId.set(message.peerId, socket);
//         const roomPeerIds = socketsByRoom.get(message.room).map((row) => row.peerId);
//         socketsByRoom.get(message.room).forEach((row) => {
//             row.socket.emit('joined', roomPeerIds);
//         });
//     });
// });

server.listen(PORT);
console.log( "Server started" )


// // require expressjs
// const express = require("express")
// const app = express()

// app.use(express.json())
// // use router to bundle all routes to /
// const router = express.Router()
// app.use("/", router)
// // get on root route 
// router.get("/", (req,res) => {
// 	res.send("hello world!")
// })
// // start server
// app.listen(PORT, () => {
// 	console.log("Server is up and running!!")
// })