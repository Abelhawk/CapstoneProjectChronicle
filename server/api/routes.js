let characters = require('./models/characters.js');
let messages = require('./models/messages.js');
let stories = require('./models/stories.js');
bodyParser = require('body-parser');

module.exports = function(app) {
	// Add the headers
	app.use(function (req, res, next) {

	    // Website you wish to allow to connect
	    // let allowedOrigins = ['http://127.0.0.1:8080', 'http://localhost:8080', 'https://127.0.0.1:8080', 'https://localhost:8080'];
		// let origin = req.headers.origin;
		// console.log(origin); //todo: remove debug
		// if(allowedOrigins.indexOf(origin) > -1){
		// 	res.setHeader('Access-Control-Allow-Origin', origin);
		// }

		res.setHeader('Access-Control-Allow-Origin', "*");
	    // Request methods you wish to allow
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	    // Request headers you wish to allow
	    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	    // Set to true if you need the website to include cookies in the requests sent
	    // to the API (e.g. in case you use sessions)
	    res.setHeader('Access-Control-Allow-Credentials', true);

	    // Pass to next layer of middleware
	    next();
	});

	// parse application/json
	app.use(bodyParser.json());

	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: true }));

	app.post('/character', function(request, response){
		let newCharacter = new characters(request.body);

		newCharacter.save(function(err) {
			if (err) throw err;

			response = request.body;
			console.log('Character saved successfully!');
		});
	});
};
