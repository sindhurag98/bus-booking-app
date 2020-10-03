const mongoose = require('mongoose')

const Schema = mongoose.Schema
const busSchema = new Schema({
  travelsname : String,
  availability: Number,
  departure: String,
  traveldate:String,
  fare: Number,
  from:String,
  to:String,
})

module.exports=mongoose.model('bus',busSchema,'buses')
