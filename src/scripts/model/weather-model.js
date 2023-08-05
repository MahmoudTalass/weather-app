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

async function getTimeZone(city) {
  const today = new Date();
  const locationData = await getLocationData(city);
  const timeZone = today.toLocaleString("en-US", {
    timeZone: locationData.tz_id,
  });

  return timeZone;
}

async function getDate(city) {
  const timeZone = await getTimeZone(city);
  const date = timeZone.substring(0, 8);

  return date;
}

async function getDayName(city) {
  const date =  new Date(await getDate(city));
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  return dayName;
}

async function getTime(city) {
  const timeZone = await getTimeZone(city);
  const time = timeZone.substring(10);

  return `${time}`;
}

export { getForecastInfo, getTime, getDate, getDayName, getLocation };
