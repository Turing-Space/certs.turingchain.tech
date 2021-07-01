import { NextFC } from 'next';
import HomeLayout from '@/layouts/Home';
import Privacy from '@/components/Privacy';
import { SITE_TITLE, i18nNamespace } from '@/utils/constants';

const Index: NextFC = () => {
  return (
    <HomeLayout title={'TuringCerts | ' + SITE_TITLE} backgroundIsGrey={true}>
      <Privacy />
    </HomeLayout>
  );
};

Index.getInitialProps = async () => ({
  namespacesRequired: [i18nNamespace.Common, i18nNamespace.Home],
});

export default Index;
