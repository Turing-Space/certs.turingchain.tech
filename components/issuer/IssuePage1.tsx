import { animateScroll } from 'react-scroll';
import { FC, useCallback, useState } from 'react';
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
import notify from '@/utils/notify';
import { scrollToID } from '@/utils';

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

const Reminder = styled.p`
  font-size: ${p => p.theme.fontSize.smaller};
  font-weight: 500;
  margin-top: 0.75em;
  color: ${p => p.theme.colors.darkGrey};
  letter-spacing: 0.67px;
`;

// TODO: check csv format
const IssuePage1: FC<TRenderComponentProps> = ({ value, setValue }) => {
  const onNameChange = useCallback(t => setValue(v => ({ ...v, type: t })), []);
  const onTemplateStyleChange = useCallback(
    t => setValue(v => ({ ...v, template: t })),
    [],
  );
  const onFileChange = useCallback(f => setValue(v => ({ ...v, csv: f })), []);
  const onNextPage = useCallback(() => {
    if (!value.type) {
      notify.error({ msg: '請填寫證書名稱！' });
      scrollToID('issue-cert-type-column');
      return;
    } else if (!value.csv) {
      notify.error({ msg: '請上傳您的 csv 檔案，以利系統進行發證作業！' });
      scrollToID('issue-cert-csv-column');
      return;
    }

    window.scrollTo({ top: 0 });
    Router.push(
      {
        pathname: '/issuer/issue-cert/[page]',
        query: {
          page: 2,
        },
      },
      '/issuer/issue-cert/2',
    );
  }, [value]);
  return (
    <>
      <StyledBackPage />
      <Step>STEP 1</Step>
      <IssueTitleSection title="證書名稱" id="issue-cert-type-column">
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
            issuer（發證機關） / type（證書名稱） / holder（名字）/
            email（電子信箱）
          </SectionTitle>
        </SectionWrapper>
      </IssueTitleSection>
      <IssueTitleSection title="上傳資料" id="issue-cert-csv-column">
        <SectionWrapper>
          <SectionTitle>CSV 檔</SectionTitle>
          <InputFile
            file={value.csv}
            onChange={onFileChange}
            buttonText="上傳檔案"
            accept=".csv"
          />
          <Reminder>
            * 請檢查您的證書名稱是否與 csv 檔案裡的 type 欄位相同
          </Reminder>
        </SectionWrapper>
      </IssueTitleSection>
      <StyledButton onClick={onNextPage}>下一步</StyledButton>
    </>
  );
};

export default IssuePage1;
