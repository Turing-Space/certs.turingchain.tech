import { FC } from 'react';
import Button from '@/components/Button';
import { TMyCertsRenderComponentProps } from '@/components/Cert/MyCerts';
import { Router } from '@/i18n';

const MyCertsTitleRight: FC<TMyCertsRenderComponentProps> = () => {
  return (
    <Button mode="white" onClick={() => Router.push('/issuer/issue-cert')}>
      發行證書
    </Button>
  );
};

export default MyCertsTitleRight;
