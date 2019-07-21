import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { getRelativePath, scrollToID } from '@/utils';

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
  height: 67%;
  margin-right: 1em;
`;

const HeaderLogo: FC = () => {
  return (
    <Link href="/">
      <LogoWrapper onClick={() => scrollToID('section-home')}>
        <Logo
          src={getRelativePath('/static/logo/logo-tc-light.png')}
          srcSet={`${getRelativePath(
            '/static/logo/logo-tc-light@2x.png',
          )} 2x, ${getRelativePath('/static/logo/logo-tc-light@3x.png')} 3x`}
        />
        <p className="en">Turing Certs</p>
      </LogoWrapper>
    </Link>
  );
};

export default HeaderLogo;
