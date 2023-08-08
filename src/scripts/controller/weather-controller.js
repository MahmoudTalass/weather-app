import {
  changeTempScale,
  getCurrentTemp,
  getDate,
  getDayName,
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
} from "../view/weather-view";

function updateTime(location) {
  const time = getTime(location);
  time.then((result) => displayTime(result));
}

function updateDate(location) {
  const date = getDate(location);
  date.then((result) => displayDate(result));
}

function updateDay(location) {
  const dayName = getDayName(location);
  dayName.then((result) => displayDay(result));
}

function updateCity(location) {
  getLocation(location).then((result) => {
    displayCity(result.city);
  });
}

function updateRegion(location) {
  getLocation(location).then((result) => {
    displayRegion(result.regionN);
  });
}

function updateCountry(location) {
  getLocation(location).then((result) => {
    displayCountry(result.countryN);
  });
}

function updateCurrentTemp(location) {
  const currentTemp = getCurrentTemp(location);
  currentTemp.then((result) => displayCurrentTemp(result));
}

function showTempScale() {
  const currentScale = getTempScale();
  if (currentScale) {
    displayTempScale("C");
  } else {
    displayTempScale("F");
  }
}

function updateTempFeel(location) {
  const tempFeel = getTempFeel(location);
  tempFeel.then((result) => {
    displayTempFeel(result);
  });
}

function updateTempScale() {
  changeTempScale();
  showTempScale();
  updateCurrentTemp();
  updateTempFeel();
}

function updateWeatherCondition(location) {
  const weatherCondition = getWeatherCondition(location);
  weatherCondition.then((result) => displayWeatherCondition(result));
}

function updateWeatherConditionIcon(location) {
  const weatherConditionIcon = getWeatherConditionIcon(location);
  weatherConditionIcon.then((result) => displayWeatherConditnionIcon(result));
}

function updateHumidity(location) {
  const humidity = getHumidity(location);
  humidity.then((result) => displayHumidity(result));
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
};
