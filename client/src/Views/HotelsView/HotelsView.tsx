import React, { Component } from 'react';
import Search from '../../components/Search/Search';
import LoginSystem from '../../components/Profile/Profile';
import HotelsList from '../../components/HotelList/HotelList';
import { getFilteredHotels } from '../../utils/getFilteredHotels';
import { connect } from 'react-redux';
import * as actions from '../../Redux/actions/index';
import Boxes from '../../components/Boxes/Boxes';
import ViewSwitcher from '../../components/ViewSwitcher/ViewSwitcher';
import Loader from '../../components/External/Loader/Loader';
import Notification from '../../components/External/Notification/Notification';

import { Hotel } from './../../types';
import { Props, State } from './types';

class HotelsView extends Component<Props, State> {
  state: State = {
    isLoading: false,
    data: [],
    users: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const hotelsList: Array<Hotel> = await this.props.fetchHotels();
    const users = await this.props.fetchUser();

    this.setState({
      isLoading: false,
      data: hotelsList,
      users,
    });
  }

  render() {
    return (
      <div className={'container'}>
        {!this.state.isLoading && (
          <Notification type={'success'} text={'Welcome in the app!'} />
        )}

        <header className="header">
          <Search />
          {/* //#TODO
                        currently auth system doesn't work except google gmail passport authorization. Only localhost,
                        on prod erorr with URI. Below component is commented to not show Login buttons */}
          <LoginSystem />
        </header>
        <div className="content">
          <div className={'content__header-wrapper'}>
            <h1 className={'view-header'}>Hotels overview</h1>
            <ViewSwitcher />
          </div>
          {this.props.hotelsList.length === 0 && !this.state.isLoading ? (
            <span className="content__no-results">Sorry no results :(</span>
          ) : (
            <React.Fragment>
              {this.state.isLoading === true ? (
                <Loader text="Loading" />
              ) : (
                <React.Fragment>
                  <Boxes />
                  <HotelsList
                    hotels={getFilteredHotels(
                      this.state.data,
                      this.props.filterHotels,
                    )}
                  />
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    hotelsList: getFilteredHotels(state.hotelsList, state.filterHotels),
    filterHotels: state.filterHotels,
    errors: state.errors,
    deletedHotel: state.deletedHotel,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(HotelsView);
