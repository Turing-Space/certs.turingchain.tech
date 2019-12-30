// import { useContext, useEffect } from 'react';
// import { UserContext } from '@/contexts/user';
// import { Router } from '@/i18n';

// const useLoginMode = (mode: 'user' | 'issuer' | 'register') => {
//   const { user } = useContext(UserContext);
//   useEffect(() => {
//     if (user.loginMode !== mode) {
//       Router.push(`/auth/login?mode=${mode}`);
//     }
//   }, [user.loginMode]);

//   return user.loginMode === mode;
// };

// export default useLoginMode;
