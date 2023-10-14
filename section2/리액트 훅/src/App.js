import React, { useState } from 'react';
import UseState1 from './UseState/UseState1.js';
import UseEffect1 from './UseEffect/UseEffect1.js';
import UseEffect2 from './UseEffect/UseEffect2.js';
import UseEffect3 from './UseEffect/UseEffect3.js';
import UseEffect4 from './UseEffect/UseEffect4.js';

function App() {
  const [userId, setUserId] = useState(0);
  const [count, setCount] = useState(0);
  return (
    <div>
      <UseState1 />

      <UseEffect1 />

      <UseEffect2 userId={userId} />
      <button onClick={() => setUserId(userId + 1)}>userId 변경</button>

      {count === 0 && <UseEffect3 />}
      <button onClick={() => setCount(count + 1)}>증가</button>

      <UseEffect4 userId={userId} />
      <button onClick={() => setUserId(userId + 1)}>userId 변경</button>
    </div>
  );
}

export default App;
