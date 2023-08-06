const KEY = "2b31c3c95d8f4664beb190158233107";

async function getForecastInfo(city = "India") {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}`;
  const data = await fetch(url, { mode: "cors" });
  const forecastJson = await data.json();

  return forecastJson;
}

async function getLocationData(city) {
  // wait because getForecastInfo() is an async operation
  const data = await getForecastInfo(city);
  const locationData = await data.location;
  return locationData;
}

async function getLocation(city) {
  try {
    // wait because getLocationData() contains async operation
    const locationData = await getLocationData(city);
    const cityName = locationData.name;
    const regionName = locationData.region;
    const countryName = locationData.country;

    return {
      cityName,
      regionName,
      countryName,
    };
  } catch (err) {
    return "Location was not found";
  }
}

async function getTimeZone(city) {
  const today = new Date();

  // wait because getLocationData() contains async operations
  const locationData = await getLocationData(city);
  const timeZone = today.toLocaleString("en-US", {
    timeZone: locationData.tz_id,
  });

  return timeZone;
}

async function getDate(city) {
  // wait because getTimeZone() contains async operations
  const timeZone = await getTimeZone(city);
  const date = timeZone.substring(0, 8);

  return date;
}

async function getDayName(city) {
  // wait because getDate() contains async operations
  const date = new Date(await getDate(city));
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  return dayName;
}

async function getTime(city) {
  // wait because getTimeZone() contains async operations
  const timeZone = await getTimeZone(city);
  const time = timeZone.substring(10);

  return `${time}`;
}

export { getForecastInfo, getTime, getDate, getDayName, getLocation };
