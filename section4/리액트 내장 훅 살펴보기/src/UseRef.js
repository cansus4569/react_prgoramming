import React, { useState, useRef, useEffect } from 'react';

export default function UseRef() {
  //   const timerIdRef = useRef(-1);
  //   useEffect(() => {
  //     timerIdRef.current = setTimeout(() => {}, 1000);
  //   });

  //   useEffect(() => {
  //     if (timerIdRef.current >= 0) {
  //       clearTimeout(timerIdRef.current);
  //     }
  //   });
  const [age, setAge] = useState(20);
  const prevAgeRef = useRef(20); // 이전 상태값을 기억하고 싶어서 ref 활용
  useEffect(() => { // useEffect는 렌더링된 후에 호출이 됨
    prevAgeRef.current = age; // useEffect 안에서 값을 업데이트
  }, [age]);
  const prevAge = prevAgeRef.current;
  const text = age === prevAge ? 'same' : age > prevAge ? 'older' : 'younger';
  return (
    <div>
      <p>{`age ${age} is ${text} than age ${prevAge}`}</p>
      <button
        onClick={() => {
          const age = Math.floor(Math.random() * 50 + 1);
          setAge(age);
        }}
      >
        나이 변경
      </button>
    </div>
  );
}
