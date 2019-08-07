import { NextFC } from 'next';
import ProductLayout from '@/layouts/Product';
import { SITE_TITLE } from '@/constants';
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
  namespacesRequired: ['common', 'demo'],
});

export default ProductPage;
