import {
  updateTempScale,
  updateTempWithNewScale,
} from "../controller/weather-controller";

function handleWeatherEvents() {
  const tempScale = document.querySelector("#temp-scale");

  tempScale.addEventListener("click", () => {
    updateTempScale();
    updateTempWithNewScale();
  });
}

export default handleWeatherEvents;
