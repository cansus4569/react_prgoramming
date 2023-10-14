import React, { useState, useEffect } from 'react';

export default function UseEffect3() {
  const [width, setWidth] = useState(window.innerWidth);

  /**
   * 부수효과 함수에서 반환하는 함수(return)는
   * 다음 부수 효과 함수가 호출되기 직전에 호출된다.
   * 또는 컴포넌트가 사라지기 직전(unmount) 마지막으로 호출된다.
   * -> 즉, 컴포넌트가 unmount 되기 전에 적어도 한번은 호출된다는 것이 보장된다.
   *
   * 의존성 배열로 빈 배열을 입력하면,
   * 컴포넌트가 생성될 때만 부수 효과 함수가 호출되고
   * 컴포넌트가 사라질 때만 반환 함수가 호출이 된다.
   *
   */

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize); // 이벤트 핸들러 등록
    console.log('부수 효과 함수 실행');
    return () => {
      window.removeEventListener('resize', onResize); // 이벤트 핸들러 해제
      console.log('부수 효과 반환 실행');
    };
  }, []);

  return <div>{`width is ${width}`}</div>;
}
