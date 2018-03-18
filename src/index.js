import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'normalize.css/normalize.css';
import './css/styles.css';

import AppRouter from './js/routers/AppRouter';
import configureStore from './store/configureStore';

import {firebase} from './firebase';
import registerServiceWorker from './registerServiceWorker';

console.log(firebase);

const store = configureStore();

const jsx = (
	<Provider store={store}>
		<AppRouter/>
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

registerServiceWorker();
