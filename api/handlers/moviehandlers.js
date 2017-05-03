var {MovieByNameDao,MovieCloneDao} = require('../daos/moviedao');
var RequestHelper = require('../helpers/request');

var movieByName = function (req,res) {
  MovieByNameDao(req.params.title)
  .then(data => res.send(RequestHelper(true, 'Success', data, [])))
  .catch(err => res.send(RequestHelper(false)))
};


var cloneOmdb = function (req,res) {
  MovieCloneDao()
  .then(function (data) {
    var movieArr = [];var movieArr1 = [];var movieArr2 = [];
    var sArr = [];
    var arrList = [];
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < data[i].length; j++) {
        movieArr.push(data[i][j]);
      }
    }
    for (var k = 0; k < movieArr.length; k++) {
      movieArr1.push(movieArr[k].Search);
    }
    for (var l = 0; l < movieArr1.length; l++) {
      for (var m = 0; m < movieArr1[l].length; m++) {
        movieArr2.push(movieArr1[l][m]);
      }
    }
    res.send(RequestHelper(true, 'Success', movieArr2, []))
  })
  .catch(err => console.log(err))
};

module.exports = {movieByName,cloneOmdb};
