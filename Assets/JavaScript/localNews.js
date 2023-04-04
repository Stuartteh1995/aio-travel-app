//retreieve city from local storage
var retrievedData = JSON.parse(localStorage.getItem("forecastNew"));
var retrievedCity = retrievedData[0].city;
//how many news artical to display
const newsSize = 6;
//link to the api
const url = `https://content.guardianapis.com/search?q=${retrievedCity}&page-size=${newsSize}&show-fields=thumbnail,headline,body&api-key=b45f8002-57f1-4fa0-a558-f0c18a87e9fa`;

fetch(url)
//send url out and get the responds as a json
  .then(response => response.json())
  .then(data => {
    //create a variable for the contrainer in html that would hold the news article
    const newsContainer = document.getElementById('news-container');
    //gets the data from local storage
    const articles = data.response.results;

    //creating a for each loop to display news article 
    articles.forEach(article => {
      const newsUrl = article.webUrl;

      //create a hyper link that is attached to the article and adds it to the html
      const titleLink = document.createElement('a');
      titleLink.href = newsUrl;
      titleLink.target = '_blank';
      const title = document.createElement('h1');
      title.textContent = article.webTitle;
      titleLink.appendChild(title);
      newsContainer.appendChild(titleLink);

      //gets the image link and displays it as a thumbnail
      if (article.fields && article.fields.thumbnail) {
        const newsImage = document.createElement("img");
        newsImage.src = article.fields.thumbnail;
        newsImage.alt = 'No image';
        newsContainer.appendChild(newsImage);
        const newsUrl = article.webUrl;
        const titleLink = document.createElement('a');
        titleLink.href = newsUrl;
        titleLink.target = '_blank';
      }

      // create the description 
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


// weather

  var displayData = JSON.parse(localStorage.getItem("forecastNew"));
  for (i = 0; i < displayData.length; i++) {
    var cityDiv = $("<div></div>");
    cityDiv.addClass("column");
    var img = $("<img>");
    img.attr('src', 'https://openweathermap.org/img/wn/'+displayData[i].icon+'@2x.png');
    img.css({'width': '50px', 'height': '50px'});
    $(cityDiv).append(img);
    var datePara = $("<p></p>");
    var dateDis = dayjs(displayData[i].date).format("ddd");
    datePara.text(dateDis);
    $(cityDiv).append(datePara);
    var maxTempPara = $("<p></p>");
    var maxTempDis = displayData[i].maxTemp
    maxTempPara.text(maxTempDis+"°C ");
    $(cityDiv).append(maxTempPara);
    var tempPara = $("<p></p>");
    var tempDis = displayData[i].temp
    tempPara.text(tempDis+"°C ");
    $(cityDiv).append(tempPara);
    $(cityDiv).css({"background-color":"light", 
    "font-size":"16px","text-align":"center", 
    "border":"2px grey solid", "border-radius":"4px", "box-shadow":"3px 3px 4px grey",
    "font-weight":"400", "margin":"13px"});
    $("#displayWeather").append(cityDiv);
  }
