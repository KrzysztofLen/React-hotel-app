export default function(state = [], action) {
  switch (action.type) {
    case "FETCH_HOTELS":
      return action.payload || false;
    default:
      return state;
  }
}
