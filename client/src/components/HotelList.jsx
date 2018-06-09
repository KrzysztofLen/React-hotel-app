// @flow
import * as React from 'react'
import HotelListItem from './HotelListItem';
import Loader from './Loader/Loader';

type Props = {
	data: Array<mixed>,
	isLoading: boolean
};

type State = {
	perpage: number,
	page: number
}

class HotelsList extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			perpage: 6,
			page: 1
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = () => {
		this.setState((prevState): Object => {
			return {
				perpage: prevState.perpage + 3
			}
		});
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

export default HotelsList;