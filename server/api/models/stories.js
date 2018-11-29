let mongoose = require('../../config/mongoose').mongoose; //Import the MongoDB mongoose config
let Schema = mongoose.Schema;

// create a schema
let storiesSchema = new Schema({
  id: String,
  plot: Array,
  title: String
});

let stories = mongoose.model('stories', storiesSchema);

module.exports = stories;
