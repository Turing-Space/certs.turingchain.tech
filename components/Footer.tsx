import { FC } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import H2 from '@/components/H2';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';
import { i18nNamespace } from '@/constants';

const Wrapper = styled.footer`
  position: relative;
  height: 70vh;
  overflow: hidden;
`;

const Bg = styled.div`
  position: absolute;
  background: ${p => p.theme.colors.primary};
  transform: skewY(-3deg);
  height: 100%;
  bottom: -10%;
  width: 100%;
  opacity: 0.9;
`;

const InfoWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 18vh auto 0;

  ${media('tablet')} {
    width: 62.5%;
    margin-top: 12.5%;
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
  cursor: pointer;
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

  &:hover {
    opacity: 0.75;
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
  return (
    <Wrapper id="section-contact">
      <Bg />
      <InfoWrapper>
        <Title>{t('footer.title')}</Title>
        <IconWrapper>
          <a href="mailto:0x1cert@gmail.com?subject=[合作邀約]">
            <img
              src={getRelativePath('/static/icon/icon-mail.png')}
              srcSet={`${getRelativePath(
                '/static/icon/icon-mail@2x.png',
              )} 2x, ${getRelativePath('/static/icon/icon-mail@3x.png')} 3x`}
            />
          </a>
          <a href="https://www.facebook.com/0x1certificate/" target="_blank">
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
        <CompanyWrapper
          onClick={() => window.open('https://turingchain.tech/')}
        >
          <img
            src={getRelativePath('/static/logo/logo-tc-light.png')}
            srcSet={`${getRelativePath(
              '/static/logo/logo-tc-light@2x.png',
            )} 2x, ${getRelativePath('/static/logo/logo-tc-light@3x.png')} 3x`}
          />
          <p>TURING CHAIN LIMITED</p>
        </CompanyWrapper>
        <Divider />
        <CopyRight>© Turing Chain Limited. All rights reserved</CopyRight>
      </InfoWrapper>
    </Wrapper>
  );
};

export default Footer;
