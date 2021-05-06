import React from 'react';

import './index.css';
import dice1 from '../../images/dice1.svg';

function Dices() {
  /*
  // Generate a random number 1 to 6
  const firstRandomNum = Math.floor(Math.random() * 6) + 1;

  // images/dice1.svg upto images/dice6.svg
  const firstDiceImage = '../../images/dice' + firstRandomNum + '.svg';

  document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);

  // Generate a random number 1 to 6
  const secondRandomNum = Math.floor(Math.random() * 6) + 1;

  // images/dice1.svg upto images/dice6.svg
  const secondDiceImage = '../../images/dice' + secondRandomNum + '.svg';

  document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

  //
  function roll() {
    if (firstRandomNum > secondRandomNum) {
      document.getElementsByClassName('result').innerHTML =
        'The winner is user 1 with ${firstRandomNum} points';
    } else if (firstRandomNum < secondRandomNum) {
      document.getElementsByClassName('result').innerHTML =
        'The winner is user 2 with ${secondRandomNum} points';
    } else {
      document.getElementsByClassName('result').innerHTML = 'It is a draw!';
    }
  }

  roll();
  */

  return (
    <>
      <div className='dice-wrapper'>
        <div className='dice-area'>
          <p>User 1</p>
          <img src={dice1} />
        </div>
        <div className='dice-area'>
          <p>User 2</p>
          <img src={dice1} />
        </div>
      </div>
      <p className='result'>The winner is user X with Y points</p>
      <button>Roll the dice</button>
    </>
  );
}

export default Dices;
