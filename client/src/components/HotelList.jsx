// @flow
import * as React from 'react'
import HotelListItem from './HotelListItem';
import Loader from './Loader/Loader';

import {connect} from 'react-redux';

type Props = {
	hotels: any
};

type State = {
	showComponent: boolean,
	perpage: number,
	page: number,
	data: Array<mixed>,
	isLoading: boolean
}

class HotelsList extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			showComponent: false,
			perpage: 6,
			page: 1,
			data: [],
			isLoading: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
		this.setState((prevState): Object => {
			return {
				perpage: prevState.perpage + 3
			}
		});
	};

	componentDidMount() {
		this.setState({isLoading: true});

		//Temp to see Loading
		setTimeout(() => {
			console.log('%c HotelList component ', 'background: #222 color: #bada55', this.props);

			this.setState({
				data: this.props.hotels.hotels,
				isLoading: false
			});
		}, 2000);

	}

	render() {
		const count: number = this.state.page * this.state.perpage;
		const elem: Array<mixed> = this.state.data.slice(0, count);

		return (
			<main className="hotel-list">
				<div className="content__container">
					<div className="column">
						{this.state.isLoading ? <Loader text="Loading"/> :
							<React.Fragment>
								<div id="question-root">
									{elem.map((data: any, index: number): Object => <HotelListItem data={data} key={data.id}
									                                                               index={index}/>)}
								</div>
								<div className="more-container">
									<button className="btn-more" onClick={this.handleClick}>Load more Hotel's</button>
								</div>
							</React.Fragment>}
					</div>
				</div>
			</main>
		)
	}
}

interface Hotels {
	hotels: Array<Object>
}

function mapStateToProps({hotels}: Hotels): Object {
	return {
		hotels
	}
}

export default connect(mapStateToProps)(HotelsList);