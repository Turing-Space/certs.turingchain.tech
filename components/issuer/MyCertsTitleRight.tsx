import { FC } from 'react';
import Button from '@/components/Button';
import { TMyCertsRenderComponentProps } from '@/components/Cert/MyCerts';
import { Router } from '@/i18n';
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/constants';

const MyCertsTitleRight: FC<TMyCertsRenderComponentProps> = () => {
  const { t } = useTranslation(i18nNamespace.Issuer);
  return (
    <Button
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
      {t('Issue.issue')}
    </Button>
  );
};

export default MyCertsTitleRight;
