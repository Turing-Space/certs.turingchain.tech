import { createGlobalStyle } from 'styled-components';
import { getRelativePath } from '@/utils';

export default createGlobalStyle`

@font-face {
    font-family: "SF Compact Text";
    font-weight: 'bold';
    src: url(${getRelativePath(
    'static/font/SF-Compact-Text-Bold.otf',
)}) format("opentype");
  }
  
  @font-face {
    font-family: "SF Compact Display";
    font-weight: 'Normal';
    src: url(${getRelativePath(
    'static/font/SF-Compact-Display-Regular.otf',
)}) format("opentype");
  }

  @font-face {
    font-family: "Ping Fang SC";
    src: url(${getRelativePath(
    'static/font/PingFang_SC_Regular.otf',
)}) format("opentype");
  }

  @font-face {
    font-family: "SF Pro Text";
    src: url(${getRelativePath(
    'static/font/FontsFree-Net-SFProText-Regular.ttf',
)}) format("opentype");
  }
`;
