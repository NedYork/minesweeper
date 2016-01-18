var React = require('react');

var WeatherClock = React.createClass({
  render: function () {
    return (
      <div>
        <Clock/>
        <Weather/>
      </div>
  );
  }
});


var Clock = React.createClass({
  getInitialState: function () {
    return { currentTime: new Date() };
  },
  componentDidMount: function () {
    this.intervalId = setInterval( this.tick, 1000);
  },
  tick: function () {
    this.setState({ currentTime: new Date() });
  },
  componentWillUnmount: function () {
    this.clearInterval(intervalId);
  },
  render: function () {
    return (
      <figure>{ this.state.currentTime.toString() }</figure>
    );
  }
});

var Weather = React.createClass({
  getInitialState: function () {
    return { weather: undefined };
  },
  positionSuccess: function (position) {
    var request;
    var latitude = Math.floor(position.coords.latitude);
    var longitude = Math.floor(position.coords.longitude);
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=645c5d39c7603f17e23fcaffcea1a3c1";

    request = new XMLHttpRequest();
    request.open("GET", url, true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        this.setState({ weather: JSON.parse(request.response) });
      } else {
        console.log("Else");
      }
    }.bind(this);

    request.send();
  },
  componentDidMount: function () {
    navigator.geolocation.getCurrentPosition( this.positionSuccess, function (error) { console.log(error);} );
  },
  render: function () {
    if (this.state.weather) {
      var temperature = (this.state.weather.main.temp - 273).toFixed(1);
      var weather = this.state.weather.weather[0].description;
      return (
        <div>
          { "Temperature: " + temperature + "Weather: " + weather }
        </div>
      );
    } else {
      return (
        <div> Loading Weather...</div>
      );
    }
  }
});

module.exports = WeatherClock;
