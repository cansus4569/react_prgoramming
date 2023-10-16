import React, { useEffect, useState } from 'react';
import Header from './component/Header';
import AboveGame from './component/AboveGame';
import Game from './component/Game';
import useLocalStorageNumber from './hook/useLocalStorage';

function App() {
  const [score, setScore] = useState(0);
  // const [bestScore, setBestScore] = useLocalStorageNumber('bestScore', 0);
  const [bestScore, setBestScore] = useLocalStorageNumber('bestScore', window.localStorage.getItem('bestScore'));

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  });
  return (
    <div className="container">
      <Header score={score} bestScore={bestScore} />
      <AboveGame />
      <Game setScore={setScore} />
    </div>
  );
}

export default App;
