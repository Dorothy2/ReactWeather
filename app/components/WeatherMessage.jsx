var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function () {
//       var location = this.props.location;
//       var temp = this.props.temp;
//       return (
//         <div>
//           <h2>In {location} the temperature is {temp}.</h2>
//         </div>
//       );
//     }
// });

var WeatherMessage = ({temp, location}) => {
  //var {temp, location} = props; // ES6 destructuring
  return (
    <div>
      <h2 className="text-center">In {location} the temperature is {temp}.</h2>
    </div>
  )
};

module.exports = WeatherMessage;
