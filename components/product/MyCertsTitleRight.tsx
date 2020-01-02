import { FC } from 'react';
import Button from '@/components/Button';
import { TMyCertsRenderComponentProps } from '@/components/Cert/MyCerts';
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/constants';

const MyCertsTitleRight: FC<TMyCertsRenderComponentProps> = ({ openModal }) => {
  const { t } = useTranslation(i18nNamespace.Product);

  return (
    <Button mode="white" onClick={openModal}>
      {t('addCert')}
    </Button>
  );
};

export default MyCertsTitleRight;
