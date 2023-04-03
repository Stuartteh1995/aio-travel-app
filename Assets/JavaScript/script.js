$(document).ready(function(){
   // Eventlistener to start fetching weather data
  $("#btnStart").click(function(event){
       // to prevent page refresh on click 
    event.preventDefault()
    // to empty divs to be ready for new weather info
        $("#addWeather").empty()
        $("#cityName").empty()
    // decalaring  variables for the fetch function
        var cityWeather = []
        var index = 0
        var weatherForecast = []
        // Recieving city name from the input on click
        var El = $("#cityEl").val();
        // if empty show warning in red
        if (!El){
          $("#cityEl").attr("placeholder","Please enter name of the city")
          $("input").addClass("your-class")
      return;
     }
       // fetch city weather from openwaethermap
     fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + El + "&limit=5&units=metric&appid=7ceb463b0dbb74278996f51113e27ee3", {
          method: 'GET',
          redirect: 'follow',
        })
          .then(function (response) {
            return response.json();
          })
    
          .then(function (data) {
            cityWeather.push(data);
            // printing city name on the html page
            var namePara = $("<div></div>")
            namePara.css({"text-align":"center","font-size":"60px", "font-weight":"700"})
            namePara.text(El.toUpperCase())
            $("#cityName").append(namePara)
    // for loop to pull 5 days weather forecast
            for (i = 0; i < 5; i++) {
                var temp = cityWeather[0].list[index].main.temp
                var maxTemp = cityWeather[0].list[index].main.temp_max
                var city = cityWeather[0].city.name
                var rawDate = dayjs.unix(cityWeather[0].list[index].dt)
                var date = rawDate.format("MMM D, YYYY");
                var icon = cityWeather[0].list[index].weather[0].icon;
                weatherForecast.push({ "temp": temp, "city": city, "date": date, "icon": icon, "maxTemp": maxTemp });
                index += 8;
                //setting local storage with weather data
                localStorage.setItem("forecastNew", JSON.stringify(weatherForecast));
                console.log(weatherForecast);
              }
    // creating history buttons
            var myBtn = $("<button></button>")
            var ElUpper = El.toUpperCase()
            myBtn.text(ElUpper)
            $("#attBtn").append(myBtn);
            myBtn.attr("id", El);
            myBtn.css("width", "200px")
            myBtn.attr("class", "button is-info is-outlined m-2 cityBtn")
    // retrieval of weather dat from local storage to display on html
            var displayData = JSON.parse(localStorage.getItem("forecastNew"));
            var currentTemp = $("<div></div>")
            var currentTempEl = displayData[0].temp
            currentTemp.text("Current Temp:"+" "+ currentTempEl+" "+"°C")
            $("#cityName").append(currentTemp)
            currentTemp.css({"text-align":"center","font-size":"40px", "font-weight":"500"})
    
            for (i = 0; i < displayData.length; i++) {
              var cityDiv = $("<div></div>")
              cityDiv.addClass("column")
              var img = $("<img>")
              img.attr('src', 'https://openweathermap.org/img/wn/'+displayData[i].icon+'@2x.png')
              img.css({'width': '50px', 'height': '50px'})
              $(cityDiv).append(img)
              var datePara = $("<p></p>");
              var dateDis = dayjs(displayData[i].date).format("ddd")
              datePara.text(dateDis)
              $(cityDiv).append(datePara)
              var maxTempPara = $("<p></p>");
              var maxTempDis = displayData[i].maxTemp
              maxTempPara.text(maxTempDis+"°C ")
              $(cityDiv).append(maxTempPara)
              var tempPara = $("<p></p>");
              var tempDis = displayData[i].temp
              tempPara.text(tempDis+"°C ")
              $(cityDiv).append(tempPara)
              $(cityDiv).css({"border":"2px black solid", "border-radius":"4px", "box-shadow":"3px 3px 4px grey", "margin":"5px", "background-image": "linear-gradient(to left bottom, #a87def, #ff71b7, #ff8c7a, #f5b85d, #c0df7c)", "font-size":"24px", "font-weight":"400"})
              $("#addWeather").append(cityDiv)
            }
    
           })
        
        })
    
    
    
    
    
    
    
    
    // event listener for history buttons   
    
      $("#attBtn").click(function (event) {
        var buttonClicked = event.target
        // on clicking button retrieve name of the city to fetch weather data
        if (buttonClicked.matches(".cityBtn")){
          console.log("button")
        var abc = event.target.id
        var cityWeather = []
        var index = 0
        var weatherForecast = []
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + abc + "&limit=5&units=metric&appid=7ceb463b0dbb74278996f51113e27ee3", {
          method: 'GET',
          redirect: 'follow',
        })
          .then(function (response) {
            return response.json();
          })
    
          .then(function (data) {
    
            cityWeather.push(data);
            // empty divs before displaying dat on html
            $("#addWeather").empty()
            $("#cityName").empty()
          // Display name of the city on html
            var El = $(buttonClicked).text()
            var namePara = $("<div></div>")
            namePara.css({"text-align":"center","font-size":"60px", "font-weight":"700"})
            namePara.text(El.toUpperCase())
            $("#cityName").append(namePara)
    // for loop to generate 5 days forecat and local storage
    
            for (i = 0; i < 5; i++) {
                var temp = cityWeather[0].list[index].main.temp
                var maxTemp = cityWeather[0].list[index].main.temp_max
                var city = cityWeather[0].city.name
                var rawDate = dayjs.unix(cityWeather[0].list[index].dt)
                var date = rawDate.format("MMM D, YYYY");
                var icon = cityWeather[0].list[index].weather[0].icon;
                weatherForecast.push({ "temp": temp, "city": city, "date": date, "icon": icon, "maxTemp": maxTemp });
                index += 8;
                localStorage.setItem("forecastNew", JSON.stringify(weatherForecast));
                console.log(weatherForecast);
              }
              // retrieval of local storage to display weather info on html
              var displayData = JSON.parse(localStorage.getItem("forecastNew"));
              var currentTemp = $("<div></div>")
              var currentTempEl = displayData[0].temp
              currentTemp.text("Current Temp:"+" "+ currentTempEl+" "+"°C")
              $("#cityName").append(currentTemp)
              currentTemp.css({"text-align":"center","font-size":"40px", "font-weight":"500"})
      
              for (i = 0; i < displayData.length; i++) {
                var cityDiv = $("<div></div>")
                cityDiv.addClass("column")
                var img = $("<img>")
                img.attr('src', 'https://openweathermap.org/img/wn/'+displayData[i].icon+'@2x.png')
                img.css({'width': '50px', 'height': '50px'})
                $(cityDiv).append(img)
                var datePara = $("<p></p>");
                var dateDis = dayjs(displayData[i].date).format("ddd")
                datePara.text(dateDis)
                $(cityDiv).append(datePara)
                var maxTempPara = $("<p></p>");
                var maxTempDis = displayData[i].maxTemp
                maxTempPara.text(maxTempDis+"°C ")
                $(cityDiv).append(maxTempPara)
                var tempPara = $("<p></p>");
                var tempDis = displayData[i].temp
                tempPara.text(tempDis+"°C ")
                $(cityDiv).append(tempPara)
                $(cityDiv).css({"border":"2px black solid", "border-radius":"4px", "box-shadow":"3px 3px 4px grey", "margin":"5px", "background-image": "linear-gradient(to left bottom, #a87def, #ff71b7, #ff8c7a, #f5b85d, #c0df7c)", "font-size":"24px", "font-weight":"400"})
                $("#addWeather").append(cityDiv)
                // stop propogation of click event
                event.stopPropagation()
              }
            
          })
          
        }
    
      })
    
    })
    