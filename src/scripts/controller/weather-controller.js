import {
  changeTempScale,
  getCurrentTemp,
  getDate,
  getDayName,
  getLocation,
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
  getDisplayedTemp,
  displayWeatherCondition,
  displayWeatherConditnionIcon,
} from "../view/weather-view";

function updateTime() {
  const time = getTime();
  time.then((result) => displayTime(result));
}

function updateDate() {
  const date = getDate();
  date.then((result) => displayDate(result));
}

function updateDay() {
  const dayName = getDayName();
  dayName.then((result) => displayDay(result));
}

function updateCity() {
  getLocation().then((result) => {
    displayCity(result.city);
  });
}

function updateRegion() {
  getLocation().then((result) => {
    displayRegion(result.regionN);
  });
}

function updateCountry() {
  getLocation().then((result) => {
    displayCountry(result.countryN);
  });
}

function updateCurrentTemp() {
  const currentTemp = getCurrentTemp();
  currentTemp.then((result) => displayCurrentTemp(result));
}

function convertToCelsius(temp) {
  const celsiusTemp = (Number(temp) * 9) / 5 + 32;

  return celsiusTemp.toFixed(1);
}

function convertToFahrenheit(temp) {
  const fahrenheitTemp = ((Number(temp) - 32) * 5) / 9;

  return fahrenheitTemp.toFixed(1);
}

function showTempScale() {
  const currentScale = getTempScale();
  if (currentScale) {
    displayTempScale("C");
  } else {
    displayTempScale("F");
  }
}

function updateTempWithNewScale() {
  const currentScale = getTempScale();
  const currentTemp = getDisplayedTemp();
  let updatedScaleTemp;
  if (currentScale) {
    updatedScaleTemp = convertToFahrenheit(currentTemp);
  } else {
    updatedScaleTemp = convertToCelsius(currentTemp);
  }
  displayCurrentTemp(updatedScaleTemp);
}

function updateTempScale() {
  changeTempScale();
  showTempScale();
}

function updateWeatherCondition() {
  const weatherCondition = getWeatherCondition();
  weatherCondition.then((result) => displayWeatherCondition(result));
}

function updateWeatherConditionIcon() {
  const weatherConditionIcon = getWeatherConditionIcon();
  weatherConditionIcon.then((result) => displayWeatherConditnionIcon(result));
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
  updateTempWithNewScale,
  showTempScale,
  updateWeatherCondition,
  updateWeatherConditionIcon
};
