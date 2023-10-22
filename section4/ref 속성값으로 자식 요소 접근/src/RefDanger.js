import React, { useRef, useState } from 'react';

/**
 * ref 속성값을 사용할 때 주의할 점
 *
 * 컴포넌트가 생성된 이유라고 하더라도 ref 객체의 current 속성이 없을 수 있다.
 * 따라서 조건부 렌더링에 사용된 요소의 ref 객체는 current 속성을 검사하는 코드가 필요하다.
 */

export default function RefDanger() {
  const inputRef = useRef();
  const [showText, setShowText] = useState(true);

  return (
    <div>
      {showText && <input type="text" ref={inputRef} />}
      <button onClick={() => setShowText(!showText)}>
        텍스트 보이기/가리기
      </button>

      {/* input 요소가 존재하지 않을 때 버튼을 클릭하게되면 문제가 될 수있다.
        이 안에서 지금 ref 객체를 사용하고 있다. */}
      {/* <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button> */}

      {/* current값을 검사하는 코드를 추가함 */}
      <button onClick={() => inputRef.current && inputRef.current.focus()}>
        텍스트로 이동
      </button>
    </div>
  );
}
