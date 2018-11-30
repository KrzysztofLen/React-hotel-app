import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

export default ({input, label, meta: {touched, error}}) => {
	return (
		<React.Fragment>
			<label htmlFor="">{label}</label>
			<input type="text" {...input} />
			<div className="form-error">
				{touched && error}
			</div>
		</React.Fragment>
	)
}