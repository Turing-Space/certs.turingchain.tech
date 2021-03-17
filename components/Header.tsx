import { SFC, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';
import { animated, useSpring } from 'react-spring';
import Button from '@/components/Button';
import HeaderLogo from '@/components/HeaderLogo';
import useWindowScroll from '@/hooks/useWindowScroll';
import { scrollToID, getRelativePath } from '@/utils';
import { media } from '@/utils/theme';
import { i18nNamespace } from '@/constants';
import { Router } from '@/i18n';

import MobileHeader from './MobileHeader';

const Wrapper = styled.header<{ hideUp?: boolean; openMobile: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0.3em 2.5rem;
  background-color: ${p => p.theme.colors.white};
  z-index: ${p => p.theme.z.high};
  transform: translateY(0);
  transition: all 0.3s ease-in;
  box-shadow: 0px 3px 6px #00000029;

  ${p =>
    p.hideUp &&
    css`
      transform: translateY(-100%);
    `}

  ${media('tablet')} {
    padding: 0.3em 3.5rem;
    height: 60px;
  }

  ${media('desktop')} {
    padding: 0.3em 0 0.3em 4rem;
    height: 60px;
  }

  ${media('largeDesktop')} {
    height: 70px;
    padding-left: 5rem;
  }

  a {
    color: ${p => p.theme.colors.white};
    text-decoration: none;
  }
`;

const SectionWrapper = styled.ul`
  display: none;
  align-items: center;
  height: 100%;

  > li {
    cursor: pointer;
    margin-right: 2em;
    transition: color 0.2s ease-in;
    &:hover {
      color: ${p => p.theme.colors.websiteCatelogWordGold};
    }
  }

  ${media('desktop')} {
    display: flex;
  }
`;

const StyledButton = styled(Button)`
  width: 8em;
  padding: 0.7em 1em;
`;

const LanguageWrapper = styled.div<{ open: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: ${p => p.theme.fontSize.smaller};
  border-left: solid 1px #424242;
  padding: 0 2.5rem 0 1.5rem;
  color: ${p => p.theme.colors.backgroundTranslationGrey};
  cursor: pointer;
  transition: color 0.1s ease-in;
  background-color: ${p => p.theme.colors.white};

  > img {
    width: 20px;
    margin-right: 0.75em;
  }

  > .triangle {
    will-change: transform;
    transition: transform 0.2s ease-in;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 9px 5px 0px 5px;
    border-color: ${p => p.theme.colors.backgroundTranslationGrey} transparent
      transparent;
    line-height: 0px;
    margin-top: 2px;
    margin-left: 0.5em;
    transform: ${p => (p.open ? 'rotateZ(-180deg)' : 'rotateZ(0deg)')};
  }
`;

const LanguageChooseWrapper = styled(animated.div)`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px #424242;
  color: ${p => p.theme.colors.backgroundTranslationGrey};
  z-index: -1;
  background: ${p => p.theme.background};

  > div {
    display: flex;
    width: 100%;
    padding: 0.5rem;
    &:hover {
      color: ${p => p.theme.colors.websiteCatelogWordGold};
    }
  }

  .lang-prefix {
    width: 30%;
    text-align: center;
    margin-right: 5px;
  }
`;

const Header: SFC = () => {
  const { y, oldY } = useWindowScroll();
  const [openMobileList, setOpenMobileList] = useState<boolean>(false);
  const [openLanguage, setOpenLanguage] = useState<boolean>(false);

  const languageWrapperStyle = useSpring({
    transform: `translate3d(0, ${openLanguage ? '100%' : '0%'}, 0)`,
    opacity: openLanguage ? 1 : 0,
  });

  const { t, i18n } = useTranslation([
    i18nNamespace.Home,
    i18nNamespace.Common,
  ]);

  const onHeaderLogoClick = useCallback(() => {
    Router.push('/');
    scrollToID('section-home');
  }, []);

  return (
    <>
      <Wrapper hideUp={y > 0 && y > oldY} openMobile={openMobileList}>
        <HeaderLogo onClick={onHeaderLogoClick} />
        <SectionWrapper>
          <li onClick={() => scrollToID('section-characteristic')}>
            {t('header.characteristic')}
          </li>
          <li onClick={() => scrollToID('section-comparison')}>
            {t('header.comparison')}
          </li>
          <li onClick={() => scrollToID('section-awards')}>
            {t('header.awards')}
          </li>

          <li onClick={() => scrollToID('section-news')}>{t('header.news')}</li>

          <li onClick={() => scrollToID('section-process')}>
            {t('header.process')}
          </li>
          <li onClick={() => scrollToID('section-examples')}>
            {t('header.examples')}
          </li>
          <li onClick={() => scrollToID('section-about')}>
            {t('header.aboutUs')}
          </li>
          <li onClick={() => scrollToID('section-contact')}>
            {t('header.contact')}
          </li>

          <li>
            <StyledButton
              onClick={() => window.open('http://bit.ly/turingcerts-issuer')}
            >
              {t('start')}
            </StyledButton>
          </li>
          <LanguageWrapper
            open={openLanguage}
            onClick={() => setOpenLanguage(t => !t)}
          >
            <img
              src={getRelativePath('/static/icon/icon-earth.png')}
              srcSet={`${getRelativePath(
                '/static/icon/icon-earth@2x.png',
              )} 2x, ${getRelativePath('/static/icon/icon-earth@3x.png')} 3x`}
            />
            <p>{t(`common:language.${i18n.language}`)}</p>
            <div className="triangle" />
            <LanguageChooseWrapper style={languageWrapperStyle}>
              <div onClick={() => i18n.changeLanguage('zh-TW')}>
                <div className="lang-prefix">
                  <p>(ZH)</p>
                </div>
                <p>中文</p>
              </div>
              <div onClick={() => i18n.changeLanguage('en')}>
                <div className="lang-prefix">
                  <p>(EN)</p>
                </div>
                <p>English</p>
              </div>
            </LanguageChooseWrapper>
          </LanguageWrapper>
        </SectionWrapper>
        <MobileHeader open={openMobileList} setOpen={setOpenMobileList} />
      </Wrapper>
    </>
  );
};

export default Header;
