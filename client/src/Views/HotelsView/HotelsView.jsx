//@Flow
import React, {Component} from "react";
import {Logo} from "../../components/Logo/Logo";
import Search from "../../components/Search/Search";
import LoginSystem from "../../components/Auth/AuthSystem/AuthSystem";
import HotelsList from "../../components/HotelList/HotelList";
import {getFilteredHotels} from "../../selectors/getFilteredHotels";
import connect from "react-redux/es/connect/connect";
import * as actions from "../../Redux/actions/index";
import Boxes from "../../components/Boxes/Boxes";
import ViewSwitcher from "../../components/ViewSwitcher/ViewSwitcher";
import Loader from "../../components/Loader/Loader";

interface IState {
	isLoading: boolean;
}

class HotelsView extends Component<IState> {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false
		};
	}

	getData = async () => {
		await this.props.fetchHotels();
		await this.props.fetchUser();
		await this.props.fetchHotelsLength();
	}

	componentDidMount() {
		this.setState({isLoading: true});
		this.getData();

		//Temp to see Loading
		this._timer = setTimeout(() => {
			this.setState({
				isLoading: false
			});
		}, 2000);
	}

	componentWillUnmount() {
		clearTimeout(this._timer);
	}

	render() {
		return (
			<div className={"container"}>
				<header className="header">
					<Logo/>
					<Search/>
					<LoginSystem/>
				</header>
				<div className="content">
					{this.props.hotelsList.length === 0 && this.state.isLoading === false ?
						<span className="content__no-results">Sorry no results :(</span> :
						<React.Fragment>
							{this.state.isLoading === true ? <Loader text="Loading"/> : <React.Fragment>
								<ViewSwitcher />
								<Boxes/>
								<HotelsList hotels={this.props.hotelsList}/>
							</React.Fragment>}
						</React.Fragment>
					}
				</div>
			</div>
		)
	}
}

function mapStateToProps({hotelsList, filterHotels}) {
	return {
		hotelsList: getFilteredHotels(hotelsList, filterHotels)
	}
}

export default connect(mapStateToProps, actions)(HotelsView);