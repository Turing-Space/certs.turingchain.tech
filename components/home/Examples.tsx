import { FC, useState } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Lightbox from 'react-image-lightbox';
import Section from '@/components/Section';
import Button from '@/components/Button';
import H2 from '@/components/H2';
import { media } from '@/utils/theme';
import { i18nNamespace } from '@/constants';
import { useTranslation } from 'react-i18next';

type TData = {
  src: TResponsiveImage;
};

const Title = styled(H2)`
  margin-top: 14vh;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: 3%;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
`;

const MobileWrapper = styled(ScrollAnimation)`
  position: relative;
  display: flex;
  margin-top: 3%;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  ${media('desktop')} {
    display: none;
  }
`;

const AnimatedWrapper = styled(ScrollAnimation)`
  position: relative;
  display: none;
  margin-top: 3%;
  justify-content: space-between;
  flex-wrap: wrap;
  ${media('desktop')} {
    width: 60%;
    display: flex;
  }
`;

const MoreInfoWrapper = styled(Wrapper)<{ open: boolean }>`
  margin: 0;
  overflow: hidden;
  max-height: ${p => (p.open ? '100vh' : 0)};
  transition: max-height ease-in 0.3s;
  ${media('desktop')} {
    display: none;
  }
`;

const Name = styled.div`
  will-change: transform;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 0.75em 0.5em;
  color: ${p => p.theme.colors.white};
  background: rgba(0, 0, 0, 0.8);
  letter-spacing: 0.64px;
  font-size: ${p => p.theme.fontSize.smaller};
  transform: translate3d(0, 100%, 0);
  transition: transform 0.2s ease-in;
`;

const Certificate = styled.div`
  will-change: transform;
  cursor: pointer;
  position: relative;
  width: 47%;
  height: 22vh;
  margin-bottom: 3%;
  overflow: hidden;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    ${Name} {
      transform: translate3d(0, 0, 0);
    }
    transform: scale(1.1);
  }

  ${media('tablet')} {
    height: 32vh;
  }

  ${media('desktop')} {
    width: 30%;
    height: 24vh;
  }
`;

const Shadow = styled.div`
  position: absolute;
  width: 120%;
  height: 12vh;
  bottom: 0;
  left: -10%;
  background: linear-gradient(to bottom, rgba(22, 22, 22, 0), #161616);
`;

const StyledButton = styled(Button)`
  margin: 3% 0 5%;
  ${media('desktop')} {
    display: none;
  }
`;

const ResponsiveImg = styled.img`
  position: relative;
  width: 100%;
  min-height: 100%;
`;

const certificates: TData[] = [
  {
    src: require('../../static/certificate/GBP.png?resize&sizes[]=300&sizes[]=600&sizes[]=1336'),
  },
  {
    src: require('../../static/certificate/flowchain.png?resize&sizes[]=300&sizes[]=600&sizes[]=1336'),
  },
  {
    src: require('../../static/certificate/AngelHackCerts.png?resize&sizes[]=300&sizes[]=600&sizes[]=1336'),
  },
  {
    src: require('../../static/certificate/IOTA_Dominik.png?resize&sizes[]=300&sizes[]=600&sizes[]=1336'),
  },
  {
    src: require('../../static/certificate/ABC_Crypto_Night.png?resize&sizes[]=300&sizes[]=600&sizes[]=1336'),
  },
  {
    src: require('../../static/certificate/0x1Academy.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1336'),
  },
  {
    src: require('../../static/certificate/BASF.png?resize&sizes[]=300&sizes[]=600&sizes[]=1336'),
  },
  {
    src: require('../../static/certificate/turing_scholarship.png?resize&sizes[]=300&sizes[]=600&sizes[]=1336'),
  },
  {
    src: require('../../static/certificate/NTU_Pecu.png?resize&sizes[]=300&sizes[]=600&sizes[]=1336'),
  },
  {
    src: require('../../static/certificate/stanford.png?resize&sizes[]=300&sizes[]=600&sizes[]=1336'),
  },
  {
    src: require('../../static/certificate/Berkeley.png?resize&sizes[]=300&sizes[]=600&sizes[]=1336'),
  },
  {
    src: require('../../static/certificate/ROC_COC.png?resize&sizes[]=300&sizes[]=600&sizes[]=1336'),
  },
];

const Examples: FC<{ id: string }> = ({ id }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openLightbox, setOpenLightbox] = useState<boolean>(false);
  const [photoIdx, setPhotoIdx] = useState<number>(0);
  const { t } = useTranslation(i18nNamespace.Home);
  return (
    <Section id={id}>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce
        style={{ width: '100%', textAlign: 'center' }}
      >
        <Title>{t('examples.title')}</Title>
      </ScrollAnimation>
      <AnimatedWrapper
        animateIn="fadeInUp"
        animateOnce
        offset={0}
        style={{ marginBottom: '8%' }}
        delay={100}
      >
        {certificates.map((d, idx) => {
          return (
            <Certificate
              key={d.src.toString()}
              onClick={() => {
                setOpenLightbox(true);
                setPhotoIdx(idx);
              }}
            >
              <ResponsiveImg src={d.src.src} srcSet={d.src.srcSet} />
              <Name>{t(`examples.certificates.${idx}`)}</Name>
            </Certificate>
          );
        })}
      </AnimatedWrapper>
      <MobileWrapper animateIn="fadeInUp" animateOnce offset={0} delay={100}>
        {certificates.slice(0, 6).map((d, idx) => (
          <Certificate
            key={d.src.toString()}
            onClick={() => {
              setOpenLightbox(true);
              setPhotoIdx(idx);
            }}
          >
            <ResponsiveImg src={d.src.src} srcSet={d.src.srcSet} />
            <Name>{t(`examples.certificates.${idx}`)}</Name>
          </Certificate>
        ))}
        {!open && <Shadow />}
      </MobileWrapper>
      <MoreInfoWrapper open={open}>
        {certificates.slice(6).map((d, idx) => (
          <Certificate
            key={d.src.toString()}
            onClick={() => {
              setOpenLightbox(true);
              setPhotoIdx(idx + 6);
            }}
          >
            <ResponsiveImg src={d.src.src} srcSet={d.src.srcSet} />
            <Name>{t(`examples.certificates.${idx}`)}</Name>
          </Certificate>
        ))}
      </MoreInfoWrapper>
      <StyledButton onClick={() => setOpen(p => !p)}>
        {open ? t('examples.hidden') : t('examples.more')}
        {t('examples.showcases')}
      </StyledButton>

      {openLightbox && (
        <Lightbox
          imagePadding={50}
          imageTitle={t(`examples.certificates.${photoIdx}`)}
          mainSrc={certificates[photoIdx].src.images[2].path}
          nextSrc={
            certificates[(photoIdx + 1) % certificates.length].src.images[2]
              .path
          }
          prevSrc={
            certificates[
              (photoIdx + certificates.length - 1) % certificates.length
            ].src.images[2].path
          }
          onCloseRequest={() => setOpenLightbox(false)}
          onMovePrevRequest={() =>
            setPhotoIdx(
              (photoIdx + certificates.length - 1) % certificates.length,
            )
          }
          onMoveNextRequest={() =>
            setPhotoIdx(
              (photoIdx + certificates.length + 1) % certificates.length,
            )
          }
          onImageLoadError={
            ((a: any, b: any, c: any) => console.error(a, b, c)) as any
          }
        />
      )}
    </Section>
  );
};

export default Examples;
