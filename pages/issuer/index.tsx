import { useEffect, FC, useContext } from 'react';

import { i18nNamespace } from '@/constants';
import ProductLayout from '@/layouts/Product';
import AboutMe from '@/components/issuer/AboutMe';
import MyCertsTitleRight from '@/components/issuer/MyCertsTitleRight';
import MyCerts from '@/components/Cert/MyCerts';
import CertsNull from '@/components/issuer/CertsNull';
import { CertsContext } from '@/contexts/certs';
import { getCerts } from '@/utils/api';
import notify from '@/utils/notify';
import { preparedCerts } from '@/utils/certs';
import withAuth from '@/hoc/withAuth';

const IssuerPage: FC = () => {
  const { updateCerts } = useContext(CertsContext);
  useEffect(() => {
    const fetch = async () => {
      const [err, certs] = await getCerts({ issuer: 'betty' });
      if (!certs) {
        notify.error({ msg: err });
      } else {
        updateCerts(preparedCerts(certs));
      }
    };
    fetch();
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
