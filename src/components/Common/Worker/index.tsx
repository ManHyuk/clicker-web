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
        <>
            <Styled.Icon src={image} />
            <Styled.Content>
                <b>{name}</b> 💰{cost}
                <br /> 월세 {output}원
            </Styled.Content>
        </>
    )
};


export default Worker;
