// Домашнее задание:
"use strict";
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: {},
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt(
      "Сколько фильмов вы уже посмотрели?",
      ""
    ).trim();
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt(
        "Сколько фильмов вы уже посмотрели?",
        ""
      ).trim();
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из просмотренных последних фильмов?", "").trim(),
        b = prompt("На сколько оцените его?", "").trim();

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLever: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотренно довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, "").trim();
      if (genre == "" || genre === null) {
        console.log("Вы ввели некорректные данные");
        i--;
      } else {
        personalMovieDB.genres[i] = genre;
      }
    }

    for (let key in personalMovieDB.genres) {
      console.log(`Любимый жанр ${key} = это ${personalMovieDB.genres[key]}`);
    }
    // personalMovieDB.genres.forEach(function (item, i) {
    //   console.log(`Любимый жанр ${i} = это ${item}`);
    // });
  },
};

console.log(personalMovieDB);
