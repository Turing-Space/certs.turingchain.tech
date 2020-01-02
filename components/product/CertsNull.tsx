import { FC } from 'react';
import styled from 'styled-components';
import Button from '@/components/Button';
import { TMyCertsRenderComponentProps } from '@/components/Cert/MyCerts';
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/constants';

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

const CertsNull: FC<TMyCertsRenderComponentProps> = ({ openModal }) => {
  const { t } = useTranslation(i18nNamespace.Product);

  return (
    <Wrapper>
      <NUllImg src={require('../../static/bg/bg-certs-empty.svg')} />
      <p>{t('Null.notice0')}</p>
      <p>{t('Null.notice1')}</p>
      <StyledButton mode="white" onClick={openModal}>
        {t('Null.add')}
      </StyledButton>
    </Wrapper>
  );
};

export default CertsNull;
