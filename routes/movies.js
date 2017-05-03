var express = require('express');
var router = express.Router();

var {movieByName,cloneOmdb,cloneOmdbMovies} = require('../api/handlers/moviehandlers');

router.get('/movie/:title',movieByName);
router.get('/clone',cloneOmdb);
router.post('/cloneMovies',cloneOmdbMovies);

module.exports = router;
