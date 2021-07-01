import { NextFC } from 'next';
import ProductLayout from '@/layouts/Product';
import { i18nNamespace } from '@/utils/constants';
import { useTranslation } from 'react-i18next';
import AboutMe from '@/components/product/AboutMe';
import MyCerts from '@/components/Cert/MyCerts';
import CertsNull from '@/components/product/CertsNull';
import { useEffect, useContext } from 'react';
import { UserContext } from '@/contexts/user';
import notify from '@/utils/notify';
import { getCerts, getUsers } from '@/utils/api';
import { CertsContext } from '@/contexts/certs';
import withAuth from '@/hoc/withAuth';
import { preparedCerts } from '@/utils/certs';
import queryString from 'query-string';
import { preparedUser } from '@/utils/user';
import { Router } from '@/i18n';

const ProductPage: NextFC = () => {
  const { user } = useContext(UserContext);
  const { updateUser } = useContext(UserContext);
  const { updateCerts } = useContext(CertsContext);
  const { t } = useTranslation(i18nNamespace.Product);

  useEffect(() => {
    const value = queryString.parse(window.location.search);
    const id = user.uid || String(value.id);

    updateUser(u => ({
      ...u,
      id,
    }));

    const fetch = async () => {
      const [err, certs] = await getCerts({ holder: id });
      if (!certs) {
        notify.error({ msg: err });
      } else {
        updateCerts(preparedCerts(certs));
      }

      if (!user.uid) {
        if (id === 'undefined') {
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
    <ProductLayout title={'TuringCerts'} routePath="/product">
      <AboutMe />
      <MyCerts title={t('MyCerts.title')} Empty={CertsNull} />
    </ProductLayout>
  );
};

ProductPage.getInitialProps = async () => ({
  namespacesRequired: [i18nNamespace.Common, i18nNamespace.Product],
});

export default withAuth('user', () => {
  return { namespacesRequired: [i18nNamespace.Common, i18nNamespace.Product] };
})(ProductPage);
