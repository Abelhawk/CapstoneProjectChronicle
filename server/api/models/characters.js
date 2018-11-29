let mongoose = require('../../config/mongoose').mongoose; //Import the MongoDB mongoose config
let Schema = mongoose.Schema;

// create a schema
let characterSchema = new Schema({
  appearance: String,
  bio: String,
  gender: String,
  gold: Number,
  id: String,
  inventory: Array,
  name: String
});

let characters = mongoose.model('character', characterSchema);

module.exports = characters;
