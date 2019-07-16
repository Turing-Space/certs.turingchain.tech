import HomeLayout from '@/layouts/Home';
import Collaborations from '@/components/home/Collaborations';

import { SITE_TITLE } from '@/constants';

const DemoPage = () => {
  return (
    <HomeLayout title={'0x1Certificate | ' + SITE_TITLE}>
      <Collaborations id="section-collaborations"/>
    </HomeLayout>
  );
};

export default DemoPage;
