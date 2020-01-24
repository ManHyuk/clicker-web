const INCREASE = 'counter/count/INCREASE' as const;
const DECREASE = 'counter/count/DECREASE' as const;
const INCREASE_BY = 'counter/count/INCREASE_BY' as const;
const DECREASE_BY = 'counter/count/DECREASE_BY' as const;

const INCREASE_BONUS_COUNT = 'counter/bonus/INCREASE_BONUS_COUNT' as const;
const DECREASE_BONUS_COUNT = 'counter/bonus/DECREASE_BONUS_COUNT' as const;
const INCREASE_BONUS_COUNT_BY = 'counter/bonus/INCREASE_BONUS_COUNT_BY' as const;
const DECREASE_BONUS_COUNT_BY = 'counter/bonus/DECREASE_BONUS_COUNT_BY' as const;


export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff
});
export const decreaseBy = (diff: number) => ({
  type: DECREASE_BY,
  payload: diff
});

export const increaseBonusCount = () => ({ type: INCREASE_BONUS_COUNT});
export const decreaseBonusCount = () => ({ type: DECREASE_BONUS_COUNT});
export const increaseBonusCountBy = (diff: number) => ({
  type: INCREASE_BONUS_COUNT_BY,
  payload: diff
});

export const decreaseBonusCountBy = (diff: number) => ({
  type: DECREASE_BONUS_COUNT_BY,
  payload: diff
});

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>
  | ReturnType<typeof decreaseBy>
  | ReturnType<typeof increaseBonusCount>
  | ReturnType<typeof decreaseBonusCount>
  | ReturnType<typeof increaseBonusCountBy>
  | ReturnType<typeof decreaseBonusCountBy>;


type CounterState = {
  count: number;
  bonusCount: number;
}

const initialState: CounterState = {
  count: 0,
  bonusCount: 0
};

const counter = (state: CounterState = initialState, action: CounterAction) => {
  switch (action.type) {
    case INCREASE:
      return { 
        ...state,
        count: state.count + 1,
       };
    case DECREASE:
      return { 
        ...state,
        count: state.count - 1
       };
    case INCREASE_BY:
      return { 
        ...state,
        count: state.count + action.payload
       };
    case DECREASE_BY:
      return { 
        ...state,
        count: state.count - action.payload
       };
    case INCREASE_BONUS_COUNT_BY:
      return {
        ...state,
        bonusCount: action.payload
      }
    default:
      return {
        ...state
      };
  }
};


export default counter;