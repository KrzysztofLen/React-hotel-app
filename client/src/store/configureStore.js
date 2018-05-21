import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import authReducer from './../reducers/auth';

import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
// export default () => {
// 	// Store creation
// 	const store = createStore(combineReducers({
// 			auth: authReducer
// 		}),
// 		composeEnhancers(applyMiddleware(thunk))
// 	);
//
// 	return store;
// };

export default () => {
	// Store creation
	const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxThunk)));
	return store
};