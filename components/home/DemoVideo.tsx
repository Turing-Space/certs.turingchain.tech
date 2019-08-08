import { FC } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { media } from '@/utils/theme';
import H2 from '@/components/H2';
import Section from '@/components/Section';
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/constants';

const Title = styled(H2)`
  margin-top: 14vh;
`;

const Wrapper = styled(ScrollAnimation)`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 6vh auto;
  align-items: center;
`;

const Iframe = styled.iframe`
  width: 70%;
  height: 250px;
  margin: 1em;

  ${media('pad')} {
    width: 50%;
  }
  ${media('desktop')} {
    width: 30%;
    height: 300px;
    margin: 0 1em;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

type TProps = {
  id: string;
};

const DemoVideo: FC<TProps> = ({ id }) => {
  const { t } = useTranslation(i18nNamespace.Home);
  return (
    <Section id={id} style={{ marginBottom: '10vh' }}>
      <ScrollAnimation
        animateOnce
        animateIn="fadeInUp"
        style={{ width: '100%', textAlign: 'center' }}
      >
        <Title>{t('demo.video.title')}</Title>
      </ScrollAnimation>
      <Wrapper animateOnce animateIn="fadeInUp" delay={300}>
        <Iframe
          src="https://www.youtube.com/embed/WvUa_AFFOuo"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        />
        <Iframe
          src="https://www.youtube.com/embed/S9rRX2yq6to"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        />
      </Wrapper>
    </Section>
  );
};

export default DemoVideo;
