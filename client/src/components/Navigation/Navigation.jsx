//@Flow
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Logo} from "../Logo/Logo";
import {home} from "../../assets/SVG/home.svg";

interface IProps {
	navlinks: Array<Object>
}

interface IState {
	activeIndex: number,
	isUnderBreakpoint: boolean
}

class Navigation extends Component<IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			activeIndex: 0,
			isUnderBreakpoint: false
		};
	}

	onSetActiveIndex = (index: number) => {
		this.setState({
			activeIndex: index
		});
	};

	onCheckResolution = () => {
		if (window.innerWidth < 480) {
			this.setState({
				isUnderBreakpoint: true
			});
		} else {
			this.setState({
				isUnderBreakpoint: false
			});
		}
	}

	componentDidMount() {
		window.addEventListener("resize", () => {
			this.onCheckResolution();
		});

		this.onCheckResolution();
	}

	render() {
		return (
			<React.Fragment>
				{this.state.isUnderBreakpoint &&
				<div className={"message__notSupported"}>Your device resolution is under supported value. Some content may not appear correctly</div>}
				<nav className="sidebar">
					<Logo/>
					<ul className="side-nav">
						{this.props.navlinks.map(({path}, index) => {
							return (
								<li key={index}
								    className={this.state.activeIndex === index ? "side-nav__item side-nav__item--active" : "side-nav__item"}
								    onClick={this.onSetActiveIndex.bind(this, index)}>
									<NavLink to={`${path}`} className="side-nav__link"/>
								</li>
							)
						})}
					</ul>
				</nav>
			</React.Fragment>
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