import { Hotel } from '../../types';

export type Props = {
  readonly hotels: Array<Hotel>;
};

export type State = {
  perPage: number;
  page: number;
};
