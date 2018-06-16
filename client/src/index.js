import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'normalize.css/normalize.css';
import './css/styles.css';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import chalk from '../../API/chalk';

// import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<AppRouter/>
	</Provider>,
	document.getElementById('root'));

// registerServiceWorker();
console.log(chalk.warning('ENVIRONMENT IS: ', process.env.NODE_ENV));