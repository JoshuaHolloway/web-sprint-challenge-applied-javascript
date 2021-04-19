const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  
  // <div class="card">
  const card = document.createElement('div');
  card.classList.add('card');

  //   <div class="headline">{ headline }</div>
  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = article.headline;
  card.append(headline);

  //   <div class="author">
  const author = document.createElement('div');
  author.classList.add('author');
  // card.append(author);

  //     <div class="img-container">
  const img_container = document.createElement('div');
  img_container.classList.add('img-container');
  
  //       <img src={ authorPhoto }>
  const img = document.createElement('img');
  img.src = article.authorPhoto;

  img_container.append(img);
  author.append(img_container);

  const span = document.createElement('span');
  span.textContent = `By ${article.authorName}`;

  author.append(span);

  card.append(author);


  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const url = 'https://lambda-times-api.herokuapp.com/articles';
  fetch('https://lambda-times-api.herokuapp.com/articles')
  .then(response => response.json())
  .then(data => {
    const articles = Object.values(data.articles).flat();
    articles.forEach(article => {
      const card = Card(article);
      const elem = document.querySelector(selector);
      elem.append(card);
    });
  })
  .catch(error => console.log(error));
}

export { Card, cardAppender }
