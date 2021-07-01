import { useEffect, FC, useContext } from 'react';

import ProductLayout from '@/layouts/Product';
import AboutMe from '@/components/issuer/AboutMe';
import MyCerts from '@/components/Cert/MyCerts';
import CertsNull from '@/components/issuer/CertsNull';
import { CertsContext } from '@/contexts/certs';
import { getCerts, getUsers } from '@/utils/api';
import notify from '@/utils/notify';
import { preparedCerts } from '@/utils/certs';
import withAuth from '@/hoc/withAuth';
import { UserContext } from '@/contexts/user';
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/utils/constants';
import queryString from 'query-string';
import { preparedUser } from '@/utils/user';
import { Router } from '@/i18n';

type TProps = {
  syncTrigger: number;
};

const IssuerPage: FC<TProps> = () => {
  const { user } = useContext(UserContext);
  const { updateCerts } = useContext(CertsContext);
  const { updateUser } = useContext(UserContext);
  const { t } = useTranslation(i18nNamespace.Product);

  useEffect(() => {
    const value = queryString.parse(window.location.search);
    const id = user.uid || String(value.id);

    updateUser(u => ({
      ...u,
      id: id,
    }));

    const fetch = async () => {
      console.log(id);
      const [err, certs] = await getCerts({ issuer: id });
      if (!certs) {
        notify.error({ msg: err });
      } else {
        updateCerts(preparedCerts(certs));
      }

      if (!user.uid) {
        if (id == 'undefined') {
          notify.error({ msg: 'Please login.' });
          setTimeout(() => {
            Router.push('/auth/login');
          }, 3000);
        } else {
          const [err2, newUser] = await getUsers({ uid: id });
          if (!newUser) {
            notify.error({ msg: err2 });
          } else {
            updateUser(preparedUser(newUser));
          }
        }
      }
    };
    fetch();
  }, []);

  return (
    <ProductLayout routePath="/issuer">
      <AboutMe />
      <MyCerts title={t('MyCerts.title')} Empty={CertsNull} />
    </ProductLayout>
  );
};

export default withAuth<TProps>('issuer', async () => {
  return {
    namespacesRequired: [i18nNamespace.Common, i18nNamespace.Issuer],
  };
})(IssuerPage);
