import { FC } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import ScrollInfo from '@/components/ScollInfo';
import Description from '@/components/Description';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';

const AnimatedWrapper = styled(ScrollAnimation)`
  width: 100%;
  text-align: center;
`;

const Title = styled(H2)`
  margin-top: 18vh;

  ${media('largeDesktop')} {
    margin-top: 20vh;
  }
`;

const StyledDescription = styled(Description)`
  width: 70%;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 2em;
  margin: 0 auto;

  ${media('desktop')} {
    width: 47%;
  }
`;

const IconGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 7.5em 0;
  ${media('pad')} {
    justify-content: space-between;
  }

  ${media('desktop')} {
    width: 55%;
  }
`;

const IconWrapper = styled(ScrollAnimation)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 3em;
  ${media('pad')} {
    width: 50%;
  }
  ${media('desktop')} {
    width: 30%;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.primary};
  margin-bottom: 2em;

  > img {
    width: 50%;
  }
`;

const IconDescription = styled.p`
  white-space: nowrap;
  font-size: ${p => p.theme.fontSize.bigger};
  font-family: ${p => p.theme.fontFamily.NotoSansTC};
  font-weight: 500;
  letter-spacing: 1px;
`;

const Service: FC<{ id: string }> = ({ id }) => {
  return (
    <Section justifyContent="flex-start" id={id} fullscreen>
      <AnimatedWrapper animateIn="fadeInUp" animateOnce>
        <Title>區塊鏈成就履歷</Title>
        <StyledDescription className="cn">
          透過區塊鏈不可篡改、可追溯、成本節省、跨國界的優勢，重新定義傳統教育認證，創造穩定永續的學習旅程追蹤，保證用戶絕對資料掌控權與隱私優先策略，強化官方權威證書的最高信任與真實價值。
        </StyledDescription>
      </AnimatedWrapper>
      <IconGroupWrapper>
        <IconWrapper animateIn="zoomIn" duration={0.5} animateOnce>
          <Icon>
            <img
              src={getRelativePath('/static/icon/icon-contract.png')}
              srcSet={`${getRelativePath(
                '/static/icon/icon-contract@2x.png',
              )} 2x, ${getRelativePath(
                '/static/icon/icon-contract@3x.png',
              )} 3x`}
            />
          </Icon>
          <IconDescription>個人學習成就歷程追溯</IconDescription>
        </IconWrapper>
        <IconWrapper animateIn="zoomIn" duration={0.5} animateOnce delay={300}>
          <Icon>
            <img
              src={getRelativePath('/static/icon/icon-secure.png')}
              srcSet={`${getRelativePath(
                '/static/icon/icon-secure@2x.png',
              )} 2x, ${getRelativePath('/static/icon/icon-secure@3x.png')} 3x`}
            />
          </Icon>
          <IconDescription>W3C DID 去中心身份協定</IconDescription>
        </IconWrapper>
        <IconWrapper animateIn="zoomIn" duration={0.5} animateOnce delay={600}>
          <Icon>
            <img
              src={getRelativePath('/static/icon/icon-infinite.png')}
              srcSet={`${getRelativePath(
                '/static/icon/icon-infinite@2x.png',
              )} 2x, ${getRelativePath(
                '/static/icon/icon-infinite@3x.png',
              )} 3x`}
            />
          </Icon>
          <IconDescription>最高隱私保留演算法</IconDescription>
        </IconWrapper>
      </IconGroupWrapper>
      <ScrollInfo />
    </Section>
  );
};

export default Service;
