import React from 'react';
import useWindowWidth from '../CustomHook/useWindowWidth';

export default function UseEffect5() {
  const width = useWindowWidth(); // 커스텀 훅 사용

  return <div>{`width is ${width}`}</div>;
}
