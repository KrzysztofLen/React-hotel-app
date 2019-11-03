import { IHotel } from '../../types';

export type Props = {
  readonly viewTypeId: number;
  readonly deleteHotel: (id: any) => any;
  readonly data: IHotel;
  readonly id: number;
  readonly index: number;
};

export type State = {
  activeIndex: number | null;
  modalIsOpen: boolean;
};
