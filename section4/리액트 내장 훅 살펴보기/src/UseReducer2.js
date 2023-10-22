import React, { useReducer } from 'react';

export const ProfileDispatch = React.createContext(null);

// Redux를 사용하면 더 많은 장점이 있다.
// 이번 예제 코드는 별도의 외부라이브러리를 사용하지 않고, react 만으로 활용한 방안
export default function UseReducer2() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <ProfileDispatch.Provider value={dispatch}>
        <SomeComponent />
      </ProfileDispatch.Provider>
    </div>
  );
}

const INITIAL_STATE = { name: 'empty', age: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.name };
    case 'setAge':
      return { ...state, age: action.age };
    default:
      return state;
  }
}
