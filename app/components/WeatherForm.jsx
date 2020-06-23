var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault(); // prevents page from Rendering

    var location = this.refs.location.value;

    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
      <div>
      <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" placeholder="Enter city"/>
          <button className="button expanded hollow">Get Weather</button>
      </form>
      </div>
    )
  }
});

module.exports = WeatherForm;