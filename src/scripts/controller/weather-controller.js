import { getDate, getTime } from "../model/weather-model";
import { displayDate, displayTime } from "../view/weather-view";

function updateTime() {
  const time = getTime();
  time.then((result) => displayTime(result));
}

function updateDate() {
    const date = getDate();
    date.then((result) => displayDate(result));
}

export { updateTime, updateDate };
