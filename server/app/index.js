var app = require('express')();
var fs = require('fs');

var users = [];

fs.readFile('app/users.json', 'utf8', (err, data) => {
  if (err) throw err;
  JSON.parse(data).forEach((user) => {
    users.push(user);
  });
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello world!\n');
});

app.get('/user', (req, res) => {
  res.json(users);
});

app.get('/user/:username', function (req, res) {
  var username = req.params.username;
  var user = users.filter((user) => user.username === username);
  res.json(user);
});

var server = app.listen(4000, () => {
  console.log('Server listening on port ', server.address().port);
});
