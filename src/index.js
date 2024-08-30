const express = require("express")
const { Server } = require("socket.io")
const app = express()
const PORT = 7000

app.use(express.static(__dirname + "/public"))
3
const server = app.listen(PORT, () => {
  console.log(`Server ${PORT} portda ishga tushdi`)
})

const io = new Server(server)
let users = 0

io.on("connection", (socket) => {
  users++
  console.log(`User connected: ${socket.id}`)
  
  socket.on("new-user", (name) => {
    socket.name = name
    io.emit("user-connected", name)
    io.emit("user-count", { count: users })
    socket.emit("welcome", name)
  })

  socket.on("disconnect", () => {
    users--
    io.emit('user-left', socket.name || 'User')
    io.emit('user-count', { count: users })
  })

  socket.on("user-message", ({ name, text }) => {
    socket.broadcast.emit("user-message-send", { name, text })
  })

  socket.on("typing-user", (name) => {
    socket.broadcast.emit("typing-user-send", name)
  })
})
