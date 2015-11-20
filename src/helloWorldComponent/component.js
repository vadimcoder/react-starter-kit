var React = require('react');
var ReactDOM = require('react-dom');
require('./style.scss');

module.exports = function() {
    var HelloMessage = React.createClass({
        render: function() {
          return <div>Hello {this.props.name}</div>;
      }
    });

    ReactDOM.render(<HelloMessage name="John" />, document.querySelector('#app'));
};