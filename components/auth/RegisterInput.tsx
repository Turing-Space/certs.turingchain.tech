import { useState, useCallback, FC, KeyboardEvent, useContext } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import qs from 'qs';

import Section from '@/components/Section';
import { media } from '@/utils/theme';
// import { getRelativePath } from '@/utils';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
// import { Router } from '@/i18n';
import { UserContext } from '@/contexts/user';
// import { signIn } from '@/utils/api';
// import { preparedUser } from '@/utils/user';
// import notify from '@/utils/notify';
// import { CertsContext } from '@/contexts/certs';


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

type TProps = {
  setPageState: string;
  onChange: (e: any) => void;
}


const InputName: FC<TProps> = (setPageState) => {
  const { query } = useRouter();
  const { updateUser } = useContext(UserContext);
  const [name, setName] = useState<string>('');
  const [user, setUser] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const onInputName = useCallback(async () => {
    const validate = () => {}

     // call API
    const result = 'fakeUser';
    if (result) {
      // handle success
      setUser(result);
      setPageState.onChange('Signin');
    } else {
      // handle error
      return false
      setError('姓名不得為空')
    }

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
          onInputName();
          break;
        }
      }
    },
    [onInputName],
  );

  return (
    <StyledSection width="100vw" justifyContent="flex-start" row fullscreen>
      <RegisterWrapper>
        <InfoWrapper>
          <p>你好，請問你的真實姓名是？</p>
          <StyledTextInput 
          placeholder="請輸入真實姓名"
          value={name}
          onChange={setName}
          input={{
            type: 'name',
            onKeyDown,
          }}/>
          <StyledButton disabled={loading} onClick={onInputName}>
            { loading ? <Loading /> : '下一步' }
          </StyledButton>
        </InfoWrapper>
      </RegisterWrapper>
    </StyledSection>
  );
};

export default InputName;
