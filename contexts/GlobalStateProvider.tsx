import React from 'react';
import { CertsProvider } from './certs';
import { UserProvider } from './user';

const GlobalStateProvider: React.FC = ({ children }) => (
  <UserProvider>
    <CertsProvider>{children}</CertsProvider>
  </UserProvider>
);

export default GlobalStateProvider;
