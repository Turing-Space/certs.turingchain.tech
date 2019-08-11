import { NextFC } from 'next';
import ProductLayout from '@/layouts/Product';
import { SITE_TITLE, i18nNamespace } from '@/constants';
import AboutMe from '@/components/product/AboutMe';
import MyCerts from '@/components/product/MyCerts';

const ProductPage: NextFC = () => {
  return (
    <ProductLayout title={'Demo | ' + SITE_TITLE}>
      <AboutMe />
      <MyCerts />
    </ProductLayout>
  );
};

ProductPage.getInitialProps = async () => ({
  namespacesRequired: [i18nNamespace.Common, i18nNamespace.Demo],
});

export default ProductPage;
