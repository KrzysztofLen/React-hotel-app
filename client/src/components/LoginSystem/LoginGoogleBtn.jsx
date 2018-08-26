import * as React from 'react';
import {GooglePlus} from "../SVG/GooglePlus";
import SignUp from "../SignUp/SignUp";

const GoogleBtn = () => (
	<React.Fragment>
		<SignUp/>
		<div className="GoogleBtn__container">
			<span>or</span>
			<a href="/auth/google" className="button is-google">Sign in with Google<GooglePlus width={20} height={20}/></a>
		</div>
	</React.Fragment>
);

export default GoogleBtn;