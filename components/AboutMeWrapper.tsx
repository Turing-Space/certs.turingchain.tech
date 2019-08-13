import { useContext, FC } from 'react';
import styled from 'styled-components';
import { UserContext } from '@/contexts/user';
import { media } from '@/utils/theme';
import Title from './product/Title';

const Wrapper = styled.div`
  margin-top: 10%;
`;

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.white};
  padding: 2em 5%;

  ${media('largeDesktop')} {
    padding: 2em 8%;
  }
`;

const UserWrapper = styled.div`
  display: flex;
`;

const Avatar = styled.div<{ src: string }>`
  width: 4.5rem;
  height: 4.5rem;
  border: solid 1px #e6e6e6;
  background: url(${p => p.src}) center no-repeat/cover;
  margin-right: 1em;
  border-radius: 50%;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .name {
    white-space: nowrap;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: ${p => p.theme.fontSize.bigger};
    margin-bottom: 2px;
  }

  .join-date {
    color: #bdbdbd;
    font-size: ${p => p.theme.fontSize.smaller};
  }
`;

const AboutMeWrapper: FC = ({ children }) => {
  const { user } = useContext(UserContext);
  return (
    <Wrapper>
      <Title>關於我</Title>
      <InfoWrapper>
        <UserWrapper>
          <Avatar src={user.avatarUri} />
          <NameWrapper>
            <p className="name">{user.name}</p>
            <p className="join-date">Join at Jan 2019</p>
          </NameWrapper>
        </UserWrapper>
        {children}
      </InfoWrapper>
    </Wrapper>
  );
};

export default AboutMeWrapper;
