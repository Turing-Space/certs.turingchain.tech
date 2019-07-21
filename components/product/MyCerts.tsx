import { FC, useMemo, useState, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '@/contexts/user';

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
  const { user } = useContext(UserContext);
  const [searchText, setSearchText] = useState('');

  const filteredCerts = useMemo(
    () =>
      searchText
        ? user.certs.filter(c => c.name.includes(searchText))
        : user.certs,
    [user.certs, searchText],
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
        <Certs certs={filteredCerts} />
      </div>
    </Wrapper>
  );
};

export default MyCerts;
