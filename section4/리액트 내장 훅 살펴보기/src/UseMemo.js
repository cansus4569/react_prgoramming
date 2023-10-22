import React, { useMemo, useState } from 'react';

/**
 * useMemo 훅은 계산량이 많은 함수의 반환값을 재활용하는 용도로 사용된다.
 * 예제에서는 runExpensiveJob이 계산량이 많다고 가정한다.
 */

export default function UseMemo() {
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [v3, setV3] = useState(0);
  // useMemo 훅의 첫번째 매개변수로 함수를 입력 => 함수가 실행된 결과값을 리액트가 기억함
  // 첫번째 매개변수 함수의 실행 시점 : 두번째 매개변수에 정의된 값이 변경될 때
  // 두번째 매개변수에 정의된 값이 변경되지 않았다면, 이전에 실행해서 저장했던 값을 재활용 함
  const value = useMemo(() => runExpensiveJob(v1, v2), [v1, v2]);
  return (
    <>
      <p>{`value is ${value}`}</p>
      <button
        onClick={() => {
          setV1(Math.random());
          setV2(Math.random());
        }}
      >
        v1/v2 수정
      </button>
      <p>{`v3 is ${v3}`}</p>
      <button onClick={() => setV3(Math.random())}>v3 수정</button>
    </>
  );
}

function runExpensiveJob(v1, v2) {
  console.log('runExpensiveJob is called');
  // run something too expensive
  return v1 + v2;
}
