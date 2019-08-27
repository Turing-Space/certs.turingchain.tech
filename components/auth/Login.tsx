import { useState, useCallback, FC, KeyboardEvent, useContext } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import qs from 'qs';

import Section from '@/components/Section';
import { media } from '@/utils/theme';
import { getRelativePath } from '@/utils';
import H1 from '@/components/H1';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
import { emailValidator } from '@/utils/validator';
import { runtimeEnv } from '@/environment';
import { Router } from '@/i18n';
import { UserContext } from '@/contexts/user';
import { getUsers } from '@/utils/api';
import { preparedUser } from '@/utils/user';
import notify from '@/utils/notify';
import { CertsContext } from '@/contexts/certs';

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

const Login: FC = () => {
  const { query } = useRouter();
  const { updateUser } = useContext(UserContext);
  const { updateCerts } = useContext(CertsContext);
  const [account, setAccount] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const onLogin = useCallback(async () => {
    const validate = () => {
      if (!account || !password) {
        setError('帳號密碼不可為空');
        return false;
      } else if (!emailValidator(account)) {
        setError('信箱有誤');
        return false;
      }
      return true;
    };

    setLoading(true);

    const mode =
      query.mode || qs.parse(location.search, { ignoreQueryPrefix: true }).mode;

    // TODO: connect firebase login api
    if (mode === 'issuer') {
      const fakeInfo = runtimeEnv.MVP;
      if (account === fakeInfo.account && password === fakeInfo.password) {
        const [err, users] = await getUsers({ displayName: 'testIssuer' });
        if (!users) {
          notify.error({ msg: err });
        } else if (!users[0].isIssuer) {
          notify.error({ msg: '此帳號並不是發證機關帳號，請確認使用帳號' });
        } else {
          const { user, certs } = preparedUser(users[0]);
          updateUser({
            ...user,
            loginMode: 'issuer',
          });
          updateCerts(certs);
          Router.push('/issuer');
        }
      } else {
        setError('帳號密碼有誤');
      }
    } else if (validate()) {
      setError('系統尚未開啟，請耐心等待，謝謝！');
    }

    setLoading(false);
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
          placeholder="輸入帳號"
          value={account}
          onChange={setAccount}
        />
        <StyledTextInput
          placeholder="輸入密碼"
          value={password}
          onChange={setPassword}
          input={{
            type: 'password',
            onKeyDown,
          }}
        />
        <ErrorMessage>{error}</ErrorMessage>
        <StyledButton disabled={loading} onClick={onLogin}>
          {loading ? <Loading /> : '登入'}
        </StyledButton>
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
