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
import {
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
  updateTempFeel,
  updateHumidity,
  updateFutureWeather,
  updateLocationOptions,
  startProgram,
} from "./scripts/controller/weather-controller";
import handleWeatherEvents from "./scripts/view/weather-events";

startProgram();
handleWeatherEvents();
