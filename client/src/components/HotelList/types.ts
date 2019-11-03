import { IHotel } from '../../types';

export type Props = {
  readonly hotels: Array<IHotel>;
};

export type State = {
  perPage: number;
  page: number;
};
