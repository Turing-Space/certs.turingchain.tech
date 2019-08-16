import { TCert } from '@/contexts/certs';
import { TAPICert } from './api';

export function preparedCerts(certs: TAPICert[]): TCert[] {
  return certs.map(c => {
    const progress = c.isVerified
      ? [true, true, true, true, true]
      : [true, false, false, false, false];
    return {
      ipfs: c.ipfs, // hash
      issuer: c.issuer,
      name: c.type,
      timestamp: c.timestamp, // sec
      coverUri: `https://ipfs.io/ipfs/${c.ipfs}`,
      verified: c.isVerified,
      pin: false,
      progress,
    };
  });
}
