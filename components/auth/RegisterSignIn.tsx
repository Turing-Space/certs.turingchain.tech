import { useState, useCallback, FC, KeyboardEvent } from 'react';
import styled from 'styled-components';
// import qs from 'qs';
import Section from '@/components/Section';
import { media } from '@/utils/theme';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
import Loading from '../Loading';
import { RegisterPageState } from './Register';
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/constants';

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
  width: 50%;
`;

const StyledButton = styled(Button)`
  padding: 0.7em 1em;
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
    letter-spacing: 1.7px;
    display: block;
    max-width: 397px;
    width: 100%;
    margin-bottom: 64px;
  }

  ${media('desktop')} {
    margin-bottom: 100px;
  }

  ${media('phone')} {
    margin-bottom: 0px;
  }
`;

const ErrorMessage = styled.p`
  font-size: ${p => p.theme.fontSize.smaller};
  color: ${p => p.theme.colors.primary};
  font-weight: 300;
`;

type TProps = {
  userName: string;
  onChangePageState: (route: RegisterPageState) => void;
};

const SignIn: FC<TProps> = ({ userName, onChangePageState }) => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [account, setAccount] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checkPassword, setCheckPassword] = useState<string>('');
  const { t } = useTranslation(i18nNamespace.Register);

  const onRegister = async () => {
    const validate = () => {
      if (!account || !password) {
        setError(t('Error.empty'));
        return false;
      } else if (password !== checkPassword) {
        setError(t('Error.notMatch'));
        return false;
      }
      return true;
    };

    if (validate()) {
      setLoading(true);

      // call api
      const userInfo = {
        name: userName,
        account,
        password,
      };
      // alert(JSON.stringify(userInfo));

      // if error
      // setError(err.message);
      setLoading(false);
    }
  };

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
          <p style={{ fontSize: '24px' }}>{t('Set.ask')}</p>
          <StyledTextInput
            placeholder="xxx@gmail.com"
            value={account}
            onChange={setAccount}
            label={t('Set.acc')}
            input={{
              type: 'text',
              onKeyDown,
            }}
          />
          <StyledTextInput
            placeholder="awesomepwd"
            value={password}
            onChange={setPassword}
            label={t('Set.pwd')}
            input={{
              type: 'password',
              onKeyDown,
            }}
          />
          <StyledTextInput
            placeholder="awesomepwd"
            value={checkPassword}
            onChange={setCheckPassword}
            label={t('Set.enterAgain')}
            input={{
              type: 'password',
              onKeyDown,
            }}
          />
          <ErrorMessage>{error}</ErrorMessage>
          <StyledButton disabled={loading} onClick={onRegister}>
            {loading ? <Loading /> : t('Set.next')}
          </StyledButton>
        </InfoWrapper>
      </RegisterWrapper>
    </StyledSection>
  );
};

export default SignIn;
