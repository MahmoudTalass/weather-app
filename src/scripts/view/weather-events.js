import {
  startProgram,
  updateLocationOptions,
  updateTempScale,
} from "../controller/weather-controller";
import { clearLocationSearchInput } from "./weather-view";

function handleWeatherEvents() {
  const tempScale = document.querySelector("#temp-scale");
  const locationSearch = document.querySelector("#location-search");
  const locationOptionsContainer = document.querySelector("#location-options");

  tempScale.addEventListener("click", () => {
    updateTempScale();
  });

  locationSearch.addEventListener("input", (e) => {
    const val = e.target.value;
    if (val.length > 0) {
      locationOptionsContainer.style.height = "6.5rem";
      updateLocationOptions(val);
    } else {
      locationOptionsContainer.style.height = "0";
    }
  });

  locationOptionsContainer.addEventListener("click", (e) => {
    const isLocationOption = e.target.classList.contains("location-option");

    if (isLocationOption) {
      const location = e.target.textContent;
      startProgram(location);
      clearLocationSearchInput();
      locationOptionsContainer.style.height = "0";
    }
  });
}

export default handleWeatherEvents;
