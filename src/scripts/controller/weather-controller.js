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

export { updateTime, updateDate, updateDay, updateCity };
