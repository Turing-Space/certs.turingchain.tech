import { SFC } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import Button from '@/components/Button';
import HeaderLogo from '@/components/HeaderLogo';
import useWindowScroll from '@/hooks/useWindowScroll';
import { scrollToID } from '@/utils';
import { media } from '@/utils/theme';

const Wrapper = styled.header<{ hideUp?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0.3em 4em;
  background-color: ${p => p.theme.colors.backgroundBlack};
  z-index: ${p => p.theme.z.high};
  transform: translateY(0);
  transition: all 0.3s ease-in;

  ${p =>
    p.hideUp &&
    css`
      transform: translateY(-100%);
    `}

  ${media('largeDesktop')} {
    height: 70px;
    padding: 3px 5em;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;

  > p {
    cursor: pointer;
    margin-right: 36px;
    transition: color 0.2s ease-in;
    &:hover {
      color: ${p => p.theme.colors.primary};
    }
  }
`;

const StyledButton = styled(Button)`
  width: 8em;
  padding: 0.7em 1em;
`;

const Header: SFC = () => {
  const { y, oldY } = useWindowScroll();
  return (
    <Wrapper hideUp={y > oldY}>
      <HeaderLogo />
      <SectionWrapper>
        <p onClick={() => scrollToID('section-service')}>區塊鏈成就履歷</p>
        <p onClick={() => scrollToID('section-technology')}>技術架構</p>
        <p onClick={() => scrollToID('section-collaborations')}>合作機構</p>
        <p onClick={() => scrollToID('section-examples')}>案例展示</p>
        <p onClick={() => scrollToID('section-contact')}>合作洽談</p>
        <Link href="/demo">
          <StyledButton>體驗 →</StyledButton>
        </Link>
      </SectionWrapper>
    </Wrapper>
  );
};

export default Header;
