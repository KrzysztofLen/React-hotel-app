import React from 'react';
import SingleComment from '../SingleComment';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import Gallery from '../Gallery/Gallery';
import {HotelOverview} from "../HotelOverview/HotelOverview";

class SingleHotel extends React.Component {
	constructor(props) {
		super(props);
		this.voteUp = this.voteUp.bind(this);
		this.voteDown = this.voteDown.bind(this);
		this.addComment = this.addComment.bind(this);
		this.state = {
			count: -1,
			comment: 1,
			page: 1,
			desc: null,
			data: [],
			isLoading: true,
		};
	}

	componentDidMount() {
		const json = localStorage.getItem('count');
		const count = parseInt(json);

		if (!isNaN(count)) {
			this.setState(() => ({count}));
		}

		setTimeout(() => {
			this.setState({data: this.props.appData, isLoading: false});
		}, 1500);
	}

	componentDidUpdate(prevState) {
		if (prevState.count !== this.state.count) {
			localStorage.setItem('count', this.state.count);
		}
	}

	voteDown() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			};
		});
	}

	voteUp() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	}

	addComment() {
		this.setState((prevState) => {
			return {
				comment: prevState.comment + 1
			}
		});
		document.querySelector('.btn-new-comment').style.opacity = 0;
	}

	render() {
		const count = this.state.page * this.state.comment;
		const index = parseInt(this.props.match.params.id);
		const value = this.state.data.filter(x => x.id === index);
		const [desc] = value;
		console.log(desc);
		return (
			<div className="content">
				<div className="content__container">
					<main className="hotel-view">
						{this.state.isLoading ? <Loader text="Loading"/> :
							<React.Fragment>
								<Gallery images={desc.hotel_images}/>
								<HotelOverview {...desc} />
							</React.Fragment>
						}
					</main>


					{/*<div className="column column-offset-20 col-80">*/}
					{/*<div className="single-question__container">*/}
					{/*<div className="question__avatar-container">*/}
					{/*<div className="question__avatar-panel">*/}
					{/*<img className="question__avatar" src="http://via.placeholder.com/50x50"*/}
					{/*alt=""/>*/}
					{/*</div>*/}
					{/*<div className="question__question">*/}
					{/*<h3 className="name">{desc.hotel_name}</h3>*/}
					{/*<span className="who">is asking:</span>*/}
					{/*<h4 className="question">{desc.hotel_name}</h4>*/}
					{/*<a href="#" className="unfollow">unfollow</a>*/}
					{/*<div className="single-question__text">*/}
					{/*<p className="single-question__text--question">Lorem ipsum dolor sit*/}
					{/*amet, consectetur adipisicing elit. Atque distinctio neque*/}
					{/*quaerat*/}
					{/*quod tenetur vero! Atque consectetur consequuntur delectus*/}
					{/*doloribus, ducimus earum eius, facilis, mollitia nam odio*/}
					{/*pariatur*/}
					{/*possimus quas.</p>*/}
					{/*<div className="single-question__count-container">*/}
					{/*<span*/}
					{/*className="single-question__counter">{this.state.count}</span>*/}
					{/*<span*/}
					{/*className="single-question__votes">{this.state.count >= 0 ? 'upvotes' : 'downvotes'}</span>*/}
					{/*</div>*/}
					{/*<div className="single-question__counter-btn-container">*/}
					{/*<button className="btn-count count-up" onClick={this.voteUp}>*/}
					{/*<svg version="1.1" xmlns="http://www.w3.org/2000/svg"*/}
					{/*width="20"*/}
					{/*height="20" viewBox="0 0 20 20">*/}
					{/*<title>triangle-up</title>*/}
					{/*<path d="M15 14h-10l5-9 5 9z"></path>*/}
					{/*</svg>*/}
					{/*</button>*/}
					{/*<button className="btn-count count-down"*/}
					{/*onClick={this.voteDown}>*/}
					{/*<svg version="1.1" xmlns="http://www.w3.org/2000/svg"*/}
					{/*width="20"*/}
					{/*height="20" viewBox="0 0 20 20">*/}
					{/*<title>triangle-down</title>*/}
					{/*<path d="M5 6h10l-5 9-5-9z"></path>*/}
					{/*</svg>*/}
					{/*</button>*/}
					{/*</div>*/}
					{/*</div>*/}
					{/*<button className="btn-new-answer">GIVE new answer</button>*/}
					{/*</div>*/}
					{/*</div>*/}
					{/*</div>*/}
					{/*</div>*/}
					{/*<div className="column column-offset-20 col-80 content__comment-container">*/}
					{/*<p className="single-question__answered"><span>2</span>peers already answered Eva*/}
					{/*</p>*/}
					{/*{[...Array(count)].map((x, i) => <SingleComment key={i} count={this.state.count}*/}
					{/*voteUp={this.voteUp}*/}
					{/*voteDown={this.voteDown}/>)}*/}
					{/*<button className="btn-new-comment" onClick={this.addComment}>COMMENT</button>*/}
					{/*</div>*/}

				</div>
			</div>
		);
	}
}

SingleHotel.propTypes = {
	appData: PropTypes.array.isRequired
};


export default SingleHotel;