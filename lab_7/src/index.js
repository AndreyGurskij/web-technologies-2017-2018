import express from 'express'
import dotenv from 'dotenv/config'
import routes from './routes'

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
