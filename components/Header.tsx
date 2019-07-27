import { SFC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';
import { animated, useSpring } from 'react-spring';
import Button from '@/components/Button';
import HeaderLogo from '@/components/HeaderLogo';
import useWindowScroll from '@/hooks/useWindowScroll';
import { scrollToID, getRelativePath } from '@/utils';
import { media } from '@/utils/theme';
import { i18nNamespace } from '@/constants';

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
  background-color: ${p =>
    p.openMobile ? 'rgb(33, 33, 33)' : p.theme.colors.backgroundBlack};
  z-index: ${p => p.theme.z.high};
  transform: translateY(0);
  transition: all 0.3s ease-in;

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
      color: ${p => p.theme.colors.primary};
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
  color: #9e9e9e;
  cursor: pointer;
  transition: color 0.1s ease-in;
  background-color: ${p => p.theme.colors.backgroundBlack};

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
    border-color: #9e9e9e transparent transparent;
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
  color: #9e9e9e;
  z-index: -1;
  background: ${p => p.theme.background};

  > div {
    width: 100%;
    padding: 0.5rem 0.25rem;
    text-align: center;
    &:hover {
      color: ${p => p.theme.colors.white};
    }
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

  const { t, i18n } = useTranslation(i18nNamespace.Home);
  return (
    <>
      <Wrapper hideUp={y > 0 && y > oldY} openMobile={openMobileList}>
        <HeaderLogo />
        <SectionWrapper>
          <li onClick={() => scrollToID('section-service')}>
            {t('header.service')}
          </li>
          <li onClick={() => scrollToID('section-technology')}>
            {t('header.technology')}
          </li>
          <li onClick={() => scrollToID('section-collaborations')}>
            {t('header.collaborations')}
          </li>
          <li onClick={() => scrollToID('section-examples')}>
            {t('header.examples')}
          </li>
          <li onClick={() => scrollToID('section-contact')}>
            {t('header.contact')}
          </li>

          <li onClick={() => alert('敬請期待！')}>
            <StyledButton>{t('start')}</StyledButton>
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
                <p>{t(`common:language.zh-TW`)}</p>
              </div>
              <div onClick={() => i18n.changeLanguage('en')}>
                <p>{t(`common:language.en`)}</p>
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
