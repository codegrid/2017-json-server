var http = require('http');
var connect = require('connect');
var bodyParser = require('body-parser');
var apimock = require('apimock-middleware');
var app = connect();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(apimock('apimock.yml'));
http.createServer(app).listen(3000);
