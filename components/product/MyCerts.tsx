import { FC } from 'react';
import styled from 'styled-components';
import Title from './Title';

const Wrapper = styled.div`
  margin-top: 8%;
`;

const MyCerts: FC = () => {
  return (
    <Wrapper>
      <Title>我的證書</Title>
      <div>123</div>
    </Wrapper>
  );
};

export default MyCerts;
