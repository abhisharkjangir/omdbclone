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
};

var MovieCloneDao   = function (char) {
  var pages = [1,2,3,4,5,6,7,8,9,10];
  return Promise.all(pages.map(
    x =>
   new Promise(function (resolve,reject) {
      request({url : 'http://www.omdbapi.com/?s=' + char + '&page=' + x,json:true})
      .then(data => resolve(data))
      .catch(err => reject(err))
    })
  ));
};

module.exports = {MovieByNameDao,MovieCloneDao};
