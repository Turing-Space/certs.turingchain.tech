import { FC } from 'react';
import styled from 'styled-components';
import H2 from '@/components/H2';
import { getRelativePath } from '@/utils';

const Wrapper = styled.footer`
  position: relative;
  height: 80vh;
  overflow: hidden;
`;

const Bg = styled.div`
  position: absolute;
  background: ${p => p.theme.colors.primary};
  transform: skewY(-3deg);
  height: 100%;
  bottom: -10%;
  width: 100%;
  opacity: .9;
`;

const InfoWrapper = styled.div`
  position: relative;
  width: 62.5%;
  margin: 12.5% auto 0;
`;

const Title = styled(H2)`
  margin-bottom: 1em;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  > img {
    width: 2.5em;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d8d8d8;
  opacity: .4;
  margin: 9% 0 5%;
`;

const CopyRight = styled.p`
  font-size: ${p => p.theme.fontSize.smaller};
`;

const Footer: FC = () => (
  <Wrapper>
    <Bg />
    <InfoWrapper>
      <Title>CONTACT</Title>
      <IconWrapper>
        <img
          src={getRelativePath('/static/icon/icon-mail.png')}
          srcSet={`${getRelativePath(
            '/static/icon/icon-mail@2x.png',
          )} 2x, ${getRelativePath('/static/icon/icon-mail@3x.png')} 3x`}
        />
        <img src={getRelativePath('/static/icon/icon-fb.png')} srcSet={`${getRelativePath(
            '/static/icon/icon-fb@2x.png',
          )} 2x, ${getRelativePath('/static/icon/icon-fb@3x.png')} 3x`}/>
        <img src={getRelativePath('/static/icon/icon-linkedin.png')} srcSet={`${getRelativePath(
            '/static/icon/icon-linkedin@2x.png',
          )} 2x, ${getRelativePath('/static/icon/icon-linkedin@3x.png')} 3x`}/>
      </IconWrapper>
      <Divider />
      <CopyRight>© Turing Chain Limited. All rights reserved</CopyRight>
    </InfoWrapper>
  </Wrapper>
);

export default Footer;
