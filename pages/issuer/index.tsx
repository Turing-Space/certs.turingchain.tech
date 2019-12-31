import { useEffect, FC, useContext } from 'react';

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
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/constants';


type TProps = {
  syncTrigger: number;
};

const IssuerPage: FC<TProps> = () => {
  const { user } = useContext(UserContext);
  const { updateCerts } = useContext(CertsContext);
  const { t } = useTranslation(i18nNamespace.Issuer);

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
  }, []);
  return (
    <ProductLayout routePath="/issuer">
      <AboutMe />
      <MyCerts
        title={t('MyCerts.title')}
        TitleRight={MyCertsTitleRight}
        Empty={CertsNull}
      />
    </ProductLayout>
  );
};

export default withAuth<TProps>('issuer', async () => {
  return {
    namespacesRequired: [i18nNamespace.Common, i18nNamespace.Issuer],
  };
})(IssuerPage);
