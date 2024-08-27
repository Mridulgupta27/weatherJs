const apiKey = "c4bf81d14e5f07dd8bc9b1175399e141";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
  const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);

  if(response.status == 404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display ="none";
    document.querySelector(".search input").value ="";
  }
  else{
    var data = await response.json();
  // console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src ="images/cloud.png";
  }
  else if(data.weather[0].main == "Clear"){
    weatherIcon.src ="images/clear.png";
  }
  else if(data.weather[0].main == "Snow"){
    weatherIcon.src ="images/snow.png";
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src ="images/rain.png";
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src ="images/drizzle.png";
  }

  document.querySelector(".weather").style.display ="block";
  document.querySelector(".error").style.display ="none";
  document.querySelector(".search input").value ="";
  }

  

}


searchBtn.addEventListener("click", () => {
  if (searchBox.value.trim() !== "") {
    checkWeather(searchBox.value);
    searchBox.value = ""; 
  }
});
