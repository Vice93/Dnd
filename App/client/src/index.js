import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/Home';
import * as registerServiceWorker from './serviceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker.register();