const KEY = "2b31c3c95d8f4664beb190158233107";

async function getForecastInfo(city) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}`;
  const data = await fetch(url);
  const forecastJson = await data.json();

  return forecastJson;
}

function getDate() {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDay();
  const year = currentDate.getFullYear();

  return `${month}/${day}/${year}`;
}

function getDayName() {
  const currentDate = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[currentDate.getDay()];
}

function getTime() {
  const currentDate = new Date();
  const time = currentDate.toLocaleTimeString();

  return `${time}`;
}

export { getForecastInfo, getTime, getDate, getDayName };
