import React from 'react';
import useInventory from "../../hooks/useInventory";
import {IWorker} from "../../types/worker.type";

interface IInventoryProps {

}

const Inventory: React.FC<IInventoryProps> = () => {

  const {hasWorkers} = useInventory();
  const workers: IWorker[] = hasWorkers;

  return (
    <div>
      {workers && workers.map(worker => {
        return (
          <div>
            {worker.image}
          </div>
        )
      })}
      inventor
    </div>
  )
};


export default Inventory