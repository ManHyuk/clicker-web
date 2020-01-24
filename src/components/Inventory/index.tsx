import React, {useEffect} from 'react';
import useInventory from "../../hooks/useInventory";
import {IWorker} from "../../types/worker.type";
import * as Styled from './style';
import useCounter from "../../hooks/useCounter";
import useInterval from "../../hooks/uesInterval";


interface IInventoryProps {

}

const Inventory: React.FC<IInventoryProps> = () => {


  const {count, onIncreaseBy, onIncreaseBonusCountBy} = useCounter();
  const {hasWorkers} = useInventory();
  const workers: IWorker[] = hasWorkers;

  const calcWorkerBonus = () => {
    return workers.reduce((acc: number, cur: IWorker) => {
      return acc + cur.output
    }, 0);
  };

  useEffect(() => {
    const bonus = calcWorkerBonus();
    console.log('bonuus', bonus);
    onIncreaseBonusCountBy(bonus);
  }, [workers])

  useInterval(() => {
    const bonus = calcWorkerBonus();
    console.log('bonus output', bonus);
    onIncreaseBy(bonus);
  }, 1000);


  return (
    <Styled.Container>
      <div>내 일손들</div>
      {workers && workers.map((worker, idx: number) => {
        return (
          <Styled.Items key={idx}>
            {worker.image}
          </Styled.Items>
        )
      })}
    </Styled.Container>
  )
};


export default Inventory