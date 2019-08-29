import styled from 'styled-components';
import { FC } from 'react';

const Wrapper = styled.div<{ color?: string; scale?: number }>`
  display: inline-block;
  position: relative;
  width: ${p => (p.scale || 1) * 32}px;
  height: ${p => (p.scale || 1) * 32}px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${p => (p.scale || 1) * 27}px;
    height: ${p => (p.scale || 1) * 27}px;
    margin: ${p => (p.scale || 1) * 3}px;
    border: ${p => (p.scale || 1) * 3}px solid ${p => p.color || '#fff'};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${p => p.color || '#fff'} transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

type TProps = {
  className?: string;
  color?: string;
  scale?: number;
};

const Spinner: FC<TProps> = ({ className, color, scale }) => (
  <Wrapper className={className} color={color} scale={scale}>
    <div />
    <div />
    <div />
    <div />
  </Wrapper>
);

export default Spinner;
