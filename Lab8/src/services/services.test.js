const services = require('./services')
const movies = require('./movies')

test('Tetsing get all movies', () => {
  expect(services.getAllMovies()).toBeDefined
  expect(services.getAllMovies()).toBeInstanceOf(Array)
  expect(services.getAllMovies()).toEqual(movies.map(item => item.title))
})

test('Testing sort', () => {
  expect(services.sort()).toBeDefined
  expect(services.sort()).toBeInstanceOf(Array)
  expect(services.sort('title', 'up')).toEqual(
    movies
    .slice()
    .sort((a, b) => {
      
        return b[title].toString().localeCompare(
          a[title], 'en-ru', { numeric: true }
        )
      
    })
    .map(item => item.title)
  )
  expect(services.sort('id', 'down')).toEqual(
    movies
    .slice()
    .sort((a, b) => {
        return a[id].toString().localeCompare(
          b[id], 'en-ru', { numeric: true }
        )
    })
    .map(item => item.title)
  )
})

test('Movies by name', () => {
  expect(services.getByName()).toBeDefined
  expect(services.getByName()).toBeInstanceOf(Array)
  expect(services.getByName('Darkest')).toEqual(
    movies.filter(item => item.title.toLowerCase().include('Darkest'))
  )
})

test('Pagination ', () => {
  expect(services.pagination()).toBeDefined
  expect(services.pagination()).toBeInstanceOf(Array)
  expect(services.pagination(8, 13)).toEqual(
    movies.slice(8, 8 + 13).map(item => item.title)
  )
})

test('Find by Id', () => {
  expect(services.getById()).toBeDefined
  expect(services.getById()).toBeInstanceOf(Array)
  expect(services.getById(101)).toEqual(
    movies.filter(item => item.id === Number(101))
  )
})