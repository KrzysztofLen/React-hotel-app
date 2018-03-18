import {createStore, combineReducers, compose} from 'redux';
import authReducer from './../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	// Store creation
	const store = createStore(
		combineReducers({
			auth: authReducer
		})
	);

	return store;
};