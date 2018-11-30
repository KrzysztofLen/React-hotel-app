// @flow
const SEARCH_HOTELS = 'SEARCH_HOTELS';

export const hotelsSearch = (state = "", action) => {
  switch (action.type) {
    case SEARCH_HOTELS:
      return action.text;
    default:
      return state;
  }
};
