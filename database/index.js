const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({

  repo_owner: String,
  repo_name: String,
  url: {type: String, unique: true},
  forks_count: Number
  // TODO: your schema here!
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  return new Promise((resolve, reject) => {
    var count = 0;
    repos.map(repo => {
      console.log(repo)
      var repoToSave = new Repo({
        repo_owner: repo.repo_owner,
        repo_name: repo.repo_name,
        url: repo.url,
        forks_count: repo.forks_count
      });

      repoToSave.save((err) => {
        count++;
        if(count === repos.length) {
          resolve('success');
        }
      });

    });
  })
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

};

var findRepos = function(cb) {
  Repo.find(function(err, repos) {
    if (err) {
      console.log('Err when finding repos', err)
    } else {
      cb(repos)
    }
  }).sort({forks_count: -1}).limit(25)
}

module.exports.save = save;
module.exports.findRepos = findRepos;