import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import SingleQuestion from './../SingleQuestion';
import App from "../../App";

const AppRouter = () => {
	return <BrowserRouter>
		<div>
			<Switch>
				<Route path="/" component={App} exact={true}/>
				<Route path="/question/:id" component={SingleQuestion} />
			</Switch>
		</div>
	</BrowserRouter>
};

export default AppRouter;