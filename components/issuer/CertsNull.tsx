import { FC } from 'react';
import styled from 'styled-components';
import Button from '@/components/Button';
import { TMyCertsRenderComponentProps } from '@/components/Cert/MyCerts';
import { Router } from '@/i18n';

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

const CertsNull: FC<TMyCertsRenderComponentProps> = () => {
  return (
    <Wrapper>
      <NUllImg src={require('../../static/bg/bg-certs-empty.svg')} />
      <p>你尚未發行證書，請先完成基本資料填寫，</p>
      <p>即可開始發證！</p>
      <StyledButton
        mode="white"
        onClick={() =>
          Router.push(
            {
              pathname: '/issuer/issue-cert/[page]',
              query: {
                page: 1,
              },
            },
            '/issuer/issue-cert/1',
          )
        }
      >
        發行證書
      </StyledButton>
    </Wrapper>
  );
};

export default CertsNull;
