import { FC, useState } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';
import ScrollInfo from '@/components/ScollInfo';
import Button from '@/components/Button';

const Title = styled(H2)`
  margin-top: 18vh;

  ${media('largeDesktop')} {
    margin-top: 20vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 720px;
  margin: 5% auto 0;
  ${media('largeDesktop')} {
    width: 840px;
  }
`;

const AnimatedWrapper = styled(ScrollAnimation)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 720px;
  margin: 5% auto 0;
  ${media('largeDesktop')} {
    width: 840px;
  }
`;

const MoreInfoWrapper = styled(Wrapper)<{ open: boolean }>`
  margin: 0;
  overflow: hidden;
  max-height: ${p => (p.open ? '100vh' : 0)};
  transition: max-height ease-in 0.3s;
`;

const LogoWrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div<{ src: string }>`
  cursor: pointer;
  background: url(${p => p.src}) center no-repeat/contain;
  width: 100px;
  height: 100px;

  ${media('largeDesktop')} {
    width: 120px;
    height: 120px;
  }

  &:hover {
  }
`;

const StyledButton = styled(Button)`
  margin: 3% 0 5%;
`;

const logos = [
  {
    name: '',
    src: getRelativePath('/static/partners/stanford.svg'),
  },
  {
    name: '加州大學柏克萊分校',
    src: getRelativePath('/static/partners/ucberkeley.svg'),
  },
  {
    name: '聖荷西州立大學',
    src: getRelativePath('/static/partners/san.svg'),
  },
  {
    name: '',
    src: getRelativePath('/static/partners/clemson.svg'),
  },
  {
    name: '內華達大學拉斯維加斯分校',
    src: getRelativePath('/static/partners/unlv.svg'),
  },
  {
    name: '香港科技大學',
    src: getRelativePath('/static/partners/HKUST.svg'),
  },
  {
    name: '國立台灣大學',
    src: getRelativePath('/static/partners/NTU.svg'),
  },
  {
    name: '',
    src: getRelativePath('/static/partners/NCKU.svg'),
  },
  {
    name: '國立臺北科技大學',
    src: getRelativePath('/static/partners/taipei-tech.svg'),
  },
  {
    name: '',
    src: getRelativePath('/static/partners/foreign.svg'),
  },
  {
    name: '',
    src: getRelativePath('/static/partners/min.svg'),
  },
  {
    name: '',
    src: getRelativePath('/static/partners/sichiu.svg'),
  },
  {
    name: '',
    src: getRelativePath('/static/partners/chimin.svg'),
  },
];

const Collaborations: FC<{ id: string }> = ({ id }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Section id={id} justifyContent="flex-start" fullscreen>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce
        style={{ width: '100%', textAlign: 'center' }}
      >
        <Title>合作機構</Title>
      </ScrollAnimation>
      <AnimatedWrapper animateIn="fadeIn" animateOnce delay={300}>
        {logos.slice(0, 10).map(logo => (
          <LogoWrapper key={logo.src}>
            <Logo key={logo.name} src={logo.src} />
          </LogoWrapper>
        ))}
      </AnimatedWrapper>
      <MoreInfoWrapper open={open}>
        {logos.slice(10).map(logo => (
          <LogoWrapper key={logo.src}>
            <Logo key={logo.name} src={logo.src} />
          </LogoWrapper>
        ))}
      </MoreInfoWrapper>
      <StyledButton onClick={() => setOpen(p => !p)}>
        {open ? '隱藏' : '更多'}
      </StyledButton>
      <ScrollInfo />
    </Section>
  );
};

export default Collaborations;
