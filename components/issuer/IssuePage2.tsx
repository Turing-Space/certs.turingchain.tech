import { FC, useState } from 'react';
import styled from 'styled-components';
import { TRenderComponentProps } from '@/pages/issuer/issue-cert/[page]';

import { getRelativePath } from '@/utils';
import { CertTemplate } from '@/constants';
import { runtimeEnv } from '@/environment';

import BackPage from '../BackPage';
import IssueTitleSection from './TitleSection';
import Button from '../Button';
import Step from '../Step';
import TextInput from '../TextInput';

const StyledBackPage = styled(BackPage)`
  margin-top: 7%;
`;

const StyledTextInput = styled(TextInput)`
  width: 50%;
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
  padding: 0.7em 1em;
  margin: 3% auto;
`;

const CertImg = styled.img`
  width: 80%;
  margin: 0 auto 1em;
`;

const CertName = styled(SectionTitle)`
  font-size: ${p => p.theme.fontSize.bigger};
`;

const Error = styled.p`
  font-weight: 400;
  text-align: center;
  color: ${p => p.theme.colors.primary};
`;

const getTemplateUri = {
  [CertTemplate.Activity]: getRelativePath('/static/certificate/stanford.png'),
  [CertTemplate.Completion]: getRelativePath(
    '/static/certificate/turing_scholarship.png',
  ),
};

const IssuePage2: FC<TRenderComponentProps> = ({ value }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    message: '',
    count: 0,
  });
  return (
    <>
      <StyledBackPage />
      <Step>STEP 3</Step>
      <IssueTitleSection title="預覽證書">
        <SectionWrapper style={{ textAlign: 'center' }}>
          <CertImg src={getTemplateUri[value.template]} />
          <CertName>{value.type}</CertName>
          <StyledButton mode="white">修改證書</StyledButton>
        </SectionWrapper>
      </IssueTitleSection>
      <Step>STEP 4</Step>
      <IssueTitleSection title="輸入發證密碼">
        <SectionWrapper>
          <SectionTitle>發證密碼</SectionTitle>
          <StyledTextInput
            placeholder="6 ~ 12 位英文數字密碼"
            value={password}
            onChange={setPassword}
            input={{ type: 'password' }}
          />
        </SectionWrapper>
      </IssueTitleSection>
      {error.count ? <Error>{error.message}</Error> : null}
      <StyledButton
        style={{ marginTop: '10%' }}
        onClick={() => {
          if (error.count > 3) {
            alert('密碼錯誤超過 3 次，請洽詢服務人員重新設定');
            return;
          } else if (password === runtimeEnv.issuePassword) {
            alert('發行');
          } else {
            setError({
              message: `發證密碼錯誤 ${error.count +
                1} 次。答錯超過三次請洽詢服務人員重新設定密碼`,
              count: error.count + 1,
            });
          }
        }}
      >
        發行證書
      </StyledButton>
    </>
  );
};

export default IssuePage2;
