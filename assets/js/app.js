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