var React = require('react');

var WeatherClock = React.createClass({
  render: function () {
    return (
      <div>
        <Clock/>

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

// var Weather = React.createClass({
//
// });

module.exports = WeatherClock;
