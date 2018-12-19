const router = require('../routes/index')
const app = require('express')().use(router)
const request = require('supertest')

describe('Test controllers', () => {
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
      .get('/search?name=avengers')
      .expect(200)
      .then(res => {
        expect(res.body).toBeInstanceOf(Array)
        expect(res.body[0].toLowerCase().includes('avengers')).toBe(true)
      })
  })
  test('/sort', () => {
    return request(app)
      .get('/sort?field=id&type=u')
      .expect(200)
      .then(res => {
        expect(res.body).toBeInstanceOf(Array)
        expect(res.body.length).toBe(15600)
      })
  })
})