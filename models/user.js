const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
  name : String,
  email: String,
  phone: Number,
  password: String,
  dob:Date,
  gender:String
})

module.exports=mongoose.model('user',userSchema,'users')
