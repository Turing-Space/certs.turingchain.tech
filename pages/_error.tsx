import { NextFC } from 'next';
import HomeLayout from '@/layouts/Home';
import Home from '@/components/home/Home';
import Characteristic from '@/components/home/Characteristic';
import Comparison from '@/components/home/Comparison';
import Awards from '@/components/home/Awards';
import Process from '@/components/home/Process';
import Examples from '@/components/home/Examples';
import AboutUs from '@/components/home/AboutUs';

import { SITE_TITLE, i18nNamespace } from '@/utils/constants';

const ErrorPage: NextFC = () => {
  return (
    <HomeLayout title={'TuringCerts | ' + SITE_TITLE}>
      <Home id="section-home" />
      <Characteristic id="section-characteristic" />
      <Comparison id="section-comparison" />
      <Awards id="section-awards" />
      <Process id="section-process" />
      <Examples id="section-examples" />
      <AboutUs id="section-aboutUs" />
    </HomeLayout>
  );
};

ErrorPage.getInitialProps = async () => ({
  namespacesRequired: [i18nNamespace.Common, i18nNamespace.Home],
});

export default ErrorPage;
