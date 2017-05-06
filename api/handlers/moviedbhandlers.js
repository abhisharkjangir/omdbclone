var {AddNewMovieDao,getMovieListDao,deleteMovieDao,getMovieByIdDao,getMovieByOmdbIdDao} = require('../daos/moviedbdao');
var RequestHelper = require('../helpers/request');

var addNewMovie = function (req,res) {
  AddNewMovieDao(req.body)
  .then(data => res.send(RequestHelper(true, 'Success', data, [])))
  .catch(err => res.send(RequestHelper(false)))
};

var getMovieList = function (req,res) {
  getMovieListDao()
  .then(data => res.send(RequestHelper(true, 'Success', data, [])))
  .catch(err => res.send(RequestHelper(false)))
}

var deleteMovieById = function (req,res) {
  deleteMovieDao(req.params.movieId)
  .then(data => res.send(RequestHelper(true, 'Success', data, [])))
  .catch(err => res.send(RequestHelper(false)))
}

var getMovieById = function (req,res) {
  getMovieByIdDao(req.params.movieId)
  .then(data => res.send(RequestHelper(true, 'Success', data, [])))
  .catch(err => res.send(RequestHelper(false)))
}

var getMovieByImdbId = function (req,res) {
  getMovieByOmdbIdDao(req.params.imdbId)
  .then(data => res.send(RequestHelper(true, 'Success', data, [])))
  .catch(err => res.send(RequestHelper(false)))
}

module.exports = {addNewMovie,getMovieList,deleteMovieById,getMovieById,getMovieByImdbId};
