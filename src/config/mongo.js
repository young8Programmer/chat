// componentlarni qayta tashkilash
const mongoose = require("mongoose")

const mongo = async() => {
    return await mongoose.connect("mongodb://localhost:27017/onlineChat")
}

// prettier formatlash
module.exports = mongo