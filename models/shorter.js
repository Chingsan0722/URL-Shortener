const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shorterSchema = new Schema({
  shortUrl: {
    type: String,
    required: true
  },
  userUrl:{
    type: String,
    required: true
  }
})
module.exports = mongoose.model('Shorter', shorterSchema)