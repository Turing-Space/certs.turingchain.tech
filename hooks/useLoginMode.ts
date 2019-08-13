import { useContext, useEffect } from 'react';
import { UserContext } from '@/contexts/user';

const useLoginMode = (mode: 'user' | 'issuer') => {
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user.loginMode !== mode) {
      // cause next.js machine,
      // use location.href for force re-run getInitialProps
      location.href = `/auth/login?mode=${mode}`;
    }
  }, [user.loginMode]);

  return user.loginMode === mode;
};

export default useLoginMode;
