import { FC } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import { getRelativePath } from '@/utils';
import H1 from '@/components/H1';
//import ScrollInfo from '@/components/ScrollInfo';
import { media } from '@/utils/theme';
import { i18nNamespace } from '@/constants';

//Home Icon Words
const Text = styled.p`
  margin-bottom: 8px;
  font-size: ${p => p.theme.fontSize.bigger};
  color: ${p => p.theme.colors.backgroundWordDarkGrey};
`;

const CNText = styled(Text)`
  letter-spacing: 1.5px;
`;

const Logo = styled.img`
  height: 25vh;
  ${media('desktop')} {
    height: 28vh;
  }
`;

//Home TuringCerts Words
const Title = styled(H1)`
  color: ${p => p.theme.colors.backgroundWordDarkGrey};
  margin: 0.6em 0 0.3em 0;
  white-space: pre-line;
`;

const Bg = styled.img`
  position: absolute;
  bottom: 0%;
  width: 100%;
`;

const TitleWrapper = styled(ScrollAnimation)`
  display: none;
  width: 80%;
  text-align: center;
  ${media('desktop')} {
    display: block;
    width: 100%;
  }
`;

const MobileTitleWrapper = styled(TitleWrapper)`
  display: block;
  span {
    &.cn {
      font-size: 2.3rem;
    }
  }
  ${media('desktop')} {
    display: none;
  }
`;

const Home: FC<{ id: string }> = ({ id }) => {
  const { t, i18n } = useTranslation(i18nNamespace.Home);
  return (
    <Section fullscreen id={id}>
      <Bg
        src={getRelativePath('/static/bg/bg.png')}
        srcSet={`${getRelativePath(
          '/static/bg/bg@2x.png',
        )} 2x, ${getRelativePath('/static/bg/bg@3x.png')} 3x`}
      />
      <ScrollAnimation animateIn="fadeInUp">
        <Logo src={require('../../static/logo/logo-new.svg')} />
      </ScrollAnimation>
      <TitleWrapper animateIn="fadeInUp" delay={400} offset={0}>
        <Title>
          {t('home.title.en')}
          {i18n.language === 'zh-TW' ? ` ${t('home.title.cn')}` : ''}
        </Title>
        <Text className="en">{t('home.subTitle.en')}</Text>
        {i18n.language === 'zh-TW' && (
          <CNText className="cn">{t('home.subTitle.cn')}</CNText>
        )}
      </TitleWrapper>
      <MobileTitleWrapper animateIn="fadeInUp" delay={400} offset={0}>
        <Title>
          {t('home.title.en')} <br />
          {i18n.language === 'zh-TW' && (
            <span className="cn">{t('home.title.cn')}</span>
          )}
        </Title>
        <CNText>{t('home.mobileSubTitle')}</CNText>
      </MobileTitleWrapper>

      {/*}
      <ScrollInfo />
          {*/}
    </Section>
  );
};

export default Home;
