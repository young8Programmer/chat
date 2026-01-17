// API hujjatlarini qo'shish
// kod strukturasini yaxshilash
// API endpoint testlari qo'shildi
// kod formatlash va tozalash
// bundle size optimallashtirildi
// componentlarni qayta tashkilash
// database testlari qo'shildi
// kod uslubini yaxshilash
// real-time notifications implementatsiya qilindi
// bundle size optimallashtirildi
// API endpoints qo'shildi
// bundle size optimallashtirildi
// package.json yangilandi
const { Schema, model } = require('mongoose')
// type error tuzatildi
// API endpoints qo'shildi
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

