// to get the city info stored in the local storage by the home page
var cityInfo = JSON.parse(localStorage.getItem("forecastNew"));
console.log(cityInfo);

// to set parameters to get a list of 5 businesses from the Yelp API
const city = cityInfo[0].city;
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const targetUrl =
  "https://api.yelp.com/v3/businesses/search?limit=5&term=restaurants&location=" +
  encodeURIComponent(city);
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer alm9ynRdfhOmNUW0k24GpsIYNmtjTnI0xMMVCe6IhKGWdMpW33QdWMCeytCiy3XoftMISkJacqZ-SlPvKIo76lgWG9qZ3wnjQSSHoKIxCJ_OAMKzhJDhPyxsQZAiZHYx",
  },
};

//To fetch the business information - thanks Sid for the help with the fetch loading before the bage.
async function fetchRestaurants() {
  try {
    const response = await fetch(proxyUrl + targetUrl, options);
    const data = await response.json();
    cityData = data;
    localStorage.setItem("cityData", JSON.stringify(cityData));
    console.log(cityData);

    for (var i = 0; i < cityData.businesses.length; i++) {
      var infoR = $("<div>");
      $(infoR)
        .addClass("columns is-fullwidth")
        .css({ "margin":"13px", 
        "background-color":"light", 
        "font-size":"16px","text-align":"center", 
        "border":"2px grey solid", "border-radius":"4px", "box-shadow":"3px 3px 4px grey",
        "font-weight":"400", "padding":"11px"});
      $("#restDiv").append(infoR);
      var imgDiv = $("<div>");
      $(imgDiv).addClass("column is-4");
      var detailsDiv = $("<div>");
      $(detailsDiv).addClass("column is-8");
      var imageI = $("<img>")
        .attr("src", cityData.businesses[i].image_url)
        .attr("alt", "restaurant image")
        .css("height", "100px");
      var nameP = $("<p>")
        .addClass("title")
        .text(cityData.businesses[i].name);
      console.log(nameP.text(), i);
      var addressP = $("<p>").addClass("subtitle");
      var addressText =
        cityData.businesses[i].location.address1 +
        " " +
        cityData.businesses[i].location.city;

      $(addressP).text(addressText);
      $(infoR).append(imgDiv, detailsDiv);
      $(imgDiv).append(imageI);
      $(detailsDiv).append(nameP, addressP);
    }
  } catch (err) {
    console.error(err);
  }
}

fetchRestaurants();


  //to display weather from data locally stored by index.html
  for (i = 0; i < cityInfo.length; i++) {
    var infoW= $('<div>');
    $(infoW).addClass('columns').css({"margin":"13px"});
    $('#cityDiv').append(infoW);
    var wDiv =$('<div>');
    $(wDiv).addClass('column');
    var img = $("<img>")
    img.attr('src', 'https://openweathermap.org/img/wn/'+cityInfo[i].icon+'@2x.png').css({'width': '50px', 'height': '50px'});
    var datePara = $("<p></p>");
    var dateDis = dayjs(cityInfo[i].date).format("ddd")
    datePara.text(dateDis)
    console.log(datePara.text());
    var maxTempPara = $("<p></p>");
    var maxTempDis = cityInfo[i].maxTemp
    maxTempPara.text(maxTempDis+"°C ")
    var tempPara = $("<p></p>");
    var tempDis = cityInfo[i].temp;
    tempPara.text(tempDis+"°C ")
    $(infoW).append(wDiv);
    $(wDiv).append(img, datePara, maxTempPara, tempPara);
    $(wDiv).css({ 
    "background-color":"light", 
    "font-size":"16px","text-align":"center", 
    "border":"2px grey solid", "border-radius":"4px", "box-shadow":"3px 3px 4px grey",
    "font-weight":"400"})
  }

  // mobile menu
var burgerIcon = document.querySelector('#burger');
var navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active')
});