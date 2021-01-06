import { useState, FC } from 'react';
import styled from 'styled-components';
import Section from '@/components/Section';
import { media } from '@/utils/theme';
// page component
import RegisterInputName from '@/components/auth/RegisterInputName';

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
  height: 100vh;
  ${media('desktop')} {
    width: 100%;
  }
`;

// page component enum
export enum RegisterPageState {
  InputName = 'REGISTER_INPUT_NAME',
}

// page component routes
const routes: any = {
  [RegisterPageState.InputName]: RegisterInputName,
};

const Register: FC = () => {
  // set pageState
  const [pageState, setPageState] = useState<RegisterPageState>(
    RegisterPageState.InputName,
  );
  // set userInfo
  const [userName, setUserName] = useState<string>('');
  // use pageComponent in the routes
  const PageComponent = routes[pageState];

  return (
    <StyledSection width="100vw" justifyContent="flex-start" row fullscreen>
      <RegisterWrapper>
        <PageComponent
          userName={userName}
          onChangeUserName={setUserName}
          onChangePageState={setPageState}
        />
      </RegisterWrapper>
    </StyledSection>
  );
};

export default Register;
