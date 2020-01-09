import styled from 'styled-components';
import { media } from '@/utils/theme';

export default styled.h2`
  font-family: ${p => p.theme.fontFamily.SFDisplay};
  letter-spacing: 4px;
  font-weight: 700;

  ${media('sphone')} {
    font-size: 1.6rem;
  }
  ${media('tablet')} {
    font-size: ${p => p.theme.fontSize.h2};
  }
  ${media('desktop')} {
    font-size: ${p => p.theme.fontSize.h2};
  }

`;
