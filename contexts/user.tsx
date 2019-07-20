import { createContext, useState, FC } from 'react';

export enum CertStatus {
  Certificated = 'CERTIFICATED',
  Certificating = 'CERTIFICATING',
}

export type TCerts = {
  name: string;
  coverUri: string;
  status: CertStatus;
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
      name: '國際 GBP 區塊鏈能力考核證書',
      coverUri: '/static/certificate/GBP.png',
      status: CertStatus.Certificated,
    },
    {
      name: '國際 GBP 區塊鏈能力考核證書',
      coverUri: '/static/certificate/GBP.png',
      status: CertStatus.Certificated,
    },
    {
      name: '國際 GBP 區塊鏈能力考核證書',
      coverUri: '/static/certificate/GBP.png',
      status: CertStatus.Certificating,
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
