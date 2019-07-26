import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { getRelativePath, scrollToID } from '@/utils';
import { media } from '@/utils/theme';

const LogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  > p {
    font-size: ${p => p.theme.fontSize.bigger};
    font-weight: 500;
  }

  ${media('desktop')} {
    > p {
      font-size: 1em;
    }
  }
`;

const Logo = styled.img`
  height: 80%;
  margin-right: 1em;

  ${media('desktop')} {
    height: 67%;
  }
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
        <p className="en">TuringCerts</p>
      </LogoWrapper>
    </Link>
  );
};

export default HeaderLogo;
