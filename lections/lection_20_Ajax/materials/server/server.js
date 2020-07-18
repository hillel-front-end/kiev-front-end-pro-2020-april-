var express = require('express');
var fs = require('fs');
var app = express(); 
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

const port = 3005;
 
app.listen(port, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
    console.log(`Example app listening on port http://localhost:${port}/`);
});

// http://localhost:3003/
const data = [
	123 , 123, 123, 123
];

app.get('/auth', function(req, res) {
    res.send({id: '1a%6ca56'});
})


// http://localhost:3003/users

const users = [
	{
		name: 'Valera',
		age: 25,
		sex: 'm',
		id: '1231d212d12d12d'
	},
	{
		name: 'Pety',
		sex: 'ж',
		age: 18,
		id: '11k12k12k1212k2'
	},
	{
		name: 'Pety',
		sex: 'ж',
		age: 18,
		id: '11k12k12k1212k2'
	}

];

app.get('/candidates', function(req, res) {
	console.log(req.params.id, 'query');
	// const {maxAge, minAge} = req.query.minAge;

	// console.log(maxAge, minAge, 'maxAge - minAge');

	// const filterUsers = users.filter(({age}) => age >= minAge && age <= maxAge);
	res.send(JSON.stringify(users));
})

//http://localhost/user/asdasdasd
app.get('/user/:id', (req, res) => {
	let status = 200;
	let params = req.params
	
	console.log(params, 'params');

	res
	.status(status)
	.send('ok');
});


app.post('/', function(req, res) {
    console.log('hello path / -->> post', req.body);
    const {id , name} = req.body;
    const data2 = req.body;

    console.log(id, name, 'from client');

    res.send(JSON.stringify(data2));
})


app.post('/user-auth', function(req, res) {
	const {login, password} = JSON.parse(req.body);

	fs.readFile('./users.json', 'utf8', function(error, data) {
		const users = JSON.parse(data);
		const isDefined = users.some(user => user.login == login);
		
		res.send({
			isDefined: true
		});
	})


})


app.get('/briz', (req, res) => {
	res.send({text: 'briz'});
});

app.get('/freez', (req, res) => {
	res.send({text: 'freez'});
});

app.get('/foo', (req, res) => {
	res.status(501);
	res.send({text: 'foo'});

});

// MVC

// MODEL
// VIEW
// CONTROLLER