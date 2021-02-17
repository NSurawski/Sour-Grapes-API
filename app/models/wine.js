const mongoose = require('mongoose')

// replace with wine model
const wineSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  grape: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Wine', wineSchema)
