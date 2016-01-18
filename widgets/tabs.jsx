var React = require('react');

var Tabs = React.createClass({
  getInitialState: function () {
    return ( {tabIndex : 0} );
  },
  tabClick: function (e) {

    this.setState({tabIndex: parseInt(e.target.attributes.classid.value)});
  },
  render: function () {
    return (
      <div>
        <h1>
          Titles
        </h1>
        <header>
          <ul>
            {this.props.tabsList.map(function (tab, index) {
              return (
                <li
                  key={ index }
                  className={ index === this.state.tabIndex ? "selected" : "" }
                  classID={ index }
                  onClick={this.tabClick}>
                  {tab.title}
                </li>
                );
            }.bind(this))}
          </ul>
        </header>

        <article>
            <h1>
              Content
            </h1>
            <p>
              {this.props.tabsList[this.state.tabIndex].content}
            </p>
        </article>
      </div>
    );
  }
});

module.exports = Tabs;
