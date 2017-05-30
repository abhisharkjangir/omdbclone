var express = require('express');
var router = express.Router();

var {getMovieBySearchTerm,addNewMovie,getMovieList,deleteMovieById,getMovieById,getMovieByImdbId} = require('../api/handlers/moviedbhandlers');
router.post('/movie/add',addNewMovie);
router.get('/movie/list',getMovieList);
router.delete('/movie/:movieId',deleteMovieById);
router.get('/movie/:imdbId',getMovieByImdbId);
router.get('/movie/search/:searchTerm',getMovieBySearchTerm);

module.exports = router;
