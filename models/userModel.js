// models/userModel.js
const mongoose = require('mongoose');

const SocialHandlesSchema = new mongoose.Schema({
  twitter: String,
  facebook: String,
  instagram: String,
  github: String
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  socialHandles: {
    type: SocialHandlesSchema,
    default: {}
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  profilePicture: String,
  uniqueUserID: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('User', UserSchema);
