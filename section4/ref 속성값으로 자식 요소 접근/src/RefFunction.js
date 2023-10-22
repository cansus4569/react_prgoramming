import React, { useCallback, useState } from 'react';

// ref 속성값에 함수를 입력 하는 코드
// useRef를 사용하지 않고 ref 속성값에 함수를 입력할 수 있다.
// 이 함수는 해당하는 요소가 생성되거나 사라질 때 한 번씩 호출된다.
// 생성될 때는 해당하는 요소의 레퍼런스가 넘어온다.
// 사라질 때는 null 값이 넘어온다.

// 이 코드에서는 요소가 생성될 때 INITIAL_TEXT 를 초기 상태값으로 초기 text의 상태값으로 입력하는 코드

// < 문제점 >
// input 요소에 키보드를 입력해도 값 입력이 불가하다.
// 이러한 이유는 컴포넌트가 렌더링될 때마다
// 새로운 함수를, 이 새로운 ref 함수를 입력하고 있기 때문이다.

// 리액트는 ref 속성값으로 새로운 함수가 들어오면 이전 함수에 null 인수를 넣어서 호출한다.
// 그리고 새로운 함수에는 요소의 참조값을 넣어서 다시 호출을 해준다.
// 즉, 계속 컴포넌트가 렌더링이 될텐데 그때마다 ref 속성값에 정의된 함수가 입력되면서
// INITIAL_TEXT가 계속해서 입력되기 떄문이다.

// 이를 해결하기 위해서는 ref 속성값에 정의된 함수를 고정할 필요가 있다.
// useCallback 훅을 사용할 수가 있다.

export default function RefFunction() {
  const [text, setText] = useState(INITIAL_TEXT);
  const [showText, setShowText] = useState(true);

  // useCallback 훅의 메모이제이션 기능 덕분에 한번 생성된 이 함수를 계속해서 재사용한다
  const setInitialText = useCallback((ref) => ref && setText(INITIAL_TEXT), []);

  return (
    <div>
      {showText && (
        <input
          type="text"
          //   ref={(ref) => ref && setText(INITIAL_TEXT)}
          ref={setInitialText}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}
      <button onClick={() => setShowText(!showText)}>보이기/가리기</button>
    </div>
  );
}
const INITIAL_TEXT = '안녕하세요';
