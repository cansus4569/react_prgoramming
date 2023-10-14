import React, { useState, useEffect } from 'react';

export default function UseEffect2({ userId }) {
  const [user, setUser] = useState(null);

  /**
   * useEffect 2번째 매개변수 : 의존성 배열
   * 의존성 배열에 있는 값이 변경될 때만 부수효과 함수(1번째 매개변수)가 실행된다.
   * ex) userId 가 변경될 때만 부수효과 함수가 실행
   *
   * 의존성 배열에 빈 배열을 입력하면,
   * 부수효과 함수는 마운트된 이후에 한 번만 호출된다.
   *
   * 의존성 배열에 들어올 수 있는 값 -> 부수효과 함수에서 사용한 변수를 잘 봐야함
   *    컴포넌트의 상태값이나 속성값
   *    컴포넌트 내부에서 정의된 지역 변수나 지역 함수
   *    예외 : 상태값 변경 함수는 X
   */
  useEffect(() => {
    getUserApi(userId).then((data) => setUser(data));
  }, [userId]);

  return (
    <div>
      {!user && <p>사용자 정보를 가져오는 중...</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  );
}

const USER1 = { name: 'park', age: 23 };
const USER2 = { name: 'kim', age: 31 };
function getUserApi(userId) {
  return new Promise((res) => {
    setTimeout(() => {
      res(userId % 2 ? USER1 : USER2);
    }, 500);
  });
}
