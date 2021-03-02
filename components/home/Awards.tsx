import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import { media } from '@/utils/theme';
import Description from '@/components/Description';
import { getRelativePath } from '@/utils';
import { i18nNamespace } from '@/constants';

const Title = styled(H2)`
  margin: 0 auto 0;
  max-width: 70vw;
  color: ${p => p.theme.colors.backgroundJoinDarkGold};

  ${media('largeDesktop')} {
    max-width: 55vw;
    margin: 20vh auto 0;
  }
`;

const AnimatedWrapper = styled(ScrollAnimation)`
  position: relative;
  margin-top: 3%;
  width: 75%;

  ${media('desktop')} {
    width: 55%;
  }
`;

const Divider = styled.div`
  width: 68%;
  height: 1px;
  background-color: ${p => p.theme.colors.backgroundJoinLightGold};
`;

const Content = styled(Description)`
  letter-spacing: 1.67px;
  margin: -3% 0;
`;

const IPFSIcon = styled.img`
  position: absolute;
  left: 70vw;
  width: 10vw;
  bottom: -18vw;
`;

const Awards: FC<{ id: string }> = ({ id }) => {
  const { t } = useTranslation(i18nNamespace.Home);
  return (
    <Section id={id} fullscreen>
      <ScrollAnimation
        animateOnce
        animateIn="fadeInUp"
        style={{ width: '100%', textAlign: 'left' }}
      >
        <Title>{t('awards.title')}</Title>
        <IPFSIcon
          src={getRelativePath('/static/bg/circle.svg')}
          srcSet={`${getRelativePath('/static/bg/circle@2x.svg')} 2x`}
        />
      </ScrollAnimation>
      <AnimatedWrapper animateOnce animateIn="fadeInUp" delay={300} offset={0}>
        <Divider />
        <Content>{t('awards.subs.0.content')}</Content>
      </AnimatedWrapper>
      <AnimatedWrapper animateOnce animateIn="fadeInUp" delay={600} offset={0}>
        <Divider />
        <Content>{t('awards.subs.1.content')}</Content>
      </AnimatedWrapper>
      <AnimatedWrapper animateOnce animateIn="fadeInUp" delay={600} offset={0}>
        <Divider />
        <Content>{t('awards.subs.2.content')}</Content>
      </AnimatedWrapper>
      <AnimatedWrapper animateOnce animateIn="fadeInUp" delay={600} offset={0}>
        <Divider />
        <Content>{t('awards.subs.3.content')}</Content>
      </AnimatedWrapper>
      <AnimatedWrapper animateOnce animateIn="fadeInUp" delay={600} offset={0}>
        <Divider />
        <Content>{t('awards.subs.4.content')}</Content>
      </AnimatedWrapper>
      <AnimatedWrapper animateOnce animateIn="fadeInUp" delay={600} offset={0}>
        <Divider />
        <Content>{t('awards.subs.5.content')}</Content>
      </AnimatedWrapper>
    </Section>
  );
};

export default Awards;