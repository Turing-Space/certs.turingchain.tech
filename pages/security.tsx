import { NextFC } from 'next';
import HomeLayout from '@/layouts/Home';
import Security from '@/components/Security';
import { SITE_TITLE, i18nNamespace } from '@/constants';

const Index: NextFC = () => {
  return (
    <HomeLayout title={'TuringCerts | ' + SITE_TITLE} backgroundIsGrey={true}>
      <Security />
    </HomeLayout>
  );
};

Index.getInitialProps = async () => ({
  namespacesRequired: [i18nNamespace.Common, i18nNamespace.Home],
});

export default Index;
