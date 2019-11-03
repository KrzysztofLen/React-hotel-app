import store from '../Redux/store/configureStore';
import { fetchUser } from '../Redux/actions';

export function onFetchUserEnter() {
  store.dispatch(fetchUser());
}
