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
import { UserContext } from '@/contexts/user';

type TProps = {
  syncTrigger: number;
};

const IssuerPage: FC<TProps> = ({ syncTrigger }) => {
  const { user } = useContext(UserContext);
  const { updateCerts } = useContext(CertsContext);

  useEffect(() => {
    const fetch = async () => {
      const [err, certs] = await getCerts({ issuer: user.id });
      if (!certs) {
        notify.error({ msg: err });
      } else {
        updateCerts(preparedCerts(certs));
      }
    };
    fetch();
  }, [syncTrigger]);
  return (
    <ProductLayout routePath="/issuer">
      <AboutMe />
      <MyCerts
        title="已發行證書"
        TitleRight={MyCertsTitleRight}
        Empty={CertsNull}
      />
    </ProductLayout>
  );
};

export default withAuth<TProps>('issuer', async () => {
  return {
    syncTrigger: +new Date(),
    namespacesRequired: [i18nNamespace.Common, i18nNamespace.Issuer],
  };
})(IssuerPage);
