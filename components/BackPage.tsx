import { memo, FC } from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

import { Router } from '@/i18n';

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #bdbdbd;
`;

const Text = styled.p`
  margin-left: 0.5rem;
`;

type TProps = {
  className?: string;
  onBack?: () => void;
};

const BackPage: FC<TProps> = memo(({ className, onBack }) => (
  <Wrapper
    className={className}
    onClick={onBack ? onBack : () => Router.back()}
  >
    <FaArrowLeft color="#bdbdbd" size="1em" />
    <Text>返回</Text>
  </Wrapper>
));

export default BackPage;
