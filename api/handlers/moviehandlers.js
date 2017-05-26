var {MovieByNameDao,MovieCloneDao,getMoviesDetailByIDFromOmdb} = require('../daos/moviedao');
var {insertMultipleMovieDao,getMovieListDao,addNewMovieDetailsDao} = require('../daos/moviedbdao');
var RequestHelper = require('../helpers/request');

var movieByName = function (req,res) {
  MovieByNameDao(req.params.title)
  .then(data => res.send(RequestHelper(true, 'Success', data, [])))
  .catch(err => res.send(RequestHelper(false, 'Success', err, [])))
};

var cloneOmdb = function (req,res) {
  MovieCloneDao()//Get Movies list by from OMDB API
  .then(function (data) {
    insertMultipleMovieDao(processData(data))//Inset Movies List in your DB
    .then(function (result) {
    })
      res.send(RequestHelper(true, 'Success',result, []))
    .catch(err => console.log(err))
  })
  .catch(err => console.log(err))
};

function processData(data) {
  var movieArr = [];
  var movieArr1 = [];
  var movieArr2 = [];
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
  return movieArr2;
};

var cloneOmdbMovies = function (req,res) {
  getMovieListDao(req.body.from,req.body.limit)//Get Movies from your DB to get imdbID
  .then(function (result) {
    var imdbIDList = [];
    result.forEach(function (movie) {
      imdbIDList.push(movie.imdbID);
    })
    getMoviesDetailByIDFromOmdb(imdbIDList).then(function (data) {//Get Movies Details by imdbID
      addNewMovieDetailsDao(data)//Save Movies details in your DB
      .then(function (response) {
        res.send(RequestHelper(true, 'Success',response, []))
      })
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  })
  .catch(err => console.log(err))
}

module.exports = {movieByName,cloneOmdb,cloneOmdbMovies};
