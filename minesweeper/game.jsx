var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./minesweeper_game.js').Board;
var Tile = require('./minesweeper_game.js').Tile;



var Game = React.createClass({
  getInitialState: function () {
    return ({ board: new Board(20, 10) });
  },
  updateGame: function () {

  },
  render: function () {
    return (
      <div> Hello World123 </div>
    );
  },
});


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Game/>, document.getElementById('main'));
});
