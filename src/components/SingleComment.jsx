import React from 'react';

class SingleComment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	render() {
		return (
			<div className="single-comment__container">
				<div className="single-comment__avatar-panel">
					<img className="question__avatar" src="http://via.placeholder.com/50x50"
					     alt=""/>
				</div>
				<div className="single-comment__person-panel">
					<h3 className="name">Joseph's</h3>
					<span className="who">commented it:</span>
					<h4 className="when">yesterday</h4>
					<div className="single-comment__content">
						<p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid commodi consectetur consequatur, corporis, culpa deserunt dolorum et eum fugiat, incidunt ipsum obcae</p>
						<div className="single-question__count-container">
							<span className="single-question__counter">{this.props.count}</span>
							<span className="single-question__votes">{this.props.count >= 0 ? 'upvotes' : 'downvotes'}</span>
							<div className="single-comment__counter-btn-container">
								<button className="btn-count count-up" onClick={this.props.voteUp}>
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
									     viewBox="0 0 20 20">
										<title>triangle-up</title>
										<path d="M15 14h-10l5-9 5 9z"></path>
									</svg>
								</button>
								<button className="btn-count count-down" onClick={this.props.voteDown}>
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
									     viewBox="0 0 20 20">
										<title>triangle-down</title>
										<path d="M5 6h10l-5 9-5-9z"></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SingleComment;