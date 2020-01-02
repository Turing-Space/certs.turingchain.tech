import { useState, useCallback, FC, KeyboardEvent, useContext } from 'react';
import styled from 'styled-components';

import Section from '@/components/Section';
import { media } from '@/utils/theme';
import { getRelativePath } from '@/utils';
import H1 from '@/components/H1';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
import { emailValidator } from '@/utils/validator';
import { Router } from '@/i18n';
import { UserContext } from '@/contexts/user';
import { signIn } from '@/utils/api';
import { preparedUser } from '@/utils/user';
import notify from '@/utils/notify';
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/constants';

import Loading from '../Loading';

const StyledSection = styled(Section)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  > img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

const MobileWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: white;
  ${media('desktop')} {
    width: 33%;
  }
`;

const StyledTextInput = styled(TextInput)`
  && {
    width: 50%;
    margin: 0.5em;
  }
`;

const StyledButton = styled(Button)`
  padding: 0.7em 1em;
  margin-top: 2em;
`;

const InfoWrapper = styled.div`
  display: none;
  ${media('desktop')} {
    color: white;
    position: relative;
    display: block;
    width: 67%;
    height: 100%;
  }

  > ${H1} {
    font-size: 3rem;
    line-height: 1.33;
    letter-spacing: 5px;
    margin-left: 10%;
    margin-top: 20%;
  }

  > p {
    position: absolute;
    bottom: 5vh;
    left: 10%;
    font-weight: 500;
    font-size: ${p => p.theme.fontSize.bigger};
    line-height: 5.3;
    letter-spacing: 1.25px;
  }
`;

const Logo = styled.img`
  height: 20vh;
  margin-bottom: 7vh;
`;

const ErrorMessage = styled.p`
  font-size: ${p => p.theme.fontSize.smaller};
  color: ${p => p.theme.colors.primary};
`;

const StyledLink = styled.span`
  font-family: ${p => p.theme.fontFamily.SFProText};
  font-weight: 500;
  color: ${p => p.theme.colors.primary};
  margin-left: 2em;
  margin-bottom: 2em;
  cursor: pointer;
  
  position:absolute;
  bottom:0;
  left:0;
`

const Login: FC = () => {
  const { updateUser } = useContext(UserContext);
  const [account, setAccount] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation(i18nNamespace.Common);

  // SignIn Button
  const onRegister = () => {
    Router.push('/auth/register');
  };

  const onLogin = useCallback(async () => {
    const validate = () => {
      if (!account || !password) {
        setError(t('auth.error.empty'));
        return false;
      } else if (!emailValidator(account)) {
        setError(t('auth.error.email'));
        return false;
      }
      return true;
    };

    if (validate()) {
      setLoading(true);
      const [err, user] = await signIn({
        userInfo: {
          email: account,
          password,
        },
      });
      if (!user) {
        notify.error({ msg: err || t('auth.error.noAcc') });
      }
      // else if (mode === 'issuer' && !user.isIssuer) {
      //   notify.error({ msg: '此帳號並不是發證機關帳號，請確認使用帳號' });
      // } 
      else {
        updateUser({
          ...preparedUser(user)
        });
        Router.push(user.isIssuer == 'true' ? '/issuer' : '/product');
      }
      setLoading(false);
    }
  }, [account, password]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      switch (e.keyCode) {
        // press enter
        case 13: {
          onLogin();
          break;
        }
      }
    },
    [onLogin],
  );

  return (
    <StyledSection width="100vw" justifyContent="flex-start" row fullscreen>
      <img
        src={getRelativePath('/static/bg/login-bg.jpg')}
        srcSet={`${getRelativePath(
          '/static/bg/login-bg@2x.jpg',
        )} 2x, ${getRelativePath('/static/bg/login-bg@3x.png')} 3x`}
      />
      <MobileWrapper>
        <Logo src={require('../../static/logo/logo-new.svg')} />
        <StyledTextInput
          placeholder={t('auth.enterAcc')}
          value={account}
          onChange={setAccount}
        />
        <StyledTextInput
          placeholder={t('auth.enterPwd')}
          value={password}
          onChange={setPassword}
          input={{
            type: 'password',
            onKeyDown,
          }}
        />
        <ErrorMessage>{error}</ErrorMessage>
        <StyledButton disabled={loading} onClick={onLogin}>
          {loading ? <Loading /> : t('auth.login')}
        </StyledButton>
        <StyledButton disabled={loading} onClick={onRegister}>
          {loading ? <Loading /> : t('auth.register')}
        </StyledButton>
        <a href='https://certs.turingchain.tech'>
          <StyledLink>
            &lt;&lt; {t('backToHome')}
          </StyledLink>
        </a>
      </MobileWrapper>
      <InfoWrapper>
        <H1>
          BLOCKCHAIN
          <br />
          ACHIEVEMENT
          <br />
          RESUME
        </H1>
        <p>TURING CHAIN LIMITED</p>
      </InfoWrapper>
    </StyledSection>
  );
};

export default Login;
