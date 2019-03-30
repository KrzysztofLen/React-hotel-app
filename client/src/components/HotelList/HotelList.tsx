import React, {Component} from 'react';
import HotelListItem from '../HotelListItem/HotelListItem';
import {Spinner} from "../Spinner/Spinner";
import {IHotel} from "../../types";

interface IProps {
	hotels: Array<IHotel>
}

interface IState {
    perPage: number,
	page: number,
	spinner: boolean
}

class HotelsList extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			perPage: 6,
			page: 1,
			spinner: true
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
		window.onbeforeunload = () => window.scrollTo(0, 0); // force scroller to top on load
	}

	onScroll = () => {
		let windowHeight: number = window.innerHeight + window.scrollY;

		// Flow fixed for document.body
		if (document.body) {
			let bodyOffset: number = document.body.offsetHeight;

			if (windowHeight >= bodyOffset) {
				this.setState((prevState: any) => {
					return {
                        perPage: prevState.perPage + 3
					}
				});
			}
		}
	};

	render() {
		const count: number = this.state.page * this.state.perPage;
		const visibleHotels: Array<IHotel> = this.props.hotels.slice(0, count);

		return (
			<main className="hotel-list">
				<div className="content__container">
					<div className={"hotel-list__container"}>
						<React.Fragment>
							{visibleHotels.map((hotel: any, index: number): Object => <HotelListItem data={hotel}
							                                                               key={hotel._id}
							                                                               id={hotel._id}
							                                                               index={index}/>
							)}
							<div className="hotel-list__more">
								{!(visibleHotels.length === this.props.hotels.length) && <Spinner/>}
							</div>
						</React.Fragment>
					</div>
				</div>
			</main>
		)
	}
}

export default HotelsList;