import { FC } from 'react';
import styled from 'styled-components';
import { media } from '@/utils/theme';
import RedLogo from '@/static/logo/logo-new.svg';
import PrimaryWhiteLogo from '@/static/logo/logo-new-white.svg';
import { i18nNamespace } from '@/constants';
import { useTranslation } from 'react-i18next';

const LogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  > p {
    font-size: ${p => p.theme.fontSize.bigger};
    font-weight: 600;
    word-break: keep-all;
  }

  ${media('desktop')} {
    > p {
      font-size: ${p => p.theme.fontSize.bigger};
      word-break: keep-all;
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
  const { t } = useTranslation(i18nNamespace.Home);

  return (
    <LogoWrapper onClick={onClick}>
      <Logo src={modeSrcMap[mode] as any} />
      <p>{t('header.title')}</p>
    </LogoWrapper>
  );
};

export default HeaderLogo;
