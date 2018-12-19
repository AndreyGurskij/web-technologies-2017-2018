const Joi = require('joi')
const services = require('../services/services')
const validation = require('./validationSchemas')

const all = (req, res) => {
  services.getAllMovies(res)
}

const search = (req, res) => {
  Joi.validate(req.query, validation.searchSchema, (err, value) => {
    if (err) {
      res.status(400).json({
        status: 'Bad request',
        message: 'Missed query parameters'
      })
    } else {
      services.getMoviesByTitle(value.q, res)
    }
  })
}

const sort = (req, res) => {
  Joi.validate(req.query, validation.sortSchema, (err, value) => {
    if (err) {
      res.status(400).json({
        status: 'Bad request',
        message: 'Invalid query parameters'
      })
    } else {
      services.getSortedMovies(value.field, value.type, res)
    }
  })
}

const page = (req, res) => {
  Joi.validate(req.query, validation.pageSchema, (err, value) => {
    if (err) {
      res.status(400).json({
        status: 'Bad request',
        message: 'Invalid query parameters'
      })
    } else {
      services.getMoviesPage(value.off, value.lim, res)
    }
  })
}

const id = (req, res) => {
  Joi.validate(req.params, validation.idSchema, (err, value) => {
    if (err) {
      res.status(400).json({
        status: 'Bad request',
        message: 'Invalid query parameters'
      })
    } else {
      services.getMovieById(value.id, res)
    }
  })
}

const rating = (req, res) => {
  Joi.validate(req.query, validation.ratingSchema, (err, value) => {
    if (err) {
      res.status(400).json({
        status: 'Bad request',
        message: 'Invalid query parameters'
      })
    } else {
      services.getHighRatedMovies(value.amount, res)
    }
  })
}

const data = (req, res) => {
  services.getDataAboutMovies(res)
}

module.exports = {
  all,
  search,
  sort,
  page,
  id,
  rating,
  data
}
