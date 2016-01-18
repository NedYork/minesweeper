var React = require("react");

var Autocomplete = React.createClass({
  getInitialState: function () {
    return { partialName: "" };
  },
  handleChange: function(e){
    // debugger;
    this.setState({ partialName: e.target.value });
  },
  nameClick: function (e) {
    this.setState({ partialName: e.target.innerHTML});
  },
  render: function () {
    return(
      <div>
        <input
          type="text"
          value={this.state.partialName}
          onChange={this.handleChange}
          placeholder="Type here" />
        <ul>
          {
            this.props.names.filter( function (name) {
              return (
                name.match(this.state.partialName));
            }.bind(this))
            .map(function(name) {
              return <li key={Math.random()} onClick={this.nameClick}>{name}</li>;
            }.bind(this))
          }
        </ul>
      </div>
  );}
});

module.exports = Autocomplete;
