import { createGlobalStyle } from 'styled-components';
import { media } from '@/utils/theme';

export default createGlobalStyle`
  /** Heavy */
  @font-face {
    font-family: "SF Display";
    font-weight: 800;
    src: url("https://sf.abarba.me/SF-UI-Display-Heavy.otf");
  }

  /** Bold */
  @font-face {
    font-family: "SF Display";
    font-weight: 700;
    src: url("https://sf.abarba.me/SF-UI-Display-Bold.otf");
  }

  /** Medium */
  @font-face {
    font-family: "SF Text";
    font-weight: 500;
    src: url("https://sf.abarba.me/SF-UI-Text-Medium.otf");
  }

  /** Regular */
  @font-face {
    font-family: "SF Text";
    font-weight: 400;
    src: url("https://sf.abarba.me/SF-UI-Text-Regular.otf");
  }

  @font-face {
    font-family: 'Noto Sans TC';
    font-weight: 300;
    src: url("https://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff2") format('woff2'),
        url("https://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff") format('woff'),
        url("https://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.otf") format('opentype');
  }

  @font-face {
    font-family: 'Noto Sans TC';
    font-weight: 400;
    src: url("https://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff2") format('woff2'),
        url("https://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff") format('woff'),
        url("https://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.otf") format('opentype');
  }

  @font-face {
    font-family: 'Noto Sans TC';
    font-weight: 500;
    src: url("https://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff2") format('woff2'),
        url("https://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff") format('woff'),
        url("https://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.otf") format('opentype');
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 14px;
    font-weight: 300;

    /**
     * use apple system for default
     * @see https://stackoverflow.com/questions/32660748/how-to-use-apples-new-san-francisco-font-on-a-webpage
     */
    /* font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans TC', sans-serif; */
    font-family: ${p => p.theme.font};
    
    ${media('largeDesktop')} {
      font-size: 16px;
    }
  }
  body {
    background-color: ${p => p.theme.background};
    color: ${p => p.theme.color};
    overflow-x: hidden;
  }

  ol, ul {
    list-style: none;
  }

  p {
    margin: 0;
  }

  input, button {
    outline: none;
    border: none;

    &:focus {
      outline: none;
    }
  }

  .cn {
    font-family: ${p => p.theme.fontFamily.NotoSansTC};
  }
`;
