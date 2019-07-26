import { NextFC } from 'next';
import DemoLayout from '@/layouts/Demo';
import { SITE_TITLE } from '@/constants';
import AboutMe from '@/components/product/AboutMe';
import MyCerts from '@/components/product/MyCerts';

const DemoPage: NextFC = () => {
  return (
    <DemoLayout title={'Demo | ' + SITE_TITLE}>
      <AboutMe />
      <MyCerts />
    </DemoLayout>
  );
};

DemoPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'demo'],
});

export default DemoPage;
