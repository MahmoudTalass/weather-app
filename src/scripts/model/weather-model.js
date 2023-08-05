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

function convertToStandardTime(militaryTime) {
  const time = militaryTime.split(":"); // convert to array

  // fetch
  const hours = Number(time[0]);
  const minutes = Number(time[1]);

  // calculate
  let timeValue;

  if (hours > 0 && hours <= 12) {
    timeValue = `${hours}`;
  } else if (hours > 12) {
    timeValue = `${hours - 12}`;
  } else if (hours === 0) {
    timeValue = "12";
  }

  timeValue += minutes < 10 ? `:0${minutes}` : `:${minutes}`; // get minutes
  timeValue += hours >= 12 ? " P.M." : " A.M."; // get AM/PM

  return timeValue;
}

async function getTime(city) {
  const locationData = await getLocationData(city);
  console.log(locationData)
  const time = locationData.localtime.substring(11);
  const standardTime = convertToStandardTime(time);
  console.log(standardTime);
  return `${standardTime}`;
}

export { getForecastInfo, getTime, getDate, getDayName, getLocation };
