var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
   getInitialState: function () {
    return {
        isLoading: false,
        errorMessage: undefined,
        location: undefined,
        temp: undefined
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
          //alert(errorMessage
          console.log('From Weather.jsx: ' + errorMessage);
          if(typeof errorMessage === 'string') {
            errorMessage = errorMessage;
          } else if(typeof errorMessage === 'object') {
            errorMessage = errorMessage.message;
          }
          that.setState({
            isLoading: false,
            errorMessage: errorMessage
          });
     });
    },
  componentDidMount: function() {
    var location = this.props.location.query.location;

     if(location && location.length > 0) {
       this.handleSearch(location);
       window.location.hash='#/';
     }
  },
  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;

     if(location && location.length > 0) {
       this.handleSearch(location);
       window.location.hash='#/';
     }
  },
  render: function() {
    // didn't retrieve variables this way
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if(temp && location) {
          return  <WeatherMessage location={location} temp={temp}/>;
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (<ErrorModal message = {errorMessage}/>);
      }
    }
      return (
        <div>
           <h1 className="text-center page-title">Get Weather</h1>
           <WeatherForm onSearch={this.handleSearch}/>
           {renderMessage()}
           {renderError()}
        </div>
      )
  }
});

module.exports = Weather;
