import { API_ENDPOINT } from '@/constants';
import axios from 'axios';

// default axios config
axios.defaults.baseURL = API_ENDPOINT;

export function call<D, E = any>(
  promise: Promise<D>,
): Promise<[E | null, D | null]> {
  return promise
    .then<[null, D]>((data: D) => [null, data])
    .catch<[E, null]>(err => [err, null]);
}

type TGetCertsParams = {
  issuer?: string;
  type?: string;
  holder?: string;
};

type TAPICert = {
  timestamp: number;
  holder: string;
  issuer: string;
  isVerified: boolean;
  ipfs: string;
  type: string;
};

export const getCerts = async (d?: TGetCertsParams) => {
  const [err, data] = await call(
    axios.get<IAPIResponseInterface<TAPICert[]>>('/certs', {
      data: d,
    }),
  );
  return [err, data];
};
