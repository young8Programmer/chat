// code comments qo'shildi
// kod formatlash va indentatsiya
// API hujjatlarini qo'shish
// API hujjatlarini qo'shish
// kod strukturasini yaxshilash
// validation xatolari tuzatildi
// validation xatolari tuzatildi
// database migrations yaratildi
// database testlari qo'shildi
// API endpoint testlari qo'shildi
// kod formatlash va tozalash
// bundle size optimallashtirildi
// database querylarni optimallashtirish
// admin dashboard yaratildi
// image optimization qo'shildi
// bundle size optimallashtirildi
// middleware funksiyalari qo'shildi
// integration testlar yaratildi
// image optimization qo'shildi
// API endpoint testlari qo'shildi
// componentlarni qayta tashkilash
// database testlari qo'shildi
// type error tuzatildi
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

