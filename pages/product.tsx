import { NextFC } from 'next';
import ProductLayout from '@/layouts/Product';
import { SITE_TITLE, i18nNamespace } from '@/constants';
import AboutMe from '@/components/product/AboutMe';
import MyCertsTitleRight from '@/components/product/MyCertsTitleRight';
import MyCerts from '@/components/Cert/MyCerts';
import IssueCertModal from '@/components/Cert/IssueCertModal';
import CertsNull from '@/components/product/CertsNull';
import { useEffect, useContext } from 'react';
import { UserContext } from '@/contexts/user';
import notify from '@/utils/notify';
import { getCerts } from '@/utils/api';
import { CertsContext } from '@/contexts/certs';
import withAuth from '@/hoc/withAuth';
import { preparedCerts } from '@/utils/certs';
import queryString from 'query-string';


const ProductPage: NextFC = () => {
  const { user } = useContext(UserContext);
  const { updateUser } = useContext(UserContext);
  const { updateCerts } = useContext(CertsContext);


  useEffect(() => {
    const value = queryString.parse(window.location.search);
    updateUser(u => ({
      ...u,
      id: user.id || String(value.id),
      name: user.name,
    }));

    const fetch = async () => {
      const [err, certs] = await getCerts({ holder: user.id || String(value.id) });
      if (!certs) {
        notify.error({ msg: err });
      } else {
        updateCerts(preparedCerts(certs));
      }
    };
    fetch();
  }, []);
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
  //   },
  // ]);
  // }, []);
  return (
    <ProductLayout title={'Demo | ' + SITE_TITLE} routePath="/product">
      <AboutMe />
      <MyCerts
        title="我的證書"
        Empty={CertsNull}
        TitleRight={MyCertsTitleRight}
        Modal={IssueCertModal}
      />
    </ProductLayout>
  );
};

ProductPage.getInitialProps = async () => ({
  namespacesRequired: [i18nNamespace.Common, i18nNamespace.Demo],
});

export default withAuth('user', () => {
  return { namespacesRequired: [i18nNamespace.Common, i18nNamespace.Demo] };
})(ProductPage);
