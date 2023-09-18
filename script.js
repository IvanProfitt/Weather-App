const changeUnits=document.getElementById("unitChange");
let betterUnits=true;

const cityName=document.getElementById("cityName");
const cityTemp=document.getElementById("cityTemp");
const todayImg=document.getElementById("todayImg");
const weatherCondition=document.getElementById("weatherCondition");



const forecastOneDate=document.getElementById("forecastOneDate");
const forecastOneMin=document.getElementById("forecastOneMin");
const forecastOneMax=document.getElementById("forecastOneMax");
const imgOne=document.getElementById("imgOne");

const forecastTwoDate=document.getElementById("forecastTwoDate");
const forecastTwoMin=document.getElementById("forecastTwoMin");
const forecastTwoMax=document.getElementById("forecastTwoMax");
const imgTwo=document.getElementById("imgTwo");

const forecastThreeDate=document.getElementById("forecastThreeDate");
const forecastThreeMin=document.getElementById("forecastThreeMin");
const forecastThreeMax=document.getElementById("forecastThreeMax");
const imgThree=document.getElementById("imgThree");

function getDayOfWeek(epochTime) {
  const date = new Date(epochTime * 1000); // Convert seconds to milliseconds
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[date.getUTCDay()];
}



changeUnits.addEventListener("click", function(){
    if(betterUnits===true){
        fetch('http://api.weatherapi.com/v1/forecast.json?key=68c77b33187c450e90e174348231609&q=47150&days=3&aqi=no&alerts=no')
    .then(function(response) {
      return response.json();

    })
    .then(function(response){
      cityTemp.innerHTML=response.current.temp_c;
      cityName.innerHTML=response.location.name;
      weatherCondition.innerHTML=response.current.condition.text;
      todayImg.src="https:"+`${response.current.condition.icon}`;


      forecastOneDate.innerHTML=getDayOfWeek(response.forecast.forecastday[0].date_epoch);
      forecastOneMin.innerHTML=response.forecast.forecastday[0].day.maxtemp_c;
      forecastOneMax.innerHTML=response.forecast.forecastday[0].day.mintemp_c;
      imgOne.src="https:"+`${response.forecast.forecastday[0].day.condition.icon}`;

      forecastTwoDate.innerHTML=getDayOfWeek(response.forecast.forecastday[1].date_epoch);
      forecastTwoMin.innerHTML=response.forecast.forecastday[1].day.maxtemp_c;
      forecastTwoMax.innerHTML=response.forecast.forecastday[1].day.mintemp_c;
      imgTwo.src="https:"+`${response.forecast.forecastday[1].day.condition.icon}`;

      forecastThreeDate.innerHTML=getDayOfWeek(response.forecast.forecastday[2].date_epoch);
      forecastThreeMin.innerHTML=response.forecast.forecastday[2].day.maxtemp_c;
      forecastThreeMax.innerHTML=response.forecast.forecastday[2].day.mintemp_c;
      imgThree.src="https:"+`${response.forecast.forecastday[2].day.condition.icon}`;
      betterUnits=false;

    })
    .catch(function(err) {
      console.log(":(");

    });
  }
  else{
  fetch('http://api.weatherapi.com/v1/forecast.json?key=68c77b33187c450e90e174348231609&q=47150&days=3&aqi=no&alerts=no')
  .then(function(response) {
    return response.json();

  })
  .then(function(response){
    cityTemp.innerHTML=response.current.temp_f;
    cityName.innerHTML=response.location.name;
    weatherCondition.innerHTML=response.current.condition.text;
    todayImg.src="https:"+`${response.current.condition.icon}`;


    forecastOneDate.innerHTML=getDayOfWeek(response.forecast.forecastday[0].date_epoch);
    forecastOneMin.innerHTML=response.forecast.forecastday[0].day.maxtemp_f;
    forecastOneMax.innerHTML=response.forecast.forecastday[0].day.mintemp_f;
    imgOne.src="https:"+`${response.forecast.forecastday[0].day.condition.icon}`;

    forecastTwoDate.innerHTML=getDayOfWeek(response.forecast.forecastday[1].date_epoch);
    forecastTwoMin.innerHTML=response.forecast.forecastday[1].day.maxtemp_f;
    forecastTwoMax.innerHTML=response.forecast.forecastday[1].day.mintemp_f;
    imgTwo.src="https:"+`${response.forecast.forecastday[1].day.condition.icon}`;

    forecastThreeDate.innerHTML=getDayOfWeek(response.forecast.forecastday[2].date_epoch);
    forecastThreeMin.innerHTML=response.forecast.forecastday[2].day.maxtemp_f;
    forecastThreeMax.innerHTML=response.forecast.forecastday[2].day.mintemp_f;
    imgThree.src="https:"+`${response.forecast.forecastday[2].day.condition.icon}`;

  })
  .catch(function(err) {
    console.log(":(");
  });
  betterUnits=true;
}


})