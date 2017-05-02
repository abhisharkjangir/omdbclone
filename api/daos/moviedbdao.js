var movies = require('../models/movie');

var AddNewMovieDao = function (body) {
  var movie = new movies();
  movie.Title = body.Title;
  movie.Year = body.Year;
  movie.imdbID = body.imdbID;
  movie.Type = body.Type;
  movie.Poster = body.Poster;
  return new Promise(function (resolve,reject) {
    movie.save().then(data =>
      resolve(data))
    .catch(err =>
      reject(err))
  });
}

var getMovieListDao = function () {
  return new Promise(function (resolve,reject) {
    movies.find().then(data =>
      resolve(data))
    .catch(err =>
      reject(err))
  });
}

var deleteMovieDao = function (movieId) {
  return new Promise(function (resolve,reject) {
    movies.remove({_id : movieId}).then(data =>
      resolve(data))
    .catch(err =>
      reject(err))
  });
}

var getMovieByIdDao = function (movieId) {
  return new Promise(function (resolve,reject) {
    movies.findById(movieId).then(data =>
      resolve(data))
    .catch(err =>
      reject(err))
  });
}

module.exports = {AddNewMovieDao,getMovieListDao,deleteMovieDao,getMovieByIdDao};
