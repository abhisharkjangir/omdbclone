var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AddMoviesSchema   = new Schema({
  Title : String,
  Year : String,
  imdbID : String,
  Type : String,
  Poster : String
});


module.exports = mongoose.model('movies', AddMoviesSchema);
