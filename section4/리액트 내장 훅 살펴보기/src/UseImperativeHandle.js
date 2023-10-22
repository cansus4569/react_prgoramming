import React, { useRef } from 'react';
import Profile from './Profile';

/*
    부모 컴포넌트에서 자식 컴포넌트가 제공해준 함수를 호출할 수 있다.
    getNameLength()
    addAge()
*/
export default function UseImperativeHandle() {
  const profileRef = useRef();
  const onClick = () => {
    if (profileRef.current) {
      console.log('current name length:', profileRef.current.getNameLength());
      profileRef.current.addAge(5);
    }
  };
  return (
    <div>
      <Profile ref={profileRef} />
      <button onClick={onClick}>add age 5</button>
    </div>
  );
}
