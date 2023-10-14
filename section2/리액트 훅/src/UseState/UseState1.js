import React, { useState } from 'react';

export default function UseState1() {
  const [count, setCount] = useState(0);

  function onClick() {
    // 두 번 수행하도록 의도했지만, 의도한 대로 동작하지는 않음
    setCount(count + 1);
    setCount(count + 1);

    /**
     * 상태값 변경 함수는 비동기이면서 배치(batch)로 처리되기 때문
     *
     * 만약, 리액트가 상태값 변경 함수를 동기로 처리하면
     * 하나의 상태값 변경 함수가 호출될 때 마다
     * 화면을 다시 그리기 때문에, 성능 이슈가 발생하게됨
     *
     * 상태값 변경은 동기로 처리하고
     * 매번 화면을 다시 그리지 않는다면
     * UI데이터와 화면간의 불일치가 발생해서
     * 혼란을 발생함
     *
     */
    // 두번 수행하도록 의도할려면, 다음과 같이 함수로 작성해야함
    // setCount((v) => v + 1);
    // setCount((v) => v + 1);
  }

  console.log('render called'); // 한번만 렌더링이 이루어져 콘솔로그도 1번만 찍힘
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}
