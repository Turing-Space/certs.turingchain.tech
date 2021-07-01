import { FC } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import Description from '@/components/Description';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';
import { i18nNamespace } from '@/utils/constants';
import { useTranslation } from 'react-i18next';

const AnimatedWrapper = styled(ScrollAnimation)`
  width: 100%;
  text-align: center;
`;

const Title = styled(H2)`
  margin-top: 18vh;
  color: ${p => p.theme.colors.websiteCatelogWordGold};

  ${media('largeDesktop')} {
    margin-top: 20vh;
  }
`;

const IconGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 7.5em 0;
  ${media('pad')} {
    justify-content: space-around;
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
  margin-bottom: 10em;
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
  background-color: ${p => p.theme.colors.backgroundShapeGold};
  margin-bottom: 2em;

  > img {
    width: 100%;
  }
`;

const Bookmark = styled.img`
  position: absolute;
  left: 10%;
  top: -3%;
  width: 7%;
`;

const IconDescription = styled.p<{ isEn: boolean }>`
  white-space: ${p => (p.isEn ? 'pre-line' : 'nowrap')};
  font-size: ${p => p.theme.fontSize.bigger};
  font-family: ${p => p.theme.fontFamily.NotoSansTC};
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 1em;
`;

const IconSubDescription = styled(Description)`
  width: 90%;
  text-align: left;
  letter-spacing: 0.5px;
  line-height: 1.4;
  margin: 0 1em;

  ${media('desktop')} {
    width: 80%;
  }
`;

const Characteristic: FC<{ id: string }> = ({ id }) => {
  const { t, i18n } = useTranslation(i18nNamespace.Home);
  const isEn = i18n.language === 'en';
  return (
    <Section justifyContent="flex-start" id={id} fullscreen>
      <Bookmark
        src={getRelativePath('/static/icon/bookmark.png')}
        srcSet={`${getRelativePath('/static/icon/bookmark@2x.png')} 2x`}
      />
      <AnimatedWrapper animateIn="fadeInUp" animateOnce>
        <Title>{t('characteristic.title')}</Title>
      </AnimatedWrapper>
      <IconGroupWrapper>
        <IconWrapper animateIn="zoomIn" duration={0.5} animateOnce>
          <Icon>
            <img
              src={getRelativePath('/static/icon/icon_1.png')}
              srcSet={`${getRelativePath('/static/icon/icon_1@2x.png')} 2x`}
            />
          </Icon>
          <IconDescription isEn={isEn}>
            {t('characteristic.icons.0')}
          </IconDescription>
          <IconSubDescription>
            {t('characteristic.subdescriptions.0')}
          </IconSubDescription>
        </IconWrapper>
        <IconWrapper animateIn="zoomIn" duration={0.5} animateOnce delay={300}>
          <Icon>
            <img
              src={getRelativePath('/static/icon/icon_2.png')}
              srcSet={`${getRelativePath('/static/icon/icon_2@2x.png')} 2x`}
            />
          </Icon>
          <IconDescription isEn={isEn}>
            {t('characteristic.icons.1')}
          </IconDescription>
          <IconSubDescription>
            {t('characteristic.subdescriptions.1')}
          </IconSubDescription>
        </IconWrapper>
        <IconWrapper animateIn="zoomIn" duration={0.5} animateOnce delay={600}>
          <Icon>
            <img
              src={getRelativePath('/static/icon/icon_3.png')}
              srcSet={`${getRelativePath('/static/icon/icon_3@2x.png')} 2x`}
            />
          </Icon>
          <IconDescription isEn={isEn}>
            {t('characteristic.icons.2')}
          </IconDescription>
          <IconSubDescription>
            {t('characteristic.subdescriptions.2')}
          </IconSubDescription>
        </IconWrapper>
      </IconGroupWrapper>
    </Section>
  );
};

export default Characteristic;
