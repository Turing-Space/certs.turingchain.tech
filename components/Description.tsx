import styled from "styled-components";

export default styled.p`
  letter-spacing: .5px;
  line-height: 2em;

  &.cn {
    font-family: ${p => p.theme.fontFamily.NotoSansTC};
    font-weight: 400;
  }
`;