import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext('unknown');
const ThemeContext = createContext('dark');

function ContextHook() {
  const [name, setName] = useState('cansus');
  return (
    <div>
      <ThemeContext.Provider value="light">
        <UserContext.Provider value={name}>
          <div>상단 메뉴</div>
          <Profile />
          <div>하단 메뉴</div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

// function Profile() {
//   console.log('Profile Render');
//   return (
//     <div>
//       <Greeting />
//     </div>
//   );
// }

/**
 * React.memo 를 이용하여
 * 중간 단계인 Profile 컴포넌트는 렌더링 안되도록 할 수 있다.
 * 즉, 렌더링 최적화를 한 것이다!
 */
const Profile = React.memo(function () {
  console.log('Profile Render');
  return (
    <div>
      <Greeting />
      <Greeting_1 />
    </div>
  );
});

function Greeting() {
  // 2. 이 부분에서 username 을 사용할 수 없다...
  //  -> why? : UserContext.Consumer 안이 아니기에...
  // Q. How to use 'username' ?
  return (
    // 1. JSX 문법안에 UserContext.Consumer 안에서만 username 가져다 사용할 수있다.
    <UserContext.Consumer>
      {(username) => <p>{`${username} Hi~!`}</p>}
    </UserContext.Consumer>
  );
}

function Greeting_1() {
  // 3. 훅을 이용하여 간편하게 UserContext의 username의 값을 가져와 사용할 수 있다.
  const username = useContext(UserContext); // A. Use to Hook !
  const theme = useContext(ThemeContext);
  return (
    <p
      style={{ color: theme === 'dark' ? 'gray' : 'green' }}
    >{`${username} Hi~!`}</p>
  );
}

export default ContextHook;
