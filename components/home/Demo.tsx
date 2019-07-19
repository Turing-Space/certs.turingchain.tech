import { FC } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import H2 from '@/components/H2';
import Section from '@/components/Section';
import Description from '@/components/Description';
import Button from '@/components/Button';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';

const Bg = styled.div`
  position: absolute;
  background-color: #fafafa;
  width: 100vw;
  height: 102vh;
  transform: skewY(3deg);
  top: 3%;
  left: 0;
  overflow: hidden;
`;

const Wave = styled.img`
  position: absolute;
  width: 100vw;
  bottom: -8%;
  height: 18em;
  transform: skewY(-3deg);
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 18vh;
  width: 90%;
  padding-left: 5%;
  ${media('desktop')} {
    width: 75%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  margin-top: 4em;
  > img {
    cursor: pointer;
    margin-right: 3%;
    width: 35%;
  }
`;

const InfoTitle = styled(H2)`
  color: ${p => p.theme.colors.primary};
  letter-spacing: 1.5px;
`;

const InfoDescription = styled(Description)`
  color: ${p => p.theme.colors.primary};
  margin: 2em 0 5em;
`;

const Mock = styled.img`
  width: 100%;
  max-height: 65vh;
  margin-left: -5%;
`;

const StyledButton = styled(Button)`
  font-weight: 500;
`;

const Demo: FC<{ id: string }> = ({ id }) => {
  return (
    <Section justifyContent="flex-start" fullscreen id={id}>
      <Bg>
        <Wave
          src={getRelativePath('/static/bg/bg-wave.png')}
          srcSet={`${getRelativePath(
            '/static/bg/bg-wave@2x.png',
          )} 2x, ${getRelativePath('/static/bg/bg-wave@3x.png')} 3x`}
        />
      </Bg>
      <Wrapper>
        <div style={{ width: '40%' }}>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce
            style={{ width: '100%' }}
          >
            <InfoTitle>開啟新成就世代！</InfoTitle>
            <InfoDescription className="cn">
              一機裝載所有金融、教育、醫療證書，完善
              區塊鏈驗證體驗，防偽真實，高速零學習曲線。
            </InfoDescription>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce
            delay={500}
            offset={0}
          >
            <StyledButton
              shadow
              onClick={() => alert('尚未開啟')}
              className="cn"
            >
              體驗網頁版 →
            </StyledButton>
            <IconWrapper>
              <img
                onClick={() => alert('敬請期待 ^_^')}
                src={getRelativePath('/static/elements/logo-app-store.png')}
                srcSet={`${getRelativePath(
                  '/static/elements/logo-app-store@2x.png',
                )} 2x, ${getRelativePath(
                  '/static/elements/logo-app-store@3x.png',
                )} 3x`}
              />
              <img
                onClick={() => alert('敬請期待 ^_^')}
                src={getRelativePath('/static/elements/logo-google-play.png')}
                srcSet={`${getRelativePath(
                  '/static/elements/logo-google-play@2x.png',
                )} 2x, ${getRelativePath(
                  '/static/elements/logo-google-play@3x.png',
                )} 3x`}
              />
            </IconWrapper>
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce
          delay={300}
          style={{ width: '60%' }}
        >
          <Mock
            src={getRelativePath('/static/elements/image-mock.png')}
            srcSet={`${getRelativePath(
              '/static/elements/image-mock@2x.png',
            )} 2x, ${getRelativePath('/static/elements/image-mock@3x.png')} 3x`}
          />
        </ScrollAnimation>
      </Wrapper>
    </Section>
  );
};

export default Demo;
