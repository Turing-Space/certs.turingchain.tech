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
  height: 67.5%;
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
            src={getRelativePath('/static/logo/logo-tc-light.png')}
            srcSet={`${getRelativePath(
              '/static/logo/logo-tc-light@2x.png',
            )} 2x, ${getRelativePath('/static/logo/logo-tc-light@3x.png')} 3x`}
          />
          <p>TURING CHAIN</p>
        </LogoWrapper>
      </Link>
      <SectionWrapper>
        <p onClick={() => scrollToID('section-service')}>Service</p>
        <p onClick={() => scrollToID('section-team')}>Team</p>
        <p onClick={() => scrollToID('section-collaborations')}>
          Collaborations
        </p>
        <StyledButton onClick={() => alert('尚未開啟')}>Start</StyledButton>
      </SectionWrapper>
    </Wrapper>
  );
};

export default Header;
