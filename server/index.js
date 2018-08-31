const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const {getReposByUsername} = require('../helpers/github.js')
const {save} = require('../database/index.js')

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
	console.log('Post req received!', req.body)

	let callback = (err, response, body) => {
    if (err) {
      throw err;
      return;
    }
    let repoArr = JSON.parse(body);
    let cleanArr = repoArr.map((obj)=>{
      let cleanObj = {};
      cleanObj.name = obj.name;
      cleanObj.html_url = obj.html_url;
      cleanObj.updated_at = obj.updated_at;
      return cleanObj
    })
    res.send(cleanArr);
    save(cleanArr);
  }


	getReposByUsername('rebz135', callback)


  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
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

