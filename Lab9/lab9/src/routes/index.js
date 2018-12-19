const express = require('express')
const controllers = require('../controllers/controllers')

const router = express.Router()

router.get('/movies', controllers.all)
router.get('/search', controllers.search)
router.get('/sort', controllers.sort)
router.get('/page', controllers.page)
router.get('/movies/:id', controllers.id)

module.exports = router
