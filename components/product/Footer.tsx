import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  text-align: center;
  bottom: 15px;
  margin-top: 20px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${p => p.theme.colors.darkGrey};
  opacity: 0.4;
  margin: 5% 0;
`;

const CopyRight = styled.p`
  color: ${p => p.theme.colors.darkGrey};
  font-size: ${p => p.theme.fontSize.smaller};
`;

const Footer: FC = () => (
  <Wrapper id="section-contact">
    <div style={{ width: '65%' }}>
      <Divider />
      <CopyRight>© Turing Chain Limited. All rights reserved</CopyRight>
    </div>
  </Wrapper>
);

export default Footer;
