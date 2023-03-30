var myHeaders = new Headers();
myHeaders.append("apikey", "API KEY GOES HERE");
// P2J0kMgUdhFNUcSKWcLchQW5mh8zYI9V

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


var fromCurrency = 'USD';
var toCurrency = 'AUD';
var amount = 40;

fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
