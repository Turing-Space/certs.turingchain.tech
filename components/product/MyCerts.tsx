import { FC, useMemo, useState, useContext } from 'react';
import styled from 'styled-components';
import { CertsContext } from '@/contexts/certs';

import Title from './Title';
import SortControl from './SortControl';
import SearchControl from './SearchControl';
import Certs from './Certs';

const Wrapper = styled.div`
  margin-top: 8%;
`;

const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MyCerts: FC = () => {
  const { certs, updateCert } = useContext(CertsContext);
  const [searchText, setSearchText] = useState('');

  const filteredCerts = useMemo(
    () => (searchText ? certs.filter(c => c.name.includes(searchText)) : certs),
    [certs, searchText],
  );
  return (
    <Wrapper>
      <Title>我的證書</Title>
      <div>
        <ControlWrapper>
          <SortControl />
          <SearchControl
            value={searchText}
            setValue={e => setSearchText(e.target.value)}
          />
        </ControlWrapper>
        <Certs certs={filteredCerts} updateCert={updateCert} />
      </div>
    </Wrapper>
  );
};

export default MyCerts;
