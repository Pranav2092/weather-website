const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '234e403e28mshe54fb122f49afa3p1f7517jsnce9a3eee01c2',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = async (city) => {
  const cityName = document.getElementById('cityName');
  const cloud_pct = document.getElementById('cloud_pct');
  const temp = document.getElementById('temp');
  const feels_like = document.getElementById('feels_like');
  const humidity = document.getElementById('humidity');
  const min_temp = document.getElementById('min_temp');
  const max_temp = document.getElementById('max_temp');
  const wind_speed = document.getElementById('wind_speed');
  const wind_degrees = document.getElementById('wind_degrees');
  const sunrise = document.getElementById('sunrise');
  const sunset = document.getElementById('sunset');

  cityName.innerHTML = city;
  try {
    const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options);
    const result = await response.json();
    console.log(result);
    cloud_pct.innerHTML = result.cloud_pct;
    temp.innerHTML = result.temp;
    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML = result.wind_speed;
    wind_degrees.innerHTML = result.wind_degrees;
    sunrise.innerHTML = result.sunrise;
    sunset.innerHTML = result.sunset;
  } catch (error) {
    console.error(error);
  }
}

document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault();
  // Hide the initial content
  document.getElementById('initial-content').style.display = 'none';

  // Display the search results container
  document.getElementById('search-content').style.display = 'flex';
  const search = document.getElementById('search');
  getWeather(search.value);
  search.value = '';
});

const getInitialWeather = async (city, elements) => {
  try {
    const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options);
    const result = await response.json();
    console.log(result);
    elements.cloud_pct.innerHTML = result.cloud_pct;
    elements.temp.innerHTML = result.temp;
    elements.feels_like.innerHTML = result.feels_like;
    elements.humidity.innerHTML = result.humidity;
    elements.min_temp.innerHTML = result.min_temp;
    elements.max_temp.innerHTML = result.max_temp;
    elements.wind_speed.innerHTML = result.wind_speed;
    elements.wind_degrees.innerHTML = result.wind_degrees;
    elements.sunrise.innerHTML = result.sunrise;
    elements.sunset.innerHTML = result.sunset;
  } catch (error) {
    console.error(error);
  }
}

const initialWeather = () => {
  getInitialWeather('Delhi', {
    cloud_pct: document.getElementById('cloud_pct1'),
    temp: document.getElementById('temp1'),
    feels_like: document.getElementById('feels_like1'),
    humidity: document.getElementById('humidity1'),
    min_temp: document.getElementById('min_temp1'),
    max_temp: document.getElementById('max_temp1'),
    wind_speed: document.getElementById('wind_speed1'),
    wind_degrees: document.getElementById('wind_degrees1'),
    sunrise: document.getElementById('sunrise1'),
    sunset: document.getElementById('sunset1')
  });
  getInitialWeather('London', {
    cloud_pct: document.getElementById('cloud_pct2'),
    temp: document.getElementById('temp2'),
    feels_like: document.getElementById('feels_like2'),
    humidity: document.getElementById('humidity2'),
    min_temp: document.getElementById('min_temp2'),
    max_temp: document.getElementById('max_temp2'),
    wind_speed: document.getElementById('wind_speed2'),
    wind_degrees: document.getElementById('wind_degrees2'),
    sunrise: document.getElementById('sunrise2'),
    sunset: document.getElementById('sunset2')
  });
  getInitialWeather('New York', {
    cloud_pct: document.getElementById('cloud_pct3'),
    temp: document.getElementById('temp3'),
    feels_like: document.getElementById('feels_like3'),
    humidity: document.getElementById('humidity3'),
    min_temp: document.getElementById('min_temp3'),
    max_temp: document.getElementById('max_temp3'),
    wind_speed: document.getElementById('wind_speed3'),
    wind_degrees: document.getElementById('wind_degrees3'),
    sunrise: document.getElementById('sunrise3'),
    sunset: document.getElementById('sunset3')
  });
}

initialWeather();
