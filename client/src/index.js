import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'normalize.css/normalize.css';
import './css/styles.css';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import {firebase} from './firebase';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const jsx = (
	<Provider store={store}>
		<AppRouter/>
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
	if(user) {
		console.log('Login');
	} else {
		console.log('Logout');
	}
});

registerServiceWorker();
