import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useContext, memo } from 'react';
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

const AboutMe = memo(() => {
  const { certs } = useContext(CertsContext);
  const typeCount = certs.reduce<string[]>((acc, c) => {
    if (!acc.includes(c.name)) {
      acc.push(c.name);
    }
    return acc;
  }, []).length;

  const typeCountProps = useSpring({
    number: typeCount,
    from: { number: 0 },
  });
  const certsProps = useSpring({
    number: certs.length,
    from: { number: 0 },
  });

  const icons = [
    {
      name: '證書種類',
      props: typeCountProps,
    },
    {
      name: '已發出數量',
      props: certsProps,
    },
  ];
  return (
    <AboutMeWrapper title="發證單位">
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
});

export default AboutMe;
