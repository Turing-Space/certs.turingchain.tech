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

  > div {
    width: 2em;
    height: 3px;
    background: ${p => p.theme.colors.white};
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
    border-color: #9e9e9e transparent transparent;
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
  height: calc(100vh - 50px);
  top: 50px;
  left: 0;
  padding-left: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: -1;

  > li {
    cursor: pointer;
    padding: 1em 4em;
    font-size: ${p => p.theme.fontSize.bigger};
    background: rgb(33, 33, 33);

    &.red {
      background: ${p => p.theme.colors.primary};
      color: ${p => p.theme.colors.white};
      text-align: center;

      &:focus {
        background: #a80100;
      }
    }

    &.small {
      padding-left: 5.2em;
      font-size: ${p => p.theme.fontSize.smaller};
    }

    &:focus,
    &:active {
      background: rgb(26, 26, 26);
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
    transform: `translate3d(0, ${open ? '0%' : '100vh'}, 0)`,
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
            scrollToID('section-service');
            setOpen(false);
          }}
        >
          {t('header.service')}
        </li>
        <li
          onClick={() => {
            scrollToID('section-technology');
            setOpen(false);
          }}
        >
          {t('header.technology')}
        </li>
        <li
          onClick={() => {
            scrollToID('section-product');
            setOpen(false);
          }}
        >
          {t('header.product')}
        </li>
        <li
          onClick={() => {
            scrollToID('section-collaborations');
            setOpen(false);
          }}
        >
          {t('header.collaborations')}
        </li>
        <li
          onClick={() => {
            scrollToID('section-backedBy');
            setOpen(false);
          }}
        >
          {t('header.backedBy')}
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
