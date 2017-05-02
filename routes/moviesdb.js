var express = require('express');
var router = express.Router();

var {addNewMovie,getMovieList,deleteMovieById,getMovieById} = require('../api/handlers/moviedbhandlers');

router.post('/movie/add',addNewMovie);
router.get('/movie/list',getMovieList);
router.delete('/movie/:movieId',deleteMovieById);
router.get('/movie/:movieId',getMovieById);

module.exports = router;
