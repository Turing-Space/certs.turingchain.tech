import styled from 'styled-components';
import { FC } from 'react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.darkGrey};
  > p {
    margin-right: 1em;
    font-size: ${p => p.theme.fontSize.smaller};
  }
`;

const InputWrapper = styled.button`
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1em;
  padding: 0.5em 1em;
  color: ${p => p.theme.colors.darkGrey};
  &:hover {
    opacity: 0.8;
  }
`;

type TProps = {
  file: File | null;
  onChange: (file: File) => void;
  buttonText?: string;
  accept?: string;
};

const InputFile: FC<TProps> = ({ file, onChange, buttonText, accept }) => {
  return (
    <Wrapper>
      <InputWrapper>
        <input
          style={{
            opacity: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            cursor: 'pointer',
          }}
          accept={accept}
          type="file"
          name="file"
          // @ts-ignore
          onChange={e => onChange(e.target.files[0])}
        />
        {buttonText || '上傳圖檔'}
      </InputWrapper>
      <p>* 檔案限制 1 M</p>
      {file && <p>( {file.name} )</p>}
    </Wrapper>
  );
};

export default InputFile;
