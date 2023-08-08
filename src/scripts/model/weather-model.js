const KEY = "2b31c3c95d8f4664beb190158233107";
let isCelsius = false;

async function getForecastInfo(location = "Greenbelt") {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${location}&days=4`;
  const data = await fetch(url, { mode: "cors" });
  if (data.ok) {
    const forecastJson = await data.json();

    return forecastJson;
  }
  return false;
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

async function getTimeZone(location) {
  const today = new Date();

  // wait because getLocationData() contains async operations
  const locationData = await getLocationData(location);
  const timeZone = today.toLocaleString("en-US", {
    timeZone: locationData.tz_id,
  });

  return timeZone;
}

async function getDate(location) {
  // wait because getTimeZone() contains async operations
  const timeZone = await getTimeZone(location);
  const date = timeZone.substring(0, 8);

  return date;
}

async function getDayName(location) {
  // wait because getDate() contains async operations
  const date = new Date(await getDate(location));
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  return dayName;
}

async function getTime(location) {
  // wait because getTimeZone() contains async operations
  const timeZone = await getTimeZone(location);
  const time = timeZone.substring(10);

  return `${time}`;
}

async function getCurrentWeather(location) {
  const weatherInfo = await getForecastInfo(location);
  console.log(weatherInfo);
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
};
