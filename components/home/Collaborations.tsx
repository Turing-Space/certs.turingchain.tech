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
const AnimatedWrapper = styled(ScrollAnimation)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 85%;
  margin: 5% auto 15%; // top right bottom
`;

const LogoWrapper = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -5%;

  ${media('tablet')} {
    width: 20%;
  }
`;

const Logo = styled.div<{ src: string; size: number }>`
  background: url(${p => p.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;

  ${media('sphone')} {
    width: ${p => `calc(37px * ${p.size})`};
    height: ${p => `calc(37px * ${p.size})`};
  }

  ${media('phone')} {
    width: ${p => `calc(45px * ${p.size})`};
    height: ${p => `calc(45px * ${p.size})`};
  }

  ${media('tablet')} {
    width: ${p => `calc(80px * ${p.size})`};
    height: ${p => `calc(80px * ${p.size})`};
  }

  ${media('desktop')} {
    width: ${p => `calc(95px * ${p.size})`};
    height: ${p => `calc(95px * ${p.size})`};
  }
`;

let ssmall = 2.3;
let small = 1.7;
let normal = 1.3;
let large = 0.95;

const logos = [
  {
    name: 'Stanford',
    src: getRelativePath('/static/partners/stanford.svg'),
    scale: normal,
  },
  {
    name: '加州大學柏克萊分校',
    src: getRelativePath('/static/partners/ucberkeley.svg'),
    scale: normal,
  },
  {
    name: 'Berkeley MEng',
    src: getRelativePath('/static/partners/BerkeleyMEng.svg'),
    scale: ssmall,
  },
  {
    name: 'Clemson',
    src: getRelativePath('/static/partners/clemson.svg'),
    scale: normal,
  },
  {
    name: '聖荷西州立大學',
    src: getRelativePath('/static/partners/san.png'),
    scale: small,
  },

  {
    name: '內華達大學拉斯維加斯分校',
    src: getRelativePath('/static/partners/unlv.svg'),
    scale: normal,
  },
  {
    name: '香港科技大學',
    src: getRelativePath('/static/partners/HKUST.svg'),
    scale: small,
  },
  {
    name: '國立台灣大學',
    src: getRelativePath('/static/partners/NTU.svg'),
    scale: small,
  },
  /*{
    name: '國立清華大學',
    src: getRelativePath('/static/partners/清大NTHU.svg'),
    scale: small,
  },*/
  {
    name: 'NCKU',
    src: getRelativePath('/static/partners/NCKU.svg'),
    scale: small,
  },
  {
    name: 'yanmin',
    src: getRelativePath('/static/partners/yanmin.png'),
    scale: small,
  },
  // {
  //   name: 'min',
  //   src: getRelativePath('/static/partners/min.svg'),
  //   scale: large,
  // },
  // {
  //   name: 'sichiu',
  //   src: getRelativePath('/static/partners/sichiu.svg'),
  //   scale: large,
  // },
  // {
  //   name: 'business',
  //   src: getRelativePath('/static/partners/business.png'),
  //   scale: large,
  // },
  {
    name: 'sin',
    src: getRelativePath('/static/partners/sin.png'),
    scale: small,
  },
  /*
  {
    name: 'foreign',
    src: getRelativePath('/static/partners/foreign.svg'),
    scale: small,
  },
  */
  {
    name: '國立臺北科技大學',
    src: getRelativePath('/static/partners/taipei-tech.svg'),
    scale: small,
  },
  {
    name: 'minS',
    src: getRelativePath('/static/partners/銘傳金融科技學院學程.svg'),
    scale: ssmall,
  },
  {
    name: 'ACER',
    src: getRelativePath('/static/partners/ACER.png'),
    scale: normal,
  },
  {
    name: 'KPMG',
    src: getRelativePath('/static/partners/KPMG.png'),
    scale: normal,
  },
  {
    name: 'BASF',
    src: getRelativePath('/static/partners/BASF.png'),
    scale: normal,
  },
  {
    name: 'Maincoin',
    src: getRelativePath('/static/partners/Maincoin.png'),
    scale: normal,
  },
  {
    name: 'sfbw',
    src: getRelativePath('/static/partners/SFBlockchainWeek.svg'),
    scale: small,
  },
  {
    name: 'angelhack',
    src: getRelativePath('/static/partners/angelhack.png'),
    scale: small,
  },
  {
    name: 'ABC-Blockchain',
    src: getRelativePath('/static/partners/ABC-Blockchain.png'),
    scale: normal,
  },
  {
    name: 'Alphacamp',
    src: getRelativePath('/static/partners/ALPHACamp-w.svg'),
    scale: small,
  },
  {
    name: 'OUTLIERS',
    src: getRelativePath('/static/partners/OUTLIERS_landscape.png'),
    scale: ssmall,
  },
  {
    name: 'SBMITB',
    src: getRelativePath('/static/partners/SBMITB.png'),
    scale: small,
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
