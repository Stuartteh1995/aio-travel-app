$(document).foundation()
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const targetUrl =
  "https://api.yelp.com/v3/businesses/search?limit=20&term=restaurants&location=NYC";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer alm9ynRdfhOmNUW0k24GpsIYNmtjTnI0xMMVCe6IhKGWdMpW33QdWMCeytCiy3XoftMISkJacqZ-SlPvKIo76lgWG9qZ3wnjQSSHoKIxCJ_OAMKzhJDhPyxsQZAiZHYx",
  },
};

fetch(proxyUrl + targetUrl, options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

  // news api
  const apiKey = '96f2d661b6ac44e8a01323e41bd281d9'; // Replace with your News API key
const searchTerm = 'melbourne'; // Declare the searchTerm variable and assign a value
const url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`; // Include searchTerm in the URL
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("News data:", data.articles);
  })
  .catch(error => {
    console.error("Error fetching news data:", error);
  });