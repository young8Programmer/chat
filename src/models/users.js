const { Schema, model, Collection } = require('mongoose')

const userSchema = new Schema({
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

