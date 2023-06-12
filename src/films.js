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
  // console.log("EXERCISE 3 average->", result3);
  return result3;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const sortMovies = array.map(movie => movie.title).sort();
  let result4 = sortMovies.slice(0, 20);
  // console.log("EXERCISE 4 sort->", result4);
  return result4;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const sortedArray = [...array].sort((a, b) => {
    if (a.year !== b.year) { //Ordenar por año
      return a.year - b.year
    } else { //si los años son iguales, compara y ordena alfabéticamente por título
      return a.title.localeCompare(b.title)
    }
  });
  result5 = sortedArray;
  // console.log("EXERCISE 5 sort->", result5);
  return result5;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const aMovies = array.filter(movie => {
    if (typeof (movie.score) !== "number") { //si se cumple no se incluye en el aMovies
    } else {
      return movie.genre.includes(category)
    }
  }).map(movie => movie.score);

  let result6 = moviesAverage(aMovies) //función en Exercise 3
  // console.log("EXERCISE 6 ->", result6);
  return result6;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const result7 = array.map(movie => {
    let hours = 0;
    let minutes = 0;
    const hoursRegex = /(\d+)h/; //busca un grupo de dígitos (\d+) seguido de la letra "h".
    const minutesRegex = /(\d+)min/; //busca un grupo de dígitos (\d+) seguido de las letras "min".

    const hoursMatch = movie.duration.match(hoursRegex); //match: devuelve todas las ocurrencias de una expresión regular dentro de una cadena
    if (hoursMatch) {
      hours = parseInt(hoursMatch[1]); //el valor de 1 se utiliza para acceder al primer grupo capturado por la expresión regular que se encuentra entre paréntesis. En este caso el/los dígito/s. El 0 sería la cadena coincidente completa (p.e 2h)
    }

    const minutesMatch = movie.duration.match(minutesRegex);
    if (minutesMatch) {
      minutes = parseInt(minutesMatch[1]);
    }
   
    const totalMinutes = hours * 60 + minutes;
    return {
      ...movie,
      duration: totalMinutes
    };
  });
  // console.log("EXERCICE 7 ->", result7);
  return result7;
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
