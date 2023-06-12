// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((movie) => movie.director);
  // console.log("EXERCISE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result2 = array.filter(movie => movie.director === director)
  // console.log("EXERCISE 2 ->", result2);
  return result2;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverage(array) {
  const average = array.reduce((total, currentValue) => (total + currentValue), 0)
  const aLen = array.length;
  return Number((average / aLen).toFixed(2))
}

function moviesAverageOfDirector(array, director) {
   const aMovies = array.filter(movie => movie.director === director).map(movie => movie.score);
  let result3 = moviesAverage(aMovies);
  // console.log("EXERCICE 3 average->", result3);
  return result3;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const sortMovies = array.map(movie => movie.title).sort();
  let result4 = sortMovies.slice(0, 20);
  // console.log("EXERCICE 4 sort->", result4);
  return result4;
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
