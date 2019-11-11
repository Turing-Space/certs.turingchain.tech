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
  background-color: #ffffff;
  color: ${p => p.theme.colors.primary};
  border: 1px solid ${p => p.theme.colors.primary};
  margin-bottom: 12px;
  font-size: 18px;
  max-width: 160px;
  padding: 0.8em;
  &:hover {
    background-color: ${p => p.theme.colors.primary};
    color: #ffffff;
  }
`;

const InfoWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 110px 40px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  > span {
    color: ${p => p.theme.colors.primary};
    font-size: 14px;
    cursor: pointer;
  }
  > p {
    color: #424242;
    letter-spacing: 1.7px;
    display: block;
    text-align: center;
    max-width: 195px;
    line-height: 1.38;
    width: 100%;
    font-size: 4vmin;
    margin-bottom: 40px;
    > span {
      color: ${p => p.theme.colors.primary};
    }
    ${media('desktop')} {
      font-size: 16px;
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
          <p>註冊驗證信已寄出，
            請至 <span>Jeffhu@gmail.com</span>
            點擊連結完成驗證。</p>
          <StyledButton disabled={loading} onClick={onRegister}>
            { loading ? <Loading /> : '重寄驗證信' }
          </StyledButton>
          <span>更正信箱?</span>
        </InfoWrapper>
      </RegisterWrapper>
    </StyledSection>
  );
};

export default Register;
