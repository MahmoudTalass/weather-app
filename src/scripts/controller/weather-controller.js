import { getDate, getTime } from "../model/weather-model";
import { displayDate, displayTime } from "../view/weather-view";

function updateTime() {
  const time = getTime();
  time.then((result) => displayTime(result));
  console.log("time updated")
}

function updateDate() {
    displayDate(getDate())
}

export { updateTime, updateDate };
