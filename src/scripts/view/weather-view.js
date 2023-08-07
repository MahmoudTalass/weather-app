/* eslint-disable no-unused-vars */
function displayTime(time) {
  const timeContainer = document.querySelector("#time");
  timeContainer.textContent = time;
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

function getDisplayedTemp() {
  const displayedTemp = document.querySelector("#current-temp");
  const tempText = displayedTemp.textContent;
  const tempAsNumber = tempText.substring(0, tempText.length - 1);

  return tempAsNumber;
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
  getDisplayedTemp,
};
