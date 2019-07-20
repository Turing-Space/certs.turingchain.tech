import { createContext, useState, FC } from 'react';

export enum CertStatus {
  Certificated = 'CERTIFICATED',
  Certificating = 'CERTIFICATING',
}

export type TCerts = {
  issuer: string;
  name: string;
  coverUri: string;
  status: CertStatus;
  pin: boolean;
};

type TUser = {
  name: string;
  email: string;
  avatarUri: string;
  certs: TCerts[];
};

type TUserContext = {
  user: TUser;
  updateUser: React.Dispatch<React.SetStateAction<TUser>>;
};

const defaultUser: TUser = {
  name: 'Henry Hang',
  email: 'trump@turing.tech',
  avatarUri: 'https://source.unsplash.com/300x300/?baby',
  certs: [
    {
      issuer: 'UC Berkeley',
      name: '國際 GBP 區塊鏈能力考核證書',
      coverUri: '/static/certificate/GBP.png',
      status: CertStatus.Certificated,
      pin: true,
    },
    {
      issuer: '國立臺灣大學',
      name: '德國柏林 IOTA 基金會區塊鏈論壇 - 臺北場 2019',
      coverUri: '/static/certificate/ABC_Crypto_Night.png',
      status: CertStatus.Certificating,
      pin: false,
    },
    {
      issuer: '國立臺北科技大學',
      name: '臺北科技大學 區塊鏈微學分課程 2019',
      coverUri: '/static/certificate/0x1Academy.jpg',
      status: CertStatus.Certificated,
      pin: false,
    },
  ],
};

export const UserContext = createContext<TUserContext>({
  user: defaultUser,
  updateUser: () => ({}),
});

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState(defaultUser);
  return (
    <UserContext.Provider
      value={{
        user,
        updateUser: setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
