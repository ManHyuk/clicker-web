import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { increase, decrease, increaseBy, decreaseBy, increaseBonusCountBy } from '../store/counter';

const useCounter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const bonusCount = useSelector((state: RootState) => state.counter.bonusCount);
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

  const onIncreaseBonusCountBy = useCallback(
    (diff: number) => dispatch(increaseBonusCountBy(diff)),
    [dispatch]
  );

  return {
    count,
    bonusCount,
    onIncrease,
    onDecrease,
    onIncreaseBy,
    onDecreaseBy,
    onIncreaseBonusCountBy
  };
};

export default useCounter;