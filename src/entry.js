import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HelloMessage from './HelloMessage/HelloMessage';
import 'file-loader?name=[name].[ext]!./favicon.ico';

ReactDOM.render(
    <HelloMessage name="John"/>,
    document.querySelector('#app')
);