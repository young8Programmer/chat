const socket = io("https://chat-p0lw.onrender.com")
let name = ""
while (!name) {
  name = prompt("Ismingizni kiriting")
}

let chatMessages = document.querySelector(".chat-messages")
let messageForm = document.querySelector(".message-form")
let input = document.querySelector(".input")
let typing = document.querySelector(".typing")
let countChat = document.querySelector(".chat-title-status-text")

socket.emit("new-user", name)

messageForm.addEventListener("submit", (e) => {
  e.preventDefault()
  let text = input.value
  input.value = ""
  let p = document.createElement("p")
  p.textContent = `Siz: ${text}`
  p.classList.toggle("message")
  chatMessages.append(p)
  socket.emit("user-message", { name, text })
})

input.addEventListener("input", () => {
  socket.emit("typing-user", name)
})

socket.on("welcome", (yourName) => {
  if (yourName === name) {
    let p = document.createElement("p")
    p.textContent = `Siz guruhga qo'shildingiz`
    p.classList.toggle("success")
    chatMessages.append(p)
  }
})

socket.on("user-connected", (otherName) => {
  if (otherName !== name) {
    let p = document.createElement("p")
    p.textContent = `${otherName} guruhga qo'shildi`
    p.classList.toggle("success")
    chatMessages.append(p)
  }
})

socket.on("user-left", (name) => {
  let p = document.createElement("p")
  p.textContent = `${name} guruhdan chiqdi`
  p.classList.toggle("user-left")
  chatMessages.append(p)
})

socket.on("typing-user-send", (name) => {
  typing.textContent = `${name} yozmoqda...`
  setTimeout(() => {
    typing.textContent = ""
  }, 2000)
})

socket.on("user-message-send", ({ name, text }) => {
  let p = document.createElement("p")
  p.textContent = `${name}: ${text}`
  chatMessages.append(p)
})

socket.on("user-count", ({ count }) => {
  countChat.textContent = `Foydalanuvchilar: ${count}`
})
