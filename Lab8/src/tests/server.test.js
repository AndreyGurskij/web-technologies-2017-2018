const request = require('supertest')
const app = require('../server')

test('app test', () => {
  request(app)
    .get('/movies')
    .expect(200)
    .end(err => {
      if (err) throw done(err)
      done()
    })
})