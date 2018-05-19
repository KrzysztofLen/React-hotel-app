import React from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => {
	return (
		<div className="cube-wrapper">
			<div className="cube-folding">
				<span className="leaf1"></span>
				<span className="leaf2"></span>
				<span className="leaf3"></span>
				<span className="leaf4"></span>
			</div>
			<span className="loading" data-name="Loading">{props.text}</span>
		</div>
	)
};

Loader.propTypes = {
	text: PropTypes.string.isRequired
};

export default Loader;
