export async function fetchWeather(lat, lon) {
  const pointsResponse = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
  const pointsData = await pointsResponse.json();
  const forecastUrl = pointsData.properties.forecast;
  const forecastResponse = await fetch(forecastUrl);
  return await forecastResponse.json();
}
