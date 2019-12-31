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
import notify from '@/utils/notify';
import { scrollToID } from '@/utils';
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/constants';

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

  const { t } = useTranslation(i18nNamespace.Issuer);

  const onFileChange = useCallback(f => setValue(v => ({ ...v, csv: f })), []);
  const onNextPage = useCallback(() => {
    if (!value.type) {
      notify.error({ msg: t('Issue.step1.errorName') });
      scrollToID('issue-cert-type-column');
      return;
    } else if (!value.csv) {
      notify.error({ msg: t('Issue.step1.errorCSV') });
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
      <IssueTitleSection title={t('Issue.step1.certName')} id="issue-cert-type-column">
        <StyledTextInput
          placeholder={t('Issue.step1.enterName')}
          value={value.type}
          onChange={onNameChange}
        />
      </IssueTitleSection>
      <IssueTitleSection title={t('Issue.step1.certKind')}>
        <TemplateStyles
          selected={value.template}
          onChange={onTemplateStyleChange}
        />
      </IssueTitleSection>
      <Step>STEP 2</Step>
      <IssueTitleSection title={t('Issue.step2.content')}>
        <SectionWrapper>
          <SectionTitle>
            {t('Issue.step2.csvCol')}
          </SectionTitle>
        </SectionWrapper>
      </IssueTitleSection>
      <IssueTitleSection title={t('Issue.step2.upload1')} id="issue-cert-csv-column">
        <SectionWrapper>
          <SectionTitle>{t('Issue.step2.csv')}</SectionTitle>
          <InputFile
            file={value.csv}
            onChange={onFileChange}
            buttonText={t('Issue.step2.upload2')}
            accept=".csv"
          />
          <Reminder>
            * {t('Issue.step2.notice')}
          </Reminder>
        </SectionWrapper>
      </IssueTitleSection>
      <StyledButton onClick={onNextPage}>{t('Issue.next')}</StyledButton>
    </>
  );
};

export default IssuePage1;
