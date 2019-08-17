import styled from 'styled-components';
import { FC } from 'react';

const Wrapper = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const RadioBox = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border: solid 1px ${p => p.theme.colors.primary};
  border-radius: 50%;
  margin-right: 0.5rem;

  > div {
    border-radius: 50%;
    width: 0.7rem;
    height: 0.7rem;
    background: ${p => (p.checked ? p.theme.colors.primary : 'transparent')};
  }
`;

type TProps = {
  label: string;
  onClick: () => void;
  checked?: boolean;
  className?: string;
};

const Radio: FC<TProps> = ({ className, checked = false, label, onClick }) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      <RadioBox checked={checked}>
        <div />
      </RadioBox>
      <label>{label}</label>
    </Wrapper>
  );
};

export default Radio;
