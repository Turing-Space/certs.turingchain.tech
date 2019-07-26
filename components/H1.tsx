import styled from 'styled-components';
import { media } from '@/utils/theme';

export default styled.h1`
  font-family: ${p => p.theme.fontFamily.SFDisplay};
  font-weight: 800;
  font-size: 3.2em;
  letter-spacing: 1.5px;

  ${media('desktop')} {
    font-size: ${p => p.theme.fontSize.h1};
  }
`;
