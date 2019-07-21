import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Modal from 'react-modal';

import GlobalStateProvider from '@/contexts/GlobalStateProvider';
import theme from '@/themes/theme';

Modal.setAppElement('#__next');

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
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
