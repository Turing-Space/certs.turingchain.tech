import { FC } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import { getRelativePath } from '@/utils';
import H1 from '@/components/H1';
import ScrollInfo from '@/components/ScollInfo';

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
      <ScrollAnimation
        animateIn="fadeInUp"
        style={{ textAlign: 'center' }}
        delay={400}
      >
        <Title>0x1 CERTIFICATE</Title>
        <Text>BlockChain Certificate Ecosystem</Text>
        <CNText className="cn">區塊鏈證書生態系</CNText>
      </ScrollAnimation>
      <ScrollInfo />
    </Section>
  );
};

export default Home;
