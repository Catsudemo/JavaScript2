// 'use strict';
// const bookTitles = [
//   'memoirs_of_a_geisha',
//   'enma_the_immortal',
//   'confessions',
//   'coin_locker_babies',
//   'beauty_and_sadness',
//   'house_of_sleeping_beauties',
//   'empress',
//   'the_next_continent',
//   'underground',
//   'after_dark',
// ];

const booksInfo = {
  memoirs_of_a_geisha: {
    properties: {
      title: 'Memoirs of a Geisha',
      language: 'English',
      author: 'Arthur Golden',
    },
  },
  enma_the_immortal: {
    properties: {
      title: 'Enma the Immortal',
      language: 'Japanese',
      author: 'Fumi Nakamura',
    },
  },
  confessions: {
    properties: {
      title: 'Confessions',
      language: 'Japanese',
      author: 'Kanae Minato',
    },
  },
  coin_locker_babies: {
    properties: {
      title: 'Coin Locker Babies',
      language: 'Japanese',
      author: 'Ryu Murakami',
    },
  },
  beauty_and_sadness: {
    properties: {
      title: 'Beauty and Sadness',
      language: 'Japanese',
      author: 'Yasunari Kawabata',
    },
  },
  house_of_sleeping_beauties: {
    properties: {
      title: 'House of Sleeping Beauties',
      language: 'Japanese',
      author: 'Yasunari Kawabata',
    },
  },
  empress: {
    properties: {
      title: 'Empress',
      language: 'English',
      author: 'Shan Sa',
    },
  },
  the_next_continent: {
    properties: {
      title: 'The Next Continent',
      language: 'English',
      author: 'Issui Ogawa',
    },
  },
  underground: {
    properties: {
      title: 'Underground',
      language: 'Japanese',
      author: 'Haruki Murakami',
    },
  },
  after_dark: {
    properties: {
      title: 'After Dark',
      language: 'Japanese',
      author: 'Haruki Murakami',
    },
  },
};

// 1.3
// window.onload = () => {
// const myBookList = ['Book1', 'Book2', 'Book3', 'Book4', 'Book5', 'Book6'];

//   const myBookSpot = document.querySelector('#bookList');

//   const ol = document.createElement('ol');

//   for (const book of myBookList) {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(book));
//     ol.appendChild(li);
//   }
//   myBookSpot.appendChild(ol);
// };

window.onload = () => {
  const quotes = [
    'If you only read the books that everyone else is reading, you can only think what everyone else is thinking. ― Haruki Murakami',
    'Memories warm you up from the inside. But they also tear you apart. ― Haruki Murakami',
    "If you remember me, then I don't care if everyone else forgets. ― Haruki Murakami",
    "There's no such thing as perfect writing, just like there's no such thing as perfect despair. - Haruki Murakami",
    'They were words that came out of nothing, but they seemed to him somehow significant.He muttered them over again. - Yasunari Kawabata',
    'Remember the good things; write the bad ones down in here and forget about them.― Kanae Minato',
    "Just because I've written this book, don't think I've changed. I'm like I was back then, really. - Ryu Murakami",
  ];
  console.log(quotes);
  const rand = quotes[Math.floor(Math.random() * quotes.length)];

  const quoteSpace = document.querySelector('#quoteSpace');
  const quoteDiv = document.createElement('div');
  quoteDiv.innerText = rand;
  quoteSpace.appendChild(quoteDiv);

  const myBookSpot = document.querySelector('#bookList');

  const div = document.createElement('div');
  div.setAttribute('class', 'wrapper');

  // eslint-disable-next-line guard-for-in
  for (book in booksInfo) {
    const eachBookDiv = document.createElement('div');
    eachBookDiv.id = book;
    eachBookDiv.setAttribute('class', 'box');
    const name = document.createElement('h4');
    name.innerText = booksInfo[book].properties.title;
    eachBookDiv.appendChild(name);

    const ul = document.createElement('ul');

    const author = document.createElement('li');
    author.innerText = booksInfo[book].properties.author;
    ul.appendChild(author);

    const language = document.createElement('li');
    language.innerText = booksInfo[book].properties.language;
    ul.appendChild(language);

    eachBookDiv.appendChild(ul);
    div.appendChild(eachBookDiv);

    myBookSpot.appendChild(div);
  }
  console.log('loaded');

  const bookImages = [
    { memoirs_of_a_geisha: 'book_covers/memoirs_of_a_geisha_img.jpg' },
    { enma_the_immortal: 'book_covers/enma_the_immortal_img.jpg' },
    { confessions: 'book_covers/confessions_img.jpg' },
    { coin_locker_babies: 'book_covers/coin_locker_babies_img.jpg' },
    { beauty_and_sadness: 'book_covers/beauty_and_sadness_img.jpg' },
    { house_of_sleeping_beauties: 'book_covers/house_of_sleeping_beauties_img.jpg' },
    { empress: 'book_covers/empress_img.jpg' },
    { the_next_continent: 'book_covers/the_next_continent_img.jpg' },
    { underground: 'book_covers/underground_img.jpg' },
    { after_dark: 'book_covers/after_dark_img.jpg' },
  ];

  // function addBookImages(bookPics) {
  //   const length = bookPics.length;
  //   for (let i = 0; i < length; i++) {
  //     console.log(i);
  //     // document.querySelector(bookPics.pic)
  //   }
  // }
  // addBookImages(bookImages);
  // console.log(bookImages);

  // eslint-disable-next-line guard-for-in
  for (image in bookImages) {
    const imageID = Object.keys(bookImages[image])[0];
    const lookFor = document.querySelector(`#${imageID}`);
    const picture = document.createElement('IMG');
    picture.src = bookImages[image][imageID];
    lookFor.appendChild(picture);

    console.log(imageID, lookFor);
  }
};
