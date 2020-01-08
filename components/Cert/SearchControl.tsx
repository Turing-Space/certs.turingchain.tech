import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useState, useCallback, FC } from 'react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input<{ show: boolean }>`
  width: 100%;
  max-width: ${p => (p.show ? '200px' : '0px')};
  padding: ${p => (p.show ? '0px 2px 5px' : '0 0 5px')};
  border-bottom: solid 2px #e0e0e0;
  background: transparent;
  margin-left: 0.5em;
  margin-top: 0.9em;
  color: ${p => p.theme.colors.darkGrey};
  transition: max-width ease-in 0.3s;
  letter-spacing: 0.67px;
`;

type TProps = {
  value: string;
  setValue: (e: any) => void;
};

const SearchControl: FC<TProps> = ({ value, setValue }) => {
  const [open, setOpen] = useState<boolean>(false);
  const onSearchClick = useCallback(() => setOpen(t => !t), []);
  return (
    <Wrapper>
      <FaSearch color="#e0e0e0" size="1.5em" onClick={onSearchClick} />
      <Input type="text" value={value} show={open} onChange={setValue} />
    </Wrapper>
  );
};

export default SearchControl;
