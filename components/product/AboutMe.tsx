import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useContext } from 'react';
import { CertsContext } from '@/contexts/certs';
import AboutMeWrapper from '@/components/AboutMeWrapper';
import { media } from '@/utils/theme';

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 8.2em;
  height: 8.2em;
  border-radius: 50%;
  border: solid 6px ${p => p.theme.colors.primary};
  margin-left: 2em;
  > p {
    letter-spacing: 0.67px;
  }

  ${media('largeDesktop')} {
    width: 8.5em;
    height: 8.5em;
  }
`;

const AnimatedNumber = styled(animated.p)`
  color: ${p => p.theme.colors.primary};
  margin-top: 3px;
  font-size: 3em;
  font-weight: bold;
  font-family: ${p => p.theme.fontFamily.SFText};
`;

const AboutMe = () => {
  const { certs } = useContext(CertsContext);
  const certificatedCount = certs.filter(d => !!d.verified).length;
  const certificatingCount = certs.length - certificatedCount;

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
      name: '認證數量',
      count: certs.length,
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
    <AboutMeWrapper title={'關於我'}>
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
    </AboutMeWrapper>
  );
};

export default AboutMe;
