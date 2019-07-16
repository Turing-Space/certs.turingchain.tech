import { useEffect, useRef, useState } from 'react';

const isClient = typeof window === 'object';

export type TState = {
  x: number;
  y: number;
  oldX: number;
  oldY: number;
};

const useWindowScroll = (): TState => {
  const frame = useRef(0);
  const [state, setState] = useState<TState>({
    x: isClient ? window.scrollX : 0,
    y: isClient ? window.scrollY : 0,
    oldX: isClient ? window.scrollX : 0,
    oldY: isClient ? window.scrollY : 0,
  });

  useEffect(() => {
    const handler = () => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        setState(oldState => ({
          x: window.scrollX,
          y: window.scrollY,
          oldX: oldState.x,
          oldY: oldState.y,
        }));
      });
    };

    window.addEventListener('scroll', handler, {
      capture: false,
      passive: true,
    });

    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return state;
};

export default useWindowScroll;
