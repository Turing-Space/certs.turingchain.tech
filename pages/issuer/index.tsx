import { useEffect, FC } from 'react';

import { i18nNamespace } from '@/constants';
import ProductLayout from '@/layouts/Product';
import AboutMe from '@/components/issuer/AboutMe';
import MyCertsTitleRight from '@/components/issuer/MyCertsTitleRight';
import withAuth from '@/hoc/withAuth';
import { getCerts } from '@/utils/api';
import MyCerts from '@/components/Cert/MyCerts';
import CertsNull from '@/components/issuer/CertsNull';

const IssuerPage: FC = () => {
  useEffect(() => {
    const api = async () => {
      const a = await getCerts({ issuer: 'betty' });
      console.log(a);
    };
    api();
  }, []);
  return (
    <ProductLayout>
      <AboutMe />
      <MyCerts
        title="已發行證書"
        TitleRight={MyCertsTitleRight}
        Empty={CertsNull}
      />
    </ProductLayout>
  );
};

export default withAuth('issuer', async () => {
  return {
    namespacesRequired: [i18nNamespace.Common, i18nNamespace.Issuer],
  };
})(IssuerPage);
