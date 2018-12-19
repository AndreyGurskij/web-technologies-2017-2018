const movies = require('./movies')

const getAllMovies = () => {
    return movies.map(item => item.title);
}

function getById(id){
    return movies.find(item =>item.id === id);
}

function getByName(name){
    return movies.filter(item => item.title.toLowerCase().include(name.toLowerCase()));
}

function pagination(offset,limit){
    return movies.slice(Number(offset),Number(offset)+Number(limit)).map(item => item.title);
}

function sort(field,type){
    
    return movies
    .slice()
    .sort((a, b) => {
      if (type === 'down') {
        return a[field].toString().localeCompare(
          b[field], 'en-ru', { numeric: true }
        )
      } else if (type === 'up') {
        return b[field].toString().localeCompare(
          a[field], 'en-ru', { numeric: true }
        )
      }
    })
    .map(item => item.title)
}

module.exports = {
    getAllMovies,
    getById,
    getByName,
    pagination,
    sort,
  };