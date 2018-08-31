const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  let callback = function (err, res, body) {
    if (err) {
      throw err;
      return;
    }
    console.log('github res body', JSON.parse(body))
    let repoArr = JSON.parse(body);
    let cleanArr = repoArr.map((obj)=>{
      let cleanObj = {};
      cleanObj.name = obj.name;
      cleanObj.html_url = ob.html_url;
      console.log(cleanObj);
      return cleanObj;
    })

  }

  request(options, callback);

}

module.exports.getReposByUsername = getReposByUsername;