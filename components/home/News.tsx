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
import { getRelativePath } from '@/utils';
import { i18nNamespace } from '@/constants';
import { trackOutboundLink } from '@/utils/gtag';
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
  width: 100%;
  margin: 3.5em 10;
  ${media('pad')} {
    justify-content: space-between;
  }

  ${media('desktop')} {
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  position: relative;
  border-radius: 0;
  margin: 20px;
  width: 0;
  height: 0;
  background: ${p => p.theme.colors.backgroundJoinDarkGold};
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0% 0;

  img {
    width: 2.5em;
    transition: opacity ease-in 0.1s;

    &:hover {
      opacity: 0.75;
    }
  }
  ${media('tablet')} {
    margin: -3% 0;
  }
`;

const StyledSubDescription = styled(Description)`
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

const WhiteBox = styled.div`
  position: relative;
  margin-top: 3%;
  width: 75%;
  height: 480px;
  margin-bottom: 20em;
  background-color: #f0f2f5;
  border-radius: 30px;
  opacity: 1;

  ${media('desktop')} {
    width: 70%;
  }
`;

const BlackBox = styled.div`
  position: relative;
  margin-top: 3%;
  top: 18%;
  width: 75%;
  height: 200px;
  left: 17vw;

  background-color: #424242;
  border-radius: 30px;
  opacity: 1;

  ${media('desktop')} {
    width: 50%;
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

const News: FC<{ id: string }> = ({ id }) => {
  const [open1, setOpen1] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);
  const { t } = useTranslation(i18nNamespace.Home);
  return (
    <Section id={id}>
      <ScrollAnimation
        animateOnce
        animateIn="fadeInUp"
        style={{ width: '100%', textAlign: 'center' }}
      >
        <Title>{t('news.title')}</Title>
      </ScrollAnimation>
      <WhiteBox>
        <BlackBox></BlackBox>
        <IconWrapper>
          <a onClick={() => $('.single-item').slick()}>
            <img
              src={getRelativePath('/static/icon/icon_left.svg')}
              srcSet={`${getRelativePath(
                '/static/icon/icon_left@2x.svg',
              )} 2x, ${getRelativePath('/static/icon/icon_left@3x.svg')} 3x`}
            />
          </a>
          <img
            src={getRelativePath('/static/icon/icon_right.svg')}
            srcSet={`${getRelativePath(
              '/static/icon/icon_right@2x.svg',
            )} 2x, ${getRelativePath('/static/icon/icon_right@3x.svg')} 3x`}
          />
        </IconWrapper>
        {/*}  
          <StyledButton
            onClick={() => {
              setOpen1(p => !p), setOpen2(false);
            }}
          >
            
            <img
              src={getRelativePath('/static/icon/icon_left.svg')}
              srcSet={`${getRelativePath(
              '/static/icon/icon_left@2x.svg',
              )} 2x, ${getRelativePath('/static/icon/icon_left@3x.svg')} 3x`}
            />
              
          </StyledButton>
              

          <StyledButton
            onClick={() => {
              setOpen2(p => !p), setOpen1(false);
            }}
          ></StyledButton>
          {*/}
      </WhiteBox>
    </Section>
  );
};

export default News;
