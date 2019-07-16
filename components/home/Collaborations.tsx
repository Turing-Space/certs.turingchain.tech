import { FC } from 'react';
import styled from 'styled-components';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';

const Title = styled(H2)`
  margin-top: 18vh;

  ${media('largeDesktop')} {
    margin-top: 22vh;
  }
`;

const Img = styled.img`
  width: 70%;
  margin: 7% 0;
`;

const Collaborations: FC<{ id: string }> = ({ id }) => {
  return (
    <Section id={id} justifyContent="flex-start">
      <Title>COLLABORATIONS</Title>
      <Img src={getRelativePath('/static/elements/collaboration.png')} />
    </Section>
  );
};

export default Collaborations;
