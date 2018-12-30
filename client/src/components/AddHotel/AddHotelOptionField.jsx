import React, {Component} from 'react'

class AddHotelNumberField extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this)
	}

	onChange(e) {
		const {input: {onChange}} = this.props;
		onChange(e.target.value);
	}

	render() {
		const {input: {value}} = this.props;

		return (
			<React.Fragment>
				<label htmlFor="">{this.props.label}</label>
				<select onChange={this.onChange} className={"select"}>
					<option />
					<option value="true" >TRUE</option>
					<option value="false">FALSE</option>
				</select>
				<div className="form__error-msg">
					{this.props.meta.touched && this.props.meta.error}
				</div>
			</React.Fragment>
		)
	}
}

export default AddHotelNumberField