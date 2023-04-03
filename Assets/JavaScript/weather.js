//                        Sydney                 //
var sydW = []
var sydForecast= []
indexS = 0
fetch("https://api.openweathermap.org/data/2.5/forecast?q=sydney&limit=5&units=metric&appid=7ceb463b0dbb74278996f51113e27ee3", {
      method: 'GET',
      redirect: 'follow',
    })
      .then(function (response) {
        return response.json();
      })

      .then(function (data1) {
    
        sydW.push(data1)
        for (i = 0; i < 5; i++) {
            var temp = sydW[0].list[indexS].main.temp
            var maxTemp = sydW[0].list[indexS].main.temp_max
            var city = sydW[0].city.name
            var rawDate = dayjs.unix(sydW[0].list[indexS].dt)
            var date = rawDate.format("MMM D, YYYY");
            var icon = sydW[0].list[indexS].weather[0].icon;
           sydForecast.push({ "temp": temp, "name": city, "date": date, "icon": icon, "maxTemp": maxTemp });
            indexS += 8;
            localStorage.setItem("sydForecast", JSON.stringify(sydForecast));
            console.log(sydForecast);
      }
      })   
    
          var sydDisp = JSON.parse(localStorage.getItem("sydForecast"))
           var nameDiv = $("<div></div>")
           $(nameDiv).addClass("column mx-6")
           var namePara = $("<p></p>")
           var nameEl = sydDisp[0].name
           namePara.text(nameEl)
           $(nameDiv).append(namePara)
           var tempPara = $("<p></p>")
           var tempEl = sydDisp[0].temp
           tempPara.text("Current:"+" "+tempEl+" "+"°C")
            $(nameDiv).append(tempPara)
           var imgPara = $("<img>")
           var imgEl = sydDisp[0].icon
           $(imgPara).attr("src", 'https://openweathermap.org/img/wn/'+imgEl+'@2x.png')
           imgPara.css({"width":"50px","height":"50px","float":"left"})
            $(nameDiv).prepend(imgPara)
            $(nameDiv).css({"background-image": "linear-gradient(to right top, #ccc1e5, #b2a3de, #9787d6, #786bcf, #5351c7)","font-size":"24px","border":"2px solid black","border-radius":"15px","box-shadow":"4px 4px 6px grey"})
            $("#heroCity").append(nameDiv)
//                        Melbourne                 //
var melW = []
var melForecast= []
indexM = 0
fetch("https://api.openweathermap.org/data/2.5/forecast?q=melbourne,au&limit=5&units=metric&appid=7ceb463b0dbb74278996f51113e27ee3", {
      method: 'GET',
      redirect: 'follow',
    })
      .then(function (response) {
        return response.json();
      })

      .then(function (data2) {
    
        melW.push(data2)
        for (i = 0; i < 5; i++) {
            var temp = melW[0].list[indexM].main.temp
            var maxTemp = melW[0].list[indexM].main.temp_max
            var city = melW[0].city.name
            var rawDate = dayjs.unix(melW[0].list[indexM].dt)
            var date = rawDate.format("MMM D, YYYY");
            var icon = melW[0].list[indexM].weather[0].icon;
           melForecast.push({ "temp": temp, "name": city, "date": date, "icon": icon, "maxTemp": maxTemp });
            indexM += 8;
            localStorage.setItem("melForecast", JSON.stringify(melForecast));
            console.log(melForecast);
      }
      })   
    
          var melDisp = JSON.parse(localStorage.getItem("melForecast"))
           var nameDiv = $("<div></div>")
           $(nameDiv).addClass("column mx-6")
           var namePara = $("<p></p>")
           var nameEl = melDisp[0].name
           namePara.text(nameEl)
          $(nameDiv).append(namePara)
          var tempPara = $("<p></p>")
           var tempEl = melDisp[0].temp
           tempPara.text("Current:"+" "+tempEl+" "+"°C")
            $(nameDiv).append(tempPara)
           var imgPara = $("<img>")
           var imgEl = melDisp[0].icon
           $(imgPara).attr("src", 'https://openweathermap.org/img/wn/'+imgEl+'@2x.png')
           imgPara.css({"width":"50px","height":"50px","float":"left"})
            $(nameDiv).prepend(imgPara)
            $(nameDiv).css({"background-image": "linear-gradient(to right top, #ccc1e5, #b2a3de, #9787d6, #786bcf, #5351c7)","font-size":"24px","border":"2px solid black","border-radius":"15px","box-shadow":"4px 4px 6px grey"})
            $("#heroCity").append(nameDiv)
//                    London                //
var lonW = []
var lonForecast= []
indexL = 0
fetch("https://api.openweathermap.org/data/2.5/forecast?q=london&limit=5&units=metric&appid=7ceb463b0dbb74278996f51113e27ee3", {
      method: 'GET',
      redirect: 'follow',
    })
      .then(function (response) {
        return response.json();
      })

      .then(function (data) {
    
        lonW.push(data)
        console.log(lonW)
        for (i = 0; i < 5; i++) {
            var temp = lonW[0].list[indexL].main.temp
            var maxTemp = lonW[0].list[indexL].main.temp_max
            var city = lonW[0].city.name
            var rawDate = dayjs.unix(lonW[0].list[indexL].dt)
            var date = rawDate.format("MMM D, YYYY");
            var icon = lonW[0].list[indexL].weather[0].icon;
           lonForecast.push({ "temp": temp, "name": city, "date": date, "icon": icon, "maxTemp": maxTemp });
            indexL += 8;
            localStorage.setItem("lonForecast", JSON.stringify(lonForecast));
            console.log(lonForecast);
      }
      })   
    
          var lonDisp = JSON.parse(localStorage.getItem("lonForecast"))
           var nameDiv = $("<div></div>")
           $(nameDiv).addClass("column mx-6")
           var namePara = $("<p></p>")
           var nameEl = lonDisp[0].name
           namePara.text(nameEl)
           $(nameDiv).append(namePara)
           var tempPara = $("<p></p>")
           var tempEl = lonDisp[0].temp
           tempPara.text("Current:"+" "+tempEl+" "+"°C")
            $(nameDiv).append(tempPara)
           var imgPara = $("<img>")
           var imgEl = lonDisp[0].icon
           $(imgPara).attr("src", 'https://openweathermap.org/img/wn/'+imgEl+'@2x.png')
           imgPara.css({"width":"50px","height":"50px","float":"left"})
            $(nameDiv).prepend(imgPara)
            $(nameDiv).css({"background-image": "linear-gradient(to right top, #ccc1e5, #b2a3de, #9787d6, #786bcf, #5351c7)","font-size":"24px","border":"2px solid black","border-radius":"15px","box-shadow":"4px 4px 6px grey"})
            $("#heroCity").append(nameDiv)
