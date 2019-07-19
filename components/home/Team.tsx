import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import ScrollInfo from '@/components/ScollInfo';
import { FC } from 'react';
import { media } from '@/utils/theme';

type TMember = {
  avatarUri: string;
  name: string;
  title: string;
  shadowTitle: string;
};

const members: TMember[] = [
  {
    avatarUri: '',
    name: '胡耀傑',
    title: '共同創辦人暨執行長',
    shadowTitle: 'CEO',
  },
  {
    avatarUri: '',
    name: '李婷婷',
    title: '共同創辦人暨技術長',
    shadowTitle: 'CTO',
  },
  {
    avatarUri: '',
    name: '胡耀傑',
    title: '共同創辦人暨執行長',
    shadowTitle: 'CEO',
  },
  {
    avatarUri: '',
    name: '胡耀傑',
    title: '共同創辦人暨執行長',
    shadowTitle: 'CEO',
  },
  {
    avatarUri: '',
    name: '胡耀傑',
    title: '共同創辦人暨執行長',
    shadowTitle: 'CEO',
  },
  {
    avatarUri: '',
    name: '胡耀傑',
    title: '共同創辦人暨執行長',
    shadowTitle: 'CEO',
  },
];

const Title = styled(H2)`
  margin-top: 18vh;

  ${media('largeDesktop')} {
    margin-top: 20vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 62%;
  margin: 7% auto;
`;

const MemberWrapper = styled(ScrollAnimation)`
  display: flex;
  align-items: flex-end;
  width: 48%;
  margin-bottom: 5%;
`;

const Avatar = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  margin-right: 10%;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.25rem;
`;

const Name = styled.h3`
  position: relative;
  font-size: ${p => p.theme.fontSize.h3};
  letter-spacing: 2.67px;
  font-weight: 500;
  margin: 0 0 0.5em;
  &:before {
    content: '';
    position: absolute;
    top: -5%;
    left: -1.25rem;
    width: 0.5rem;
    height: 120%;
    background-color: ${p => p.theme.colors.primary};
  }
`;

const PositionTitle = styled.p`
  color: ${p => p.theme.colors.grey};
  letter-spacing: 1.67px;
`;

const ShadowTitle = styled.p`
  margin-top: 5px;
  font: italic 800 2em /1 ${p => p.theme.fontFamily.SFDisplay};
  letter-spacing: 2.13px;
  color: #1f1f1f;
`;

const Team: FC<{ id: string }> = ({ id }) => {
  return (
    <Section id={id} justifyContent="flex-start">
      <Title>Team</Title>
      <Wrapper>
        {members.map((member, idx) => (
          <MemberWrapper
            key={`${member.name} + ${idx}`}
            animateIn="zoomIn"
            delay={idx * 300}
            duration={0.5}
            animateOnce
            offset={0}
          >
            <Avatar src="https://unsplash.it/300/720?gravity=center" />
            <InfoWrapper>
              <Name className="cn">{member.name}</Name>
              <PositionTitle className="cn">{member.title}</PositionTitle>
              <ShadowTitle>{member.shadowTitle}</ShadowTitle>
            </InfoWrapper>
          </MemberWrapper>
        ))}
      </Wrapper>
      <ScrollInfo />
    </Section>
  );
};

export default Team;
