import React, {useEffect, useState} from 'react';
import * as Styled from './style';

import rice from '../../static/rice.png';
import useInterval from "../../hooks/uesInterval";
import useCounter from "../../hooks/useCounter";

interface ICoinProps {
}


const Counter: React.FC<ICoinProps> = () => {
  const DELAY: number = 1000;

  const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter();

  const [bonusClickCount, setBonusClickCount] = useState(1);
  const [bonusAutoCount, setBounusAutoCount] = useState(1);

  const clickCounter = () => {
    onIncreaseBy(bonusClickCount)
  };

  useInterval(() => {
    onIncreaseBy(bonusAutoCount)
  }, DELAY);



  return (
    <div onClick={clickCounter}>
      current coin is {count}
      <Styled.Coin >
        <img src={rice} alt="coin"/>
      </Styled.Coin>
    </div>
  )
};


export default Counter;