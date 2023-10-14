import React, { useState } from 'react';

function MyComponent() {
  const [value, setValue] = useState(0);

  /**
   * 규칙1 : 하나의 컴포넌트에서 훅을 호출하는 순서는 항상 같아야 한다.
   *
   * if문 안에서 훅을 사용하면 안된다.
   */
  if (value === 0) {
    const [v1, setV1] = useState(0);
  } else {
    const [v1, setV1] = useState(0);
    const [v2, setV2] = useState(0);
  }

  /**
   * value에 따라서 useState 사용 횟수가 달라짐
   */
  for (let i = 0; i < value; i++) {
    const [num, setNum] = useState(0);
  }

  /**
   * 함수 안에서도 호출하면 안된다.
   * 함수가 항상 호출된다는 보장이 없다.
   */
  function func1() {
    const [num, setNum] = useState(0);
  }
}
