import { FC } from 'react';
import Button from '@/components/Button';
import { TMyCertsRenderComponentProps } from '@/components/Cert/MyCerts';
import { Router } from '@/i18n';

const MyCertsTitleRight: FC<TMyCertsRenderComponentProps> = () => {
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
      發行證書
    </Button>
  );
};

export default MyCertsTitleRight;
