import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import Button from '@/components/Button';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';
//import ScrollInfo from '@/components/ScrollInfo';
import { i18nNamespace } from '@/constants';

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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin-bottom: 10%;
  ${media('pad')} {
    justify-content: space-between;
  }

  ${media('desktop')} {
    width: 35%;
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
    name: '台大創創',
    src: getRelativePath('/static/backedBy/台大創創.png'),
    scale: normal,
  },
  {
    name: 'Alibaba Entrepreneur Funds',
    src: getRelativePath('/static/backedBy/Alibaba-Entrepreneur-Funds.png'),
    scale: small,
  },
  {
    name: 'Appworks',
    src: getRelativePath('/static/backedBy/AppWorks.png'),
    scale: small,
  },
  {
    name: 'Berkeley Blockchain X-Lab',
    src: getRelativePath('/static/backedBy/Berkeley-Blockchain-X-Lab.png'),
    scale: small,
  },
  {
    name: 'Berkeley Blum Center',
    src: getRelativePath('/static/backedBy/Berkeley-Blum-Center.png'),
    scale: small,
  },

  {
    name: 'Berkeley Fung Institute',
    src: getRelativePath('/static/backedBy/Berkeley-Fung-Institute.png'),
    scale: small,
  },
  {
    name: 'Berkeley SCET',
    src: getRelativePath('/static/backedBy/Berkeley-SCET.png'),
    scale: small,
  },
  {
    name: 'Berkeley Xcelerator',
    src: getRelativePath('/static/backedBy/Berkeley-Xcelerator.png'),
    scale: small,
  },
  {
    name: 'CGI U 2020',
    src: getRelativePath('/static/backedBy/CGI-U-2020.png'),
    scale: small,
  },
  {
    name: 'Clinton Foundation',
    src: getRelativePath('/static/backedBy/Clinton-Foundation.png'),
    scale: normal,
  },
  {
    name: 'DIAGEO',
    src: getRelativePath('/static/backedBy/DIAGEO.png'),
    scale: normal,
  },
  {
    name: 'FITI',
    src: getRelativePath('/static/backedBy/FITI.png'),
    scale: small,
  },
  {
    name: 'Free Ventures',
    src: getRelativePath('/static/backedBy/Free-Ventures.png'),
    scale: small,
  },
  {
    name: 'Jumpstarter',
    src: getRelativePath('/static/backedBy/Jumpstarter.png'),
    scale: small,
  },
  {
    name: 'KEEP WALKING FUNDS',
    src: getRelativePath('/static/backedBy/KEEP-WALKING-FUNDS.png'),
    scale: small,
  },
  {
    name: 'SingularityU',
    src: getRelativePath('/static/backedBy/SingularityU.png'),
    scale: small,
  },
  {
    name: 'TTA',
    src: getRelativePath('/static/backedBy/TTA.png'),
    scale: small,
  },
  {
    name: 'CITRIS Foundry',
    src: getRelativePath('/static/backedBy/CITRIS-Foundry.png'),
    scale: ssmall,
  },
  {
    name: 'AWS EdStart',
    src: getRelativePath('/static/backedBy/AWS-Innovator.png'),
    scale: small,
  },
];

const BackedBy: FC<{ id: string }> = ({ id }) => {
  const { t } = useTranslation(i18nNamespace.Home);
  return (
    <Section id={id} justifyContent="flex-start" fullscreen>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce
        style={{ width: '100%', textAlign: 'center' }}
      >
        <Title>{t('backedBy.title')}</Title>
      </ScrollAnimation>
      <AnimatedWrapper animateIn="fadeIn" animateOnce delay={300}>
        {logos.map(logo => (
          <LogoWrapper key={logo.src}>
            <Logo key={logo.name} src={logo.src} size={logo.scale} />
          </LogoWrapper>
        ))}
      </AnimatedWrapper>
      {/*
      <ButtonWrapper>
        <Button onClick={() => window.open('http://bit.ly/turingcerts-issuer')}>
          {t('backedBy.issue')}
        </Button>
        <Button
          onClick={() => window.open('http://bit.ly/turingcerts-verifier')}
        >
          {t('backedBy.verify')}
        </Button>
      </ButtonWrapper>
      */}
      {/*}
      <ScrollInfo />
    {*/}
    </Section>
  );
};

export default BackedBy;
