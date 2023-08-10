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
  searchLocations,
  getCurrentLocation,
  setTimeZone,
  setForecastInfo,
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
  displayLocationOption,
  clearLocationOptions,
  toggleLoadingPage,
} from "../view/weather-view";

function updateTime() {
  const time = getTime();
  displayTime(time);
}

function updateDate() {
  const date = getDate();
  displayDate(date);
}

function updateDay() {
  const dayName = getDayName();
  displayDay(dayName);
}

function updateCity() {
  const receivedLocation = getLocation();
  displayCity(receivedLocation.city);
}

function updateRegion() {
  const receivedLocation = getLocation();
  displayRegion(receivedLocation.regionN);
}

function updateCountry() {
  const receivedLocation = getLocation();
  displayCountry(receivedLocation.countryN);
}

function updateCurrentTemp() {
  const currentTemp = getCurrentTemp();
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

function updateTempFeel() {
  const tempFeel = getTempFeel();
  displayTempFeel(tempFeel);
}

function updateFutureWeather() {
  clearFutureWeatherCont();
  const futureWeather = getFutureWeather();
  const futureWeatherArr = futureWeather.forecastday;

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

function updateWeatherCondition() {
  const weatherCondition = getWeatherCondition();
  displayWeatherCondition(weatherCondition);
}

function updateWeatherConditionIcon() {
  const weatherConditionIcon = getWeatherConditionIcon();
  displayWeatherConditnionIcon(weatherConditionIcon);
}

function updateHumidity() {
  const humidity = getHumidity();
  displayHumidity(humidity);
}

async function updateLocationOptions(input) {
  clearLocationOptions();

  const locationsArr = await searchLocations(input);
  locationsArr.forEach((location) => {
    const { name, region, country } = location;
    const fullLocation = `${name}, ${region}, ${country}`;
    displayLocationOption(fullLocation);
  });
  console.log(locationsArr);
}

async function startProgram() {
  toggleLoadingPage();

  const currentLocation = getCurrentLocation();
  await setForecastInfo(currentLocation);

  setTimeZone();

  updateWeatherCondition();
  updateWeatherConditionIcon();
  updateHumidity();
  updateTempFeel();
  updateCurrentTemp();
  updateFutureWeather();

  updateCity();
  updateRegion();
  updateCountry();

  updateTime();
  updateDate();
  updateDay();

  showTempScale();

  toggleLoadingPage();
}

function setTimeIntervals() {
  setInterval(() => {
    updateDate();
    updateDay();
    updateTime();
  }, 20000);

  setInterval(async () => {
    const currentLocation = getCurrentLocation();
    await setForecastInfo(currentLocation);

    updateWeatherCondition();
    updateWeatherConditionIcon();
    updateHumidity();
    updateTempFeel();
    updateCurrentTemp();
    updateFutureWeather();
  }, 3600000);
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
  updateLocationOptions,
  startProgram,
  setTimeIntervals,
};
