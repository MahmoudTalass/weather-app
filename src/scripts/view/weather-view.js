/* eslint-disable no-unused-vars */
function displayTime({ time, pmOram }) {
  const timeContainer = document.querySelector("#time");
  timeContainer.textContent = `${time} ${pmOram}`;
}

function displayDay(day) {
  const dayContainer = document.querySelector("#day");
  dayContainer.textContent = day;
}

function displayDate(date) {
  const dateContainer = document.querySelector("#date");
  dateContainer.textContent = date;
}

function displayCity(city) {
  const cityContainer = document.querySelector("#city");
  cityContainer.textContent = city;
}

function displayRegion(region) {
  const regionContainer = document.querySelector("#region");
  regionContainer.textContent = region;
}

function displayCountry(country) {
  const countryContainer = document.querySelector("#country");
  countryContainer.textContent = country;
}

function displayCurrentTemp(temp) {
  const currentTempContainer = document.querySelector("#current-temp");
  currentTempContainer.textContent = `${temp}°`;
}

function displayTempScale(scale) {
  const tempScale = document.querySelector("#temp-scale");
  tempScale.textContent = scale;
}

function displayWeatherCondition(condition) {
  const weatherCondition = document.querySelector("#weather-condition");
  weatherCondition.textContent = condition;
}

function displayWeatherConditnionIcon(icon) {
  const weatherConditionIcon = document.querySelector(
    "#weather-condition-icon",
  );

  weatherConditionIcon.src = icon;
}

function displayTempFeel(temp) {
  const tempFeel = document.querySelector("#temp-feel");

  tempFeel.textContent = `${temp}°`;
}

function displayHumidity(humidityLevel) {
  const humidity = document.querySelector("#humidity");

  humidity.textContent = `${humidityLevel}%`;
}

function displayFutureWeather(date, temp) {
  const futureForecastsContainer = document.querySelector(
    "#future-forecast-container",
  );

  const futureForecast = document.createElement("div");
  const futureDate = document.createElement("p");
  const futureTemp = document.createElement("p");

  const month = date.substring(0, 2);
  const day = date.substring(3);

  futureForecast.classList.add("future-forecast-item");

  futureDate.id = "future-date";
  futureTemp.id = "future-temp";

  futureDate.textContent = `${month}/${day}`;
  futureTemp.textContent = `${temp}°`;

  futureForecast.appendChild(futureDate);
  futureForecast.appendChild(futureTemp);

  futureForecastsContainer.appendChild(futureForecast);
}

function clearFutureWeatherCont() {
  const futureForecastsContainer = document.querySelector(
    "#future-forecast-container",
  );
  futureForecastsContainer.innerHTML = "";
}

function displayLocationOption(location) {
  const optionsContainer = document.querySelector("#location-options");
  const option = document.createElement("p");

  option.classList.add("location-option");
  option.textContent = location;

  optionsContainer.appendChild(option);
}

function clearLocationOptions() {
  const optionsContainer = document.querySelector("#location-options");

  optionsContainer.innerHTML = "";
}

function clearLocationSearchInput() {
  const locationSearch = document.querySelector("#location-search");

  locationSearch.textContent = "";
}

export {
  displayTime,
  displayDate,
  displayDay,
  displayCity,
  displayCountry,
  displayRegion,
  displayCurrentTemp,
  displayTempScale,
  displayWeatherCondition,
  displayWeatherConditnionIcon,
  displayTempFeel,
  displayHumidity,
  displayFutureWeather,
  clearFutureWeatherCont,
  displayLocationOption,
  clearLocationOptions,
  clearLocationSearchInput,
};
