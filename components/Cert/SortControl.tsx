import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/constants';

const Wrapper = styled.div`
  display: flex;
  color: #bdbdbd;
  align-items: center;
`;

const Button = styled.div`
  cursor: pointer;
  color: #9e9e9e;
  background: ${p => p.theme.colors.grey};
  border-radius: 4px;
  padding: 0.5em 0.75em;
  margin-left: 10px;
  &:hover {
    opacity: 0.8;
  }
`;

const SortControl = () => {
  const { t } = useTranslation(i18nNamespace.Common);
  return (
    <Wrapper>
      <p>{t('sort')}</p>
      <Button>{t('byTime')}</Button>
    </Wrapper>
  );
};

export default SortControl;
