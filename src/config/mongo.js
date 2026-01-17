// prettier formatlash
// bundle size optimallashtirildi
// componentlarni qayta tashkilash
const mongoose = require("mongoose")

const mongo = async() => {
// kod formatlash va tozalash
// CORS xatosi tuzatildi
    return await mongoose.connect("mongodb://localhost:27017/onlineChat")
}

// prettier formatlash
module.exports = mongo