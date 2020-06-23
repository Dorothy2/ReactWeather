var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

// default openweather.map key
//6a793141a3e6c84bf2dd55560cd1663d

var Weather = React.createClass({
   getInitialState: function () {
    return {
        isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({isLoading: true});
     openWeatherMap.getTemp(location).then(function (temp) {
       that.setState({
         location: location,
         temp: temp,
         isLoading: false
       });
     }, function (errorMessage) {
          alert(errorMessage);
          that.setState({
            isLoading: false
          });
     });
    },
  render: function() {
    // didn't retrieve variables this way
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if(temp && location) {
          return  <WeatherMessage location={location} temp={temp}/>;
      }
    }
      return (
        <div>
           <h1 className="text-center">Get Weather</h1>
           <WeatherForm onSearch={this.handleSearch}/>
           {renderMessage()}
        </div>
      )
  }
});

module.exports = Weather;
