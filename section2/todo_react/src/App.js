import React, { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]); // 비구조화
  const [currentId, setCurrentId] = useState(1);
  const [desc, setDesc] = useState('');
  const [showOdd, setShowOdd] = useState(false);
  function onAdd() {
    const todo = { id: currentId, desc };
    setCurrentId(currentId + 1);
    setTodoList([...todoList, todo]); // 전개 연산자
  }
  function onDelete(e) {
    const id = Number(e.target.dataset.id);
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  }
  function onSaveToServer() {}
  return (
    <div>
      <h3>할 일 목록</h3>
      <ul>
        {todoList
          .filter((_, index) => (showOdd ? index % 2 === 0 : true))
          .map((todo) => (
            <li key={todo.id}>
              <span>{todo.desc}</span>
              <button data-id={todo.id} onClick={onDelete}>
                삭제
              </button>
            </li>
          ))}
      </ul>
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button onClick={onAdd}>추가</button>
      <button onClick={() => setShowOdd(!showOdd)}>홀수 아이템만 보기 on/off</button>
      <button onClick={onSaveToServer}>서버에 저장</button>
    </div>
  );
}

export default App;
