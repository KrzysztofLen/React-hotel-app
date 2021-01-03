import React, { PureComponent } from 'react';
import Search from '../../components/Search/Search';
import LoginSystem from '../../components/Profile/Profile';
import { HotelsList } from '../../components/HotelList/HotelList';
import { getFilteredHotels } from '../../utils/getFilteredHotels';
import { connect } from 'react-redux';
import * as actions from '../../Redux/actions/index';
import Boxes from '../../components/Boxes/Boxes';
import ViewSwitcher from '../../components/ViewSwitcher/ViewSwitcher';
import { Loader } from '../../components/External/Loader/Loader';
import Notification from '../../components/Notification/Notification';

import { Props, State } from './types';
import { ToggleSwitch } from '../../components/ToggleSwitch/ToggleSwitch';

class HotelsView extends PureComponent<Props, State> {
  state: State = {
    isLoading: true,
  };

  async componentDidMount() {
    setTimeout(async () => {
      await this.props.fetchHotels();
      await this.props.fetchUser();
      this.setState({
        isLoading: false,
      });
    }, 1500);

    if (localStorage.getItem('theme') === 'theme-dark') {
      this.props.setTheme(true);
    }
  }

  private setToggleValues = (value: boolean) => {
    this.props.setTheme(value);
  };

  render() {
    return (
      <div className={'container'}>
        {!this.state.isLoading && this.props.currentUserAuth && (
          <Notification type={'success'} text={'Welcome in the app!'} />
        )}

        <header className={'header'}>
          <Search />
          <div className={'header__darkMode'}>
            <ToggleSwitch
              onClick={this.setToggleValues}
              localStorageKey={'theme'}
              localStorageValue={'theme-dark'}
              theme={'default'}
              className={'d-flex'}
              label={'Dark mode'}
              id={'darkMode'}
            />
          </div>
          <LoginSystem />
        </header>
        <div className={'content'}>
          <div className={'content__header-wrapper'}>
            <h1 className={'view-header'}>Hotels overview</h1>
            <ViewSwitcher />
          </div>
          {this.props.hotelsList.length === 0 && !this.state.isLoading ? (
            <span className="content__no-results">Sorry no results :(</span>
          ) : (
            <React.Fragment>
              {this.state.isLoading ? (
                <Loader text="Loading" />
              ) : (
                <React.Fragment>
                  <Boxes />
                  <HotelsList
                    hotels={getFilteredHotels(
                      this.props.hotelsList,
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
    currentUserAuth: state.currentUserAuth,
    system: state.system,
  };
};

export default connect(mapStateToProps, actions)(HotelsView);
