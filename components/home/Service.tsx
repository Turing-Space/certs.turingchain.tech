import { FC } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import ScrollInfo from '@/components/ScollInfo';
import Description from '@/components/Description';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';

const Title = styled(H2)`
  margin-top: 18vh;

  ${media('largeDesktop')} {
    margin-top: 20vh;
  }
`;

const StyledDescription = styled(Description)`
  width: 40%;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 2em;
`;

const IconGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 55%;
  margin-top: 7.5em;
  ${media('pad')} {
    justify-content: space-between;
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
  font-size: ${p => p.theme.fontSize.bigger};
  font-family: ${p => p.theme.fontFamily.NotoSansTC};
  font-weight: 500;
  letter-spacing: 1px;
`;

const Service: FC<{ id: string }> = ({ id }) => {
  return (
    <Section justifyContent="flex-start" id={id} fullscreen>
      <Title>區塊鏈成就履歷</Title>
      <StyledDescription className="cn">
        透過區塊鏈不可篡改、無國界的優勢，重新定義傳統教育，創造穩定永續的學習旅程追蹤，強化官方證書的最高信任與真實價值。
      </StyledDescription>
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
          <IconDescription>可追蹤的個人學習歷程</IconDescription>
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
          <IconDescription>區塊鏈等級的安全性</IconDescription>
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
          <IconDescription>穩定及永續的系統</IconDescription>
        </IconWrapper>
      </IconGroupWrapper>
      <ScrollInfo />
    </Section>
  );
};

export default Service;
