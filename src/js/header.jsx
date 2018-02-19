import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
	return (
	<header className="header">
			<div className="row">
				<div className="col-20">
					<NavLink to="/" className="header__back">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
						     viewBox="0 0 20 20">
							<title>chevron-thin-left</title>
							<path
								d="M13.891 17.418c0.268 0.272 0.268 0.709 0 0.979s-0.701 0.271-0.969 0l-7.83-7.908c-0.268-0.27-0.268-0.707 0-0.979l7.83-7.908c0.268-0.27 0.701-0.27 0.969 0s0.268 0.709 0 0.979l-7.141 7.419 7.141 7.418z"></path>
						</svg>
					</NavLink>
				</div>
				<div className="col-60">
					<div className="header__main-header">
						<h1 className="header__question">{props.title}</h1>
						<button className="btn-plus">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
								<title>plus</title>
								<path d="M16 10c0 0.553-0.048 1-0.601 1h-4.399v4.399c0 0.552-0.447 0.601-1 0.601s-1-0.049-1-0.601v-4.399h-4.399c-0.552 0-0.601-0.447-0.601-1s0.049-1 0.601-1h4.399v-4.399c0-0.553 0.447-0.601 1-0.601s1 0.048 1 0.601v4.399h4.399c0.553 0 0.601 0.447 0.601 1z"></path>
							</svg>
						</button>
					</div>
					{props.options && <div className="header__options">
						<div className="header__option">
							<form>
								<input type="radio" id="test1" name="radio-group" defaultChecked/>
								<label className="header__option-label" htmlFor="test1">My shelf</label>
								<input type="radio" id="test2" name="radio-group"/>
								<label className="header__option-label" htmlFor="test2">All questions</label>
							</form>
						</div>
						<div className="header-sort">
							<span className="sort">Sort by: </span>
							<button className="sort-option active">recent</button>
							<span className="sort">or</span>
							<button className="sort-option">hot</button>
						</div>
					</div>}
					{!props.options && <p className="question__last-time">Last time discussed <span>1</span> day ago</p>}
				</div>
				<div className="col-20"></div>
			</div>
			{props.options && <div className="row u-margin-top-small">
				<div className="column col-60 column-offset-20">
					<input className="header__search" type="text" placeholder="Search questions"/>
					<button className="header__search-btn">Search</button>
				</div>
			</div>}
	</header>
	)
};

Header.defaultProps = {
	title: 'Questions',
	options: true
};

export default Header;