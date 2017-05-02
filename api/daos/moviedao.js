var request = require('request-promise');

var MovieByNameDao = function (title) {
  var url = 'http://www.omdbapi.com/?s=' + title;
  return new Promise(function (resolve,reject) {
    request({url : url,json:true})
    .then(data =>
      resolve(data))
    .catch(err =>
      reject(err))
  });
}

module.exports = MovieByNameDao;
