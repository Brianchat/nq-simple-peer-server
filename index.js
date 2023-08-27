// const http = require('http');
// const SimplePeerServer = require('simple-peer-server');

// const server = http.createServer();
// const spServer = new SimplePeerServer(server, true);

// server.listen(8081);


// require expressjs
const express = require("express")
const app = express()
// define port 8080
PORT = 8081
app.use(express.json())
// use router to bundle all routes to /
const router = express.Router()
app.use("/", router)
// get on root route 
router.get("/", (req,res) => {
	res.send("hello world!")
})
// start server
app.listen(PORT, () => {
	console.log("Server is up and running!!")
})