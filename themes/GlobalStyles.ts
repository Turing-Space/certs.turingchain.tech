import { createGlobalStyle } from 'styled-components';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';

export default createGlobalStyle`
  /** Heavy */
  @font-face {
    font-family: "SF Display";
    font-weight: 800;
    font-display: swap;
    src: url(${getRelativePath(
      '/static/font/SF-UI-Display-Heavy.otf',
    )}) format("opentype");
  }

  /** Bold */
  @font-face {
    font-family: "SF Display";
    font-weight: 700;
    font-display: swap;
    src: url(${getRelativePath(
      '/static/font/SF-UI-Display-Bold.otf',
    )}) format("opentype");
  }

  /** Medium */
  @font-face {
    font-family: "SF Text";
    font-weight: 500;
    font-display: swap;
    src: url(${getRelativePath(
      '/static/font/SF-UI-Text-Medium.otf',
    )}) format("opentype");
  }

  /** Regular */
  @font-face {
    font-family: "SF Text";
    font-weight: 400;
    font-display: swap;
    src: url(${getRelativePath(
      '/static/font/SF-UI-Text-Regular.otf',
    )}) format("opentype");
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

    &:focus, &:active {
      outline: none;
    }
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

  .en {
    font-family: ${p => p.theme.fontFamily.SFText};
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  .ReactModal__Overlay--after-open{
    opacity: 1;
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
  }

  .ReactModal__Custom_Content {
    transform: scale3d(.3, .3, .3);
    transition: transform 200ms ease-in-out;
    &:focus {
      outline: none;
    }
  }

  .ReactModal__Content--after-open{
    transform: scale3d(1, 1, 1);
  }

  .ReactModal__Content--before-close{
    transform: scale3d(.3, .3, .3);
  }

  
  .DayPicker {
    div, span {
      &:focus {
        outline: none;
      }
    }
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    background-color: #a80100;
    color: #fff;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
    background-color: #ffd6d5;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
  .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: #ffd6d5;
  }
`;
