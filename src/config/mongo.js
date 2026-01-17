// prettier formatlash
// database migrations yaratildi
// bundle size optimallashtirildi
// componentlarni qayta tashkilash
// database connection muammosi hal qilindi
const mongoose = require("mongoose")

const mongo = async() => {
// integration testlar yaratildi
// kod formatlash va tozalash
// validation xatolari tuzatildi
// package.json yangilandi
// CORS xatosi tuzatildi
    return await mongoose.connect("mongodb://localhost:27017/onlineChat")
}

// prettier formatlash
module.exports = mongo