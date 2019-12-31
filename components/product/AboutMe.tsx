import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useContext } from 'react';
import { CertsContext } from '@/contexts/certs';
import AboutMeWrapper from '@/components/AboutMeWrapper';
import { media } from '@/utils/theme';
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/constants';

const AboutMeWrapperExtend = styled(AboutMeWrapper)`
  justify-content: center;
  align-items: center;

  ${media('desktop')} {
    display: flex;
  }

  ${media('phone')} {
    display: inline;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 8.2em;
  height: 8.2em;
  border-radius: 50%;
  margin-left: 2em;
  > p {
    letter-spacing: 0.67px;
  }

  ${media('largeDesktop')} {
    width: 8.5em;
    height: 8.5em;
    border: solid 6px ${p => p.theme.colors.primary};
  }

  ${media('desktop')} {
    width: 8.2em;
    height: 8.2em;
    border: solid 6px ${p => p.theme.colors.primary};
  }

  ${media('phone')} {
    width: 7em;
    height: 7em;
    font-size: 0.61em;
  }
`;

const AnimatedNumber = styled(animated.p)`
  color: ${p => p.theme.colors.primary};
  margin-top: 3px;
  font-weight: bold;
  font-family: ${p => p.theme.fontFamily.SFText};
  
  ${media('phone')} {
    font-size: 2em;
    float: right
  }

  ${media('desktop')} {
    font-size: 3em;
  }
`;

const AboutMe = () => {
  const { certs } = useContext(CertsContext);
  const certificatedCount = certs.filter(d => !!d.verified).length;
  const certificatingCount = certs.length - certificatedCount;
  const { t } = useTranslation(i18nNamespace.Product);

  const certsProps = useSpring({
    number: certs.length,
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
      name: t('AboutMe.icon1'),
      count: certs.length,
      props: certsProps,
    },
    {
      name: t('AboutMe.icon2'),
      count: certificatedCount,
      props: certificatedProps,
    },
    {
      name: t('AboutMe.icon3'),
      count: certificatingCount,
      props: certificatingProps,
    },
  ];
  return (
    <AboutMeWrapperExtend title={t('AboutMe.title')}>
      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      > */}
      {icons.map(icon => (
        <IconWrapper key={icon.name}>
          <p>{icon.name}</p>
          <AnimatedNumber>
            {icon.props.number.interpolate(x => x.toFixed(0))}
          </AnimatedNumber>
        </IconWrapper>
      ))}
      {/* </div> */}
    </AboutMeWrapperExtend>
  );
};


export default AboutMe;