const apiKey = '96f2d661b6ac44e8a01323e41bd281d9'; 
const searchTerm = 'melbourne'; 
const newsSize = 5; 
const url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}&pageSize=${newsSize}`; 

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("News data:", data.articles);
  })
  .catch(error => {
    console.error("Error fetching news data:", error);
  });