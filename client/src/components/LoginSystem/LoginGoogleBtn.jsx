import * as React from 'react';
import {GooglePlus} from "../SVG/GooglePlus";

const GoogleBtn = () => (
	<React.Fragment>
		<h1>This is test</h1>
		<a href="/auth/google" className="button is-google">Sign in with Google<GooglePlus width={20} height={20}/></a>
	</React.Fragment>
);

export default GoogleBtn;