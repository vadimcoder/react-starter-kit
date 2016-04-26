import * as React from 'react';
import * as ReactDOM from 'react-dom';

require('./style.scss');

module.exports = function() {
    const HelloMessage = React.createClass({
        propTypes: {
            name: React.PropTypes.string.isRequired
        },
        render() {
            return <div>Hello {this.props.name}</div>;
        }
    });

    ReactDOM.render(<HelloMessage name="John"/>, document.querySelector('#app'));
};