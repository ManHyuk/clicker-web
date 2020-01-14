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
    <Styled.Wrapper>
      내 일손들
      {workers && workers.map((worker, idx: number) => {
        return (
          <div key={idx}>
            {worker.image}
          </div>
        )
      })}
    </Styled.Wrapper>
  )
};


export default Inventory