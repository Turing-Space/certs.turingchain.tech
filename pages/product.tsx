import { NextFC } from 'next';
import ProductLayout from '@/layouts/Product';
import { SITE_TITLE, i18nNamespace } from '@/constants';
import AboutMe from '@/components/product/AboutMe';
import MyCertsTitleRight from '@/components/product/MyCertsTitleRight';
import MyCerts from '@/components/Cert/MyCerts';
import IssueCertModal from '@/components/Cert/IssueCertModal';
import CertsNull from '@/components/product/CertsNull';

const ProductPage: NextFC = () => {
  return (
    <ProductLayout title={'Demo | ' + SITE_TITLE}>
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

export default ProductPage;
