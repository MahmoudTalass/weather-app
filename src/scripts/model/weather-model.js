const KEY = "2b31c3c95d8f4664beb190158233107";
let isCelsius = false;
let currentTimeZone;
let forecastInfo;

async function setForecastInfo(location) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${location}&days=4`;

  const data = await fetch(url, { mode: "cors" });
  const forecastJson = await data.json();

  forecastInfo = forecastJson;
}

function getCurrentLocation() {
  const currentLocation = localStorage.getItem("location");
  return currentLocation;
}

function setCurrentLocation(location) {
  localStorage.setItem("location", location);
}

function getLocationData() {
  const locationData = forecastInfo.location;
  return locationData;
}

function getLocation() {
  const locationData = getLocationData();
  const city = locationData.name;
  const regionN = locationData.region;
  const countryN = locationData.country;

  return {
    city,
    regionN,
    countryN,
  };
}

function setTimeZone() {
  const locationData = getLocationData();

  currentTimeZone = locationData.tz_id;
}

function getDate() {
  const today = new Date();
  const dateAndTime = today.toLocaleString("en-US", {
    timeZone: currentTimeZone,
  });
  const dateAndTimeArr = dateAndTime.split(",");
  const date = dateAndTimeArr[0];

  return date;
}

function getDayName() {
  // wait because getDate() contains async operations
  const locationDate = getDate();
  const date = new Date(locationDate);
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

  return dayName;
}

function getTime() {
  const today = new Date();
  // wait because getTimeZone() contains async operations
  const dateAndTime = today.toLocaleString("en-US", {
    timeZone: currentTimeZone,
  });

  const dateAndTimeArr = dateAndTime.split(",");
  const fullTime = dateAndTimeArr[1].split(":");
  const time = `${fullTime[0]}:${fullTime[1]}`;
  const pmOram = fullTime[2].slice(-2);

  return { time, pmOram };
}

function getCurrentWeather() {
  return forecastInfo.current;
}

function getCurrentTemp() {
  const weatherInfo = getCurrentWeather();
  const tempF = weatherInfo.temp_f;
  const tempC = weatherInfo.temp_c;

  return isCelsius ? tempC : tempF;
}

function changeTempScale() {
  isCelsius = !isCelsius;
}

function getTempScale() {
  return isCelsius;
}

function getWeatherCondition() {
  const weather = getCurrentWeather();
  const weatherCondition = weather.condition.text;

  return weatherCondition;
}

function getWeatherConditionIcon() {
  const weather = getCurrentWeather();
  const weatherConditionIcon = weather.condition.icon;

  return weatherConditionIcon;
}

function getTempFeel() {
  const weatherInfo = getCurrentWeather();
  const feelsLikeC = weatherInfo.feelslike_c;
  const feelsLikeF = weatherInfo.feelslike_f;

  return isCelsius ? feelsLikeC : feelsLikeF;
}

function getHumidity() {
  const weatherInfo = getCurrentWeather();
  const { humidity } = weatherInfo;

  return humidity;
}

function getFutureWeather() {
  return forecastInfo.forecast;
}

async function searchLocations(input) {
  const url = `https://api.weatherapi.com/v1/search.json?key=${KEY}&q=${input}`;
  const data = await fetch(url, { mode: "cors" });
  const locationsJson = data.json();

  return locationsJson;
}

export {
  setForecastInfo,
  getTime,
  getDate,
  getDayName,
  getLocation,
  getCurrentTemp,
  changeTempScale,
  getTempScale,
  getWeatherCondition,
  getWeatherConditionIcon,
  getTempFeel,
  getHumidity,
  getFutureWeather,
  searchLocations,
  getCurrentLocation,
  setCurrentLocation,
  setTimeZone,
};
