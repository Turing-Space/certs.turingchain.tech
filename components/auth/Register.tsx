import { useState, FC } from 'react';
import styled from 'styled-components';
import Section from '@/components/Section';
import { media } from '@/utils/theme';

import RegisterInputName from '@/components/auth/RegisterInputName';
import RegisterSignIn from '@/components/auth/RegisterSignIn';
import FinshPage from '@/components/auth/FinshPage';
// import RegisterEmail from '@/components/auth/RegisterEmail';
// import RegisterPhone from '@/components/auth/RegisterPhone';
// import RegisterEmailVerify from '@/components/auth/RegisterEmailVerify';
// import RegisterPhoneVerify from '@/components/auth/RegisterPhoneVerify';
// ----all pageState component----- //


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

const routes: any = {
  // ['RegisterEmail']: RegisterEmail,
  // ['RegisterPhone']: RegisterPhone,
  // ['RegisterEmailVerify']: RegisterEmailVerify,
  // ['RegisterPhoneVerify']: RegisterPhoneVerify,
  ['RegisterInputName']: RegisterInputName,
  ['Signin']: RegisterSignIn,
  ['FinshPage']: FinshPage,
}

const Register: FC = () => {
  const [pageState,setPageState] = useState<string>('RegisterInputName');
  // set PageState
  const PageComponent = routes[pageState];
  // use pageComponent in the routes
  return (
    <StyledSection width="100vw" justifyContent="flex-start" row fullscreen>
      <RegisterWrapper>
          <PageComponent onChange={setPageState}></PageComponent>
      </RegisterWrapper>
    </StyledSection>
  );
};

export default Register;
