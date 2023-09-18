const changeUnits=document.getElementById("unitChange");
const locationForm=document.getElementById("locationForm");
let betterUnits=true;
let locationInfo=47150;

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

locationForm.addEventListener("submit",function(){
  event.preventDefault()
  locationInfo=document.getElementById("locationChange").value;
  printF();
})

function printF(){
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=68c77b33187c450e90e174348231609&q=${locationInfo}&days=3&aqi=no&alerts=no`)
  .then(function(response) {
    return response.json();

  })
  .then(function(response){
    cityTemp.innerHTML=response.current.temp_f  + " \u00b0F";
    cityName.innerHTML=response.location.name;
    weatherCondition.innerHTML=response.current.condition.text;
    todayImg.src="https:"+`${response.current.condition.icon}`;


    forecastOneDate.innerHTML=getDayOfWeek(response.forecast.forecastday[0].date_epoch);
    forecastOneMin.innerHTML=response.forecast.forecastday[0].day.maxtemp_f + " \u00b0F";
    forecastOneMax.innerHTML=response.forecast.forecastday[0].day.mintemp_f + " \u00b0F" ;
    imgOne.src="https:"+`${response.forecast.forecastday[0].day.condition.icon}`;

    forecastTwoDate.innerHTML=getDayOfWeek(response.forecast.forecastday[1].date_epoch);
    forecastTwoMin.innerHTML=response.forecast.forecastday[1].day.maxtemp_f + " \u00b0F";
    forecastTwoMax.innerHTML=response.forecast.forecastday[1].day.mintemp_f + " \u00b0F";
    imgTwo.src="https:"+`${response.forecast.forecastday[1].day.condition.icon}`;

    forecastThreeDate.innerHTML=getDayOfWeek(response.forecast.forecastday[2].date_epoch);
    forecastThreeMin.innerHTML=response.forecast.forecastday[2].day.maxtemp_f + " \u00b0F";
    forecastThreeMax.innerHTML=response.forecast.forecastday[2].day.mintemp_f + " \u00b0F";
    imgThree.src="https:"+`${response.forecast.forecastday[2].day.condition.icon}`;

  })
  .catch(function(err) {
    console.log(":(");
  });
  betterUnits=true;

}

changeUnits.addEventListener("click", function(){
  changeUnit();
})
function changeUnit(){
    if(betterUnits===true){
      fetch(`https://api.weatherapi.com/v1/forecast.json?key=68c77b33187c450e90e174348231609&q=${locationInfo}&days=3&aqi=no&alerts=no`)
      .then(function(response) {
        return response.json();

      })
      .then(function(response){
        cityTemp.innerHTML=response.current.temp_c + " \u00b0C";
        cityName.innerHTML=response.location.name;
        weatherCondition.innerHTML=response.current.condition.text;
        todayImg.src="https:"+`${response.current.condition.icon}`;


        forecastOneDate.innerHTML=getDayOfWeek(response.forecast.forecastday[0].date_epoch);
        forecastOneMin.innerHTML=response.forecast.forecastday[0].day.maxtemp_c + " \u00b0C";
        forecastOneMax.innerHTML=response.forecast.forecastday[0].day.mintemp_c + " \u00b0C";
        imgOne.src="https:"+`${response.forecast.forecastday[0].day.condition.icon}`;

        forecastTwoDate.innerHTML=getDayOfWeek(response.forecast.forecastday[1].date_epoch);
        forecastTwoMin.innerHTML=response.forecast.forecastday[1].day.maxtemp_c + " \u00b0C";
        forecastTwoMax.innerHTML=response.forecast.forecastday[1].day.mintemp_c + " \u00b0C";
        imgTwo.src="https:"+`${response.forecast.forecastday[1].day.condition.icon}`;

        forecastThreeDate.innerHTML=getDayOfWeek(response.forecast.forecastday[2].date_epoch);
        forecastThreeMin.innerHTML=response.forecast.forecastday[2].day.maxtemp_c + " \u00b0C";
        forecastThreeMax.innerHTML=response.forecast.forecastday[2].day.mintemp_c + " \u00b0C";
        imgThree.src="https:"+`${response.forecast.forecastday[2].day.condition.icon}`;
        betterUnits=false;

      })
      .catch(function(err) {
        console.log(":(");

      });
  }
  else{
    printF();
}
}


printF();