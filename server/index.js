const express = require('express');
let {getReposByUsername} = require('../helpers/github');
const {save, findRepos} = require('../database/index.js');
let app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.post('/repos', function (req, res) {
   let gitHubname = req.body.username;
   if (!gitHubname) {
    res.sendStatus(400);
    return ;

   }


  getReposByUsername(gitHubname, (err, repos) =>{
    if (err) {
      res.sendStatus(500);
      console.log(err);
    } else {
      save(repos);
      res.end();

    }
  });
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {


  // TODO - your code here!
  // This route should send back the top 25 repos find()
    // findRepos().then(repos => {
    //   res.send(repos);
    // })
    // .catch(err => {
    //   console.log(err);
    // });
    findRepos((repos) => {
      console.log('app.get request:', repos)
      res.send(repos);
    });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

