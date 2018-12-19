const Joi = require('joi')
const constants = require('../services/constants')

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
    .default(constants.page.offset)
    .integer(),
  lim: Joi.number()
    .min(1)
    .default(constants.page.limit)
    .integer()
})

const idSchema = Joi.object().keys({
  id: Joi.number()
    .integer()
    .positive()
})

const ratingSchema = Joi.object().keys({
  amount: Joi.number()
    .integer()
    .positive()
    .default(constants.rating.amount)
})

module.exports = {
  sortSchema,
  searchSchema,
  pageSchema,
  idSchema,
  ratingSchema
}
