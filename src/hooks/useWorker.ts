import {useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../store";
import {increaseWorkerCost} from "../store/worker";
import {IWorker} from "../types/worker.type";



const useWorker = () => {

  const dispatch = useDispatch();

  const workers = useSelector((state: RootState) => state.worker);
  const onIncreaseWorkerCost = useCallback(
    (worker: IWorker) => dispatch(increaseWorkerCost(worker))
    , [dispatch]);

  return {
    workers,
    onIncreaseWorkerCost,
  }
};


export default useWorker;