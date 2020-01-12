import {useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../store";
import {addWorkerToInventory} from "../store/inventory";


const useInventory = () => {

  const inventory = useSelector((state: RootState) => state.inventory);
  const {workers} = inventory;
  const dispatch = useDispatch();

  const onAddWorkerToInventory = useCallback(
    (worker) => {
      dispatch(addWorkerToInventory(worker))
    }, [dispatch]
  );

  return {
    inventory,
    hasWorkers: workers,
    onAddWorkerToInventory
  }
};

export default useInventory;