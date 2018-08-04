import React, {Component} from 'react'

class FileInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedFile: null
		};

		this.onChange = this.onChange.bind(this)
	}

	// onChange(e) {
	// 	const {input: {onChange}} = this.props;
	// 	console.log(e.target.files[0]);
	// 	//0onChange(e.target.files[0]);
	// }

	onChange(event) {
		const file = [];
		file.push(event.target.files[0]);
		console.log(file);
		const {input: {onChange}} = this.props;
		this.setState({
			selectedFile: event.target.files[0]
		});
		onChange(event.target.files[0]);
	};

	render() {
		return (
			<React.Fragment>
				<label htmlFor="">{this.props.label}</label>
				<input type="file" onChange={this.onChange} name="hotel_images" />
			</React.Fragment>
		)
	}
}

export default FileInput