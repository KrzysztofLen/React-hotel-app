export type Props = {
  readonly type?: string;
  readonly text: string;
  readonly duration?: number;
  readonly autoClose?: number;
  readonly closeOnClick?: boolean;
};

export type State = {
  show: boolean;
  prefix: string | null;
  duration: number;
};

export type defaultProps = {
  readonly autoClose: number;
  readonly closeOnClick: boolean;
  readonly type: string;
};
