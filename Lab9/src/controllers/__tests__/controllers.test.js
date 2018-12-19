const controllers = require('../controllers')
const movies = require('../../services/movies')
const constants = require('../../services/constants')
const router = require('../../routes')
const app = require('express')().use(router)
const request = require('supertest')

describe('Controllers test suit', () => {
  test('/movies', () => {
    return request(app)
      .get('/movies')
      .expect(200)
      .then(res => {
        expect(res.body).toBeInstanceOf(Array)
        expect(res.body.length).toBe(15600)
      })
  })
  test('/search', () => {
    return request(app)
      .get('/search?q=avengers')
      .expect(200)
      .then(res => {
        expect(res.body).toBeInstanceOf(Array)
        expect(res.body[0].toLowerCase().includes('avengers')).toBe(true)
      })
  })
  test('/sort', () => {
    return request(app)
      .get('/sort?q=id&t=u')
      .expect(200)
      .then(res => {
        expect(res.body).toBeInstanceOf(Array)
        expect(res.body.length).toBe(15600)
      })
  })
})
