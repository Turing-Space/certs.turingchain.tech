import styled from 'styled-components';

export default styled.p`
  letter-spacing: 0.5px;
  line-height: 1.6;
  white-space: pre-line;

  &.cn {
    font-family: ${p => p.theme.fontFamily.NotoSansTC};
    font-weight: 400;
  }
`;
