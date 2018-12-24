import React from "react";
import {GooglePlus} from "../../SVG/GooglePlus";

export default () => {
	return (
		<div className="GoogleBtn__container">
			<span>or</span>
			<a href="/auth/google" className="button is-google">Sign in with Google<GooglePlus width={20}
			                                                                                   height={20}/></a>
		</div>
	);
}