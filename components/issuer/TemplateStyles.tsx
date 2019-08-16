import { memo, FC } from 'react';
import styled from 'styled-components';
import { CertTemplate } from '@/constants';
import { getRelativePath } from '@/utils';
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

const templateStyles = [
  {
    key: CertTemplate.Activity,
    uri: getRelativePath('/static/certificate/stanford.png'),
    name: '活動參加證書',
  },
  {
    key: CertTemplate.Completion,
    uri: getRelativePath('/static/certificate/turing_scholarship.png'),
    name: '結業證書',
  },
];

type TProps = {
  selected: CertTemplate;
  onChange: (t: CertTemplate) => void;
};

const TemplateStyles: FC<TProps> = memo(({ selected, onChange }) => {
  return (
    <TemplateWrapper>
      {templateStyles.map(t => {
        return (
          <Template key={t.key}>
            <Img src={t.uri} />
            <StyledRadio
              checked={t.key === selected}
              label={t.name}
              onClick={() => onChange(t.key)}
            />
          </Template>
        );
      })}
    </TemplateWrapper>
  );
});

export default TemplateStyles;
