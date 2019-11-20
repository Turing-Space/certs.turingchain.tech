import { useState, FC } from 'react';
import styled from 'styled-components';
import Section from '@/components/Section';
import { media } from '@/utils/theme';
// page component
import RegisterInputName from '@/components/auth/RegisterInputName';
import RegisterSignIn from '@/components/auth/RegisterSignIn';
import FinishPage from '@/components/auth/FinishPage';

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

// page component enum
export enum RegisterPageState {
  RegisterInputName = 'REGISTER_INPUT_NAME',
  RegisterSignIn = 'REGISTER_SIGNIN',
  FinishPage = 'FINISHPAGE'
}

// page component routes
const routes: any = {
  [RegisterPageState.RegisterInputName]: RegisterInputName,
  [RegisterPageState.RegisterSignIn]: RegisterSignIn,
  [RegisterPageState.FinishPage]: FinishPage,
}

const Register: FC = () => {
  // set pageState
  const [pageState,setPageState] = useState<RegisterPageState>(RegisterPageState.RegisterInputName);
  // set userInfo
  const [userName, setUserName] = useState<string>('');
  // use pageComponent in the routes
  const PageComponent = routes[pageState];

  return (
    <StyledSection width="100vw" justifyContent="flex-start" row fullscreen>
      <RegisterWrapper>
          <PageComponent onChangeUserName={setUserName} initUserName={userName} onChangePageState={setPageState}/>
      </RegisterWrapper>
    </StyledSection>
  );
};

export default Register;
