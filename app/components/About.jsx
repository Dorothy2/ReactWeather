var React = require('react');

var About = React.createClass({
    render: function() {
    return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React.
      I have built this for The Complete React Web app
      Developer Course.
      </p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a ref="https://facebook.github.io.react">React</a> This was The
          JavaScript framework used.
        </li>
        <li>
          <a ref="https://openweathermap.org">Open Weather Map</a> I used
          Open Weather API to return weather info.
          </li>
        </ul>
      </div>
    )
  }
});

module.exports = About;
