import { useState, useCallback, FC, KeyboardEvent } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import qs from 'qs';
import Section from '@/components/Section';
import { media } from '@/utils/theme';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
// import { UserContext } from '@/contexts/user';
// import { signIn } from '@/utils/api';
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

const RegisterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${media('desktop')} {
    width: 100%;
  }
`;

const StyledTextInput = styled(TextInput)`
  && {
    width: 50%;
  }
`;

const StyledButton = styled(Button)`
  padding: ;
  margin-top: 2em;
`;

const InfoWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 40px 0px 72px 40px;
  background-color: #ffffff;
  font-weight: bold;
  > p {
    color: #a80100;
    font-size: 4vmin;
    letter-spacing: 1.7px;
    display: block;
    max-width: 397px;
    width: 100%;
    margin-bottom: 64px;
    ${media('desktop')} {
      font-size: 24px;
    }
  }
`;

// const ErrorMessage = styled.p`
//   font-size: ${p => p.theme.fontSize.smaller};
//   color: ${p => p.theme.colors.primary};
// `;

type TProps = {
  setPageState: string;
  onChange: (e: any) => void;
}

const SignIn: FC<TProps> = (setPageState) => {
  const { query } = useRouter();
  // const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [account, setAccount] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checkPassword, setCheckPassword] = useState<string>('');

  

  const onSignin = useCallback(async () => {
    setPageState.onChange('FinshPage')
    const validate = () => {
       // call API
      if (!account || !password) {
        // setError('帳號密碼不可為空');
        return false
      } else if (!checkPassword) {
        // setError('再次確認密碼');
        return false;
      } else {
        // setPageState.onChange('FinshPage')
        return true;
      }
    }
    setLoading(true);

    const mode =
      query.mode || qs.parse(location.search, { ignoreQueryPrefix: true }).mode;

    setLoading(false);
  }, [account, password]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      switch (e.keyCode) {
        // press enter
        case 13: {
          onSignin();
          break;
        }
      }
    },
    [onSignin],
  );

  return (
    <StyledSection width="100vw" justifyContent="flex-start" row fullscreen>
      <RegisterWrapper>
        <InfoWrapper>
          <p>接下來，設定一組帳號與密碼吧！</p>
          <StyledTextInput 
          placeholder="登入帳號"
          value={account}
          onChange={setAccount}
          label="登入帳號"
          input={{
            type: 'text',
            onKeyDown,
          }}/>
          <StyledTextInput 
          placeholder="登入密碼"
          value={password}
          onChange={setPassword}
          label="登入密碼"
          input={{
            type: 'text',
            onKeyDown,
          }}/>
          <StyledTextInput 
          placeholder="再輸入一次密碼"
          value={checkPassword}
          onChange={setCheckPassword}
          label="再輸入一次密碼"
          input={{
            type: 'text',
            onKeyDown,
          }}/>
          <StyledButton disabled={loading} onClick={onSignin}>
            { loading ? <Loading /> : '下一步' }
          </StyledButton>
        </InfoWrapper>
      </RegisterWrapper>
    </StyledSection>
  );
};

export default SignIn;
