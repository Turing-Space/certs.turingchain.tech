import { createContext, useState, FC, useCallback } from 'react';
import noop from 'lodash/noop';

export type TCert = {
  ipfs: string; // hash
  issuer: string;
  name: string;
  timestamp: number; // sec
  coverUri: string;
  verified: boolean;
  pin: boolean;
  progress: boolean[];
  issuing: boolean;
};

type TCertsContext = {
  certs: TCert[];
  updateCert: (ipfs: string, cert: TCert) => void;
  updateCerts: React.Dispatch<React.SetStateAction<TCert[]>>;
};

const defaultCerts: TCert[] = [
  // {
  //   issuer: 'UC Berkeley',
  //   name: '國際 GBP 區塊鏈能力考核證書',
  //   coverUri: '/static/certificate/GBP.png',
  //   verified: true,
  //   pin: true,
  //   ipfs: '1',
  //   timestamp: 1564133361,
  //   progress: [true, true, true, true, true],
  // },
  // {
  //   issuer: '國立臺灣大學',
  //   name: '德國柏林 IOTA 基金會區塊鏈論壇 - 臺北場 2019',
  //   coverUri: '/static/certificate/ABC_Crypto_Night.png',
  //   verified: false,
  //   pin: false,
  //   ipfs: '2',
  //   timestamp: 1564133361,
  //   progress: [true, false, false, false, false],
  // },
  // {
  //   issuer: '國立臺北科技大學',
  //   name: '臺北科技大學 區塊鏈微學分課程 2019',
  //   coverUri: '/static/certificate/0x1Academy.jpg',
  //   verified: false,
  //   ipfs: '3',
  //   timestamp: 1564133361,
  //   pin: false,
  //   progress: [true, false, false, false, false],
  // },
];

export const CertsContext = createContext<TCertsContext>({
  certs: [],
  updateCert: noop,
  updateCerts: noop,
});

export const CertsProvider: FC = ({ children }) => {
  const [certs, setCerts] = useState<TCert[]>(defaultCerts);

  const updateCert = useCallback(
    (ipfs: string, cert: TCert) =>
      setCerts(prev => {
        const findIndex = prev.findIndex(c => c.ipfs === ipfs);
        if (findIndex < 0) {
          return prev; // still same, do not change
        }
        prev.splice(findIndex, 1, cert);
        return [...prev];
      }),
    [],
  );

  return (
    <CertsContext.Provider
      value={{
        certs,
        updateCert,
        updateCerts: setCerts,
      }}
    >
      {children}
    </CertsContext.Provider>
  );
};
