$(document).ready(function() {
  const apiKey = "";P2J0kMgUdhFNUcSKWcLchQW5mh8zYI9V
  const apiUrl = "https://api.apilayer.com/exchangerates_data/convert";
  
  function getConversionRate(fromCurrency, toCurrency, amount) {
    const url = `${apiUrl}?apikey=${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`;
    return fetch(url).then(response => response.json());
  }
  
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
  

  $("#currencyFrom, #currencyTo, #value").on("change", updateConversionRate);
});
