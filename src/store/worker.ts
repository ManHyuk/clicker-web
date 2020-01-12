import {IWorker} from "../types/worker.type";

const ADD_WORKER = 'worker/ADD_WORKER' as const;
const TOGGLE_WORKER = 'worker/ADD_WORKER' as const;
const REMOVE_WORKER = 'worker/REMOVE_WORKER' as const;


export const addWorker = (worker: IWorker) => ({
  type: ADD_WORKER,
  payload: worker
});

type WorkersAction =
  | ReturnType<typeof  addWorker>;


type WorkerState = IWorker[];

const initialState: WorkerState = [
  {
    id: 1,
    image: '🐶',
    name: '댕댕이',
    cost: 1,
    dks: 1
  },
  {
    id: 2,
    image: '👶',
    name: '뽀시래기',
    cost: 2,
    dks: 2
  },
  {
    id: 3,
    image: '🙇',
    name: '급식동생',
    cost: 3,
    dks: 3
  },
];

const worker = (state: WorkerState = initialState, action: WorkersAction) => {
  switch (action.type) {
    case ADD_WORKER:
      const nextId = Math.max(...state.map(worker => worker.id)) + 1;
      const {image, name, cost, dks} = action.payload;
      return state.concat({
        id: nextId,
        image,
        name,
        cost,
        dks
      });
    default :
      return state;
  }
};

export default worker;