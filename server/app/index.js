var app = require('express')();
var fs = require('fs');

var users = [];

// var compareUsernames = (user1, user2, sorting) => {
//   var name1 = a.username.toUpperCase();
//   var name2 = b.username.toUpperCase();
//   if (name1 < name2) {
//     return -1;
//   }
//   if (name1 > name2) {
//     return 1;
//   }
//   return 0;
// }

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
  res.json({greeting: 'Hello World!'});
});

app.get('/user', (req, res) => {
  res.json(users);
});

app.get('/user/:gender', (req, res) => {
  var gender = req.params.gender;
  // var sorting = req.params.sorting;
  var result = users
    .filter(user => user.gender === gender);
    // .sort((user1, user2) => compareUsernames(user1, user2, sorting));
  res.json(result);
});

app.get('/user/:username', function (req, res) {
  var username = req.params.username;
  var user = users.filter((user) => user.username === username);
  res.json(user);
});

var server = app.listen(4000, () => {
  console.log('Server listening on port ', server.address().port);
});
