import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/themes/GlobalStyles';
import NormalizeStyles from '@/themes/NormalizeStyles';
import { SITE_TITLE } from '@/utils/constants';
import Header from '@/components/ProductHeader';
import Footer from '@/components/product/Footer';
import { media } from '@/utils/theme';
import { i18n, Router } from '@/i18n';

const Main = styled.main`
  width: 75%;
  margin: auto;
  ${media('largeDesktop')} {
    width: 65%;
  }
`;

type TProps = {
  routePath: string;
  title?: string;
  children: React.ReactNode;
};

const ProductLayout: React.FunctionComponent<TProps> = ({
  routePath,
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
          <link
            rel="stylesheet"
            href="https://unpkg.com/react-day-picker/lib/style.css"
          />
        </Head>
        <Header onClick={() => Router.push(routePath)} />
        <Main>{children}</Main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default ProductLayout;
