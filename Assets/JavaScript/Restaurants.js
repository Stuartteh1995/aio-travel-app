//to get the city info stored in the local storage by the home page
var cityInfo =JSON.parse(localStorage.getItem("forecastNew"));
console.log(cityInfo);

// to fetch a list of restaurants from the Yelp API
const city=cityInfo[0].city;
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const targetUrl =
"https://api.yelp.com/v3/businesses/search?limit=5&term=restaurants&location=" + encodeURIComponent(city);
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
.then((data) => {
      cityData= data;
      localStorage.setItem("cityData", JSON.stringify(cityData));
      console.log(cityData)})
.catch((err) => console.error(err));  

var cityData = JSON.parse(localStorage.getItem("cityData"));
var response =cityData.businesses;
console.log(response);

  for (var i=0; i<response.length; i++){
    var infoR =$('<div>');
    $(infoR).addClass('columns is-fullwidth').css({"border-bottom":"1px black solid",
    "margin":"3px"});
    $('#restDiv').append(infoR);
    var imgDiv =$('<div>');
    $(imgDiv).addClass('column is-4');
    var detailsDiv=$('<div>');
    $(detailsDiv).addClass('column is-8');
    var imageI = $('<img>').attr('src', response[i].image_url)
                         .attr('alt', 'restaurant image')
                         .css('height', '100px');
    var nameP = $('<p>').addClass('title').text(response[i].name);
    console.log(nameP.text(), i);
    var addressP = $('<p>').addClass('subtitle');
    var addressText = response[i].location.address1+ " " +
                      response[i].location.city
                      
    $(addressP).text(addressText);
    $(infoR).append(imgDiv, detailsDiv);	
    $(imgDiv).append(imageI);
    $(detailsDiv).append(nameP,addressP);
    }

//to display weather
for (i = 0; i < cityInfo.length; i++) {
  var infoW= $('<div>');
  $(infoW).addClass('columns').css({"border-bottom":"1px black solid",
  "margin":"3px"});
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
  $(wDiv).css({"margin":"5px", 
  "background-color":"light", 
  "font-size":"16px","text-align":"center", 
  "font-weight":"400"})
}
  /* to display city info at the top

    var currentC = $('#currentC');
    currentC.text(cityInfo[0].city).css('text-transform', 'uppercase');
    var currentT = $('#currentT');
    currentT.text(cityInfo[0].temp +"°C").css('text-transform', 'uppercase');
    console.log(currentT);
    var currentI = $("#currentI");
    currentI.attr('src', 'https://openweathermap.org/img/wn/'+cityInfo[0].icon+'@2x.png').css({'width': '50px', 'height': '50px'})
    

  */