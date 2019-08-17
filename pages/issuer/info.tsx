import { FC } from 'react';

import { i18nNamespace } from '@/constants';
import ProductLayout from '@/layouts/Product';
import withAuth from '@/hoc/withAuth';

const InfoPage: FC = () => {
  return <ProductLayout>info</ProductLayout>;
};

export default withAuth('issuer', async () => {
  return {
    namespacesRequired: [i18nNamespace.Common, i18nNamespace.Issuer],
  };
})(InfoPage);
