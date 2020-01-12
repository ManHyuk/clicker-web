import { combineReducers } from 'redux';
import counter from './counter';
import worker from './worker';
import inventory from './inventory';

const rootReducer = combineReducers({
  counter,
  worker,
  inventory
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
