import { getDate, getDayName, getTime } from "../model/weather-model";
import { displayDate, displayTime, displayDay } from "../view/weather-view";

function updateTime() {
  const time = getTime();
  time.then((result) => displayTime(result));
}

function updateDate() {
    const date = getDate();
    date.then((result) => displayDate(result));
}

function updateDay() {
    const dayName = getDayName()
    dayName.then((result) => displayDay(result))
}

export { updateTime, updateDate, updateDay };
