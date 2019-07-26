import styled from 'styled-components';
import { media } from '@/utils/theme';

export default styled.h2`
  font-family: ${p => p.theme.fontFamily.SFDisplay};
  letter-spacing: 4px;
  font-weight: 700;
  font-size: 2.1rem;

  ${media('tablet')} {
    font-size: ${p => p.theme.fontSize.h2};
  }
`;
