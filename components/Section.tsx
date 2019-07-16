import styled from 'styled-components';

type TSectionProps = {
  row?: boolean;
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  justifyContent?: 'center' | 'flex-start' | 'flex-end';
  fullscreen?: boolean;
};

export default styled.section<TSectionProps>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: ${({ row = false }) => (row ? 'row' : 'column')};
  justify-content: ${p => p.justifyContent || 'center'};
  align-items: ${p => p.alignItems || 'center'};
  min-height: ${p => (p.fullscreen ? '100vh' : 'initial')};
`;
