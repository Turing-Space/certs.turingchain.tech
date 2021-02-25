import { FC } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import H2 from '@/components/H2';
//import ScrollInfo from '@/components/ScrollInfo';
import Description from '@/components/Description';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';
import { i18nNamespace } from '@/constants';
import { useTranslation } from 'react-i18next';

const AnimatedWrapper = styled(ScrollAnimation)`
  width: 100%;
  text-align: center;
`;

const Title = styled(H2)`
  margin-top: 18vh;
  color: ${p => p.theme.colors.websiteCatelogWordGold};

  ${media('largeDesktop')} {
    margin-top: 20vh;
  }
`;

const IconGroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 7.5em 0;
  ${media('pad')} {
    justify-content: center;
  }

  ${media('desktop')} {
    width: 70%;
  }
`;

const IconWrapper = styled(ScrollAnimation)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  margin-bottom: 10em;
  ${media('pad')} {
    width: 50%;
  }
  ${media('desktop')} {
    width: 20%;
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
    width: 100%;
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
  margin-bottom: 1em;
`;

const IconSubDescription = styled(Description)`
  width: 90%;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 1em;
  margin: 0 auto;

  ${media('desktop')} {
    width: 80%;
  }
`;

const Process: FC<{ id: string }> = ({ id }) => {
  const { t, i18n } = useTranslation(i18nNamespace.Home);
  const isEn = i18n.language === 'en';
  return (
    <Section justifyContent="center" id={id} fullscreen>
      <AnimatedWrapper animateIn="fadeInUp" animateOnce>
        <Title>{t('process.title')}</Title>
      </AnimatedWrapper>
      <IconGroupWrapper>
        <IconWrapper animateIn="zoomIn" duration={0.5} animateOnce>
          <Icon>
            <img src={getRelativePath('/static/process/icon_process_1.svg')} />
          </Icon>
          <IconDescription isEn={isEn}>
            {t('process.description.1')}
          </IconDescription>
          <IconSubDescription>
            {t('process.subdescription.1')}
          </IconSubDescription>
        </IconWrapper>
        <IconWrapper animateIn="zoomIn" duration={0.5} animateOnce>
          <Icon>
            <img src={getRelativePath('/static/process/icon_process_2.svg')} />
          </Icon>
          <IconDescription isEn={isEn}>
            {t('process.description.2')}
          </IconDescription>
          <IconSubDescription>
            {t('process.subdescription.2')}
          </IconSubDescription>
        </IconWrapper>
        <IconWrapper animateIn="zoomIn" duration={0.5} animateOnce>
          <Icon>
            <img src={getRelativePath('/static/process/icon_process_3.svg')} />
          </Icon>
          <IconDescription isEn={isEn}>
            {t('process.description.3')}
          </IconDescription>
          <IconSubDescription>
            {t('process.subdescription.3')}
          </IconSubDescription>
        </IconWrapper>
        <IconWrapper animateIn="zoomIn" duration={0.5} animateOnce>
          <Icon>
            <img src={getRelativePath('/static/process/icon_process_4.svg')} />
          </Icon>
          <IconDescription isEn={isEn}>
            {t('process.description.4')}
          </IconDescription>
          <IconSubDescription>
            {t('process.subdescription.4')}
          </IconSubDescription>
        </IconWrapper>
      </IconGroupWrapper>
      {/*}
      <ScrollInfo />
              {*/}
    </Section>
  );
};

export default Process;
