import { FC } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Button from '@/components/Button';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import ScrollInfo from '@/components/ScrollInfo';
import Description from '@/components/Description';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';
import { i18nNamespace } from '@/constants';
import { useTranslation } from 'react-i18next';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 7.5em 0 0 0;
  ${media('pad')} {
    justify-content: space-between;
  }

  ${media('desktop')} {
    width: 35%;
  }
`;

const AnimatedWrapper = styled(ScrollAnimation)`
  width: 100%;
  text-align: center;
`;

const Title = styled(H2)`
  margin-top: 18vh;

  ${media('largeDesktop')} {
    margin-top: 20vh;
  }
`;

const StyledDescription = styled(Description)`
  width: 90%;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 2em;
  margin: 0 auto;

  ${media('desktop')} {
    width: 70%;
  }
`;

const IconGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 7.5em 0;
  ${media('pad')} {
    justify-content: space-between;
  }

  ${media('desktop')} {
    width: 55%;
  }
`;

const IconWrapper = styled(ScrollAnimation)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 3em;
  ${media('pad')} {
    width: 50%;
  }
  ${media('desktop')} {
    width: 30%;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.backgroundShapeGold};
  margin-bottom: 2em;

  > img {
    width: 50%;
  }
`;

const IconDescription = styled.p<{ isEn: boolean }>`
  white-space: ${p => (p.isEn ? 'pre-line' : 'nowrap')};
  font-size: ${p => p.theme.fontSize.bigger};
  font-family: ${p => p.theme.fontFamily.NotoSansTC};
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 1px;
  text-align: center;
`;

const Service: FC<{ id: string }> = ({ id }) => {
  const { t, i18n } = useTranslation(i18nNamespace.Home);
  const isEn = i18n.language === 'en';
  return (
    <Section justifyContent="flex-start" id={id} fullscreen>
      {/*
      <ButtonWrapper>
        <Button onClick={() => window.open('http://bit.ly/turingcerts-issuer')}>
          {t('service.issue')}
        </Button>
        <Button
          onClick={() => window.open('http://bit.ly/turingcerts-verifier')}
        >
          {t('service.verify')}
        </Button>
      </ButtonWrapper>
      */}
      <AnimatedWrapper animateIn="fadeInUp" animateOnce>
        <Title>{t('service.title')}</Title>
        <StyledDescription>{t('service.description')}</StyledDescription>
      </AnimatedWrapper>
      <IconGroupWrapper>
        <IconWrapper animateIn="zoomIn" duration={0.5} animateOnce>
          <Icon>
            <img
              src={getRelativePath('/static/icon/icon-contract.png')}
              srcSet={`${getRelativePath(
                '/static/icon/icon-contract@2x.png',
              )} 2x, ${getRelativePath(
                '/static/icon/icon-contract@3x.png',
              )} 3x`}
            />
          </Icon>
          <IconDescription isEn={isEn}>{t('service.icons.0')}</IconDescription>
        </IconWrapper>
        <IconWrapper animateIn="zoomIn" duration={0.5} animateOnce delay={300}>
          <Icon>
            <img
              src={getRelativePath('/static/icon/icon-secure.png')}
              srcSet={`${getRelativePath(
                '/static/icon/icon-secure@2x.png',
              )} 2x, ${getRelativePath('/static/icon/icon-secure@3x.png')} 3x`}
            />
          </Icon>
          <IconDescription isEn={isEn}>{t('service.icons.1')}</IconDescription>
        </IconWrapper>
        <IconWrapper animateIn="zoomIn" duration={0.5} animateOnce delay={600}>
          <Icon>
            <img
              src={getRelativePath('/static/icon/icon-infinite.png')}
              srcSet={`${getRelativePath(
                '/static/icon/icon-infinite@2x.png',
              )} 2x, ${getRelativePath(
                '/static/icon/icon-infinite@3x.png',
              )} 3x`}
            />
          </Icon>
          <IconDescription isEn={isEn}>{t('service.icons.2')}</IconDescription>
        </IconWrapper>
      </IconGroupWrapper>
      <ScrollInfo />
    </Section>
  );
};

export default Service;
