var React = require('react');
var Tile = require('./tile');


var Board = React.createClass({
  render: function () {
    var board = this.props.board;
    return (
      <div className="game">
        {board.grid.map(function (row, rowIdx) {
          return (
            <div key={rowIdx} className={"row " + rowIdx}>
              {row.map( function (tile, colIdx) {
                return (
                  <Tile
                    key={colIdx}
                    tile={tile}
                    updateCB={this.props.updateCB}
                    />
                  );
              }.bind(this))}
            </div>);
        }.bind(this))}
      </div>
    );
  }
});

module.exports = Board;
