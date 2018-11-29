var mongoose = require('mongoose');
require('dotenv').config();

// Connect to the db
mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true}, function (err, db) {
	if(err) throw err;
});

module.exports.mongoose = mongoose;
