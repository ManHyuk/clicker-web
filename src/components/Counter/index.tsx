import React, {useEffect, useState} from 'react';
import * as Styled from './style';

import rice from '../../static/rice.png';
import useInterval from "../../hooks/uesInterval";
import useCounter from "../../hooks/useCounter";

interface ICoinProps {
}


const Counter: React.FC<ICoinProps> = () => {
  const DELAY: number = 1000;

  const { count, bonusCount, onIncrease, onDecrease, onIncreaseBy } = useCounter();

  const [bonusClickCount, setBonusClickCount] = useState(1);
  const [bonusAutoCount, setBounusAutoCount] = useState(1);

  const clickCounter = () => {
    // onIncreaseBy(bonusClickCount)
    onIncrease();
  };

  useInterval(() => {
    // onIncreaseBy(bonusAutoCount)
    onIncrease()
  }, DELAY);



  return (
    <div onClick={clickCounter}>
      <div>
        current coin is {count}
      </div>
      <div>
        auto increase {bonusCount}/s
      </div>
      
      <Styled.Coin >
        <img src={rice} alt="coin"/>
      </Styled.Coin>
    </div>
  )
};


export default Counter;