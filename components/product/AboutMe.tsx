import { useContext } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { UserContext, CertStatus } from '@/contexts/user';
import Title from './Title';

const Wrapper = styled.div`
  margin-top: 10%;
`;

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.white};
  padding: 2em 8%;
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
    margin-bottom: 5px;
  }

  .join-date {
    color: #bdbdbd;
    font-size: ${p => p.theme.fontSize.smaller};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 8em;
  height: 8em;
  border-radius: 50%;
  border: solid 6px ${p => p.theme.colors.primary};
  margin-left: 2em;
`;

const AnimatedNumber = styled(animated.p)`
  color: ${p => p.theme.colors.primary};
  margin-top: 3px;
  font-size: 2.5em;
  font-weight: bold;
  font-family: ${p => p.theme.fontFamily.SFText};
`;

const AboutMe = () => {
  const { user } = useContext(UserContext);
  const certificatedCount = user.certs.filter(
    d => d.status === CertStatus.Certificated,
  ).length;
  const certificatingCount = user.certs.filter(
    d => d.status === CertStatus.Certificating,
  ).length;

  const certsProps = useSpring({
    number: user.certs.length,
    from: { number: 0 },
  });
  const certificatedProps = useSpring({
    number: certificatedCount,
    from: { number: 0 },
  });
  const certificatingProps = useSpring({
    number: certificatingCount,
    from: { number: 0 },
  });

  const icons = [
    {
      name: '認證數量',
      count: user.certs.length,
      props: certsProps,
    },
    {
      name: '已完成認證',
      count: certificatedCount,
      props: certificatedProps,
    },
    {
      name: '認證中',
      count: certificatingCount,
      props: certificatingProps,
    },
  ];
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {icons.map(icon => (
            <IconWrapper key={icon.name}>
              <p>{icon.name}</p>
              <AnimatedNumber>
                {icon.props.number.interpolate(x => x.toFixed(0))}
              </AnimatedNumber>
            </IconWrapper>
          ))}
        </div>
      </InfoWrapper>
    </Wrapper>
  );
};

export default AboutMe;
