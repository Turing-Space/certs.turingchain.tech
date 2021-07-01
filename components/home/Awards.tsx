import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import { media } from '@/utils/theme';
import Description from '@/components/Description';
import { getRelativePath } from '@/utils';
import { i18nNamespace } from '@/utils/constants';

const Title = styled(H2)`
  margin: 0 auto 0;
  width: 75%;
  color: ${p => p.theme.colors.backgroundJoinDarkGold};

  ${media('desktop')} {
    width: 55%;
    margin: 0 auto 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 3%;
  width: 75%;

  ${media('desktop')} {
    width: 55%;
  }
`;

const AnimatedWrapper = styled(ScrollAnimation)`
  position: relative;
  margin-top: 3%;
`;

const AwardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 75%;

  ${media('desktop')} {
    width: 55%;
  }
`;

const SingleAwardWrapper = styled.div`
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${p => p.theme.colors.backgroundJoinLightGold};
  margin-bottom: 0.5em;
  width: 85%;
`;

const Divider = styled.div`
  width: 68%;
  height: 1px;
  background-color: ${p => p.theme.colors.backgroundJoinLightGold};
`;

const Content = styled(Description)`
  letter-spacing: 1.67px;
  white-space: pre-line;
  margin: 0.5em 0;
  &.cn {
    font-family: ${p => p.theme.fontFamily.NotoSansTC};
    font-weight: 400;
  }
`;

const IPFSIcon = styled.img`
  position: absolute;
  left: 70vw;
  width: 10vw;

  ${media('pad')} {
    bottom: -18vw;
  }
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
      <AnimatedWrapper
        animateOnce
        animateIn="fadeInUp"
        delay={300}
        offset={0}
      ></AnimatedWrapper>
      <AwardWrapper>
        <SingleAwardWrapper>
          <Content>{t('awards.subs.0.content')}</Content>
        </SingleAwardWrapper>
        <SingleAwardWrapper>
          <Content>{t('awards.subs.1.content')}</Content>
        </SingleAwardWrapper>
        <SingleAwardWrapper>
          <Content>{t('awards.subs.2.content')}</Content>
        </SingleAwardWrapper>
        <SingleAwardWrapper>
          <Content>{t('awards.subs.3.content')}</Content>
        </SingleAwardWrapper>
        <SingleAwardWrapper>
          <Content>{t('awards.subs.4.content')}</Content>
        </SingleAwardWrapper>
        <SingleAwardWrapper>
          <Content>{t('awards.subs.5.content')}</Content>
        </SingleAwardWrapper>
      </AwardWrapper>
      {/*}
      <ScrollInfo />
    {*/}
    </Section>
  );
};

export default Awards;
