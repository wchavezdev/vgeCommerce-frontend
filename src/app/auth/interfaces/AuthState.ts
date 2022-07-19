import { User } from '../../users/interfaces';

export interface AuthState {
  checking: boolean;
  loggedIn: boolean;
  user?: User;
}
