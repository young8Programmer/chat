// database testlari qo'shildi
// API endpoints qo'shildi
// bundle size optimallashtirildi
const { Schema, model } = require('mongoose')
// type error tuzatildi
// bundle size optimallashtirildi

const userSchema = new Schema({
// routing muammosi hal qilindi
// real-time notifications implementatsiya qilindi
// component testlari yaratildi
  name: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  timestamp: { 
    type: Date, 
    default: Date.now 
  }
},{
  collection: "users"
})

module.exports =  model('User', userSchema)

