var React = require('react');

var Tabs = React.createClass({
  getInitialState: function () {
    return ( {tabIndex : 0} );
  },
  tabClick: function (e) {
    var targetIndex = e.target.attributes.classid.value;
    this.setState({tabIndex: parseInt(targetIndex)});
  },
  render: function () {
    return (
      <div>
        <header className="tab-header">
          <ul>
            {this.props.tabsList.map(function (tab, index) {

              return (
                <li
                  key={ index }
                  className={ index === this.state.tabIndex ? "tab selected" : "tab" }
                  classID={ index }
                  onClick={this.tabClick}>
                  {tab.title}
                </li>
                );}.bind(this))}
          </ul>
        </header>

        <article>
          {this.props.tabsList[this.state.tabIndex].content}
        </article>

      </div>
    );
  }
});

module.exports = Tabs;
