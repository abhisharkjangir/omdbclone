var request = require('request-promise');
var {Pages, Alphabet} = require('../constants/constants');

var MovieByNameDao = function(title) {
  var url = 'http://www.omdbapi.com/?t=' + title;
  return new Promise(function(resolve, reject) {
    request({url: url, json: true}).then(data => resolve(data)).catch(err => reject(err))
  });
};

var MovieCloneDao = function() {
  return Promise.all(Alphabet.map(alpha => Promise.all(Pages.map(pageno => new Promise(function(resolve, reject) {
    request({
      url: 'http://www.omdbapi.com/?s=' + alpha + '&page=' + pageno,
      json: true
    }).then(data => resolve(data))
      .catch(err => reject(err))
  })))));
};


var getMoviesDetailByIDFromOmdb = function (imdbIDList) {
  return Promise.all(imdbIDList.map(imdbId =>
    new Promise(function(resolve, reject) {
      request({url: 'http://www.omdbapi.com/?i=' + imdbId, json: true})
      .then(data => resolve(data))
      .catch(err => reject(err))
    })
  ));
};

module.exports = {
  MovieByNameDao,
  MovieCloneDao,
  getMoviesDetailByIDFromOmdb
};
