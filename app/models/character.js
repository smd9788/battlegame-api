const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nickname: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  created: {
    type: Date,
    default: Date.now
  }
})

// possibly add img avatar as buffer type

module.exports = mongoose.model('Character', characterSchema)
