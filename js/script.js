"use strict";

const personalMovieDB = {
    count: start(),
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function start() {
    let numberOfFilms = +prompt("Сколько фильмов вы посмотрели", "");
    while ( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели", "");
    }
    return numberOfFilms;
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");

        if (a != null && b != null && a != '' && b != '' && a.length < 50)  {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('нормально фильмов');
    }  else if (personalMovieDB.count >= 30) {
        console.log('вы киноман');
    } else {
        console.log('произошла ошибка');
    }
    return personalMovieDB.count;
}
detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`ваш любимый жанр ${i}`);
    }
    return personalMovieDB.genres;
}
writeYourGenres();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}
showMyDB();



