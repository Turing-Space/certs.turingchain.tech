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
  height: 50px;
  padding: 0.3em 4rem;
  background-color: ${p => p.theme.colors.primary};
  z-index: ${p => p.theme.z.high};
  transform: translateY(0);
  transition: all 0.3s ease-in;
  color: ${p => p.theme.colors.white};

  ${media('tablet')} {
    height: 60px;
  }

  ${media('largeDesktop')} {
    height: 70px;
    padding: 0.3em 5rem;
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

const ProductHeader: SFC<{ onClick: () => void }> = ({ onClick }) => {
  const { user } = useContext(UserContext);
  return (
    <Wrapper>
      <HeaderLogo mode="primary" onClick={onClick} />
      <SectionWrapper>
        <p>{user.name}</p>
        <Avatar src={user.avatarUri} />
      </SectionWrapper>
    </Wrapper>
  );
};

export default ProductHeader;
