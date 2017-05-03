var express = require('express');
var router = express.Router();

var {movieByName,cloneOmdb} = require('../api/handlers/moviehandlers');

router.get('/movie/:title',movieByName);
router.get('/clone',cloneOmdb);
module.exports = router;
