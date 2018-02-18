import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './css/styles.css';

import AppRouter from './js/routers/AppRouter';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));

registerServiceWorker();
