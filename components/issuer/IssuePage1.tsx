import { FC, useCallback } from 'react';
import styled from 'styled-components';
import { TRenderComponentProps } from '@/pages/issuer/issue-cert/[page]';
import { Router } from '@/i18n';

import Step from '../Step';
import TextInput from '../TextInput';
import BackPage from '../BackPage';
import IssueTitleSection from './TitleSection';
import TemplateStyles from './TemplateStyles';
import InputFile from '../InputFile';
import Button from '../Button';

const StyledBackPage = styled(BackPage)`
  margin-top: 7%;
`;

const StyledTextInput = styled(TextInput)`
  width: 50%;
  > input {
    background: transparent;
  }
`;

const SectionWrapper = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem 2.5rem;
`;

const SectionTitle = styled.p`
  color: ${p => p.theme.colors.primary};
  letter-spacing: 1px;
  font-weight: 400;
  margin-bottom: 1em;
`;

const StyledButton = styled(Button)`
  width: 10rem;
  margin: 10% auto 3%;
`;

// TODO: check csv format

const IssuePage1: FC<TRenderComponentProps> = ({ value, setValue }) => {
  const onNameChange = useCallback(t => setValue(v => ({ ...v, type: t })), []);
  const onTemplateStyleChange = useCallback(
    t => setValue(v => ({ ...v, template: t })),
    [],
  );
  const onFileChange = useCallback(f => setValue(v => ({ ...v, csv: f })), []);
  return (
    <>
      <StyledBackPage />
      <Step>STEP 1</Step>
      <IssueTitleSection title="證書名稱">
        <StyledTextInput
          placeholder="請輸入證書名稱"
          value={value.type}
          onChange={onNameChange}
        />
      </IssueTitleSection>
      <IssueTitleSection title="選擇證書樣式">
        <TemplateStyles
          selected={value.template}
          onChange={onTemplateStyleChange}
        />
      </IssueTitleSection>
      <Step>STEP 2</Step>
      <IssueTitleSection title="欄位內容">
        <SectionWrapper>
          <SectionTitle>
            發證機關（issuer） / 證書名稱（type） / 名字（holder）
          </SectionTitle>
        </SectionWrapper>
      </IssueTitleSection>
      <IssueTitleSection title="上傳資料">
        <SectionWrapper>
          <SectionTitle>CSV 檔</SectionTitle>
          <InputFile
            file={value.csv}
            onChange={onFileChange}
            buttonText="上傳檔案"
            accept=".csv"
          />
        </SectionWrapper>
      </IssueTitleSection>
      <StyledButton
        onClick={() =>
          Router.push(
            {
              pathname: '/issuer/issue-cert/[page]',
              query: {
                page: 2,
              },
            },
            '/issuer/issue-cert/2',
          )
        }
      >
        下一步
      </StyledButton>
    </>
  );
};

export default IssuePage1;
