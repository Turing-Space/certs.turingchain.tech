import { NextFC } from 'next';
import HomeLayout from '@/layouts/Home';
import Home from '@/components/home/Home';
import Service from '@/components/home/Service';
import Demo from '@/components/home/Demo';
import Technology from '@/components/home/Technology';
import Collaborations from '@/components/home/Collaborations';
import Examples from '@/components/home/Examples';

import { SITE_TITLE } from '@/constants';

const Index: NextFC = () => {
  return (
    <HomeLayout title={'TuringCerts | ' + SITE_TITLE}>
      <Home id="section-home" />
      <Service id="section-service" />
      <Technology id="section-technology" />
      <Demo id="section-demo" />
      <Collaborations id="section-collaborations" />
      <Examples id="section-examples" />
      {/* <AboutUs id="section-about" />
      <Team id="section-team" /> */}
    </HomeLayout>
  );
};

Index.getInitialProps = async () => ({
  namespacesRequired: ['common', 'home'],
});

export default Index;
