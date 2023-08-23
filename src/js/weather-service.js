export default class WeatherService {  
  static getWeather() {
    return new Promise(function(resolve, reject) {
     
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY_2}`;
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