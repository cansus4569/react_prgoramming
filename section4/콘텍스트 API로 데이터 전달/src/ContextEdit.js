import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext({ username: 'unKnown', count: 0 });
const SetUserContext = createContext((value) => {value()});

function ContextEdit() {
  const [user, setUser] = useState({ username: 'cansus', count: 0 });
  return (
    <div>
      <SetUserContext.Provider value={setUser}>
        <UserContext.Provider value={user}>
          <Profile />
        </UserContext.Provider>
      </SetUserContext.Provider>
    </div>
  );
}

const Profile = React.memo(function () {
  console.log('Profile Render');
  return (
    <div>
      <Greeting />
    </div>
  );
});

function Greeting() {
  const setUser = useContext(SetUserContext);
  const { username, count } = useContext(UserContext);
  return (
    <>
      <p>{`${username} hi ~!`}</p>
      <p>{`count : ${count}`}</p>
      <button onClick={() => setUser({ username, count: count + 1 })}>
        Hi
      </button>
    </>
  );
}

export default ContextEdit;
