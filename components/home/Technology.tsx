import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import H3 from '@/components/H3';
import { media } from '@/utils/theme';
import Description from '@/components/Description';
import Button from '@/components/Button';
import { getRelativePath } from '@/utils';
import { i18nNamespace } from '@/constants';
import ScrollInfo from '../ScrollInfo';

const Title = styled(H2)`
  margin: 18vh auto 0;
  max-width: 70vw;

  ${media('largeDesktop')} {
    max-width: 55vw;
    margin: 20vh auto 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 3%;
  width: 75%;

  ${media('desktop')} {
    width: 50%;
  }
`;

const AnimatedWrapper = styled(ScrollAnimation)`
  position: relative;
  margin-top: 3%;
  width: 75%;

  ${media('desktop')} {
    width: 50%;
  }
`;

const MoreInfoWrapper = styled(Wrapper) <{ open: boolean }>`
  overflow: hidden;
  max-height: ${p => (p.open ? '700vh' : 0)};
  transition: max-height ease-in 0.3s;
`;

const InfoWrapper = styled.div`
  position: relative;
  margin-top: 9%;
  width: 100%;
`;

const SubTitle = styled(H3)`
  position: relative;
  color: ${p => p.theme.colors.primary};

  &:before {
    position: absolute;
    content: 'BASIC';
    color: #1f1f1f;
    font: italic 800 1.5em /1 ${p => p.theme.fontFamily.SFDisplay};
    letter-spacing: 3.2px;
    top: 0.25em;
    left: 3px;
    z-index: -1;
  }
`;

const AdvancedTitle = styled(SubTitle)`
  &:before {
    position: absolute;
    content: 'ADVANCED';
    color: #1f1f1f;
    font: italic 800 1.5em /1 ${p => p.theme.fontFamily.SFDisplay};
    letter-spacing: 3.2px;
    top: 0.25em;
    left: 3px;
    z-index: -1;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${p => p.theme.colors.white};
  opacity: 0.1;
`;

const Content = styled(Description)`
  letter-spacing: 1.67px;
  margin: 5% 0;
`;

const QuestionTitle = styled.p`
  margin: 1em 0;
  font-weight: 500;
  color: ${p => p.theme.colors.primary};
  letter-spacing: 2px;
  font-size: ${p => p.theme.fontSize.bigger};
`;

const StyledButton = styled(Button)`
  margin: 5% 0 8%;
`;

const IPFSIcon = styled.img`
  position: absolute;
  width: 2.5em;
  right: 0;
  bottom: 0;
  transform: translateY(50%);
`;

const Technology: FC<{ id: string }> = ({ id }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation(i18nNamespace.Home);
  return (
    <Section id={id}>
      <ScrollAnimation
        animateOnce
        animateIn="fadeInUp"
        style={{ width: '100%', textAlign: 'center' }}
      >
        <Title>{t('technology.title')}</Title>
      </ScrollAnimation>
      <AnimatedWrapper animateOnce animateIn="fadeInUp" delay={300} offset={0}>
        <SubTitle>{t('technology.subs.0.title')}</SubTitle>
        <Divider />
        <Content>{t('technology.subs.0.content')}</Content>
        <Divider />
        <IPFSIcon
          src={getRelativePath('/static/elements/logo-ipfs.png')}
          srcSet={`${getRelativePath(
            '/static/elements/logo-ipfs@2x.png',
          )} 2x, ${getRelativePath('/static/elements/logo-ipfs@3x.png')} 3x`}
        />
      </AnimatedWrapper>
      <AnimatedWrapper animateOnce animateIn="fadeInUp" delay={600} offset={0}>
        <AdvancedTitle>{t('technology.subs.1.title')}</AdvancedTitle>
        <Divider />
        <Content>{t('technology.subs.1.content')}</Content>
        <Divider />
        <IPFSIcon
          src={getRelativePath('/static/elements/logo-ipfs.png')}
          srcSet={`${getRelativePath(
            '/static/elements/logo-ipfs@2x.png',
          )} 2x, ${getRelativePath('/static/elements/logo-ipfs@3x.png')} 3x`}
        />
      </AnimatedWrapper>
      {
        <MoreInfoWrapper open={open}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(k => (
            <InfoWrapper key={k}>
              <QuestionTitle>
                {t(`technology.question.${k}.title`)}
              </QuestionTitle>
              <Divider />
              <Content>{t(`technology.question.${k}.content`)}</Content>
              <Divider />
            </InfoWrapper>
          ))}
        </MoreInfoWrapper>
      }

      <StyledButton onClick={() => setOpen(p => !p)}>
        {open ? t('technology.hidden') : t('technology.more')}
        {t('technology.info')}
      </StyledButton>
      {/* <ScrollInfo /> */}
    </Section>
  );
};

export default Technology;
