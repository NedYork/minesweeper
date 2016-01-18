var React = require('react');
var ReactDOM = require('react-dom');
var Minesweeper = require('./minesweeper_game.js');
var Board = require('./board');



var Game = React.createClass({
  getInitialState: function () {
    return ({ board: new Minesweeper.Board(20, 10) });
  },
  updateGame: function (tile, flag) {
    if (flag) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    if (this.state.board.won()){
      alert("Congratulations! You Won!");
    } else if (this.state.board.lost()) {
      alert("You Lose!!  Man You Suck at This!");
    }

    this.setState({ board: this.state.board });
  },
  render: function () {
    return (
      <div>
        <Board board={this.state.board} updateCB={this.updateGame} />
      </div>
    );
  },
});


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Game/>, document.getElementById('main'));
});
