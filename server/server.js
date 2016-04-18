var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// serve client folder
app.use(express.static(__dirname + '/../client'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/../client/index.html');
});

var host = '127.0.0.1' // server.address.address;
var port = process.env.PORT || 3000 // server.address.port;

app.listen(port, function(){
	console.log('Listening on http://' + host + ':' + port);
});
