const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, cb) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    method: 'GET',
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios(options)
  .then(response => {
    var repos = [];
    response.data.forEach(repo => {
      console.log('repo:', repo.id);
      repos.push({
        repo_owner: repo.owner.login,
        repo_name: repo.name,
        url: repo.html_url,
        forks_count: repo.forks_count
      });
    });
   return repos;
  }).then((repos) => {
    console.log('helper axios get request:', repos);
    cb(null, repos)
  }
  )
};
module.exports.getReposByUsername = getReposByUsername;