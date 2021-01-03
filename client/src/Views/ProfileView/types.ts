import { User } from '../../types';

export type Props = {
  readonly currentUserAuth: User;
  readonly fetchUser: () => void;
};
