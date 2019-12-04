import { createGlobalStyle } from 'styled-components';
import { getRelativePath } from '@/utils';

export default createGlobalStyle`

@font-face {
    font-family: "SF Pro Text";
    src: url(${getRelativePath(
    'static/font/FontsFree-Net-SFProText-Regular.ttf',
)}) format("opentype");
  }
`;
