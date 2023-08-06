/* eslint-disable no-unused-vars */
import reset from "./CSS/reset.css";
import generalStyle from "./CSS/general-style.css";

import {
  getForecastInfo,
  getDate,
  getDayName,
  getTime,
  getLocation,
} from "./scripts/model/weather-model";
import { updateTime, updateDate, updateDay, updateCity, updateRegion, updateCountry } from "./scripts/controller/weather-controller";

// console.log(getForecastInfo())
// console.log(getDayName(), getDate())
// console.log(getLocation())
updateTime();
setInterval(() => {
  updateTime();
}, 500);

setInterval(() => {
  updateDate();
}, 1000)

updateDay()
updateCity()
updateRegion()
updateCountry()