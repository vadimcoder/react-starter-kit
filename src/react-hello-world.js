var React = require('react');
var ReactDOM = require('react-dom');

module.exports = function() {
    var HelloMessage = React.createClass({
        render: function() {
          return <div>Hello {this.props.name}</div>;
      }
    });

    ReactDOM.render(<HelloMessage name="John" />, document.querySelector('#app'));
};