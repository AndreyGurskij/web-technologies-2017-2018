const search = {
  title: ''
}

const sort = {
  field: 'title',
  up: 'asc',
  down: 'desc'
}

const page = {
  offset: 0,
  limit: 4
}

const tests = {
  SERVICE_ALL_MOVIES: 'GET_ALL_MOVIES',
  SERVICE_SORTED_MOVIES: 'GET_SORTED_MOVIES',
  SERVICE_MOVIES_BY_TITLE: 'GET_MOVIES_BY_TITLE',
  SERVICE_MOVIES_PAGE: 'GET_MOVIES_PAGE',
  SERVICE_MOVIE_BY_ID: 'GET_MOVIE_BY_ID',
  SUPER_TEST: 'SUPER_TEST',
  CONTROLLER_ALL: 'CONTROLLER_ALL',
  CONTROLLER_SEARCH: 'CONTROLLER_SEARCH'
}

const dbSettings = {
  dbName: 'moviesDB',
  dbLogin: 'postgres',
  dbPassword: '12345',
  dbHost: 'localhost',
  dbDialect: 'postgres'
}

module.exports = {
  search,
  sort,
  page,
  tests,
  dbSettings
}
