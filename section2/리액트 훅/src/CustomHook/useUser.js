import { useState, useEffect } from 'react';

export default function useUser(userId) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserApi(userId).then((data) => setUser(data));
  }, [userId]);

  return user;
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
