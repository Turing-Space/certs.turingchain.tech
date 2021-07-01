import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/themes/GlobalStyles';
import NormalizeStyles from '@/themes/NormalizeStyles';
import { SITE_TITLE } from '@/utils/constants';
import Header from '@/components/ProductHeader';
import Footer from '@/components/product/Footer';
import { media } from '@/utils/theme';
import { i18n } from '@/i18n';

type TProps = {
  title?: string;
  children: React.ReactNode;
};

const AuthLayout: React.FunctionComponent<TProps> = ({
  children,
  title = SITE_TITLE,
}) => {
  return (
    <ThemeProvider
      theme={theme => {
        // light theme
        theme.color = theme.colors.smokyBlack;
        theme.background = theme.colors.backgroundWhite;

        // language
        theme.font =
          i18n.language === 'en'
            ? theme.fontFamily.SFText
            : theme.fontFamily.NotoSansTC;
        return theme;
      }}
    >
      <>
        <NormalizeStyles />
        <GlobalStyles />
        <Head>
          <title>{title}</title>
        </Head>
        <Header />
        <main>{children}</main>
      </>
    </ThemeProvider>
  );
};

export default AuthLayout;
