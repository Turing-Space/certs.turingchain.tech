import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalStyles from '@/themes/GlobalStyles';
import NormalizeStyles from '@/themes/NormalizeStyles';
import { SITE_TITLE } from '@/constants';

type TProps = {
  title?: string;
  children: React.ReactNode;
};

const HomeLayout: React.FunctionComponent<TProps> = ({
  children,
  title = SITE_TITLE,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
      <NormalizeStyles />
      <GlobalStyles />
    </>
  );
};

export default HomeLayout;
