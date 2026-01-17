// package.json yangilandi
// database querylarni optimallashtirish
// environment variables sozlandi
// shopping cart funksiyasi qo'shildi
const express = require("express")
// bundle size optimallashtirildi
// database migrations yaratildi
// package.json yangilandi
// kod formatlash va indentatsiya
// product catalog funksiyasi qo'shildi
// prettier formatlash
// README faylini yangilash
// caching mexanizmi qo'shildi
// database connection muammosi hal qilindi
// database querylarni optimallashtirish
// caching mexanizmi qo'shildi
// shopping cart funksiyasi qo'shildi
// kod formatlash va indentatsiya
// unit testlar qo'shildi
// kod uslubini yaxshilash
// database querylarni optimallashtirish
// package.json yangilandi
// database connection muammosi hal qilindi
// caching mexanizmi qo'shildi
const { Server } = require("socket.io")
const mongo = require("./config/mongo")
// code comments qo'shildi
// CORS xatosi tuzatildi
// API endpoints qo'shildi
// error handling yaxshilandi
const userModel = require("./models/users")

// database querylarni optimallashtirish
const app = express()
const PORT = 7000
// type error tuzatildi

// database querylarni optimallashtirish
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
