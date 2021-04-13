const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: {type: String, required: true, unique: true},
  name: String,
  image: String
});

module.exports = mongoose.model('Users', usersSchema);
