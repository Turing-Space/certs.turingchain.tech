import styled from 'styled-components';
import React, { FC, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { useTranslation } from 'react-i18next';

import { scrollToID, getRelativePath } from '@/utils';
import { media } from '@/utils/theme';
import { i18nNamespace } from '@/constants';

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 70%;
  z-index: 10;

  > div {
    width: 2em;
    height: 3px;
    background: ${p => p.theme.colors.darkGrey};
  }

  ${media('desktop')} {
    display: none;
  }
`;

const LanguageWrapper = styled.li<{ open: boolean }>`
  display: flex;
  align-items: center;

  > img {
    width: 16px;
    margin-right: 0.75em;
  }

  > .triangle {
    will-change: transform;
    transition: transform 0.2s ease-in;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 4px 0px 4px;
    border-color: ${p => p.theme.colors.darkGrey} transparent transparent;
    line-height: 0px;
    margin-top: 2px;
    margin-left: 0.5em;
    transform: ${p => (p.open ? 'rotateZ(-180deg)' : 'rotateZ(0deg)')};
  }
`;

const MobileList = styled(animated.ul)`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  max-height: calc(100vh - 50px);
  top: 50px;
  left: 0;
  padding-left: 0;
  margin: 0;
  background: ${p => p.theme.colors.white};
  z-index: 1;

  > li {
    cursor: pointer;
    padding: 1em 4em;
    font-size: ${p => p.theme.fontSize.bigger};
    background: ${p => p.theme.colors.white};

    &.red {
      background: ${p => p.theme.colors.websiteCatelogWordGold};
      color: ${p => p.theme.colors.white};
      text-align: center;
    }

    &.small {
      padding-left: 5.2em;
      font-size: ${p => p.theme.fontSize.smaller};
    }

    &:focus,
    &:active {
      background: ${p => p.theme.colors.backgroundJoinDarkGold};
    }
  }
`;

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileHeader: FC<TProps> = ({ open, setOpen }) => {
  const { t, i18n } = useTranslation(i18nNamespace.Home);
  const style = useSpring({
    transform: `translate3d(0, ${open ? '0%' : '-100vh'}, 0)`,
    opacity: open ? 1 : 0,
  });

  const [openLanguage, setOpenLanguage] = useState<boolean>(false);
  return (
    <>
      <Wrapper onClick={() => setOpen(o => !o)}>
        <div />
        <div />
        <div />
      </Wrapper>
      <MobileList style={style}>
        <li
          onClick={() => {
            scrollToID('section-characteristic');
            setOpen(false);
          }}
        >
          {t('header.characteristic')}
        </li>
        <li
          onClick={() => {
            scrollToID('section-comparison');
            setOpen(false);
          }}
        >
          {t('header.comparison')}
        </li>
        <li
          onClick={() => {
            scrollToID('section-awards');
            setOpen(false);
          }}
        >
          {t('header.awards')}
        </li>
        <li
          onClick={() => {
            scrollToID('section-news');
            setOpen(false);
          }}
        >
          {t('header.news')}
        </li>
        <li
          onClick={() => {
            scrollToID('section-process');
            setOpen(false);
          }}
        >
          {t('header.process')}
        </li>
        <li
          onClick={() => {
            scrollToID('section-examples');
            setOpen(false);
          }}
        >
          {t('header.examples')}
        </li>
        <li
          onClick={() => {
            scrollToID('section-contact');
            setOpen(false);
          }}
        >
          {t('header.contact')}
        </li>
        <LanguageWrapper
          className="small"
          open={openLanguage}
          onClick={() => setOpenLanguage(o => !o)}
        >
          <img
            src={getRelativePath('/static/icon/icon-earth.png')}
            srcSet={`${getRelativePath(
              '/static/icon/icon-earth@2x.png',
            )} 2x, ${getRelativePath('/static/icon/icon-earth@3x.png')} 3x`}
          />
          <p>{t(`common:language.${i18n.language}`)}</p>
          <div className="triangle" />
        </LanguageWrapper>
        {openLanguage && (
          <>
            <li
              className="small"
              onClick={() => {
                i18n.changeLanguage('zh-TW');
                setOpenLanguage(false);
              }}
            >
              <span style={{ marginRight: '.5rem' }}>(ZH)</span>中文
            </li>
            <li
              className="small"
              onClick={() => {
                i18n.changeLanguage('en');
                setOpenLanguage(false);
              }}
            >
              <span style={{ marginRight: '.5rem' }}>(EN)</span>English
            </li>
          </>
        )}
        <li
          className="red"
          onClick={() => window.open('http://bit.ly/turingcerts-issuer')}
        >
          {t('start')}
        </li>
      </MobileList>
    </>
  );
};

export default MobileHeader;
