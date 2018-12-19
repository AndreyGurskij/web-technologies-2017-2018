const Joi = require('joi')
const constants = require('../services/constants')
const movies = require('../services/movies')

const sortSchema = Joi.object().keys({
  field: Joi.string().default(constants.sort.field),
  type: Joi.string().default(constants.sort.up)
})

const searchSchema = Joi.object().keys({
  q: Joi.string().required()
})

const pageSchema = Joi.object().keys({
  off: Joi.number()
    .min(0)
    .max(movies.length - 1)
    .default(constants.page.offset)
    .integer(),
  lim: Joi.number()
    .min(1)
    .max(movies.length)
    .default(constants.page.limit)
    .integer()
})

const idSchema = Joi.object().keys({
  id: Joi.number()
    .integer()
    .positive()
})

module.exports = {
  sortSchema,
  searchSchema,
  pageSchema,
  idSchema
}
