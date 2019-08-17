import { FC, useState } from 'react';
import { useRouter } from 'next/router';

import { i18nNamespace, CertTemplate } from '@/constants';
import ProductLayout from '@/layouts/Product';
import withAuth from '@/hoc/withAuth';
import IssuePage1 from '@/components/issuer/IssuePage1';
import IssuePage2 from '@/components/issuer/IssuePage2';

type TFormValue = {
  type: string;
  template: CertTemplate;
  csv: null | File;
};

export type TRenderComponentProps = {
  value: TFormValue;
  setValue: React.Dispatch<React.SetStateAction<TFormValue>>;
};

const IssueCertPage: FC = () => {
  const { query } = useRouter<{ page: '1' | '2' }>();
  const [formValue, setFormValue] = useState<TFormValue>({
    type: '',
    template: CertTemplate.Activity,
    csv: null,
  });
  const Component = query!.page === '1' ? IssuePage1 : IssuePage2;
  
  return (
    <ProductLayout routePath="/issuer">
      <Component value={formValue} setValue={setFormValue}/>
    </ProductLayout>
  );
};

export default withAuth('issuer', async () => {
  return {
    namespacesRequired: [i18nNamespace.Common, i18nNamespace.Issuer],
  };
})(IssueCertPage);
