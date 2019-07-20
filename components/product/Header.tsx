import { SFC, useContext } from 'react';
import styled from 'styled-components';
import HeaderLogo from '@/components/HeaderLogo';
import { media } from '@/utils/theme';
import { UserContext } from '@/contexts/user';

const Wrapper = styled.header`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0.3em 4em;
  background-color: ${p => p.theme.colors.primary};
  z-index: ${p => p.theme.z.high};
  transform: translateY(0);
  transition: all 0.3s ease-in;
  color: ${p => p.theme.colors.white};

  ${media('largeDesktop')} {
    height: 70px;
    padding: 3px 5em;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  > p {
    letter-spacing: 0.75px;
  }
`;

const Avatar = styled.div<{ src: string }>`
  width: 3.2rem;
  height: 3.2rem;
  background: url(${p => p.src}) no-repeat center/cover;
  border: solid 1px #e5e5e5;
  border-radius: 50%;
  margin-left: 1em;
`;

const ProductHeader: SFC = () => {
  const { user } = useContext(UserContext);
  return (
    <Wrapper>
      <HeaderLogo />
      <SectionWrapper>
        <p>{user.name}</p>
        <Avatar src={user.avatarUri} />
      </SectionWrapper>
    </Wrapper>
  );
};

export default ProductHeader;
