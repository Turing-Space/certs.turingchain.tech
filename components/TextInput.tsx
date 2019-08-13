import React, { FC } from 'react';
import styled from 'styled-components';

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
  line-height: initial;

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
  input?: React.InputHTMLAttributes<HTMLInputElement>;
};

const TextInput: FC<TProps> = React.memo(
  ({ className, value, onChange, label, placeholder, input }) => {
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
          {...input}
        />
      </Wrapper>
    );
  },
);

export default TextInput;
