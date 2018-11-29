const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');

const mongoose = require('./config/mongoose'); // File that configures MongoDB
require('dotenv').config();

// Include the API routing
require('./api/routes.js')(app);

let httpServer = http.createServer(app);
//var httpsServer = https.createServer(credentials, app);

httpServer.listen(6200);
//httpsServer.listen(6201);
