//@Flow
import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import {Logo} from "../Logo/Logo";
import Messages from "../External/Messages/Messages";

interface IProps {
	navlinks: Array<Object>
}

interface IState {
	isUnderBreakpoint: boolean
}

const SideMenuLink = ({ to, activeOnlyWhenExact }) => {
	return (
		<Route path={to}
		       exact={activeOnlyWhenExact}
		       children={({ match }, index) => (
			       <li key={index} className={match ? "side-navigation__item side-navigation__item--active" : "side-navigation__item"}>
				       <NavLink to={to} className={"side-navigation__link"}/>
			       </li>
		       )}
		/>
	);
};

class Navigation extends Component<IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			isUnderBreakpoint: false
		};
	}

	onCheckResolution = () => {
		this.setState({ isUnderBreakpoint: window.innerWidth < 480 });
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
				<Messages type={"danger"}
				          message={"Your device resolution is under supported value. Some content may not appear correctly"}/>
				}
				<nav className={"side-navigation"}>
					<Logo/>
					<ul className={"side-navigation__container"}>
						<SideMenuLink activeOnlyWhenExact={true} to="/" />
						<SideMenuLink to="/buy" />
						<SideMenuLink to="/reservation" />
						<SideMenuLink to="/add" />
					</ul>
				</nav>
			</React.Fragment>
		)
	}
}

export default Navigation;