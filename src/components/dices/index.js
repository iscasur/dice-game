import React, { useState, useRef } from 'react';
import dice1 from '../../images/dice1.svg';
import dice2 from '../../images/dice2.svg';
import dice3 from '../../images/dice3.svg';
import dice4 from '../../images/dice4.svg';
import dice5 from '../../images/dice5.svg';
import dice6 from '../../images/dice6.svg';

import './index.css';

function Dices() {
  const [result, setResult] = useState('Click this button below to start');

  const user1 = useRef(null);
  const user2 = useRef(null);
  const resultDice = useRef(null);

  let diceImages = [
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6,
  ];

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
    console.log(firstRandomNum + 1, secondRandomNum + 1);

    user1.current.setAttribute('src', diceImages[firstRandomNum]);
    user2.current.setAttribute('src', diceImages[secondRandomNum]);
  };

  return (
    <>
      <div className='dice-wrapper'>
        <div className='dice-area'>
          <p>User 1</p>
          <img src={dice1} ref={user1} alt='Dice' />
        </div>
        <div className='dice-area'>
          <p>User 2</p>
          <img src={dice1} ref={user2} alt='Dice' />
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
