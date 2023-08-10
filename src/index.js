/* eslint-disable no-unused-vars */
import reset from "./CSS/reset.css";
import generalStyle from "./CSS/general-style.css";

import { setCurrentLocation } from "./scripts/model/weather-model";
import {
  startProgram,
  setTimeIntervals,
} from "./scripts/controller/weather-controller";
import handleWeatherEvents from "./scripts/view/weather-events";

const localLocation = localStorage.getItem("location");
if (localLocation === undefined) setCurrentLocation("New York");

startProgram();
handleWeatherEvents();
setTimeIntervals();
