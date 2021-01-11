import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalStyles from '@/themes/GlobalStyles';
import NormalizeStyles from '@/themes/NormalizeStyles';
import { SITE_TITLE } from '@/constants';
import { getRelativePath } from '@/utils';

type TProps = {
  title?: string;
  children: React.ReactNode;
};

const HomeLayout: React.FunctionComponent<TProps> = ({
  children,
  title = SITE_TITLE,
}) => {
  const { i18n } = useTranslation();
  return (
    <ThemeProvider
      theme={theme => {
        // dark theme
        theme.color = theme.colors.backgroundWordDarkGrey;
        theme.background = theme.colors.backgroundGrey;

        // language
        theme.font =
          i18n.language === 'en'
            ? theme.fontFamily.SFText
            : theme.fontFamily.NotoSansTC;
        return theme;
      }}
    >
      <>
        <Head>
          <title>{title}</title>
          <link
            rel="stylesheet"
            type="text/css"
            href={getRelativePath('/static/css/react-image-light-box.css')}
          />
        </Head>
        <Header />
        {children}
        <Footer />
        <NormalizeStyles />
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
};

export default HomeLayout;
