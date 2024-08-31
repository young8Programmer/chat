const express = require("express")
const { Server } = require("socket.io")
const mongo = require("./config/mongo")
const userModel = require("./models/users")

const app = express()
const PORT = 7000

app.use(express.static(__dirname + "/public"))

mongo()
  .then(() => console.log("DB connect"))
  .catch((err) => console.log(err))

const server = app.listen(PORT, () => {
  console.log(`Server ${PORT} portda ishga tushdi`)
})

const io = new Server(server)
let users = 0

io.on("connection", (socket) => {
  users++
  console.log(`User connected: ${socket.id}`)

  socket.on("new-user", async (name) => {
    socket.name = name
    const userMessages = await userModel.find({}, "name message -_id")
    io.emit("user-connected", name)
    io.emit("user-count", { count: users })
    socket.emit("xush kelibsiz", { yourName: name, messages: userMessages })
  })

  socket.on("disconnect", () => {
    users--
    io.emit("user-left", socket.name || "User")
    io.emit("user-count", { count: users })
  })

  socket.on("user-message", async ({ name, text }) => {
    await userModel.create({ name, message: text })
    socket.broadcast.emit("user-message-send", { name, text })
  })

  socket.on("typing-user", (name) => {
    socket.broadcast.emit("typing-user-send", name)
  })
})
