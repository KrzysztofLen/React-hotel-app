import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import SingleQuestion from './../SingleQuestion';
import App from "../../App";
import Navigation from '../Navigation';
import app_data from '../../app_data';

const AppRouter = () => {
	const appData = app_data;

	return <BrowserRouter>
		<div>
			<Switch>
				<Route path="/" component={App} exact={true}/>
				<Route path="/hotel/:id"
					render={(props) => <SingleQuestion {...props} appData={appData} />}
				/>
			</Switch>
		</div>
	</BrowserRouter>
};

export default AppRouter;