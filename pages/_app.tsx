import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Modal from 'react-modal';
import Router from 'next/router';

import GlobalStateProvider from '@/contexts/GlobalStateProvider';
import theme from '@/themes/theme';
import { trackPageView } from '@/utils/gtag';

import { appWithTranslation } from '@/i18n';

Modal.setAppElement('#__next');

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    Router.onRouteChangeComplete = url => {
      trackPageView(url);
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <GlobalStateProvider>
            <Component {...pageProps} />
          </GlobalStateProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default appWithTranslation(MyApp);
