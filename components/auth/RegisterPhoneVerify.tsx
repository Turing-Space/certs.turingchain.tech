import { useState, useCallback, FC, KeyboardEvent, useContext } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import qs from 'qs';

import Section from '@/components/Section';
import { media } from '@/utils/theme';
import { getRelativePath } from '@/utils';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
import { emailValidator } from '@/utils/validator';
import { Router } from '@/i18n';
import { UserContext } from '@/contexts/user';
import { signIn } from '@/utils/api';
import { preparedUser } from '@/utils/user';
import notify from '@/utils/notify';
import { CertsContext } from '@/contexts/certs';
import RegisterEmailVerify from '@/components/auth/RegisterEmailVerify';

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
    margin-bottom: 60px;
  }
`;

const StyledButton = styled(Button)`
  padding: ;
  margin-top: 2em;
`;

const InfoWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 40px 40px 72px 40px;
  background-color: #ffffff;
  font-weight: bold;
  > p {
    color: #a80100;
    font-size: 4vmin;
    letter-spacing: 1.7px;
    display: block;
    max-width: 397px;
    width: 100%;
    margin-bottom: 100px;
    ${media('desktop')} {
      font-size: 24px;
    }
  }
`;

const ErrorMessage = styled.p`
  font-size: ${p => p.theme.fontSize.smaller};
  color: ${p => p.theme.colors.primary};
`;

const Register: FC = () => {
  const { query } = useRouter();
  const { updateUser } = useContext(UserContext);
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);


  const [emailVerify, setEmailVerify] = useState<boolean>(false);
  const [inputName, setInputName] = useState<boolean>(false);
  const [nameVerify, setNameVerify] = useState<boolean>(false);
  const [phone, setPhone] = useState<boolean>(false);
  const [phoneVerify, setPhoneVerify] = useState<boolean>(false);
  const [signin, setSignin] = useState<boolean>(false);
  const [finsh, setFinish] = useState<boolean>(false);


  const onRegister = useCallback(async () => {
    const validate = () => {};
    
   







    setLoading(true);
    const mode =
      query.mode || qs.parse(location.search, { ignoreQueryPrefix: true }).mode;
    setLoading(false);
  }, []);

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      switch (e.keyCode) {
        // press enter
        case 13: {
          onRegister();
          break;
        }
      }
    },
    [onRegister],
  );

  return (
    <StyledSection width="100vw" justifyContent="flex-start" row fullscreen>
      <RegisterWrapper>
        <InfoWrapper>
          <p>你好，請輸入收到的簡訊驗證碼。</p>
          <StyledTextInput 
          placeholder="請輸入簡訊驗證碼"
          value={email}
          onChange={setEmail}
          input={{
            type: 'email',
            onKeyDown,
          }}/>
          <StyledButton disabled={loading} onClick={onRegister}>
            { loading ? <Loading /> : '下一步' }
          </StyledButton>
        </InfoWrapper>
      </RegisterWrapper>
    </StyledSection>
  );
};

export default Register;
