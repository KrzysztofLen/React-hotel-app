import React, {Component} from 'react'

class AddHotelFile extends Component {
	constructor(props) {
		super(props)
		this.onChange = this.onChange.bind(this)
	}

	onChange(e) {
		const { input: { onChange } } = this.props
		onChange(e.target.files[0])
	}

	render() {
		const { input: { value } } = this.props;
		console.log(value);

		return (<input
			type="file"
			value={value}
			onChange={this.onChange}
		/>)
	}
}

export default AddHotelFile