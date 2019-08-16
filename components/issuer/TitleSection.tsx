import { FC } from 'react';
import styled from 'styled-components';
import Title from '../Cert/Title';

const Wrapper = styled.section`
  margin-bottom: 4em;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 1em;
`;

const IssueTitleSection: FC<{ title: string }> = ({ title, children }) => {
  return (
    <Wrapper>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </Wrapper>
  );
};

export default IssueTitleSection;
