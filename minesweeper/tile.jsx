var React = require('react');


var Tile = React.createClass({
  render: function () {
    var char;
    var modal;
    var tile = this.props.tile;
    if (tile.flagged) {
      char = "F";
    } else if (!tile.explored) {
      char = "T";
    } else {
      char = tile.adjacentBombCount();
      if (char === 0) {char = "";}
    }

    if (tile.bombed) {
      modal = true;
    }

    return (
      <div
        className={modal ? "tile modal" : "tile"}
        onClick={ this.handleClick }>
        {char}
      </div>
    );
  },
  handleClick: function (e) {
    var flag = e.altKey;
    this.props.updateCB(this.props.tile, flag);
  }

});


module.exports = Tile;
