import { FC, useState } from 'react';
import styled from 'styled-components';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';
import ScrollInfo from '@/components/ScollInfo';
import Button from '@/components/Button';

const Title = styled(H2)`
  margin-top: 18vh;

  ${media('largeDesktop')} {
    margin-top: 20vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 720px;
  margin: 5% auto 0;
  ${media('largeDesktop')} {
    width: 840px;
  }
`;

const MoreInfoWrapper = styled(Wrapper)<{ open: boolean }>`
  margin: 0;
  overflow: hidden;
  max-height: ${p => (p.open ? '100vh' : 0)};
  transition: max-height ease-in 0.3s;
`;

const LogoWrapper = styled.div`
  background: white;
  padding: 10px;
`;

const Logo = styled.div<{ src: string }>`
  background: url(${p => p.src}) center no-repeat/contain;
  width: 100px;
  height: 100px;

  ${media('largeDesktop')} {
    width: 120px;
    height: 120px;
  }
`;

const StyledButton = styled(Button)`
  margin: 3% 0 5%;
`;

const logos = [
  {
    name: '',
    src: getRelativePath('/static/partners/stanford.png'),
  },
  {
    name: '加州大學柏克萊分校',
    src: getRelativePath('/static/partners/ucberkeley.png'),
  },
  {
    name: '聖荷西州立大學',
    src: getRelativePath('/static/partners/san.png'),
  },
  {
    name: '',
    src: getRelativePath('/static/partners/clemson.png'),
  },
  {
    name: '內華達大學拉斯維加斯分校',
    src: getRelativePath('/static/partners/unlv.png'),
  },
  {
    name: '香港科技大學',
    src: getRelativePath('/static/partners/HKUST.png'),
  },
  {
    name: '國立台灣大學',
    src: getRelativePath('/static/partners/NTU.png'),
  },
  {
    name: '',
    src: getRelativePath('/static/partners/NCKU.png'),
  },
  {
    name: '國立臺北科技大學',
    src: getRelativePath('/static/partners/taipei-tech.png'),
  },
  {
    name: '',
    src: getRelativePath('/static/partners/foreign.png'),
  },
  {
    name: '',
    src: getRelativePath('/static/partners/min.png'),
  },
  {
    name: '',
    src: getRelativePath('/static/partners/shichiu.jpeg'),
  },
  {
    name: '',
    src: getRelativePath('/static/partners/taipei-light.jpg'),
  },
];

const Collaborations: FC<{ id: string }> = ({ id }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Section id={id} justifyContent="flex-start" fullscreen>
      <Title>合作機構</Title>
      <Wrapper>
        {logos.slice(0, 12).map(logo => (
          <LogoWrapper>
            <Logo key={logo.name} src={logo.src} />
          </LogoWrapper>
        ))}
      </Wrapper>
      <MoreInfoWrapper open={open}>
        {logos.slice(12).map(logo => (
          <LogoWrapper>
            <Logo key={logo.name} src={logo.src} />
          </LogoWrapper>
        ))}
      </MoreInfoWrapper>
      <StyledButton onClick={() => setOpen(p => !p)}>
        {open ? '隱藏' : '更多'}
      </StyledButton>
      <ScrollInfo />
    </Section>
  );
};

export default Collaborations;
