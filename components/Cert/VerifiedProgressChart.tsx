import styled from 'styled-components';
import { PieChart, Pie, Cell } from 'recharts';
import { FC } from 'react';
import { useSpring, animated } from 'react-spring';

import theme from '@/themes/theme';
import { getRelativePath } from '@/utils';

const Wrapper = styled.div<{ size: number }>`
  position: absolute;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  right: 0;
  bottom: 0;
`;

const AnimatedNumber = styled(animated.p)<{ size: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  color: ${p => p.theme.colors.blue};
  font-size: ${p => {
    if (p.size > 80) {
      return '1rem';
    } else if (p.size > 50) {
      return p.theme.fontSize.smaller;
    } else {
      return p.theme.fontSize.small;
    }
  }};
  font-weight: 400;
`;

const ChartWrapper = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const ShieldWrapper = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;

  > img {
    width: 85%;
  }
`;

type TProps = {
  size?: number;
  className?: string;
  verified: boolean;
  progress: number;
};

const COLORS = [theme.colors.blue, '#d9d9d9'];

const VerifiedPiechart: FC<TProps> = ({
  size = 70,
  className,
  progress,
  verified,
}) => {
  const [shieldProps, setShieldProps] = useSpring(() => ({
    opacity: 0,
    transform: 'translate3d(0, 20%, 0)',
    config: {
      tension: 60,
    },
  }));
  const chartProps = useSpring({
    to: async (next: any) => {
      await next({
        number: progress,
        config: {
          duration: 1000,
        },
      });
      if (verified) {
        await next({
          number: progress,
          config: {
            duration: 250,
          },
        });
        await next({
          opacity: 0,
          filter: 'blur(10px)',
          config: {
            duration: 500,
          },
        });
        setShieldProps({
          opacity: 1,
          transform: 'translate3d(0, 0, 0)',
        });
      }
    },
    from: {
      number: 0,
      filter: 'blur(0px)',
      opacity: 1,
    },
  });

  const data = [
    {
      value: progress,
    },
    {
      value: 100 - progress,
    },
  ];

  return (
    <Wrapper size={size} className={className}>
      <ShieldWrapper style={shieldProps}>
        <img
          src={getRelativePath('/static/icon/icon-certicheck.png')}
          srcSet={`${getRelativePath(
            '/static/icon/icon-certicheck@2x.png',
          )} 2x, ${getRelativePath('/static/icon/icon-certicheck@3x.png')} 3x`}
        />
      </ShieldWrapper>
      <ChartWrapper
        // @ts-ignore
        style={{ filter: chartProps.filter, opacity: chartProps.opacity }}
      >
        <PieChart width={size} height={size}>
          <Pie
            animationDuration={1000}
            data={data}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            cx="50%"
            cy="50%"
            innerRadius="75%"
            outerRadius="100%"
            fill="#d9d9d9"
            stroke="none"
            paddingAngle={0}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
        <AnimatedNumber size={size}>
          {chartProps.number.interpolate(x => `${Number(x).toFixed(0)}%`)}
        </AnimatedNumber>
      </ChartWrapper>
    </Wrapper>
  );
};

export default VerifiedPiechart;
