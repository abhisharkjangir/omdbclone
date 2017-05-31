var {movies, moviesdetails} = require('../models/movie');

var AddNewMovieDao = function(body) {
  var movie = new movies();
  movie.Title = body.Title;
  movie.Year = body.Year;
  movie.imdbID = body.imdbID;
  movie.Type = body.Type;
  movie.Poster = body.Poster;
  return new Promise(function(resolve, reject) {
    movie.save().then(data => resolve(data)).catch(err => reject(err))
  });
}

var deleteMovieDao = function(movieId) {
  return new Promise(function(resolve, reject) {
    movies.remove({_id: movieId}).then(data => resolve(data)).catch(err => reject(err))
  });
}

var getMovieByIdDao = function(movieId) {
  return new Promise(function(resolve, reject) {
    movies.findById(movieId).then(data => resolve(data)).catch(err => reject(err))
  });
}

var insertMultipleMovieDao = function(moviesArr) {
  return new Promise(function(resolve, reject) {
    movies.collection.insert(moviesArr).then(data => resolve(data)).catch(err => reject(err))
  });
}

var getMovieListDao = function(from, limit) {
  if (!from) {
    from = 0;
  }
  if (!limit) {
    limit = 10
  }
  return new Promise(function(resolve, reject) {
    moviesdetails.find({}).skip(parseInt(from)).limit(parseInt(limit)).then(data => resolve(data)).catch(err => reject(err))
  });
};

var addNewMovieDetailsDao = function(moviesDeatilsArr) {
  return new Promise(function(resolve, reject) {
    moviesdetails.collection.insert(moviesDeatilsArr).then(data => resolve(data)).catch(err => reject(err))
  });
}

var getMovieByOmdbIdDao = function(omdbId) {
  return new Promise(function(resolve, reject) {
    moviesdetails.find({imdbID: omdbId})
    .then(data =>{ resolve(data[0])})
    .catch(err => {reject(err)})
  });
}

var getMovieBySearchTermDao = (searchTerm,query) => {
  var searchData = {
    Title:{$regex:searchTerm}
  }
  if (query.type) {
    searchData.Type = query.type;
  }
  if(query.year){
    searchData.Year = query.year;
  }
  if(query.poster){
    if (query.poster == 'a') {
      searchData.Poster = {$ne:"N/A"};
    }else if (query.poster == 'n') {
      searchData.Poster = "N/A";
    }
  }
  if (!query.from) {
    from = 0;
  }else {
    from = query.from;
  }
  if (!query.limit) {
    limit = 10
  }else {
    limit = query.limit;
  }
  console.log(query);
  return new Promise(function (resolve,reject) {
    moviesdetails.find(searchData).skip(parseInt(from)).limit(parseInt(limit)).then(data =>
      resolve(data))
    .catch(err =>
      reject(err))
  });
}

module.exports = {AddNewMovieDao,getMovieListDao,deleteMovieDao,getMovieByIdDao,insertMultipleMovieDao,getMovieListDao,addNewMovieDetailsDao,getMovieBySearchTermDao,getMovieByOmdbIdDao};
