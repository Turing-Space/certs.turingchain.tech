import { NextFC } from 'next';
import { i18nNamespace } from '@/constants';
import ProductLayout from '@/layouts/Product';
import useLoginMode from '@/hooks/useLoginMode';
import AboutMe from '@/components/issuer/AboutMe';

const IssuerPage: NextFC = () => {
  const signedIn = useLoginMode('issuer');
  return signedIn ? (
    <ProductLayout>
      <AboutMe />
    </ProductLayout>
  ) : null;
};

IssuerPage.getInitialProps = async () => {
  return {
    namespacesRequired: [i18nNamespace.Common, i18nNamespace.Issuer],
  };
};

export default IssuerPage;
