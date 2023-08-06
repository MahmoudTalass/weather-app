import {
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
    displayCity(result.cityName);
  });
}

function updateRegion() {
    getLocation().then((result) => {
        displayRegion(result.regionName)
    })
}

function updateCountry() {
    getLocation().then(result => {
        displayCountry(result.countryName)
    })
}

export { updateTime, updateDate, updateDay, updateCity, updateRegion, updateCountry };
