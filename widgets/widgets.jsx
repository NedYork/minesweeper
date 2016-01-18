var React = require('react');
var ReactDOM = require('react-dom');
var Autocomplete = require('./autocomplete');
var WeatherClock = require('./weatherclock');
var Tabs = require('./tabs');

var nameslist = ["foo", "bar", "baz"];

var Widgets = React.createClass({
  render: function () {
    return(
      <div>
        <Autocomplete names={nameslist}/>

        <WeatherClock />

      </div>
    );
  }
});


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets/>, document.getElementById('main'));
});
