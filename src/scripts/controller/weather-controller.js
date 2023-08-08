import {
  changeTempScale,
  getCurrentTemp,
  getDate,
  getDayName,
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
  tempFeel.then(result => {
    displayTempFeel(result)
  })
}

function updateTempScale() {
  changeTempScale();
  showTempScale();
  updateCurrentTemp()
  updateTempFeel()
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
  showTempScale,
  updateWeatherCondition,
  updateWeatherConditionIcon,
  updateTempFeel
};
