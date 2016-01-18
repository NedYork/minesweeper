var React = require('react');
var ReactDOM = require('react-dom');
var Autocomplete = require('./autocomplete');
var WeatherClock = require('./weatherclock');
var Tabs = require('./tabs');

var nameslist = ["foo", "bar", "baz"];
var tabsList = [{title: "Foo", content: "Bar" },
  {title: "Title2", content: "content2"},
  {title: "Third TItle ", content: "THird body content" },
  {title: "BIG TITLE!", content: "NO CONTENT" }];

var Widgets = React.createClass({
  render: function () {
    return(
      <div>
        <Autocomplete names={nameslist}/>

        <WeatherClock />

        <Tabs tabsList={tabsList}/>

      </div>
    );
  }
});


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets/>, document.getElementById('main'));
});
