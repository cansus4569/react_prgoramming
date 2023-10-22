import React, { useContext, createContext, useState, useRef } from 'react';

/**
 * 접근하고자 하는 돔 요소의 개수가 많을 때는 어떻게 할 수 있는지 알아보자
 */

export default function RefMultiFunction() {
  // BOX_LIST 요소 하나마다 useRef를 사용하는게 적합하지 않다.
  // 그래서 함수를 입력하는 방법을 사용할 수가 있다.
  // const ref1 = useRef();

  const boxListRef = useRef({});
  function onClick() {
    let maxRight = 0;
    let maxId = 0;
    for (const box of BOX_LIST) {
      const ref = boxListRef.current[box.id];
      if (ref) {
        // 돔 요소에 getBoundingClientRect 함수가 있음
        // 요소의 사각형 정보를 알 수가 있다.
        const rect = ref.getBoundingClientRect();
        if (maxRight < rect.right) {
          maxRight = rect.right;
          maxId = box.id;
        }
      }
    }
    alert(`오른쪽 끝 요소는 ${maxId} 입니다.`);
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100vw',
          height: '100%',
        }}
      >
        {BOX_LIST.map((item) => (
          <div
            key={item.id}
            ref={(ref) => (boxListRef.current[item.id] = ref)}
            style={{
              flex: '0 0 auto',
              width: item.width,
              height: 100,
              backgroundColor: 'yellow',
              border: 'solid 1px red',
            }}
          >{`box_${item.id}`}</div>
        ))}
      </div>
      <button onClick={onClick}>오른쪽 끝 요소는?</button>
    </div>
  );
}

const BOX_LIST = [
  { id: 1, width: 70 },
  { id: 2, width: 100 },
  { id: 3, width: 80 },
  { id: 4, width: 100 },
  { id: 5, width: 90 },
  { id: 6, width: 60 },
  { id: 7, width: 120 },
];
