import React, { useRef, useEffect } from 'react';

function RefElement() {
  // useRef훅 사용
  // 반환된 값을 요소의 ref 속성에 넣어줘서 사용하면됨
  const inputRef = useRef();
  useEffect(() => {
    // current 속성은 실제 돔 요소를 가리킴
    inputRef.current.focus();
    // 실제 돔 요소는 렌더링 결과가 실제 돔에 반영된 후에
    // 접근할 수 있기 때문에
    // 그래서, 이 부수효과 안에서 접근할 수가 있다.
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button>저장</button>
    </div>
  );
}

export default RefElement;
