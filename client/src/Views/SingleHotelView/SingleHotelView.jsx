import React from 'react';
import { Loader } from '../../components/External/Loader/Loader';
import * as actions from '../../Redux/actions/index';
import HotelGallery from '../../components/HotelGallery/HotelGallery';
import { HotelOverview } from '../../components/Hotel/HotelOverview/HotelOverview';
import { HotelDetails } from '../../components/Hotel/HotelDetails/HotelDetails';
import { connect } from 'react-redux';
import Weather from '../../components/Weather/Weather';

class SingleHotelView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.props.fetchHotels();

    this._timer = setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 1500);
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  render() {
    const hotelID = this.props.match.params.id;
    const hotelValues = this.props.hotelsList.filter(
      (hotel) => hotel._id === hotelID,
    );
    const [hotel] = hotelValues;

    return (
      <div className="content">
        <div className="content__container">
          <main className="single-hotel">
            {this.state.isLoading ? (
              <Loader text="Loading" />
            ) : (
              <React.Fragment>
                <HotelGallery images={hotel.hotel_images} />
                <HotelOverview {...hotel} />
                <Weather adress={hotel.hotel_adress} city={hotel.hotel_city} />
                <HotelDetails {...hotel} />
              </React.Fragment>
            )}
          </main>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ hotelsList }) {
  return {
    hotelsList,
  };
}

export default connect(mapStateToProps, actions)(SingleHotelView);
