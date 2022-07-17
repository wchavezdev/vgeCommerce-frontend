import { User } from 'src/app/users/interfaces';

export interface AuthState {
  checking: boolean;
  loggedIn: boolean;
  user?: User;
}
