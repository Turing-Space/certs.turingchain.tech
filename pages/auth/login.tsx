import { NextFC } from 'next';

import { i18nNamespace } from '@/utils/constants';
import AuthLayout from '@/layouts/Auth';
import Login from '@/components/auth/Login';

const LoginPage: NextFC = () => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
};

LoginPage.getInitialProps = () => {
  return {
    namespacesRequired: [i18nNamespace.Common, i18nNamespace.Issuer],
  };
};

export default LoginPage;
