const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 100 },
  password: { type: String, required: true, maxlength: 100 },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;