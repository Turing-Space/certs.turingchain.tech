import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';
import ScrollInfo from '@/components/ScrollInfo';
import { i18nNamespace } from '@/constants';
// import Button from '@/components/Button';

const Title = styled(H2)`
  margin-top: 18vh;
  width: 80vw;
  margin-left: 10vw;

  ${media('largeDesktop')} {
    margin-top: 20vh;
  }
`;

// const Wrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: flex-start;
//   width: 720px;
//   margin: 5% auto 0;
//   ${media('largeDesktop')} {
//     width: 840px;
//   }
// `;

const AnimatedWrapper = styled(ScrollAnimation)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 90%;
  margin: 5% auto 10%;

  ${media('tablet')} {
    width: 720px;
  }
  ${media('largeDesktop')} {
    width: 840px;
  }
`;

// const MoreInfoWrapper = styled(Wrapper)<{ open: boolean }>`
//   margin: 0;
//   overflow: hidden;
//   max-height: ${p => (p.open ? '100vh' : 0)};
//   transition: max-height ease-in 0.3s;
// `;

const LogoWrapper = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media('tablet')} {
    width: 20%;
  }
`;

const Logo = styled.div<{ src: string; size: number }>`
  background: url(${p => p.src}) center no-repeat/contain;

  width: ${p => `calc(65px * ${p.size})`};
  height: ${p => `calc(65px * ${p.size})`};

  ${media('phone')} {
    width: ${p => `calc(80px * ${p.size})`};
    height: ${p => `calc(80px * ${p.size})`};
  }

  ${media('tablet')} {
    width: ${p => `calc(100px * ${p.size})`};
    height: ${p => `calc(100px * ${p.size})`};
  }

  ${media('largeDesktop')} {
    width: ${p => `calc(120px * ${p.size})`};
    height: ${p => `calc(120px * ${p.size})`};
  }
`;

// const StyledButton = styled(Button)`
//   margin: 3% 0 5%;
// `;

const logos = [
  {
    name: '',
    src: getRelativePath('/static/partners/stanford.svg'),
    scale: 1,
  },
  {
    name: '加州大學柏克萊分校',
    src: getRelativePath('/static/partners/ucberkeley.svg'),
    scale: 1,
  },
  {
    name: '聖荷西州立大學',
    src: getRelativePath('/static/partners/san.png'),
    scale: 1,
  },
  {
    name: '',
    src: getRelativePath('/static/partners/clemson.svg'),
    scale: 1,
  },
  {
    name: '內華達大學拉斯維加斯分校',
    src: getRelativePath('/static/partners/unlv.svg'),
    scale: 1,
  },
  {
    name: '香港科技大學',
    src: getRelativePath('/static/partners/HKUST.svg'),
    scale: 1,
  },
  {
    name: '國立台灣大學',
    src: getRelativePath('/static/partners/NTU.svg'),
    scale: 1,
  },
  {
    name: '',
    src: getRelativePath('/static/partners/NCKU.svg'),
    scale: 1,
  },
  {
    name: '國立臺北科技大學',
    src: getRelativePath('/static/partners/taipei-tech.svg'),
    scale: 1.1,
  },
  {
    name: '',
    src: getRelativePath('/static/partners/foreign.svg'),
    scale: 1.1,
  },
  {
    name: '',
    src: getRelativePath('/static/partners/min.svg'),
    scale: 0.8,
  },
  {
    name: '',
    src: getRelativePath('/static/partners/sichiu.svg'),
    scale: 0.8,
  },
  {
    name: '',
    src: getRelativePath('/static/partners/business.png'),
    scale: 0.8,
  },
  {
    name: '',
    src: getRelativePath('/static/partners/chimin.svg'),
    scale: 1.2,
  },
  {
    name: '',
    src: getRelativePath('/static/partners/ABC-Blockchain.png'),
    scale: 1,
  },
  {
    name: '',
    src: getRelativePath('/static/partners/ACER.png'),
    scale: 1,
  },
  {
    name: '',
    src: getRelativePath('/static/partners/angelhack.png'),
    scale: 1,
  },
  {
    name: '',
    src: getRelativePath('/static/partners/BASF.png'),
    scale: 1,
  },
  {
    name: '',
    src: getRelativePath('/static/partners/KPMG.png'),
    scale: 1,
  },
  {
    name: '',
    src: getRelativePath('/static/partners/Maincoin.png'),
    scale: 1,
  },
  {
    name: '',
    src: getRelativePath('/static/partners/yanmin.png'),
    scale: 1.1,
  },
  {
    name: '',
    src: getRelativePath('/static/partners/TABF.svg'),
    scale: 1.1,
  },
  {
    name: '',
    src: getRelativePath('/static/partners/sin.png'),
    scale: 1,
  },
];

const Collaborations: FC<{ id: string }> = ({ id }) => {
  // const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation(i18nNamespace.Home);
  return (
    <Section id={id} justifyContent="flex-start" fullscreen>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce
        style={{ width: '100%', textAlign: 'center' }}
      >
        <Title>{t('collaborations.title')}</Title>
      </ScrollAnimation>
      <AnimatedWrapper animateIn="fadeIn" animateOnce delay={300}>
        {logos.map(logo => (
          <LogoWrapper key={logo.src}>
            <Logo key={logo.name} src={logo.src} size={logo.scale} />
          </LogoWrapper>
        ))}
      </AnimatedWrapper>
      {/* <MoreInfoWrapper open={open}>
        {logos.slice(10).map(logo => (
          <LogoWrapper key={logo.src}>
            <Logo key={logo.name} src={logo.src} />
          </LogoWrapper>
        ))}
      </MoreInfoWrapper>
      <StyledButton onClick={() => setOpen(p => !p)}>
        {open ? '隱藏' : '更多'}
      </StyledButton> */}
      <ScrollInfo />
    </Section>
  );
};

export default Collaborations;
