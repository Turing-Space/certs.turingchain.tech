import { TUser } from '@/contexts/user';
import { TAPIUser } from './api';
import { preparedCerts } from './certs';
import { TCert } from '@/contexts/certs';

export function preparedUser(
  user: TAPIUser,
): {
  user: Omit<TUser, 'loginMode'>;
  certs: TCert[];
} {
  return {
    user: {
      id: user.uid,
      name: user.displayName,
      email: user.email,
      avatarUri: 'https://source.unsplash.com/300x300/?baby',
    },
    certs: preparedCerts(user.certs),
  };
}
