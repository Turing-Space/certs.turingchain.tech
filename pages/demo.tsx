import DemoLayout from '@/layouts/Demo';

import { SITE_TITLE } from '@/constants';
import AboutMe from '@/components/product/AboutMe';
import MyCerts from '@/components/product/MyCerts';

const DemoPage = () => {
  return (
    <DemoLayout title={'Demo | ' + SITE_TITLE}>
      <AboutMe />
      <MyCerts />
    </DemoLayout>
  );
};

export default DemoPage;
