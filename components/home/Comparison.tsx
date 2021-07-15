import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { SectionGrey } from '@/components/Section';
import H2 from '@/components/H2';
//import H3 from '@/components/H3';
import { media } from '@/utils/theme';
import Description from '@/components/Description';
import Button from '@/components/Button';
//import { getRelativePath } from '@/utils';
import { i18nNamespace } from '@/utils/constants';
//import ScrollInfo from '../ScrollInfo';

const Bg = styled.div`
  position: absolute;
  background: ${p => p.theme.colors.backgroundGrey};

  height: 100%;
  bottom: -10%;
  width: 100%;
  opacity: 0.9;
`;

const Title = styled(H2)`
  margin: 0 auto 0.5em;
  max-width: 70vw;
  color: ${p => p.theme.colors.websiteCatelogWordGold};

  ${media('largeDesktop')} {
    max-width: 55vw;
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
  width: 100%;
  margin: 3.5em 10;
  ${media('pad')} {
    justify-content: space-around;
  }

  ${media('desktop')} {
    width: 100%;
  }
`;

const StyledButton = styled(Button)<{ open: boolean }>`
  margin: 5% 0;
  display: flex;

  color: ${p =>
    p.open ? p.theme.colors.white : p.theme.colors.backgroundJoinDarkGold};
  background: ${p =>
    p.open ? p.theme.colors.backgroundJoinDarkGold : p.theme.colors.white};

  opacity: 1;

  ${media('tablet')} {
    width: 100%;
  }
`;

const StyledSubDescription = styled(Description)`
  width: 90%;
  font-size: 1.2em;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 2em;
  margin: 0 auto;
  color: ${p => p.theme.colors.backgroundWordDarkGrey};

  ${media('desktop')} {
    width: 90%;
  }
`;

const WhiteBox = styled.div`
  position: relative;
  margin-top: 3%;
  width: 75%;
  min-height: 300px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 30px;
  opacity: 1;

  ${media('desktop')} {
    width: 60%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 0;
`;

const MoreInfoWrapper = styled(Wrapper)<{ open: boolean }>`
  overflow: hidden;
  max-height: ${p => (p.open ? '700vh' : 0)};
  transition: max-height ease-in 0s;
`;

const InfoWrapper = styled.div`
  position: relative;
  margin-top: 3%;
  width: 100%;
`;

const Comparison: FC<{ id: string }> = ({ id }) => {
  const [open1, setOpen1] = useState<boolean>(true);
  const [open2, setOpen2] = useState<boolean>(false);
  const [open3, setOpen3] = useState<boolean>(false);
  const { t } = useTranslation(i18nNamespace.Home);
  return (
    <SectionGrey id={id} fullscreen>
      <ScrollAnimation
        animateOnce
        animateIn="fadeInUp"
        style={{ width: '100%', textAlign: 'center' }}
      >
        <Title>{t('comparison.title')}</Title>
        <StyledDescription>{t('comparison.description1')}</StyledDescription>
        <StyledDescription>{t('comparison.description2')}</StyledDescription>
        <StyledDescription>{t('comparison.description3')}</StyledDescription>
      </ScrollAnimation>
      <WhiteBox>
        <ButtonGroupWrapper>
          <StyledButton
            onClick={() => {
              setOpen1(true), setOpen2(false), setOpen3(false);
            }}
            open={open1}
          >
            {t('comparison.subtitle1')}
          </StyledButton>

          <StyledButton
            onClick={() => {
              setOpen2(true), setOpen1(false), setOpen3(false);
            }}
            open={open2}
          >
            {t('comparison.subtitle2')}
          </StyledButton>

          <StyledButton
            onClick={() => {
              setOpen3(true), setOpen1(false), setOpen2(false);
            }}
            open={open3}
          >
            {t('comparison.subtitle3')}
          </StyledButton>
        </ButtonGroupWrapper>
        {
          <MoreInfoWrapper open={open1}>
            {[0].map(k => (
              <InfoWrapper key={k}>
                <StyledSubDescription>
                  {t(`comparison.subs.${k}.content1`)}
                </StyledSubDescription>
                <StyledSubDescription>
                  {t(`comparison.subs.${k}.content2`)}
                </StyledSubDescription>
              </InfoWrapper>
            ))}
          </MoreInfoWrapper>
        }
        {
          <MoreInfoWrapper open={open2}>
            {[1].map(k => (
              <InfoWrapper key={k}>
                <StyledSubDescription>
                  {t(`comparison.subs.${k}.content1`)}
                </StyledSubDescription>
                <StyledSubDescription>
                  {t(`comparison.subs.${k}.content2`)}
                </StyledSubDescription>
                <StyledSubDescription>
                  {t(`comparison.subs.${k}.content3`)}
                </StyledSubDescription>
              </InfoWrapper>
            ))}
          </MoreInfoWrapper>
        }
        {
          <MoreInfoWrapper open={open3}>
            {[2].map(k => (
              <InfoWrapper key={k}>
                <StyledSubDescription>
                  {t(`comparison.subs.${k}.content1`)}
                </StyledSubDescription>
                <StyledSubDescription>
                  {t(`comparison.subs.${k}.content2`)}
                </StyledSubDescription>
              </InfoWrapper>
            ))}
          </MoreInfoWrapper>
        }
      </WhiteBox>
    </SectionGrey>
  );
};

export default Comparison;
