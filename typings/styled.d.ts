import 'styled-components';

export interface Theme {
  color: string;
  background: string;
  font: string;

  colors: {
    primary: string;
    white: string;
    grey: string;
    darkGrey: string;
    smokyBlack: string;
    backgroundBlack: string;
    backgroundWhite: string;
    blue: string;
    greyV2: string;
    gold: string;
    backgroundGrey: string;
  };

  borderRadius: string;

  z: {
    bigger: number;
    high: number;
    superHigh: bumber;
  };

  fontFamily: {
    SFDisplay: string;
    SFText: string;
    NotoSansTC: string;
    SFProText: string;
    SFCompactText: string;
    PingFangSC: string;
    SFCompactDisplay: string
  };

  fontSize: {
    h1: string;
    h2: string;
    h3: string;
    bigger: string;
    smaller: string;
    small: string;
  };
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme { }
}
