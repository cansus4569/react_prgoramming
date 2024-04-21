import React, { useState } from 'react';
import MyComponent from './MyComponent';

function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  return (
    <>
      <div>
        <p>실전 리액트</p>
        <button onClick={() => setValue1(value1 + 1)}>value1 증가</button>
        <button onClick={() => setValue2(value2 + 1)}>value2 증가</button>
        <MyComponent value1={value1} value2={value2} />
      </div>
      <div>
        <SelectFruits />
      </div>
    </>
  );
}

function SelectFruits() {
  const [fruits, setFruits] = useState(['apple', 'banana', 'onrange']);
  const [newFruit, setNewFruit] = useState('');
  function addNewFruit() {
    // fruits.push(newFruit);
    // 상태값은 불변 객체로 관리되어야 한다.
    setFruits([...fruits, newFruit]);
    setNewFruit('');
  }
  return (
    <div>
      <Select options={fruits} />
      <input
        type="text"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
      />
      <button onClick={addNewFruit}>추가하기</button>
    </div>
  );
}

const Select = React.memo(({ options }) => (
  <div>
    {options.map((item, index) => (
      <p key={index}>{item}</p>
    ))}
  </div>
));

export default App;
