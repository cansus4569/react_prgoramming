import React from 'react';
import useUser from '../CustomHook/useUser';

export default function UseEffect4({ userId }) {
  const user = useUser(userId); // 커스텀 훅 사용
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
