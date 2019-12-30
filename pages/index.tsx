import { NextFC } from 'next';
import HomeLayout from '@/layouts/Home';
import Home from '@/components/home/Home';
import Service from '@/components/home/Service';
import Demo from '@/components/home/Demo';
import Technology from '@/components/home/Technology';
import Collaborations from '@/components/home/Collaborations';
import Examples from '@/components/home/Examples';
// import DemoVideo from '@/components/home/DemoVideo';

import { SITE_TITLE, i18nNamespace } from '@/constants';

const Index: NextFC = () => {
  return (
    <HomeLayout title={'TuringCerts | ' + SITE_TITLE}>
      <Home id="section-home" />
      <Service id="section-service" />
      <Technology id="section-technology" />
      {/* <DemoVideo id="section-product" /> */}
      <Demo />
      <Collaborations id="section-collaborations" />
      <Examples id="section-examples" />
      {/* <AboutUs id="section-about" />
      <Team id="section-team" /> */}
    </HomeLayout>
  );
};

Index.getInitialProps = async () => ({
  namespacesRequired: [i18nNamespace.Common, i18nNamespace.Home],
});

export default Index;
