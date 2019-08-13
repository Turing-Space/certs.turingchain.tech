import { NextFC } from 'next';

import { i18nNamespace } from '@/constants';
import AuthLayout from '@/layouts/Auth';
import Login from '@/components/auth/Login';
import { MVP } from '@/environment';

type TProps = {
  fakeInfo: typeof MVP;
};

const LoginPage: NextFC<TProps> = ({ fakeInfo }) => {
  return (
    <AuthLayout>
      <Login fakeInfo={fakeInfo} />
    </AuthLayout>
  );
};

LoginPage.getInitialProps = () => {
  console.log(MVP);
  return {
    fakeInfo: MVP,
    namespacesRequired: [i18nNamespace.Common, i18nNamespace.Issuer],
  };
};

export default LoginPage;
