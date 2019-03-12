const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  charClass: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

// possibly add img avatar as buffer type

module.exports = mongoose.model('Character', characterSchema)
