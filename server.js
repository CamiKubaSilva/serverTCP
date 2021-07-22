const net = require("net");

const server = net.createServer()

server.on("connection", (socket)=>{
  socket.on("data", (data)=>{
    console.log("Message received from client:" + data)
    socket.write("Received")
  })

  socket.on("close", ()=>{
    console.log("Communication ended")
  })

  socket.on("error", (error)=>{
    console.log(error.message)
  })
})

server.listen(8080, ()=>{
  console.log("Server is listening on port:", server.address().port, "and IP:", server.address().address)
})