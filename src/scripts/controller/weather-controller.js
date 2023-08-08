import {
  changeTempScale,
  getCurrentTemp,
  getDate,
  getDayName,
  getFutureWeather,
  getHumidity,
  getLocation,
  getTempFeel,
  getTempScale,
  getTime,
  getWeatherCondition,
  getWeatherConditionIcon,
} from "../model/weather-model";
import {
  displayDate,
  displayTime,
  displayDay,
  displayCity,
  displayRegion,
  displayCountry,
  displayCurrentTemp,
  displayTempScale,
  displayWeatherCondition,
  displayWeatherConditnionIcon,
  displayTempFeel,
  displayHumidity,
  displayFutureWeather,
  clearFutureWeatherCont,
} from "../view/weather-view";

async function updateTime(location) {
  const time = await getTime(location);
  displayTime(time);
}

async function updateDate(location) {
  const date = await getDate(location);
  displayDate(date);
}

async function updateDay(location) {
  const dayName = await getDayName(location);
  displayDay(dayName);
}

async function updateCity(location) {
  const receivedLocation = await getLocation(location);
  displayCity(receivedLocation.city);
}

async function updateRegion(location) {
  const receivedLocation = await getLocation(location);
  displayRegion(receivedLocation.regionN);
}

async function updateCountry(location) {
  const receivedLocation = await getLocation(location);
  displayCountry(receivedLocation.countryN);
}

async function updateCurrentTemp(location) {
  const currentTemp = await getCurrentTemp(location);
  displayCurrentTemp(currentTemp);
}

function showTempScale() {
  const currentScale = getTempScale();
  if (currentScale) {
    displayTempScale("C");
  } else {
    displayTempScale("F");
  }
}

async function updateTempFeel(location) {
  const tempFeel = await getTempFeel(location);
  displayTempFeel(tempFeel);
}

async function updateFutureWeather(location) {
  clearFutureWeatherCont();
  const futureWeather = await getFutureWeather(location);
  const futureWeatherArr = await Promise.all(futureWeather.forecastday);

  futureWeatherArr.forEach((forecast, index) => {
    if (index !== 0) {
      const date = forecast.date.substring(5);
      const tempF = forecast.day.avgtemp_f;
      const tempC = forecast.day.avgtemp_c;

      const temp = getTempScale() ? tempC : tempF;
      displayFutureWeather(date, temp);
    }
  });
}

function updateTempScale() {
  changeTempScale();
  showTempScale();
  updateCurrentTemp();
  updateTempFeel();
  updateFutureWeather();
}

async function updateWeatherCondition(location) {
  const weatherCondition = await getWeatherCondition(location);
  displayWeatherCondition(weatherCondition);
}

async function updateWeatherConditionIcon(location) {
  const weatherConditionIcon = await getWeatherConditionIcon(location);
  displayWeatherConditnionIcon(weatherConditionIcon);
}

async function updateHumidity(location) {
  const humidity = await getHumidity(location);
  displayHumidity(humidity);
}

export {
  updateTime,
  updateDate,
  updateDay,
  updateCity,
  updateRegion,
  updateCountry,
  updateCurrentTemp,
  updateTempScale,
  showTempScale,
  updateWeatherCondition,
  updateWeatherConditionIcon,
  updateTempFeel,
  updateHumidity,
  updateFutureWeather,
};
