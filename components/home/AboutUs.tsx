import { FC } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import ScrollInfo from '@/components/ScollInfo';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';

const Title = styled(H2)`
  margin-top: 18vh;

  ${media('largeDesktop')} {
    margin-top: 22vh;
  }
`;

const Logo = styled.img`
  width: 21vw;
  margin-top: 2%;
`;

const Divider = styled.div`
  width: 62.5%;
  height: 1px;
  opacity: 0.1;
  background-color: #fff;
  margin: 3% auto;
`;

const Text = styled.p`
  width: 40vw;
  margin-bottom: 1em;
  text-align: center;
  line-height: 1.5;
  letter-spacing: 0.56px;

  &.en {
    opacity: 0.4;
    font-size: ${p => p.theme.fontSize.smaller};
  }
`;

const AboutUs: FC<{ id: string }> = ({ id }) => {
  return (
    <Section id={id} justifyContent="flex-start" fullscreen>
      <Title>ABOUT US</Title>
      <ScrollAnimation animateIn="fadeInUp">
        <Logo
          src={getRelativePath('/static/logo/logo-tc-title.png')}
          srcSet={`${getRelativePath(
            '/static/logo/logo-tc-title@2x.png',
          )} 2x, ${getRelativePath('/static/logo/logo-tc-title@3x.png')} 3x`}
        />
      </ScrollAnimation>
      <Divider />
      <ScrollAnimation animateIn="fadeInUp" delay={400} offset={0}>
        <Text className="cn">
          圖靈鏈是一個屢獲殊榮，敏捷且國際化的團隊，主導開發區塊鏈項目，囊括紐約新聞媒體、台灣電影產業、與俄羅斯及澳門博彩集團。
        </Text>
        <Text className="en">
          Turing Chain is an award-winning, agile, and international team. We
          developed blockchains for New York news media, Taiwanese movie
          production, and Russia & Macao-based casinos.
        </Text>
      </ScrollAnimation>
      <ScrollInfo />
    </Section>
  );
};

export default AboutUs;
