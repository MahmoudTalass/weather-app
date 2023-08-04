const KEY = "2b31c3c95d8f4664beb190158233107";

async function getForecastInfo(city="New York") {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}`;
  const data = await fetch(url);
  const forecastJson = await data.json();

  return forecastJson;
}

function getDate() {
  const currentDate = new Date();
    const date = currentDate.toLocaleDateString()

  return `${date}`;
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
