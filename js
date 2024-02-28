const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=' + apiKey + '&units=metric';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    displayWeather(data);
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });

function displayWeather(data) {
  const location = data.name + ', ' + data.sys.country;
  const temperature = Math.round(data.main.temp) + '°C';
  const description = data.weather[0].description;

  document.getElementById('location').textContent = location;
  document.getElementById('temperature').textContent = 'Temperature: ' + temperature;
  document.getElementById('description').textContent = 'Description: ' + description;
}s