import { Hotel } from '../../types';

export type State = {
  isLoading: boolean;
  data: any;
  users: any;
};

export type Props = {
  readonly fetchHotels: () => Array<Hotel>;
  readonly fetchUser: () => void;
  readonly fetchHotelsLength: () => number;
  readonly hotelsList: Array<Hotel>;
  readonly filterHotels: any;
};
