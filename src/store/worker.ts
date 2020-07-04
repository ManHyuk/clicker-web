import {IWorker} from "../types/worker.type";

import bedroom from '../static/bedroom.png';
import home from '../static/home.png';
import mansion from '../static/mansion.png';
import apartment from '../static/apartment.png';
import building from '../static/building.png';

const ADD_WORKER = 'worker/ADD_WORKER' as const;
const TOGGLE_WORKER = 'worker/ADD_WORKER' as const;
const REMOVE_WORKER = 'worker/REMOVE_WORKER' as const;
const INCREASE_WORKER_COST = 'worker/INCREASE_WORKER_COST' as const;



export const addWorker = (worker: IWorker) => ({
  type: ADD_WORKER,
  payload: worker
});

export const increaseWorkerCost = (worker: IWorker) => ({
  type: INCREASE_WORKER_COST,
  payload: worker
});

type WorkersAction =
  | ReturnType<typeof  addWorker>
  | ReturnType<typeof  increaseWorkerCost>;


type WorkerState = IWorker[];

const initialState: WorkerState = [
  {
    id: 1,
    image: bedroom,
    name: '원룸',
    description: '서당 개 삼년이면 떡국을 만든다',
    cost: 1,
    output: 3,
  },
  {
    id: 2,
    image: home,
    name: '집',
    description: '먹고 살라면 일해야지',
    cost: 50,
    output: 50,
  },
  {
    id: 3,
    image: mansion,
    name: '저택',
    description: '세뱃돈을 받고싶다고? 그러면 떡국을 만들어라',
    cost: 70,
    output: 70,
  },
  {
    id: 4,
    image: apartment,
    name: '아파트',
    description: '크리스마스 선물주러 왔다가 못돌아감',
    cost: 100,
    output: 100,
  },

  {
    id: 5,
    image: building,
    name: '빌딩',
    description: '요즘은 외계인 고문해서 떡국 만든다며?',
    cost: 150,
    output: 150,
  },

];

const worker = (state: WorkerState = initialState, action: WorkersAction) => {
  switch (action.type) {
    case ADD_WORKER:
      const nextId = Math.max(...state.map(worker => worker.id)) + 1;
      const {image, name, description, cost, output} = action.payload;
      return state.concat({
        id: nextId,
        image,
        name,
        description,
        cost,
        output
      });

    case INCREASE_WORKER_COST:
      const INCREASE_COST_RATIO: number = 3;
      const id = action.payload.id;
      const targetWorker = state.find(worker => worker.id === id);
      const targetIndex = state.findIndex((worker) => worker.id === id);


      if (targetIndex) {
        const targetWorker = state[targetIndex];
        const oldCost = targetWorker.cost;
        targetWorker.cost = oldCost + Math.floor(targetWorker.cost / INCREASE_COST_RATIO);
        state[targetIndex] = targetWorker;
        console.log('state', state);
        return state;
      }

      // if (targetWorker) {
      //
      //   const oldCost = targetWorker.cost;
      //   targetWorker.cost = oldCost + Math.floor(targetWorker.cost / INCREASE_COST_RATIO);
      //   console.log('adsfad', targetWorker);
      //   return state.concat(
      //     targetWorker
      //   )
      // }

      return state;
    default :
      return state;
  }
};

export default worker;