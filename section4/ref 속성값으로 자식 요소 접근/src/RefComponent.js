import React, { useRef, useEffect } from 'react';

export default function RefComponent() {
  const inputRef = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <InputAndSave inputRef={inputRef} />
      <Button ref={buttonRef} />
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
}

// 별다른 처리를 하지 않았다면 이러한 함수형 컴포넌트에
// reft 속성값을 입력할 수는 없다!
// 여기서는 inputRef 라는 속성 이름으로
// 받아서 내부에 있는 자식에게 ref 속성값으로 입력을 하고 있다.
function InputAndSave({ inputRef }) {
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button>저장</button>
    </div>
  );
}

// forwardRef 함수를 활용
// 두 번째 매개변수로 ref 속성값을 받을 수 있다.

const Button = React.forwardRef(function ({}, ref) {
  return <button ref={ref}>저장</button>;
});
