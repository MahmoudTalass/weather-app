const KEY = "2b31c3c95d8f4664beb190158233107";
let isCelsius = false;
let currentTimeZone;

async function getForecastInfo(location) {
  try {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${location}&days=4`;
    const data = await fetch(url, { mode: "cors" });
    const forecastJson = await data.json();

    return forecastJson;
  } catch (err) {
    console.log(`Request failed: ${err}`);
    throw err;
  }
}

function getCurrentLocation() {
  const currentLocation = localStorage.getItem("location");
  return currentLocation;
}

function setCurrentLocation(location) {
  localStorage.setItem("location", location);
}

async function getLocationData(location) {
  // wait because getForecastInfo() is an async operation
  const data = await getForecastInfo(location);
  const locationData = await data.location;
  return locationData;
}

async function getLocation(location) {
  // wait because getLocationData() contains async operation
  const locationData = await getLocationData(location);
  const city = locationData.name;
  const regionN = locationData.region;
  const countryN = locationData.country;

  return {
    city,
    regionN,
    countryN,
  };
}

async function setTimeZone(location) {
  // wait because getLocationData() contains async operations
  const locationData = await getLocationData(location);
  console.log(locationData);

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

async function getCurrentWeather(location) {
  const weatherInfo = await getForecastInfo(location);

  return weatherInfo.current;
}

async function getCurrentTemp(location) {
  const weatherInfo = await getCurrentWeather(location);
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

async function getWeatherCondition(location) {
  const weather = await getCurrentWeather(location);
  const weatherCondition = weather.condition.text;

  return weatherCondition;
}

async function getWeatherConditionIcon(location) {
  const weather = await getCurrentWeather(location);
  const weatherConditionIcon = weather.condition.icon;

  return weatherConditionIcon;
}

async function getTempFeel(location) {
  const weatherInfo = await getCurrentWeather(location);
  const feelsLikeC = weatherInfo.feelslike_c;
  const feelsLikeF = weatherInfo.feelslike_f;

  return isCelsius ? feelsLikeC : feelsLikeF;
}

async function getHumidity(location) {
  const weatherInfo = await getCurrentWeather(location);
  const { humidity } = weatherInfo;

  return humidity;
}

async function getFutureWeather(location) {
  const futureWeather = await getForecastInfo(location);

  return futureWeather.forecast;
}

async function searchLocations(input) {
  const url = `https://api.weatherapi.com/v1/search.json?key=${KEY}&q=${input}`;
  const data = await fetch(url, { mode: "cors" });
  const locationsJson = data.json();

  return locationsJson;
}

export {
  getForecastInfo,
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
