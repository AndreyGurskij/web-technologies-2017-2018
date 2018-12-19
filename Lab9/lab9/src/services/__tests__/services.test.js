const services = require('../services')
const movies = require('../movies')
const constants = require('../constants')

test(constants.tests.SERVICE_ALL_MOVIES, () => {
  expect(services.getAllMovies()).toBeDefined
  expect(services.getAllMovies()).toBeInstanceOf(Array)
  expect(services.getAllMovies()).toEqual(movies.map(item => item.title))
})

test(constants.tests.SERVICE_SORTED_MOVIES, () => {
  expect(services.getSortedMovies()).toBeDefined
  expect(services.getSortedMovies()).toBeInstanceOf(Array)
  expect(services.getSortedMovies('title', 'u')).toEqual(
    movies
      .slice()
      .sort((a, b) => {
        return String(a['title']).localeCompare(String(b['title']))
      })
      .map(item => item.title)
  )
  expect(services.getSortedMovies('id', 'd')).toEqual(
    movies
      .slice()
      .sort((a, b) => {
        return String(b['id']).localeCompare(String(a['id']))
      })
      .map(item => item.title)
  )
})

test(constants.tests.SERVICE_MOVIES_BY_TITLE, () => {
  expect(services.getMoviesByTitle()).toBeDefined
  expect(services.getMoviesByTitle()).toBeInstanceOf(Array)
  expect(services.getMoviesByTitle('maze')).toEqual(
    movies
      .filter(item =>
        item.title
          .toString()
          .toLowerCase()
          .includes('maze')
      )
      .map(item => item.title)
  )
})

test(constants.tests.SERVICE_MOVIES_PAGE, () => {
  expect(services.getMoviesPage()).toBeDefined
  expect(services.getMoviesPage()).toBeInstanceOf(Array)
  expect(services.getMoviesPage(5, 10)).toEqual(
    movies.slice(5, 5 + 10).map(item => item.title)
  )
})

test(constants.tests.SERVICE_MOVIE_BY_ID, () => {
  expect(services.getMovieById()).toBeDefined
  expect(services.getMovieById()).toBeInstanceOf(Array)
  expect(services.getMovieById(123)).toEqual(
    movies.filter(item => item.id === Number(123))
  )
})
