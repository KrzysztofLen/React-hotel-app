import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startLogin} from "../actions/auth";
import {NavLink} from 'react-router-dom';
import LoginButton from "./LoginButton";


export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLogged: false
		}
	}

	// console.log(startLogin);
	handleClick = () => {
		console.log('click');
		// this.setState({isLogged: true})
	};

	render() {
		console.log(this.state.isLogged);
		return (
			<header className="header">
				<NavLink to="/">
					<img src={require("../assets/logo.png")} className="logo" alt="trillo logo"/>
				</NavLink>
				<form action="#" className="search">
					<input type="text" className="search__input" placeholder="Search hotels"/>
				</form>
				<LoginButton onClick={this.handleClick}
				             isLogged={this.state.isLogged}/>
				{/*<button type="button" className="btn btn--login" onClick={startLogin}>Login</button>*/}
				{/*<NavLink to="/" className="header__back">Back</NavLink>*/}
			</header>
		)
	}
};

// const mapDispatchToProps = (dispatch) => ({
// 	startLogin: () => dispatch(startLogin())
// });
//
// export default connect(undefined, mapDispatchToProps)(LoginButton);