const constants = require('./constants')
const model = require('../db/model/index')

function getAllMovies(res) {
  model.find({}).then(movies => {
    res.json(movies)
  })
}

function getSortedMovies(field, type, res) {
  model
    .find({})
    .sort([[field, type]])
    .then(movies => res.json(movies))
}

function getMoviesByTitle(movie, res) {
  model
    .find({})
    .where('title', new RegExp(movie, 'i'))
    .then(movies => res.json(movies))
}

function getMoviesPage(offset, limit, res) {
  model
    .find()
    .limit(limit)
    .skip(offset)
    .then(movies => res.json(movies))
}

function getMovieById(id, res) {
  model.findOne({ id }).then(movie => res.json(movie))
}

function getHighRatedMovies(limit, res) {
  model
    .find({})
    .sort({ vote_average: -1 })
    .limit(limit)
    .then(movies => res.json(movies))
}

function getDataAboutMovies(res) {
  model
    .aggregate()
    .group({
      _id: '$vote_average',
      total: {
        $sum: 1
      }
    })
    .then(movies => res.json(movies))
}

module.exports = {
  getAllMovies,
  getSortedMovies,
  getMoviesByTitle,
  getMoviesPage,
  getMovieById,
  getHighRatedMovies,
  getDataAboutMovies
}
