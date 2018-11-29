let mongoose = require('../../config/mongoose').mongoose; //Import the MongoDB mongoose config
let Schema = mongoose.Schema;

// create a schema
let messageSchema = new Schema({
  id: String,
  plot: Array,
  title: String
});

let messages = mongoose.model('messages', messageSchema);

module.exports = messages;
