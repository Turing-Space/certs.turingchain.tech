import styled from 'styled-components';
import { FC } from 'react';

const LoadingWrapper = styled.div<{ color?: string }>`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 8px;
  margin: 5px;

  div {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${p => p.color || '#fff'};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
`;

type TProps = {
  className?: string;
  color?: string;
};

const Loading: FC<TProps> = ({ className, color }) => {
  return (
    <LoadingWrapper className={className} color={color}>
      <div />
      <div />
      <div />
      <div />
    </LoadingWrapper>
  );
};

export default Loading;
