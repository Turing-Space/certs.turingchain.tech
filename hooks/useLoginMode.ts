import { useContext, useEffect } from 'react';
import { UserContext } from '@/contexts/user';
import { Router } from '@/i18n';

const useLoginMode = (mode: 'user' | 'issuer') => {
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user.loginMode !== mode) {
      // cause next.js machine,
      // use location.href for force re-run getInitialProps
      Router.push(`/auth/login?mode=${mode}`);
    }
  }, [user.loginMode]);

  return user.loginMode === mode;
};

export default useLoginMode;
