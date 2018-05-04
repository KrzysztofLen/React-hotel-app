import React from 'react';

class ToggleButton extends React.Component {
	constructor(props) {
		super(props);
		this.onToggleButton = this.onToggleButton.bind(this);
	}

	onToggleButton() {
		this.props.onClick(this.props.index);
	};

	render() {
		return <React.Fragment>
			<button className={this.props.btnClass}
			        onClick={this.onToggleButton}>{this.props.activeIndex ? "Less" : "More"}
			</button>
		</React.Fragment>
	}
}

export default ToggleButton;