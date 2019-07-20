import { Theme } from '@/typings/styled';

const theme: Theme = {
  background: '#161616',
  color: '#ffffff',
  font: "'Noto Sans TC', -apple-system, BlinkMacSystemFont, sans-serif", // default: Noto

  colors: {
    primary: '#a80100',
    grey: '#e0e0e0',
    darkGrey: '#9e9e9e',
    white: '#ffffff',
    smokyBlack: '#424242',
    backgroundBlack: '#161616',
    backgroundWhite: '#fbfbfb',
  },

  borderRadius: '6px',

  z: {
    bigger: 10,
    high: 100,
    superHigh: 1000,
  },

  fontFamily: {
    SFDisplay: "-apple-system, BlinkMacSystemFont, 'SF Display', sans-serif",
    SFText: "-apple-system, BlinkMacSystemFont, 'SF Text', sans-serif",
    NotoSansTC: "'Noto Sans TC', -apple-system, BlinkMacSystemFont, sans-serif",
  },

  fontSize: {
    h1: '3.8em',
    h2: '2.5em',
    h3: '2em',
    bigger: '1.25em',
    smaller: '.875em',
    small: '.75em',
  },
};

export default theme;
