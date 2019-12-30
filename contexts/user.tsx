import { createContext, useState, FC } from 'react';

export type TUser = {
  id: string;
  name: string;
  email: string;
  avatarUri: string;
};

type TUserContext = {
  user: TUser;
  updateUser: React.Dispatch<React.SetStateAction<TUser>>;
};

const defaultUser: TUser = {
  id: '',
  name: '',
  email: '',
  avatarUri: 'https://source.unsplash.com/300x300/?baby',
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
