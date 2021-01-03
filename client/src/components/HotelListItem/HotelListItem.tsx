import * as React from 'react';
import * as actions from '../../Redux/actions/index';
import HotelImage from '../Hotel/HotelImage/HotelImage';
import HotelLink from '../Hotel/HotelLink/HotelLink';
import HotelRating from '../Hotel/HotelRating/HotelRating';
import { ToggleButton } from '../ToggleButton/ToggleButton';
import HotelPrice from '../Hotel/HotelPrice/HotelPrice';
import HotelOpinion from '../Hotel/HotelOpinion/HotelOpinion';
import HotelFacilities from '../Hotel/HotelFacilities/HotelFacilities';
import HotelDescription from '../Hotel/HotelDescription/HotelDescription';
import { Slider } from '../Slider/Slider';

import Hotel_1 from '../../assets/image/1.jpg';
import Hotel_2 from '../../assets/image/2.jpg';
import Hotel_3 from '../../assets/image/3.jpg';

import isNewIcon from '../../assets/SVG/new.svg';
import ModalWindow from '../ModalWindow/ModalWindow';
import { connect } from 'react-redux';

import { Props, State } from './types';

const HOTEL_IMAGES = [Hotel_1, Hotel_2, Hotel_3];

class HotelListItem extends React.Component<Props, State> {
  state: State = {
    modalIsOpen: false,
    activeIndex: null,
  };

  private onModalOpen = () => {
    this.setState({ modalIsOpen: true });
  };

  private onCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  private onToggleButton = (index: number) => {
    const activeIndex = this.state.activeIndex === index ? null : index;
    this.setState({ activeIndex });
  };

  render() {
    const isNew = this.props.data.is_new
      ? Date.now() - parseInt(this.props.data.is_new, 10)
      : 0;
    const isNewDuration: number = 24 * 60 * 60 * 1000 * 7; // 7 days

    return (
      <div
        className={`hotel__container ${
          this.props.viewTypeId === '1' ? 'hotel__container--list' : ''
        }`}>
        <div className="hotel__image-container">
          <HotelImage
            onClick={this.onModalOpen}
            image={HOTEL_IMAGES[this.props.index]}
          />
          {this.props.data.hotel_images !== undefined && (
            <ModalWindow
              isOpen={this.state.modalIsOpen}
              closeModal={this.onCloseModal}
              component={<Slider images={this.props.data.hotel_images} />}
            />
          )}
        </div>
        <div className={'hotel__address-container'}>
          <div className={'hotel__name-wrapper'}>
            <HotelLink
              hotelName={this.props.data.hotel_name}
              id={this.props.data._id}
            />
            <HotelRating rate={this.props.data.hotel_stars} />
          </div>
          <div className={'hotel__address-wrapper'}>
            <span className={'hotel__address-value'}>
              {this.props.data.hotel_adress}
            </span>
            <p className={'hotel__address-distance'}>
              (<span>{this.props.data.hotel_distance}</span> km from center)
            </p>
          </div>
        </div>
        <div className="hotel__details">
          <HotelPrice price={this.props.data.hotel_price} />
          <HotelOpinion
            hotelRating={this.props.data.hotel_rating}
            hotelReviews={this.props.data.hotel_reviews}
          />
          <div className={'hotel__more-details'}>
            <ToggleButton
              key={this.props.index}
              index={this.props.index}
              isOpen={this.state.activeIndex === this.props.index}
              onClick={this.onToggleButton}
              btnClass={'button inline'}
            />
          </div>
        </div>
        {this.state.activeIndex === this.props.index && (
          <React.Fragment>
            <HotelDescription description={this.props.data.hotel_description} />
            <HotelFacilities {...this.props.data} />
          </React.Fragment>
        )}
        {isNew >= isNewDuration || isNew === 0 ? null : (
          <img src={isNewIcon} alt="new" className="hotel__isNew" />
        )}
      </div>
    );
  }
}

interface IViewTypeID {
  viewTypeId: string;
}

function mapStateToProps({ viewTypeId }: IViewTypeID) {
  return {
    viewTypeId,
  };
}

export default connect(mapStateToProps, actions)(HotelListItem);
