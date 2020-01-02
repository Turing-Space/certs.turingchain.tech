import { NextFC } from 'next';

import { i18nNamespace } from '@/constants';
import AuthLayout from '@/layouts/Auth';
import Register from '@/components/auth/Register';

const RegisterPage: NextFC = () => {
  return (
    <AuthLayout>
      <Register />
    </AuthLayout>
  );
};

RegisterPage.getInitialProps = () => {
  return {
    namespacesRequired: [i18nNamespace.Common, i18nNamespace.Issuer, , i18nNamespace.Register],
  };
};

export default RegisterPage;
