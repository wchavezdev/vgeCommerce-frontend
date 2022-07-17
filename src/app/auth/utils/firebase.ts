import { User as FirebaseUser } from '@angular/fire/auth';
import { User } from '../../users/interfaces';

export const formatUserProps = (firebaseUser: FirebaseUser) => {
  const formatedUser: User = {
    uid: firebaseUser.uid,
    email: firebaseUser.email ?? undefined,
    displayName: firebaseUser.displayName ?? '',
    photoURL: firebaseUser.photoURL ?? undefined,
    emailVerified: firebaseUser.emailVerified,
  };

  return formatedUser;
};
