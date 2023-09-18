const cityName=document.getElementById("cityName");
const cityTemp=document.getElementById("cityTemp");

fetch('http://api.weatherapi.com/v1/current.json?key=68c77b33187c450e90e174348231609&q=47150&aqi=no')
  .then(function(response) {
    return response.json();

  })
  .then(function(response){
    cityTemp.innerHTML=response.current.temp_f;
    cityName.innerHTML=response.location.name;

  })
  .catch(function(err) {
    console.log(":(");
  });