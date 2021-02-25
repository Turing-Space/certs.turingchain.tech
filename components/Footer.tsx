import { FC, useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import H2 from '@/components/H2';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';
import { i18nNamespace } from '@/constants';
import { trackOutboundLink } from '@/utils/gtag';
import { Router } from '@/i18n';

const Wrapper = styled.footer`
  position: relative;
  height: 70vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bg = styled.div`
  position: absolute;
  background: ${p => p.theme.colors.backgroundShapeGold};
  transform: skewY(-3deg);
  height: 100%;
  bottom: -10%;
  width: 100%;
  opacity: 0.9;
`;

const InfoWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 60%;

  ${media('tablet')} {
    width: 62.5%;
  }
`;

const Title = styled(H2)`
  margin-bottom: 1em;
  text-align: center;
  ${media('tablet')} {
    text-align: left;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  margin: auto;

  img {
    width: 2.5em;
    transition: opacity ease-in 0.1s;

    &:hover {
      opacity: 0.75;
    }
  }
  ${media('tablet')} {
    margin: 0;
  }
`;

const CompanyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8% 0;
  transition: opacity ease-in 0.1s;

  > img {
    width: 1.75em;
    margin-right: 1em;
  }

  > p {
    font-weight: 500;
    letter-spacing: 1px;
    font-family: ${p => p.theme.fontFamily.SFText};
  }

  ${media('tablet')} {
    margin: 3% 0;
    justify-content: flex-start;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d8d8d8;
  opacity: 0.4;
  margin: 5% 0;
`;

const Temp = styled.p`
  cursor: pointer;
  margin-bottom: 2%;
  font-size: 1em;

  ${media('tablet')} {
    margin-top: 0;
    font-size: ${p => p.theme.fontSize.smaller};
  }

  &:hover {
    opacity: 0.75;
  }
`;

const CopyRight = styled.p`
  margin-top: 10%;
  font-size: 1em;

  ${media('tablet')} {
    margin-top: 0;
    font-size: ${p => p.theme.fontSize.smaller};
  }
`;

const Footer: FC = () => {
  const { t } = useTranslation(i18nNamespace.Home);

  const onPageClick = useCallback((route: string) => {
    Router.push(route);
    scrollTo(0, 0);
  }, []);

  return (
    <Wrapper id="section-contact">
      <Bg />
      <InfoWrapper>
        <Title>{t('footer.title')}</Title>
        <IconWrapper>
          <a href="mailto:apac@turingchain.tech?subject=[Collaboration]">
            <img
              src={getRelativePath('/static/icon/icon-mail.png')}
              srcSet={`${getRelativePath(
                '/static/icon/icon-mail@2x.png',
              )} 2x, ${getRelativePath('/static/icon/icon-mail@3x.png')} 3x`}
            />
          </a>
          <a
            href="https://www.facebook.com/turingcerts"
            target="_blank"
            onClick={() =>
              trackOutboundLink('https://www.facebook.com/turingcerts')
            }
          >
            <img
              src={getRelativePath('/static/icon/icon-fb.png')}
              srcSet={`${getRelativePath(
                '/static/icon/icon-fb@2x.png',
              )} 2x, ${getRelativePath('/static/icon/icon-fb@3x.png')} 3x`}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/turing-chain-limited/"
            target="_blank"
            onClick={() =>
              trackOutboundLink(
                'https://www.linkedin.com/company/turing-chain-limited/',
              )
            }
          >
            <img
              src={getRelativePath('/static/icon/icon-linkedin.png')}
              srcSet={`${getRelativePath(
                '/static/icon/icon-linkedin@2x.png',
              )} 2x, ${getRelativePath(
                '/static/icon/icon-linkedin@3x.png',
              )} 3x`}
            />
          </a>
        </IconWrapper>
        <CompanyWrapper>
          <img
            src={getRelativePath('/static/logo/logo-tc-light.png')}
            srcSet={`${getRelativePath(
              '/static/logo/logo-tc-light@2x.png',
            )} 2x, ${getRelativePath('/static/logo/logo-tc-light@3x.png')} 3x`}
          />
          <p>TURING CHAIN LIMITED</p>
        </CompanyWrapper>
        <Divider />
        <Temp onClick={() => onPageClick('/security')}>
          {t('footer.security')}
        </Temp>
        <Temp onClick={() => onPageClick('/privacy')}>
          {t('footer.privacy')}
        </Temp>
        <CopyRight>© Turing Chain Limited. All rights reserved</CopyRight>
      </InfoWrapper>
    </Wrapper>
  );
};

export default Footer;
