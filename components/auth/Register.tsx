import { useState, useCallback, FC, KeyboardEvent, useContext } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import qs from 'qs';

import Section from '@/components/Section';
import { media } from '@/utils/theme';
// import { getRelativePath } from '@/utils';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
// import { emailValidator } from '@/utils/validator';
// import { Router } from '@/i18n';
import { UserContext } from '@/contexts/user';
// import { signIn } from '@/utils/api';
// import { preparedUser } from '@/utils/user';
// import notify from '@/utils/notify';
// import { CertsContext } from '@/contexts/certs';


import RegisterEmail from '@/components/auth/RegisterEmail';
import RegisterPhone from '@/components/auth/RegisterPhone';
import RegisterEmailVerify from '@/components/auth/RegisterEmailVerify';
import RegisterPhoneVerify from '@/components/auth/RegisterPhoneVerify';
import RegisterInput from '@/components/auth/RegisterInput';
import Signin from '@/components/auth/Signin';
import FinshPage from '@/components/auth/FinshPage';


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
// const Logo = styled.img`
//   width: 21vw;
//   margin-top: 2%;
// `;
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

// const StyledTextInput = styled(TextInput)`
//   && {
//     width: 50%;
//     margin-bottom: 60px;
//   }
// `;

// const StyledButton = styled(Button)`
//   padding: 20px 0;
//   font-size: 18px;
// `;

// const InfoWrapper = styled.div`
//   max-width: 650px;
//   width: 100%;
//   padding: 40px 40px 72px 40px;
//   background-color: #ffffff;
//   border-radius: 10px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   > .textBox {
//     color: #424242;
//     font-size: 4vmin;
//     text-align: center;
//     line-height: 1.3;
//     letter-spacing: 1.3px;
//     display: block;
//     max-width: 310px;
//     width: 100%;
//     margin: 35px 0 40px 0;
//     p {
//       > span {
//         color: ${p => p.theme.colors.primary};
//       }
//     }
//     ${media('desktop')} {
//       font-size: 24px;
//     }
//   }
// `;

// const ErrorMessage = styled.p`
//   font-size: ${p => p.theme.fontSize.smaller};
//   color: ${p => p.theme.colors.primary};
// `;

const routes: any = {
  // ['RegisterEmail']: RegisterEmail,
  // ['RegisterPhone']: RegisterPhone,
  // ['RegisterEmailVerify']: RegisterEmailVerify,
  // ['RegisterPhoneVerify']: RegisterPhoneVerify,
  ['RegisterInput']: RegisterInput,
  ['Signin']: Signin,
  ['FinshPage']: FinshPage,
}

const Register: FC = () => {
  const { query } = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  // const { updateUser } = useContext(UserContext);
  // const [email, setEmail] = useState<string>('');
  // const [error, setError] = useState<string>('');
  // const [account,setAccount] = useState<string>('');
  // const [password,setPassword] = useState<string>('');
  // const [checkPassword,setCheckPassword] = useState<string>('');

  const [pageState,setPageState] = useState<string>('RegisterInput');
  // PageState
  const PageComponent = routes[pageState];
  // use pageComponent in the routes

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
          <PageComponent onChange={setPageState}></PageComponent>
      </RegisterWrapper>
    </StyledSection>
  );
};

export default Register;
