import {
  FC,
  useCallback,
  useMemo,
  useState,
  useContext,
  ComponentType,
} from 'react';
import styled from 'styled-components';

import { CertsContext } from '@/contexts/certs';
import Button from '@/components/Button';

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

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Button} {
    width: 8em;
    padding: 0.7em 1em;
  }
`;

export type TMyCertsRenderComponentProps = {
  openModal: () => void;
};

type TProps = {
  title: string;
  Empty?: ComponentType<TMyCertsRenderComponentProps>;
};

const MyCerts: FC<TProps> = ({ title, Empty }) => {
  const { certs } = useContext(CertsContext);
  const [searchText, setSearchText] = useState('');
  const [, setModalVisible] = useState(false);

  const filteredCerts = useMemo(
    () =>
      searchText
        ? certs.filter(c =>
            c.name.toUpperCase().includes(searchText.toUpperCase()),
          )
        : certs,
    [certs, searchText],
  );

  const openModal = useCallback(() => setModalVisible(true), []);
  const EmptyComponent = useMemo(
    () => (Empty ? <Empty openModal={openModal} /> : null),
    [],
  );

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      <div>
        <ControlWrapper>
          <SortControl />
          <SearchControl
            value={searchText}
            setValue={e => setSearchText(e.target.value)}
          />
        </ControlWrapper>
        {certs.length === 0 ? EmptyComponent : <Certs certs={filteredCerts} />}
      </div>
    </Wrapper>
  );
};

export default MyCerts;
