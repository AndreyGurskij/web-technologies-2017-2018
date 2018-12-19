const express = require('express')
const controllers = require('../controllers/controllers')

const router = express.Router()

router.get('/movies', controllers.all)
router.get('/search', controllers.search)
router.get('/sort', controllers.sort)
router.get('/page', controllers.page)
router.get('/movies/:id', controllers.id)
router.get('/rating', controllers.rating)
router.get('/data', controllers.data)

module.exports = router
