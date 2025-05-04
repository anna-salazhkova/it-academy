"use  strict";


// Напишите функцию getBookInfo(book), которая принимает одну из книг (можете подставить books[0] или books[4] или любую другую), и которая возвращает строку в формате: "Название: [title], Автор: [author], Год: [year]".

let books = [
  {
    title: "Война и мир",
    author: "Лев Толстой",
    isRussianAuthor: true,
    isModernLiterature: false,
    genre: 1,
    year: '1863 - 1869',
    ratings: [
      { userId: 1, rating: 4 },
      { userId: 2, rating: 4 },
      { userId: 3, rating: 4 },
      { userId: 4, rating: 5 }
    ],
  },
  {
    title: "Ночной дозор",
    author: "Сергей Лукьяненко",
    isRussianAuthor: true,
    isModernLiterature: true,
    genre: 3,
    year: '1998',
    ratings: [
      { userId: 1, rating: 4 },
      { userId: 2, rating: 5 },
      { userId: 3, rating: 3 },
      { userId: 4, rating: 5 }
    ],
  },
  {
    title: "Гарри Поттер",
    author: "Дж. К. Роулинг",
    isRussianAuthor: false,
    isModernLiterature: true,
    genre: 3,
    year: '1997 - 2007',
    ratings: [
      { userId: 1, rating: 4 },
      { userId: 2, rating: 5 },
      { userId: 3, rating: 4 },
      { userId: 4, rating: 4 },
      { userId: 5, rating: 5 },
      { userId: 6, rating: 5 },
      { userId: 7, rating: 5 }
    ],
  },
  {
    title: "Шерлок Холмс",
    author: "Артур Конан Дойл",
    isRussianAuthor: false,
    isModernLiterature: false,
    genre: 2,
    year: '1887',
    ratings: [
      { userId: 1, rating: 4 },
      { userId: 2, rating: 5 },
      { userId: 3, rating: 3 },
      { userId: 4, rating: 5 }
    ],
  },
  {
    title: "Девушка в поезде",
    author: "Пола Хокинс",
    isRussianAuthor: true,
    isModernLiterature: true,
    genre: 2,
    year: '2015',
    ratings: [
      { userId: 1, rating: 4 },
      { userId: 2, rating: 5 },
      { userId: 3, rating: 3 },
      { userId: 4, rating: 5 },
      { userId: 5, rating: 2 }
    ],
  },
]


let book = books[0];

let result = getBookInfo(book);
console.log(result);

function getBookInfo(book) {
  return `Название: ${book.title}, Автор: ${book.author}, Год: ${book.year} `;
}

// Напишите функцию addRating(book, userId, rating), которая добавляет новый рейтинг к книге 


function addRating(book, userIdValue, ratingValue) {
  let ratingElement = { userId: userIdValue, rating: ratingValue };
  book.ratings.push(ratingElement);
}

addRating(book, 6, 7);
console.log(books[0]);


// 	Напишите функцию getAverageRating(book), которая вычисляет средний рейтинг книги и возвращает его.


function getAverageRating(book) {

  let ratingsArr = book.ratings;
  let sum = 0;

  for (let obj of ratingsArr) {
    sum += obj.rating;
  }
  return sum / ratingsArr.length;
}

console.log(getAverageRating(book))

// Напишите функцию, которая спрашивает у пользователя его предпочтения по книгам и выводит подходящую.

function getPreferenceBook() {

  let genre;
  do {
    genre = +prompt('Какой жанр предпочитаете? (1 - роман, 2 - детектив, 3 - фентези)');
  } while (isNaN(genre) || genre < 1 || genre > 3);

  let isModernLiterature = confirm("Вы предпочитаете современную литературу?");
  let isRussianAuthor = confirm("Вы предпочитаете русских авторов?");

  for (let book of books) {
    if (book.genre === genre && book.isRussianAuthor === isRussianAuthor && book.isModernLiterature === isModernLiterature) {
      return `Предлагаем вам почитать "${book.title}"`
    }
  }
  return 'К сожалению, не смогли подобрать вам книгу'
}


alert(getPreferenceBook());