import { API_ENDPOINT } from '@/constants';
import axios from 'axios';

// default axios config
axios.defaults.baseURL = API_ENDPOINT;

export function call<D, E = Error>(
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

export type TAPICert = {
  filePath: string;
  timestamp: number;
  holder: string;
  issuer: string;
  isVerified: boolean;
  ipfs: string;
  type: string;
};

// TODO: refactor to abstract
export const getCerts = async (
  d?: TGetCertsParams,
): Promise<[string, TAPICert[] | null]> => {
  const [err, axiosData] = await call(
    axios.get<IAPIResponseInterface<TAPICert[]>>('/certs', {
      params: d,
    }),
  );

  let error: string = '';
  let data: TAPICert[] | null = null;
  if (axiosData) {
    if (axiosData.data.success) {
      data = axiosData.data.content;
    } else {
      error = axiosData.data.message;
    }
  } else {
    error = err.message;
  }

  return [error, data];
};
