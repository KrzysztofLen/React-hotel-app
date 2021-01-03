import { Hotel } from '../../types';

export type Props = {
  readonly viewTypeId: string;
  readonly deleteHotel: (id: any) => any;
  readonly data: Hotel;
  readonly id: number;
  readonly index: number;
};

export type State = {
  activeIndex: number | null;
  modalIsOpen: boolean;
};
