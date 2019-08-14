import { FC } from 'react';
import Button from '@/components/Button';
import { TMyCertsRenderComponentProps } from '@/components/Cert/MyCerts';

const MyCertsTitleRight: FC<TMyCertsRenderComponentProps> = ({ openModal }) => {
  return (
    <Button mode="white" onClick={openModal}>
      新增證書
    </Button>
  );
};

export default MyCertsTitleRight;
