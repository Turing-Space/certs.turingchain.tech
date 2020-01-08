import { NextFC } from 'next';
import ProductLayout from '@/layouts/Product';
import { i18nNamespace } from '@/constants';
import { useTranslation } from 'react-i18next';
import AboutMe from '@/components/product/AboutMe';
import MyCertsTitleRight from '@/components/product/MyCertsTitleRight';
import MyCerts from '@/components/Cert/MyCerts';
import IssueCertModal from '@/components/Cert/IssueCertModal';
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


const ProductPage: NextFC = () => {
  const { user } = useContext(UserContext);
  const { updateUser } = useContext(UserContext);
  const { updateCerts } = useContext(CertsContext);
  const { t } = useTranslation(i18nNamespace.Product);

  useEffect(() => {
    const value = queryString.parse(window.location.search);
    const id = user.uid || String(value.id)

    updateUser(u => ({
      ...u,
      id: id,
      name: user.name,
    }));

    const fetch = async () => {
      const [err, certs] = await getCerts({ holder: id });
      if (!certs) {
        notify.error({ msg: err });
      } else {
        updateCerts(preparedCerts(certs));
      }

      if (!user.uid) {
        const [err2, newUser] = await getUsers({ uid: id });
        if (!newUser) {
          notify.error({ msg: err2 });
        } else {
          updateUser(preparedUser(newUser));
        }
      }

    };
    fetch();
  }, []);

  return (
    <ProductLayout title={'TuringCerts'} routePath="/product">
      <AboutMe />
      <MyCerts
        title={t('MyCerts.title')}
        Empty={CertsNull}
        TitleRight={MyCertsTitleRight}
        Modal={IssueCertModal}
      />
    </ProductLayout>
  );
};

ProductPage.getInitialProps = async () => ({
  namespacesRequired: [i18nNamespace.Common, i18nNamespace.Product],
});

export default withAuth('user', () => {
  return { namespacesRequired: [i18nNamespace.Common, i18nNamespace.Product] };
})(ProductPage);


        // updateCerts([
        //   {
        //     issuer: 'UC Berkeley',
        //     name: '國際 GBP 區塊鏈能力考核證書',
        //     coverUri: '/static/certificate/GBP.png',
        //     verified: true,
        //     pin: true,
        //     ipfs: '1',
        //     timestamp: 1564133361,
        //     progress: [true, true, true, true, true],
        //     issuing: false
        //   },
        //   {
        //     issuer: '國立臺灣大學',
        //     name: '德國柏林 IOTA 基金會區塊鏈論壇 - 臺北場 2019',
        //     coverUri: '/static/certificate/ABC_Crypto_Night.png',
        //     verified: false,
        //     pin: false,
        //     ipfs: '2',
        //     timestamp: 1564133361,
        //     progress: [true, false, false, false, false],
        //     issuing: false
        //   },
        //   {
        //     issuer: '國立臺北科技大學',
        //     name: '臺北科技大學 區塊鏈微學分課程 2019',
        //     coverUri: '/static/certificate/0x1Academy.jpg',
        //     verified: false,
        //     ipfs: '3',
        //     timestamp: 1564133361,
        //     pin: false,
        //     progress: [true, false, false, false, false],
        //     issuing: false
        //   },
        // ]);