import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import OptionModal from './Modal';

const Name = (data) => <h3 className="name">{data.name}</h3>;
const QuestionLink = (data) => <NavLink to={"/question/" + data.id} className="question">{data.question}</NavLink>;
const Avatar = (data) => <img onClick={data.onClick} className="question__avatar" src={data.value.data.image} alt="xyz"/>;
const MoreActivities = (data) => (
	<div className="more-activities__panel">
		<span className="more-activities__number">{data.data.activities_number}</span>
		<span className="more-activities__text">more activities</span>
	</div>
);

const Commented = (props) => (
	<div className="person-panel">
		<img className="person__avatar" src="http://via.placeholder.com/50x50" alt=""/>
		<span className="person__asking">COMMENTED</span>
	</div>
);

const Panel = ({data}) => {
	return (
		<div className="panel">
			<Name {...data} />
			<span className="who">is asking:</span>
			<QuestionLink {...data} />
		</div>
	)
};

class Question extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.state = {
			modalIsOpen: false,
			width: 0
		};
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth });
	}

	handleClick() {
		this.setState({modalIsOpen: true});
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}

	render() {
		console.log(this.props);
		return (
			<div className="question__container">
				<div className="question__avatar-container col-100">
					<div className="question__avatar-panel">
						<Avatar onClick={this.handleClick} value={this.props} />
						<OptionModal isOpen={this.state.modalIsOpen} closeModal={this.closeModal} value={this.props}/>
						<span className="question__asking">ASKED</span>
					</div>
					<div className="question__question">
						<Panel {...this.props} />
						<div className="person__container">
							{this.props.data.more_activities && <MoreActivities {...this.props} />}
							{window.innerWidth > 1024 && window.innerWidth < 1365 && (
								[...Array(2)].map((x, i) => <Commented key={i} commented={this.props.commented} /> ))}
							{window.innerWidth > 1366 && (
								[...Array(this.props.data.commented)].map((x, i) => <Commented key={i} commented={this.props.commented} /> ))}
							{window.innerWidth < 1366 && (
								[...Array(1)].map((x, i) => <Commented key={i} commented={this.props.commented} /> ))}
						</div>
						<div className="question__side col-20">
							<ul className="question__connections-list">
								<li className="question__connections"><span>1</span> related discussion</li>
								<li className="question__connections"><span>6</span> peers involved</li>
								<li className="question__connections"><span>3</span> conversations</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Question;