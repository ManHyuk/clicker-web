import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { increase, decrease, increaseBy, decreaseBy } from '../store/counter';

const useCounter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseBy = useCallback(
    (diff: number) => dispatch(increaseBy(diff)),
    [dispatch]
  );
  const onDecreaseBy = useCallback(
    (diff: number) => dispatch(decreaseBy(diff)),
    [dispatch]
  );

  return {
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy,
    onDecreaseBy
  };
};

export default useCounter;