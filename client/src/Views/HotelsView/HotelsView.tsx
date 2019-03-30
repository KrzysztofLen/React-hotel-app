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

interface IState {
    isLoading: boolean;
}

interface IProps {
    fetchHotels: () => Array<IHotel>,
    fetchUser: () => void,
    fetchHotelsLength: () => number,
    hotelsList: Array<IHotel>
}

class HotelsView extends Component<IProps, IState> {
    constructor(props: IProps) {
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
        window.setTimeout(() => {
            this.setState({
                isLoading: false
            });
        }, 2000);
    }

    render() {
        return (
            <div className={"container"}>
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
                            {this.state.isLoading === true ? <Loader text="Loading"/> : <React.Fragment>
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

interface IHotelsList {
    hotelsList: Array<IHotel>,
    filterHotels: string
}

function mapStateToProps({hotelsList, filterHotels}: IHotelsList) {
    return {
        hotelsList: getFilteredHotels(hotelsList, filterHotels)
    }
}

export default connect(mapStateToProps, actions)(HotelsView);