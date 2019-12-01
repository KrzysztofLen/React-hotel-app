import { Hotel, User } from '../../types';

export type State = {
  isLoading: boolean;
};

export type Props = {
  readonly fetchHotels: () => Array<Hotel>;
  readonly fetchUser: () => void;
  readonly fetchHotelsLength: () => number;
  readonly setTheme: (value: boolean) => number;
  readonly hotelsList: Array<Hotel>;
  readonly filterHotels: Array<Hotel>;
  readonly currentUserAuth: User;
};
