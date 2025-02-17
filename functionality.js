
const apiKey = "e8f0e3083b11d783f3af2e891a7fda1a";
const form = document.getElementById("inputbar")
const searchBar = document.getElementById("cityinput");
const searchBtn = document.getElementById("search");
const currenticon = document.querySelector(".mainicon")
const textForHumidity ="Humidity";
url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=`;



async function checkForWeather(city){
   
   const response = await fetch(url + city + `&appid=${apiKey}`);
   var data =  await response.json();
   console.log(data);
   
   document.querySelector(".city").textContent = data.name;
   document.querySelector(".temp").textContent = data.main.temp + " °F";
   document.querySelector(".humiditypercent ").textContent = data.main.humidity + "% Humidity";
   document.querySelector(".windspeedmph ").textContent= data.wind.speed + " mph";

   if(data.weather[0].main == "Clouds"){
    currenticon.src = "cloudy.png";
   }
   else if(data.weather[0].main == "Rain"){
    currenticon.src = "rain-removebg.png";
   }
   else if(data.weather[0].main == "Clear"){
    currenticon.src = "sunny.png";
   }
   else if(data.weather[0].main == "Snow"){
    currenticon.src = "snow.png";
   }
   else if(data.weather[0].main == "Drizzle"){
    currenticon.src = "drizzle.png";
   } else {
    currenticon.src = "if-weather-2-2682849_90781.png"
   }
}



form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForWeather(searchBar.value);
});

searchBtn.addEventListener("click", () =>{
    checkForWeather(searchBar.value);
})
