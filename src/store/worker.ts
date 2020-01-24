import {IWorker} from "../types/worker.type";

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
    image: '🐶',
    name: '댕댕이',
    description: '서당 개 삼년이면 떡국을 만든다',
    cost: 1,
    dks: 3
  },
  {
    id: 2,
    image: '👶',
    name: '뽀시래기',
    description: '먹고 살라면 일해야지',
    cost: 50,
    dks: 5
  },
  {
    id: 3,
    image: '🙇',
    name: '급식동생',
    description: '세뱃돈을 받고싶다고? 그러면 떡국을 만들어라',
    cost: 70,
    dks: 7
  },
  {
    id: 4,
    image: '🎅',
    name: '산타',
    description: '크리스마스 선물주러 왔다가 못돌아감',
    cost: 100,
    dks: 10
  },

  {
    id: 5,
    image: '👽',
    name: '외계인',
    description: '요즘은 외계인 고문해서 떡국 만든다며?',
    cost: 150,
    dks: 15
  },

];

const worker = (state: WorkerState = initialState, action: WorkersAction) => {
  switch (action.type) {
    case ADD_WORKER:
      const nextId = Math.max(...state.map(worker => worker.id)) + 1;
      const {image, name, description, cost, dks} = action.payload;
      return state.concat({
        id: nextId,
        image,
        name,
        description,
        cost,
        dks
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