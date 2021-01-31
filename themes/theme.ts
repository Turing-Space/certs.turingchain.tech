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
    backgroundWhite: '#fbfbfb',
    blue: '#0035ad',
    backgroundGrey: '#F0F2F5',
    backgroundShapeGold: '#DFA659',
    //backgroundIconGrey: '#00000029',
    backgroundWordDarkGrey: '#505050',
    backgroundJoinDarkGold: '#CE893A',
    backgroundJoinLightGold: '#F3C77C',
    backgroundTranslationGrey: '#767676',
    logoRightShieldRed: '#72151A',
    logoLefttShieldRed: '#9D1F24',
    logoOutsideRed: '#C4171E',
    websiteScrollGrey: '#707070',
    websiteCatelogWordGold: '#CE8B3D',
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
    SFProText: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
    SFCompactText:
      "-apple-system, BlinkMacSystemFont, 'SF Compact Text', sans-serif",
    PingFangSC: "-apple-system, BlinkMacSystemFont, 'Ping Fang SC', sans-serif",
    SFCompactDisplay:
      "-apple-system, BlinkMacSystemFont, 'SF Compact Display', sans-serif",
  },

  fontSize: {
    h1: '3.8rem',
    h2: '2.5rem',
    h3: '2rem',
    bigger: '1.25rem',
    smaller: '.875rem',
    small: '.75rem',
  },
};

export default theme;
