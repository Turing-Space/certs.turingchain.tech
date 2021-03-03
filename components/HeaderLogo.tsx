import { FC } from 'react';
import styled from 'styled-components';
import { media } from '@/utils/theme';
import RedLogo from '@/static/logo/logo-new.svg';
import PrimaryWhiteLogo from '@/static/logo/logo-new-white.svg';

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
  height: 97%;
  margin-right: 0.5em;

  ${media('desktop')} {
    height: 90%;
  }
`;

const modeSrcMap = {
  dark: RedLogo,
  primary: PrimaryWhiteLogo,
};

const HeaderLogo: FC<{ mode?: 'primary' | 'dark'; onClick: () => void }> = ({
  mode = 'dark',
  onClick,
}) => {
  return (
    <LogoWrapper onClick={onClick}>
      <Logo src={modeSrcMap[mode] as any} />
      <p className="en">TuringCerts</p>
    </LogoWrapper>
  );
};

export default HeaderLogo;
