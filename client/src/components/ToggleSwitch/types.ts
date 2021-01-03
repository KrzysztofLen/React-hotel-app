export type Props = {
  readonly onClick: (value: boolean, id: string) => void;
  readonly label: string;
  readonly id: string;
  readonly className: string;
  readonly theme: string;
  readonly localStorageKey?: any;
  readonly localStorageValue?: any;
};

export type State = {
  enabled: boolean;
};
