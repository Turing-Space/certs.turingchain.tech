import React from 'react';

import styled from 'styled-components';

import Ipfs from '@/components/Ipfs';

import { i18nNamespace } from '@/constants';

const Root = styled.div`
  width: 1980px;
  height: 1080px;
  background: #fafafa;
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
