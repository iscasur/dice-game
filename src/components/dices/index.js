import React, { useState, useRef } from 'react';

import './index.css';

function Dices() {
  const [result, setResult] = useState('');

  const user1 = useRef(null);
  const user2 = useRef(null);
  const resultDice = useRef(null);

  const roll = () => {
    const firstRandomNum = Math.floor(Math.random() * 6);
    const secondRandomNum = Math.floor(Math.random() * 6);

    if (firstRandomNum > secondRandomNum) {
      // console.log(`The winner is user 1 with ${firstRandomNum + 1} points`);
      setResult(`The winner is user 1 with ${firstRandomNum + 1} points`);
    } else if (firstRandomNum < secondRandomNum) {
      // console.log(`The winner is user 2 with ${secondRandomNum + 1} points`);
      setResult(`The winner is user 2 with ${secondRandomNum + 1} points`);
    } else {
      // console.log(`It's a draw!`);
      setResult(`It's a draw!`);
    }
    console.log(firstRandomNum, secondRandomNum);

    user1.current.setAttribute('src', '/images/dice1.svg');
    user2.current.setAttribute('src', '/images/dice2.svg');
  };

  return (
    <>
      <div className='dice-wrapper'>
        <div className='dice-area'>
          <p>User 1</p>
          <img ref={user1} />
        </div>
        <div className='dice-area'>
          <p>User 2</p>
          <img ref={user2} />
        </div>
      </div>
      <p className='result' ref={resultDice}>
        {result}
      </p>
      <button onClick={roll}>Roll the dice</button>
    </>
  );
}

export default Dices;
