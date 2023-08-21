export default class WeatherService {  
  static getWeather() {
    return new Promise(function(resolve, reject) {
     
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bd9f598b5f654c407cc0f903fa3ad97a`;
          let request = new XMLHttpRequest();
          request.addEventListener("loadend", function() {
            const response = JSON.parse(this.responseText);
            if (this.status === 200) {
              resolve([response]);
            } else {
              reject([this, response]);
            }
          });
          request.open("GET", url, true);
          request.send();    
        });
      } else {
        reject("Geolocation not supported.")
      }
    });
  }
}