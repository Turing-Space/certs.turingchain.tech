import { FC } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import { getRelativePath } from '@/utils';
import H1 from '@/components/H1';
import ScrollInfo from '@/components/ScollInfo';
import { media } from '@/utils/theme';

const Text = styled.p`
  margin-bottom: 8px;
  font-size: ${p => p.theme.fontSize.bigger};
  color: ${p => p.theme.colors.grey};
`;

const CNText = styled(Text)`
  letter-spacing: 1.5px;
`;

const Logo = styled.img`
  height: 20vh;
`;

const Title = styled(H1)`
  color: ${p => p.theme.colors.primary};
  margin: 0.6em 0 0.3em 0;
  white-space: pre-line;
`;

const CircleLeft = styled.img`
  position: absolute;
  left: -15vw;
  width: 50vw;
  bottom: -20vw;
`;

const CircleRight = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 45vw;
`;

const SubLogo = styled.div<{ src: string }>`
  background: url(${p => p.src}) no-repeat center/contain;
  width: 15vw;
  height: 5em;
  margin-left: 1em;

  &:first-child {
    margin-left: 0;
  }

  ${media('desktop')} {
    width: 7vw;
  }
`;

const TitleWrapper = styled(ScrollAnimation)`
  display: none;
  width: 80%;
  text-align: center;
  ${media('desktop')} {
    display: block;
    width: 100%;
  }
`;

const MobileTitleWrapper = styled(TitleWrapper)`
  display: block;
  span {
    &.cn {
      font-size: 2.3rem;
    }
  }
  ${media('desktop')} {
    display: none;
  }
`;

const BottomLogoWrapper = styled(ScrollAnimation)`
  position: absolute;
  bottom: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${media('tablet')} {
    bottom: 12vh;
  }
`;

const Home: FC<{ id: string }> = ({ id }) => {
  return (
    <Section fullscreen id={id}>
      <CircleLeft
        src={getRelativePath('/static/bg/bg-home-cover-circle.png')}
        srcSet={`${getRelativePath(
          '/static/bg/bg-home-cover-circle@2x.png',
        )} 2x, ${getRelativePath('/static/bg/bg-home-cover-circle@3x.png')} 3x`}
      />
      <CircleRight
        src={getRelativePath('/static/bg/bg-home-cover-right.png')}
        srcSet={`${getRelativePath(
          '/static/bg/bg-home-cover-right@2x.png',
        )} 2x, ${getRelativePath('/static/bg/bg-home-cover-right@3x.png')} 3x`}
      />
      <ScrollAnimation animateIn="fadeInUp">
        <Logo
          src={getRelativePath('/static/logo/logo-0-x-1-light.png')}
          srcSet={`${getRelativePath(
            '/static/logo/logo-0-x-1-light@2x.png',
          )} 2x, ${getRelativePath('/static/logo/logo-0-x-1-light@3x.png')} 3x`}
        />
      </ScrollAnimation>
      <TitleWrapper animateIn="fadeInUp" delay={400} offset={0}>
        <Title>TuringCerts 圖靈證書</Title>
        <Text className="en">BlockChain Certificate Ecosystem</Text>
        <CNText className="cn"> 圖靈區塊鏈證書生態系</CNText>
      </TitleWrapper>
      <MobileTitleWrapper animateIn="fadeInUp" delay={400} offset={0}>
        <Title>
          TuringCerts <br />
          <span className="cn">圖靈證書</span>
        </Title>
        <CNText className="cn"> 圖靈區塊鏈證書生態系</CNText>
      </MobileTitleWrapper>
      <BottomLogoWrapper animateIn="fadeInUp" delay={600} offset={0}>
        <SubLogo src={getRelativePath('/static/partners/Berkeley.png')} />
        <SubLogo src={getRelativePath('/static/partners/Scet_white.png')} />
      </BottomLogoWrapper>
      <ScrollInfo />
    </Section>
  );
};

export default Home;