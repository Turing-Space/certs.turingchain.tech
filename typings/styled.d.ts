import 'styled-components';

export interface Theme {
  colors: {
    primary: string;
    white: string;
    grey: string;
    backgroundBlack: string;
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
  export interface DefaultTheme extends Theme {}
}
