import { FC } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import ScrollInfo from '@/components/ScrollInfo';
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

const Logo = styled.img`
  width: 21vw;
  margin-top: 2%;
`;

const Divider = styled.div`
  width: 62.5%;
  height: 1px;
  opacity: 0.1;
  background-color: #fff;
  margin: 3% auto;
`;

const Text = styled.p`
  width: 40vw;
  margin-bottom: 1em;
  text-align: center;
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
      <Title>ABOUT US</Title>
      <ScrollAnimation animateIn="fadeInUp">
        <Logo
          src={getRelativePath('/static/logo/logo-tc-title.png')}
          srcSet={`${getRelativePath(
            '/static/logo/logo-tc-title@2x.png',
          )} 2x, ${getRelativePath('/static/logo/logo-tc-title@3x.png')} 3x`}
        />
      </ScrollAnimation>
      <Divider />
      <ScrollAnimation animateIn="fadeInUp" delay={400} offset={0}>
        <Text className="cn">
          {t('home.description.cn')}
        </Text>
        <Text className="en">
          {t('home.description.en')}
        </Text>
      </ScrollAnimation>
      <ScrollInfo />
    </Section>
  );
};

export default AboutUs;
