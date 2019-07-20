import styled from 'styled-components';
import H2 from '@/components/H2';

export default styled(H2)`
  font-size: 1.75em;
  color: ${p => p.theme.colors.primary};
  letter-spacing: 1.3px;
  margin-top: 0;
  margin-bottom: 0.75em;
`;
