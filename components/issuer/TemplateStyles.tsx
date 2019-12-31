import { memo, FC } from 'react';
import styled from 'styled-components';
import { CertTemplate, templateStyles } from '@/constants';
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/constants';

import Radio from '../Radio';

const TemplateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: white;
  padding: 6% 1.5rem;
  border-radius: 10px;
`;

const Template = styled.div`
  width: 47%;
  text-align: center;
  margin-bottom: 1rem;
`;

const Img = styled.div<{ src: string }>`
  width: 100%;
  height: 200px;
  border: none;
  background: transparent url(${p => p.src}) center no-repeat/contain;
`;

const StyledRadio = styled(Radio)`
  margin: 0.5rem auto;
  color: ${p => p.theme.colors.primary};
`;

type TProps = {
  selected: CertTemplate;
  onChange: (t: CertTemplate) => void;
};

const TemplateStyles: FC<TProps> = memo(({ selected, onChange }) => {
  const { t } = useTranslation(i18nNamespace.Issuer);
  return (
    <TemplateWrapper>
      {templateStyles.map(template => {
        return (
          <Template key={template.key}>
            <Img src={template.uri} />
            <StyledRadio
              checked={template.key === selected}
              label={t(`Issue.step1.${template.name}`)}
              onClick={() => onChange(template.key)}
            />
          </Template>
        );
      })}
    </TemplateWrapper>
  );
});

export default TemplateStyles;
