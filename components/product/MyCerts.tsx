import { FC, useMemo, useState, useContext } from 'react';
import styled from 'styled-components';

import { CertsContext } from '@/contexts/certs';
import Button from '@/components/Button';

import Title from './Title';
import SortControl from './SortControl';
import SearchControl from './SearchControl';
import Certs from './Certs';
import CertsNull from './CertsNull';
import IssueCertModal from './IssueCertModal';

const Wrapper = styled.div`
  margin-top: 8%;
`;

const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Button} {
    width: 8em;
    padding: 0.7em 1em;
  }
`;

const MyCerts: FC = () => {
  const { certs, updateCert } = useContext(CertsContext);
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const filteredCerts = useMemo(
    () => (searchText ? certs.filter(c => c.name.includes(searchText)) : certs),
    [certs, searchText],
  );

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>我的證書</Title>
        <Button mode="white" onClick={() => setModalVisible(true)}>
          新增證書
        </Button>
      </TitleWrapper>
      <div>
        <ControlWrapper>
          <SortControl />
          <SearchControl
            value={searchText}
            setValue={e => setSearchText(e.target.value)}
          />
        </ControlWrapper>
        {certs.length === 0 ? (
          <CertsNull />
        ) : (
          <Certs certs={filteredCerts} updateCert={updateCert} />
        )}
      </div>
      <IssueCertModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </Wrapper>
  );
};

export default MyCerts;
