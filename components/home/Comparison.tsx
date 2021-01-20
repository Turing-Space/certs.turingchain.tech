import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import H2 from '@/components/H2';
//import H3 from '@/components/H3';
import { media } from '@/utils/theme';
import Description from '@/components/Description';
import Button from '@/components/Button';
//import { getRelativePath } from '@/utils';
import { i18nNamespace } from '@/constants';
//import ScrollInfo from '../ScrollInfo';

const Title = styled(H2)`
  margin: 18vh auto 0;
  max-width: 70vw;
  color: ${p => p.theme.colors.websiteCatelogWordGold};

  ${media('largeDesktop')} {
    max-width: 55vw;
    margin: 20vh auto 0;
  }
`;
const StyledDescription = styled(Description)`
  width: 90%;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 2em;
  margin: 0 auto;
  color: ${p => p.theme.colors.backgroundWordDarkGrey};

  ${media('desktop')} {
    width: 70%;
  }
`;

const ButtonGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 3.5em 10;
  ${media('pad')} {
    justify-content: space-between;
  }

  ${media('desktop')} {
    width: 55%;
  }
`;

const ButtonWrapper = styled(ScrollAnimation)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 30em;
  ${media('pad')} {
    width: 50%;
  }
  ${media('desktop')} {
    width: 30%;
  }
`;

const StyledButton1 = styled(Button)`
  margin: 5% 0 8%;
  display: flex;

  width: 140px;
  height: 44px;
  background: transparent linear-gradient(90deg, #ce893a 0%, #f3c77c 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 22px;
  opacity: 1;

  ${media('tablet')} {
    width: 50%;
  }
`;

const StyledButton2 = styled(Button)`
  margin: 5% 0 8%;
  display: flex;

  width: 140px;
  height: 44px;
  background: transparent linear-gradient(90deg, #ce893a 0%, #f3c77c 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 22px;
  opacity: 1;

  ${media('tablet')} {
    width: 50%;
  }
`;

const StyledButton3 = styled(Button)`
  margin: 5% 0 8%;
  display: flex;

  width: 140px;
  height: 44px;
  background: transparent linear-gradient(90deg, #ce893a 0%, #f3c77c 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 22px;
  opacity: 1;

  ${media('tablet')} {
    width: 50%;
  }
`;

const StyledSubDiscription = styled(Button)`
  margin: 20% 0 -500%;
  display: flex;

  width: 1165px;
  height: 402px;
  background: transparent linear-gradient(90deg, #ce893a 0%, #f3c77c 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 30px;
  opacity: 1;
`;

const Comparison: FC<{ id: string }> = ({ id }) => {
  const [open1, setOpen1] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);
  const [open3, setOpen3] = useState<boolean>(false);
  const { t } = useTranslation(i18nNamespace.Home);
  return (
    <Section id={id}>
      <ScrollAnimation
        animateOnce
        animateIn="fadeInUp"
        style={{ width: '100%', textAlign: 'center' }}
      >
        <Title>{t('comparison.title')}</Title>
        <StyledDescription>{t('comparison.description')}</StyledDescription>
      </ScrollAnimation>
      <ButtonGroupWrapper>
        <ButtonWrapper animateIn="fadeIn" animateOnce delay={300}>
          <StyledButton1 onClick={() => setOpen1(p => !p)}>
            {open1 ? (
              <StyledSubDiscription>
                {t('comparison.subdiscription1')}
              </StyledSubDiscription>
            ) : (
              t('comparison.subtitle1')
            )}
          </StyledButton1>
        </ButtonWrapper>
        <ButtonWrapper animateIn="fadeIn" animateOnce delay={300}>
          <StyledButton2 onClick={() => setOpen2(p => !p)}>
            {open2 ? (
              <StyledSubDiscription>
                {t('comparison.subdiscription2')}
              </StyledSubDiscription>
            ) : (
              t('comparison.subtitle2')
            )}
          </StyledButton2>
        </ButtonWrapper>
        <ButtonWrapper animateIn="fadeIn" animateOnce delay={300}>
          <StyledButton3 onClick={() => setOpen3(p => !p)}>
            {open3 ? (
              <StyledSubDiscription>
                {t('comparison.subdiscription3')}
              </StyledSubDiscription>
            ) : (
              t('comparison.subtitle3')
            )}
          </StyledButton3>
        </ButtonWrapper>
      </ButtonGroupWrapper>
    </Section>
  );
};

export default Comparison;
