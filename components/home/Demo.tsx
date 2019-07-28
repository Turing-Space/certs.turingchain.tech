import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import H2 from '@/components/H2';
import Section from '@/components/Section';
import Description from '@/components/Description';
import Button from '@/components/Button';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/constants';

const Bg = styled.div`
  position: absolute;
  background-color: #fafafa;
  width: 100vw;
  height: 130vh;
  transform: skewY(3deg);
  top: 3%;
  left: 0;
  overflow: hidden;

  ${media('phone')} {
    height: 110vh;
  }

  ${media('tablet')} {
    height: 102vh;
  }
`;

const Wave = styled.img`
  position: absolute;
  width: 100vw;
  bottom: -8%;
  height: 18em;
  transform: skewY(-3deg);
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 5vh;
  width: 90%;
  height: 128vh;

  ${media('phone')} {
    height: 108vh;
  }

  ${media('tablet')} {
    flex-direction: row;
    justify-content: center;
    height: 102vh;
    width: 75%;
    margin-top: 18vh;
  }

  ${media('desktop')} {
    padding-left: 5%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;

  > img {
    width: 43%;
    cursor: pointer;
    margin-right: 3%;
    height: intrinsic;
  }

  ${media('tablet')} {
    margin-top: 4em;
    justify-content: flex-start;

    > img {
      width: 35%;
    }
  }
`;

const InfoTitle = styled(H2)`
  color: ${p => p.theme.colors.primary};
  letter-spacing: 1.5px;

  ${media('tablet')} {
    white-space: nowrap;
  }
`;

const InfoDescription = styled(Description)`
  color: ${p => p.theme.colors.primary};
  margin: 2em 0 5em;
`;

const Mock = styled.img`
  width: 90%;
  max-height: 65vh;
  margin: 10% 5%;

  ${media('pad')} {
    width: 80%;
    margin: 10%;
  }

  ${media('tablet')} {
    width: 100%;
    margin: 30% auto;
  }

  ${media('desktop')} {
    margin-top: 13%;
  }
`;

const StyledButton = styled(Button)`
  font-weight: 500;
`;

const InfoWrapper = styled.div`
  display: none;
  ${media('tablet')} {
    width: 40%;
    display: block;
  }
`;

const MockWrapper = styled(ScrollAnimation)`
  width: 100%;
  ${media('tablet')} {
    width: 60%;
  }
`;

const MobileHeader = styled(ScrollAnimation)`
  width: 100%;
  text-align: center;

  ${InfoDescription} {
    margin-bottom: 0;
  }

  ${media('tablet')} {
    display: none;
  }
`;

const MobileActionWrapper = styled(ScrollAnimation)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${media('tablet')} {
    display: none;
  }
`;

const Demo: FC<{ id: string }> = ({ id }) => {
  const { t } = useTranslation(i18nNamespace.Home);
  return (
    <Section justifyContent="flex-start" fullscreen id={id}>
      <Bg>
        <Wave
          src={getRelativePath('/static/bg/bg-wave.png')}
          srcSet={`${getRelativePath(
            '/static/bg/bg-wave@2x.png',
          )} 2x, ${getRelativePath('/static/bg/bg-wave@3x.png')} 3x`}
        />
      </Bg>
      <Wrapper>
        <InfoWrapper>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce
            style={{ width: '100%' }}
          >
            <InfoTitle>{t('demo.title')}</InfoTitle>
            <InfoDescription>{t('demo.description')}</InfoDescription>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce
            delay={500}
            offset={0}
          >
            <Link href="/demo">
              <StyledButton shadow>{t('demo.start')}</StyledButton>
            </Link>
            <IconWrapper>
              <img
                onClick={() => t('alertText')}
                src={getRelativePath('/static/elements/logo-app-store.png')}
                srcSet={`${getRelativePath(
                  '/static/elements/logo-app-store@2x.png',
                )} 2x, ${getRelativePath(
                  '/static/elements/logo-app-store@3x.png',
                )} 3x`}
              />
              <img
                onClick={() => t('alertText')}
                src={getRelativePath('/static/elements/logo-google-play.png')}
                srcSet={`${getRelativePath(
                  '/static/elements/logo-google-play@2x.png',
                )} 2x, ${getRelativePath(
                  '/static/elements/logo-google-play@3x.png',
                )} 3x`}
              />
            </IconWrapper>
          </ScrollAnimation>
        </InfoWrapper>
        <MobileHeader animateIn="fadeIn" animateOnce>
          <InfoTitle>{t('demo.title')}</InfoTitle>
          <InfoDescription>{t('demo.description')}</InfoDescription>
        </MobileHeader>
        <MockWrapper animateIn="fadeIn" animateOnce delay={300}>
          <Mock
            src={getRelativePath('/static/elements/image-mock.png')}
            srcSet={`${getRelativePath(
              '/static/elements/image-mock@2x.png',
            )} 2x, ${getRelativePath('/static/elements/image-mock@3x.png')} 3x`}
          />
        </MockWrapper>
        <MobileActionWrapper
          animateIn="fadeIn"
          animateOnce
          delay={500}
          offset={0}
        >
          {/* <Link href="/demo"> */}
          <StyledButton shadow onClick={() => t('alertText')}>
            {t('demo.start')}
          </StyledButton>
          {/* </Link> */}
          <IconWrapper>
            <img
              onClick={() => t('alertText')}
              src={getRelativePath('/static/elements/logo-app-store.png')}
              srcSet={`${getRelativePath(
                '/static/elements/logo-app-store@2x.png',
              )} 2x, ${getRelativePath(
                '/static/elements/logo-app-store@3x.png',
              )} 3x`}
            />
            <img
              onClick={() => t('alertText')}
              src={getRelativePath('/static/elements/logo-google-play.png')}
              srcSet={`${getRelativePath(
                '/static/elements/logo-google-play@2x.png',
              )} 2x, ${getRelativePath(
                '/static/elements/logo-google-play@3x.png',
              )} 3x`}
            />
          </IconWrapper>
        </MobileActionWrapper>
      </Wrapper>
    </Section>
  );
};

export default Demo;
