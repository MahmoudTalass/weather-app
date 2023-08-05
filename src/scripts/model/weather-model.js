const KEY = "2b31c3c95d8f4664beb190158233107";

async function getForecastInfo(city = "New York") {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}`;
  const data = await fetch(url, { mode: "cors" });
  const forecastJson = await data.json();

  return forecastJson;
}

async function getLocationData(city) {
  const data = await getForecastInfo(city);
  const locationData = await data.location;

  return locationData;
}

async function getLocation(city) {
  try {
    const locationData = getLocationData(city);
    const cityName = locationData.name;
    const stateName = locationData.region || "";
    const countryName = locationData.country;

    return {
      cityName,
      stateName,
      countryName,
    };
  } catch (err) {
    return "Location was not found";
  }
}

function getDate() {
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString();

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

async function getTime(city) {
  debugger;
  const locationData = await getLocationData(city);
  console.log(locationData.localtime)
  const time = locationData;
  return `${time}`;
}

export { getForecastInfo, getTime, getDate, getDayName, getLocation };
