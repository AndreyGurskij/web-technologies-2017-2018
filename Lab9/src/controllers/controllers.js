const Joi = require('joi')
const services = require('../services/services')
const validation = require('./validationSchemas')

const all = async (req, res) => {
  const result = await services.getAllMovies()
  res.send(result)
}

const search = async (req, res) => {
  await Joi.validate(req.query, validation.searchSchema, async (err, value) => {
    if (err) {
      res.status(400).json({
        status: 'Bad request',
        message: 'Missed query parameters'
      })
    } else {
      const result = await services.getMoviesByTitle(value.q)
      res.send(result)
    }
  })
}

const sort = async (req, res) => {
  await Joi.validate(req.query, validation.sortSchema, async (err, value) => {
    if (err) {
      res.status(400).json({
        status: 'Bad request',
        message: 'Invalid query parameters'
      })
    } else {
      const result = await services.getSortedMovies(value.field, value.type)
      res.send(result)
    }
  })
}

const page = async (req, res) => {
  await Joi.validate(req.query, validation.pageSchema, async (err, value) => {
    if (err) {
      res.status(400).json({
        status: 'Bad request',
        message: 'Invalid query parameters'
      })
    } else {
      const result = await services.getMoviesPage(value.off, value.lim)
      res.send(result)
    }
  })
}

const id = async (req, res) => {
  await Joi.validate(req.params, validation.idSchema, async (err, value) => {
    if (err) {
      res.status(400).json({
        status: 'Bad request',
        message: 'Invalid query parameters'
      })
    } else {
      const result = await services.getMovieById(value.id)
      res.send(result)
    }
  })
}

module.exports = {
  all,
  search,
  sort,
  page,
  id
}
