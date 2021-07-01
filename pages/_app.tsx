import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Modal from 'react-modal';
import Router from 'next/router';

import GlobalStateProvider from '@/contexts/GlobalStateProvider';
import theme from '@/themes/theme';
import { trackPageView } from '@/utils/gtag';

import { appWithTranslation, i18n } from '@/i18n';
import { langsMap } from '@/utils/constants';

Modal.setAppElement('#__next');

const DEFAULT_LANG = 'zh-TW';

class MyApp extends App<{ router: { query: { lng: string } } }> {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  getUserLanguage = (defaultLang: string = DEFAULT_LANG): string => {
    // 1st see path query(from server or exportPathMap)
    if (this.props.router.query.lng) {
      return this.props.router.query.lng;
    }

    // 2rd see navigator
    const { languages = [] } = navigator || {};
    const userLanguage = (navigator as any).userLanguage; // ts thinks navigator has no userLanguage
    const navigatorLang = languages.find(l => langsMap[l]) || userLanguage;
    if (navigatorLang) {
      return navigatorLang;
    }

    // 3th return default
    return defaultLang;
  };

  componentDidMount() {
    // cause static export's i18n.language is undefined,
    // use a custom getUserLanguage to determine lang
    if (!i18n.language) {
      const lang = this.getUserLanguage();
      setTimeout(() => i18n.changeLanguage(lang), 0);
    }

    Router.onRouteChangeComplete = (url: string) => {
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
