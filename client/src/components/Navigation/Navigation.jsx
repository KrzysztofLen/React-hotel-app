import React from 'react';
import {NavLink} from 'react-router-dom';
import {Logo} from "../Logo/Logo";
import {home} from "../../assets/SVG/home.svg";

class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeIndex: 0
		};
	}

	onSetActiveIndex = (index) => {
		this.setState({
			activeIndex: index
		});
	};

	render() {
		return (
			<nav className="sidebar">
				<Logo/>
				<ul className="side-nav">
					{this.props.navlinks.map(({path}, index) => {
						return (
							<li key={index}
							    className={this.state.activeIndex === index ? "side-nav__item side-nav__item--active" : "side-nav__item"}
							    onClick={this.onSetActiveIndex.bind(this, index)}>
								<NavLink to={`${path}`} className="side-nav__link" />
							</li>
						)
					})}
				</ul>
			</nav>
		)
	}
}

Navigation.defaultProps = {
	navlinks: [
		{
			path: "/"
		},
		{
			path: "/buy"
		},
		{
			path: "/reservation"
		},
		{
			path: "/add"
		}
	]
};

export default Navigation;