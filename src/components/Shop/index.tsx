import React from 'react';
import * as Styled from './style';
import {IWorker} from "../../types/worker.type";
import Worker from "../Common/Worker";
import useWorker from "../../hooks/useWorker";
import useInventory from "../../hooks/useInventory";
import useCounter from '../../hooks/useCounter';

interface IShopProps {

}


const Shop: React.FC<IShopProps> = () => {
    const {workers, onIncreaseWorkerCost} = useWorker();
    const {count, onDecreaseBy} = useCounter();
    const {onAddWorkerToInventory} = useInventory();

    const addWorkerToInventory = (worker: IWorker) => {
      if (worker.cost > count) {
        return;
      }
      onDecreaseBy(worker.cost);
      onAddWorkerToInventory(worker);
      onIncreaseWorkerCost(worker);
    };

    return (
        <Styled.List>
            {workers.map((worker: IWorker, idx: number) => {
                return (
                    <Styled.Item key={`${worker.name}.${idx}`}
                         onClick={() => addWorkerToInventory(worker)}>
                        <Worker
                                image={worker.image}
                                name={worker.name}
                                description={worker.description}
                                cost={worker.cost}
                                output={worker.output}
                        />
                    </Styled.Item>
                )
              })}
        </Styled.List>
    )
};


export default Shop;