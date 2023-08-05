import { getTime } from "../model/weather-model";
import { displayTime } from "../view/weather-view";

function updateTime() {
  const time = getTime();
  time.then((result) => displayTime(result));
  console.log("time updated")
}

export { updateTime };
