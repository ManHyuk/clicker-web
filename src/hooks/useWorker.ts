import {useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../store";



const useWorker = () => {
  const workers = useSelector((state: RootState) => state.worker);

  return {
    workers,
  }
};


export default useWorker;