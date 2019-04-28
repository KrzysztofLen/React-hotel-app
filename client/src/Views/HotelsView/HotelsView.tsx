import React, {Component} from "react";
import Search from "../../components/Search/Search";
import LoginSystem from "../../components/Auth/AuthSystem/AuthSystem";
import HotelsList from "../../components/HotelList/HotelList";
import {getFilteredHotels} from "../../utils/getFilteredHotels";
import {connect} from "react-redux";
import * as actions from "../../Redux/actions/index";
import Boxes from "../../components/Boxes/Boxes";
import ViewSwitcher from "../../components/ViewSwitcher/ViewSwitcher";
import Loader from "../../components/External/Loader/Loader";
import {IHotel} from "../../types";
import Messages from "../../components/External/Messages/Messages";

interface IState {
    isLoading: boolean;
    data: any;
    users: any,
    hotelsLength: number
}

interface IProps {
    fetchHotels: () => Array<IHotel>,
    fetchUser: () => void,
    fetchHotelsLength: () => number,
    hotelsList: Array<IHotel>,
    deletedHotel: any,
    filterHotels: any
}

class HotelsView extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            isLoading: false,
            data: [],
            users: null,
            hotelsLength: 0
        };
    }

    async componentDidMount() {
        this.setState({isLoading: true});

        const hotelsList: Array<IHotel> = await this.props.fetchHotels();
        const users = await this.props.fetchUser();
        const hotelsLength: number = await this.props.fetchHotelsLength();

        this.setState({
            isLoading: false,
            data: hotelsList,
            users,
            hotelsLength
        });
    }

    render() {
        return (
            <div className={"container"}>
                {this.props.deletedHotel &&
				<Messages type={"success"} message={this.props.deletedHotel.message} duration={10000}/>}
                {this.props.deletedHotel === false &&
				<Messages type={"danger"} message={"Sorry you can't remove this item!"} duration={10000}/>}

                <header className="header">
                    <Search/>
                    <LoginSystem/>
                </header>
                <div className="content">
                    <div className={"content__header-wrapper"}>
                        <h1 className={"view-header"}>Hotels overview</h1>
                        <ViewSwitcher/>
                    </div>
                    {this.props.hotelsList.length === 0 && this.state.isLoading === false ?
                        <span className="content__no-results">Sorry no results :(</span> :
                        <React.Fragment>
                            {this.state.isLoading === true
                                ? <Loader text="Loading"/>
                                : <React.Fragment>
                                    <Boxes/>
                                    <HotelsList hotels={getFilteredHotels(this.state.data, this.props.filterHotels)}/>
                                </React.Fragment>}
                        </React.Fragment>
                    }
                </div>
            </div>
        )
    }
}

interface IHotelsList {
    hotelsList: Array<IHotel>,
    filterHotels: string,
    errors: any,
    deletedHotel: any
}

function mapStateToProps({hotelsList, filterHotels, errors, deletedHotel}: IHotelsList) {
    return {
        hotelsList: getFilteredHotels(hotelsList, filterHotels),
        filterHotels,
        errors,
        deletedHotel
    }
}

export default connect(mapStateToProps, actions)(HotelsView);