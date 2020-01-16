import React, {useEffect} from 'react';
import useInventory from "../../hooks/useInventory";
import {IWorker} from "../../types/worker.type";
import * as Styled from './style';
import useCounter from "../../hooks/useCounter";


interface IInventoryProps {

}

const Inventory: React.FC<IInventoryProps> = () => {

  const {hasWorkers} = useInventory();
  const {count, onIncreaseBy} = useCounter();
  const workers: IWorker[] = hasWorkers;

  const calcWorkerBonus = () => {
    const dks = workers.reduce((acc: number, cur: IWorker) => {
      return acc + cur.dks
    }, 0);
    console.log('dks', dks);
    onIncreaseBy(dks);
  };

  useEffect(() => {
    calcWorkerBonus();
    console.log('asdf');
  }, [hasWorkers]);


  // calcWorkerBonus();
  console.log('hasWorkers', hasWorkers);

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