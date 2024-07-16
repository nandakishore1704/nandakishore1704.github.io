const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const apiKey = "522d53ef4d9d39d43ae1c6a508c0d231";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const a = "Srikakulam";
async function getWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) +
    `<span style="font-size: 0.35em"><sup>°C</sup></span>`;
  document.querySelector(".humid").innerHTML =
    data.main.humidity + `<span style="font-size: 0.35em"><sup>%</sup></span>`;
  document.querySelector(".wind").innerHTML =
    data.wind.speed + `<span style="font-size: 0.35em"><sup>km/h</sup></span>`;
}
getWeather(a);
searchBtn.addEventListener("click", () => {
  getWeather(searchBox.value);
  searchBox.value = "";
});
