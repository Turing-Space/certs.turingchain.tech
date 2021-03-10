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
  const { t } = useTranslation(i18nNamespace.Home);

  return (
    <Section id={id} justifyContent="flex-start" fullscreen>
      <Title>{t('aboutUs.title')}</Title>
      <Content>
        <ScrollAnimation animateIn="fadeInUp">
          <Profile
            src={getRelativePath('/static/img/CEO.png')}
            srcSet={`${getRelativePath('/static/img/CEO@2x.png')} 2x`}
          />
        </ScrollAnimation>
        <TextBox>
          <ScrollAnimation animateIn="fadeInUp" delay={400} offset={0}>
            <Quote>{t('home.quote')}</Quote>
            <Text>{t('home.descriptionP1')}</Text>
            <p></p>
            <Text>{t('home.descriptionP2')}</Text>
            <p></p>
            <Text>{t('home.descriptionP3')}</Text>
            <p></p>
            <Text>{t('home.descriptionP4')}</Text>
          </ScrollAnimation>
        </TextBox>
      </Content>
    </Section>
  );
};

export default AboutUs;
