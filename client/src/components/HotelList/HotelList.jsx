// @flow
import * as React from 'react'
import HotelListItem from '../HotelListItem/HotelListItem';
import Loader from '../Loader/Loader';
import {Spinner} from "../Spinner/Spinner";

type Props = {
	data: Array<mixed>,
	isLoading: boolean
};

type State = {
	perpage: number,
	page: number,
	spinner: boolean
}

class HotelsList extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			perpage: 6,
			page: 1,
			spinner: true
		};

		this.onScroll = this.onScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
		window.onbeforeunload = () => window.scrollTo(0, 0); // force scroller to top on load
	}

	onScroll = () => {
		let windowHeight: number = window.innerHeight + window.scrollY;
		let bodyOffset: number = document.body.offsetHeight;

		if(windowHeight >= bodyOffset) {
			this.setState((prevState): Object => {
				return {
					perpage: prevState.perpage + 3
				}
			});
		}
	};

	render() {
		const count: number = this.state.page * this.state.perpage;
		const elem: Array<mixed> = this.props.data.slice(0, count);

		return (
			<main className="hotel-list">
				<div className="content__container">
					<div className="column">
						{this.props.isLoading ? <Loader text="Loading"/> :
							<React.Fragment>
								{elem.map((data: any, index: number): Object => <HotelListItem data={data}
								                                                               key={data.id}
								                                                               id={data.id}
								                                                               index={index}/>
								)}
								<div className="hotel-list__more">
									{!(elem.length === this.props.data.length) && <Spinner/>}
								</div>
							</React.Fragment>}
					</div>
				</div>
			</main>
		)
	}
}

export default HotelsList;