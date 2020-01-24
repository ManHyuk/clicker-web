import React from 'react';
import * as Styled from './style';
import {IWorker} from "../../../types/worker.type";


interface IWorkerProps {
  image: string
  name: string;
  description: string;
  cost: number;
  output: number;
  // onClick: (worker: IWorker) => void;
}

const Worker: React.FC<IWorkerProps> = ({image, name, description, cost, output}) => {
  return (
    <Styled.Worker>
      {image} / {name} / {description} / {cost} / {output}op/s
    </Styled.Worker>
  )
};


export default Worker;
