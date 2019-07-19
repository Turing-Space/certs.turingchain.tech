import { SFC } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import Button from '@/components/Button';
import useWindowScroll from '@/hooks/useWindowScroll';
import { getRelativePath, scrollToID } from '@/utils';
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
    height: 80px;
    padding: 3px 5em;
  }
`;

const LogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  > p {
    font-weight: 500;
  }
`;

const Logo = styled.img`
  height: 50%;
  margin-right: 1em;
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
      <Link href="/">
        <LogoWrapper>
          <Logo
            src={getRelativePath('/static/logo/logo-0-x-1-light.png')}
            srcSet={`${getRelativePath(
              '/static/logo/logo-0-x-1-light@2x.png',
            )} 2x, ${getRelativePath(
              '/static/logo/logo-0-x-1-light@3x.png',
            )} 3x`}
          />
          <p>0x1Certificate</p>
        </LogoWrapper>
      </Link>
      <SectionWrapper>
        <p onClick={() => scrollToID('section-service')}>區塊鏈成就履歷</p>
        <p onClick={() => scrollToID('section-technology')}>技術白皮書</p>
        <p onClick={() => scrollToID('section-collaborations')}>合作機構</p>
        <p onClick={() => scrollToID('section-examples')}>案例展示</p>
        <p onClick={() => scrollToID('section-contact')}>合作洽談</p>
        <StyledButton onClick={() => alert('尚未開啟')}>體驗 →</StyledButton>
      </SectionWrapper>
    </Wrapper>
  );
};

export default Header;
