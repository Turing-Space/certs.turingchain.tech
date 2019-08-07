import { FC } from 'react';
import styled from 'styled-components';
import Button from '@/components/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: ${p => p.theme.colors.darkGrey};
  }
`;

const NUllImg = styled.img`
  width: 400px;
  height: 400px;
`;

const StyledButton = styled(Button)`
  margin: 1em 0;
`;

const CertsNull: FC = () => {
  return (
    <Wrapper>
      <NUllImg src={require('../../static/bg/bg-certs-empty.svg')} />
      <p>Oops！你的證書還沒有受到保障</p>
      <p>讓我們開始吧！</p>
      <StyledButton mode="white">新增證書</StyledButton>
    </Wrapper>
  );
};

export default CertsNull;
