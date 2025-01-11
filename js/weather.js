window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 11,cityid: '5368361',appid: '93eb19297822163103502ad6e46f2aa1',units: 'metric',containerid: 'openweathermap-widget-11',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();

const API_KEY = '93eb19297822163103502ad6e46f2aa1'



fetch(`https://api.openweathermap.org/data/2.5/weather?lat=51.5128&lon=-0.0918&appid=${API_KEY}&units=metric`)
  .then(response => response.json())
  .then(data => {
    const liveFeed = `
      Temperature: ${data.main.temp}°C
      <br>Feels Like: ${data.main.feels_like}°C
      <br>Pressure: ${data.main.pressure} hPa
      <br>Humidity: ${data.main.humidity}%
      <br>Wind Speed: ${data.wind.speed} m/s
      <br>Cloudiness: ${data.clouds.all}%
    `;

    document.getElementById("liveFeed").innerHTML = liveFeed;
  })
  .catch(error => {
    document.getElementById("liveFeed").innerHTML = `<p style="color: red;">Error fetching weather data: ${error.message}</p>`;
  });
