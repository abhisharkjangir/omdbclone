var express = require('express');
var router = express.Router();

var movieByName = require('../api/handlers/moviehandlers');

router.get('/movie/:title',movieByName);

module.exports = router;
