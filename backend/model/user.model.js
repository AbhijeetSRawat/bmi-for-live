const mongoose = require('mongoose')
const UserModel = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    city: String,
    conformpasswors: String
  },
  {
    timestamps: true
  }
)
module.exports = mongoose.model('Anuj', UserModel)