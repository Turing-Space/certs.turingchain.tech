import { NextFC } from 'next';
import HomeLayout from '@/layouts/Home';
import Home from '@/components/home/Home';
import Characteristic from '@/components/home/Characteristic';
import Service from '@/components/home/Service';
//import Demo from '@/components/home/Demo';
import Technology from '@/components/home/Technology';
import Comparison from '@/components/home/Comparison';
import Awards from '@/components/home/Awards';
import News from '@/components/home/News';
import Collaborations from '@/components/home/Collaborations';
import BackedBy from '@/components/home/BackedBy';
import Examples from '@/components/home/Examples';
import AboutUs from '@/components/home/AboutUs';
// import DemoVideo from '@/components/home/DemoVideo';
import { SITE_TITLE, i18nNamespace } from '@/constants';

const Index: NextFC = () => {
  return (
    <HomeLayout title={'TuringCerts | ' + SITE_TITLE}>
      <Home id="section-home" />

      <Characteristic id="section-characteristic" />
      {/*}
      <Service id="section-service" />
  {*/}
      {/*}
      <Technology id="section-technology" />
  {*/}
      <Comparison id="section-comparison" />
      <Awards id="section-awards" />
      <News id="section-news" />
      {/* <DemoVideo id="section-product" /> 
      <Demo /> */}

      {/*<Collaborations id="section-collaborations" />*/}
      {/*<BackedBy id="section-backedBy" />*/}
      <Examples id="section-examples" />

      <AboutUs id="section-about" />
      {/*<Team id="section-team" /> */}
    </HomeLayout>
  );
};

Index.getInitialProps = async () => ({
  namespacesRequired: [i18nNamespace.Common, i18nNamespace.Home],
});

export default Index;
