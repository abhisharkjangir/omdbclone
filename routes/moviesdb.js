var express = require('express');
var router = express.Router();

var {
  addNewMovie,
  getMovieList,
  deleteMovieById,
  getMovieById,
  getMovieByImdbId,
  searchMovieByName
} = require('../api/handlers/moviedbhandlers');

router.post('/movie/add', addNewMovie);
router.get('/movie/list', getMovieList);
router.delete('/movie/:movieId', deleteMovieById);
router.get('/movie/:movieId', getMovieById);
router.get('/movie/imdb/:imdbId', getMovieByImdbId);
router.get('/movie/search/:searchterm', searchMovieByName);

module.exports = router;
