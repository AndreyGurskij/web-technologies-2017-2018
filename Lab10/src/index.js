const express = require('express')
const dotenv = require('dotenv/config')
const routes = require('./routes/index')

const app = express()
app.use(routes)

const port = process.env.PORT

const server = app.listen(port, console.log('Server started...'))

process.on('SIGINT', () => {
  console, log('Server closing...')
  server.close(() => {
    console.log('Server closed.')
  })
})

module.exports = app
