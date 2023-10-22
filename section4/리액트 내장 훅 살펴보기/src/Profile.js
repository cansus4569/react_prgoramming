import React, { forwardRef, useState, useImperativeHandle } from 'react';

/*
  클래스형 컴포넌트의 부모 컴포넌트는 ref 객체를 통해서
  자식 컴포넌트의 메서드를 호출할 수 있다.

  useImperativeHandle 훅을 이용하면
  함수형 컴포넌트에도 멤버 변수나 멤버 함수가 있는 것처럼 만들 수 있다.
*/

function Profile(_, ref) {
  const [name, setName] = useState('cansus');
  const [age, setAge] = useState(0);

  useImperativeHandle(ref, () => ({
    addAge: (value) => setAge(age + value),
    getNameLength: () => name.length,
  }));

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
      {/* ... */}
    </div>
  );
}

export default forwardRef(Profile);
