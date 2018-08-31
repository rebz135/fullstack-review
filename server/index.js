const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const {getReposByUsername} = require('../helpers/github.js')

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
	console.log('Post req received!', req.body)
	getReposByUsername('rebz135')


  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  res.send();
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  res.send();
});

let port = 1129;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

