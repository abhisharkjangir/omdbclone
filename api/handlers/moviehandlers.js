var MovieByNameDao = require('../daos/moviedao');
var RequestHelper = require('../helpers/request');

var movieByName = function (req,res) {
  MovieByNameDao(req.params.title)
  .then(data => res.send(RequestHelper(true, 'Success', data, [])))
  .catch(err => res.send(RequestHelper(false)))
};



module.exports = movieByName;
