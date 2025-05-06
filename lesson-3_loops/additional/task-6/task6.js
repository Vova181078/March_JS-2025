// створити масив книжок (назва, кількість сторінок, автори , жанри).
//
// – знайти найбільшу книжку.
//
// – знайти книжку/ки з найбільшою кількістю жанрів
//
// – знайти книжку/ки з найдовшою назвою
//
// – знайти книжку/ки, які писали 2 автори
//
// – знайти книжку/ки, які писав 1 автор


const books = [
    {
        title: "Майстер і Маргарита",
        pages: 450,
        authors: ["Михайло Булгаков"],
        genres: ["Роман", "Фентезі"]
    },
    {
        title: "Сто років самотності",
        pages: 417,
        authors: ["Габріель Гарсія Маркес"],
        genres: ["Магічний реалізм", "Драма"]
    },
    {
        title: "Війна і мир",
        pages: 1225,
        authors: ["Лев Толстой"],
        genres: ["Історичний роман"]
    },
    {
        title: "Основи програмування на JavaScript для початківців",
        pages: 320,
        authors: ["Іван Іванов", "Петро Петренко"],
        genres: ["Навчальна", "Програмування", "Комп’ютери"]
    },
    {
        title: "Коротка історія часу",
        pages: 256,
        authors: ["Стівен Гокінг"],
        genres: ["Наукова", "Популярна наука"]
    }
];

// – знайти найбільшу книжку.
// let biggestBook = books[0];
// for (const book of books) {
//     if (book.pages > biggestBook.pages) {
//         console.log(biggestBook);
//     }
//
// }

// – знайти книжку/ки з найбільшою кількістю жанрів

// let mostGenres = books[0];
// for (const book of books) {
//     if (book.genres.length > mostGenres.pages.length) {
//         console.log(mostGenres);
//     }
// }

// – знайти книжку/ки з найдовшою назвою

//  let mostTitle = books[0];
// for (const book of books) {
//     if (book.title.length > mostTitle.title.length) {
//         mostTitle = book;
//         console.log(mostTitle);
//     }
// }

// – знайти книжку/ки, які писали 2 автори

// let twoAuthors = books[0];
// for (const book of books) {
//     if (book.authors.length > twoAuthors.authors.length) {
//       twoAuthors = book;
//         console.log(twoAuthors);
//     }
//
// }

// – знайти книжку/ки, які писав 1 автор

// let oneAuthor = books[0];
// for (const book of books) {
//     if (book.authors.length === 1) {
//         oneAuthor = book;
//         console.log(oneAuthor);
//     }
//
// }