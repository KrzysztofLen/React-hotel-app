import React, {Component} from "react";

class ToggleSwitch extends Component {
	constructor(props) {
		super(props);

		this.state = {
			enabled: false
		}
	}

	toggle = () => {
		this.setState({enabled: !this.state.enabled});
	}

	render() {
		const switchClasses = `switch switch--${this.props.theme} ${this.props.className}`;

		const className = `switch-toggle switch-toggle--${this.state.enabled ? 'on' : 'off'}`;

		return (
			<React.Fragment>
				<label htmlFor="">{this.props.label}</label>
				<div className={switchClasses} onClick={this.toggle}>
					<div className={className}/>
				</div>
			</React.Fragment>
		)
	}
}

export default ToggleSwitch;