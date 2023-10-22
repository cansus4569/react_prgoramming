import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

export default function UseLayoutEffect() {
  const [width, setWidth] = useState(200);
  const boxRef = useRef();
  // useEffect 훅에 입력된 부수효과 함수는 렌더링 결과가 돔에 반영된 후에 비동기로 호출이 된다.
  // useLayoutEffect 훅은 동기로 호출한다는 점이 다르다.
  // -> 즉, 렌더링 결과가 돔에 반영된 직후에 바로 호출된다.
  /*
    useLayoutEffect 훅의 부수효과 함수에서 연산을 많이하면, 브라우저가 먹통이 된다.
    그래서 주의를 해야한다.
    특별한 이유가 없다면, useEffect 훅을 사용하는 것이 성능상 이점이 있다.
  */
  /*
    useLayoutEffect 훅을 사용하기 좋은 적합한 예
    - 렌더링 직후에 돔 요소의 값을 읽어들이는 경우
    - 조건에 따라서 컴포넌트를 다시 렌더링하고 싶은 경우
   */
  //   useEffect(() => {
  //     // 여기서 width 값이 500 이상일 경우, 깜빡거리며 보이다가 width=500 으로 설정되어 보여준다.
  //     if (width > 500) {
  //       setWidth(500);
  //     }
  //   }, [width]);

  useLayoutEffect(() => {
    console.log(boxRef.current.getBoundingClientRect().width);
    // 깜빡임 없이 무조건 500으로 고정해서 보여준다.
    if (width > 500) {
      setWidth(500);
    }
    // 연산량이 많은 샘플 코드 입력 -> 렌더링에 버벅임을 확인할 수 있다.
    // 그러므로 useLayoutEffect는 부수효과 함수에서 연산을 많이하는 경우, 사용하면 안된다.
    let v = 0;
    for (let i = 0; i < 1000000000; i++) {
      v += i * 2 + i;
    }
    console.log(v);
  }, [width]);
  return (
    <div>
      <div
        ref={boxRef}
        style={{ width, height: 100, backgroundColor: 'green' }}
      >
        test
      </div>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 499 + 1);
          setWidth(value);
        }}
      >
        500 이하
      </button>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 500 + 501);
          setWidth(value);
        }}
      >
        500 이상
      </button>
    </div>
  );
}
