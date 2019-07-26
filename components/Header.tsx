import { SFC, useState } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { animated, useSpring } from 'react-spring';
import Button from '@/components/Button';
import HeaderLogo from '@/components/HeaderLogo';
import useWindowScroll from '@/hooks/useWindowScroll';
import { scrollToID } from '@/utils';
import { media } from '@/utils/theme';

const Wrapper = styled.header<{ hideUp?: boolean; openMobile: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0.3em 4em;
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

  ${media('desktop')} {
    height: 60px;
  }

  ${media('largeDesktop')} {
    height: 70px;
    padding: 3px 5em;
  }

  a {
    color: ${p => p.theme.colors.white};
    text-decoration: none;
  }
`;

const SectionWrapper = styled.ul`
  display: none;
  align-items: center;

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

const MobileHeader = styled.div`
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

    &:focus,
    &:active {
      background: rgb(26, 26, 26);
    }
  }
`;

const StyledButton = styled(Button)`
  width: 8em;
  padding: 0.7em 1em;
`;

const Header: SFC = () => {
  const { y, oldY } = useWindowScroll();
  const [openMobileList, setOpenMobileList] = useState<boolean>(false);

  const style = useSpring({
    transform: `translate3d(0, ${openMobileList ? '0%' : '100vh'}, 0)`,
    opacity: openMobileList ? 1 : 0,
  });
  return (
    <>
      <Wrapper hideUp={y > 0 && y > oldY} openMobile={openMobileList}>
        <HeaderLogo />
        <SectionWrapper>
          <li onClick={() => scrollToID('section-service')}>區塊鏈成就履歷</li>
          <li onClick={() => scrollToID('section-technology')}>技術架構</li>
          <li onClick={() => scrollToID('section-collaborations')}>
            已協助發證機構
          </li>
          <li onClick={() => scrollToID('section-examples')}>案例展示</li>
          <li onClick={() => scrollToID('section-contact')}>合作洽談</li>

          <li onClick={() => alert('敬請期待！')}>
            {/* <Link href="/demo"> */}
            <StyledButton>體驗 →</StyledButton>
            {/* </Link> */}
          </li>
        </SectionWrapper>
        <MobileHeader onClick={() => setOpenMobileList(o => !o)}>
          <div />
          <div />
          <div />
        </MobileHeader>
        <MobileList style={style}>
          <li onClick={() => scrollToID('section-service')}>區塊鏈成就履歷</li>
          <li onClick={() => scrollToID('section-technology')}>技術架構</li>
          <li onClick={() => scrollToID('section-collaborations')}>
            已協助發證機構
          </li>
          <li onClick={() => scrollToID('section-examples')}>案例展示</li>
          <li onClick={() => scrollToID('section-contact')}>合作洽談</li>

          <li className="red" onClick={() => alert('敬請期待！')}>
            體驗
            {/* <Link href="/demo">體驗</Link> */}
          </li>
        </MobileList>
      </Wrapper>
    </>
  );
};

export default Header;
