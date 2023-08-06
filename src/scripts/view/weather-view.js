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
    const cityContainer = document.querySelector("#city")
    cityContainer.textContent = city;
}

function displayRegion(region) {
    const regionContainer = document.querySelector("#region");
    regionContainer.textContent = region;
}

function displayCountry(country) {
    const countryContainer = document.querySelector("#country")
    countryContainer.textContent = country
}

function

export {displayTime, displayDate, displayDay}