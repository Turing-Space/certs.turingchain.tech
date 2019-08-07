import styled from 'styled-components';
import { FC } from 'react';

const Wrapper = styled.div`
  margin: 1.25em 0;
`;

const LabelWrapper = styled.div`
  color: ${p => p.theme.colors.primary};
  margin-bottom: 0.5rem;
  font-weight: 400;
  letter-spacing: 1px;
`;

const Input = styled.input`
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  background: white;
  padding: 0.5rem 12px;
  color: #616161;
  width: 100%;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #cccccc;
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #cccccc;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #cccccc;
  }
`;

type TProps = {
  className?: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: string) => void;
};

const TextInput: FC<TProps> = ({
  className,
  value,
  onChange,
  label,
  placeholder,
}) => {
  return (
    <Wrapper className={className}>
      {label && (
        <LabelWrapper>
          <label>{label}</label>
        </LabelWrapper>
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
    </Wrapper>
  );
};

export default TextInput;
