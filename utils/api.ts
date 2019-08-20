import { API_ENDPOINT } from '@/constants';
import axios, { AxiosResponse } from 'axios';

// default axios config
axios.defaults.baseURL = API_ENDPOINT;

export function call<D, E = Error>(
  promise: Promise<D>,
): Promise<[E | null, D | null]> {
  return promise
    .then<[null, D]>((data: D) => [null, data])
    .catch<[E, null]>(err => [err, null]);
}

export function formatAPIRes<R = any>(
  res: [Error | null, AxiosResponse<IAPIResponseInterface<R>> | null],
): [string, R | null] {
  const [err, axiosData] = res;
  let error: string = '';
  let data: R | null = null;
  if (axiosData) {
    if (axiosData.data.success) {
      data = axiosData.data.content;
    } else {
      error = axiosData.data.message;
    }
  } else {
    error = err!.message;
  }
  return [error, data];
}

type TGetCertsParams = {
  issuer?: string;
  type?: string;
  holder?: string;
};

export type TAPICert = {
  filePath: string;
  holder: string; // uid
  holderName: string;
  timestamp: number;
  issuer: string; // uid
  issuerName: string;
  isVerified: boolean;
  ipfs: string;
  type: string;
};

export const getCerts = async (d?: TGetCertsParams) => {
  const res = await call(
    axios.get('/certs', {
      params: d,
    }),
  );
  return formatAPIRes<TAPICert[]>(res);
};

export const uploadCertTemplate = async (body: FormData) => {
  const res = await call(
    axios.post('/upload', body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
  );
  return formatAPIRes<any>(res);
};

export const issueCertByCSV = async (body: FormData) => {
  const res = await call(
    axios.post('/issue/csv', body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
  );
  return formatAPIRes<any>(res);
};
