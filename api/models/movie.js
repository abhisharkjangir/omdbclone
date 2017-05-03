var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AddMoviesSchema   = new Schema({
  Title : String,
  Year : String,
  imdbID : String,
  Type : String,
  Poster : String
});


var movies = mongoose.model('movies', AddMoviesSchema);
var moviesdetails =   mongoose.model('moviesdetails', {});
module.exports = {
  movies,moviesdetails
};
