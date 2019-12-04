import React from 'react';

import styled from 'styled-components';

import Ipfs from '@/components/Ipfs';

const Root = styled.div`
  width: 1980px;
  height: 1080px;
  background: #fafafa;
`

function VerifyPage() {
  return (
    <Root>
      <Ipfs />
    </Root>
  );
}

export default VerifyPage;
