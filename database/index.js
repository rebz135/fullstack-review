const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  name: {type: String, unique: true},
  html_url: String,
  updated_at: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoArr) => {
  repoArr.forEach((repo)=>{
  	let tempRepo = new Repo({name: repo.name, html_url: repo.html_url, updated_at: repo.updated_at})
  	console.log(repo);
  	tempRepo.save(function(err, tempRepo) {
  		if (err) {
  			return console.error(err);
  		}
  		console.log('repo saved!', tempRepo)
  	})
  })
}

module.exports.save = save


//WHY CAN'T WE USE HTML URL AS UNIQUE?