import React from 'react';
import useInventory from "../../hooks/useInventory";
import {IWorker} from "../../types/worker.type";
import * as Styled from './style';


interface IInventoryProps {

}

const Inventory: React.FC<IInventoryProps> = () => {

  const {hasWorkers} = useInventory();
  const workers: IWorker[] = hasWorkers;

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