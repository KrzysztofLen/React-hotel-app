import React, { Component } from 'react';
import { connect } from 'react-redux';

import { switchView } from '../../Redux/actions';

import list from './../../assets/SVG/list.svg';
import listGrey from './../../assets/SVG/list-grey.svg';
import alignJustify from './../../assets/SVG/align-justify.svg';
import alignJustifyGrey from './../../assets/SVG/align-justify-grey.svg';

import { Props, ViewType } from './types';

class ViewSwitcher extends Component<Props, {}> {
  private setActive = (id: number) => {
    this.props.switchView(id);
  };

  render() {
    return (
      <div className="viewSwitcher">
        <div
          className={'viewSwitcher__filter'}
          onClick={() => this.setActive(1)}>
          <img
            src={this.props.viewTypeId === 1 ? alignJustify : alignJustifyGrey}
            style={{ width: 20, height: 20 }}
          />
        </div>
        <div
          className={'viewSwitcher__filter'}
          onClick={() => this.setActive(2)}>
          <img
            src={this.props.viewTypeId === 2 ? list : listGrey}
            style={{ width: 20, height: 20 }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ viewTypeId }: ViewType) => {
  return {
    viewTypeId,
  };
};

const mapDispatchToProps = { switchView };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewSwitcher);
