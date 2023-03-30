var cityInfo =JSON.parse(localStorage.getItem("forecastNew"));
console.log(cityInfo);
for (i = 0; i < cityInfo.length; i++) {
    var cityDiv = $("#weatherDisplay")
    cityDiv.addClass("column")
    var img = $("<img>")
    img.attr('src', 'https://openweathermap.org/img/wn/'+cityInfo[i].icon+'@2x.png')
    img.css({'width': '50px', 'height': '50px'})
    $(cityDiv).append(img)
    var datePara = $("<p></p>");
    var dateDis = dayjs(cityInfo[i].date).format("ddd")
    datePara.text(dateDis)
    $(cityDiv).append(datePara)
    var maxTempPara = $("<p></p>");
    var maxTempDis = cityInfo[i].maxTemp
    maxTempPara.text(maxTempDis+"°C ")
    $(cityDiv).append(maxTempPara)
    var tempPara = $("<p></p>");
    var tempDis = cityInfo[i].temp
    tempPara.text(tempDis+"°C ")
    $(cityDiv).append(tempPara)
    $(cityDiv).css({"border":"2px black solid", "border-radius":"4px", "box-shadow":"3px 3px 4px grey", "margin":"5px", "background-color":"yellow", "font-size":"24px", "font-weight":"400"})
    $("#weatherDisplay").append(cityDiv)
  }

    var CurrentCityDiv = $("#currentCity")
    var city =
    var currentTempEl = displayData[0].temp
    currentTemp.text("Current Temp:"+" "+ currentTempEl+" "+"°C")
    $("#currentCity").append(currentTemp)
     currentTemp.css({"text-align":"center","font-size":"40px", "font-weight":"500"})
