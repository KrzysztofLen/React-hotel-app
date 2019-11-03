import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { switchView } from '../../Redux/actions';

import { Props } from './types';
import Box from '../Box/Box';

class Boxes extends PureComponent<Props, {}> {
  private getOpinions = () => {
    let opinions = 0;

    this.props.hotelsList.map(({ hotel_reviews }) => {
      opinions += hotel_reviews;
    });

    return opinions;
  };

  private getFiveStarsHotels = () => {
    const fiveStarsHotels = this.props.hotelsList.filter(
      ({ hotel_stars }) => hotel_stars === 5,
    );

    return fiveStarsHotels.length;
  };

  private getNewHotels = () => {
    const newHotel = [];

    this.props.hotelsList.map((hotel) => {
      const isNew = hotel.is_new ? Date.now() - parseInt(hotel.is_new, 10) : 0;
      const isNewDuration = 24 * 60 * 60 * 1000 * 7; // 7 days
      if (isNew >= isNewDuration || isNew === 0) {
        return false;
      } else {
        newHotel.push(hotel);
      }
    });

    return newHotel.length;
  };

  render() {
    return (
      <div className={'box__container'}>
        <Box
          index={1}
          title={'Total Hotels'}
          value={this.props.hotelsNumberInDatabase}
        />
        <Box
          index={2}
          title={"5 star's Hotels"}
          value={this.getFiveStarsHotels()}
        />
        <Box index={3} title={'Opinions'} value={this.getOpinions()} />
        <Box index={4} title={"New hotel's"} value={this.getNewHotels()} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    hotelsNumberInDatabase: state.hotelsNumberInDatabase,
    hotelsList: state.hotelsList,
  };
};

export default connect(
  mapStateToProps,
  switchView,
)(Boxes);
