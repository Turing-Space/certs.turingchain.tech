import { useState, useRef, MutableRefObject } from 'react';

export type TSetRefState<T> = (val: T) => void;

/**
 * make ref value be state, setRefState will also re-render
 */
const useRefState: <T>(
  v: T,
) => [MutableRefObject<T>, TSetRefState<T>] = defaultVal => {
  const [, setState] = useState(defaultVal);
  const ref = useRef(defaultVal);

  const setRefState: TSetRefState<typeof defaultVal> = val => {
    ref.current = val;
    setState(val);
  };

  return [ref, setRefState];
};

export default useRefState;
