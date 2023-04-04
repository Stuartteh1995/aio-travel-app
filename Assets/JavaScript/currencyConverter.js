$(document).ready(function() {
  // api key and link
  const apiKey = "";P2J0kMgUdhFNUcSKWcLchQW5mh8zYI9V
  const apiUrl = "https://api.apilayer.com/exchangerates_data/convert";
  
  //function to run the currency conversion
  function getConversionRate(fromCurrency, toCurrency, amount) {
    //sent api link with variables to get back data and return as a json
    const url = `${apiUrl}?apikey=${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`;
    return fetch(url).then(response => response.json());
  }
  
  //updates the value to display the conversion
  function updateConversionRate() {
    const fromCurrency = $("#currencyFrom").val();
    const toCurrency = $("#currencyTo").val();
    const amount = $("#value").val();
    
    if (fromCurrency && toCurrency && amount) {
      getConversionRate(fromCurrency, toCurrency, amount)
        .then(data => {
          const convertedValue = data.result.toFixed(2);
          $("#currencyOutput").val(convertedValue);
        })
        .catch(error => console.log(error));
    }
  }
  
//any changest to the feild would trigger a change in result
  $("#currencyFrom, #currencyTo, #value").on("change", updateConversionRate);
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
