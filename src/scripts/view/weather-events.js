import {
  updateTempScale,
} from "../controller/weather-controller";

function handleWeatherEvents() {
  const tempScale = document.querySelector("#temp-scale");

  tempScale.addEventListener("click", () => {
    updateTempScale();
  });
}

export default handleWeatherEvents;
