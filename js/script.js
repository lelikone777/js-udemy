"use strict";

// const numberOfFilms = +prompt("Сколько фильмов", "");
//
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };
//
// const a = prompt("Один из последних просмотренных фильмов?", ""),
//   b = prompt("На сколько оцените его?", ""),
//   c = prompt("Один из последних просмотренных фильмов?", ""),
//   d = prompt("На сколько оцените его?", "");
//
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
//
// console.log(personalMovieDB);


const numberOfFilms = +prompt("Сколько фильмов", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");
//
//   if (a != null && b != null && a != '' && b != '' && a.length < 50)  {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('error');
//     i--;
//   }
// }

let i = 0;
 do {
   const a = prompt("Один из последних просмотренных фильмов?", ""),
         b = prompt("На сколько оцените его?", "");

   i++;

   if (a != null && b != null && a != '' && b != '' && a.length < 50)  {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }

 } while (i < 2);



if (personalMovieDB.count < 10) {
  console.log('мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('нормально фильмов');
}  else if (personalMovieDB.count >= 30) {
  console.log('вы киноман');
} else {
  console.log('произошла ошибка');
}
console.log(personalMovieDB);


