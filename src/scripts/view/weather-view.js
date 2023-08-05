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

function displayState(state) {
    const stateContainer = document.querySelector("#state");
    stateContainer.textContent = state;
}

export {displayTime, displayDate, displayDay}