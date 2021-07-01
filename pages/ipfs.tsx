import React from 'react';
import styled from 'styled-components';
import Ipfs from '@/components/Ipfs';

import { i18nNamespace } from '@/utils/constants';

const Root = styled.div`
  background: #fafafa;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

VerifyPage.getInitialProps = async () => ({
  namespacesRequired: [i18nNamespace.Common],
});

function VerifyPage() {
  return (
    <Root>
      <Ipfs />
    </Root>
  );
}

export default VerifyPage;
