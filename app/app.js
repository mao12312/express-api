// read library
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 3000;

let router = require('./routes/v1/');
app.use('/api/v1/', router);

// server start
app.listen(port);
console.log('listen on port ' + port);
