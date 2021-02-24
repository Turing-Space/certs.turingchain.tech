import { FC } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/constants';

const Title = styled(H2)`
  margin-top: 18vh;

  ${media('largeDesktop')} {
    margin-top: 20vh;
  }
`;

const Content = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
`;

const Profile = styled.img`
  width: 21vw;
  margin-top: 2%;
`;

const TextBox = styled.div``;

const Quote = styled.p`
  font-size: 16px;
  margin-top: 1em;
  margin-bottom: 2em;
`;
const Text = styled.p`
  width: 40vw;
  margin-bottom: 1em;
  text-align: left;
  line-height: 1.5;
  letter-spacing: 0.56px;

  &.en {
    opacity: 0.4;
    font-size: ${p => p.theme.fontSize.smaller};
  }
`;

const AboutUs: FC<{ id: string }> = ({ id }) => {
  const { t, i18n } = useTranslation(i18nNamespace.Home);

  return (
    <Section id={id} justifyContent="flex-start" fullscreen>
      <Title>關於我們</Title>
      <Content>
        <ScrollAnimation animateIn="fadeInUp">
          <Profile
            src={getRelativePath('/static/img/CEO.png')}
            srcSet={`${getRelativePath('/static/img/CEO@2x.png')} 2x`}
          />
        </ScrollAnimation>
        <TextBox>
          <ScrollAnimation animateIn="fadeInUp" delay={400} offset={0}>
            <Quote className="cn">{t('home.quote')}</Quote>
            <Text className="cn">
              {i18n.language === 'zh-TW'
                ? ` ${t('home.descriptionP1.cn')}`
                : `${t('home.descriptionP1.en')}`}
            </Text>
            <p></p>
            <Text className="cn">
              {i18n.language === 'zh-TW'
                ? ` ${t('home.descriptionP2.cn')}`
                : `${t('home.descriptionP2.en')}`}
            </Text>
            <p></p>
            <Text className="cn">
              {i18n.language === 'zh-TW'
                ? ` ${t('home.descriptionP3.cn')}`
                : `${t('home.descriptionP3.en')}`}
            </Text>
            <p></p>
            <Text className="cn">
              {i18n.language === 'zh-TW'
                ? ` ${t('home.descriptionP4.cn')}`
                : `${t('home.descriptionP4.en')}`}
            </Text>
            {/*
        <Text className="en">
          {t('home.description.en')}
        </Text>
        */}
          </ScrollAnimation>
        </TextBox>
      </Content>
    </Section>
  );
};

export default AboutUs;
