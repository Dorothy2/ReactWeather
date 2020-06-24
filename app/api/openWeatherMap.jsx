var axios = require('axios');

//6a793141a3e6c84bf2dd55560cd1663d

// variable which can't be altered
const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=6a793141a3e6c84bf2dd55560cd1663d&units=imperial';

module.exports = {
  getTemp: function(location) {
     var encodedLocation = encodeURIComponent(location);
      var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

      return axios.get(requestUrl).then(function(res) {
        if(res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      }, function(err) {
          throw new Error(err.response.data.message);
      })
   }
 }
