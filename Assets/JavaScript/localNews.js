const retrievedCity = localStorage.getItem('city');
const searchTerm = retrievedCity;
const newsSize = 5;
const url = `https://content.guardianapis.com/search?q=${searchTerm}&page-size=${newsSize}&show-fields=thumbnail,headline,body&api-key=b45f8002-57f1-4fa0-a558-f0c18a87e9fa`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const newsContainer = document.getElementById('news-container');
    const articles = data.response.results;

    articles.forEach(article => {
      const newsUrl = article.webUrl;

      const titleLink = document.createElement('a');
      titleLink.href = newsUrl;
      titleLink.target = '_blank';
      const title = document.createElement('h1');
      title.textContent = article.webTitle;
      titleLink.appendChild(title);
      newsContainer.appendChild(titleLink);

      if (article.fields && article.fields.thumbnail) {
        const newsImage = document.createElement("img");
        newsImage.src = article.fields.thumbnail;
        newsImage.alt = 'No image';
        newsContainer.appendChild(newsImage);
      }

      const description = document.createElement('p');
      if (article.fields && article.fields.headline) {
        description.innerHTML = article.fields.headline;
      } else {
        description.innerHTML = article.webTitle;
      }
      newsContainer.appendChild(description);
    });

    console.log("News data:", articles);
  })
  .catch(error => {
    console.error("Error fetching news data:", error);
  });
