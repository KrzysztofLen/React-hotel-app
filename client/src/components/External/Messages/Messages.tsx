import React, {Component} from 'react';

interface IProps {
	type: string,
	message: string,
	duration?: number
}

interface IState {
    showMessage: boolean
}

class Messages extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			showMessage: true
		}
	}

	componentDidMount() {
		if(this.props.duration != null) {
			setTimeout(() => {
				this.setState({showMessage: false});
			}, this.props.duration)
		}
	}

	onCloseMessage = () => {
		this.setState({showMessage: false});
	}

	renderMessage(): JSX.Element | boolean {
		let message = {
			bold: "",
			text: this.props.message
		};

		switch (this.props.type) {
			case "success":
				message.bold = "Well done!";
				break;
			case "info":
				message.bold = "Heads up!";
				break;
			case "warning":
				message.bold = "Warning!";
				break;
			case "danger":
				message.bold = "Oh snap!";
				break;
			default:
				return false;
		}

		return (
			<div className={`message message__${this.props.type} ${this.props.duration == null ? "message--static" : ""}`} role="alert">
				<strong>{message.bold}</strong> {message.text}
				<button type="button" className={"message__close"} data-dismiss="alert" aria-label="Close"
				        onClick={this.onCloseMessage}>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		)
	};

	render(): JSX.Element {
		return <React.Fragment>{this.state.showMessage && this.renderMessage()}</React.Fragment>
	}
}

export default Messages;