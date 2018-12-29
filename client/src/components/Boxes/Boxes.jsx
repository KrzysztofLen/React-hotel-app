// @flow
import * as React from 'react';
import {connect} from "react-redux";
import {switchView} from "../../Redux/actions";

type Props = {
	hotelsNumberInDatabase: number
}

class Boxes extends React.Component<Props> {
	render() {
		return (
			<React.Fragment>
				<div className={"box__container"}>
					<div className={"box box--1"}>
						<div className={"box__icon box__icon--1"}/>
						<div className={"box__text"}>
							<span className={"box__text--title"}>Total Hotels: </span>
							<span className={"box__text--value"}>{this.props.hotelsNumberInDatabase}</span>
						</div>
					</div>
					<div className={"box box--2"}>
						<div className={"box__icon box__icon--2"}/>
						<div className={"box__text"}>
							<span className={"box__text--title"}>5 star's Hotels: </span>
							<span className={"box__text--value"}>5</span>
						</div>
					</div>
					<div className={"box box--3"}>
						<div className={"box__icon box__icon--3"}/>
						<div className={"box__text"}>
							<span className={"box__text--title"}>Opinions: </span>
							<span className={"box__text--value"}>53123</span>
						</div>
					</div>
					<div className={"box box--4"}>
						<div className={"box__icon box__icon--4"}/>
						<div className={"box__text"}>
							<span className={"box__text--title"}>New hotel's: </span>
							<span className={"box__text--value"}>2</span>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

interface IHotelLength {
	hotelsNumberInDatabase: number
}

function mapStateToProps({hotelsNumberInDatabase}): IHotelLength {
	return {
		hotelsNumberInDatabase: hotelsNumberInDatabase.count
	}
}

const mapDispatchToProps = {switchView};

export default connect(mapStateToProps, mapDispatchToProps)(Boxes);