import * as React from 'react';
import * as actions from "../../Redux/actions/index";
import HotelImage from '../Hotel/HotelImage/HotelImage';
import HotelLink from '../Hotel/HotelLink/HotelLink';
import HotelRating from '../Hotel/HotelRating/HotelRating';
import ToggleButton from '../External/ToggleButton/ToggleButton';
import HotelPrice from '../Hotel/HotelPrice/HotelPrice';
import HotelOpinion from '../Hotel/HotelOpinion/HotelOpinion';
import HotelFacilities from '../Hotel/HotelFacilities/HotelFacilities';
import HotelDescription from '../Hotel/HotelDescription/HotelDescription';
import Slider from '../External/Slider/Slider';

import isNewIcon from '../../assets/SVG/new.svg';
import ModalWindow from "../ModalWindow/ModalWindow";
import {connect} from "react-redux";
import {IHotel, INDELIBLE_HOTELS} from "../../types";
import Messages from "../External/Messages/Messages";
import DottedMenu from "../External/DottedMenu/DottedMenu";

interface IProps {
    viewTypeId: number,
    deleteHotel: (id: any) => any,
    data: IHotel,
    id: number,
    index: number
}

interface IState {
    activeIndex: number | null,
    modalIsOpen: boolean
}

class HotelListItem extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.onModalOpen = this.onModalOpen.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.onToggleButton = this.onToggleButton.bind(this);

        this.state = {
            modalIsOpen: false,
            activeIndex: null
        };
    }

    onModalOpen() {
        this.setState({modalIsOpen: true});
    }

    onCloseModal() {
        this.setState({modalIsOpen: false});
    }

    onToggleButton = (index: number) => {
        this.setState({
            activeIndex: index
        });
        if (this.state.activeIndex === index) {
            this.setState({
                activeIndex: null
            })
        }
    };

    onDeleteHotel = () => {
        const isSealed = INDELIBLE_HOTELS.includes(this.props.data._id.toString());

        this.props.deleteHotel(isSealed === true ? 0 : this.props.data._id);
    }

    render() {
        const isNew = (this.props.data.is_new) ? Date.now() - parseInt(this.props.data.is_new, 10) : 0;
        const isNewDuration: number = 24 * 60 * 60 * 1000 * 7; // 7 days

        return (
            <div
                className={this.props.viewTypeId === 1 ? "hotel__container" : "hotel__container hotel__container--list"}>

                <div className="hotel__image-container">
                    <HotelImage onClick={this.onModalOpen} image={this.props.data.hotel_images}/>
                    <ModalWindow isOpen={this.state.modalIsOpen} closeModal={this.onCloseModal}
                                 component={<Slider images={this.props.data.hotel_images}/>}/>
                </div>
                <div className={"hotel__address-container"}>
                    <div className={"hotel__name-wrapper"}>
                        <HotelLink hotelName={this.props.data.hotel_name}
                                   id={this.props.data._id}/>
                        <HotelRating rate={this.props.data.hotel_stars}/>
                    </div>
                    <div className={"hotel__address-wrapper"}>
                        <span className={"hotel__address-value"}>{this.props.data.hotel_adress}</span>
                        <p className={"hotel__address-distance"}>(<span>{this.props.data.hotel_distance}</span> km from
                            center)</p>
                    </div>
                </div>
                <div className="hotel__details">
                    <HotelPrice price={this.props.data.hotel_price}/>
                    <HotelOpinion hotelRating={this.props.data.hotel_rating}
                                  hotelReviews={this.props.data.hotel_reviews}/>
                    <div className={"hotel__more-details"}>
                        <ToggleButton key={this.props.index}
                                      index={this.props.index}
                                      activeIndex={this.state.activeIndex === this.props.index}
                                      onClick={this.onToggleButton}
                                      btnClass={"button inline"}
                        />
                    </div>
                    <DottedMenu>
                        <button className={"dottedMenu__more-menu-btn"} onClick={this.onDeleteHotel}>Delete</button>
                    </DottedMenu>
                </div>
                {this.state.activeIndex === this.props.index &&
				<React.Fragment>
					<HotelDescription description={this.props.data.hotel_description}/>
					<HotelFacilities {...this.props.data}/>
				</React.Fragment>
                }
                {(isNew >= isNewDuration || isNew === 0) ? null :
                    <img src={isNewIcon} alt="new" className="hotel__isNew"/>}
            </div>
        )
    }
}

interface IViewTypeID {
    viewTypeId: number
}

function mapStateToProps({viewTypeId}: IViewTypeID) {
    return {
        viewTypeId
    }
}

export default connect(mapStateToProps, actions)(HotelListItem);