import { Theme } from '@/typings/styled';

const theme: Theme = {
  colors: {
    primary: '#a80100',
    grey: '#e0e0e0',
    white: '#ffffff',
    backgroundBlack: 'rgb(22, 22, 22)',
  },

  borderRadius: '6px',

  z: {
    bigger: 10,
    high: 100,
    superHigh: 1000,
  },

  fontFamily: {
    SFDisplay: "-apple-system, BlinkMacSystemFont, 'SF Display', sans-serif",
    SFText: 'SF Text',
    NotoSansTC: "'Noto Sans TC', sans-serif",
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
