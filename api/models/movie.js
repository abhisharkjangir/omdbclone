var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AddMoviesSchema   = new Schema({
  Title : String,
  Year : String,
  imdbID : String,
  Type : String,
  Poster : String
});

var movies = mongoose.model('movies', AddMoviesSchema);//"movies" collection in your db
var moviesdetails =   mongoose.model('moviesdetails', {});//"moviesdetails" collection in your db

module.exports = {
  movies,moviesdetails
};
