// @flow
const HOTELS_LENGTH = 'HOTELS_LENGTH';

export default function(state = 0, action) {
  switch (action.type) {
    case HOTELS_LENGTH:
      return action.payload;
    default:
      return state;
  }
}
