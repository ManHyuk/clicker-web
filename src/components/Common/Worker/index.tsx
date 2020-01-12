import React from 'react';
import * as Styled from './style';
import {IWorker} from "../../../types/worker.type";


interface IWorkerProps {
  image: string
  name: string;
  cost: number;
  dks: number;
  // onClick: (worker: IWorker) => void;
}

const Worker: React.FC<IWorkerProps> = ({image, name, cost, dks}) => {
  return (
    <Styled.Worker>
      {image} / {name} / {cost} / {dks}dk/s
    </Styled.Worker>
  )
};


export default Worker;
