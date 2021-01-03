import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchHotels } from '../../Redux/actions';
import { Props } from './types';

const Search = (props: Props) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.searchHotels(e.currentTarget.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search hotels"
        value={props.hotelsSearch}
        onChange={handleSearchChange}
      />
    </div>
  );
};

const mapDispatchToProps = { searchHotels };

export default connect(null, mapDispatchToProps)(Search);
