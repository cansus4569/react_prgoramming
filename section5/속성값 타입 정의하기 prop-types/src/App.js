import React from 'react';
import User from './User';

function App() {
  return (
    <div>
      <p>React Test</p>
      <User male={true} onChangeTitle={()=>{}} age={110}/>
    </div>
  );
}

export default App;
