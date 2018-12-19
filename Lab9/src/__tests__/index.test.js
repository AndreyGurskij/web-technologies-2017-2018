const request = require('supertest')
const app = require('../index')
const constants = require('../services/constants')

test(constants.tests.SUPER_TEST, () => {
  request(app)
    .get('/movies')
    .expect(200)
    .end(err => {
      if (err) throw done(err)
      done()
    })
})
