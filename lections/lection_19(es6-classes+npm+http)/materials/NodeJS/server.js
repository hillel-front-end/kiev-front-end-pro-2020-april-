var express = require('express'); 
var fs = require('fs');
var app = express(); 
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

const port = 3003;

app.listen(port, function () { 
    console.log(`Example app listening on port http://localhost:${port}/`);
});

//------------------------------------------- end config ---------------------------


// http://localhost:3003/
const data = [
    123 , 123, 123, 123
];

app.get('/', function(req, res) {
    console.log('hello path /');

    res.send(JSON.stringify(data));
})


// http://localhost:3003/users

app.get('/users', function(req, res) {
    console.log('hello path /users');

    res.send(JSON.stringify(data));
})


app.post('/', function(req, res) {
    console.log('hello path / -->> post', req.body);
    const {id , name} = req.body;
    const data2 = req.body;

    console.log(id, name, 'from client');

    res.send(JSON.stringify(data2));
})





