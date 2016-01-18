var React = require('react');
var ReactDOM = require('react-dom');
var Autocomplete = require('autocomplete');

var nameslist = ["foo", "bar", "baz"];

var Widgets = React.createClass({
  render: function () {
    return(
      <div>
        <Autocomplete names={nameslist}/>

      </div>
    );
  }
});


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets/>, document.getElementById('main'));
});
