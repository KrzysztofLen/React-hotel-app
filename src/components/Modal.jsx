import React from 'react';
import Modal from 'react-modal';

const customStyles = {
	overlay: {
		position: 'fixed',
		overflow: 'scroll',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.75)'
	}
};

const SmallHeader = (props) => <h4 className="modal__subheader">{props.title}</h4>;
const RelatedPeople = (props) => (
	<div className="center-text">
		<div className="modal__related-people-box">
			<img className="rounded modal__related-people-image" src={props.value.data.image} alt="xyz"/>;
		</div>
		<span className="modal__related-people-person">Test</span>
	</div>
);

const Chevron = (props) => (
	<button className={props.className}>
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
		     viewBox="0 0 20 20">
			<title>chevron-thin-left</title>
			<path
				d="M13.891 17.418c0.268 0.272 0.268 0.709 0 0.979s-0.701 0.271-0.969 0l-7.83-7.908c-0.268-0.27-0.268-0.707 0-0.979l7.83-7.908c0.268-0.27 0.701-0.27 0.969 0s0.268 0.709 0 0.979l-7.141 7.419 7.141 7.418z"></path>
		</svg>
	</button>
);

const OptionModal = (props) => {
	return (
		<Modal
			isOpen={props.isOpen}
			onRequestClose={props.closeModal}
			contentLabel="Selected option"
			className="modal"
			style={customStyles}
			ariaHideApp={false}
		>
			<div className="column modal__details">
				<img className="modal__avatar" src={props.value.data.image} alt="xyz"/>
				<h2 className="modal__name">{props.value.data.name}</h2>
			</div>
			<div className="column modal__activity">
				<div className="modal__activity-box">
					<label className="modal__label" htmlFor="">Member for</label>
					<span className="modal__label--value">{props.value.data.member}</span>
				</div>
				<div className="modal__activity-box">
					<label className="modal__label" htmlFor="">Last seen</label>
					<span className="modal__label--value">{props.value.data.last_seen}</span>
				</div>
				<div className="modal__activity-box">
					<label className="modal__label" htmlFor="">Activity level</label>
					<div className="modal__activity-level">
						{props.value.data.activity_level > 0 && [...Array(props.value.data.activity_level)].map((x, i) =>
							<div className={"level-" + i + " active"} key={i}>
								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
									<title>medal</title>
									<path d="M10 10c0.528 0 1.026 0.104 1.504 0.256l-6.077-9.115c-0.059-0.088-0.157-0.141-0.263-0.141h-3.556c-0.117 0-0.188 0.131-0.122 0.229l6.231 9.347c0.687-0.356 1.456-0.576 2.283-0.576zM18.392 1h-3.556c-0.106 0-0.204 0.053-0.263 0.141l-3.823 5.734 2 3 5.764-8.646c0.065-0.098-0.005-0.229-0.122-0.229zM10 11c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4c0-2.209-1.791-4-4-4zM12.112 15.117c0.062 0.064 0.052 0.158-0.022 0.208s-0.095 0.153-0.049 0.229c0.047 0.076 0.018 0.165-0.065 0.199s-0.125 0.13-0.095 0.214-0.017 0.165-0.104 0.181-0.149 0.101-0.137 0.189-0.051 0.158-0.14 0.155c-0.089-0.003-0.167 0.068-0.174 0.156s-0.083 0.144-0.169 0.123-0.178 0.031-0.203 0.117-0.111 0.124-0.191 0.085c-0.080-0.039-0.18-0.006-0.222 0.072s-0.134 0.098-0.205 0.043-0.175-0.044-0.232 0.024-0.151 0.068-0.209 0-0.162-0.079-0.232-0.024-0.162 0.035-0.205-0.043-0.142-0.111-0.222-0.072c-0.080 0.039-0.166 0-0.191-0.085s-0.116-0.138-0.203-0.117-0.163-0.034-0.169-0.123-0.084-0.159-0.173-0.157c-0.089 0.003-0.152-0.067-0.14-0.155s-0.050-0.173-0.137-0.189-0.135-0.097-0.104-0.181-0.013-0.18-0.095-0.214-0.111-0.123-0.065-0.199c0.047-0.076 0.025-0.179-0.049-0.229s-0.083-0.144-0.022-0.208c0.062-0.064 0.062-0.169 0-0.234s-0.052-0.158 0.022-0.208 0.095-0.153 0.049-0.229c-0.047-0.076-0.018-0.165 0.065-0.199s0.125-0.13 0.095-0.214 0.017-0.165 0.104-0.181 0.149-0.101 0.137-0.189 0.051-0.158 0.14-0.155c0.089 0.003 0.167-0.068 0.174-0.156s0.083-0.144 0.169-0.123 0.178-0.031 0.203-0.117 0.111-0.124 0.191-0.085c0.080 0.039 0.18 0.006 0.222-0.072s0.134-0.098 0.205-0.043 0.175 0.044 0.232-0.024 0.151-0.068 0.209 0 0.162 0.079 0.232 0.024 0.162-0.035 0.205 0.043 0.142 0.111 0.222 0.072c0.080-0.039 0.166 0 0.191 0.085s0.116 0.138 0.203 0.117 0.163 0.034 0.169 0.123 0.085 0.159 0.174 0.156c0.089-0.003 0.152 0.067 0.14 0.155s0.050 0.173 0.137 0.189 0.135 0.097 0.104 0.181 0.013 0.18 0.095 0.214 0.111 0.123 0.065 0.199c-0.047 0.076-0.025 0.179 0.049 0.229s0.083 0.144 0.022 0.208-0.063 0.171-0.001 0.235z"></path>
								</svg>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="column modal__header-container">
				<Chevron className="chevron-left"/>
				<h1 className="modal__header">How it all started</h1>
				<Chevron className="chevron-right"/>
			</div>
			<div className="column modal__subheader-container">
				<SmallHeader title="That's where we have been these 5 months ago"/>
			</div>
			<div className="column modal__numbers-wrapper">
				<div className="modal__numbers-box modal__numbers-box--box-1"><span
					className="numbers"><span>{props.value.data.peers}</span><p>peers</p></span></div>
				<div className="modal__numbers-box modal__numbers-box--box-2"><span
					className="numbers"><span>{props.value.data.discussions}</span><p>discussions</p></span></div>
				<div className="modal__numbers-box modal__numbers-box--box-3"><span
					className="numbers"><span>{props.value.data.findings}</span><p>findings</p></span></div>
				<div className="modal__numbers-box modal__numbers-box--box-4"><span
					className="numbers"><span>{props.value.data.questions}</span><p>questions</p></span></div>
			</div>
			<div className="column modal__join-wrapper">
				<SmallHeader title="Who joined the platform that the same period"/>
			</div>
			<div className="column modal__related-people-wrapper">
				{[...Array(3)].map((x, i) =>
					<RelatedPeople key={i} {...props} />
				)}
			</div>
			<div className="column modal__hottest-wrapper">
				<SmallHeader title="The hottest discussion these days"/>
			</div>
			<div className="column modal__person-activity">
				<img className="rounded modal__person-activity--img" src={props.value.data.image} alt="xyz"/>
				<div className="column">
					<span className="modal__person-activity--name">Andrew</span>
					<SmallHeader title="Found the guardian article"/>
					<h5>{props.value.data.question}</h5>
					<ul className="modal__stats">
						<li className="modal__stats--element"><span className="modal__stats--number">1</span> related
							discussion
						</li>
						<li className="modal__stats--element"><span className="modal__stats--number">6</span> peers
							involved
						</li>
						<li className="modal__stats--element"><span className="modal__stats--number">3</span>
							conversations
						</li>
						<li className="modal__stats--element"><span className="modal__stats--number">19</span> upvotes
						</li>
					</ul>
				</div>
			</div>
			<button onClick={props.closeModal} className="modal__close"></button>
			<div>{props.value.data.question}</div>
		</Modal>)
};

export default OptionModal;