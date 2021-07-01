import { FC } from 'react';
import styled from 'styled-components';
import { TMyCertsRenderComponentProps } from '@/components/Cert/MyCerts';
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/utils/constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: ${p => p.theme.colors.darkGrey};
  }
`;

const NUllImg = styled.img`
  height: 25vh;
`;

const CertsNull: FC<TMyCertsRenderComponentProps> = () => {
  const { t } = useTranslation(i18nNamespace.Issuer);
  return (
    <Wrapper>
      <NUllImg src={require('../../static/bg/bg-certs-empty.svg')} />
      <p>{t('Issue.notice.0')}</p>
      <p>{t('Issue.notice.1')}</p>
    </Wrapper>
  );
};

export default CertsNull;
