import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/themes/GlobalStyles';
import NormalizeStyles from '@/themes/NormalizeStyles';
import { SITE_TITLE } from '@/constants';
import Header from '@/components/product/Header';
import Footer from '@/components/product/Footer';

const Main = styled.main`
  width: 65%;
  margin: auto;
`;

type TProps = {
  title?: string;
  children: React.ReactNode;
};

const DemoLayout: React.FunctionComponent<TProps> = ({
  children,
  title = SITE_TITLE,
}) => {
  return (
    <ThemeProvider
      theme={theme => {
        // light theme
        theme.color = theme.colors.smokyBlack;
        theme.background = theme.colors.backgroundWhite;
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
        <Main>{children}</Main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default DemoLayout;
