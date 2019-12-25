import { defaultProps } from './Notification';

export type Props = {
  readonly type?: string;
  readonly text: string;
  readonly duration?: number;
  readonly autoClose?: number;
  readonly closeOnClick?: boolean;
} & typeof defaultProps;

export type State = {
  show: boolean;
  prefix: string | null;
  duration: number;
};
