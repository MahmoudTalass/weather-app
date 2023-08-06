import {
  getCurrentTemp,
  getDate,
  getDayName,
  getLocation,
  getTime,
} from "../model/weather-model";
import {
  displayDate,
  displayTime,
  displayDay,
  displayCity,
  displayRegion,
  displayCountry,
  displayCurrentTemp,
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

export {
  updateTime,
  updateDate,
  updateDay,
  updateCity,
  updateRegion,
  updateCountry,
  updateCurrentTemp,
};
