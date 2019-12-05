import React from 'react';
import styled from 'styled-components';
import Ipfs from '@/components/Ipfs';

import { i18nNamespace } from '@/constants';

let Root = styled.div`
  background: #fafafa;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

VerifyPage.getInitialProps = async () => ({
  namespacesRequired: [i18nNamespace.Common, i18nNamespace.Home],
});

function VerifyPage() {
  return (
    <Root>
      <Ipfs />
    </Root>
  );
}

export default VerifyPage;
